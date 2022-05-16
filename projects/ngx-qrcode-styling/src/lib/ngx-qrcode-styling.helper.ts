import QRCodeStyling from "qr-code-styling";
import { Options } from "./ngx-qrcode-styling.options";
import { Templates } from "./ngx-qrcode-styling.templates";

export const switchConfig = (template?: string, config?: Options) => {
    const conf = config && JSON.parse(JSON.stringify(config));
    return template ? { ...Templates(template.toLocaleLowerCase()), ...conf } : { ...conf };
};

export const configOrigin = (config?: Options) => {
    const conf = config && JSON.parse(JSON.stringify(config));
    delete conf.frameOptions;
    delete conf.template;
    return conf;
};

export const drawQrcode = async (config: Options, containerClient: HTMLElement | HTMLVideoElement | HTMLCanvasElement | SVGElement | any) => {

    const container = document.createElement("div");

    const QRCODE_NONE_FRAME = () => {
        if (!config.frameOptions) {
            new QRCodeStyling(config as Options).append(containerClient);
            return true;
        }
        return false;
    }

    const ADD_FRAME_SVG_TO_ELEMENT = () => {
        const http = fetch(`https://raw.githubusercontent.com/id1945/ngx-qrcode-styling/main/svg/${config.frameOptions.style ? config.frameOptions.style : 'style20'}.svg`, { method: 'GET' })
        return new Promise((resolve, reject) => {
            http.then(response => response.text()).then(result => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(result, "image/svg+xml");
                container.appendChild(doc.documentElement);
                resolve(result);
            }).catch(error => {
                console.error(error);
                reject(error);
            });
        });
    }

    const UPDATE_POSITION_QRCODE_ON_FRAME = () => {
        const addsvg = container.querySelector('.addsvg');
        addsvg.setAttribute("transform", `translate(${config.frameOptions.x || 50},${config.frameOptions.y || 50})`);
        return addsvg as HTMLElement;
    }

    const CREATE_QRCODE_INTO_FRAME = (addsvg: HTMLElement) => {
        const QRCreate = new QRCodeStyling(configOrigin({ ...config, type: 'svg' } as Options));
        return QRCreate._svgDrawingPromise.then(() => {
            QRCreate.append(addsvg);
        }).catch(error => console.error(error))
    }

    const QRCODE_TYPE_SVG = () => {
        if (config.type === 'svg') {
            UPDATE_SIZE_SVG();
            containerClient.appendChild(container);
            return true;
        }
        return false;
    }

    const CREATE_CANVAS_WITH_SIZE = () => {
        const canvas = document.createElement('canvas');
        canvas.height = config.frameOptions.height || 300;
        canvas.width = config.frameOptions.width || 300;
        containerClient.appendChild(canvas);
        return canvas;
    }

    const ELEMENT_CONVERT_TO_BASE64 = (s1: HTMLElement) => {
        let b64 = "data:image/svg+xml;base64,";
        const xml = new XMLSerializer().serializeToString(s1);
        return b64 += xml && btoa(unescape(encodeURIComponent(xml)));
    }

    const UPDATE_SIZE_SVG = () => {
        const s1 = container.querySelector(`#${config.frameOptions.style ? config.frameOptions.style : 'style20'}-svg`);
        s1.setAttribute('height', `${config.frameOptions.height || 300}px`);
        s1.setAttribute('width', `${config.frameOptions.width || 300}px`);
        return s1 as HTMLElement;
    }

    const CREATE_IMAGE = () => {
        const img = new Image();
        const ctx = CREATE_CANVAS_WITH_SIZE().getContext("2d");
        img.onload = function () {
            ctx.drawImage(img, 0, 0);
        };
        img.src = ELEMENT_CONVERT_TO_BASE64(UPDATE_SIZE_SVG());
    }

    try {
        if (QRCODE_NONE_FRAME())
            return // Mode qrcode basic
        await ADD_FRAME_SVG_TO_ELEMENT();
        await CREATE_QRCODE_INTO_FRAME(UPDATE_POSITION_QRCODE_ON_FRAME());
        if (QRCODE_TYPE_SVG())
            return // Mode qrcode + frame type svg
        CREATE_IMAGE(); // Mode qrcode + frame type canvas
    } catch (error) {
        console.error(error);
    }
}
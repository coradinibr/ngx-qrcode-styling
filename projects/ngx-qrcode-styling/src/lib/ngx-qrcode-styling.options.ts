export interface UnknownObject {
    [key: string]: any;
}
export declare type DotType = "dots" | "rounded" | "classy" | "classy-rounded" | "square" | "extra-rounded";
export declare type CornerDotType = "dot" | "square";
export declare type CornerSquareType = "dot" | "square" | "extra-rounded";
export declare type FileExtension = "svg" | "png" | "jpeg" | "webp";
export declare type GradientType = "radial" | "linear";
export declare type DrawType = "canvas" | "svg";
export declare type ShapeType = "square" | "circle";
export declare type TemplateType = "classic" | "ocean" | "sunflower" | "luxury" | "bitcoin" | "starbucks" | "angular" | "facebook" | "jungle" | "green" | "sky" | "mosaic" | "coffee" | "vintage" | "stamp" | "chess";
export declare type FrameStyle = "style20" | "style21" | "style22" | "style23" | "style24" | "style25" | "style26" | "style27" | "style28" | "style29" | "style30" | "style31" | "style32" | "style33" | "style34" | "style35" | "style36" | "style37" | "style38" | "style39" | "style40" | "style41" | "style42" | "style43" | "style44" | "style45" | "style46" | "style47" | "style48" | "style49" | "style50" | "style51" | "style52" | "style53" | "style54" | "style55" | "style56" | "style57" | "style58" | "style59" | "style60" | "style61" | "style62" | "style63" | "style64" | "style65" | "style66" | "style67" | "style68" | "style69" | "style70" | "style71" | "style72" | "style73" | "style74" | "style75" | "style76" | "style77" | "style78" | "style79" | "style80";

export declare type Gradient = {
    type: GradientType;
    rotation?: number;
    colorStops: {
        offset: number;
        color: string;
    }[];
};
export interface DotTypes {
    [key: string]: DotType;
}
export interface GradientTypes {
    [key: string]: GradientType;
}
export interface CornerDotTypes {
    [key: string]: CornerDotType;
}
export interface CornerSquareTypes {
    [key: string]: CornerSquareType;
}
export interface DrawTypes {
    [key: string]: DrawType;
}
export interface ShapeTypes {
    [key: string]: ShapeType;
}
export declare type TypeNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40;
export declare type ErrorCorrectionLevel = "L" | "M" | "Q" | "H";
export declare type Mode = "Numeric" | "Alphanumeric" | "Byte" | "Kanji";
export interface QRCode {
    addData(data: string, mode?: Mode): void;
    make(): void;
    getModuleCount(): number;
    isDark(row: number, col: number): boolean;
    createImgTag(cellSize?: number, margin?: number): string;
    createSvgTag(cellSize?: number, margin?: number): string;
    createSvgTag(opts?: {
        cellSize?: number;
        margin?: number;
        scalable?: boolean;
    }): string;
    createDataURL(cellSize?: number, margin?: number): string;
    createTableTag(cellSize?: number, margin?: number): string;
    createASCII(cellSize?: number, margin?: number): string;
    renderTo2dContext(context: CanvasRenderingContext2D, cellSize?: number): void;
}
export declare type Options = {
    type?: DrawType;
    shape?: ShapeType;
    width?: number;
    height?: number;
    margin?: number;
    data?: string;
    image?: string;
    template?: string;
    frameOptions?: {
        style?: string;
        height?: number;
        width?: number;
        x?: number;
        y?: number;
    };
    qrOptions?: {
        typeNumber?: TypeNumber;
        mode?: Mode;
        errorCorrectionLevel?: ErrorCorrectionLevel;
    };
    imageOptions?: {
        hideBackgroundDots?: boolean;
        imageSize?: number;
        crossOrigin?: string;
        margin?: number;
    };
    dotsOptions?: {
        type?: DotType;
        color?: string;
        gradient?: Gradient;
    };
    cornersSquareOptions?: {
        type?: CornerSquareType;
        color?: string;
        gradient?: Gradient;
    };
    cornersDotOptions?: {
        type?: CornerDotType;
        color?: string;
        gradient?: Gradient;
    };
    backgroundOptions?: {
        round?: number;
        color?: string;
        gradient?: Gradient;
    };
};
export declare type FilterFunction = (i: number, j: number) => boolean;
export declare type DownloadOptions = {
    name?: string;
    extension?: FileExtension;
};
export declare type DrawArgs = {
    x: number;
    y: number;
    size: number;
    rotation?: number;
    getNeighbor?: GetNeighbor;
};
export declare type BasicFigureDrawArgs = {
    x: number;
    y: number;
    size: number;
    rotation?: number;
};
export declare type RotateFigureArgs = {
    x: number;
    y: number;
    size: number;
    rotation?: number;
    draw: () => void;
};
export declare type GetNeighbor = (x: number, y: number) => boolean;
export declare type ExtensionFunction = (svg: SVGElement, options: Options) => void;

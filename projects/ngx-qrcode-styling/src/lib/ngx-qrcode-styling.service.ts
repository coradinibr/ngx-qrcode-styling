import { Injectable } from '@angular/core'
import { AsyncSubject } from 'rxjs';

import { Options } from './ngx-qrcode-styling.options'
import { deepUpdate, defaultTemplate, drawQrcode } from './ngx-qrcode-styling.helper'

@Injectable({
  providedIn: 'root'
})
export class NgxQrcodeStylingService {

  /**
   * create
   * @param config 
   * @param container 
   * @returns 
   */
  public create(config: Options, container: HTMLElement | HTMLVideoElement | HTMLCanvasElement | SVGElement | any): AsyncSubject<any> {
    return drawQrcode(defaultTemplate(config), container);
  }

  /**
   * update
   * @param config 
   * @param configUpdate 
   * @param container 
   * @returns 
   */
  public update(config: Options, configUpdate: Options, container: HTMLElement | HTMLVideoElement | HTMLCanvasElement | SVGElement | any): AsyncSubject<any> {
    const subject = new AsyncSubject();
    (async function () {
      const conf = await deepUpdate(defaultTemplate(config), defaultTemplate(configUpdate));
      drawQrcode(conf, container).subscribe(s => {
        subject.next(s);
        subject.complete();
      });
    })();
    return subject;
  }

  /**
   * download image
   * @param fileName eg: demo.png
   * @param container 
   * @param timeout 
   * @returns 
   */
  public download(fileName: string, container: HTMLElement | HTMLVideoElement | HTMLCanvasElement | SVGElement | any, timeout = 100): AsyncSubject<any> {
    const subject = new AsyncSubject();
    setTimeout(() => {
      const canvas = container?.querySelector('canvas')
      const dataURL = canvas?.toDataURL(`image/${fileName?.split('.')?.slice(-1)?.toString()}`);
      const link = document.createElement('a');
      link.download = fileName;
      link.href = dataURL;
      link.click();
      subject.next({ fileName, container });
      subject.complete();
    }, timeout);
    return subject;
  }
}

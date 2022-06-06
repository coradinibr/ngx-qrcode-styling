import { Injectable } from '@angular/core'

import { DownloadOptions, ExtensionFunction, FileExtension, Options } from './ngx-qrcode-styling.options'
import { defaultTemplate, drawQrcode } from './ngx-qrcode-styling.helper'

@Injectable({
  providedIn: 'root'
})
export class NgxQrcodeStylingService {

  /**
   * create
   * @param config 
   */
  public create(config: Options, container: HTMLElement | HTMLVideoElement | HTMLCanvasElement | SVGElement | any): void {
    try {
      drawQrcode(defaultTemplate(config), container)()()();
    } catch (error) {
      console.error('ERROR create ngx-qrcode-styling: ', error);
    }
  }

  /**
   * update
   * @param config 
   */
  public update(config: Options, container: HTMLElement | HTMLVideoElement | HTMLCanvasElement | SVGElement | any): void {
    try {
      drawQrcode(defaultTemplate(config), container)()()();
    } catch (error) {
      console.error('ERROR update ngx-qrcode-styling: ', error);
    }
  }

  /**
   * applyExtension
   * @param config 
   * @param extension 
   */
  public applyExtension(config: Options, container: HTMLElement | HTMLVideoElement | HTMLCanvasElement | SVGElement | any, extension: ExtensionFunction): void {
    try {
      drawQrcode(defaultTemplate(config), container)(extension)()();
    } catch (error) {
      console.error('ERROR applyExtension ngx-qrcode-styling: ', error);
    }
  }

  /**
   * getRawData
   * @param config 
   * @param extension 
   */
  public getRawData(config: Options, container: HTMLElement | HTMLVideoElement | HTMLCanvasElement | SVGElement | any, extension?: FileExtension): void {
    try {
      drawQrcode(defaultTemplate(config), container)()(extension)();
    } catch (error) {
      console.error('ERROR getRawData ngx-qrcode-styling: ', error);
    }
  }

  /**
   * download
   * @param config 
   * @param downloadOptions 
   */
  public download(config: Options, container: HTMLElement | HTMLVideoElement | HTMLCanvasElement | SVGElement | any, downloadOptions?: Partial<DownloadOptions> | string): void {
    try {
      drawQrcode(defaultTemplate(config), container)()()(downloadOptions);
    } catch (error) {
      console.error('ERROR download ngx-qrcode-styling: ', error);
    }
  }

}

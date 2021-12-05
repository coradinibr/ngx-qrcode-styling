import { Injectable } from '@angular/core';
import QRCodeStyling from "qr-code-styling";
import { drawQrcode, switchConfig, configOrigin } from './ngx-qrcode-styling.helper';
import { DownloadOptions, ExtensionFunction, FileExtension, Options } from './ngx-qrcode-styling.options';

@Injectable({
  providedIn: 'root'
})
export class NgxQrcodeStylingService {

  /**
   * create
   * @param config 
   * @param container 
   */
  public create(config: Options, container: HTMLElement | HTMLVideoElement | HTMLCanvasElement | SVGElement | any): void {
    try {
      drawQrcode(switchConfig(config.template, config), container);
    } catch (error) {
      console.error('ERROR create qr-code-styling: ', error);
    }
  }

  /**
   * update
   * @param config 
   * @param options 
   */
  public update(config: Options, options?: Partial<Options>): void {
    try {
      new QRCodeStyling(configOrigin(switchConfig(config.template, config))).update(options);
    } catch (error) {
      console.error('ERROR update qr-code-styling: ', error);
    }
  }

  /**
   * applyExtension
   * @param config 
   * @param extension 
   */
  public applyExtension(config: Options, extension: ExtensionFunction): void {
    try {
      new QRCodeStyling(configOrigin(switchConfig(config.template, config))).applyExtension(extension)
    } catch (error) {
      console.error('ERROR applyExtension qr-code-styling: ', error);
    }
  }

  /**
   * applyExtension
   * @param config 
   * @param extension 
   */
  public deleteExtension(config: Options): void {
    try {
      new QRCodeStyling(configOrigin(switchConfig(config.template, config))).deleteExtension();
    } catch (error) {
      console.error('ERROR deleteExtension qr-code-styling: ', error);
    }
  }

  /**
   * getRawData
   * @param config 
   * @param extension 
   * @returns 
   */
  public getRawData(config: Options, extension?: FileExtension) {
    try {
      new QRCodeStyling(configOrigin(switchConfig(config.template, config))).getRawData(extension);
    } catch (error) {
      console.error('ERROR getRawData qr-code-styling: ', error);
    }
  }

  /**
   * getRawData
   * @param config 
   * @param extension 
   * @returns 
   */
  public download(config: Options, downloadOptions?: Partial<DownloadOptions> | string) {
    try {
      new QRCodeStyling(configOrigin(switchConfig(config.template, config))).download(downloadOptions)
    } catch (error) {
      console.error('ERROR download qr-code-styling: ', error);
    }
  }
}

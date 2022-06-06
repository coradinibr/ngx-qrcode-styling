import { Component, ElementRef, Input, OnInit, ViewEncapsulation } from '@angular/core'

import {
  CornerDotType,
  CornerSquareType,
  DotType,
  DownloadOptions,
  DrawType,
  ErrorCorrectionLevel,
  ExtensionFunction,
  FileExtension,
  Gradient,
  Mode,
  Options,
  ShapeType,
  TemplateType,
  TypeNumber,
} from './ngx-qrcode-styling.options'
import { NgxQrcodeStylingService } from './ngx-qrcode-styling.service'
import { Templates } from './ngx-qrcode-styling.templates'

@Component({
  selector: 'ngx-qrcode-styling',
  template: '<ng-content></ng-content>',
  encapsulation: ViewEncapsulation.None
})
export class NgxQrcodeStylingComponent implements OnInit {

  /**
   * Options
   */
  @Input()
  public config!: Options;

  /**
   * string
   */
  @Input()
  public template: TemplateType = 'classic';

  /**
   * DrawType
   */
  @Input()
  public type!: DrawType;

  /**
   * ShapeType
   */
  @Input()
  public shape!: ShapeType;

  /**
   * number
   */
  @Input()
  public width!: number;

  /**
   * number
   */
  @Input()
  public height!: number;

  /**
   * number
   */
  @Input()
  public margin!: number;

  /**
   * string
   */
  @Input()
  public data!: string;

  /**
   * string
   */
  @Input()
  public image!: string;

  /**
   * object
   */
  @Input()
  public frameOptions!: {
    style?: string;
    height?: number;
    width?: number;
    x?: number;
    y?: number;
  };

  /**
   * object
   */
  @Input()
  qrOptions!: {
    typeNumber?: TypeNumber;
    mode?: Mode;
    errorCorrectionLevel?: ErrorCorrectionLevel;
  };

  /**
   * object
   */
  @Input()
  imageOptions!: {
    hideBackgroundDots?: boolean;
    imageSize?: number;
    crossOrigin?: string;
    margin?: number;
  };

  /**
   * object
   */
  @Input()
  dotsOptions!: {
    type?: DotType;
    color?: string;
    gradient?: Gradient;
  };

  /**
   * object
   */
  @Input()
  cornersSquareOptions!: {
    type?: CornerSquareType;
    color?: string;
    gradient?: Gradient;
  };

  /**
   * object
   */
  @Input()
  cornersDotOptions!: {
    type?: CornerDotType;
    color?: string;
    gradient?: Gradient;
  };

  /**
   * object
   */
  @Input()
  backgroundOptions!: {
    round?: number;
    color?: string;
    gradient?: Gradient;
  };

  constructor(
    private canvas: ElementRef,
    private service: NgxQrcodeStylingService
  ) { }

  ngOnInit(): void {
    if (this.canvas) {

      let config = this.config;

      /**
       * @Input override
       */
      if (this.template)
        config = {
          ...config,
          template: this.template
        };

      if (this.type)
        config = {
          ...config,
          type: this.type
        };

      if (this.shape)
        config = {
          ...config,
          shape: this.shape
        };

      if (this.width)
        config = {
          ...config,
          width: this.width
        };

      if (this.height)
        config = {
          ...config,
          height: this.height
        };

      if (this.margin)
        config = {
          ...config,
          margin: this.margin
        };

      if (this.data)
        config = {
          ...config,
          data: this.data
        };

      if (this.image)
        config = {
          ...config,
          image: this.image
        };

      if (this.frameOptions)
        config = {
          ...config,
          frameOptions: this.frameOptions
        };

      if (this.qrOptions)
        config = {
          ...config,
          qrOptions: this.qrOptions
        };

      if (this.imageOptions)
        config = {
          ...config,
          imageOptions: this.imageOptions
        };

      if (this.dotsOptions)
        config = {
          ...config,
          dotsOptions: this.dotsOptions
        };

      if (this.cornersSquareOptions)
        config = {
          ...config,
          cornersSquareOptions: this.cornersSquareOptions
        };

      if (this.cornersDotOptions)
        config = {
          ...config,
          cornersDotOptions: this.cornersDotOptions
        };

      if (this.backgroundOptions)
        config = {
          ...config,
          backgroundOptions: this.backgroundOptions
        };

      /**
       * New qrcode
       */
      this.create(config);
    }
  }

  /**
   * create
   * @param config 
   */
  public create(config: Options): void {
    try {
      this.service.drawQrcode(this.defaultTemplate(config), this.canvas.nativeElement)()()();
    } catch (error) {
      console.error('ERROR create ngx-qrcode-styling: ', error);
    }
  }

  /**
   * update
   * @param config 
   */
  public update(config: Options): void {
    try {
      this.service.drawQrcode(this.defaultTemplate(config), this.canvas.nativeElement)()()();
    } catch (error) {
      console.error('ERROR update ngx-qrcode-styling: ', error);
    }
  }

  /**
   * applyExtension
   * @param config 
   * @param extension 
   */
  public applyExtension(config: Options, extension: ExtensionFunction): void {
    try {
      this.service.drawQrcode(this.defaultTemplate(config), this.canvas.nativeElement)(extension)()();
    } catch (error) {
      console.error('ERROR applyExtension ngx-qrcode-styling: ', error);
    }
  }

  /**
   * getRawData
   * @param config 
   * @param extension 
   * @returns 
   */
  public getRawData(config: Options, extension?: FileExtension): void {
    try {
      this.service.drawQrcode(this.defaultTemplate(config), this.canvas.nativeElement)()(extension)();
    } catch (error) {
      console.error('ERROR getRawData ngx-qrcode-styling: ', error);
    }
  }

  /**
   * getRawData
   * @param config 
   * @param extension 
   * @returns 
   */
  public download(config: Options, downloadOptions?: Partial<DownloadOptions> | string): void {
    try {
      this.service.drawQrcode(this.defaultTemplate(config), this.canvas.nativeElement)()()(downloadOptions);
    } catch (error) {
      console.error('ERROR download ngx-qrcode-styling: ', error);
    }
  }

  /**
   * defaultTemplate
   * @param config 
   * @returns 
   */
  private defaultTemplate(config?: Options): Options {
    const deep = config && JSON.parse(JSON.stringify(config));
    return (config && config.template) ? { ...Templates(config.template.toLocaleLowerCase()), ...deep } : deep;
  };
}

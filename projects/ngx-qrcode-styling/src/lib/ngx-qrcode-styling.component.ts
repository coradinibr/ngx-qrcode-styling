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
  FrameStyle,
  Gradient,
  Mode,
  Options,
  ShapeType,
  TemplateType,
  TypeNumber,
} from './ngx-qrcode-styling.options'
import { NgxQrcodeStylingService } from './ngx-qrcode-styling.service'

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
   * TemplateType
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
    style?: FrameStyle;
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
    this.service.create(config, this.canvas.nativeElement);
  }

  /**
   * update
   * @param config 
   */
  public update(config: Options, configUpdate: Options): void {
    this.service.update(config, configUpdate, this.canvas.nativeElement);
  }

  /**
   * applyExtension
   * @param config 
   * @param extension 
   */
  public applyExtension(config: Options, extension: ExtensionFunction): void {
    this.service.applyExtension(config, this.canvas.nativeElement, extension);
  }

  /**
   * getRawData
   * @param config 
   * @param extension 
   */
  public getRawData(config: Options, extension?: FileExtension): void {
    this.service.getRawData(config, this.canvas.nativeElement, extension);
  }

  /**
   * download
   * @param config 
   * @param downloadOptions 
   */
  public download(config: Options, downloadOptions?: Partial<DownloadOptions> | string): void {
    this.service.download(config, this.canvas.nativeElement, downloadOptions);
  }


  /**
   * currentConfig
   */
  get currentConfig(): Options {
    return this.config;
  }
}

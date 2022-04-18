import { Component, ElementRef, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Options, DrawType, ShapeType, TypeNumber, Mode, ErrorCorrectionLevel, DotType, Gradient, CornerSquareType, CornerDotType } from './ngx-qrcode-styling.options';
import { NgxQrcodeStylingService } from './ngx-qrcode-styling.service';
import { switchConfig } from './ngx-qrcode-styling.helper';

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
  public template!: string;

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
    private qrcode: NgxQrcodeStylingService
  ) { }

  ngOnInit(): void {
    if (this.qrcode) {

      let config = switchConfig(this.template, this.config);

      /**
       * @Input override
       */
      if (this.type)
        config.type = this.type;

      if (this.shape)
        config.shape = this.shape;

      if (this.width)
        config.width = this.width;

      if (this.height)
        config.height = this.height;

      if (this.margin)
        config.margin = this.margin;

      if (this.data)
        config.data = this.data;

      if (this.image)
        config.image = this.image;

      if (this.frameOptions)
        config.frameOptions = { ...this.frameOptions };

      if (this.qrOptions)
        config.qrOptions = { ...this.qrOptions };

      if (this.imageOptions)
        config.imageOptions = { ...this.imageOptions };

      if (this.dotsOptions)
        config.dotsOptions = { ...this.dotsOptions };

      if (this.cornersSquareOptions)
        config.cornersSquareOptions = { ...this.cornersSquareOptions };

      if (this.cornersDotOptions)
        config.cornersDotOptions = { ...this.cornersDotOptions };

      if (this.backgroundOptions)
        config.backgroundOptions = { ...this.backgroundOptions };

      /**
       * New qrcode
       */
      this.qrcode.create(config, this.canvas.nativeElement);
    }
  }
}

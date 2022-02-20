# ngx-qrcode-styling

This library is built for the purpose generating QR codes with a logo and styling.\
Demo on the [Stackblitz](https://stackblitz.com/edit/angular-ngx-qrcode-styling?file=src/app/app.component.ts) or [Codesandbox](https://codesandbox.io/s/ngx-qrcode-styling-vlvvi?file=/src/app/app.component.ts)\
Generating styled QRcodes [Online](https://qr-code-styling.com/)

![Logo](https://raw.githubusercontent.com/id1945/ngx-qrcode-styling/master/ngx-qrcode-styling.png)

![Logo](https://raw.githubusercontent.com/id1945/ngx-qrcode-styling/master/ngx-qrcode-styling-frames.png)

## Installation
Install `ngx-qrcode-styling` from `npm`:
```bash
npm install ngx-qrcode-styling --save
```

Add wanted package to NgModule imports:
```typescript
import { NgxQrcodeStylingModule } from 'ngx-qrcode-styling';

@NgModule({
    imports: [
        NgxQrcodeStylingModule,
    ]
})
```

Add component to your page:
```typescript
import { Options } from 'ngx-qrcode-styling';

export class AppComponent {
  public config: Options = {
    width: 300,
    height: 300,
    data: "https://www.facebook.com/",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
    margin: 5,
    dotsOptions: {
      color: "#1977f3",
      type: "dots"
    },
    backgroundOptions: {
      color: "#ffffff",
    },
    imageOptions: {
      crossOrigin: "anonymous",
      margin: 0
    }
  };
}
```

```html
<ngx-qrcode-styling [config]="config"></ngx-qrcode-styling>
```
Or
```html
<ngx-qrcode-styling 
  [config]="config" 
  [type]="'canvas'"
  [shape]="'square'"
  [width]="200"
  [height]="200"
  [margin]="5"
  [data]="'Angular QRCode'"
  [image]="'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg'">
</ngx-qrcode-styling>
```
Or
```html
<div #canvas></div>
```
```typescript
import { NgxQrcodeStylingService, Options } from 'ngx-qrcode-styling';

export class AppComponent implements AfterViewInit {
    @ViewChild("canvas", { static: false }) canvas: ElementRef;
    public config: Options = {...};
    
    constructor(private qrcode: NgxQrcodeStylingService) {}

    ngAfterViewInit(): void {
        // Create QRCode by Service and ElementRef 
        this.qrcode.create(this.config, this.canvas.nativeElement)
    }
}
```
Or 
```html
<div id="canvas"></div>
```
```typescript
import { NgxQrcodeStylingService, Options } from 'ngx-qrcode-styling';

export class AppComponent implements AfterViewInit {
    public config: Options = {...};
    
    constructor(private qrcode: NgxQrcodeStylingService) {}
   
    ngAfterViewInit(): void {
        // Create QRCode by Service and HTMLElement 
        this.qrcode.create(this.config, document.getElementById('canvas'))
    }
}
```

### Using a template

```typescript
import { Options } from 'ngx-qrcode-styling';

export class AppComponent {
    public config: Options = {
        template: 'bitcoin',
        ...
    }
}
```
Or
```html
<ngx-qrcode-styling [template]="'bitcoin'" [data]="'ngx-qrcode-styling'"></ngx-qrcode-styling>
```
### Using a frame
```typescript
import { Options } from 'ngx-qrcode-styling';

export class AppComponent {
    public config: Options = {
        frameOptions: {
              style: 'style36',
              width: 300,
              height: 300,
              x: 50,
              y: 50
        }
        ...
    }
}
```
Or
```html
<ngx-qrcode-styling
  [template]="'bitcoin'"
  [data]="'ngx-qrcode-styling'"
  [width]="280"
  [height]="280"
  [image]="'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/60px-BTC_Logo.svg.png'"
  [frameOptions]="{style: 'style36', height: 300, width: 300, x: 60, y: 60}">
</ngx-qrcode-styling>
```
### API Documentation

```typescript
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
```

Property               |Type                     |Default Value|Description
-----------------------|-------------------------|-----------|-----------------------------------------------------
type                   |string (`canvas`, `svg`)|`'canvas'`   |The type of the element that will be rendered
shape                  |string (`square`, `circle`)|`'square'`      |The type of the element that will be rendered
width                  |number                  |`300`      |Size of canvas
height                 |number                  |`300`      |Size of canvas
margin                 |number                  |`0`        |Margin around canvas
data                   |string                  |           |The date will be encoded to the QR code
image                  |string                  |           |The image will be copied to the center of the QR code
template               |string (`classic`, `ocean`, `sunflower`, `luxury`, `bitcoin`, `starbucks`, `angular`, `facebook`, `jungle`, `green`, `sky`, `mosaic`, `coffee`, `vintage`, `stamp`, `chess`)           | `'classic'`     | The design of the element that will be rendered
frameOptions              |object                   |               |Options will be passed to `qrcode-generator` lib
qrOptions              |object                   |           |Options will be passed to `qrcode-generator` lib
imageOptions           |object                   |           |Specific image options, details see below
dotsOptions            |object                   |           |Dots styling options
cornersSquareOptions   |object                   |           |Square in the corners styling options
cornersDotOptionsHelper|object                   |           |Dots in the corners styling options
backgroundOptions      |object                   |           |QR background styling options

`frameOptions`

Property            |Type                                              |Default Value
--------------------|--------------------------------------------------|-------------
style               |string(`style20`, `style21`, `style22`, `style23`, `style24`, `style25`, `style26`, `style27`, `style28`, `style29`, `style30`, `style31`, `style32`, `style33`, `style34`, `style35`, `style36`, `style37`, `style38`, `style39`, `style40`, `style41`, `style42`, `style43`, `style44`, `style45`, `style46`, `style47`, `style48`, `style49`, `style50`, `style51`, `style52`, `style53`, `style54`, `style55`, `style56`, `style57`, `style58`, `style59`, `style60`, `style61`, `style62`, `style63`, `style64`, `style65`, `style66`, `style67`, `style68`, `style69`, `style70`, `style71`, `style72`, `style73`, `style74`, `style75`, `style76`, `style77`, `style78`, `style79`, `style80`)                                  |`'style20'`
width               |number(`0 - max`)                                 |`300`
height              |number(`0 - max`)                                 |`300`
x                   |number(`0 - max`)                                 |`50`
y                   |number(`0 - max`)                                 |`50`

`qrOptions`

Property            |Type                                              |Default Value
--------------------|--------------------------------------------------|-------------
typeNumber          |number (`0 - 40`)                                 |`0`
mode                |string (`'Numeric' 'Alphanumeric' 'Byte' 'Kanji'`)|
errorCorrectionLevel|string (`'L' 'M' 'Q' 'H'`)                        |`'Q'`

`imageOptions`

Property          |Type                                   |Default Value|Description
------------------|---------------------------------------|-------------|------------------------------------------------------------------------------
hideBackgroundDots|boolean                                |`true`       |Hide all dots covered by the image
imageSize         |number                                 |`0.4`        |Coefficient of the image size. Not recommended to use ove 0.5. Lower is better
margin            |number                                 |`0`          |Margin of the image in px
crossOrigin       |string(`'anonymous' 'use-credentials'`)|             |Set "anonymous" if you want to download QR code from other origins.

`dotsOptions`

Property|Type                                                                          |Default Value|Description
--------|------------------------------------------------------------------------------|-------------|-------------------
color   |string                                                                        |`'#000'`     |Color of QR dots
gradient|object                                                                        |             |Gradient of QR dots
type    |string (`'rounded' 'dots' 'classy' 'classy-rounded' 'square' 'extra-rounded'`)|`'square'`   |Style of QR dots

`backgroundOptions`

Property|Type  |Default Value
--------|------|-------------
color   |string|`'#fff'`
gradient|object|

`cornersSquareOptions`

Property|Type                                     |Default Value|Description
--------|-----------------------------------------|-------------|-----------------
color   |string                                   |             |Color of Corners Square
gradient|object                                   |             |Gradient of Corners Square
type    |string (`'dot' 'square' 'extra-rounded'`)|             |Style of Corners Square

`cornersDotOptions`

Property|Type                     |Default Value|Description
--------|-------------------------|-------------|-----------------
color   |string                   |             |Color of Corners Dot
gradient|object                   |             |Gradient of Corners Dot
type    |string (`'dot' 'square'`)|             |Style of Corners Dot

##### Gradient 

`dotsOptions.gradient`

`backgroundOptions.gradient`

`cornersSquareOptions.gradient`

`cornersDotOptions.gradient`

Property  |Type                        |Default Value|Description
----------|----------------------------|-------------|---------------------------------------------------------
type      |string (`'linear' 'radial'`)|"linear"     |Type of gradient spread
rotation  |number                      |0            |Rotation of gradient in radians (Math.PI === 180 degrees)
colorStops|array of objects            |             |Gradient colors. Example `[{ offset: 0, color: 'blue' }, {  offset: 1, color: 'red' }]`

##### Gradient colorStops 

`dotsOptions.gradient.colorStops[]`

`backgroundOptions.gradient.colorStops[]`

`cornersSquareOptions.gradient.colorStops[]`

`cornersDotOptions.gradient.colorStops[]`

Property|Type            |Default Value|Description
--------|----------------|-------------|-----------------------------------
offset  |number (`0 - 1`)|             |Position of color in gradient range
color   |string          |             |Color of stop in gradient range

#### QRCodeStyling methods
`NgxQrcodeStylingService.create(config, container) => void`

Param    |Type       |Description
---------|-----------|-----------
container|DOM element|This container will be used for appending of the QR code

`NgxQrcodeStylingService.getRawData(config, extension) => Promise<Blob>`

Param    |Type                                |Default Value|Description
---------|------------------------------------|-------------|------------
extension|string (`'png' 'jpeg' 'webp' 'svg'`)|`'png'`      |Blob type

`NgxQrcodeStylingService.update(config, options) => void`

Param  |Type  |Description
-------|------|--------------------------------------
options|object|The same options as for initialization

`NgxQrcodeStylingService.download(config, downloadOptions) => Promise<void>`

Param          |Type  |Description
---------------|------|------------
downloadOptions|object|Options with extension and name of file (not required)

`downloadOptions` 

Property |Type                                |Default Value|Description
---------|------------------------------------|-------------|-----------------------------------------------------
name     |string                              |`'qr'`       |Name of the downloaded file
extension|string (`'png' 'jpeg' 'webp' 'svg'`)|`'png'`      |File extension

## Support versions >= Angular 8

\
Author: `DaiDH`, Tel: `0845882882`

### License

[MIT License](https://github.com/id1945/ngx-qrcode-styling/blob/master/LICENSE). Copyright (c) 2021 DaiDH
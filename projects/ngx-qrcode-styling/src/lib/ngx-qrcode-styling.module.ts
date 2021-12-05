import { NgModule } from '@angular/core';
import { NgxQrcodeStylingComponent } from './ngx-qrcode-styling.component';
import { NgxQrcodeStylingService } from './ngx-qrcode-styling.service';

@NgModule({
  declarations: [
    NgxQrcodeStylingComponent
  ],
  exports: [
    NgxQrcodeStylingComponent
  ],
  providers: [
    NgxQrcodeStylingService
  ]
})
export class NgxQrcodeStylingModule { }

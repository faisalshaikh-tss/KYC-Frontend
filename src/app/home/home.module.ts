import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FormsModule } from '@angular/forms';
import { WebcamModule } from 'ngx-webcam';
import { HttpClientModule } from '@angular/common/http';
import { ConfigComponent } from './config/config.component';
import { SuccessPageComponent } from './success-page/success-page.component';


@NgModule({
  declarations: [
    ConfigComponent,
          SuccessPageComponent
  ],
  imports: [
    CommonModule, 
    FormsModule, 
    WebcamModule,
    HttpClientModule
  ]
})
export class HomeModule { }

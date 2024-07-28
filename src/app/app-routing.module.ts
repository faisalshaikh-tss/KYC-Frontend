import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileUploadComponent } from './home/file-upload/file-upload.component';
import { ConfigComponent } from './home/config/config.component';
import { SuccessPageComponent } from './home/success-page/success-page.component';

const routes: Routes = [
  {path:'file-upload',component:FileUploadComponent}, 
  {path:'config',component:ConfigComponent}, 
  {path:'success-page',component:SuccessPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

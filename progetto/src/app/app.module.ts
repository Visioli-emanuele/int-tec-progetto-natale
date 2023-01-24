import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DownloadComponent } from './download/download.component';
import { UploadComponent } from './upload/upload.component';
import { TransizioneComponent } from './transizione/transizione.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DownloadComponent,
    UploadComponent,
    TransizioneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

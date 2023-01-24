import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DownloadComponent } from './download/download.component';
import { UploadComponent } from './upload/upload.component';
import { TransizioneComponent } from './transizione/transizione.component';

const routes: Routes = [ 
  { path: 'login', component: LoginComponent },
  { path: 'download', component: DownloadComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'transizione', component: TransizioneComponent },
  { path: '',   redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

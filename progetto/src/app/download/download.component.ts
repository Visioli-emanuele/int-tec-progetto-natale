import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import {verifica} from '../../../src/verifica';
@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent {
  verifica: Observable<verifica[]> = undefined!;
  title = 'first-routed-app';
  obsTrack: Observable<Object> | undefined;
  results: any;
  submit(query: HTMLInputElement): void {}
}

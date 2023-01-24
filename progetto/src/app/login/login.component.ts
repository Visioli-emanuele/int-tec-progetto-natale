import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  query: string | undefined;
  title = 'first-routed-app';
  obsTrack: Observable<Object> | undefined;
  results: any;
  submit(query: HTMLInputElement): void {}
}

import { Component } from '@angular/core';
import {UserApi} from './user-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UserstoGithub';
  UserApi = [
    new UserApi(18,60,10),
    new UserApi(20,31,49),
    new UserApi(30,60,50),
   
]
}


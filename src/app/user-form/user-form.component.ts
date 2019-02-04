import { Component, OnInit } from '@angular/core';
import {UserApi} from '../user-api';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit{


  newUserApi=new UserApi(0,0,0);
 


  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'


import {UserApi} from '../user-api';
import {environment} from '../../environments/environment'
import {UserRequestService} from '../user-http/user-request.service'


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  providers:[UserRequestService], 
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit{



  user:UserApi;
  Search="";

  Submit(){
    this.userService.userRequest(this.Search);
   //console.log(this.Search);
}

  constructor(private userService:UserRequestService) {
   
   
   }

  ngOnInit() {

  this.userService.userRequest("Submit");
  this.user=this.userService.user

}

}
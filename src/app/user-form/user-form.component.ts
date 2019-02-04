import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {UserApi} from '../user-api';
import {environment} from '../../environments/environment'
//import {UserRequestService} from '../user-http/user-request.service'


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit{


  newUserApi=new UserApi(0,0,0);
  user:UserApi;


  constructor(private http:HttpClient) { }

  ngOnInit() {

    interface ApiResponse{
      Repository:number;
      followers:number;
      following:number;
      
  }
    this.http.get<ApiResponse>("https://api.github.com/users/daneden?access_token"+ environment.apiKey ).subscribe(data=>{
      this.user= new UserApi(data.Repository,data.followers,data.following)
   
    },err=>{
      this.user= new UserApi(0,0,0)
      console.log("Error occured ")
  })
}

}
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


  newUserApi=new UserApi("",0,0,"","");
  user:UserApi;


  constructor(private http:HttpClient) { }

  ngOnInit() {

    interface ApiResponse{
      avatar_url:string;
      name:string;
      followers:number;
      following:number;
      location:string;
      
      
  }
    this.http.get<ApiResponse>("https://api.github.com/users/daneden?access_token"+ environment.apiKey ).subscribe(data=>{
      this.user= new UserApi(data.name,data.followers,data.following,data.location,data.avatar_url)
   
    },err=>{
      this.user= new UserApi("Daniel Eden",0,0,"San Francisco, CA","https://avatars3.githubusercontent.com/u/439365?v=4")
      console.log("Error occured ")
  })
}

}
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {environment} from '../../environments/environment'
import {UserApi} from '../user-api';

@Injectable({
  providedIn: 'root'
})
export class UserRequestService {
  user:UserApi;
 

  constructor(private http:HttpClient) {
    this.user=new UserApi("",0,0,0,"","","");
   }
  

userRequest(submit){

  var userInput =submit;


interface ApiResponse{
  avatar_url:string;
  name:string;
  public_repos:number;
  followers:number;
  following:number;
  location:string;
  html_url:string;

      
}
let promise =new Promise((resolve,reject)=>{
  this.http.get<ApiResponse>('https://api.github.com/users/'+  userInput + '?access_token=' +environment.apiKey).toPromise().then(response=>{
           
  this.user.avatar_url=response.avatar_url
  this.user.name=response.name
  this.user.public_repos=response.public_repos
  this.user.followers=response.followers
  this.user.following=response.following
  this.user.location=response.location
  this.user.html_url=response.html_url
       
          
       
  resolve()
},
  error=>{
    this.user.avatar_url=""
    this.user.name="EspeIgira"
    this.user.public_repos=0
    this.user.followers=0
    this.user.following=0
    this.user.location=""
    this.user.html_url=""
    reject(error)
  }
)
})

return promise
}
}


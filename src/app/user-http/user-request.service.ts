import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {environment} from '../../environments/environment'
import {UserApi} from '../user-api';

@Injectable({
  providedIn: 'root'
})
export class UserRequestService {

//   user:UserApi;

//   constructor(private http:HttpClient) {
//     this.user=new UserApi(0,0,0);
//    }
// }
// interface ApiResponse{
//   Repository:number;
//   followers:number;
//   following:number;
  
// }
// let promise =new Promise((resolve,reject)=>{
//   this.http.get<ApiResponse>(environment.apiKey).toPromise().then(response=>{
      
//       this.user.Repository=response.Repository
//       this.user.followers=response.followers
//       this.user.following=response.following

//       resolve()
//   },
//   error=>{
//           this.user.Repository=0
//           this.user.followers=0
//           this.user.following=0
//           reject(error)
//       }
//   )
// })

// return promise
// }
}
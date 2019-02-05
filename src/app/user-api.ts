export class UserApi {
    
    constructor(public name:string, 
        public public_repos:number,
        public followers:number, 
        public following:number, 
        public location:string,
        public avatar_url:string, 
        public html_url:string){}
}

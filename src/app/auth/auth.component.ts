import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ItemlistService } from './authservice'
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  login:boolean=true;
  signup:boolean=false;
  isloged:boolean=false;
  mailid:any;
  pass:any;
  username:any;
  err:any;
  spinner:any;
  erroroccured:boolean=false;
  type:any;
  rest:boolean=true;
  r:boolean=true;
  offer:boolean=false;

  constructor(private auth:ItemlistService,private route:ActivatedRoute,private router:Router) { }
  Login(f:NgForm,data:{mailid:string,pass:string}){
    this.spinner=true;
    this.mailid=data.mailid;
    this.pass=data.pass;
    this.auth.signin(this.mailid,this.pass).subscribe(da=>{
      console.log(da);
      this.offer=true;
      this.router.navigate(['./offer'])
      this.spinner=false;
      },
      errmsg=>{    
      this.spinner=false;
      this.err=errmsg;
    // console.log(this.mailid + this.pass);
    // this.http.post()
    });

    f.reset();
    this.login=!this.login;
  }
  Signup(f:NgForm,data:{mailid:string,pass:string,username:string}){
    this.mailid=data.mailid;
    this.pass=data.pass;
    this.spinner=true;
    this.username=data.username; 
    this.auth.signup(this.mailid,this.pass).subscribe(a=>{
      console.log(a);
      this.spinner=false;
    },
    errmsg=>{
      this.spinner=false;
      this.erroroccured=true;
      this.offer=true;
      this.err=errmsg;
    });
    // console.log(this.mailid + this.pass + this.username);
    f.reset();
    this.signup=!this.signup;
    // this.route.navigate(['/offer']);
  }
 
  Sign(){
    this.signup=!this.signup;
    // this.login=!this.login;
   }
   handleError(){
     this.err=null;
   }
  ngOnInit(): void {
    

  }

}

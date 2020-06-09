import { Component, OnInit } from '@angular/core';
import { ItemlistService } from '../auth/authservice'

@Component({
  selector: 'app-resetmail',
  templateUrl: './resetmail.component.html',
  styleUrls: ['./resetmail.component.css']
})
export class ResetmailComponent implements OnInit {

  constructor(private auth:ItemlistService) { }
  
  ngOnInit(): void {
  }
  mailid:string;
  err:any;
   reset(mailid){

    this.mailid=mailid; console.log(this.mailid)
    this.auth.reset(this.mailid,).subscribe(b=>{console.log(b)}, errmsg=>{
      this.err=errmsg});
   }


}

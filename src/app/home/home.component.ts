import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
// import { checkServerIdentity } from 'tls';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users=[];
  // @Output()open =new EventEmitter();
  name='';
  disabled:boolean=false;
  constructor(private route:Router) { 
  
  }
  a:any;
  Check(){
   this.a=1; 
    alert("Please_Login...!!!");
    this.route.navigate(['/auth']);
    // this.open.emit(this.a);
    // <div class="alert alert-danger">'Please Login'</div>
  }
  ngOnInit(): void {
    
    

  }
}

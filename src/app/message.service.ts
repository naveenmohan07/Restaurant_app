import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  subject=new Subject();
  constructor() { }
  sendmsg(item){
    // console.log(item)
    this.subject.next(item)
  }
  getmsg(){
    return this.subject.asObservable()
  }
}

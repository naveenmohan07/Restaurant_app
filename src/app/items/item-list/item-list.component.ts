import { Component, OnInit, Input } from '@angular/core';
import { ItemserviceService } from 'src/app/service/itemservice.service';
import { Items } from 'src/app/items';
import { MessageService } from 'src/app/message.service'; 
import { from } from 'rxjs';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

 constructor(private msg:MessageService){} 

  @Input() itemslist :Items
 
  ngOnInit(): void {
    // console.log(this.itemslist)
  }
  addtocart(){
    this.msg.sendmsg(this.itemslist);
  }
}
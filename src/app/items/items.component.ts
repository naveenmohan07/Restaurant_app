import { Component, OnInit } from '@angular/core';
import { ItemserviceService } from 'src/app/service/itemservice.service';
import { Items } from '../items';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  itemslist:Items[]=[];
  constructor(private itemservice:ItemserviceService) { }
  
  ngOnInit(): void {
   console.log(this.itemslist=this.itemservice.getitems())
  
  }
}

import { Injectable } from '@angular/core';
import { Items } from 'src/app/items';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ItemserviceService {
  items:Items[]=[
    new Items(1,'Chicken_Biriyani','Good',100,2,"../asserts/offer1.jpg"),
    new Items(2,'Parotta','Good',10,3,"../asserts/offer1.jpg"),
    new Items(3,'Veg_Rice','Good',110,5,"../asserts/offer1.jpg"),
    new Items(4,'Fish_Curry','Good',11,5,"../asserts/offer1.jpg"),

  ]
  constructor() { }
  getitems():Items[] {
    return this.items
  }
}

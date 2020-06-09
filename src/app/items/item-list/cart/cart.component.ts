import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from 'src/app/message.service';
import { Items } from 'src/app/items';
import { generate } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private msg:MessageService,private http:HttpClient) { }
  cartitem=[ ];
  total:number=0;
  qty:number;
  billno:any;
  amount:number=0;
  last:any;
  cart=[];
  cartit=[];
  sqty:number=0;
  add(id,itemprice){
    this.cart.every(item=>{
      if(id === item.id){
        this.cart.pop();
        this.qty++;
        this.total=this.qty*itemprice;
      }
    });    this.cart.push({id:id,qty:this.qty,itemprice:this.total});
    this.cart.every(item=>{
      if(id != item.id){
        this.qty;
        this.qty++;
        this.total=this.qty*itemprice;
        this.cart.pop();
      }
    });    
    this.cart.every(it=>{
      this.amount= itemprice+this.amount;console.log("Amount",this.amount)
    });this.cartit.push({id:id,qty:this.qty,itemprice:this.total,amount:this.amount});
  }
  sub(id,itemprice){
    console.log(id)
    this.cartit.every(cid=>{
      if(cid !== id){
          this.amount -= itemprice
          console.log(this.amount) 
      }
    })
  }
  empty(){
    this.amount=0
    this.cartitem=[]
  }
  pay(){
    let url = 'https://example-3c74e.firebaseio.com/bill.json'
    this.http.post(url,this.cartitem).subscribe((data)=>{
    })
    alert("Bill_no:"+this.billno+"/nThanks for shopping with US...!!!")
  }
ngOnInit(): void {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < 5; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  } 
  this.billno=result;
  this.msg.getmsg().subscribe((itemlist:Items)=>{
    this.cartitem.push({
      itemid:itemlist.id,
      itemname:itemlist.name,
      price:itemlist.price,
      total:this.total,
      qty:this.qty,
    })
    this.additemtocart(itemlist);
  })
}
additemtocart(itemlist){
  let itemsExists=0;
  for(let i in this.cartitem){
      if(this.cartitem[i].itemid === itemlist.id){
        // alert("Already in cart")
        itemsExists=1;
        break;
      }
    }
      if(itemsExists!=1){
      this.cartitem.push({
        itemid:itemlist.id,
        itemname:itemlist.name,
        itemprice:itemlist.price,
        qty:this.qty,
        total:this.total
      })
    }
  }    
}
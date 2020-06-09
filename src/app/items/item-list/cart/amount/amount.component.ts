import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-amount',
  templateUrl: './amount.component.html',
  styleUrls: ['./amount.component.css']
})
export class AmountComponent implements OnInit {
  amount:any;
  constructor() { }
  @Input() carttot:any;
  ngOnInit(): void {
  }

}

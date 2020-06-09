import { Component, OnInit } from '@angular/core';
// import { AgmCoreModule } from '@agm/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }
  lat: number = 11.3410;
  lng: number = 77.7172;

  ngOnInit(): void {
  }
}

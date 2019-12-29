import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  cardData1 = [];
  fillColor1 = '';

  constructor() { }

  ngOnInit() {
    this.cardData1 = [12, 12, 14, 15, 18, 10, 4];
    this.fillColor1 = 'yellow';
  }

}

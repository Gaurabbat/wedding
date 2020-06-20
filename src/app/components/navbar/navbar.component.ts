import { Component, OnInit } from '@angular/core';
import * as moment from 'moment'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  currentDateTime:String;
  ngOnInit() {
    this.currentDateTime = moment().format('DD-MMM-YYYY HH:mm A'); 
  }

}

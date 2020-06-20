import { Component, OnInit } from '@angular/core';
import * as moment from 'moment'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }
  currentYear: String;

  ngOnInit() {
    this.currentYear = moment().format('YYYY');
  }


}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-storyteller',
  templateUrl: './storyteller.component.html',
  styleUrls: ['./storyteller.component.scss']
})
export class StorytellerComponent implements OnInit {

  constructor() { }

  brideName:string;
  brideDesc:string;
  brideImagePath:string;
  groomName:String;
  groomDesc:String;
  groomImagePath:string;
  announcement:String;
  welComeMessage:string;
  dateAndPlace:string;
  invitationText:string;

  ngOnInit() {
    this.brideName="Asha";
    this.brideDesc="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove";
    this.brideImagePath="/assets/img/bride_1.png";
    this.groomName="Bwala";
    this.groomDesc="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove";
    this.groomImagePath="/assets/img/groom_1.png";
    this.announcement="We Are Getting Married";
    this.welComeMessage="Hello!";
    this.dateAndPlace="November 28th, 2016 New York, USA";
    this.invitationText="We invited you to celebrate our wedding";

  }

}

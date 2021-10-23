import { Component, NgModule, OnInit } from '@angular/core';
import { data } from 'jquery';
import { plans } from 'src/app/modelclasses/plans';
import { RpayapiService } from 'src/app/services/rpayapi.service';
import { Injectable } from "@angular/core";

@Component({
  selector: 'app-airtelplan',
  templateUrl: './airtelplan.component.html',
  styleUrls: ['./airtelplan.component.css']
})
@Injectable()
export class AirtelplanComponent implements OnInit {

  constructor(private _rpayapiservice:RpayapiService) { }

  lstairtelplans:plans[];

  lstairtelPP:plans[];
  lstairtelTT:plans[];
  lstairtelData:plans[];
  lstairtelRoaming:plans[];


  ngOnInit()
  {
    this._rpayapiservice.getairtelplans()
    .subscribe(
      data=>
      {
        console.log(this.lstairtelplans);
        this.lstairtelplans=data;
      }
    );

    this._rpayapiservice.getairtelPopularPlans()
    .subscribe(
      data=>
      {
        console.log(this.lstairtelPP);
        this.lstairtelPP=data;
      }
    );
    
    this._rpayapiservice.getairtelTalkTime()
    .subscribe(
      data=>
      {
        console.log(this.lstairtelTT);
        this.lstairtelTT=data;
      }
    );

    this._rpayapiservice.getairtelData()
    .subscribe(
      data=>
      {
        console.log(this.lstairtelData);
        this.lstairtelData=data;
      }
    );
    
    this._rpayapiservice.getairtelRoaming()
    .subscribe(
      data=>
      {
        console.log(this.lstairtelRoaming);
        this.lstairtelRoaming=data;
      }
    );

  }
  
  

}

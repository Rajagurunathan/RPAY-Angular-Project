import { Component, NgModule, OnInit } from '@angular/core';
import { data } from 'jquery';
import { plans } from 'src/app/modelclasses/plans';
import { RpayapiService } from 'src/app/services/rpayapi.service';
import { Injectable } from "@angular/core";

@Component({
  selector: 'app-vodaideaplan',
  templateUrl: './vodaideaplan.component.html',
  styleUrls: ['./vodaideaplan.component.css']
})
@Injectable()
export class VodaideaplanComponent implements OnInit {

  constructor(private _rpayapiservice:RpayapiService) { }

  lstviplans:plans[];

  lstviPP:plans[];
  lstviTT:plans[];
  lstviData:plans[];
  lstviRoaming:plans[];

  ngOnInit(): void {
    
    this._rpayapiservice.getviplans()
    .subscribe(
      data=>
      {
        console.log(this.lstviplans);
        this.lstviplans=data;
      }
    );

    this._rpayapiservice.getviPopularPlans()
    .subscribe(
      data=>
      {
        console.log(this.lstviPP);
        this.lstviPP=data;
      }
    );

    this._rpayapiservice.getviTalkTime()
    .subscribe(
      data=>
      {
        console.log(this.lstviTT);
        this.lstviTT=data;
      }
    );

    this._rpayapiservice.getviData()
    .subscribe(
      data=>
      {
        console.log(this.lstviData);
        this.lstviData=data;
      }
    );

    this._rpayapiservice.getviRoaming()
    .subscribe(
      data=>
      {
        console.log(this.lstviRoaming);
        this.lstviRoaming=data;
      }
    );

  }

}

import { Component, NgModule, OnInit } from '@angular/core';
import { data } from 'jquery';
import { plans } from 'src/app/modelclasses/plans';
import { RpayapiService } from 'src/app/services/rpayapi.service';
import { Injectable } from "@angular/core";


@Component({
  selector: 'app-bsnlplan',
  templateUrl: './bsnlplan.component.html',
  styleUrls: ['./bsnlplan.component.css']
})
@Injectable()
export class BsnlplanComponent implements OnInit {

  constructor(private _rpayapiservice:RpayapiService) { }

  lstbsnlplans:plans[];

  lstbsnlPP:plans[];
  lstbsnlTT:plans[];
  lstbsnlData:plans[];
  lstbsnlRoaming:plans[];

  ngOnInit(): void 
  {
    
    this._rpayapiservice.getbsnlplans()
    .subscribe(
      data=>
      {
        console.log(this.lstbsnlplans);
        this.lstbsnlplans=data;
      }
    );

    this._rpayapiservice.getbsnlPopularPlans()
    .subscribe(
      data=>
      {
        console.log(this.lstbsnlPP);
        this.lstbsnlPP=data;
      }
    );

    this._rpayapiservice.getbsnlTalkTime()
    .subscribe(
      data=>
      {
        console.log(this.lstbsnlTT);
        this.lstbsnlTT=data;
      }
    );

    this._rpayapiservice.getbsnlData()
    .subscribe(
      data=>
      {
        console.log(this.lstbsnlData);
        this.lstbsnlData=data;
      }
    );

    this._rpayapiservice.getbsnlRoaming()
    .subscribe(
      data=>
      {
        console.log(this.lstbsnlRoaming);
        this.lstbsnlRoaming=data;
      }
    );



  }

}

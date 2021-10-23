import { Component, NgModule, OnInit } from '@angular/core';
import { data } from 'jquery';
import { plans } from 'src/app/modelclasses/plans';
import { RpayapiService } from 'src/app/services/rpayapi.service';
import { Injectable } from "@angular/core";


@Component({
  selector: 'app-jioplan',
  templateUrl: './jioplan.component.html',
  styleUrls: ['./jioplan.component.css']
})

@Injectable()
export class JioplanComponent implements OnInit {

  constructor(private _rpayapiservice:RpayapiService) { }

  lstjioplans:plans[];

  lstjioPP:plans[];
  lstjioTT:plans[];
  lstjioData:plans[];
  lstjioRoaming:plans[];

  ngOnInit(): void {

    this._rpayapiservice.getjioplans()
    .subscribe(
      data=>
      {
        console.log(this.lstjioplans);
        this.lstjioplans=data;
      }
    );
    
    this._rpayapiservice.getjioPopularPlans()
    .subscribe(
      data=>
      {
        console.log(this.lstjioPP);
        this.lstjioPP=data;
      }
    );

    this._rpayapiservice.getjioTalkTime()
    .subscribe(
      data=>
      {
        console.log(this.lstjioTT);
        this.lstjioTT=data;
      }
    );

    this._rpayapiservice.getjioData()
    .subscribe(
      data=>
      {
        console.log(this.lstjioData);
        this.lstjioData=data;
      }
    );

    this._rpayapiservice.getjioRoaming()
    .subscribe(
      data=>
      {
        console.log(this.lstjioRoaming);
        this.lstjioRoaming=data;
      }
    );



  }

}

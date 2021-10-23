import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule,HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable()
export class RpayapiService {
  constructor(private httpclient:HttpClient) { }

  //--------------------- AIRTEL

  getairtelplans():Observable<any>{
    return this.httpclient.get('https://localhost:44357/api/values/getplansairtel');
  }

  getairtelPopularPlans():Observable<any>{
    return this.httpclient.get('https://localhost:44357/api/values/airtelpp');
  }

  getairtelTalkTime():Observable<any>{
    return this.httpclient.get('https://localhost:44357/api/values/airteltopup');
  }

  getairtelData():Observable<any>{
    return this.httpclient.get('https://localhost:44357/api/values/airtel4gdata');
  }

  getairtelRoaming():Observable<any>{
    return this.httpclient.get('https://localhost:44357/api/values/airtelgbroam');
  }

 //--------------------- BSNL

  getbsnlplans():Observable<any>{
    return this.httpclient.get('https://localhost:44357/api/values/getplansbsnl');
  }

  getbsnlPopularPlans():Observable<any>{
    return this.httpclient.get('https://localhost:44357/api/values/bsnlpp');
  }

  getbsnlTalkTime():Observable<any>{
    return this.httpclient.get('https://localhost:44357/api/values/bsnltopup');
  }

  getbsnlData():Observable<any>{
    return this.httpclient.get('https://localhost:44357/api/values/bsnl4gdata');
  }

  getbsnlRoaming():Observable<any>{
    return this.httpclient.get('https://localhost:44357/api/values/bsnlgbroam');
  }

  //--------------------- JIO

  getjioplans():Observable<any>{
    return this.httpclient.get('https://localhost:44357/api/values/getplansjio');
  }

  getjioPopularPlans():Observable<any>{
    return this.httpclient.get('https://localhost:44357/api/values/jiopp');
  }

  getjioTalkTime():Observable<any>{
    return this.httpclient.get('https://localhost:44357/api/values/jiotopup');
  }

  getjioData():Observable<any>{
    return this.httpclient.get('https://localhost:44357/api/values/jio4gdata');
  }

  getjioRoaming():Observable<any>{
    return this.httpclient.get('https://localhost:44357/api/values/bsnlgbroam');
  }

  //--------------------- VI

  getviplans():Observable<any>{
    return this.httpclient.get('https://localhost:44357/api/values/getplansvi');
  }

  getviPopularPlans():Observable<any>{
    return this.httpclient.get('https://localhost:44357/api/values/vipp');
  }

  getviTalkTime():Observable<any>{
    return this.httpclient.get('https://localhost:44357/api/values/vitopup');
  }

  getviData():Observable<any>{
    return this.httpclient.get('https://localhost:44357/api/values/vi4gdata');
  }

  getviRoaming():Observable<any>{
    return this.httpclient.get('https://localhost:44357/api/values/vigbroam');
  }

  
}

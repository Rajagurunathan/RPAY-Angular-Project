import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable()

export class RpayAPI
{
    constructor(private httpclient: HttpClient)
    {}

    getPlans():Observable<any>
    {
        return this.httpclient.get("https://rpay.mrwhitehost.in/api/values/getPlansairtel");
    }
}
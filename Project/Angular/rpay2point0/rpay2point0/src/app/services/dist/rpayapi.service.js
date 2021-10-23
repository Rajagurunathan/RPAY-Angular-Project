"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RpayapiService = void 0;
var core_1 = require("@angular/core");
var RpayapiService = /** @class */ (function () {
    function RpayapiService(httpclient) {
        this.httpclient = httpclient;
    }
    //--------------------- AIRTEL
    RpayapiService.prototype.getairtelplans = function () {
        return this.httpclient.get('https://localhost:44357/api/values/getplansairtel');
    };
    RpayapiService.prototype.getairtelPopularPlans = function () {
        return this.httpclient.get('https://localhost:44357/api/values/airtelpp');
    };
    RpayapiService.prototype.getairtelTalkTime = function () {
        return this.httpclient.get('https://localhost:44357/api/values/airteltopup');
    };
    RpayapiService.prototype.getairtelData = function () {
        return this.httpclient.get('https://localhost:44357/api/values/airtel4gdata');
    };
    RpayapiService.prototype.getairtelRoaming = function () {
        return this.httpclient.get('https://localhost:44357/api/values/airtelgbroam');
    };
    //--------------------- BSNL
    RpayapiService.prototype.getbsnlplans = function () {
        return this.httpclient.get('https://localhost:44357/api/values/getplansbsnl');
    };
    RpayapiService.prototype.getbsnlPopularPlans = function () {
        return this.httpclient.get('https://localhost:44357/api/values/bsnlpp');
    };
    RpayapiService.prototype.getbsnlTalkTime = function () {
        return this.httpclient.get('https://localhost:44357/api/values/bsnltopup');
    };
    RpayapiService.prototype.getbsnlData = function () {
        return this.httpclient.get('https://localhost:44357/api/values/bsnl4gdata');
    };
    RpayapiService.prototype.getbsnlRoaming = function () {
        return this.httpclient.get('https://localhost:44357/api/values/bsnlgbroam');
    };
    //--------------------- JIO
    RpayapiService.prototype.getjioplans = function () {
        return this.httpclient.get('https://localhost:44357/api/values/getplansjio');
    };
    RpayapiService.prototype.getjioPopularPlans = function () {
        return this.httpclient.get('https://localhost:44357/api/values/jiopp');
    };
    RpayapiService.prototype.getjioTalkTime = function () {
        return this.httpclient.get('https://localhost:44357/api/values/jiotopup');
    };
    RpayapiService.prototype.getjioData = function () {
        return this.httpclient.get('https://localhost:44357/api/values/jio4gdata');
    };
    RpayapiService.prototype.getjioRoaming = function () {
        return this.httpclient.get('https://localhost:44357/api/values/bsnlgbroam');
    };
    //--------------------- VI
    RpayapiService.prototype.getviplans = function () {
        return this.httpclient.get('https://localhost:44357/api/values/getplansvi');
    };
    RpayapiService.prototype.getviPopularPlans = function () {
        return this.httpclient.get('https://localhost:44357/api/values/vipp');
    };
    RpayapiService.prototype.getviTalkTime = function () {
        return this.httpclient.get('https://localhost:44357/api/values/vitopup');
    };
    RpayapiService.prototype.getviData = function () {
        return this.httpclient.get('https://localhost:44357/api/values/vi4gdata');
    };
    RpayapiService.prototype.getviRoaming = function () {
        return this.httpclient.get('https://localhost:44357/api/values/vigbroam');
    };
    RpayapiService = __decorate([
        core_1.Injectable()
    ], RpayapiService);
    return RpayapiService;
}());
exports.RpayapiService = RpayapiService;

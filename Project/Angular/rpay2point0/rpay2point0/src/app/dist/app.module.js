"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var animations_1 = require("@angular/platform-browser/animations");
var header_component_1 = require("./header/header.component");
var home_component_1 = require("./home/home.component");
var plans_component_1 = require("./plans/plans.component");
var airtelplan_component_1 = require("./plans/airtelplan/airtelplan.component");
var jioplan_component_1 = require("./plans/jioplan/jioplan.component");
var bsnlplan_component_1 = require("./plans/bsnlplan/bsnlplan.component");
var vodaideaplan_component_1 = require("./plans/vodaideaplan/vodaideaplan.component");
var footer_component_1 = require("./footer/footer.component");
var http_1 = require("@angular/common/http");
var RpayAPI_services_1 = require("./services/RpayAPI.services");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                home_component_1.HomeComponent,
                plans_component_1.PlansComponent,
                airtelplan_component_1.AirtelplanComponent,
                jioplan_component_1.JioplanComponent,
                bsnlplan_component_1.BsnlplanComponent,
                vodaideaplan_component_1.VodaideaplanComponent,
                footer_component_1.FooterComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                animations_1.BrowserAnimationsModule,
                http_1.HttpClientModule
            ],
            providers: [RpayAPI_services_1.RpayAPI],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .app-background{\n  background: rgba(200,200,200,0.8);\n}\nh1 {\n  padding: 20px;\n}\na{\n  color: white;\n  text-decoration: none;\n  padding-right: 20px;\n}\napp-footer{\n  position: relative;\n  left:0;\n  bottom:0;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import { OrdersComponent } from './components/orders/orders.component';
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'KarolinesCakes';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var ngx_file_drop__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-file-drop */ "./node_modules/ngx-file-drop/esm5/ngx-file-drop.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_orders_orders_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/orders/orders.component */ "./src/app/components/orders/orders.component.ts");
/* harmony import */ var _components_cake_gallery_cake_gallery_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/cake-gallery/cake-gallery.component */ "./src/app/components/cake-gallery/cake-gallery.component.ts");
/* harmony import */ var _routes_routes_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./routes/routes.module */ "./src/app/routes/routes.module.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_img_dialog_img_dialog_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/img-dialog/img-dialog.component */ "./src/app/components/img-dialog/img-dialog.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/nav/nav.component */ "./src/app/components/nav/nav.component.ts");
/* harmony import */ var _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/sign-up/sign-up.component */ "./src/app/components/sign-up/sign-up.component.ts");
/* harmony import */ var _components_account_account_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/account/account.component */ "./src/app/components/account/account.component.ts");
/* harmony import */ var _components_products_products_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/products/products.component */ "./src/app/components/products/products.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_order_edit_order_edit_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/order-edit/order-edit.component */ "./src/app/components/order-edit/order-edit.component.ts");
/* harmony import */ var _components_services_order_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/services/order.service */ "./src/app/components/services/order.service.ts");
/* harmony import */ var _components_newsletter_confirm_newsletter_confirm_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/newsletter-confirm/newsletter-confirm.component */ "./src/app/components/newsletter-confirm/newsletter-confirm.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"],
                _components_orders_orders_component__WEBPACK_IMPORTED_MODULE_20__["OrdersComponent"],
                _components_cake_gallery_cake_gallery_component__WEBPACK_IMPORTED_MODULE_21__["CakeGalleryComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_23__["FooterComponent"],
                _components_img_dialog_img_dialog_component__WEBPACK_IMPORTED_MODULE_24__["ImgDialogComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_25__["LoginComponent"],
                _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_26__["NavComponent"],
                _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_27__["SignUpComponent"],
                _components_account_account_component__WEBPACK_IMPORTED_MODULE_28__["AccountComponent"],
                _components_products_products_component__WEBPACK_IMPORTED_MODULE_29__["ProductsComponent"],
                _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_30__["ContactComponent"],
                _components_order_edit_order_edit_component__WEBPACK_IMPORTED_MODULE_31__["OrderEditComponent"],
                _components_newsletter_confirm_newsletter_confirm_component__WEBPACK_IMPORTED_MODULE_33__["NewsletterConfirmComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                ngx_file_drop__WEBPACK_IMPORTED_MODULE_18__["FileDropModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__["MatSlideToggleModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__["MatRadioModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
                _routes_routes_module__WEBPACK_IMPORTED_MODULE_22__["AppRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"]
            ],
            providers: [
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _components_services_order_service__WEBPACK_IMPORTED_MODULE_32__["OrderService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"]],
            entryComponents: [
                _components_img_dialog_img_dialog_component__WEBPACK_IMPORTED_MODULE_24__["ImgDialogComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_25__["LoginComponent"],
                _components_order_edit_order_edit_component__WEBPACK_IMPORTED_MODULE_31__["OrderEditComponent"],
                _components_newsletter_confirm_newsletter_confirm_component__WEBPACK_IMPORTED_MODULE_33__["NewsletterConfirmComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/account/account.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/account/account.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1, h2, h3, h4 {\r\n  display: block;\r\n  clear: none;\r\n}\r\nh1{\r\n  height: 50px;\r\n}\r\n::ng-deep mat-icon {\r\n  cursor: pointer;\r\n  color: #3f51b5;\r\n}\r\n#bttn-icon{\r\n  color: white;\r\n}\r\n.orders{\r\n  width: 80%;\r\n}\r\n.details {\r\n  font-size: 1.1rem;\r\n  padding-right: 30px;\r\n}\r\n.order-input{\r\n  padding-right: 20px;\r\n}\r\n::ng-deep .name-input {\r\n  width: 300px;\r\n}\r\n::ng-deep .large-input {\r\n  max-width: 300px;\r\n  min-width: 300px;\r\n  padding: 4px 20px 5px 0px ;\r\n}\r\n.info{\r\n  border-bottom: solid 2.5px lightgrey;\r\n  height: 40px;\r\n  width: 90%;\r\n  padding-top: 25px;\r\n}\r\n.info > * {\r\n  float: left;\r\n  font-size: 1.1rem;\r\n}\r\n.card-details {\r\n  font-size: 1.1rem;\r\n  padding: 10px 20px 10px 10px;\r\n}\r\n.card-details2 {\r\n  font-size: 1.1rem;\r\n  padding: 20px 20px 10px 10px;\r\n}\r\n.card-info{\r\n  height: 40px;\r\n  width: 90%;\r\n  padding-top: 5px;\r\n}\r\n.card-info > *{\r\n  float: left;\r\n  font-size: 1.1rem;\r\n}\r\n.card-vert-spacer{\r\n  height: 60px;\r\n  padding-left: 25px;\r\n  width: 100%;\r\n}\r\n.sm-vert-spacer{\r\n  height: 30px;\r\n  width: 100%;\r\n}\r\n.card-icon {\r\n  padding-right: 20px;\r\n}\r\n.icon{\r\n  font-size: 15px;\r\n  padding: 5px;\r\n}\r\n.spacer{\r\n  width: 100px;\r\n  height: 40px;\r\n  margin-right: 30px;\r\n  padding-right: 30px;\r\n  font-weight: 400;\r\n  clear: both;\r\n}\r\n.payment-card{\r\n  width: 100%;\r\n  float: left;\r\n}\r\ntable {\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n  clear: both;\r\n  box-shadow:  0 3px 1px -2px rgba(194, 78, 78, 0.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\r\n  border-radius: 3px;\r\n}\r\nth, td {\r\n  /* border-bottom: 1px solid rgb(160, 151, 150);\r\n  border-top: 1px solid rgb(160, 151, 150); */\r\n}\r\nth{\r\n  font-weight: 400;\r\n  font-size: 0.9rem;\r\n  background: #3f51b5;\r\n  color: #ffffff;\r\n}\r\n.tr-td{\r\n  border-bottom: 2px solid rgb(160, 151, 150);\r\n  border-top: 2px solid rgb(160, 151, 150);\r\n}\r\n.tr-th{\r\n  border: 2px solid rgb(160, 151, 150);\r\n  border-radius: 6px;\r\n  background-color: #3f51b5;\r\n}\r\ntr{\r\n  height: 25px;\r\n  font-size: 0.8rem;\r\n}\r\ntd, th {\r\n  min-width: 20%;\r\n  text-align: left;\r\n  padding: 0px 10px 0px 10px;\r\n}\r\n.td-icon .th-icon{\r\n  min-width: 5%;\r\n  max-width: 20px;\r\n}\r\n::ng-deep mat-card{\r\n  width: 100%;\r\n}\r\n.main-container {\r\n  padding: 25px;\r\n  position: absolute;\r\n  top: 80px;\r\n  /* min-height: 100vh; */\r\n  max-width: calc(60% - 50px);\r\n  min-width: calc(60% - 50px);\r\n  left: 20%;\r\n  box-shadow: inset 0px 0px 10px rgba(0,0,0,0.5);\r\n  background: rgba(160, 151, 150, 0.025);\r\n}\r\n.mat-card[_ngcontent-c6] {\r\n  width: inherit !important;\r\n}\r\n.order-spacer{\r\n  height: 30px;\r\n}\r\n::ng-deep .mat-form-field-wrapper {\r\n  padding: 0px\r\n}\r\na {\r\n  color: white;\r\n  text-decoration: none;\r\n}\r\n.newsletter {\r\n  padding-left: 15px;\r\n}\r\n.edit{\r\n  float: right;\r\n}\r\n.box{\r\n  display: flex;\r\n  flex-flow: row;\r\n}\r\n/***************************************** FOOTER ************************/\r\n.footer-container{\r\n  width: 100%;\r\n  background: #3f51b5;\r\n  margin-top: 10px;\r\n  position: relative;\r\n  bottom: 0;\r\n  left: 0;\r\n}\r\n.newsletter-ft{\r\n  padding-top: 30px;\r\n  float: left;\r\n  padding-left: 30px;\r\n  color: white;\r\n}\r\n.newsletter-section{\r\n  align-content: center;\r\n  vertical-align: middle;\r\n}\r\n.contact-info{\r\n  font-size: 0.8rem;\r\n  height: 175px;\r\n  float: left;\r\n  padding-left: 30px;\r\n}\r\n.phone-email{\r\n  clear: both;\r\n}\r\na {\r\n  float: left;   \r\n  padding: 10px;\r\n  text-decoration: none;\r\n  color: white;\r\n}\r\n.newsletter-header-ft{\r\n  font-size: 1.2rem;\r\n  margin: 0;\r\n}\r\n::ng-deep .mat-form-field-wrapper {\r\n  padding: 0px\r\n}\r\n.FB{\r\n  border: 2px rgba(255, 255, 255, 0.459) solid;\r\n  border-radius: 10px;\r\n}\r\n.SM-icon{\r\n  display: block;\r\n  float: left;\r\n  width:40px;\r\n}\r\n.sign-up-button{\r\n  margin-left: 20px;\r\n  margin-bottom: 0px;\r\n}\r\n.order-input{\r\n  padding-right: 20px;\r\n}\r\n.input-email{\r\n  background: #5770fdd5;\r\n  height: 2rem;\r\n  border: solid 2px #313e86;\r\n  padding-left: 10px;\r\n  border-radius: 8px;\r\n  color: white;\r\n}\r\n.input-label-email{\r\n  color: white;\r\n  border: solid 2px rgba(0,0,0, 0.0);\r\n}"

/***/ }),

/***/ "./src/app/components/account/account.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/account/account.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <h1> Account Details </h1>\r\n  <mat-card _ngcontent-c6 class=\"main-card\">\r\n    <mat-card-content>\r\n\r\n      <div class=\"account\">\r\n        <h2>\r\n          Address\r\n          <mat-icon class=\"icon\" (click)=\"editAddress()\">edit</mat-icon>\r\n        </h2>\r\n        <div *ngIf=\"!addressEdit\">\r\n          <div class=\"details\">\r\n            {{firstName}} {{lastName}}\r\n          </div>\r\n          <div class=\"details\">{{address1}}<span *ngIf=\"address2\">, {{address2}}</span></div>\r\n          <div class=\"details\">{{city}}, {{state}} {{zip}}</div>\r\n        </div>\r\n\r\n        <mat-form-field class=\"order-input name-input\" *ngIf=\"addressEdit\">\r\n          <mat-label>First Name</mat-label>\r\n          <input matInput required [(ngModel)]=\"firstName\">\r\n        </mat-form-field>\r\n        <mat-form-field class=\"order-input name-input\" *ngIf=\"addressEdit\">\r\n          <mat-label>Last Name</mat-label>\r\n          <input matInput required [(ngModel)]=\"lastName\">\r\n        </mat-form-field>\r\n        <div></div>\r\n        <mat-form-field class=\"large-input\" *ngIf=\"addressEdit\">\r\n          <input matInput [(ngModel)]=\"address1\">\r\n          <mat-label>Address Line 1</mat-label>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"large-input\" *ngIf=\"addressEdit\">\r\n          <input matInput [(ngModel)]=\"address2\">\r\n          <mat-label>Address Line 2</mat-label>\r\n        </mat-form-field>\r\n\r\n        <div class=\"city-state-zip\" *ngIf=\"addressEdit\">\r\n          <mat-form-field class=\"order-input\">\r\n            <input matInput [(ngModel)]=\"city\">\r\n            <mat-label>City</mat-label>\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"State\" [(ngModel)]=\"state\">\r\n              <mat-option *ngFor=\"let st of states\" [value]=\"st\">{{st}}</mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <mat-form-field class=\"order-input\">\r\n            <input matInput [(ngModel)]=\"zip\">\r\n            <mat-label>Zip</mat-label>\r\n          </mat-form-field>\r\n          <button mat-raised-button color=\"primary\" (click)=\"submit()\">\r\n            Save\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"shadow\">\r\n          <h2>\r\n            Phone\r\n            <mat-icon class=\"icon\" (click)=\"editPhone()\">edit</mat-icon>\r\n          </h2>\r\n          <div class=\"details\" *ngIf=\"!phoneEdit\">{{phone}}\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"phoneEdit\">\r\n          <mat-form-field class=\"order-input\">\r\n            <input matInput type=\"text\" [(ngModel)]=\"phone\">\r\n            <mat-label>Phone Number</mat-label>\r\n          </mat-form-field>\r\n          <button mat-raised-button color=\"primary\" (click)=\"submit()\">\r\n            Save\r\n          </button>\r\n        </div>\r\n\r\n\r\n        <div class=\"shadow\">\r\n          <h2>\r\n            Email\r\n            <mat-icon class=\"icon\" (click)=\"editEmail()\">edit</mat-icon>\r\n          </h2>\r\n          <div class=\"details\" *ngIf=\"!emailEdit\">{{email}}</div>\r\n        </div>\r\n\r\n        <div class=\"shadow\" *ngIf=\"emailEdit\">\r\n          <mat-form-field class=\"order-input\">\r\n            <input matInput type=\"text\" [(ngModel)]=\"email\">\r\n            <mat-label>Phone Number</mat-label>\r\n          </mat-form-field>\r\n          <button mat-raised-button color=\"primary\" (click)=\"submit()\">\r\n            Save\r\n          </button>\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n\r\n      <div class=\"order-spacer\"></div>\r\n      <div class=\"orders\">\r\n        <div>\r\n          <table>\r\n            <tr class=\"tr-th\">\r\n              <th>Order Date</th>\r\n              <th>Delivery Date</th>\r\n              <th>Order Number</th>\r\n              <th>Price</th>\r\n              <th>Description</th>\r\n              <th>Payment</th>\r\n              <th class=\"th-icon\"></th>\r\n            </tr>\r\n            <tr *ngFor=\"let order of orders; let i = index\" class=\"tr-td\">\r\n              <td>{{order.orderDate}}</td>\r\n              <td>{{order.deliveryDate}}</td>\r\n              <td>{{order.orderNum}}</td>\r\n              <td>{{order.price}}</td>\r\n              <td>{{order.description.substring(0,9)}}...</td>\r\n              <td>{{order.payment}}</td>\r\n              <td class=\"td-icon\">\r\n                <mat-icon *ngIf=\"order.fullfilledDate === 'pending'\" class=\"icon\" (click)=\"openEditOrder(order)\">edit</mat-icon>\r\n                <mat-icon *ngIf=\"order.fullfilledDate !== 'pending'\" class=\"icon\">check</mat-icon>\r\n              </td>\r\n\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n    </mat-card-content>\r\n  </mat-card>\r\n  <div class=\"order-spacer\"></div>\r\n\r\n  <app-footer></app-footer>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/account/account.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/account/account.component.ts ***!
  \*********************************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _order_edit_order_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../order-edit/order-edit.component */ "./src/app/components/order-edit/order-edit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountComponent = /** @class */ (function () {
    function AccountComponent(dialog) {
        this.dialog = dialog;
        this.cancel = false;
        this.addressEdit = false;
        this.phoneEdit = false;
        this.emailEdit = false;
        this.firstName = "Ben";
        this.lastName = "Lascurain";
        this.phone = "(502) 662-5800";
        this.email = "benjay@gmail.com";
        this.address1 = "543 Cakeland Dr";
        this.address2 = "Apt 202";
        this.city = "Louisville";
        this.state = "KY";
        this.zip = "40243";
        this.orderDate = new Date().toLocaleDateString();
        this.deliveryType = 'delivery';
        this.deliveryDate = new Date().toLocaleDateString();
        this.fullfilledDate = 'pending';
        this.orderNum = '12005';
        this.price = "$80.56";
        this.description = "Some cake discription goes here.";
        this.payment = 'pending';
        this.tierCount = '2';
        this.servings = '10" and 6" dbouble stack (serves 40-45)';
        this.flavorCake = 'Italian Cream';
        this.flavorFrosting = 'Raspberry Buttercream';
        this.fillings = 'None';
        this.orders = [
            {
                address1: this.address1,
                address2: this.address2,
                city: this.city,
                state: this.state,
                zip: this.zip,
                orderDate: this.orderDate,
                deliveryDate: this.deliveryDate,
                deliveryType: this.deliveryType,
                fullfilledDate: this.fullfilledDate,
                orderNum: '23456',
                price: this.price,
                description: this.description,
                payment: this.payment,
                tierCount: this.tierCount,
                servings: this.servings,
                flavorCake: this.flavorCake,
                flavorFrosting: this.flavorFrosting,
                fillings: this.fillings
            },
            {
                address1: this.address1,
                address2: this.address2,
                city: this.city,
                state: this.state,
                zip: this.zip,
                orderDate: this.orderDate,
                deliveryDate: this.deliveryDate,
                deliveryType: this.deliveryType,
                fullfilledDate: new Date().toLocaleDateString(),
                orderNum: '02616',
                price: '$120.22',
                description: 'Birthday cake for',
                payment: 'paid',
                tierCount: this.tierCount,
                servings: '10" and 6" dbouble stack (serves 40-45)',
                flavorCake: this.flavorCake,
                flavorFrosting: this.flavorFrosting,
                fillings: this.fillings
            },
            {
                address1: this.address1,
                address2: this.address2,
                city: this.city,
                state: this.state,
                zip: this.zip,
                orderDate: new Date().toLocaleDateString(),
                deliveryDate: new Date('December 17, 2018 03:24:00').toLocaleDateString(),
                deliveryType: this.deliveryType,
                fullfilledDate: this.fullfilledDate,
                orderNum: this.orderNum,
                price: this.price,
                description: this.description,
                payment: this.payment,
                tierCount: this.tierCount,
                servings: this.servings,
                flavorCake: this.flavorCake,
                flavorFrosting: this.flavorFrosting,
                fillings: this.fillings
            }
        ];
        this.states = [
            'KY', 'IN', 'TN', 'OH'
        ];
    }
    AccountComponent.prototype.ngOnInit = function () { };
    AccountComponent.prototype.ngOnDestroy = function () { };
    AccountComponent.prototype.submit = function () {
        this.emailEdit = false;
        this.addressEdit = false;
        this.phoneEdit = false;
    };
    AccountComponent.prototype.editPhone = function () {
        this.phoneEdit = true;
    };
    AccountComponent.prototype.editAddress = function () {
        this.addressEdit = true;
    };
    AccountComponent.prototype.editEmail = function () {
        this.emailEdit = true;
    };
    AccountComponent.prototype.openEditOrder = function (o) {
        var _this = this;
        var dialogRef = this.dialog.open(_order_edit_order_edit_component__WEBPACK_IMPORTED_MODULE_2__["OrderEditComponent"], {
            width: '700px',
            height: '80%',
            data: {
                address1: o.address1,
                address2: o.address2,
                city: o.city,
                state: o.state,
                zip: o.zip,
                deliveryDate: o.deliveryDate,
                deliveryType: o.deliveryType,
            }
        });
        dialogRef.componentInstance.onCancel.subscribe(function (cancel) {
            cancel ? dialogRef.close() : null;
            return;
        });
        dialogRef.componentInstance.onSubmit.subscribe(function (data) {
            console.log("data on account sub");
            console.log(data);
            _this.deliveryDate = data.deliveryDate;
            _this.deliveryType = data.deliveryType;
            return;
        });
    };
    AccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account',
            template: __webpack_require__(/*! ./account.component.html */ "./src/app/components/account/account.component.html"),
            styles: [__webpack_require__(/*! ./account.component.css */ "./src/app/components/account/account.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "./src/app/components/cake-gallery/cake-gallery.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/cake-gallery/cake-gallery.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1, h2, h3, h4{\r\n  clear: both;\r\n}\r\nlabel {\r\n  padding: 10px;\r\n}\r\n.landing-photo{\r\n  width: 100%;\r\n  box-shadow: inset 0px 0px 10px rgba(0,0,0,0.5);\r\n  background: rgba(160, 151, 150, 0.025);\r\n}\r\n.main-container {\r\n  padding: 80px 80px 0px 80px;\r\n  top: 50px;\r\n  min-height: 74vh;\r\n  box-shadow: inset 0px 0px 10px rgba(0,0,0,0.5);  \r\n  background: rgba(160, 151, 150, 0.025);\r\n}\r\n.gallery-header{\r\n  width: 100%;\r\n  align-content: center;\r\n  color: #272727;\r\n  font-size: 3rem;\r\n  text-shadow: 2px 2px #ffffff;\r\n  padding: 20px 10px 10px 20px;\r\n}\r\n.gallery-subheader{\r\n  float: left;\r\n  padding: 20px 10px 10px 20px;\r\n}\r\n.cake-img{\r\n  width: 350px;\r\n  height: 350px;\r\n  margin: 40px;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  border-radius: 7px;\r\n  box-shadow: 1px 4px 20px rgba(0,0,0,0.8);  \r\n}\r\n.col-small{\r\n  width: 20vw;\r\n}\r\n.col-large{\r\n  width: 80vw;\r\n}\r\n.cake-filter{\r\n  float: left;\r\n}\r\n.spacer{\r\n  width: 100%;\r\n}\r\n.sub-header{\r\n  width: 100vw;\r\n  display: block;\r\n}\r\n::ng-deep mat-icon {\r\n  cursor: pointer;\r\n  color: #3f51b5;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/cake-gallery/cake-gallery.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/cake-gallery/cake-gallery.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img class=\"landing-photo\" src=\"D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/000.jpg\">\r\n<div class=\"main-container\">\r\n  <h1 class=\"gallery-header\">Sweet Karoline's Cakes</h1>\r\n  <table>\r\n    <tr>\r\n      <td class=\"col-small\">\r\n        <h2 class=\"gallery-subheader\">Cake Gallery</h2>\r\n      </td>\r\n      <td class=\"col-large\">\r\n        <mat-form-field class=\"cake-filter\">\r\n          <mat-select placeholder=\"Filter Cakes\">\r\n            <mat-option *ngFor=\"let type of cakeTypes\" [value]=\"type\">{{type}}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </td>\r\n    </tr>\r\n  </table>\r\n  <img class=\"cake-img\" src=\"D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/1.png\" (click)=\"enlargeImg('D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/.png1')\"\r\n    alt=\"oops\">\r\n  <img class=\"cake-img\" src=\"D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/2.png\" (click)=\"enlargeImg('D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/2.png')\"\r\n    alt=\"oops\">\r\n  <img class=\"cake-img\" src=\"D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/3.png\" (click)=\"enlargeImg('D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/3.png')\"\r\n    alt=\"oops\">\r\n  <img class=\"cake-img\" src=\"D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/4.png\" (click)=\"enlargeImg('D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/4.png')\"\r\n    alt=\"oops\">\r\n  <img class=\"cake-img\" src=\"D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/5.png\" (click)=\"enlargeImg('D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/5.png')\"\r\n    alt=\"oops\">\r\n  <img class=\"cake-img\" src=\"D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/6.png\" (click)=\"enlargeImg('D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/6.png')\"\r\n    alt=\"oops\">\r\n  <img class=\"cake-img\" src=\"D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/7.png\" (click)=\"enlargeImg('D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/7.png')\"\r\n    alt=\"oops\">\r\n  <img class=\"cake-img\" src=\"D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/8.png\" (click)=\"enlargeImg('D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/8.png')\"\r\n    alt=\"oops\">\r\n  <img class=\"cake-img\" src=\"D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/9.png\" (click)=\"enlargeImg('D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/9.png')\"\r\n    alt=\"oops\">\r\n  <img class=\"cake-img\" src=\"D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/10.png\" (click)=\"enlargeImg('D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/10.png')\"\r\n    alt=\"oops\">\r\n  <img class=\"cake-img\" src=\"D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/11.png\" (click)=\"enlargeImg('D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/11.png')\"\r\n    alt=\"oops\">\r\n  <img class=\"cake-img\" src=\"D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/12.png\" (click)=\"enlargeImg('D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/12.png')\"\r\n    alt=\"oops\">\r\n  <img class=\"cake-img\" src=\"D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/13.png\" (click)=\"enlargeImg('D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/13.png')\"\r\n    alt=\"oops\">\r\n  <img class=\"cake-img\" src=\"D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/14.png\" (click)=\"enlargeImg('D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/14.png')\"\r\n    alt=\"oops\">\r\n  <img class=\"cake-img\" src=\"D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/15.png\" (click)=\"enlargeImg('D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/15.png')\"\r\n    alt=\"oops\">\r\n  <img class=\"cake-img\" src=\"D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/16.png\" (click)=\"enlargeImg('D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/16.png')\"\r\n    alt=\"oops\">\r\n  <img class=\"cake-img\" src=\"D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/17.png\" (click)=\"enlargeImg('D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/.png1')\"\r\n    alt=\"oops\">\r\n  <img class=\"cake-img\" src=\"D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/18.png\" (click)=\"enlargeImg('D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/2.png')\"\r\n    alt=\"oops\">\r\n  <img class=\"cake-img\" src=\"D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/19.png\" (click)=\"enlargeImg('D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/3.png')\"\r\n    alt=\"oops\">\r\n  <img class=\"cake-img\" src=\"D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/20.png\" (click)=\"enlargeImg('D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/4.png')\"\r\n    alt=\"oops\">\r\n  <img class=\"cake-img\" src=\"D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/21.png\" (click)=\"enlargeImg('D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/5.png')\"\r\n    alt=\"oops\">\r\n  <img class=\"cake-img\" src=\"D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/22.png\" (click)=\"enlargeImg('D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/6.png')\"\r\n    alt=\"oops\">\r\n  <img class=\"cake-img\" src=\"D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/23.png\" (click)=\"enlargeImg('D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/7.png')\"\r\n    alt=\"oops\">\r\n  <img class=\"cake-img\" src=\"D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/24.png\" (click)=\"enlargeImg('D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/8.png')\"\r\n    alt=\"oops\">\r\n  <img class=\"cake-img\" src=\"D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/25.png\" (click)=\"enlargeImg('D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/9.png')\"\r\n    alt=\"oops\">\r\n  <img class=\"cake-img\" src=\"D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/26.png\" (click)=\"enlargeImg('D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/10.png')\"\r\n    alt=\"oops\">\r\n  <img class=\"cake-img\" src=\"D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/27.png\" (click)=\"enlargeImg('D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/11.png')\"\r\n    alt=\"oops\">\r\n  <img class=\"cake-img\" src=\"D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/28.png\" (click)=\"enlargeImg('D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/12.png')\"\r\n    alt=\"oops\">\r\n  <img class=\"cake-img\" src=\"D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/29.png\" (click)=\"enlargeImg('D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/13.png')\"\r\n    alt=\"oops\">\r\n  <img class=\"cake-img\" src=\"D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/30.png\" (click)=\"enlargeImg('D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/14.png')\"\r\n    alt=\"oops\">\r\n  <img class=\"cake-img\" src=\"D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/31.png\" (click)=\"enlargeImg('D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/15.png')\"\r\n    alt=\"oops\">\r\n  <img class=\"cake-img\" src=\"D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/32.png\" (click)=\"enlargeImg('D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/16.png')\"\r\n    alt=\"oops\">\r\n  <img class=\"cake-img\" src=\"D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/33.png\" (click)=\"enlargeImg('D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/16.png')\"\r\n    alt=\"oops\">\r\n  <img class=\"cake-img\" src=\"D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/34.png\" (click)=\"enlargeImg('D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/10.png')\"\r\n    alt=\"oops\">\r\n  <img class=\"cake-img\" src=\"D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/35.png\" (click)=\"enlargeImg('D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/11.png')\"\r\n    alt=\"oops\">\r\n  <img class=\"cake-img\" src=\"D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/36.png\" (click)=\"enlargeImg('D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/12.png')\"\r\n    alt=\"oops\">\r\n  <img class=\"cake-img\" src=\"D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/37.png\" (click)=\"enlargeImg('D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/13.png')\"\r\n    alt=\"oops\">\r\n  <img class=\"cake-img\" src=\"D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/38.png\" (click)=\"enlargeImg('D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/14.png')\"\r\n    alt=\"oops\">\r\n  <img class=\"cake-img\" src=\"D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/39.png\" (click)=\"enlargeImg('D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/15.png')\"\r\n    alt=\"oops\">\r\n  <img class=\"cake-img\" src=\"D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/40.png\" (click)=\"enlargeImg('D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/16.png')\"\r\n    alt=\"oops\">\r\n  <img class=\"cake-img\" src=\"D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/41.png\" (click)=\"enlargeImg('D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/16.png')\"\r\n    alt=\"oops\">\r\n  <img class=\"cake-img\" src=\"D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/42.png\" (click)=\"enlargeImg('D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/16.png')\"\r\n    alt=\"oops\">\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/components/cake-gallery/cake-gallery.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/cake-gallery/cake-gallery.component.ts ***!
  \*******************************************************************/
/*! exports provided: CakeGalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CakeGalleryComponent", function() { return CakeGalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _img_dialog_img_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img-dialog/img-dialog.component */ "./src/app/components/img-dialog/img-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CakeGalleryComponent = /** @class */ (function () {
    function CakeGalleryComponent(router, dialog) {
        this.router = router;
        this.dialog = dialog;
        this.assets = '../../../assets';
        this.c = {
            all: "All", basic: "Basic", premium: "Premium", seasonal: "Seasonal", birthday: "Birthday", wedding: "Wedding"
        };
        this.cakes = [
            { url: 'D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/2.png', comments: 'Some comments would go here about how awesome Karoline\'s cakes are', cakeTypes: [] },
            { url: "D:/Iteration3/KarolinesCakes/assets/bee_cupcakes.png", comments: '', cakeTypes: [] },
            { url: "D:/Iteration3/KarolinesCakes/assets/big_flower.png", comments: '', cakeTypes: [] },
            { url: "D:/Iteration3/KarolinesCakes/assets/bunny.png", comments: '', cakeTypes: [] },
            { url: "D:/Iteration3/KarolinesCakes/assets/elsa.png", comments: '', cakeTypes: [] },
            { url: "D:/Iteration3/KarolinesCakes/assets/gift_bag.png", comments: '', cakeTypes: [] },
            { url: "D:/Iteration3/KarolinesCakes/assets/happy_bday.png", comments: '', cakeTypes: [] },
            { url: "D:/Iteration3/KarolinesCakes/assets/pink_swirls.png", comments: '', cakeTypes: [] },
            { url: "D:/Iteration3/KarolinesCakes/assets/Red_White_Minnie.png", comments: '', cakeTypes: [] },
            { url: "D:/Iteration3/KarolinesCakes/assets/shamrocks.png", comments: '', cakeTypes: [] },
            { url: "D:/Iteration3/KarolinesCakes/assets/1.png", comments: '', cakeTypes: [] },
            { url: "D:/Iteration3/KarolinesCakes/assets/2.png", comments: '', cakeTypes: [] },
            { url: "D:/Iteration3/KarolinesCakes/assets/3.png", comments: '', cakeTypes: [] },
            { url: "D:/Iteration3/KarolinesCakes/assets/4.png", comments: '', cakeTypes: [] },
            { url: "D:/Iteration3/KarolinesCakes/assets/5.png", comments: '', cakeTypes: [] },
        ];
        this.cakeTypes = [
            "All", "Basic", "Premium", "Seasonal", "Birthday", "Wedding"
        ];
    }
    CakeGalleryComponent.prototype.ngOnInit = function () { };
    CakeGalleryComponent.prototype.navOrders = function () {
        var link = ['/orders'];
        this.router.navigate([link]);
    };
    CakeGalleryComponent.prototype.openNewDialog = function (cakeUrl) {
        this.openDialog = this.dialog.open(_img_dialog_img_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ImgDialogComponent"], {
            width: '70%',
            height: '80%',
            data: { imgUrl: cakeUrl }
        });
    };
    CakeGalleryComponent.prototype.enlargeImg = function (cakeUrl) {
        console.log("pushing pic", cakeUrl);
        this.openNewDialog(cakeUrl);
    };
    CakeGalleryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cake-gallery',
            template: __webpack_require__(/*! ./cake-gallery.component.html */ "./src/app/components/cake-gallery/cake-gallery.component.html"),
            styles: [__webpack_require__(/*! ./cake-gallery.component.css */ "./src/app/components/cake-gallery/cake-gallery.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], CakeGalleryComponent);
    return CakeGalleryComponent;
}());



/***/ }),

/***/ "./src/app/components/contact/contact.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/contact/contact.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n  padding: 25px;\r\n  position: absolute;\r\n  top: 80px;\r\n  flex: 0 0 calc(80%-80px);\r\n  padding: 0px 40px 0px 40px ;\r\n  min-height: 100vh;\r\n  flex-wrap: wrap;\r\n  box-shadow: inset 0px 0px 10px rgba(0,0,0,0.5);\r\n  background: rgba(160, 151, 150, 0.025);\r\n}\r\n.mat-card[_ngcontent-c6] {\r\n  width: inherit !important;\r\n}\r\na {\r\n  float: left;   \r\n  padding: 10px;\r\n  text-decoration: none;\r\n  color: rgb(37, 0, 170);\r\n  font-size: 1.5rem;\r\n}\r\n.FB{\r\n  border: 2px rgba(255, 255, 255, 0.459) solid;\r\n  border-radius: 10px;\r\n}\r\n.SM-icon{\r\n  display: block;\r\n  float: left;\r\n  width:40px;\r\n}\r\n.phone-email {\r\n  clear:both;\r\n}\r\n.about{\r\n  box-shadow:  0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\r\n  font-size: 1.5rem;\r\n  clear: both;\r\n  border: 2px solid  #3f51b531;\r\n  border-radius: 8px;\r\n  padding: 40px;\r\n}\r\n.allergy{\r\n  box-shadow:  0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\r\n  font-size: 1.2rem;\r\n  clear: both;\r\n  border: 2px solid  #3f51b531;\r\n  border-radius: 8px;\r\n  padding: 40px;\r\n}\r\n.map-iframe{\r\n  clear: both;\r\n  box-shadow:  0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\r\n}"

/***/ }),

/***/ "./src/app/components/contact/contact.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <mat-card _ngcontent-c6>\r\n    <mat-card-content>\r\n      <span>\r\n        <a href=\"https://www.instagram.com/explore/locations/698250740234496/sweet-karolines-cakes/\" target=\"blank\">\r\n          <img src=\"D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/ig.png\" class=\"SM-icon FB\">\r\n          </a>\r\n        <a href=\"https//www.facebook.com/pg/sweetkarolinescakes/about/\" target=\"blank\">\r\n          <img src=\"D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/fb.png\" class=\"SM-icon FB\">\r\n        </a>\r\n        <a class=\"phone-email\" href=\"tel:1(502)417-8179\">\r\n          <mat-icon>phone</mat-icon> (502) 417-8179\r\n        </a>\r\n        <a class=\"phone-email\" href=\"mailto:sweetkarolinescakes@gmail.com\">\r\n          <mat-icon>email</mat-icon> sweetkarolinescakes@gmail.com\r\n        </a>\r\n        <a class=\"phone-email\" target=\"blank\" href=\"https://www.google.com/maps/search/Sweet+Karoline's+Cakes,+47130+Jeffersonville/@38.2267667,-85.5969501,12z/data=!3m1!4b1\">\r\n          <mat-icon>map</mat-icon> Directions\r\n        </a>\r\n      </span>\r\n      <iframe class=\"map-iframe\" src=\"https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d1898.5912238591236!2d-85.73961338790633!3d38.27611852570974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d38.2769992!2d-85.740228!5e0!3m2!1sen!2sus!4v1544373409405\"\r\n        width=\"100%\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\r\n\r\n      <p class=\"about\"><strong>\r\n          I make cakes and other desserts for all occasions. I can even make gluten/dairy free treats! Message me for pricing. Thanks\r\n          for checking out my page!</strong>\r\n      </p>\r\n      <p class=\"allergy\">\r\n        Allergies – Sweet Karoline's Cakes (Karoline Gardner) shall not be held responsible for nut/milk/egg/wheat allergies for\r\n        clients or their parties. All cakes and cupcakes COULD contain traces of nut/milk/egg/wheat as it is made in the\r\n        same area where traces of nuts/milk/eggs/wheat can be found. It is the responsibility of clients to inform their\r\n        guests that traces of nut/milk/egg/wheat COULD be present in the cakes and cupcakes.\r\n      </p>\r\n\r\n    </mat-card-content>\r\n  </mat-card>\r\n  <app-footer></app-footer>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
        this.image = 'D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/ig.png';
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/components/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer-container{\r\n  display: flex;\r\n  flex-wrap: nowrap;\r\n  flex: auto;\r\n  width: 100%;\r\n  height: 20vh;\r\n  background: #3f51b5;\r\n  padding-top: 10px;\r\n  position: relative;\r\n  bottom: 0;\r\n  left: 0;\r\n  box-shadow: inset 0px 0px 10px rgba(0,0,0,0.5);\r\n}\r\n.spacer{\r\n  flex: auto;\r\n}\r\n.newsletter{\r\n  width: 500px;\r\n  height: 175px;\r\n  padding-left: 30px;\r\n  color: white;\r\n  /* float: left; */\r\n}\r\n.newsletter-section{\r\n  align-content: center;\r\n  vertical-align: middle;\r\n}\r\n::ng-deep mat-icon {\r\n  cursor: pointer;\r\n  color: #3f51b5;\r\n}\r\n.contact-info{\r\n  font-size: 1.2rem;\r\n  height: 175px;\r\n  /* float: left; */\r\n  padding-left: 30px;\r\n}\r\n.phone-email{\r\n  clear: both;\r\n}\r\na {\r\n  float: left;   \r\n  padding: 10px;\r\n  text-decoration: none;\r\n  color: white;\r\n}\r\n.newsletter-header{\r\n  font-size: 1.2rem;\r\n  margin: 0;\r\n}\r\n::ng-deep .mat-form-field-wrapper {\r\n  padding: 0px\r\n}\r\n.FB{\r\n  border: 2px rgba(255, 255, 255, 0.459) solid;\r\n  border-radius: 10px;\r\n}\r\n.SM-icon{\r\n  display: block;\r\n  float: left;\r\n  width:40px;\r\n}\r\n.sign-up-button{\r\n  margin-left: 20px;\r\n  margin-bottom: 0px;\r\n}\r\n.order-input{\r\n  padding-right: 20px;\r\n}\r\n.input-email{\r\n  background: #5770fdd5;\r\n  height: 2rem;\r\n  border: solid 2px #313e86;\r\n  padding-left: 10px;\r\n  border-radius: 8px;\r\n  color: white;\r\n}\r\n.input-label-email{\r\n  /* background: rgba(245, 131, 169, 0.904); */\r\n  color: white;\r\n  border: solid 2px rgba(0,0,0, 0.0);\r\n  /* padding: 10px, 0px, 0px, 15px; */\r\n}"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-container\">\r\n\r\n  <div class=\"contact-info\">\r\n    <a href=\"https://www.instagram.com/explore/locations/698250740234496/sweet-karolines-cakes/\" target=\"blank\"><img src=\"D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/ig.png\" class=\"SM-icon FB\"></a>\r\n    <a href=\"https://www.facebook.com/pg/sweetkarolinescakes/about/\" target=\"blank\"><img src=\"D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/fb.png\" class=\"SM-icon FB\"></a>\r\n    <a class=\"phone-email\" href=\"tel:1(502)417-8179\">(502) 417-8179</a>\r\n    <a class=\"phone-email\" href=\"mailto:sweetkarolinescakes@gmail.com\">sweetkarolinescakes@gmail.com</a>\r\n  </div>\r\n\r\n  <div class=\"newsletter\">\r\n    <h4 class=\"newsletter-header\">Sign up for out Newsletter!</h4>\r\n    <section class=\"newsletter-section\">\r\n      <mat-form-field class=\"order-input\">\r\n        <input matInput class=\"input-email\" >\r\n        <mat-label class=\"input-label-email\">Email</mat-label>\r\n      </mat-form-field>\r\n      <button mat-flat-button class=\"sign-up-button\" color=\"accent\" (click)=\"signUpNewsletter()\">Sign up</button>\r\n    </section>\r\n  </div>\r\n  <div class=\"spacer\"></div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _newsletter_confirm_newsletter_confirm_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../newsletter-confirm/newsletter-confirm.component */ "./src/app/components/newsletter-confirm/newsletter-confirm.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FooterComponent = /** @class */ (function () {
    function FooterComponent(dialog) {
        this.dialog = dialog;
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.openNewDialog = function () {
        this.openDialog = this.dialog.open(_newsletter_confirm_newsletter_confirm_component__WEBPACK_IMPORTED_MODULE_2__["NewsletterConfirmComponent"], {
            width: '300px',
            height: '225px'
        });
    };
    FooterComponent.prototype.signUpNewsletter = function () {
        this.openNewDialog();
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/img-dialog/img-dialog.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/img-dialog/img-dialog.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cake-img{\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n"

/***/ }),

/***/ "./src/app/components/img-dialog/img-dialog.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/img-dialog/img-dialog.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<img class=\"cake-img\" src={{data.imgUrl}} alt=\"oops, we can't find the picture!\">\n\n"

/***/ }),

/***/ "./src/app/components/img-dialog/img-dialog.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/img-dialog/img-dialog.component.ts ***!
  \***************************************************************/
/*! exports provided: ImgDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgDialogComponent", function() { return ImgDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ImgDialogComponent = /** @class */ (function () {
    function ImgDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ImgDialogComponent.prototype.ngOnInit = function () {
    };
    ImgDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-img-dialog',
            template: __webpack_require__(/*! ./img-dialog.component.html */ "./src/app/components/img-dialog/img-dialog.component.html"),
            styles: [__webpack_require__(/*! ./img-dialog.component.css */ "./src/app/components/img-dialog/img-dialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], ImgDialogComponent);
    return ImgDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-content{\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n}\r\n::ng-deep mat-icon {\r\n  cursor: pointer;\r\n  color: #3f51b5;\r\n}\r\na {\r\n  color: mediumblue;\r\n}\r\na:hover{\r\n   cursor: pointer;\r\n }"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-content\">\r\n  <mat-card>\r\n    <mat-card-header>\r\n      <mat-card-title>Login</mat-card-title>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n      <form>\r\n        <table cellspacing=\"0\">\r\n          <tr>\r\n            <td>\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Username\" [(ngModel)]=\"username\" name=\"username\" required>\r\n              </mat-form-field>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Password\" [(ngModel)]=\"password\" type=\"password\" name=\"password\" required>\r\n              </mat-form-field>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>\r\n              <a>Forgot Username or Password?</a>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n      </form>\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n      <button mat-raised-button (click)=\"login()\" color=\"primary\">Login</button>\r\n    </mat-card-actions>\r\n  </mat-card>\r\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
        this.onLogin = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.login = function () {
        if (this.username == 'admin' && this.password == 'admin') {
            this.router.navigate(["account"]);
            this.onLogin.emit({ success: true });
        }
        else {
            alert("Invalid credentials");
            this.username = "";
            this.password = "";
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/nav/nav.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/nav/nav.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .nav-bar{\r\n  z-index: 2;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  padding: 8px 16px;\r\n  height: 80px;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  opacity: 1;\r\n  box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12)\r\n}\r\n#vert-icon {\r\n  color: white;\r\n}\r\nh1 {\r\n  padding: 20px;\r\n}\r\na{\r\n  color: white;\r\n  text-decoration: none;\r\n  padding-right: 20px;\r\n}\r\n::ng-deep .home{\r\n  padding: 30px, 30px;\r\n}\r\n.nav-spacer{\r\n  flex-grow: 1;\r\n}"

/***/ }),

/***/ "./src/app/components/nav/nav.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/nav/nav.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"nav-bar\">\r\n  <mat-toolbar-row>\r\n      <a routerLink=\"/cake-gallery\" class=\"home\" routerLinkActive=\"active\">Sweet Karoline's Cakes</a>\r\n    <button mat-flat-button color=\"primary\" routerLink=\"/cake-gallery\" routerLinkActive=\"active\">Cake Gallery</button>\r\n    <button mat-flat-button color=\"primary\" routerLink=\"/orders\" routerLinkActive=\"active\">Request a Cake</button>\r\n    <button mat-flat-button color=\"primary\" routerLink=\"/products\" routerLinkActive=\"active\">Menu</button>\r\n    <button mat-flat-button color=\"primary\" routerLink=\"/contact\" routerLinkActive=\"active\">Contact</button>\r\n    <span class=\"nav-spacer\"></span>\r\n    <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n      <mat-icon id=\"vert-icon\">more_vert</mat-icon>\r\n    </button>\r\n    <mat-menu #menu=\"matMenu\">\r\n      <button mat-menu-item color=\"primary\" (click)=\"openNewDialog()\">Login</button>\r\n      <button mat-menu-item color=\"primary\" routerLink=\"/sign-up\" routerLinkActive=\"active\">SignUp</button>\r\n      <button mat-menu-item color=\"primary\" routerLink=\"/account\">Account</button>\r\n      <button mat-menu-item color=\"primary\" routerLink=\"/orders\">Sign Out</button>\r\n    </mat-menu>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/components/nav/nav.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/nav/nav.component.ts ***!
  \*************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/login.component */ "./src/app/components/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavComponent = /** @class */ (function () {
    function NavComponent(dialog) {
        this.dialog = dialog;
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent.prototype.openNewDialog = function () {
        var _this = this;
        this.openDialog = this.dialog.open(_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]);
        this.openDialog.componentInstance.onLogin.subscribe(function (data) {
            (data.success) ? _this.openDialog.close() : null;
        });
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/components/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/components/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/components/newsletter-confirm/newsletter-confirm.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/newsletter-confirm/newsletter-confirm.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".msg{\n  font-size: 1.5rem;\n}\ndiv{\n  padding: 15px;\n  margin: 15px;\n}"

/***/ }),

/***/ "./src/app/components/newsletter-confirm/newsletter-confirm.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/newsletter-confirm/newsletter-confirm.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"msg\">Thank you for signing up for our newsletter!</span>\n<div></div>\n<button mat-flat-button color=\"primary\" (click)=\"dismiss()\">Ok</button>\n"

/***/ }),

/***/ "./src/app/components/newsletter-confirm/newsletter-confirm.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/newsletter-confirm/newsletter-confirm.component.ts ***!
  \*******************************************************************************/
/*! exports provided: NewsletterConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsletterConfirmComponent", function() { return NewsletterConfirmComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewsletterConfirmComponent = /** @class */ (function () {
    function NewsletterConfirmComponent(dialog) {
        this.dialog = dialog;
    }
    NewsletterConfirmComponent.prototype.ngOnInit = function () {
    };
    NewsletterConfirmComponent.prototype.dismiss = function () {
        this.dialog.close();
    };
    NewsletterConfirmComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-newsletter-confirm',
            template: __webpack_require__(/*! ./newsletter-confirm.component.html */ "./src/app/components/newsletter-confirm/newsletter-confirm.component.html"),
            styles: [__webpack_require__(/*! ./newsletter-confirm.component.css */ "./src/app/components/newsletter-confirm/newsletter-confirm.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], NewsletterConfirmComponent);
    return NewsletterConfirmComponent;
}());



/***/ }),

/***/ "./src/app/components/order-edit/order-edit.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/order-edit/order-edit.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".order-radio {\r\n  float: left;\r\n  padding: 20px 20px 10px 0px;\r\n}\r\n.order-input {\r\n  padding: 10px 10px 10px 10px;\r\n}\r\n.address-buffer{\r\n  height: 20px;\r\n}\r\n::ng-deep .cards{\r\n  width: 91%;\r\n}\r\n.date{\r\n  clear: both;\r\n}\r\n.paypal{\r\n  height: 25px;\r\n  border: 2px rgba(255, 255, 255, 0.459) solid;\r\n  border-radius: 10px;\r\n}\r\n.bttn{\r\n  width: 10px;\r\n  margin: 20px;\r\n}\r\n.large-input {\r\n  width: calc(50% - 20px);\r\n  padding: 5px 10px 5px 10px;\r\n}\r\n.small-input {\r\n  width: calc(33.33% - 20px);\r\n  padding: 5px 10px 5px 10px;\r\n}\r\n.xsmall-input{\r\n  width: 60px;\r\n  padding: 5px 10px;\r\n}\r\n.xlarge-input{\r\n  width: calc(100% - 20px);\r\n  padding: 5px 10px 5px 10px;\r\n}"

/***/ }),

/***/ "./src/app/components/order-edit/order-edit.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/order-edit/order-edit.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <h1 class=\"form-header\">Edit Order Request</h1>\r\n\r\n  <div class=\"order-radio\">\r\n    <mat-radio-group (change)=\"deliveryChange()\" required [(ngModel)]=\"deliveryType\">\r\n      <mat-radio-button color=\"primary\" class=\"order-input\" value=\"delivery\" [checked]=\"deliveryType === 'delivery'\"> Delivery </mat-radio-button>\r\n      <mat-radio-button color=\"primary\" class=\"order-input\" value=\"pickup\" [checked]=\"deliveryType === 'pickup'\"> Pickup </mat-radio-button>\r\n      <mat-radio-button color=\"primary\" class=\"order-input\" value=\"undecided\" [checked]=\"deliveryType === 'undecided'\"> Undecided </mat-radio-button>\r\n    </mat-radio-group>\r\n  </div>\r\n\r\n  <mat-form-field class=\"order-input date\">\r\n    <input matInput [matDatepicker]=\"picker\" placeholder=\"Pickup / Delivery Date\" [min]=\"minDate\" required [(ngModel)]=\"deliveryDate\">\r\n    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n    <mat-datepicker touchUi #picker></mat-datepicker>\r\n  </mat-form-field>\r\n  <div style=\"height: 20px;\"></div>\r\n\r\n  <!-- <div > -->\r\n  <mat-card class=\"cards\" *ngIf=\"deliveryType === 'delivery'\">\r\n    <mat-card-content>\r\n      <mat-form-field class=\"large-input\">\r\n        <input matInput placeholder=\"Address\" [disabled]=\"deliveryType !== 'delivery'\" required [(ngModel)]=\"data.address1\">\r\n        <mat-label>Address Line 1</mat-label>\r\n      </mat-form-field>\r\n      <mat-form-field class=\"large-input\">\r\n        <input matInput  placeholder=\"Apartment\" [disabled]=\"deliveryType !== 'delivery'\" [(ngModel)]=\"data.address2\">\r\n        <mat-label>Address Line 2</mat-label>\r\n      </mat-form-field>\r\n      <div class=\"city-state-zip\">\r\n        <mat-form-field class=\"small-input\">\r\n          <input matInput placeholder=\"City\" [disabled]=\"deliveryType !== 'delivery'\" required [(ngModel)]=\"data.city\">\r\n          <mat-label>City</mat-label>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"small-input\">\r\n          <mat-select placeholder=\"State\" [disabled]=\"deliveryType !== 'delivery'\" required [(ngModel)]=\"data.state\">\r\n            <mat-option *ngFor=\"let state of states\" [value]=\"state\">{{state}}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"small-input\">\r\n          <input matInput placeholder=\"zip-code\" [disabled]=\"deliveryType !== 'delivery'\" required [(ngModel)]=\"data.zip\">\r\n          <mat-label>Zip</mat-label>\r\n        </mat-form-field>\r\n      </div>\r\n    </mat-card-content>\r\n  </mat-card>\r\n  <div class=\"address-buffer\"></div>\r\n\r\n  <mat-card class=\"cards\">\r\n    <mat-card-content>\r\n        <h3>Pay with PayPal</h3>\r\n        <a href=\"https://www.paypal.com/us/signin\" target=\"blank\">\r\n          <img class=\"paypal\" src=\"D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/paypal.png\">\r\n        </a>\r\n    </mat-card-content>\r\n  </mat-card>\r\n  <div class=\"address-buffer\"></div>\r\n  <button mat-flat-button (click)=\"submit()\" color=\"primary\" class=\"bttn\">Submit</button>\r\n  <span style=\"width: 20px;\"></span>\r\n  <button mat-flat-button (click)=\"cancel()\" color=\"primary\" class=\"bttn\">Cancel</button>\r\n"

/***/ }),

/***/ "./src/app/components/order-edit/order-edit.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/order-edit/order-edit.component.ts ***!
  \***************************************************************/
/*! exports provided: OrderEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderEditComponent", function() { return OrderEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var OrderEditComponent = /** @class */ (function () {
    function OrderEditComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.onSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
        this.onCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
        this.showAddress = false;
        this.tiers = ['1', '2', '3', 'Request 4+'];
        this.states = [
            'KY', 'IN', 'TN', 'OH'
        ];
        this.servings = [
            '6" cake (serves 12)',
            '8" double layer (serves 20-25)',
            '10" and 6" dbouble stack (serves 40-45)',
            '1/4 sheet cake 9"x13" (serves 36)',
            '10" (serves 28-35)',
            '1/2 sheet cake 11"x15" (serves 54)',
            'Full sheet cake (serves 72)'
        ];
        this.flavorGroups = [
            {
                name: 'Basic Cakes',
                flavors: [
                    'French Vanilla', 'Chocolate', 'Marble', 'Strawberry'
                ]
            },
            {
                name: 'Premium Cakes',
                flavors: [
                    'Almond', 'Amaretto', 'Carrot', 'Chocolate Chip', 'Coconut', 'Cookie Dough', 'Cookies & Cream',
                    'Italian Cream', 'Banana', 'Lemon', 'Pancake', 'Pina Colada', 'Pineapple', 'Raspberry', 'Red Velvet',
                    'Spice', 'White Chocolate', 'Hummingbird'
                ]
            },
            {
                name: 'Seasonal Cakes',
                flavors: [
                    'Caramel Apple', 'Pumpkin', 'Pecan Pie', 'Sugar Cookie', 'Hot Chocolate', 'Gingerbread'
                ]
            },
            {
                name: 'Gluten Free',
                flavors: [
                    'Vanilla', 'Chocolate', 'Carrot', 'Strawberry', 'Banana'
                ]
            }
        ];
        this.moreTreats = [
            {
                name: 'Cupcakes',
                flavors: [
                    'Basic', 'Premium', 'Mini Cupcakes Basic', 'Mini Cupcakes Premium', 'Jumbo Cupcake', 'Cupcake Cake / Smash Cake'
                ]
            },
            {
                name: 'More Treats',
                flavors: [
                    'Cookie Cake', '9" Pie', 'Cake Pops', 'Cakes with Fresh Fruit'
                ]
            }
        ];
        this.frostings = [
            'Vanilla Buttercream', 'Decorator Icing', 'Chocolate Buttercream', 'Almond Buttercream', 'White Chocolate Buttercream', 'Cream Cheese Frosting',
            'Peanut Butter Frosting', 'Maple Buttercream', 'Caramel Icing', 'Brown Sugar Buttercream', 'Marshmallow Buttercream', 'Lemon Cream Cheese Frosting',
            'Raspberry Buttercream', 'Coconut Cream Cheese Frosting', 'Strawberry Cream Cheese Frosting', 'Cookies & Cream', 'Chocolate Ganache'
        ];
        this.fillings = [
            'None', 'Salted Caramel', 'Fruit Preserves', 'Lemon Curd', 'Chocolate Ganache', 'Marshmallow', 'Peanut Butter Buttercream',
            'Lemon Cream Cheese Frosting', 'Coconut Cream Cheese Frosting', 'Strawbetty Cream Cheese Frosting', 'Nutella'
        ];
        this.minDate = new Date;
        this.deliveryDate = this.data.deliveryDate;
        this.deliveryType = this.data.deliveryType;
        console.log(this.deliveryDate);
        console.log(this.deliveryType);
    }
    OrderEditComponent.prototype.ngOnInit = function () { };
    OrderEditComponent.prototype.submit = function () {
        this.data.deliveryType = this.deliveryType;
        this.data.deliveryDate = this.deliveryDate;
        console.log(this.data);
        this.onSubmit.emit({ data: this.data });
        this.dialogRef.close();
    };
    OrderEditComponent.prototype.cancel = function () {
        this.onCancel.emit({ cancel: true });
    };
    OrderEditComponent.prototype.deliveryChange = function () {
        if (this.data.deliveryType == 'delivery') {
            this.showAddress = true;
        }
        else {
            this.showAddress = false;
        }
    };
    OrderEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-edit',
            template: __webpack_require__(/*! ./order-edit.component.html */ "./src/app/components/order-edit/order-edit.component.html"),
            styles: [__webpack_require__(/*! ./order-edit.component.css */ "./src/app/components/order-edit/order-edit.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], OrderEditComponent);
    return OrderEditComponent;
}());



/***/ }),

/***/ "./src/app/components/orders/orders.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/orders/orders.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1, h2, h3, h4 {\r\n  display: block;\r\n  clear: both;\r\n  color: #000000d7;\r\n}\r\nlabel {\r\n  padding: 10px;\r\n}\r\n::ng-deep .last-card {\r\n  padding-bottom: 25px;\r\n}\r\n.mat-card[_ngcontent-c6] {\r\n  width: inherit !important;\r\n}\r\n.main-container {\r\n  padding: 25px;\r\n  position: absolute;\r\n  top: 80px;\r\n  min-height: 100vh;\r\n  max-width: calc(60% - 50px);\r\n  min-width: calc(60% - 50px);\r\n  left: 20%;\r\n  box-shadow: inset 0px 0px 10px rgba(0,0,0,0.5);\r\n  background: rgba(160, 151, 150, 0.025);\r\n}\r\n.order-form > label {\r\n  padding: 20px 10px 25px 5px;\r\n}\r\n.order-radio {\r\n  float: left;\r\n  padding: 10px 20px 10px 0px;\r\n}\r\n.card-icon {\r\n  padding-top:20px;\r\n  padding-right: 20px;\r\n}\r\n::ng-deep .large-input {\r\n  flex: 0 0 50%;\r\n  padding: 4px 20px 5px 20px ;\r\n}\r\n::ng-deep .comments {\r\n  min-height: 80px;\r\n}\r\n::ng-deep .delivery-container {\r\n  width: 100%;\r\n}\r\n.city-state-zip {\r\n  clear: both;\r\n}\r\n.form-header {\r\n  padding: 20px 10px 10px 20px;\r\n}\r\n::ng-deep .calendar {\r\n  float: left;\r\n}\r\n::ng-deep .file-drop {\r\n  float: left;\r\n}\r\n.clear-both {\r\n  clear: both;\r\n}\r\n::ng-deep mat-icon {\r\n  cursor: pointer;\r\n  color: #3f51b5;\r\n}\r\n::ng-deep .upload-drop-zone {\r\n  border: dashed 3px rgba(200,200,200,0.8);\r\n  vertical-align: middle;\r\n  text-align: center;\r\n  color: rgba(140,140,140,0.8);\r\n  font-size: .8rem;\r\n  height: 60px;\r\n  min-width: 85%;\r\n  border-radius: 10px;\r\n  clear: both;\r\n  padding: 10px 20px 5px 20px ;\r\n}\r\n::ng-deep .comments {\r\n  width: 50%;\r\n  max-width: 400px;\r\n  min-width: 400px;\r\n  padding: 4px 20px 5px 20px;\r\n  float: left;\r\n}\r\n::ng-deep .label-comments {\r\n  float: left;\r\n}\r\n::ng-deep .label-container {\r\n  height: 80px;\r\n}\r\n::ng-deep .mat-form-field-wrapper {\r\n  padding: 0px\r\n}\r\n::ng-deep .nav-col1 {\r\n  float: left;\r\n  width: 250px;\r\n}\r\n::ng-deep .nav-col2 {\r\n  float: left;\r\n  width: 200px;\r\n}\r\n::ng-deep .nav-col3 {\r\n  float: left;\r\n  width: 200px;\r\n}\r\n.nav-bar {\r\n  width: 100%;\r\n}\r\na {\r\n  color: white;\r\n  text-decoration: none;\r\n}\r\n.newsletter {\r\n  padding-left: 15px;\r\n}\r\n.address-buffer{\r\n  height: 30px;\r\n  padding: 10px;\r\n}\r\n.buffer{\r\n  padding: 20px;\r\n}\r\n.paypal{\r\n  height: 25px;\r\n  border: 2px rgba(255, 255, 255, 0.459) solid;\r\n  border-radius: 10px;\r\n}\r\n.large-input {\r\n  width: calc(50% - 20px);\r\n  padding: 5px 10px 5px 10px;\r\n}\r\n.small-input {\r\n  width: calc(33.33% - 20px);\r\n  padding: 5px 10px 5px 10px;\r\n}\r\n.xsmall-input{\r\n  width: 60px;\r\n  padding: 5px 10px;\r\n}\r\n.xlarge-input{\r\n  width: calc(100% - 20px);\r\n  padding: 5px 10px 5px 10px;\r\n}\r\n.greyed{\r\n  color: #0000005a;\r\n}\r\n.norm{\r\n  /*needed*/\r\n}\r\n.treat-bttn{\r\n  width: 10px;\r\n  margin: 20px;\r\n}\r\n.align-right{\r\n  text-align: right;  \r\n}\r\n/***************************************** FOOTER ************************/\r\n.footer-container{\r\n  width: 100%;\r\n  background: #3f51b5;\r\n  margin-top: 10px;\r\n  position: relative;\r\n  bottom: 0;\r\n  left: 0;\r\n}\r\n.newsletter-ft{\r\n  padding-top: 30px;\r\n  float: left;\r\n  padding-left: 30px;\r\n  color: white;\r\n}\r\n.newsletter-section{\r\n  align-content: center;\r\n  vertical-align: middle;\r\n}\r\n.contact-info{\r\n  font-size: 0.8rem;\r\n  height: 175px;\r\n  float: left;\r\n  padding-left: 30px;\r\n}\r\n.phone-email{\r\n  clear: both;\r\n}\r\na {\r\n  float: left;   \r\n  padding: 10px;\r\n  text-decoration: none;\r\n  color: white;\r\n}\r\n.newsletter-header-ft{\r\n  font-size: 1.2rem;\r\n  margin: 0;\r\n}\r\n::ng-deep .mat-form-field-wrapper {\r\n  padding: 0px\r\n}\r\n.FB{\r\n  border: 2px rgba(255, 255, 255, 0.459) solid;\r\n  border-radius: 10px;\r\n}\r\n.SM-icon{\r\n  display: block;\r\n  float: left;\r\n  width:40px;\r\n}\r\n.sign-up-button{\r\n  margin-left: 20px;\r\n  margin-bottom: 0px;\r\n}\r\n.order-input{\r\n  padding-right: 20px;\r\n}\r\n.input-email{\r\n  background: #5770fdd5;\r\n  height: 2rem;\r\n  border: solid 2px #313e86;\r\n  padding-left: 10px;\r\n  border-radius: 8px;\r\n  color: white;\r\n}\r\n.input-label-email{\r\n  color: white;\r\n  border: solid 2px rgba(0,0,0, 0.0);\r\n}"

/***/ }),

/***/ "./src/app/components/orders/orders.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/orders/orders.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <h1 class=\"form-header\">Order Request Form</h1>\r\n  <mat-card>\r\n    <mat-card-content>\r\n\r\n      <div class=\"order-form\">\r\n        <mat-form-field class=\"large-input\">\r\n          <mat-label>First Name</mat-label>\r\n          <input matInput placeholder=\"First\" required>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"large-input\">\r\n          <mat-label>Last Name</mat-label>\r\n          <input matInput placeholder=\"Last\" required>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"small-input\">\r\n          <mat-label>Phone</mat-label>\r\n          <input matInput placeholder=\"(502)123-4567\" type=\"tel\" required>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"small-input\">\r\n          <input matInput placeholder=\"your@email.com\" type=\"email\" required>\r\n          <mat-label>E-mail</mat-label>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"small-input\">\r\n          <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" [min]=\"minDate\" required>\r\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n          <mat-datepicker touchUi #picker></mat-datepicker>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"newsletter\">\r\n        <h4 class=\"newsletter-header\">Get Baking Tips and Recipes!</h4>\r\n        <mat-checkbox color=\"primary\" [(ngModel)]=\"newsletter\">\r\n          sign up for newsletter\r\n        </mat-checkbox>\r\n      </div>\r\n\r\n    </mat-card-content>\r\n  </mat-card>\r\n\r\n  <div class=\"address-buffer\"></div>\r\n\r\n  <mat-card _ngcontent-c6>\r\n    <mat-card-content>\r\n      <div class=\"order-radio\">\r\n        <mat-radio-group [(ngModel)]=\"deliveryType\" (change)=\"deliveryChange()\" required>\r\n          <mat-radio-button name=\"deliveryType\" color=\"primary\" class=\"order-input\" value=\"delivery\"> Delivery </mat-radio-button>\r\n          <mat-radio-button name=\"deliveryType\" color=\"primary\" class=\"order-input\" value=\"pickup\"> Pickup </mat-radio-button>\r\n          <mat-radio-button name=\"deliveryType\" color=\"primary\" class=\"order-input\" value=\"undecided\"> Undecided </mat-radio-button>\r\n        </mat-radio-group>\r\n      </div>\r\n      <h2 [className]=\"showAddress ? 'norm' : 'greyed'\">Address</h2>\r\n      <form>\r\n        <mat-form-field class=\"large-input\">\r\n          <input matInput placeholder=\"Address\" [disabled]=\"!showAddress\" required>\r\n          <mat-label>Address Line 1</mat-label>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"large-input\">\r\n          <input matInput placeholder=\"Apartment\" [disabled]=\"!showAddress\">\r\n          <mat-label>Address Line 2</mat-label>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"small-input\">\r\n          <input matInput placeholder=\"Louisville\" [disabled]=\"!showAddress\" required>\r\n          <mat-label>City</mat-label>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"small-input\">\r\n          <mat-select placeholder=\"KY\" [disabled]=\"!showAddress\" required>\r\n            <mat-option *ngFor=\"let state of states\" [value]=\"state\">{{state}}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"small-input\">\r\n          <input matInput placeholder=\"zip-code\" [disabled]=\"!showAddress\" required>\r\n          <mat-label>Zip</mat-label>\r\n        </mat-form-field>\r\n      </form>\r\n\r\n    </mat-card-content>\r\n  </mat-card>\r\n  <div class=\"address-buffer\"></div>\r\n\r\n\r\n  <mat-card _ngcontent-c6 class=\"last-card\">\r\n    <mat-card-content>\r\n      <h2>Customize Your Dessert</h2>\r\n\r\n      <mat-form-field class=\"small-input\">\r\n        <mat-select placeholder=\"Serving Size\" required>\r\n          <mat-option *ngFor=\"let serv of servings\" [value]=\"servings\">{{serv}}</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field class=\"small-input\">\r\n        <mat-select placeholder=\"Tier Count\" required>\r\n          <mat-option *ngFor=\"let tier of tiers\" [value]=\"tierCount\">{{tier}}</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field class=\"small-input\">\r\n        <input type=\"number\" matInput placeholder=\"100.00\">\r\n        <mat-label>Budget</mat-label>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field *ngIf=!glutenFree class=\"small-input\">\r\n        <mat-select placeholder=\"Cake flavors\" required>\r\n          <mat-optgroup *ngFor=\"let group of flavorGroups\" [label]=\"group.name\">\r\n            <mat-option *ngFor=\"let flavor of group.flavors\" [value]=\"flavor\">{{flavor}}</mat-option>\r\n          </mat-optgroup>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field class=\"small-input\">\r\n        <mat-select placeholder=\"Cake Filling\">\r\n          <mat-option *ngFor=\"let filling of fillings\" [value]=\"filling\">{{filling}}</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field class=\"small-input\">\r\n        <mat-select placeholder=\"Frosting Flavor\" required>\r\n          <mat-option *ngFor=\"let frosting of frostings\" [value]=\"frosting\">{{frosting}}</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field class=\"xlarge-input\">\r\n        <mat-label>Comments</mat-label>\r\n        <textarea matInput #comments maxlength=\"256\" placeholder=\"\"></textarea>\r\n      </mat-form-field>\r\n      <mat-hint class=\"align-right\">{{comments.value.length}} / 256</mat-hint>\r\n    </mat-card-content>\r\n  </mat-card>\r\n  <div class=\"address-buffer\"></div>\r\n\r\n  <mat-card _ngcontent-c6>\r\n    <mat-card-content>\r\n      <h2>Drag and Drop Photos of Designs</h2>\r\n\r\n      <div class=\"center clear-both\">\r\n        <file-drop headertext=\"Drop files here\" (onFileDrop)=\"dropped($event)\">\r\n          <span><mat-icon>photo</mat-icon></span>\r\n        </file-drop>\r\n        <div class=\"upload-table\">\r\n          <table class=\"table\">\r\n            <thead>\r\n              <tr>\r\n                <th></th>\r\n              </tr>\r\n            </thead>\r\n            <tbody class=\"upload-name-style\">\r\n              <tr *ngFor=\"let file of files; let i=index\">\r\n                <td>{{ file.relativePath }}</td>\r\n                <td>\r\n                  <mat-icon (click)=\"deleteImg(file)\">cancel</mat-icon>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n    </mat-card-content>\r\n  </mat-card>\r\n\r\n  <div class=\"address-buffer\"></div>\r\n\r\n  <mat-card _ngcontent-c6class=\"last-card\">\r\n    <mat-card-content>\r\n      <h2>Choose Some of our Treats</h2>\r\n      <button mat-icon-button color=\"primary\" (click)=\"addTreatRow()\">\r\n        <mat-icon color=\"accent\">add</mat-icon>\r\n      </button>\r\n      <button mat-icon-button color=\"primary\" (click)=\"popTreatRow()\">\r\n        <mat-icon color=\"accent\">remove</mat-icon>\r\n      </button>\r\n\r\n      <div *ngFor=\"let treat of treatRows; let i = index\">\r\n        <mat-form-field class=\"large-input\">\r\n          <mat-select placeholder=\"More Treats\" required [(ngModel)]=\"treatRows[i].name\">\r\n            <mat-optgroup *ngFor=\"let group of moreTreats\" [label]=\"group.name\">\r\n              <mat-option *ngFor=\"let flavor of group.flavors\" [value]=\"treat\">{{flavor}}</mat-option>\r\n            </mat-optgroup>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"xsmall-input\">\r\n          <mat-select [(ngModel)]=\"treatRows[i].quantity\" placeholder=\"Quantity\" required>\r\n            <mat-option *ngFor=\"let q of quantity\" [value]=\"q\">{{q}}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <button mat-icon-button color=\"primary\" (click)=\"removeTreat(i)\">\r\n          <mat-icon>delete</mat-icon>\r\n        </button>\r\n      </div>\r\n\r\n    </mat-card-content>\r\n  </mat-card>\r\n  <div class=\"address-buffer\"></div>\r\n\r\n  <mat-card _ngcontent-c6>\r\n    <mat-card-content>\r\n      <h3>Pay with PayPal</h3>\r\n      <a href=\"https://www.paypal.com/us/signin\" target=\"blank\">\r\n        <img class=\"paypal\" src=\"D:/Elaboration_Spec_Presentation/KarolinesCakes/assets/paypal.png\">\r\n      </a>\r\n      <div class=\"address-buffer\"></div>\r\n    </mat-card-content>\r\n  </mat-card>\r\n  <div class=\"buffer\"></div>\r\n  <button mat-raised-button color=\"primary\" style=\"float: left;\" (click)=\"pushAccount()\">Submit</button>\r\n  <div class=\"buffer\"></div>\r\n\r\n  <app-footer></app-footer>\r\n</div>"

/***/ }),

/***/ "./src/app/components/orders/orders.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/orders/orders.component.ts ***!
  \*******************************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/order.service */ "./src/app/components/services/order.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrdersComponent = /** @class */ (function () {
    function OrdersComponent(router, orderService) {
        this.router = router;
        this.orderService = orderService;
        this.files = [];
        this.newsletter = true;
        this.glutenFree = false;
        this.showAddress = false;
        this.treatRows = [{ name: "Cookie Cake", quantity: 1 }];
        this.tierCount = 1;
        this.tiers = ['1', '2', '3', 'Request 4+'];
        this.states = [
            'KY', 'IN', 'TN', 'OH'
        ];
        this.servings = [
            '6" cake (serves 12)',
            '8" double layer (serves 20-25)',
            '10" and 6" dbouble stack (serves 40-45)',
            '1/4 sheet cake 9"x13" (serves 36)',
            '10" (serves 28-35)',
            '1/2 sheet cake 11"x15" (serves 54)',
            'Full sheet cake (serves 72)'
        ];
        this.flavorGroups = [
            {
                name: 'Basic Cakes',
                flavors: [
                    'French Vanilla', 'Chocolate', 'Marble', 'Strawberry'
                ]
            },
            {
                name: 'Premium Cakes',
                flavors: [
                    'Almond', 'Amaretto', 'Carrot', 'Chocolate Chip', 'Coconut', 'Cookie Dough', 'Cookies & Cream',
                    'Italian Cream', 'Banana', 'Lemon', 'Pancake', 'Pina Colada', 'Pineapple', 'Raspberry', 'Red Velvet',
                    'Spice', 'White Chocolate', 'Hummingbird'
                ]
            },
            {
                name: 'Seasonal Cakes',
                flavors: [
                    'Caramel Apple', 'Pumpkin', 'Pecan Pie', 'Sugar Cookie', 'Hot Chocolate', 'Gingerbread'
                ]
            },
            {
                name: 'Gluten Free',
                flavors: [
                    'Vanilla', 'Chocolate', 'Carrot', 'Strawberry', 'Banana'
                ]
            }
        ];
        this.moreTreats = [
            {
                name: 'Cupcakes',
                flavors: [
                    'Basic', 'Premium', 'Mini Cupcakes Basic', 'Mini Cupcakes Premium', 'Jumbo Cupcake', 'Cupcake Cake / Smash Cake'
                ]
            },
            {
                name: 'More Treats',
                flavors: [
                    'Cookie Cake', '9" Pie', 'Cake Pops', 'Cakes with Fresh Fruit'
                ]
            }
        ];
        this.frostings = [
            'Vanilla Buttercream', 'Decorator Icing', 'Chocolate Buttercream', 'Almond Buttercream', 'White Chocolate Buttercream', 'Cream Cheese Frosting',
            'Peanut Butter Frosting', 'Maple Buttercream', 'Caramel Icing', 'Brown Sugar Buttercream', 'Marshmallow Buttercream', 'Lemon Cream Cheese Frosting',
            'Raspberry Buttercream', 'Coconut Cream Cheese Frosting', 'Strawberry Cream Cheese Frosting', 'Cookies & Cream', 'Chocolate Ganache'
        ];
        this.fillings = [
            'None', 'Salted Caramel', 'Fruit Preserves', 'Lemon Curd', 'Chocolate Ganache', 'Marshmallow', 'Peanut Butter Buttercream',
            'Lemon Cream Cheese Frosting', 'Coconut Cream Cheese Frosting', 'Strawbetty Cream Cheese Frosting', 'Nutella'
        ];
        this.quantity = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18
        ];
    }
    OrdersComponent.prototype.ngOnInit = function () {
        this.minDate = new Date();
        this.deliveryType = 'undecided';
        this.order = this.orderService.order;
    };
    OrdersComponent.prototype.ngOnDestroy = function () {
        this.orderService.order = this.order;
    };
    OrdersComponent.prototype.dropped = function (event) {
        var _this = this;
        event.files.forEach(function (f) {
            _this.files.push(f);
        });
    };
    OrdersComponent.prototype.deleteImg = function (uploadFile) {
        this.files = this.files.filter(function (f) {
            return f.fileEntry.name !== uploadFile.fileEntry.name;
        });
    };
    OrdersComponent.prototype.deliveryChange = function () {
        if (this.deliveryType == 'delivery') {
            this.showAddress = true;
        }
        else {
            this.showAddress = false;
        }
    };
    OrdersComponent.prototype.navCakeGallery = function () {
        console.log('nav to cake-gallery');
        var link = ['/cake-gallery'];
        this.router.navigate([link]);
    };
    OrdersComponent.prototype.addTreatRow = function () {
        if (this.treatRows != undefined)
            this.treatRows.push({ name: "Cookie Cake", quantity: 1 });
        else
            this.treatRows = [{ name: "Cookie Cake", quantity: 1 }];
    };
    OrdersComponent.prototype.popTreatRow = function () {
        this.treatRows.pop();
    };
    OrdersComponent.prototype.removeTreat = function (ind) {
        this.treatRows.splice(ind, 1);
    };
    OrdersComponent.prototype.pushAccount = function () {
        this.router.navigate(['account']);
    };
    OrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-orders',
            template: __webpack_require__(/*! ./orders.component.html */ "./src/app/components/orders/orders.component.html"),
            styles: [__webpack_require__(/*! ./orders.component.css */ "./src/app/components/orders/orders.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"]])
    ], OrdersComponent);
    return OrdersComponent;
}());



/***/ }),

/***/ "./src/app/components/products/products.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/products/products.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex > div{\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  flex-direction: row;\r\n  width: calc(100%/3);\r\n}\r\n\r\n.container{\r\n  padding: 25px;\r\n  position: absolute;\r\n  top: 80px;\r\n  min-height: 100vh;\r\n  max-width: calc(60% - 50px);\r\n  min-width: calc(60% - 50px);\r\n  left: 20%;\r\n  box-shadow: inset 0px 0px 10px rgba(0,0,0,0.5);\r\n  background: rgba(160, 151, 150, 0.025);\r\n}\r\n\r\n::ng-deep mat-icon {\r\n  cursor: pointer;\r\n  color: #3f51b5;\r\n}\r\n\r\n.spacer{\r\n  height: 20px;\r\n  width: 100%;\r\n}\r\n\r\n.category-card {\r\n  width: 90%;\r\n  margin: 10px;\r\n}\r\n\r\n.flavor, .flavor > * {\r\n  float: left;\r\n  height: 25px;\r\n  width: 150px;\r\n  padding: 10px 10px 10px 0px;\r\n  margin: 10px 10px 10px 0px;\r\n}\r\n\r\ntd {\r\n  text-align: center; \r\n  vertical-align: middle;\r\n}\r\n\r\n.grid-hover:hover {\r\n  font-weight: 800;\r\n  color: #3f51b5;;\r\n  box-shadow: 0px 0px 10px rgba(0,0,0,0.5);\r\n  transition: background 0.05s linear 0s;\r\n  cursor: pointer;\r\n}\r\n\r\n::ng-deep .primary{\r\n  color: #3f51b5;\r\n}\r\n\r\n::ng-deep .primary:hover{\r\n  cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/components/products/products.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/products/products.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1>Products and Pricing</h1>\r\n  <button mat-raised-button (click)=\"pushOrders()\">\r\n    <mat-icon>shopping_cart</mat-icon>Create Order\r\n  </button>\r\n  <mat-list *ngFor=\"let categoryWP of categoriesWithPrices; let i=index;\">\r\n    <h3 (click)=\"expand(i)\" class=\"primary\" subheader>{{categoryWP.name}}\r\n      <mat-icon matListIcon *ngIf=\"!shows[i]\">expand_more</mat-icon>\r\n      <mat-icon matListIcon *ngIf=\"shows[i]\">expand_less</mat-icon>\r\n      <span [hidden]=\"!shows[i]\">\r\n        <button mat-icon-button (click)=\"pushOrders()\">\r\n          <mat-icon>shopping_cart</mat-icon>\r\n        </button>\r\n      </span>\r\n    </h3>\r\n\r\n    <div role=\"listitem\" *ngFor=\"let flavor of categoryWP.flavors; let j=index\" [hidden]=\"!shows[i]\">\r\n      <mat-list-item (click)=\"toggleChecked(i,j)\" class=\"grid-hover\">\r\n        <h4 matLine>{{flavor.description}}</h4>\r\n        <span matLine>{{flavor.price}}</span>\r\n        <mat-checkbox color=\"accent\" (click)=\"toggleChecked(i,j)\" [(ngModel)]=\"flavor.checked\">\r\n        </mat-checkbox>\r\n      </mat-list-item>\r\n      <mat-divider></mat-divider>\r\n    </div>\r\n\r\n  </mat-list>\r\n  <app-footer></app-footer>\r\n</div>"

/***/ }),

/***/ "./src/app/components/products/products.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/products/products.component.ts ***!
  \***********************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/order.service */ "./src/app/components/services/order.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(router, orderService) {
        this.router = router;
        this.orderService = orderService;
        this.shows = [];
        this.selected = [];
        this.categoriesWithPrices = [
            {
                name: 'Serving Size Pricing',
                flavors: [
                    { description: '6" cake (serves 12)', price: '$15.00 single / $25.00 double', checked: false },
                    { description: '8" double layer (serves 20-25)', price: '$35.00', checked: false },
                    { description: '10" (serves 28-35)', price: '$45.00', checked: false },
                    { description: '10" and 6" dbouble stack (serves 40-45)', price: '$65.00', checked: false },
                    { description: '1/4 sheet cake 9"x13" (serves 36)', price: '$35.00', checked: false },
                    { description: '1/2 sheet cake 11"x15" (serves 54)', price: '$50.00', checked: false },
                    { description: 'Full sheet cake (serves 72)', price: '$70.00', checked: false },
                    { description: '*More serving sizes are available upon request', price: '', checked: false }
                ]
            },
            {
                name: 'Basic Cakes',
                flavors: [
                    { description: 'French Vanilla', price: '', checked: false },
                    { description: 'Chocolate', price: '', checked: false },
                    { description: 'Marble', price: '', checked: false },
                    { description: 'Strawberry', price: '', checked: false }
                ]
            },
            {
                name: 'Gluten Free',
                flavors: [
                    { description: 'Vanilla*', price: '*add $.25 for cupcakes / $5 for each cake size', checked: false },
                    { description: 'Chocolate*', price: '*add $.25 for cupcakes / $5 for each cake size', checked: false },
                    { description: 'Carrot*', price: '*add $.25 for cupcakes / $5 for each cake size', checked: false },
                    { description: 'Strawberry*', price: '*add $.25 for cupcakes / $5 for each cake size', checked: false },
                    { description: 'Banana*', price: '*add $.25 for cupcakes / $5 for each cake size', checked: false },
                ]
            },
            {
                name: 'Premium Cakes',
                flavors: [
                    { description: 'Almond', price: '', checked: false },
                    { description: 'Amaretto', price: '', checked: false },
                    { description: 'Carrot', price: '', checked: false },
                    { description: 'Chocolate Chip', price: '', checked: false },
                    { description: 'Coconut', price: '', checked: false },
                    { description: 'Cookie Dough', price: '', checked: false },
                    { description: 'Cookies & Cream', price: '', checked: false },
                    { description: 'Italian Cream', price: '', checked: false },
                    { description: 'Banana', price: '', checked: false },
                    { description: 'Lemon', price: '', checked: false },
                    { description: 'Pancake', price: '', checked: false },
                    { description: 'Pina Colada', price: '', checked: false },
                    { description: 'Pineapple', price: '', checked: false },
                    { description: 'Raspberry', price: '', checked: false },
                    { description: 'Red Velvet', price: '', checked: false },
                    { description: 'Spice', price: '', checked: false },
                    { description: 'White Chocolate', price: '', checked: false },
                    { description: 'Hummingbird', price: '', checked: false }
                ]
            },
            {
                name: 'Fillings',
                flavors: [
                    { description: 'Salted Caramel', price: '', checked: false },
                    { description: 'Fruit Preserves', price: '', checked: false },
                    { description: 'Lemon Curd', price: '', checked: false },
                    { description: 'Chocolate Ganache', price: '', checked: false },
                    { description: 'Marshmallow', price: '', checked: false },
                    { description: 'Peanut Butter Buttercream', price: '', checked: false },
                    { description: 'Lemon Cream Cheese Frosting', price: '', checked: false },
                    { description: 'Coconut Cream Cheese Frosting', price: '', checked: false },
                    { description: 'Strawbetty Cream Cheese Frosting', price: '', checked: false },
                    { description: 'Nutella', price: '', checked: false }
                ]
            },
            {
                name: 'Frosting Flavors',
                flavors: [
                    { description: 'Vanilla Buttercream', price: '', checked: false },
                    { description: 'Decorator Icing', price: '', checked: false },
                    { description: 'Chocolate Buttercream', price: '', checked: false },
                    { description: 'Almond Buttercream', price: '', checked: false },
                    { description: 'White Chocolate Buttercream', price: '', checked: false },
                    { description: 'Cream Cheese Frosting', price: '', checked: false },
                    { description: 'Peanut Butter Frosting', price: '', checked: false },
                    { description: 'Maple Buttercream', price: '', checked: false },
                    { description: 'Caramel Icing', price: '', checked: false },
                    { description: 'Brown Sugar Buttercream', price: '', checked: false },
                    { description: 'Marshmallow Buttercream', price: '', checked: false },
                    { description: 'Lemon Cream Cheese Frosting', price: '', checked: false },
                    { description: 'Raspberry Buttercream', price: '', checked: false },
                    { description: 'Coconut Cream Cheese Frosting', price: '', checked: false },
                    { description: 'Strawberry Cream Cheese Frosting', price: '', checked: false },
                    { description: 'Cookies & Cream', price: '', checked: false },
                    { description: 'Chocolate Ganache', price: '', checked: false }
                ]
            },
            {
                name: 'Seasonal Cakes',
                flavors: [
                    { description: 'Caramel Apple', price: '', checked: false },
                    { description: 'Pumpkin', price: '', checked: false },
                    { description: 'Pecan Pie', price: '', checked: false },
                    { description: 'Sugar Cookie', price: '', checked: false },
                    { description: 'Hot Chocolate', price: '', checked: false },
                    { description: 'Gingerbread', price: '', checked: false }
                ]
            },
            {
                name: 'Cupcakes',
                flavors: [
                    { description: 'Basic', price: '', checked: false },
                    { description: 'Premium', price: '', checked: false },
                    { description: 'Mini Cupcakes Basic', price: '', checked: false },
                    { description: 'Mini Cupcakes Premium', price: '', checked: false },
                    { description: 'Jumbo Cupcake', price: '', checked: false },
                    { description: 'Cupcake Cake / Smash Cake', price: '', checked: false }
                ]
            },
            {
                name: 'More Treats',
                flavors: [
                    { description: 'Cookie Cake', price: '$20.00', checked: false },
                    { description: '9" Pie', price: '$20.00', checked: false },
                    { description: 'Cake Pops', price: '$1.50 (basic) / $1.75 (premium)', checked: false },
                    { description: 'Cakes with Fresh Fruit', price: '$75.00 (fruit must be in season)', checked: false },
                ]
            }
        ];
        this.categories = [];
    }
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoriesWithPrices.forEach(function (cat) {
            _this.shows.push(false);
        });
        this.order = this.orderService.order;
    };
    ProductsComponent.prototype.ngOnDestroy = function () {
        this.orderService.order = this.order;
        console.dir(this.order);
    };
    ProductsComponent.prototype.expand = function (i) {
        this.shows[i] = !this.shows[i];
    };
    ProductsComponent.prototype.toggleChecked = function (i, j) {
        this.categoriesWithPrices[i].flavors[j].checked = !this.categoriesWithPrices[i].flavors[j].checked;
        if (this.categoriesWithPrices[i].flavors[j].checked) {
            this.selected.push(this.categoriesWithPrices[i].flavors[j]);
        }
        else {
            this.selected.splice(this.selected.indexOf(this.categoriesWithPrices[i].flavors[j]), 1);
        }
        console.dir(this.selected);
    };
    ProductsComponent.prototype.pushOrders = function () {
        this.router.navigate(["orders"]);
    };
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/components/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/components/products/products.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/components/services/order.service.ts":
/*!******************************************************!*\
  !*** ./src/app/components/services/order.service.ts ***!
  \******************************************************/
/*! exports provided: OrderService, Order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
var OrderService = /** @class */ (function () {
    function OrderService() {
    }
    return OrderService;
}());

var Order = /** @class */ (function () {
    function Order() {
    }
    return Order;
}());



/***/ }),

/***/ "./src/app/components/sign-up/sign-up.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/sign-up/sign-up.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1, h2, h3, h4 {\r\n  display: block;\r\n  clear: both;\r\n  height: 20px;\r\n}\r\nlabel {\r\n  padding: 10px;\r\n}\r\n::ng-deep .last-card {\r\n  padding-bottom: 25px;\r\n}\r\n::ng-deep mat-card{\r\n  width: 100%;\r\n}\r\n.card-icon {\r\n  padding-top:20px;\r\n  padding-right: 20px;\r\n}\r\n.side-by-side{\r\n  padding: 15px;\r\n  margin: 5px;\r\n}\r\n.mat-card[_ngcontent-c6] {\r\n  width: inherit !important;\r\n}\r\n.grid{\r\n  width: 100%;\r\n  min-width: 500px;\r\n}\r\n.main-container {\r\n  padding: 25px;\r\n  position: absolute;\r\n  top: 80px;\r\n  min-height: 100vh;\r\n  max-width: calc(60% - 50px);\r\n  min-width: calc(60% - 50px);\r\n  left: 20%;\r\n  box-shadow: inset 0px 0px 10px rgba(0,0,0,0.5);\r\n  background: rgba(255, 0, 157, 0.025);\r\n}\r\n.order-form > label {\r\n  padding: 20px 10px 25px 5px;\r\n}\r\n.order-input {\r\n  padding: 0px 20px 5px 20px ;\r\n}\r\n.order-radio {\r\n  float: left;\r\n  padding: 20px 20px 10px 0px;\r\n}\r\n.large-input {\r\n  width: calc(50% - 20px);\r\n  padding: 5px 10px 5px 10px;\r\n}\r\n.small-input {\r\n  width: calc(33.33% - 20px);\r\n  padding: 5px 10px 5px 10px;\r\n}\r\n.xsmall-input{\r\n  width: 60px;\r\n  padding: 5px 10px;\r\n}\r\n.xlarge-input{\r\n  width: calc(100% - 20px);\r\n  padding: 5px 10px 5px 10px;\r\n}\r\n::ng-deep .comments {\r\n  min-height: 80px;\r\n}\r\n::ng-deep .delivery-container {\r\n  width: 100%;\r\n}\r\n.city-state-zip {\r\n  clear: both;\r\n}\r\n.payment-header{\r\n  padding: 20px;\r\n}\r\n::ng-deep mat-icon {\r\n  cursor: pointer;\r\n  color: #3f51b5;\r\n}\r\n.form-header {\r\n  padding: 20px 10px 10px 20px;\r\n}\r\n::ng-deep .calendar {\r\n  float: left;\r\n}\r\n::ng-deep .file-drop {\r\n  float: left;\r\n}\r\n::ng-deep .upload-drop-zone {\r\n  border: dashed 3px rgba(200,200,200,0.8);\r\n  vertical-align: middle;\r\n  text-align: center;\r\n  color: rgba(140,140,140,0.8);\r\n  font-size: .8rem;\r\n  height: 60px;\r\n  min-width: 85%;\r\n  border-radius: 10px;\r\n  clear: both;\r\n  padding: 10px 20px 5px 20px ;\r\n}\r\n::ng-deep .comments {\r\n  width: 50%;\r\n  max-width: 400px;\r\n  min-width: 400px;\r\n  padding: 4px 20px 5px 20px;\r\n  float: left;\r\n}\r\n::ng-deep .label-comments {\r\n  float: left;\r\n}\r\n::ng-deep .label-container {\r\n  height: 80px;\r\n}\r\n::ng-deep .tier-input {\r\n  width: 110px;\r\n}\r\n::ng-deep .servings-input {\r\n  width: 300px;\r\n}\r\n::ng-deep .budget-input {\r\n  padding: 4px 20px 5px 2px ;\r\n  width: 100px;\r\n}\r\n::ng-deep .name-input {\r\n  width: 300px;\r\n}\r\n::ng-deep .cake-flavors {\r\n  width: 300px;\r\n}\r\n::ng-deep .mat-form-field-wrapper {\r\n  padding: 0px\r\n}\r\n::ng-deep .nav-col1 {\r\n  float: left;\r\n  width: 250px;\r\n}\r\n::ng-deep .nav-col2 {\r\n  float: left;\r\n  width: 200px;\r\n}\r\n::ng-deep .nav-col3 {\r\n  float: left;\r\n  width: 200px;\r\n}\r\n.nav-bar {\r\n  width: 100%;\r\n}\r\na {\r\n  color: white;\r\n  text-decoration: none;\r\n}\r\n.newsletter {\r\n  padding-left: 15px;\r\n}\r\n.address-buffer{\r\n  height: 30px;\r\n}\r\n.sub-header{\r\n  padding: 10px;\r\n  margin: 0px;\r\n  font-weight: 300;\r\n  color: rgba(140,140,140,0.8);\r\n}\r\n/***************************************** FOOTER ************************/\r\n.footer-container{\r\n  width: 100%;\r\n  background: #3f51b5;\r\n  margin-top: 10px;\r\n  position: relative;\r\n  bottom: 0;\r\n  left: 0;\r\n}\r\n.newsletter-ft{\r\n  padding-top: 30px;\r\n  float: left;\r\n  padding-left: 30px;\r\n  color: white;\r\n}\r\n.newsletter-section{\r\n  align-content: center;\r\n  vertical-align: middle;\r\n}\r\n.contact-info{\r\n  font-size: 0.8rem;\r\n  height: 175px;\r\n  float: left;\r\n  padding-left: 30px;\r\n}\r\n.phone-email{\r\n  clear: both;\r\n}\r\na {\r\n  float: left;   \r\n  padding: 10px;\r\n  text-decoration: none;\r\n  color: white;\r\n}\r\n.newsletter-header-ft{\r\n  font-size: 1.2rem;\r\n  margin: 0;\r\n}\r\n::ng-deep .mat-form-field-wrapper {\r\n  padding: 0px\r\n}\r\n.FB{\r\n  border: 2px rgba(255, 255, 255, 0.459) solid;\r\n  border-radius: 10px;\r\n}\r\n.SM-icon{\r\n  display: block;\r\n  float: left;\r\n  width:40px;\r\n}\r\n.sign-up-button{\r\n  margin-left: 20px;\r\n  margin-bottom: 0px;\r\n}\r\n.order-input{\r\n  padding-right: 20px;\r\n  width: 90%;\r\n}\r\n.input-email{\r\n  background: #5770fdd5;\r\n  height: 2rem;\r\n  border: solid 2px #313e86;\r\n  padding-left: 10px;\r\n  border-radius: 8px;\r\n  color: white;\r\n}\r\n.input-label-email{\r\n  color: white;\r\n  border: solid 2px rgba(0,0,0, 0.0);\r\n}\r\n.address-card{\r\n  padding-top: 0px;\r\n  margin-top: 0px;\r\n}\r\n.card-spacer{\r\n  width: 100%;\r\n  padding: 10px;\r\n}\r\n.order-input {\r\n  padding: 0px 20px 5px 20px ;\r\n}"

/***/ }),

/***/ "./src/app/components/sign-up/sign-up.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/sign-up/sign-up.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <div>\r\n    <h1 class=\"form-header\">Sign Up for an Account</h1>\r\n  </div>\r\n\r\n\r\n  <mat-card _ngcontent-c6>\r\n    <mat-card-content>\r\n      <div class=\"order-form\">\r\n        <mat-form-field class=\"large-input\">\r\n          <mat-label>First Name</mat-label>\r\n          <input matInput placeholder=\"First\" [(ngModel)]=\"firstName\" required maxlength=\"50\">\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"large-input\" >\r\n          <mat-label>Last Name</mat-label>\r\n          <input matInput placeholder=\"Last\" [(ngModel)]=\"lastName\" required maxlength=\"50\">\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"large-input\">\r\n          <mat-label>Phone</mat-label>\r\n          <input matInput placeholder=\"(502)123-4567\" type=\"tel\" [(ngModel)]=\"phone\" maxlength=\"10\">\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"large-input\">\r\n          <input matInput placeholder=\"your@email.com\" type=\"email\" [(ngModel)]=\"email\" required maxlength=\"50\">\r\n          <mat-label>E-mail</mat-label>\r\n        </mat-form-field>\r\n        <mat-checkbox color=\"primary\" [(ngModel)]=\"newsletter\" class=\"small-input\">\r\n          sign up for newsletter\r\n        </mat-checkbox>\r\n      </div>\r\n    </mat-card-content>\r\n  </mat-card>\r\n\r\n  <mat-card _ngcontent-c6>\r\n    <mat-card-content>\r\n      <h4 class=\"sub-header\"><em> information isn't required, but will make delivery orders more convenient </em></h4>\r\n\r\n      <mat-form-field class=\"large-input\">\r\n        <input matInput placeholder=\"Address\">\r\n        <mat-label>Address Line 1</mat-label>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field class=\"large-input\">\r\n        <input matInput placeholder=\"Apartment\">\r\n        <mat-label>Address Line 2</mat-label>\r\n      </mat-form-field>\r\n\r\n      <div class=\"city-state-zip\">\r\n        <mat-form-field class=\"small-input\">\r\n          <input matInput placeholder=\"City\">\r\n          <mat-label>City</mat-label>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"small-input\">\r\n          <mat-select placeholder=\"State\">\r\n            <mat-option *ngFor=\"let state of states\" [value]=\"state\">{{state}}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"small-input\">\r\n          <input matInput placeholder=\"zip-code\">\r\n          <mat-label>Zip</mat-label>\r\n        </mat-form-field>\r\n      </div>\r\n    </mat-card-content>\r\n  </mat-card>\r\n\r\n\r\n  <div class=\"card-spacer\"></div>\r\n\r\n\r\n  <mat-card _ngcontent-c6>\r\n    <mat-card-content>\r\n\r\n      <mat-form-field class=\"xlarge-input\">\r\n        <input matInput placeholder=\"Enter your password\" [type]=\"hide ? 'password' : 'text'\"  required>\r\n        <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field class=\"xlarge-input\">\r\n        <input matInput placeholder=\"Verify your Password\" [type]=\"hide ? 'password' : 'text'\"  required>\r\n      </mat-form-field>\r\n\r\n      <div class=\"card-spacer\"></div>\r\n\r\n      <div>\r\n        <button mat-flat-button color=\"primary\" (click)=\"pushAccount()\">Submit</button>\r\n      </div>\r\n    </mat-card-content>\r\n  </mat-card>\r\n\r\n\r\n  <div class=\"card-spacer\"></div>\r\n\r\n  <!--FOOTER -->\r\n  <app-footer></app-footer>\r\n  </div>"

/***/ }),

/***/ "./src/app/components/sign-up/sign-up.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sign-up/sign-up.component.ts ***!
  \*********************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(router) {
        this.router = router;
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.phone = "";
        this.newsletter = true;
        this.states = [
            'KY', 'IN', 'TN', 'OH'
        ];
        this.cardTypes = ["Visa", "Mastercard", "Discover", "AMEX"];
        this.years = ["2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026"];
        this.months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        this.hide = true;
    }
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent.prototype.pushAccount = function () {
        var link = ['/account'];
        this.router.navigate([link]);
    };
    SignUpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/components/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.css */ "./src/app/components/sign-up/sign-up.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/routes/routes.module.ts":
/*!*****************************************!*\
  !*** ./src/app/routes/routes.module.ts ***!
  \*****************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_cake_gallery_cake_gallery_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/cake-gallery/cake-gallery.component */ "./src/app/components/cake-gallery/cake-gallery.component.ts");
/* harmony import */ var _components_orders_orders_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/orders/orders.component */ "./src/app/components/orders/orders.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/sign-up/sign-up.component */ "./src/app/components/sign-up/sign-up.component.ts");
/* harmony import */ var _components_account_account_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/account/account.component */ "./src/app/components/account/account.component.ts");
/* harmony import */ var _components_products_products_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/products/products.component */ "./src/app/components/products/products.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ROUTES = [
    { path: 'cake-gallery', component: _components_cake_gallery_cake_gallery_component__WEBPACK_IMPORTED_MODULE_2__["CakeGalleryComponent"] },
    { path: 'orders', component: _components_orders_orders_component__WEBPACK_IMPORTED_MODULE_3__["OrdersComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'sign-up', component: _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__["SignUpComponent"] },
    { path: 'account', component: _components_account_account_component__WEBPACK_IMPORTED_MODULE_6__["AccountComponent"] },
    { path: 'products', component: _components_products_products_component__WEBPACK_IMPORTED_MODULE_7__["ProductsComponent"] },
    { path: 'contact', component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"] },
    { path: '**', component: _components_cake_gallery_cake_gallery_component__WEBPACK_IMPORTED_MODULE_2__["CakeGalleryComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(ROUTES, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\BJLAS\PROJECTS\ngKarolinesCakes\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
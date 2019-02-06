webpackJsonp([2],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./wazazi/wazazi.module": [
		"../../../../../src/app/wazazi/wazazi.module.ts",
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/admin/admin-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_guard__ = __webpack_require__("../../../../../src/app/admin/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__andika_makala_andika_makala_component__ = __webpack_require__("../../../../../src/app/admin/andika-makala/andika-makala.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__blog_blog_component__ = __webpack_require__("../../../../../src/app/admin/blog/blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__clients_clients_component__ = __webpack_require__("../../../../../src/app/admin/clients/clients.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__makala_makala_component__ = __webpack_require__("../../../../../src/app/admin/makala/makala.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__makala_edit_makala_edit_component__ = __webpack_require__("../../../../../src/app/admin/makala-edit/makala-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__makala_subtopics_makala_subtopics_component__ = __webpack_require__("../../../../../src/app/admin/makala-subtopics/makala-subtopics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__makala_subtopics_edit_makala_subtopics_edit_component__ = __webpack_require__("../../../../../src/app/admin/makala-subtopics-edit/makala-subtopics-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__subscribers_subscribers_component__ = __webpack_require__("../../../../../src/app/admin/subscribers/subscribers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shuhuda_shuhuda_component__ = __webpack_require__("../../../../../src/app/admin/shuhuda/shuhuda.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__login_login_component__ = __webpack_require__("../../../../../src/app/admin/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__signup_signup_component__ = __webpack_require__("../../../../../src/app/admin/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__bidhaa_bidhaa_component__ = __webpack_require__("../../../../../src/app/admin/bidhaa/bidhaa.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var routes = [
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_3__admin_component__["a" /* AdminComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_guard__["a" /* AuthGuard */]],
        children: [
            { path: '', redirectTo: 'andika-blog', pathMatch: 'full' },
            { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_14__signup_signup_component__["a" /* SignupComponent */] },
            { path: 'andika-makala', component: __WEBPACK_IMPORTED_MODULE_4__andika_makala_andika_makala_component__["a" /* AndikaMakalaComponent */] },
            { path: 'andika-blog', component: __WEBPACK_IMPORTED_MODULE_5__blog_blog_component__["a" /* BlogComponent */] },
            { path: 'clients', component: __WEBPACK_IMPORTED_MODULE_6__clients_clients_component__["a" /* ClientsComponent */] },
            { path: 'makala', component: __WEBPACK_IMPORTED_MODULE_7__makala_makala_component__["a" /* MakalaComponent */] },
            { path: 'makala-edit', component: __WEBPACK_IMPORTED_MODULE_8__makala_edit_makala_edit_component__["a" /* MakalaEditComponent */] },
            { path: 'makala-subtopics', component: __WEBPACK_IMPORTED_MODULE_9__makala_subtopics_makala_subtopics_component__["a" /* MakalaSubtopicsComponent */] },
            { path: 'makala-subtopics-edit', component: __WEBPACK_IMPORTED_MODULE_10__makala_subtopics_edit_makala_subtopics_edit_component__["a" /* MakalaSubtopicsEditComponent */] },
            { path: 'subscribers', component: __WEBPACK_IMPORTED_MODULE_11__subscribers_subscribers_component__["a" /* SubscribersComponent */] },
            { path: 'shuhuda', component: __WEBPACK_IMPORTED_MODULE_12__shuhuda_shuhuda_component__["a" /* ShuhudaComponent */] },
            { path: 'bidhaa', component: __WEBPACK_IMPORTED_MODULE_15__bidhaa_bidhaa_component__["a" /* BidhaaComponent */] },
        ]
    },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_13__login_login_component__["a" /* LoginComponent */] },
];
var AdminRoutingModule = (function () {
    function AdminRoutingModule() {
    }
    return AdminRoutingModule;
}());
AdminRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]],
        providers: []
    })
], AdminRoutingModule);

//# sourceMappingURL=admin-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\r\n      text-align: center;\r\n      color: #e46c2b;\r\n      background-color:#493829; \r\n      border-bottom: none;\r\n      box-shadow: 1px -2.5px 14px 2px #000; \r\n          }\r\n\r\n  .nav { \r\n      margin-right: 2%;\r\n  }\r\n\r\n .nav li {\r\n      margin-left: 30px;\r\n      margin-top: 0px;\r\n    }    \r\n\r\n nav ul li:hover {\r\n        color: #ffffff !important;\r\n        background-color:none !important;\r\n        /*border-bottom: 2px solid #fff;    /*to be less conspicuous\r\n        border-radius: 3px;*/\r\n        height: 40px;\r\n    }  \r\n\r\n .Mwanzo .Mwanzo {\r\n        color: #ffffff !important;\r\n        background-color:none !important;\r\n        /*border-bottom: 2px solid #fff;\r\n        border-radius: 3px;*/\r\n        height: 40px;\r\n }\r\n\r\n .searchsection {\r\n        width: 70%;\r\n        background-color:none;\r\n        float: right;\r\n        margin-right: 70px;\r\n }\r\n\r\n.makala li {\r\n        margin: 0 20px;\r\n        display: inline-block;\r\n}\r\n\r\n.Makalabutton {\r\n        font-size: 15px;\r\n        color: #000;\r\n        height: 20px;\r\n        width: auto;\r\n        background: none;\r\n        border-top:none;\r\n        border-bottom: solid 2px #e46c2b;\r\n        border-left: solid 2px #e46c2b;\r\n        border-right: solid 2px #e46c2b;\r\n        border-top-left-radius: 0px;\r\n        border-top-right-radius: 0px;\r\n        border-bottom-left-radius: 4px; \r\n        border-bottom-right-radius: 4px; \r\n}\r\n\r\n.searchbox { \r\n       border: none;\r\n       border-radius: 4px;\r\n       background-color: #DCDCDC;\r\n}\r\n\r\n::-webkit-input-placeholder {\r\n        color: #000;\r\n        text-align: center;\r\n}\r\n\r\n.clear {\r\n       clear: both;            /* to solve float overlapping issues */ \r\n}\r\n\r\n .container {\r\n        background-color: #fff;\r\n        box-shadow: 1px 6.5px 12px 1px #000;\r\n        padding-top: 7%;\r\n }\r\n\r\n .mtable {\r\n        width: 80%;\r\n        font-family:Verdana, Geneva, Tahoma, sans-serif\r\n }\r\n\r\n th, td {\r\n        \r\n        padding: 3px 20px; \r\n }\r\n\r\n .rightcell {\r\n        \r\n        border-left: 1px solid #e46c2b;\r\n\r\n }\r\n\r\n .mtable tr:nth-child(even) {\r\n       background-color: #fff\r\n }\r\n\r\n.mtable tr:nth-child(odd) {\r\n       background-color: #DCDCDC;\r\n }\r\n\r\n.mtable th {\r\n       background-color: rgba(208, 108, 43, 0.6);\r\n }\r\n\r\n  footer {   \r\n      width: 100% ;\r\n      height: 43px;\r\n      vertical-align: middle;\r\n      background-color: #DCDCDC; \r\n        }  \r\n\r\n  .subcsribe_button {\r\n      height: 35px;\r\n      width: 150px;\r\n      margin-top: 3px;\r\n      margin-right: 4%;\r\n      color: #ffffff;\r\n      font-size: 17px;\r\n      background-color: #493829;\r\n      border: none;\r\n      border-radius: 4px;\r\n      float: right;\r\n }  \r\n\r\n #subscribe_text {\r\n     line-height: 2em;\r\n }\r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = " <div class=\"wrapper\">\r\n    <div class=\"sidebar\" data-background-color=\"white\" data-active-color=\"danger\">\r\n        <sidebar-cmp></sidebar-cmp>\r\n    </div>\r\n    <div class=\"main-panel\">\r\n        <navbar-cmp></navbar-cmp>\r\n        <div class=\"content\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n        <footer-cmp></footer-cmp>\r\n    </div>\r\n  </div>\r\n  <!--<fixedplugin-cmp></fixedplugin-cmp>-->\r\n  \r\n\r\n\r\n\r\n            "

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_datacarrier_service__ = __webpack_require__("../../../../../src/app/core/datacarrier.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminComponent = (function () {
    function AdminComponent(datacarrierService) {
        this.datacarrierService = datacarrierService;
        this.datacarrierService.setLandingPageStatus(false); // to remove landing page from view
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin',
        template: __webpack_require__("../../../../../src/app/admin/admin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/admin.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_datacarrier_service__["a" /* DatacarrierService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_datacarrier_service__["a" /* DatacarrierService */]) === "function" && _a || Object])
], AdminComponent);

var _a;
//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/admin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_select_dropdown__ = __webpack_require__("../../../../ngx-select-dropdown/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_routing_module__ = __webpack_require__("../../../../../src/app/admin/admin-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_guard__ = __webpack_require__("../../../../../src/app/admin/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__andika_makala_andika_makala_component__ = __webpack_require__("../../../../../src/app/admin/andika-makala/andika-makala.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__blog_blog_component__ = __webpack_require__("../../../../../src/app/admin/blog/blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__clients_clients_component__ = __webpack_require__("../../../../../src/app/admin/clients/clients.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__subscribers_subscribers_component__ = __webpack_require__("../../../../../src/app/admin/subscribers/subscribers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__footer_footer_component__ = __webpack_require__("../../../../../src/app/admin/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__header_header_component__ = __webpack_require__("../../../../../src/app/admin/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__makala_makala_component__ = __webpack_require__("../../../../../src/app/admin/makala/makala.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__makala_edit_makala_edit_component__ = __webpack_require__("../../../../../src/app/admin/makala-edit/makala-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__makala_subtopics_makala_subtopics_component__ = __webpack_require__("../../../../../src/app/admin/makala-subtopics/makala-subtopics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__makala_subtopics_edit_makala_subtopics_edit_component__ = __webpack_require__("../../../../../src/app/admin/makala-subtopics-edit/makala-subtopics-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__searchsection_searchsection_component__ = __webpack_require__("../../../../../src/app/admin/searchsection/searchsection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__uploadimage_uploadimage_component__ = __webpack_require__("../../../../../src/app/admin/uploadimage/uploadimage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__sidebar_sidebar_module__ = __webpack_require__("../../../../../src/app/admin/sidebar/sidebar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_footer_footer_module__ = __webpack_require__("../../../../../src/app/admin/shared/footer/footer.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_navbar_navbar_module__ = __webpack_require__("../../../../../src/app/admin/shared/navbar/navbar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angular2_image_upload__ = __webpack_require__("../../../../angular2-image-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__shuhuda_shuhuda_component__ = __webpack_require__("../../../../../src/app/admin/shuhuda/shuhuda.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__login_login_component__ = __webpack_require__("../../../../../src/app/admin/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__signup_signup_component__ = __webpack_require__("../../../../../src/app/admin/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__upload_video_upload_video_component__ = __webpack_require__("../../../../../src/app/admin/upload-video/upload-video.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__bidhaa_bidhaa_component__ = __webpack_require__("../../../../../src/app/admin/bidhaa/bidhaa.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//import {FileUploadModule} from 'primeng/fileupload';

























var AdminModule = (function () {
    function AdminModule() {
    }
    return AdminModule;
}());
AdminModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__admin_routing_module__["a" /* AdminRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_20__sidebar_sidebar_module__["a" /* SidebarModule */],
            __WEBPACK_IMPORTED_MODULE_21__shared_footer_footer_module__["a" /* FooterModule */],
            __WEBPACK_IMPORTED_MODULE_22__shared_navbar_navbar_module__["a" /* NavbarModule */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_select_dropdown__["a" /* SelectDropDownModule */],
            //  FileUploadModule,
            __WEBPACK_IMPORTED_MODULE_23_angular2_image_upload__["a" /* ImageUploadModule */].forRoot(),
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_7__admin_component__["a" /* AdminComponent */],
            __WEBPACK_IMPORTED_MODULE_8__andika_makala_andika_makala_component__["a" /* AndikaMakalaComponent */],
            __WEBPACK_IMPORTED_MODULE_9__blog_blog_component__["a" /* BlogComponent */],
            __WEBPACK_IMPORTED_MODULE_10__clients_clients_component__["a" /* ClientsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__subscribers_subscribers_component__["a" /* SubscribersComponent */],
            __WEBPACK_IMPORTED_MODULE_12__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_13__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_14__makala_makala_component__["a" /* MakalaComponent */],
            __WEBPACK_IMPORTED_MODULE_15__makala_edit_makala_edit_component__["a" /* MakalaEditComponent */],
            __WEBPACK_IMPORTED_MODULE_16__makala_subtopics_makala_subtopics_component__["a" /* MakalaSubtopicsComponent */],
            __WEBPACK_IMPORTED_MODULE_17__makala_subtopics_edit_makala_subtopics_edit_component__["a" /* MakalaSubtopicsEditComponent */],
            __WEBPACK_IMPORTED_MODULE_18__searchsection_searchsection_component__["a" /* SearchsectionComponent */],
            __WEBPACK_IMPORTED_MODULE_19__uploadimage_uploadimage_component__["a" /* UploadimageComponent */],
            __WEBPACK_IMPORTED_MODULE_24__shuhuda_shuhuda_component__["a" /* ShuhudaComponent */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__["FileSelectDirective"],
            __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__["FileDropDirective"], __WEBPACK_IMPORTED_MODULE_25__login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_26__signup_signup_component__["a" /* SignupComponent */], __WEBPACK_IMPORTED_MODULE_27__upload_video_upload_video_component__["a" /* UploadVideoComponent */], __WEBPACK_IMPORTED_MODULE_28__bidhaa_bidhaa_component__["a" /* BidhaaComponent */]],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__auth_guard__["a" /* AuthGuard */],
        ],
    })
], AdminModule);

//# sourceMappingURL=admin.module.js.map

/***/ }),

/***/ "../../../../../src/app/admin/andika-makala/andika-makala.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n*:focus {\r\n  outline: 0;\r\n}\r\n\r\n#outer\r\n{\r\n    width:100%;\r\n    text-align: center;\r\n}\r\n.inner\r\n{\r\n    display: inline-block;\r\n}\r\n\r\n.area{\r\n  padding: 15px;\r\n  background-color:#fff;\r\n  box-shadow:2.5px 2.5px 1.25px 5px #ddd inset;\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: 40px;\r\n  margin-bottom: 15px;\r\n  border-radius: 4px;\r\n\r\n      }\r\n   \r\n.btn{\r\n  padding:1.3px;\r\n}\r\n\r\n\r\n::-webkit-input-placeholder {\r\n        color: #000;\r\n        text-align: center;\r\n}\r\n\r\n\r\n .container {\r\n        background-color: #fff;\r\n        box-shadow: 1px 6.5px 12px 1px #000;\r\n        width: 100%;\r\n        padding:20px;\r\n }\r\n\r\n .selectbox {\r\n        color: #000;\r\n        width: 70%;\r\n        margin: 0 61px 0 0;\r\n        min-height: 30px;\r\n        padding: 5px 10px 5px 10px;\r\n        background-color: white;\r\n        font-weight: 400;\r\n        line-height: 1.42857143;\r\n        vertical-align: middle;\r\n        -ms-touch-action: manipulation;\r\n            touch-action: manipulation;\r\n        cursor: pointer;\r\n        -webkit-user-select: none;\r\n           -moz-user-select: none;\r\n            -ms-user-select: none;\r\n                user-select: none;\r\n        border: 1px solid #ccc;\r\n        border-radius: 4px;\r\n        color: #333;\r\n        background-color: #fff;\r\n        white-space: nowrap;\r\n        overflow-x: hidden;\r\n        text-overflow: ellipsis;\r\n        float: right;\r\n}\r\n\r\n .entertitle {\r\n    margin: 0 0 20px 61px;\r\n  }\r\n  \r\n  .entertitle input {\r\n    color: #000;\r\n    width: 70%;\r\n    margin: 0 61px 0 0;\r\n    min-height: 30px;\r\n    padding: 5px 10px 5px 10px;\r\n    background-color: white;\r\n    font-weight: 400;\r\n    line-height: 1.42857143;\r\n    vertical-align: middle;\r\n    -ms-touch-action: manipulation;\r\n        touch-action: manipulation;\r\n    cursor: pointer;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    color: #333;\r\n    background-color: #fff;\r\n    white-space: nowrap;\r\n    overflow-x: hidden;\r\n    text-overflow: ellipsis;\r\n    float: right;\r\n  }\r\n\r\n /* select:focus > option:focus { \r\n    background: #333 !important;\r\n}*/\r\n\r\n  \r\n  .uploadimage {\r\n    width: 50%;\r\n    display: inline-block;\r\n    margin: 0 20% 0 6%;\r\n  }\r\n\r\n  \r\n  .post-to-page {\r\n    color: #fff;\r\n    width: 25%;\r\n    margin: 55px 0 30px 40%;\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    border-radius: 5px;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/andika-makala/andika-makala.component.html":
/***/ (function(module, exports) {

module.exports = "<main>\r\n    <div class=\"container\" >\r\n\r\n     <form action=\"/action_page.php\" >\r\n<br><br> \r\n<!--<ngx-select-dropdown [config]=\"config\" [options]=\"makalaTitles\" \r\n[(value)]=\"dataModel\" [multiple]=\"false\" ></ngx-select-dropdown>-->\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"entertitle\">\r\n  <label>Tiltle</label><input [(ngModel)]=\"makala.title\" name=\"title\">\r\n</div>\r\n\r\n<div class=\"entertitle\">\r\n  <label>Topic category</label>\r\n  <select  class=\"selectbox\" (input)=\"onInput($event)\" [(ngModel)]=\"makalacategory\" name=\"categoryname\">   \r\n    <option *ngFor=\"let makalacategory of makalaCategories\" value= {{makalacategory.id}} [ngValue]=\"makalacategory\">{{makalacategory.category_name}}</option>\r\n  </select>\r\n</div>\r\n\r\n<div class=\"entertitle\">\r\n  <label>Food name</label>\r\n  <select  class=\"selectbox\" (input)=\"onFoodInput($event)\" [(ngModel)]=\"food\" name=\"foodname\">   \r\n    <option *ngFor=\"let food of foods\" value= {{food.id}} [ngValue]=\"food\">{{food.name}}</option>\r\n  </select>\r\n</div>\r\n\r\n<textarea class=\"area\"  rows=\"15px\" cols=\"100px\" name=\"usrtxt\"   placeholder=\"Your contents here...\" [(ngModel)]=\"makala.body\" >\r\n\r\n</textarea><br>\r\n\r\n<div style=\"display: block;\r\n  \">  \r\n\r\n\r\n\r\n\r\n  \r\n<!-- onServerRespose listener gets image details from upload image component-->\r\n  <app-uploadimage\r\n    (onServerResponse) = \"initializeImageId($event)\"\r\n    class=\"uploadimage\"\r\n  ></app-uploadimage>\r\n<!---(click)=\"save()\"-->\r\n\r\n\r\n\r\n\r\n\r\n  <button  class=\"btn-success post-to-page\" (click)=\"add(); clear()\"> Post New Article </button>\r\n</div>\r\n\r\n</form>\r\n \r\n    </div>\r\n </main>\r\n \r\n-->\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/admin/andika-makala/andika-makala.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_makala_service__ = __webpack_require__("../../../../../src/app/core/makala.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__makala__ = __webpack_require__("../../../../../src/app/makala.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AndikaMakalaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AndikaMakalaComponent = (function () {
    // config = {
    //   displayKey:"description", //if objects array passed which key to be displayed defaults to description
    //   search:true, //true/false for the search functionlity defaults to false,
    //   height: 'auto', //height of the list so that if there are more no of items it can show a scroll defaults to auto. With auto height scroll will never appear
    //   placeholder:'Select', // text to be displayed when no item is selected defaults to Select,
    //   customComparator: ()=>{}, // a custom function using which user wants to sort the items. default is undefined and Array.sort() will be used in that case,
    //   //limitTo:  this.makalaTitles.length// a number thats limits the no of options displayed in the UI similar to angular's limitTo pipe
    // }
    function AndikaMakalaComponent(makalaService) {
        var _this = this;
        this.makalaService = makalaService;
        this.makala = new __WEBPACK_IMPORTED_MODULE_2__makala__["a" /* Makala */]();
        var that = this;
        this.makalaTitles = [];
        this.makalaCategories = [];
        this.makalaCategories = makalaService.makalaCategories;
        this.subscription = this.makalaService.fetchedmakalaCategories.subscribe(function (value) {
            _this.makalaCategories = value;
            _this.makalaCategories.unshift({ category_name: "", id: null });
            // value.map(x => that.makalaTitles.push(x.category_name));
        });
        this.foods = makalaService.food;
        this.subscription = this.makalaService.fetchedfoods.subscribe(function (value) {
            _this.foods = value;
            _this.foods.unshift({ id: null, name: "", food_type: "", teacher_id: null });
        });
    }
    AndikaMakalaComponent.prototype.ngOnInit = function () {
        this.makala.teacher_id = 2; // to be able to capture id of current user
        this.makalaService.getMakalaCategory();
        this.makalaService.getFood();
    };
    AndikaMakalaComponent.prototype.onFoodInput = function ($event) {
        $event.preventDefault();
        this.makala.food_id = $event.target.value;
    };
    AndikaMakalaComponent.prototype.onInput = function ($event) {
        $event.preventDefault();
        this.makala.topic_category_id = $event.target.value;
    };
    AndikaMakalaComponent.prototype.initializeImageId = function ($event) {
        this.makala.image_id = $event.id;
    };
    AndikaMakalaComponent.prototype.add = function () {
        if (!this.makala.title || !this.makala.image_id) {
            return;
        }
        this.makalaService.create(this.makala);
    };
    AndikaMakalaComponent.prototype.clear = function () {
        this.makala.title = '';
        this.makala.body = '';
        this.makala.topic_category_id = null;
        this.makala.food_id = null;
        this.makalacategory = this.makalaCategories[0];
        this.food = this.foods[0];
    };
    return AndikaMakalaComponent;
}());
AndikaMakalaComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-andika-makala',
        template: __webpack_require__("../../../../../src/app/admin/andika-makala/andika-makala.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/andika-makala/andika-makala.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_makala_service__["a" /* MakalaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_makala_service__["a" /* MakalaService */]) === "function" && _a || Object])
], AndikaMakalaComponent);

var _a;
//# sourceMappingURL=andika-makala.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('token')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AuthGuard);

var _a;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/admin/bidhaa/bidhaa.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n    background-color: #fff;\n    box-shadow: 1px 6.5px 12px 1px #000;\n    width: 100%;\n    padding:40px 20px 20px 20px;\n}\n\n.entertitle {\n    margin: 0 0 20px 61px;\n  }\n\n.addimage {\n    margin: 40px 61px 20px 61px;\n  }\n\n\n.post-to-page {\n    color: #fff;\n    width: 25%;\n    margin: 55px 0 30px 40%;\n    padding-top: 15px;\n    padding-bottom: 15px;\n    border-radius: 5px;\n  }\n\n  \n.entertitle input {\n    color: #000;\n    width: 70%;\n    margin: 0 61px 0 0;\n    min-height: 30px;\n    padding: 5px 10px 5px 10px;\n    background-color: white;\n    font-weight: 400;\n    line-height: 1.42857143;\n    vertical-align: middle;\n    -ms-touch-action: manipulation;\n        touch-action: manipulation;\n    cursor: pointer;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    color: #333;\n    background-color: #fff;\n    white-space: nowrap;\n    overflow-x: hidden;\n    text-overflow: ellipsis;\n    float: right;\n  }\n\n  .selectbox {\n    color: #000;\n    width: 70%;\n    margin: 0 61px 0 0;\n    min-height: 30px;\n    padding: 5px 10px 5px 10px;\n    background-color: white;\n    font-weight: 400;\n    line-height: 1.42857143;\n    vertical-align: middle;\n    -ms-touch-action: manipulation;\n        touch-action: manipulation;\n    cursor: pointer;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    color: #333;\n    background-color: #fff;\n    white-space: nowrap;\n    overflow-x: hidden;\n    text-overflow: ellipsis;\n    float: right;\n}\n\n\n.selectstatus {\n    margin: 0 0 20px 61px;\n}\n\n\n.selectstatus input {\n    color: #000;\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    margin: 0 10px 0 30%;\n    padding: 5px 10px 5px 10px;\n    background-color: white;\n    font-weight: 400;\n    line-height: 1.42857143;\n    vertical-align: middle;\n    -ms-touch-action: manipulation;\n        touch-action: manipulation;\n    cursor: pointer;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    color: #333;\n    background-color: #fff;\n    white-space: nowrap;\n    overflow-x: hidden;\n    text-overflow: ellipsis;\n    \n\n}\n\n\n.mtable {\n    width: 80%;\n    font-family:Verdana, Geneva, Tahoma, sans-serif\n}\n\n.block {\n    width: 89%;\n    margin-left: auto;\n    margin-right: auto;\n}\n\nth, td {\n    \n    padding: 3px 20px; \n}\n\n.addtitle {\n    padding-left: 5%; \n    padding-right: 5%;  \n    margin-top: 9px;\n    margin-bottom: 6px; \n    border: 1px solid #fff;\n    border-radius: 4px; \n}\n\n.addtopicbutton {\n    background: none;\n    border: none;\n    color:white;\n}\n\n.rightcell {\n    \n    border-left: 1px solid #e46c2b;\n}\n\n#rightcell {\n    background-color: rgba(208, 108, 43, 1);\n}\n\n.mtable tr:nth-child(even) {\n   background-color: #fff\n}\n\n.mtable tr:nth-child(odd) {\n   background-color: #DCDCDC;\n}\n\n.mtable th {\n   background-color: rgba(208, 108, 43, 0.6);\n}\n\n.number {\n   width: 10%;\n   text-align: center;\n}\n\n.name {\n   width: 46%;\n}\n\n.edit {\n   width: 22%;\n   text-align: center;\n} \n\n.remove {\n   width: 22%;\n   text-align: center;\n}\n\ntd button {\n    background: none;\n    border: none;\n}\n\ntr { \n    height: 65px;\n}  \n\n\ntr td { \n    padding: 5px 8px;\n}  \n\n\ntr td input {\n    color: rgba(51, 51, 51, .8);\n    padding: 1px 7px;\n    margin: 0 20px 0 0;\n    border: solid 1px  rgba(51, 51, 51, .5);\n    height: 40px;\n    border-radius: 4px; \n} \n\n\ntr td p {\n    margin: 0; \n}  \n\n.addcategory {\n    margin: 30px 0 30px 5%;\n}\n\n.addcategory h3 {\n    margin: 0 0 35px 0 !important;\n}\n\n.addcategory label {\n    color: #66615b;\n    font-size: 16px;  \n    font-weight: 400 !important;\n}\n\n.addcategory input {\n    width: 80%;\n    height: 40px;\n    padding: 1px 7px;\n    margin: 0 0 0 5px;\n    border: solid 1px  rgba(51, 51, 51, .5);\n    border-radius: 4px;\n}\n\n.addcategory .btn-success {\n    color: #fff;\n    font-size: 25px;\n    line-height: 30px;\n    margin: 0 4% 0 0;\n    padding: 4px 40px;\n    float: right;\n    border-radius: 4px;\n    border: solid 1px;\n}\n\n#ordertitle {\n    margin: 0 0 0 5%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/bidhaa/bidhaa.component.html":
/***/ (function(module, exports) {

module.exports = "<main>\n  <div class=\"container\" >\n  \n    <div class=\"entertitle\">\n      <label>Product category</label>\n      <select  class=\"selectbox\" (input)=\"onInput($event)\" [(ngModel)]=\"productcategory\" name=\"categoryname\">   \n        <option *ngFor=\"let productcategory of productsCategories\" value= {{productcategory.id}} [ngValue]=\"productcategory\">{{productcategory.name}}</option>\n      </select>\n    </div>\n  \n  \n    <div class=\"entertitle\">\n      <label>Product Name</label><input name=\"name\" [(ngModel)]=\"bidhaa.name\">\n      <br>\n    </div>\n\n    <div class=\"entertitle\">\n      <label>Product Price</label><input name=\"price\" [(ngModel)]=\"bidhaa.price\">\n    </div>\n\n    <br>\n    <div class=\"selectstatus\">\n    <form action=\"/action_page.php\">\n        <label>Display on Home Page</label>\n        <input type=\"radio\" name=\"gender\" value=\"Yes\" (click)=\"display()\">Yes\n        <input type=\"radio\" name=\"gender\" value=\"No\" (click)=\"donotdisplay()\" checked=\"checked\"> No\n    </form>\n    </div>\n \n    <div class=\"addimage\">\n    <app-uploadimage\n      (onServerResponse) = \"initializeImageId($event)\"\n      class=\"uploadimage\"\n    ></app-uploadimage>\n\n    <button  class=\"btn-success post-to-page\" (click)=\"createProduct();\"> Post New Product </button>\n    </div>\n\n    <!--clear()-->\n    <br><br><br><br><br><br>\n\n    <div class=\"addcategory\">\n      <h3>Add new Product category</h3>\n      <input placeholder=\"Category name\"  name=\"name\" [(ngModel)]=\"bidhaacategory.name\">\n      <button class=\"btn-success\" (click)=\"createProductCategory()\">+</button>\n    </div>\n   <br>\n\n\n\n   <div class=\"block\">\n    <div class=\"navbar navbar-inner block-header\">\n        <div class=\"pull-right\"><span class=\"badge badge-info\">8</span>\n\n        </div>\n    \n    <div class=\"block-content collapse in\">\n        <table class=\"table table-striped\">\n            <thead>\n                <tr>\n                    <th class=\"number\">#</th>\n                    <th class=\"name\">Category Name</th>\n                    <th class=\"edit\">Edit</th>\n                    <th class=\"remove\">Remove</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let productcategory of productsCategories; let i = index\">\n                    <td class=\"number\">{{i + 1}}</td>\n                    <td><span *ngIf=\"!showEraser[i]\">{{productcategory.name}}</span> <input *ngIf=\"showEraser[i]\" [(ngModel)]=\"bidhaacategory.name\" placeholder=\"{{productcategory.name}}\"><button class=\"ti-close\" *ngIf=\"showEraser[i]\" (click)=\"alterEditMode(i)\"></button></td>\n                    <td class=\"edit\"><button (click) = \"sendUpdate(productcategory.id, i)\"><span class=\"ti-eraser\" *ngIf=\"!showEraser[i]\"></span><p *ngIf=\"showEraser[i]\">Confirm</p></button></td>\n                    <td class=\"remove\"><button (click)=\"deleteProductCategory(productcategory.id, i)\"><span class=\"ti-trash\"></span></button></td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n\n</div>\n\n<br>\n\n</div>\n\n\n<br><br><br><br><br><br>\n\n<h3 id=\"ordertitle\">Orders</h3>\n<div class=\"block\">\n    <div class=\"navbar navbar-inner block-header\">\n        <div class=\"pull-right\"><span class=\"badge badge-info\">2</span>\n\n        </div>\n    \n    <div class=\"block-content collapse in\">\n        <table class=\"table table-striped\">\n            <thead>\n                <tr>\n                    <th class=\"number\">#</th>\n                    <th class=\"name\">Category Name</th>\n                    <th class=\"edit\">Phone Number</th>\n                    <th class=\"remove\">Remove</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let order of orders; let i = index\">\n                    <td class=\"number\">{{i + 1}}</td>\n                    <td><span *ngIf=\"!showEraser[i]\">{{order.ordertext}}</span></td>\n                    <td class=\"edit\"><span>{{order.phonenumber}}</span></td>\n                    <td class=\"remove\"><button (click)=\"deleteProductCategory(order.id, i)\"><span class=\"ti-trash\"></span></button></td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n\n</div>\n\n<br>\n\n</div>\n\n\n</div>\n</main>"

/***/ }),

/***/ "../../../../../src/app/admin/bidhaa/bidhaa.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_bidhaa_service__ = __webpack_require__("../../../../../src/app/core/bidhaa.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bidhaa__ = __webpack_require__("../../../../../src/app/bidhaa.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bidhaaCategory__ = __webpack_require__("../../../../../src/app/bidhaaCategory.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BidhaaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BidhaaComponent = (function () {
    function BidhaaComponent(bidhaaService) {
        var _this = this;
        this.bidhaaService = bidhaaService;
        this.bidhaa = new __WEBPACK_IMPORTED_MODULE_2__bidhaa__["a" /* Bidhaa */]();
        this.bidhaacategory = new __WEBPACK_IMPORTED_MODULE_3__bidhaaCategory__["a" /* BidhaaCategory */]();
        this.showEraser = {};
        this.productsCategories = [];
        this.orders = [];
        this.productsCategories = this.bidhaaService.bidhaaCategory;
        this.subscription = this.bidhaaService.fetchedbidhaaCategories.subscribe(function (value) {
            _this.productsCategories = value;
            //this.productsCategories.unshift({name:"", id:null});
        });
        this.orders = this.bidhaaService.orders;
        this.subscription = this.bidhaaService.fetchedOrders.subscribe(function (value) {
            _this.orders = value;
        });
    }
    BidhaaComponent.prototype.ngOnInit = function () {
        this.getBidhaaCategories();
        this.getOrders();
    };
    // createMakalaCategory(){
    //   if (!this. bidhaacategory.category_name ) { return; } 
    //   this.bidhaaService.create(this.bidhaacategory)//test
    // }
    BidhaaComponent.prototype.getOrders = function () {
        this.bidhaaService.getOrders();
    };
    BidhaaComponent.prototype.getBidhaaCategories = function () {
        this.bidhaaService.getBidhaaCategory(); //test
    };
    BidhaaComponent.prototype.createProduct = function () {
        if (!this.bidhaa.name) {
            return;
        }
        this.bidhaa.teacher_id = 1;
        this.bidhaaService.create(this.bidhaa); //test
    };
    BidhaaComponent.prototype.createProductCategory = function () {
        var that = this;
        if (!this.bidhaacategory.name) {
            return;
        }
        this.bidhaaService.createCategory(this.bidhaacategory).then(function (response) { return that.reloadProductsCategories(); });
        //this.productsCategories.push(this.bidhaacategory);
    };
    BidhaaComponent.prototype.reloadProductsCategories = function () {
        var _this = this;
        this.bidhaaService.getProductsCategories().then(function (category) { return _this.productsCategories = category; });
    };
    BidhaaComponent.prototype.initializeImageId = function (event) {
        this.bidhaa.image_id = event.id;
        console.log(event.id);
    };
    BidhaaComponent.prototype.onInput = function ($event) {
        $event.preventDefault();
        this.bidhaa.topic_category_id = $event.target.value;
    };
    BidhaaComponent.prototype.display = function () {
        this.bidhaa.status = false;
    };
    BidhaaComponent.prototype.donotdisplay = function () {
        this.bidhaa.status = true;
    };
    BidhaaComponent.prototype.alterEditMode = function (i) {
        this.showEraser[i] = !this.showEraser[i];
        this.bidhaacategory.name = "";
    };
    BidhaaComponent.prototype.sendUpdate = function (id, i) {
        this.showEraser[i] = !this.showEraser[i];
        if (!this.bidhaacategory.name) {
            return;
        }
        this.bidhaaService.updateProductCategory(this.bidhaacategory, id);
        this.productsCategories[i].name = this.bidhaacategory.name;
        this.bidhaacategory.name = "";
    };
    BidhaaComponent.prototype.deleteProductCategory = function (id, i) {
        this.productsCategories.splice(i, 1);
        this.bidhaaService.deleteCategory(id).subscribe();
    };
    return BidhaaComponent;
}());
BidhaaComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-bidhaa',
        template: __webpack_require__("../../../../../src/app/admin/bidhaa/bidhaa.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/bidhaa/bidhaa.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_bidhaa_service__["a" /* BidhaaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_bidhaa_service__["a" /* BidhaaService */]) === "function" && _a || Object])
], BidhaaComponent);

var _a;
//# sourceMappingURL=bidhaa.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/blog/blog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.area{\r\n  padding: 15px;\r\n  background-color:#fff;\r\n  box-shadow:0.5px 2.5px 0.25px 1px  #ddd inset;\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: 40px;\r\n  margin-bottom: 15px;\r\n  border-radius: 4px;\r\n  \r\n      }\r\n\r\n.container {\r\n        background-color: #fff;\r\n        box-shadow: 1px 6.5px 12px 1px #000;\r\n        width: 100%;\r\n        padding:20px;\r\n }\r\n\r\n.entertitle {\r\n  margin: 0 0 20px 61px;\r\n}\r\n\r\n.entertitle input {\r\n  color: #000;\r\n  width: 94%;\r\n  margin: 0 61px 20px 0;\r\n  min-height: 30px;\r\n  padding: 5px 10px 5px 10px;\r\n  background-color: white;\r\n  font-weight: 400;\r\n  line-height: 1.42857143;\r\n  vertical-align: middle;\r\n  -ms-touch-action: manipulation;\r\n      touch-action: manipulation;\r\n  cursor: pointer;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  color: #333;\r\n  background-color: #fff;\r\n  white-space: nowrap;\r\n  overflow-x: hidden;\r\n  text-overflow: ellipsis;\r\n  float: right;\r\n}\r\n\r\n.uploadimage {\r\n  width: 50%;\r\n  display: inline-block;\r\n  margin: 40px 20% 40px 6%;\r\n}\r\n\r\n\r\n.filesupload {\r\n  margin: 20px 10% 100px 6%;\r\n}\r\n\r\n#videourl-input {\r\n  margin-left: 6%;\r\n}\r\n\r\n#videourl-input input {\r\n  color: #000;\r\n  width: 70%;\r\n  margin: 0 61px 20px 0;\r\n  min-height: 40px;\r\n  padding: 5px 10px 5px 10px;\r\n  background-color: white;\r\n  font-size: 17px;\r\n  font-weight: 400;\r\n  line-height: 1.42857143;\r\n  vertical-align: middle;\r\n  -ms-touch-action: manipulation;\r\n      touch-action: manipulation;\r\n  cursor: pointer;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  border: 2px solid rgba(92, 184, 92, 1);;\r\n  border-radius: 4px;\r\n  color: #333;\r\n  background-color: #fff;\r\n  white-space: nowrap;\r\n  overflow-x: hidden;\r\n  text-overflow: ellipsis;\r\n  \r\n}\r\n\r\n.post-to-page {\r\n  color: #fff;\r\n  width: 33%;\r\n  margin: 15px 0 20px 30%;\r\n  padding-top: 15px;\r\n  padding-bottom: 15px;\r\n  border-radius: 5px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/blog/blog.component.html":
/***/ (function(module, exports) {

module.exports = "<main>\r\n <div class=\"container\" >\r\n\r\n <form>\r\n <br>\r\n\r\n  <div class=\"entertitle\">\r\n   <input [(ngModel)]=\"blogpost.title\" name=\"title\" placeholder=\"Post's title\">\r\n  </div>\r\n\r\n\r\n  <textarea class=\"area\" [(ngModel)]=\"blogpost.body\"\r\n  rows=\"15px\" cols=\"100px\"\r\n  name=\"description\"   placeholder=\"Post's contents ...\">\r\n\r\n  </textarea><br>\r\n\r\n  <div style=\"display: block;\r\n    \r\n    \">\r\n\r\n  <!-- onServerRespose listener gets image details from upload image component-->\r\n    <app-uploadimage\r\n      (onServerResponse) = \"initializeImageId($event)\"\r\n      class=\"uploadimage\"\r\n    ></app-uploadimage>\r\n  <!---(click)=\"save()\"-->\r\n    \r\n  </div>\r\n  <!--<a href=\"#\" style=\"position: absolute;left: 80%;\">*View Earlier Posts</a>-->\r\n\r\n</form>\r\n\r\n\r\n  <div class=\"row filesupload\">\r\n      <div class=\"col-xl-4\">\r\n         <h3>Audio upload</h3>\r\n          <!--<input type=\"file\" (change)=\"fileChange($event)\" placeholder=\"Upload file\" accept=\".pdf, .doc, .docx, .png, .jpeg\">\r\n          <p>sfgaszbaxcg</p> -->\r\n\r\n   \r\n        <input #fileInput name=\"audio\" type=\"file\"/>\r\n        <button (click)=\"addFile()\">Add</button>  \r\n\r\n\r\nUPLOAD2\r\n      <!--  <div class=\"form-group\">\r\n            <label for=\"file\">Choose File</label>\r\n            <input type=\"file\"\r\n                   id=\"file\" accept=\".mp3\" name=\"audio\"\r\n                   (change)=\"handleFileInput($event.target.files)\">\r\n        </div>\r\n\r\n        <br><br>\r\n\r\n       <button (click) = \"uploadFileToActivity()\"> upload </button> -->\r\nAdf\r\n\r\n        <br><br>\r\n     <!--   <p-fileUpload name=\"myfile[]\" url=\"http://api.jualishebora.gq/api/v1/images\" multiple=\"multiple\"\r\naccept=\"audio/*,image/*\" auto=\"auto\"></p-fileUpload> -->\r\n        <br><br><br> \r\n          \r\n<!--sff -->\r\n\r\n\r\n\r\n\r\n\r\n       <br>\r\n          <form>\r\n              <div class=\"form-group\">\r\n\r\n\r\n           <!-- <div ng2FileDrop\r\n            [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\"\r\n            (fileOver)=\"fileOverBase($event)\"\r\n            [uploader]=\"uploader\"\r\n            (onFileDrop)=\"fileselect($event)\"\r\n            class=\"well my-drop-zone\">\r\n           Base drop zone\r\n           </div> -->\r\n                 <!-- <label for=\"single\">single File</label> -->\r\n                 <!-- <input type=\"file\" (change)=\"fileselect($event)\" class=\"form-control\" name=\"single\" ng2FileSelect [uploader]=\"uploader\" /> -->                              \r\n              </div> \r\n             <!-- <div class=\"form-group\">\r\n                  <label for=\"multiple\">Multiple Files</label>\r\n                  <input type=\"file\" class=\"form-control\" name=\"multiple\" ng2FileSelect [uploader]=\"uploader\" multiple  />\r\n              </div> -->\r\n                        \r\n          </form> \r\n      </div>\r\n     <!-- <div class=\"col-xl-8\">\r\n          Queue length: {{ uploader?.queue?.length }}\r\n\r\n          <table class=\"table\">\r\n              <thead>\r\n              <tr>\r\n                  <th width=\"50%\">Name</th>\r\n                  <th>Size</th>\r\n                  <th>Progress</th>\r\n                  <th>Status</th>\r\n                  <th>Actions</th>\r\n              </tr>\r\n              </thead>\r\n              <tbody>\r\n              <tr *ngFor=\"let item of uploader.queue\">\r\n                  <td><strong>{{ item.file.name }}</strong></td>\r\n                  <td nowrap>{{ item.file.size/1024/1024 | number:'.2' }} MB</td>\r\n                  <td>\r\n                      <div class=\"progress\" style=\"margin-bottom: 0;\">\r\n                          <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>\r\n                      </div>\r\n                  </td>\r\n                  <td class=\"text-center\">\r\n                      <span *ngIf=\"item.isSuccess\"><i class=\"glyphicon glyphicon-ok\"></i></span>\r\n                      <span *ngIf=\"item.isCancel\"><i class=\"glyphicon glyphicon-ban-circle\"></i></span>\r\n                      <span *ngIf=\"item.isError\"><i class=\"glyphicon glyphicon-remove\"></i></span>\r\n                  </td>\r\n                  <td nowrap>\r\n                      <button type=\"button\" class=\"btn btn-success btn-xs\"\r\n                              (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\r\n                          <span class=\"glyphicon glyphicon-upload\"></span> Upload\r\n                      </button>\r\n                      <button type=\"button\" class=\"btn btn-warning btn-xs\"\r\n                              (click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">\r\n                          <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel\r\n                      </button>\r\n                      <button type=\"button\" class=\"btn btn-danger btn-xs\"\r\n                              (click)=\"item.remove()\">\r\n                          <span class=\"glyphicon glyphicon-trash\"></span> Remove\r\n                      </button>\r\n                  </td>\r\n              </tr>\r\n              </tbody>\r\n          </table>\r\n\r\n          <div>\r\n              <div>\r\n                  Queue progress:\r\n                  <div class=\"progress\" style=\"\">\r\n                      <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\r\n                  </div>\r\n              </div>\r\n              <button type=\"button\" class=\"btn btn-success btn-s\"\r\n                      (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\r\n                  <span class=\"glyphicon glyphicon-upload\"></span> Upload all\r\n              </button>\r\n              <button type=\"button\" class=\"btn btn-warning btn-s\"\r\n                      (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\r\n                  <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel all\r\n              </button>\r\n              <button type=\"button\" class=\"btn btn-danger btn-s\"\r\n                      (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\r\n                  <span class=\"glyphicon glyphicon-trash\"></span> Remove all\r\n              </button>\r\n          </div>\r\n      </div> -->\r\n  </div>\r\n\r\n\r\n  <app-upload-video></app-upload-video>\r\n  <div id=\"videourl-input\">\r\n  <h5>4.</h5>\r\n  <input [(ngModel)]=\"blogpost.video_url\" placeholder=\"Paste video URL here \">   \r\n  </div>\r\n  \r\n\r\n  <button class=\"btn-success post-to-page\" (click)=\"add()\"> Post to page </button>\r\n\r\n</div>\r\n</main>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/admin/blog/blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_blogpost_service__ = __webpack_require__("../../../../../src/app/core/blogpost.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





function readBase64(file) {
    var reader = new FileReader();
    var future = new Promise(function (resolve, reject) {
        reader.addEventListener("load", function () {
            resolve(reader.result);
        }, false);
        reader.addEventListener("error", function (event) {
            reject(event);
        }, false);
        reader.readAsDataURL(file);
    });
    return future;
}
var BlogComponent = (function () {
    function BlogComponent(blogpostService, http) {
        this.blogpostService = blogpostService;
        this.http = http;
        this.post = {};
        this.blogpost = { topic_id: 1 };
        this.uploader = new __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__["FileUploader"]({ url: 'https://lishe-360.herokuapp.com/api/v1/images' /*http://localhost:3001/upload*/ });
        this.fileToUpload = null;
        //   fileChange(event) {
        //     let fileList: FileList = event.target.files;
        //     if(fileList.length > 0) {
        //         let file: File = fileList[0];
        //         let formData:FormData = new FormData();
        //         formData.append('uploadFile', file, file.name);
        //         let headers = new Headers();
        //         /** In Angular 5, including the header Content-Type can invalidate your request */
        //         headers.append('Content-Type', 'multipart/form-data');
        //         headers.append('Accept', 'application/json');
        //         let options = new RequestOptions({ headers: headers });
        //         this.http.post('http://api.jualishebora.ga/api/v1/images', formData, options)
        //             .map(res => res.json())
        //             .catch(error => Observable.throw(error))
        //             .subscribe(
        //                 data => console.log('success'),
        //                 error => console.log(error)
        //             )
        //     }
        //     console.log(event.target.value)
        // }
        //public uploader:FileUploader = new FileUploader({url: URL});
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
        this.uploader.onSuccessItem = function (item, response, status, headers) {
            console.log("onSuccessItem " + status, item);
        };
    }
    BlogComponent.prototype.addFile = function () {
        var _this = this;
        var fi = this.fileInput.nativeElement;
        if (fi.files && fi.files[0]) {
            var fileToUpload = fi.files[0];
            this.blogpostService
                .upload(fileToUpload)
                .subscribe(function (res) {
                console.log(res.json().data.audio_url);
                _this.blogpost.audio_url = res.json().data.audio_url;
            });
        }
    };
    BlogComponent.prototype.handleFileInput = function (files) {
        this.fileToUpload = files.item(0);
        // this.uploadFileToActivity();
    };
    BlogComponent.prototype.uploadFileToActivity = function () {
        this.blogpostService.postFile(this.fileToUpload).subscribe(function (data) {
            // do something, if upload success
        }, function (error) {
            console.log(error);
        });
    };
    BlogComponent.prototype.DocUpload = function (env) {
        console.log(env);
    };
    /*
    * receives data via event emmiter from upload image component and initializes image_id property
    * */
    BlogComponent.prototype.initializeImageId = function (event) {
        this.blogpost.image_id = event.id;
        console.log(event.id);
    };
    BlogComponent.prototype.ngOnInit = function () {
    };
    BlogComponent.prototype.save = function () {
        this.blogpostService.update(this.post);
    };
    BlogComponent.prototype.add = function () {
        console.log(this.blogpost.title);
        if (!this.blogpost.title) {
            return;
        }
        this.blogpostService.create(this.blogpost);
    };
    BlogComponent.prototype.fileselect = function (event) {
        var file = event[0];
        console.log(file);
        readBase64(file)
            .then(function (data) {
            console.log(data);
        });
    };
    BlogComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    BlogComponent.prototype.fileOverAnother = function (e) {
        this.hasAnotherDropZoneOver = e;
    };
    return BlogComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])("fileInput"),
    __metadata("design:type", Object)
], BlogComponent.prototype, "fileInput", void 0);
BlogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-blog',
        template: __webpack_require__("../../../../../src/app/admin/blog/blog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/blog/blog.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__core_blogpost_service__["a" /* BlogpostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__core_blogpost_service__["a" /* BlogpostService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]) === "function" && _b || Object])
], BlogComponent);

var _a, _b;
//# sourceMappingURL=blog.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/clients/clients.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, " .container {\r\n        background-color: #fff;\r\n        box-shadow: 1px 6.5px 12px 1px #000;\r\n        width: 100%;\r\n        padding:20px;\r\n\r\n }\r\n .mtable {\r\n        width: 80%;\r\n        font-family:Verdana, Geneva, Tahoma, sans-serif\r\n }\r\n\r\n .mtable-checked {\r\n        width: 80%;\r\n        font-family:Verdana, Geneva, Tahoma, sans-serif;\r\n        margin-bottom:  100px;\r\n }\r\n\r\n th, td {\r\n        \r\n        padding: 3px 20px; \r\n }\r\n\r\n .rightcell {\r\n        \r\n        border-left: 1px solid #e46c2b;\r\n\r\n }\r\n\r\n .mtable tr:nth-child(even), .mtable-checked tr:nth-child(even) {\r\n       background-color: #fff\r\n }\r\n\r\n.mtable tr:nth-child(odd), .mtable-checked tr:nth-child(odd) {\r\n       background-color: #DCDCDC;\r\n }\r\n\r\n.mtable th, .mtable-checked th {\r\n       background-color: rgba(208, 108, 43, 0.6);\r\n }\r\n\r\n \r\n.block {\r\n      width: 89%;\r\n      margin-left: auto;\r\n      margin-right: auto;\r\n}\r\n\r\n.number {\r\n      width: 4%;\r\n}\r\n\r\n.name {\r\n      width: 19%;\r\n}\r\n\r\n.childsage {\r\n      width: 18%;\r\n}\r\n\r\n.phonenumber {\r\n      width: 22%; \r\n}\r\n\r\n.status {\r\n      width: 18%;\r\n}\r\n\r\n td button {\r\n      background: none;\r\n      border: none;\r\n}\r\n\r\n tr { \r\n      height: 65px;\r\n}  \r\n\r\ntr th { \r\n      text-align: center;\r\n} \r\n\r\ntr td { \r\n      padding: 5px 8px;\r\n      text-align: center;\r\n}  \r\n\r\n\r\ntr td input {\r\n      color: rgba(51, 51, 51, .8);\r\n      padding: 1px 7px;\r\n      margin: 0 20px 0 0;\r\n      border: solid 1px  rgba(51, 51, 51, .5);\r\n      height: 40px;\r\n      border-radius: 4px; \r\n} \r\n\r\n\r\ntr td p {\r\n      margin: 0; \r\n}  \r\n\r\n.clientslist {\r\n      margin: 0 0 50px 6%;\r\n}\r\n\r\n.clientslist h3 {\r\n      margin: 0 0 35px 0 !important;\r\n}\r\n\r\n.clientslist label {\r\n      color: #66615b;\r\n      font-size: 16px;  \r\n      font-weight: 400 !important;\r\n}\r\n\r\n.clientslist input {\r\n      width: 60%;\r\n      height: 40px;\r\n      padding: 1px 7px;\r\n      margin: 0 0 0 45px;\r\n      border: solid 1px  rgba(51, 51, 51, .5);\r\n      border-radius: 4px; \r\n     \r\n}\r\n\r\n.clientslist .btn-success {\r\n      color: #fff;\r\n      font-size: 25px;\r\n      line-height: 30px;\r\n      margin: 0 5% 0 0;\r\n      padding: 4px 40px;\r\n      float: right;\r\n      border-radius: 4px;\r\n      border: solid 1px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/clients/clients.component.html":
/***/ (function(module, exports) {

module.exports = "<main>\r\n    <div class=\"container\">\r\n    \r\n    <!-- <div class=\"row\" style=\"width: 92%;\" align=\"center\">\r\n          <div class=\"col-sm-5\"><h4 style=\"color:black;\">Jina</h4></div>\r\n          <div class=\"col-sm-2\"><h4 style=\"color:black;\">Umri wa mtoto</h4></div>\r\n          <div class=\"col-sm-4\"><h4 style=\"color:black;\">Mawasiliano</h4></div>\r\n          <div class=\"col-sm-1\"><h4 style=\"color:black;\">Malipo</h4></div>\r\n      </div>\r\n\r\n     <table class=\"mtable-checked\" align=\"center\">\r\n         <tr><th width=\"38%\"></th><th width=\"30%\"></th><th width=\"27%\"></th><th width=\"9%\" ></th></tr>\r\n         \r\n         <tr *ngFor=\"let client of newclients; let i = index\"><td>{{client.id}}</td><td class=\"rightcell\">{{client.name}}</td><td class=\"rightcell\">{{client.name}}</td><td class=\"rightcell\">{{client.email}}</td><td><button (click) = \"registerClient(i)\">Checked</button></td></tr>                                        \r\n     </table>  \r\n         \r\n      \r\n      \r\n     <div class=\"row\" style=\"width: 92%;\" align=\"center\">\r\n          <div class=\"col-sm-5\"><h4 style=\"color:black;\">Jina</h4></div>\r\n          <div class=\"col-sm-2\"><h4 style=\"color:black;\">Umri wa mtoto</h4></div>\r\n          <div class=\"col-sm-4\"><h4 style=\"color:black;\">Mawasiliano</h4></div>\r\n          <div class=\"col-sm-1\"><h4 style=\"color:black;\">Malipo</h4></div>\r\n      </div>\r\n     \r\n      <table class=\"mtable\" align=\"center\">\r\n         <tr><th width=\"38%\"></th><th width=\"30%\"></th><th width=\"27%\"></th><th width=\"9%\" ></th></tr>\r\n         <tr *ngFor=\"let client of clients\"><td>{{client.id}}</td><td class=\"rightcell\">{{client.name}}</td><td class=\"rightcell\">{{client.name}}</td><td class=\"rightcell\">{{client.email}}</td>\r\n     \r\n                                        \r\n      </table> -->\r\n\r\n      \r\n      <br><br><br><br>\r\n      \r\n \r\n      <div class=\"clientslist\">\r\n        <h3>Clients</h3>\r\n     </div>\r\n\r\n    <div class=\"block\">\r\n        <div class=\"navbar navbar-inner block-header\">\r\n            <div class=\"pull-right\"><span class=\"badge badge-info\">4</span>\r\n\r\n            </div>\r\n        \r\n        <div class=\"block-content collapse in\">\r\n            <table class=\"table table-striped\">\r\n                <thead>\r\n                    <tr>\r\n                        <th class=\"number\">#</th>\r\n                        <th class=\"name\">Name</th>\r\n                        <th class=\"name\">Surname</th>\r\n                        <th class=\"childsage\">Childs age</th>\r\n                        <th class=\"phonenumber\">Phone Number</th>\r\n                        <th class=\"status\">Status</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let client of newclients; let i = index\">\r\n                        <td>{{i + 1}}</td>\r\n                        <td>{{client.first_name}}</td>\r\n                        <td>{{client.surname}}</td>\r\n                        <td>{{client.childs_age}}</td>\r\n                        <td>{{client.phone_number}}</td>\r\n                        <td><button (click)=\"registerClient(i)\"><p *ngIf=\"clients[i].status\">New</p><p *ngIf=\"!clients[i].status\">Registered</p></button></td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <br>\r\n\r\n </div>\r\n <br><br> \r\n      \r\n \r\n    </div>\r\n </main>\r\n"

/***/ }),

/***/ "../../../../../src/app/admin/clients/clients.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_clients_service__ = __webpack_require__("../../../../../src/app/core/clients.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClientsComponent = (function () {
    function ClientsComponent(clientsService) {
        this.clientsService = clientsService;
        this.registered = {};
        this.clients = [];
        this.newclients = [];
    }
    ClientsComponent.prototype.getClients = function () {
        var that = this;
        this.clientsService.getClients().then(function (clients) { return clients.map(function (x) { return ((x.id === 1) || (x.id === 2) || (x.id === 3) || (x.id === 4)) ? that.newclients.push(x) : that.clients.push(x); }); });
    };
    ClientsComponent.prototype.registerClient = function (i) {
        // var client:Clients = this.newclients[i];
        // this.newclients.splice(i, 1);
        // console.log(this.clients[0]);
        // this.clients.push(client);
        this.clients[i].status = !this.clients[i].status;
        this.clientsService.updateClient(this.clients[i], this.clients[i].id);
    };
    ClientsComponent.prototype.ngOnInit = function () {
        this.getClients();
    };
    return ClientsComponent;
}());
ClientsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-clients',
        template: __webpack_require__("../../../../../src/app/admin/clients/clients.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/clients/clients.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__core_clients_service__["a" /* ClientsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_clients_service__["a" /* ClientsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_clients_service__["a" /* ClientsService */]) === "function" && _a || Object])
], ClientsComponent);

var _a;
//# sourceMappingURL=clients.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, " footer {   \r\n      width: 100% ;\r\n      height: 43px;\r\n      vertical-align: middle;\r\n      background-color: #DCDCDC; \r\n        }  \r\n\r\n  .subcsribe_button {\r\n      height: 35px;\r\n      width: 150px;\r\n      margin-top: 3px;\r\n      margin-right: 4%;\r\n      color: #ffffff;\r\n      font-size: 17px;\r\n      background-color: #493829;\r\n      border: none;\r\n      border-radius: 4px;\r\n      float: right;\r\n }  \r\n\r\n #subscribe_text {\r\n     line-height: 2em;\r\n }\r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\r\n    <button class=\"subcsribe_button\">\r\n        <p id=\"subscribe_text\">Subscribe</p>\r\n    </button>\r\n</footer>"

/***/ }),

/***/ "../../../../../src/app/admin/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/admin/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\r\n      text-align: center;\r\n      color: #e46c2b;\r\n      background-color:#493829; \r\n      border-bottom: none;\r\n      box-shadow: 1px -2.5px 14px 2px #000; \r\n          }\r\n\r\n  .nav { \r\n      margin-right: 2%;\r\n  }\r\n\r\n .nav li {\r\n      margin-left: 30px;\r\n      margin-top: 0px;\r\n    }    \r\n\r\n nav ul li:hover {\r\n        color: #ffffff !important;\r\n        background-color:none !important;\r\n        /*border-bottom: 2px solid #fff;    /*to be less conspicuous\r\n        border-radius: 3px;*/\r\n        height: 40px;\r\n    }  \r\n\r\n .Mwanzo .Mwanzo {\r\n        color: #ffffff !important;\r\n        background-color:none !important;\r\n        /*border-bottom: 2px solid #fff;\r\n        border-radius: 3px;*/\r\n        height: 40px;\r\n }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<nav class=\"navbar navbar-inverse navbar-fixed-top\">\r\n     <h1>JLB Admin Dashboard</h1>\r\n     \r\n     <br>\r\n </nav>\r\n\r\n <!-- End of navigation section -->\r\n \r\n         \r\n "

/***/ }),

/***/ "../../../../../src/app/admin/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/admin/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*//////////////////////////////////////////////////////////////////\n[ FONT ]*/\n\n  \n  \n  /*//////////////////////////////////////////////////////////////////\n  [ RESTYLE TAG ]*/\n  \n  * {\n      margin: 0px; \n      padding: 0px; \n      box-sizing: border-box;\n  }\n  \n  body, html {\n      height: 100%;\n      font-family: Poppins-Regular, sans-serif;\n  }\n  \n  /*---------------------------------------------*/\n\n  .loginbed {\n     margin: 200px 0 0 24%;\n  }\n\n  .form-group {\n     margin: 25px 0 0 0;\n  }\n\n  .loginbutton {\n    color: rgba(101, 47, 133, 0.6);\n     margin: 0 0 0 0;\n     padding: 0 10px;\n     height: 30px;\n     width: -webkit-fit-content;\n     width: -moz-fit-content;\n     width: fit-content;\n     border-radius: 2px !important;\n  }\n\n  .loginbutton:hover {\n    color: #fff;\n    background-color: rgba(101, 47, 133, 0.9);\n  }\n\n  a {\n      font-family: Poppins-Regular;\n      font-size: 14px;\n      line-height: 1.7;\n      color: #666666;\n      margin: 0px;\n      transition: all 0.4s;\n      -webkit-transition: all 0.4s;\n    -o-transition: all 0.4s;\n    -moz-transition: all 0.4s;\n  }\n  \n  a:focus {\n      outline: none !important;\n  }\n  \n  a:hover {\n      text-decoration: none;\n    color: #333333;\n  }\n  \n  /*---------------------------------------------*/\n  h1,h2,h3,h4,h5,h6 {\n      margin: 0px;\n  }\n  \n  p {\n      font-family: Poppins-Regular;\n      font-size: 14px;\n      line-height: 1.7;\n      color: #666666;\n      margin: 0px;\n  }\n  \n  ul, li {\n      margin: 0px;\n      list-style-type: none;\n  }\n  \n  \n  /*---------------------------------------------*/\n  input {\n      padding: 0 0 0 15px;\n      outline: none;\n      border: solid 2px rgba(101, 47, 133, 0.6);\n  }\n  \n  textarea {\n    outline: none;\n    border: none;\n  }\n  \n  textarea:focus, input:focus {\n    border-color: transparent !important;\n  }\n  \n  input:focus::-webkit-input-placeholder { color:transparent; }\n  input:focus:-moz-placeholder { color:transparent; }\n  input:focus::-moz-placeholder { color:transparent; }\n  input:focus:-ms-input-placeholder { color:transparent; }\n  \n  textarea:focus::-webkit-input-placeholder { color:transparent; }\n  textarea:focus:-moz-placeholder { color:transparent; }\n  textarea:focus::-moz-placeholder { color:transparent; }\n  textarea:focus:-ms-input-placeholder { color:transparent; }\n  \n  input::-webkit-input-placeholder { color: #adadad;}\n  input:-moz-placeholder { color: #adadad;}\n  input::-moz-placeholder { color: #adadad;}\n  input:-ms-input-placeholder { color: #adadad;}\n  \n  textarea::-webkit-input-placeholder { color: #adadad;}\n  textarea:-moz-placeholder { color: #adadad;}\n  textarea::-moz-placeholder { color: #adadad;}\n  textarea:-ms-input-placeholder { color: #adadad;}\n  \n  /*---------------------------------------------*/\n  button {\n      outline: none !important;\n      border: none;\n     \n  } \n  \n  button:hover {\n      cursor: pointer;\n  }\n  \n  iframe {\n      border: none !important;\n  }\n  \n  \n  /*//////////////////////////////////////////////////////////////////\n  [ Utility ]*/\n  .txt1 {\n    font-family: Poppins-Regular;\n    font-size: 15px;\n    color: #999999;\n    line-height: 1.5;\n  }\n  \n  .txt2 {\n    font-family: Poppins-Regular;\n    font-size: 15px;\n    color: #57b846;\n    line-height: 1.5;\n  }\n  \n  /*//////////////////////////////////////////////////////////////////\n  [ login ]*/\n  \n  .limiter {\n    width: 100%;\n    margin: 0 auto;\n  }\n  \n  .container-login100 {\n    width: 100%;  \n    min-height: 100vh;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding: 15px;\n    background: #fff;  \n  }\n  \n  .wrap-login100 {\n    width: 390px;\n    background: #fff;\n  }\n  \n  \n  /*------------------------------------------------------------------\n  [ Form ]*/\n  \n  .login100-form {\n    width: 100%;\n  }\n  \n  .login100-form-title {\n    display: block;\n    font-family: Poppins-Bold;\n    font-size: 39px;\n    color: #333333;\n    line-height: 1.2;\n    text-align: center;\n  }\n  \n  .login100-form-avatar {\n    display: block;\n    width: 120px;\n    height: 120px;\n    border-radius: 50%;\n    overflow: hidden;\n    margin: 0 auto;\n  }\n  \n  .login100-form-avatar img {\n    width: 100%;\n  }\n  \n  /*------------------------------------------------------------------\n  [ Input ]*/\n  \n  .wrap-input100 {\n    width: 100%;\n    position: relative;\n    border-bottom: 2px solid #d9d9d9;\n  }\n  \n  .input100 {\n    font-family: Poppins-SemiBold;\n    font-size: 18px;\n    color: #555555;\n    line-height: 1.2;\n  \n    display: block;\n    width: 100%;\n    height: 52px;\n    background: transparent;\n    padding: 0 5px;\n  }\n  \n  /*---------------------------------------------*/ \n  .focus-input100 {\n    position: absolute;\n    display: block;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    pointer-events: none;\n  }\n  \n  .focus-input100::before {\n    content: \"\";\n    display: block;\n    position: absolute;\n    bottom: -2px;\n    left: 0;\n    width: 0;\n    height: 2px;\n    transition: all 0.4s;\n  \n    background: #57b846;\n  }\n  \n  .focus-input100::after {\n    font-family: Poppins-Medium;\n    font-size: 18px;\n    color: #999999;\n    line-height: 1.2;\n  \n    content: attr(data-placeholder);\n    display: block;\n    width: 100%;\n    position: absolute;\n    top: 15px;\n    left: 0px;\n    padding-left: 5px;\n    transition: all 0.4s;\n  }\n  \n  .input100:focus + .focus-input100::after {\n    top: -20px;\n    font-size: 15px;\n  }\n  \n  .input100:focus + .focus-input100::before {\n    width: 100%;\n  }\n  \n  .has-val.input100 + .focus-input100::after {\n    top: -20px;\n    font-size: 15px;\n  }\n  \n  .has-val.input100 + .focus-input100::before {\n    width: 100%;\n  }\n  \n  \n  /*------------------------------------------------------------------\n  [ Button ]*/\n  .container-login100-form-btn {\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n  }\n  \n  .login100-form-btn {\n    font-family: Poppins-Medium;\n    font-size: 16px;\n    color: #fff;\n    line-height: 1.2;\n    text-transform: uppercase;\n  \n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding: 0 20px;\n    width: 100%;\n    height: 50px;\n    background-color: #57b846;\n    border-radius: 25px;\n  \n    box-shadow: 0 10px 30px 0px rgba(87, 184, 70, 0.5);\n    -moz-box-shadow: 0 10px 30px 0px rgba(87, 184, 70, 0.5);\n    -webkit-box-shadow: 0 10px 30px 0px rgba(87, 184, 70, 0.5);\n    -o-box-shadow: 0 10px 30px 0px rgba(87, 184, 70, 0.5);\n    -ms-box-shadow: 0 10px 30px 0px rgba(87, 184, 70, 0.5);\n    transition: all 0.4s;\n  }\n  \n  .login100-form-btn:hover  {\n    background-color: #333333;\n    box-shadow: 0 10px 30px 0px rgba(51, 51, 51, 0.5);\n    -moz-box-shadow: 0 10px 30px 0px rgba(51, 51, 51, 0.5);\n    -webkit-box-shadow: 0 10px 30px 0px rgba(51, 51, 51, 0.5);\n    -o-box-shadow: 0 10px 30px 0px rgba(51, 51, 51, 0.5);\n    -ms-box-shadow: 0 10px 30px 0px rgba(51, 51, 51, 0.5);\n  }\n  \n  \n  \n  /*------------------------------------------------------------------\n  [ Alert validate ]*/\n  \n  .validate-input {\n    position: relative;\n  }\n  \n  .alert-validate::before {\n    content: attr(data-validate);\n    position: absolute;\n    max-width: 70%;\n    background-color: #fff;\n    border: 1px solid #c80000;\n    border-radius: 2px;\n    padding: 4px 25px 4px 10px;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n    transform: translateY(-50%);\n    right: 0px;\n    pointer-events: none;\n  \n    font-family: Poppins-Regular;\n    color: #c80000;\n    font-size: 13px;\n    line-height: 1.4;\n    text-align: left;\n  \n    visibility: hidden;\n    opacity: 0;\n    transition: opacity 0.4s;\n  }\n  \n  .alert-validate::after {\n    content: \"\\F06A\";\n    font-family: FontAwesome;\n    font-size: 16px;\n    color: #c80000;\n  \n    display: block;\n    position: absolute;\n    background-color: #fff;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n    transform: translateY(-50%);\n    right: 5px;\n  }\n  \n  .alert-validate:hover:before {\n    visibility: visible;\n    opacity: 1;\n  }\n  \n  @media (max-width: 992px) {\n    .alert-validate::before {\n      visibility: visible;\n      opacity: 1;\n    }\n  }\n  \n  \n  /*//////////////////////////////////////////////////////////////////\n  [ Login more ]*/\n  .login-more li {\n    position: relative;\n    padding-left: 16px;\n  }\n  \n  .login-more li::before {\n    content: \"\";\n    display: block;\n    position: absolute;\n    width: 5px;\n    height: 5px;\n    border-radius: 50%;\n    background-color: #cccccc;\n    top: 45%;\n    -webkit-transform: translateY(-50%);\n    transform: translateY(-50%);\n    left: 0;\n  }\n\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n\n\t<div class=\"col-md-6 col-md-offset-3 loginbed\">\n\t\t<h2>Login</h2>\n\t\t<form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\n\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\">\n\t\t\t\t<label for=\"email\">Email</label>\n\t\t\t\t<input type=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" required />\n\t\t\t\t<div *ngIf=\"f.submitted && !email.valid\" class=\"help-block\">Email is required</div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n\t\t\t\t<label for=\"password\">Password</label>\n\t\t\t\t<input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n\t\t\t\t<div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<button [disabled]=\"loading\" type=\"submit\" class=\"btn btn-primary loginbutton\" >Login</button>\n\t\t\t\t<img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n\t\t\t\t<!--<a [routerLink]=\"['/register']\" class=\"btn btn-link\">Register</a> -->\n\t\t\t</div>\n\t\t</form>\n\t</div>\n\n\t<br><br><br>\n"

/***/ }),

/***/ "../../../../../src/app/admin/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_authentication_service__ = __webpack_require__("../../../../../src/app/core/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_datacarrier_service__ = __webpack_require__("../../../../../src/app/core/datacarrier.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(route, router, authenticationService, datacarrierService) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.datacarrierService = datacarrierService;
        this.model = {};
        this.loading = false;
        this.datacarrierService.setLandingPageStatus(false); // to remove landing page from view
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.login(this.model.email, this.model.password)
            .subscribe(function (data) {
            if (_this.returnUrl === '/') {
                _this.returnUrl = '/admin/andika-blog';
            }
            _this.router.navigate([_this.returnUrl]);
            console.log(data);
        }, function (error) {
            //this.alertService.error(error);
            _this.loading = false;
            console.log(error);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/admin/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__core_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_authentication_service__["a" /* AuthenticationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__core_datacarrier_service__["a" /* DatacarrierService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_datacarrier_service__["a" /* DatacarrierService */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/makala-edit/makala-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n .container {\r\n        width: 100%;\r\n        background-color: #fff;\r\n        box-shadow: 1px 6.5px 12px 1px #000;\r\n        padding-top: 7%;\r\n }\r\n\r\n .mtable {\r\n        width: 80%;\r\n        font-family:Verdana, Geneva, Tahoma, sans-serif\r\n }\r\n\r\n .block {\r\n        width: 89%;\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n }\r\n\r\n th, td {\r\n        \r\n        padding: 3px 20px; \r\n }\r\n\r\n.addtitle {\r\n        padding-left: 5%; \r\n        padding-right: 5%;  \r\n        margin-top: 9px;\r\n        margin-bottom: 6px; \r\n        border: 1px solid #fff;\r\n        border-radius: 4px; \r\n}\r\n\r\n.addtopicbutton {\r\n        background: none;\r\n        border: none;\r\n        color:white;\r\n}\r\n\r\n .rightcell {\r\n        \r\n        border-left: 1px solid #e46c2b;\r\n }\r\n\r\n#rightcell {\r\n        background-color: rgba(208, 108, 43, 1);\r\n}\r\n\r\n .mtable tr:nth-child(even) {\r\n       background-color: #fff\r\n }\r\n\r\n.mtable tr:nth-child(odd) {\r\n       background-color: #DCDCDC;\r\n }\r\n\r\n.mtable th {\r\n       background-color: rgba(208, 108, 43, 0.6);\r\n }\r\n\r\n.number {\r\n       width: 10%;\r\n       text-align: center;\r\n}\r\n\r\n.name {\r\n       width: 46%;\r\n}\r\n\r\n.edit {\r\n       width: 22%;\r\n       text-align: center;\r\n} \r\n\r\n.remove {\r\n       width: 22%;\r\n       text-align: center;\r\n}\r\n\r\ntd button {\r\n        background: none;\r\n        border: none;\r\n}\r\n\r\ntr { \r\n        height: 65px;\r\n}  \r\n  \r\n\r\ntr td { \r\n        padding: 5px 8px;\r\n}  \r\n\r\n\r\ntr td input {\r\n        color: rgba(51, 51, 51, .8);\r\n        padding: 1px 7px;\r\n        margin: 0 20px 0 0;\r\n        border: solid 1px  rgba(51, 51, 51, .5);\r\n        height: 40px;\r\n        border-radius: 4px; \r\n} \r\n\r\n\r\ntr td p {\r\n        margin: 0; \r\n}  \r\n\r\n.addcategory {\r\n        margin: 0 0 30px 5%;\r\n}\r\n\r\n.addcategory h3 {\r\n        margin: 0 0 35px 0 !important;\r\n}\r\n\r\n.addcategory label {\r\n        color: #66615b;\r\n        font-size: 16px;  \r\n        font-weight: 400 !important;\r\n}\r\n\r\n.addcategory input {\r\n        width: 80%;\r\n        height: 40px;\r\n        padding: 1px 7px;\r\n        margin: 0 0 0 5px;\r\n        border: solid 1px  rgba(51, 51, 51, .5);\r\n        border-radius: 4px;\r\n}\r\n\r\n.addcategory .btn-success {\r\n        color: #fff;\r\n        font-size: 25px;\r\n        line-height: 30px;\r\n        margin: 0 4% 0 0;\r\n        padding: 4px 40px;\r\n        float: right;\r\n        border-radius: 4px;\r\n        border: solid 1px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/makala-edit/makala-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<main>\r\n    <div class=\"container\">\r\n\r\n    <br><br><br><br>\r\n    \r\n    <!--Edit Food Categories-->\r\n    <div class=\"addcategory\">\r\n        <h3>Add new category</h3>\r\n        <input [(ngModel)]=\"newCategory.category_name\" placeholder=\"Category name\">\r\n        <button class=\"btn-success\" (click)=\"createMakalaCategory()\">+</button>\r\n     </div>\r\n    <br><br>\r\n\r\n\r\n    <div class=\"block\">\r\n        <div class=\"navbar navbar-inner block-header\">\r\n            <div class=\"pull-right\"><span class=\"badge badge-info\">8</span>\r\n\r\n            </div>\r\n        \r\n        <div class=\"block-content collapse in\">\r\n            <table class=\"table table-striped\">\r\n                <thead>\r\n                    <tr>\r\n                        <th class=\"number\">#</th>\r\n                        <th class=\"name\">Category Name</th>\r\n                        <th class=\"edit\">Edit</th>\r\n                        <th class=\"remove\">Remove</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let ctgry of makalacategories; let i = index\">\r\n                        <td class=\"number\">{{i + 1}}</td>\r\n                        <td><span *ngIf=\"!showEraser[i]\">{{ctgry.category_name}}</span> <input *ngIf=\"showEraser[i]\" [(ngModel)]=\"category.category_name\" placeholder=\"{{ctgry.category_name}}\"><button class=\"ti-close\" *ngIf=\"showEraser[i]\" (click)=\"alterEditMode(i)\"></button></td>\r\n                        <td class=\"edit\"><button (click) = \"sendUpdate(ctgry.id, i)\"><span class=\"ti-eraser\" *ngIf=\"!showEraser[i]\"></span><p *ngIf=\"showEraser[i]\">Confirm</p></button></td>\r\n                        <td class=\"remove\"><button (click)=\"deleteMakalaCategory(ctgry.id, i)\"><span class=\"ti-trash\"></span></button></td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <br>\r\n\r\n </div>\r\n <br><br><br><br><br><br>\r\n\r\n <!--Edit Food names-->\r\n <div class=\"addcategory\">\r\n    <h3>Add new Food</h3>\r\n    <input [(ngModel)]=\"newFood.name\" placeholder=\"Food Name\">\r\n    <button class=\"btn-success\" (click)=\"createFood()\">+</button>\r\n </div>\r\n<br><br>\r\n\r\n\r\n<div class=\"block\">\r\n    <div class=\"navbar navbar-inner block-header\">\r\n        <div class=\"pull-right\"><span class=\"badge badge-info\">9</span>\r\n\r\n        </div>\r\n    \r\n    <div class=\"block-content collapse in\">\r\n        <table class=\"table table-striped\">\r\n            <thead>\r\n                <tr>\r\n                    <th class=\"number\">#</th>\r\n                    <th class=\"name\">Food Name</th>\r\n                    <th class=\"edit\">Edit</th>\r\n                    <th class=\"remove\">Remove</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let afood of foods; let i = index\">\r\n                    <td class=\"number\">{{i + 1}}</td>\r\n                    <td><span *ngIf=\"!showFoodEraser[i]\">{{afood.name}}</span><input [(ngModel)]=\"food.name\" *ngIf=\"showFoodEraser[i]\" placeholder=\"{{afood.name}}\"><button class=\"ti-close\" *ngIf=\"showFoodEraser[i]\" (click)=\"alterFoodEditMode(i)\"></button></td>\r\n                    <td class=\"edit\"><button (click) = \"sendFoodUpdate(afood.id, i)\"><span class=\"ti-eraser\" *ngIf=\"!showFoodEraser[i]\"></span><p *ngIf=\"showFoodEraser[i]\">Confirm</p></button></td>\r\n                    <td class=\"remove\"><button (click)=\"deleteFood(afood.id, i)\"><span class=\"ti-trash\"></span></button></td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n    \r\n</div>\r\n\r\n<br>\r\n\r\n</div>\r\n\r\n</div>\r\n </main>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/admin/makala-edit/makala-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__makalatitles__ = __webpack_require__("../../../../../src/app/makalatitles.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__makalacategory__ = __webpack_require__("../../../../../src/app/makalacategory.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__food__ = __webpack_require__("../../../../../src/app/food.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_makalatitles_service__ = __webpack_require__("../../../../../src/app/core/makalatitles.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MakalaEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MakalaEditComponent = (function () {
    function MakalaEditComponent(makalatitlesService) {
        this.makalatitlesService = makalatitlesService;
        this.showInputfield = false;
        this.toRename = false;
        this.renameData = [];
        this.dsply = {};
        this.differentItemClicked = false;
        this.showEraser = {};
        this.showFoodEraser = {};
        this.makalacategories = [];
        this.makala = new __WEBPACK_IMPORTED_MODULE_1__makalatitles__["a" /* Makalatitles */]();
        this.category = new __WEBPACK_IMPORTED_MODULE_2__makalacategory__["a" /* Makalacategory */]();
        this.newCategory = new __WEBPACK_IMPORTED_MODULE_2__makalacategory__["a" /* Makalacategory */]();
        this.food = new __WEBPACK_IMPORTED_MODULE_3__food__["a" /* Food */]();
        this.newFood = new __WEBPACK_IMPORTED_MODULE_3__food__["a" /* Food */]();
        this.foods = [];
    }
    MakalaEditComponent.prototype.ngOnInit = function () {
        this.getTopicCategories();
        this.getFoods();
        // this.getMakalatitles();
        this.category.id = 1;
        this.defineRenameOrCancel();
        this.newFood.food_type = 'x';
        this.newFood.teacher_id = 1; //to capture id of current user
        this.food.food_type = 'x';
        this.food.teacher_id = 1; //to capture id of current user
    };
    MakalaEditComponent.prototype.counItems = function () {
        this.makalaCategoryCounter = this.makalacategories.length;
        this.foodsCounter = this.foods.length;
    };
    MakalaEditComponent.prototype.alterEditMode = function (i) {
        this.showEraser[i] = !this.showEraser[i];
        this.category.category_name = "";
    };
    MakalaEditComponent.prototype.alterFoodEditMode = function (i) {
        this.showFoodEraser[i] = !this.showFoodEraser[i];
        this.food.name = "";
    };
    MakalaEditComponent.prototype.getTopicCategories = function () {
        var _this = this;
        console.log('this code is hit 1');
        this.makalatitlesService.getMakalaCategories().then(function (makalacategories) { return _this.makalacategories = makalacategories; });
        this.counItems();
    };
    MakalaEditComponent.prototype.getFoods = function () {
        var _this = this;
        this.makalatitlesService.getFoods().then(function (food) { return _this.foods = food; });
        this.counItems();
    };
    // getMakalatitles(): void {
    //   var that = this;
    //   setTimeout(function() {
    //    console.log('this code is hit 2');
    //   console.log('this code is hit 4');
    //   console.log(that.makalacategories[1]);
    //   console.log('this code is hit 3');  
    //   }, 500);
    //  //this.makalatitlesService.getMakalatitles().then(makalatitles => this.makalatitles = makalatitles);
    // }
    MakalaEditComponent.prototype.toggleId = function () {
        this.showInputfield = !this.showInputfield;
    };
    MakalaEditComponent.prototype.add = function () {
        var _this = this;
        if (!this.makala.title) {
            return;
        }
        this.makalatitlesService.create(this.makala)
            .then(function (makala) {
            _this.makalatitles.push(makala);
        });
    };
    // callToRename() {
    //   this.toRename = !this.toRename;
    // (this.renameData === 'Rename') ? (this.renameData = 'Cancel'): (this.renameData = 'Rename');
    //}
    MakalaEditComponent.prototype.defineRenameOrCancel = function () {
        var that = this;
        setTimeout(function () {
            console.log(that.makalacategories.length);
            for (var i = 0; i < that.makalacategories.length; i++) {
                // var element = this.renameData[i];
                that.renameData[i] = 'Rename';
            }
        }, 500);
    };
    MakalaEditComponent.prototype.deleteMakalaCategory = function (id, i) {
        this.makalacategories.splice(i, 1);
        this.makalatitlesService.deleteCategory(id).subscribe();
    };
    MakalaEditComponent.prototype.deleteFood = function (id, i) {
        this.foods.splice(i, 1);
        this.makalatitlesService.deleteFood(id).subscribe();
    };
    MakalaEditComponent.prototype.createMakalaCategory = function () {
        var _this = this;
        if (!this.newCategory.category_name) {
            return;
        }
        this.makalatitlesService.createMakalaCategory(this.newCategory)
            .then(function (category) {
            _this.makalacategories.push(category);
        });
        this.newCategory.category_name = "";
    };
    MakalaEditComponent.prototype.createFood = function () {
        var _this = this;
        if (!this.newFood.name) {
            return;
        }
        this.makalatitlesService.createFood(this.newFood)
            .then(function (food) {
            _this.foods.push(food);
        });
        this.newFood.name = "";
    };
    MakalaEditComponent.prototype.sendUpdate = function (id, i) {
        //   var a = id - 1;
        //   console.log('sendupdate is called');
        //  (this.renameData[i] === 'Rename') ? (this.renameData[i] = 'Cancel'): (this.renameData[i] = 'Rename');
        //  this.toRename = !this.toRename;
        //  this.dsply[i] = !this.dsply[i];
        this.showEraser[i] = !this.showEraser[i];
        if (!this.category.category_name) {
            return;
        }
        this.makalatitlesService.updateTopicCategory(this.category, id);
        this.makalacategories[i].category_name = this.category.category_name;
        this.category.category_name = "";
    };
    MakalaEditComponent.prototype.sendFoodUpdate = function (id, i) {
        this.showFoodEraser[i] = !this.showFoodEraser[i];
        console.log('food update tc 1 hit');
        console.log(this.food.name);
        if (!this.food.name) {
            return;
        }
        console.log('food update tc hit');
        this.makalatitlesService.updateFoods(this.food, id);
        this.foods[i].name = this.food.name;
        this.food.name = "";
    };
    return MakalaEditComponent;
}());
MakalaEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-makala-edit',
        template: __webpack_require__("../../../../../src/app/admin/makala-edit/makala-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/makala-edit/makala-edit.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_4__core_makalatitles_service__["a" /* MakalatitlesService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__core_makalatitles_service__["a" /* MakalatitlesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__core_makalatitles_service__["a" /* MakalatitlesService */]) === "function" && _a || Object])
], MakalaEditComponent);

var _a;
//# sourceMappingURL=makala-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/makala-subtopics-edit/makala-subtopics-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\r\n        background-color: #fff;\r\n        box-shadow: 1px 6.5px 12px 1px #000;\r\n        padding:20px;\r\n\r\n }\r\n .mtable {\r\n        width: 80%;\r\n        font-family:Verdana, Geneva, Tahoma, sans-serif\r\n }\r\n\r\n th, td {\r\n        \r\n        padding: 3px 20px; \r\n }\r\n\r\n .rightcell {\r\n        \r\n        border-left: 1px solid #e46c2b;\r\n\r\n }\r\n\r\n#rightcell {\r\n        background-color: rgba(208, 108, 43, 1);\r\n}\r\n\r\n .mtable tr:nth-child(even) {\r\n       background-color: #fff\r\n }\r\n\r\n.mtable tr:nth-child(odd) {\r\n       background-color: #DCDCDC;\r\n }\r\n\r\n.mtable th {\r\n       background-color: rgba(208, 108, 43, 0.6);\r\n }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/makala-subtopics-edit/makala-subtopics-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<main>\r\n    <div class=\"container\">\r\n      \r\n     <div class=\"row\" style=\"width: 80%;\" align=\"center\">\r\n          <div class=\"col-sm-11\"><h4 style=\"color:black;\">Topics</h4></div>\r\n          <div class=\"col-sm-1\"><h4 style=\"color: #e46c2b;\" routerLink=\"/admin/makala-subtopics\" routerLinkActive=\"active\">Done</h4></div>\r\n      </div>\r\n      <hr style=\"width: 80%; height: 2px; background-color:#e46c2b; \r\n                 margin:3px auto;\">\r\n      <table class=\"mtable\" align=\"center\">\r\n         <tr><th width=\"70%\">Lorem Ipsum 4</th><th  style=\"color:white;\"width=\"30%\" id=\"rightcell\" class=\"rightcell\">+ Add new topic</th></tr>\r\n         <tr><td>Lorem Ipsum 4i</td><td class=\"rightcell\">x Remove </td></tr>\r\n         <tr><td>Lorem Ipsum 4ii </td><td class=\"rightcell\">x Remove</td></tr>\r\n         <tr><td>Lorem Ipsum 4iii</td><td class=\"rightcell\">x Remove</td></tr>\r\n         <tr><td>Lorem Ipsum 4iv</td><td class=\"rightcell\">x Remove</td></tr>\r\n         <tr><td><a routerLink=\"/admin/andika-makala\" routerLinkActive=\"active\" style=\"color:#000;\">Lorem Ipsum 4v</a></td><td class=\"rightcell\">x Remove</td></tr>\r\n         <tr><td>Lorem Ipsum 4vi</td><td class=\"rightcell\">x Remove</td></tr>\r\n         <tr><td>.</td><td class=\"rightcell\">x Remove</td></tr>\r\n         <tr><td>.</td><td class=\"rightcell\">x Remove</td></tr>\r\n         <tr><td>.</td><td class=\"rightcell\">.</td></tr>\r\n         <tr><td>. </td><td class=\"rightcell\"> .</td></tr>                                    \r\n      </table>\r\n\r\n      <br><br><br><br>\r\n      \r\n \r\n    </div>\r\n </main>\r\n"

/***/ }),

/***/ "../../../../../src/app/admin/makala-subtopics-edit/makala-subtopics-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MakalaSubtopicsEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MakalaSubtopicsEditComponent = (function () {
    function MakalaSubtopicsEditComponent() {
    }
    MakalaSubtopicsEditComponent.prototype.ngOnInit = function () {
    };
    return MakalaSubtopicsEditComponent;
}());
MakalaSubtopicsEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-makala-subtopics-edit',
        template: __webpack_require__("../../../../../src/app/admin/makala-subtopics-edit/makala-subtopics-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/makala-subtopics-edit/makala-subtopics-edit.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MakalaSubtopicsEditComponent);

//# sourceMappingURL=makala-subtopics-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/makala-subtopics/makala-subtopics.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, " .container {\r\n        background-color: #fff;\r\n        box-shadow: 1px 6.5px 12px 1px #000;\r\n        padding:20px;\r\n\r\n }\r\n .mtable {\r\n        width: 80%;\r\n        font-family:Verdana, Geneva, Tahoma, sans-serif\r\n }\r\n\r\n th, td {\r\n        \r\n        padding: 3px 20px; \r\n }\r\n\r\n .rightcell {\r\n        \r\n        border-left: 1px solid #e46c2b;\r\n        color:rgba(0, 0, 0, 0.4);\r\n }\r\n\r\n .mtable tr:nth-child(even) {\r\n       background-color: #fff\r\n }\r\n\r\n.mtable tr:nth-child(odd) {\r\n       background-color: #DCDCDC;\r\n }\r\n\r\n.mtable th {\r\n       background-color: rgba(208, 108, 43, 0.6);\r\n }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/makala-subtopics/makala-subtopics.component.html":
/***/ (function(module, exports) {

module.exports = "<main>\r\n    <div class=\"container\">\r\n      \r\n     <div class=\"row\" style=\"width: 80%;\" align=\"center\">\r\n          <div class=\"col-sm-5\"><h4 routerLink=\"/admin/makala\" routerLinkActive=\"active\"> <a style=\"color:#e46c2b;\">Back</a> </h4></div>\r\n          <div class=\"col-sm-4\"><h4 style=\"color: black;\">Topics</h4></div>\r\n          <div class=\"col-sm-3\"><h4><a routerLink=\"/admin/makala-subtopics-edit\" routerLinkActive=\"active\" style=\"color: black;\">Edit</a></h4></div>\r\n      </div>\r\n      <hr style=\"width: 80%; height: 2px; background-color:#e46c2b; \r\n                 margin:3px auto;\">\r\n      <table class=\"mtable\" align=\"center\">\r\n         <tr><th width=\"70%\">Lorem Ipsum 4</th><th  style=\"color:white;\"width=\"30%\" class=\"rightcell\">+ Add new topic</th></tr>\r\n         <tr><td>Lorem Ipsum 4i</td><td class=\"rightcell\">x Remove </td></tr>\r\n         <tr><td>Lorem Ipsum 4ii </td><td class=\"rightcell\">x Remove</td></tr>\r\n         <tr><td>Lorem Ipsum 4iii</td><td class=\"rightcell\">x Remove</td></tr>\r\n         <tr><td>Lorem Ipsum 4iv</td><td class=\"rightcell\">x Remove</td></tr>\r\n         <tr><td><a routerLink=\"/admin/andika-makala\" routerLinkActive=\"active\" style=\"color:#000;\">Lorem Ipsum 4v</a></td><td class=\"rightcell\">x Remove</td></tr>\r\n         <tr><td>.</td><td class=\"rightcell\">.</td></tr>\r\n         <tr><td>.</td><td class=\"rightcell\">.</td></tr>\r\n         <tr><td>.</td><td class=\"rightcell\">.</td></tr>\r\n         <tr><td>.</td><td class=\"rightcell\">.</td></tr>\r\n         <tr><td>.</td><td class=\"rightcell\">.</td></tr>\r\n                                          \r\n      </table>\r\n\r\n      <br><br><br><br>\r\n      \r\n \r\n    </div>\r\n </main>\r\n"

/***/ }),

/***/ "../../../../../src/app/admin/makala-subtopics/makala-subtopics.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MakalaSubtopicsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MakalaSubtopicsComponent = (function () {
    function MakalaSubtopicsComponent() {
    }
    MakalaSubtopicsComponent.prototype.ngOnInit = function () {
    };
    return MakalaSubtopicsComponent;
}());
MakalaSubtopicsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-makala-subtopics',
        template: __webpack_require__("../../../../../src/app/admin/makala-subtopics/makala-subtopics.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/makala-subtopics/makala-subtopics.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MakalaSubtopicsComponent);

//# sourceMappingURL=makala-subtopics.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/makala/makala.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n .container {\r\n        background-color: #fff;\r\n        box-shadow: 1px 6.5px 12px 1px #000;\r\n        padding-top: 7%;\r\n        width: 100% !important;\r\n }\r\n\r\n .mtable {\r\n        width: 80%;\r\n        font-family:Verdana, Geneva, Tahoma, sans-serif\r\n }\r\n\r\n th, td {\r\n        \r\n        padding: 3px 20px; \r\n }\r\n\r\n .rightcell {\r\n        border-left: 1px solid #e46c2b;\r\n        color:rgba(0, 0, 0, 0.4);\r\n }\r\n\r\n\r\n .mtable tr:nth-child(even) {\r\n       background-color: #fff\r\n }\r\n\r\n.mtable tr:nth-child(odd) {\r\n       background-color: #DCDCDC;\r\n }\r\n\r\n.mtable th {\r\n       background-color: rgba(208, 108, 43, 0.6);\r\n }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/makala/makala.component.html":
/***/ (function(module, exports) {

module.exports = " <main>\r\n    <div class=\"container\">\r\n\r\n      <div class=\"row\" style=\"width: 80%;\" align=\"center\">\r\n          <div class=\"col-sm-11\">Topics</div>\r\n          <div class=\"col-sm-1\" ><a routerLink=\"/admin/makala-edit\" routerLinkActive=\"active\" style=\"color:#000;\">Edit</a></div>\r\n      </div>\r\n      <hr style=\"width: 80%; height: 2px; background-color:#e46c2b; \r\n                 margin:3px auto;\">\r\n      <table class=\"mtable\" align=\"center\">\r\n         <tr><th width=\"70%\"></th><th width=\"30%\" class=\"rightcell\" style=\"color:white;\">+ Add new topic</th></tr>\r\n         <tr><td>Lorem Ipsum 1</td><td class=\"rightcell\">x Remove </td></tr>\r\n         <tr><td>Lorem Ipsum 2 </td><td class=\"rightcell\">x Remove</td></tr>\r\n         <tr><td>Lorem Ipsum 3</td><td class=\"rightcell\">x Remove</td></tr>\r\n         <tr><td><a routerLink=\"/admin/makala-subtopics\" routerLinkActive=\"active\" style=\"color:#000;\">Lorem Ipsum 4</a></td><td class=\"rightcell\">x Remove</td></tr>\r\n         <tr><td>Lorem Ipsum 5</td><td class=\"rightcell\">x Remove</td></tr>\r\n         <tr><td>Lorem Ipsum 6</td><td class=\"rightcell\">x Remove</td></tr>\r\n         <tr><td>Lorem Ipsum 7</td><td class=\"rightcell\">x Remove</td></tr>\r\n         <tr><td>Lorem Ipsum 8</td><td class=\"rightcell\">x Remove</td></tr>\r\n         <tr><td>.</td><td class=\"rightcell\">.</td></tr>\r\n         <tr><td>. </td><td class=\"rightcell\"> .</td></tr>                                    \r\n      </table>\r\n\r\n      <br><br><br><br>\r\n      \r\n    </div>\r\n </main>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/admin/makala/makala.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MakalaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MakalaComponent = (function () {
    function MakalaComponent() {
    }
    MakalaComponent.prototype.ngOnInit = function () {
    };
    return MakalaComponent;
}());
MakalaComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-makala',
        template: __webpack_require__("../../../../../src/app/admin/makala/makala.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/makala/makala.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MakalaComponent);

//# sourceMappingURL=makala.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/searchsection/searchsection.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".searchsection {\r\n        width: 70%;\r\n        background-color:none;\r\n        float: right;\r\n        margin-right: 70px;\r\n }\r\n\r\n.makala li {\r\n        margin: 0 20px;\r\n        display: inline-block;\r\n}\r\n\r\n.Makalabutton {\r\n        font-size: 15px;\r\n        height: 20px;\r\n        width: auto;\r\n        background: none;\r\n        border-top:none;\r\n        border-bottom: solid 2px #e46c2b;\r\n        border-left: solid 2px #e46c2b;\r\n        border-right: solid 2px #e46c2b;\r\n        border-top-left-radius: 0px;\r\n        border-top-right-radius: 0px;\r\n        border-bottom-left-radius: 4px; \r\n        border-bottom-right-radius: 4px; \r\n}\r\n\r\n.searchbox { \r\n       border: none;\r\n       border-radius: 4px;\r\n       background-color: #DCDCDC;\r\n}\r\n\r\n::-webkit-input-placeholder {\r\n        color: #000;\r\n        text-align: center;\r\n}\r\n\r\n.clear {\r\n       clear: both;            /* to solve float overlapping issues */ \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/searchsection/searchsection.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"searchsection row\">\r\n      <div class=\"col-sm-9 makala\" >\r\n         <br><br><br><br>\r\n         <br><br><br><br>\r\n            <ul>\r\n               <li>\r\n                <a routerLink=\"makala\" routerLinkActive=\"active\"><button class=\"Makalabutton\"><p style=\"color:#e46c2b;\">Makala</p></button></a>\r\n               </li>\r\n               <li>\r\n                <a routerLink=\"andika-blog\" routerLinkActive=\"active\"><button class=\"Makalabutton\"><p>Blog Section</p></button></a>\r\n               </li>\r\n               <li>\r\n                <a routerLink=\"clients\" routerLinkActive=\"active\"><button class=\"Makalabutton\"><p>Clients</p></button></a>\r\n               </li>\r\n               <li>\r\n                <a routerLink=\"subscribers\" routerLinkActive=\"active\"><button class=\"Makalabutton\"><p>Subscribers</p></button></a>\r\n               </li>\r\n            </ul>\r\n         <br><br><br>\r\n      </div>\r\n       \r\n </div>\r\n <div class=\"clear\"></div>"

/***/ }),

/***/ "../../../../../src/app/admin/searchsection/searchsection.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchsectionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchsectionComponent = (function () {
    function SearchsectionComponent() {
    }
    SearchsectionComponent.prototype.ngOnInit = function () {
    };
    return SearchsectionComponent;
}());
SearchsectionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-searchsection',
        template: __webpack_require__("../../../../../src/app/admin/searchsection/searchsection.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/searchsection/searchsection.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SearchsectionComponent);

//# sourceMappingURL=searchsection.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/shared/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/shared/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  <div class=\"container-fluid\">\n      <nav class=\"pull-left\">\n         <!-- <ul>\n\n              <li>\n                  <a href=\"https://www.codenettz.com\">\n                      Codenet\n                  </a>\n              </li>\n              <li>\n                  <a href=\"http://blog.codenettz.com\">\n                     Blog\n                  </a>\n              </li>\n              <li>\n                  <a href=\"https://www.codenettz.com/license\">\n                      Licenses\n                  </a>\n              </li>\n          </ul>  -->\n      </nav>\n      <div class=\"copyright pull-right\">\n          &copy; {{test | date: 'yyyy'}}\n      </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/admin/shared/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'footer-cmp',
        template: __webpack_require__("../../../../../src/app/admin/shared/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/shared/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/shared/footer/footer.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__footer_component__ = __webpack_require__("../../../../../src/app/admin/shared/footer/footer.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FooterModule = (function () {
    function FooterModule() {
    }
    return FooterModule;
}());
FooterModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__footer_component__["a" /* FooterComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__footer_component__["a" /* FooterComponent */]]
    })
], FooterModule);

//# sourceMappingURL=footer.module.js.map

/***/ }),

/***/ "../../../../../src/app/admin/shared/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar \">\n  <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle\" (click)=\"sidebarToggle()\">\n              <span class=\"sr-only\">Toggle navigation</span>\n              <span class=\"icon-bar bar1\"></span>\n              <span class=\"icon-bar bar2\"></span>\n              <span class=\"icon-bar bar3\"></span>\n          </button>\n          <a class=\"navbar-brand\" href=\"#\">{{getTitle()}}</a> \n      </div>\n      <!--<div class=\"collapse navbar-collapse\">\n          <ul class=\"nav navbar-nav navbar-right\">\n              <li>\n                  <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                      <i class=\"ti-panel\"></i>\n                      <p>Stats</p>\n                  </a>\n              </li>\n              <li class=\"dropdown\">\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                          <i class=\"ti-bell\"></i>\n                          <p class=\"notification\">5</p>\n                          <p>Notifications</p>\n                          <b class=\"caret\"></b>\n                    </a>\n                    <ul class=\"dropdown-menu\">\n                      <li><a href=\"#\">Notification 1</a></li>\n                      <li><a href=\"#\">Notification 2</a></li>\n                      <li><a href=\"#\">Notification 3</a></li>\n                      <li><a href=\"#\">Notification 4</a></li>\n                      <li><a href=\"#\">Another notification</a></li>\n                    </ul>\n              </li>\n              <li>\n                  <a href=\"#\">\n                      <i class=\"ti-settings\"></i>\n                      <p>Settings</p>\n                  </a>\n              </li>\n          </ul>\n\n      </div> -->\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/admin/shared/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/admin/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function () {
    function NavbarComponent(location, renderer, element) {
        this.renderer = renderer;
        this.element = element;
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.listTitles = __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__["a" /* ROUTES */].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    };
    NavbarComponent.prototype.getTitle = function () {
        var titlee = window.location.pathname;
        titlee = titlee.substring(1);
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    };
    NavbarComponent.prototype.sidebarToggle = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible == false) {
            setTimeout(function () {
                toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        }
        else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    };
    return NavbarComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("navbar-cmp"),
    __metadata("design:type", Object)
], NavbarComponent.prototype, "button", void 0);
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'navbar-cmp',
        template: __webpack_require__("../../../../../src/app/admin/shared/navbar/navbar.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/shared/navbar/navbar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navbar_component__ = __webpack_require__("../../../../../src/app/admin/shared/navbar/navbar.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NavbarModule = (function () {
    function NavbarModule() {
    }
    return NavbarModule;
}());
NavbarModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__navbar_component__["a" /* NavbarComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__navbar_component__["a" /* NavbarComponent */]]
    })
], NavbarModule);

//# sourceMappingURL=navbar.module.js.map

/***/ }),

/***/ "../../../../../src/app/admin/shuhuda/shuhuda.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#outer\n{\n    width:100%;\n    text-align: center;\n}\n.inner\n{\n    display: inline-block;\n}\n\n.area{\n  padding: 15px;\n  background-color:#fff;\n  box-shadow:2.5px 2.5px 1.25px 5px #ddd inset;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  \n\n\n      }\n   \n.btn{\n  padding:1.3px;\n}\n\n\n::-webkit-input-placeholder {\n        color: #000;\n        text-align: center;\n}\n\n\n .container {\n        background-color: #fff;\n        box-shadow: 1px 6.5px 12px 1px #000;\n        padding:20px;\n\n }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/shuhuda/shuhuda.component.html":
/***/ (function(module, exports) {

module.exports = "<main>\n    <div class=\"container\" >\n\n     <form action=\"/action_page.php\" >\n<br><br>\n<textarea class=\"area\"  [(ngModel)]=\"shuhuda.body\" rows=\"15px\" cols=\"100px\" name=\"usrtxt\"   placeholder=\"Testimonial contents here...\">\n\n</textarea><br>\n\n<textarea class=\"area\" [(ngModel)]=\"shuhuda.name\" rows=\"2px\" cols=\"100px\" name=\"usrtxt\"   placeholder=\"Client's name\">\n\n</textarea><br>\n\n<div id=\"outer\">\n  <div class=\"inner\"><button type=\"submit\" class=\"msgBtn\" onClick=\"return false;\" >Post New Testionial</button></div>\n <div class=\"inner\"></div><div class=\"inner\"></div>\n<div class=\"inner\"></div><div class=\"inner\"></div>\n  <div class=\"inner\"><button type=\"submit\" class=\"msgBtn2\" onClick=\"return false;\"\n   routerLink=\"/admin/makala-subtopics\" routerLinkActive=\"active\" >Cancel</button></div>\n \n</div>\n\n</form>\n \n    </div>\n </main>\n \n"

/***/ }),

/***/ "../../../../../src/app/admin/shuhuda/shuhuda.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shuhuda__ = __webpack_require__("../../../../../src/app/shuhuda.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShuhudaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShuhudaComponent = (function () {
    function ShuhudaComponent() {
        this.shuhuda = new __WEBPACK_IMPORTED_MODULE_1__shuhuda__["a" /* Shuhuda */]();
    }
    ShuhudaComponent.prototype.ngOnInit = function () {
    };
    return ShuhudaComponent;
}());
ShuhudaComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-shuhuda',
        template: __webpack_require__("../../../../../src/app/admin/shuhuda/shuhuda.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/shuhuda/shuhuda.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ShuhudaComponent);

//# sourceMappingURL=shuhuda.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/sidebar/sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".logo-img img {\n    width: 100px;\n}\n\n.sidebar .nav li.active > a {\n    color: #652f85 !important; \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"sidebar-wrapper\">\n  <div class=\"logo\">\n      <a href=\"https://www.creative-tim.com\" class=\"simple-text\">\n          <div class=\"logo-img\">\n              <img src=\"../../assets/images/pp.jpg\" alt=\"\">\n          </div>\n         \n      </a>\n  </div>\n  <ul class=\"nav\">\n          <li *ngIf=\"isNotMobileMenu()\">\n              <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                  <i class=\"ti-panel\"></i>\n        <p>Stats</p>\n              </a>\n          </li>\n          <li class=\"dropdown\" *ngIf=\"isNotMobileMenu()\">\n                <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                      <i class=\"ti-bell\"></i>\n                      <p class=\"notification\">5</p>\n            <p>Notifications</p>\n            <b class=\"caret\"></b>\n                </a>\n                <ul class=\"dropdown-menu\">\n                  <li><a href=\"#\">Notification 1</a></li>\n                  <li><a href=\"#\">Notification 2</a></li>\n                  <li><a href=\"#\">Notification 3</a></li>\n                  <li><a href=\"#\">Notification 4</a></li>\n                  <li><a href=\"#\">Another notification</a></li>\n                </ul>\n          </li>\n          <li *ngIf=\"isNotMobileMenu()\">\n              <a href=\"#\">\n        <i class=\"ti-settings\"></i>\n        <p>Settings</p>\n              </a>\n          </li>\n          <li class=\"divider\" *ngIf=\"isNotMobileMenu()\"></li>\n      <li *ngFor=\"let menuItem of menuItems\" routerLinkActive=\"active\" class=\"{{menuItem.class}}\">\n          <a class=\"menuitemlink\" [routerLink]=\"[menuItem.path]\">\n              <i class=\"{{menuItem.icon}}\"></i>\n              <p>{{menuItem.title}}</p>\n          </a>\n      </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/admin/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ROUTES = [
    { path: 'andika-blog', title: 'Andika blog', icon: 'ti-text', class: '' },
    { path: 'andika-makala', title: 'Andika makala', icon: 'ti-text', class: '' },
    { path: 'makala-edit', title: 'Makala Edit', icon: 'ti-pencil-alt2', class: '' },
    { path: 'clients', title: 'Clients', icon: 'ti-user', class: '' },
    { path: 'subscribers', title: 'Subscribers', icon: 'ti-view-list-alt', class: '' },
    { path: 'bidhaa', title: 'Products', icon: 'ti-shopping-cart', class: '' },
    { path: './../login', title: 'Logout', icon: 'ti-user', class: '' },
];
var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.prototype.isNotMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sidebar-cmp',
        template: __webpack_require__("../../../../../src/app/admin/sidebar/sidebar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/sidebar/sidebar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SidebarComponent);

//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/sidebar/sidebar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sidebar_component__ = __webpack_require__("../../../../../src/app/admin/sidebar/sidebar.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SidebarModule = (function () {
    function SidebarModule() {
    }
    return SidebarModule;
}());
SidebarModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__sidebar_component__["b" /* SidebarComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__sidebar_component__["b" /* SidebarComponent */]]
    })
], SidebarModule);

//# sourceMappingURL=sidebar.module.js.map

/***/ }),

/***/ "../../../../../src/app/admin/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*//////////////////////////////////////////////////////////////////\n[ FONT ]*/\n\n  \n  \n  /*//////////////////////////////////////////////////////////////////\n  [ RESTYLE TAG ]*/\n  \n  * {\n    margin: 0px; \n    padding: 0px; \n    box-sizing: border-box;\n}\n\nbody, html {\n    height: 100%;\n    font-family: Poppins-Regular, sans-serif;\n}\n\n/*---------------------------------------------*/\na {\n    font-family: Poppins-Regular;\n    font-size: 14px;\n    line-height: 1.7;\n    color: #666666;\n    margin: 0px;\n    transition: all 0.4s;\n    -webkit-transition: all 0.4s;\n  -o-transition: all 0.4s;\n  -moz-transition: all 0.4s;\n}\n\na:focus {\n    outline: none !important;\n}\n\na:hover {\n    text-decoration: none;\n  color: #333333;\n}\n\n/*---------------------------------------------*/\nh1,h2,h3,h4,h5,h6 {\n    margin: 0px;\n}\n\np {\n    font-family: Poppins-Regular;\n    font-size: 14px;\n    line-height: 1.7;\n    color: #666666;\n    margin: 0px;\n}\n\nul, li {\n    margin: 0px;\n    list-style-type: none;\n}\n\n\n/*---------------------------------------------*/\ninput {\n    outline: none;\n    border: none;\n}\n\ntextarea {\n  outline: none;\n  border: none;\n}\n\ntextarea:focus, input:focus {\n  border-color: transparent !important;\n}\n\ninput:focus::-webkit-input-placeholder { color:transparent; }\ninput:focus:-moz-placeholder { color:transparent; }\ninput:focus::-moz-placeholder { color:transparent; }\ninput:focus:-ms-input-placeholder { color:transparent; }\n\ntextarea:focus::-webkit-input-placeholder { color:transparent; }\ntextarea:focus:-moz-placeholder { color:transparent; }\ntextarea:focus::-moz-placeholder { color:transparent; }\ntextarea:focus:-ms-input-placeholder { color:transparent; }\n\ninput::-webkit-input-placeholder { color: #adadad;}\ninput:-moz-placeholder { color: #adadad;}\ninput::-moz-placeholder { color: #adadad;}\ninput:-ms-input-placeholder { color: #adadad;}\n\ntextarea::-webkit-input-placeholder { color: #adadad;}\ntextarea:-moz-placeholder { color: #adadad;}\ntextarea::-moz-placeholder { color: #adadad;}\ntextarea:-ms-input-placeholder { color: #adadad;}\n\n/*---------------------------------------------*/\nbutton {\n    outline: none !important;\n    border: none;\n    background: transparent;\n}\n\nbutton:hover {\n    cursor: pointer;\n}\n\niframe {\n    border: none !important;\n}\n\n\n/*//////////////////////////////////////////////////////////////////\n[ Utility ]*/\n.txt1 {\n  font-family: Poppins-Regular;\n  font-size: 15px;\n  color: #999999;\n  line-height: 1.5;\n}\n\n.txt2 {\n  font-family: Poppins-Regular;\n  font-size: 15px;\n  color: #57b846;\n  line-height: 1.5;\n}\n\n/*//////////////////////////////////////////////////////////////////\n[ login ]*/\n\n.limiter {\n  width: 100%;\n  margin: 0 auto;\n}\n\n.container-login100 {\n  width: 100%;  \n  min-height: 100vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 15px;\n  background: #fff;  \n}\n\n.wrap-login100 {\n  width: 390px;\n  background: #fff;\n}\n\n\n/*------------------------------------------------------------------\n[ Form ]*/\n\n.login100-form {\n  width: 100%;\n}\n\n.login100-form-title {\n  display: block;\n  font-family: Poppins-Bold;\n  font-size: 39px;\n  color: #333333;\n  line-height: 1.2;\n  text-align: center;\n}\n\n.login100-form-avatar {\n  display: block;\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  overflow: hidden;\n  margin: 0 auto;\n}\n\n.login100-form-avatar img {\n  width: 100%;\n}\n\n/*------------------------------------------------------------------\n[ Input ]*/\n\n.wrap-input100 {\n  width: 100%;\n  position: relative;\n  border-bottom: 2px solid #d9d9d9;\n}\n\n.input100 {\n  font-family: Poppins-SemiBold;\n  font-size: 18px;\n  color: #555555;\n  line-height: 1.2;\n\n  display: block;\n  width: 100%;\n  height: 52px;\n  background: transparent;\n  padding: 0 5px;\n}\n\n/*---------------------------------------------*/ \n.focus-input100 {\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n}\n\n.focus-input100::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  bottom: -2px;\n  left: 0;\n  width: 0;\n  height: 2px;\n  transition: all 0.4s;\n\n  background: #57b846;\n}\n\n.focus-input100::after {\n  font-family: Poppins-Medium;\n  font-size: 18px;\n  color: #999999;\n  line-height: 1.2;\n\n  content: attr(data-placeholder);\n  display: block;\n  width: 100%;\n  position: absolute;\n  top: 15px;\n  left: 0px;\n  padding-left: 5px;\n  transition: all 0.4s;\n}\n\n.input100:focus + .focus-input100::after {\n  top: -20px;\n  font-size: 15px;\n}\n\n.input100:focus + .focus-input100::before {\n  width: 100%;\n}\n\n.has-val.input100 + .focus-input100::after {\n  top: -20px;\n  font-size: 15px;\n}\n\n.has-val.input100 + .focus-input100::before {\n  width: 100%;\n}\n\n\n/*------------------------------------------------------------------\n[ Button ]*/\n.container-login100-form-btn {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.login100-form-btn {\n  font-family: Poppins-Medium;\n  font-size: 16px;\n  color: #fff;\n  line-height: 1.2;\n  text-transform: uppercase;\n\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 0 20px;\n  width: 100%;\n  height: 50px;\n  background-color: #57b846;\n  border-radius: 25px;\n\n  box-shadow: 0 10px 30px 0px rgba(87, 184, 70, 0.5);\n  -moz-box-shadow: 0 10px 30px 0px rgba(87, 184, 70, 0.5);\n  -webkit-box-shadow: 0 10px 30px 0px rgba(87, 184, 70, 0.5);\n  -o-box-shadow: 0 10px 30px 0px rgba(87, 184, 70, 0.5);\n  -ms-box-shadow: 0 10px 30px 0px rgba(87, 184, 70, 0.5);\n  transition: all 0.4s;\n}\n\n.login100-form-btn:hover  {\n  background-color: #333333;\n  box-shadow: 0 10px 30px 0px rgba(51, 51, 51, 0.5);\n  -moz-box-shadow: 0 10px 30px 0px rgba(51, 51, 51, 0.5);\n  -webkit-box-shadow: 0 10px 30px 0px rgba(51, 51, 51, 0.5);\n  -o-box-shadow: 0 10px 30px 0px rgba(51, 51, 51, 0.5);\n  -ms-box-shadow: 0 10px 30px 0px rgba(51, 51, 51, 0.5);\n}\n\n\n\n/*------------------------------------------------------------------\n[ Alert validate ]*/\n\n.validate-input {\n  position: relative;\n}\n\n.alert-validate::before {\n  content: attr(data-validate);\n  position: absolute;\n  max-width: 70%;\n  background-color: #fff;\n  border: 1px solid #c80000;\n  border-radius: 2px;\n  padding: 4px 25px 4px 10px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n  right: 0px;\n  pointer-events: none;\n\n  font-family: Poppins-Regular;\n  color: #c80000;\n  font-size: 13px;\n  line-height: 1.4;\n  text-align: left;\n\n  visibility: hidden;\n  opacity: 0;\n  transition: opacity 0.4s;\n}\n\n.alert-validate::after {\n  content: \"\\F06A\";\n  font-family: FontAwesome;\n  font-size: 16px;\n  color: #c80000;\n\n  display: block;\n  position: absolute;\n  background-color: #fff;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n  right: 5px;\n}\n\n.alert-validate:hover:before {\n  visibility: visible;\n  opacity: 1;\n}\n\n@media (max-width: 992px) {\n  .alert-validate::before {\n    visibility: visible;\n    opacity: 1;\n  }\n}\n\n\n/*//////////////////////////////////////////////////////////////////\n[ Login more ]*/\n.login-more li {\n  position: relative;\n  padding-left: 16px;\n}\n\n.login-more li::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  background-color: #cccccc;\n  top: 45%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n  left: 0;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<head>\n\t<title>Login V6</title>\n\t<meta charset=\"UTF-8\">\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<!--===============================================================================================-->\t\n\t<link rel=\"icon\" type=\"image/png\" href=\"../../assets/login/images/icons/favicon.ico\"/>\n<!--===============================================================================================-->\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"../../assets/login/vendor/bootstrap/css/bootstrap.min.css\">\n<!--===============================================================================================-->\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"../../assets/login/fonts/font-awesome-4.7.0/css/font-awesome.min.css\">\n<!--===============================================================================================-->\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"../../assets/login/fonts/iconic/css/material-design-iconic-font.min.css\">\n<!--===============================================================================================-->\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"../../assets/login/vendor/animate/animate.css\">\n<!--===============================================================================================-->\t\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"../../assets/login/vendor/css-hamburgers/hamburgers.min.css\">\n<!--===============================================================================================-->\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"../../assets/login/vendor/animsition/css/animsition.min.css\">\n<!--===============================================================================================-->\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"../../assets/login/vendor/select2/select2.min.css\">\n<!--===============================================================================================-->\t\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"../../assets/login/vendor/daterangepicker/daterangepicker.css\">\n<!--===============================================================================================-->\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"../../assets/login/css/util.css\">\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"../../assets/login/css/main.css\">\n<!--===============================================================================================-->\n</head>\n\n<body>\n\t\n\t<div class=\"limiter\">\n\t\t<div class=\"container-login100\">\n\t\t\t<div class=\"wrap-login100 p-t-85 p-b-20\">\n\t\t\t\t<form class=\"login100-form validate-form\">\n\t\t\t\t\t<span class=\"login100-form-title p-b-70\">\n\t\t\t\t\t\tSign up\n\t\t\t\t\t</span>\n\t\t\t\t\t<span class=\"login100-form-avatar\">\n\t\t\t\t\t\t<img src=\"images/avatar-01.jpg\" alt=\"AVATAR\">\n          </span>\n          \n          <div class=\"wrap-input100 validate-input m-t-85 m-b-35\" data-validate = \"Enter username\">\n\t\t\t\t\t\t<input class=\"input100\" type=\"text\" name=\"username\">\n\t\t\t\t\t\t<span class=\"focus-input100\" data-placeholder=\"Email\"></span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"wrap-input100 validate-input m-t-85 m-b-35\" data-validate = \"Enter username\">\n\t\t\t\t\t\t<input class=\"input100\" type=\"text\" name=\"username\">\n\t\t\t\t\t\t<span class=\"focus-input100\" data-placeholder=\"Username\"></span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"wrap-input100 validate-input m-b-50\" data-validate=\"Enter password\">\n\t\t\t\t\t\t<input class=\"input100\" type=\"password\" name=\"pass\">\n\t\t\t\t\t\t<span class=\"focus-input100\" data-placeholder=\"Password\"></span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"container-login100-form-btn\">\n\t\t\t\t\t\t<button class=\"login100-form-btn\">\n\t\t\t\t\t\t\tSign up\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<ul class=\"login-more p-t-190\">\n\t\t\t\t\t\t<li class=\"m-b-8\">\n\t\t\t\t\t\t\t<span class=\"txt1\">\n\t\t\t\t\t\t\t\tForgot\n\t\t\t\t\t\t\t</span>\n\n\t\t\t\t\t\t\t<a href=\"#\" class=\"txt2\">\n\t\t\t\t\t\t\t\tUsername / Password?\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<span class=\"txt1\">\n\t\t\t\t\t\t\t\tDon’t have an account?\n\t\t\t\t\t\t\t</span>\n\n\t\t\t\t\t\t\t<a href=\"#\" class=\"txt2\">\n\t\t\t\t\t\t\t\tSign up\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t\n\n\t<div id=\"dropDownSelect1\"></div>"

/***/ }),

/***/ "../../../../../src/app/admin/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignupComponent = (function () {
    function SignupComponent() {
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__("../../../../../src/app/admin/signup/signup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/signup/signup.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SignupComponent);

//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/subscribers/subscribers.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, " .container {\r\n        background-color: #fff;\r\n        box-shadow: 1px 6.5px 12px 1px #000;\r\n        width: 100%;\r\n        padding:20px;\r\n\r\n }\r\n .mtable {\r\n        width: 80%;\r\n        font-family:Verdana, Geneva, Tahoma, sans-serif\r\n }\r\n\r\n .mtable-checked {\r\n        width: 80%;\r\n        font-family:Verdana, Geneva, Tahoma, sans-serif;\r\n        margin-bottom:  100px;\r\n }\r\n\r\n th, td {\r\n        \r\n        padding: 3px 20px; \r\n }\r\n\r\n .rightcell {\r\n        \r\n        border-left: 1px solid #e46c2b;\r\n\r\n }\r\n\r\n .mtable tr:nth-child(even), .mtable-checked tr:nth-child(even) {\r\n       background-color: #fff\r\n }\r\n\r\n.mtable tr:nth-child(odd), .mtable-checked tr:nth-child(odd) {\r\n       background-color: #DCDCDC;\r\n }\r\n\r\n.mtable th, .mtable-checked th {\r\n       background-color: rgba(208, 108, 43, 0.6);\r\n }\r\n\r\n.block {\r\n      width: 89%;\r\n      margin-left: auto;\r\n      margin-right: auto;\r\n}\r\n\r\n.number {\r\n      width: 8%;\r\n}\r\n\r\n.name {\r\n      width: 32%;\r\n}\r\n\r\n.phonenumber {\r\n      width: 30%;\r\n} \r\n\r\n.status {\r\n      width: 30%;\r\n}\r\n\r\n td button {\r\n      background: none;\r\n      border: none;\r\n}\r\n\r\n tr { \r\n      height: 65px;\r\n}  \r\n\r\ntr th { \r\n      text-align: center;\r\n}\r\n\r\ntr td { \r\n      padding: 5px 8px;\r\n      text-align: center;\r\n}  \r\n\r\n\r\ntr td input {\r\n      color: rgba(51, 51, 51, .8);\r\n      padding: 1px 7px;\r\n      margin: 0 20px 0 0;\r\n      border: solid 1px  rgba(51, 51, 51, .5);\r\n      height: 40px;\r\n      border-radius: 4px; \r\n} \r\n\r\n\r\ntr td p {\r\n      margin: 0; \r\n}  \r\n\r\n.subscriberslist {\r\n      margin: 0 0 50px 6%;\r\n}\r\n\r\n.subscriberslist h3 {\r\n      margin: 0 0 35px 0 !important;\r\n}\r\n\r\n.subscriberslist label {\r\n      color: #66615b;\r\n      font-size: 16px;  \r\n      font-weight: 400 !important;\r\n}\r\n\r\n.subscriberslist input {\r\n      width: 60%;\r\n      height: 40px;\r\n      padding: 1px 7px;\r\n      margin: 0 0 0 45px;\r\n      border: solid 1px  rgba(51, 51, 51, .5);\r\n      border-radius: 4px; \r\n     \r\n}\r\n\r\n.subscriberslist .btn-success {\r\n      color: #fff;\r\n      font-size: 25px;\r\n      line-height: 30px;\r\n      margin: 0 5% 0 0;\r\n      padding: 4px 40px;\r\n      float: right;\r\n      border-radius: 4px;\r\n      border: solid 1px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/subscribers/subscribers.component.html":
/***/ (function(module, exports) {

module.exports = "<main>\r\n    <div class=\"container\">\r\n      \r\n\r\n      <br><br><br><br>\r\n      \r\n \r\n      <div class=\"subscriberslist\">\r\n        <h3>Subscribers</h3>\r\n     </div>\r\n   \r\n\r\n\r\n    <div class=\"block\">\r\n        <div class=\"navbar navbar-inner block-header\">\r\n            <div class=\"pull-right\"><span class=\"badge badge-info\">4</span>\r\n\r\n            </div>\r\n        \r\n        <div class=\"block-content collapse in\">\r\n            <table class=\"table table-striped\">\r\n                <thead>\r\n                    <tr>\r\n                        <th class=\"number\">#</th>\r\n                        <th class=\"name\">Name</th>\r\n                        <th class=\"phonenumber\">Phone Number</th>\r\n                        <th class=\"status\">Status</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let subscriber of newsubscribers; let i = index\">\r\n                        <td>{{i + 1}}</td>\r\n                        <td><span *ngIf=\"!showEraser[i]\">{{subscriber.name}}</span> <input *ngIf=\"showEraser[i]\"  placeholder=\"{{subscriber.name}}\"><button class=\"ti-close\" *ngIf=\"showEraser[i]\" (click)=\"alterEditMode(i)\"></button></td>\r\n                        <td>{{subscriber.phone_number}}</td>\r\n                        <td><button (click)=\"registerSubcriber(i)\"><p *ngIf=\"!newsubscribers [i].status\">New</p><p *ngIf=\"newsubscribers [i].status\">Checked</p></button></td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <br>\r\n\r\n </div>\r\n <br><br> \r\n      \r\n \r\n    </div>\r\n </main>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/admin/subscribers/subscribers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_subscribers_service__ = __webpack_require__("../../../../../src/app/core/subscribers.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscribersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SubscribersComponent = (function () {
    function SubscribersComponent(subscribersService) {
        this.subscribersService = subscribersService;
        this.showEraser = {};
        this.registered = {};
        this.status = { 'New': String };
        this.subscribers = [];
        this.newsubscribers = [];
    }
    SubscribersComponent.prototype.getSubscribers = function () {
        var that = this;
        this.subscribersService.getSubscribers().then(function (subscribers) { return subscribers.map(function (x) { return ((x.id === 1) || (x.id === 2) || (x.id === 3) || (x.id === 4)) ? that.newsubscribers.push(x) : that.subscribers.push(x); }); });
    };
    SubscribersComponent.prototype.registerSubcriber = function (i) {
        // var subscriber:Subscribers = this.newsubscribers[i];
        // this.newsubscribers.splice(i, 1);
        // console.log(this.subscribers[0]);
        // this.subscribers.push(subscriber);
        this.newsubscribers[i].status = !this.newsubscribers[i].status;
        this.subscribersService.updateSubscriber(this.newsubscribers[i], this.newsubscribers[i].id);
    };
    SubscribersComponent.prototype.ngOnInit = function () {
        this.getSubscribers();
    };
    return SubscribersComponent;
}());
SubscribersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-subscribers',
        template: __webpack_require__("../../../../../src/app/admin/subscribers/subscribers.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/subscribers/subscribers.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__core_subscribers_service__["a" /* SubscribersService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_subscribers_service__["a" /* SubscribersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_subscribers_service__["a" /* SubscribersService */]) === "function" && _a || Object])
], SubscribersComponent);

var _a;
//# sourceMappingURL=subscribers.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/upload-video/upload-video.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button {\n    font-size: 17px;\n    width: 200px;\n    height: 70px;\n    background-color:rgba(92, 184, 92, .1);\n    border: 2px solid rgba(92, 184, 92, 1);\n    border-radius: 4px;\n}\n\n\n.main {\n   margin: 40px 0 40px 6%;\n  \n}\n\n\n.step-number {\n   margin-top: 35px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/upload-video/upload-video.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n    <h3>Video Upload</h3>\n    \n    <h5 class=\"step-number\">1. </h5>\n    <button  id=\"execute-request-button\">Choose Account</button><br>\n    \n    <h5 class=\"step-number\">2. </h5>\n    <button id=\"select-file-button\">Select file</button><br>\n    <input id=\"select-file\" type=\"file\" style=\"display:none\">\n   \n    <h5 class=\"step-number\">3. </h5>\n    <button id=\"upload-file-button\">Upload file</button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/upload-video/upload-video.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadVideoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UploadVideoComponent = (function () {
    function UploadVideoComponent() {
    }
    UploadVideoComponent.prototype.ngOnInit = function () {
    };
    return UploadVideoComponent;
}());
UploadVideoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-upload-video',
        template: __webpack_require__("../../../../../src/app/admin/upload-video/upload-video.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/upload-video/upload-video.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UploadVideoComponent);

//# sourceMappingURL=upload-video.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/uploadimage/uploadimage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button {\n    height: 50px;\n    width: 200px;\n    background-color: #cdcdcd;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/uploadimage/uploadimage.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--<image-upload\n  url=\"http://api.jualishebora.gq/api/v1/images\"\n  (uploadFinished)=\"onUploadFinished($event)\"\n></image-upload> -->\n\n<image-upload\n  url=\"https://lishe-360.herokuapp.com/api/v1/images\"\n  (uploadFinished)=\"onUploadFinished($event)\"\n></image-upload>\n"

/***/ }),

/***/ "../../../../../src/app/admin/uploadimage/uploadimage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadimageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UploadimageComponent = (function () {
    function UploadimageComponent() {
        /*
        this is how we send data to from child to parent component
        * */
        this.onServerResponse = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    UploadimageComponent.prototype.ngOnInit = function () {
    };
    UploadimageComponent.prototype.imageUploaded = function (file) {
        console.log(JSON.stringify(file.serverResponse));
    };
    /*
 
    listens to server response, captures images details returned from server
    * */
    UploadimageComponent.prototype.onUploadFinished = function ($event) {
        /*
        sends image details captured from server response to the blog component
        * */
        this.onServerResponse.emit($event.serverResponse.response.json().data);
    };
    UploadimageComponent.prototype.imageRemoved = function (file) {
        // do some stuff with the removed file.
    };
    UploadimageComponent.prototype.disableSendButton = function (state) {
        console.log(JSON.stringify(state));
    };
    return UploadimageComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], UploadimageComponent.prototype, "onServerResponse", void 0);
UploadimageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-uploadimage',
        template: __webpack_require__("../../../../../src/app/admin/uploadimage/uploadimage.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/uploadimage/uploadimage.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UploadimageComponent);

var _a;
//# sourceMappingURL=uploadimage.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    { path: '', redirectTo: 'wazazi', pathMatch: 'full' },
    { path: 'wazazi', loadChildren: './wazazi/wazazi.module#WazaziModule' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]],
        providers: []
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<div *ngIf = \"isLandingpage\">\n<!--<div \n    class=\"index1\"\n    style=\"\n    width: 100%;\n    height: 100vh;\n    background-image: url('./assets/images/happy mother-kid.jpg');\n    background-repeat: no-repeat;\n    background-size: cover;\n    \"\n     >\n    <div\n    style=\"\n    height: 100%;\n    width: 100%;\n    padding: 30px 0 0 0;\n    background-color: rgba(0, 0, 0,0.7);\n    border-top-right-radius: 2px;\n    border-top-left-radius: 2px;  \n    z-index: -1;\n    \">\n    \n    <div style=\"display: table;\n                position: absolute;\n                top: 0;\n                left: 0;\n                height: 100%;\n                width: 100%;\">\n                               <!--vertical-align: middle;-->\n     <!-- <div style=\" display: table-cell;                             \n                  padding-top: 39vh\"> \n\n        <div style=\"width: 160px;\n                    height: 160px;  \n                    margin-left: auto;\n                    margin-right: auto;\n                    \">\n\n                    <img src=\"../../../assets/images/LISHE 360 4.png\" style=\" width: 130px;\n                    height: 130px;\n                    margin: 0px 0 0 0px;\n                    \"\n                    class=\"icon\">\n                    <div> <p class=\"brandname\" style=\"color: #fff;\n                                                      font-size: 20px;\n                                                      width: fit-content;\n                                                      display: inline-block !important;\n                                                      margin: 15px 5px 0 0px;  \">LISHE 360</p>\n                \n                          <img class=\"loadingbutton\" style=\"width: 16px;\n                                                            display: inline-block !important;\n                                                            margin: 0 0 8px 15px;\" \n                                                            src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" /> \n                    </div> \n\n        </div>\n\n      </div> \n      \n    </div>\n    \n    </div>\n    </div> -->\n\n    \n    <div style=\"height:fit-content ;\n    \">\n<div style=\"  background-color: rgba(70, 26, 66, 1);\n       width: 100%;\n       height: fit-content;                             \n       padding: 5vh 0 0 0;\n       box-shadow: 0px 7px 9px -8px #000;\"> \n\n\n\n<div style=\"width: fit-content;\n       height: fit-content;  \n       margin-left: auto;\n       margin-right: auto;\n       \">\n\n       <img src=\"../../../assets/images/LISHE 360 4.png\" style=\" width: 160px;\n       height: 160px;\n       margin: 7vh 0;\n       position: relative;\n       z-index: 100;\n       \"\n       class=\"icon\">\n\n</div>\n\n<div style=\"padding: 0 5vw;\n       margin-bottom: 4vh;\n       \">\n\n<p style=\"\n       color: #fff;\n       font-size: 3em;\n       font-weight:bold;\n       text-align: center;\">\n       LISHE 360</p>\n\n<!-- <div> \n             \n       </div> -->        \n       \n</div>\n\n</div> \n\n<div>\n<p style=\"\ncolor: rgba(70, 26, 66, 1);\nfont-size: 2em;\ntext-align: center;\npadding: 0 3vw;\nmargin: 4vh 0 5vh 0\">\nJIFUNZE LISHE BORA KWA MAMA NA MTOTO</p>\n<!-- <img src=\"./assets/images/babyfood.jpeg\" style=\"width: 100%; height: 100%;\">-->\n</div>\n\n<img class=\"loadingbutton\" style=\"width: 17px;\n                                  margin: 0 0 8px 49vw;\" \n                                               src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" /> \n\n</div>\n\n\n  </div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_datacarrier_service__ = __webpack_require__("../../../../../src/app/core/datacarrier.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(datacarrierService) {
        var _this = this;
        this.datacarrierService = datacarrierService;
        this.title = 'app works!';
        this.isLandingpage = true;
        datacarrierService.setLandingPageStatus$.subscribe(function (status) {
            _this.isLandingpage = status;
        });
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__core_datacarrier_service__["a" /* DatacarrierService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_datacarrier_service__["a" /* DatacarrierService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_datacarrier_service__["a" /* DatacarrierService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_select_dropdown__ = __webpack_require__("../../../../ngx-select-dropdown/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__admin_admin_module__ = __webpack_require__("../../../../../src/app/admin/admin.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










//import { ImageUploadModule } from 'angular2-image-upload'
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__core_core_module__["a" /* CoreModule */],
            __WEBPACK_IMPORTED_MODULE_9__admin_admin_module__["a" /* AdminModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_7_ngx_select_dropdown__["a" /* SelectDropDownModule */],
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/bidhaa.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Bidhaa; });
var Bidhaa = (function () {
    function Bidhaa() {
    }
    return Bidhaa;
}());

//# sourceMappingURL=bidhaa.js.map

/***/ }),

/***/ "../../../../../src/app/bidhaaCategory.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BidhaaCategory; });
var BidhaaCategory = (function () {
    function BidhaaCategory() {
    }
    return BidhaaCategory;
}());

//# sourceMappingURL=bidhaaCategory.js.map

/***/ }),

/***/ "../../../../../src/app/core/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthenticationService = (function () {
    function AuthenticationService(http, router) {
        this.http = http;
        this.router = router;
    }
    AuthenticationService.prototype.login = function (email, password) {
        return this.http.post('https://lishe-360.herokuapp.com/api/v1/users/signin', { email: email, password: password }, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'X-Requested-With': 'XMLHttpRequest' }) })
            .map(function (response) {
            var token = response.json().token;
            var base64Url = token.split('.')[1];
            var base64 = base64Url.replace('-', '+').replace('_', '/');
            return { token: token, decoded: JSON.parse(window.atob(base64)) };
        })
            .do(function (tokenData) {
            localStorage.setItem('token', tokenData.token);
        });
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        console.log('attempt to remove token');
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthenticationService);

var _a, _b;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/bidhaa.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BidhaaService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BidhaaService = (function () {
    function BidhaaService(http) {
        this.http = http;
        this.fetchedBidhaa = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.fetchedbidhaaCategories = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.fetchedOrders = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        //notification = new Subject<any>();
        this.bidhaaUrl = 'https://lishe-360.herokuapp.com/api/v1/products';
        this.bidhaaCategoriesUrl = 'https://lishe-360.herokuapp.com/api/v1/productsCategories';
        this.bidhaaByIdUrl = 'https://lishe-360.herokuapp.com/api/v1/productsByCategory';
        this.orderUrl = 'https://lishe-360.herokuapp.com/api/v1/orders';
    }
    // getBidhaa(id: number): void {                               
    //   const url = `${this.bidhaaUrl}/${id}`;
    //   this.http.get(url).subscribe((res: Response) => {
    //       this.bidhaa = res.json().data; 
    //       this.fetchedBidhaa.next(this.bidhaa)       
    //   });
    // }
    BidhaaService.prototype.updateProductCategory = function (category, id) {
        var url = this.bidhaaCategoriesUrl + "/" + id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this.http
            .put(url, category, options)
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    BidhaaService.prototype.deleteCategory = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        var url = this.bidhaaCategoriesUrl + "/" + id;
        return this.http.delete(url, options); //.pipe().catch(this.handleError);
    };
    BidhaaService.prototype.createOrder = function (order) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this.http
            .post(this.orderUrl, order, options)
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    BidhaaService.prototype.create = function (bidhaa) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        console.log('service method hit');
        return this.http
            .post(this.bidhaaUrl, bidhaa, options)
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    BidhaaService.prototype.createCategory = function (bidhaacategory) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this.http
            .post(this.bidhaaCategoriesUrl, bidhaacategory, options)
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    BidhaaService.prototype.getOrders = function () {
        var _this = this;
        this.http.get(this.orderUrl).subscribe(function (res) {
            _this.orders = res.json().data;
            _this.fetchedOrders.next(_this.orders);
        });
    };
    BidhaaService.prototype.getBidhaaCategory = function () {
        var _this = this;
        var url = this.bidhaaCategoriesUrl;
        this.http.get(url).subscribe(function (res) {
            _this.bidhaaCategory = res.json().data;
            _this.fetchedbidhaaCategories.next(_this.bidhaaCategory);
        });
    };
    BidhaaService.prototype.getProductsCategories = function () {
        return this.http.get(this.bidhaaCategoriesUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    BidhaaService.prototype.getBidhaa = function (id) {
        var url = this.bidhaaByIdUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    BidhaaService.prototype.getProducts = function () {
        return this.http.get(this.bidhaaUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    BidhaaService.prototype.getCategories = function () {
        return this.http.get(this.bidhaaCategoriesUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    //for sorting products based on categories on bidhaa page
    BidhaaService.prototype.getBidhaaByCategory = function (id) {
        var _this = this;
        var url = this.bidhaaByIdUrl + "/" + id;
        this.http.get(url).subscribe(function (res) {
            _this.bidhaa = res.json().data;
            _this.fetchedBidhaa.next(_this.bidhaa);
        });
    };
    //To load products from all categories
    BidhaaService.prototype.getAllBidhaa = function () {
        var _this = this;
        var url = this.bidhaaUrl;
        this.http.get(url).subscribe(function (res) {
            _this.bidhaa = res.json().data;
            _this.fetchedBidhaa.next(_this.bidhaa);
        });
    };
    // notifyChildComponent (): void {                           
    //       var data:any = 1
    //       this.notification.next(data); 
    // }
    BidhaaService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return BidhaaService;
}());
BidhaaService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], BidhaaService);

var _a;
//# sourceMappingURL=bidhaa.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/blogpost.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogpostService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BlogpostService = (function () {
    //http://api.jualishebora.gq/api/v1/topics  
    //http://api.tuseme.co.tz/api/v1/reports
    function BlogpostService(http) {
        this.http = http;
        this.blogpostUrl = 'https://lishe-360.herokuapp.com/api/v1/posts'; // 'http://api.jualishebora.gq/api/v1/posts'
        this.fetchedBlogpost = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
    }
    BlogpostService.prototype.upload = function (fileToUpload) {
        var input = new FormData();
        input.append("audio", fileToUpload);
        return this.http.post("https://lishe-360.herokuapp.com/api/v1/audio", input);
    };
    BlogpostService.prototype.postFile = function (fileToUpload) {
        var _this = this;
        var endpoint = 'https://lishe-360.herokuapp.com/api/v1/audio';
        var formData = new FormData();
        formData.append('audio', fileToUpload, fileToUpload.name);
        return this.http
            .post(endpoint, formData, { headers: this.headers })
            .map(function () { return true; })
            .catch(function (e) { return _this.handleError(e); });
    };
    // getBlogpost(id: number): Promise<Blogpost> {
    //     const url = `${this.blogpostUrl}/${id}`;
    //     return this.http.get(url)
    //                .toPromise()
    //                .then(response => response.json().data as Blogpost)
    //                .catch(this.handleError);
    // }
    BlogpostService.prototype.getBlogpost = function (id) {
        var _this = this;
        var url = this.blogpostUrl + "/" + id;
        this.http.get(url).subscribe(function (res) {
            _this.blogpost = res.json().data;
            _this.fetchedBlogpost.next(_this.blogpost);
            console.log(_this.blogpost);
            console.log('this code hit on post' + id + 'click');
        });
    };
    BlogpostService.prototype.getBlogposts = function () {
        return this.http.get(this.blogpostUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    // getaPostviaRouter(id: number): Observable<Blogpost> {
    //  const url = `${this.blogpostUrl}/${id}`;
    // } 
    BlogpostService.prototype.getaPost = function (id) {
        var url = this.blogpostUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    BlogpostService.prototype.update = function (post) {
        var url = this.blogpostUrl + "/" + post.id;
        return this.http
            .put(url, JSON.stringify(post), { headers: this.headers })
            .toPromise()
            .then(function () { return post; })
            .catch(this.handleError);
    };
    BlogpostService.prototype.create = function (blogpost) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this.http
            .post(this.blogpostUrl, blogpost, options)
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
        //JSON.stringify({makala})
    };
    BlogpostService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return BlogpostService;
}());
BlogpostService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], BlogpostService);

var _a;
//# sourceMappingURL=blogpost.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/clients.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClientsService = (function () {
    //http://api.tuseme.co.tz/api/v1/users
    function ClientsService(http) {
        this.http = http;
        this.clientsUrl = 'https://lishe-360.herokuapp.com/api/v1/wazazis';
    }
    ClientsService.prototype.getClients = function () {
        return this.http.get(this.clientsUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    //getClients(): void {
    //this.clientsService.getClients().then(clients => this.clients = clients);
    //}
    ClientsService.prototype.updateClient = function (client, id) {
        var url = this.clientsUrl + "/" + id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this.http
            .put(url, client, options)
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    ClientsService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    ClientsService.prototype.create = function (mzazi) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this.http
            .post(this.clientsUrl, mzazi, options)
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
        //JSON.stringify({makala})
    };
    return ClientsService;
}());
ClientsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], ClientsService);

var _a;
//# sourceMappingURL=clients.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/core.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/core.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  core works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/core/core.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CoreComponent = (function () {
    function CoreComponent() {
    }
    CoreComponent.prototype.ngOnInit = function () {
    };
    return CoreComponent;
}());
CoreComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-core',
        template: __webpack_require__("../../../../../src/app/core/core.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/core.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CoreComponent);

//# sourceMappingURL=core.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_component__ = __webpack_require__("../../../../../src/app/core/core.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__clients_service__ = __webpack_require__("../../../../../src/app/core/clients.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__blogpost_service__ = __webpack_require__("../../../../../src/app/core/blogpost.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__makala_service__ = __webpack_require__("../../../../../src/app/core/makala.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__bidhaa_service__ = __webpack_require__("../../../../../src/app/core/bidhaa.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__authentication_service__ = __webpack_require__("../../../../../src/app/core/authentication.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var CoreModule = (function () {
    function CoreModule() {
    }
    return CoreModule;
}());
CoreModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["HttpModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__core_component__["a" /* CoreComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_4__clients_service__["a" /* ClientsService */],
            __WEBPACK_IMPORTED_MODULE_5__blogpost_service__["a" /* BlogpostService */],
            __WEBPACK_IMPORTED_MODULE_6__makala_service__["a" /* MakalaService */],
            __WEBPACK_IMPORTED_MODULE_7__bidhaa_service__["a" /* BidhaaService */],
            __WEBPACK_IMPORTED_MODULE_8__authentication_service__["a" /* AuthenticationService */],
        ]
    })
], CoreModule);

//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/datacarrier.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatacarrierService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DatacarrierService = (function () {
    function DatacarrierService() {
        this.isLandingpagestatus = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this.setLandingPageStatus$ = this.isLandingpagestatus.asObservable();
        console.log('datacarrier is created');
    }
    DatacarrierService.prototype.setData = function (data) {
        this.data = data;
        console.log('1. service data after set ' + this.data);
    };
    DatacarrierService.prototype.getData = function () {
        console.log('2. service data before get ' + this.data);
        return this.data;
    };
    DatacarrierService.prototype.setLandingPageStatus = function (status) {
        this.isLandingpagestatus.next(status);
    };
    return DatacarrierService;
}());
DatacarrierService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], DatacarrierService);

//# sourceMappingURL=datacarrier.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/makala.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MakalaService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MakalaService = (function () {
    function MakalaService(http) {
        this.http = http;
        this.makalaUrl = 'https://lishe-360.herokuapp.com/api/v1/topics';
        this.makalaCategoriesUrl = 'https://lishe-360.herokuapp.com/api/v1/topicCategories';
        this.foodsUrl = 'https://lishe-360.herokuapp.com/api/v1/foods';
        this.fetchedmakalaTitles = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.fetchedmakalaCategories = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.fetchedfoods = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
    }
    MakalaService.prototype.create = function (makala) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this.http
            .post(this.makalaUrl, makala, options)
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
        //JSON.stringify({makala})
    };
    MakalaService.prototype.getMakalaCategories = function () {
        return this.http.get(this.makalaCategoriesUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    MakalaService.prototype.getMakalaCategory = function () {
        var _this = this;
        var url = this.makalaCategoriesUrl;
        this.http.get(url).subscribe(function (res) {
            _this.makalaCategories = res.json().data;
            _this.fetchedmakalaCategories.next(_this.makalaCategories);
        });
    };
    MakalaService.prototype.getFood = function () {
        var _this = this;
        var url = this.foodsUrl;
        this.http.get(url).subscribe(function (res) {
            _this.food = res.json().data;
            _this.fetchedfoods.next(_this.food);
        });
    };
    MakalaService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return MakalaService;
}());
MakalaService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], MakalaService);

var _a;
//# sourceMappingURL=makala.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/makalatitles.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MakalatitlesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MakalatitlesService = (function () {
    function MakalatitlesService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        this.makalatitlesUrl = 'https://lishe-360.herokuapp.com/api/v1/topics';
        this.makalacategoriesUrl = 'https://lishe-360.herokuapp.com/api/v1/topicsByCategory'; //http://api.tuseme.co.tz/api/v1/streets
        this.makalaCategoryNameUrl = 'https://lishe-360.herokuapp.com/api/v1/topicCategories';
        this.updateUrl = 'https://lishe-360.herokuapp.com/api/v1/topicCategories';
        this.foodsUrl = 'https://lishe-360.herokuapp.com/api/v1/foods';
        this.nameChange = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.fetchedArticles = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"](); //observable ya makala inarudishwa hapa,?
        this.fetchedArticle = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.fetchedCategories = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"](); //observable ya topic catgories
    }
    MakalatitlesService.prototype.getMakalatitles = function () {
        // makala contents ikianza
        //return this.http.get(this.makalaCategoryNameUrl)
        //           .toPromise()
        //           .then(this.extractData)
        //           .catch(this.handleError);
        var _this = this;
        this.http.get(this.makalaCategoryNameUrl).subscribe(function (res) {
            _this.category = res.json().data;
            _this.fetchedCategories.next(_this.category);
        });
    };
    MakalatitlesService.prototype.getMakala = function (id) {
        var _this = this;
        var url = this.makalacategoriesUrl + "/" + id;
        this.http.get(url).subscribe(function (res) {
            _this.makala = res.json().data;
            _this.fetchedArticles.next(_this.makala);
            console.log(_this.makala);
        });
    };
    MakalatitlesService.prototype.getArticle = function (id) {
        var _this = this;
        var url = this.makalatitlesUrl + "/" + id;
        this.http.get(url).subscribe(function (res) {
            _this.article = res.json().data;
            _this.fetchedArticle.next(_this.article);
            console.log(id);
            console.log(_this.article);
        });
    };
    MakalatitlesService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    MakalatitlesService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    MakalatitlesService.prototype.create = function (makala) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this.http
            .post(this.makalatitlesUrl, makala, options)
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
        //JSON.stringify({makala})
    };
    MakalatitlesService.prototype.performSearch = function (searchTerm) {
        var _this = this;
        var apiLink = 'http://api.tuseme.co.tz/api/v1/search/'
            + searchTerm + '?api_key=bc';
        this.http.request(apiLink).subscribe(function (res) {
            _this.makala = res.json().data;
            _this.fetchedArticles.next(_this.makala);
            console.log(_this.makala);
            _this.makalatitle = searchTerm;
            _this.nameChange.next(_this.makalatitle);
            console.log(_this.makalatitle);
        });
    };
    MakalatitlesService.prototype.getMakalatitle = function (id) {
        var _this = this;
        var url = this.makalaCategoryNameUrl + "/" + id;
        this.http.get(url).subscribe(function (res) {
            _this.category = res.json().data;
            _this.fetchedCategories.next(_this.category);
            console.log(_this.category);
        });
    };
    MakalatitlesService.prototype.updateTopicCategory = function (category, id) {
        console.log(category.category_name);
        console.log(category.id);
        var url = this.updateUrl + "/" + id;
        console.log(url);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this.http
            .put(url, category, options)
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    MakalatitlesService.prototype.updateFoods = function (food, id) {
        console.log('food updated in service');
        var url = this.foodsUrl + "/" + id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this.http
            .put(url, food, options)
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    MakalatitlesService.prototype.deleteCategory = function (id) {
        console.log('delete category in service called');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        var url = this.makalaCategoryNameUrl + "/" + id;
        return this.http.delete(url, options); //.pipe().catch(this.handleError);
    };
    MakalatitlesService.prototype.deleteFood = function (id) {
        console.log('delete food in service called');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        var url = this.foodsUrl + "/" + id;
        return this.http.delete(url, options);
    };
    MakalatitlesService.prototype.getMakalaCategories = function () {
        return this.http
            .get(this.makalaCategoryNameUrl)
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    MakalatitlesService.prototype.getFoods = function () {
        return this.http
            .get(this.foodsUrl)
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    MakalatitlesService.prototype.createMakalaCategory = function (category) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this.http
            .post(this.makalaCategoryNameUrl, category, options)
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
        //JSON.stringify({makala})
    };
    MakalatitlesService.prototype.createFood = function (food) {
        console.log('food created in service');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this.http
            .post(this.foodsUrl, food, options)
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    return MakalatitlesService;
}());
MakalatitlesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], MakalatitlesService);

var _a;
//# sourceMappingURL=makalatitles.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/subscribers.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscribersService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SubscribersService = (function () {
    function SubscribersService(http) {
        this.http = http;
        this.subscribersUrl = 'https://lishe-360.herokuapp.com/api/v1/subscribers';
    }
    SubscribersService.prototype.getSubscribers = function () {
        return this.http.get(this.subscribersUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    SubscribersService.prototype.updateSubscriber = function (subscriber, id) {
        var url = this.subscribersUrl + "/" + id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this.http
            .put(url, subscriber, options)
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    SubscribersService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    SubscribersService.prototype.create = function (subscriber) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this.http
            .post(this.subscribersUrl, subscriber, options)
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
        //JSON.stringify({makala})
    };
    return SubscribersService;
}());
SubscribersService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], SubscribersService);

var _a;
//# sourceMappingURL=subscribers.service.js.map

/***/ }),

/***/ "../../../../../src/app/food.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Food; });
var Food = (function () {
    function Food() {
    }
    return Food;
}());

//# sourceMappingURL=food.js.map

/***/ }),

/***/ "../../../../../src/app/makala.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Makala; });
var Makala = (function () {
    function Makala() {
    }
    return Makala;
}());

//# sourceMappingURL=makala.js.map

/***/ }),

/***/ "../../../../../src/app/makalacategory.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Makalacategory; });
var Makalacategory = (function () {
    function Makalacategory() {
    }
    return Makalacategory;
}());

//# sourceMappingURL=makalacategory.js.map

/***/ }),

/***/ "../../../../../src/app/makalatitles.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Makalatitles; });
var Makalatitles = (function () {
    function Makalatitles() {
    }
    return Makalatitles;
}());

//# sourceMappingURL=makalatitles.js.map

/***/ }),

/***/ "../../../../../src/app/shuhuda.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Shuhuda; });
var Shuhuda = (function () {
    function Shuhuda() {
    }
    return Shuhuda;
}());

//# sourceMappingURL=shuhuda.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map
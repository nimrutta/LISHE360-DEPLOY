webpackJsonp([0],{

/***/ "../../../../../src/app/comment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Comment; });
var Comment = (function () {
    function Comment() {
    }
    return Comment;
}());

// id: number;
// title: string;
// body: string;
// teacher_id: any;
// food_id: any;
// topic_category_id: number;
// id: number;
//name: string;
//contact: string;
//body: string; 
//# sourceMappingURL=comment.js.map

/***/ }),

/***/ "../../../../../src/app/core/comment.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CommentService = (function () {
    function CommentService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        this.commentsUrl = 'https://lishe-360.herokuapp.com/api/v1/comments';
        this.commentcategoriesUrl = 'https://lishe-360.herokuapp.com/api/v1/topicsByCategory';
        this.commentCategoryNameUrl = 'https://lishe-360.herokuapp.com/api/v1/topicCategories';
        this.nameChange = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.fetchedComments = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
    }
    CommentService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    CommentService.prototype.create = function (comment) {
        console.log('comment created in service');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this.http
            .post(this.commentsUrl, comment, options)
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
        //JSON.stringify({comment})
    };
    CommentService.prototype.getComment = function () {
        var _this = this;
        var url = this.commentsUrl;
        this.http.get(url).subscribe(function (res) {
            _this.comment = res.json().data;
            _this.fetchedComments.next(_this.comment);
            console.log(_this.comment);
        });
    };
    return CommentService;
}());
CommentService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], CommentService);

var _a;
//# sourceMappingURL=comment.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/passevents.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasseventsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PasseventsService = (function () {
    function PasseventsService() {
        this.leaveblogsection = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.navigateout$ = this.leaveblogsection.asObservable();
    }
    PasseventsService.prototype.exitblogsection = function (searchInputStatus) {
        this.leaveblogsection.next(searchInputStatus);
    };
    return PasseventsService;
}());
PasseventsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], PasseventsService);

//# sourceMappingURL=passevents.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SearchService = (function () {
    function SearchService(http) {
        this.message = "now you see this, success";
        this.fetchedPosts = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["Subject"]();
        this.fetchedPosts1 = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["Subject"]();
        this.searchResultsStatus = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["Subject"]();
        this.nameChange = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["Subject"]();
        this.baseUrl = 'https://lishe-360.herokuapp.com/api/v1/search/'; //http://api.jualishebora.gq/api/v1/posts
        this.queryUrl = '?search=';
        this.http = http;
        this.giphies = [];
    }
    SearchService.prototype.searchResultsView = function (status) {
        this.showSearchResults = status;
        this.searchResultsStatus.next(this.showSearchResults);
        console.log(this.showSearchResults);
    };
    SearchService.prototype.callSearch = function (term) {
        var _this = this;
        this.search(term).subscribe(function (results) {
            _this.searchResults = results.data;
            _this.fetchedPosts1.next(_this.searchResults);
            console.log(term + 'typed');
            console.log(results + 'obtained');
            console.log(_this.searchResults);
        });
    };
    SearchService.prototype.search = function (terms) {
        var _this = this;
        console.log(terms + '1 typed');
        return terms.debounceTime(400)
            .distinctUntilChanged()
            .switchMap(function (term) { return _this.searchEntries(term); });
    };
    SearchService.prototype.searchEntries = function (term) {
        console.log(term + '2 typed');
        return this.http
            .get(this.baseUrl + term)
            .map(function (res) { return res.json(); });
    };
    SearchService.prototype.performSearch = function (searchTerm) {
        var _this = this;
        var apiLink = 'https://lishe-360.herokuapp.com/api/v1/search' // http://api.tuseme.co.tz/api/v1/search/
            + searchTerm.value + '?api_key=bc';
        this.http.request(apiLink).subscribe(function (res) {
            _this.giphies = res.json().data;
            _this.fetchedPosts.next(_this.giphies);
            console.log(_this.giphies);
            _this.message = 'now this, success';
            _this.nameChange.next(_this.message);
            console.log(_this.message);
        });
    };
    return SearchService;
}());
SearchService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], SearchService);

var _a;
//# sourceMappingURL=search.service.js.map

/***/ }),

/***/ "../../../../../src/app/order.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Order; });
var Order = (function () {
    function Order() {
    }
    return Order;
}());

//# sourceMappingURL=order.js.map

/***/ }),

/***/ "../../../../../src/app/shared/safepipe.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    return SafePipe;
}());
SafePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'safepipe',
        pure: true
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _a || Object])
], SafePipe);

var _a;
//# sourceMappingURL=safepipe.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__safepipe_pipe__ = __webpack_require__("../../../../../src/app/shared/safepipe.pipe.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__safepipe_pipe__["a" /* SafePipe */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__safepipe_pipe__["a" /* SafePipe */]]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/app/subscribers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Subscribers; });
var Subscribers = (function () {
    function Subscribers() {
    }
    return Subscribers;
}());

//# sourceMappingURL=subscribers.js.map

/***/ }),

/***/ "../../../../../src/app/wazazi.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Wazazi; });
var Wazazi = (function () {
    function Wazazi() {
    }
    return Wazazi;
}());

//# sourceMappingURL=wazazi.js.map

/***/ }),

/***/ "../../../../../src/app/wazazi/bidhaa-category/bidhaa-category.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bidhaabed {\n    margin: 0 0 0 0;\n}\n\n.row {\n    /*margin-bottom: 40px;*/\n}\n\n.itembed {\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    padding: 0 15px 0 15px;\n    margin: 0 0 40px 0;\n}\n\n.itemcover {\n    height: 73%;\n    width: 90.2%;\n    background-color: rgba(0,0,0,0.2);\n    position: absolute;\n    z-index: 1000;\n}\n\n.itemcover:hover {\n    color: #fff;\n    z-index: -1;\n    transition: all .4s ease;\n}\n\n.newitem {\n    color: #fff;\n    font-family: montserrat-regular;\n    font-size: 11px;\n    background-color: #66a8a6;\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    padding: 3px 11px 3px 11px;\n    position: absolute;\n    z-index: 1999;\n    top: 20px;\n    right: 25px;\n    border: none;\n    border-radius: 12px;\n}\n\n.item {\n   color: #888888; \n   height: 470px;\n   width: 100% !important;\n   background-color: #ffffff;\n   border-collapse:collapse;\n   border-radius: 1%;\n   display : table;\n   box-shadow: 10px 3.5px 20px -17px #000;\n   overflow: hidden;\n}\n\n.itemimage {\n    width: 100%;\n    margin: 0 0 15px 0;\n    height: 282px;    /* To match image width */\n }\n\n\n#itemfooter {\n    display : table-row;\n    vertical-align : bottom;\n    height: 1px;\n}\n\n#price {\n    margin: 10px 0 5px 0;\n}\n\n.item h4, h5{\n    /*font-family: montserrat-regular;*/\n    font-family: 'Muli',Arial, Helvetica, sans-serif;\n    padding: 0 15px 0 10px;\n }\n\n.item h4{\n    color: #4b4f56;/*rgba(0,0,0,0.7);*/\n    margin: 10px 0 5px 0;\n    font-size: 17px !important;\n }\n\n.item h5{\n   /* color: #4b4f56;/*#000;*/\n    color: #050709;\n    font-size: 15px !important;\n    font-weight: 400;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    margin: 50px 0 10px 0;\n }\n\n.calltoaction {\n    /*color: rgba(101, 47, 133, 1);*/\n    color: #550055;\n    font-weight: 600;\n}\n\n #wasiliananasi {\n    font-size: 14px;\n    display: inline-block;\n    padding: 0 0 0 15px\n }\n\n #contact {\n    font-size: 14px;\n    display: inline-block;\n    padding: 0 15px 0 0;\n    float: right;\n }\n\n #contact a {\n    color: rgba(101, 47, 133, 1);\n }\n\n @media all and (max-width: 767px){\n.itembed {\n    margin: 0 0 35px 0;\n    }\n\n.row {\n    margin-bottom: 0;\n    }\n\n.itemcover {  \n    width: 325.84px;\n    height: 80%; \n    margin: 0 2.5%;  \n    }\n\n.newitem {\n    top: 20px;\n    right: 40px;\n    }\n\n.item {\n    width: 95%;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    margin: 0 auto;\n}\n\n.itemimage {\n    width: 100%;\n     }\n    \n.item h4, h5{\n    margin: 5px 0 10px 0;\n     }\n\n.item h5{\n    margin: 0 0 13px 0;\n     }\n }\n\n\n @media all and (max-width: 500px){\n\n.itemcover {  \n    width: 87%;\n    height: 76%; \n    margin: 0 2.5%;  \n    }  \n         \n.newitem {\n    top: 20px;\n    right: 40px;\n    }\n\n.item {\n    width: 95%;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    margin: 0 auto;\n}\n\n.itemimage {\n    width: 100%;\n     }\n    \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wazazi/bidhaa-category/bidhaa-category.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n <div class=\"col-sm-4 itembed\">\n     <button class=\"newitem\">Mpya</button>\n     <!-- <div class=\"itemcover\">\n     \n     </div> -->\n     <div class=\"item\">\n        <img src=\"./../../../assets/images/CFT.jpeg\" class=\"itemimage\">\n        <div id=\"itemfooter\">\n        <h5>Kifaa cha kumnyweshea mtoto maziwa Kifaa cha kumnyweshea mtoto maziwa</h5>\n        \n        <h5 id=\"price\">Tsh 7000/=</h5>\n        <div class=\"calltoaction\">\n        <p id=\"contact\"><a [href]=\"whatsapplink[0]\" > Nunua Sasa</a></p> <!--index value is used to identify an item in whatsapplink[index] -->\n        </div>\n        </div>\n     </div>\n </div>\n <div class=\"col-sm-4 itembed\">\n     <!-- <div class=\"itemcover\">\n     \n     </div> -->\n     <div class=\"item\">\n        <img src=\"./../../../assets/images/CFT1.jpeg\" class=\"itemimage\">\n        <div id=\"itemfooter\">\n        <h5>Dishi la chakula cha mtoto</h5>\n        <h5 id=\"price\">Tsh 7000/=</h5>\n        <div class=\"calltoaction\">\n            <p id=\"contact\"><a [href]=\"whatsapplink[1]\" > Nunua Sasa</a></p>\n        </div>\n        </div>\n     </div>\n </div>\n <div class=\"col-sm-4 itembed\">\n     <!-- <div class=\"itemcover\">\n     \n     </div> -->    \n     <div class=\"item\">\n        <img src=\"./../../../assets/images/CFT2.jpg\" class=\"itemimage\">\n        <div id=\"itemfooter\">\n        <h5>Aproni na na qoigjasdpogh qwguqadngpadgjqdsag qwguqadngpadgjqdsag </h5>\n        <h5 id=\"price\">Tsh 7000/=</h5>\n        <div class=\"calltoaction\">\n            <p id=\"contact\"><a [href]=\"whatsapplink[2]\" > Nunua Sasa</a></p>\n        </div>\n        </div>\n     </div>\n </div>\n</div>\n\n<!--<div class=\"row\">\n        <div class=\"col-sm-4 itembed\">\n             <div class=\"itemcover\">\n          \n             </div>\n            <div class=\"item\">\n               <img src=\"./../../../assets/images/CFT.jpeg\" class=\"itemimage\">\n               <h5>Kifaa cha kunyweshea mtoto maziwa</h5>\n               <h4>Tsh 7000/=</h4>\n            </div>\n        </div>\n        <div class=\"col-sm-4 itembed\">\n             <div class=\"itemcover\">\n          \n             </div>\n            <div class=\"item\">\n               <img src=\"./../../../assets/images/CFT1.jpeg\" class=\"itemimage\">\n               <h5>Dishi la chakula cha mtoto</h5>\n               <h4>Tsh 7000/=</h4>\n            </div>\n        </div>\n        <div class=\"col-sm-4 itembed\">\n             <div class=\"itemcover\">\n          \n             </div>\n            <div class=\"item\">\n               <img src=\"./../../../assets/images/CFT2.jpg\" class=\"itemimage\">\n               <h5>Aproni</h5>\n               <h4>Tsh 7000/=</h4>\n            </div>\n        </div>\n</div>-->\n\n<!--<div class=\"row\">\n       \n\n        <div class=\"col-sm-4 itembed\">\n             <div class=\"itemcover\">\n          \n             </div>\n            <div class=\"item\">\n               <img src=\"./../../../assets/images/CFT.jpeg\" class=\"itemimage\">\n               <h5>Kifaa cha kunyweshea mtoto maziwa</h5>\n               <h4>Tsh 7000/=</h4>\n            </div>\n        </div>\n        <div class=\"col-sm-4 itembed\">\n             <div class=\"itemcover\">\n          \n             </div>\n            <div class=\"item\">\n               <img src=\"./../../../assets/images/CFT1.jpeg\" class=\"itemimage\">\n               <h5>Dishi la chakula cha mtoto</h5>\n               <h4>Tsh 7000/=</h4>\n            </div>\n        </div>\n        <div class=\"col-sm-4 itembed\">\n             <div class=\"itemcover\">\n          \n             </div>\n            <div class=\"item\">\n               <img src=\"./../../../assets/images/CFT2.jpg\" class=\"itemimage\">\n                <h5>Aproni</h5>\n                <h4>Tsh 7000/=</h4>\n               \n            </div>\n        </div>\n</div> -->\n\n<div class=\"row\">\n\n    <div class=\"col-sm-4 itembed\" *ngFor = \"let item of bidhaa; let i = index\" >\n       <!-- <div class=\"itemcover\">\n     \n        </div> -->\n       <div class=\"item\">\n          <img src={{item.image.url}} class=\"itemimage\">\n         <div id=\"itemfooter\">\n          <h5>{{item.name}}</h5>\n          <h5 id=\"price\">{{item.price}}</h5>\n          <div class=\"calltoaction\">\n            <p id=\"contact\" *isMobile ><a [href]=\"whatsapplink[i]\" > Nunua Sasa</a></p>\n            <p id=\"contact\" *isDesktop ><a (click) = \"showNunuaBidhaaForm(i)\" > Nunua Sasa</a></p>\n          </div>\n         </div>\n       </div>\n    </div> \n\n\n</div>\n\n<app-nunuabidhaa class=\"nunuabidhaaform\" *ngIf=\"isNunuaBidhaaForm\" (myevenT)=\"myevenT($event)\" (closeButtonClicked)=\"closeButtonClicked($event)\" [ordertext]='orderText'></app-nunuabidhaa> \n"

/***/ }),

/***/ "../../../../../src/app/wazazi/bidhaa-category/bidhaa-category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_bidhaa_service__ = __webpack_require__("../../../../../src/app/core/bidhaa.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BidhaaCategoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BidhaaCategoryComponent = (function () {
    function BidhaaCategoryComponent(bidhaaService, route) {
        var _this = this;
        this.bidhaaService = bidhaaService;
        this.route = route;
        this.deviceInfo = null;
        this.isNunuaBidhaaForm = false;
        this.jinalabidhaa = ['Pacifier', 'Dishi la chakula cha mtoto', 'Aproni'];
        this.whatsapplink = []; /* an array of product names is
                          created when componet is loaded */
        this.whatsapplink = [];
        this.bidhaa = bidhaaService.bidhaa;
        this.subscription = this.bidhaaService.fetchedBidhaa.subscribe(function (value) {
            _this.bidhaa = value;
            value.forEach(function (item, index) {
                _this.order(item, index);
            });
        });
        // this.subscription = this.bidhaaService.notification.subscribe((value) => {
        //  this.getBidhaaviaRouter();
        // })
    }
    BidhaaCategoryComponent.prototype.ngOnInit = function () {
        //this.getBidhaa();
        this.getBidhaaviaRouter();
    };
    BidhaaCategoryComponent.prototype.order = function (value, index) {
        this.whatsapplink[index] = "https://api.whatsapp.com/send?phone=255688192446&text=Nahitaji%20" + value.name;
    };
    BidhaaCategoryComponent.prototype.showNunuaBidhaaForm = function (i) {
        this.orderText = 'Nahitaji ' + this.bidhaa[i].name;
        this.isNunuaBidhaaForm = true;
    };
    BidhaaCategoryComponent.prototype.closeButtonClicked = function ($event) {
        if (this.isNunuaBidhaaForm) {
            this.isNunuaBidhaaForm = false;
        }
        console.log('closebuttonclicked method');
        console.log(this.isNunuaBidhaaForm);
    };
    BidhaaCategoryComponent.prototype.myevenT = function ($event) {
        if (this.isNunuaBidhaaForm) {
            this.isNunuaBidhaaForm = false;
        }
    };
    BidhaaCategoryComponent.prototype.getBidhaaviaRouter = function () {
        var _this = this;
        this.bidhaacategory_Id = +this.route.snapshot.paramMap.get('id');
        var id = +this.route.snapshot.paramMap.get('id');
        if (id === 0) {
            console.log('id is ZERO');
            this.bidhaaService.getAllBidhaa();
        }
        else {
            console.log('id NOT ZERO');
            this.bidhaaService.getBidhaa(id).then(function (bidhaa) {
                _this.bidhaa = bidhaa;
                _this.bidhaa.forEach(function (item, index) {
                    _this.order(item, index);
                });
            });
        }
    };
    BidhaaCategoryComponent.prototype.getBidhaa = function () {
        var _this = this;
        this.bidhaaService.getProducts().then(function (bidhaa) { _this.bidhaa = bidhaa; console.log('HERE ' + _this.bidhaa); });
    };
    return BidhaaCategoryComponent;
}());
BidhaaCategoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-bidhaa-category',
        template: __webpack_require__("../../../../../src/app/wazazi/bidhaa-category/bidhaa-category.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wazazi/bidhaa-category/bidhaa-category.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__core_bidhaa_service__["a" /* BidhaaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_bidhaa_service__["a" /* BidhaaService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], BidhaaCategoryComponent);

var _a, _b;
//# sourceMappingURL=bidhaa-category.component.js.map

/***/ }),

/***/ "../../../../../src/app/wazazi/bidhaa/bidhaa.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n    width: 1261px;\n    margin: 0 2px;\n}\n\n*:focus {outline: none}\n\n.Bidhaabed {\n    margin: 25px 0 0 0;\n}\n\n.Bidhaabed > div {\n    padding-left: 0;\n}\n\n.makundiyabidhaa {\n    background-color: #ffffff;\n    height: 400px;\n    margin: 0 20px 0 0; \n    padding: 0 0 0 25px;\n    border-radius: 4%;\n    box-shadow: 10px 3.5px 20px -17px #000\n}\n\n.For_LS {\n    display: inherit;\n}\n\n.For_SS {\n    display: none;\n}\n\n.makundiyabidhaa h3 {\n    margin: 0 0 20px 0;\n    padding: 20px 0 10px 0;\n    font-family: 'Muli',Arial, Helvetica, sans-serif;\n    font-weight: 400;\n    color: #050709;\n}\n\n/*.active {\n    color: rgba(70, 26, 66, .8) !important;\n}*/\n\n.makundiyabidhaa .glyphicon {\n    margin: 15px 0 0 44%;\n}\n\n.makundiyabidhaa ul {\n    list-style-type: none;\n    padding: 0 0 0 0;\n  }\n\n.makundiyabidhaa li {\n    /*color: #4b4f56;*/ /*#949494*/\n    color: #050709;\n    font-size: 15px;\n    line-height: 1.8;\n    font-family: 'Muli',Arial, Helvetica, sans-serif;\n    font-weight:400;\n    margin: 0 0 13px 0;\n}\n\n.makundiyabidhaa li:hover {\n    color: #66a8a6;\n}\n\n\n.test{\n    width: 100%;\n    height: 90px;\n    background-color: ghostwhite;\n}\n\n@media all and (max-width: 767px){\n.container {\n    width: 100%;\n    padding: 0 0;\n    margin: 0 0;\n    }   \n    \n.Bidhaabed {\n    margin: 0 0 0 0;\n}\n\n.Bidhaabed > div {\n    padding-right: 0;\n    }\n\n.makundiyabidhaa {\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    margin: 0 0 15px 0;\n}  \n\n.For_LS {\n    display: none;\n}\n\n.For_SS {\n    display: inherit;\n    margin: 15px 0 15px 0;\n}\n\n.makundiyabidhaa h3 {\n    font-size: 1.5em;\n    margin: 0 0 0 0;\n    padding: 10px 0 10px 0;\n}  \n\n.makundiyabidhaa .glyphicon {\n    width: 14px;\n    margin: 0 0 0 44%;\n}\n\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wazazi/bidhaa/bidhaa.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row Bidhaabed\">\n    <div class=\"col-sm-3 \">\n     <div class=\"makundiyabidhaa For_LS\">\n       <h3>Aina ya bidhaa</h3>\n       <ul>\n         <li routerLink=\"/wazazi/bidhaa/bidhaa-category\" routerLinkActive=\"active\"  >Bidhaa Zote</li>\n       </ul>\n       <ul *ngFor= \"let category of bidhaacategories\">\n         <li  routerLink=\"/wazazi/bidhaa/bidhaa-category/{{category.id}}\" routerLinkActive=\"active\" (click)=\"navigateToCategory(category.id)\">{{category.name}}</li>\n       </ul>\n     <!--   <ul>\n          <li>Vyombo vya kulishia watoto</li>\n          <li>Nafaka zilizo andaliwa</li>\n          <li>Unga wa lishe</li>\n          <li>Bidhaa 4</li>\n          <li>Bidhaa 5</li>\n          <div *ngIf=\"showMoreBidhaa\">\n            <li>Bidhaa 6</li>\n          </div>\n           <i class=\"glyphicon glyphicon-chevron-down\" *ngIf=\"!showMoreBidhaa\" (click)=\"showMoreBidhaafn()\"></i>\n           <i class=\"glyphicon glyphicon-chevron-up\" *ngIf=\"showMoreBidhaa\" (click)=\"showMoreBidhaafn()\"></i>\n        </ul> -->\n     </div>\n\n\n\n     <div class=\"makundiyabidhaa For_SS\">\n      <h3>Aina ya bidhaa</h3>\n       <ul>\n         <li routerLink=\"/wazazi/bidhaa/bidhaa-category\" routerLinkActive=\"active\"  >Bidhaa Zote</li>\n       </ul>\n       <ul>\n         <div *ngFor= \"let category of bidhaacategories; let i = index\">\n            <li *ngIf=\"i < 2\" routerLink=\"/wazazi/bidhaa/bidhaa-category/{{category.id}}\" routerLinkActive=\"active\" (click)=\"navigateToCategory(category.id)\">{{category.name}}</li>\n         </div>\n         <div *ngFor= \"let category of bidhaacategories; let i = index\">\n            <li *ngIf=\"(i >= 2) && showMoreBidhaa\" routerLink=\"/wazazi/bidhaa/bidhaa-category/{{category.id}}\" routerLinkActive=\"active\" (click)=\"navigateToCategory(category.id)\">{{category.name}}</li>\n         </div>\n           <i class=\"glyphicon glyphicon-chevron-down\" *ngIf=\"!showMoreBidhaa\" (click)=\"showMoreBidhaafn()\"></i>\n           <i class=\"glyphicon glyphicon-chevron-up\" *ngIf=\"showMoreBidhaa\" (click)=\"showMoreBidhaafn()\"></i>\n       </ul>\n    </div>\n\n    </div>\n\n    <div class=\"col-sm-9\">\n\n      <div *ngIf=\"!sortByCategory\">\n      <app-bidhaa-category></app-bidhaa-category>\n      </div>\n\n      <div *ngIf=\"sortByCategory\">\n      <router-outlet></router-outlet>\n      </div>\n      \n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/wazazi/bidhaa/bidhaa.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_bidhaa_service__ = __webpack_require__("../../../../../src/app/core/bidhaa.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_passevents_service__ = __webpack_require__("../../../../../src/app/core/passevents.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_datacarrier_service__ = __webpack_require__("../../../../../src/app/core/datacarrier.service.ts");
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
    function BidhaaComponent(passeventsService, datacarrierService, bidhaaService, location) {
        // location.onPopState(() => {
        this.passeventsService = passeventsService;
        this.datacarrierService = datacarrierService;
        this.bidhaaService = bidhaaService;
        this.searchInputStatus = false;
        this.showMoreBidhaa = false;
        this.sortByCategory = false;
        //   this.bidhaaService.notifyChildComponent();});
    }
    BidhaaComponent.prototype.ngOnInit = function () {
        this.removeSearchInput();
        this.getBidhaaCategories();
    };
    BidhaaComponent.prototype.showMoreBidhaafn = function () {
        this.showMoreBidhaa = !this.showMoreBidhaa;
    };
    BidhaaComponent.prototype.removeSearchInput = function () {
        this.passeventsService.exitblogsection(this.searchInputStatus);
    };
    BidhaaComponent.prototype.passPostId = function (id) {
        this.datacarrierService.setData(id);
    };
    BidhaaComponent.prototype.getBidhaaCategories = function () {
        var _this = this;
        this.bidhaaService.getCategories().then(function (category) { return _this.bidhaacategories = category; });
    };
    BidhaaComponent.prototype.navigateToCategory = function (id) {
        this.bidhaaService.getBidhaaByCategory(id);
        this.sortByCategory = true;
    };
    BidhaaComponent.prototype.loadAllProduct = function () {
        this.bidhaaService.getAllBidhaa();
    };
    BidhaaComponent.prototype.allCategories = function () {
        this.sortByCategory = false;
    };
    return BidhaaComponent;
}());
BidhaaComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-bidhaa',
        template: __webpack_require__("../../../../../src/app/wazazi/bidhaa/bidhaa.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wazazi/bidhaa/bidhaa.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__core_passevents_service__["a" /* PasseventsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_passevents_service__["a" /* PasseventsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__core_datacarrier_service__["a" /* DatacarrierService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__core_datacarrier_service__["a" /* DatacarrierService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__core_bidhaa_service__["a" /* BidhaaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_bidhaa_service__["a" /* BidhaaService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["PlatformLocation"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["PlatformLocation"]) === "function" && _d || Object])
], BidhaaComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=bidhaa.component.js.map

/***/ }),

/***/ "../../../../../src/app/wazazi/blog-section/blog-section.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".area{\r\n  padding: 10px;\r\n   background-color: #fff;\r\n        box-shadow: 2.5px 2.5px 1.25px 5px #ddd inset;\r\n\r\n      }\r\n   \r\n.btn{\r\n  padding:1.3px;\r\n}\r\n  \r\n.Mwanzo .Mwanzo {\r\n        color: #ffffff !important;\r\n        background-color:none !important;\r\n        /*border-bottom: 2px solid #fff;\r\n        border-radius: 3px;*/\r\n        height: 40px;\r\n }\r\n\r\n.clear {\r\n       clear: both;            /* to solve float overlapping issues */ \r\n}\r\n\r\n .ccontainer {\r\n       \r\n        padding:25px 0 0 5px;\r\n\r\n }\r\n\r\n.box {\r\n        width: 100%;\r\n        padding:0 0 40px 0px;\r\n        background-color: #fff;\r\n        margin-bottom: 8vh;\r\n        border-radius: 4px;\r\n        box-shadow: 1px 0.5px 24px -9px #000; \r\n}\r\n\r\n.noresultsview {\r\n        \r\n        font-size: 32px;\r\n        padding: 20px 0 0 20px;\r\n        height: 500px;\r\n}\r\n\r\n.box > .title {\r\n       color: #000;\r\n       font-size: 19px;\r\n       padding: 0 0 0 25px;\r\n       margin-bottom: 25px;\r\n}\r\n\r\n.iquote {\r\n       margin: 0;\r\n       \r\n}\r\n\r\nibox {\r\n       width: 100%;\r\n       height: 520px;\r\n}\r\n\r\n.oneimage {\r\n        height: 520px;\r\n        float: left; \r\n        width: 100%; \r\n        margin-left: 0;\r\n        margin-bottom: 5px;\r\n        position: relative;\r\n        top: 0 !important;\r\n        border-top-right-radius: 4px;\r\n        border-top-left-radius: 4px;\r\n}\r\n\r\niframe {\r\n        height: 520px;\r\n        float: left; \r\n        width: 100%; \r\n        margin-left: 0;\r\n        margin-bottom: 17px;\r\n        position: relative;\r\n        top: 0 !important;\r\n        border-top-right-radius: 4px;\r\n        border-top-left-radius: 4px;\r\n}\r\n\r\n\r\n.quote {\r\n        font-size: 19px;\r\n        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n        color: rgba(255, 255, 255, 1);\r\n        background-color: rgba(0, 0, 0, 0.5);\r\n        height: 520px;\r\n        width: 30%;\r\n        border-top-right-radius: 4px;\r\n        padding:0;\r\n        position: relative;\r\n        left: 70%;\r\n        z-index:1;\r\n}\r\n\r\n/*position: absolute;\r\n        right: 15px;\r\n        z-index: 1000;*/\r\n\r\n.quote p {\r\n        position: absolute;\r\n        top: 20%;\r\n        padding: 0 15px 0 20px;\r\n        line-height: 1.7em;\r\n}        \r\n\r\n.quote strong {\r\n        color: rgba(255, 255, 255, 0.6);\r\n        font-family: montserrat-regular;\r\n}\r\n\r\n.quote p span {\r\n        font-size: 30px;\r\n}\r\n\r\n.quote:hover {\r\n        color: #fff;\r\n        background-color: rgba(0, 0, 0, 0.2);\r\n        border-top-right-radius: 4px;\r\n        transition: all 1s ease;\r\n}\r\n\r\n.quote strong:hover {\r\n        color: rgba(255, 255, 255, 1);\r\n        border-top-right-radius: 4px;\r\n        transition: all 1s ease;\r\n}\r\n\r\n.blogtextcontainer {\r\n        padding: 0 15px 0 20px;\r\n        width: -webkit-fit-content;\r\n        width: -moz-fit-content;\r\n        width: fit-content;\r\n        height: -webkit-fit-content;\r\n        height: -moz-fit-content;\r\n        height: fit-content;\r\n        margin-bottom: 5vh;                        \r\n}\r\n\r\n.blogtextcontainer strong{\r\n        /*color: #333 !important;*/\r\n        /*color: #292929;*/\r\n        color: #050709;\r\n        font-size: 16px;\r\n        font-weight: 600 !important;\r\n        letter-spacing: 1px;\r\n}\r\n\r\n.blogtext {\r\n        font-family: 'Muli', Arial, sans-serif;\r\n        /*color: #4b4f56;*/\r\n        /*color: #292929;*/\r\n        color: #050709;\r\n        line-height: 1.6em;\r\n        font-weight: 400;\r\n        letter-spacing: 1px;\r\n        padding: 0 10px 0 0;\r\n        width: -webkit-fit-content;\r\n        width: -moz-fit-content;\r\n        width: fit-content;\r\n        display: inline;        /*to place blog text and read more link on same line */\r\n        overflow-wrap: break-word;\r\n}\r\n\r\n.somazaidi {\r\n        font-family: Montserrat-Regular;\r\n        /* color : rgba(101, 47, 133, 0.9);*/\r\n        color: #550055;\r\n        font-size: 14px;\r\n        height: 20px;\r\n        width: auto;\r\n        margin: 0 0 20px 0; \r\n       /* float: right; */\r\n        padding: 0 20px 0 0;\r\n        display: inline-block;     /*to place blog text and read more link on same line */\r\n        background: none;\r\n        border: none;\r\n }\r\n\r\n .somazaidi:hover {\r\n         text-decoration: underline;\r\n }\r\n \r\n .postedattime {\r\n        font-family: Montserrat-Regular;\r\n        color: rgba(90,76,60,0.6);\r\n        font-size: 13px;\r\n        float: left;\r\n        margin: 0 0 0 20px;\r\n }\r\n\r\n\r\n .likes {\r\n        color: #000;\r\n        font-size: 13px;\r\n        padding: 5px 0 0 0;\r\n        margin-bottom: 0;\r\n        float: right;\r\n }\r\n\r\n button:focus {outline:0;}\r\n\r\n .likesbutton {\r\n        height: 18px;\r\n        width: 18px;\r\n        padding: 0 0 0 5px;\r\n        margin-right: 20px;\r\n        border: none;\r\n        background: none;\r\n        float: right;     \r\n }\r\n\r\n .likesbutton img {\r\n        height: 18px;\r\n        width: 18px;\r\n }\r\n\r\n .shareicon {\r\n       height: 18px;\r\n       width: 18px;\r\n       margin: 0 20px;\r\n       float: right;\r\n }\r\n\r\n .my-pagination /deep/ .ngx-pagination {\r\n       padding: 0 0 0 44%;\r\n       margin: 0 0 25px 0;\r\n }\r\n\r\n .my-pagination /deep/ .ngx-pagination .current {\r\n       background-color:#652f85; \r\n       width: 20px;\r\n       height: 20px;\r\n       border-radius: 50%;\r\n }\r\n \r\n @media all and (max-width: 800px){\r\niqoute {\r\n        height: 300px;\r\n}\r\n\r\n.ibox {\r\n        height: 300px;\r\n}\r\n\r\n.oneimage {\r\n        height: 300px;\r\n        width: 100%; \r\n        margin:0px;\r\n} \r\n\r\niframe {\r\n        height: 300px;\r\n        width: 100%; \r\n        margin:0px;\r\n}\r\n\r\n.twoimage {\r\n        height: 300px;\r\n        width: 100%; \r\n        margin:0px;\r\n}\r\n\r\n.quote {\r\n        font-size: 14px;\r\n        width: 30%; \r\n        margin:0px;\r\n        height: 100%;\r\n}\r\n\r\n.box > h3 {\r\n     \r\n       font-size: 17px;\r\n}\r\n\r\np{\r\n        font-size:12px;\r\n}\r\n\r\n.somazaidi{\r\n        font-size:12px;\r\n}\r\n\r\n.ccontainer {\r\n    \r\n       \r\n        padding-top:20%;\r\n\r\n }\r\n\r\n.postedattime_SS {\r\n        color: rgba(90,76,60,0.8);\r\n        margin: 0 0 0 10px;\r\n        display: inline-block !important;\r\n }\r\n\r\n }\r\n\r\n@media all and (min-width: 767px){\r\n.postedattime_ss {\r\n        display: none;\r\n }\r\n\r\n}\r\n\r\n@media all and (max-width: 767px){\r\n.ccontainer {\r\n        padding:15px 0 0 0;\r\n }\r\n\r\n.box {\r\n        padding-bottom: 15px;\r\n}\r\n\r\n.ibox {\r\n        height: 200px;\r\n}\r\n\r\n.oneimage {\r\n        height: 100%;\r\n        width: 100%; \r\n        margin:0px;\r\n} \r\n\r\niframe {\r\n        height: 100%;\r\n        width: 100%; \r\n        margin:0px;\r\n}\r\n\r\n.quote {\r\n        height: 100%;\r\n        width: 40%;\r\n        left: 60%;\r\n}\r\n\r\n.quote p {\r\n        position: absolute;\r\n        top: 0;\r\n        padding: 25px 7px 0 7px;\r\n        font-size: 10px;\r\n        height: 100%;\r\n}        \r\n\r\n.quote p strong {\r\n        height: 70%;\r\n        overflow: hidden;\r\n}        \r\n\r\n\r\n.quote p span {\r\n        font-size: 17px;\r\n}\r\n\r\n.blogtextcontainer {\r\n        padding: 1vw 2.5vw;\r\n        margin-bottom: 3vh;\r\n}\r\n\r\n.blogtextcontainer strong {\r\n        font-size: 15px;\r\n}\r\n\r\n.blogtext {\r\n        font-size: 15px;\r\n        margin-top: 7px;\r\n        overflow-wrap: break-word;\r\n}\r\n\r\n.somazaidi {\r\n        font-size: 14px;\r\n}\r\n\r\n.postedattime {\r\n        display: none;\r\n }\r\n\r\n.postedattime_ss {\r\n        font-size: 12px;\r\n        color: rgba(90,76,60,0.6);\r\n        margin: 0 0 0 10px;\r\n        display: inline-block !important;\r\n        width: -webkit-fit-content;\r\n        width: -moz-fit-content;\r\n        width: fit-content;\r\n }\r\n\r\n.shareicon {\r\n        margin: 4px 20px 0 20px;\r\n}\r\n\r\n.socialmedia {\r\n        width: 14px;\r\n        height: 14px;   \r\n}\r\n\r\n.likesbutton img {\r\n        width: 14px;\r\n        height: 14px;\r\n }\r\n\r\n.likes {\r\n        font-size: 11px;\r\n}\r\n\r\n}\r\n ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wazazi/blog-section/blog-section.component.html":
/***/ (function(module, exports) {

module.exports = "<main>\r\n\r\n    <div id=\"fb-root\"></div>\r\n<script>(function(d, s, id) {\r\n  var js, fjs = d.getElementsByTagName(s)[0];\r\n  if (d.getElementById(id)) return;\r\n  js = d.createElement(s); js.id = id;\r\n  js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.10';\r\n  fjs.parentNode.insertBefore(js, fjs);\r\n}(document, 'script', 'facebook-jssdk'));</script>\r\n\r\n    <div class=\"ccontainer\">\r\n      <!-- <app-upload-video></app-upload-video>-->\r\n      \r\n    <!--<div *ngFor= \"let g of giphies\" class=\"box\">\r\n     \r\n    <div class=\"row iquote\" style=\"width:100%;\">\r\n       <div class=\"ibox\">\r\n          \r\n           <img src=\"../../../../assets/images/happy mom1.jpg\" alt=\"Fruit View\"\r\n           class=\"oneimage\">\r\n\r\n       </div>\r\n\r\n       <div class=\"quote\">\r\n            <p>\r\n               <strong><span style=\"font-size:30px;\">\"</span> {{g.city}}\r\n               <span style=\"font-size:30px;\">\"</span></strong>\r\n\r\n            </p>\r\n       </div>\r\n    </div>\r\n\r\n    <p class=\"blogtext\">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.sit amet,\r\n         consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud amet ea\r\n          exercitation Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed consequuntur dolores aliquip ex aliqua </p><br>\r\n    <button class=\"somazaidi\" routerLink=\"/wazazi/soma-zaidi\" routerLinkActive=\"active\">Soma Zaidi </button>\r\n    <div class=\"clear\"></div>\r\n    <hr style=\"margin-top: 10px; \">    \r\n    <p class=\"postedattime\">6 oktoba 2017 2315</p>   \r\n    <img src=\"../../../../assets/images/twitter.png\" alt=\"Fruit View\"\r\n           class=\"shareicon\">\r\n    <img src=\"../../../../assets/images/facebok.png\" alt=\"Fruit View\"\r\n           class=\"shareicon\">\r\n    <img src=\"../../../../assets/images/like.png\" alt=\"Fruit View\"\r\n           class=\"shareicon\"> \r\n    </div> -->\r\n        \r\n    <div *ngIf = 'showSearchResults'>\r\n    <div *ngFor= \"let g of searchResults; let i = index\" class=\"box\">\r\n     \r\n    <div class=\"row iquote\" style=\"width:100%;\">\r\n       <div class=\"ibox\">\r\n          \r\n           <img src=\"../../../../assets/images/happy mom1.jpg\" alt=\"Fruit View\"\r\n           class=\"oneimage\">\r\n\r\n       </div>\r\n\r\n       <!--<div class=\"quote\">\r\n            <p>\r\n               <strong><span style=\"font-size:30px;\">\"</span> {{g.title}}\r\n               <span style=\"font-size:30px;\">\"</span></strong>\r\n\r\n            </p>\r\n       </div> -->\r\n    </div>\r\n    \r\n    <div class=\"blogtextcontainer\">\r\n    <strong> {{g.title}}\r\n           \r\n    </strong>\r\n    <p class=\"blogtext\">\r\n        {{g.body}}\r\n        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.sit amet,\r\n         consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud amet ea\r\n          exercitation Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed consequuntur dolores aliquip ex aliqua... </p><br>\r\n    <button class=\"somazaidi\" routerLink=\"/wazazi/blog-section/{{g.id}}\" routerLinkActive=\"active\">Soma Zaidi </button>\r\n    <div class=\"clear\"></div>\r\n    </div>\r\n\r\n    <hr style=\"margin-top: 10px; \">    \r\n    <p class=\"postedattime\">LISHE 360 | 6 oktoba 2017 2315</p>\r\n    <div class=\"postedattime_ss\">LISHE 360 | 6 oktoba '17</div>     \r\n    <img src=\"../../../../assets/images/twitter og.png\" alt=\"Fruit View\"\r\n           class=\"shareicon socialmedia\" ceiboShare [twitter] =\"{url: srSocialShareUrl[i], text: srDefaultSocialShareText[i]}\">\r\n           \r\n    <img src=\"../../../../assets/images/facebook og.png\" alt=\"Fruit View\"\r\n           (click) = \"specifyUrl(b.id)\" class=\"shareicon socialmedia\" ceiboShare  [facebook] =\"{u: srSocialShareUrl[i]}\">\r\n    <!--<button class=\"likesbutton\" (click) = \"addLikes()\"><img src=\"../../../../assets/images/like.png\" alt=\"Fruit View\"></button>\r\n    <p class=\"likes\">{{postlikes}}</p> -->\r\n    </div>   \r\n    </div>\r\n        \r\n    \r\n    \r\n    <!--end of search result -->\r\n\r\n\r\n\r\n\r\n\r\n     \r\n    <div *ngIf = '!showSearchResults'>\r\n    <div class=\"box\">\r\n     \r\n    <div class=\"row iquote\" style=\"width:100%;\">\r\n       <div class=\"ibox\">\r\n          \r\n           <img src=\"../../../../assets/images/happy mom.jpg\" alt=\"Fruit View\"\r\n            class=\"oneimage\">\r\n\r\n       \r\n\r\n       <!--<div class=\"quote\">\r\n            <p>\r\n               <strong> aute irure dolor in reprehenderit in voluptate velit esse cillum dolore \r\n               eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nulla pariatur  \r\n               </strong> \r\n\r\n            </p>\r\n       </div>-->\r\n       </div>\r\n    </div>\r\n\r\n    <div class=\"blogtextcontainer\">\r\n    <strong> Umewahi kumpatia mtoto wako Brown rice? Kama bado basi leo tunakupatia dondoo muhimu katika kuandaa Brown rice.\r\n    </strong><br>\r\n    <p class=\"blogtext\">Brown rice ni mgumu hivyo huchukua muda mrefu kuiva, hivyo tunashauri kuloweka Brown rice kwa saa 12 kabla ya kupika kupunguza muda wa kupika. \r\n                        Kuloweka Brown rice pia kuna faida kiafya kwani husaidia virutubisho vilivyomo kufyonzwa vizuri na mwili... </p>\r\n    <button class=\"somazaidi\" routerLink=\"/wazazi/blog-section\" routerLinkActive=\"active\" (click)= \"passPostId(2335)\">Soma Zaidi </button>\r\n    <div class=\"clear\"></div>\r\n    </div>\r\n\r\n   <!-- <hr style=\"margin-top: 10px; \"> -->\r\n    <p class=\"postedattime\">LISHE 360 | 6 oktoba 2017 2315</p>\r\n    <div class=\"postedattime_ss\">LISHE 360 | 6 oktoba '17</div>   \r\n    <img src=\"../../../../assets/images/twitter og.png\" alt=\"Fruit View\"\r\n           class=\"shareicon socialmedia\" ceiboShare [twitter] =\"{url: socialShareUrl[0], text: 'aute irure dolor in reprehenderit in voluptate velit esse cillum dolore \r\n           eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nulla pariatur '}\">\r\n\r\n    <!--<tweet url={{shareurl[0]}} text={{sharetext[0]}}></tweet>-->\r\n\r\n    <img src=\"../../../../assets/images/facebook og.png\" alt=\"Fruit View\"\r\n           class=\"shareicon socialmedia\" ceiboShare  [facebook] =\"{u: shareurl[0]}\">\r\n    <!--<fb-like url={{shareurl[0]}}></fb-like>-->\r\n\r\n    <!--<button class=\"likesbutton\" (click) = \"addLikes()\"><img src=\"../../../../assets/images/like.png\" alt=\"Fruit View\" class=\"socialmedia\"></button>\r\n    <p class=\"likes\">{{postlikes}}</p> -->\r\n    </div>\r\n\r\n    <!--end of first post-->\r\n\r\n\r\n\r\n\r\n\r\n\r\n    <!--posts fetched from database-->\r\n    <div *ngFor= \"let b of blogpost ; let i = index\"> <!--| paginate: { itemsPerPage: 7, currentPage: p} -->\r\n     <div class=\"box\" id=\"{{b.id}}\">\r\n     \r\n    <div class=\"row iquote\" style=\"width:100%;\">\r\n       <div class=\"ibox\">\r\n          \r\n           <img src=\"{{b.image.url}}\" alt=\"Fruit View\"\r\n           class=\"oneimage\" *ngIf = 'b.video_url === null'>\r\n\r\n           <iframe \r\n            [src]=\"domSanitizer.bypassSecurityTrustResourceUrl(b.video_url)\" *ngIf = 'b.video_url != null'>\r\n           </iframe>\r\n\r\n       <!--<div class=\"quote\">\r\n            <p>\r\n              <strong>{{b.title}} \r\n               </strong>\r\n\r\n            </p>\r\n       </div> -->\r\n       <div class=\"clear\"></div>\r\n       </div>\r\n    </div>\r\n\r\n    <div class=\"blogtextcontainer\">\r\n    <strong>{{b.title}} \r\n    </strong><br>\r\n    <p class=\"blogtext\">{{(b.body.length > 80 )? (b.body | slice :0:90)+'...':(b.body)}}</p>\r\n    <button class=\"somazaidi\" routerLink=\"/wazazi/blog-section/{{b.id}}\" routerLinkActive=\"active\">Soma Zaidi </button> <!-- (click)=\"removeSearchInput()\" (click)=\"onClick($event)\"(click)=\"passPostId(b.id)\" (click)=\"getPost(b.id)\" -->\r\n    <div class=\"clear\"></div>\r\n    </div>\r\n\r\n   <!-- <hr style=\"margin-top: 10px; \"> -->\r\n    <p class=\"postedattime\">LISHE 360 | {{b.created_at | date:'mediumDate'}}</p>\r\n    <div class=\"postedattime_ss\">LISHE 360 | {{b.created_at | date:'mediumDate'}}</div>    \r\n    <img src=\"../../../../assets/images/twitter og.png\" alt=\"Fruit View\"\r\n           class=\"shareicon socialmedia\" ceiboShare [twitter] =\"{url: socialShareUrl[i], text: defaultSocialShareText[i]}\">\r\n           \r\n    <img src=\"../../../../assets/images/facebook og.png\" alt=\"Fruit View\"\r\n           (click) = \"specifyUrl(b.id)\" class=\"shareicon socialmedia\" ceiboShare  [facebook] =\"{u: socialShareUrl[i]}\">\r\n\r\n    \r\n    <!--<button class=\"likesbutton\" (click) = \"addLikes()\"><img src=\"../../../../assets/images/like.png\" alt=\"Fruit View\"></button>\r\n    <p class=\"likes\">{{postlikes}}</p> -->\r\n    </div>\r\n    </div>\r\n    <!--<pagination-controls class=\"my-pagination\" (pageChange)=\"p = $event\"                \r\n                                                previousLabel=\"Kurasa iliyopita\"\r\n                                                nextLabel=\"Nyingine\"\r\n    >\r\n\r\n    </pagination-controls> -->\r\n    \r\n    <!--end of posts fetched from database-->   \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n   <!-- <div class=\"box\">\r\n     \r\n    <div class=\"row iquote\" style=\"width:100%;\">\r\n       <div class=\"ibox\">\r\n          \r\n           <img src=\"../../../../assets/images/happy mom1.jpg\" alt=\"Fruit View\"\r\n           class=\"oneimage\">\r\n\r\n       </div>\r\n\r\n       <div class=\"quote\">\r\n            <p>\r\n               <strong><span style=\"font-size:30px;\">\"</span> aute irure dolor in reprehenderit in voluptate velit esse cillum dolore \r\n               eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nulla pariatur  \r\n               <span style=\"font-size:30px;\">\"</span></strong>\r\n\r\n            </p>\r\n       </div>\r\n    </div>\r\n\r\n    <p class=\"blogtext\">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.sit amet,\r\n         consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud amet ea\r\n          exercitation Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed consequuntur dolores aliquip ex aliqua </p><br>\r\n    <button class=\"somazaidi\" routerLink=\"/wazazi/soma-zaidi\" routerLinkActive=\"active\" (click)=\"getPost(1)\">Soma Zaidi </button>\r\n    <div class=\"clear\"></div>\r\n    <hr style=\"margin-top: 10px; \">    \r\n    <p class=\"postedattime\">6 oktoba 2017 2315</p>   \r\n    <img src=\"../../../../assets/images/twitter.png\" alt=\"Fruit View\"\r\n           class=\"shareicon\">\r\n    <div class=\"fb-share-button\" data-href=\"http://jualishebora.ga/wazazi/blog-section\" \r\n    data-layout=\"button_count\" data-size=\"small\" data-mobile-iframe=\"false\">\r\n    <a class=\"fb-xfbml-parse-ignore\" target=\"_blank\" \r\n    href=\"https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fjualishebora.ga%2Fwazazi%2Fblog-section&amp;src=sdkpreparse\">\r\n    <img src=\"../../../../assets/images/facebok.png\" alt=\"Fruit View\"\r\n           class=\"shareicon\"></a></div>\r\n    <button class=\"likesbutton\" (click) = \"addLikes()\"><img src=\"../../../../assets/images/like.png\" alt=\"Fruit View\"></button>\r\n    <p class=\"likes\">{{postlikes}}</p>\r\n    </div>\r\n\r\n   \r\n\r\n    <div class=\"box\">\r\n     \r\n    <div class=\"row iquote\" style=\"width:100%;\">\r\n       <div class=\"ibox\">\r\n          \r\n           <img src=\"../../../../assets/images/happy mom1.jpg\" alt=\"Fruit View\"\r\n           class=\"oneimage\">\r\n\r\n       </div>\r\n\r\n       <div class=\"quote\">\r\n            <p>\r\n               <strong><span style=\"font-size:30px;\">\"</span> aute irure dolor in reprehenderit in voluptate velit esse cillum dolore \r\n               eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nulla pariatur  \r\n               <span style=\"font-size:30px;\">\"</span></strong>\r\n\r\n            </p>\r\n       </div>\r\n    </div>\r\n\r\n    <p class=\"blogtext\">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.sit amet,\r\n         consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud amet ea\r\n          exercitation Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed consequuntur dolores aliquip ex aliqua </p><br>\r\n    <button class=\"somazaidi\" routerLink=\"/wazazi/soma-zaidi\" routerLinkActive=\"active\" (click)=\"getPost(1)\">Soma Zaidi </button>\r\n    <div class=\"clear\"></div>\r\n    <hr style=\"margin-top: 10px; \">    \r\n    <p class=\"postedattime\">6 oktoba 2017 2315</p>   \r\n    <img src=\"../../../../assets/images/twitter.png\" alt=\"Fruit View\"\r\n           class=\"shareicon\" ceiboShare [twitter] =\"{u: repoUrl}\">\r\n    <img src=\"../../../../assets/images/facebok.png\" alt=\"Fruit View\"\r\n           class=\"shareicon\" ceiboShare  [facebook] =\"{u: repoUrl}\">\r\n    <button class=\"likesbutton\" (click) = \"addLikes()\"><img src=\"../../../../assets/images/like.png\" alt=\"Fruit View\"></button>\r\n    <p class=\"likes\">{{postlikes}}</p>\r\n    </div> -->\r\n    </div> \r\n\r\n\r\n\r\n    <div class=\"box noresultsview\" *ngIf = 'noResultsFound && showSearchResults'>\r\n      <p>Results not found</p> \r\n    </div>\r\n    \r\n\r\n    <!--<p> Sed ut perspiciatis unde omnis iste natus error sit \r\n        voluptatem accusantium doloremque laudantium, totam \r\n        rem aperiam, eaque ipsa quae ab illo inventore veritatis \r\n        et quasi architecto beatae vitae dicta sunt \r\n        explicabo. eos qui ratione voluptatem \r\n        sequi nesciunt. Neque porro quisquam est, qui\r\n        dolorem ipsum quia dolor sit amet, consectetur, \r\n        adipisci velit, sed quia non numquam eius modi tempora \r\n        incidunt ut labore et dolore magnam aliquam quaerat \r\n        voluptatem. Ut enim ad minima veniam, quis nostrum \r\n        exercitationem ullam corporis suscipit laboriosam, nisi ut \r\n        aliquid ex ea commodi consequatur? Quis autem vel eum iure \r\n        reprehenderit qui in ea voluptate velit esse quam nihil molestiae \r\n        consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla\r\n        pariatur\r\n     </p>\r\n\r\n\r\n\r\n<br><br><p>At vero eos et accusamus et iusto odio dignissimos ducimus qui\r\n           blanditiis praesentium voluptatum deleniti atque corrupti quos dolores\r\n           et quas molestias excepturi sint occaecati cupiditate non provident,\r\n           similique sunt in culpa qui officia deserunt mollitia animi, id est \r\n           laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita \r\n           distinctio. Nam libero tempore, cum soluta nobis est eligendi\r\n           optio cumque nihil impedit quo minus id quod maxime placeat facere\r\n           possimus, omnis voluptas assumenda est, omnis dolor repellendus. \r\n           Temporibus autem quibusdam et aut officiis debitis aut rerum \r\n           necessitatibus saepe eveniet ut et voluptates repudiandae\r\n           sint et molestiae non recusandae. Itaque earum rerum hic \r\n           tenetur a sapiente delectus, ut aut reiciendis voluptatibus \r\n           maiores alias consequatur aut perferendis doloribus asperiores \r\n           repellat.\r\n        </p> -->\r\n</div>\r\n </main>"

/***/ }),

/***/ "../../../../../src/app/wazazi/blog-section/blog-section.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_search_service__ = __webpack_require__("../../../../../src/app/core/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_blogpost_service__ = __webpack_require__("../../../../../src/app/core/blogpost.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__core_datacarrier_service__ = __webpack_require__("../../../../../src/app/core/datacarrier.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__core_passevents_service__ = __webpack_require__("../../../../../src/app/core/passevents.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogSectionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


 //obtain absolute page path  ;never used










var BlogSectionComponent = (function () {
    function BlogSectionComponent(blogpostService, searchService, datacarrierService, passeventsService, domSanitizer, router, document //never used
    ) {
        var _this = this;
        this.blogpostService = blogpostService;
        this.searchService = searchService;
        this.datacarrierService = datacarrierService;
        this.passeventsService = passeventsService;
        this.domSanitizer = domSanitizer;
        this.router = router;
        this.showId = false;
        this.post = { id: 1,
            title: '',
            body: '',
            topic_id: 2 };
        this.searchTerms = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        // link = 'http://api.tuseme.co.tz/api/v1/search/c?api_key=bc';
        //http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q= 
        this.noResultsFound = false;
        this.showSearchResults = false;
        this.liked = false;
        this.searchInputStatus = true;
        this.name = 'Andela';
        this.urlFb = 'http://jualishebora.gq';
        this.shareurl = ['https://lishe360.herokuapp.com'];
        this.repoUrl = '';
        this.defaultSocialShareText = [];
        this.socialShareUrl = [];
        this.srDefaultSocialShareText = [];
        this.srSocialShareUrl = [];
        this.myEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.apost = this.searchService.message;
        this.searchResults = [];
        this.showSearchResults = searchService.showSearchResults;
        this.subscription = this.searchService.searchResultsStatus.subscribe(function (value) {
            _this.showSearchResults = value;
        });
        this.searchResults = searchService.searchResults;
        this._subscription1 = this.searchService.fetchedPosts1.subscribe(function (value) {
            _this.searchResults = value;
            if (_this.searchResults.length === 0) {
                _this.noResultsFound = true;
            }
            else {
                _this.noResultsFound = false;
            }
            value.forEach(function (item, index) {
                _this.searchResultSocialShareParameters(item, index);
            });
            console.log(_this.searchResults.length);
        });
        this.giphies = searchService.giphies;
        this._subscription = this.searchService.fetchedPosts.subscribe(function (value) {
            _this.giphies = value;
        });
        this.blogpost = blogpostService.blogpost;
        this.subscription = this.blogpostService.fetchedBlogpost.subscribe(function (value) {
            _this.blogpost = value;
        });
        this.message = searchService.message;
        this.subscription = searchService.nameChange.subscribe(function (value) {
            _this.message = value;
        });
    }
    BlogSectionComponent.prototype.specifyUrl = function (id) {
        this.repoUrl = this.repoUrl;
        //  this.repoUrl = `${this.repoUrl}${id}`;
        //  console.log(this.repoUrl);
        //  console.log('url specified ' + id);
    };
    BlogSectionComponent.prototype.display = function () {
        console.log(this.apost + this.giphies);
    };
    // Push a search term into the observable stream.
    //search(term: string): void {
    //this.searchTerms.next(term);}
    BlogSectionComponent.prototype.addLikes = function () {
        if (!this.liked) {
            this.postlikes = this.postlikes + 1;
        }
        else {
            this.postlikes = this.postlikes - 1;
        }
        this.liked = !this.liked; //REVIEW
    };
    BlogSectionComponent.prototype.ngOnDestroy = function () {
        //prevent memory leak when component destroyed
        this._subscription.unsubscribe();
    };
    BlogSectionComponent.prototype.socialShareParameters = function (item, index) {
        this.socialShareUrl[index] = document.location.href + '/' + item.id;
        this.defaultSocialShareText[index] = item.title;
    };
    BlogSectionComponent.prototype.searchResultSocialShareParameters = function (item, index) {
        this.srSocialShareUrl[index] = document.location.href + '/' + item.id;
        this.srDefaultSocialShareText[index] = item.title;
    };
    BlogSectionComponent.prototype.getBlogposts = function () {
        var _this = this;
        this.blogpostService.getBlogposts().then(function (blogpost) {
            _this.blogpost = blogpost;
            blogpost.reverse(); //to display latest post top of page
            _this.blogpost.forEach(function (item, index) {
                _this.socialShareParameters(item, index);
            });
        });
    };
    BlogSectionComponent.prototype.onClick = function (button) {
        this.myEvent.emit(button);
    };
    BlogSectionComponent.prototype.returnSearchInput = function () {
        this.passeventsService.exitblogsection(this.searchInputStatus);
    };
    BlogSectionComponent.prototype.getPost = function (id) {
        this.blogpostService.getBlogpost(id);
    };
    BlogSectionComponent.prototype.passPostId = function (id) {
        console.log('passing post id');
        this.datacarrierService.setData(id);
    };
    BlogSectionComponent.prototype.ngOnInit = function () {
        console.log(this.name);
        this.postlikes = 45;
        this.display();
        this.getBlogposts();
        var that = this;
        setTimeout(function () {
            console.log('timeout method fired');
            console.log(that.blogpost);
            console.log('timeout method fired a');
        }, 6000);
        this.returnSearchInput();
        /*this.posts = this.searchTerms
          .debounceTime(300)
          .distinctUntilChanged()
          .switchMap(term => term
        
            ? this.searchService.search(term)
            
            : Observable.of<Trypost[]>([]))
          .catch(error => {
            console.log(error);
            return Observable.of<Trypost[]>([]);
          });*/
        // this.getBlogpost(3)
        /*this.searchService.performSearch().subscribe((res: Response) => {
          this.giphies = res.json().data;
          console.log(this.giphies);
      });*/
    };
    //  getBlogpost(id): void {
    //   this.blogpostService.getBlogpost(id).then(post => this.post = post);
    // }
    BlogSectionComponent.prototype.toggleId = function () {
        this.showId = !this.showId;
    };
    return BlogSectionComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], BlogSectionComponent.prototype, "myEvent", void 0);
BlogSectionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-blog-section',
        template: __webpack_require__("../../../../../src/app/wazazi/blog-section/blog-section.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wazazi/blog-section/blog-section.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_9__core_blogpost_service__["a" /* BlogpostService */]],
    }),
    __param(6, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["d" /* DOCUMENT */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_9__core_blogpost_service__["a" /* BlogpostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__core_blogpost_service__["a" /* BlogpostService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8__core_search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__core_search_service__["a" /* SearchService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_10__core_datacarrier_service__["a" /* DatacarrierService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__core_datacarrier_service__["a" /* DatacarrierService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_11__core_passevents_service__["a" /* PasseventsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__core_passevents_service__["a" /* PasseventsService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _f || Object, Object])
], BlogSectionComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=blog-section.component.js.map

/***/ }),

/***/ "../../../../../src/app/wazazi/blog-soma-zaidi/blog-soma-zaidi.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".clear {\r\n       clear: both;            /* to solve float overlapping issues */ \r\n}\r\n\r\n .ccontainer {\r\n        padding:25px 0 80px 0;\r\n        font-family: Montserrat-Regular;\r\n }\r\n\r\n\r\n.ccontainer a {\r\n        \r\n        float: right;\r\n        margin-left: 40px;\r\n        margin-right: 20px;\r\n        \r\n}\r\n\r\n.placeholder {\r\n        margin: 230px 0 0 48%;\r\n}\r\n\r\n.box {\r\n        width: 100%;\r\n        padding:10px 0 0 0;\r\n        background-color: #fff;\r\n        border: none;\r\n        border-radius: 4px;\r\n        margin-bottom: 20px;\r\n}\r\n\r\n\r\n.box p {\r\n        color: #050709;\r\n        line-height: 165%;\r\n        font-size: 18px;\r\n}\r\n\r\n\r\n.box > h3 {\r\n       /*color: rgba(0, 0, 0, 0.8);*/\r\n       color: #050709;\r\n       font-size: 20px;\r\n       font-family: Gidole, 'Muli', \"Helvetica\", Arial, sans-serif;\r\n       margin: 30px 0 0 40px;\r\n}\r\n\r\n\r\n.imagecontainer {\r\n        width: 100%;\r\n        height: 460px;\r\n        display: block;\r\n}\r\n\r\n\r\n.oneimage {\r\n        height: 460px;\r\n        margin-top: 8px;\r\n        float: left; \r\n        clear: both;\r\n        width: 100%; \r\n        margin-left: 0;\r\n        margin-bottom: 15px;\r\n}\r\n\r\n.textcontainer {\r\n        width: 87%;\r\n        margin: 15px 0 0 40px;\r\n        display: block;\r\n}\r\n\r\niframe {\r\n        border: none;\r\n        margin: 10px 0 20px 15%;\r\n        width: 67%;\r\n        height: 420px;\r\n}\r\n\r\n.audiocontainer {\r\n        width: 100%;\r\n        background-color: #232323;\r\n        padding: 40px 0 40px 40px;\r\n        margin: 25px 0 0 0;\r\n}\r\n\r\n.audiocontainer p {\r\n        color: #ffffff;\r\n        font-size: 15px;\r\n        padding-left: 10px;\r\n}\r\n\r\n.jiungebutton {\r\n        color:rgba(90,76,60,0.8);\r\n        height: 20px;\r\n        width: auto;\r\n        margin-right: 0px; \r\n        float: right;\r\n        background: none;\r\n        border: none;\r\n }\r\n\r\n.jiungebutton:hover {\r\n        color: blue;\r\n        height: 25px;\r\n}\r\n\r\n.cbox { \r\n        color: #232323;\r\n        padding: 20px 20px 15px 20px;\r\n        margin-top: 60px;\r\n        width: 80%;\r\n        border: 1px solid #d4d4d4;\r\n        border-radius: 5px;\r\n        background-color: #efefef;\r\n}\r\n\r\n.cbox h3 {\r\n        margin-top: 0px;\r\n}\r\n\r\n.cbox hr {\r\n        margin: 10px 0 38px 0;\r\n        border-top: 1px solid #d4d4d4;\r\n}\r\n\r\n.shareicon {\r\n       height: 18px;\r\n       width: 18px;\r\n       margin: 0 7vh;\r\n       float: right;\r\n }\r\n\r\nform  {\r\n        width: 95%;\r\n}\r\n\r\n.field {\r\n       margin-top: 20px;\r\n}\r\n\r\n.field label {\r\n        margin-top: 0px;\r\n}\r\n\r\n#respond {\r\n        margin-top: 0;\r\n         }\r\n\r\n#respond input[type= 'text'],\r\n#respond input[type= 'email'],\r\n#respond textarea {\r\n        margin-bottom: 10px;\r\n        display: block;\r\n        width: 100%;\r\n\r\n        border: 1px solid rgba(0, 0, 0, 0.1);\r\n        border-radius: 5px;\r\n\r\n        line-height: 1.4em;\r\n                  }\r\n\r\n.submitbutton {\r\n        color: #fff;\r\n        background-color: rgba(101, 47, 133, 0.8);\r\n        border: none;\r\n        border-radius: 3px;\r\n        float: right;\r\n        padding: 6px 13px;\r\n        margin: 10px 0 0 0; \r\n}\r\n\r\n.thankyoumessage {\r\n        float: right;\r\n        margin: 10px 0 0 0;\r\n}\r\n\r\n.avatar {\r\n        height: 80px;\r\n        width: 80px;\r\n        border: 2px solid #fff;\r\n        border-radius: 3px;\r\n}\r\n\r\n.cdbox { \r\n        color: #232323;\r\n        width: 80%;\r\n        border: 1px solid #d4d4d4;\r\n        border-radius: 5px;\r\n        background-color: #fff;\r\n        margin-top: 20px;\r\n}\r\n\r\n.cmt {\r\n        margin: 0 0;\r\n}\r\n\r\n.cmtavatar {\r\n       \r\n        padding: 0 12px 0 0;\r\n}\r\n\r\n.cmtavatarin {\r\n        background-color: #efefef;\r\n        width: auto;\r\n        padding: 5px 5px 10px 5px;\r\n        \r\n}\r\n\r\n.cmtavatarin p {\r\n        color: darkgrey;\r\n        margin: 3px 0 0 0;\r\n        font-size: 17px;\r\n}\r\n\r\n.cmttext {\r\n        color: #232323;\r\n        padding: 5px 0;   \r\n}\r\n\r\n.cmttext p {\r\n        font-size: 14px;\r\n}\r\n\r\n@media all and (min-width: 768px){\r\n\r\n.likesbutton {\r\n        display: none;\r\n }\r\n\r\n\r\n .likes {\r\n        display: none;\r\n }\r\n\r\n}\r\n\r\n\r\n    \r\n\r\n@media all and (max-width: 767px){\r\n\r\n.ccontainer {\r\n        padding:25px 0 0 0;\r\n }\r\n\r\nmain { \r\n       margin: 0 -15px 0 -15px;\r\n}\r\n\r\n.box {\r\n        padding:10px 0 0 0;\r\n        border: none;\r\n}\r\n\r\n.box p {\r\n        font-size: 13px;\r\n        text-align: justify;\r\n        }\r\n\r\n.box > h3 {\r\n       margin: 5px 0 0 10px;\r\n}\r\n\r\n.imagecontainer {\r\n        height: -webkit-fit-content;\r\n        height: -moz-fit-content;\r\n        height: fit-content;\r\n}        \r\n\r\n.oneimage {\r\n        height: 280px;\r\n        margin-top: 5px;\r\n        float: left; \r\n        clear: both;\r\n        width: 100%; \r\n        margin-left: 0;\r\n        margin-bottom: 15px;\r\n}\r\n\r\n.textcontainer {\r\n        margin: 15px 0 0 20px;\r\n}\r\n\r\n.ccontainer a {\r\n        float: left;\r\n        margin: 0 5px;\r\n}\r\n\r\niframe {\r\n        width: 90%;\r\n        margin-left: 15px;\r\n}\r\n\r\n.audiocontainer {\r\n        padding: 40px 0 40px 30px;\r\n}\r\n\r\n.audiocontainer p {\r\n        margin: 0 0 4vh 0;\r\n}\r\n\r\n.jiungebutton {\r\n        color: #fff;\r\n}\r\n\r\n.shareicon {\r\n        float: right;\r\n        margin: 0 15px;\r\n}\r\n\r\n.socialmedia {\r\n        width: 14px;\r\n        height: 14px;\r\n        margin: 0 4vh;\r\n}\r\n\r\n.likesbutton {\r\n        width: 18px;\r\n        height: 18px;\r\n        border: none;\r\n        padding: 0 0 2px 0;\r\n        border-radius: 50%;\r\n }\r\n\r\n .likesbutton img {\r\n        width: 14px;\r\n        height: 14px;\r\n        border-radius: 50%;\r\n }\r\n\r\n .likes {\r\n        width: -webkit-fit-content;\r\n        width: -moz-fit-content;\r\n        width: fit-content;\r\n        display: inline-block; \r\n }\r\n\r\n.cbox { \r\n        width: 100%;\r\n}\r\n\r\n.cdbox { \r\n        width: 100%;\r\n}\r\n\r\n.cmtavatarin {\r\n        padding-bottom: 5px;\r\n}\r\n\r\n.cmtavatar {\r\n        padding-right: 0;\r\n}\r\n\r\n.cmttext p {\r\n        font-size: 13px;\r\n        padding: 0 7px;\r\n        text-align: justify;\r\n}\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wazazi/blog-soma-zaidi/blog-soma-zaidi.component.html":
/***/ (function(module, exports) {

module.exports = "<main>\r\n     \r\n    <div id=\"fb-root\"></div>\r\n<script>(function(d, s, id) {\r\n  var js, fjs = d.getElementsByTagName(s)[0];\r\n  if (d.getElementById(id)) return;\r\n  js = d.createElement(s); js.id = id;\r\n  js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.10';\r\n  fjs.parentNode.insertBefore(js, fjs);\r\n}(document, 'script', 'facebook-jssdk'));</script>  \r\n\r\n  <div > \r\n    <div class=\"ccontainer\">\r\n     <div class=\"placeholder\" *ngIf=\"!Dataready\">\r\n        <img src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n     </div>\r\n     <div *ngFor= \"let b of Post\"> \r\n      <div class=\"box\">\r\n      <h3>{{b.title}}</h3>\r\n      <div class=\"imagecontainer\"><img src=\"{{b.image_url}}\" alt=\"Fruit View\"\r\n        class=\"oneimage\"> \r\n      </div>\r\n\r\n      <br>\r\n      \r\n      <div class=\"textcontainer\">\r\n\r\n        <p>{{b.body}} Donec dui \r\n          risus, facilisis vel posuere eu, pulvinar a tellus. Morbi non eros sem. Donec et \r\n          vestibulum est, a dignissim felis.Vestibulum ultrices varius eros, finibus cursus\r\n           lacus blandit sed. Cras volutpat ut risus non bibendum. Sed ut bibendum sem.\r\n       </p>\r\n\r\n      \r\n      \r\n      <div><p style=\"margin: 10px 0 23px 0;\">Nunc viverra magna quis nisi blandit euismod. Praesent id lorem molestie, dictum\r\n         orci non, porttitor ex. Cras sagittis urna eget hendrerit tristique. Donec dui \r\n         risus, facilisis vel posuere eu, pulvinar a tellus. Morbi non eros sem. Donec et \r\n         vestibulum est, a dignissim felis. et porttitor ipsum \r\n         augue sed lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. \r\n         Nunc viverra magna quis nisi blandit euismod. Praesent id lorem molestie, dictum\r\n         orci non, porttitor ex. Cras sagittis urna eget hendrerit tristique. Donec dui \r\n         risus, facilisis vel posuere eu, pulvinar a tellus. Morbi non eros sem. Donec et \r\n         vestibulum est, a dignissim felis.Vestibulum ultrices varius eros, finibus cursus\r\n          lacus blandit sed. Cras volutpat ut risus non bibendum. Sed ut bibendum sem.</p>\r\n      </div>\r\n        <div><p style=\"margin: 10px 0 23px 0;\">Nunc viverra magna quis nisi blandit euismod. Praesent id lorem molestie, dictum\r\n         orci non, porttitor ex. Cras sagittis urna eget hendrerit tristique. Donec dui \r\n         risus, facilisis vel posuere eu, pulvinar a tellus. Morbi non eros sem. Donec et \r\n         vestibulum est, a dignissim felis. et porttitor ipsum \r\n         augue sed lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. \r\n         Nunc viverra magna quis nisi blandit euismod. Praesent id lorem molestie, dictum\r\n         orci non, porttitor ex. Cras sagittis urna eget hendrerit tristique. Donec dui \r\n         risus, facilisis vel posuere eu, pulvinar a tellus. Morbi non eros sem. Donec et \r\n         vestibulum est, a dignissim felis.Vestibulum ultrices varius eros, finibus cursus\r\n          lacus blandit sed. Cras volutpat ut risus non bibendum. Sed ut bibendum sem.</p>\r\n      </div>\r\n\r\n\r\n    </div>\r\n      \r\n\r\n       <!-- <video width=\"400\" controls>Promote a Page- A Facebook Pages Tutorial - Facebook for Business.mp4\r\n          <source src=\"mov_bbb.ogg\" type=\"video/ogg\">\r\n          <source src=\"{{videourl}}\"  type=\"video/mp4\">\r\n            Your browser does not support HTML5 video.\r\n        </video> -->\r\n\r\n        \r\n\r\n       \r\n        <iframe \r\n        [src]=\"domSanitizer.bypassSecurityTrustResourceUrl(b.video_url)\" *ngIf = 'b.video_url != null'>\r\n        </iframe>\r\n \r\n       <!-- <iframe width=\"420\" height=\"315\"\r\n        src=\"https://www.youtube.com/embed/9tRepZdoRmY\">\r\n        </iframe> -->\r\n\r\n        <div class=\"audiocontainer\">\r\n\r\n          <!--<audio controls>\r\n            <source src=\"horse.ogg\" type=\"audio/ogg\">\r\n            <source src=\"../../../../assets/John Denver - Take Me Home, Country Roads (Audio).mp3\" type=\"audio/mpeg\">\r\n            Your browser does not support the audio element.\r\n          </audio> -->\r\n\r\n          <audio controls>\r\n            <source [attr.src]=\"b.audio_url | safepipe\" type=\"audio/mpeg\">\r\n            Your browser does not support the audio element.\r\n          </audio>\r\n          <p>Unaweza Kusikiliza maka hii hapa</p>\r\n\r\n          <div class=\"clear\"></div>\r\n       \r\n          <img src=\"../../../../assets/images/twitter og.png\" alt=\"Fruit View\"\r\n           class=\"shareicon socialmedia\" ceiboShare [twitter] =\"{url: socialShareUrl, text: defaultSocialShareText}\">\r\n         \r\n          <img src=\"../../../../assets/images/facebook og.png\" alt=\"Fruit View\"\r\n           (click) = \"specifyUrl(b.id)\" class=\"shareicon socialmedia\" ceiboShare  [facebook] =\"{u: socialShareUrl}\">\r\n\r\n         <!--<div class=\"fb-share-button\" data-href=\"http://jualishebora.gq/wazazi/blog-section\" \r\n         data-layout=\"button_count\" data-size=\"small\" data-mobile-iframe=\"false\">\r\n         <a class=\"fb-xfbml-parse-ignore\" target=\"_blank\" \r\n         href=\"https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fjualishebora.gq%2Fwazazi%2Fblog-section&amp;src=sdkpreparse\">\r\n         <img src=\"../../../../assets/images/facebok.png\" alt=\"Fruit View\"\r\n              class=\"shareicon socialmedia\"></a></div> -->\r\n\r\n         \r\n        <!-- <button class=\"likesbutton\" (click) = \"addLikes()\"><img src=\"../../../../assets/images/like1.png\" alt=\"Fruit View\"></button>\r\n         <p class=\"likes\">{{postlikes}}</p> -->\r\n\r\n          \r\n        <!--  <button class=\"jiungebutton\" \r\n          (click)= \"togglemyId()\">Jiunge na program\r\n          </button> --> \r\n\r\n        </div>  \r\n        \r\n      \r\n       <app-taharifa-kujiunga *ngIf=\"thanksforjoiningprogram\" (closeModal)=\"closeModal($event)\"></app-taharifa-kujiunga>\r\n       <app-kujiunga *ngIf=\"showmyId\" (myevenT)=\"myevenT($event)\" (closeButtonClicked)=\"closeButtonClicked($event)\"></app-kujiunga>\r\n       \r\n      </div>\r\n     </div>\r\n       <!-- comments section begins -->\r\n\r\n   \r\n        <!-- <button (click)=\"toggleId()\">Toggle</button> --> \r\n <div *ngIf=\"Dataready\">\r\n  <div class=\"cbox\">\r\n    <div id=\"respond\">\r\n\r\n      <h3>Tujulishe Maoni Yako</h3>\r\n      <hr>\r\n\r\n      <form action=\"post_comment.php\" method=\"post\" id=\"commentform\">\r\n       <!--\r\n       <div class=\"row field\">\r\n       <div class=\"col-sm-3\">\r\n       <label for=\"comment_author\" class=\"required field\">Jina</label>\r\n       </div>\r\n       <div class=\"col-sm-9\">\r\n       <input type=\"text\" name=\"comment_author\" id=\"comment_author\" value=\"\" tabindex=\"1\" required=\"required\" [(ngModel)]=\"comment.title\">\r\n       </div>\r\n       </div> -->\r\n\r\n       <div class=\"row field\">\r\n       <div class=\"col-sm-3\">\r\n       <label for=\"email\" class=\"required field\">Namba ya Simu</label>\r\n       </div>\r\n       <div class=\"col-sm-9\">\r\n       <input type=\"email\" name=\"email\" id=\"email\" value=\"\" tabindex=\"2\" required=\"required\" [(ngModel)]=\"comment.phone_number\">\r\n       </div>\r\n       </div>\r\n       \r\n\r\n       <div class=\"row field\">\r\n       <div class=\"col-sm-3\">\r\n       <label for=\"comment\" class=\"required\">Ujumbe</label>\r\n       </div>\r\n       <div class=\"col-sm-9\">\r\n       <textarea name=\"comment\" id=\"comment\" rows=\"10\" tabindex=\"4\" required=\"required\" [(ngModel)]=\"comment.body\"></textarea>\r\n       </div>\r\n       </div>\r\n       <!-- comment_post_ID value hard-coded as 1 -->\r\n       \r\n       <button class=\"submitbutton\" (click)=\"add(); clearCommentData(); removeThankyoumessage()\">Kusanya Maoni</button>\r\n       <div class=\"clear\"></div>\r\n       <div class=\"thankyoumessage\" *ngIf = \"showThankyoumessage\">Asante, Maoni yako yamekusanywa</div>\r\n       <div class=\"clear\"></div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n       <!-- comments section ends -->\r\n  <div class=\"cdbox\">\r\n    <div class=\"row cmt\">\r\n      <div class=\"col-sm-2 cmtavatar\">\r\n       <div class=\"cmtavatarin\">\r\n          <img src=\"../../../../assets/images/avatar.jpg\" alt=\"Fruit View\"\r\n           class=\"avatar\">\r\n          <p>Ester Sanga</p>\r\n       </div>\r\n      </div>\r\n      <div class=\"col-sm-10 cmttext\">\r\n        <p>Nunc viverra magna quis nisi blandit euismod. Praesent id lorem molestie, dictum\r\n         orci non, porttitor ex. </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"cdbox\" *ngFor= \"let c of coments\">\r\n    <div class=\"row cmt\">\r\n      <div class=\"col-sm-2 cmtavatar\">\r\n       <div class=\"cmtavatarin\">\r\n          <img src=\"../../../../assets/images/avatar.jpg\" alt=\"Fruit View\"\r\n           class=\"avatar\">\r\n          <p>{{'#' + c.id}}</p>\r\n       </div>\r\n      </div>\r\n      <div class=\"col-sm-10 cmttext\">\r\n        <p>{{c.body}} </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n </div> <!--End of If Data Ready-->\r\n      \r\n      <br><br><br><br>\r\n      <br><br><br><br>\r\n     \r\n    </div>\r\n  </div>\r\n  \r\n </main>"

/***/ }),

/***/ "../../../../../src/app/wazazi/blog-soma-zaidi/blog-soma-zaidi.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_blogpost_service__ = __webpack_require__("../../../../../src/app/core/blogpost.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_comment_service__ = __webpack_require__("../../../../../src/app/core/comment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__comment__ = __webpack_require__("../../../../../src/app/comment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_datacarrier_service__ = __webpack_require__("../../../../../src/app/core/datacarrier.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_passevents_service__ = __webpack_require__("../../../../../src/app/core/passevents.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogSomaZaidiComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import {HmrState} from  '@angularclass/hmr'; //'angular2-hmr'







//import { DashboardServiceProxy, UserVideoDto } from '@shared/service-proxies/service-proxies';

var BlogSomaZaidiComponent = (function () {
    function BlogSomaZaidiComponent(blogpostService, commentService, datacarrierService, passeventsService, route, location, domSanitizer) {
        var _this = this;
        this.blogpostService = blogpostService;
        this.commentService = commentService;
        this.datacarrierService = datacarrierService;
        this.passeventsService = passeventsService;
        this.route = route;
        this.location = location;
        this.domSanitizer = domSanitizer;
        this.liked = false;
        this.Dataready = false;
        //   article: Makalatitles[];
        // _subscription: any;
        // constructor( private makalatitlesService:MakalatitlesService) { 
        //    this.article = makalatitlesService.article;
        //    this._subscription = this.makalatitlesService.fetchedArticle.subscribe((value) => {
        //    this.article = value;
        // })
        //   }
        this.showId = false;
        this.showmyId = false;
        this.thanksforjoiningprogram = false;
        this.searchInputStatus = false;
        this.showThankyoumessage = false;
        this.comment = new __WEBPACK_IMPORTED_MODULE_5__comment__["a" /* Comment */]();
        this.audiourl = '../../../../assets/John Denver - Take Me Home, Country Roads (Audio).mp3';
        this.videourl = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/9tRepZdoRmY'); //Promote a Page- A Facebook Pages Tutorial - Facebook for Business.mp4
        this.comments = [];
        this.blogpost = blogpostService.blogpost;
        this.subscription = this.blogpostService.fetchedBlogpost.subscribe(function (value) {
            _this.blogpost = value;
        });
        this.comments = commentService.comment;
        this._subscription = this.commentService.fetchedComments.subscribe(function (value) {
            _this.comments = value;
        });
    }
    // iframeURL = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/9tRepZdoRmY');  
    BlogSomaZaidiComponent.prototype.ngOnInit = function () {
        // this.videourl = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/9tRepZdoRmY');
        this.getaPostviaRouter();
        this.getComments();
        this.sortComments();
        this.comment.post_id = this.post_id;
        this.comment.id = 1;
        this.comment.parent_id = 1;
        this.removeSearchInput();
        this.postlikes = 45;
        console.log(this.Post);
        // this.blogId = this.datacarrierService.getData();
        // console.log(this.blogId);
        //this.getaPost(this.blogId);
        //       var that = this;
        //       setTimeout(function() {
        //          console.log('timeout method fired');
        //          console.log(that.blogpost);
        //          console.log('timeout method fired a');
        // }, 3000);
    };
    BlogSomaZaidiComponent.prototype.removeSearchInput = function () {
        this.passeventsService.exitblogsection(this.searchInputStatus);
    };
    BlogSomaZaidiComponent.prototype.toggleId = function () {
        this.showId = !this.showId;
    };
    BlogSomaZaidiComponent.prototype.togglemyId = function () {
        this.showmyId = !this.showmyId;
    };
    BlogSomaZaidiComponent.prototype.myevenT = function ($event) {
        this.showmyId = !this.showmyId;
        this.thanksforjoiningprogram = !this.thanksforjoiningprogram;
    };
    BlogSomaZaidiComponent.prototype.closeButtonClicked = function ($event) {
        this.showmyId = !this.showmyId;
    };
    BlogSomaZaidiComponent.prototype.closeModal = function ($event) {
        this.thanksforjoiningprogram = !this.thanksforjoiningprogram;
    };
    BlogSomaZaidiComponent.prototype.add = function () {
        var _this = this;
        console.log('comment posted1');
        if (!this.comment.body) {
            return;
        }
        this.commentService.create(this.comment)
            .then(function (comment) {
            _this.coments.push(comment);
            console.log('comment posted');
        });
        this.showThankyoumessage = !this.showThankyoumessage;
    };
    BlogSomaZaidiComponent.prototype.clearCommentData = function () {
        // this.comment.title = null;
        this.comment.phone_number = null;
        this.comment.body = null;
        console.log('comment cleared');
    };
    BlogSomaZaidiComponent.prototype.removeThankyoumessage = function () {
        var that = this;
        setTimeout(function () {
            that.showThankyoumessage = !that.showThankyoumessage;
        }, 2000);
    };
    BlogSomaZaidiComponent.prototype.getaPostviaRouter = function () {
        var _this = this;
        this.post_id = +this.route.snapshot.paramMap.get('id');
        var id = +this.route.snapshot.paramMap.get('id');
        this.blogpostService.getaPost(id).then(function (aPost) {
            _this.Post = aPost;
            _this.Dataready = true;
            _this.socialShareUrl = document.location.href;
            _this.defaultSocialShareText = aPost[0].title;
        });
    };
    //   sendUrl(playerUrl) {
    //     this.iframeURL = playerUrl // try it first, if it doesn't work use the sanitized URL
    //     this.trustedDashboardUrl = this.sanitizer.bypassSecurityTrustResourceUrl(playerUrl);
    //     this.iframeURL = this.trustedDashboardUrl;
    // }
    //  getaPost(id: number): void {
    //   this.blogpostService.getaPost(id).then(aPost => this.Post = aPost);
    // }
    BlogSomaZaidiComponent.prototype.goBack = function () {
        this.location.back();
    };
    BlogSomaZaidiComponent.prototype.getComments = function () {
        this.commentService.getComment();
    };
    BlogSomaZaidiComponent.prototype.sortComments = function () {
        var that = this;
        setTimeout(function () {
            that.coments = [];
            for (var i = 0; i < that.comments.length; i++) {
                var CMT = that.comments[i];
                if (CMT.post_id === that.post_id) {
                    that.coments.push(CMT);
                    console.log(CMT.post_id);
                    console.log(that.post_id);
                }
            }
        }, 1500);
    };
    BlogSomaZaidiComponent.prototype.addLikes = function () {
        if (!this.liked) {
            this.postlikes = this.postlikes + 1;
        }
        else {
            this.postlikes = this.postlikes - 1;
        }
        this.liked = !this.liked;
    };
    return BlogSomaZaidiComponent;
}());
BlogSomaZaidiComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-blog-soma-zaidi',
        template: __webpack_require__("../../../../../src/app/wazazi/blog-soma-zaidi/blog-soma-zaidi.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wazazi/blog-soma-zaidi/blog-soma-zaidi.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__core_blogpost_service__["a" /* BlogpostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_blogpost_service__["a" /* BlogpostService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__core_comment_service__["a" /* CommentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__core_comment_service__["a" /* CommentService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__core_datacarrier_service__["a" /* DatacarrierService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__core_datacarrier_service__["a" /* DatacarrierService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__core_passevents_service__["a" /* PasseventsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__core_passevents_service__["a" /* PasseventsService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _g || Object])
], BlogSomaZaidiComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=blog-soma-zaidi.component.js.map

/***/ }),

/***/ "../../../../../src/app/wazazi/blog-soma-zaidi1/blog-soma-zaidi1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wazazi/blog-soma-zaidi1/blog-soma-zaidi1.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  blog-soma-zaidi1 works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/wazazi/blog-soma-zaidi1/blog-soma-zaidi1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_search_service__ = __webpack_require__("../../../../../src/app/core/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_blogpost_service__ = __webpack_require__("../../../../../src/app/core/blogpost.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogSomaZaidi1Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var BlogSomaZaidi1Component = (function () {
    function BlogSomaZaidi1Component(blogpostService, searchService, router) {
        var _this = this;
        this.blogpostService = blogpostService;
        this.searchService = searchService;
        this.router = router;
        this.showId = false;
        this.post = { id: 1,
            title: '',
            body: '',
            topic_id: 2 };
        this.searchTerms = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.liked = false;
        this.apost = this.searchService.message;
        this.giphies = searchService.giphies;
        this._subscription = this.searchService.fetchedPosts.subscribe(function (value) {
            _this.giphies = value;
        });
        this.blogpost = blogpostService.blogpost;
        this.subscription = this.blogpostService.fetchedBlogpost.subscribe(function (value) {
            _this.blogpost = value;
        });
        this.message = searchService.message;
        this.subscription = searchService.nameChange.subscribe(function (value) {
            _this.message = value;
        });
        this.repoUrl = "http://jualishebora.ga/wazazi/blog-section";
    }
    BlogSomaZaidi1Component.prototype.display = function () {
        console.log(this.apost + this.giphies);
    };
    // Push a search term into the observable stream.
    //search(term: string): void {
    //this.searchTerms.next(term);}
    BlogSomaZaidi1Component.prototype.addLikes = function () {
        if (!this.liked) {
            this.postlikes = this.postlikes + 1;
        }
        else {
            this.postlikes = this.postlikes - 1;
        }
        this.liked = !this.liked;
    };
    BlogSomaZaidi1Component.prototype.ngOnDestroy = function () {
        //prevent memory leak when component destroyed
        this._subscription.unsubscribe();
    };
    BlogSomaZaidi1Component.prototype.getBlogposts = function () {
        var _this = this;
        this.blogpostService.getBlogposts().then(function (blogpost) { return _this.blogpost = blogpost; });
    };
    BlogSomaZaidi1Component.prototype.getPost = function (id) {
        this.blogpostService.getBlogpost(id);
    };
    BlogSomaZaidi1Component.prototype.ngOnInit = function () {
        this.postlikes = 45;
        this.display();
        var that = this;
        setTimeout(function () {
            console.log('timeout method fired');
            console.log(that.blogpost);
            console.log('timeout method fired a');
        }, 6000);
        /*this.posts = this.searchTerms
          .debounceTime(300)
          .distinctUntilChanged()
          .switchMap(term => term
        
            ? this.searchService.search(term)
            
            : Observable.of<Trypost[]>([]))
          .catch(error => {
            console.log(error);
            return Observable.of<Trypost[]>([]);
          });*/
        // this.getBlogpost(3)
        /*this.searchService.performSearch().subscribe((res: Response) => {
          this.giphies = res.json().data;
          console.log(this.giphies);
      });*/
    };
    //  getBlogpost(id): void {
    //   this.blogpostService.getBlogpost(id).then(post => this.post = post);
    // }
    BlogSomaZaidi1Component.prototype.toggleId = function () {
        this.showId = !this.showId;
    };
    return BlogSomaZaidi1Component;
}());
BlogSomaZaidi1Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-blog-soma-zaidi1',
        template: __webpack_require__("../../../../../src/app/wazazi/blog-soma-zaidi1/blog-soma-zaidi1.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wazazi/blog-soma-zaidi1/blog-soma-zaidi1.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_8__core_blogpost_service__["a" /* BlogpostService */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8__core_blogpost_service__["a" /* BlogpostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__core_blogpost_service__["a" /* BlogpostService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__core_search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__core_search_service__["a" /* SearchService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], BlogSomaZaidi1Component);

var _a, _b, _c;
//# sourceMappingURL=blog-soma-zaidi1.component.js.map

/***/ }),

/***/ "../../../../../src/app/wazazi/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n  footer {   \r\n      width: 100% ;\r\n      height: -webkit-fit-content;\r\n      height: -moz-fit-content;\r\n      height: fit-content;\r\n      padding: 1vh 0;\r\n      vertical-align: middle;\r\n      /*background-color: #1e1324;  23,1,18*/\r\n      background-color:rgba(70, 26, 66, 1);\r\n      /* background-color: rgba(34, 13, 33, 1); */\r\n      /*border-top: solid 6px #652f85*/\r\n     box-shadow: 0px -7px 9px -8px #000;\r\n        }  \r\n\r\n  .footercontainer {\r\n      width: 100%;\r\n      margin: 0 0;\r\n     \r\n  }\r\n\r\n  .subcsribe_button {\r\n      height: 35px;\r\n      width: 150px;\r\n      margin-top: 3vh;\r\n      margin-right: 4%;\r\n      /*color: #e4acb4;*/\r\n      color: #fff;\r\n      font-size: 17px;\r\n      background: none;\r\n      /*border: 1px solid #ffb6c1;*/\r\n      border: 2px solid #fff;\r\n      border-radius: 10px;\r\n      float: right;\r\n }  \r\n\r\n .addressline {\r\n      font-size: 11px;\r\n      /*color: #ffb6c1;*/\r\n      color: #fff;\r\n       width: 90%;\r\n      margin-left: 9%; \r\n     \r\n      margin-top: 1vh !important;\r\n }\r\n\r\n .addressline p img {\r\n     width: 20px;\r\n     height: 20px;\r\n     margin: 0 2vw 0 0;\r\n }\r\n\r\n .addressline .sociaolmediabutton:first-child {\r\n    width: 31px;\r\n    height: 31px;\r\n }\r\n\r\n .addressline .sociaolmediabutton {\r\n    margin: 2vh 4vw 0 4vw;\r\n}\r\n\r\n #subscribe_text {\r\n     line-height: 2em;\r\n }\r\n\r\n .clear {\r\n     clear: both;\r\n }\r\n /*#493829*/\r\n\r\n @media all and (max-width: 767px){\r\n\r\n     .footersection1 {\r\n      padding: 0;\r\n    }\r\n\r\n    .footersection2 {\r\n        padding: 0;\r\n      }\r\n\r\n     .subcsribe_button {\r\n      height: 27px;\r\n      width: 110px;\r\n      margin-top: 2vh;\r\n      margin-right: 4%;\r\n      margin-bottom: 1vh;\r\n      padding: 0 0 10px 0;\r\n      font-size: 13px;\r\n      background: none;\r\n      border-radius: 10px;\r\n      float: right;\r\n } \r\n    \r\n .addressline {\r\n      font-size: 7px;\r\n      width: 90%;\r\n      margin-left: 10px; \r\n      margin-right: auto !important;\r\n      margin-top: 0 !important;\r\n      margin-bottom: 1vh;\r\n }\r\n\r\n .addressline .sociaolmediabutton:first-child {\r\n    width: 25px;\r\n    height: 25px;\r\n }\r\n\r\n .addressline .sociaolmediabutton {\r\n    width: 26px;\r\n    height: 26px;\r\n}\r\n\r\n .addressline p {\r\n     font-size: 11px;\r\n }\r\n\r\n #subscribe_text {\r\n     height: 100%;\r\n     line-height: 1.5em;\r\n }\r\n }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wazazi/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "    <app-taharifa-subscription *ngIf=\"thanksforsubscribing\" (closeModal)=\"closeModal($event)\"></app-taharifa-subscription>\r\n    <app-taharifa-kujiunga *ngIf=\"thanksforjoiningprogram\" (closeModal)=\"closeModal($event)\"></app-taharifa-kujiunga>\r\n    <app-subscribe *ngIf=\"showmyId\" (myevent)=\"myevent($event)\" (myEvent)=\"myEvent($event)\" (closeButtonClicked)=\"closeButtonClicked($event)\"></app-subscribe>\r\n    <app-kujiunga *ngIf=\"showmyod\" (myevenT)=\"myevenT($event)\" (closeButtonClicked)=\"closeButtonClicked($event)\"></app-kujiunga> \r\n\r\n    <footer>\r\n    <div class=\"row footercontainer\">\r\n        \r\n     <div class=\"col-sm-4 hidden-xs footersection1\">\r\n        <div class=\"addressline\">\r\n            \r\n            <p>\r\n            <img src=\"./../../../assets/images/phone.png\">    \r\n             0688192446,</p>\r\n            <p>\r\n            <img src=\"./../../../assets/images/locationpin.png\">\r\n             xxx Street, Dar es Salaam</p>\r\n        </div> \r\n     </div>\r\n     \r\n     <div class=\"col-sm-4 col-xs-6 footersection2\">\r\n         <div class=\"addressline\">\r\n          <a href=\"https://www.facebook.com/lishe360\"><img class=\"sociaolmediabutton\" src=\"./../../../assets/images/facebook-sq.png\"></a>\r\n          <a href=\"https://www.instagram.com/lishe360\"><img class=\"sociaolmediabutton\" src=\"./../../../assets/images/instagram-logo.png\"></a>\r\n         </div>\r\n     </div>\r\n\r\n     <div class=\"col-sm-4 col-xs-6\">\r\n         <button class=\"subcsribe_button\" (click)= \"togglemyId()\">\r\n          <p id=\"subscribe_text\">Subscribe</p>\r\n         </button> \r\n     </div>\r\n     \r\n    </div>\r\n    \r\n    \r\n   \r\n</footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/wazazi/footer/footer.component.ts":
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
        this.showmyId = false;
        this.showmyod = false;
        this.thanksforsubscribing = false;
        this.thanksforjoiningprogram = false;
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.closeModal = function ($event) {
        if (this.thanksforsubscribing) {
            this.thanksforsubscribing = !this.thanksforsubscribing;
        }
        if (this.thanksforjoiningprogram) {
            this.thanksforjoiningprogram = !this.thanksforjoiningprogram;
        }
    };
    FooterComponent.prototype.myEvent = function ($event) {
        this.showmyId = !this.showmyId;
        this.thanksforsubscribing = !this.thanksforsubscribing;
    };
    FooterComponent.prototype.myevent = function ($event) {
        this.showmyId = !this.showmyId;
        this.showmyod = !this.showmyod;
    };
    FooterComponent.prototype.myevenT = function ($event) {
        this.showmyod = !this.showmyod;
        this.thanksforjoiningprogram = !this.thanksforjoiningprogram;
    };
    FooterComponent.prototype.closeButtonClicked = function ($event) {
        if (this.showmyId) {
            this.showmyId = !this.showmyId;
        }
        if (this.showmyod) {
            this.showmyod = !this.showmyod;
        }
    };
    FooterComponent.prototype.togglemyId = function () {
        this.showmyId = !this.showmyId;
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/wazazi/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wazazi/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/wazazi/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wazazi/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  header works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/wazazi/header/header.component.ts":
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
        template: __webpack_require__("../../../../../src/app/wazazi/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wazazi/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/wazazi/kuhusu-jlb/kuhusu-jlb.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, " .container {\r\n       font-family: montserrat-regular;\r\n       line-height: 1.7;\r\n        background-color: #f4f3ef;\r\n        margin-left: 8%;\r\n       \r\n        width: 1100px;\r\n        padding: 25px 4% 12% 4%;\r\n }\r\n\r\n .box {\r\n        width: 100%;\r\n        padding:0 15px 40px 15px;\r\n        background-color: #fff;\r\n        border-bottom: none;\r\n        border-top-right-radius: 2px;\r\n        border-top-left-radius: 2px;    \r\n}\r\n\r\n .selfdescription {\r\n       height: 750px;\r\n       padding-left: 0;\r\n       background-image: url(\"" + __webpack_require__("../../../../../src/assets/images/happy mother-kid.jpg") + "\");\r\n       background-repeat: no-repeat;\r\n       background-size: cover;\r\n       border-top-right-radius: 2px;\r\n       border-top-left-radius: 2px; \r\n       z-index: -2;\r\n }\r\n\r\n .cover {\r\n       height: 100%;\r\n       width: 100%;\r\n       padding: 30px 0 0 0;\r\n       background-color: rgba(0, 0, 0,0.7);\r\n       border-top-right-radius: 2px;\r\n       border-top-left-radius: 2px;  \r\n       z-index: -1;\r\n }\r\n\r\n .logo img { \r\n        height: 150px;\r\n        width: 150px;\r\n        margin-top: 30px;\r\n        border-radius: 50%;\r\n }\r\n\r\n .logo p {\r\n        color: #fff;\r\n        font-size: 21px;\r\n        font-family: kgshakeitoff;\r\n        font-weight: 600;\r\n }\r\n\r\n .description  {\r\n       color: #fff;\r\n       font-size: 15px;\r\n       text-align: justify;\r\n       padding: 0 60px 0 15px;\r\n       margin: 0 0;\r\n }\r\n\r\n .description p {\r\n      line-height: 2em;\r\n}\r\n\r\n .hrule {\r\n\r\n        margin: 30px 0;\r\n }\r\n\r\n .meetteam {\r\n        text-align: center;\r\n }\r\n\r\n .meetteam p {\r\n        \r\n        font-size: 20px;\r\n        margin: 100px 0 80px 60px;\r\n        \r\n }\r\n\r\n  figure {\r\n        text-align: center;\r\n }\r\n\r\n figcaption {\r\n        color: #66615b;\r\n        font-size: 13.5px;\r\n        text-align: center;\r\n        width: 47%;\r\n        padding-top: 30px;\r\n        margin: auto;\r\n        border-radius: 5px;\r\n }\r\n\r\n figure:hover img {\r\n    opacity: 0.85;\r\n    transition: all .8s ease;\r\n}\r\n\r\nfigure:hover figcaption {\r\n    color: #fff;\r\n    background-color: rgba(169, 169, 169, 0.8);\r\n    transition: all .8s ease;\r\n    margin-top: 25px;\r\n}\r\n\r\n .team {\r\n       display: inline-block;\r\n       position: relative;\r\n       width: 60%;\r\n       height: 60%;\r\n       border-radius: 50%;\r\n       overflow: hidden;\r\n }\r\n\r\n .team img {\r\n       width: 100%;\r\n       height: auto;\r\n       margin: 0 0 0 9px;\r\n }\r\n\r\n .contacts {\r\n        height: 100%;\r\n        width: 100%;\r\n        background-image: url(" + __webpack_require__("../../../../../src/assets/images/texturdbg4.jpg") + ");\r\n        background-repeat: repeat;\r\n        border: 1px solid #cdcdcd;\r\n        border-top: none;\r\n        border-bottom: none;\r\n        padding: 10px 0 0 45px;\r\n        margin: 0;\r\n }\r\n\r\n .contacts p { \r\n        color: rgba(0, 0, 0, 0.5);\r\n        font-size: 20px;        \r\n        margin: 15px 0;\r\n        margin-left: 25px;\r\n }\r\n\r\n .socioicon {\r\n        height: 25px;\r\n        width: 25px;\r\n        display: block;\r\n        margin-top: 45px;\r\n }\r\n\r\n .jiungebutton {\r\n        height: 20px;\r\n        width: auto;\r\n        margin-right: 0px; \r\n        float: right;\r\n        background: none;\r\n        border: none;\r\n }\r\n\r\n #kid {\r\n       float: left;\r\n       height: 70px;\r\n       width: 70px;\r\n       margin: 20px 0 40px 220px;\r\n }\r\n\r\n .fruits {\r\n       height: 110px;\r\n       width: 90px;\r\n       float: right;\r\n       margin-top: 60px;\r\n       margin-right: 9%;\r\n }\r\n\r\n .clear {\r\n       clear: both;            /* to solve float overlapping issues */ \r\n}\r\n \r\n\r\n @media all and (max-width: 800px){\r\n   .container {\r\n        width: 100%;\r\n        padding: 4% 0 12% 0;\r\n        margin: 0 0 0 0;\r\n } \r\n    .box {\r\n        width: 100%;\r\n        float: none;\r\n        margin: 0px;\r\n        padding: 0 0 2% 0;\r\n}\r\n\r\n    .selfdescription {\r\n        margin: 0;\r\n        height: auto !important;\r\n}\r\n\r\n    .logo { \r\n        padding: 0 20px\r\n      }\r\n\r\n\r\n      .logo img { \r\n        height:70%;\r\n        width: 50%;\r\n        margin-top: 5%;\r\n        border-radius: 50%;\r\n }\r\n      p{\r\n        font-size: 90%;\r\n      }\r\n       .logo p {\r\n        font-size: 120%;\r\n }\r\n\r\n      .description  {\r\n      color: #fff;\r\n      font-size: 15px;\r\n      text-align: justify;\r\n      padding: 0 30px 20px 30px;\r\n      margin: 0 0;\r\n}\r\n\r\n      .description p {\r\n      padding: 0 0;\r\n      }\r\n      \r\n     \r\n       .team {\r\n       display: inline-block;\r\n       position: relative;\r\n       width: 80%;\r\n       height: 80%;\r\n       border-radius: 50%;\r\n       overflow: hidden;\r\n }\r\n\r\n .team img {\r\n       width: 45%;\r\n       height: auto;\r\n       margin: 0 0 0 9px;\r\n       border-radius: 50%;\r\n }\r\n\r\n       .meetteam figure {\r\n       margin: 0 0 15px 0;\r\n       }\r\n\r\n\r\n       .meetteam p {\r\n        font-size: 100%;\r\n        margin: 6% 0% 0% 0%;\r\n        \r\n }\r\n      figcaption {\r\n            font-size: 75%;\r\n      }\r\n       .fruits {\r\n       height: 40%;\r\n       width: 20%;\r\n       float: right;\r\n       margin-top:0%;\r\n       position: relative;\r\n       margin-right: 0%;\r\n }\r\n      \r\n #kid {\r\n       float:center;\r\n       height:3%;\r\n       width:2%;\r\n       margin-right:3%;\r\n       opacity: 0;\r\n }\r\n       .socioicon {\r\n        height: 7%;\r\n        width: 7%;\r\n        display: block;\r\n        margin-top: 7%;\r\n }\r\n\r\n       .contacts p { \r\n       \r\n        font-size: 100%;        \r\n       \r\n }\r\n\r\n .selfdescription {\r\n      height: 450px;\r\n      width: 100%;\r\n}\r\n /*\r\n\r\n    \r\n        .oneimage {\r\n        height: auto;\r\n        width: 100%; \r\n       margin:0px;\r\n}  \r\n.twoimage {\r\n        height: auto;\r\n        width: 100%; \r\n        margin:0px;\r\n}\r\n.quote {\r\n        font-size: 14px;\r\n       \r\n}\r\n.box > h3 {\r\n     \r\n       font-size: 17px;\r\n}\r\np{\r\n        font-size:12px;\r\n}\r\n.somazaidi{\r\n        font-size:12px;\r\n}\r\n.ccontainer {\r\n    \r\n       \r\n        padding:40px;\r\n\r\n }*/\r\n\r\n\r\n }\r\n\r\n\r\n @media all and (max-width: 500px){\r\n /*.selfdescription {\r\n      background-size: cover;\r\n  }*/     \r\n }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wazazi/kuhusu-jlb/kuhusu-jlb.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n<div class=\"box\">\r\n<div class=\"row selfdescription\">\r\n  <div class=\"cover\">\r\n  <div class=\"col-sm-4 logo\">\r\n     <p>Watoto wenye afya Bora<br> na Furaha tele !</p><br>\r\n     <!--<img src=\"../../../assets/images/pp.jpg\"> -->\r\n     \r\n  </div>\r\n\r\n  <div class=\"col-sm-8 description\">\r\n     <p class=\"description p\">JLISHE 360 inakupa huduma xyz..\r\n       enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.sit amet,\r\n         consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud amet ea\r\n          exercitation Nemo enim ipsam voluptatem quia voluptas sit enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.sit amet,\r\n          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud amet ea\r\n          adipiscing elit, sed do eiusmod tempor incididunt ut exercitation Nemo.\r\n     \r\n  </div>\r\n    <!-- <img src=\"../../../assets/images/happykids.png\" id=\"kid\"> -->\r\n     <div class=\"clear\"></div>\r\n  </div>\r\n</div>\r\n <br>\r\n \r\n \r\n\r\n<!--<hr class=\"hrule\"> -->\r\n\r\n<div class=\"row meetteam\">\r\n  <p>Ifahamu timu inayo fanya kazi usiku na mchana kufanikisha huduma hii<p>\r\n  <div class=\"col-sm-4\">\r\n    <figure>\r\n    <div class=\"team\">\r\n    <img src=\"../../../assets/images/JLB Mbanga.jpg\" >\r\n    </div>\r\n    <figcaption>His Name, <br> Kiongozi\r\n    <br><br><br></figcaption>\r\n    </figure>\r\n  </div>\r\n\r\n\r\n  <div class=\"col-sm-4\">\r\n    <figure>\r\n    <div class=\"team\">\r\n    <img src=\"../../../assets/images/JLB nutritionist.jpg\" >\r\n    </div>\r\n    <figcaption>Her Name,<br>Mtaalamu Lishe\r\n    <br><br><br></figcaption>\r\n    </figure>\r\n  </div>\r\n\r\n\r\n  <div class=\"col-sm-4\">\r\n    <figure>\r\n    <div class=\"team\">\r\n    <img src=\"../../../assets/images/JLB Zak.jpg\" >\r\n    </div>\r\n    <figcaption>His Name, <br>Mratibu wa mitandao<br> ya kijamii\r\n    <br><br><br></figcaption>\r\n    </figure>\r\n  </div>\r\n\r\n</div>\r\n <br><br>\r\n <!--<img src=\"../../../assets/images/healthystuffs.png\" class=\"fruits\"> -->\r\n <div class=\"clear\"></div>\r\n\r\n</div>\r\n\r\n<!--<div class=\"row contacts\">\r\n <p>Wasiliana na Jumuia ya JLB<p>\r\n <img src=\"../../../assets/images/facebook-logo.png\" class=\"socioicon\">\r\n <img src=\"../../../assets/images/whatsapp-logo.png\" class=\"socioicon\">\r\n <img src=\"../../../assets/images/little-mobile.png\" class=\"socioicon\">\r\n </div> -->\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/wazazi/kuhusu-jlb/kuhusu-jlb.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_passevents_service__ = __webpack_require__("../../../../../src/app/core/passevents.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KuhusuJlbComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KuhusuJlbComponent = (function () {
    function KuhusuJlbComponent(passeventsService) {
        this.passeventsService = passeventsService;
        this.showId = false;
        this.searchInputStatus = false;
    }
    KuhusuJlbComponent.prototype.ngOnInit = function () {
        this.removeSearchInput();
    };
    KuhusuJlbComponent.prototype.toggleId = function () {
        this.showId = !this.showId;
    };
    KuhusuJlbComponent.prototype.removeSearchInput = function () {
        this.passeventsService.exitblogsection(this.searchInputStatus);
    };
    return KuhusuJlbComponent;
}());
KuhusuJlbComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-kuhusu-jlb',
        template: __webpack_require__("../../../../../src/app/wazazi/kuhusu-jlb/kuhusu-jlb.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wazazi/kuhusu-jlb/kuhusu-jlb.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_passevents_service__["a" /* PasseventsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_passevents_service__["a" /* PasseventsService */]) === "function" && _a || Object])
], KuhusuJlbComponent);

var _a;
//# sourceMappingURL=kuhusu-jlb.component.js.map

/***/ }),

/***/ "../../../../../src/app/wazazi/kujiunga/kujiunga.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.clear {\r\n       clear: both;            /* to solve float overlapping issues */ \r\n}\r\n\r\n .container {\r\n        background-color: gray;\r\n        box-shadow: 1px 6.5px 12px 1px #000;\r\n        padding-top: 3%;\r\n        padding-right: 5%;\r\n }\r\n\r\n .modal {\r\n        display: block;\r\n        position: fixed;\r\n        z-index: 10000;\r\n        left: 0;\r\n        top: 0;\r\n        width: 100%;\r\n        height: 100%;\r\n        overflow: auto;\r\n        background-color: rgb(0,0,0);/* fallback color */\r\n        background-color: rgba(0,0,0,0.4);\r\n }\r\n \r\n.close {\r\n        margin: 3px 5px;\r\n        color: rgba(0,0,0,0.8);\r\n}\r\n\r\n.jiungebutton {\r\n        color: #ffb6c1;\r\n        font-size: 16px;\r\n        height: 20px;\r\n        width: auto;\r\n        margin-right: 0px; \r\n        background: none;\r\n        border: none;\r\n }\r\n\r\n.modal-header {\r\n        font-size: 15px;\r\n        padding: 23px 40px;\r\n        color: #ffffff;\r\n        border-bottom:  none;\r\n        border-top-left-radius: 6px;\r\n        border-top-right-radius:6px\r\n        }\r\n\r\n.modallinks :hover {\r\n        font-size: 17.4px;\r\n}\r\n\r\n.modal-body {padding: 2px 16px;\r\n             border:  none;\r\n        }\r\n\r\n.contactfield{  \r\n        width: 270px;\r\n        display: block;\r\n        margin-top: 10px;\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n}\r\n\r\ninput::-webkit-input-placeholder {\r\n  color:   #666565;\r\n  }\r\n\r\ninput:-ms-input-placeholder {\r\n  color:   #666565;\r\n  }\r\n\r\ninput::placeholder {\r\n  color:   #666565;\r\n  }\r\n\r\n.inputErrormessage {\r\n        padding: 0 0 0 40px;\r\n}\r\n\r\n.modal-footer {\r\n        color: #ffffff;\r\n        font-size: 17px;\r\n        padding: 2px 16px;\r\n        border-top:  none;\r\n        margin-top: 45px;\r\n        border-bottom-left-radius: 6px;\r\n        border-bottom-right-radius: 6px\r\n        }\r\n\r\n.sendbutton {\r\n        color: #ffffff;\r\n        margin-right: 24px;\r\n        margin-bottom: 8px;\r\n        background: none; \r\n        border: none;\r\n}\r\n\r\n.modal-content {\r\n position: relative;\r\n    background-color: rgba(0,0,0,0.8);\r\n    margin: auto;\r\n    margin-top: 165px;\r\n    padding: 0;\r\n    border: 1px solid #888;\r\n    width: 65%;\r\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\r\n    -webkit-animation-name: animatetop;\r\n    -webkit-animation-duration: 0.4s;\r\n    animation-name: animatetop;\r\n    animation-duration: 0.4s\r\n}\r\n\r\n input {\r\n    width: 35%;\r\n    padding-left: 5px;\r\n    border: 1px solid #652f85;\r\n    border-radius: 4px;\r\n}\r\n\r\n :-moz-placeholder {\r\n    color: rgba(0,0,0,0.8);\r\n }\r\n\r\n@-webkit-keyframes animatetop {\r\n    from {top: -300px; opacity: 0}\r\n    to {top: 0; opacity: 1}\r\n}\r\n\r\n@keyframes animatetop {\r\n    from {top: -300px; opacity: 0}\r\n    to {top: 0; opacity: 1}\r\n}\r\n\r\n.inputErrormessage {\r\n     color: orangered;\r\n     background: none;\r\n     margin: 0 0 0 233px;\r\n}\r\n\r\n.close {\r\n        float: right;\r\n        font-size: 28px;\r\n        font-weight: bold;\r\n        position: absolute;\r\n        z-index: 10000;\r\n        right: 10px;\r\n}\r\n\r\n.close:hover,\r\n.close:focus {\r\n        color: #ffffff;\r\n        text-decoration: none;\r\n        cursor: pointer;\r\n}\r\n\r\n\r\n@media all and (max-width: 767px){\r\n         .modal {\r\n        display: block;\r\n        position: fixed;\r\n        z-index: 1000;\r\n        left: 0;\r\n        top: 0;\r\n        width: 100%;\r\n        height: 100%;\r\n        overflow: auto;\r\n        \r\n }\r\n\r\n         .modal-content {\r\n        position: absolute;\r\n        background-color: rgba(0,0,0,0.8);\r\n        margin: 0 0 0 15%;\r\n        padding: 0;\r\n        border: 1px solid #888;\r\n        width: 70%;\r\n        bottom: 130px;\r\n        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\r\n        -webkit-animation-name: animatetop;\r\n        -webkit-animation-duration: 0.4s;\r\n        animation-name: animatetop;\r\n        animation-duration: 0.4s\r\n} \r\n\r\n.modal-header {\r\n        padding-bottom: 0;\r\n}\r\n\r\n.modal-header p {\r\n        font-size: 13px;\r\n}\r\n\r\n.modal-header p .jiungebutton{\r\n        font-size: 14px;\r\n        padding-left: 0;\r\n}\r\n\r\n.modal-body input {\r\n        width: 90%;\r\n}\r\n\r\n.inputErrormessage {\r\n        margin-left: 15px;\r\n        padding: 0 0 0 8px\r\n}\r\n\r\ninput::-webkit-input-placeholder {\r\n        font-size: 13px;\r\n  }\r\n\r\ninput:-ms-input-placeholder {\r\n        font-size: 13px;\r\n  }\r\n\r\ninput::placeholder {\r\n        font-size: 13px;\r\n  }\r\n\r\n\r\n.modal-footer {\r\n        color: #ffffff;\r\n        font-size: 14px;\r\n        padding: 2px 16px;\r\n        border-top:  none;\r\n        margin-top: 30px;\r\n        border-bottom-left-radius: 6px;\r\n        border-bottom-right-radius: 6px\r\n        }\r\n\r\n}\r\n\r\n\r\n@media all and (max-width: 500px){\r\n.modal-content {\r\n        position: absolute;\r\n        background-color: rgba(0,0,0,0.8);\r\n        margin: 0 0 0 15%;\r\n        padding: 0;\r\n        border: 1px solid #888;\r\n        width: 70%;\r\n        bottom: 50px;\r\n        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\r\n        -webkit-animation-name: animatetop;\r\n        -webkit-animation-duration: 0.4s;\r\n        animation-name: animatetop;\r\n        animation-duration: 0.4s\r\n  }       \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wazazi/kujiunga/kujiunga.component.html":
/***/ (function(module, exports) {

module.exports = " <!-- Modal -->\r\n      <div id=\"myModal\" class=\"modal\">\r\n\r\n       <div class=\"modal-content\">\r\n         <button class=\"close\" (click)=\"exitModal($event)\">&times;</button>\r\n         <div class=\"modal-header\">\r\n            <p>Ukijaza fomu hii utaunganishwa kwenye darasa letu\r\n              ambapo utapokea mafunzo kila siku kuhusiana na malezi ya\r\n              watoto wachanga. Pia utapata nafasi ya kubadilishana\r\n              mawazo na ujuzi na wazazi wenye watoto wa umri kama ule\r\n              wa mwanao.\r\n            </p>\r\n         </div>\r\n         <div class=\"modal-body\"> \r\n\r\n\r\n           \r\n           <form #kujiungaform=\"ngForm\">\r\n            <input type=\"text\" name=\"comment_author\" class=\"contactfield\" id=\"jina\" value=\"\"  placeholder=\"Jina\" required [(ngModel)]=\"wazazi.first_name\" #jina=\"ngModel\">\r\n             <div *ngIf=\"(jina.errors && (jina.dirty || jina.touched)) || (isInputdataMissing && jina.errors)\" class=\"alert alert-danger\" class=\"inputErrormessage\">\r\n               <div [hidden]=\"!jina.errors.required\" >\r\n                   Tafadhari jaza Jina lako\r\n               </div>\r\n             </div>  \r\n\r\n             <input type=\"text\" name=\"comment_author\" class=\"contactfield\" id=\"jina\" value=\"\"  placeholder=\"Jina la Mzazi\" required [(ngModel)]=\"wazazi.surname\" #jina=\"ngModel\">\r\n             <div *ngIf=\"(jina.errors && (jina.dirty || jina.touched)) || (isInputdataMissing && jina.errors)\" class=\"alert alert-danger\" class=\"inputErrormessage\">\r\n               <div [hidden]=\"!jina.errors.required\" >\r\n                   Tafadhari jaza Jina la Mzazi\r\n               </div>\r\n             </div>\r\n\r\n            <input type=\"text\" name=\"comment_author\" class=\"contactfield\" id=\"umri\" value=\"\"  placeholder=\"Umri wa mtoto\" [(ngModel)]=\"wazazi.childs_age\" required=\"required\" #umri=\"ngModel\">\r\n             <div *ngIf=\"(umri.errors && (umri.dirty || umri.touched))|| (isInputdataMissing && umri.errors)\" class=\"alert alert-danger\" class=\"inputErrormessage\">\r\n               <div [hidden]=\"!umri.errors.required\" >\r\n                   Tafadhari jaza umri wa mtoto\r\n               </div>\r\n             </div>  \r\n            \r\n           <input type=\"text\" name=\"comment_author\" id=\"phone\" \r\n             class=\"contactfield\" value=\"\"  placeholder=\"Namba ya Whatsapp\" \r\n             required [(ngModel)]=\"wazazi.phone_number\" #phone=\"ngModel\">\r\n             <div *ngIf=\"(phone.errors && (phone.dirty || phone.touched))|| (isInputdataMissing && phone.errors)\" class=\"alert alert-danger\" class=\"inputErrormessage\">\r\n               <div [hidden]=\"!phone.errors.required\" >\r\n                   Tafadhari jaza namba yako ya simu\r\n               </div>\r\n             </div>  \r\n           </form>\r\n\r\n\r\n         </div>\r\n        <div class=\"modal-footer\">\r\n             <a class=\"modallinks\"><button class=\"sendbutton\" (click)=\"onClick($event)\" (click)=\"add()\" \r\n                                    [disabled]=\"!kujiungaform.form.valid\"><button (click)=\"alertUser()\" class=\"sendbutton\"> Tuma taharifa</button> </button></a>\r\n         </div>\r\n       </div>\r\n      </div>\r\n      <br><br>\r\n      <br><br><br><br>\r\n      <br><br><br><br>\r\n    \r\n "

/***/ }),

/***/ "../../../../../src/app/wazazi/kujiunga/kujiunga.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wazazi__ = __webpack_require__("../../../../../src/app/wazazi.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_clients_service__ = __webpack_require__("../../../../../src/app/core/clients.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KujiungaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var KujiungaComponent = (function () {
    function KujiungaComponent(clientsService) {
        this.clientsService = clientsService;
        this.isInputdataMissing = false;
        this.wazazi = new __WEBPACK_IMPORTED_MODULE_1__wazazi__["a" /* Wazazi */]();
        this.wazazis = [];
        this.myevenT = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.closeButtonClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    KujiungaComponent.prototype.onClick = function (button) {
        this.myevenT.emit(button);
    };
    KujiungaComponent.prototype.exitModal = function (button) {
        this.closeButtonClicked.emit(button);
        console.log('exit modal clicked');
    };
    KujiungaComponent.prototype.add = function () {
        var _this = this;
        if (!this.wazazi.first_name) {
            return;
        }
        this.clientsService.create(this.wazazi)
            .then(function (mzazi) {
            _this.wazazis.push(mzazi);
        });
    };
    KujiungaComponent.prototype.alertUser = function (state) {
        this.isInputdataMissing = true;
    };
    KujiungaComponent.prototype.ngOnInit = function () {
        // this.client.password = 'password';
        // this.client.remember_token = 'token';
    };
    return KujiungaComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], KujiungaComponent.prototype, "myevenT", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], KujiungaComponent.prototype, "closeButtonClicked", void 0);
KujiungaComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-kujiunga',
        template: __webpack_require__("../../../../../src/app/wazazi/kujiunga/kujiunga.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wazazi/kujiunga/kujiunga.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__core_clients_service__["a" /* ClientsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_clients_service__["a" /* ClientsService */]) === "function" && _a || Object])
], KujiungaComponent);

var _a;
//# sourceMappingURL=kujiunga.component.js.map

/***/ }),

/***/ "../../../../../src/app/wazazi/kutuhusu/kutuhusu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wazazi/kutuhusu/kutuhusu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div class=\"box\">\n<div class=\"row\">\n  <div class=\"col-sm-4\">\n\n  </div>\n\n  <div class=\"col-sm-8\">\n\n  </div>\n\n</div>\n\n<hr>\n\n<div class=\"row\">\n\n  <div class=\"col-sm-4\">\n\n  </div>\n\n\n  <div class=\"col-sm-4\">\n\n  </div>\n\n\n  <div class=\"col-sm-4\">\n\n  </div>\n\n</div>\n</div>\n\n<div class=\"row\">\n\n</div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/wazazi/kutuhusu/kutuhusu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KutuhusuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var KutuhusuComponent = (function () {
    function KutuhusuComponent() {
    }
    KutuhusuComponent.prototype.ngOnInit = function () {
    };
    return KutuhusuComponent;
}());
KutuhusuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-kutuhusu',
        template: __webpack_require__("../../../../../src/app/wazazi/kutuhusu/kutuhusu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wazazi/kutuhusu/kutuhusu.component.css")]
    }),
    __metadata("design:paramtypes", [])
], KutuhusuComponent);

//# sourceMappingURL=kutuhusu.component.js.map

/***/ }),

/***/ "../../../../../src/app/wazazi/landingpage/landingpage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ccontainer {\n   width: 100% !important;\n   margin: 0;\n   padding: 0;\n}\n.businessdescription {\n   background-color: #ffffff;\n   height: 78vh;\n   margin: 0;\n   overflow: hidden;\n}\n\n.lpimagebed {\n   padding: 0;\n}\n\nimg {\n   width: 100%;\n   height: 100%;\n}\n\n.descriptiontext {\n   padding: 2vh 8vw 0 8vw;\n}\n\n.descriptiontext h3 {\n    color: #050709;\n    font-family: Gidole, 'Muli', \"Helvetica\", Arial, sans-serif;\n }\n\n.calltoaction {\n   background-color: rgba(70, 26, 66, 1);\n   width: 100%;\n   height: 22vh;\n   margin: 0;\n   /* overflow: scroll; */\n}\n\n/* .cab-bed {\n\n} */\n\n.cab-bed img {\n    margin: 0 3% 0 30%;\n}\n\n#kujiungaicon {\n    width: 18px;\n    height: 18px;\n}\n\n#blogposticon {\n    width: 22px;\n    height: 22px;\n}\n\n#shuhudaicon {\n    width: 16px;\n    height: 16px;\n}\n\n.cab-bed button {\n    color: #ffffff;\n    font-family: Gidole, 'Muli', \"Helvetica\", Arial, sans-serif;\n    font-weight: 500;\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    margin-top: 8vh;\n    /* margin-left: 33%; */\n    border: none;\n    background: none;\n    padding: 10px 7px;\n    border-radius: 6px;\n}\n\n@media all and (max-width: 768px){\n\n/* #first {\n    order: 2;\n}\n\n#second {\n    order: 1;\n} */\n\n/* .lpimagebed {\n   \n } */\n\n.calltoaction {\n    overflow: scroll;\n }\n\n.cab-bed img {\n    margin: 0 3% 0 27%;\n}\n\n.cab-bed button {\n    margin-top: 3vh;\n    margin-bottom: 3vh;\n    padding: 0 7px;\n}\n\n\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wazazi/landingpage/landingpage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ccontainer\">\n  <div class=\"row businessdescription\">\n    \n    <div class=\"col-sm-5 col-md-push-7 descriptiontext\" id=\"second\">\n       <h3>Karibu LISHE 360</h3>\n       <p>Tuna toa elimu ya lishe ya watoto wadogo, maswala yanayohusu maandalizi bora ya chakula, \n          ratiba itakayomfaa mtoto, mahitaji ya virutubisho kulingana na umri wa mtoto\n           na kadhalika. Darasa letu limekwisha saidia maelfu ya wazazi, karibu unufaike\n            wewe na mwanao kwa elimu hii..\n       </p>\n    </div>\n\n    <div class=\"col-sm-7 col-md-pull-5 lpimagebed\" id=\"first\">\n      <img class=\"lpimage\" src=\"./../../../assets/images/LISHE 360 LP1.jpeg\">\n    </div>\n\n  </div>\n\n  <div class=\"row calltoaction\">\n      <div class=\"col-sm-4 cab-bed\">\n        <img id=\"kujiungaicon\" src=\"./../../../assets/images/about-us.png\"><button id=\"kujiunga\" (click)=\"jiungenaDarasa()\">JIUNGE NA DARASA</button>\n      </div>\n\n      <div class=\"col-sm-4 cab-bed\">\n        <img id=\"blogposticon\" src=\"./../../../assets/images/feed.png\"><a routerLink=\"blog-section\" routerLinkActive=\"active\"><button id=\"blogpost\">MAKALA ZA LISHE</button></a>\n      </div>\n\n      <div class=\"col-sm-4 cab-bed\">\n        <img id=\"shuhudaicon\" src=\"./../../../assets/images/testimonials.png\"><a routerLink=\"shuhuda\" routerLinkActive=\"active\"><button id=\"shuhuda\">SHUHUDA</button></a>\n      </div>\n  </div>\n\n  <app-taharifa-kujiunga *ngIf=\"thanksforjoiningprogram\" (closeModal)=\"closeModal($event)\"></app-taharifa-kujiunga>\n  <app-kujiunga *ngIf=\"showmyId\" (myevenT)=\"myevenT($event)\" (closeButtonClicked)=\"closeButtonClicked($event)\"></app-kujiunga>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/wazazi/landingpage/landingpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_datacarrier_service__ = __webpack_require__("../../../../../src/app/core/datacarrier.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingpageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { PasseventsService } from '../../core/passevents.service';
var LandingpageComponent = (function () {
    function LandingpageComponent(datacarrierService) {
        this.datacarrierService = datacarrierService;
        this.searchInputStatus = false;
        this.showmyId = false;
        this.thanksforjoiningprogram = false;
        this.datacarrierService.setLandingPageStatus(false); // to remove landing page from view
    }
    LandingpageComponent.prototype.ngOnInit = function () {
        //  this.removeSearchInput() 
    };
    // removeSearchInput() {
    //   this.passeventsService.exitblogsection(this.searchInputStatus);
    // }
    LandingpageComponent.prototype.jiungenaDarasa = function () {
        this.showmyId = true;
    };
    LandingpageComponent.prototype.myevenT = function ($event) {
        this.showmyId = !this.showmyId;
        this.thanksforjoiningprogram = !this.thanksforjoiningprogram;
    };
    LandingpageComponent.prototype.closeButtonClicked = function ($event) {
        this.showmyId = !this.showmyId;
    };
    LandingpageComponent.prototype.closeModal = function ($event) {
        this.thanksforjoiningprogram = !this.thanksforjoiningprogram;
    };
    return LandingpageComponent;
}());
LandingpageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-landingpage',
        template: __webpack_require__("../../../../../src/app/wazazi/landingpage/landingpage.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wazazi/landingpage/landingpage.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_datacarrier_service__["a" /* DatacarrierService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_datacarrier_service__["a" /* DatacarrierService */]) === "function" && _a || Object])
], LandingpageComponent);

var _a;
//# sourceMappingURL=landingpage.component.js.map

/***/ }),

/***/ "../../../../../src/app/wazazi/makala-contents/makala-contents.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".clear {\r\n       clear: both;            /* to solve float overlapping issues */ \r\n}\r\n \r\n .Makala-items-bed {\r\n        font-family: Montserrat-Regular;\r\n        height:auto;\r\n        width: 290px;\r\n        padding: 0 0 0 0;\r\n        margin-top: 0px;\r\n        margin-right:20%;\r\n        word-wrap: break-word;\r\n        background-color: #FFF;\r\n        border-top: 0 solid #ffb6c1;\r\n        border-bottom: 7px solid #652f85;\r\n        border-radius: 6px;\r\n        box-shadow: 0px 8.5px -1px 0px #000;\r\n        position: absolute;\r\n        top: 25px;\r\n        left:0px;\r\n        z-index: 2000;\r\n        float: right;\r\n }\r\n\r\n\r\n.closebox {\r\n        width: 100%;\r\n        display: block;\r\n        margin-bottom: 30px;\r\n}\r\n\r\n.close {\r\n        font-size: 28px;\r\n        opacity: 0.8;\r\n        margin: 3px 10px 9px 11px;\r\n        float: left;\r\n        display: block;\r\n        position: absolute;\r\n} \r\n\r\n.close img {\r\n        width: 18px;\r\n        height: 18px;\r\n}\r\n\r\n.category {\r\n        padding: 0 10px 0 10px;\r\n        border-bottom: solid 1px rgba(136, 136, 136, .2);\r\n        box-shadow: 4px 9px 14px rgba(136, 136, 136, .5);\r\n        line-height: 60px;\r\n        min-height: 60px;\r\n}\r\n\r\n.category:hover {\r\n        color: #7d7185; \r\n}\r\n\r\n.category button {\r\n        color: rgba(0,0,0,0.7);\r\n        font-family: 'Muli', \"Helvetica\", Arial, sans-serif;\r\n        margin: 0 0 0 65px;       \r\n}\r\n\r\n.category button:hover {\r\n        color: #7d7185;      \r\n}\r\n\r\nhr {\r\n        width: 250px;\r\n        margin: 15px auto;\r\n}\r\n\r\n.articletitles {\r\n        margin: 0 0 15px 0;\r\n}\r\n\r\nbutton {\r\n        background: none;\r\n        border: none;\r\n}\r\n\r\n.articlelink {\r\n        margin: 0 0 0 20px;\r\n        color: #000;\r\n}\r\n\r\n.articlelink:hover {\r\n        color: #7d7185; \r\n}\r\n\r\n.glyphicon-triangle-right {\r\n       \r\n        color:  #FBC02D;\r\n}\r\n\r\n.articletittle {\r\n        margin: 0 0 0 65px;\r\n        text-align: left;\r\n}\r\n\r\n@media all and (max-width: 767px){\r\n.Makala-items-bed {\r\n        border-top: none;\r\n        width: 100%;\r\n        position: absolute;\r\n        top: 0;\r\n        left: 0;   \r\n        right: 0;\r\n        margin-right: 0;  \r\n        margin-left: 103%;\r\n         }\r\n\r\n.close {\r\n        \r\n        position: relative;\r\n} \r\n\r\nhr {\r\n        width: 250px;\r\n        margin: 0 auto;\r\n}\r\n\r\n.Makala-items-bed a {\r\n        margin: 0 0 0 10px;\r\n}\r\n\r\nbutton {\r\n        font-size: 13px;\r\n}\r\n\r\na button {\r\n        color: #FBC02D;\r\n}\r\n\r\n.articletittle {\r\n        margin-bottom: 15px;\r\n}\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wazazi/makala-contents/makala-contents.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"Makala-items-bed\" [@flyInOut]=\"'in'\" *ngIf='display'>\n     <div class=\"closebox\"><button class=\"close\" (click)=\"ifdisplay(); closeAllAgeCategories()\"><img src=\"../../../assets/images/close.png\"></button></div>\n      <div *ngFor= \"let c of category; let i = index\">      <!--for each age category -->\n        <div  class=\"category\" (mouseenter)=\"getMakala(c.id)\" (mouseenter)=\"displayThisItem(i)\" (mouseleave)=\"closeThisItem(i)\">\n            \n                <button>{{c.category_name}} </button> \n      \n          <!--<div id = \"{{c.id}}\" [hidden]=\"!toggle[i]\">   routerLink=\"makala\" routerLinkActive=\"active\"-->\n               <div  *ngIf= \"toggle[i]\" class=\"articletitles\">            <!--for each specific article's title-->\n                <div *ngFor= \"let m of makala\">\n                  \n                   <a routerLink=\"/wazazi/makala/{{m.id}}\" (click)=\"getArticle(m.id)\" (click)=\"ifdisplay (); closeAllAgeCategories()\" \n                    class=\"articlelink\">\n                    <button class=\"articletittle\" (click)=\"onClick($event)\">\n                    <!--<i class=\"glyphicon glyphicon-triangle-right\"></i>  \"-->\n                     {{m.title}}      \n                    </button>\n                   </a>   \n\n                </div>\n               </div>\n          <!--</div> -->\n        </div> \n      </div>\n      \n</div>\n\n\n\n\n      \n\n"

/***/ }),

/***/ "../../../../../src/app/wazazi/makala-contents/makala-contents.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_makalatitles_service__ = __webpack_require__("../../../../../src/app/core/makalatitles.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MakalaContentsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import fade in animation
//import { slideInOutAnimation } from './../animation';
var MakalaContentsComponent = (function () {
    function MakalaContentsComponent(makalatitlesService) {
        var _this = this;
        this.makalatitlesService = makalatitlesService;
        this.display = false;
        this.toggle = {};
        this.isUnchanged = true;
        this.display1 = false;
        this.myEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.makala = makalatitlesService.makala;
        this._subscription = this.makalatitlesService.fetchedArticles.subscribe(function (value) {
            _this.makala = value;
            //this.setToNull();
        });
        this.subscription = this.makalatitlesService.fetchedCategories.subscribe(function (value) {
            _this.category = value;
        });
    }
    // setToNull() { 
    //    var that = this;
    //    setTimeout(function() {
    //      that.makala = [];
    //       console.log(that.makala + 'this code was hit')
    // }, 2000);
    // }
    MakalaContentsComponent.prototype.displayThisItem = function (i) {
        for (var a = 0; a < this.category.length; a++) {
            if (i === a) {
                this.toggle[i] = !this.toggle[i];
            }
            else {
                this.toggle[a] = false;
            }
        }
    };
    MakalaContentsComponent.prototype.closeThisItem = function (i) {
        this.toggle[i] = false;
    };
    MakalaContentsComponent.prototype.performSearch = function (text) {
        this.makalatitlesService.performSearch(text);
    };
    MakalaContentsComponent.prototype.endDisplay = function () {
        this.display = false;
    };
    MakalaContentsComponent.prototype.ifdisplay = function () {
        this.makalatitlesService.getMakalatitles();
        this.display = !this.display;
    };
    MakalaContentsComponent.prototype.closeAllAgeCategories = function () {
        this.toggle = [];
    };
    MakalaContentsComponent.prototype.onClick = function (button) {
        this.myEvent.emit(button);
    };
    MakalaContentsComponent.prototype.getArticle = function (id) {
        this.makalatitlesService.getArticle(id); //fetch an article, solving swithing articles issue
    };
    MakalaContentsComponent.prototype.getMakala = function (id) {
        this.makala = null;
        this.makalatitlesService.getMakala(id); //if data wasnt loaded on component's initialisation
        //costs bandwidth however
        //   if (!this.display1) {
        //   this.makalatitlesService.getMakala(id);
        //  }
        // }
        // this.display1 = !this.display1;
    };
    MakalaContentsComponent.prototype.ngOnInit = function () {
        this.makalatitlesService.getMakalatitles();
    };
    return MakalaContentsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], MakalaContentsComponent.prototype, "myEvent", void 0);
MakalaContentsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-makala-contents',
        template: __webpack_require__("../../../../../src/app/wazazi/makala-contents/makala-contents.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wazazi/makala-contents/makala-contents.component.css")],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["a" /* trigger */])('flyInOut', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["b" /* state */])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ transform: 'translateX(-103%)' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* transition */])('void => *', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ transform: 'translateX(100%)' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(700)
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* transition */])('* => void', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(700, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ transform: 'translateX(100%)' }))
                ])
            ])
        ],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__core_makalatitles_service__["a" /* MakalatitlesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_makalatitles_service__["a" /* MakalatitlesService */]) === "function" && _a || Object])
], MakalaContentsComponent);

var _a;
//# sourceMappingURL=makala-contents.component.js.map

/***/ }),

/***/ "../../../../../src/app/wazazi/makala-navigation/makala-navigation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".clear {\r\n       clear: both;            /* to solve float overlapping issues */ \r\n}\r\n\r\n /*.Makala-items-bed {\r\n        height:auto;\r\n        width: 180px;\r\n        padding: 10px 10px 0 10px;\r\n        margin-top: 0px;\r\n        margin-right:20%;\r\n        word-wrap: break-word;\r\n        background-color: #FFF;\r\n        border-top: 30px solid #ffb6c1;\r\n        border-bottom: 3px solid #652f85;\r\n        box-shadow: 0px 1.5px 4px 0px #000;\r\n        position: absolute;\r\n        top: -30px;\r\n        left:740px;\r\n        z-index: 1000;\r\n        float: right;\r\n }*/\r\n\r\n .entry1 {\r\n        margin-top: -35px; \r\n        text-align:center;  \r\n }\r\n\r\n.Makala-items-bed a {\r\n        color: #000;\r\n}\r\n\r\n.Makala-items-bed a:hover {\r\n        -webkit-text-decoration-line: none;\r\n                text-decoration-line: none;\r\n        color: blue;\r\n}\r\n\r\nbutton {\r\n        background: none;\r\n        border: none;\r\n}\r\n\r\n.articletittle {\r\n        margin: 0 0 0 55px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wazazi/makala-navigation/makala-navigation.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n      <div class=\"Makala-items-bed\">\r\n      <div class=\"entry1\">\r\n      <a href=\"#\" style=\"color:#fff;\">g{{category.category_name}}</a>\r\n      </div>\r\n      <br>\r\n      <div *ngFor= \"let m of makala\">\r\n       <button class=\"articletittle\" (click)=\"onClick($event)\" (click)=\"getArticle(m.id)\"> {{m.title}} </button>\r\n       <hr>\r\n      </div>\r\n      <hr>\r\n      \r\n        \r\n      </div>\r\n\r\n    <div class=\"container\">\r\n        \r\n     "

/***/ }),

/***/ "../../../../../src/app/wazazi/makala-navigation/makala-navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_makalatitles_service__ = __webpack_require__("../../../../../src/app/core/makalatitles.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MakalaNavigationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MakalaNavigationComponent = (function () {
    function MakalaNavigationComponent(makalatitlesService, router) {
        var _this = this;
        this.makalatitlesService = makalatitlesService;
        this.router = router;
        this.articleEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.makala = makalatitlesService.makala;
        this._subscription = this.makalatitlesService.fetchedArticles.subscribe(function (value) {
            _this.makala = value;
        });
        this.makalatitle = makalatitlesService.makalatitle;
        this.subscription = makalatitlesService.nameChange.subscribe(function (value) {
            _this.makalatitle = value;
        });
        this.category = makalatitlesService.category;
        this.subscription = makalatitlesService.fetchedCategories.subscribe(function (value) {
            _this.category = value;
        });
    }
    MakalaNavigationComponent.prototype.onClick = function (button) {
        this.articleEvent.emit(button);
    };
    MakalaNavigationComponent.prototype.getArticle = function (id) {
        this.makalatitlesService.getArticle(id);
    };
    MakalaNavigationComponent.prototype.ngOnInit = function () {
    };
    return MakalaNavigationComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], MakalaNavigationComponent.prototype, "articleEvent", void 0);
MakalaNavigationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-makala-navigation',
        template: __webpack_require__("../../../../../src/app/wazazi/makala-navigation/makala-navigation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wazazi/makala-navigation/makala-navigation.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__core_makalatitles_service__["a" /* MakalatitlesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_makalatitles_service__["a" /* MakalatitlesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], MakalaNavigationComponent);

var _a, _b;
//# sourceMappingURL=makala-navigation.component.js.map

/***/ }),

/***/ "../../../../../src/app/wazazi/makala/makala.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n .clear {\n       clear: both;            /* to solve float overlapping issues */ \n}\n .ccontainer {\n        padding:25px 0 80px 5px;\n }\n\n.ccontainer a {\n        float: right;\n        margin-left: 40px;\n        margin-right: 20px;\n        \n}\n\n.box {\n        width: 100%;\n        padding:10px 0 90px 0;\n        background-color: #fff;\n        border: none;\n        border-radius: 4px;\n        margin-bottom: 20px;\n        box-shadow: 1px 0.5px 24px -9px #000;\n}\n\n.box p {\n        color: #333;\n        line-height: 185%;\n        font-size: 18px;\n        margin: 0 40px;\n}\n\n.box div p {\n        color: #050709;\n        line-height: 165%;\n        font-size: 18px;\n        margin: 15px 5vw;\n}\n\n\n.box h3 {\n       font-size: 2.2em;\n       /*color: rgba(0, 0, 0, 0.8);*/\n       color: #050709;\n       margin: 0 5vw;\n       font-family: Gidole, 'Muli', \"Helvetica\", Arial, sans-serif;\n}\n\n.oneimage {\n        height: 420px;\n        margin-top: 15px;\n        float: left; \n        clear: both;\n        width: 100%; \n        margin-left: 0;\n        margin-bottom: 20px;\n}\n\n.jiungebutton {\n        color:rgba(90,76,60,0.8);\n        height: 20px;\n        width: auto;\n       /* margin-right: 0px; */ \n        margin: 0 10px 0 0;\n        float: right;\n        background: none;\n        border: none;\n }\n\n.jiungebutton:hover {\n        color: rgba(101, 47, 133, 1);\n        text-decoration: underline;\n        /*height: 25px; */\n}\n\n.cbox { \n        color: #232323;\n        padding: 20px 20px 15px 20px;\n        width: 80%;\n        border: 1px solid #d4d4d4;\n        border-radius: 5px;\n        background-color: #efefef;\n}\n\n.cbox h3 {\n        margin-top: 0px;\n}\n\n.cbox hr {\n        margin: 10px 0 38px 0;\n        border-top: 1px solid #d4d4d4;\n}\n\n.shareicon {\n       height: 18px;\n       width: 18px;\n       margin: 0 40px;\n       float: right;\n }\n\nform  {\n        width: 95%;\n}\n\n.field {\n       margin-top: 20px;\n}\n\n.field label {\n        margin-top: 0px;\n}\n\n#respond {\n        margin-top: 0;\n         }\n\n#respond input[type= 'text'],\n#respond input[type= 'email'],\n#respond textarea {\n        margin-bottom: 10px;\n        display: block;\n        width: 100%;\n\n        border: 1px solid rgba(0, 0, 0, 0.1);\n        border-radius: 5px;\n\n        line-height: 1.4em;\n                  }\n\n.submitbutton {\n        color: #fff;\n        background-color: rgba(101, 47, 133, 0.8);\n        border: none;\n        border-radius: 3px;\n        float: right;\n        padding: 6px 13px;\n        margin: 10px 0 0 0; \n}\n\n.avatar {\n        height: 80px;\n        width: 80px;\n        border: 2px solid #fff;\n        border-radius: 3px;\n}\n\n.cdbox { \n        color: #232323;\n        width: 80%;\n        border: 1px solid #d4d4d4;\n        border-radius: 5px;\n        background-color: #fff;\n        margin-top: 20px;\n}\n\n.cmt {\n        margin: 0 0;\n}\n\n.cmtavatar {\n       \n        padding: 0 12px 0 0;\n}\n\n.cmtavatarin {\n        background-color: #efefef;\n        width: auto;\n        padding: 5px 5px 10px 5px;\n        \n}\n\n.cmtavatarin p {\n        color: darkgrey;\n        margin: 3px 0 0 0;\n        font-size: 17px;\n}\n\n.cmttext {\n        color: #232323;\n        padding: 5px 0;   \n}\n\n.cmttext p {\n        font-size: 14px;\n}\n      \n@media all and (max-width: 768px){\n\n.ccontainer {\n        padding:3vh 0 80px 0;\n }\n\n.oneimage {\n                width: 100%; \n                height: auto;      \n        }\n\n.FBSHARE {\n               float: left;\n}\n\n.FBSHARE a {\n                margin: 0 20px 0 0; \n}\n\n.FBSHARE a .shareicon {\n        margin: 0 20px 0 5px; \n}\n\n.TWITTERSHARE {\n                margin: 0 20px 0 0;\n}\n\n.shareicon {\n                float: right;\n          }\n\n\n.box {   \n                border: none;\n        }\n\n\n.box div p {\n       \n        line-height: 185%;\n        font-size: 14px;\n        margin: 15px 5vw;\n}\n\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wazazi/makala/makala.component.html":
/***/ (function(module, exports) {

module.exports = "<main>\n     \n    <div id=\"fb-root\"></div>\n<script>(function(d, s, id) {\n  var js, fjs = d.getElementsByTagName(s)[0];\n  if (d.getElementById(id)) return;\n  js = d.createElement(s); js.id = id;\n  js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.10';\n  fjs.parentNode.insertBefore(js, fjs);\n}(document, 'script', 'facebook-jssdk'));</script>  \n\n\n    <div class=\"ccontainer\">\n      <div class=\"box\">\n      <div *ngFor= \"let a of article; let i = index\" >\n      <h3> {{a.title}}</h3>\n          \n          <p> {{a.body}} </p>\n      \n\n      <div><p>Nunc viverra magna quis nisi blandit euismod. Praesent id lorem molestie, dictum\n         orci non, porttitor ex. Cras sagittis urna eget hendrerit tristique. Donec dui \n         risus, facilisis vel posuere eu, pulvinar a tellus. Morbi non eros sem. Donec et \n         vestibulum est, a dignissim felis. et porttitor ipsum \n         augue sed lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. \n         Nunc viverra magna quis nisi blandit euismod. Praesent id lorem molestie, dictum\n         orci non, porttitor ex. Cras sagittis urna eget hendrerit tristique. Donec dui \n         risus, facilisis vel posuere eu, pulvinar a tellus. Morbi non eros sem. Donec et \n         vestibulum est, a dignissim felis.Vestibulum ultrices varius eros, finibus cursus\n          lacus blandit sed. Cras volutpat ut risus non bibendum. Sed ut bibendum sem.</p>\n      </div>\n        <div><p>Nunc viverra magna quis nisi blandit euismod. Praesent id lorem molestie, dictum\n         orci non, porttitor ex. Cras sagittis urna eget hendrerit tristique. Donec dui \n         risus, facilisis vel posuere eu, pulvinar a tellus. Morbi non eros sem. Donec et \n         vestibulum est, a dignissim felis. et porttitor ipsum \n         augue sed lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. \n         Nunc viverra magna quis nisi blandit euismod. Praesent id lorem molestie, dictum\n         orci non, porttitor ex. Cras sagittis urna eget hendrerit tristique. Donec dui \n         risus, facilisis vel posuere eu, pulvinar a tellus. Morbi non eros sem. Donec et \n         vestibulum est, a dignissim felis.Vestibulum ultrices varius eros, finibus cursus\n          lacus blandit sed. Cras volutpat ut risus non bibendum. Sed ut bibendum sem.</p>\n      </div>\n       <div><img src=\"{{a.image_url}}\" alt=\"Fruit View\"\n           class=\"oneimage\"> \n       </div>\n      <div class=\"clear\"></div>\n  \n       <img src=\"../../../../assets/images/twitter og.png\" alt=\"Fruit View\"\n           class=\"shareicon socialmedia\" ceiboShare [twitter] =\"{url: socialShareUrl[i], text: defaultSocialShareText[i]}\">\n           \n       <img src=\"../../../../assets/images/facebook og.png\" alt=\"Fruit View\"\n           (click) = \"specifyUrl(b.id)\" class=\"shareicon socialmedia\" ceiboShare  [facebook] =\"{u: socialShareUrl[i]}\">\n   \n\n      <!--<div class=\"fb-share-button FBSHARE\" data-href=\"http://jualishebora.gq/wazazi/blog-section\" \n      data-layout=\"button_count\" data-size=\"small\" data-mobile-iframe=\"false\">\n      <a class=\"fb-xfbml-parse-ignore\" target=\"_blank\" \n      href=\"https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fjualishebora.gq%2Fwazazi%2Fblog-section&amp;src=sdkpreparse\">\n      <img src=\"../../../../assets/images/facebok1.png\" alt=\"Fruit View\"\n           class=\"shareicon\"></a></div> -->\n       \n      <!-- <button class=\"jiungebutton\" \n       (click)= \"togglemyId()\">Jiunge na program\n       </button> -->\n       <!--<app-taharifa-kujiunga *ngIf=\"thanksforjoiningprogram\" (closeModal)=\"closeModal($event)\"></app-taharifa-kujiunga>\n       <app-kujiunga *ngIf=\"showmyId\" (myevenT)=\"myevenT($event)\" (closeButtonClicked)=\"closeButtonClicked($event)\"></app-kujiunga>\n       -->\n       </div>\n       <app-taharifa-kujiunga *ngIf=\"thanksforjoiningprogram\" (closeModal)=\"closeModal($event)\"></app-taharifa-kujiunga>\n       <app-kujiunga *ngIf=\"showmyId\" (myevenT)=\"myevenT($event)\" (closeButtonClicked)=\"closeButtonClicked($event)\"></app-kujiunga>\n      </div>\n    </div>\n     \n\n   \n        <!-- <button (click)=\"toggleId()\">Toggle</button> --> \n    </main>\n"

/***/ }),

/***/ "../../../../../src/app/wazazi/makala/makala.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_makalatitles_service__ = __webpack_require__("../../../../../src/app/core/makalatitles.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_blogpost_service__ = __webpack_require__("../../../../../src/app/core/blogpost.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_passevents_service__ = __webpack_require__("../../../../../src/app/core/passevents.service.ts");
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


 //obtain absolute page path   ;never used



var MakalaComponent = (function () {
    function MakalaComponent(blogpostService, makalatitlesService, passeventsService, activatedRoute, document) {
        var _this = this;
        this.blogpostService = blogpostService;
        this.makalatitlesService = makalatitlesService;
        this.passeventsService = passeventsService;
        this.activatedRoute = activatedRoute;
        this.searchInputStatus = false;
        this.showmyId = false;
        this.thanksforjoiningprogram = false;
        this.defaultSocialShareText = [];
        this.socialShareUrl = [];
        this.blogpost = blogpostService.blogpost;
        this.subscription = this.blogpostService.fetchedBlogpost.subscribe(function (value) {
            _this.blogpost = value;
        });
        this.article = makalatitlesService.article;
        this._subscription = this.makalatitlesService.fetchedArticle.subscribe(function (value) {
            _this.article = value;
            value.forEach(function (item, index) {
                _this.socialShareParameters(item, index);
            });
        });
    }
    MakalaComponent.prototype.ngOnInit = function () {
        this.getArticleViaRouter();
        this.removeSearchInput();
    };
    MakalaComponent.prototype.removeSearchInput = function () {
        this.passeventsService.exitblogsection(this.searchInputStatus);
    };
    MakalaComponent.prototype.socialShareParameters = function (item, index) {
        this.socialShareUrl[index] = document.location.href;
        this.defaultSocialShareText[index] = item.title;
    };
    MakalaComponent.prototype.togglemyId = function () {
        this.showmyId = !this.showmyId;
    };
    MakalaComponent.prototype.myevenT = function ($event) {
        this.showmyId = !this.showmyId;
        this.thanksforjoiningprogram = !this.thanksforjoiningprogram;
    };
    MakalaComponent.prototype.closeButtonClicked = function ($event) {
        this.showmyId = !this.showmyId;
    };
    MakalaComponent.prototype.closeModal = function ($event) {
        this.thanksforjoiningprogram = !this.thanksforjoiningprogram;
    };
    MakalaComponent.prototype.getArticleViaRouter = function () {
        var id = +this.activatedRoute.snapshot.paramMap.get('id');
        this.makalatitlesService.getArticle(id);
    };
    return MakalaComponent;
}());
MakalaComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-makala',
        template: __webpack_require__("../../../../../src/app/wazazi/makala/makala.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wazazi/makala/makala.component.css")],
    }),
    __param(4, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["d" /* DOCUMENT */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__core_blogpost_service__["a" /* BlogpostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__core_blogpost_service__["a" /* BlogpostService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__core_makalatitles_service__["a" /* MakalatitlesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_makalatitles_service__["a" /* MakalatitlesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__core_passevents_service__["a" /* PasseventsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__core_passevents_service__["a" /* PasseventsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, Object])
], MakalaComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=makala.component.js.map

/***/ }),

/***/ "../../../../../src/app/wazazi/makala1/makala1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wazazi/makala1/makala1.component.html":
/***/ (function(module, exports) {

module.exports = "<main>\n     \n    <div id=\"fb-root\"></div>\n<script>(function(d, s, id) {\n  var js, fjs = d.getElementsByTagName(s)[0];\n  if (d.getElementById(id)) return;\n  js = d.createElement(s); js.id = id;\n  js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.10';\n  fjs.parentNode.insertBefore(js, fjs);\n}(document, 'script', 'facebook-jssdk'));</script>  \n\n<div class=\"ccontainer\">\n      <div class=\"box\">\n      <h3> dgh</h3>\n          \n           \n  <div><p style=\"margin: 10px 0 23px 0;\">Nunc viverra magna quis nisi blandit euismod. Praesent id lorem molestie, dictum\n         orci non, porttitor ex. Cras sagittis urna eget hendrerit tristique. Donec dui \n         risus, facilisis vel posuere eu, pulvinar a tellus. Morbi non eros sem. Donec et \n         vestibulum est, a dignissim felis. et porttitor ipsum \n         augue sed lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. \n         Nunc viverra magna quis nisi blandit euismod. Praesent id lorem molestie, dictum\n         orci non, porttitor ex. Cras sagittis urna eget hendrerit tristique. Donec dui \n         risus, facilisis vel posuere eu, pulvinar a tellus. Morbi non eros sem. Donec et \n         vestibulum est, a dignissim felis.Vestibulum ultrices varius eros, finibus cursus\n          lacus blandit sed. Cras volutpat ut risus non bibendum. Sed ut bibendum sem.</p>\n      </div>\n        <div><p style=\"margin: 10px 0 23px 0;\">Nunc viverra magna quis nisi blandit euismod. Praesent id lorem molestie, dictum\n         orci non, porttitor ex. Cras sagittis urna eget hendrerit tristique. Donec dui \n         risus, facilisis vel posuere eu, pulvinar a tellus. Morbi non eros sem. Donec et \n         vestibulum est, a dignissim felis. et porttitor ipsum \n         augue sed lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. \n         Nunc viverra magna quis nisi blandit euismod. Praesent id lorem molestie, dictum\n         orci non, porttitor ex. Cras sagittis urna eget hendrerit tristique. Donec dui \n         risus, facilisis vel posuere eu, pulvinar a tellus. Morbi non eros sem. Donec et \n         vestibulum est, a dignissim felis.Vestibulum ultrices varius eros, finibus cursus\n          lacus blandit sed. Cras volutpat ut risus non bibendum. Sed ut bibendum sem.</p>\n      </div>\n         <div><img src=\"../../../../assets/images/happy mom.jpg\" alt=\"Fruit View\"\n           class=\"oneimage\"> \n       </div>\n      <div class=\"clear\"></div>\n       \n       <img src=\"../../../../assets/images/twitter.png\" alt=\"Fruit View\"\n           class=\"shareicon\" ceiboShare  =\"{u: repoUrl}\">\n\n      <div class=\"fb-share-button\" data-href=\"http://jualishebora.ga/wazazi/blog-section\" \n      data-layout=\"button_count\" data-size=\"small\" data-mobile-iframe=\"false\">\n      <a class=\"fb-xfbml-parse-ignore\" target=\"_blank\" \n      href=\"https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fjualishebora.ga%2Fwazazi%2Fblog-section&amp;src=sdkpreparse\">\n      <img src=\"../../../../assets/images/facebok.png\" alt=\"Fruit View\"\n           class=\"shareicon\"></a></div>\n       \n       <button class=\"jiungebutton\" \n       (click)= \"togglemyId()\">Jiunge na program\n       </button>\n       <!--<app-taharifa-kujiunga *ngIf=\"thanksforjoiningprogram\" (closeModal)=\"closeModal($event)\"></app-taharifa-kujiunga>\n       <app-kujiunga *ngIf=\"showmyId\" (myevenT)=\"myevenT($event)\" (closeButtonClicked)=\"closeButtonClicked($event)\"></app-kujiunga>\n       -->\n</div>\n</div>\n</main>"

/***/ }),

/***/ "../../../../../src/app/wazazi/makala1/makala1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Makala1Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Makala1Component = (function () {
    function Makala1Component() {
    }
    Makala1Component.prototype.ngOnInit = function () {
    };
    return Makala1Component;
}());
Makala1Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-makala1',
        template: __webpack_require__("../../../../../src/app/wazazi/makala1/makala1.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wazazi/makala1/makala1.component.css")]
    }),
    __metadata("design:paramtypes", [])
], Makala1Component);

//# sourceMappingURL=makala1.component.js.map

/***/ }),

/***/ "../../../../../src/app/wazazi/nunuabidhaa/nunuabidhaa.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.clear {\n    clear: both;            /* to solve float overlapping issues */ \n}\n\n.container {\n     background-color: gray;\n     box-shadow: 1px 6.5px 12px 1px #000;\n     padding-top: 3%;\n     padding-right: 5%;\n}\n\n.modal {\n     display: block;\n     position: fixed;\n     z-index: 10000;\n     left: 0;\n     top: 0;\n     width: 100%;\n     height: 100%;\n     overflow: auto;\n     background-color: rgba(0, 0, 0, .4);\n     /*background-color: rgb(70, 26, 66); fallback color */\n}\n\n.close {\n     margin: 3px 5px;\n     color: rgba(0,0,0,0.8);\n}\n\n.jiungebutton {\n     color: #ffb6c1;\n     font-size: 16px;\n     height: 20px;\n     width: auto;\n     margin-right: 0px; \n     background: none;\n     border: none;\n}\n\n.modal-header {\n     font-size: 15px;\n     padding: 23px 40px;\n     color: #ffffff;\n     border-bottom:  none;\n     border-top-left-radius: 6px;\n     border-top-right-radius:6px\n     }\n\n.modallinks :hover {\n     font-size: 17.4px;\n}\n\n.modal-body {padding: 2px 16px;\n          border:  none;\n     }\n\n.contactfield{  \n     width: 270px;\n     display: block;\n     margin-top: 10px;\n     margin-left: auto;\n     margin-right: auto;\n}\n\ninput::-webkit-input-placeholder {\ncolor:   #666565;\n}\n\ninput:-ms-input-placeholder {\ncolor:   #666565;\n}\n\ninput::placeholder {\ncolor:   #666565;\n}\n\n.inputErrormessage {\n     padding: 0 0 0 40px;\n}\n\n.modal-footer {\n     color: #ffffff;\n     font-size: 17px;\n     padding: 2px 16px;\n     border-top:  none;\n     margin-top: 45px;\n     border-bottom-left-radius: 6px;\n     border-bottom-right-radius: 6px\n     }\n\n.sendbutton {\n     color: #ffffff;\n     margin-right: 24px;\n     margin-bottom: 8px;\n     background: none; \n     border: none;\n}\n\n.modal-content {\n position: relative;\n background-color: rgba(70, 26, 66, .9);\n margin: auto;\n margin-top: 165px;\n padding: 0;\n border: 1px solid #888;\n width: 65%;\n box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\n -webkit-animation-name: animatetop;\n -webkit-animation-duration: 0.4s;\n animation-name: animatetop;\n animation-duration: 0.4s\n}\n\ninput {\n width: 35%;\n padding-left: 5px;\n border: 1px solid #652f85;\n border-radius: 4px;\n}\n\n:-moz-placeholder {\n color: rgba(0,0,0,0.8);\n}\n\n@-webkit-keyframes animatetop {\n from {top: -300px; opacity: 0}\n to {top: 0; opacity: 1}\n}\n\n@keyframes animatetop {\n from {top: -300px; opacity: 0}\n to {top: 0; opacity: 1}\n}\n\n.inputErrormessage {\n  color: orangered;\n  background: none;\n  margin: 0 0 0 233px;\n}\n\n.close {\n     float: right;\n     font-size: 28px;\n     font-weight: bold;\n     position: absolute;\n     z-index: 10000;\n     right: 10px;\n}\n\n.close:hover,\n.close:focus {\n     color: #ffffff;\n     text-decoration: none;\n     cursor: pointer;\n}\n\n\n@media all and (max-width: 767px){\n      .modal {\n     display: block;\n     position: fixed;\n     z-index: 1000;\n     left: 0;\n     top: 0;\n     width: 100%;\n     height: 100%;\n     overflow: auto;\n     \n}\n\n      .modal-content {\n     position: absolute;\n     background-color: rgba(0,0,0,0.8);\n     margin: 0 0 0 15%;\n     padding: 0;\n     border: 1px solid #888;\n     width: 70%;\n     bottom: 130px;\n     box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\n     -webkit-animation-name: animatetop;\n     -webkit-animation-duration: 0.4s;\n     animation-name: animatetop;\n     animation-duration: 0.4s\n} \n\n.modal-header {\n     padding-bottom: 0;\n}\n\n.modal-header p {\n     font-size: 13px;\n}\n\n.modal-header p .jiungebutton{\n     font-size: 14px;\n     padding-left: 0;\n}\n\n.modal-body input {\n     width: 90%;\n}\n\n.inputErrormessage {\n     margin-left: 15px;\n     padding: 0 0 0 8px\n}\n\ninput::-webkit-input-placeholder {\n     font-size: 13px;\n}\n\ninput:-ms-input-placeholder {\n     font-size: 13px;\n}\n\ninput::placeholder {\n     font-size: 13px;\n}\n\n\n.modal-footer {\n     color: #ffffff;\n     font-size: 14px;\n     padding: 2px 16px;\n     border-top:  none;\n     margin-top: 30px;\n     border-bottom-left-radius: 6px;\n     border-bottom-right-radius: 6px\n     }\n\n}\n\n\n@media all and (max-width: 500px){\n.modal-content {\n     position: absolute;\n     background-color: rgba(0,0,0,0.8);\n     margin: 0 0 0 15%;\n     padding: 0;\n     border: 1px solid #888;\n     width: 70%;\n     bottom: 50px;\n     box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\n     -webkit-animation-name: animatetop;\n     -webkit-animation-duration: 0.4s;\n     animation-name: animatetop;\n     animation-duration: 0.4s\n}       \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wazazi/nunuabidhaa/nunuabidhaa.component.html":
/***/ (function(module, exports) {

module.exports = " <!-- Modal -->\n <div id=\"myModal\" class=\"modal\">\n\n  <div class=\"modal-content\">\n    <button class=\"close\" (click)=\"exitModal($event)\">&times;</button>\n    <div class=\"modal-header\">\n       <p>Tafadahli ingiza nammba ya simu hapa, tutakujulisha jinsi ya kupata bidhaa hii\n       </p>\n    </div>\n    <div class=\"modal-body\"> \n\n\n      \n      <form #kujiungaform=\"ngForm\">\n       <input type=\"text\" name=\"commenttext\" class=\"contactfield\" id=\"jina\" value=\"\"  [placeholder]=\"ordertext\">\n        <!-- <div *ngIf=\"(jina.errors && (jina.dirty || jina.touched)) || (isInputdataMissing && jina.errors)\" class=\"alert alert-danger\" class=\"inputErrormessage\">\n          <div [hidden]=\"!jina.errors.required\" >\n              Tafadhari jaza Jina lako\n          </div>\n        </div> -->\n\n       \n      <input type=\"text\" name=\"phonenumber\" id=\"phone\" \n        class=\"contactfield\" value=\"\"  placeholder=\"Namba ya Simu\" \n        required [(ngModel)]=\"order.phonenumber\" #phone=\"ngModel\">\n        <div *ngIf=\"(phone.errors && (phone.dirty || phone.touched))|| (isInputdataMissing && phone.errors)\" class=\"alert alert-danger\" class=\"inputErrormessage\">\n          <div [hidden]=\"!phone.errors.required\" >\n              Tafadhari jaza namba yako ya simu\n          </div>\n        </div>  \n      </form>\n\n\n    </div>\n   <div class=\"modal-footer\">\n        <a class=\"modallinks\"><button class=\"sendbutton\" (click)=\"closeModal($event)\" (click)=\"placeAnOrder()\" \n                               [disabled]=\"!kujiungaform.form.valid\"><button class=\"sendbutton\"> <img src=\"./../../../assets/images/send-button.png\"></button> </button></a> <!--(click)=\"alertUser()\" method not yet implemented-->\n    </div>\n  </div>\n </div>\n <br><br>\n <br><br><br><br>\n <br><br><br><br>\n\n"

/***/ }),

/***/ "../../../../../src/app/wazazi/nunuabidhaa/nunuabidhaa.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_bidhaa_service__ = __webpack_require__("../../../../../src/app/core/bidhaa.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order__ = __webpack_require__("../../../../../src/app/order.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NunuabidhaaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NunuabidhaaComponent = (function () {
    function NunuabidhaaComponent(bidhaaService) {
        this.bidhaaService = bidhaaService;
        this.order = new __WEBPACK_IMPORTED_MODULE_2__order__["a" /* Order */]();
        this.closeButtonClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.myevenT = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    NunuabidhaaComponent.prototype.ngOnInit = function () {
    };
    NunuabidhaaComponent.prototype.exitModal = function (button) {
        this.closeButtonClicked.emit(button);
        console.log('exitmodal method');
    };
    NunuabidhaaComponent.prototype.closeModal = function (button) {
        this.myevenT.emit(button);
    };
    NunuabidhaaComponent.prototype.placeAnOrder = function () {
        this.order.ordertext = this.ordertext;
        this.bidhaaService.createOrder(this.order)
            .then(function (order) { });
    };
    return NunuabidhaaComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], NunuabidhaaComponent.prototype, "ordertext", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], NunuabidhaaComponent.prototype, "closeButtonClicked", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], NunuabidhaaComponent.prototype, "myevenT", void 0);
NunuabidhaaComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-nunuabidhaa',
        template: __webpack_require__("../../../../../src/app/wazazi/nunuabidhaa/nunuabidhaa.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wazazi/nunuabidhaa/nunuabidhaa.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_bidhaa_service__["a" /* BidhaaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_bidhaa_service__["a" /* BidhaaService */]) === "function" && _a || Object])
], NunuabidhaaComponent);

var _a;
//# sourceMappingURL=nunuabidhaa.component.js.map

/***/ }),

/***/ "../../../../../src/app/wazazi/safepipe.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    return SafePipe;
}());
SafePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'safepipe',
        pure: true
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _a || Object])
], SafePipe);

var _a;
//# sourceMappingURL=safepipe.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/wazazi/shuhuda/shuhuda.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n .container {\n    font-family: montserrat-regular;\n    background-color: #f4f3ef;\n    \n    width: 1100px;\n    padding:25px 65px 0px 65px;\n    margin: 0 0 50px 0\n}\n\n .box {\n        width: 100%;\n        padding:50px;\n        margin-left: 8%;\n        background-color: #fff;\n        \n        border-bottom: none;\n        \n}\n\n .box > p {\n        margin: 0 0 0 38px;\n        font-size: 1.4em;\n }\n \n .box > hr {\n        margin: 10px 0 45px 0;\n }\n\n .box .row div {\n        padding: 10px 17px;\n }\n \n .col-sm-3 {\n        margin: 10px 35px;\n }\n\n .greyf2gbg {\n        color: #cdcdcd;\n        background-color: #fff;\n }\n\n .greyb2n {\n        color: #fff;\n        background-color: rgba(169, 169, 169, 0.8);;\n }\n\n .whiteb2gf {\n        background-color: #fff;\n }\n\n .n2n {\n       color: inherit;\n       background-color: #fff;\n }\n\n .n2n1 {\n       color: inherit;\n       background-color: #fff;\n }\n\n .n2gf {\n       color: inherit;\n       background-color: #fff;\n }\n\n .purpleb2pif {\n        color: #fff;\n        background-color:rgba(101, 47, 133, 0.5) \n }\n\n .pinkf2pub {\n        color: #ffb6c1;\n        background-color:#fff; \n }\n\n .pinkf2puf {\n        color: #ffb6c1;\n        background-color:#fff; \n }\n\n .pinkf2pib {\n        color: #ffb6c1;\n        background-color:#fff; \n }\n\n .greyf2gbg:hover {\n    color: #fff;\n    background-color: rgba(169, 169, 169, 0.8);\n    transition: all .8s ease;\n}\n\n .greyb2n:hover {\n    color: inherit;\n    background-color: #fff;\n    border-bottom: 3px solid rgba(169, 169, 169, 0.8);\n    transition: all .8s ease;\n}\n\n .whiteb2gf:hover {\n    color: #cdcdcd;\n    background-color: #fff;\n     border-bottom: 3px solid rgba(169, 169, 169, 0.8);\n    transition: all .8s ease;\n}\n\n  .n2n:hover {\n    color: inherit;\n    background-color: #fff;\n     border-bottom: 3px solid rgba(169, 169, 169, 0.8);\n    transition: all .8s ease;\n}\n\n .n2n1:hover {\n    color: inherit;\n    background-color: #fff;\n    border-bottom: 3px solid rgba(199, 50, 137, 0.8);\n    transition: all .8s ease;\n}\n\n .n2gf:hover {\n    color: rgba(169, 169, 169, 0.8);;\n    background-color: #fff;\n     border-bottom: 3px solid rgba(169, 169, 169, 0.8);\n    transition: all .8s ease;\n}\n\n .purpleb2pif:hover {\n    color: #ffb6c1;\n    background-color: #fff;\n    border-bottom: 3px solid rgba(199, 50, 137, 0.8);\n    transition: all .8s ease;\n}\n\n .pinkf2pub:hover {\n    color: #fff;\n    background-color: rgba(101, 47, 133, 0.5);\n    transition: all .8s ease;\n}\n\n.pinkf2puf:hover {\n    color: rgba(101, 47, 133, 1);\n    background-color:#fff ;\n     border-bottom: 3px solid rgba(101, 47, 133, 1);\n    transition: all .8s ease;\n}\n\n.pinkf2pib:hover {\n    color: #fff;\n    background-color: rgba(199, 50, 137, 0.8);\n    transition: all .8s ease;\n}\n\n p {\n     text-align: justify;\n }\n\n  span:first-child {\n    color: #cdcdcd;\n    font-size: 42px;\n    display: block;\n}\n\n.highlight {\n    font-style: bold;\n    font-size: 1.2em;\n}\n\n.speaker {\n    font-style: italic;\n    float: right;\n}\n\n.clear {\n    clear: both;\n}\n @media all and (max-width: 800px){\n\n .container {\n        width: 100%;\n        padding:5% 2% 6% 2%;\n } \n    .box {\n        width: 100%;\n        float: none;\n        margin: 0px;\n        padding:5% 4% 4% 4%;\n}\n\n/*.box {\n    width: 100%;\n    padding:50px;\n    margin-left: 8%;\n    background-color: #fff;\n    \n    border-bottom: none;\n    \n} */\n\n    .box > p{\n        font-size: 110%;\n    }\n    .col-sm-3{\n        margin:2%;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wazazi/shuhuda/shuhuda.component.html":
/***/ (function(module, exports) {

module.exports = "\t<div class=\"container\">\n\t\t<div class=\"box\">\n\t\t\t<p>Shuuda kutoka kwa wateja wetu.</p>\n\t\t\t<hr>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-3 n2n1\">\n\t\t\t\t\t<p><span>\"</span> <strong >Elit, sed do eiusmod tempor incididunt ut</strong> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud amet ea exercitation Nemo enim ipsam voluptatem quia voluptas sit enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.sit amet, consectetur<br>\n\t\t\t\t\t<span class=\"speaker\">- Rita Samson</span></p>\n\t\t\t\t\t<div class=\"clear\"></div>\n\t\t\t\t\t<p></p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-3 greyf2gbg\">\n\t\t\t\t\t<p><span>\"</span> <strong>Alit, sed do eiusmod tempor incididunt ut</strong> exercitation Nemo enim ipsam voluptatem quia voluptas sit enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.sit amet, consectetur<br>\n\t\t\t\t\t<span class=\"speaker\">- Rita Samson</span></p>\n\t\t\t\t\t<div class=\"clear\"></div>\n\t\t\t\t\t<p></p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-3 whiteb2gf\">\n\t\t\t\t\t<p><span>\"</span> <strong>Ilit, sed do eiusmod tempor incididunt ut</strong> enim ipsam voluptatem quia voluptas sit enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.sit amet, consectetur<br>\n\t\t\t\t\t<span class=\"speaker\">- Rita Samson</span></p>\n\t\t\t\t\t<div class=\"clear\"></div>\n\t\t\t\t\t<p></p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-3 purpleb2pif\">\n\t\t\t\t\t<p><span>\"</span> <strong>Alit, sed do eiusmod tempor incididunt ut</strong> et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud amet ea exercitation Nemo enim ipsam voluptatem quia voluptas sit enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.sit amet, consectetur<br>\n\t\t\t\t\t<span class=\"speaker\">- Rita Samson</span></p>\n\t\t\t\t\t<div class=\"clear\"></div>\n\t\t\t\t\t<p></p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-3 n2n\">\n\t\t\t\t\t<p><span>\"</span> <strong>Elit, sed do eiusmod tempor incididunt ut</strong> dolore magna aliqua. Ut enim ad minim veniam, quis nostrud amet ea exercitation Nemo enim ipsam voluptatem quia voluptas sit enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.sit amet, consectetur<br>\n\t\t\t\t\t<span class=\"speaker\">- Rita Samson</span></p>\n\t\t\t\t\t<div class=\"clear\"></div>\n\t\t\t\t\t<p></p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-3 pinkf2puf\">\n\t\t\t\t\t<p><span>\"</span> <strong>Alit, sed do eiusmod tempor incididunt ut</strong> labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud amet ea exercitation Nemo enim ipsam voluptatem quia voluptas sit enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.sit amet, consectetur<br>\n\t\t\t\t\t<span class=\"speaker\">- Rita Samson</span></p>\n\t\t\t\t\t<div class=\"clear\"></div>\n\t\t\t\t\t<p></p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-3 n2gf\">\n\t\t\t\t\t<p><span>\"</span> <strong>Ilit, sed do eiusmod tempor incididunt ut</strong> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud amet ea exercitation Nemo enim ipsam voluptatem quia voluptas sit enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.sit amet, consectetur<br>\n\t\t\t\t\t<span class=\"speaker\">- Rita Samson</span></p>\n\t\t\t\t\t<div class=\"clear\"></div>\n\t\t\t\t\t<p></p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-3 pinkf2pib\">\n\t\t\t\t\t<p><span>\"</span> <strong>Alit, sed do eiusmod tempor incididunt ut</strong> magna aliqua. Ut enim ad minim veniam, quis nostrud amet ea exercitation Nemo enim ipsam voluptatem quia voluptas sit enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.sit amet, consectetur<br>\n\t\t\t\t\t<span class=\"speaker\">- Rita Samson</span></p>\n\t\t\t\t\t<div class=\"clear\"></div>\n\t\t\t\t\t<p></p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-3 greyb2n\">\n\t\t\t\t\t<p><span>\"</span> <strong>Elit, sed do eiusmod tempor incididunt ut</strong> Nemo enim ipsam voluptatem quia voluptas sit enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.sit amet, consectetur<br>\n\t\t\t\t\t<span class=\"speaker\">- Rita Samson</span></p>\n\t\t\t\t\t<div class=\"clear\"></div>\n\t\t\t\t\t<p></p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n"

/***/ }),

/***/ "../../../../../src/app/wazazi/shuhuda/shuhuda.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_passevents_service__ = __webpack_require__("../../../../../src/app/core/passevents.service.ts");
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
    function ShuhudaComponent(passeventsService) {
        this.passeventsService = passeventsService;
        this.searchInputStatus = false;
    }
    ShuhudaComponent.prototype.ngOnInit = function () {
        this.removeSearchInput();
    };
    ShuhudaComponent.prototype.removeSearchInput = function () {
        this.passeventsService.exitblogsection(this.searchInputStatus);
    };
    return ShuhudaComponent;
}());
ShuhudaComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-shuhuda',
        template: __webpack_require__("../../../../../src/app/wazazi/shuhuda/shuhuda.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wazazi/shuhuda/shuhuda.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_passevents_service__["a" /* PasseventsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_passevents_service__["a" /* PasseventsService */]) === "function" && _a || Object])
], ShuhudaComponent);

var _a;
//# sourceMappingURL=shuhuda.component.js.map

/***/ }),

/***/ "../../../../../src/app/wazazi/subscribe/subscribe.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.clear {\r\n       clear: both;            /* to solve float overlapping issues */ \r\n}\r\n\r\n .container {\r\n        background-color: gray;\r\n        box-shadow: 1px 6.5px 12px 1px #000;\r\n        padding-top: 3%;\r\n        padding-right: 5%;\r\n }\r\n\r\n .modal {\r\n        display: block;\r\n        position: fixed;\r\n        z-index: 1000;\r\n        left: 0;\r\n        top: 0;\r\n        width: 100%;\r\n        height: 100%;\r\n        overflow: auto;\r\n        background-color: rgb(0,0,0);/* fallback color */\r\n        background-color: rgba(0,0,0,0.4);\r\n }\r\n \r\n .modal-content {\r\n position: relative;\r\n    background-color: rgba(0,0,0,0.8);\r\n    margin: auto;\r\n    margin-top: 260px;\r\n    padding: 0;\r\n    border: 1px solid #888;\r\n    width: 65%;\r\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\r\n    -webkit-animation-name: animatetop;\r\n    -webkit-animation-duration: 0.4s;\r\n    animation-name: animatetop;\r\n    animation-duration: 0.4s\r\n}\r\n\r\n.close {\r\n        margin: 3px 5px;\r\n        color: rgba(0,0,0,0.8);\r\n}\r\n\r\n.modal-header {\r\n        font-size: 15px;\r\n        padding: 23px 40px;\r\n        color: #ffffff;\r\n        border-bottom:  none;\r\n        border-top-left-radius: 6px;\r\n        border-top-right-radius:6px\r\n        }\r\n\r\n.modallinks :hover {\r\n        font-size: 17.4px;\r\n}\r\n\r\n.modal-body {padding: 2px 16px;\r\n             border:  none;\r\n        }\r\n\r\n.jiungebutton {\r\n        color: #ffb6c1;\r\n        font-size: 16px;\r\n        height: 20px;\r\n        width: auto;\r\n        margin-right: 0px; \r\n        background: none;\r\n        border: none;\r\n }\r\n\r\n.contactfield{  \r\n        width: 270px;\r\n        display: block;\r\n        margin-top: 10px;\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n}\r\n\r\ninput::-webkit-input-placeholder {\r\n  color:  #666565;\r\n  }\r\n\r\ninput:-ms-input-placeholder {\r\n  color:  #666565;\r\n  }\r\n\r\ninput::placeholder {\r\n  color:  #666565;\r\n  }\r\n\r\n.inputErrormessage {\r\n        padding: 0 0 0 40px;\r\n}\r\n\r\n.modal-footer {\r\n        color: #ffffff;\r\n        font-size: 17px;\r\n        padding: 2px 16px;\r\n        border-top:  none;\r\n        margin-top: 45px;\r\n        border-bottom-left-radius: 6px;\r\n        border-bottom-right-radius: 6px\r\n        }\r\n\r\n.sendbutton {\r\n        color: #ffffff;\r\n        margin-right: 24px;\r\n        margin-bottom: 8px;\r\n        background: none; \r\n        border: none;\r\n}\r\n\r\n input {\r\n    width: 35%;\r\n    padding-left: 5px;\r\n    border: 1px solid #652f85;\r\n    border-radius: 4px;\r\n}\r\n\r\n :-moz-placeholder {\r\n    color: rgba(0,0,0,0.8);;\r\n }\r\n\r\n@-webkit-keyframes animatetop {\r\n    from {top: -300px; opacity: 0}\r\n    to {top: 0; opacity: 1}\r\n}\r\n\r\n@keyframes animatetop {\r\n    from {top: -300px; opacity: 0}\r\n    to {top: 0; opacity: 1}\r\n}\r\n\r\n.inputErrormessage {\r\n     color: orangered;\r\n     background: none;\r\n     margin: 0 0 0 233px;\r\n}\r\n\r\n.close {\r\n        float: right;\r\n        font-size: 28px;\r\n        font-weight: bold;\r\n}\r\n\r\n.close:hover,\r\n.close:focus {\r\n        color: #ffffff;\r\n        text-decoration: none;\r\n        cursor: pointer;\r\n}\r\n\r\n@media all and (max-width: 767px){\r\n         .modal {\r\n        display: block;\r\n        position: fixed;\r\n        z-index: 1000;\r\n        left: 0;\r\n        top: 0;\r\n        width: 100%;\r\n        height: 100%;\r\n        overflow: auto;\r\n        \r\n }\r\n\r\n        .modal-content {\r\n        \r\n        background-color: rgba(0,0,0,0.8);\r\n        margin: 0 0 0 15%;\r\n        padding: 0;\r\n        border: 1px solid #888;\r\n        width: 70%;\r\n        position: absolute;\r\n        bottom:10px;\r\n        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\r\n        -webkit-animation-name: animatetop;\r\n        -webkit-animation-duration: 0.4s;\r\n        animation-name: animatetop;\r\n        animation-duration: 0.4s\r\n} \r\n\r\n.modal-header {\r\n        padding-left: 25px;\r\n        padding-right: 25px;\r\n        padding-bottom: 0;\r\n        text-align: left;\r\n}\r\n\r\n.modal-header p {\r\n        font-size: 13px;\r\n}\r\n\r\n.modal-header p .jiungebutton{\r\n        font-size: 14px;\r\n        padding-left: 0;\r\n}\r\n\r\n.modal-body input {\r\n        width: 90%;\r\n}\r\n\r\n.inputErrormessage {\r\n        margin-left: 15px;\r\n        padding: 0 0 0 8px;\r\n}\r\n\r\ninput::-webkit-input-placeholder {\r\n        font-size: 13px;\r\n  }\r\n\r\ninput:-ms-input-placeholder {\r\n        font-size: 13px;\r\n  }\r\n\r\ninput::placeholder {\r\n        font-size: 13px;\r\n  }\r\n\r\n\r\n.modal-footer {\r\n        color: #ffffff;\r\n        font-size: 14px;\r\n        padding: 2px 16px;\r\n        border-top:  none;\r\n        margin-top: 30px;\r\n        border-bottom-left-radius: 6px;\r\n        border-bottom-right-radius: 6px\r\n        }\r\n\r\n}\r\n\r\n\r\n@media all and (max-width: 500px){\r\n .modal-content {\r\n        \r\n        background-color: rgba(0,0,0,0.8);\r\n        margin: 0 0 0 15%;\r\n        padding: 0;\r\n        border: 1px solid #888;\r\n        width: 70%;\r\n        position: absolute;\r\n        bottom:50px;\r\n        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\r\n        -webkit-animation-name: animatetop;\r\n        -webkit-animation-duration: 0.4s;\r\n        animation-name: animatetop;\r\n        animation-duration: 0.4s\r\n }  \r\n        }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wazazi/subscribe/subscribe.component.html":
/***/ (function(module, exports) {

module.exports = " <!-- Modal  (click)=\"onClick1($event)\" -->\r\n      \r\n      <div id=\"myModal\" class=\"modal\">\r\n       <div class=\"modal-content\">\r\n         <button class=\"close\" (click)=\"exitModal($event)\">&times;</button>\r\n         <div class=\"modal-header\">\r\n            <p>Ukijaza fomu hii na kututumia tutahakikisha haukosi masomo yetu \r\n               kwa kukujulisha kupitia message ya whatsapp kila tutakapo weka somo jipya. \r\n               Pia kama umevutiwa na mafunzo yetu na ungependa kushiriki kwenye\r\n               darasa letu<a class=\"modallinks\"><button class=\"jiungebutton\" \r\n                (click)=\"onClick1($event)\">Jiunge hapa\r\n                 </button></a></p>\r\n                 <br>      \r\n\r\n            <div class=\"clear\"></div>\r\n         </div>\r\n         <div class=\"modal-body\">\r\n           \r\n             <form #subscribeform=\"ngForm\">\r\n             <input type=\"text\" name=\"comment_author\" id=\"jina\" \r\n             class=\"contactfield\" value=\"\"  placeholder=\"Jina\" \r\n             required [(ngModel)]=\"subscriber.name\" name=\"jina\"\r\n             #jina=\"ngModel\">\r\n             <div *ngIf=\"(jina.errors && (jina.dirty || jina.touched)) || (isInputdataMissing && jina.errors)\" class=\"alert alert-danger\" class=\"inputErrormessage\">\r\n               <div [hidden]=\"!jina.errors.required\" >\r\n                   Tafadhari jaza Jina lako\r\n               </div>\r\n             </div>   \r\n\r\n\r\n             <input type=\"text\" name=\"comment_author\" id=\"jina\" \r\n             class=\"contactfield\" value=\"\"  placeholder=\"Jina la Mzazi\" \r\n             required [(ngModel)]=\"subscriber.surname\" name=\"jina\"\r\n             #jina=\"ngModel\">\r\n             <div *ngIf=\"(jina.errors && (jina.dirty || jina.touched)) || (isInputdataMissing && jina.errors)\" class=\"alert alert-danger\" class=\"inputErrormessage\">\r\n               <div [hidden]=\"!jina.errors.required\" >\r\n                   Tafadhari jaza Jina la Mzazi\r\n               </div>\r\n             </div>  \r\n\r\n\r\n             <input type=\"text\" name=\"comment_author\" id=\"phone\" \r\n             class=\"contactfield\" value=\"\"  placeholder=\"Namba ya Whatsapp\" \r\n             required [(ngModel)]=\"subscriber.phone_number\" #phone=\"ngModel\">\r\n             <div *ngIf=\"(phone.errors && (phone.dirty || phone.touched))|| (isInputdataMissing && phone.errors)\" class=\"alert alert-danger\" class=\"inputErrormessage\">\r\n               <div [hidden]=\"!phone.errors.required\" >\r\n                   Tafadhari jaza namba yako ya simu\r\n               </div>\r\n             </div>   \r\n             </form>\r\n\r\n         </div>\r\n         <div class=\"modal-footer\">\r\n             <a class=\"modallinks\"><button class=\"sendbutton\" (click)=\"onClick($event)\" (click)=\"add()\" \r\n                                    [disabled]=\"!subscribeform.form.valid\"><button (click)=\"alertUser()\" class=\"sendbutton\"> Tuma taharifa</button> </button></a>\r\n         </div>\r\n\r\n       </div>\r\n      </div>\r\n      \r\n      <br><br><br>\r\n      \r\n    "

/***/ }),

/***/ "../../../../../src/app/wazazi/subscribe/subscribe.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__subscribers__ = __webpack_require__("../../../../../src/app/subscribers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_subscribers_service__ = __webpack_require__("../../../../../src/app/core/subscribers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscribeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SubscribeComponent = (function () {
    function SubscribeComponent(subscribersService, router, location) {
        this.subscribersService = subscribersService;
        this.router = router;
        this.location = location;
        this.isInputdataMissing = false;
        this.subscriber = new __WEBPACK_IMPORTED_MODULE_1__subscribers__["a" /* Subscribers */]();
        this.subscribers = []; //initialises an array
        this.myevent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.myEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.closeButtonClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.yScrollStack = [];
    }
    SubscribeComponent.prototype.onClick = function (button) {
        this.myEvent.emit(button);
    };
    SubscribeComponent.prototype.onClick1 = function (button) {
        this.myevent.emit(button);
    };
    SubscribeComponent.prototype.exitModal = function (button) {
        this.closeButtonClicked.emit(button);
    };
    SubscribeComponent.prototype.add = function () {
        var _this = this;
        if (!this.subscriber.phone_number) {
            return;
        }
        this.subscribersService.create(this.subscriber)
            .then(function (subscriber) {
            _this.subscribers.push(subscriber);
        });
    };
    SubscribeComponent.prototype.alertUser = function (state) {
        this.isInputdataMissing = true;
    };
    SubscribeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
        });
        this.router.events.subscribe(function (ev) {
            if (ev instanceof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* NavigationStart */]) {
                if (ev.url == _this.lastPoppedUrl) {
                    _this.yScrollStack.push(window.scrollY);
                    console.log(_this.lastPoppedUrl);
                    console.log(window.scrollY);
                }
            }
            else if (ev instanceof __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* NavigationEnd */]) {
                if (ev.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    var that = _this;
                    setTimeout(function () {
                        window.scrollTo(0, that.yScrollStack.pop());
                        console.log('scrolled to initial y coordinate');
                        console.log(ev.url);
                    }, 4000);
                }
                else {
                    window.scrollTo(0, 0);
                    console.log('scrolled to ythis = 0');
                }
            }
        });
    };
    return SubscribeComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], SubscribeComponent.prototype, "myevent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], SubscribeComponent.prototype, "myEvent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], SubscribeComponent.prototype, "closeButtonClicked", void 0);
SubscribeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-subscribe',
        template: __webpack_require__("../../../../../src/app/wazazi/subscribe/subscribe.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wazazi/subscribe/subscribe.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__core_subscribers_service__["a" /* SubscribersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_subscribers_service__["a" /* SubscribersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"]) === "function" && _c || Object])
], SubscribeComponent);

var _a, _b, _c;
//# sourceMappingURL=subscribe.component.js.map

/***/ }),

/***/ "../../../../../src/app/wazazi/taharifa-kujiunga/taharifa-kujiunga.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.clear {\n       clear: both;            /* to solve float overlapping issues */ \n}\n\n .container {\n        background-color: gray;\n        box-shadow: 1px 6.5px 12px 1px #000;\n        padding-top: 3%;\n        padding-right: 5%;\n }\n\n .modal {\n        display: block;\n        position: fixed;\n        z-index: 1000;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        overflow: auto;\n        background-color: rgb(0,0,0);/* fallback color */\n        background-color: rgba(0,0,0,0.4);\n }\n \n.close {\n        margin: 3px 5px;\n        color: rgba(0,0,0,0.8);\n}\n\n.jiungebutton {\n        color: #ffb6c1;\n        font-size: 16px;\n        height: 20px;\n        width: auto;\n        margin-right: 0px; \n        background: none;\n        border: none;\n }\n\n.modal-header {\n        font-size: 15px;\n        padding: 23px 40px;\n        color: #ffffff;\n        border-bottom:  none;\n         }\n\n.modallinks :hover {\n        font-size: 17.4px;\n}\n\n.modal-body { width:100%;\n              padding: 2px 16px;\n              border:  none;\n              border-top-left-radius: 6px;\n              border-top-right-radius:6px\n        }\n\n.contactfield{  \n        width: 270px;\n        display: block;\n        margin-top: 10px;\n        margin-left: auto;\n        margin-right: auto;\n}\n\ninput::-webkit-input-placeholder {\n  color:  #cdcdcd;\n  }\n\ninput:-ms-input-placeholder {\n  color:  #cdcdcd;\n  }\n\ninput::placeholder {\n  color:  #cdcdcd;\n  }\n\n.modal-footer {\n        color: #ffffff;\n        font-size: 17px;\n        padding: 2px 16px;\n        border-top:  none;\n        margin-top: 45px;\n        border-bottom-left-radius: 6px;\n        border-bottom-right-radius: 6px\n        }\n\n.textcontainer {\n       padding-left: 34px;\n       padding-right: 0;\n}\n\n.thankyoutext {\n        color: #ffffff;\n}\n\n.textcontainer h1 {\n        margin-top: 0 !important;\n}\n\n.buttoncontainer {\n        text-align: center;\n        padding: 17px 0 0 0;\n}\n\n.Closebutton {\n        color: #ffffff;\n        height: 40px;\n        width: 40px;\n        text-align: center;\n        margin-left: auto !important; \n        margin-right: 24px;\n        margin-bottom: 8px;\n        margin-top: 40px;\n        background: rgba(0,0,0,0.9);; \n        border: 2px solid #ffffff;\n        border-radius: 50%;\n}\n\n.modal-content {\n position: relative;\n    background-color: rgba(0,0,0,0.8);\n    margin: auto;\n    margin-top: 260px;\n    padding: 0;\n    border: 1px solid #888;\n    width: 30%;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\n    -webkit-animation-name: animatetop;\n    -webkit-animation-duration: 0.4s;\n    animation-name: animatetop;\n    animation-duration: 0.4s\n}\n\n input {\n    width: 35%;\n    padding-left: 5px;\n    border: 1px solid #652f85;\n    border-radius: 4px;\n}\n\n :-moz-placeholder {\n    color: #cdcdcd;\n }\n\n@-webkit-keyframes animatetop {\n    from {top: -300px; opacity: 0}\n    to {top: 0; opacity: 1}\n}\n\n@keyframes animatetop {\n    from {top: -300px; opacity: 0}\n    to {top: 0; opacity: 1}\n}\n\n.close {\n        float: right;\n        font-size: 28px;\n        font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n        color: #ffffff;\n        text-decoration: none;\n        cursor: pointer;\n}\n\n@media all and (max-width: 767px){\n         .modal {\n        display: block;\n        position: fixed;\n        z-index: 1000;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        overflow: auto;\n        \n }\n\n        .modal-content {\n        background-color: rgba(0,0,0,0.8);\n        margin: 0 0 0 15%;\n        padding: 0;\n        border: 1px solid #888;\n        width: 70%;\n        position: absolute;\n        bottom: 140px;\n        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\n        -webkit-animation-name: animatetop;\n        -webkit-animation-duration: 0.4s;\n        animation-name: animatetop;\n        animation-duration: 0.4s\n} \n\n.modal-header {\n        padding-bottom: 0;\n}\n\n.modal-header p {\n        font-size: 13px;\n}\n\n.modal-header p .jiungebutton{\n        font-size: 14px;\n        padding-left: 0;\n}\n\n.textcontainer {\n        padding-left: 0;\n}\n\n.buttoncontainer {\n        padding-top: 0;\n}\n\n.modal-body input {\n        width: 90%;\n}\n\ninput::-webkit-input-placeholder {\n        font-size: 13px;\n  }\n\ninput:-ms-input-placeholder {\n        font-size: 13px;\n  }\n\ninput::placeholder {\n        font-size: 13px;\n  }\n\n\n.modal-footer {\n        color: #ffffff;\n        font-size: 14px;\n        padding: 2px 16px;\n        border-top:  none;\n        margin-top: 30px;\n        border-bottom-left-radius: 6px;\n        border-bottom-right-radius: 6px\n        }\n\n.inputErrormessage {\n        margin-left: 45px;\n}\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wazazi/taharifa-kujiunga/taharifa-kujiunga.component.html":
/***/ (function(module, exports) {

module.exports = " <!-- Modal  (click)=\"onClick1($event)\" -->\n      \n      <div id=\"myModal\" class=\"modal\">\n       <div class=\"modal-content\">\n        \n         <div class=\"modal-body\">\n          \n        <div class=\"row\" style=\"width: 100%; margin: 70px 0 0 0;\">\n          <div class=\"col-sm-8 textcontainer\">\n          <h1 class=\"thankyoutext\">Hongera ! </h1>\n          <p class=\"thankyoutext\">\n              Taharifa zako zimetumwa <br>\n              Utapokea maelekezo ya jinsi ya\n              kufanya malipo...\n          </p>\n          </div>\n          <div class=\"col-sm-4 buttoncontainer\">\n          <button class=\"Closebutton\" (click)=\"onClick($event)\">X</button>\n          </div>\n       </div>\n        <br><br><br>\n       </div>\n      </div>\n      </div>\n    "

/***/ }),

/***/ "../../../../../src/app/wazazi/taharifa-kujiunga/taharifa-kujiunga.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaharifaKujiungaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TaharifaKujiungaComponent = (function () {
    function TaharifaKujiungaComponent() {
        this.closeModal = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    TaharifaKujiungaComponent.prototype.onClick = function (button) {
        this.closeModal.emit(button);
    };
    TaharifaKujiungaComponent.prototype.ngOnInit = function () {
    };
    return TaharifaKujiungaComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TaharifaKujiungaComponent.prototype, "closeModal", void 0);
TaharifaKujiungaComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-taharifa-kujiunga',
        template: __webpack_require__("../../../../../src/app/wazazi/taharifa-kujiunga/taharifa-kujiunga.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wazazi/taharifa-kujiunga/taharifa-kujiunga.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TaharifaKujiungaComponent);

//# sourceMappingURL=taharifa-kujiunga.component.js.map

/***/ }),

/***/ "../../../../../src/app/wazazi/taharifa-subscription/taharifa-subscription.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.clear {\n       clear: both;            /* to solve float overlapping issues */ \n}\n\n .container {\n        background-color: gray;\n        box-shadow: 1px 6.5px 12px 1px #000;\n        padding-top: 3%;\n        padding-right: 5%;\n }\n\n .modal {\n        display: block;\n        position: fixed;\n        z-index: 1000;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        overflow: auto;\n        background-color: rgb(0,0,0);/* fallback color */\n        background-color: rgba(0,0,0,0.4);\n }\n \n.close {\n        margin: 3px 5px;\n        color: rgba(0,0,0,0.8);\n}\n\n.jiungebutton {\n        color: #ffb6c1;\n        font-size: 16px;\n        height: 20px;\n        width: auto;\n        margin-right: 0px; \n        background: none;\n        border: none;\n }\n\n.modal-header {\n        font-size: 15px;\n        padding: 23px 40px;\n        color: #ffffff;\n        border-bottom:  none;\n         }\n\n.modallinks :hover {\n        font-size: 17.4px;\n}\n\n.modal-body { width:100%;\n              padding: 2px 16px;\n              border:  none;\n              border-top-left-radius: 6px;\n              border-top-right-radius:6px\n        }\n\n.contactfield{  \n        width: 270px;\n        display: block;\n        margin-top: 10px;\n        margin-left: auto;\n        margin-right: auto;\n}\n\ninput::-webkit-input-placeholder {\n  color:  #cdcdcd;\n  }\n\ninput:-ms-input-placeholder {\n  color:  #cdcdcd;\n  }\n\ninput::placeholder {\n  color:  #cdcdcd;\n  }\n\n.modal-footer {\n        color: #ffffff;\n        font-size: 17px;\n        padding: 2px 16px;\n        border-top:  none;\n        margin-top: 45px;\n        border-bottom-left-radius: 6px;\n        border-bottom-right-radius: 6px\n        }\n\n.textcontainer {\n       text-align: center;\n       padding-right: 0;\n}\n\n.thankyoutext {\n        color: #ffffff;\n        text-align: center;\n}\n\n.textcontainer h1 {\n        margin-top: 0 !important;\n}\n\n.buttoncontainer {\n        text-align: center;\n        padding: 17px 0 0 0;\n}\n\n.Closebutton {\n        color: #ffffff;\n        height: 40px;\n        width: 40px;\n        text-align: center;\n        margin-left: auto !important; \n        margin-right: auto !important;\n        margin-right: 24px;\n        margin-bottom: 8px;\n        background: rgba(0,0,0,0.9);; \n        border: 2px solid #ffffff;\n        border-radius: 50%;\n}\n\n.modal-content {\n position: relative;\n    background-color: rgba(0,0,0,0.8);\n    margin: auto;\n    margin-top: 260px;\n    padding: 0;\n    border: 1px solid #888;\n    width: 30%;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\n    -webkit-animation-name: animatetop;\n    -webkit-animation-duration: 0.4s;\n    animation-name: animatetop;\n    animation-duration: 0.4s\n}\n\n input {\n    width: 35%;\n    padding-left: 5px;\n    border: 1px solid #652f85;\n    border-radius: 4px;\n}\n\n :-moz-placeholder {\n    color: #cdcdcd;\n }\n\n@-webkit-keyframes animatetop {\n    from {top: -300px; opacity: 0}\n    to {top: 0; opacity: 1}\n}\n\n@keyframes animatetop {\n    from {top: -300px; opacity: 0}\n    to {top: 0; opacity: 1}\n}\n\n.close {\n        float: right;\n        font-size: 28px;\n        font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n        color: #ffffff;\n        text-decoration: none;\n        cursor: pointer;\n}\n\n\n@media all and (max-width: 767px){\n         .modal {\n        display: block;\n        position: fixed;\n        z-index: 1000;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        overflow: auto;\n        \n }\n\n        .modal-content {\n        background-color: rgba(0,0,0,0.8);\n        margin: 0 0 0 15%;\n        padding: 0;\n        border: 1px solid #888;\n        width: 70%;\n        position: absolute;\n        bottom: 190px;\n        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\n        -webkit-animation-name: animatetop;\n        -webkit-animation-duration: 0.4s;\n        animation-name: animatetop;\n        animation-duration: 0.4s\n} \n\n.modal-header {\n        padding-bottom: 0;\n}\n\n.modal-header p {\n        font-size: 13px;\n}\n\n.modal-header p .jiungebutton{\n        font-size: 14px;\n        padding-left: 0;\n}\n\n.modal-body input {\n        width: 90%;\n}\n\ninput::-webkit-input-placeholder {\n        font-size: 13px;\n  }\n\ninput:-ms-input-placeholder {\n        font-size: 13px;\n  }\n\ninput::placeholder {\n        font-size: 13px;\n  }\n\n\n.modal-footer {\n        color: #ffffff;\n        font-size: 14px;\n        padding: 2px 16px;\n        border-top:  none;\n        margin-top: 30px;\n        border-bottom-left-radius: 6px;\n        border-bottom-right-radius: 6px\n        }\n\n.inputErrormessage {\n        margin-left: 45px;\n}\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wazazi/taharifa-subscription/taharifa-subscription.component.html":
/***/ (function(module, exports) {

module.exports = " <!-- Modal  (click)=\"onClick1($event)\" -->\n      \n      <div id=\"myModal\" class=\"modal\">\n       <div class=\"modal-content\">\n        \n         <div class=\"modal-body\">\n          \n        <div class=\"row\" style=\"width: 100%; margin: 70px 0 0 0;\">\n          <div class=\"col-sm-8 textcontainer\">\n          <h1 class=\"thankyoutext\">Hongera ! </h1>\n          <p class=\"thankyoutext\">Taharifa zako zimetumwa</p>\n          </div>\n          <div class=\"col-sm-4 buttoncontainer\">\n          <button class=\"Closebutton\" (click)=\"onClick($event)\">X</button>\n          </div>\n       </div>\n        <br><br><br>\n       </div>\n      </div>\n      </div>\n    "

/***/ }),

/***/ "../../../../../src/app/wazazi/taharifa-subscription/taharifa-subscription.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaharifaSubscriptionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TaharifaSubscriptionComponent = (function () {
    function TaharifaSubscriptionComponent() {
        this.closeModal = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    TaharifaSubscriptionComponent.prototype.onClick = function (button) {
        this.closeModal.emit(button);
    };
    TaharifaSubscriptionComponent.prototype.ngOnInit = function () {
    };
    return TaharifaSubscriptionComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TaharifaSubscriptionComponent.prototype, "closeModal", void 0);
TaharifaSubscriptionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-taharifa-subscription',
        template: __webpack_require__("../../../../../src/app/wazazi/taharifa-subscription/taharifa-subscription.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wazazi/taharifa-subscription/taharifa-subscription.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TaharifaSubscriptionComponent);

//# sourceMappingURL=taharifa-subscription.component.js.map

/***/ }),

/***/ "../../../../../src/app/wazazi/upload-video/upload-video.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wazazi/upload-video/upload-video.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <button id=\"execute-request-button\">Authorize</button>\n  <button id=\"select-file-button\">Select file</button>\n  <input id=\"select-file\" type=\"file\" style=\"display:none\"><br><br>\n  <button id=\"upload-file-button\">Upload file</button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/wazazi/upload-video/upload-video.component.ts":
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
        template: __webpack_require__("../../../../../src/app/wazazi/upload-video/upload-video.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wazazi/upload-video/upload-video.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UploadVideoComponent);

//# sourceMappingURL=upload-video.component.js.map

/***/ }),

/***/ "../../../../../src/app/wazazi/wazazi-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wazazi_component__ = __webpack_require__("../../../../../src/app/wazazi/wazazi.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blog_section_blog_section_component__ = __webpack_require__("../../../../../src/app/wazazi/blog-section/blog-section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__blog_soma_zaidi_blog_soma_zaidi_component__ = __webpack_require__("../../../../../src/app/wazazi/blog-soma-zaidi/blog-soma-zaidi.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__blog_soma_zaidi1_blog_soma_zaidi1_component__ = __webpack_require__("../../../../../src/app/wazazi/blog-soma-zaidi1/blog-soma-zaidi1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__kuhusu_jlb_kuhusu_jlb_component__ = __webpack_require__("../../../../../src/app/wazazi/kuhusu-jlb/kuhusu-jlb.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__kujiunga_kujiunga_component__ = __webpack_require__("../../../../../src/app/wazazi/kujiunga/kujiunga.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__makala_contents_makala_contents_component__ = __webpack_require__("../../../../../src/app/wazazi/makala-contents/makala-contents.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__makala_navigation_makala_navigation_component__ = __webpack_require__("../../../../../src/app/wazazi/makala-navigation/makala-navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__makala_makala_component__ = __webpack_require__("../../../../../src/app/wazazi/makala/makala.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__makala1_makala1_component__ = __webpack_require__("../../../../../src/app/wazazi/makala1/makala1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shuhuda_shuhuda_component__ = __webpack_require__("../../../../../src/app/wazazi/shuhuda/shuhuda.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__subscribe_subscribe_component__ = __webpack_require__("../../../../../src/app/wazazi/subscribe/subscribe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__bidhaa_bidhaa_component__ = __webpack_require__("../../../../../src/app/wazazi/bidhaa/bidhaa.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__bidhaa_category_bidhaa_category_component__ = __webpack_require__("../../../../../src/app/wazazi/bidhaa-category/bidhaa-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__landingpage_landingpage_component__ = __webpack_require__("../../../../../src/app/wazazi/landingpage/landingpage.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WazaziRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_16__landingpage_landingpage_component__["a" /* LandingpageComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__wazazi_component__["a" /* WazaziComponent */],
        children: [
            { path: '', redirectTo: 'blog-section', pathMatch: 'full' },
            { path: 'landingpage', component: __WEBPACK_IMPORTED_MODULE_16__landingpage_landingpage_component__["a" /* LandingpageComponent */] },
            { path: 'blog-section', component: __WEBPACK_IMPORTED_MODULE_3__blog_section_blog_section_component__["a" /* BlogSectionComponent */] },
            { path: 'blog-section/:id', component: __WEBPACK_IMPORTED_MODULE_4__blog_soma_zaidi_blog_soma_zaidi_component__["a" /* BlogSomaZaidiComponent */] },
            { path: 'soma-zaidi1', component: __WEBPACK_IMPORTED_MODULE_5__blog_soma_zaidi1_blog_soma_zaidi1_component__["a" /* BlogSomaZaidi1Component */] },
            { path: 'kuhusu-jlb', component: __WEBPACK_IMPORTED_MODULE_6__kuhusu_jlb_kuhusu_jlb_component__["a" /* KuhusuJlbComponent */] },
            { path: 'kujiunga', component: __WEBPACK_IMPORTED_MODULE_7__kujiunga_kujiunga_component__["a" /* KujiungaComponent */] },
            { path: 'makala-content', component: __WEBPACK_IMPORTED_MODULE_8__makala_contents_makala_contents_component__["a" /* MakalaContentsComponent */] },
            { path: 'makala-navigation', component: __WEBPACK_IMPORTED_MODULE_9__makala_navigation_makala_navigation_component__["a" /* MakalaNavigationComponent */] },
            { path: 'makala/:id', component: __WEBPACK_IMPORTED_MODULE_10__makala_makala_component__["a" /* MakalaComponent */] },
            { path: 'makala1', component: __WEBPACK_IMPORTED_MODULE_11__makala1_makala1_component__["a" /* Makala1Component */] },
            { path: 'shuhuda', component: __WEBPACK_IMPORTED_MODULE_12__shuhuda_shuhuda_component__["a" /* ShuhudaComponent */] },
            { path: 'subscribe', component: __WEBPACK_IMPORTED_MODULE_13__subscribe_subscribe_component__["a" /* SubscribeComponent */] },
            { path: 'bidhaa', component: __WEBPACK_IMPORTED_MODULE_14__bidhaa_bidhaa_component__["a" /* BidhaaComponent */],
                children: [
                    { path: 'bidhaa-category/:id', component: __WEBPACK_IMPORTED_MODULE_15__bidhaa_category_bidhaa_category_component__["a" /* BidhaaCategoryComponent */] },
                    { path: 'bidhaa-category', component: __WEBPACK_IMPORTED_MODULE_15__bidhaa_category_bidhaa_category_component__["a" /* BidhaaCategoryComponent */] },
                ] },
        ] }
];
var WazaziRoutingModule = (function () {
    function WazaziRoutingModule() {
    }
    return WazaziRoutingModule;
}());
WazaziRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]],
        providers: []
    })
], WazaziRoutingModule);

//# sourceMappingURL=wazazi-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/wazazi/wazazi.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navdiv {\r\n        position: relative;\r\n        height: -webkit-fit-content;\r\n        height: -moz-fit-content;\r\n        height: fit-content;\r\n} \r\n\r\n.navbar {\r\n      text-align: center;\r\n      color: #652f85;\r\n      font-family: helvetica;\r\n      background-color:#fff; \r\n      height: -webkit-fit-content; \r\n      height: -moz-fit-content; \r\n      height: fit-content; \r\n      padding-right: 0; \r\n      margin-bottom: 0;   \r\n      border: none;     \r\n      border-radius: none !important; \r\n          }\r\n\r\n.navbar-fixed-top {\r\n      position: relative;\r\n}\r\n\r\n  .logorow {\r\n      height: -webkit-fit-content;\r\n      height: -moz-fit-content;\r\n      height: fit-content;\r\n      margin: 0 0 7px 0;\r\n      display: inline-block;\r\n  }\r\n\r\n  .brand {\r\n      width: 100%;\r\n      margin: 7px 0 0 0;\r\n  }\r\n\r\n  .icon {\r\n      height: 400px;\r\n      width: 300px;\r\n      margin: auto 4% auto 0%;\r\n      display: inline-block;\r\n     \r\n   }\r\n\r\n   .brandname {\r\n        /*color: #949494;*/\r\n        color: rgba(0, 0, 0, 0.9);\r\n        font-size: 19px;\r\n        font-weight: 700;\r\n        margin: 43px 5px 0 0;    /*margin top to match margin top menuitems2*/\r\n        float: right;\r\n    }\r\n\r\n   .brandname:hover {\r\n        color: rgba(70, 26, 66, .8);\r\n   }\r\n  \r\n  .clogotext {\r\n      height: 78px;\r\n      padding-top: 39px;\r\n      padding-left: 0;\r\n  }\r\n\r\n  .logotext {\r\n      float: left;\r\n      font-style: italic;\r\n   }\r\n\r\n   .navbar img {\r\n\r\n       height: 59px;\r\n       width: 65px;\r\n       margin-top: 13px;\r\n       display: inline-block;\r\n   }\r\n\r\n \r\n\r\n  .navbar h3 {\r\n      margin-top: 8px;\r\n      margin-bottom: 0; \r\n  }\r\n\r\n  .menurow {\r\n      width: 100%;\r\n      margin: 15px 0 40px 0;\r\n  }\r\n\r\n  .menuitems2 {\r\n      margin-top: 3.5%;\r\n     \r\n    }\r\n\r\n  .menuitems2 ul {\r\n      margin-bottom: 0;\r\n  }\r\n\r\n  .menuitems2 li {\r\n      color: rgb#bfbcc0;\r\n      font-family: Montserrat-Regular;\r\n      -webkit-text-decoration-line: none;\r\n              text-decoration-line: none;\r\n      margin: 0 30px 0 30px;\r\n      display: inline;\r\n  }\r\n\r\n  .active {\r\n      color: rgba(70, 26, 66, .8) !important;\r\n  }\r\n  \r\n  .nav li {\r\n        margin-left: 30px;\r\n        margin-top: 10px 0 0 0;\r\n        height: 20px;\r\n        float: right;\r\n      }   \r\n      \r\n   nav ul li:hover {\r\n          background-color:none !important;\r\n          /*border-bottom: 2px solid #fff;    /*to be less conspicuous\r\n          border-radius: 3px;*/\r\n          height: 30px;\r\n          border-radius: 4px;\r\n      }  \r\n  \r\n    nav ul li a {\r\n          /*color: #949494;*/\r\n          color: rgba(0, 0, 0, 0.9);\r\n          font-size: 16px;\r\n          letter-spacing: 2px;\r\n          font-weight: 500;\r\n          padding-top: 4px;\r\n          height: 20px;\r\n    }\r\n\r\n    .menuitems2 ul li a:hover {\r\n        color:  rgba(70, 26, 66, .8) !important;\r\n        -webkit-text-decoration-line: none;\r\n                text-decoration-line: none;\r\n    }  \r\n\r\n  \r\n    .calltoactionli {\r\n       margin: 0 0 0 35px !important; \r\n    }\r\n\r\n    .calltoaction {\r\n        /*border-left: 1px solid #acacac;*/\r\n        height: 48px;\r\n        margin: -5px 0 -3px 60px;\r\n        padding: 6px 0 6px 40px;\r\n        display: inline-block;\r\n    }\r\n\r\n\r\n    .calltoaction button {\r\n        color: #fff;\r\n        font-size: 14px;\r\n        background-color: rgba(70, 26, 66, 0.9); /*rgba(40, 54, 85, 1)*/\r\n        padding: 7px 9px;\r\n        margin: 0 0 0 0;\r\n        border: none;\r\n        border-radius: 4px;\r\n        box-shadow: 2px 1.5px 17px -7px #000;     \r\n    }\r\n\r\n  .kujiunga {\r\n       position: absolute;\r\n  }\r\n\r\n  .menuitems {\r\n      \r\n      background-color: rgba(70, 26, 66, 0.9);\r\n      width: 100%;\r\n      height: 9px;\r\n      \r\n      border-bottom-right-radius: 4px;\r\n      border-bottom-left-radius: 4px;\r\n      margin-right: 0 !important;\r\n      margin-top: 5px;\r\n      box-shadow: 0px 4.5px 4px -4px #000;\r\n  }\r\n  .nav { \r\n      margin-right: 2%;\r\n  }\r\n\r\n .icon-bar {\r\n      background: grey;\r\n }\r\n\r\n\r\n .Mwanzo .Mwanzo {\r\n        color: #ffffff !important;\r\n        background-color:none !important;\r\n        /*border-bottom: 2px solid #fff;\r\n        border-radius: 3px;*/\r\n        height: 40px;\r\n }\r\n\r\n .ss_search_row {\r\n        width: 100%;\r\n}\r\n\r\n  .showposts {\r\n        background-color: #f4f3ef;\r\n        margin: 0 0 0 0;\r\n        padding: 10px 0 0 0;\r\n  }\r\n\r\n  .drocol {\r\n        padding: 0 15px 0 17px;\r\n  }\r\n\r\n  .sscol {\r\n        padding-left: 20px;\r\n        padding-right: 0;\r\n  }\r\n\r\n  .searchsection {\r\n        width: 100%;\r\n        background-color:none;\r\n        float: right;\r\n        margin-right: 0;\r\n        margin-left: 0px;\r\n        margin-top: 25px;\r\n        position: relative; \r\n        top: 0;\r\n }\r\n\r\n.Makalabutton {\r\n        /*font-family: Montserrat-Regular;*/\r\n        font-size: 15px;\r\n        color: #fff;\r\n        height: 60px;\r\n        width: 200px;\r\n        background-color: rgba(70, 26, 66, 1);\r\n        padding: 7px 0 0 0;\r\n        margin: 20px 0 0 11%;\r\n        border: none;\r\n        border-radius: 4px;\r\n        box-shadow: 0px 7px 9px -8px #000;       \r\n}\r\n\r\n.Makalabutton p {\r\n        display: inline-block;\r\n        margin-right: 7px;\r\n}\r\n\r\na > .Makalabutton  :hover {\r\n        color: #fff;\r\n        font-size: 17px;\r\n}\r\n\r\n.makalatitles {\r\n        position: relative;\r\n}\r\n\r\n.Makalabutton img {\r\n        height: 17px;\r\n        width: 17px;\r\n        margin: 0 0 0 2px;\r\n}\r\n\r\n.glyphicon-list-alt {\r\n        color: #fff;\r\n}\r\n\r\n.makala {\r\n        padding-left: 0;\r\n        padding-right: 0;\r\n}\r\n\r\n.search {\r\n        background-color: rgba(255,255,255,0.3);\r\n        border-radius: 15px;\r\n        margin: 0 0 0 4px;\r\n        padding: 35px 15px;\r\n        height: -webkit-fit-content;\r\n        height: -moz-fit-content;\r\n        height: fit-content;\r\n        width:95%;\r\n        box-shadow: 1px 0.5px 16px -9px #000;\r\n}\r\n\r\n.searchbox { \r\n       height: 40px;\r\n       /*border: 2px solid  rgba(0,0,0, 0.4); */\r\n       border: none;\r\n       border-radius: 17px;\r\n       border-top-right-radius: 0;\r\n       border-bottom-right-radius: 0;\r\n       background-color: none;\r\n       border-right: none;\r\n       box-shadow: 0px 2px 20px -9px #000;\r\n       margin-top: 0;\r\n       margin-left: 9%;\r\n       padding: 0 0 0 15px;\r\n}\r\n\r\n.horizontalline {\r\n       width: 80%;\r\n       margin:8vh 0 8vh 10%;\r\n}\r\n\r\n.makalamaelekezo {\r\n        color: rgba(0, 0, 0, 0.9);\r\n        font-size: 13px;\r\n        /*font-family: Montserrat;*/\r\n        font-family: 'Muli', Arial, sans-serif;\r\n        width: 77%;\r\n        margin: 10px 0 0 11%;\r\n        text-align: justify;\r\n}\r\n\r\n.Rudimwanzobutton {\r\n        font-size: 15px;\r\n        color: rgba(0, 0, 0, 0.8);\r\n        height: 40px;\r\n        width: 200px;\r\n        background: none;  /*rgba(0,0,0, 0.7); */\r\n        padding: 7px 0 0 0;\r\n        margin: 0 0 10px 11%;\r\n        border: none;\r\n        border-radius: 4px;  \r\n}\r\n\r\n.glyphicon-arrow-left {\r\n        margin-right: 15px;\r\n}\r\n\r\ninput::-webkit-input-placeholder {\r\n       font-family: Montserrat-Regular;\r\n       color: rgba(0, 0, 0, 0.8);\r\n  /*rgba(255,182,193, 0.4); */}\r\n\r\ninput:-ms-input-placeholder {\r\n       font-family: Montserrat-Regular;\r\n       color: rgba(0, 0, 0, 0.8);\r\n  /*rgba(255,182,193, 0.4); */}\r\n\r\ninput::placeholder {\r\n       font-family: Montserrat-Regular;\r\n       color: rgba(0, 0, 0, 0.8);\r\n  /*rgba(255,182,193, 0.4); */}\r\n\r\n.Tafutabutton {\r\n       height: 40px;\r\n       background-color: #fff;\r\n       border-radius: 17px;\r\n       /*border: 2px solid rgba(0,0,0, 0.4); */\r\n       border: none;\r\n       border-top-left-radius: 0;\r\n       border-bottom-left-radius: 0; \r\n       border-left: none; \r\n       box-shadow: 1px 2px 13px -7px #000;\r\n       margin-left: -4px;   \r\n} \r\n\r\n.glyphicon-search {\r\n        color: rgba(0,0,0, 0.4);\r\n}\r\n\r\n::-webkit-input-placeholder {\r\n        color: #000;\r\n        text-align: center;\r\n}\r\n\r\n.anitem {\r\n        margin: 10vh 0 10vh 0;\r\n}\r\n\r\n.bidhaasectiontitle {\r\n        color: rgba(0,0,0, 0.8);\r\n        width: -webkit-fit-content;\r\n        width: -moz-fit-content;\r\n        width: fit-content;\r\n        margin: 20px auto;\r\n        font-weight: 500;\r\n}\r\n\r\n.itemimage {\r\n        width: 100%;\r\n}\r\n\r\n.itemdescription {\r\n        font-family: montserrat-regular;\r\n        font-size: 13px;\r\n\r\n}\r\n\r\n.itemprice {\r\n        font-family: montserrat-regular;\r\n        font-size: 13px;\r\n}\r\n\r\n#contact   {\r\n        font-size: 14px;\r\n        margin: 0 15px 0 0;\r\n        float: right;\r\n     }\r\n\r\n#contact a {\r\n        color: rgba(101, 47, 133, 1);\r\n        font-weight: 500;\r\n     }\r\n\r\n.clear {\r\n       clear: both;            /* to solve float overlapping issues */ \r\n}\r\n\r\n.ssnavbar {\r\n       width: 100%;\r\n       height: -webkit-fit-content;\r\n       height: -moz-fit-content;\r\n       height: fit-content; \r\n       background-color: #fff; \r\n       margin: 0 0 0 0;\r\n      \r\n}\r\n\r\n\r\n\r\n/*\r\n.hambugermenu {\r\n        float: right;\r\n        margin: 0 10px 0 0;\r\n        border:none;\r\n}*/\r\n\r\n\r\n.ssnavbar {\r\n        display: none;\r\n}\r\n\r\n.ssmenu {\r\n        display: none;\r\n}\r\n\r\n.menuitem_SS {\r\n        display: none;\r\n}\r\n.ss-search {\r\n        display: none;\r\n }\r\n\r\n .ss-searchbox {\r\n        display: none;\r\n }\r\n\r\n .ss {\r\n        display: none;\r\n }\r\n\r\n .ss-searchicon {\r\n         display: none;\r\n }\r\n/**/\r\n@media all and (max-width: 768px){\r\n.navdiv {\r\n        width: 100%;\r\n        height: -webkit-fit-content;\r\n        height: -moz-fit-content;\r\n        height: fit-content;  /*124px*/\r\n}\r\n\r\nnav {   width: 100%;\r\n        height:-webkit-fit-content;\r\n        height:-moz-fit-content;\r\n        height:fit-content;  /*124px !important*/\r\n        border: none;\r\n        background-color:#f4f4f4 !important; \r\n}\r\n\r\n.slideFT {\r\n        height: auto;\r\n        background-color: #fff;\r\n        position: relative;\r\n        z-index: 1000;\r\n        left: 0;\r\n        right: 0;\r\n}\r\n\r\n.menurow {\r\n        height: -webkit-fit-content;\r\n        height: -moz-fit-content;\r\n        height: fit-content;\r\n        margin: 0 0 8px 0;\r\n}\r\n\r\n.logorow {\r\n        height: -webkit-fit-content;\r\n        height: -moz-fit-content;\r\n        height: fit-content;\r\n        width: 100%;\r\n        margin: 0 0 5px 0;\r\n        display: block;\r\n        overflow: auto; \r\n}\r\n\r\n.logorow a {\r\n        width: 100%;\r\n        height: -webkit-fit-content;\r\n        height: -moz-fit-content;\r\n        height: fit-content;\r\n}\r\n\r\n.brand {\r\n        height: -webkit-fit-content;\r\n        height: -moz-fit-content;\r\n        height: fit-content;\r\n        width: 100%;\r\n        margin-top: 13px;\r\n}\r\n\r\n.brandname {\r\n        margin: 1px 5px 0 0;\r\n        font-size: 13px; \r\n        font-weight: 700;\r\n        width: 300px;\r\n        display: inline-block;\r\n        float: none;\r\n}\r\n\r\n.navbar img {\r\n\r\n        height: 52px;\r\n        width: 55px;\r\n        margin: 0 6% auto 4%;\r\n}\r\n\r\n.ssnavbar {\r\n        display: inherit;\r\n        margin: 7px 0 0 0;\r\n}\r\n\r\n.calltoaction {\r\n        font-size: 12px;\r\n        height: 40px;\r\n        margin: -5px 15px -3px 0;\r\n        padding: 4px 0 4px 40px;\r\n        display: inline-block;\r\n        float: right;\r\n    }\r\n\r\n\r\n .calltoaction button {\r\n        color: rgba(70, 26, 66, .9);\r\n        font-size: 14px;\r\n        background: none;\r\n        background-color: none;\r\n        box-shadow: 0 0 0 0 #000; \r\n    }\r\n\r\n.ss_search_row {\r\n         width: 100%;\r\n         margin-bottom: 5px;\r\n}\r\n\r\n.ss_search_row .column2 {\r\n        padding: 0;\r\n}\r\n\r\n.ss-search {\r\n       width: auto;\r\n       height: auto;\r\n       font-size: 20px;\r\n       margin: 0 0 0 0; \r\n       background: none;\r\n       float: left;\r\n       display: inherit;\r\n}\r\n\r\n.ss {\r\n       background: none;\r\n       border: none; \r\n       height: auto;\r\n       width: auto;\r\n       margin: 13px 0 0 39px;\r\n       padding: 4px 0 0 0;\r\n       display: inline-block;\r\n}\r\n\r\n.showposts > .row > .col-xs-8 {\r\n        padding-left: 0;\r\n}\r\n\r\n.form-control {\r\n        padding-right: 30px;\r\n      }\r\n      \r\n.form-control + .ss-searchicon {\r\n        position: absolute;\r\n        right: 17px;\r\n        padding: 8px 27px;\r\n      }\r\n\r\n.ss-searchbox {\r\n        height: 27px;\r\n        width: 88%;\r\n        border: 1px solid  rgba(0,0,0, 0.1); \r\n        border-radius: 17px;\r\n        background-color: none;\r\n        border-right: none;\r\n        margin-top: 10px;\r\n        margin-left: 0;\r\n        padding: 0 30px 0 15px;\r\n        display: inline-block;\r\n}\r\n\r\n.ss-searchicon {\r\n        color: rgba(0,0,0, 0.3);\r\n        font-size: 12px;\r\n        margin-top: 10px;\r\n        display: inline-block;\r\n}\r\n\r\n.Rudimwanzobutton_ss {\r\n        color: black;\r\n        float: left;\r\n        background: rgba(0,0,0, 0.7);\r\n        height: 25px;\r\n        width: 25px;\r\n        margin: 7px 0 0 8px; \r\n        border:  none;\r\n        border-radius: 50%;\r\n        box-shadow: 1px 1.5px 12px -2px #000;\r\n}\r\n\r\n.back-arrow {\r\n        color: black;\r\n        float: left;\r\n        height: 30px !important;\r\n        width: 30px !important;\r\n        margin: 1px 0 0 10px !important; \r\n        border:  none;\r\n        border-radius: 50%;\r\n}\r\n\r\n.glyphicon-arrow-left {\r\n        color: #fff;\r\n        width: 14px;\r\n        height: 16px;\r\n        margin: auto auto;\r\n}\r\n\r\n.search_input {\r\n        width: 130px;\r\n        height: 20px;\r\n        padding: 0 0 0 9px;\r\n        border:  none;\r\n        margin: 11px 0 0 10px;\r\n        border-radius: 9px;\r\n        float: left;\r\n}\r\n\r\ninput::-webkit-input-placeholder {\r\n  color: #cdcdcd;\r\n  }\r\n\r\ninput:-ms-input-placeholder {\r\n  color: #cdcdcd;\r\n  }\r\n\r\ninput::placeholder {\r\n  color: #cdcdcd;\r\n  }\r\n\r\n\r\n.HM {\r\n        background-color: rgba(70, 26, 66, 1);\r\n        border: none;\r\n        padding: 8px 6px;\r\n        margin: 3px 15px 4px 22px;\r\n        float: left;\r\n}\r\n\r\n.HM:focus {\r\n        background-color: rgba(70, 26, 66, 1) !important;      \r\n}\r\n\r\n.HM span {\r\n        width: 20px;\r\n}\r\n\r\n\r\n\r\n.menuitems2 {\r\n        margin: 0 0;\r\n}\r\n\r\n.menuitems {\r\n        background-color: rgba(70, 26, 66, 1);          \r\n        margin: 2px 0 0 0;\r\n        border-bottom-right-radius: 0;\r\n        border-bottom-left-radius: 0;\r\n}\r\n\r\n.navbar-collapse {\r\n        padding-right: 0;\r\n}\r\n\r\n\r\n.ssmenu {\r\n        width: 75%;\r\n        height: 77vh;\r\n        padding: 0;\r\n        margin: 0 0 0 0;\r\n        border: none;\r\n        border-bottom-right-radius: 4px;\r\n       \r\n        display: inherit;\r\n        overflow-x: auto;\r\n        position: absolute;\r\n        \r\n}\r\n\r\n.menuitem_SS {\r\n      background-color:rgba(70, 26, 66, 1);/* linear-gradient(#292626,rgb(172, 169, 169));*/\r\n      width:100%;\r\n      height: auto;\r\n      padding: 30px 0 7px 10px !important;\r\n      margin: 0 !important;\r\n      display: block;  \r\n      \r\n}\r\n\r\n.menuitem_SS li {\r\n        color: #fff;\r\n        width: 200px;\r\n       /* margin-left: auto;\r\n        margin-right: auto; */\r\n        margin-bottom: 25px ; \r\n       /* background: linear-gradient(#f1eded,rgb(172, 169, 169)) */ \r\n        text-align: left;\r\n} \r\n\r\n.menuitem_SS li .glyphicon {              /*CHANGE*/\r\n        color: #fff;\r\n}\r\n\r\n.menuitem_SS li i {\r\n        margin: 0 15px 0 10px;\r\n}\r\n\r\n.menuitem_SS li img {\r\n        height: 16px;\r\n        width: 16px;\r\n        margin: 0 0;\r\n}\r\n\r\n.menuitem_SS li a {\r\n        color: #fff !important;\r\n} \r\n\r\n.menuitem_SS hr {\r\n       margin: 40px 20px 30px 10px;\r\n  }\r\n\r\n#mapishiyavyakula {\r\n       width: 100%;\r\n}\r\n\r\n.ss_makalaitem a {\r\n       color: #fff;\r\n       margin:  0 0 0 15px;\r\n}\r\n\r\nnav ul li a {                                    /*CHANGE*/\r\n        color: #fff !important;\r\n        letter-spacing: 0px;\r\n  }\r\n\r\n.ss_makalatitle {                               /*CHANGE*/\r\n        color: #fff !important; \r\n        margin: 0 0 15px 55px !important;\r\n        list-style-type: none;\r\n        font-size: 16px;\r\n}\r\n\r\n\r\n.ss_makalaitem {\r\n        background: none;\r\n        border: none;\r\n}\r\n\r\n.ss_makalaitems {\r\n        margin: 0 0 15px 0;\r\n}\r\n\r\n\r\n\r\n\r\n/*.menuitem_SS button {\r\n        color: #fff;\r\n        background-color: #66a8a6;\r\n        width: 150px;\r\n        height: 45px;\r\n        margin: 0 auto;\r\n        border:  none;\r\n        padding-left: 0;\r\n        border-radius: 4px;\r\n}*/\r\n\r\n.sidemenu-badge {\r\n        color: #fff;\r\n        font-size: 0.8em;\r\n        font-style: normal;\r\n        margin: 80px 0 0 55px;\r\n        text-align: left;\r\n}\r\n\r\n.drocol {\r\n        padding: 0 15px 0 15px;\r\n  }\r\n\r\n/* .sscol {\r\n        display: none;\r\n  } */\r\n\r\n.searchsection {\r\n        float: none;\r\n }\r\n\r\n.horizontalline {\r\n       display: none;\r\n}\r\n\r\n.search {\r\n        width: 94%;\r\n        margin: 0 0 3vh 0;\r\n}\r\n\r\n#ommitedinss {\r\n        display: none;\r\n}\r\n\r\n\r\n\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wazazi/wazazi.component.html":
/***/ (function(module, exports) {

module.exports = " <div class=\"navdiv\">\r\n  <nav class=\"navbar navbar-inverse navbar-fixed-top\">\r\n    <div class=\"slideFT\">\r\n      <div class=\"row menurow\">\r\n          <div class=\"col-sm-2 logorow\">\r\n         \r\n          <div class=\"brand\"><img src=\"../../../assets/images/LISHE 360 2.png\" class=\"icon\"><p class=\"brandname\">LISHE 360</p></div>\r\n          </div>\r\n         \r\n          <div class=\"ssnavbar \">   <!-- for small screen menu -->\r\n           \r\n            <!--<button class=\"Rudimwanzobutton_ss\" *ngIf=\"!showSearchInput\"  (click) = \"rudiMwanzo()\"><i class=\"glyphicon glyphicon-arrow-left\"></i></button> -->\r\n            <img src=\"../../../assets/images/back-arrow.png\"  class=\"back-arrow\" *ngIf=\"!showSearchInput\"  (click) = \"rudiMwanzo()\" (click)=\"closeDrawer()\"> \r\n            <!-- <input class=\"search_input\" placeholder=\"Tafuta\" *ngIf=\"showSearchInput\" (keyup)=\"keypressed($event)\"> -->\r\n            <button type=\"button\" class=\"navbar-toggle collapsed HM\" (click)=\"toggleState()\">\r\n                   <span class=\"sr-only\">Toggle navigation</span>\r\n                   <span class=\"icon-bar\"></span>\r\n                   <span class=\"icon-bar\"></span>\r\n                   <span class=\"icon-bar\"></span>\r\n            </button> <!-- #1 -->\r\n            <div class=\"calltoaction\"><button (click)= \"togglemyOd()\">Jiunge na Program</button></div>\r\n            <div class=\"clear\"></div>\r\n          </div> \r\n\r\n          <div class=\"col-sm-10 menuitems2\">\r\n                <ul>\r\n                    <div class=\"collapse navbar-collapse\">   \r\n                        <li><a routerLink=\"blog-section\" routerLinkActive=\"active\" (click) = \"returnsearch(); returnSearchInput(); showarticle.endDisplay()\" class=\"Mwanzo\" >Mwanzo</a></li>\r\n                        <li><a routerLink=\"bidhaa\" routerLinkActive=\"active\" (click) = \"omitsearch(); showarticle.endDisplay(); loadProducts()\">Bidhaa</a></li>\r\n                        <li><a routerLink=\"kuhusu-jlb\" routerLinkActive=\"active\" (click) = \"omitsearch(); showarticle.endDisplay()\">Kuhusu lishe360</a></li>\r\n                        <li><a routerLink=\"shuhuda\" routerLinkActive=\"active\" (click) = \"omitsearch(); showarticle.endDisplay()\">Shuhuda</a></li>  \r\n                        <li class=\"calltoactionli\"><div class=\"calltoaction\"><button (click)= \"togglemyOd()\">Program LISHE 360</button></div></li>\r\n                      \r\n                       \r\n                    </div>\r\n                </ul>\r\n       </div>\r\n         \r\n      </div>\r\n      \r\n      \r\n       <ul class=\"main_menu menuitems nav navbar-nav\"> \r\n      \r\n        </ul>\r\n       </div>\r\n      \r\n       <div class=\"ssmenu\" *ngIf=\"isIn\" [@flyInOut]=\"'in'\"> \r\n        <ul class=\"menuitem_SS  navbar-nav\"> \r\n          <li><i class=\"glyphicon glyphicon-home\"></i><a routerLink=\"blog-section\" routerLinkActive=\"active\" (click) = \"returnsearch(); returnSearchInput(); toggleState()\" class=\"Mwanzo\" >Mwanzo</a></li>  \r\n          <li><i><img src=\"./../../../assets/images/cart-of-ecommerce.png\"></i><a routerLink=\"bidhaa\" routerLinkActive=\"active\" (click) = \"omitsearch(); toggleState();loadProducts()\">Bidhaa</a></li>\r\n          <li><i><img src=\"./../../../assets/images/about-us.png\"></i><a routerLink=\"kuhusu-jlb\" routerLinkActive=\"active\" (click) = \"omitsearch(); toggleState()\">Kuhusu lishe360</a></li> \r\n          <li><i><img src=\"./../../../assets/images/testimonials.png\"></i><a routerLink=\"shuhuda\" (click) = \"omitsearch(); toggleState()\">Shuhuda</a></li> \r\n          \r\n          <hr>\r\n\r\n\r\n          <li id=\"mapishiyavyakula\"><i><img src=\"./../../../assets/images/baby-food.png\"></i><a (click)=\"showMakalaTitles()\">Mapishi ya vyakula</a></li>\r\n                   <!-- <button class=\"somamakalabtn_ss\" (click)=\"showarticle.ifdisplay()\"> Soma Makala </button>-->\r\n                   \r\n            <div *ngIf=\"showmakalaTitlesSS\">\r\n             <div *ngFor= \"let c of category; let i = index\">       <!--for each age category -->\r\n                <a>\r\n                 <li class=\"ss_makalatitle\" (click)=\"getMakala(c.id)\" (click)=\"displayThisItem(i)\">{{c.category_name}} </li> \r\n                \r\n                </a>\r\n       \r\n                <div  *ngIf= \"toggle[i]\">           \r\n                 <div *ngFor= \"let m of makala\" class=\"ss_makalaitems\">\r\n                   \r\n                     <button class=\"ss_makalaitem\" \r\n                     (click)=\"omitsearch()\" (click)=\"closeAllAgeCategories()\" \r\n                      (click)=\"toggleState()\">\r\n                     <a routerLink=\"/wazazi/makala/{{m.id}}\"> {{m.title}} </a>        \r\n                     </button>\r\n                   \r\n                 </div>\r\n                </div> \r\n             </div>\r\n            </div>\r\n             \r\n     \r\n\r\n\r\n          <p class=\"sidemenu-badge\">LISHE 360</p>        \r\n        </ul>\r\n        <app-makala-contents #showarticle (myEvent)=\"myEvent($event)\"></app-makala-contents>\r\n       </div>    \r\n </nav>\r\n </div>\r\n <app-taharifa-kujiunga *ngIf=\"thanksforjoiningprogram\" (closeModal)=\"closeModal($event)\"></app-taharifa-kujiunga>\r\n <app-kujiunga class=\"kujiunga\" *ngIf=\"showmyod\" (myevenT)=\"myevenT($event)\" (closeButtonClicked)=\"closeButtonClicked($event)\"></app-kujiunga>    \r\n     \r\n <!-- End of navigation section -->\r\n \r\n \r\n <div class=\"row showposts\">\r\n  <div class=\"row ss_search_row\" *ngIf=\"showsearch\"><div class=\"col-xs-2\"><button (click)= \"showSearchbox()\" class=\"ss\"><!--<i class=\"glyphicon glyphicon-search ss-search\" *ngIf=\"showsearch\"  ></i>--></button></div> \r\n  \r\n   <div class=\"col-xs-10 column2\">\r\n   <input type=\"search\" class=\"ss-searchbox form-control\" name=\"tittle\" #searchTerm  placeholder=\"Tafuta\"  (keyup)=\"keypressed($event)\">\r\n   <i class=\"glyphicon glyphicon-search ss-searchicon\"></i>\r\n   </div>\r\n  \r\n\r\n  </div> <!--*ngIf=\"showsearch && searchboxSS\"-->\r\n  \r\n     <div class=\"col-sm-9 drocol\">\r\n       <div *ngIf=\"displayRouterOutlet\">\r\n        <router-outlet>\r\n          \r\n                                     <!-- (activate)=\"myEvent($event)\" could be not necessary  (activate)=\"BlogSectionComponent = $event\" (activate)=\"BlogSomaZaidiComponent = $event\" \r\n                                    -->\r\n\r\n        </router-outlet>\r\n       </div>\r\n       <!--<app-makala *ngIf=\"showArticle\"></app-makala>-->\r\n     </div>\r\n\r\n\r\n     <!--search section begins-->\r\n\r\n     <div class=\"col-sm-3 sscol\" *ngIf=\"showsearch\">\r\n\r\n        <div class=\"searchsection row\">\r\n        <div class=\"search\" >\r\n            <div id=\"ommitedinss\">\r\n            <input type=\"search\" class=\"searchbox\" name=\"tittle\" #searchTerm  placeholder=\"Tafuta\" *ngIf=\"showSearchInput\" (keyup)=\"keypressed($event)\">\r\n            <button (click)=\"performSearch(searchTerm)\" class=\"Tafutabutton\" *ngIf=\"showSearchInput\"><i class=\"glyphicon glyphicon-search\"></i></button>\r\n            <br *ngIf=\"showSearchInput\">\r\n            <!--<hr>-->\r\n            <br><br><br>\r\n            <button class=\"Rudimwanzobutton\" *ngIf=\"!showSearchInput\"  (click) = \"rudiMwanzo()\">Rudi Mwanzo</button>  <!--<i class=\"glyphicon glyphicon-arrow-left\"></i>-->\r\n            \r\n            <a><button class=\"Makalabutton\" (click)=\"showarticle.ifdisplay()\"><p>Mapishi ya vyakula</p><img src=\"./../../../assets/images/baby-food.png\"></button></a> <!--<i class=\"glyphicon glyphicon-list-alt\"></i>-->\r\n            <p class=\"makalamaelekezo\">Bonyeza kitufe hiki kupata makala zenye maelekezo ya uandaaji wa vyakula vya watoto wa umri mbalimbali</p>\r\n            <br>  \r\n            </div>\r\n\r\n            <hr class=\"horizontalline\">\r\n            <h4 class=\"bidhaasectiontitle\">Bidhaa Mpya</h4>\r\n            \r\n           <!--  \r\n            <div class=\"row anitem\" *ngFor = \"let product of bidhaa\">\r\n              <div *ngIf = {{product.status}}>\r\n              <div class=\"col-sm-4\">\r\n                <img src=\"{{prouct.image_url}}\" class=\"itemimage\">\r\n              </div>\r\n\r\n              <div class=\"col-sm-8\">\r\n                <p class=\"itemdescription\">\r\n                  {{product.descripiton}}\r\n                </p> \r\n                <p class=\"itemprice\">{{product.price}}</p> \r\n              </div>\r\n            </div>\r\n          </div> -->\r\n\r\n             <div class=\"row anitem\">\r\n                 <div class=\"col-sm-4\">\r\n                   <img src=\"./../../../assets/images/CFT.jpeg\" class=\"itemimage\">\r\n                 </div>\r\n\r\n                 <div class=\"col-sm-8\">\r\n                   <p class=\"itemdescription\">\r\n                     Pacifier\r\n                   </p> \r\n                   <p class=\"itemprice\">Tsh 7000</p> \r\n                 </div>\r\n                 <p id=\"contact\" *isMobile ><a href=\"https://api.whatsapp.com/send?phone=255688192446&text=Nahitaji%20Pacifier\" > Nunua Sasa</a></p>\r\n                 <p id=\"contact\" *isDesktop ><a (click) = \"showNunuaBidhaaForm(i)\" > Nunua Sasa</a></p>\r\n \r\n             </div>\r\n\r\n             <div class=\"row anitem\">\r\n                <div class=\"col-sm-4\">\r\n                    <img src=\"./../../../assets/images/CFT1.jpeg\" class=\"itemimage\">\r\n                </div>\r\n\r\n                <div class=\"col-sm-8\">\r\n                  <p class=\"itemdescription\">\r\n                    Dishi la chakula cha mtoto\r\n                  </p> \r\n                  <p class=\"itemprice\">Tsh 7000</p> \r\n                </div>\r\n                <p id=\"contact\" *isMobile ><a href=\"https://api.whatsapp.com/send?phone=255688192446&text=Nahitaji%20Dishi la chakula cha mtoto\" > Nunua Sasa</a></p>\r\n                <p id=\"contact\" *isDesktop ><a (click) = \"showNunuaBidhaaForm(i)\" > Nunua Sasa</a></p>\r\n \r\n            </div>\r\n\r\n          <div *ngFor = \"let bidhaaMpya of bidhaa; let i = index\">\r\n\r\n            <div class=\"row anitem\">\r\n                    <div class=\"col-sm-4\">\r\n                        <img src={{bidhaaMpya.image.url}} class=\"itemimage\">\r\n                    </div>\r\n    \r\n                    <div class=\"col-sm-8\">\r\n                      <p class=\"itemdescription\">\r\n                        {{bidhaaMpya.name}}\r\n                      </p> \r\n                      <p class=\"itemprice\">{{bidhaaMpya.price}}</p> \r\n                    </div>\r\n                    <p id=\"contact\" *isMobile ><a [href]=\"whatsapplink[i]\" > Nunua Sasa</a></p>\r\n                    <p id=\"contact\" *isDesktop ><a (click) = \"showNunuaBidhaaForm(i)\" > Nunua Sasa</a></p>\r\n              </div>\r\n              \r\n\r\n          </div>\r\n\r\n        </div>\r\n        </div> \r\n        </div>\r\n        <app-nunuabidhaa class=\"nunuabidhaaform\" *ngIf=\"isNunuaBidhaaForm\" (myevenT)=\"myevenTWazazi($event)\" (closeButtonClicked)=\"closeButtonClickedWazazi($event)\" [ordertext]='orderText'></app-nunuabidhaa> \r\n        <app-makala-contents class=\"makalatitles\" #showarticle (myEvent)=\"myEvent($event)\"></app-makala-contents> \r\n     \r\n\r\n </div>\r\n <app-footer ></app-footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/wazazi/wazazi.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_makalatitles_service__ = __webpack_require__("../../../../../src/app/core/makalatitles.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_search_service__ = __webpack_require__("../../../../../src/app/core/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_passevents_service__ = __webpack_require__("../../../../../src/app/core/passevents.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_bidhaa_service__ = __webpack_require__("../../../../../src/app/core/bidhaa.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_datacarrier_service__ = __webpack_require__("../../../../../src/app/core/datacarrier.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WazaziComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var WazaziComponent = (function () {
    function WazaziComponent(searchService, passeventsService, bidhaaService, router, location, makalatitlesService, datacarrierService) {
        var _this = this;
        this.searchService = searchService;
        this.bidhaaService = bidhaaService;
        this.router = router;
        this.location = location;
        this.makalatitlesService = makalatitlesService;
        this.datacarrierService = datacarrierService;
        this.bidhaa = [];
        this.whatsapplink = []; /* an array of product names is
                          created when componet is loaded */
        this.yScrollStack = [];
        this.searchTerm$ = new __WEBPACK_IMPORTED_MODULE_9_rxjs_Subject__["Subject"]();
        this.showId = false;
        this.showthisId = false;
        this.showArticle = false;
        this.displayRouterOutlet = true;
        this.state = 'inactive';
        this.comein = false;
        this.showSearchInput = true;
        this.searchboxSS = false;
        this.showmakalaTitles = false;
        this.showmakalaTitlesSS = true;
        this.toggle = {};
        this.showmyod = false;
        this.thanksforjoiningprogram = false;
        this.url = '/wazazi/makala/';
        this.urllength = this.url.length;
        this.isNunuaBidhaaForm = false;
        this.isIn = false; // store state
        // passeventsService.navigateout$.subscribe(
        //   searchInputStatus => { this.showSearchInput = searchInputStatus}
        // );  // causes ExpressionChangedAfterItHasBeenCheckedError error
        this.bidhaa = [];
        this.whatsapplink = [];
        this.searchService.callSearch(this.searchTerm$);
        this.subscription = this.makalatitlesService.fetchedCategories.subscribe(function (value) {
            _this.category = value;
        });
        this._subscription = this.makalatitlesService.fetchedArticles.subscribe(function (value) {
            _this.makala = value;
            //this.setToNull();
        });
        // this.bidhaa = bidhaaService.bidhaa;
        this.subscription = this.bidhaaService.fetchedBidhaa.subscribe(function (value) {
            _this.bidhaa.length = 0; //clear bidhaa array; avoid multiple entries
            value.map(function (x) { return (!x.status ? _this.bidhaa.push(x) : ''); }); //create an array of promotion products
            value.map(function (x, index) { return (!x.status ? _this.whatsapplink.push("https://api.whatsapp.com/send?phone=255688192446&text=Nahitaji%20" + x.name) : ''); }); //create an array of products names
            console.log(_this.whatsapplink);
        });
        this.datacarrierService.setLandingPageStatus(false); // to remove landing page from view
    }
    WazaziComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('wazazi component created');
        this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
            console.log(_this.lastPoppedUrl + 'xds');
            if (_this.lastPoppedUrl === ('/wazazi/blog-section')) {
                _this.showsearch = true;
                _this.showSearchInput = true;
            }
            console.log('wazazi component location tracked *');
        });
        this.router.events.subscribe(function (ev) {
            console.log('router event fired');
            if (ev instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* NavigationStart */]) {
                if (ev.url == _this.lastPoppedUrl) {
                    _this.yScrollStack.push(window.scrollY);
                    console.log(_this.lastPoppedUrl);
                    console.log(window.scrollY);
                }
            }
            else if (ev instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* NavigationEnd */]) {
                if (ev.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    var that = _this;
                    setTimeout(function () {
                        window.scrollTo(0, that.yScrollStack.pop());
                        console.log('scrolled to initial y coordinate');
                        console.log(ev.url);
                    }, 4000);
                }
                else {
                    window.scrollTo(0, 0);
                    console.log('scrolled to ythis = 0');
                }
            }
        });
        this.currentUrl = this.router.url;
        console.log(this.currentUrl + 'xks');
        if (this.currentUrl === ('/wazazi/blog-section')) {
            this.showsearch = true;
            console.log('1. if');
            console.log(this.showsearch);
        }
        else if (this.currentUrl.substring(0, 21) === '/wazazi/blog-section/') {
            this.showsearch = true;
        }
        else if (this.currentUrl.substring(0, this.urllength) === '/wazazi/makala/') {
            this.showsearch = true;
        }
        else {
            this.showsearch = false;
            console.log('2. else');
            console.log(this.showsearch);
        }
        this.loadProducts(); //Get all products
        this.makalatitlesService.getMakalatitles();
    };
    WazaziComponent.prototype.myevenT = function ($event) {
        this.showmyod = !this.showmyod;
        this.thanksforjoiningprogram = !this.thanksforjoiningprogram;
    };
    WazaziComponent.prototype.closeButtonClicked = function ($event) {
        if (this.showmyod) {
            this.showmyod = !this.showmyod;
        }
        console.log('showmyod state changed');
    };
    WazaziComponent.prototype.closeModal = function ($event) {
        if (this.thanksforjoiningprogram) {
            this.thanksforjoiningprogram = !this.thanksforjoiningprogram;
        }
    };
    WazaziComponent.prototype.togglemyOd = function () {
        this.showmyod = !this.showmyod;
    };
    //#region 
    WazaziComponent.prototype.keypressed = function ($event) {
        if ($event.target.value.length === 0) {
            console.log('input field is now empty');
            this.searchService.searchResultsView(false);
        }
        else {
            console.log($event.target.value + ' is the pressed key');
            this.searchService.searchResultsView(true);
            this.searchTerm$.next($event.target.value);
        }
    };
    WazaziComponent.prototype.toggleState = function () {
        var bool = this.isIn;
        this.isIn = bool === false ? true : false;
        console.log('isIn changes state');
    };
    WazaziComponent.prototype.closeDrawer = function () {
        this.isIn = false;
    };
    WazaziComponent.prototype.toggleState1 = function () {
        this.isIn = false;
        console.log('isIn changes state here');
    };
    WazaziComponent.prototype.myEvent = function ($event) {
        //this.showArticle = !this.showArticle;
        //this.showthisId = false;
        //this.displayRouterOutlet = !this.displayRouterOutlet;
        this.showSearchInput = false;
        console.log('event fired');
    };
    WazaziComponent.prototype.returnSearchInput = function () {
        this.showSearchInput = true;
    };
    WazaziComponent.prototype.rudiMwanzo = function () {
        this.showsearch = true;
        this.showSearchInput = true;
        this.location.back();
    };
    WazaziComponent.prototype.articleEvent = function () {
        this.showId = !this.showId;
        this.showthisId = !this.showthisId;
    };
    WazaziComponent.prototype.performSearch = function (searchTerm) {
        this.searchService.performSearch(searchTerm);
    };
    WazaziComponent.prototype.showSearchbox = function () {
        console.log('wen is today ?');
        this.searchboxSS = !this.searchboxSS;
    };
    WazaziComponent.prototype.fcomein = function () {
        this.comein = !this.comein;
    };
    WazaziComponent.prototype.toggleId = function () {
        this.showId = !this.showId;
        //this.state = (this.state === 'inactive' ? 'active' : 'inactive');
    };
    WazaziComponent.prototype.omitsearch = function () {
        this.showsearch = false;
    };
    WazaziComponent.prototype.returnsearch = function () {
        this.showsearch = true;
    };
    WazaziComponent.prototype.showMakalaTitles = function () {
        this.showmakalaTitles = !this.showmakalaTitles;
    };
    WazaziComponent.prototype.getMakala = function (id) {
        this.makala = null;
        this.makalatitlesService.getMakala(id);
    };
    WazaziComponent.prototype.getArticle = function (id) {
        this.makalatitlesService.getArticle(id);
    };
    WazaziComponent.prototype.displayThisItem = function (i) {
        for (var a = 0; a < this.category.length; a++) {
            if (i === a) {
                this.toggle[i] = !this.toggle[i];
            }
            else {
                this.toggle[a] = false;
            }
        }
    };
    WazaziComponent.prototype.closeAllAgeCategories = function () {
        this.toggle = [];
    };
    //To fetch products displayed on adds section
    WazaziComponent.prototype.getBidhaa = function () {
        var _this = this;
        this.bidhaaService.getProducts().then(function (bidhaa) { return _this.bidhaa = bidhaa; });
    };
    //To fetch all products when navigating to products page
    WazaziComponent.prototype.loadProducts = function () {
        console.log('CALLED');
        //this.bidhaa.length = 0;    
        this.bidhaaService.getAllBidhaa();
    };
    WazaziComponent.prototype.promotedProductsLinks = function (value, index) {
        this.whatsapplink[index] = "https://api.whatsapp.com/send?phone=255688192446&text=Nahitaji%20" + value.name;
    };
    WazaziComponent.prototype.showNunuaBidhaaForm = function (i) {
        this.orderText = 'Nahitaji ' + this.bidhaa[i].name;
        this.isNunuaBidhaaForm = true;
    };
    WazaziComponent.prototype.closeButtonClickedWazazi = function ($event) {
        if (this.isNunuaBidhaaForm) {
            this.isNunuaBidhaaForm = false;
        }
        console.log('closebuttonclicked method');
        console.log(this.isNunuaBidhaaForm);
    };
    WazaziComponent.prototype.myevenTWazazi = function ($event) {
        if (this.isNunuaBidhaaForm) {
            this.isNunuaBidhaaForm = false;
        }
    };
    return WazaziComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('child'),
    __metadata("design:type", Object)
], WazaziComponent.prototype, "child", void 0);
WazaziComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-wazazi',
        template: __webpack_require__("../../../../../src/app/wazazi/wazazi.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wazazi/wazazi.component.css")],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["a" /* trigger */])('flyInOut', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["b" /* state */])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ transform: 'translateX(0px)' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* transition */])('void => *', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ transform: 'translateX(-100%)' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(500)
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* transition */])('* => void', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(500, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ transform: 'translateX(-100%)' }))
                ])
            ])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__core_passevents_service__["a" /* PasseventsService */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__core_search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__core_search_service__["a" /* SearchService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__core_passevents_service__["a" /* PasseventsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__core_passevents_service__["a" /* PasseventsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__core_bidhaa_service__["a" /* BidhaaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__core_bidhaa_service__["a" /* BidhaaService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__core_makalatitles_service__["a" /* MakalatitlesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__core_makalatitles_service__["a" /* MakalatitlesService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8__core_datacarrier_service__["a" /* DatacarrierService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__core_datacarrier_service__["a" /* DatacarrierService */]) === "function" && _g || Object])
], WazaziComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=wazazi.component.js.map

/***/ }),

/***/ "../../../../../src/app/wazazi/wazazi.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wazazi_routing_module__ = __webpack_require__("../../../../../src/app/wazazi/wazazi-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_social_share__ = __webpack_require__("../../../../ng2-social-share/src/ng2-social-share.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_social_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_social_share__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_responsive__ = __webpack_require__("../../../../ng2-responsive/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_responsive___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_responsive__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_search_service__ = __webpack_require__("../../../../../src/app/core/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_subscribers_service__ = __webpack_require__("../../../../../src/app/core/subscribers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__core_makalatitles_service__ = __webpack_require__("../../../../../src/app/core/makalatitles.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__core_comment_service__ = __webpack_require__("../../../../../src/app/core/comment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__wazazi_component__ = __webpack_require__("../../../../../src/app/wazazi/wazazi.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__blog_section_blog_section_component__ = __webpack_require__("../../../../../src/app/wazazi/blog-section/blog-section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__blog_soma_zaidi_blog_soma_zaidi_component__ = __webpack_require__("../../../../../src/app/wazazi/blog-soma-zaidi/blog-soma-zaidi.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__kuhusu_jlb_kuhusu_jlb_component__ = __webpack_require__("../../../../../src/app/wazazi/kuhusu-jlb/kuhusu-jlb.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__kujiunga_kujiunga_component__ = __webpack_require__("../../../../../src/app/wazazi/kujiunga/kujiunga.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__makala_contents_makala_contents_component__ = __webpack_require__("../../../../../src/app/wazazi/makala-contents/makala-contents.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__makala_navigation_makala_navigation_component__ = __webpack_require__("../../../../../src/app/wazazi/makala-navigation/makala-navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__subscribe_subscribe_component__ = __webpack_require__("../../../../../src/app/wazazi/subscribe/subscribe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__footer_footer_component__ = __webpack_require__("../../../../../src/app/wazazi/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__header_header_component__ = __webpack_require__("../../../../../src/app/wazazi/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__makala_makala_component__ = __webpack_require__("../../../../../src/app/wazazi/makala/makala.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__kutuhusu_kutuhusu_component__ = __webpack_require__("../../../../../src/app/wazazi/kutuhusu/kutuhusu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__shuhuda_shuhuda_component__ = __webpack_require__("../../../../../src/app/wazazi/shuhuda/shuhuda.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__taharifa_subscription_taharifa_subscription_component__ = __webpack_require__("../../../../../src/app/wazazi/taharifa-subscription/taharifa-subscription.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__taharifa_kujiunga_taharifa_kujiunga_component__ = __webpack_require__("../../../../../src/app/wazazi/taharifa-kujiunga/taharifa-kujiunga.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__makala1_makala1_component__ = __webpack_require__("../../../../../src/app/wazazi/makala1/makala1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__blog_soma_zaidi1_blog_soma_zaidi1_component__ = __webpack_require__("../../../../../src/app/wazazi/blog-soma-zaidi1/blog-soma-zaidi1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__bidhaa_bidhaa_component__ = __webpack_require__("../../../../../src/app/wazazi/bidhaa/bidhaa.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__bidhaa_category_bidhaa_category_component__ = __webpack_require__("../../../../../src/app/wazazi/bidhaa-category/bidhaa-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__upload_video_upload_video_component__ = __webpack_require__("../../../../../src/app/wazazi/upload-video/upload-video.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__nunuabidhaa_nunuabidhaa_component__ = __webpack_require__("../../../../../src/app/wazazi/nunuabidhaa/nunuabidhaa.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__safepipe_pipe__ = __webpack_require__("../../../../../src/app/wazazi/safepipe.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__landingpage_landingpage_component__ = __webpack_require__("../../../../../src/app/wazazi/landingpage/landingpage.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WazaziModule", function() { return WazaziModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








//import { JwSocialButtonsModule } from 'jw-angular-social-buttons';



























var WazaziModule = (function () {
    function WazaziModule() {
    }
    return WazaziModule;
}());
WazaziModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__wazazi_routing_module__["a" /* WazaziRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_pagination__["a" /* NgxPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_7_ng2_responsive__["ResponsiveModule"],
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_12__wazazi_component__["a" /* WazaziComponent */],
            __WEBPACK_IMPORTED_MODULE_13__blog_section_blog_section_component__["a" /* BlogSectionComponent */],
            __WEBPACK_IMPORTED_MODULE_14__blog_soma_zaidi_blog_soma_zaidi_component__["a" /* BlogSomaZaidiComponent */],
            __WEBPACK_IMPORTED_MODULE_15__kuhusu_jlb_kuhusu_jlb_component__["a" /* KuhusuJlbComponent */],
            __WEBPACK_IMPORTED_MODULE_16__kujiunga_kujiunga_component__["a" /* KujiungaComponent */],
            __WEBPACK_IMPORTED_MODULE_17__makala_contents_makala_contents_component__["a" /* MakalaContentsComponent */],
            __WEBPACK_IMPORTED_MODULE_18__makala_navigation_makala_navigation_component__["a" /* MakalaNavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_19__subscribe_subscribe_component__["a" /* SubscribeComponent */],
            __WEBPACK_IMPORTED_MODULE_20__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_21__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_22__makala_makala_component__["a" /* MakalaComponent */],
            __WEBPACK_IMPORTED_MODULE_23__kutuhusu_kutuhusu_component__["a" /* KutuhusuComponent */],
            __WEBPACK_IMPORTED_MODULE_24__shuhuda_shuhuda_component__["a" /* ShuhudaComponent */],
            __WEBPACK_IMPORTED_MODULE_25__taharifa_subscription_taharifa_subscription_component__["a" /* TaharifaSubscriptionComponent */],
            __WEBPACK_IMPORTED_MODULE_26__taharifa_kujiunga_taharifa_kujiunga_component__["a" /* TaharifaKujiungaComponent */],
            // CeiboShare,
            __WEBPACK_IMPORTED_MODULE_27__makala1_makala1_component__["a" /* Makala1Component */],
            __WEBPACK_IMPORTED_MODULE_28__blog_soma_zaidi1_blog_soma_zaidi1_component__["a" /* BlogSomaZaidi1Component */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_social_share__["CeiboShare"],
            __WEBPACK_IMPORTED_MODULE_29__bidhaa_bidhaa_component__["a" /* BidhaaComponent */],
            __WEBPACK_IMPORTED_MODULE_30__bidhaa_category_bidhaa_category_component__["a" /* BidhaaCategoryComponent */],
            __WEBPACK_IMPORTED_MODULE_31__upload_video_upload_video_component__["a" /* UploadVideoComponent */],
            __WEBPACK_IMPORTED_MODULE_33__safepipe_pipe__["a" /* SafePipe */],
            __WEBPACK_IMPORTED_MODULE_32__nunuabidhaa_nunuabidhaa_component__["a" /* NunuabidhaaComponent */],
            __WEBPACK_IMPORTED_MODULE_34__landingpage_landingpage_component__["a" /* LandingpageComponent */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__core_search_service__["a" /* SearchService */],
            __WEBPACK_IMPORTED_MODULE_9__core_subscribers_service__["a" /* SubscribersService */],
            __WEBPACK_IMPORTED_MODULE_10__core_makalatitles_service__["a" /* MakalatitlesService */],
            __WEBPACK_IMPORTED_MODULE_11__core_comment_service__["a" /* CommentService */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_33__safepipe_pipe__["a" /* SafePipe */],
        ]
    })
], WazaziModule);

//# sourceMappingURL=wazazi.module.js.map

/***/ }),

/***/ "../../../../../src/assets/images/happy mother-kid.jpg":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBUODAsLDBkSEw8VHhsgHx4bHR0hJTApISMtJB0dKjkqLTEzNjY2ICg7Pzo0PjA1NjP/2wBDAQkJCQwLDBgODhgzIh0iMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzP/wAARCAC3ARMDASIAAhEBAxEB/8QAHAAAAgIDAQEAAAAAAAAAAAAABAUDBgACBwEI/8QARRAAAQMDAQQGBQkGBQQDAAAAAgADBAEFEiIGERMyFCEjMUJSQVFicXIHFTNhgpGhscEkQ1OBkvAlNFTR4RcmorJjc9L/xAAZAQADAQEBAAAAAAAAAAAAAAACAwQBBQD/xAAoEQADAAICAwACAQMFAAAAAAAAAQIDERIhBDFBEzKBIlFxIzNhscH/2gAMAwEAAhEDEQA/AOKUaU7bYeckObvhUzTBnznj7KE1BzFQ8niTAKHyAg2GcG9COYHtM0pj5DAHkBTt860Ae01okRQNjUidhxM4rx8TNJ66EfFosbGSi+2iQBt+2P8Ae9XOEeba5tZ3cHFerVIPhqvDk2hOXGPCHs0C+PaI2h9mhn6gtt9CoXYvkB2aG3IiY9g35lS9sNtA2ZYawjk6bv3UU6e60ht/0ztiT5ULy7b7aEdo/p9P8lxWtU52k2ll7RzukSNIeFse6iSVT0tEVVyezxb0otFJQF7ZmjdqmCJpVRNtIoWe0QNjZTMEc3ES1RRAP9CMZBLbHKQtiqNbqg2qIkUDY1IMbd/siTq2v9oH9/cq83RO7ZXBxDyHxJ0K0U0Z8ytEWqq1pPs1Y4zivx0tCM0jlqq3NvNCtOIoCR7JWtCybBzbPlVHu1v+b5fTQDRyufXT1/yXSyEDSS7wgNg9HMgpbGy99Mpe/NvNRHRTshg3h5Sx+5amKQY0Qblim3LEQJwiOyAOcmXtJiw151keP50aFMPAl0wpkjo0iGB7NbUpmpha7NBsYkTsjyI8G0JHomMckDGoj4KOjteNYLSOYZwQUw5QbBHBxWe3vJNCj+wnrDRh4Fs1oa1tDlmR2ax1zNtBBmpeJ2aOsnQlY+wKYfZml99sdvu1pwmtZYh+iMla8/hWXU/8GzAxHJvxe5K8attm+TPSR8y3uOEW7SGGtICVcfchADs0ZeBM7zI8XaV/NetUwbV5ykgSjSlFtTCKkx7NC6GqDRoT4iMBtaBTBvJENj2aW2NlHotolpteNiiABKbGpHrYopsFoOhFMD2aFsdMmACaQWuT+6IdplOIkY0p0UzJY7W8ehWaO8qxCb5E8jkmxm0ZcbHjbyLadSZt1EtvKqc2ySsY14qje1toYXVhPpnNCeDKnNY4NykB5txfnSv5IQhTO46532P1QR0Sz1rsH3LFLuWLQTi7VcESIoYMEUKS2MSCG6eBEiKHbqpckIaJvhU7DvaILepBMA5/+UIRZ4I54KxxLZ41TIb87kjx8facLcrVBrdjYADkCPm4Y9SKUn7N216Q/hw8NZpiFAVVk/OzOtqRlih2do7gy5hKa/8AFZaS9NMNVv2tFvMsFm9LIk3prYGCMdLBtc+sjZSoRFNfaisG66eICOREqvd50i4bBdKACE9Qj691CrSn4Ii4Cd2fwM/2QS1D56+r3Iu5UCLsFKP+EB4/fXcqfG0v8kvk7a18OCFXDn+19dV6cbpTGbR60E7U3n8A8yYxuLGw7IsPEq6eiWZT6+AbVDU3sJg9HDWYeJA/vFirZ5zolojGRQkce0TVlpDT0HM7PQaU25SUbXvCStjtGrY5uJkw2CWEDocjRKVpl0+fIftfqva2aq4/B/Hej+cf6k2ZMPOKQMbNuvN5hl9rf+Fd62K0S4zmg3cPir1Lzxz/AHCWW/7F1jugmLLwKhxH5bLgAZkWr8PSrLb3jNvM0mlx9FE1yLA26i6ElraKoS2b0ZUhXFWjj+DaG44G4tDLnTptsW5SIC1uGagOiKx7NQuUVKIKe3sH3LFtuWJgJxIaIkVCIqcBUzGolBSDVeUop2GM3EOw0jZtpMINvDiZnz+ZSMxeTNGhXyIG2NlL6N4TTQa//ZWiAAG2GCqMVs+fNOWb1Et/+YkC18Rdf3L2NdhW+i2fNsc281XZ8AAcw8Cilbe2+Kx2TrRHjp4h4U/VBnezmttSDDEC3Fzd2+m+iZnha9C8NvfsawWOC3gtrhXwf1Im2/tOtV3bR+Qy5wo4O/R5Fw2iPvLd306qenvUiwOmkPrKpTZu/d7fGDDPXy6RrX8kwvkU/wDp3NDDXwCLH1de/cuUbNRpt52hai3k5jUd06iIt7wrSvorWu6q7pS0tM2I7a1lwiaqGoq1rXfTvrWvfVWrGpfRC8tWu1o+YrbQAbdkHz+FEDMPhmeev8F49DdhPyoRh2rRkJD7q1S8ZGDeGC3W2eT0gtmQZ6F5Wi9j0DonF8ZF9ylEV497Jo4pqzRAsiixJIplELQZSiKjs5uIZiiYhC4zeGpB/kYk/g0jWzjN60SLdshaJDzWfxUQbGxce4Bi7Ikjl/8AOX5b1PC+TYLfLCRpnNCWXR5G/wDAv0rTcjxwqetnsl1K2p3/ACMom0lnZcw6Q0OpOG5tsuDfZOtF8O5cm2ksfRrlcJBWeZGayoMVllsq0r1U699N9PXXvQWxzdw+cjzB9rhDkXEEqbx/n6v1Tc3i8FtVsnw+W8laqdHU5UZriaETGDBtJY843n1YorWbea5z3vR01rRK06grldDZb0Ih1zDQhatNPc5itl9mNdCqPtJg5jI/qVnivhJ5DyDmS49mYk1s9eJrTZu3u29ya074SoIl6++vV99F0Y01s5+R1O0x6SGdRRIZ5ORMwbJYo1iZoVs5HRpSgKmwWYKLZdxNBomcUUAAJlFosbNSGPCM21pR7DPQWlFMOdmmkWAEpzWvJphOX8Ke7Kudwf4Ud0ozXLkI03199a9yYRfk6uFwbad6cJGJZZOD1n7929XZmweREDbpzLnZf+yoh8fgi4VdUUmN8lcgHD+dTa4WVSEmz6+vup3+9WuNYY8WzHCAyKO0HZk51lSnv9VKp9FtUh5wOkO5Y+H0UT5qA0DeB6jLmTtb70LTULSKds1V1lzo7vlp/Pej9rob3RAlR+flL1bqpiVvahS+KGPspi+x0qCbR+IVOoaTQ6qTafw462/IZlhIMMTYKhD76VXWIzwSmGpAcjo0L76KgXONwXHQw9atuy557Pxc/CNR+6taJGO9vQeeGls5v8p2yDoSzvkAOb6cR9fmXNGGWpOfF0mS+pZLASWDaMMshXzxtRZ2oW0EhoNIZpxOmViOzwXDADyDJMcFq6y0GAR9WPMSk3LGFK10TNotgM0M3RNIzaRRTK2FxGk/hsZ4JVGazT+CGGClutFsR0WW0wjVhrbj4eg0rtJ8itjNQNtXeNxckXk1UsrrkM/3vC/pog5rEc2OTL2cf0orJLaa5yNVWZfYLLhtR+1d9lMtqfpmLdfCuRrLIO5GeGIEXL9SvHzZwYKW2aWb0vhSI/Cy5cldaRc2OEaDFjVJtm58zlpHOHLR0l/B10mGstTn8927f6PeuZ7dNu2C+mFquZEDXmKla76U317urd17l3uVavByn4SVcnbJ2y4P/wCK2lp0/wCII7q1/nTrVETErTklzc8jTmtHL9idspsyWEeVkfw+n/ZdXbp4/GWolq3sTYbY4E2BEFh0R5R7q++imJLU6fRrpuUm9siOqEfqp3CQb5psoS2Qb1ij3rE/QjZzoVtQVoNUS1RctnWRjbCMaZXrYopoULY1IkY+kVitx4YJK00msIe0SabQ6ZTLnb3Q0JyDTXOq5CryJuDuHxq7Dm67Ic+LvoY0wBtLJU8OPwg5/Kg71fmrTbXZTvhHSPrr6KLnlvvsubO6Q6Zaiy0+hZk8jvo3D4zZ0RyaZvgBgncXWk7TATYgGHOi4hmy4AH4U5P6LySmtL2Idq7SYZzWg0fvR9X1orZccNn4/tZF95VVreZCTELPUBDq91UmjRwjMBHa0g0OI/ySXiU5Nr6C8rrGpfwmXD/lLj8G+mfmFdxXHPlXHC7Ne0CNCfhQoVezMFO4yl7RYOJu2XGbWX6GYvZ4yymzDagjtJqyx2gApWzoY5D7ewHjT+PHzQMSMnUYcFJXbLF0hjAbwT3pfBbSCk5qK3mZoIr4Ekz14h+NUcU5XRPcc32ZtNPlvRD4R83l9Sr1kjAz+1OuiOPNlv8AQmkySDzZpC7GdecwaDL7P60RabGy1K0X1m7W+5xOkQpDDrrWkuGXXT3076KxWy69h2upc4sVk6E/0j6I8aiQ+vf37k44V4ezGK60wA8rhBv+/enLJarZNkwQ1ouc2TwXBy+ic5fqrT0KePUHlQ5dzlmxHiyDEnWyqROCO6la7t3VT0J1abkafj8lOtMRfiNRsbXVjgsZhyKtnVWi4vA9bXfhVPfdT/bI22l2DvuoM3Fs6SHrVPlE9M23rF4sTQDnoopmigbojWhXJZ1kFt0RTSHCiKbogaHphscU0YaS2NUExB5BS6Gyx5BPs0Y5LwVfGZhrzxULszjZhn/ylS36RtSvbFW1brt2ww+iaLSPr+tQ2eGzww16/wAkUbQHo9r70LW3HxM+VO47WgFfEutqkcHAOMJAmZye0zzFc2dzZc0SHfsnVazdpZ1mtJyjj9MBoqZcR3CtKVru78a7+utFid/qj1cP2Z1xu4/svMK0CvZr59l/KrdntEeO0wHslU6/fX/ZBU+Uy/f6hVRF+6OblyY/UH0lvXG/lVdA7zHADyxb1JLD+Ui9m2eZqt3G6yJsvpTp8Uy5kzTFKkQVbRUdzBatG083oW3CwQb+Mel9Q+gucissYQ0Kjw38HFbIknswUuWdF/j1tFkYqmjDXGbVejSU9iytCm12VP0Vvapu4Rg6RFaF8Gt/EbIq03/XStFXIO1cd7snbe60f/2dS6ZSgSWzad8Spd32VAHzMA1/mqE5a0xK5KvYOG0cQ5ceKQPtG+dAEnN2FK1rupvr6Kb1bBbl2aW0EhoSN3l4eutaU7+7r9NPQqrFsBzXAaPEtWoSHVSn1fX704rs98zOOz4819g2BxbEhrUjGu7fSlN+7dv9H1KiY62kHa71v+Nf+luYm2+U2B8XhGJahJWBh6ObB8I2nNOrFfP21Eq63uYFY9Lgcoipk7iTdAGnopu6qJzsrN2mtmfTQ4jTGniEXXWlad1fWj5dEl4u/v8A2iyXaaAXkwDkJNLZMDwKkHWXNl8XAlYrOw741z6TT6LZaePstz839kw8yRPOIh4kCdV1sENT2cLyLVV0RmoqrclHVUIlZssWLEZhR2wR7QIdpFhVclnZR7vUoEhzJbgS09sNF7Be1mmoG6Z6z5BVWpeZAbQG7IDHgOdnHLlrT0b/AF76de9Bx5DE38LjSX4zP4dS3GSB+MUxs18g3mc1020sRo4jpLGh03/XppupuorG23szNuwRWo8bMRrkItbqV91e6tfcj/FJjq5/aSrNvNe17SPZGOf7oftFWqt7VlsL07hR4kMjaGpG2I0r31pSla0+9G02Ws/EkEURrDq5eqgdXX3d3rRzGvSEV5E/SiusxP8ASNfEP/C5zt/f45sHaIuOWVOKLfcFKV30pWvrr1dSvnywNWyzbGxfmoxYlSZQiJMu1yNuglUuvf3d3X7lwQQTeC3toTk8rlPGSPcp2WFIDSmGqMk0TjobwQ3Fwc1cikyWtRzWbGJBDTYHrA9fsokXXWfpdQeZKaMmGtoyFTUmyw8pJbQxPQ2BwD1gm0KTg2qgU4wcy4WPwomPfAzwdyH8kNRtDIzqWXgJhhr8CeQ7jm3pVJi3ADb0Hkjokvor4fwi/BS1jL4zbOkwXM0zOMErnVdtcjPBWphwEmRl9dih6AbL/FAMcfEKcsXYDY4U1kSxRoxwebWlLQ1xORUQ8sfqLeSKWqJ4sm2P9kEUSMvZolG0kFpm28JoB1aiVgjx48JvMAEVz7aPa2Ic7hNOi6Ylyj1p15KqdNdiI1z6fX/JNFjgzEDzpizH4LeZ85IG0yI5tg66eTvl9FEe89nyLMGFrtmeRmb6n0BvEhiUjiiqrkjmMjJR1UpUURJqAZtvWLXcsRAlLacRHFS8aqQXFznJ1FYZVzxrZpzwIKrhomNXtELWkEq2xo7TCJh5lDcbDHvkQHWsWrg0NBBwu4/Zr66fkpSLP7K3Kh8PIF7Hpexu+we2VuEJjiyo/CBrcJemlOulO+n99adlSJcGwPSpoM0LhENp09bo4lkNK0r76V9KetRgetvR5UIXwzoQkJer1buulUTxP56K1l637KiYRIr4NGegt+lsq0Ld699OuiSbUsXi07PutMXOY00RCTosySpR0CpWm46Ur1+ild66iFl2ZjftAWweL1aSIuuvrrStdyr22TYSrNcJDocIOjVER9VKUrWn4rJhyxWT/WVbnXX04ILQeRb0ovVlFQzhI3otqLUaKYBQtjZR4IqYGlu2CKbYSmxsyC0aXvATAY626Og5DeIocjoNyMrEUVDORlqsB4yu0o6y5m0ZCj2b66GiQGXtCiHIaGOCfkR7T9gcan0Wuw7ZRwcBp13HykX5VXSoF1CU2BiY5rghWw/ImVuK9wv8rIdEfL30/FTZMCfcvRZh8mktWtn0Mzc+zwM0c3dA864za7htM9hkbXxYdauECDOkt5zXSL2R6qIFNrrY5uKW9Em116nXlg7VanSaaL6eQPVWtPLSvq9dVXLZsoELXzGru1CAPAt+ACpnpaEuFvYDDi4Npu22tW2gUw0TJrQNI3GOBqF62h5ESJKSjqfNiKgTHbPbQMiBIZ8GQeYVZiwWUoCYmKrGmVFYrX0GOXXwR61iPYn8bOICakolzMhFg6oynYRkjoxYN5pbU0bF+jNBXoOH2MGPpD9pMIznhS2HXtAR1WTBwDDxJTQ+ST/JPg6HIrFbLz5XcS8WpVt0JHtECEGLL4nZaUayv6PWkX2Td3Tbw0/aVF2/vwN2noXFykP6ccu4PTWvv7l7JrOCIZuyC0jUtPV3UXMDddlOHIdMiMuYiLfWqOHz72J8ryuEcJWtkNV6NFm5StgmtnLlGwCimmVjLSYssJFUUzJG0yigbUgtKcQSmymZNABSUFbUopaUS9jNEHCzWtY3sI5tpHNRgXtnuIkGB7CJbtGfgT5mF7CbRreC9yC4Irsewh5E4jWBryKwRoXsJi1GAPAiSM6Qri2oGfAmQM4InFa1omIzZoLa1xUv/wCVFvWbNM3KFyvBcz96mpVCXBzBsP76l51pGpHtH+zUXTsEvJ/s0nfn9p7CX+ZhcC2DcFM1NA1Sm7l7aOYnqmMwisaLn0gFiroztNNaxUfkQv8AGcLq+YImPdQ5C0pa5VDEh1sh5NFwo7m3oRlukeA1SI0qRGc7I9HlLuVotrUi4ROmx2uUsSHJeWKq6XYazzPb6LKxUOInbDocPWqs06Yc4EJ+0jundmprlw+y/Fc2ui3tYcNekQcNVyPcuzUp3Ps9ZiluihIE2rmAzaZGB68cR99eqn5rm2ODAAm9/u/znO4TX0TX41QbIp8f0Sc7M1kvr0Bg2immlP0fNzQiGoxrztGTjZjLSYNNLGY+CLGinqimYI92C1yW5rUaIBxsKICijGimCi8eCmRTKOKXNuIuO8sCHcZtN4zIJPCdzwVgh0RyjGw1ppE0ZWMtowG09ST1QETaGcrgmzjKWyBWNBTWyEaghHa8HPNS78FFKqBsH5xSKe0PnpkTchDXGpvOaEnlXIGXADP4hRgTQOJnmgT30w2tdi2WToNmCrMuT25gHh0q0vVzYzVBlye3P4qopkC70g4JXaJg1MVcYdRNH0zQnkWX5wPzrEh6QsRHtlJdJQ0osWKxHKMKi6VsRF/7caL+IVa/isWK/wAD/c/gi839Qu5x8NSq79yJlzqHP8FixU+biivaJfDz3D6YPXaMw5Wf/JL7heJcmuFTwHyj/usWLlLFCfSOpXkZKntg8bnTNuixYkZSnAFtoptYsUjL5DG17WqxYgGGlarBosWLxhKtqLFiwI9pVeFL4KxYjn2BXoa2i4OvSBAf6fX6e9X22FmCxYq1K4iuTHjOhHDXNYsWiqMLyoCSCxYlsORK8WDiU3iYcaC677NfyWLFOVfDm8u4k45xSMv77kXHvJmANDyj+vUsWLeK0AqY7Ze7A/hXPnjzcMvar+KxYigDP8JWa4NrfLtFixELRPmsWLF40//Z"

/***/ }),

/***/ "../../../../../src/assets/images/texturdbg4.jpg":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXFxgYGBgYGBgWGBkYFxcaGxoaGhgaHSggHRolGxgXITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OFw8PFysdHR0tLS0tKy0tLS0tLS0tLS0tNy0tLTctNy0tLS0tLS0tNy0tLS0tNy0tNzc3Kzc3Kys3Lf/AABEIAOEA4QMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAABAAIDBAf/xAA4EAABAgQEBQQBAgMIAwAAAAABABECITHwQVFhcYGRobHBEtHh8QMTcgQyoiIzQmKCkrLSFFLi/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAGBEBAAMBAAAAAAAAAAAAAAAAAAERQSH/2gAMAwEAAhEDEQA/APsumcsmmyzFC8sObnbdT0wYmu+HxkmMsLvBbD9mWVhZY434cqBmOP33SIjUhsg6BMXG6T4o9ONPllAthKXTZFKznhvlpLmoNb4deWyzDDN/GGAdMOIvigxzob0uioS5urfJ6Kgl827oEWQdznp9JN705IEzwPRQldXKIpypSfznqsnEM1NpP28Og0RlWuMsfdUIanAAMl7vCS5+qX3xGaDUUPLjtPRb9d8aoc5S+pdeiAcWnpSnbRBejTHH4TWXG+SzrhldctFQmh0437qCIenDGmK0cvFHsrMRZruqhFjpS5ZKihlfutRHjy88EHUdcN88UvpK8sEF6WO9OqCcbNuUCTO758K/VGTDTbK6oCGHXi03CYnN8mbbqj1TuwqElgAH1fWvfkg1CWvopnw4yHNErrrxVFPnz0dBz/8AG1/piUt/qDM/7YvZKgYjfkTTE9teDLJhxTDFd4qjIw16XOfutfkipgH2+kNLCVGx580/fsO/NQQAd+Xv3VCZc6u/XdZI68JDS6JIqKW5VCC93tNUb2zTWaWL+lp8s8dPOKCgInK8MECJye3aXlPpyxyYNS+KnfjpTnp5UA0pTngDv4WoovNlYhhHBs8sUmF8vBsqjUNL3vZYOvyeXGSRFevtNLVdm6j5QMUUnAwmsSIH3w77LX1100kiIdDtx5dkCDMtpV2uan73wKAGbziyPS0/v3+kG4ntsOyzAz57cT7SV6u1cMuXukjnl9qAiimBQYYUuigAOWF10Tni1m9FkQz6n6uqo0Cw2bN6phulj4WWwQJWLf3QJ1pqMk/jMqXx34qBp2vkhm7ybtdFAQl8q3LBIwafPj3UQ43Ez3rdFNLtOmCov1NIVKcZw9FKBDzLyFPdD3vRa/JESJYc/OyxzOmZ7KhMLuRXF5qG1RTvPlySDPRxv22WXuerHJAxgrIiqRVtGktxDpzfz9KgiYyo190EQd+FUerljxvNUTvoff65KlMdfCA9NJBmuu3XRahB+WbGanz0uioCDZo2SDBJeeO2ITC5YYNPOWHVJGfSffj1WoIizYoB770RVumU9ECkzoTO80u7NKtbNlAMcQ08BmfduS1E7U4XXNEcVzypKi0RKVjdBzBmNDpiJutB6nbZr6oemb5DaXRa/ITUaUvigHN9UGHEAGeLnqkES6aazsJhPKdmW6AAtrxc8URvyF1SC5+6yTEOXXWV4oMuZtKeLY1PVaMuGllUEdbsyRN58L580FFMEGmijCXoN2xvtqh5S50BPUthRaiiz1uVUFDpL2+FzJq4OOTyXSC93kstdROwgfUbI/6qXP8AXOqkodHpdDfJRGY0o8tuSiGqXbHTzgqMSqLsckFltleafRkswu4lnfZIgYYnOxz4oEOdODmeKPVxNH4zGSr0lsr0lnEvg5az6KCBrefhUMIek9vKhlhfKaIgXr2w8VVCA9ty0+VU17Z+ECEnMTmxvE9Foi9OTIJ2mT4rwd0E8KdaqHOY+5JMBxL5DjnrJQBHJutsos3xNInjfHXHRc2LZ9q/So6RQ4qD0vNtleiZM9Prh1WSd73mg1Khc4tlwCAc8n6Jhh5ynO3+EB5Z0f4UERmK8fpOLaZXkiIai7PNEINNGe+KoSGucksTphL5V6WvHdD3h0QXqBmManOSoTJPpMiJCUj27dUQ5UuR+FBQwjLMUwUA4e/pBBfxz5YJhgdqgW3amqonIwsY7zSZVJywntii7eSoR1pVxx8oL9OHKHl8qT6I8oeX/wBKUGTFNh4FN6rZu+qDfz1VCOU7vNUZo2F92DpjnOrHbfbBQk4Aw74AnwrHhx3E7ZQXrn3x4dFAZ64YnSeqje6ncnhUqigL2OjeckkP0lfNEWnfkySM9+WIA5IARs7lvHXUT1QIWfLN2344OterFpX1RDhxfX5x4qA9TjLGmH3NMRbrxfUqevHHkqFm+eyo1DS+fniskVO07amSmN9kmRo5PjPAFAGYZ8L6odmlPDHj06JiPfHeXvwScb4PckAJ8WvvzQIp/XaqSacWmk6X805oGIXw6LIkRhpepZlASnlnK/ZIOABkWypvgoAhyCJ1xa5oEeXOrnDhOiXrbdae6Td5qjOC1BF74eLmgET3nNWVlA+medeGXsiCKTPi1z06KMg5m278AMCkk7cmsKDIkDlvUbJBpppy8hMIpsskyPWaovScuqk+of5efwpQJhAclnJrylzWSPb3Wo/o32WYnoK6NIcZKh9ILgtlPGwpt/Ok+fNIzznXfClHWQTfWeSBjhF3LFEEBIZ8FqNtssJSzQKu7ywpdVAxM7DldyWRicvspAy43z5oBJ2OwG+ao16A4OOmt9AqEWzbNsh5WS465J/H187ZIMNOVy+luGChM2F+USeRArkVQiU/pQDhswkDA8XQzDPK32TqXlmW7Ki9LU3z34nyqKGWN90Rv4+tXWz56vmgxCC8jjpl77rRhAyBf38LNWYvPBpJiD7978oBrnQJMIIn8y+ZqJPu3aeCab1rW5ILH473gs/khHe+yoenFajIrIH7wQEMD1nMHlZUWwuWW3dQBc3eCgMRTtcuSA11bx3WjAHcbfF5lZDmTGlKUwlNMRy1bHnxdAgZz4XJYIyOeV5rf472J6IlQHClT7oH/V/VEpcP0o8j091IOwNG1nx+lGXO/KogNp9TmmMSZtKteKAGHEU6KEQMx2n9IhE3plY3WoyAwu9kBAwxnLW3U+cpiXHPMt0S3LXt1RJpzrtn4CghQ7q9QfDC+3NLT+bksx1pPfjTZUXqAE5YUvJJHDtTA5un8cIzpO7xR6qtfJAvKU6bb3zWSeNPcSSRiavxbgkgZZ6GrnuUEdcll+csL1Woadb4Y6rHpfTPHH5Qa9Qpj2f7CgB8cO61EQA+d43JZnhjbz3QJiL6Vdq/VUQYbDa6pDB8pU3+kekSEhO5ZqCo13goHHBnplrsqNsR1y74KggnN5yvDC3VES4lrh30TC3fXgqIzZAhzpqghFR65cKa16qhoNEyYPWXT7KoRXrfjVAAikrs8kCKQepwa8xNRDnXfntVb/GAA70830QYiGrdps3BaiiyptRAOT30KQGbPHPZBr0f5eg9kLn+n+PI8h7JUEa+y2Ivq++qPVWUhrUy+ECU2OOqovTQzlOctbZJ7TcSkLPJZixM2wavEmpSDN9K48rqgC77Ux3KdB7V5YIiNOV3iFeupqGeqChLcLlK3WieMw7ad/hBnWu8wknDfZAeln1o+n2VHPPVgWk/nkh6Cb54XVMPbpdEBDDm2dMcVRP51ChFh5zCYYjLHV9eyBhN56aoZ34bfSgPF7qM6auMdGeiB0rhrl2mskYPLF56Nz8qd+eLC/lMRrzeiCGHXhryQAcfjj2qoRO08c854JET4S71+UD6r4dPhHpoeE+ShLPr30QS051kwwkgWzk2IlXDtzQBPDuwSBV8dp9KYcERR9uyBNG+iqE66Tu2V664zlPOikC79abWXRCGlLPYcBoomTCRaT+yCcJ8e15oEjKRM2Jo990AbSpLP5ZIwxwvdZ9dZ9cig16BrzCkPvzj9kqDX5ImErsLBGJYDGnAdlp+sp6FZ9L3ji6o1CZmTz4ds1fOHRVmlRYWfQ0+D9kGoyZX1w+0QAOxyzT6np7BTUPBhqygIonLNd8ZqZnmHaQxb7VvhLPH3CoYd9VRp5Uam7bVVBcllrrTMc0QsJUF+EF06aXwW4CGldsieXMoBbh5KgA5FJ+e/wBJBEmnt8cURD3Mu3Hulmz6Khi+dExU+PCxFBeTS7d1oR8/FUGZVPfhwWvyRaX991enaR3UC8s2M9vhQAEw7e5TAdM59mlbLIheksr6LRFyqbKovbKrKjrYrreCyA0/ilVonKmst0F+Np3dEEuTK/vLJJE9/lDvOT4csbxUAaHN5ip2lotk6Xgswwanoowv5xd/Ko1Bp2amCwZ19jPTh3TDE0rdLZ5Z0QY/WFkqV/44zP8AT7qTgdw0yGq9zqmOlLvuqOIUP3ngtRC3a5oMQmY5XrIphJqWfSfTd0CKmL+46SWvynk41QD5NhLGWhyQzUDzfWv11WgQ987zRCZc5S8alBAYWEREvS9+PRMJe6Tx6JiGst89N0GITL+y1cRmH9lu+NHdX446ysvqsvMvW8clAmcsJCXbZBBnJtRo7+Umks8WndExRYk5zytlRDa77rmTKYbhlpwXSGkrNe6yZcG11rnJBqbmjDn9VR6tnrlgztngtRRFpZXJYBDDxJ9LzUC2OMg2A24oGDjCnzymtAzLSpleJ5I9Qdtfoqij2x76XRZEWIq3bXiFuIHDvydEMUxjvxKCY445CTZclerJs8zuqMzD0ng9Oys8T203QAhZgzjPGb88eiYeZuXyoGWwEpZ/CYCDSwM+qDHqY045+9EwuwAbHp5qtETx70V+OKVBly4oAmz1DqM+fA7ohNXq85Zd0jBurc+9EB+ppF/T/wBlJ/XOfRSgfTiiE3488E+kzM9Bp71QTdeuioiZTO2GGLKefM6PL45q9NWkcaeVTr9WfCAiAqcfE27rRmSOiIoTnjd7LMJJfNta7INGVlPSe/PvxUYWzvPoEPyx4oIkZ5vPZIPV9GnYV6TLJqeJXVUOXc99CgzCAOTcuqRDi/FZLi9DyWoISWqA3ticEF6r8po70uQOSnut/CIQ7Z4HEOgn7twfXWXFUWZw4jfupjjXlbeExAoASbir0t7LIMx7nLqtiE6u5sdEAC/KuPD21STnUcMRkhzfd3V6S39mU50Z7kggWdsKc99+SPSAeviuVFod9e14rMYOefa+qBZ5a8lPfhAcuziYpPJ1oyuvzU8EEM6cL2Q481xc9ygzd5ii1FCXmZXfJAVDVldESY09sFoPt14brnESHfXHbHBB19Wp5H2Us+k36vdSgfyOeF6TWTEzHHB+7pxHHvfROvtRUAM3fKU+72yBFenutE0431UYb38oKOHpdcKqhiIOUqclQgmukhKvlEJywNdjOs1BETer3Mc+SPUJiXl6Mw0TDiyRKwqB9XptydP4z74OqEPzxvRG3XapQXpnn0uiYIiRW3KopTL888GCI9slBkCU6XriO6fU7UFRKfstEduqIjLHDJUEcV6ti63EH46cERC+rKAPzwd9kASZbib1nfJP5JzfxcuyhVmOdXbifCITPhd7qAMQBpPXAHykHXPYdZ/Kt+KXnwumyoITPp2TEMenzwQRleLJ9L17tTGSChiLnhrmj0l87y5c0iJ2LS7hkQiXdQZ9YZg2b1OpaXdaiibWvLR0g3LoiGj3uqGCnTmgDLnRuHVUxS/maTLM4Vrw91B5/wBY2UL1PcvZSox6WpPrLRMYlXvUd0El/vwt3fBBiATkxAO94ck/piEAdM+ejIOH3K24piHN8cWsIDHrwGh4JMLh6bM8j981esg8n1NPCqXOctEFjpt3WYxrYOfhagOemfnwk1Gbj5bh3QA/E9Rj8e6TW+Ui6IZP4HPDM91emuXF8iOaAhz1bPFsUmADHhhKnjkgEnPA4USYqN8T2QIF00XNsi/3ldF1hpdDYqsmh4al/eiB/TAc015S6BZN4TPTJJEm04Zd0OQ2emAznt2QaEOGTTlx6d0AUm+D481DPNq3pnigRF+OvHRAxASn37cEQQPszP0rzW4qab5/KyxcbYXme6BMIDDplrzWRXvjXQ8UtMEayN7oEWE2pxIrugfTQu2gbj45KhGGFtxQSwt8+S1Ac/NW14IMETrlnj3WofxUJFJ22wWsdZ18ceyzAJNr9YaIK9+IVCKSkdqMigJqKir6PeSXOLyM6X2QPoi/9x/T/wBULPo/alQaJFMe1+UQjW891qJhxn2Cwzyz2piVQmJnEhKtAZeNVCvC5tvyCQBQ5y7o9OHS9kETSel8ssCoGuAlOeSo2R+P8eD4NfHsgSxpj1S3Gur+FRRB7+s1kCpys0QPqdqO1H2leioaCcvdJA4yvr1VCLdAPWmPWavUGnjhMLJGVy0oukEIABfTn890GW1v2TEWprPIDPFZeTzugmtAN5QZJ7nXGnfkmLHnpmr0tSVNExCVOvZAPTjmeyvUDjS72QIZ1x1y6z2W4mEtcNXPugzCL30V6sJAPiWxE5KZy3HDglgQx16SvdADG/G0tVGLtd6pa3osxgd8UCImd5B9VZXxTBBWeR5U8y1QTOT2Kh7qgjIZ3mZKiirMUwOpneIUBjbUWiA7i7ZADDbtposvLbfArUIsnLFYMOTiuJ7oOk7hi90LPph0/wBqlKB/F04rtDjf+FSlcHD8f95Fw7RJhqP3FSkG46w/tPhaj/nP7fJUpQcf8UX7T2Xb81Dx7BSlZHD8X92P9PYLt+Kp38IUkh/hcdz/AMlzg/kGxSpQX8PSHaLws/xX80O8XYqUro1+ap2Wvy/y8YfClKB/LSH9w8rn+esO/lSkgdocdz/yXn/hqx7ntClSB/Hh+0rp/j4DuVKQQ/mi/wBPZcvxVi3HdSlYGv47+SLb3TF/h391KQa/BT/d3Cz+P+7P7fBUpQedSlKj/9k="

/***/ }),

/***/ "../../../../ng2-responsive/bootstrap/bootstrap-directives.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var index_1 = __webpack_require__("../../../../ng2-responsive/config/index.js");
var XL = (function (_super) {
    __extends(XL, _super);
    function XL(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'xl';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(XL.prototype, "xl", {
        set: function (grid_state) {
            this.setGrid(this._state, 'bootstrap');
        },
        enumerable: true,
        configurable: true
    });
    return XL;
}(index_1.RESPONSIVE_BASE));
XL.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[xl]'
            },] },
];
/** @nocollapse */
XL.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
XL.propDecorators = {
    'xl': [{ type: core_1.Input },],
};
exports.XL = XL;
var LG = (function (_super) {
    __extends(LG, _super);
    function LG(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'lg';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(LG.prototype, "lg", {
        set: function (grid_state) {
            this.setGrid(this._state, 'bootstrap');
        },
        enumerable: true,
        configurable: true
    });
    return LG;
}(index_1.RESPONSIVE_BASE));
LG.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[lg]'
            },] },
];
/** @nocollapse */
LG.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
LG.propDecorators = {
    'lg': [{ type: core_1.Input },],
};
exports.LG = LG;
var MD = (function (_super) {
    __extends(MD, _super);
    function MD(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'md';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(MD.prototype, "md", {
        set: function (grid_state) {
            this.setGrid(this._state, 'bootstrap');
        },
        enumerable: true,
        configurable: true
    });
    return MD;
}(index_1.RESPONSIVE_BASE));
MD.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[md]'
            },] },
];
/** @nocollapse */
MD.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
MD.propDecorators = {
    'md': [{ type: core_1.Input },],
};
exports.MD = MD;
var SM = (function (_super) {
    __extends(SM, _super);
    function SM(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'sm';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(SM.prototype, "sm", {
        set: function (grid_state) {
            this.setGrid(this._state, 'bootstrap');
        },
        enumerable: true,
        configurable: true
    });
    return SM;
}(index_1.RESPONSIVE_BASE));
SM.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[sm]'
            },] },
];
/** @nocollapse */
SM.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
SM.propDecorators = {
    'sm': [{ type: core_1.Input },],
};
exports.SM = SM;
var XS = (function (_super) {
    __extends(XS, _super);
    function XS(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'xs';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(XS.prototype, "xs", {
        set: function (grid_state) {
            this.setGrid(this._state, 'bootstrap');
        },
        enumerable: true,
        configurable: true
    });
    return XS;
}(index_1.RESPONSIVE_BASE));
XS.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[xs]'
            },] },
];
/** @nocollapse */
XS.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
XS.propDecorators = {
    'xs': [{ type: core_1.Input },],
};
exports.XS = XS;
var ShowItBootstrap = (function (_super) {
    __extends(ShowItBootstrap, _super);
    function ShowItBootstrap(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(ShowItBootstrap.prototype, "showItBootstrap", {
        set: function (grid_state) {
            this.setGrid(grid_state, 'bootstrap');
        },
        enumerable: true,
        configurable: true
    });
    return ShowItBootstrap;
}(index_1.RESPONSIVE_BASE));
ShowItBootstrap.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[showItBootstrap]'
            },] },
];
/** @nocollapse */
ShowItBootstrap.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
ShowItBootstrap.propDecorators = {
    'showItBootstrap': [{ type: core_1.Input },],
};
exports.ShowItBootstrap = ShowItBootstrap;
var HideItBootstrap = (function (_super) {
    __extends(HideItBootstrap, _super);
    function HideItBootstrap(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._showWhenTrue = false;
        return _this;
    }
    Object.defineProperty(HideItBootstrap.prototype, "hideItBootstrap", {
        set: function (grid_state) {
            this.setGrid(grid_state, 'bootstrap');
        },
        enumerable: true,
        configurable: true
    });
    return HideItBootstrap;
}(index_1.RESPONSIVE_BASE));
HideItBootstrap.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[hideItBootstrap]'
            },] },
];
/** @nocollapse */
HideItBootstrap.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
HideItBootstrap.propDecorators = {
    'hideItBootstrap': [{ type: core_1.Input },],
};
exports.HideItBootstrap = HideItBootstrap;
var ResponsiveSizeInfo = (function () {
    function ResponsiveSizeInfo(_responsiveState, viewContainer, cd) {
        this._responsiveState = _responsiveState;
        this.viewContainer = viewContainer;
        this.cd = cd;
        this.statechanges = new core_1.EventEmitter();
    }
    Object.defineProperty(ResponsiveSizeInfo.prototype, "responsiveSizeInfo", {
        set: function (grid_state) {
            this.updateData(this.currentstate);
        },
        enumerable: true,
        configurable: true
    });
    ResponsiveSizeInfo.prototype.ngOnInit = function () {
        this._subscription = this._responsiveState.elementoObservar.subscribe(this.updateData.bind(this));
    };
    ResponsiveSizeInfo.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    ResponsiveSizeInfo.prototype.updateData = function (value) {
        var update = this._ifValueChanged(this._noRepeat, value);
        if (update) {
            this.statechanges.emit(value);
            this.cd.markForCheck();
        }
    };
    ResponsiveSizeInfo.prototype._ifValueChanged = function (oldValue, newValue) {
        if (oldValue === newValue)
            return false;
        else {
            this._noRepeat = newValue;
            return true;
        }
    };
    return ResponsiveSizeInfo;
}());
ResponsiveSizeInfo.decorators = [
    { type: core_1.Directive, args: [{
                selector: 'responsiveSizeInfo',
                inputs: ['responsiveSizeInfo'],
                outputs: ['statechanges']
            },] },
];
/** @nocollapse */
ResponsiveSizeInfo.ctorParameters = function () { return [
    { type: index_1.ResponsiveState, },
    { type: core_1.ViewContainerRef, },
    { type: core_1.ChangeDetectorRef, },
]; };
exports.ResponsiveSizeInfo = ResponsiveSizeInfo;
//# sourceMappingURL=bootstrap-directives.js.map

/***/ }),

/***/ "../../../../ng2-responsive/bootstrap/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var bootstrap_directives_1 = __webpack_require__("../../../../ng2-responsive/bootstrap/bootstrap-directives.js");
exports.XL = bootstrap_directives_1.XL;
exports.LG = bootstrap_directives_1.LG;
exports.MD = bootstrap_directives_1.MD;
exports.SM = bootstrap_directives_1.SM;
exports.XS = bootstrap_directives_1.XS;
exports.ShowItBootstrap = bootstrap_directives_1.ShowItBootstrap;
exports.HideItBootstrap = bootstrap_directives_1.HideItBootstrap;
exports.ResponsiveSizeInfo = bootstrap_directives_1.ResponsiveSizeInfo;
exports.BOOTSTRAP_DIRECTIVES = [
    bootstrap_directives_1.XL,
    bootstrap_directives_1.LG,
    bootstrap_directives_1.MD,
    bootstrap_directives_1.SM,
    bootstrap_directives_1.XS,
    bootstrap_directives_1.ShowItBootstrap,
    bootstrap_directives_1.HideItBootstrap,
    bootstrap_directives_1.ResponsiveSizeInfo
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ng2-responsive/browsers/browsers-directives.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var index_1 = __webpack_require__("../../../../ng2-responsive/config/index.js");
var IsChrome = (function (_super) {
    __extends(IsChrome, _super);
    function IsChrome(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'chrome';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(IsChrome.prototype, "isChrome", {
        set: function (grid_state) {
            this.setGrid(this._state, 'browser');
        },
        enumerable: true,
        configurable: true
    });
    return IsChrome;
}(index_1.RESPONSIVE_BASE));
IsChrome.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[isChrome]'
            },] },
];
/** @nocollapse */
IsChrome.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
IsChrome.propDecorators = {
    'isChrome': [{ type: core_1.Input },],
};
exports.IsChrome = IsChrome;
var IsFirefox = (function (_super) {
    __extends(IsFirefox, _super);
    function IsFirefox(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'firefox';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(IsFirefox.prototype, "isFirefox", {
        set: function (grid_state) {
            this.setGrid(this._state, 'browser');
        },
        enumerable: true,
        configurable: true
    });
    return IsFirefox;
}(index_1.RESPONSIVE_BASE));
IsFirefox.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[isFirefox]'
            },] },
];
/** @nocollapse */
IsFirefox.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
IsFirefox.propDecorators = {
    'isFirefox': [{ type: core_1.Input },],
};
exports.IsFirefox = IsFirefox;
var IsSafari = (function (_super) {
    __extends(IsSafari, _super);
    function IsSafari(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'safari';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(IsSafari.prototype, "isSafari", {
        set: function (grid_state) {
            this.setGrid(this._state, 'browser');
        },
        enumerable: true,
        configurable: true
    });
    return IsSafari;
}(index_1.RESPONSIVE_BASE));
IsSafari.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[isSafari]'
            },] },
];
/** @nocollapse */
IsSafari.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
IsSafari.propDecorators = {
    'isSafari': [{ type: core_1.Input },],
};
exports.IsSafari = IsSafari;
var IsOpera = (function (_super) {
    __extends(IsOpera, _super);
    function IsOpera(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'opera';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(IsOpera.prototype, "isOpera", {
        set: function (grid_state) {
            this.setGrid(this._state, 'browser');
        },
        enumerable: true,
        configurable: true
    });
    return IsOpera;
}(index_1.RESPONSIVE_BASE));
IsOpera.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[isOpera]'
            },] },
];
/** @nocollapse */
IsOpera.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
IsOpera.propDecorators = {
    'isOpera': [{ type: core_1.Input },],
};
exports.IsOpera = IsOpera;
var IsIE = (function (_super) {
    __extends(IsIE, _super);
    function IsIE(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'ie';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(IsIE.prototype, "isIE", {
        set: function (grid_state) {
            this.setGrid(this._state, 'browser');
        },
        enumerable: true,
        configurable: true
    });
    return IsIE;
}(index_1.RESPONSIVE_BASE));
IsIE.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[isIE]'
            },] },
];
/** @nocollapse */
IsIE.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
IsIE.propDecorators = {
    'isIE': [{ type: core_1.Input },],
};
exports.IsIE = IsIE;
var ShowItBrowser = (function (_super) {
    __extends(ShowItBrowser, _super);
    function ShowItBrowser(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(ShowItBrowser.prototype, "showItBrowser", {
        set: function (grid_state) {
            this.setGrid(grid_state, 'browser');
        },
        enumerable: true,
        configurable: true
    });
    return ShowItBrowser;
}(index_1.RESPONSIVE_BASE));
ShowItBrowser.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[showItBrowser]'
            },] },
];
/** @nocollapse */
ShowItBrowser.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
ShowItBrowser.propDecorators = {
    'showItBrowser': [{ type: core_1.Input },],
};
exports.ShowItBrowser = ShowItBrowser;
var HideItBrowser = (function (_super) {
    __extends(HideItBrowser, _super);
    function HideItBrowser(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._showWhenTrue = false;
        return _this;
    }
    Object.defineProperty(HideItBrowser.prototype, "hideItBrowser", {
        set: function (grid_state) {
            this.setGrid(grid_state, 'browser');
        },
        enumerable: true,
        configurable: true
    });
    return HideItBrowser;
}(index_1.RESPONSIVE_BASE));
HideItBrowser.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[hideItBrowser]',
                providers: [index_1.ResponsiveState]
            },] },
];
/** @nocollapse */
HideItBrowser.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
HideItBrowser.propDecorators = {
    'hideItBrowser': [{ type: core_1.Input },],
};
exports.HideItBrowser = HideItBrowser;
var IsIE9 = (function (_super) {
    __extends(IsIE9, _super);
    function IsIE9(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'ie 9';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(IsIE9.prototype, "isIE9", {
        set: function (grid_state) {
            this.setGrid(this._state, 'ie');
        },
        enumerable: true,
        configurable: true
    });
    return IsIE9;
}(index_1.RESPONSIVE_BASE));
IsIE9.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[isIE9]'
            },] },
];
/** @nocollapse */
IsIE9.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
IsIE9.propDecorators = {
    'isIE9': [{ type: core_1.Input },],
};
exports.IsIE9 = IsIE9;
var IsIE10 = (function (_super) {
    __extends(IsIE10, _super);
    function IsIE10(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'ie 10';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(IsIE10.prototype, "isIE10", {
        set: function (grid_state) {
            this.setGrid(this._state, 'ie');
        },
        enumerable: true,
        configurable: true
    });
    return IsIE10;
}(index_1.RESPONSIVE_BASE));
IsIE10.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[isIE10]'
            },] },
];
/** @nocollapse */
IsIE10.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
IsIE10.propDecorators = {
    'isIE10': [{ type: core_1.Input },],
};
exports.IsIE10 = IsIE10;
var IsIE11 = (function (_super) {
    __extends(IsIE11, _super);
    function IsIE11(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'ie 11';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(IsIE11.prototype, "isIE11", {
        set: function (grid_state) {
            this.setGrid(this._state, 'ie');
        },
        enumerable: true,
        configurable: true
    });
    return IsIE11;
}(index_1.RESPONSIVE_BASE));
IsIE11.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[isIE11]'
            },] },
];
/** @nocollapse */
IsIE11.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
IsIE11.propDecorators = {
    'isIE11': [{ type: core_1.Input },],
};
exports.IsIE11 = IsIE11;
var IsIE12 = (function (_super) {
    __extends(IsIE12, _super);
    function IsIE12(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'ie 12';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(IsIE12.prototype, "isIE12", {
        set: function (grid_state) {
            this.setGrid(this._state, 'ie');
        },
        enumerable: true,
        configurable: true
    });
    return IsIE12;
}(index_1.RESPONSIVE_BASE));
IsIE12.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[isIE12]'
            },] },
];
/** @nocollapse */
IsIE12.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
IsIE12.propDecorators = {
    'isIE12': [{ type: core_1.Input },],
};
exports.IsIE12 = IsIE12;
var ShowIEVersion = (function (_super) {
    __extends(ShowIEVersion, _super);
    function ShowIEVersion(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(ShowIEVersion.prototype, "showIEVersion", {
        set: function (grid_state) {
            this.setGrid(grid_state, 'ie');
        },
        enumerable: true,
        configurable: true
    });
    return ShowIEVersion;
}(index_1.RESPONSIVE_BASE));
ShowIEVersion.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[showIEVersion]'
            },] },
];
/** @nocollapse */
ShowIEVersion.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
ShowIEVersion.propDecorators = {
    'showIEVersion': [{ type: core_1.Input },],
};
exports.ShowIEVersion = ShowIEVersion;
var HideIEVersion = (function (_super) {
    __extends(HideIEVersion, _super);
    function HideIEVersion(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._showWhenTrue = false;
        return _this;
    }
    Object.defineProperty(HideIEVersion.prototype, "hideIEVersion", {
        set: function (grid_state) {
            this.setGrid(grid_state, 'ie');
        },
        enumerable: true,
        configurable: true
    });
    return HideIEVersion;
}(index_1.RESPONSIVE_BASE));
HideIEVersion.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[hideIEVersion]'
            },] },
];
/** @nocollapse */
HideIEVersion.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
HideIEVersion.propDecorators = {
    'hideIEVersion': [{ type: core_1.Input },],
};
exports.HideIEVersion = HideIEVersion;
var BrowserInfo = (function () {
    function BrowserInfo(_responsiveState, viewContainer, cd) {
        this._responsiveState = _responsiveState;
        this.viewContainer = viewContainer;
        this.cd = cd;
        this.browser = new core_1.EventEmitter();
    }
    Object.defineProperty(BrowserInfo.prototype, "browserInfo", {
        set: function (grid_state) {
            this.updateData(this.currentstate);
        },
        enumerable: true,
        configurable: true
    });
    BrowserInfo.prototype.ngOnInit = function () {
        this._subscription = this._responsiveState.browserObserver.subscribe(this.updateData.bind(this));
    };
    BrowserInfo.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    BrowserInfo.prototype.updateData = function (value) {
        var update = this._ifValueChanged(this.noRepeat, value);
        if (update) {
            this.browser.emit(value);
            this.cd.markForCheck();
        }
    };
    BrowserInfo.prototype._ifValueChanged = function (oldValue, newValue) {
        if (oldValue === newValue)
            return false;
        else {
            this.noRepeat = newValue;
            return true;
        }
    };
    return BrowserInfo;
}());
BrowserInfo.decorators = [
    { type: core_1.Directive, args: [{
                selector: "browserInfo", inputs: ['browserInfo'], outputs: ['browser']
            },] },
];
/** @nocollapse */
BrowserInfo.ctorParameters = function () { return [
    { type: index_1.ResponsiveState, },
    { type: core_1.ViewContainerRef, },
    { type: core_1.ChangeDetectorRef, },
]; };
exports.BrowserInfo = BrowserInfo;
var IeInfo = (function () {
    function IeInfo(_responsiveState, viewContainer, cd) {
        this._responsiveState = _responsiveState;
        this.viewContainer = viewContainer;
        this.cd = cd;
        this.ieVersion = new core_1.EventEmitter();
    }
    Object.defineProperty(IeInfo.prototype, "ieInfo", {
        set: function (grid_state) {
            this.updateData(this.currentstate);
        },
        enumerable: true,
        configurable: true
    });
    IeInfo.prototype.ngOnInit = function () {
        this._subscription = this._responsiveState.browserObserver.subscribe(this.updateData.bind(this));
    };
    IeInfo.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    IeInfo.prototype.updateData = function (value) {
        var update = this._ifValueChanged(this.noRepeat, value);
        if (update) {
            this.ieVersion.emit(value);
            this.cd.markForCheck();
        }
    };
    IeInfo.prototype._ifValueChanged = function (oldValue, newValue) {
        if (oldValue === newValue)
            return false;
        else {
            this.noRepeat = newValue;
            return true;
        }
    };
    return IeInfo;
}());
IeInfo.decorators = [
    { type: core_1.Directive, args: [{
                selector: "ieInfo", inputs: ['ieInfo'], outputs: ['ieVersion']
            },] },
];
/** @nocollapse */
IeInfo.ctorParameters = function () { return [
    { type: index_1.ResponsiveState, },
    { type: core_1.ViewContainerRef, },
    { type: core_1.ChangeDetectorRef, },
]; };
exports.IeInfo = IeInfo;
//# sourceMappingURL=browsers-directives.js.map

/***/ }),

/***/ "../../../../ng2-responsive/browsers/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var browsers_directives_1 = __webpack_require__("../../../../ng2-responsive/browsers/browsers-directives.js");
exports.IsChrome = browsers_directives_1.IsChrome;
exports.IsFirefox = browsers_directives_1.IsFirefox;
exports.IsSafari = browsers_directives_1.IsSafari;
exports.IsOpera = browsers_directives_1.IsOpera;
exports.IsIE = browsers_directives_1.IsIE;
exports.IsIE9 = browsers_directives_1.IsIE9;
exports.IsIE10 = browsers_directives_1.IsIE10;
exports.IsIE11 = browsers_directives_1.IsIE11;
exports.IsIE12 = browsers_directives_1.IsIE12;
exports.ShowItBrowser = browsers_directives_1.ShowItBrowser;
exports.HideItBrowser = browsers_directives_1.HideItBrowser;
exports.ShowIEVersion = browsers_directives_1.ShowIEVersion;
exports.HideIEVersion = browsers_directives_1.HideIEVersion;
exports.IeInfo = browsers_directives_1.IeInfo;
exports.BrowserInfo = browsers_directives_1.BrowserInfo;
exports.BROWSER_DIRECTIVES = [
    browsers_directives_1.IsChrome,
    browsers_directives_1.IsFirefox,
    browsers_directives_1.IsSafari,
    browsers_directives_1.IsOpera,
    browsers_directives_1.IsIE,
    browsers_directives_1.IsIE9,
    browsers_directives_1.IsIE10,
    browsers_directives_1.IsIE11,
    browsers_directives_1.IsIE12,
    browsers_directives_1.ShowItBrowser,
    browsers_directives_1.HideItBrowser,
    browsers_directives_1.ShowIEVersion,
    browsers_directives_1.HideIEVersion,
    browsers_directives_1.IeInfo,
    browsers_directives_1.BrowserInfo
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ng2-responsive/config/config.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
__webpack_require__("../../../../rxjs/add/operator/share.js");
__webpack_require__("../../../../rxjs/add/operator/debounce.js");
var Rx_1 = __webpack_require__("../../../../rxjs/Rx.js");
var const_1 = __webpack_require__("../../../../ng2-responsive/config/const.js");
var ResponsiveConfigInterface = (function () {
    function ResponsiveConfigInterface() {
    }
    return ResponsiveConfigInterface;
}());
exports.ResponsiveConfigInterface = ResponsiveConfigInterface;
var ResponsiveConfig = (function () {
    function ResponsiveConfig(config) {
        this.config = {
            breakPoints: {
                xs: { max: 767 },
                sm: { min: 768, max: 991 },
                md: { min: 992, max: 1199 },
                lg: { min: 1200, max: 1599 },
                xl: { min: 1600 }
            },
            debounceTime: 100
        };
        if (!!config)
            this.config = config;
    }
    return ResponsiveConfig;
}());
ResponsiveConfig.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
ResponsiveConfig.ctorParameters = function () { return [
    { type: ResponsiveConfigInterface, decorators: [{ type: core_1.Optional },] },
]; };
exports.ResponsiveConfig = ResponsiveConfig;
var ResponsiveState = (function () {
    function ResponsiveState(responsiveConfig) {
        var _this = this;
        this._windows = {};
        this._screenWidth = window.screen.width;
        this._screenHeight = window.screen.height;
        this._orientation = window.orientation;
        this._userAgent = window.navigator.userAgent.toLowerCase();
        this._window = window;
        this._vendor = window.navigator.vendor;
        this.registerWindow = function (rw) {
            if (rw.name && !_this._windows[rw.name]) {
                _this._windows[rw.name] = rw;
                window.dispatchEvent(new Event('resize'));
            }
        };
        this.unregisterWindow = function (rw) {
            for (var rwn in _this._windows) {
                if (_this._windows[rwn] === rw)
                    delete (_this._windows[rwn]);
            }
            window.dispatchEvent(new Event('resize'));
        };
        this.sizeObserver = function () {
            return _this._width = _this.getWidth('window');
        };
        this.sizeOperations = function () {
            _this._width = _this.getWidth('window');
            try {
                var breakpoints = _this._responsiveConfig.config.breakPoints;
                if (breakpoints.xl.min <= _this._width)
                    return 'xl';
                else if (breakpoints.lg.max >= _this._width && breakpoints.lg.min <= _this._width)
                    return 'lg';
                else if (breakpoints.md.max >= _this._width && breakpoints.md.min <= _this._width)
                    return 'md';
                else if (breakpoints.sm.max >= _this._width && breakpoints.sm.min <= _this._width)
                    return 'sm';
                else if (breakpoints.xs.max >= _this._width)
                    return 'xs';
            }
            catch (e) { }
            return null;
        };
        this.browserName = function () {
            try {
                if (const_1.REG_SORT_NAMES.WEBKIT[0].test(_this._userAgent) && const_1.REG_SORT_NAMES.CHROME.test(_this._userAgent) && !const_1.REG_BROWSERS.IE[2].test(_this._userAgent))
                    return 'chrome';
                else if (const_1.REG_SORT_NAMES.MOZILLA.test(_this._userAgent) && const_1.REG_BROWSERS.FIREFOX.test(_this._userAgent))
                    return 'firefox';
                else if (const_1.REG_BROWSERS.IE[0].test(_this._userAgent) || const_1.REG_BROWSERS.IE[1].test(_this._userAgent) || const_1.REG_BROWSERS.IE[2].test(_this._userAgent))
                    return 'ie';
                else if (const_1.REG_SORT_NAMES.SAFARI.test(_this._userAgent) && const_1.REG_SORT_NAMES.WEBKIT[1].test(_this._userAgent) && !const_1.REG_SORT_NAMES.CHROME.test(_this._userAgent))
                    return 'safari';
                else if (const_1.REG_BROWSERS.OPERA.test(_this._userAgent))
                    return 'opera';
                else if (const_1.REG_BROWSERS.SILK.test(_this._userAgent))
                    return 'silk';
                else if (const_1.REG_BROWSERS.YANDEX.test(_this._userAgent))
                    return 'yandex';
                else
                    return 'NA';
            }
            catch (e) { }
            return null;
        };
        this.ie_version_detect = function () {
            try {
                var msie = _this._userAgent.indexOf('msie ');
                if (const_1.REG_BROWSERS.IE[0].test(_this._userAgent)) {
                    var ie_version = parseInt(_this._userAgent.substring(msie + 5, _this._userAgent.indexOf('.', msie)), 10);
                    if (ie_version === 7)
                        return 'ie 7';
                    else if (ie_version === 8)
                        return 'ie 8';
                    else if (ie_version === 9)
                        return 'ie 9';
                    else if (ie_version == 10)
                        return 'ie 10';
                    return null;
                }
                var trident = _this._userAgent.indexOf('trident/');
                if (const_1.REG_BROWSERS.IE[1].test(_this._userAgent)) {
                    var rv = _this._userAgent.indexOf('rv:');
                    var ie_version = parseInt(_this._userAgent.substring(rv + 3, _this._userAgent.indexOf('.', rv)), 10);
                    if (ie_version == 11)
                        return 'ie 11';
                    return null;
                }
                var edge = _this._userAgent.indexOf('Edge/');
                if (const_1.REG_BROWSERS.IE[2].test(_this._userAgent))
                    return 'ie +12';
            }
            catch (e) { }
            return null;
        };
        this.pixel_ratio = function () {
            try {
                if (_this.test_Is_4k())
                    return '4k';
                else if (_this.getDevicePixelRatio() > 1)
                    return 'retina';
                else if (_this.getDevicePixelRatio() === 1)
                    return '1x';
                else
                    return null;
            }
            catch (e) { }
            return null;
        };
        this.device_detection = function () {
            try {
                if (_this.isMobile())
                    return 'mobile';
                else if (_this.isTablet())
                    return 'tablet';
                else if (_this.isSMART())
                    return 'smarttv';
                else if (_this.isDesktop())
                    return 'desktop';
            }
            catch (e) { }
            return null;
        };
        this.orientation_device = function () {
            try {
                if (_this.isMobile() || _this.isTablet()) {
                    if (window.innerHeight > window.innerWidth)
                        return 'portrait';
                    else
                        return 'landscape';
                }
                else if (_this.isSMART() || _this.isDesktop())
                    return 'landscape';
                else
                    return null;
            }
            catch (e) { }
            return null;
        };
        this.standard_devices = function () {
            try {
                if (const_1.REG_MOBILES.IPHONE.test(_this._userAgent))
                    return 'iphone';
                else if (const_1.REG_TABLETS.IPAD.test(_this._userAgent))
                    return 'ipad';
                else if (_this.isMobile() && const_1.REG_MOBILES.ANDROID.test(_this._userAgent))
                    return 'android mobile';
                else if (_this.isTablet() && const_1.REG_MOBILES.ANDROID.test(_this._userAgent))
                    return 'android tablet';
                else if (const_1.REG_MOBILES.WINDOWS_PHONE.test(_this._userAgent))
                    return 'windows phone';
            }
            catch (e) { }
            return null;
        };
        this.game_devices = function () {
            try {
                if (const_1.REG_GAME_DEVICES.PS4.test(_this._userAgent))
                    return 'Playstation 4';
                else if (const_1.REG_GAME_DEVICES.PS3.test(_this._userAgent))
                    return 'Playstation 3';
                else if (const_1.REG_GAME_DEVICES.XBOX_ONE.test(_this._userAgent))
                    return 'Xbox one';
                else if (const_1.REG_GAME_DEVICES.XBOX.test(_this._userAgent))
                    return 'Xbox';
                else if (const_1.REG_GAME_DEVICES.WII.test(_this._userAgent))
                    return 'Wii';
                else if (const_1.REG_GAME_DEVICES.WII_U.test(_this._userAgent))
                    return 'Wii U';
                else if (const_1.REG_GAME_DEVICES.NINTENDO_3DS.test(_this._userAgent))
                    return 'Nintendo 3DS';
                else if (const_1.REG_GAME_DEVICES.PS_VITA.test(_this._userAgent))
                    return 'Playstation Vita';
                else if (const_1.REG_GAME_DEVICES.PSP.test(_this._userAgent))
                    return 'PSP';
            }
            catch (e) { }
            return null;
        };
        this.smart_tv = function () {
            try {
                if (const_1.REG_SMARTS_TV.CHROMECAST.test(_this._userAgent))
                    return 'Chromecast';
                else if (const_1.REG_SMARTS_TV.APPLE_TV.test(_this._userAgent))
                    return 'Apple tv';
                else if (const_1.REG_SMARTS_TV.GOOGLE_TV.test(_this._userAgent))
                    return 'Google tv';
                else if (const_1.REG_GAME_DEVICES.XBOX_ONE.test(_this._userAgent))
                    return 'Xbox One';
                else if (const_1.REG_GAME_DEVICES.PS4.test(_this._userAgent))
                    return 'Playstation 4';
                else if (const_1.REG_SMARTS_TV.GENERIC_TV.test(_this._userAgent))
                    return 'Generic smartv';
            }
            catch (e) { }
            return null;
        };
        this.desktop = function () {
            try {
                if (_this.isDesktop()) {
                    if (const_1.REG_OS.WINDOWS.test(_this._userAgent))
                        return 'Windows';
                    else if (const_1.REG_OS.MAC_OS.test(_this._userAgent))
                        return 'Mac';
                    else if (const_1.REG_OS.LINUX.test(_this._userAgent))
                        return 'Linux';
                }
            }
            catch (e) { }
            return null;
        };
        this.tablet = function () {
            try {
                if (_this.isTablet()) {
                    if (const_1.REG_TABLETS.IPAD.test(_this._userAgent))
                        return 'Ipad';
                    else if (const_1.REG_TABLETS.TABLET.test(_this._userAgent) && const_1.REG_MOBILES.ANDROID.test(_this._userAgent))
                        return 'Android';
                    else if (const_1.REG_TABLETS.KINDLE.test(_this._userAgent))
                        return 'Kindle';
                    else if (const_1.REG_TABLETS.TABLET.test(_this._userAgent))
                        return 'Generic Tablet';
                }
            }
            catch (e) { }
            return null;
        };
        this.mobile = function () {
            try {
                if (_this.isMobile()) {
                    if (const_1.REG_MOBILES.IPHONE.test(_this._userAgent))
                        return 'Iphone';
                    else if (const_1.REG_MOBILES.ANDROID.test(_this._userAgent))
                        return 'Android';
                    else if (const_1.REG_MOBILES.WINDOWS_PHONE.test(_this._userAgent))
                        return 'Windows Phone';
                    else if (const_1.REG_MOBILES.BLACKBERRY.test(_this._userAgent) || const_1.REG_MOBILES.BB10.test(_this._userAgent))
                        return 'Blackberry';
                    else
                        return 'Generic Mobile';
                }
            }
            catch (e) { }
            return null;
        };
        this.windows = function () {
            try {
                if (_this.isDesktop() && _this.isWindows()) {
                    if (const_1.WINDOWS_OS_VERSION.WINDOWS_XP.test(_this._userAgent))
                        return 'Windows XP';
                    else if (const_1.WINDOWS_OS_VERSION.WINDOWS_VISTA.test(_this._userAgent))
                        return 'Windows Vista';
                    else if (const_1.WINDOWS_OS_VERSION.WINDOWS_7.test(_this._userAgent))
                        return 'Windows 7';
                    else if (const_1.WINDOWS_OS_VERSION.WINDOWS_8.test(_this._userAgent) || const_1.WINDOWS_OS_VERSION.WINDOWS_8_1.test(_this._userAgent))
                        return 'Windows 8';
                    else if (const_1.WINDOWS_OS_VERSION.WINDOWS_10.test(_this._userAgent))
                        return 'Windows 10';
                    else
                        return 'Generic Windows';
                }
            }
            catch (e) { }
            return null;
        };
        this.linux = function () {
            try {
                if (_this.isDesktop() && _this.isLinux()) {
                    if (const_1.LINUX_OS.DEBIAN.test(_this._userAgent))
                        return 'Debian';
                    else if (const_1.LINUX_OS.KNOPPIX.test(_this._userAgent))
                        return 'Knoppix';
                    else if (const_1.LINUX_OS.MINT.test(_this._userAgent))
                        return 'Mint';
                    else if (const_1.LINUX_OS.UBUNTU.test(_this._userAgent))
                        return 'Ubuntu';
                    else if (const_1.LINUX_OS.KUBUNTU.test(_this._userAgent))
                        return 'Kubuntu';
                    else if (const_1.LINUX_OS.XUBUNTU.test(_this._userAgent))
                        return 'Xubuntu';
                    else if (const_1.LINUX_OS.LUBUNTU.test(_this._userAgent))
                        return 'Lubuntu';
                    else if (const_1.LINUX_OS.FEDORA.test(_this._userAgent))
                        return 'Fedora';
                    else if (const_1.LINUX_OS.RED_HAT.test(_this._userAgent))
                        return 'Red hat';
                    else if (const_1.LINUX_OS.MANDRIVA.test(_this._userAgent))
                        return 'Mandriva';
                    else if (const_1.LINUX_OS.GENTOO.test(_this._userAgent))
                        return 'Gentoo';
                    else if (const_1.LINUX_OS.SABAYON.test(_this._userAgent))
                        return 'Sabayon';
                    else if (const_1.LINUX_OS.SLACKWARE.test(_this._userAgent))
                        return 'Slackware';
                    else if (const_1.LINUX_OS.SUSE.test(_this._userAgent))
                        return 'Suse';
                    else if (const_1.LINUX_OS.CENT_OS.test(_this._userAgent))
                        return 'CentOS';
                    else if (const_1.LINUX_OS.BACKTRACK.test(_this._userAgent))
                        return 'Backtrack';
                    else
                        return 'Generic Linux';
                }
            }
            catch (e) { }
            return null;
        };
        this.userAgent_data = function () {
            var ie_version_name = '';
            var ie_version_state = false;
            var game_device_name = '';
            var smart_tv_name = '';
            var desktop_name = '';
            var tablet_name = '';
            var mobile_name = '';
            var windows_name = '';
            var linux_name = '';
            if (_this.ie_version_detect() != null) {
                ie_version_name = _this.ie_version_detect();
                ie_version_state = true;
            }
            if (_this.isGameDevice()) {
                game_device_name = _this.game_devices();
            }
            if (_this.isSMART()) {
                smart_tv_name = _this.smart_tv();
            }
            if (_this.isDesktop()) {
                desktop_name = _this.desktop();
            }
            if (_this.isTablet()) {
                tablet_name = _this.tablet();
            }
            if (_this.isMobile()) {
                mobile_name = _this.mobile();
            }
            if (_this.isWindows()) {
                windows_name = _this.windows();
            }
            if (_this.isLinux()) {
                linux_name = _this.linux();
            }
            return {
                device: _this.device_detection(),
                browser: _this.browserName(),
                pixelratio: _this.pixel_ratio(),
                ie_version: {
                    name: ie_version_name,
                    state: ie_version_state
                },
                game_device: {
                    name: game_device_name,
                    state: _this.isGameDevice()
                },
                smart_tv: {
                    name: smart_tv_name,
                    state: _this.isSMART()
                },
                desktop: {
                    name: desktop_name,
                    state: _this.isDesktop()
                },
                tablet: {
                    name: tablet_name,
                    state: _this.isTablet()
                },
                mobile: {
                    name: mobile_name,
                    state: _this.isMobile()
                },
                window_os: {
                    name: windows_name,
                    state: _this.isWindows()
                },
                linux_os: {
                    name: linux_name,
                    state: _this.isLinux()
                },
                bot: _this.isBot()
            };
        };
        this._responsiveConfig = !!responsiveConfig ? responsiveConfig : new ResponsiveConfig();
        var resize_observer = Rx_1.Observable
            .fromEvent(window, 'resize')
            .debounceTime(this._responsiveConfig.config.debounceTime)
            .defaultIfEmpty()
            .startWith(this.getWidth('window'));
        var pixel_ratio_observer = Rx_1.Observable
            .fromEvent(window, 'onload')
            .defaultIfEmpty()
            .startWith(this.getDevicePixelRatio());
        var device_observer = Rx_1.Observable
            .fromEvent(window, 'onload')
            .defaultIfEmpty()
            .startWith(this.getUserAgent());
        var user_agent_observer = Rx_1.Observable.fromEvent(window, 'onload')
            .defaultIfEmpty()
            .startWith(this.userAgent_data());
        var orientation_observer = Rx_1.Observable
            .fromEvent(window, 'orientationchange')
            .defaultIfEmpty()
            .startWith(this.getOrientation());
        this.elementoObservar = resize_observer.map(this.sizeOperations);
        this.anchoObservar = resize_observer.map(this.sizeObserver);
        this.browserObserver = device_observer.map(this.browserName);
        this.pixelObserver = pixel_ratio_observer.map(this.pixel_ratio);
        this.deviceObserver = device_observer.map(this.device_detection);
        this.orientationObserver = orientation_observer.map(this.orientation_device);
        this.standardObserver = device_observer.map(this.standard_devices);
        this.ieVersionObserver = device_observer.map(this.ie_version_detect);
        this.userAgentObserver = user_agent_observer.map(this.userAgent_data);
    }
    ResponsiveState.prototype.getWidth = function (windowName) {
        if (windowName && this._windows[windowName])
            return this._windows[windowName].getWidth();
        else
            return window.innerWidth;
    };
    ResponsiveState.prototype.test_Is_4k = function () {
        return ((this._screenHeight < this._screenWidth) ? (this._screenWidth > 3839) : (this._screenHeight > 3839));
    };
    ResponsiveState.prototype.getDevicePixelRatio = function () {
        var ratio = 1;
        if (typeof window.screen.systemXDPI !== 'undefined' && typeof window.screen.logicalXDPI !== 'undefined' && window.screen.systemXDPI > window.screen.logicalXDPI)
            ratio = window.screen.systemXDPI / window.screen.logicalXDPI;
        else if (typeof window.devicePixelRatio !== 'undefined')
            ratio = window.devicePixelRatio;
        return ratio;
    };
    ResponsiveState.prototype.isMobile = function () {
        if (const_1.REG_MOBILES.GENERIC_REG[0].test(this._userAgent) && this.isTablet() == false ||
            const_1.REG_MOBILES.GENERIC_REG[1].test(this._userAgent.substr(0, 4)) && this.isTablet() == false)
            return true;
        else
            return false;
    };
    ResponsiveState.prototype.isTablet = function () {
        if (const_1.REG_TABLETS.IPAD.test(this._userAgent) || const_1.REG_TABLETS.KINDLE.test(this._userAgent) || const_1.REG_TABLETS.PLAYBOOK[0].test(this._userAgent) || const_1.REG_TABLETS.PLAYBOOK[1].test(this._userAgent) || const_1.REG_TABLETS.TABLET.test(this._userAgent))
            return true;
        else
            return false;
    };
    ResponsiveState.prototype.isSMART = function () {
        if (const_1.REG_SMARTS_TV.GENERIC_TV.test(this._userAgent) || const_1.REG_SMARTS_TV.PS4.test(this._userAgent) || const_1.REG_SMARTS_TV.XBOX_ONE.test(this._userAgent))
            return true;
        else
            return false;
    };
    ResponsiveState.prototype.isDesktop = function () {
        if (!this.isMobile() || !this.isTablet() || !this.isSMART())
            return true;
        else
            return false;
    };
    ResponsiveState.prototype.isGameDevice = function () {
        if (const_1.REG_GAME_DEVICES.PS4.test(this._userAgent) || const_1.REG_GAME_DEVICES.PS3.test(this._userAgent)
            || const_1.REG_GAME_DEVICES.XBOX.test(this._userAgent) || const_1.REG_GAME_DEVICES.XBOX_ONE.test(this._userAgent)
            || const_1.REG_GAME_DEVICES.WII.test(this._userAgent) || const_1.REG_GAME_DEVICES.WII_U.test(this._userAgent)
            || const_1.REG_GAME_DEVICES.NINTENDO_3DS.test(this._userAgent) || const_1.REG_GAME_DEVICES.PS_VITA.test(this._userAgent)
            || const_1.REG_GAME_DEVICES.PSP.test(this._userAgent))
            return true;
        else
            return false;
    };
    ResponsiveState.prototype.isWindows = function () {
        if (const_1.REG_OS.WINDOWS.test(this._userAgent))
            return true;
        else
            return false;
    };
    ResponsiveState.prototype.isLinux = function () {
        if (const_1.REG_OS.LINUX.test(this._userAgent))
            return true;
        else
            return false;
    };
    ResponsiveState.prototype.isBot = function () {
        if (const_1.REG_BOTS.GENERIC_BOT.test(this._userAgent))
            return true;
        else
            return false;
    };
    ResponsiveState.prototype.getUserAgent = function () {
        return window.navigator.userAgent.toLowerCase();
    };
    ResponsiveState.prototype.getOrientation = function () {
        return window.orientation;
    };
    return ResponsiveState;
}());
ResponsiveState.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
ResponsiveState.ctorParameters = function () { return [
    { type: ResponsiveConfig, decorators: [{ type: core_1.Optional },] },
]; };
exports.ResponsiveState = ResponsiveState;
//# sourceMappingURL=config.js.map

/***/ }),

/***/ "../../../../ng2-responsive/config/const.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GLOBAL_INPUTS = {
    BOOTSTRAP: ['xs', 'sm', 'md', 'lg', 'xl'],
    DEVICES: ['mobile', 'tablet', 'smarttv', 'desktop'],
    STANDARD: ['iphone', 'ipad', 'android mobile', 'android tablet', 'windows phone'],
    ORIENTATION: ['portrait', 'landscape'],
    BROWSERS: ['chrome', 'firefox', 'ie', 'safari', 'opera'],
    PIXEL_RATIO: ['1x', 'retina', '4k'],
    IE_VERSIONS: ['ie 9', 'ie 10', 'ie 11', 'ie +12']
};
exports.REG_WEARABLES = {
    IWATCH: ''
};
exports.REG_MOBILES = {
    ANDROID: /(android);?[\s\/]+([\d.]+)?/,
    IPHONE: /(iphone\sos)\s([\d_]+)/,
    WINDOWS_PHONE: /windows phone ([\d.]+)/,
    BLACKBERRY: /(blackBerry).*version\/([\d.]+)/,
    BB10: /(bb10).*version\/([\d.]+)/,
    WEB_OS: /(webos|hpwos)[\s\/]([\d.]+)/,
    IPOD: /(ipod)(.*os\s([\d_]+))?/,
    FIREFOX_OS: /\((?:mobile|tablet); rv:([\d.]+)\).*firefox\/[\d.]+/,
    MOBI: /[^-]mobi/i,
    GENERIC_REG: [/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i, /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i]
};
exports.REG_TABLETS = {
    IPAD: /(ipad).*os\s([\d_]+)/,
    KINDLE: /kindle|silk|kfapw|kfarwi|kfaswi|kffowi|kfjw|kfmewi|kfot|kfsaw|kfsowi|kftbw|kfthw|kftt|wffowi/i,
    TABLET: /tablet/i,
    PLAYBOOK: [/rim\stablet/i, /playbook/i]
};
exports.REG_SMARTS_TV = {
    CHROMECAST: /crkey/i,
    APPLE_TV: /appletv/i,
    GOOGLE_TV: /(large screen)|googletv/i,
    PS4: /playstation 4/i,
    XBOX_ONE: /xbox one/i,
    GENERIC_TV: /tv|smarttv|googletv|crkey|Sharp|THOMSON|THOM|Panasonic|Philips|NETTV|Maple_2011|appletv|Humax|Ikea|Loewe|Medion|hbbtv|pov_tv|Airties|netcast.tv|OWB|Grundig|Arcelik/i
};
exports.REG_GAME_DEVICES = {
    PS4: /playstation 4/i,
    PS3: /playstation 3/i,
    XBOX: /xbox one/i,
    XBOX_ONE: /xbox/i,
    WII_U: /nintendo wiiu/i,
    WII: /nintendo wii/i,
    PS_VITA: /playstation vita/i,
    NINTENDO_3DS: /nintendo 3ds/i,
    PSP: /psp/i
};
exports.REG_BROWSERS = {
    CHROME: [/chrome\/([\d.]+)/, /crios\/([\d.]+)/],
    FIREFOX: /firefox|iceweasel|fxios/i,
    WEB_VIEW: /(iphone|ipod|ipad).*applewebkit(?!.*safari)/,
    SAFARI: /version\/([\d.]+)([^s](safari)|[^m]*(mobile)[^S]*(safari))/,
    OPERA: /opera|opr|opios/i,
    IE: [/msie/, /trident/, /edge/],
    MS_EDGE: /edge/,
    SILK: /silk/i,
    YANDEX: /yabrowser/i
};
exports.REG_OS = {
    WINDOWS: /win\d{2}|windows/,
    IOS: /(ipod|iphone|ipad)/i,
    MAC_OS: /macintosh/i,
    ANDROID: /android/i,
    LINUX: /linux/i,
    FIREFOX_OS: /\((?:mobile|tablet); rv:([\d.]+)\).*firefox\/[\d.]+/,
    CHROME_OS: /cros/,
    WINDOWS_PHONE: /windows phone/i
};
exports.REG_SORT_NAMES = {
    MOZILLA: /mozilla/,
    CHROME: /chrome/,
    WEBKIT: [/webkit/, /applewebkit/],
    SAFARI: /safari/
};
exports.WINDOWS_OS_VERSION = {
    WINDOWS_3_11: /win16/,
    WINDOWS_95: /(windows 95|win95|windows_95)/,
    WINDOWS_ME: /(win 9x 4.90|windows ME)/,
    WINDOWS_98: /(windows 98|win98)/,
    WINDOWS_CE: /windows ce/,
    WINDOWS_2000: /(windows nt 5.0|windows 2000)/,
    WINDOWS_XP: /(windows nt 5.1|windows xp)/,
    WINDOWS_SERVER_2003: /windows nt 5.2/,
    WINDOWS_VISTA: /windows nt 6.0|Windows Vista/,
    WINDOWS_7: /(windows 7|windows nt 6.1)/,
    WINDOWS_8_1: /(windows 8.1|windows nt 6.3)/,
    WINDOWS_8: /(windows 8|windows nt 6.2)/,
    WINDOWS_10: /(windows nt 10.0)/,
    WINDOWS_PHONE_7_5: /(windows phone os 7.5)/,
    WINDOWS_PHONE_8_1: /(windows phone 8.1)/,
    WINDOWS_PHONE_10: /(windows phone 10)/,
    WINDOWS_NT_4_0: /(windows nt 4.0|winnt4.0|winnt|windows nt)/
};
exports.MAC_OS_VERSION = {
    MAC_OS: ''
};
exports.LINUX_OS = {
    DEBIAN: /Debian/i,
    KNOPPIX: /Knoppix/i,
    MINT: /Mint/i,
    UBUNTU: /Ubuntu/i,
    KUBUNTU: /Kubuntu/i,
    XUBUNTU: /Xubuntu/i,
    LUBUNTU: /Lubuntu/i,
    FEDORA: /Fedora/i,
    RED_HAT: /Red Hat/i,
    MANDRIVA: /Mandriva/i,
    GENTOO: /Gentoo/i,
    SABAYON: /Sabayon/i,
    SLACKWARE: /Slackware/i,
    SUSE: /SUSE/i,
    CENT_OS: /CentOS/i,
    BACKTRACK: /BackTrack/i
};
exports.REG_BOTS = {
    GENERIC_BOT: /bot|googlebot|crawler|spider|robot|crawling/i
};
//# sourceMappingURL=const.js.map

/***/ }),

/***/ "../../../../ng2-responsive/config/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__("../../../../ng2-responsive/config/config.js");
exports.ResponsiveConfig = config_1.ResponsiveConfig;
exports.ResponsiveState = config_1.ResponsiveState;
exports.ResponsiveConfigInterface = config_1.ResponsiveConfigInterface;
var responsive_base_1 = __webpack_require__("../../../../ng2-responsive/config/responsive-base.js");
exports.RESPONSIVE_BASE = responsive_base_1.RESPONSIVE_BASE;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ng2-responsive/config/responsive-base.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var RESPONSIVE_BASE = (function () {
    function RESPONSIVE_BASE(templateRef, viewContainer, _responsiveState, cd) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this._responsiveState = _responsiveState;
        this.cd = cd;
        this._noRepeat = 0;
        this.set_active_subscriptions = {
            bootstrap: false,
            browser: false,
            device: false,
            pixelratio: false,
            orientation: false,
            standard: false,
            ie: false,
            sizes: false
        };
        this.eventChanges = new core_1.EventEmitter();
    }
    RESPONSIVE_BASE.prototype.setGrid = function (grid_state, directive) {
        switch (directive) {
            case 'bootstrap':
                this.set_active_subscriptions.bootstrap = true;
                break;
            case 'device':
                this.set_active_subscriptions.device = true;
                break;
            case 'standard':
                this.set_active_subscriptions.standard = true;
                break;
            case 'orientation':
                this.set_active_subscriptions.orientation = true;
                break;
            case 'browser':
                this.set_active_subscriptions.browser = true;
                break;
            case 'pixelratio':
                this.set_active_subscriptions.pixelratio = true;
                break;
            case 'ie':
                this.set_active_subscriptions.ie = true;
                break;
            case 'sizes':
                this.set_active_subscriptions.sizes = true;
                break;
            default:
                null;
        }
        if (directive === 'sizes')
            this._sizes_grid_state = grid_state;
        else
            this._others_grid_state = (Array.isArray(grid_state) ? grid_state : [grid_state]);
        this._directive = directive;
    };
    RESPONSIVE_BASE.prototype.ngOnInit = function () {
        if (this.set_active_subscriptions.bootstrap)
            this._subscription_Bootstrap = this._responsiveState.elementoObservar.subscribe(this.updateView.bind(this));
        if (this.set_active_subscriptions.bootstrap)
            this._subscription_Bootstrap = this._responsiveState.elementoObservar.subscribe(this.updateView.bind(this));
        if (this.set_active_subscriptions.browser)
            this._subscription_Browser = this._responsiveState.browserObserver.subscribe(this.updateView.bind(this));
        if (this.set_active_subscriptions.device)
            this._subscription_Device = this._responsiveState.deviceObserver.subscribe(this.updateView.bind(this));
        if (this.set_active_subscriptions.pixelratio)
            this._subscription_Pixel_Ratio = this._responsiveState.pixelObserver.subscribe(this.updateView.bind(this));
        if (this.set_active_subscriptions.orientation)
            this._subscription_Orientation = this._responsiveState.orientationObserver.subscribe(this.updateView.bind(this));
        if (this.set_active_subscriptions.standard)
            this._subscription_Standard = this._responsiveState.standardObserver.subscribe(this.updateView.bind(this));
        if (this.set_active_subscriptions.ie)
            this._subscription_IE_Version = this._responsiveState.ieVersionObserver.subscribe(this.updateView.bind(this));
        if (this.set_active_subscriptions.sizes)
            this._subscription_custom_sizes = this._responsiveState.anchoObservar.subscribe(this.updateView.bind(this));
    };
    RESPONSIVE_BASE.prototype.ngOnDestroy = function () {
        if (this.set_active_subscriptions.bootstrap)
            this._subscription_Bootstrap.unsubscribe();
        if (this.set_active_subscriptions.browser)
            this._subscription_Browser.unsubscribe();
        if (this.set_active_subscriptions.device)
            this._subscription_Device.unsubscribe();
        if (this.set_active_subscriptions.pixelratio)
            this._subscription_Pixel_Ratio.unsubscribe();
        if (this.set_active_subscriptions.orientation)
            this._subscription_Orientation.unsubscribe();
        if (this.set_active_subscriptions.standard)
            this._subscription_Standard.unsubscribe();
        if (this.set_active_subscriptions.ie)
            this._subscription_IE_Version.unsubscribe();
        if (this.set_active_subscriptions.sizes)
            this._subscription_custom_sizes.unsubscribe();
    };
    RESPONSIVE_BASE.prototype.showHide = function (show) {
        if (!!show) {
            if (this._noRepeat === 0) {
                this._noRepeat = 1;
                this.eventChanges.emit(true);
                this.viewContainer.createEmbeddedView(this.templateRef);
                this.cd.markForCheck();
            }
        }
        else {
            this._noRepeat = 0;
            this.eventChanges.emit(false);
            this.viewContainer.clear();
            this.cd.markForCheck();
        }
    };
    RESPONSIVE_BASE.prototype.updateView = function (value) {
        var showBoolean = this._directive === 'sizes' ?
            !!((typeof this._sizes_grid_state.min === 'undefined' || value >= this._sizes_grid_state.min) &&
                (typeof this._sizes_grid_state.max === 'undefined' || value <= this._sizes_grid_state.max)) :
            !!this._others_grid_state && this._others_grid_state.indexOf(value) !== -1;
        this.showHide(!!this._showWhenTrue ? showBoolean : !showBoolean);
    };
    return RESPONSIVE_BASE;
}());
exports.RESPONSIVE_BASE = RESPONSIVE_BASE;
//# sourceMappingURL=responsive-base.js.map

/***/ }),

/***/ "../../../../ng2-responsive/custom-sizes/custom-sizes-directives.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var index_1 = __webpack_require__("../../../../ng2-responsive/config/index.js");
var ShowItSizes = (function (_super) {
    __extends(ShowItSizes, _super);
    function ShowItSizes(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(ShowItSizes.prototype, "showItSizes", {
        set: function (_grid_state) {
            this.setGrid(_grid_state, 'sizes');
        },
        enumerable: true,
        configurable: true
    });
    return ShowItSizes;
}(index_1.RESPONSIVE_BASE));
ShowItSizes.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[showItSizes]'
            },] },
];
/** @nocollapse */
ShowItSizes.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
ShowItSizes.propDecorators = {
    'showItSizes': [{ type: core_1.Input },],
};
exports.ShowItSizes = ShowItSizes;
var HideItSizes = (function (_super) {
    __extends(HideItSizes, _super);
    function HideItSizes(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._showWhenTrue = false;
        return _this;
    }
    Object.defineProperty(HideItSizes.prototype, "hideItSizes", {
        set: function (_grid_state) {
            this.setGrid(_grid_state, 'sizes');
        },
        enumerable: true,
        configurable: true
    });
    return HideItSizes;
}(index_1.RESPONSIVE_BASE));
HideItSizes.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[hideItSizes]'
            },] },
];
/** @nocollapse */
HideItSizes.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
HideItSizes.propDecorators = {
    'hideItSizes': [{ type: core_1.Input },],
};
exports.HideItSizes = HideItSizes;
//# sourceMappingURL=custom-sizes-directives.js.map

/***/ }),

/***/ "../../../../ng2-responsive/custom-sizes/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var custom_sizes_directives_1 = __webpack_require__("../../../../ng2-responsive/custom-sizes/custom-sizes-directives.js");
exports.ShowItSizes = custom_sizes_directives_1.ShowItSizes;
exports.HideItSizes = custom_sizes_directives_1.HideItSizes;
exports.CUSTOMSIZES_DIRECTIVES = [
    custom_sizes_directives_1.ShowItSizes,
    custom_sizes_directives_1.HideItSizes
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ng2-responsive/devices/devices-directives.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var index_1 = __webpack_require__("../../../../ng2-responsive/config/index.js");
var IsSmartTv = (function (_super) {
    __extends(IsSmartTv, _super);
    function IsSmartTv(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'smarttv';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(IsSmartTv.prototype, "isSmartTv", {
        set: function (grid_state) {
            this.setGrid(this._state, 'device');
        },
        enumerable: true,
        configurable: true
    });
    return IsSmartTv;
}(index_1.RESPONSIVE_BASE));
IsSmartTv.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[isSmartTv]'
            },] },
];
/** @nocollapse */
IsSmartTv.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
IsSmartTv.propDecorators = {
    'isSmartTv': [{ type: core_1.Input },],
};
exports.IsSmartTv = IsSmartTv;
var IsDesktop = (function (_super) {
    __extends(IsDesktop, _super);
    function IsDesktop(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'desktop';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(IsDesktop.prototype, "isDesktop", {
        set: function (grid_state) {
            this.setGrid(this._state, 'device');
        },
        enumerable: true,
        configurable: true
    });
    return IsDesktop;
}(index_1.RESPONSIVE_BASE));
IsDesktop.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[isDesktop]'
            },] },
];
/** @nocollapse */
IsDesktop.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
IsDesktop.propDecorators = {
    'isDesktop': [{ type: core_1.Input },],
};
exports.IsDesktop = IsDesktop;
var IsTablet = (function (_super) {
    __extends(IsTablet, _super);
    function IsTablet(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'tablet';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(IsTablet.prototype, "isTablet", {
        set: function (grid_state) {
            this.setGrid(this._state, 'device');
        },
        enumerable: true,
        configurable: true
    });
    return IsTablet;
}(index_1.RESPONSIVE_BASE));
IsTablet.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[isTablet]'
            },] },
];
/** @nocollapse */
IsTablet.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
IsTablet.propDecorators = {
    'isTablet': [{ type: core_1.Input },],
};
exports.IsTablet = IsTablet;
var IsMobile = (function (_super) {
    __extends(IsMobile, _super);
    function IsMobile(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'mobile';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(IsMobile.prototype, "isMobile", {
        set: function (grid_state) {
            this.setGrid(this._state, 'device');
        },
        enumerable: true,
        configurable: true
    });
    return IsMobile;
}(index_1.RESPONSIVE_BASE));
IsMobile.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[isMobile]'
            },] },
];
/** @nocollapse */
IsMobile.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
IsMobile.propDecorators = {
    'isMobile': [{ type: core_1.Input },],
};
exports.IsMobile = IsMobile;
var ShowItDevice = (function (_super) {
    __extends(ShowItDevice, _super);
    function ShowItDevice(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(ShowItDevice.prototype, "showItDevice", {
        set: function (grid_state) {
            this.setGrid(grid_state, 'device');
        },
        enumerable: true,
        configurable: true
    });
    return ShowItDevice;
}(index_1.RESPONSIVE_BASE));
ShowItDevice.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[showItDevice]'
            },] },
];
/** @nocollapse */
ShowItDevice.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
ShowItDevice.propDecorators = {
    'showItDevice': [{ type: core_1.Input },],
};
exports.ShowItDevice = ShowItDevice;
var HideItDevice = (function (_super) {
    __extends(HideItDevice, _super);
    function HideItDevice(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._showWhenTrue = false;
        return _this;
    }
    Object.defineProperty(HideItDevice.prototype, "hideItDevice", {
        set: function (grid_state) {
            this.setGrid(grid_state, 'device');
        },
        enumerable: true,
        configurable: true
    });
    return HideItDevice;
}(index_1.RESPONSIVE_BASE));
HideItDevice.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[hideItDevice]'
            },] },
];
/** @nocollapse */
HideItDevice.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
HideItDevice.propDecorators = {
    'hideItDevice': [{ type: core_1.Input },],
};
exports.HideItDevice = HideItDevice;
var IsIphone = (function (_super) {
    __extends(IsIphone, _super);
    function IsIphone(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'iphone';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(IsIphone.prototype, "isIphone", {
        set: function (grid_state) {
            this.setGrid(this._state, 'standard');
        },
        enumerable: true,
        configurable: true
    });
    return IsIphone;
}(index_1.RESPONSIVE_BASE));
IsIphone.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[isIphone]'
            },] },
];
/** @nocollapse */
IsIphone.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
IsIphone.propDecorators = {
    'isIphone': [{ type: core_1.Input },],
};
exports.IsIphone = IsIphone;
var IsIpad = (function (_super) {
    __extends(IsIpad, _super);
    function IsIpad(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'iphone';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(IsIpad.prototype, "isIphone", {
        set: function (grid_state) {
            this.setGrid(this._state, 'standard');
        },
        enumerable: true,
        configurable: true
    });
    return IsIpad;
}(index_1.RESPONSIVE_BASE));
IsIpad.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[isIpad]'
            },] },
];
/** @nocollapse */
IsIpad.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
IsIpad.propDecorators = {
    'isIphone': [{ type: core_1.Input },],
};
exports.IsIpad = IsIpad;
var IsAndroidMobile = (function (_super) {
    __extends(IsAndroidMobile, _super);
    function IsAndroidMobile(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'android mobile';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(IsAndroidMobile.prototype, "isAndroidMobile", {
        set: function (grid_state) {
            this.setGrid(this._state, 'standard');
        },
        enumerable: true,
        configurable: true
    });
    return IsAndroidMobile;
}(index_1.RESPONSIVE_BASE));
IsAndroidMobile.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[isAndroidMobile]'
            },] },
];
/** @nocollapse */
IsAndroidMobile.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
IsAndroidMobile.propDecorators = {
    'isAndroidMobile': [{ type: core_1.Input },],
};
exports.IsAndroidMobile = IsAndroidMobile;
var IsAndroidTablet = (function (_super) {
    __extends(IsAndroidTablet, _super);
    function IsAndroidTablet(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'android tablet';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(IsAndroidTablet.prototype, "isAndroidTablet", {
        set: function (grid_state) {
            this.setGrid(this._state, 'standard');
        },
        enumerable: true,
        configurable: true
    });
    return IsAndroidTablet;
}(index_1.RESPONSIVE_BASE));
IsAndroidTablet.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[isAndroidTablet]'
            },] },
];
/** @nocollapse */
IsAndroidTablet.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
IsAndroidTablet.propDecorators = {
    'isAndroidTablet': [{ type: core_1.Input },],
};
exports.IsAndroidTablet = IsAndroidTablet;
var IsWindowsPhone = (function (_super) {
    __extends(IsWindowsPhone, _super);
    function IsWindowsPhone(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'windows phone';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(IsWindowsPhone.prototype, "isWindowsPhone", {
        set: function (grid_state) {
            this.setGrid(this._state, 'standard');
        },
        enumerable: true,
        configurable: true
    });
    return IsWindowsPhone;
}(index_1.RESPONSIVE_BASE));
IsWindowsPhone.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[isWindowsPhone]'
            },] },
];
/** @nocollapse */
IsWindowsPhone.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
IsWindowsPhone.propDecorators = {
    'isWindowsPhone': [{ type: core_1.Input },],
};
exports.IsWindowsPhone = IsWindowsPhone;
var ShowItStandard = (function (_super) {
    __extends(ShowItStandard, _super);
    function ShowItStandard(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(ShowItStandard.prototype, "showItStandard", {
        set: function (grid_state) {
            this.setGrid(grid_state, 'standard');
        },
        enumerable: true,
        configurable: true
    });
    return ShowItStandard;
}(index_1.RESPONSIVE_BASE));
ShowItStandard.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[showItStandard]'
            },] },
];
/** @nocollapse */
ShowItStandard.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
ShowItStandard.propDecorators = {
    'showItStandard': [{ type: core_1.Input },],
};
exports.ShowItStandard = ShowItStandard;
var HideItStandard = (function (_super) {
    __extends(HideItStandard, _super);
    function HideItStandard(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._showWhenTrue = false;
        return _this;
    }
    Object.defineProperty(HideItStandard.prototype, "hideItStandard", {
        set: function (grid_state) {
            this.setGrid(grid_state, 'standard');
        },
        enumerable: true,
        configurable: true
    });
    return HideItStandard;
}(index_1.RESPONSIVE_BASE));
HideItStandard.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[hideItStandard]'
            },] },
];
/** @nocollapse */
HideItStandard.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
HideItStandard.propDecorators = {
    'hideItStandard': [{ type: core_1.Input },],
};
exports.HideItStandard = HideItStandard;
var IsPortrait = (function (_super) {
    __extends(IsPortrait, _super);
    function IsPortrait(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'portrait';
        _this._showWhenTrue = false;
        return _this;
    }
    Object.defineProperty(IsPortrait.prototype, "isPortrait", {
        set: function (grid_state) {
            this.setGrid(this._state, 'orientation');
        },
        enumerable: true,
        configurable: true
    });
    return IsPortrait;
}(index_1.RESPONSIVE_BASE));
IsPortrait.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[isPortrait]'
            },] },
];
/** @nocollapse */
IsPortrait.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
IsPortrait.propDecorators = {
    'isPortrait': [{ type: core_1.Input },],
};
exports.IsPortrait = IsPortrait;
var IsLandscape = (function (_super) {
    __extends(IsLandscape, _super);
    function IsLandscape(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'landscape';
        _this._showWhenTrue = false;
        return _this;
    }
    Object.defineProperty(IsLandscape.prototype, "isLandscape", {
        set: function (grid_state) {
            this.setGrid(this._state, 'orientation');
        },
        enumerable: true,
        configurable: true
    });
    return IsLandscape;
}(index_1.RESPONSIVE_BASE));
IsLandscape.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[isLandscape]'
            },] },
];
/** @nocollapse */
IsLandscape.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
IsLandscape.propDecorators = {
    'isLandscape': [{ type: core_1.Input },],
};
exports.IsLandscape = IsLandscape;
var DeviceInfo = (function () {
    function DeviceInfo(_responsiveState, viewContainer, cd) {
        this._responsiveState = _responsiveState;
        this.viewContainer = viewContainer;
        this.cd = cd;
        this.device = new core_1.EventEmitter();
    }
    Object.defineProperty(DeviceInfo.prototype, "responsiveSizeInfo", {
        set: function (grid_state) {
            this.updateData(this.currentstate);
        },
        enumerable: true,
        configurable: true
    });
    DeviceInfo.prototype.ngOnInit = function () {
        this._subscription = this._responsiveState.deviceObserver.subscribe(this.updateData.bind(this));
    };
    DeviceInfo.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    DeviceInfo.prototype.updateData = function (value) {
        var update = this._ifValueChanged(this.noRepeat, value);
        if (update) {
            this.device.emit(value);
            this.cd.markForCheck();
        }
    };
    DeviceInfo.prototype._ifValueChanged = function (oldValue, newValue) {
        if (oldValue === newValue)
            return false;
        else {
            this.noRepeat = newValue;
            return true;
        }
    };
    return DeviceInfo;
}());
DeviceInfo.decorators = [
    { type: core_1.Directive, args: [{
                selector: 'deviceInfo'
            },] },
];
/** @nocollapse */
DeviceInfo.ctorParameters = function () { return [
    { type: index_1.ResponsiveState, },
    { type: core_1.ViewContainerRef, },
    { type: core_1.ChangeDetectorRef, },
]; };
DeviceInfo.propDecorators = {
    'device': [{ type: core_1.Output },],
};
exports.DeviceInfo = DeviceInfo;
var DeviceStandardInfo = (function () {
    function DeviceStandardInfo(_responsiveState, viewContainer, cd) {
        this._responsiveState = _responsiveState;
        this.viewContainer = viewContainer;
        this.cd = cd;
        this.standard = new core_1.EventEmitter();
    }
    Object.defineProperty(DeviceStandardInfo.prototype, "deviceStandardInfo", {
        set: function (grid_state) {
            this.updateData(this.currentstate);
        },
        enumerable: true,
        configurable: true
    });
    DeviceStandardInfo.prototype.ngOnInit = function () {
        this._subscription = this._responsiveState.standardObserver.subscribe(this.updateData.bind(this));
    };
    DeviceStandardInfo.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    DeviceStandardInfo.prototype.updateData = function (value) {
        var update = this._ifValueChanged(this.noRepeat, value);
        if (update) {
            this.standard.emit(value);
            this.cd.markForCheck();
        }
    };
    DeviceStandardInfo.prototype._ifValueChanged = function (oldValue, newValue) {
        if (oldValue === newValue)
            return false;
        else {
            this.noRepeat = newValue;
            return true;
        }
    };
    return DeviceStandardInfo;
}());
DeviceStandardInfo.decorators = [
    { type: core_1.Directive, args: [{
                selector: "deviceStandardInfo", inputs: ['deviceStandardInfo'], outputs: ['standard']
            },] },
];
/** @nocollapse */
DeviceStandardInfo.ctorParameters = function () { return [
    { type: index_1.ResponsiveState, },
    { type: core_1.ViewContainerRef, },
    { type: core_1.ChangeDetectorRef, },
]; };
exports.DeviceStandardInfo = DeviceStandardInfo;
var OrientationInfo = (function () {
    function OrientationInfo(_responsiveState, viewContainer, cd) {
        this._responsiveState = _responsiveState;
        this.viewContainer = viewContainer;
        this.cd = cd;
        this.orientation = new core_1.EventEmitter();
    }
    Object.defineProperty(OrientationInfo.prototype, "responsiveSizeInfo", {
        set: function (grid_state) {
            this.updateData(this.currentstate);
        },
        enumerable: true,
        configurable: true
    });
    OrientationInfo.prototype.ngOnInit = function () {
        this._subscription = this._responsiveState.orientationObserver.subscribe(this.updateData.bind(this));
    };
    OrientationInfo.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    OrientationInfo.prototype.updateData = function (value) {
        var update = this._ifValueChanged(this.noRepeat, value);
        if (update) {
            this.orientation.emit(value);
            this.cd.markForCheck();
        }
    };
    OrientationInfo.prototype._ifValueChanged = function (oldValue, newValue) {
        if (oldValue === newValue)
            return false;
        else {
            this.noRepeat = newValue;
            return true;
        }
    };
    return OrientationInfo;
}());
OrientationInfo.decorators = [
    { type: core_1.Directive, args: [{
                selector: 'orientationInfo',
                outputs: ['orientation']
            },] },
];
/** @nocollapse */
OrientationInfo.ctorParameters = function () { return [
    { type: index_1.ResponsiveState, },
    { type: core_1.ViewContainerRef, },
    { type: core_1.ChangeDetectorRef, },
]; };
exports.OrientationInfo = OrientationInfo;
//# sourceMappingURL=devices-directives.js.map

/***/ }),

/***/ "../../../../ng2-responsive/devices/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var devices_directives_1 = __webpack_require__("../../../../ng2-responsive/devices/devices-directives.js");
exports.IsDesktop = devices_directives_1.IsDesktop;
exports.IsTablet = devices_directives_1.IsTablet;
exports.IsMobile = devices_directives_1.IsMobile;
exports.IsSmartTv = devices_directives_1.IsSmartTv;
exports.ShowItDevice = devices_directives_1.ShowItDevice;
exports.HideItDevice = devices_directives_1.HideItDevice;
exports.IsIphone = devices_directives_1.IsIphone;
exports.IsIpad = devices_directives_1.IsIpad;
exports.IsAndroidMobile = devices_directives_1.IsAndroidMobile;
exports.IsAndroidTablet = devices_directives_1.IsAndroidTablet;
exports.IsWindowsPhone = devices_directives_1.IsWindowsPhone;
exports.ShowItStandard = devices_directives_1.ShowItStandard;
exports.HideItStandard = devices_directives_1.HideItStandard;
exports.IsPortrait = devices_directives_1.IsPortrait;
exports.IsLandscape = devices_directives_1.IsLandscape;
exports.DeviceInfo = devices_directives_1.DeviceInfo;
exports.DeviceStandardInfo = devices_directives_1.DeviceStandardInfo;
exports.OrientationInfo = devices_directives_1.OrientationInfo;
exports.DEVICES_DIRECTIVES = [
    devices_directives_1.IsDesktop,
    devices_directives_1.IsTablet,
    devices_directives_1.IsMobile,
    devices_directives_1.IsSmartTv,
    devices_directives_1.ShowItDevice,
    devices_directives_1.HideItDevice,
    devices_directives_1.IsIphone,
    devices_directives_1.IsIpad,
    devices_directives_1.IsAndroidMobile,
    devices_directives_1.IsAndroidTablet,
    devices_directives_1.IsWindowsPhone,
    devices_directives_1.ShowItStandard,
    devices_directives_1.HideItStandard,
    devices_directives_1.IsPortrait,
    devices_directives_1.IsLandscape,
    devices_directives_1.DeviceInfo,
    devices_directives_1.DeviceStandardInfo,
    devices_directives_1.OrientationInfo
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ng2-responsive/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Responsive Devices Detect Directives for Angular 2
 *
 * @Created_by Manu Cutillas
 * @Contributors Christophe HOARAU, Kamil Breguła
 * @created_at May 04, 2016
 * @updated_at Febr 5, 2017 - by ManuCutillas
 * @version_0.7.5
 *
 * Dependencies:
 * @angular/core : "2.4.6"
 * rxjs: "5.1.0"
 *
 * @more_info https://github.com/ManuCutillas
 *            https://www.npmjs.com/~manucutillas
 *            https://github.com/no-more
 *
 * @description : NG2-RESPONSIVE
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var index_1 = __webpack_require__("../../../../ng2-responsive/config/index.js");
var index_2 = __webpack_require__("../../../../ng2-responsive/bootstrap/index.js");
var index_3 = __webpack_require__("../../../../ng2-responsive/browsers/index.js");
var index_4 = __webpack_require__("../../../../ng2-responsive/custom-sizes/index.js");
var index_5 = __webpack_require__("../../../../ng2-responsive/devices/index.js");
var index_6 = __webpack_require__("../../../../ng2-responsive/pixelratio/index.js");
var index_7 = __webpack_require__("../../../../ng2-responsive/responsive/index.js");
var index_8 = __webpack_require__("../../../../ng2-responsive/responsive-window/index.js");
var index_9 = __webpack_require__("../../../../ng2-responsive/useragent/index.js");
var index_10 = __webpack_require__("../../../../ng2-responsive/config/index.js");
exports.ResponsiveConfig = index_10.ResponsiveConfig;
exports.ResponsiveState = index_10.ResponsiveState;
exports.ResponsiveConfigInterface = index_10.ResponsiveConfigInterface;
var ResponsiveModule = (function () {
    function ResponsiveModule() {
    }
    return ResponsiveModule;
}());
ResponsiveModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: [
                    index_2.BOOTSTRAP_DIRECTIVES,
                    index_3.BROWSER_DIRECTIVES,
                    index_4.CUSTOMSIZES_DIRECTIVES,
                    index_5.DEVICES_DIRECTIVES,
                    index_6.PIXELRATIO_DIRECTIVES,
                    index_7.RESPONSIVE_DIRECTIVE,
                    index_8.RESPONSIVEWINDOW_DIRECTIVE,
                    index_9.USERAGENT_DIRECTIVE
                ],
                exports: [
                    index_2.BOOTSTRAP_DIRECTIVES,
                    index_3.BROWSER_DIRECTIVES,
                    index_4.CUSTOMSIZES_DIRECTIVES,
                    index_5.DEVICES_DIRECTIVES,
                    index_6.PIXELRATIO_DIRECTIVES,
                    index_7.RESPONSIVE_DIRECTIVE,
                    index_8.RESPONSIVEWINDOW_DIRECTIVE,
                    index_9.USERAGENT_DIRECTIVE,
                ],
                providers: [
                    index_1.ResponsiveState,
                    index_1.ResponsiveConfig
                ]
            },] },
];
/** @nocollapse */
ResponsiveModule.ctorParameters = function () { return []; };
exports.ResponsiveModule = ResponsiveModule;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ng2-responsive/pixelratio/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var pixelratio_directives_1 = __webpack_require__("../../../../ng2-responsive/pixelratio/pixelratio-directives.js");
exports.Is1xPixel = pixelratio_directives_1.Is1xPixel;
exports.IsRetina = pixelratio_directives_1.IsRetina;
exports.Is4k = pixelratio_directives_1.Is4k;
exports.PixelRatioInfo = pixelratio_directives_1.PixelRatioInfo;
exports.PIXELRATIO_DIRECTIVES = [
    pixelratio_directives_1.Is1xPixel,
    pixelratio_directives_1.IsRetina,
    pixelratio_directives_1.Is4k,
    pixelratio_directives_1.PixelRatioInfo
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ng2-responsive/pixelratio/pixelratio-directives.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var index_1 = __webpack_require__("../../../../ng2-responsive/config/index.js");
/*======== 1x =========*/
var Is1xPixel = (function (_super) {
    __extends(Is1xPixel, _super);
    function Is1xPixel(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = '1x';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(Is1xPixel.prototype, "is1xPixel", {
        set: function (grid_state) {
            this.setGrid(this._state, 'pixelratio');
        },
        enumerable: true,
        configurable: true
    });
    return Is1xPixel;
}(index_1.RESPONSIVE_BASE));
Is1xPixel.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[is1xPixel]'
            },] },
];
/** @nocollapse */
Is1xPixel.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
Is1xPixel.propDecorators = {
    'is1xPixel': [{ type: core_1.Input },],
};
exports.Is1xPixel = Is1xPixel;
/*======== RETINA =========*/
var IsRetina = (function (_super) {
    __extends(IsRetina, _super);
    function IsRetina(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'retina';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(IsRetina.prototype, "isRetina", {
        set: function (grid_state) {
            this.setGrid(this._state, 'pixelratio');
        },
        enumerable: true,
        configurable: true
    });
    return IsRetina;
}(index_1.RESPONSIVE_BASE));
IsRetina.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[isRetina]'
            },] },
];
/** @nocollapse */
IsRetina.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
IsRetina.propDecorators = {
    'isRetina': [{ type: core_1.Input },],
};
exports.IsRetina = IsRetina;
/*======== 4K =========*/
var Is4k = (function (_super) {
    __extends(Is4k, _super);
    function Is4k(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = '4k';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(Is4k.prototype, "isRetina", {
        set: function (grid_state) {
            this.setGrid(this._state, 'pixelratio');
        },
        enumerable: true,
        configurable: true
    });
    return Is4k;
}(index_1.RESPONSIVE_BASE));
Is4k.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[is4k]'
            },] },
];
/** @nocollapse */
Is4k.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
Is4k.propDecorators = {
    'isRetina': [{ type: core_1.Input },],
};
exports.Is4k = Is4k;
/*======== DeviceInfo =========*/
var PixelRatioInfo = (function () {
    function PixelRatioInfo(_responsiveState, viewContainer, cd) {
        this._responsiveState = _responsiveState;
        this.viewContainer = viewContainer;
        this.cd = cd;
        this.pixelratio = new core_1.EventEmitter();
    }
    Object.defineProperty(PixelRatioInfo.prototype, "pixelratioInfo", {
        set: function (grid_state) {
            this.updateData(this.currentstate);
        },
        enumerable: true,
        configurable: true
    });
    PixelRatioInfo.prototype.ngOnInit = function () {
        this._subscription = this._responsiveState.pixelObserver.subscribe(this.updateData.bind(this));
    };
    PixelRatioInfo.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    PixelRatioInfo.prototype.updateData = function (value) {
        var update = this._ifValueChanged(this.noRepeat, value);
        if (update) {
            this.pixelratio.emit(value);
            this.cd.markForCheck();
        }
    };
    PixelRatioInfo.prototype._ifValueChanged = function (oldValue, newValue) {
        if (oldValue === newValue)
            return false;
        else
            this.noRepeat = newValue;
        return true;
    };
    return PixelRatioInfo;
}());
PixelRatioInfo.decorators = [
    { type: core_1.Directive, args: [{
                selector: 'pixelratioInfo',
                inputs: ['pixelratioInfo']
            },] },
];
/** @nocollapse */
PixelRatioInfo.ctorParameters = function () { return [
    { type: index_1.ResponsiveState, },
    { type: core_1.ViewContainerRef, },
    { type: core_1.ChangeDetectorRef, },
]; };
PixelRatioInfo.propDecorators = {
    'pixelratio': [{ type: core_1.Output },],
};
exports.PixelRatioInfo = PixelRatioInfo;
//# sourceMappingURL=pixelratio-directives.js.map

/***/ }),

/***/ "../../../../ng2-responsive/responsive-window/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var responsive_window_1 = __webpack_require__("../../../../ng2-responsive/responsive-window/responsive-window.js");
exports.ResponsiveWindow = responsive_window_1.ResponsiveWindow;
exports.RESPONSIVEWINDOW_DIRECTIVE = [responsive_window_1.ResponsiveWindow];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ng2-responsive/responsive-window/responsive-window.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var index_1 = __webpack_require__("../../../../ng2-responsive/config/index.js");
var ResponsiveWindow = (function () {
    function ResponsiveWindow(_responsiveState, el, cd) {
        this._responsiveState = _responsiveState;
        this.el = el;
        this.cd = cd;
        this.element = el.nativeElement;
    }
    ResponsiveWindow.prototype.ngOnInit = function () {
        this._responsiveState.registerWindow(this);
    };
    ResponsiveWindow.prototype.ngDoCheck = function () {
        var update = this._ifValueChanged(this._noRepeat, this.name);
        if (update) {
            this._responsiveState.unregisterWindow(this);
            this._responsiveState.registerWindow(this);
            this.cd.markForCheck();
        }
    };
    ResponsiveWindow.prototype.ngOnDestroy = function () {
        this._responsiveState.unregisterWindow(this);
    };
    ResponsiveWindow.prototype.getWidth = function () {
        return this.element.offsetWidth;
    };
    ResponsiveWindow.prototype._ifValueChanged = function (oldValue, newValue) {
        if (oldValue === newValue)
            return false;
        else
            this._noRepeat = newValue;
        return true;
    };
    return ResponsiveWindow;
}());
ResponsiveWindow.decorators = [
    { type: core_1.Directive, args: [{
                selector: "[responsive-window]"
            },] },
];
/** @nocollapse */
ResponsiveWindow.ctorParameters = function () { return [
    { type: index_1.ResponsiveState, },
    { type: core_1.ElementRef, },
    { type: core_1.ChangeDetectorRef, },
]; };
ResponsiveWindow.propDecorators = {
    'name': [{ type: core_1.Input, args: ['responsive-window',] },],
};
exports.ResponsiveWindow = ResponsiveWindow;
//# sourceMappingURL=responsive-window.js.map

/***/ }),

/***/ "../../../../ng2-responsive/responsive/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var responsive_1 = __webpack_require__("../../../../ng2-responsive/responsive/responsive.js");
exports.Responsive = responsive_1.Responsive;
exports.RESPONSIVE_DIRECTIVE = [responsive_1.Responsive];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ng2-responsive/responsive/responsive.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var index_1 = __webpack_require__("../../../../ng2-responsive/config/index.js");
var Responsive = (function () {
    function Responsive(templateRef, _responsiveState, viewContainer, cd) {
        this.templateRef = templateRef;
        this._responsiveState = _responsiveState;
        this.viewContainer = viewContainer;
        this.cd = cd;
        this.changes = new core_1.EventEmitter();
        this.set_values = {
            bootstrap: '',
            browser: '',
            device: '',
            pixelratio: '',
            orientation: '',
            standard: '',
            ie: '',
            sizes: 0
        };
        this.set_active_subscriptions = {
            bootstrap: false,
            browser: false,
            device: false,
            pixelratio: false,
            orientation: false,
            standard: false,
            ie: false,
            sizes: false
        };
        this.match_multiple = {
            bootstrap: false,
            browser: false,
            device: false,
            pixelratio: false,
            orientation: false,
            standard: false,
            ie: false,
            sizes: false
        };
        this._showWhenTrue = true;
        this._globalNoRepeat = 0;
        this._bootstrapNoRepeat = 0;
        this._deviceNoRepeat = 0;
        this._standardNoRepeat = 0;
        this._orientationNoRepeat = 0;
        this._browserNoRepeat = 0;
        this._pixelratioNoRepeat = 0;
        this._ieNoRepeat = 0;
        this._sizesNoRepeat = 0;
        this._bootstrap_user_param = [];
        this._devices_user_param = [];
        this._standard_user_param = [];
        this._orientation_user_param = [];
        this._browser_user_param = [];
        this._pixelratio_user_param = [];
        this._ie_user_param = [];
        this._sizes_user_param = [];
        this._sizes_window = 'window';
        this._actives = [];
    }
    Object.defineProperty(Responsive.prototype, "responsive", {
        set: function (config) {
            this.init_responsive(config);
        },
        enumerable: true,
        configurable: true
    });
    Responsive.prototype.init_responsive = function (value) {
        if (this.isJSON(value)) {
            if (!!value.bootstrap && this._bootstrapNoRepeat === 0) {
                this._bootstrap_user_param = (Array.isArray(value.bootstrap) ? value.bootstrap : [value.bootstrap]);
                this._bootstrapNoRepeat = 1;
                this.set_active_subscriptions.bootstrap = true;
            }
            if (!!value.device && this._deviceNoRepeat === 0) {
                this._devices_user_param = (Array.isArray(value.device) ? value.device : [value.device]);
                this._deviceNoRepeat = 1;
                this.set_active_subscriptions.device = true;
            }
            if (!!value.standard && this._standardNoRepeat === 0) {
                this._standard_user_param = (Array.isArray(value.standard) ? value.standard : [value.standard]);
                this._standardNoRepeat = 1;
                this.set_active_subscriptions.standard = true;
            }
            if (!!value.orientation && this._orientationNoRepeat === 0) {
                this._orientation_user_param = (Array.isArray(value.orientation) ? value.orientation : [value.orientation]);
                this._orientationNoRepeat = 1;
                this.set_active_subscriptions.orientation = true;
            }
            if (!!value.browser && this._browserNoRepeat === 0) {
                this._browser_user_param = (Array.isArray(value.browser) ? value.browser : [value.browser]);
                this._browserNoRepeat = 1;
                this.set_active_subscriptions.browser = true;
            }
            if (!!value.pixelratio && this._pixelratioNoRepeat === 0) {
                this._pixelratio_user_param = (Array.isArray(value.pixelratio) ? value.pixelratio : [value.pixelratio]);
                this._pixelratioNoRepeat = 1;
                this.set_active_subscriptions.pixelratio = true;
            }
            if (!!value.ie && this._ieNoRepeat === 0) {
                this._ie_user_param = (Array.isArray(value.ie) ? value.ie : [value.ie]);
                this._ieNoRepeat = 1;
                this.set_active_subscriptions.ie = true;
            }
            if (!!value.sizes && this._sizesNoRepeat === 0) {
                var min = value.sizes.min;
                var max = value.sizes.max;
                var win = value.sizes.window;
                if (win !== undefined) {
                    this._sizes_window = win;
                }
                this._sizes_user_param = [min, max];
                this._sizesNoRepeat = 1;
                this.set_active_subscriptions.sizes = true;
            }
        }
        else if (Array.isArray(value))
            throw new Error('Responsive directive don´t work with a only array parameter');
        else if (typeof value === 'string')
            throw new Error('Responsive directive don´t work with a only string parameter');
        else if (typeof value === 'number')
            throw new Error('Responsive directive don´t work with a only number parameter');
        else if (typeof value === 'undefined' || value === null)
            throw new Error('Responsive directive don´t work without a param');
        for (var key in this.set_active_subscriptions) {
            if (this.set_active_subscriptions[key])
                this._actives.push(key);
        }
        if (this.set_active_subscriptions.bootstrap)
            this._subscription_Bootstrap = this._responsiveState.elementoObservar.subscribe(this.updateBootstrap.bind(this));
        if (this.set_active_subscriptions.browser)
            this._subscription_Browser = this._responsiveState.browserObserver.subscribe(this.updateBrowser.bind(this));
        if (this.set_active_subscriptions.device)
            this._subscription_Device = this._responsiveState.deviceObserver.subscribe(this.updateDevice.bind(this));
        if (this.set_active_subscriptions.pixelratio)
            this._subscription_Pixel_Ratio = this._responsiveState.pixelObserver.subscribe(this.updatePixelRatio.bind(this));
        if (this.set_active_subscriptions.orientation)
            this._subscription_Orientation = this._responsiveState.orientationObserver.subscribe(this.updateOrientation.bind(this));
        if (this.set_active_subscriptions.standard)
            this._subscription_Standard = this._responsiveState.standardObserver.subscribe(this.updateStandard.bind(this));
        if (this.set_active_subscriptions.ie)
            this._subscription_IE_Version = this._responsiveState.ieVersionObserver.subscribe(this.updateIEversion.bind(this));
        if (this.set_active_subscriptions.sizes)
            this._subscription_custom_sizes = this._responsiveState.anchoObservar.subscribe(this.updateSizes.bind(this));
    };
    Responsive.prototype.updateBootstrap = function (value) {
        var _update = this._ifValueChanged(this._noRepeatBootstrapName, value);
        if (_update) {
            this.set_values.bootstrap = value;
        }
        this.updateEvent(this.set_values.bootstrap, 'bootstrap');
    };
    Responsive.prototype.updateBrowser = function (value) {
        this.set_values.browser = value;
        this.updateEvent(this.set_values.browser, 'browser');
    };
    Responsive.prototype.updateDevice = function (value) {
        this.set_values.device = value;
        this.updateEvent(this.set_values.device, 'device');
    };
    Responsive.prototype.updatePixelRatio = function (value) {
        this.set_values.pixelratio = value;
        this.updateEvent(this.set_values.pixelratio, 'pixelratio');
    };
    Responsive.prototype.updateOrientation = function (value) {
        this.set_values.orientation = value;
        this.updateEvent(this.set_values.orientation, 'orientation');
    };
    Responsive.prototype.updateStandard = function (value) {
        this.set_values.standard = value;
        this.updateEvent(this.set_values.standard, 'standard');
    };
    Responsive.prototype.updateIEversion = function (value) {
        this.set_values.ie = value;
        this.updateEvent(this.set_values.ie, 'ie');
    };
    Responsive.prototype.updateSizes = function (value) {
        if (!this._sizes_window)
            this.set_values.sizes = value;
        else
            this.set_values.sizes = this._responsiveState.getWidth(this._sizes_window);
        this.updateEvent(this.set_values.sizes, 'sizes');
    };
    Responsive.prototype.updateEvent = function (param, type_directive) {
        if (!!this._showWhenTrue) {
            switch (type_directive) {
                case 'bootstrap':
                    this.showHideOperations(this._bootstrap_user_param.indexOf(param) !== -1, type_directive);
                    break;
                case 'device':
                    this.showHideOperations(this._devices_user_param.indexOf(param) !== -1, type_directive);
                    break;
                case 'standard':
                    this.showHideOperations(this._standard_user_param.indexOf(param) !== -1, type_directive);
                    break;
                case 'orientation':
                    this.showHideOperations(this._orientation_user_param.indexOf(param) !== -1, type_directive);
                    break;
                case 'browser':
                    this.showHideOperations(this._browser_user_param.indexOf(param) !== -1, type_directive);
                    break;
                case 'pixelratio':
                    this.showHideOperations(this._pixelratio_user_param.indexOf(param) !== -1, type_directive);
                    break;
                case 'ie':
                    this.showHideOperations(this._ie_user_param.indexOf(param) !== -1, type_directive);
                    break;
                case 'sizes':
                    this.showHideOperations(!!(param >= this._sizes_user_param[0] && param <= this._sizes_user_param[1]), type_directive);
                    break;
                default:
                    null;
            }
        }
        else {
            switch (type_directive) {
                case 'bootstrap':
                    this.showHideOperations(!(this._bootstrap_user_param.indexOf(param)), type_directive);
                    break;
                case 'device':
                    this.showHideOperations(!(this._devices_user_param.indexOf(param)), type_directive);
                    break;
                case 'standard':
                    this.showHideOperations(!(this._standard_user_param.indexOf(param)), type_directive);
                    break;
                case 'orientation':
                    this.showHideOperations(!(this._orientation_user_param.indexOf(param)), type_directive);
                    break;
                case 'browser':
                    this.showHideOperations(!(this._browser_user_param.indexOf(param)), type_directive);
                    break;
                case 'pixelratio':
                    this.showHideOperations(!(this._pixelratio_user_param.indexOf(param)), type_directive);
                    break;
                case 'ie':
                    this.showHideOperations(!(this._ie_user_param.indexOf(param)), type_directive);
                    break;
                case 'sizes':
                    this.showHideOperations(!(!!(param >= this._sizes_user_param[0] && param <= this._sizes_user_param[1])), type_directive);
                    break;
                default:
                    null;
            }
        }
    };
    Responsive.prototype.showHideOperations = function (show, type_directive) {
        var global_state = this.matchValues(show, type_directive);
        if (!!global_state) {
            if (this._globalNoRepeat === 0) {
                this._globalNoRepeat = 1;
                this.viewContainer.createEmbeddedView(this.templateRef);
                this.changes.emit(true);
                this.cd.markForCheck();
            }
        }
        else {
            this._globalNoRepeat = 0;
            this.changes.emit(false);
            this.viewContainer.clear();
            this.cd.markForCheck();
        }
    };
    Responsive.prototype.matchValues = function (show, type_directive) {
        var match = true;
        if (show) {
            this.match_multiple[type_directive] = true;
        }
        else {
            this.match_multiple[type_directive] = false;
        }
        for (var all_key in this.match_multiple) {
            for (var _i = 0, _a = this._actives; _i < _a.length; _i++) {
                var active = _a[_i];
                if (all_key == active && this.match_multiple[all_key] === false)
                    return match = false;
            }
        }
        return match;
    };
    Responsive.prototype.ngOnDestroy = function () {
        if (this.set_active_subscriptions.bootstrap)
            this._subscription_Bootstrap.unsubscribe();
        if (this.set_active_subscriptions.browser)
            this._subscription_Browser.unsubscribe();
        if (this.set_active_subscriptions.device)
            this._subscription_Device.unsubscribe();
        if (this.set_active_subscriptions.pixelratio)
            this._subscription_Pixel_Ratio.unsubscribe();
        if (this.set_active_subscriptions.orientation)
            this._subscription_Orientation.unsubscribe();
        if (this.set_active_subscriptions.standard)
            this._subscription_Standard.unsubscribe();
        if (this.set_active_subscriptions.ie)
            this._subscription_IE_Version.unsubscribe();
        if (this.set_active_subscriptions.sizes)
            this._subscription_custom_sizes.unsubscribe();
    };
    Responsive.prototype._ifValueChanged = function (oldValue, newValue) {
        if (oldValue === newValue)
            return false;
        else {
            this._noRepeatBootstrapName = newValue;
            return true;
        }
    };
    Responsive.prototype.isJSON = function (value) {
        try {
            JSON.stringify(value);
            return true;
        }
        catch (ex) {
            return false;
        }
    };
    return Responsive;
}());
Responsive.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[responsive]'
            },] },
];
/** @nocollapse */
Responsive.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ViewContainerRef, },
    { type: core_1.ChangeDetectorRef, },
]; };
Responsive.propDecorators = {
    'responsive': [{ type: core_1.Input },],
    'changes': [{ type: core_1.Output },],
};
exports.Responsive = Responsive;
//# sourceMappingURL=responsive.js.map

/***/ }),

/***/ "../../../../ng2-responsive/useragent/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var useragent_1 = __webpack_require__("../../../../ng2-responsive/useragent/useragent.js");
exports.UserAgentInfo = useragent_1.UserAgentInfo;
exports.USERAGENT_DIRECTIVE = [useragent_1.UserAgentInfo];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ng2-responsive/useragent/useragent.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var index_1 = __webpack_require__("../../../../ng2-responsive/config/index.js");
var UserAgentInfo = (function () {
    function UserAgentInfo(_responsiveState, cd) {
        this._responsiveState = _responsiveState;
        this.cd = cd;
        this.info = new core_1.EventEmitter();
    }
    UserAgentInfo.prototype.ngOnInit = function () {
        this._subscription_UserAgent = this._responsiveState.userAgentObserver.subscribe(this.emitUserAgent.bind(this));
    };
    UserAgentInfo.prototype.ngOnDestroy = function () {
        this._subscription_UserAgent.unsubscribe();
    };
    UserAgentInfo.prototype.emitUserAgent = function (value) {
        this.info.emit(value);
        this.cd.markForCheck();
    };
    return UserAgentInfo;
}());
UserAgentInfo.decorators = [
    { type: core_1.Directive, args: [{
                selector: 'userAgentInfo', outputs: ['info']
            },] },
];
/** @nocollapse */
UserAgentInfo.ctorParameters = function () { return [
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
exports.UserAgentInfo = UserAgentInfo;
//# sourceMappingURL=useragent.js.map

/***/ }),

/***/ "../../../../ng2-social-share/src/facebookParams.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var FacebookParams = (function () {
    function FacebookParams() {
    }
    return FacebookParams;
}());
exports.FacebookParams = FacebookParams;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZWJvb2tQYXJhbXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmYWNlYm9va1BhcmFtcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7SUFBQTtJQUVBLENBQUM7SUFBRCxxQkFBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBRlksc0JBQWMsaUJBRTFCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRmFjZWJvb2tQYXJhbXMge1xuICAgIHU6IHN0cmluZ1xufSJdfQ==

/***/ }),

/***/ "../../../../ng2-social-share/src/googlePlusParams.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var GooglePlusParams = (function () {
    function GooglePlusParams() {
    }
    return GooglePlusParams;
}());
exports.GooglePlusParams = GooglePlusParams;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlUGx1c1BhcmFtcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdvb2dsZVBsdXNQYXJhbXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0lBQUE7SUFJQSxDQUFDO0lBQUQsdUJBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQztBQUpZLHdCQUFnQixtQkFJNUIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBHb29nbGVQbHVzUGFyYW1zIHtcbiAgICBcbiAgICB1cmw6IHN0cmluZ1xuXG59Il19

/***/ }),

/***/ "../../../../ng2-social-share/src/linkedinParams.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LinkedinParams = (function () {
    function LinkedinParams() {
    }
    return LinkedinParams;
}());
exports.LinkedinParams = LinkedinParams;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua2VkaW5QYXJhbXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaW5rZWRpblBhcmFtcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7SUFBQTtJQUVBLENBQUM7SUFBRCxxQkFBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBRlksc0JBQWMsaUJBRTFCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTGlua2VkaW5QYXJhbXMge1xuICAgIHVybDpzdHJpbmdcbn0iXX0=

/***/ }),

/***/ "../../../../ng2-social-share/src/ng2-social-share.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var facebookParams_1 = __webpack_require__("../../../../ng2-social-share/src/facebookParams.js");
var twitterParams_1 = __webpack_require__("../../../../ng2-social-share/src/twitterParams.js");
var googlePlusParams_1 = __webpack_require__("../../../../ng2-social-share/src/googlePlusParams.js");
var pinterestParams_1 = __webpack_require__("../../../../ng2-social-share/src/pinterestParams.js");
var linkedinParams_1 = __webpack_require__("../../../../ng2-social-share/src/linkedinParams.js");
var CeiboShare = (function () {
    function CeiboShare() {
        this.sharers = {
            facebook: {
                shareUrl: 'https://www.facebook.com/sharer/sharer.php',
            },
            googleplus: {
                shareUrl: 'https://plus.google.com/share',
            },
            linkedin: {
                shareUrl: 'https://www.linkedin.com/shareArticle',
            },
            twitter: {
                shareUrl: 'https://twitter.com/intent/tweet/',
            },
            email: {
                //shareUrl: 'mailto:' + this.to,
                /*params: {
                    subject: this.subject,
                    body: this.title + '\n' + this.url
                },*/
                isLink: true
            },
            whatsapp: {
                shareUrl: 'whatsapp://send',
                /*params: {
                    text: this.title + ' ' + this.url
                },*/
                isLink: true
            },
            telegram: {
                shareUrl: 'tg://msg_url',
                /*params: {
                    text: this.title + ' ' + this.url
                },*/
                isLink: true
            },
            viber: {
                shareUrl: 'viber://forward',
                /*params: {
                    text: this.title + ' ' + this.url
                },*/
                isLink: true
            },
            line: {
                //shareUrl: 'http://line.me/R/msg/text/?' + encodeURIComponent(this.title + ' ' + this.url),
                isLink: true
            },
            pinterest: {
                shareUrl: 'https://www.pinterest.com/pin/create/button/',
            },
            tumblr: {
                shareUrl: 'http://tumblr.com/widgets/share/tool',
            },
            hackernews: {
                shareUrl: 'https://news.ycombinator.com/submitlink',
            },
            reddit: {
                shareUrl: 'https://www.reddit.com/submit',
            },
            vk: {
                shareUrl: 'http://vk.com/share.php',
            },
            xing: {
                shareUrl: 'https://www.xing.com/app/user',
            },
            buffer: {
                shareUrl: 'https://buffer.com/add',
            },
            instapaper: {
                shareUrl: 'http://www.instapaper.com/edit',
            },
            pocket: {
                shareUrl: 'https://getpocket.com/save',
            },
            digg: {
                shareUrl: 'http://www.digg.com/submit',
            },
            stumbleupon: {
                shareUrl: 'http://www.stumbleupon.com/submit',
            },
            flipboard: {
                shareUrl: 'https://share.flipboard.com/bookmarklet/popout',
            },
            /*weibo: {
                shareUrl: 'http://service.weibo.com/share/share.php',
                params: {
                    url: this.url,
                    title: this.title,
                    pic: this.image,
                    appkey: this.getValue('appkey'),
                    ralateUid: this.getValue('ralateuid'),
                    language: 'zh_cn'
                }
            },*/
            renren: {
                shareUrl: 'http://share.renren.com/share/buttonshare',
            },
            myspace: {
                shareUrl: 'https://myspace.com/post',
            },
            blogger: {
                shareUrl: 'https://www.blogger.com/blog-this.g',
            },
            baidu: {
                shareUrl: 'http://cang.baidu.com/do/add',
            },
            douban: {
                shareUrl: 'https://www.douban.com/share/service',
            },
            okru: {
                shareUrl: 'https://connect.ok.ru/dk',
            }
        };
    }
    CeiboShare.prototype.urlSharer = function (sharer) {
        var p = sharer.params || {}, keys = Object.keys(p), i, str = keys.length > 0 ? '?' : '';
        for (i = 0; i < keys.length; i++) {
            if (str !== '?') {
                str += '&';
            }
            if (p[keys[i]]) {
                str += keys[i] + '=' + encodeURIComponent(p[keys[i]]);
            }
        }
        sharer.shareUrl += str;
        if (!sharer.isLink) {
            var popWidth = sharer.width || 600, popHeight = sharer.height || 480, left = window.innerWidth / 2 - popWidth / 2 + window.screenX, top = window.innerHeight / 2 - popHeight / 2 + window.screenY, popParams = 'scrollbars=no, width=' + popWidth + ', height=' + popHeight + ', top=' + top + ', left=' + left, newWindow = window.open(sharer.shareUrl, '', popParams);
            if (window.focus) {
                newWindow.focus();
            }
        }
        else {
            window.location.href = sharer.shareUrl;
        }
    };
    CeiboShare.prototype.getSharer = function () {
        var _sharer = {};
        if (this.facebook) {
            _sharer = this.sharers['facebook'];
            _sharer.params = this.facebook;
        }
        if (this.googlePlus) {
            _sharer = this.sharers['googleplus'];
            _sharer.params = this.googlePlus;
        }
        if (this.twitter) {
            _sharer = this.sharers['twitter'];
            _sharer.params = this.twitter;
        }
        if (this.pinterest) {
            _sharer = this.sharers['pinterest'];
            _sharer.params = this.pinterest;
        }
        if (this.linkedIn) {
            _sharer = this.sharers['linkedin'];
            _sharer.params = this.linkedIn;
        }
        return _sharer;
    };
    CeiboShare.prototype.share = function () {
        var s = this.getSharer();
        // custom popups sizes
        if (s) {
            s.width = this.shareWidth;
            s.height = this.shareHeight;
        }
        return s !== undefined ? this.urlSharer(s) : false;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', facebookParams_1.FacebookParams)
    ], CeiboShare.prototype, "facebook", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', twitterParams_1.TwitterParams)
    ], CeiboShare.prototype, "twitter", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', googlePlusParams_1.GooglePlusParams)
    ], CeiboShare.prototype, "googlePlus", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', pinterestParams_1.PinterestParams)
    ], CeiboShare.prototype, "pinterest", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', linkedinParams_1.LinkedinParams)
    ], CeiboShare.prototype, "linkedIn", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CeiboShare.prototype, "shareWidth", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CeiboShare.prototype, "shareHeight", void 0);
    __decorate([
        core_1.HostListener('click'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], CeiboShare.prototype, "share", null);
    CeiboShare = __decorate([
        core_1.Directive({
            selector: '[ceiboShare]'
        }), 
        __metadata('design:paramtypes', [])
    ], CeiboShare);
    return CeiboShare;
}());
exports.CeiboShare = CeiboShare;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLXNvY2lhbC1zaGFyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nMi1zb2NpYWwtc2hhcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUErQyxlQUFlLENBQUMsQ0FBQTtBQUMvRCwrQkFBK0Isa0JBQy9CLENBQUMsQ0FEZ0Q7QUFDakQsOEJBQThCLGlCQUFpQixDQUFDLENBQUE7QUFDaEQsaUNBQWtDLG9CQUFvQixDQUFDLENBQUE7QUFDdkQsZ0NBQWdDLG1CQUFtQixDQUFDLENBQUE7QUFDcEQsK0JBQStCLGtCQUFrQixDQUFDLENBQUE7QUFLbEQ7SUEwTmtCO1FBaE5SLFlBQU8sR0FBRztZQUNBLFFBQVEsRUFBRTtnQkFDTixRQUFRLEVBQUUsNENBQTRDO2FBRXpEO1lBQ0QsVUFBVSxFQUFFO2dCQUNSLFFBQVEsRUFBRSwrQkFBK0I7YUFFNUM7WUFDRCxRQUFRLEVBQUU7Z0JBQ04sUUFBUSxFQUFFLHVDQUF1QzthQUtwRDtZQUNELE9BQU8sRUFBRTtnQkFDTCxRQUFRLEVBQUUsbUNBQW1DO2FBT2hEO1lBQ0QsS0FBSyxFQUFFO2dCQUNILGdDQUFnQztnQkFDaEM7OztvQkFHSTtnQkFDSixNQUFNLEVBQUUsSUFBSTthQUNmO1lBQ0QsUUFBUSxFQUFFO2dCQUNOLFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCOztvQkFFSTtnQkFDSixNQUFNLEVBQUUsSUFBSTthQUNmO1lBQ0QsUUFBUSxFQUFFO2dCQUNOLFFBQVEsRUFBRSxjQUFjO2dCQUN4Qjs7b0JBRUk7Z0JBQ0osTUFBTSxFQUFFLElBQUk7YUFDZjtZQUNELEtBQUssRUFBRTtnQkFDSCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQjs7b0JBRUk7Z0JBQ0osTUFBTSxFQUFFLElBQUk7YUFDZjtZQUNELElBQUksRUFBRTtnQkFDRiw0RkFBNEY7Z0JBQzVGLE1BQU0sRUFBRSxJQUFJO2FBQ2Y7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsUUFBUSxFQUFFLDhDQUE4QzthQU0zRDtZQUNELE1BQU0sRUFBRTtnQkFDSixRQUFRLEVBQUUsc0NBQXNDO2FBU25EO1lBQ0QsVUFBVSxFQUFFO2dCQUNSLFFBQVEsRUFBRSx5Q0FBeUM7YUFLdEQ7WUFDRCxNQUFNLEVBQUU7Z0JBQ0osUUFBUSxFQUFFLCtCQUErQjthQUU1QztZQUNELEVBQUUsRUFBRTtnQkFDQSxRQUFRLEVBQUUseUJBQXlCO2FBT3RDO1lBQ0QsSUFBSSxFQUFFO2dCQUNGLFFBQVEsRUFBRSwrQkFBK0I7YUFNNUM7WUFDRCxNQUFNLEVBQUU7Z0JBQ0osUUFBUSxFQUFFLHdCQUF3QjthQU9yQztZQUNELFVBQVUsRUFBRTtnQkFDUixRQUFRLEVBQUUsZ0NBQWdDO2FBTTdDO1lBQ0QsTUFBTSxFQUFFO2dCQUNKLFFBQVEsRUFBRSw0QkFBNEI7YUFJekM7WUFDRCxJQUFJLEVBQUU7Z0JBQ0YsUUFBUSxFQUFFLDRCQUE0QjthQUl6QztZQUNELFdBQVcsRUFBRTtnQkFDVCxRQUFRLEVBQUUsbUNBQW1DO2FBS2hEO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLFFBQVEsRUFBRSxnREFBZ0Q7YUFPN0Q7WUFDRDs7Ozs7Ozs7OztnQkFVSTtZQUNKLE1BQU0sRUFBRTtnQkFDSixRQUFRLEVBQUUsMkNBQTJDO2FBSXhEO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLFFBQVEsRUFBRSwwQkFBMEI7YUFNdkM7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsUUFBUSxFQUFFLHFDQUFxQzthQU1sRDtZQUNELEtBQUssRUFBRTtnQkFDSCxRQUFRLEVBQUUsOEJBQThCO2FBSzNDO1lBQ0QsTUFBTSxFQUFFO2dCQUNKLFFBQVEsRUFBRSxzQ0FBc0M7YUFNbkQ7WUFDRCxJQUFJLEVBQUU7Z0JBQ0YsUUFBUSxFQUFFLDBCQUEwQjthQU12QztTQUNKLENBQUE7SUFFZ0IsQ0FBQztJQUd4Qiw4QkFBUyxHQUFqQixVQUFrQixNQUFXO1FBQ25CLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLElBQUksRUFBRSxFQUN2QixJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFDckIsQ0FBTSxFQUNOLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ3JDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUMvQixFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDZCxHQUFHLElBQUksR0FBRyxDQUFDO1lBQ2YsQ0FBQztZQUNELEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2IsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUQsQ0FBQztRQUNMLENBQUM7UUFDRCxNQUFNLENBQUMsUUFBUSxJQUFJLEdBQUcsQ0FBQztRQUV2QixFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLElBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxLQUFLLElBQUksR0FBRyxFQUM5QixTQUFTLEdBQUcsTUFBTSxDQUFDLE1BQU0sSUFBSSxHQUFHLEVBQ2hDLElBQUksR0FBRyxNQUFNLENBQUMsVUFBVSxHQUFHLENBQUMsR0FBRyxRQUFRLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxPQUFPLEVBQzVELEdBQUcsR0FBRyxNQUFNLENBQUMsV0FBVyxHQUFHLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxPQUFPLEVBQzdELFNBQVMsR0FBRyx1QkFBdUIsR0FBRyxRQUFRLEdBQUcsV0FBVyxHQUFHLFNBQVMsR0FBRyxRQUFRLEdBQUcsR0FBRyxHQUFHLFNBQVMsR0FBRyxJQUFJLEVBQzVHLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBRTVELEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNmLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUN0QixDQUFDO1FBQ0wsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUMzQyxDQUFDO0lBQ0wsQ0FBQztJQUdELDhCQUFTLEdBQWpCO1FBQ0ksSUFBSSxPQUFPLEdBQVEsRUFBRSxDQUFDO1FBQ3RCLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQSxDQUFDO1lBQ2QsT0FBTyxHQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUE7WUFDakMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFBO1FBQ2xDLENBQUM7UUFDRCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUEsQ0FBQztZQUNoQixPQUFPLEdBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQTtZQUNuQyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUE7UUFDcEMsQ0FBQztRQUVELEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQSxDQUFDO1lBQ2IsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDbEMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ2xDLENBQUM7UUFFRCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNoQixPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNwQyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDcEMsQ0FBQztRQUVELEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQSxDQUFDO1lBQ2QsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDbkMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ25DLENBQUM7UUFFRCxNQUFNLENBQUMsT0FBTyxDQUFDO0lBRW5CLENBQUM7SUFFd0IsMEJBQUssR0FBTDtRQUdiLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQTtRQUN4QixzQkFBc0I7UUFDdEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNKLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUMxQixDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUE7UUFDL0IsQ0FBQztRQUNELE1BQU0sQ0FBQyxDQUFDLEtBQUssU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBRTdELENBQUM7SUFyU0M7UUFBQyxZQUFLLEVBQUU7O2dEQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7OytDQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7O2tEQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7O2lEQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7O2dEQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7O2tEQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7O21EQUFBO0lBb1JWO1FBQUMsbUJBQVksQ0FBQyxPQUFPLENBQUM7Ozs7MkNBQUE7SUE5UnhCO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxjQUFjO1NBQ3pCLENBQUM7O2tCQUFBO0lBMlNGLGlCQUFDO0FBQUQsQ0FBQyxBQTFTRCxJQTBTQztBQTFTWSxrQkFBVSxhQTBTdEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmFjZWJvb2tQYXJhbXMgfSBmcm9tICcuL2ZhY2Vib29rUGFyYW1zJ1xuaW1wb3J0IHsgVHdpdHRlclBhcmFtcyB9IGZyb20gJy4vdHdpdHRlclBhcmFtcyc7XG5pbXBvcnQgeyAgR29vZ2xlUGx1c1BhcmFtcyB9IGZyb20gJy4vZ29vZ2xlUGx1c1BhcmFtcyc7XG5pbXBvcnQgeyBQaW50ZXJlc3RQYXJhbXMgfSBmcm9tICcuL3BpbnRlcmVzdFBhcmFtcyc7XG5pbXBvcnQgeyBMaW5rZWRpblBhcmFtcyB9IGZyb20gJy4vbGlua2VkaW5QYXJhbXMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY2VpYm9TaGFyZV0nXG59KVxuZXhwb3J0IGNsYXNzIENlaWJvU2hhcmUge1xuICAgIEBJbnB1dCgpIGZhY2Vib29rIDogRmFjZWJvb2tQYXJhbXM7XG4gICAgQElucHV0KCkgdHdpdHRlciA6IFR3aXR0ZXJQYXJhbXM7XG4gICAgQElucHV0KCkgZ29vZ2xlUGx1cyA6IEdvb2dsZVBsdXNQYXJhbXM7XG4gICAgQElucHV0KCkgcGludGVyZXN0IDogUGludGVyZXN0UGFyYW1zO1xuICAgIEBJbnB1dCgpIGxpbmtlZEluIDogTGlua2VkaW5QYXJhbXM7XG4gICAgQElucHV0KCkgc2hhcmVXaWR0aDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHNoYXJlSGVpZ2h0OiBzdHJpbmc7XG5cblxuICBwcml2YXRlIHNoYXJlcnMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGZhY2Vib29rOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFyZVVybDogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIvc2hhcmVyLnBocCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3BhcmFtczoge3U6IHRoaXMudXJsfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBnb29nbGVwbHVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFyZVVybDogJ2h0dHBzOi8vcGx1cy5nb29nbGUuY29tL3NoYXJlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vcGFyYW1zOiB7dXJsOiB0aGlzLnVybH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbGlua2VkaW46IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlVXJsOiAnaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL3NoYXJlQXJ0aWNsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAvKnBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogdGhpcy51cmwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluaTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSovXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHR3aXR0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlVXJsOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogdGhpcy50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHRoaXMudXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc2h0YWdzOiB0aGlzLmhhc2h0YWdzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpYTogdGhpcy52aWFcbiAgICAgICAgICAgICAgICAgICAgICAgIH0qL1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBlbWFpbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9zaGFyZVVybDogJ21haWx0bzonICsgdGhpcy50byxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViamVjdDogdGhpcy5zdWJqZWN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHk6IHRoaXMudGl0bGUgKyAnXFxuJyArIHRoaXMudXJsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCovXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0xpbms6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgd2hhdHNhcHA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlVXJsOiAnd2hhdHNhcHA6Ly9zZW5kJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogdGhpcy50aXRsZSArICcgJyArIHRoaXMudXJsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCovXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0xpbms6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdGVsZWdyYW06IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlVXJsOiAndGc6Ly9tc2dfdXJsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogdGhpcy50aXRsZSArICcgJyArIHRoaXMudXJsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCovXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0xpbms6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdmliZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlVXJsOiAndmliZXI6Ly9mb3J3YXJkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogdGhpcy50aXRsZSArICcgJyArIHRoaXMudXJsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCovXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0xpbms6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbGluZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9zaGFyZVVybDogJ2h0dHA6Ly9saW5lLm1lL1IvbXNnL3RleHQvPycgKyBlbmNvZGVVUklDb21wb25lbnQodGhpcy50aXRsZSArICcgJyArIHRoaXMudXJsKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzTGluazogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBwaW50ZXJlc3Q6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlVXJsOiAnaHR0cHM6Ly93d3cucGludGVyZXN0LmNvbS9waW4vY3JlYXRlL2J1dHRvbi8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgLypwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHRoaXMudXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lZGlhOiB0aGlzLmltYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICB9Ki9cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdHVtYmxyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFyZVVybDogJ2h0dHA6Ly90dW1ibHIuY29tL3dpZGdldHMvc2hhcmUvdG9vbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAvKnBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbm9uaWNhbFVybDogdGhpcy51cmwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogdGhpcy51cmwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdHR5cGU6ICdsaW5rJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXB0aW9uOiB0aGlzLmNhcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnczogdGhpcy50YWdzXG4gICAgICAgICAgICAgICAgICAgICAgICB9Ki9cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgaGFja2VybmV3czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVVcmw6ICdodHRwczovL25ld3MueWNvbWJpbmF0b3IuY29tL3N1Ym1pdGxpbmsnLFxuICAgICAgICAgICAgICAgICAgICAgICAgLypwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1OiB0aGlzLnVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0OiB0aGlzLnRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICB9Ki9cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcmVkZGl0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFyZVVybDogJ2h0dHBzOi8vd3d3LnJlZGRpdC5jb20vc3VibWl0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vcGFyYW1zOiB7J3VybCc6IHRoaXMudXJsfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB2azoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVVcmw6ICdodHRwOi8vdmsuY29tL3NoYXJlLnBocCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAvKnBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogdGhpcy51cmwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuY2FwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZTogdGhpcy5pbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSovXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHhpbmc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlVXJsOiAnaHR0cHM6Ly93d3cueGluZy5jb20vYXBwL3VzZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgLypwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnb3AnOiAnc2hhcmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd1cmwnOiB0aGlzLnVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGl0bGUnOiB0aGlzLnRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICB9Ki9cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFyZVVybDogJ2h0dHBzOi8vYnVmZmVyLmNvbS9hZGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgLypwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHRoaXMudXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpYTogdGhpcy52aWEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGljdHVyZTogdGhpcy5waWN0dXJlXG4gICAgICAgICAgICAgICAgICAgICAgICB9Ki9cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFwYXBlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVVcmw6ICdodHRwOi8vd3d3Lmluc3RhcGFwZXIuY29tL2VkaXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgLypwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHRoaXMudXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICB9Ki9cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcG9ja2V0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFyZVVybDogJ2h0dHBzOi8vZ2V0cG9ja2V0LmNvbS9zYXZlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiB0aGlzLnVybFxuICAgICAgICAgICAgICAgICAgICAgICAgfSovXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGRpZ2c6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlVXJsOiAnaHR0cDovL3d3dy5kaWdnLmNvbS9zdWJtaXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgLypwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHRoaXMudXJsXG4gICAgICAgICAgICAgICAgICAgICAgICB9Ki9cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc3R1bWJsZXVwb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlVXJsOiAnaHR0cDovL3d3dy5zdHVtYmxldXBvbi5jb20vc3VibWl0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiB0aGlzLnVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy50aXRsZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSovXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGZsaXBib2FyZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVVcmw6ICdodHRwczovL3NoYXJlLmZsaXBib2FyZC5jb20vYm9va21hcmtsZXQvcG9wb3V0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdjogMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHRoaXMudXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQ6IERhdGUubm93KClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0qL1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAvKndlaWJvOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFyZVVybDogJ2h0dHA6Ly9zZXJ2aWNlLndlaWJvLmNvbS9zaGFyZS9zaGFyZS5waHAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiB0aGlzLnVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaWM6IHRoaXMuaW1hZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwa2V5OiB0aGlzLmdldFZhbHVlKCdhcHBrZXknKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYWxhdGVVaWQ6IHRoaXMuZ2V0VmFsdWUoJ3JhbGF0ZXVpZCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlOiAnemhfY24nXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sKi9cbiAgICAgICAgICAgICAgICAgICAgcmVucmVuOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFyZVVybDogJ2h0dHA6Ly9zaGFyZS5yZW5yZW4uY29tL3NoYXJlL2J1dHRvbnNoYXJlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluazogdGhpcy51cmxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0qL1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBteXNwYWNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFyZVVybDogJ2h0dHBzOi8vbXlzcGFjZS5jb20vcG9zdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAvKnBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHU6IHRoaXMudXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQ6IHRoaXMudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYzogdGhpcy5kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgfSovXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGJsb2dnZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlVXJsOiAnaHR0cHM6Ly93d3cuYmxvZ2dlci5jb20vYmxvZy10aGlzLmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgLypwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1OiB0aGlzLnVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuOiB0aGlzLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQ6IHRoaXMuZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIH0qL1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBiYWlkdToge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVVcmw6ICdodHRwOi8vY2FuZy5iYWlkdS5jb20vZG8vYWRkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXQ6IHRoaXMudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXU6IHRoaXMudXJsXG4gICAgICAgICAgICAgICAgICAgICAgICB9Ki9cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZG91YmFuOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFyZVVybDogJ2h0dHBzOi8vd3d3LmRvdWJhbi5jb20vc2hhcmUvc2VydmljZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAvKnBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogdGhpcy51cmwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IHRoaXMuaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0qL1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBva3J1OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFyZVVybDogJ2h0dHBzOi8vY29ubmVjdC5vay5ydS9kaycsXG4gICAgICAgICAgICAgICAgICAgICAgICAvKnBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzdC5jbWQnOiAnV2lkZ2V0U2hhcmVQcmV2aWV3JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3Quc2hhcmVVcmwnOiB0aGlzLnVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGl0bGUnOiB0aGlzLnRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICB9Ki9cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgY29uc3RydWN0b3IoKSB7fVxuXG5cbiAgcHJpdmF0ZSB1cmxTaGFyZXIoc2hhcmVyOiBhbnkpIHtcbiAgICAgICAgICAgIHZhciBwID0gc2hhcmVyLnBhcmFtcyB8fCB7fSxcbiAgICAgICAgICAgICAgICBrZXlzID0gT2JqZWN0LmtleXMocCksXG4gICAgICAgICAgICAgICAgaTogYW55LFxuICAgICAgICAgICAgICAgIHN0ciA9IGtleXMubGVuZ3RoID4gMCA/ICc/JyA6ICcnO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyICE9PSAnPycpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RyICs9ICcmJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHBba2V5c1tpXV0pIHtcbiAgICAgICAgICAgICAgICAgICAgc3RyICs9IGtleXNbaV0gKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQocFtrZXlzW2ldXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2hhcmVyLnNoYXJlVXJsICs9IHN0cjtcblxuICAgICAgICAgICAgaWYgKCFzaGFyZXIuaXNMaW5rKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBvcFdpZHRoID0gc2hhcmVyLndpZHRoIHx8IDYwMCxcbiAgICAgICAgICAgICAgICAgICAgcG9wSGVpZ2h0ID0gc2hhcmVyLmhlaWdodCB8fCA0ODAsXG4gICAgICAgICAgICAgICAgICAgIGxlZnQgPSB3aW5kb3cuaW5uZXJXaWR0aCAvIDIgLSBwb3BXaWR0aCAvIDIgKyB3aW5kb3cuc2NyZWVuWCxcbiAgICAgICAgICAgICAgICAgICAgdG9wID0gd2luZG93LmlubmVySGVpZ2h0IC8gMiAtIHBvcEhlaWdodCAvIDIgKyB3aW5kb3cuc2NyZWVuWSxcbiAgICAgICAgICAgICAgICAgICAgcG9wUGFyYW1zID0gJ3Njcm9sbGJhcnM9bm8sIHdpZHRoPScgKyBwb3BXaWR0aCArICcsIGhlaWdodD0nICsgcG9wSGVpZ2h0ICsgJywgdG9wPScgKyB0b3AgKyAnLCBsZWZ0PScgKyBsZWZ0LFxuICAgICAgICAgICAgICAgICAgICBuZXdXaW5kb3cgPSB3aW5kb3cub3BlbihzaGFyZXIuc2hhcmVVcmwsICcnLCBwb3BQYXJhbXMpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5mb2N1cykge1xuICAgICAgICAgICAgICAgICAgICBuZXdXaW5kb3cuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gc2hhcmVyLnNoYXJlVXJsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxucHJpdmF0ZSBnZXRTaGFyZXIoKXtcbiAgICB2YXIgX3NoYXJlcjogYW55ID0ge307XG4gICAgaWYodGhpcy5mYWNlYm9vayl7XG4gICAgICAgIF9zaGFyZXI9IHRoaXMuc2hhcmVyc1snZmFjZWJvb2snXVxuICAgICAgICBfc2hhcmVyLnBhcmFtcyA9IHRoaXMuZmFjZWJvb2tcbiAgICB9XG4gICAgaWYodGhpcy5nb29nbGVQbHVzKXtcbiAgICAgICAgX3NoYXJlcj0gdGhpcy5zaGFyZXJzWydnb29nbGVwbHVzJ11cbiAgICAgICAgX3NoYXJlci5wYXJhbXMgPSB0aGlzLmdvb2dsZVBsdXNcbiAgICB9XG5cbiAgICBpZih0aGlzLnR3aXR0ZXIpe1xuICAgICAgICBfc2hhcmVyID0gdGhpcy5zaGFyZXJzWyd0d2l0dGVyJ107XG4gICAgICAgIF9zaGFyZXIucGFyYW1zID0gdGhpcy50d2l0dGVyO1xuICAgIH1cblxuICAgIGlmKHRoaXMucGludGVyZXN0KSB7XG4gICAgICAgIF9zaGFyZXIgPSB0aGlzLnNoYXJlcnNbJ3BpbnRlcmVzdCddO1xuICAgICAgICBfc2hhcmVyLnBhcmFtcyA9IHRoaXMucGludGVyZXN0O1xuICAgIH1cblxuICAgIGlmKHRoaXMubGlua2VkSW4pe1xuICAgICAgICBfc2hhcmVyID0gdGhpcy5zaGFyZXJzWydsaW5rZWRpbiddO1xuICAgICAgICBfc2hhcmVyLnBhcmFtcyA9IHRoaXMubGlua2VkSW47XG4gICAgfVxuXG4gICAgcmV0dXJuIF9zaGFyZXI7XG5cbn1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpIHNoYXJlKCl7XG4gICAgICAgIFxuXG4gICAgICAgICAgICB2YXIgcyA9IHRoaXMuZ2V0U2hhcmVyKClcbiAgICAgICAgICAgIC8vIGN1c3RvbSBwb3B1cHMgc2l6ZXNcbiAgICAgICAgICAgIGlmIChzKSB7XG4gICAgICAgICAgICAgICAgcy53aWR0aCA9IHRoaXMuc2hhcmVXaWR0aDtcbiAgICAgICAgICAgICAgICBzLmhlaWdodCA9IHRoaXMuc2hhcmVIZWlnaHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzICE9PSB1bmRlZmluZWQgPyB0aGlzLnVybFNoYXJlcihzKSA6IGZhbHNlO1xuXG4gIH1cblxuICAgXG5cbn1cbiJdfQ==

/***/ }),

/***/ "../../../../ng2-social-share/src/pinterestParams.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var PinterestParams = (function () {
    function PinterestParams() {
    }
    return PinterestParams;
}());
exports.PinterestParams = PinterestParams;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGludGVyZXN0UGFyYW1zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGludGVyZXN0UGFyYW1zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtJQUFBO0lBT0EsQ0FBQztJQUFELHNCQUFDO0FBQUQsQ0FBQyxBQVBELElBT0M7QUFKSyx1QkFBZSxrQkFJcEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAvKipcbiAqIFBpbnRlcmVzdFBhcmFtc1xuICovXG5jbGFzcyBQaW50ZXJlc3RQYXJhbXMge1xuICAgIHVybDogc3RyaW5nO1xuICAgIG1lZGlhOiBzdHJpbmc7XG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcbn0iXX0=

/***/ }),

/***/ "../../../../ng2-social-share/src/twitterParams.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TwitterParams = (function () {
    function TwitterParams() {
    }
    return TwitterParams;
}());
exports.TwitterParams = TwitterParams;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHdpdHRlclBhcmFtcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInR3aXR0ZXJQYXJhbXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0lBQUE7SUFLQSxDQUFDO0lBQUQsb0JBQUM7QUFBRCxDQUFDLEFBTEQsSUFLQztBQUxZLHFCQUFhLGdCQUt6QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFR3aXR0ZXJQYXJhbXMge1xuICAgIHRleHQ6IHN0cmluZztcbiAgICB1cmw6IHN0cmluZztcbiAgICBoYXNodGFnczogc3RyaW5nO1xuICAgIHZpYTogc3RyaW5nO1xufSJdfQ==

/***/ }),

/***/ "../../../../ngx-pagination/dist/ngx-pagination.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* unused harmony export ɵb */
/* unused harmony export ɵa */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgxPaginationModule; });
/* unused harmony export PaginationService */
/* unused harmony export PaginationControlsComponent */
/* unused harmony export PaginationControlsDirective */
/* unused harmony export PaginatePipe */



var PaginationService = (function () {
    function PaginationService() {
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.instances = {};
        this.DEFAULT_ID = 'DEFAULT_PAGINATION_ID';
    }
    PaginationService.prototype.defaultId = function () { return this.DEFAULT_ID; };
    PaginationService.prototype.register = function (instance) {
        if (!instance.id) {
            instance.id = this.DEFAULT_ID;
        }
        if (!this.instances[instance.id]) {
            this.instances[instance.id] = instance;
            this.change.emit(instance.id);
        }
        else {
            var changed = this.updateInstance(instance);
            if (changed) {
                this.change.emit(instance.id);
            }
        }
    };
    /**
     * Check each property of the instance and update any that have changed. Return
     * true if any changes were made, else return false.
     */
    PaginationService.prototype.updateInstance = function (instance) {
        var changed = false;
        for (var prop in this.instances[instance.id]) {
            if (instance[prop] !== this.instances[instance.id][prop]) {
                this.instances[instance.id][prop] = instance[prop];
                changed = true;
            }
        }
        return changed;
    };
    /**
     * Returns the current page number.
     */
    PaginationService.prototype.getCurrentPage = function (id) {
        if (this.instances[id]) {
            return this.instances[id].currentPage;
        }
    };
    /**
     * Sets the current page number.
     */
    PaginationService.prototype.setCurrentPage = function (id, page) {
        if (this.instances[id]) {
            var instance = this.instances[id];
            var maxPage = Math.ceil(instance.totalItems / instance.itemsPerPage);
            if (page <= maxPage && 1 <= page) {
                this.instances[id].currentPage = page;
                this.change.emit(id);
            }
        }
    };
    /**
     * Sets the value of instance.totalItems
     */
    PaginationService.prototype.setTotalItems = function (id, totalItems) {
        if (this.instances[id] && 0 <= totalItems) {
            this.instances[id].totalItems = totalItems;
            this.change.emit(id);
        }
    };
    /**
     * Sets the value of instance.itemsPerPage.
     */
    PaginationService.prototype.setItemsPerPage = function (id, itemsPerPage) {
        if (this.instances[id]) {
            this.instances[id].itemsPerPage = itemsPerPage;
            this.change.emit(id);
        }
    };
    /**
     * Returns a clone of the pagination instance object matching the id. If no
     * id specified, returns the instance corresponding to the default id.
     */
    PaginationService.prototype.getInstance = function (id) {
        if (id === void 0) { id = this.DEFAULT_ID; }
        if (this.instances[id]) {
            return this.clone(this.instances[id]);
        }
        return {};
    };
    /**
     * Perform a shallow clone of an object.
     */
    PaginationService.prototype.clone = function (obj) {
        var target = {};
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                target[i] = obj[i];
            }
        }
        return target;
    };
    return PaginationService;
}());

var LARGE_NUMBER = Number.MAX_SAFE_INTEGER;
var PaginatePipe = (function () {
    function PaginatePipe(service) {
        this.service = service;
        // store the values from the last time the pipe was invoked
        this.state = {};
    }
    PaginatePipe.prototype.transform = function (collection, args) {
        // When an observable is passed through the AsyncPipe, it will output
        // `null` until the subscription resolves. In this case, we want to
        // use the cached data from the `state` object to prevent the NgFor
        // from flashing empty until the real values arrive.
        if (args instanceof Array) {
            // compatible with angular2 before beta16
            args = args[0];
        }
        if (!(collection instanceof Array)) {
            var _id = args.id || this.service.defaultId;
            if (this.state[_id]) {
                return this.state[_id].slice;
            }
            else {
                return collection;
            }
        }
        var serverSideMode = args.totalItems && args.totalItems !== collection.length;
        var instance = this.createInstance(collection, args);
        var id = instance.id;
        var start, end;
        var perPage = instance.itemsPerPage;
        this.service.register(instance);
        if (!serverSideMode && collection instanceof Array) {
            perPage = +perPage || LARGE_NUMBER;
            start = (instance.currentPage - 1) * perPage;
            end = start + perPage;
            var isIdentical = this.stateIsIdentical(id, collection, start, end);
            if (isIdentical) {
                return this.state[id].slice;
            }
            else {
                var slice = collection.slice(start, end);
                this.saveState(id, collection, slice, start, end);
                this.service.change.emit(id);
                return slice;
            }
        }
        // save the state for server-side collection to avoid null
        // flash as new data loads.
        this.saveState(id, collection, collection, start, end);
        return collection;
    };
    /**
     * Create an PaginationInstance object, using defaults for any optional properties not supplied.
     */
    PaginatePipe.prototype.createInstance = function (collection, args) {
        var config = args;
        this.checkConfig(config);
        return {
            id: config.id || this.service.defaultId(),
            itemsPerPage: +config.itemsPerPage || 0,
            currentPage: +config.currentPage || 1,
            totalItems: +config.totalItems || collection.length
        };
    };
    /**
     * Ensure the argument passed to the filter contains the required properties.
     */
    PaginatePipe.prototype.checkConfig = function (config) {
        var required = ['itemsPerPage', 'currentPage'];
        var missing = required.filter(function (prop) { return !(prop in config); });
        if (0 < missing.length) {
            throw new Error("PaginatePipe: Argument is missing the following required properties: " + missing.join(', '));
        }
    };
    /**
     * To avoid returning a brand new array each time the pipe is run, we store the state of the sliced
     * array for a given id. This means that the next time the pipe is run on this collection & id, we just
     * need to check that the collection, start and end points are all identical, and if so, return the
     * last sliced array.
     */
    PaginatePipe.prototype.saveState = function (id, collection, slice, start, end) {
        this.state[id] = {
            collection: collection,
            size: collection.length,
            slice: slice,
            start: start,
            end: end
        };
    };
    /**
     * For a given id, returns true if the collection, size, start and end values are identical.
     */
    PaginatePipe.prototype.stateIsIdentical = function (id, collection, start, end) {
        var state = this.state[id];
        if (!state) {
            return false;
        }
        var isMetaDataIdentical = state.size === collection.length &&
            state.start === start &&
            state.end === end;
        if (!isMetaDataIdentical) {
            return false;
        }
        return state.slice.every(function (element, index) { return element === collection[start + index]; });
    };
    PaginatePipe.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                    name: 'paginate',
                    pure: false
                },] },
    ];
    /** @nocollapse */
    PaginatePipe.ctorParameters = function () { return [
        { type: PaginationService, },
    ]; };
    return PaginatePipe;
}());

/**
 * The default template and styles for the pagination links are borrowed directly
 * from Zurb Foundation 6: http://foundation.zurb.com/sites/docs/pagination.html
 */
var DEFAULT_TEMPLATE = "\n    <pagination-template  #p=\"paginationApi\"\n                         [id]=\"id\"\n                         [maxSize]=\"maxSize\"\n                         (pageChange)=\"pageChange.emit($event)\">\n    <ul class=\"ngx-pagination\" \n        role=\"navigation\" \n        [attr.aria-label]=\"screenReaderPaginationLabel\" \n        [class.responsive]=\"responsive\"\n        *ngIf=\"!(autoHide && p.pages.length <= 1)\">\n\n        <li class=\"pagination-previous\" [class.disabled]=\"p.isFirstPage()\" *ngIf=\"directionLinks\"> \n            <a tabindex=\"0\" *ngIf=\"1 < p.getCurrent()\" (keyup.enter)=\"p.previous()\" (click)=\"p.previous()\" [attr.aria-label]=\"previousLabel + ' ' + screenReaderPageLabel\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isFirstPage()\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li> \n\n        <li class=\"small-screen\">\n            {{ p.getCurrent() }} / {{ p.getLastPage() }}\n        </li>\n\n        <li [class.current]=\"p.getCurrent() === page.value\" \n            [class.ellipsis]=\"page.label === '...'\"\n            *ngFor=\"let page of p.pages\">\n            <a tabindex=\"0\" (keyup.enter)=\"p.setCurrent(page.value)\" (click)=\"p.setCurrent(page.value)\" *ngIf=\"p.getCurrent() !== page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderPageLabel }} </span>\n                <span>{{ page.label }}</span>\n            </a>\n            <ng-container *ngIf=\"p.getCurrent() === page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderCurrentLabel }} </span>\n                <span>{{ page.label }}</span> \n            </ng-container>\n        </li>\n\n        <li class=\"pagination-next\" [class.disabled]=\"p.isLastPage()\" *ngIf=\"directionLinks\">\n            <a tabindex=\"0\" *ngIf=\"!p.isLastPage()\" (keyup.enter)=\"p.next()\" (click)=\"p.next()\" [attr.aria-label]=\"nextLabel + ' ' + screenReaderPageLabel\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isLastPage()\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li>\n\n    </ul>\n    </pagination-template>\n    ";
var DEFAULT_STYLES = "\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\u00AB';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\u00BB';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }\n.ngx-pagination .small-screen {\n  display: none; }\n@media screen and (max-width: 601px) {\n  .ngx-pagination.responsive .small-screen {\n    display: inline-block; } \n  .ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next) {\n    display: none; }\n}\n  ";

function coerceToBoolean(input) {
    return !!input && input !== 'false';
}
/**
 * The default pagination controls component. Actually just a default implementation of a custom template.
 */
var PaginationControlsComponent = (function () {
    function PaginationControlsComponent() {
        this.maxSize = 7;
        this.previousLabel = 'Previous';
        this.nextLabel = 'Next';
        this.screenReaderPaginationLabel = 'Pagination';
        this.screenReaderPageLabel = 'page';
        this.screenReaderCurrentLabel = "You're on page";
        this.pageChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._directionLinks = true;
        this._autoHide = false;
        this._responsive = false;
    }
    Object.defineProperty(PaginationControlsComponent.prototype, "directionLinks", {
        get: function () {
            return this._directionLinks;
        },
        set: function (value) {
            this._directionLinks = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationControlsComponent.prototype, "autoHide", {
        get: function () {
            return this._autoHide;
        },
        set: function (value) {
            this._autoHide = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationControlsComponent.prototype, "responsive", {
        get: function () {
            return this._responsive;
        },
        set: function (value) {
            this._responsive = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    PaginationControlsComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'pagination-controls',
                    template: DEFAULT_TEMPLATE,
                    styles: [DEFAULT_STYLES],
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
                },] },
    ];
    /** @nocollapse */
    PaginationControlsComponent.ctorParameters = function () { return []; };
    PaginationControlsComponent.propDecorators = {
        'id': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'maxSize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'directionLinks': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'autoHide': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'responsive': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'previousLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'nextLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'screenReaderPaginationLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'screenReaderPageLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'screenReaderCurrentLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'pageChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    return PaginationControlsComponent;
}());

/**
 * This directive is what powers all pagination controls components, including the default one.
 * It exposes an API which is hooked up to the PaginationService to keep the PaginatePipe in sync
 * with the pagination controls.
 */
var PaginationControlsDirective = (function () {
    function PaginationControlsDirective(service, changeDetectorRef) {
        var _this = this;
        this.service = service;
        this.changeDetectorRef = changeDetectorRef;
        this.maxSize = 7;
        this.pageChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.pages = [];
        this.changeSub = this.service.change
            .subscribe(function (id) {
            if (_this.id === id) {
                _this.updatePageLinks();
                _this.changeDetectorRef.markForCheck();
                _this.changeDetectorRef.detectChanges();
            }
        });
    }
    PaginationControlsDirective.prototype.ngOnInit = function () {
        if (this.id === undefined) {
            this.id = this.service.defaultId();
        }
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnChanges = function (changes) {
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnDestroy = function () {
        this.changeSub.unsubscribe();
    };
    /**
     * Go to the previous page
     */
    PaginationControlsDirective.prototype.previous = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() - 1);
    };
    /**
     * Go to the next page
     */
    PaginationControlsDirective.prototype.next = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() + 1);
    };
    /**
     * Returns true if current page is first page
     */
    PaginationControlsDirective.prototype.isFirstPage = function () {
        return this.getCurrent() === 1;
    };
    /**
     * Returns true if current page is last page
     */
    PaginationControlsDirective.prototype.isLastPage = function () {
        return this.getLastPage() === this.getCurrent();
    };
    /**
     * Set the current page number.
     */
    PaginationControlsDirective.prototype.setCurrent = function (page) {
        this.pageChange.emit(page);
    };
    /**
     * Get the current page number.
     */
    PaginationControlsDirective.prototype.getCurrent = function () {
        return this.service.getCurrentPage(this.id);
    };
    /**
     * Returns the last page number
     */
    PaginationControlsDirective.prototype.getLastPage = function () {
        var inst = this.service.getInstance(this.id);
        if (inst.totalItems < 1) {
            // when there are 0 or fewer (an error case) items, there are no "pages" as such,
            // but it makes sense to consider a single, empty page as the last page.
            return 1;
        }
        return Math.ceil(inst.totalItems / inst.itemsPerPage);
    };
    PaginationControlsDirective.prototype.getTotalItems = function () {
        return this.service.getInstance(this.id).totalItems;
    };
    PaginationControlsDirective.prototype.checkValidId = function () {
        if (!this.service.getInstance(this.id).id) {
            console.warn("PaginationControlsDirective: the specified id \"" + this.id + "\" does not match any registered PaginationInstance");
        }
    };
    /**
     * Updates the page links and checks that the current page is valid. Should run whenever the
     * PaginationService.change stream emits a value matching the current ID, or when any of the
     * input values changes.
     */
    PaginationControlsDirective.prototype.updatePageLinks = function () {
        var _this = this;
        var inst = this.service.getInstance(this.id);
        var correctedCurrentPage = this.outOfBoundCorrection(inst);
        if (correctedCurrentPage !== inst.currentPage) {
            setTimeout(function () {
                _this.setCurrent(correctedCurrentPage);
                _this.pages = _this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, _this.maxSize);
            });
        }
        else {
            this.pages = this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, this.maxSize);
        }
    };
    /**
     * Checks that the instance.currentPage property is within bounds for the current page range.
     * If not, return a correct value for currentPage, or the current value if OK.
     */
    PaginationControlsDirective.prototype.outOfBoundCorrection = function (instance) {
        var totalPages = Math.ceil(instance.totalItems / instance.itemsPerPage);
        if (totalPages < instance.currentPage && 0 < totalPages) {
            return totalPages;
        }
        else if (instance.currentPage < 1) {
            return 1;
        }
        return instance.currentPage;
    };
    /**
     * Returns an array of Page objects to use in the pagination controls.
     */
    PaginationControlsDirective.prototype.createPageArray = function (currentPage, itemsPerPage, totalItems, paginationRange) {
        // paginationRange could be a string if passed from attribute, so cast to number.
        paginationRange = +paginationRange;
        var pages = [];
        var totalPages = Math.ceil(totalItems / itemsPerPage);
        var halfWay = Math.ceil(paginationRange / 2);
        var isStart = currentPage <= halfWay;
        var isEnd = totalPages - halfWay < currentPage;
        var isMiddle = !isStart && !isEnd;
        var ellipsesNeeded = paginationRange < totalPages;
        var i = 1;
        while (i <= totalPages && i <= paginationRange) {
            var label = void 0;
            var pageNumber = this.calculatePageNumber(i, currentPage, paginationRange, totalPages);
            var openingEllipsesNeeded = (i === 2 && (isMiddle || isEnd));
            var closingEllipsesNeeded = (i === paginationRange - 1 && (isMiddle || isStart));
            if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
                label = '...';
            }
            else {
                label = pageNumber;
            }
            pages.push({
                label: label,
                value: pageNumber
            });
            i++;
        }
        return pages;
    };
    /**
     * Given the position in the sequence of pagination links [i],
     * figure out what page number corresponds to that position.
     */
    PaginationControlsDirective.prototype.calculatePageNumber = function (i, currentPage, paginationRange, totalPages) {
        var halfWay = Math.ceil(paginationRange / 2);
        if (i === paginationRange) {
            return totalPages;
        }
        else if (i === 1) {
            return i;
        }
        else if (paginationRange < totalPages) {
            if (totalPages - halfWay < currentPage) {
                return totalPages - paginationRange + i;
            }
            else if (halfWay < currentPage) {
                return currentPage - halfWay + i;
            }
            else {
                return i;
            }
        }
        else {
            return i;
        }
    };
    PaginationControlsDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: 'pagination-template,[pagination-template]',
                    exportAs: 'paginationApi'
                },] },
    ];
    /** @nocollapse */
    PaginationControlsDirective.ctorParameters = function () { return [
        { type: PaginationService, },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
    ]; };
    PaginationControlsDirective.propDecorators = {
        'id': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'maxSize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'pageChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    return PaginationControlsDirective;
}());

var NgxPaginationModule = (function () {
    function NgxPaginationModule() {
    }
    NgxPaginationModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
                    declarations: [
                        PaginatePipe,
                        PaginationControlsComponent,
                        PaginationControlsDirective
                    ],
                    providers: [PaginationService],
                    exports: [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective]
                },] },
    ];
    /** @nocollapse */
    NgxPaginationModule.ctorParameters = function () { return []; };
    return NgxPaginationModule;
}());

/**
 * Generated bundle index. Do not edit.
 */




/***/ })

});
//# sourceMappingURL=0.chunk.js.map
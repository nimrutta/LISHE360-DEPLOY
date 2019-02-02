webpackJsonp([3],{

/***/ "../../../../../src/assets/kimberly-geswein/KGShakeitOff.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "KGShakeitOff.1597c38ccce8111f5e3b.ttf";

/***/ }),

/***/ "../../../../../src/font/Cooper Black Regular.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Cooper Black Regular.8eb03871e6046162efce.ttf";

/***/ }),

/***/ "../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--9-1!../node_modules/postcss-loader/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--9-1!../node_modules/postcss-loader/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../@typopro/web-gidole/TypoPRO-Gidole-Regular.eot":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "TypoPRO-Gidole-Regular.460905ab92d0604ab884.eot";

/***/ }),

/***/ "../../../../@typopro/web-gidole/TypoPRO-Gidole-Regular.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "TypoPRO-Gidole-Regular.00b52427d10cd321d44c.ttf";

/***/ }),

/***/ "../../../../@typopro/web-gidole/TypoPRO-Gidole-Regular.woff":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "TypoPRO-Gidole-Regular.469b5a710c5645a77ca2.woff";

/***/ }),

/***/ "../../../../@typopro/web-gidole/TypoPRO-Gidole.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../@typopro/web-gidole/TypoPRO-Gidole.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../css-loader/index.js??ref--9-1!../../postcss-loader/index.js??postcss!./TypoPRO-Gidole.css", function() {
			var newContent = require("!!../../css-loader/index.js??ref--9-1!../../postcss-loader/index.js??postcss!./TypoPRO-Gidole.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../@typopro/web-gidole/TypoPRO-Gidolinya-Regular.eot":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "TypoPRO-Gidolinya-Regular.8b2285112a270f546645.eot";

/***/ }),

/***/ "../../../../@typopro/web-gidole/TypoPRO-Gidolinya-Regular.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "TypoPRO-Gidolinya-Regular.5556e793ac042915b827.ttf";

/***/ }),

/***/ "../../../../@typopro/web-gidole/TypoPRO-Gidolinya-Regular.woff":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "TypoPRO-Gidolinya-Regular.9a4dd046b8244174fa18.woff";

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../wfk-montserrat/montserrat.css"), "");
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles/font.scss"), "");

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\nbutton:focus {outline: none}\ninput:focus {outline: none}\n@font-face {\n    font-family: 'kgshakeitoff';\n    src: url(" + __webpack_require__("../../../../../src/assets/kimberly-geswein/KGShakeitOff.ttf") + ");\n}\n@font-face {\n         font-family: 'CooperBlackRegular';\n         src:url('" + __webpack_require__("../../../../../src/font/Cooper Black Regular.ttf") + "') format('truetype');\n         font-weight: normal;\n         font-style: normal;\n}\n\n/*\n.index1 {\n  width: 100%;\n  height: 1000px;\n  background-image: url(\"./assets/images/happy mother-kid.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.cover {\n    height: 100%;\n    width: 100%;\n    padding: 30px 0 0 0;\n    background-color: rgba(0, 0, 0,0.7);\n    border-top-right-radius: 2px;\n    border-top-left-radius: 2px;  \n    z-index: -1;\n}\n\n.icon {\n  width: 130px;\n  height: 130px;\n  margin: 210px 0 0 570px;\n  \n}\n\n*/\n/*\n.brandname {\n  color: #fff;\n  font-size: 20px;\n  width: fit-content;\n  display: inline-block !important;\n  margin: 15px 5px 0 580px;    \n}\n\n.loadingbutton {\n  display: inline-block !important;\n  margin: 0 0 0 15px;\n}*/", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles/font.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "$cooper-font-path : \"./font/Cooper Black Regular.ttf\";\n$font-family-brand: 'CooperBlackRegular'; ", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../@typopro/web-gidole/TypoPRO-Gidole.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n/* TypoPRO Gidole Regular */\n@font-face {\n    font-family:  'Gidole';\n    src:          url(" + __webpack_require__("../../../../@typopro/web-gidole/TypoPRO-Gidole-Regular.eot") + ");\n    src:          local('*'),\n                  url(" + __webpack_require__("../../../../@typopro/web-gidole/TypoPRO-Gidole-Regular.eot") + "?#iefix) format('embedded-opentype'),\n                  url(" + __webpack_require__("../../../../@typopro/web-gidole/TypoPRO-Gidole-Regular.woff") + ") format('woff'),\n                  url(" + __webpack_require__("../../../../@typopro/web-gidole/TypoPRO-Gidole-Regular.ttf") + ") format('truetype');\n    font-style:   normal;\n    font-weight:  normal;\n    font-stretch: normal;\n    font-variant: normal;\n}\n\n\n/* TypoPRO Gidolinya Regular */\n@font-face {\n    font-family:  'TypoPRO Gidole Gidolinya';\n    src:          url(" + __webpack_require__("../../../../@typopro/web-gidole/TypoPRO-Gidolinya-Regular.eot") + ");\n    src:          local('*'),\n                  url(" + __webpack_require__("../../../../@typopro/web-gidole/TypoPRO-Gidolinya-Regular.eot") + "?#iefix) format('embedded-opentype'),\n                  url(" + __webpack_require__("../../../../@typopro/web-gidole/TypoPRO-Gidolinya-Regular.woff") + ") format('woff'),\n                  url(" + __webpack_require__("../../../../@typopro/web-gidole/TypoPRO-Gidolinya-Regular.ttf") + ") format('truetype');\n    font-style:   normal;\n    font-weight:  normal;\n    font-stretch: normal;\n    font-variant: normal;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../ngx-select-dropdown/dist/assets/style.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face {\r\n  font-family: 'icomoon';\r\n  src:  url(" + __webpack_require__("../../../../ngx-select-dropdown/dist/assets/fonts/icomoon.eot?eh7l1v") + ");\r\n  src:  url(" + __webpack_require__("../../../../ngx-select-dropdown/dist/assets/fonts/icomoon.eot?eh7l1v") + "#iefix) format('embedded-opentype'),\r\n    url(" + __webpack_require__("../../../../ngx-select-dropdown/dist/assets/fonts/icomoon.ttf?eh7l1v") + ") format('truetype'),\r\n    url(" + __webpack_require__("../../../../ngx-select-dropdown/dist/assets/fonts/icomoon.woff?eh7l1v") + ") format('woff'),\r\n    url(" + __webpack_require__("../../../../ngx-select-dropdown/dist/assets/fonts/icomoon.svg?eh7l1v") + "#icomoon) format('svg');\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n\r\n[class^=\"nsdicon-\"], [class*=\" nsdicon-\"] {\r\n  /* use !important to prevent issues with browser extensions that change fonts */\r\n  font-family: 'icomoon' !important;\r\n  speak: none;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-variant: normal;\r\n  text-transform: none;\r\n  line-height: 1;\r\n\r\n  /* Better Font Rendering =========== */\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\n.nsdicon-search:before {\r\n  content: \"\\F002\";\r\n}\r\n.nsdicon-check:before {\r\n  content: \"\\F00C\";\r\n}\r\n.nsdicon-close:before {\r\n  content: \"\\F00D\";\r\n}\r\n.nsdicon-remove:before {\r\n  content: \"\\F00D\";\r\n}\r\n.nsdicon-times:before {\r\n  content: \"\\F00D\";\r\n}\r\n.nsdicon-angle-down:before {\r\n  content: \"\\F107\";\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../paper-dashboard/assets/css/paper-dashboard.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*!\n    \n =========================================================\n * Paper Dashboard - v1.1.1\n =========================================================\n \n * Product Page: http://www.creative-tim.com/product/paper-dashboard\n * Copyright 2017 Creative Tim (http://www.creative-tim.com)\n * Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard/blob/master/LICENSE.md)\n \n =========================================================\n \n * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n \n */\n\n\n/*      light colors - used for select dropdown         */\n.ct-blue {\n  stroke: #7A9E9F !important;\n}\n\n.ct-azure {\n  stroke: #68B3C8 !important;\n}\n\n.ct-green {\n  stroke: #7AC29A !important;\n}\n\n.ct-orange {\n  stroke: #F3BB45 !important;\n}\n\n.ct-red {\n  stroke: #EB5E28 !important;\n}\n\nh1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6, p, .navbar, .brand, a, .td-name, td {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: 'Muli', \"Helvetica\", Arial, sans-serif;\n}\n\nh1, .h1, h2, .h2, h3, .h3, h4, .h4 {\n  font-weight: 400;\n  margin: 30px 0 15px;\n}\n\nh1, .h1 {\n  font-size: 3.2em;\n}\n\nh2, .h2 {\n  font-size: 2.6em;\n}\n\nh3, .h3 {\n  font-size: 1.825em;\n  line-height: 1.4;\n  margin: 20px 0 10px;\n}\n\nh4, .h4 {\n  font-size: 1.5em;\n  font-weight: 600;\n  line-height: 1.2em;\n}\n\nh5, .h5 {\n  font-size: 1.25em;\n  font-weight: 400;\n  line-height: 1.4em;\n  margin-bottom: 15px;\n}\n\nh6, .h6 {\n  font-size: 0.9em;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n\np {\n  font-size: 16px;\n  line-height: 1.4em;\n}\n\nh1 small, h2 small, h3 small, h4 small, h5 small, h6 small, .h1 small, .h2 small, .h3 small, .h4 small, .h5 small, .h6 small, h1 .small, h2 .small, h3 .small, h4 .small, h5 .small, h6 .small, .h1 .small, .h2 .small, .h3 .small, .h4 .small, .h5 .small, .h6 .small {\n  color: #9A9A9A;\n  font-weight: 300;\n  line-height: 1.4em;\n}\n\nh1 small, h2 small, h3 small, h1 .small, h2 .small, h3 .small {\n  font-size: 60%;\n}\n\n.title-uppercase {\n  text-transform: uppercase;\n}\n\nblockquote {\n  font-style: italic;\n}\n\nblockquote small {\n  font-style: normal;\n}\n\n.text-muted {\n  color: #DDDDDD;\n}\n\n.text-primary, .text-primary:hover {\n  color: #427C89;\n}\n\n.text-info, .text-info:hover {\n  color: #3091B2;\n}\n\n.text-success, .text-success:hover {\n  color: #42A084;\n}\n\n.text-warning, .text-warning:hover {\n  color: #BB992F;\n}\n\n.text-danger, .text-danger:hover {\n  color: #B33C12;\n}\n\n.glyphicon {\n  line-height: 1;\n}\n\nstrong {\n  color: #403D39;\n}\n\n.icon-primary {\n  color: #7A9E9F;\n}\n\n.icon-info {\n  color: #68B3C8;\n}\n\n.icon-success {\n  color: #7AC29A;\n}\n\n.icon-warning {\n  color: #F3BB45;\n}\n\n.icon-danger {\n  color: #EB5E28;\n}\n\n.chart-legend .text-primary, .chart-legend .text-primary:hover {\n  color: #7A9E9F;\n}\n.chart-legend .text-info, .chart-legend .text-info:hover {\n  color: #68B3C8;\n}\n.chart-legend .text-success, .chart-legend .text-success:hover {\n  color: #7AC29A;\n}\n.chart-legend .text-warning, .chart-legend .text-warning:hover {\n  color: #F3BB45;\n}\n.chart-legend .text-danger, .chart-legend .text-danger:hover {\n  color: #EB5E28;\n}\n\n/*     General overwrite     */\nbody {\n  color: #66615b;\n  font-size: 14px;\n  font-family: 'Muli', Arial, sans-serif;\n}\nbody .wrapper {\n  min-height: 100vh;\n  position: relative;\n}\n\na {\n  color: #68B3C8;\n}\na:hover, a:focus {\n  color: #3091B2;\n  text-decoration: none;\n}\n\na:focus, a:active,\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner,\nselect::-moz-focus-inner,\ninput[type=\"file\"] > input[type=\"button\"]::-moz-focus-inner {\n  outline: 0 !important;\n}\n\n.ui-slider-handle:focus,\n.navbar-toggle,\ninput:focus,\nbutton:focus {\n  outline: 0 !important;\n}\n\n/*           Animations              */\n.form-control,\n.input-group-addon,\n.tagsinput,\n.navbar,\n.navbar .alert {\n  transition: all 300ms linear;\n}\n\n.sidebar .nav a,\n.table > tbody > tr .td-actions .btn {\n  transition: all 150ms ease-in;\n}\n\n.btn {\n  transition: all 100ms ease-in;\n}\n\n.fa {\n  width: 21px;\n  text-align: center;\n}\n\n.fa-base {\n  font-size: 1.25em !important;\n}\n\n.margin-top {\n  margin-top: 50px;\n}\n\nhr {\n  border-color: #F1EAE0;\n}\n\n.wrapper {\n  position: relative;\n  top: 0;\n  height: 100vh;\n}\n\n.sidebar {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  background-size: cover;\n  background-position: center center;\n}\n.sidebar .sidebar-wrapper {\n  position: relative;\n  max-height: none;\n  min-height: 100%;\n  overflow: hidden;\n  width: 260px;\n  z-index: 4;\n  box-shadow: inset -1px 0px 0px 0px #DDDDDD;\n}\n.sidebar .sidebar-background {\n  position: absolute;\n  z-index: 1;\n  height: 100%;\n  width: 100%;\n  display: block;\n  top: 0;\n  left: 0;\n  background-size: cover;\n  background-position: center center;\n}\n\n.sidebar,\n.off-canvas-sidebar {\n  width: 260px;\n  display: block;\n  font-weight: 200;\n}\n.sidebar .logo,\n.off-canvas-sidebar .logo {\n  padding: 18px 0px;\n  margin: 0 20px;\n}\n.sidebar .logo p,\n.off-canvas-sidebar .logo p {\n  float: left;\n  font-size: 20px;\n  margin: 10px 10px;\n  line-height: 20px;\n}\n.sidebar .logo .simple-text,\n.off-canvas-sidebar .logo .simple-text {\n  text-transform: uppercase;\n  padding: 4px 0px;\n  display: block;\n  font-size: 18px;\n  text-align: center;\n  font-weight: 400;\n  line-height: 30px;\n}\n.sidebar .nav,\n.off-canvas-sidebar .nav {\n  margin-top: 20px;\n}\n.sidebar .nav li > a,\n.off-canvas-sidebar .nav li > a {\n  margin: 10px 0px;\n  padding-left: 25px;\n  padding-right: 25px;\n  opacity: .7;\n}\n.sidebar .nav li:hover > a,\n.off-canvas-sidebar .nav li:hover > a {\n  opacity: 1;\n}\n.sidebar .nav li.active > a,\n.off-canvas-sidebar .nav li.active > a {\n  color: #7A9E9F;\n  opacity: 1;\n}\n.sidebar .nav li.active > a:before,\n.off-canvas-sidebar .nav li.active > a:before {\n  border-right: 17px solid #DDDDDD;\n  border-top: 17px solid transparent;\n  border-bottom: 17px solid transparent;\n  content: \"\";\n  display: inline-block;\n  position: absolute;\n  right: 0;\n  top: 8px;\n}\n.sidebar .nav li.active > a:after,\n.off-canvas-sidebar .nav li.active > a:after {\n  border-right: 17px solid #f4f3ef;\n  border-top: 17px solid transparent;\n  border-bottom: 17px solid transparent;\n  content: \"\";\n  display: inline-block;\n  position: absolute;\n  right: -1px;\n  top: 8px;\n}\n.sidebar .nav p,\n.off-canvas-sidebar .nav p {\n  margin: 0;\n  line-height: 30px;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.sidebar .nav i,\n.off-canvas-sidebar .nav i {\n  font-size: 24px;\n  float: left;\n  margin-right: 15px;\n  line-height: 30px;\n  width: 30px;\n  text-align: center;\n}\n.sidebar:after, .sidebar:before,\n.off-canvas-sidebar:after,\n.off-canvas-sidebar:before {\n  display: block;\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 2;\n  background: #FFFFFF;\n}\n.sidebar:after, .sidebar:before, .sidebar[data-background-color=\"white\"]:after, .sidebar[data-background-color=\"white\"]:before,\n.off-canvas-sidebar:after,\n.off-canvas-sidebar:before,\n.off-canvas-sidebar[data-background-color=\"white\"]:after,\n.off-canvas-sidebar[data-background-color=\"white\"]:before {\n  background-color: #FFFFFF;\n}\n.sidebar .logo, .sidebar[data-background-color=\"white\"] .logo,\n.off-canvas-sidebar .logo,\n.off-canvas-sidebar[data-background-color=\"white\"] .logo {\n  border-bottom: 1px solid rgba(102, 97, 91, 0.3);\n}\n.sidebar .logo p, .sidebar[data-background-color=\"white\"] .logo p,\n.off-canvas-sidebar .logo p,\n.off-canvas-sidebar[data-background-color=\"white\"] .logo p {\n  color: #66615B;\n}\n.sidebar .logo .simple-text, .sidebar[data-background-color=\"white\"] .logo .simple-text,\n.off-canvas-sidebar .logo .simple-text,\n.off-canvas-sidebar[data-background-color=\"white\"] .logo .simple-text {\n  color: #66615B;\n}\n.sidebar .nav li:not(.active) > a, .sidebar[data-background-color=\"white\"] .nav li:not(.active) > a,\n.off-canvas-sidebar .nav li:not(.active) > a,\n.off-canvas-sidebar[data-background-color=\"white\"] .nav li:not(.active) > a {\n  color: #66615B;\n}\n.sidebar .nav .divider, .sidebar[data-background-color=\"white\"] .nav .divider,\n.off-canvas-sidebar .nav .divider,\n.off-canvas-sidebar[data-background-color=\"white\"] .nav .divider {\n  background-color: rgba(102, 97, 91, 0.2);\n}\n.sidebar[data-background-color=\"black\"]:after, .sidebar[data-background-color=\"black\"]:before,\n.off-canvas-sidebar[data-background-color=\"black\"]:after,\n.off-canvas-sidebar[data-background-color=\"black\"]:before {\n  background-color: #212120;\n}\n.sidebar[data-background-color=\"black\"] .logo,\n.off-canvas-sidebar[data-background-color=\"black\"] .logo {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.3);\n}\n.sidebar[data-background-color=\"black\"] .logo p,\n.off-canvas-sidebar[data-background-color=\"black\"] .logo p {\n  color: #FFFFFF;\n}\n.sidebar[data-background-color=\"black\"] .logo .simple-text,\n.off-canvas-sidebar[data-background-color=\"black\"] .logo .simple-text {\n  color: #FFFFFF;\n}\n.sidebar[data-background-color=\"black\"] .nav li:not(.active) > a,\n.off-canvas-sidebar[data-background-color=\"black\"] .nav li:not(.active) > a {\n  color: #FFFFFF;\n}\n.sidebar[data-background-color=\"black\"] .nav .divider,\n.off-canvas-sidebar[data-background-color=\"black\"] .nav .divider {\n  background-color: rgba(255, 255, 255, 0.2);\n}\n.sidebar[data-active-color=\"primary\"] .nav li.active > a,\n.off-canvas-sidebar[data-active-color=\"primary\"] .nav li.active > a {\n  color: #7A9E9F;\n  opacity: 1;\n}\n.sidebar[data-active-color=\"info\"] .nav li.active > a,\n.off-canvas-sidebar[data-active-color=\"info\"] .nav li.active > a {\n  color: #68B3C8;\n  opacity: 1;\n}\n.sidebar[data-active-color=\"success\"] .nav li.active > a,\n.off-canvas-sidebar[data-active-color=\"success\"] .nav li.active > a {\n  color: #7AC29A;\n  opacity: 1;\n}\n.sidebar[data-active-color=\"warning\"] .nav li.active > a,\n.off-canvas-sidebar[data-active-color=\"warning\"] .nav li.active > a {\n  color: #F3BB45;\n  opacity: 1;\n}\n.sidebar[data-active-color=\"danger\"] .nav li.active > a,\n.off-canvas-sidebar[data-active-color=\"danger\"] .nav li.active > a {\n  color: #EB5E28;\n  opacity: 1;\n}\n\n.main-panel {\n  background-color: #f4f3ef;\n  position: relative;\n  z-index: 2;\n  float: right;\n  width: calc(100% - 260px);\n  min-height: 100%;\n}\n.main-panel > .content {\n  padding: 30px 15px;\n  min-height: calc(100% - 123px);\n}\n.main-panel > .footer {\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n}\n.main-panel .navbar {\n  margin-bottom: 0;\n}\n\n.sidebar,\n.main-panel {\n  overflow: auto;\n  max-height: 100%;\n  height: 100%;\n  transition-property: top,bottom;\n  transition-duration: .2s,.2s;\n  transition-timing-function: linear,linear;\n  -webkit-overflow-scrolling: touch;\n}\n\n.btn,\n.navbar .navbar-nav > li > a.btn {\n  border-radius: 20px;\n  box-sizing: border-box;\n  border-width: 2px;\n  background-color: transparent;\n  font-size: 14px;\n  font-weight: 500;\n  padding: 7px 18px;\n  border-color: #66615B;\n  color: #66615B;\n  transition: all 150ms linear;\n}\n.btn:hover, .btn:focus, .btn:active, .btn.active, .open > .btn.dropdown-toggle,\n.navbar .navbar-nav > li > a.btn:hover,\n.navbar .navbar-nav > li > a.btn:focus,\n.navbar .navbar-nav > li > a.btn:active,\n.navbar .navbar-nav > li > a.btn.active, .open >\n.navbar .navbar-nav > li > a.btn.dropdown-toggle {\n  background-color: #66615B;\n  color: rgba(255, 255, 255, 0.7);\n  border-color: #66615B;\n}\n.btn:hover .caret, .btn:focus .caret, .btn:active .caret, .btn.active .caret, .open > .btn.dropdown-toggle .caret,\n.navbar .navbar-nav > li > a.btn:hover .caret,\n.navbar .navbar-nav > li > a.btn:focus .caret,\n.navbar .navbar-nav > li > a.btn:active .caret,\n.navbar .navbar-nav > li > a.btn.active .caret, .open >\n.navbar .navbar-nav > li > a.btn.dropdown-toggle .caret {\n  border-top-color: rgba(255, 255, 255, 0.7);\n}\n.btn.disabled, .btn.disabled:hover, .btn.disabled:focus, .btn.disabled.focus, .btn.disabled:active, .btn.disabled.active, .btn:disabled, .btn:disabled:hover, .btn:disabled:focus, .btn:disabled.focus, .btn:disabled:active, .btn:disabled.active, .btn[disabled], .btn[disabled]:hover, .btn[disabled]:focus, .btn[disabled].focus, .btn[disabled]:active, .btn[disabled].active, fieldset[disabled] .btn, fieldset[disabled] .btn:hover, fieldset[disabled] .btn:focus, fieldset[disabled] .btn.focus, fieldset[disabled] .btn:active, fieldset[disabled] .btn.active,\n.navbar .navbar-nav > li > a.btn.disabled,\n.navbar .navbar-nav > li > a.btn.disabled:hover,\n.navbar .navbar-nav > li > a.btn.disabled:focus,\n.navbar .navbar-nav > li > a.btn.disabled.focus,\n.navbar .navbar-nav > li > a.btn.disabled:active,\n.navbar .navbar-nav > li > a.btn.disabled.active,\n.navbar .navbar-nav > li > a.btn:disabled,\n.navbar .navbar-nav > li > a.btn:disabled:hover,\n.navbar .navbar-nav > li > a.btn:disabled:focus,\n.navbar .navbar-nav > li > a.btn:disabled.focus,\n.navbar .navbar-nav > li > a.btn:disabled:active,\n.navbar .navbar-nav > li > a.btn:disabled.active,\n.navbar .navbar-nav > li > a.btn[disabled],\n.navbar .navbar-nav > li > a.btn[disabled]:hover,\n.navbar .navbar-nav > li > a.btn[disabled]:focus,\n.navbar .navbar-nav > li > a.btn[disabled].focus,\n.navbar .navbar-nav > li > a.btn[disabled]:active,\n.navbar .navbar-nav > li > a.btn[disabled].active, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn:hover, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn:focus, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.focus, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn:active, fieldset[disabled]\n.navbar .navbar-nav > li > a.btn.active {\n  background-color: transparent;\n  border-color: #66615B;\n}\n.btn.btn-fill,\n.navbar .navbar-nav > li > a.btn.btn-fill {\n  color: #FFFFFF;\n  background-color: #66615B;\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n.btn.btn-fill:hover, .btn.btn-fill:focus, .btn.btn-fill:active, .btn.btn-fill.active, .open > .btn.btn-fill.dropdown-toggle,\n.navbar .navbar-nav > li > a.btn.btn-fill:hover,\n.navbar .navbar-nav > li > a.btn.btn-fill:focus,\n.navbar .navbar-nav > li > a.btn.btn-fill:active,\n.navbar .navbar-nav > li > a.btn.btn-fill.active, .open >\n.navbar .navbar-nav > li > a.btn.btn-fill.dropdown-toggle {\n  background-color: #403D39;\n  color: #FFFFFF;\n  border-color: #403D39;\n}\n.btn.btn-fill .caret,\n.navbar .navbar-nav > li > a.btn.btn-fill .caret {\n  border-top-color: #FFFFFF;\n}\n.btn.btn-simple:hover, .btn.btn-simple:focus, .btn.btn-simple:active, .btn.btn-simple.active, .open > .btn.btn-simple.dropdown-toggle,\n.navbar .navbar-nav > li > a.btn.btn-simple:hover,\n.navbar .navbar-nav > li > a.btn.btn-simple:focus,\n.navbar .navbar-nav > li > a.btn.btn-simple:active,\n.navbar .navbar-nav > li > a.btn.btn-simple.active, .open >\n.navbar .navbar-nav > li > a.btn.btn-simple.dropdown-toggle {\n  background-color: transparent;\n  color: #403D39;\n}\n.btn.btn-simple .caret,\n.navbar .navbar-nav > li > a.btn.btn-simple .caret {\n  border-top-color: #FFFFFF;\n}\n.btn .caret,\n.navbar .navbar-nav > li > a.btn .caret {\n  border-top-color: #66615B;\n}\n.btn:hover, .btn:focus,\n.navbar .navbar-nav > li > a.btn:hover,\n.navbar .navbar-nav > li > a.btn:focus {\n  outline: 0 !important;\n}\n.btn:active, .btn.active, .open > .btn.dropdown-toggle,\n.navbar .navbar-nav > li > a.btn:active,\n.navbar .navbar-nav > li > a.btn.active, .open >\n.navbar .navbar-nav > li > a.btn.dropdown-toggle {\n  box-shadow: none;\n  outline: 0 !important;\n}\n.btn.btn-icon,\n.navbar .navbar-nav > li > a.btn.btn-icon {\n  padding: 7px;\n}\n\n.btn-group .btn + .btn,\n.btn-group .btn + .btn-group,\n.btn-group .btn-group + .btn,\n.btn-group .btn-group + .btn-group {\n  margin-left: -2px;\n}\n\n.navbar .navbar-nav > li > a.btn-primary, .btn-primary {\n  border-color: #7A9E9F;\n  color: #7A9E9F;\n}\n.navbar .navbar-nav > li > a.btn-primary:hover, .navbar .navbar-nav > li > a.btn-primary:focus, .navbar .navbar-nav > li > a.btn-primary:active, .navbar .navbar-nav > li > a.btn-primary.active, .open > .navbar .navbar-nav > li > a.btn-primary.dropdown-toggle, .btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active, .open > .btn-primary.dropdown-toggle {\n  background-color: #7A9E9F;\n  color: rgba(255, 255, 255, 0.7);\n  border-color: #7A9E9F;\n}\n.navbar .navbar-nav > li > a.btn-primary:hover .caret, .navbar .navbar-nav > li > a.btn-primary:focus .caret, .navbar .navbar-nav > li > a.btn-primary:active .caret, .navbar .navbar-nav > li > a.btn-primary.active .caret, .open > .navbar .navbar-nav > li > a.btn-primary.dropdown-toggle .caret, .btn-primary:hover .caret, .btn-primary:focus .caret, .btn-primary:active .caret, .btn-primary.active .caret, .open > .btn-primary.dropdown-toggle .caret {\n  border-top-color: rgba(255, 255, 255, 0.7);\n}\n.navbar .navbar-nav > li > a.btn-primary.disabled, .navbar .navbar-nav > li > a.btn-primary.disabled:hover, .navbar .navbar-nav > li > a.btn-primary.disabled:focus, .navbar .navbar-nav > li > a.btn-primary.disabled.focus, .navbar .navbar-nav > li > a.btn-primary.disabled:active, .navbar .navbar-nav > li > a.btn-primary.disabled.active, .navbar .navbar-nav > li > a.btn-primary:disabled, .navbar .navbar-nav > li > a.btn-primary:disabled:hover, .navbar .navbar-nav > li > a.btn-primary:disabled:focus, .navbar .navbar-nav > li > a.btn-primary:disabled.focus, .navbar .navbar-nav > li > a.btn-primary:disabled:active, .navbar .navbar-nav > li > a.btn-primary:disabled.active, .navbar .navbar-nav > li > a.btn-primary[disabled], .navbar .navbar-nav > li > a.btn-primary[disabled]:hover, .navbar .navbar-nav > li > a.btn-primary[disabled]:focus, .navbar .navbar-nav > li > a.btn-primary[disabled].focus, .navbar .navbar-nav > li > a.btn-primary[disabled]:active, .navbar .navbar-nav > li > a.btn-primary[disabled].active, fieldset[disabled] .navbar .navbar-nav > li > a.btn-primary, fieldset[disabled] .navbar .navbar-nav > li > a.btn-primary:hover, fieldset[disabled] .navbar .navbar-nav > li > a.btn-primary:focus, fieldset[disabled] .navbar .navbar-nav > li > a.btn-primary.focus, fieldset[disabled] .navbar .navbar-nav > li > a.btn-primary:active, fieldset[disabled] .navbar .navbar-nav > li > a.btn-primary.active, .btn-primary.disabled, .btn-primary.disabled:hover, .btn-primary.disabled:focus, .btn-primary.disabled.focus, .btn-primary.disabled:active, .btn-primary.disabled.active, .btn-primary:disabled, .btn-primary:disabled:hover, .btn-primary:disabled:focus, .btn-primary:disabled.focus, .btn-primary:disabled:active, .btn-primary:disabled.active, .btn-primary[disabled], .btn-primary[disabled]:hover, .btn-primary[disabled]:focus, .btn-primary[disabled].focus, .btn-primary[disabled]:active, .btn-primary[disabled].active, fieldset[disabled] .btn-primary, fieldset[disabled] .btn-primary:hover, fieldset[disabled] .btn-primary:focus, fieldset[disabled] .btn-primary.focus, fieldset[disabled] .btn-primary:active, fieldset[disabled] .btn-primary.active {\n  background-color: transparent;\n  border-color: #7A9E9F;\n}\n.navbar .navbar-nav > li > a.btn-primary.btn-fill, .btn-primary.btn-fill {\n  color: #FFFFFF;\n  background-color: #7A9E9F;\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n.navbar .navbar-nav > li > a.btn-primary.btn-fill:hover, .navbar .navbar-nav > li > a.btn-primary.btn-fill:focus, .navbar .navbar-nav > li > a.btn-primary.btn-fill:active, .navbar .navbar-nav > li > a.btn-primary.btn-fill.active, .open > .navbar .navbar-nav > li > a.btn-primary.btn-fill.dropdown-toggle, .btn-primary.btn-fill:hover, .btn-primary.btn-fill:focus, .btn-primary.btn-fill:active, .btn-primary.btn-fill.active, .open > .btn-primary.btn-fill.dropdown-toggle {\n  background-color: #427C89;\n  color: #FFFFFF;\n  border-color: #427C89;\n}\n.navbar .navbar-nav > li > a.btn-primary.btn-fill .caret, .btn-primary.btn-fill .caret {\n  border-top-color: #FFFFFF;\n}\n.navbar .navbar-nav > li > a.btn-primary.btn-simple:hover, .navbar .navbar-nav > li > a.btn-primary.btn-simple:focus, .navbar .navbar-nav > li > a.btn-primary.btn-simple:active, .navbar .navbar-nav > li > a.btn-primary.btn-simple.active, .open > .navbar .navbar-nav > li > a.btn-primary.btn-simple.dropdown-toggle, .btn-primary.btn-simple:hover, .btn-primary.btn-simple:focus, .btn-primary.btn-simple:active, .btn-primary.btn-simple.active, .open > .btn-primary.btn-simple.dropdown-toggle {\n  background-color: transparent;\n  color: #427C89;\n}\n.navbar .navbar-nav > li > a.btn-primary.btn-simple .caret, .btn-primary.btn-simple .caret {\n  border-top-color: #FFFFFF;\n}\n.navbar .navbar-nav > li > a.btn-primary .caret, .btn-primary .caret {\n  border-top-color: #7A9E9F;\n}\n\n.navbar .navbar-nav > li > a.btn-success, .btn-success {\n  border-color: #7AC29A;\n  color: #7AC29A;\n}\n.navbar .navbar-nav > li > a.btn-success:hover, .navbar .navbar-nav > li > a.btn-success:focus, .navbar .navbar-nav > li > a.btn-success:active, .navbar .navbar-nav > li > a.btn-success.active, .open > .navbar .navbar-nav > li > a.btn-success.dropdown-toggle, .btn-success:hover, .btn-success:focus, .btn-success:active, .btn-success.active, .open > .btn-success.dropdown-toggle {\n  background-color: #7AC29A;\n  color: rgba(255, 255, 255, 0.7);\n  border-color: #7AC29A;\n}\n.navbar .navbar-nav > li > a.btn-success:hover .caret, .navbar .navbar-nav > li > a.btn-success:focus .caret, .navbar .navbar-nav > li > a.btn-success:active .caret, .navbar .navbar-nav > li > a.btn-success.active .caret, .open > .navbar .navbar-nav > li > a.btn-success.dropdown-toggle .caret, .btn-success:hover .caret, .btn-success:focus .caret, .btn-success:active .caret, .btn-success.active .caret, .open > .btn-success.dropdown-toggle .caret {\n  border-top-color: rgba(255, 255, 255, 0.7);\n}\n.navbar .navbar-nav > li > a.btn-success.disabled, .navbar .navbar-nav > li > a.btn-success.disabled:hover, .navbar .navbar-nav > li > a.btn-success.disabled:focus, .navbar .navbar-nav > li > a.btn-success.disabled.focus, .navbar .navbar-nav > li > a.btn-success.disabled:active, .navbar .navbar-nav > li > a.btn-success.disabled.active, .navbar .navbar-nav > li > a.btn-success:disabled, .navbar .navbar-nav > li > a.btn-success:disabled:hover, .navbar .navbar-nav > li > a.btn-success:disabled:focus, .navbar .navbar-nav > li > a.btn-success:disabled.focus, .navbar .navbar-nav > li > a.btn-success:disabled:active, .navbar .navbar-nav > li > a.btn-success:disabled.active, .navbar .navbar-nav > li > a.btn-success[disabled], .navbar .navbar-nav > li > a.btn-success[disabled]:hover, .navbar .navbar-nav > li > a.btn-success[disabled]:focus, .navbar .navbar-nav > li > a.btn-success[disabled].focus, .navbar .navbar-nav > li > a.btn-success[disabled]:active, .navbar .navbar-nav > li > a.btn-success[disabled].active, fieldset[disabled] .navbar .navbar-nav > li > a.btn-success, fieldset[disabled] .navbar .navbar-nav > li > a.btn-success:hover, fieldset[disabled] .navbar .navbar-nav > li > a.btn-success:focus, fieldset[disabled] .navbar .navbar-nav > li > a.btn-success.focus, fieldset[disabled] .navbar .navbar-nav > li > a.btn-success:active, fieldset[disabled] .navbar .navbar-nav > li > a.btn-success.active, .btn-success.disabled, .btn-success.disabled:hover, .btn-success.disabled:focus, .btn-success.disabled.focus, .btn-success.disabled:active, .btn-success.disabled.active, .btn-success:disabled, .btn-success:disabled:hover, .btn-success:disabled:focus, .btn-success:disabled.focus, .btn-success:disabled:active, .btn-success:disabled.active, .btn-success[disabled], .btn-success[disabled]:hover, .btn-success[disabled]:focus, .btn-success[disabled].focus, .btn-success[disabled]:active, .btn-success[disabled].active, fieldset[disabled] .btn-success, fieldset[disabled] .btn-success:hover, fieldset[disabled] .btn-success:focus, fieldset[disabled] .btn-success.focus, fieldset[disabled] .btn-success:active, fieldset[disabled] .btn-success.active {\n  background-color: transparent;\n  border-color: #7AC29A;\n}\n.navbar .navbar-nav > li > a.btn-success.btn-fill, .btn-success.btn-fill {\n  color: #FFFFFF;\n  background-color: #7AC29A;\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n.navbar .navbar-nav > li > a.btn-success.btn-fill:hover, .navbar .navbar-nav > li > a.btn-success.btn-fill:focus, .navbar .navbar-nav > li > a.btn-success.btn-fill:active, .navbar .navbar-nav > li > a.btn-success.btn-fill.active, .open > .navbar .navbar-nav > li > a.btn-success.btn-fill.dropdown-toggle, .btn-success.btn-fill:hover, .btn-success.btn-fill:focus, .btn-success.btn-fill:active, .btn-success.btn-fill.active, .open > .btn-success.btn-fill.dropdown-toggle {\n  background-color: #42A084;\n  color: #FFFFFF;\n  border-color: #42A084;\n}\n.navbar .navbar-nav > li > a.btn-success.btn-fill .caret, .btn-success.btn-fill .caret {\n  border-top-color: #FFFFFF;\n}\n.navbar .navbar-nav > li > a.btn-success.btn-simple:hover, .navbar .navbar-nav > li > a.btn-success.btn-simple:focus, .navbar .navbar-nav > li > a.btn-success.btn-simple:active, .navbar .navbar-nav > li > a.btn-success.btn-simple.active, .open > .navbar .navbar-nav > li > a.btn-success.btn-simple.dropdown-toggle, .btn-success.btn-simple:hover, .btn-success.btn-simple:focus, .btn-success.btn-simple:active, .btn-success.btn-simple.active, .open > .btn-success.btn-simple.dropdown-toggle {\n  background-color: transparent;\n  color: #42A084;\n}\n.navbar .navbar-nav > li > a.btn-success.btn-simple .caret, .btn-success.btn-simple .caret {\n  border-top-color: #FFFFFF;\n}\n.navbar .navbar-nav > li > a.btn-success .caret, .btn-success .caret {\n  border-top-color: #7AC29A;\n}\n\n.navbar .navbar-nav > li > a.btn-info, .btn-info {\n  border-color: #68B3C8;\n  color: #68B3C8;\n}\n.navbar .navbar-nav > li > a.btn-info:hover, .navbar .navbar-nav > li > a.btn-info:focus, .navbar .navbar-nav > li > a.btn-info:active, .navbar .navbar-nav > li > a.btn-info.active, .open > .navbar .navbar-nav > li > a.btn-info.dropdown-toggle, .btn-info:hover, .btn-info:focus, .btn-info:active, .btn-info.active, .open > .btn-info.dropdown-toggle {\n  background-color: #68B3C8;\n  color: rgba(255, 255, 255, 0.7);\n  border-color: #68B3C8;\n}\n.navbar .navbar-nav > li > a.btn-info:hover .caret, .navbar .navbar-nav > li > a.btn-info:focus .caret, .navbar .navbar-nav > li > a.btn-info:active .caret, .navbar .navbar-nav > li > a.btn-info.active .caret, .open > .navbar .navbar-nav > li > a.btn-info.dropdown-toggle .caret, .btn-info:hover .caret, .btn-info:focus .caret, .btn-info:active .caret, .btn-info.active .caret, .open > .btn-info.dropdown-toggle .caret {\n  border-top-color: rgba(255, 255, 255, 0.7);\n}\n.navbar .navbar-nav > li > a.btn-info.disabled, .navbar .navbar-nav > li > a.btn-info.disabled:hover, .navbar .navbar-nav > li > a.btn-info.disabled:focus, .navbar .navbar-nav > li > a.btn-info.disabled.focus, .navbar .navbar-nav > li > a.btn-info.disabled:active, .navbar .navbar-nav > li > a.btn-info.disabled.active, .navbar .navbar-nav > li > a.btn-info:disabled, .navbar .navbar-nav > li > a.btn-info:disabled:hover, .navbar .navbar-nav > li > a.btn-info:disabled:focus, .navbar .navbar-nav > li > a.btn-info:disabled.focus, .navbar .navbar-nav > li > a.btn-info:disabled:active, .navbar .navbar-nav > li > a.btn-info:disabled.active, .navbar .navbar-nav > li > a.btn-info[disabled], .navbar .navbar-nav > li > a.btn-info[disabled]:hover, .navbar .navbar-nav > li > a.btn-info[disabled]:focus, .navbar .navbar-nav > li > a.btn-info[disabled].focus, .navbar .navbar-nav > li > a.btn-info[disabled]:active, .navbar .navbar-nav > li > a.btn-info[disabled].active, fieldset[disabled] .navbar .navbar-nav > li > a.btn-info, fieldset[disabled] .navbar .navbar-nav > li > a.btn-info:hover, fieldset[disabled] .navbar .navbar-nav > li > a.btn-info:focus, fieldset[disabled] .navbar .navbar-nav > li > a.btn-info.focus, fieldset[disabled] .navbar .navbar-nav > li > a.btn-info:active, fieldset[disabled] .navbar .navbar-nav > li > a.btn-info.active, .btn-info.disabled, .btn-info.disabled:hover, .btn-info.disabled:focus, .btn-info.disabled.focus, .btn-info.disabled:active, .btn-info.disabled.active, .btn-info:disabled, .btn-info:disabled:hover, .btn-info:disabled:focus, .btn-info:disabled.focus, .btn-info:disabled:active, .btn-info:disabled.active, .btn-info[disabled], .btn-info[disabled]:hover, .btn-info[disabled]:focus, .btn-info[disabled].focus, .btn-info[disabled]:active, .btn-info[disabled].active, fieldset[disabled] .btn-info, fieldset[disabled] .btn-info:hover, fieldset[disabled] .btn-info:focus, fieldset[disabled] .btn-info.focus, fieldset[disabled] .btn-info:active, fieldset[disabled] .btn-info.active {\n  background-color: transparent;\n  border-color: #68B3C8;\n}\n.navbar .navbar-nav > li > a.btn-info.btn-fill, .btn-info.btn-fill {\n  color: #FFFFFF;\n  background-color: #68B3C8;\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n.navbar .navbar-nav > li > a.btn-info.btn-fill:hover, .navbar .navbar-nav > li > a.btn-info.btn-fill:focus, .navbar .navbar-nav > li > a.btn-info.btn-fill:active, .navbar .navbar-nav > li > a.btn-info.btn-fill.active, .open > .navbar .navbar-nav > li > a.btn-info.btn-fill.dropdown-toggle, .btn-info.btn-fill:hover, .btn-info.btn-fill:focus, .btn-info.btn-fill:active, .btn-info.btn-fill.active, .open > .btn-info.btn-fill.dropdown-toggle {\n  background-color: #3091B2;\n  color: #FFFFFF;\n  border-color: #3091B2;\n}\n.navbar .navbar-nav > li > a.btn-info.btn-fill .caret, .btn-info.btn-fill .caret {\n  border-top-color: #FFFFFF;\n}\n.navbar .navbar-nav > li > a.btn-info.btn-simple:hover, .navbar .navbar-nav > li > a.btn-info.btn-simple:focus, .navbar .navbar-nav > li > a.btn-info.btn-simple:active, .navbar .navbar-nav > li > a.btn-info.btn-simple.active, .open > .navbar .navbar-nav > li > a.btn-info.btn-simple.dropdown-toggle, .btn-info.btn-simple:hover, .btn-info.btn-simple:focus, .btn-info.btn-simple:active, .btn-info.btn-simple.active, .open > .btn-info.btn-simple.dropdown-toggle {\n  background-color: transparent;\n  color: #3091B2;\n}\n.navbar .navbar-nav > li > a.btn-info.btn-simple .caret, .btn-info.btn-simple .caret {\n  border-top-color: #FFFFFF;\n}\n.navbar .navbar-nav > li > a.btn-info .caret, .btn-info .caret {\n  border-top-color: #68B3C8;\n}\n\n.navbar .navbar-nav > li > a.btn-warning, .btn-warning {\n  border-color: #F3BB45;\n  color: #F3BB45;\n}\n.navbar .navbar-nav > li > a.btn-warning:hover, .navbar .navbar-nav > li > a.btn-warning:focus, .navbar .navbar-nav > li > a.btn-warning:active, .navbar .navbar-nav > li > a.btn-warning.active, .open > .navbar .navbar-nav > li > a.btn-warning.dropdown-toggle, .btn-warning:hover, .btn-warning:focus, .btn-warning:active, .btn-warning.active, .open > .btn-warning.dropdown-toggle {\n  background-color: #F3BB45;\n  color: rgba(255, 255, 255, 0.7);\n  border-color: #F3BB45;\n}\n.navbar .navbar-nav > li > a.btn-warning:hover .caret, .navbar .navbar-nav > li > a.btn-warning:focus .caret, .navbar .navbar-nav > li > a.btn-warning:active .caret, .navbar .navbar-nav > li > a.btn-warning.active .caret, .open > .navbar .navbar-nav > li > a.btn-warning.dropdown-toggle .caret, .btn-warning:hover .caret, .btn-warning:focus .caret, .btn-warning:active .caret, .btn-warning.active .caret, .open > .btn-warning.dropdown-toggle .caret {\n  border-top-color: rgba(255, 255, 255, 0.7);\n}\n.navbar .navbar-nav > li > a.btn-warning.disabled, .navbar .navbar-nav > li > a.btn-warning.disabled:hover, .navbar .navbar-nav > li > a.btn-warning.disabled:focus, .navbar .navbar-nav > li > a.btn-warning.disabled.focus, .navbar .navbar-nav > li > a.btn-warning.disabled:active, .navbar .navbar-nav > li > a.btn-warning.disabled.active, .navbar .navbar-nav > li > a.btn-warning:disabled, .navbar .navbar-nav > li > a.btn-warning:disabled:hover, .navbar .navbar-nav > li > a.btn-warning:disabled:focus, .navbar .navbar-nav > li > a.btn-warning:disabled.focus, .navbar .navbar-nav > li > a.btn-warning:disabled:active, .navbar .navbar-nav > li > a.btn-warning:disabled.active, .navbar .navbar-nav > li > a.btn-warning[disabled], .navbar .navbar-nav > li > a.btn-warning[disabled]:hover, .navbar .navbar-nav > li > a.btn-warning[disabled]:focus, .navbar .navbar-nav > li > a.btn-warning[disabled].focus, .navbar .navbar-nav > li > a.btn-warning[disabled]:active, .navbar .navbar-nav > li > a.btn-warning[disabled].active, fieldset[disabled] .navbar .navbar-nav > li > a.btn-warning, fieldset[disabled] .navbar .navbar-nav > li > a.btn-warning:hover, fieldset[disabled] .navbar .navbar-nav > li > a.btn-warning:focus, fieldset[disabled] .navbar .navbar-nav > li > a.btn-warning.focus, fieldset[disabled] .navbar .navbar-nav > li > a.btn-warning:active, fieldset[disabled] .navbar .navbar-nav > li > a.btn-warning.active, .btn-warning.disabled, .btn-warning.disabled:hover, .btn-warning.disabled:focus, .btn-warning.disabled.focus, .btn-warning.disabled:active, .btn-warning.disabled.active, .btn-warning:disabled, .btn-warning:disabled:hover, .btn-warning:disabled:focus, .btn-warning:disabled.focus, .btn-warning:disabled:active, .btn-warning:disabled.active, .btn-warning[disabled], .btn-warning[disabled]:hover, .btn-warning[disabled]:focus, .btn-warning[disabled].focus, .btn-warning[disabled]:active, .btn-warning[disabled].active, fieldset[disabled] .btn-warning, fieldset[disabled] .btn-warning:hover, fieldset[disabled] .btn-warning:focus, fieldset[disabled] .btn-warning.focus, fieldset[disabled] .btn-warning:active, fieldset[disabled] .btn-warning.active {\n  background-color: transparent;\n  border-color: #F3BB45;\n}\n.navbar .navbar-nav > li > a.btn-warning.btn-fill, .btn-warning.btn-fill {\n  color: #FFFFFF;\n  background-color: #F3BB45;\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n.navbar .navbar-nav > li > a.btn-warning.btn-fill:hover, .navbar .navbar-nav > li > a.btn-warning.btn-fill:focus, .navbar .navbar-nav > li > a.btn-warning.btn-fill:active, .navbar .navbar-nav > li > a.btn-warning.btn-fill.active, .open > .navbar .navbar-nav > li > a.btn-warning.btn-fill.dropdown-toggle, .btn-warning.btn-fill:hover, .btn-warning.btn-fill:focus, .btn-warning.btn-fill:active, .btn-warning.btn-fill.active, .open > .btn-warning.btn-fill.dropdown-toggle {\n  background-color: #BB992F;\n  color: #FFFFFF;\n  border-color: #BB992F;\n}\n.navbar .navbar-nav > li > a.btn-warning.btn-fill .caret, .btn-warning.btn-fill .caret {\n  border-top-color: #FFFFFF;\n}\n.navbar .navbar-nav > li > a.btn-warning.btn-simple:hover, .navbar .navbar-nav > li > a.btn-warning.btn-simple:focus, .navbar .navbar-nav > li > a.btn-warning.btn-simple:active, .navbar .navbar-nav > li > a.btn-warning.btn-simple.active, .open > .navbar .navbar-nav > li > a.btn-warning.btn-simple.dropdown-toggle, .btn-warning.btn-simple:hover, .btn-warning.btn-simple:focus, .btn-warning.btn-simple:active, .btn-warning.btn-simple.active, .open > .btn-warning.btn-simple.dropdown-toggle {\n  background-color: transparent;\n  color: #BB992F;\n}\n.navbar .navbar-nav > li > a.btn-warning.btn-simple .caret, .btn-warning.btn-simple .caret {\n  border-top-color: #FFFFFF;\n}\n.navbar .navbar-nav > li > a.btn-warning .caret, .btn-warning .caret {\n  border-top-color: #F3BB45;\n}\n\n.navbar .navbar-nav > li > a.btn-danger, .btn-danger {\n  border-color: #EB5E28;\n  color: #EB5E28;\n}\n.navbar .navbar-nav > li > a.btn-danger:hover, .navbar .navbar-nav > li > a.btn-danger:focus, .navbar .navbar-nav > li > a.btn-danger:active, .navbar .navbar-nav > li > a.btn-danger.active, .open > .navbar .navbar-nav > li > a.btn-danger.dropdown-toggle, .btn-danger:hover, .btn-danger:focus, .btn-danger:active, .btn-danger.active, .open > .btn-danger.dropdown-toggle {\n  background-color: #EB5E28;\n  color: rgba(255, 255, 255, 0.7);\n  border-color: #EB5E28;\n}\n.navbar .navbar-nav > li > a.btn-danger:hover .caret, .navbar .navbar-nav > li > a.btn-danger:focus .caret, .navbar .navbar-nav > li > a.btn-danger:active .caret, .navbar .navbar-nav > li > a.btn-danger.active .caret, .open > .navbar .navbar-nav > li > a.btn-danger.dropdown-toggle .caret, .btn-danger:hover .caret, .btn-danger:focus .caret, .btn-danger:active .caret, .btn-danger.active .caret, .open > .btn-danger.dropdown-toggle .caret {\n  border-top-color: rgba(255, 255, 255, 0.7);\n}\n.navbar .navbar-nav > li > a.btn-danger.disabled, .navbar .navbar-nav > li > a.btn-danger.disabled:hover, .navbar .navbar-nav > li > a.btn-danger.disabled:focus, .navbar .navbar-nav > li > a.btn-danger.disabled.focus, .navbar .navbar-nav > li > a.btn-danger.disabled:active, .navbar .navbar-nav > li > a.btn-danger.disabled.active, .navbar .navbar-nav > li > a.btn-danger:disabled, .navbar .navbar-nav > li > a.btn-danger:disabled:hover, .navbar .navbar-nav > li > a.btn-danger:disabled:focus, .navbar .navbar-nav > li > a.btn-danger:disabled.focus, .navbar .navbar-nav > li > a.btn-danger:disabled:active, .navbar .navbar-nav > li > a.btn-danger:disabled.active, .navbar .navbar-nav > li > a.btn-danger[disabled], .navbar .navbar-nav > li > a.btn-danger[disabled]:hover, .navbar .navbar-nav > li > a.btn-danger[disabled]:focus, .navbar .navbar-nav > li > a.btn-danger[disabled].focus, .navbar .navbar-nav > li > a.btn-danger[disabled]:active, .navbar .navbar-nav > li > a.btn-danger[disabled].active, fieldset[disabled] .navbar .navbar-nav > li > a.btn-danger, fieldset[disabled] .navbar .navbar-nav > li > a.btn-danger:hover, fieldset[disabled] .navbar .navbar-nav > li > a.btn-danger:focus, fieldset[disabled] .navbar .navbar-nav > li > a.btn-danger.focus, fieldset[disabled] .navbar .navbar-nav > li > a.btn-danger:active, fieldset[disabled] .navbar .navbar-nav > li > a.btn-danger.active, .btn-danger.disabled, .btn-danger.disabled:hover, .btn-danger.disabled:focus, .btn-danger.disabled.focus, .btn-danger.disabled:active, .btn-danger.disabled.active, .btn-danger:disabled, .btn-danger:disabled:hover, .btn-danger:disabled:focus, .btn-danger:disabled.focus, .btn-danger:disabled:active, .btn-danger:disabled.active, .btn-danger[disabled], .btn-danger[disabled]:hover, .btn-danger[disabled]:focus, .btn-danger[disabled].focus, .btn-danger[disabled]:active, .btn-danger[disabled].active, fieldset[disabled] .btn-danger, fieldset[disabled] .btn-danger:hover, fieldset[disabled] .btn-danger:focus, fieldset[disabled] .btn-danger.focus, fieldset[disabled] .btn-danger:active, fieldset[disabled] .btn-danger.active {\n  background-color: transparent;\n  border-color: #EB5E28;\n}\n.navbar .navbar-nav > li > a.btn-danger.btn-fill, .btn-danger.btn-fill {\n  color: #FFFFFF;\n  background-color: #EB5E28;\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n.navbar .navbar-nav > li > a.btn-danger.btn-fill:hover, .navbar .navbar-nav > li > a.btn-danger.btn-fill:focus, .navbar .navbar-nav > li > a.btn-danger.btn-fill:active, .navbar .navbar-nav > li > a.btn-danger.btn-fill.active, .open > .navbar .navbar-nav > li > a.btn-danger.btn-fill.dropdown-toggle, .btn-danger.btn-fill:hover, .btn-danger.btn-fill:focus, .btn-danger.btn-fill:active, .btn-danger.btn-fill.active, .open > .btn-danger.btn-fill.dropdown-toggle {\n  background-color: #B33C12;\n  color: #FFFFFF;\n  border-color: #B33C12;\n}\n.navbar .navbar-nav > li > a.btn-danger.btn-fill .caret, .btn-danger.btn-fill .caret {\n  border-top-color: #FFFFFF;\n}\n.navbar .navbar-nav > li > a.btn-danger.btn-simple:hover, .navbar .navbar-nav > li > a.btn-danger.btn-simple:focus, .navbar .navbar-nav > li > a.btn-danger.btn-simple:active, .navbar .navbar-nav > li > a.btn-danger.btn-simple.active, .open > .navbar .navbar-nav > li > a.btn-danger.btn-simple.dropdown-toggle, .btn-danger.btn-simple:hover, .btn-danger.btn-simple:focus, .btn-danger.btn-simple:active, .btn-danger.btn-simple.active, .open > .btn-danger.btn-simple.dropdown-toggle {\n  background-color: transparent;\n  color: #B33C12;\n}\n.navbar .navbar-nav > li > a.btn-danger.btn-simple .caret, .btn-danger.btn-simple .caret {\n  border-top-color: #FFFFFF;\n}\n.navbar .navbar-nav > li > a.btn-danger .caret, .btn-danger .caret {\n  border-top-color: #EB5E28;\n}\n\n.btn-neutral {\n  border-color: #FFFFFF;\n  color: #FFFFFF;\n}\n.btn-neutral:hover, .btn-neutral:focus, .btn-neutral:active, .btn-neutral.active, .open > .btn-neutral.dropdown-toggle {\n  background-color: #FFFFFF;\n  color: rgba(255, 255, 255, 0.7);\n  border-color: #FFFFFF;\n}\n.btn-neutral:hover .caret, .btn-neutral:focus .caret, .btn-neutral:active .caret, .btn-neutral.active .caret, .open > .btn-neutral.dropdown-toggle .caret {\n  border-top-color: rgba(255, 255, 255, 0.7);\n}\n.btn-neutral.disabled, .btn-neutral.disabled:hover, .btn-neutral.disabled:focus, .btn-neutral.disabled.focus, .btn-neutral.disabled:active, .btn-neutral.disabled.active, .btn-neutral:disabled, .btn-neutral:disabled:hover, .btn-neutral:disabled:focus, .btn-neutral:disabled.focus, .btn-neutral:disabled:active, .btn-neutral:disabled.active, .btn-neutral[disabled], .btn-neutral[disabled]:hover, .btn-neutral[disabled]:focus, .btn-neutral[disabled].focus, .btn-neutral[disabled]:active, .btn-neutral[disabled].active, fieldset[disabled] .btn-neutral, fieldset[disabled] .btn-neutral:hover, fieldset[disabled] .btn-neutral:focus, fieldset[disabled] .btn-neutral.focus, fieldset[disabled] .btn-neutral:active, fieldset[disabled] .btn-neutral.active {\n  background-color: transparent;\n  border-color: #FFFFFF;\n}\n.btn-neutral.btn-fill {\n  color: #FFFFFF;\n  background-color: #FFFFFF;\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n.btn-neutral.btn-fill:hover, .btn-neutral.btn-fill:focus, .btn-neutral.btn-fill:active, .btn-neutral.btn-fill.active, .open > .btn-neutral.btn-fill.dropdown-toggle {\n  background-color: #FFFFFF;\n  color: #FFFFFF;\n  border-color: #FFFFFF;\n}\n.btn-neutral.btn-fill .caret {\n  border-top-color: #FFFFFF;\n}\n.btn-neutral.btn-simple:hover, .btn-neutral.btn-simple:focus, .btn-neutral.btn-simple:active, .btn-neutral.btn-simple.active, .open > .btn-neutral.btn-simple.dropdown-toggle {\n  background-color: transparent;\n  color: #FFFFFF;\n}\n.btn-neutral.btn-simple .caret {\n  border-top-color: #FFFFFF;\n}\n.btn-neutral .caret {\n  border-top-color: #FFFFFF;\n}\n.btn-neutral:hover, .btn-neutral:focus {\n  color: #66615B;\n}\n.btn-neutral:active, .btn-neutral.active, .open > .btn-neutral.dropdown-toggle {\n  background-color: #FFFFFF;\n  color: #66615B;\n}\n.btn-neutral.btn-fill {\n  color: #66615B;\n}\n.btn-neutral.btn-fill:hover, .btn-neutral.btn-fill:focus {\n  color: #403D39;\n}\n.btn-neutral.btn-simple:active, .btn-neutral.btn-simple.active {\n  background-color: transparent;\n}\n\n.btn:disabled, .btn[disabled], .btn.disabled {\n  opacity: 0.5;\n  filter: alpha(opacity=50);\n}\n\n.btn-simple {\n  border: 0;\n  padding: 7px 18px;\n}\n.btn-simple.btn-icon {\n  padding: 7px;\n}\n\n.btn-lg {\n  font-size: 18px;\n  border-radius: 50px;\n  padding: 11px 30px;\n  font-weight: 400;\n}\n.btn-lg.btn-simple {\n  padding: 13px 30px;\n}\n\n.btn-sm {\n  font-size: 12px;\n  border-radius: 26px;\n  padding: 4px 10px;\n}\n.btn-sm.btn-simple {\n  padding: 6px 10px;\n}\n\n.btn-xs {\n  font-size: 12px;\n  border-radius: 26px;\n  padding: 2px 5px;\n}\n.btn-xs.btn-simple {\n  padding: 4px 5px;\n}\n\n.btn-wd {\n  min-width: 140px;\n}\n\n.btn-group.select {\n  width: 100%;\n}\n\n.btn-group.select .btn {\n  text-align: left;\n}\n\n.btn-group.select .caret {\n  position: absolute;\n  top: 50%;\n  margin-top: -1px;\n  right: 8px;\n}\n\n.form-control::-moz-placeholder {\n  color: #DDDDDD;\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n\n.form-control:-moz-placeholder {\n  color: #DDDDDD;\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n\n.form-control::-webkit-input-placeholder {\n  color: #DDDDDD;\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n\n.form-control:-ms-input-placeholder {\n  color: #DDDDDD;\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n\n.form-control {\n  background-color: #fffcf5;\n  border: medium none;\n  border-radius: 4px;\n  color: #66615b;\n  font-size: 14px;\n  transition: background-color 0.3s ease 0s;\n  padding: 7px 18px;\n  height: 40px;\n  box-shadow: none;\n}\n.form-control:focus {\n  background-color: #FFFFFF;\n  box-shadow: none;\n  outline: 0 !important;\n}\n.has-success .form-control, .has-error .form-control, .has-success .form-control:focus, .has-error .form-control:focus {\n  box-shadow: none;\n}\n.has-success .form-control {\n  background-color: #ABF3CB;\n  color: #7AC29A;\n}\n.has-success .form-control.border-input {\n  border: 1px solid #7AC29A;\n}\n.has-success .form-control:focus {\n  background-color: #FFFFFF;\n}\n.has-error .form-control {\n  background-color: #FFC0A4;\n  color: #EB5E28;\n}\n.has-error .form-control.border-input {\n  border: 1px solid #EB5E28;\n}\n.has-error .form-control:focus {\n  background-color: #FFFFFF;\n}\n.form-control + .form-control-feedback {\n  border-radius: 6px;\n  font-size: 14px;\n  margin-top: -7px;\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  vertical-align: middle;\n}\n.form-control.border-input {\n  border: 1px solid #CCC5B9;\n}\n.open .form-control {\n  border-bottom-color: transparent;\n}\n\n.input-lg {\n  height: 55px;\n  padding: 11px 30px;\n}\n\n.has-error .form-control-feedback, .has-error .control-label {\n  color: #EB5E28;\n}\n\n.has-success .form-control-feedback, .has-success .control-label {\n  color: #7AC29A;\n}\n\n.input-group-addon {\n  background-color: #fffcf5;\n  border: medium none;\n  border-radius: 4px;\n}\n.has-success .input-group-addon, .has-error .input-group-addon {\n  background-color: #FFFFFF;\n}\n.has-error .form-control:focus + .input-group-addon {\n  color: #EB5E28;\n}\n.has-success .form-control:focus + .input-group-addon {\n  color: #7AC29A;\n}\n.form-control:focus + .input-group-addon, .form-control:focus ~ .input-group-addon {\n  background-color: #FFFFFF;\n}\n\n.border-input .input-group-addon {\n  border: solid 1px #CCC5B9;\n}\n\n.input-group {\n  margin-bottom: 15px;\n}\n\n.input-group[disabled] .input-group-addon {\n  background-color: #E3E3E3;\n}\n\n.input-group .form-control:first-child,\n.input-group-addon:first-child,\n.input-group-btn:first-child > .dropdown-toggle,\n.input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle) {\n  border-right: 0 none;\n}\n\n.input-group .form-control:last-child,\n.input-group-addon:last-child,\n.input-group-btn:last-child > .dropdown-toggle,\n.input-group-btn:first-child > .btn:not(:first-child) {\n  border-left: 0 none;\n}\n\n.form-control[disabled], .form-control[readonly], fieldset[disabled] .form-control {\n  background-color: #E3E3E3;\n  cursor: not-allowed;\n  color: #9A9A9A;\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n\n.form-control[disabled]::-moz-placeholder {\n  color: #9A9A9A;\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n\n.form-control[disabled]:-moz-placeholder {\n  color: #DDDDDD;\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n\n.form-control[disabled]::-webkit-input-placeholder {\n  color: #DDDDDD;\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n\n.form-control[disabled]:-ms-input-placeholder {\n  color: #DDDDDD;\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n\n.input-group-btn .btn {\n  border-width: 1px;\n  padding: 9px 18px;\n}\n\n.input-group-btn .btn-default:not(.btn-fill) {\n  border-color: #DDDDDD;\n}\n\n.input-group-btn:last-child > .btn {\n  margin-left: 0;\n}\n\ntextarea.form-control {\n  max-width: 100%;\n  padding: 10px 18px;\n  resize: none;\n}\n\n.alert {\n  border: 0;\n  border-radius: 0;\n  color: #FFFFFF;\n  padding: 10px 15px;\n  font-size: 14px;\n}\n.container .alert {\n  border-radius: 4px;\n}\n.navbar .alert {\n  border-radius: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 85px;\n  width: 100%;\n  z-index: 3;\n}\n.navbar:not(.navbar-transparent) .alert {\n  top: 70px;\n}\n.alert span[data-notify=\"icon\"] {\n  font-size: 30px;\n  display: block;\n  left: 15px;\n  position: absolute;\n  top: 50%;\n  margin-top: -20px;\n}\n.alert .close ~ span {\n  display: block;\n  max-width: 89%;\n}\n.alert[data-notify=\"container\"] {\n  padding: 10px 10px 10px 20px;\n  border-radius: 4px;\n}\n.alert.alert-with-icon {\n  padding-left: 65px;\n}\n\n.alert-info {\n  background-color: #7CE4FE;\n  color: #3091B2;\n}\n\n.alert-success {\n  background-color: #8EF3C5;\n  color: #42A084;\n}\n\n.alert-warning {\n  background-color: #FFE28C;\n  color: #BB992F;\n}\n\n.alert-danger {\n  background-color: #FF8F5E;\n  color: #B33C12;\n}\n\n.table thead tr > th,\n.table thead tr > td,\n.table tbody tr > th,\n.table tbody tr > td,\n.table tfoot tr > th,\n.table tfoot tr > td {\n  border-top: 1px solid #CCC5B9;\n}\n.table > thead > tr > th {\n  border-bottom-width: 0;\n  font-size: 1.25em;\n  font-weight: 300;\n}\n.table .radio,\n.table .checkbox {\n  margin-top: 0;\n  margin-bottom: 22px;\n  padding: 0;\n  width: 15px;\n}\n.table > thead > tr > th,\n.table > tbody > tr > th,\n.table > tfoot > tr > th,\n.table > thead > tr > td,\n.table > tbody > tr > td,\n.table > tfoot > tr > td {\n  padding: 12px;\n  vertical-align: middle;\n}\n.table .th-description {\n  max-width: 150px;\n}\n.table .td-price {\n  font-size: 26px;\n  font-weight: 300;\n  margin-top: 5px;\n  text-align: right;\n}\n.table .td-total {\n  font-weight: 600;\n  font-size: 1.25em;\n  padding-top: 20px;\n  text-align: right;\n}\n.table .td-actions .btn.btn-sm, .table .td-actions .btn.btn-xs {\n  padding-left: 3px;\n  padding-right: 3px;\n}\n.table > tbody > tr {\n  position: relative;\n}\n\n.table-striped tbody > tr:nth-of-type(2n+1) {\n  background-color: #fff;\n}\n.table-striped tbody > tr:nth-of-type(2n) {\n  background-color: #FFFCF5;\n}\n.table-striped > thead > tr > th,\n.table-striped > tbody > tr > th,\n.table-striped > tfoot > tr > th,\n.table-striped > thead > tr > td,\n.table-striped > tbody > tr > td,\n.table-striped > tfoot > tr > td {\n  padding: 15px 8px;\n}\n\n/*      Checkbox and radio         */\n.checkbox,\n.radio {\n  margin-bottom: 12px;\n  padding-left: 30px;\n  position: relative;\n  transition: color,opacity 0.25s linear;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 1.5;\n  color: #66615b;\n  cursor: pointer;\n}\n.checkbox .icons,\n.radio .icons {\n  color: #66615b;\n  display: block;\n  height: 20px;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 20px;\n  text-align: center;\n  line-height: 21px;\n  font-size: 20px;\n  cursor: pointer;\n  transition: color,opacity 0.15s linear;\n  opacity: .50;\n}\n.checkbox.checked .icons,\n.radio.checked .icons {\n  opacity: 1;\n}\n.checkbox input,\n.radio input {\n  outline: none !important;\n  display: none;\n}\n\n.checkbox label,\n.radio label {\n  padding-left: 10px;\n}\n\n.checkbox .icons .first-icon,\n.radio .icons .first-icon,\n.checkbox .icons .second-icon,\n.radio .icons .second-icon {\n  display: inline-table;\n  position: absolute;\n  left: 0;\n  top: 0;\n  background-color: transparent;\n  margin: 0;\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n\n.checkbox .icons .second-icon,\n.radio .icons .second-icon {\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n\n.checkbox:hover,\n.radio:hover {\n  transition: color 0.2s linear;\n}\n\n.checkbox:hover .first-icon,\n.radio:hover .first-icon {\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n\n.checkbox:hover .second-icon,\n.radio:hover .second-icon {\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n\n.checkbox.checked .first-icon,\n.radio.checked .first-icon {\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n\n.checkbox.checked .second-icon,\n.radio.checked .second-icon {\n  opacity: 1;\n  filter: alpha(opacity=100);\n  transition: color 0.2s linear;\n}\n\n.checkbox.disabled,\n.radio.disabled {\n  cursor: default;\n  color: #DDDDDD;\n}\n\n.checkbox.disabled .icons,\n.radio.disabled .icons {\n  color: #DDDDDD;\n}\n\n.checkbox.disabled .first-icon,\n.radio.disabled .first-icon {\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n\n.checkbox.disabled .second-icon,\n.radio.disabled .second-icon {\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n\n.checkbox.disabled.checked .icons,\n.radio.disabled.checked .icons {\n  color: #DDDDDD;\n}\n\n.checkbox.disabled.checked .first-icon,\n.radio.disabled.checked .first-icon {\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n\n.checkbox.disabled.checked .second-icon,\n.radio.disabled.checked .second-icon {\n  opacity: 1;\n  color: #DDDDDD;\n  filter: alpha(opacity=100);\n}\n\n.nav > li > a:hover,\n.nav > li > a:focus {\n  background-color: transparent;\n}\n\n.navbar {\n  border: 0;\n  border-radius: 0;\n  font-size: 16px;\n  z-index: 3;\n}\n.navbar .navbar-brand {\n  font-weight: 600;\n  margin: 5px 0px;\n  padding: 20px 15px;\n  font-size: 20px;\n}\n.navbar .navbar-nav > li > a {\n  line-height: 1.42857;\n  margin: 15px 0px;\n  padding: 10px 15px;\n}\n.navbar .navbar-nav > li > a i,\n.navbar .navbar-nav > li > a p {\n  display: inline-block;\n  margin: 0;\n}\n.navbar .navbar-nav > li > a i {\n  position: relative;\n  top: 1px;\n}\n.navbar .navbar-nav > li > a.btn {\n  margin: 15px 3px;\n  padding: 7px 18px;\n}\n.navbar .btn {\n  margin: 15px 3px;\n  font-size: 14px;\n}\n.navbar .btn-simple {\n  font-size: 16px;\n}\n\n.navbar-nav > li > .dropdown-menu {\n  border-radius: 6px;\n  margin-top: -5px;\n}\n\n.navbar-default {\n  background-color: #f4f3ef;\n  border-bottom: 1px solid #DDDDDD;\n}\n.navbar-default .brand {\n  color: #66615b !important;\n}\n.navbar-default .navbar-nav > li > a:not(.btn) {\n  color: #9A9A9A;\n}\n.navbar-default .navbar-nav > .active > a,\n.navbar-default .navbar-nav > .active > a:not(.btn):hover,\n.navbar-default .navbar-nav > .active > a:not(.btn):focus,\n.navbar-default .navbar-nav > li > a:not(.btn):hover,\n.navbar-default .navbar-nav > li > a:not(.btn):focus {\n  background-color: transparent;\n  border-radius: 3px;\n  color: #68B3C8;\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n.navbar-default .navbar-nav > .dropdown > a:hover .caret,\n.navbar-default .navbar-nav > .dropdown > a:focus .caret {\n  border-bottom-color: #68B3C8;\n  border-top-color: #68B3C8;\n}\n.navbar-default .navbar-nav > .open > a,\n.navbar-default .navbar-nav > .open > a:hover,\n.navbar-default .navbar-nav > .open > a:focus {\n  background-color: transparent;\n  color: #68B3C8;\n}\n.navbar-default .navbar-nav .navbar-toggle:hover, .navbar-default .navbar-nav .navbar-toggle:focus {\n  background-color: transparent;\n}\n.navbar-default:not(.navbar-transparent) .btn-default:hover {\n  color: #68B3C8;\n  border-color: #68B3C8;\n}\n.navbar-default:not(.navbar-transparent) .btn-neutral, .navbar-default:not(.navbar-transparent) .btn-neutral:hover, .navbar-default:not(.navbar-transparent) .btn-neutral:active {\n  color: #9A9A9A;\n}\n\n.navbar-form {\n  box-shadow: none;\n}\n.navbar-form .form-control {\n  border-radius: 0;\n  border: 0;\n  padding: 0;\n  background-color: transparent;\n  height: 22px;\n  font-size: 16px;\n  line-height: 1.4em;\n  color: #E3E3E3;\n}\n.navbar-transparent .navbar-form .form-control, [class*=\"navbar-ct\"] .navbar-form .form-control {\n  color: #FFFFFF;\n  border: 0;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.6);\n}\n\n.navbar-ct-primary {\n  background-color: #8ECFD5;\n}\n\n.navbar-ct-info {\n  background-color: #7CE4FE;\n}\n\n.navbar-ct-success {\n  background-color: #8EF3C5;\n}\n\n.navbar-ct-warning {\n  background-color: #FFE28C;\n}\n\n.navbar-ct-danger {\n  background-color: #FF8F5E;\n}\n\n.navbar-transparent {\n  padding-top: 15px;\n  background-color: transparent;\n  border-bottom: 1px solid transparent;\n}\n\n.navbar-toggle {\n  margin-top: 19px;\n  margin-bottom: 19px;\n  border: 0;\n}\n.navbar-toggle .icon-bar {\n  background-color: #FFFFFF;\n}\n.navbar-toggle .navbar-collapse,\n.navbar-toggle .navbar-form {\n  border-color: transparent;\n}\n.navbar-toggle.navbar-default .navbar-toggle:hover, .navbar-toggle.navbar-default .navbar-toggle:focus {\n  background-color: transparent;\n}\n\n.footer {\n  background-attachment: fixed;\n  position: relative;\n  line-height: 20px;\n}\n.footer nav ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  font-weight: normal;\n}\n.footer nav ul li {\n  display: inline-block;\n  padding: 10px 15px;\n  margin: 15px 3px;\n  line-height: 20px;\n  text-align: center;\n}\n.footer nav ul a:not(.btn) {\n  color: #66615b;\n  display: block;\n  margin-bottom: 3px;\n}\n.footer nav ul a:not(.btn):focus, .footer nav ul a:not(.btn):hover {\n  color: #403D39;\n}\n.footer .copyright {\n  color: #66615b;\n  padding: 10px 15px;\n  font-size: 14px;\n  white-space: nowrap;\n  margin: 15px 3px;\n  line-height: 20px;\n  text-align: center;\n}\n.footer .heart {\n  color: #EB5E28;\n}\n\n.dropdown-menu {\n  background-color: #FFFCF5;\n  border: 0 none;\n  border-radius: 6px;\n  display: block;\n  margin-top: 10px;\n  padding: 0px;\n  position: absolute;\n  visibility: hidden;\n  z-index: 9000;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  box-shadow: 0 2px rgba(17, 16, 15, 0.1), 0 2px 10px rgba(17, 16, 15, 0.1);\n}\n.open .dropdown-menu {\n  opacity: 1;\n  filter: alpha(opacity=100);\n  visibility: visible;\n}\n.dropdown-menu .divider {\n  background-color: #F1EAE0;\n  margin: 0px;\n}\n.dropdown-menu .dropdown-header {\n  color: #9A9A9A;\n  font-size: 12px;\n  padding: 10px 15px;\n}\n.select .dropdown-menu {\n  border-radius: 0 0 10px 10px;\n  box-shadow: none;\n  -webkit-transform-origin: 50% -40px;\n  transform-origin: 50% -40px;\n  -webkit-transform: scale(1);\n  transform: scale(1);\n  transition: all 150ms linear;\n  margin-top: -20px;\n}\n.select.open .dropdown-menu {\n  margin-top: -1px;\n}\n.dropdown-menu > li > a {\n  color: #66615b;\n  font-size: 14px;\n  padding: 10px 15px;\n  transition: none;\n}\n.dropdown-menu > li > a img {\n  margin-top: -3px;\n}\n.dropdown-menu > li > a:focus {\n  outline: 0 !important;\n}\n.btn-group.select .dropdown-menu {\n  min-width: 100%;\n}\n.dropdown-menu > li:first-child > a {\n  border-top-left-radius: 6px;\n  border-top-right-radius: 6px;\n}\n.dropdown-menu > li:last-child > a {\n  border-bottom-left-radius: 6px;\n  border-bottom-right-radius: 6px;\n}\n.select .dropdown-menu > li:first-child > a {\n  border-radius: 0;\n  border-bottom: 0 none;\n}\n.dropdown-menu > li > a:hover,\n.dropdown-menu > li > a:focus {\n  background-color: #66615B;\n  color: rgba(255, 255, 255, 0.7);\n  opacity: 1;\n  text-decoration: none;\n}\n.dropdown-menu.dropdown-primary > li > a:hover, .dropdown-menu.dropdown-primary > li > a:focus {\n  background-color: #7A9E9F;\n}\n.dropdown-menu.dropdown-info > li > a:hover, .dropdown-menu.dropdown-info > li > a:focus {\n  background-color: #68B3C8;\n}\n.dropdown-menu.dropdown-success > li > a:hover, .dropdown-menu.dropdown-success > li > a:focus {\n  background-color: #7AC29A;\n}\n.dropdown-menu.dropdown-warning > li > a:hover, .dropdown-menu.dropdown-warning > li > a:focus {\n  background-color: #F3BB45;\n}\n.dropdown-menu.dropdown-danger > li > a:hover, .dropdown-menu.dropdown-danger > li > a:focus {\n  background-color: #EB5E28;\n}\n\n.btn-group.select {\n  overflow: hidden;\n}\n\n.btn-group.select.open {\n  overflow: visible;\n}\n\n.card {\n  border-radius: 6px;\n  box-shadow: 0 2px 2px rgba(204, 197, 185, 0.5);\n  background-color: #FFFFFF;\n  color: #252422;\n  margin-bottom: 20px;\n  position: relative;\n  z-index: 1;\n}\n.card .image {\n  width: 100%;\n  overflow: hidden;\n  height: 260px;\n  border-radius: 6px 6px 0 0;\n  position: relative;\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n}\n.card .image img {\n  width: 100%;\n}\n.card .content {\n  padding: 15px 15px 10px 15px;\n}\n.card .header {\n  padding: 20px 20px 0;\n}\n.card .description {\n  font-size: 16px;\n  color: #66615b;\n}\n.card h6 {\n  font-size: 12px;\n  margin: 0;\n}\n.card .category,\n.card label {\n  font-size: 14px;\n  font-weight: 400;\n  color: #9A9A9A;\n  margin-bottom: 0px;\n}\n.card .category i,\n.card label i {\n  font-size: 16px;\n}\n.card label {\n  font-size: 15px;\n  margin-bottom: 5px;\n}\n.card .title {\n  margin: 0;\n  color: #252422;\n  font-weight: 300;\n}\n.card .avatar {\n  width: 50px;\n  height: 50px;\n  overflow: hidden;\n  border-radius: 50%;\n  margin-right: 5px;\n}\n.card .footer {\n  padding: 0;\n  line-height: 30px;\n}\n.card .footer .legend {\n  padding: 5px 0;\n}\n.card .footer hr {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n.card .stats {\n  color: #a9a9a9;\n  font-weight: 300;\n}\n.card .stats i {\n  margin-right: 2px;\n  min-width: 15px;\n  display: inline-block;\n}\n.card .footer div {\n  display: inline-block;\n}\n.card .author {\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.card .author i {\n  font-size: 14px;\n}\n.card.card-separator:after {\n  height: 100%;\n  right: -15px;\n  top: 0;\n  width: 1px;\n  background-color: #DDDDDD;\n  content: \"\";\n  position: absolute;\n}\n.card .ct-chart {\n  margin: 30px 0 30px;\n  height: 245px;\n}\n.card .table tbody td:first-child,\n.card .table thead th:first-child {\n  padding-left: 15px;\n}\n.card .table tbody td:last-child,\n.card .table thead th:last-child {\n  padding-right: 15px;\n}\n.card .alert {\n  border-radius: 4px;\n  position: relative;\n}\n.card .alert.alert-with-icon {\n  padding-left: 65px;\n}\n.card .icon-big {\n  font-size: 3em;\n  min-height: 64px;\n}\n.card .numbers {\n  font-size: 2em;\n  text-align: right;\n}\n.card .numbers p {\n  margin: 0;\n}\n.card ul.team-members li {\n  padding: 10px 0px;\n}\n.card ul.team-members li:not(:last-child) {\n  border-bottom: 1px solid #F1EAE0;\n}\n\n.card-user .image {\n  border-radius: 8px 8px 0 0;\n  height: 150px;\n  position: relative;\n  overflow: hidden;\n}\n.card-user .image img {\n  width: 100%;\n}\n.card-user .image-plain {\n  height: 0;\n  margin-top: 110px;\n}\n.card-user .author {\n  text-align: center;\n  text-transform: none;\n  margin-top: -65px;\n}\n.card-user .author .title {\n  color: #403D39;\n}\n.card-user .author .title small {\n  color: #ccc5b9;\n}\n.card-user .avatar {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  position: relative;\n  margin-bottom: 15px;\n}\n.card-user .avatar.border-white {\n  border: 5px solid #FFFFFF;\n}\n.card-user .avatar.border-gray {\n  border: 5px solid #ccc5b9;\n}\n.card-user .title {\n  font-weight: 600;\n  line-height: 24px;\n}\n.card-user .description {\n  margin-top: 10px;\n}\n.card-user .content {\n  min-height: 200px;\n}\n.card-user.card-plain .avatar {\n  height: 190px;\n  width: 190px;\n}\n\n.card-map .map {\n  height: 500px;\n  padding-top: 20px;\n}\n.card-map .map > div {\n  height: 100%;\n}\n\n.card-user .footer,\n.card-price .footer {\n  padding: 5px 15px 10px;\n}\n.card-user hr,\n.card-price hr {\n  margin: 5px 15px;\n}\n\n.card-plain {\n  background-color: transparent;\n  box-shadow: none;\n  border-radius: 0;\n}\n.card-plain .image {\n  border-radius: 4px;\n}\n\n.ct-label {\n  fill: rgba(0, 0, 0, 0.4);\n  color: rgba(0, 0, 0, 0.4);\n  font-size: 0.9em;\n  line-height: 1;\n}\n\n.ct-chart-line .ct-label,\n.ct-chart-bar .ct-label {\n  display: block;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.ct-label.ct-horizontal.ct-start {\n  -webkit-box-align: flex-end;\n  -ms-flex-align: flex-end;\n  align-items: flex-end;\n  -webkit-box-pack: flex-start;\n  -ms-flex-pack: flex-start;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: start;\n}\n\n.ct-label.ct-horizontal.ct-end {\n  -webkit-box-align: flex-start;\n  -ms-flex-align: flex-start;\n  align-items: flex-start;\n  -webkit-box-pack: flex-start;\n  -ms-flex-pack: flex-start;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: start;\n}\n\n.ct-label.ct-vertical.ct-start {\n  -webkit-box-align: flex-end;\n  -ms-flex-align: flex-end;\n  align-items: flex-end;\n  -webkit-box-pack: flex-end;\n  -ms-flex-pack: flex-end;\n  justify-content: flex-end;\n  text-align: right;\n  text-anchor: end;\n}\n\n.ct-label.ct-vertical.ct-end {\n  -webkit-box-align: flex-end;\n  -ms-flex-align: flex-end;\n  align-items: flex-end;\n  -webkit-box-pack: flex-start;\n  -ms-flex-pack: flex-start;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: start;\n}\n\n.ct-chart-bar .ct-label.ct-horizontal.ct-start {\n  -webkit-box-align: flex-end;\n  -ms-flex-align: flex-end;\n  align-items: flex-end;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  text-align: center;\n  text-anchor: start;\n}\n\n.ct-chart-bar .ct-label.ct-horizontal.ct-end {\n  -webkit-box-align: flex-start;\n  -ms-flex-align: flex-start;\n  align-items: flex-start;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  text-align: center;\n  text-anchor: start;\n}\n\n.ct-chart-bar.ct-horizontal-bars .ct-label.ct-horizontal.ct-start {\n  -webkit-box-align: flex-end;\n  -ms-flex-align: flex-end;\n  align-items: flex-end;\n  -webkit-box-pack: flex-start;\n  -ms-flex-pack: flex-start;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: start;\n}\n\n.ct-chart-bar.ct-horizontal-bars .ct-label.ct-horizontal.ct-end {\n  -webkit-box-align: flex-start;\n  -ms-flex-align: flex-start;\n  align-items: flex-start;\n  -webkit-box-pack: flex-start;\n  -ms-flex-pack: flex-start;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: start;\n}\n\n.ct-chart-bar.ct-horizontal-bars .ct-label.ct-vertical.ct-start {\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: flex-end;\n  -ms-flex-pack: flex-end;\n  justify-content: flex-end;\n  text-align: right;\n  text-anchor: end;\n}\n\n.ct-chart-bar.ct-horizontal-bars .ct-label.ct-vertical.ct-end {\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: flex-start;\n  -ms-flex-pack: flex-start;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: end;\n}\n\n.ct-grid {\n  stroke: rgba(0, 0, 0, 0.2);\n  stroke-width: 1px;\n  stroke-dasharray: 2px;\n}\n\n.ct-point {\n  stroke-width: 10px;\n  stroke-linecap: round;\n}\n\n.ct-line {\n  fill: none;\n  stroke-width: 4px;\n}\n\n.ct-area {\n  stroke: none;\n  fill-opacity: 0.7;\n}\n\n.ct-bar {\n  fill: none;\n  stroke-width: 10px;\n}\n\n.ct-slice-donut {\n  fill: none;\n  stroke-width: 60px;\n}\n\n.ct-series-a .ct-point, .ct-series-a .ct-line, .ct-series-a .ct-bar, .ct-series-a .ct-slice-donut {\n  stroke: #68B3C8;\n}\n.ct-series-a .ct-slice-pie, .ct-series-a .ct-area {\n  fill: #68B3C8;\n}\n\n.ct-series-b .ct-point, .ct-series-b .ct-line, .ct-series-b .ct-bar, .ct-series-b .ct-slice-donut {\n  stroke: #F3BB45;\n}\n.ct-series-b .ct-slice-pie, .ct-series-b .ct-area {\n  fill: #F3BB45;\n}\n\n.ct-series-c .ct-point, .ct-series-c .ct-line, .ct-series-c .ct-bar, .ct-series-c .ct-slice-donut {\n  stroke: #EB5E28;\n}\n.ct-series-c .ct-slice-pie, .ct-series-c .ct-area {\n  fill: #EB5E28;\n}\n\n.ct-series-d .ct-point, .ct-series-d .ct-line, .ct-series-d .ct-bar, .ct-series-d .ct-slice-donut {\n  stroke: #7AC29A;\n}\n.ct-series-d .ct-slice-pie, .ct-series-d .ct-area {\n  fill: #7AC29A;\n}\n\n.ct-series-e .ct-point, .ct-series-e .ct-line, .ct-series-e .ct-bar, .ct-series-e .ct-slice-donut {\n  stroke: #7A9E9F;\n}\n.ct-series-e .ct-slice-pie, .ct-series-e .ct-area {\n  fill: #7A9E9F;\n}\n\n.ct-series-f .ct-point, .ct-series-f .ct-line, .ct-series-f .ct-bar, .ct-series-f .ct-slice-donut {\n  stroke: rgba(104, 179, 200, 0.8);\n}\n.ct-series-f .ct-slice-pie, .ct-series-f .ct-area {\n  fill: rgba(104, 179, 200, 0.8);\n}\n\n.ct-series-g .ct-point, .ct-series-g .ct-line, .ct-series-g .ct-bar, .ct-series-g .ct-slice-donut {\n  stroke: rgba(122, 194, 154, 0.8);\n}\n.ct-series-g .ct-slice-pie, .ct-series-g .ct-area {\n  fill: rgba(122, 194, 154, 0.8);\n}\n\n.ct-series-h .ct-point, .ct-series-h .ct-line, .ct-series-h .ct-bar, .ct-series-h .ct-slice-donut {\n  stroke: rgba(243, 187, 69, 0.8);\n}\n.ct-series-h .ct-slice-pie, .ct-series-h .ct-area {\n  fill: rgba(243, 187, 69, 0.8);\n}\n\n.ct-series-i .ct-point, .ct-series-i .ct-line, .ct-series-i .ct-bar, .ct-series-i .ct-slice-donut {\n  stroke: rgba(235, 94, 40, 0.8);\n}\n.ct-series-i .ct-slice-pie, .ct-series-i .ct-area {\n  fill: rgba(235, 94, 40, 0.8);\n}\n\n.ct-series-j .ct-point, .ct-series-j .ct-line, .ct-series-j .ct-bar, .ct-series-j .ct-slice-donut {\n  stroke: rgba(122, 158, 159, 0.8);\n}\n.ct-series-j .ct-slice-pie, .ct-series-j .ct-area {\n  fill: rgba(122, 158, 159, 0.8);\n}\n\n.ct-series-k .ct-point, .ct-series-k .ct-line, .ct-series-k .ct-bar, .ct-series-k .ct-slice-donut {\n  stroke: rgba(104, 179, 200, 0.6);\n}\n.ct-series-k .ct-slice-pie, .ct-series-k .ct-area {\n  fill: rgba(104, 179, 200, 0.6);\n}\n\n.ct-series-l .ct-point, .ct-series-l .ct-line, .ct-series-l .ct-bar, .ct-series-l .ct-slice-donut {\n  stroke: rgba(122, 194, 154, 0.6);\n}\n.ct-series-l .ct-slice-pie, .ct-series-l .ct-area {\n  fill: rgba(122, 194, 154, 0.6);\n}\n\n.ct-series-m .ct-point, .ct-series-m .ct-line, .ct-series-m .ct-bar, .ct-series-m .ct-slice-donut {\n  stroke: rgba(243, 187, 69, 0.6);\n}\n.ct-series-m .ct-slice-pie, .ct-series-m .ct-area {\n  fill: rgba(243, 187, 69, 0.6);\n}\n\n.ct-series-n .ct-point, .ct-series-n .ct-line, .ct-series-n .ct-bar, .ct-series-n .ct-slice-donut {\n  stroke: rgba(235, 94, 40, 0.6);\n}\n.ct-series-n .ct-slice-pie, .ct-series-n .ct-area {\n  fill: rgba(235, 94, 40, 0.6);\n}\n\n.ct-series-o .ct-point, .ct-series-o .ct-line, .ct-series-o .ct-bar, .ct-series-o .ct-slice-donut {\n  stroke: rgba(122, 158, 159, 0.6);\n}\n.ct-series-o .ct-slice-pie, .ct-series-o .ct-area {\n  fill: rgba(122, 158, 159, 0.6);\n}\n\n.ct-square {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-square:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 100%;\n}\n.ct-square:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.ct-square > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.ct-minor-second {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-minor-second:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 93.75%;\n}\n.ct-minor-second:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.ct-minor-second > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.ct-major-second {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-major-second:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 88.88889%;\n}\n.ct-major-second:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.ct-major-second > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.ct-minor-third {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-minor-third:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 83.33333%;\n}\n.ct-minor-third:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.ct-minor-third > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.ct-major-third {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-major-third:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 80%;\n}\n.ct-major-third:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.ct-major-third > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.ct-perfect-fourth {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-perfect-fourth:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 75%;\n}\n.ct-perfect-fourth:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.ct-perfect-fourth > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.ct-perfect-fifth {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-perfect-fifth:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 66.66667%;\n}\n.ct-perfect-fifth:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.ct-perfect-fifth > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.ct-minor-sixth {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-minor-sixth:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 62.5%;\n}\n.ct-minor-sixth:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.ct-minor-sixth > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.ct-golden-section {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-golden-section:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 61.8047%;\n}\n.ct-golden-section:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.ct-golden-section > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.ct-major-sixth {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-major-sixth:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 60%;\n}\n.ct-major-sixth:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.ct-major-sixth > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.ct-minor-seventh {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-minor-seventh:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 56.25%;\n}\n.ct-minor-seventh:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.ct-minor-seventh > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.ct-major-seventh {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-major-seventh:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 53.33333%;\n}\n.ct-major-seventh:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.ct-major-seventh > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.ct-octave {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-octave:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 50%;\n}\n.ct-octave:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.ct-octave > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.ct-major-tenth {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-major-tenth:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 40%;\n}\n.ct-major-tenth:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.ct-major-tenth > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.ct-major-eleventh {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-major-eleventh:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 37.5%;\n}\n.ct-major-eleventh:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.ct-major-eleventh > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.ct-major-twelfth {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-major-twelfth:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 33.33333%;\n}\n.ct-major-twelfth:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.ct-major-twelfth > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.ct-double-octave {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-double-octave:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 25%;\n}\n.ct-double-octave:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.ct-double-octave > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n@media (min-width: 992px) {\n  .navbar {\n    min-height: 75px;\n  }\n\n  .navbar-form {\n    margin-top: 21px;\n    margin-bottom: 21px;\n    padding-left: 5px;\n    padding-right: 5px;\n  }\n\n  .navbar-search-form {\n    display: none;\n  }\n\n  .navbar-nav > li > .dropdown-menu,\n  .dropdown .dropdown-menu {\n    -webkit-transform: translate3d(0px, -40px, 0px);\n            transform: translate3d(0px, -40px, 0px);\n    transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1) 0s, opacity 0.3s ease 0s, height 0s linear 0.35s;\n  }\n\n  .navbar-nav > li.open > .dropdown-menu, .dropdown.open .dropdown-menu {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n  }\n\n  .navbar-nav > li > .dropdown-menu:before {\n    border-bottom: 11px solid #F1EAE0;\n    border-left: 11px solid transparent;\n    border-right: 11px solid transparent;\n    content: \"\";\n    display: inline-block;\n    position: absolute;\n    right: 12px;\n    top: -11px;\n  }\n\n  .navbar-nav > li > .dropdown-menu:after {\n    border-bottom: 11px solid #FFFCF5;\n    border-left: 11px solid transparent;\n    border-right: 11px solid transparent;\n    content: \"\";\n    display: inline-block;\n    position: absolute;\n    right: 12px;\n    top: -10px;\n  }\n\n  .navbar-nav.navbar-left > li > .dropdown-menu:before {\n    right: auto;\n    left: 12px;\n  }\n\n  .navbar-nav.navbar-left > li > .dropdown-menu:after {\n    right: auto;\n    left: 12px;\n  }\n\n  .navbar .navbar-header {\n    margin-left: 10px;\n  }\n\n  .footer:not(.footer-big) nav > ul li:first-child {\n    margin-left: 0;\n  }\n\n  body > .navbar-collapse.collapse {\n    display: none !important;\n  }\n\n  .card form [class*=\"col-\"] {\n    padding: 6px;\n  }\n  .card form [class*=\"col-\"]:first-child {\n    padding-left: 15px;\n  }\n  .card form [class*=\"col-\"]:last-child {\n    padding-right: 15px;\n  }\n}\n/*          Changes for small display      */\n@media (max-width: 991px) {\n  .sidebar {\n    display: none;\n  }\n\n  .main-panel {\n    width: 100%;\n  }\n\n  .navbar-transparent {\n    padding-top: 15px;\n    background-color: rgba(0, 0, 0, 0.45);\n  }\n\n  body {\n    position: relative;\n  }\n\n  h6 {\n    font-size: 1em;\n  }\n\n  .wrapper {\n    -webkit-transform: translate3d(0px, 0, 0);\n    transform: translate3d(0px, 0, 0);\n    transition: all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1);\n    left: 0;\n    background-color: white;\n  }\n\n  .navbar .container {\n    left: 0;\n    width: 100%;\n    transition: all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1);\n    position: relative;\n  }\n\n  .navbar .navbar-collapse.collapse,\n  .navbar .navbar-collapse.collapse.in,\n  .navbar .navbar-collapse.collapsing {\n    display: none !important;\n  }\n\n  .navbar-nav > li {\n    float: none;\n    position: relative;\n    display: block;\n  }\n\n  .off-canvas-sidebar {\n    position: fixed;\n    display: block;\n    top: 0;\n    height: 100%;\n    width: 230px;\n    right: 0;\n    z-index: 1032;\n    visibility: visible;\n    background-color: #999;\n    overflow-y: visible;\n    border-top: none;\n    text-align: left;\n    padding-right: 0px;\n    padding-left: 0;\n    -webkit-transform: translate3d(230px, 0, 0);\n    transform: translate3d(230px, 0, 0);\n    transition: all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1);\n  }\n  .off-canvas-sidebar .sidebar-wrapper {\n    position: relative;\n    z-index: 3;\n    overflow-y: scroll;\n    height: 100%;\n    box-shadow: inset 1px 0px 0px 0px #DDDDDD;\n  }\n  .off-canvas-sidebar .nav {\n    margin-top: 0;\n    padding: 10px 15px 0;\n  }\n  .off-canvas-sidebar .nav > li > a {\n    margin: 0px 0px;\n    color: #66615B;\n    text-transform: uppercase;\n    font-weight: 600;\n    font-size: 12px;\n    line-height: 1.4em;\n    padding: 10px 0;\n  }\n  .off-canvas-sidebar .nav > li > a:hover, .off-canvas-sidebar .nav > li > a.active {\n    color: #403D39;\n  }\n  .off-canvas-sidebar .nav > li > a p,\n  .off-canvas-sidebar .nav > li > a .notification,\n  .off-canvas-sidebar .nav > li > a .caret {\n    display: inline-block;\n  }\n  .off-canvas-sidebar .nav > li > a .caret {\n    float: right;\n    position: relative;\n    top: 12px;\n  }\n  .off-canvas-sidebar .nav > li > a i {\n    font-size: 18px;\n    margin-right: 10px;\n    line-height: 26px;\n  }\n  .off-canvas-sidebar .nav > li.active > a:before {\n    border-right: none;\n    border-left: 12px solid #DDDDDD;\n    border-top: 12px solid transparent;\n    border-bottom: 12px solid transparent;\n    right: auto;\n    margin-left: -15px;\n    left: 0px;\n    top: 10px;\n  }\n  .off-canvas-sidebar .nav > li.active > a:after {\n    border-right: none;\n    border-left: 12px solid #f4f3ef;\n    border-top: 12px solid transparent;\n    border-bottom: 12px solid transparent;\n    right: auto;\n    margin-left: -15px;\n    left: -1px;\n    top: 10px;\n  }\n  .off-canvas-sidebar::after {\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    position: absolute;\n    background-color: #f4f3ef;\n    background-image: linear-gradient(to bottom, transparent 0%, rgba(112, 112, 112, 0) 60%, rgba(186, 186, 186, 0.15) 100%);\n    display: block;\n    content: \"\";\n    z-index: 1;\n  }\n  .off-canvas-sidebar.has-image::after {\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    position: absolute;\n    background-color: rgba(17, 17, 17, 0.8);\n    display: block;\n    content: \"\";\n    z-index: 1;\n  }\n  .off-canvas-sidebar .logo {\n    position: relative;\n    z-index: 4;\n    padding-top: 11px;\n    padding-bottom: 11px;\n  }\n  .off-canvas-sidebar .divider {\n    height: 1px;\n    margin: 10px 0;\n  }\n\n  .nav-open .navbar-collapse {\n    -webkit-transform: translate3d(0px, 0, 0);\n    transform: translate3d(0px, 0, 0);\n  }\n\n  .nav-open .navbar .container {\n    left: -230px;\n  }\n\n  .nav-open .wrapper {\n    left: 0;\n    -webkit-transform: translate3d(-230px, 0, 0);\n    transform: translate3d(-230px, 0, 0);\n  }\n\n  .navbar-toggle .icon-bar {\n    display: block;\n    position: relative;\n    background: #fff;\n    width: 24px;\n    height: 2px;\n    border-radius: 1px;\n    margin: 0 auto;\n  }\n\n  .navbar-header .navbar-toggle {\n    margin: 10px 15px 10px 0;\n    width: 40px;\n    height: 40px;\n  }\n\n  .bar1,\n  .bar2,\n  .bar3 {\n    outline: 1px solid transparent;\n  }\n\n  .bar1 {\n    top: 0px;\n    -webkit-animation: topbar-back 500ms linear 0s;\n    animation: topbar-back 500ms 0s;\n    -webkit-animation-fill-mode: forwards;\n    animation-fill-mode: forwards;\n  }\n\n  .bar2 {\n    opacity: 1;\n  }\n\n  .bar3 {\n    bottom: 0px;\n    -webkit-animation: bottombar-back 500ms linear 0s;\n    animation: bottombar-back 500ms 0s;\n    -webkit-animation-fill-mode: forwards;\n    animation-fill-mode: forwards;\n  }\n\n  .toggled .bar1 {\n    top: 6px;\n    -webkit-animation: topbar-x 500ms linear 0s;\n    animation: topbar-x 500ms 0s;\n    -webkit-animation-fill-mode: forwards;\n    animation-fill-mode: forwards;\n  }\n\n  .toggled .bar2 {\n    opacity: 0;\n  }\n\n  .toggled .bar3 {\n    bottom: 6px;\n    -webkit-animation: bottombar-x 500ms linear 0s;\n    animation: bottombar-x 500ms 0s;\n    -webkit-animation-fill-mode: forwards;\n    animation-fill-mode: forwards;\n  }\n\n  @keyframes topbar-x {\n    0% {\n      top: 0px;\n      -webkit-transform: rotate(0deg);\n              transform: rotate(0deg);\n    }\n    45% {\n      top: 6px;\n      -webkit-transform: rotate(145deg);\n              transform: rotate(145deg);\n    }\n    75% {\n      -webkit-transform: rotate(130deg);\n              transform: rotate(130deg);\n    }\n    100% {\n      -webkit-transform: rotate(135deg);\n              transform: rotate(135deg);\n    }\n  }\n  @-webkit-keyframes topbar-x {\n    0% {\n      top: 0px;\n      -webkit-transform: rotate(0deg);\n    }\n    45% {\n      top: 6px;\n      -webkit-transform: rotate(145deg);\n    }\n    75% {\n      -webkit-transform: rotate(130deg);\n    }\n    100% {\n      -webkit-transform: rotate(135deg);\n    }\n  }\n  @keyframes topbar-back {\n    0% {\n      top: 6px;\n      -webkit-transform: rotate(135deg);\n              transform: rotate(135deg);\n    }\n    45% {\n      -webkit-transform: rotate(-10deg);\n              transform: rotate(-10deg);\n    }\n    75% {\n      -webkit-transform: rotate(5deg);\n              transform: rotate(5deg);\n    }\n    100% {\n      top: 0px;\n      -webkit-transform: rotate(0);\n              transform: rotate(0);\n    }\n  }\n  @-webkit-keyframes topbar-back {\n    0% {\n      top: 6px;\n      -webkit-transform: rotate(135deg);\n    }\n    45% {\n      -webkit-transform: rotate(-10deg);\n    }\n    75% {\n      -webkit-transform: rotate(5deg);\n    }\n    100% {\n      top: 0px;\n      -webkit-transform: rotate(0);\n    }\n  }\n  @keyframes bottombar-x {\n    0% {\n      bottom: 0px;\n      -webkit-transform: rotate(0deg);\n              transform: rotate(0deg);\n    }\n    45% {\n      bottom: 6px;\n      -webkit-transform: rotate(-145deg);\n              transform: rotate(-145deg);\n    }\n    75% {\n      -webkit-transform: rotate(-130deg);\n              transform: rotate(-130deg);\n    }\n    100% {\n      -webkit-transform: rotate(-135deg);\n              transform: rotate(-135deg);\n    }\n  }\n  @-webkit-keyframes bottombar-x {\n    0% {\n      bottom: 0px;\n      -webkit-transform: rotate(0deg);\n    }\n    45% {\n      bottom: 6px;\n      -webkit-transform: rotate(-145deg);\n    }\n    75% {\n      -webkit-transform: rotate(-130deg);\n    }\n    100% {\n      -webkit-transform: rotate(-135deg);\n    }\n  }\n  @keyframes bottombar-back {\n    0% {\n      bottom: 6px;\n      -webkit-transform: rotate(-135deg);\n              transform: rotate(-135deg);\n    }\n    45% {\n      -webkit-transform: rotate(10deg);\n              transform: rotate(10deg);\n    }\n    75% {\n      -webkit-transform: rotate(-5deg);\n              transform: rotate(-5deg);\n    }\n    100% {\n      bottom: 0px;\n      -webkit-transform: rotate(0);\n              transform: rotate(0);\n    }\n  }\n  @-webkit-keyframes bottombar-back {\n    0% {\n      bottom: 6px;\n      -webkit-transform: rotate(-135deg);\n    }\n    45% {\n      -webkit-transform: rotate(10deg);\n    }\n    75% {\n      -webkit-transform: rotate(-5deg);\n    }\n    100% {\n      bottom: 0px;\n      -webkit-transform: rotate(0);\n    }\n  }\n  @-webkit-keyframes fadeIn {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n  @keyframes fadeIn {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n  .dropdown-menu .divider {\n    background-color: rgba(229, 229, 229, 0.15);\n  }\n\n  .navbar-nav {\n    margin: 1px 0;\n  }\n\n  .dropdown-menu {\n    display: none;\n  }\n  .dropdown-menu > li > a:hover, .dropdown-menu > li > a:focus {\n    background-color: transparent;\n  }\n\n  .navbar-fixed-top {\n    -webkit-backface-visibility: hidden;\n  }\n\n  #bodyClick {\n    height: 100%;\n    width: 100%;\n    position: fixed;\n    opacity: 0;\n    top: 0;\n    left: auto;\n    right: 230px;\n    content: \"\";\n    z-index: 9999;\n    overflow-x: hidden;\n  }\n\n  .form-control + .form-control-feedback {\n    margin-top: -8px;\n  }\n\n  .navbar-toggle:hover, .navbar-toggle:focus {\n    background-color: transparent !important;\n  }\n\n  .btn.dropdown-toggle {\n    margin-bottom: 0;\n  }\n\n  .media-post .author {\n    width: 20%;\n    float: none !important;\n    display: block;\n    margin: 0 auto 10px;\n  }\n\n  .media-post .media-body {\n    width: 100%;\n  }\n\n  .navbar-collapse.collapse {\n    height: 100% !important;\n  }\n\n  .navbar-collapse.collapse.in {\n    display: block;\n  }\n\n  .navbar-header .collapse, .navbar-toggle {\n    display: block !important;\n  }\n\n  .navbar-header {\n    float: none;\n  }\n\n  .navbar-nav .open .dropdown-menu {\n    position: static;\n    float: none;\n    width: auto;\n    margin-top: 0;\n    background-color: transparent;\n    border: 0;\n    box-shadow: none;\n  }\n\n  .main-panel > .content {\n    padding-left: 0;\n    padding-right: 0;\n  }\n\n  .nav .open > a, .nav .open > a:focus, .nav .open > a:hover {\n    background-color: transparent;\n  }\n\n  .footer .copyright {\n    padding: 0px 15px;\n    width: 100%;\n  }\n}\n@media (min-width: 992px) {\n  .table-full-width {\n    margin-left: -15px;\n    margin-right: -15px;\n  }\n\n  .table-responsive {\n    overflow: visible;\n  }\n}\n@media (max-width: 991px) {\n  .table-responsive {\n    width: 100%;\n    margin-bottom: 15px;\n    border: 1px solid #dddddd;\n    overflow-x: scroll;\n    overflow-y: hidden;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n    -webkit-overflow-scrolling: touch;\n  }\n}\n", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../paper-dashboard/assets/css/themify-icons.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face {\n\tfont-family: 'themify';\n\tsrc:url(" + __webpack_require__("../../../../paper-dashboard/assets/fonts/themify.eot?-fvbane") + ");\n\tsrc:url(" + __webpack_require__("../../../../paper-dashboard/assets/fonts/themify.eot") + "?#iefix-fvbane) format('embedded-opentype'),\n\t\turl(" + __webpack_require__("../../../../paper-dashboard/assets/fonts/themify.woff?-fvbane") + ") format('woff'),\n\t\turl(" + __webpack_require__("../../../../paper-dashboard/assets/fonts/themify.ttf?-fvbane") + ") format('truetype'),\n\t\turl(" + __webpack_require__("../../../../paper-dashboard/assets/fonts/themify.svg?-fvbane") + "#themify) format('svg');\n\tfont-weight: normal;\n\tfont-style: normal;\n}\n\n[class^=\"ti-\"], [class*=\" ti-\"] {\n\tfont-family: 'themify';\n\tspeak: none;\n\tfont-style: normal;\n\tfont-weight: bold;\n\tfont-variant: normal;\n\ttext-transform: none;\n\tline-height: 1.42857;\n\n\t/* Better Font Rendering =========== */\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n\n.ti-wand:before {\n\tcontent: \"\\E600\";\n}\n.ti-volume:before {\n\tcontent: \"\\E601\";\n}\n.ti-user:before {\n\tcontent: \"\\E602\";\n}\n.ti-unlock:before {\n\tcontent: \"\\E603\";\n}\n.ti-unlink:before {\n\tcontent: \"\\E604\";\n}\n.ti-trash:before {\n\tcontent: \"\\E605\";\n}\n.ti-thought:before {\n\tcontent: \"\\E606\";\n}\n.ti-target:before {\n\tcontent: \"\\E607\";\n}\n.ti-tag:before {\n\tcontent: \"\\E608\";\n}\n.ti-tablet:before {\n\tcontent: \"\\E609\";\n}\n.ti-star:before {\n\tcontent: \"\\E60A\";\n}\n.ti-spray:before {\n\tcontent: \"\\E60B\";\n}\n.ti-signal:before {\n\tcontent: \"\\E60C\";\n}\n.ti-shopping-cart:before {\n\tcontent: \"\\E60D\";\n}\n.ti-shopping-cart-full:before {\n\tcontent: \"\\E60E\";\n}\n.ti-settings:before {\n\tcontent: \"\\E60F\";\n}\n.ti-search:before {\n\tcontent: \"\\E610\";\n}\n.ti-zoom-in:before {\n\tcontent: \"\\E611\";\n}\n.ti-zoom-out:before {\n\tcontent: \"\\E612\";\n}\n.ti-cut:before {\n\tcontent: \"\\E613\";\n}\n.ti-ruler:before {\n\tcontent: \"\\E614\";\n}\n.ti-ruler-pencil:before {\n\tcontent: \"\\E615\";\n}\n.ti-ruler-alt:before {\n\tcontent: \"\\E616\";\n}\n.ti-bookmark:before {\n\tcontent: \"\\E617\";\n}\n.ti-bookmark-alt:before {\n\tcontent: \"\\E618\";\n}\n.ti-reload:before {\n\tcontent: \"\\E619\";\n}\n.ti-plus:before {\n\tcontent: \"\\E61A\";\n}\n.ti-pin:before {\n\tcontent: \"\\E61B\";\n}\n.ti-pencil:before {\n\tcontent: \"\\E61C\";\n}\n.ti-pencil-alt:before {\n\tcontent: \"\\E61D\";\n}\n.ti-paint-roller:before {\n\tcontent: \"\\E61E\";\n}\n.ti-paint-bucket:before {\n\tcontent: \"\\E61F\";\n}\n.ti-na:before {\n\tcontent: \"\\E620\";\n}\n.ti-mobile:before {\n\tcontent: \"\\E621\";\n}\n.ti-minus:before {\n\tcontent: \"\\E622\";\n}\n.ti-medall:before {\n\tcontent: \"\\E623\";\n}\n.ti-medall-alt:before {\n\tcontent: \"\\E624\";\n}\n.ti-marker:before {\n\tcontent: \"\\E625\";\n}\n.ti-marker-alt:before {\n\tcontent: \"\\E626\";\n}\n.ti-arrow-up:before {\n\tcontent: \"\\E627\";\n}\n.ti-arrow-right:before {\n\tcontent: \"\\E628\";\n}\n.ti-arrow-left:before {\n\tcontent: \"\\E629\";\n}\n.ti-arrow-down:before {\n\tcontent: \"\\E62A\";\n}\n.ti-lock:before {\n\tcontent: \"\\E62B\";\n}\n.ti-location-arrow:before {\n\tcontent: \"\\E62C\";\n}\n.ti-link:before {\n\tcontent: \"\\E62D\";\n}\n.ti-layout:before {\n\tcontent: \"\\E62E\";\n}\n.ti-layers:before {\n\tcontent: \"\\E62F\";\n}\n.ti-layers-alt:before {\n\tcontent: \"\\E630\";\n}\n.ti-key:before {\n\tcontent: \"\\E631\";\n}\n.ti-import:before {\n\tcontent: \"\\E632\";\n}\n.ti-image:before {\n\tcontent: \"\\E633\";\n}\n.ti-heart:before {\n\tcontent: \"\\E634\";\n}\n.ti-heart-broken:before {\n\tcontent: \"\\E635\";\n}\n.ti-hand-stop:before {\n\tcontent: \"\\E636\";\n}\n.ti-hand-open:before {\n\tcontent: \"\\E637\";\n}\n.ti-hand-drag:before {\n\tcontent: \"\\E638\";\n}\n.ti-folder:before {\n\tcontent: \"\\E639\";\n}\n.ti-flag:before {\n\tcontent: \"\\E63A\";\n}\n.ti-flag-alt:before {\n\tcontent: \"\\E63B\";\n}\n.ti-flag-alt-2:before {\n\tcontent: \"\\E63C\";\n}\n.ti-eye:before {\n\tcontent: \"\\E63D\";\n}\n.ti-export:before {\n\tcontent: \"\\E63E\";\n}\n.ti-exchange-vertical:before {\n\tcontent: \"\\E63F\";\n}\n.ti-desktop:before {\n\tcontent: \"\\E640\";\n}\n.ti-cup:before {\n\tcontent: \"\\E641\";\n}\n.ti-crown:before {\n\tcontent: \"\\E642\";\n}\n.ti-comments:before {\n\tcontent: \"\\E643\";\n}\n.ti-comment:before {\n\tcontent: \"\\E644\";\n}\n.ti-comment-alt:before {\n\tcontent: \"\\E645\";\n}\n.ti-close:before {\n\tcontent: \"\\E646\";\n}\n.ti-clip:before {\n\tcontent: \"\\E647\";\n}\n.ti-angle-up:before {\n\tcontent: \"\\E648\";\n}\n.ti-angle-right:before {\n\tcontent: \"\\E649\";\n}\n.ti-angle-left:before {\n\tcontent: \"\\E64A\";\n}\n.ti-angle-down:before {\n\tcontent: \"\\E64B\";\n}\n.ti-check:before {\n\tcontent: \"\\E64C\";\n}\n.ti-check-box:before {\n\tcontent: \"\\E64D\";\n}\n.ti-camera:before {\n\tcontent: \"\\E64E\";\n}\n.ti-announcement:before {\n\tcontent: \"\\E64F\";\n}\n.ti-brush:before {\n\tcontent: \"\\E650\";\n}\n.ti-briefcase:before {\n\tcontent: \"\\E651\";\n}\n.ti-bolt:before {\n\tcontent: \"\\E652\";\n}\n.ti-bolt-alt:before {\n\tcontent: \"\\E653\";\n}\n.ti-blackboard:before {\n\tcontent: \"\\E654\";\n}\n.ti-bag:before {\n\tcontent: \"\\E655\";\n}\n.ti-move:before {\n\tcontent: \"\\E656\";\n}\n.ti-arrows-vertical:before {\n\tcontent: \"\\E657\";\n}\n.ti-arrows-horizontal:before {\n\tcontent: \"\\E658\";\n}\n.ti-fullscreen:before {\n\tcontent: \"\\E659\";\n}\n.ti-arrow-top-right:before {\n\tcontent: \"\\E65A\";\n}\n.ti-arrow-top-left:before {\n\tcontent: \"\\E65B\";\n}\n.ti-arrow-circle-up:before {\n\tcontent: \"\\E65C\";\n}\n.ti-arrow-circle-right:before {\n\tcontent: \"\\E65D\";\n}\n.ti-arrow-circle-left:before {\n\tcontent: \"\\E65E\";\n}\n.ti-arrow-circle-down:before {\n\tcontent: \"\\E65F\";\n}\n.ti-angle-double-up:before {\n\tcontent: \"\\E660\";\n}\n.ti-angle-double-right:before {\n\tcontent: \"\\E661\";\n}\n.ti-angle-double-left:before {\n\tcontent: \"\\E662\";\n}\n.ti-angle-double-down:before {\n\tcontent: \"\\E663\";\n}\n.ti-zip:before {\n\tcontent: \"\\E664\";\n}\n.ti-world:before {\n\tcontent: \"\\E665\";\n}\n.ti-wheelchair:before {\n\tcontent: \"\\E666\";\n}\n.ti-view-list:before {\n\tcontent: \"\\E667\";\n}\n.ti-view-list-alt:before {\n\tcontent: \"\\E668\";\n}\n.ti-view-grid:before {\n\tcontent: \"\\E669\";\n}\n.ti-uppercase:before {\n\tcontent: \"\\E66A\";\n}\n.ti-upload:before {\n\tcontent: \"\\E66B\";\n}\n.ti-underline:before {\n\tcontent: \"\\E66C\";\n}\n.ti-truck:before {\n\tcontent: \"\\E66D\";\n}\n.ti-timer:before {\n\tcontent: \"\\E66E\";\n}\n.ti-ticket:before {\n\tcontent: \"\\E66F\";\n}\n.ti-thumb-up:before {\n\tcontent: \"\\E670\";\n}\n.ti-thumb-down:before {\n\tcontent: \"\\E671\";\n}\n.ti-text:before {\n\tcontent: \"\\E672\";\n}\n.ti-stats-up:before {\n\tcontent: \"\\E673\";\n}\n.ti-stats-down:before {\n\tcontent: \"\\E674\";\n}\n.ti-split-v:before {\n\tcontent: \"\\E675\";\n}\n.ti-split-h:before {\n\tcontent: \"\\E676\";\n}\n.ti-smallcap:before {\n\tcontent: \"\\E677\";\n}\n.ti-shine:before {\n\tcontent: \"\\E678\";\n}\n.ti-shift-right:before {\n\tcontent: \"\\E679\";\n}\n.ti-shift-left:before {\n\tcontent: \"\\E67A\";\n}\n.ti-shield:before {\n\tcontent: \"\\E67B\";\n}\n.ti-notepad:before {\n\tcontent: \"\\E67C\";\n}\n.ti-server:before {\n\tcontent: \"\\E67D\";\n}\n.ti-quote-right:before {\n\tcontent: \"\\E67E\";\n}\n.ti-quote-left:before {\n\tcontent: \"\\E67F\";\n}\n.ti-pulse:before {\n\tcontent: \"\\E680\";\n}\n.ti-printer:before {\n\tcontent: \"\\E681\";\n}\n.ti-power-off:before {\n\tcontent: \"\\E682\";\n}\n.ti-plug:before {\n\tcontent: \"\\E683\";\n}\n.ti-pie-chart:before {\n\tcontent: \"\\E684\";\n}\n.ti-paragraph:before {\n\tcontent: \"\\E685\";\n}\n.ti-panel:before {\n\tcontent: \"\\E686\";\n}\n.ti-package:before {\n\tcontent: \"\\E687\";\n}\n.ti-music:before {\n\tcontent: \"\\E688\";\n}\n.ti-music-alt:before {\n\tcontent: \"\\E689\";\n}\n.ti-mouse:before {\n\tcontent: \"\\E68A\";\n}\n.ti-mouse-alt:before {\n\tcontent: \"\\E68B\";\n}\n.ti-money:before {\n\tcontent: \"\\E68C\";\n}\n.ti-microphone:before {\n\tcontent: \"\\E68D\";\n}\n.ti-menu:before {\n\tcontent: \"\\E68E\";\n}\n.ti-menu-alt:before {\n\tcontent: \"\\E68F\";\n}\n.ti-map:before {\n\tcontent: \"\\E690\";\n}\n.ti-map-alt:before {\n\tcontent: \"\\E691\";\n}\n.ti-loop:before {\n\tcontent: \"\\E692\";\n}\n.ti-location-pin:before {\n\tcontent: \"\\E693\";\n}\n.ti-list:before {\n\tcontent: \"\\E694\";\n}\n.ti-light-bulb:before {\n\tcontent: \"\\E695\";\n}\n.ti-Italic:before {\n\tcontent: \"\\E696\";\n}\n.ti-info:before {\n\tcontent: \"\\E697\";\n}\n.ti-infinite:before {\n\tcontent: \"\\E698\";\n}\n.ti-id-badge:before {\n\tcontent: \"\\E699\";\n}\n.ti-hummer:before {\n\tcontent: \"\\E69A\";\n}\n.ti-home:before {\n\tcontent: \"\\E69B\";\n}\n.ti-help:before {\n\tcontent: \"\\E69C\";\n}\n.ti-headphone:before {\n\tcontent: \"\\E69D\";\n}\n.ti-harddrives:before {\n\tcontent: \"\\E69E\";\n}\n.ti-harddrive:before {\n\tcontent: \"\\E69F\";\n}\n.ti-gift:before {\n\tcontent: \"\\E6A0\";\n}\n.ti-game:before {\n\tcontent: \"\\E6A1\";\n}\n.ti-filter:before {\n\tcontent: \"\\E6A2\";\n}\n.ti-files:before {\n\tcontent: \"\\E6A3\";\n}\n.ti-file:before {\n\tcontent: \"\\E6A4\";\n}\n.ti-eraser:before {\n\tcontent: \"\\E6A5\";\n}\n.ti-envelope:before {\n\tcontent: \"\\E6A6\";\n}\n.ti-download:before {\n\tcontent: \"\\E6A7\";\n}\n.ti-direction:before {\n\tcontent: \"\\E6A8\";\n}\n.ti-direction-alt:before {\n\tcontent: \"\\E6A9\";\n}\n.ti-dashboard:before {\n\tcontent: \"\\E6AA\";\n}\n.ti-control-stop:before {\n\tcontent: \"\\E6AB\";\n}\n.ti-control-shuffle:before {\n\tcontent: \"\\E6AC\";\n}\n.ti-control-play:before {\n\tcontent: \"\\E6AD\";\n}\n.ti-control-pause:before {\n\tcontent: \"\\E6AE\";\n}\n.ti-control-forward:before {\n\tcontent: \"\\E6AF\";\n}\n.ti-control-backward:before {\n\tcontent: \"\\E6B0\";\n}\n.ti-cloud:before {\n\tcontent: \"\\E6B1\";\n}\n.ti-cloud-up:before {\n\tcontent: \"\\E6B2\";\n}\n.ti-cloud-down:before {\n\tcontent: \"\\E6B3\";\n}\n.ti-clipboard:before {\n\tcontent: \"\\E6B4\";\n}\n.ti-car:before {\n\tcontent: \"\\E6B5\";\n}\n.ti-calendar:before {\n\tcontent: \"\\E6B6\";\n}\n.ti-book:before {\n\tcontent: \"\\E6B7\";\n}\n.ti-bell:before {\n\tcontent: \"\\E6B8\";\n}\n.ti-basketball:before {\n\tcontent: \"\\E6B9\";\n}\n.ti-bar-chart:before {\n\tcontent: \"\\E6BA\";\n}\n.ti-bar-chart-alt:before {\n\tcontent: \"\\E6BB\";\n}\n.ti-back-right:before {\n\tcontent: \"\\E6BC\";\n}\n.ti-back-left:before {\n\tcontent: \"\\E6BD\";\n}\n.ti-arrows-corner:before {\n\tcontent: \"\\E6BE\";\n}\n.ti-archive:before {\n\tcontent: \"\\E6BF\";\n}\n.ti-anchor:before {\n\tcontent: \"\\E6C0\";\n}\n.ti-align-right:before {\n\tcontent: \"\\E6C1\";\n}\n.ti-align-left:before {\n\tcontent: \"\\E6C2\";\n}\n.ti-align-justify:before {\n\tcontent: \"\\E6C3\";\n}\n.ti-align-center:before {\n\tcontent: \"\\E6C4\";\n}\n.ti-alert:before {\n\tcontent: \"\\E6C5\";\n}\n.ti-alarm-clock:before {\n\tcontent: \"\\E6C6\";\n}\n.ti-agenda:before {\n\tcontent: \"\\E6C7\";\n}\n.ti-write:before {\n\tcontent: \"\\E6C8\";\n}\n.ti-window:before {\n\tcontent: \"\\E6C9\";\n}\n.ti-widgetized:before {\n\tcontent: \"\\E6CA\";\n}\n.ti-widget:before {\n\tcontent: \"\\E6CB\";\n}\n.ti-widget-alt:before {\n\tcontent: \"\\E6CC\";\n}\n.ti-wallet:before {\n\tcontent: \"\\E6CD\";\n}\n.ti-video-clapper:before {\n\tcontent: \"\\E6CE\";\n}\n.ti-video-camera:before {\n\tcontent: \"\\E6CF\";\n}\n.ti-vector:before {\n\tcontent: \"\\E6D0\";\n}\n.ti-themify-logo:before {\n\tcontent: \"\\E6D1\";\n}\n.ti-themify-favicon:before {\n\tcontent: \"\\E6D2\";\n}\n.ti-themify-favicon-alt:before {\n\tcontent: \"\\E6D3\";\n}\n.ti-support:before {\n\tcontent: \"\\E6D4\";\n}\n.ti-stamp:before {\n\tcontent: \"\\E6D5\";\n}\n.ti-split-v-alt:before {\n\tcontent: \"\\E6D6\";\n}\n.ti-slice:before {\n\tcontent: \"\\E6D7\";\n}\n.ti-shortcode:before {\n\tcontent: \"\\E6D8\";\n}\n.ti-shift-right-alt:before {\n\tcontent: \"\\E6D9\";\n}\n.ti-shift-left-alt:before {\n\tcontent: \"\\E6DA\";\n}\n.ti-ruler-alt-2:before {\n\tcontent: \"\\E6DB\";\n}\n.ti-receipt:before {\n\tcontent: \"\\E6DC\";\n}\n.ti-pin2:before {\n\tcontent: \"\\E6DD\";\n}\n.ti-pin-alt:before {\n\tcontent: \"\\E6DE\";\n}\n.ti-pencil-alt2:before {\n\tcontent: \"\\E6DF\";\n}\n.ti-palette:before {\n\tcontent: \"\\E6E0\";\n}\n.ti-more:before {\n\tcontent: \"\\E6E1\";\n}\n.ti-more-alt:before {\n\tcontent: \"\\E6E2\";\n}\n.ti-microphone-alt:before {\n\tcontent: \"\\E6E3\";\n}\n.ti-magnet:before {\n\tcontent: \"\\E6E4\";\n}\n.ti-line-double:before {\n\tcontent: \"\\E6E5\";\n}\n.ti-line-dotted:before {\n\tcontent: \"\\E6E6\";\n}\n.ti-line-dashed:before {\n\tcontent: \"\\E6E7\";\n}\n.ti-layout-width-full:before {\n\tcontent: \"\\E6E8\";\n}\n.ti-layout-width-default:before {\n\tcontent: \"\\E6E9\";\n}\n.ti-layout-width-default-alt:before {\n\tcontent: \"\\E6EA\";\n}\n.ti-layout-tab:before {\n\tcontent: \"\\E6EB\";\n}\n.ti-layout-tab-window:before {\n\tcontent: \"\\E6EC\";\n}\n.ti-layout-tab-v:before {\n\tcontent: \"\\E6ED\";\n}\n.ti-layout-tab-min:before {\n\tcontent: \"\\E6EE\";\n}\n.ti-layout-slider:before {\n\tcontent: \"\\E6EF\";\n}\n.ti-layout-slider-alt:before {\n\tcontent: \"\\E6F0\";\n}\n.ti-layout-sidebar-right:before {\n\tcontent: \"\\E6F1\";\n}\n.ti-layout-sidebar-none:before {\n\tcontent: \"\\E6F2\";\n}\n.ti-layout-sidebar-left:before {\n\tcontent: \"\\E6F3\";\n}\n.ti-layout-placeholder:before {\n\tcontent: \"\\E6F4\";\n}\n.ti-layout-menu:before {\n\tcontent: \"\\E6F5\";\n}\n.ti-layout-menu-v:before {\n\tcontent: \"\\E6F6\";\n}\n.ti-layout-menu-separated:before {\n\tcontent: \"\\E6F7\";\n}\n.ti-layout-menu-full:before {\n\tcontent: \"\\E6F8\";\n}\n.ti-layout-media-right-alt:before {\n\tcontent: \"\\E6F9\";\n}\n.ti-layout-media-right:before {\n\tcontent: \"\\E6FA\";\n}\n.ti-layout-media-overlay:before {\n\tcontent: \"\\E6FB\";\n}\n.ti-layout-media-overlay-alt:before {\n\tcontent: \"\\E6FC\";\n}\n.ti-layout-media-overlay-alt-2:before {\n\tcontent: \"\\E6FD\";\n}\n.ti-layout-media-left-alt:before {\n\tcontent: \"\\E6FE\";\n}\n.ti-layout-media-left:before {\n\tcontent: \"\\E6FF\";\n}\n.ti-layout-media-center-alt:before {\n\tcontent: \"\\E700\";\n}\n.ti-layout-media-center:before {\n\tcontent: \"\\E701\";\n}\n.ti-layout-list-thumb:before {\n\tcontent: \"\\E702\";\n}\n.ti-layout-list-thumb-alt:before {\n\tcontent: \"\\E703\";\n}\n.ti-layout-list-post:before {\n\tcontent: \"\\E704\";\n}\n.ti-layout-list-large-image:before {\n\tcontent: \"\\E705\";\n}\n.ti-layout-line-solid:before {\n\tcontent: \"\\E706\";\n}\n.ti-layout-grid4:before {\n\tcontent: \"\\E707\";\n}\n.ti-layout-grid3:before {\n\tcontent: \"\\E708\";\n}\n.ti-layout-grid2:before {\n\tcontent: \"\\E709\";\n}\n.ti-layout-grid2-thumb:before {\n\tcontent: \"\\E70A\";\n}\n.ti-layout-cta-right:before {\n\tcontent: \"\\E70B\";\n}\n.ti-layout-cta-left:before {\n\tcontent: \"\\E70C\";\n}\n.ti-layout-cta-center:before {\n\tcontent: \"\\E70D\";\n}\n.ti-layout-cta-btn-right:before {\n\tcontent: \"\\E70E\";\n}\n.ti-layout-cta-btn-left:before {\n\tcontent: \"\\E70F\";\n}\n.ti-layout-column4:before {\n\tcontent: \"\\E710\";\n}\n.ti-layout-column3:before {\n\tcontent: \"\\E711\";\n}\n.ti-layout-column2:before {\n\tcontent: \"\\E712\";\n}\n.ti-layout-accordion-separated:before {\n\tcontent: \"\\E713\";\n}\n.ti-layout-accordion-merged:before {\n\tcontent: \"\\E714\";\n}\n.ti-layout-accordion-list:before {\n\tcontent: \"\\E715\";\n}\n.ti-ink-pen:before {\n\tcontent: \"\\E716\";\n}\n.ti-info-alt:before {\n\tcontent: \"\\E717\";\n}\n.ti-help-alt:before {\n\tcontent: \"\\E718\";\n}\n.ti-headphone-alt:before {\n\tcontent: \"\\E719\";\n}\n.ti-hand-point-up:before {\n\tcontent: \"\\E71A\";\n}\n.ti-hand-point-right:before {\n\tcontent: \"\\E71B\";\n}\n.ti-hand-point-left:before {\n\tcontent: \"\\E71C\";\n}\n.ti-hand-point-down:before {\n\tcontent: \"\\E71D\";\n}\n.ti-gallery:before {\n\tcontent: \"\\E71E\";\n}\n.ti-face-smile:before {\n\tcontent: \"\\E71F\";\n}\n.ti-face-sad:before {\n\tcontent: \"\\E720\";\n}\n.ti-credit-card:before {\n\tcontent: \"\\E721\";\n}\n.ti-control-skip-forward:before {\n\tcontent: \"\\E722\";\n}\n.ti-control-skip-backward:before {\n\tcontent: \"\\E723\";\n}\n.ti-control-record:before {\n\tcontent: \"\\E724\";\n}\n.ti-control-eject:before {\n\tcontent: \"\\E725\";\n}\n.ti-comments-smiley:before {\n\tcontent: \"\\E726\";\n}\n.ti-brush-alt:before {\n\tcontent: \"\\E727\";\n}\n.ti-youtube:before {\n\tcontent: \"\\E728\";\n}\n.ti-vimeo:before {\n\tcontent: \"\\E729\";\n}\n.ti-twitter:before {\n\tcontent: \"\\E72A\";\n}\n.ti-time:before {\n\tcontent: \"\\E72B\";\n}\n.ti-tumblr:before {\n\tcontent: \"\\E72C\";\n}\n.ti-skype:before {\n\tcontent: \"\\E72D\";\n}\n.ti-share:before {\n\tcontent: \"\\E72E\";\n}\n.ti-share-alt:before {\n\tcontent: \"\\E72F\";\n}\n.ti-rocket:before {\n\tcontent: \"\\E730\";\n}\n.ti-pinterest:before {\n\tcontent: \"\\E731\";\n}\n.ti-new-window:before {\n\tcontent: \"\\E732\";\n}\n.ti-microsoft:before {\n\tcontent: \"\\E733\";\n}\n.ti-list-ol:before {\n\tcontent: \"\\E734\";\n}\n.ti-linkedin:before {\n\tcontent: \"\\E735\";\n}\n.ti-layout-sidebar-2:before {\n\tcontent: \"\\E736\";\n}\n.ti-layout-grid4-alt:before {\n\tcontent: \"\\E737\";\n}\n.ti-layout-grid3-alt:before {\n\tcontent: \"\\E738\";\n}\n.ti-layout-grid2-alt:before {\n\tcontent: \"\\E739\";\n}\n.ti-layout-column4-alt:before {\n\tcontent: \"\\E73A\";\n}\n.ti-layout-column3-alt:before {\n\tcontent: \"\\E73B\";\n}\n.ti-layout-column2-alt:before {\n\tcontent: \"\\E73C\";\n}\n.ti-instagram:before {\n\tcontent: \"\\E73D\";\n}\n.ti-google:before {\n\tcontent: \"\\E73E\";\n}\n.ti-github:before {\n\tcontent: \"\\E73F\";\n}\n.ti-flickr:before {\n\tcontent: \"\\E740\";\n}\n.ti-facebook:before {\n\tcontent: \"\\E741\";\n}\n.ti-dropbox:before {\n\tcontent: \"\\E742\";\n}\n.ti-dribbble:before {\n\tcontent: \"\\E743\";\n}\n.ti-apple:before {\n\tcontent: \"\\E744\";\n}\n.ti-android:before {\n\tcontent: \"\\E745\";\n}\n.ti-save:before {\n\tcontent: \"\\E746\";\n}\n.ti-save-alt:before {\n\tcontent: \"\\E747\";\n}\n.ti-yahoo:before {\n\tcontent: \"\\E748\";\n}\n.ti-wordpress:before {\n\tcontent: \"\\E749\";\n}\n.ti-vimeo-alt:before {\n\tcontent: \"\\E74A\";\n}\n.ti-twitter-alt:before {\n\tcontent: \"\\E74B\";\n}\n.ti-tumblr-alt:before {\n\tcontent: \"\\E74C\";\n}\n.ti-trello:before {\n\tcontent: \"\\E74D\";\n}\n.ti-stack-overflow:before {\n\tcontent: \"\\E74E\";\n}\n.ti-soundcloud:before {\n\tcontent: \"\\E74F\";\n}\n.ti-sharethis:before {\n\tcontent: \"\\E750\";\n}\n.ti-sharethis-alt:before {\n\tcontent: \"\\E751\";\n}\n.ti-reddit:before {\n\tcontent: \"\\E752\";\n}\n.ti-pinterest-alt:before {\n\tcontent: \"\\E753\";\n}\n.ti-microsoft-alt:before {\n\tcontent: \"\\E754\";\n}\n.ti-linux:before {\n\tcontent: \"\\E755\";\n}\n.ti-jsfiddle:before {\n\tcontent: \"\\E756\";\n}\n.ti-joomla:before {\n\tcontent: \"\\E757\";\n}\n.ti-html5:before {\n\tcontent: \"\\E758\";\n}\n.ti-flickr-alt:before {\n\tcontent: \"\\E759\";\n}\n.ti-email:before {\n\tcontent: \"\\E75A\";\n}\n.ti-drupal:before {\n\tcontent: \"\\E75B\";\n}\n.ti-dropbox-alt:before {\n\tcontent: \"\\E75C\";\n}\n.ti-css3:before {\n\tcontent: \"\\E75D\";\n}\n.ti-rss:before {\n\tcontent: \"\\E75E\";\n}\n.ti-rss-alt:before {\n\tcontent: \"\\E75F\";\n}\n", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../wfk-montserrat/montserrat.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face {\n\tfont-family: 'montserrat-black-italic';\n\tsrc: url(" + __webpack_require__("../../../../wfk-montserrat/fonts/montserrat-black-italic.ttf") + ") format('truetype');\n\tfont-weight: normal;\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: 'montserrat-black';\n\tsrc: url(" + __webpack_require__("../../../../wfk-montserrat/fonts/montserrat-black.ttf") + ") format('truetype');\n\tfont-weight: normal;\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: 'montserrat-bold-italic';\n\tsrc: url(" + __webpack_require__("../../../../wfk-montserrat/fonts/montserrat-bold-italic.ttf") + ") format('truetype');\n\tfont-weight: normal;\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: 'montserrat-bold';\n\tsrc: url(" + __webpack_require__("../../../../wfk-montserrat/fonts/montserrat-bold.ttf") + ") format('truetype');\n\tfont-weight: normal;\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: 'montserrat-extra-bold';\n\tsrc: url(" + __webpack_require__("../../../../wfk-montserrat/fonts/montserrat-extra-bold.ttf") + ") format('truetype');\n\tfont-weight: normal;\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: 'montserrat-extra-bolditalic';\n\tsrc: url(" + __webpack_require__("../../../../wfk-montserrat/fonts/montserrat-extra-bolditalic.ttf") + ") format('truetype');\n\tfont-weight: normal;\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: 'montserrat-extra-light-italic';\n\tsrc: url(" + __webpack_require__("../../../../wfk-montserrat/fonts/montserrat-extra-light-italic.ttf") + ") format('truetype');\n\tfont-weight: normal;\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: 'montserrat-extra-light';\n\tsrc: url(" + __webpack_require__("../../../../wfk-montserrat/fonts/montserrat-extra-light.ttf") + ") format('truetype');\n\tfont-weight: normal;\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: 'montserrat-italic';\n\tsrc: url(" + __webpack_require__("../../../../wfk-montserrat/fonts/montserrat-italic.ttf") + ") format('truetype');\n\tfont-weight: normal;\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: 'montserrat-light-italic';\n\tsrc: url(" + __webpack_require__("../../../../wfk-montserrat/fonts/montserrat-light-italic.ttf") + ") format('truetype');\n\tfont-weight: normal;\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: 'montserrat-light';\n\tsrc: url(" + __webpack_require__("../../../../wfk-montserrat/fonts/montserrat-light.ttf") + ") format('truetype');\n\tfont-weight: normal;\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: 'montserrat-medium-italic';\n\tsrc: url(" + __webpack_require__("../../../../wfk-montserrat/fonts/montserrat-medium-italic.ttf") + ") format('truetype');\n\tfont-weight: normal;\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: 'montserrat-medium';\n\tsrc: url(" + __webpack_require__("../../../../wfk-montserrat/fonts/montserrat-medium.ttf") + ") format('truetype');\n\tfont-weight: normal;\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: 'montserrat-regular';\n\tsrc: url(" + __webpack_require__("../../../../wfk-montserrat/fonts/montserrat-regular.ttf") + ") format('truetype');\n\tfont-weight: normal;\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: 'montserrat-semi-bold';\n\tsrc: url(" + __webpack_require__("../../../../wfk-montserrat/fonts/montserrat-semi-bold.ttf") + ") format('truetype');\n\tfont-weight: normal;\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: 'montserrat-semi-bolditalic';\n\tsrc: url(" + __webpack_require__("../../../../wfk-montserrat/fonts/montserrat-semi-bolditalic.ttf") + ") format('truetype');\n\tfont-weight: normal;\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: 'montserrat-thin-italic';\n\tsrc: url(" + __webpack_require__("../../../../wfk-montserrat/fonts/montserrat-thin-italic.ttf") + ") format('truetype');\n\tfont-weight: normal;\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: 'montserrat-thin';\n\tsrc: url(" + __webpack_require__("../../../../wfk-montserrat/fonts/montserrat-thin.ttf") + ") format('truetype');\n\tfont-weight: normal;\n\tfont-style: normal;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../ngx-select-dropdown/dist/assets/fonts/icomoon.eot?eh7l1v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icomoon.397ff01791418ecf7ae1.eot";

/***/ }),

/***/ "../../../../ngx-select-dropdown/dist/assets/fonts/icomoon.svg?eh7l1v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icomoon.441fea52e48fd515d26c.svg";

/***/ }),

/***/ "../../../../ngx-select-dropdown/dist/assets/fonts/icomoon.ttf?eh7l1v":
/***/ (function(module, exports) {

module.exports = "data:application/x-font-ttf;base64,AAEAAAALAIAAAwAwT1MvMg8SDUcAAAC8AAAAYGNtYXD/c9KmAAABHAAAAGRnYXNwAAAAEAAAAYAAAAAIZ2x5ZmJW/l0AAAGIAAACuGhlYWQP8p5gAAAEQAAAADZoaGVhB30DyQAABHgAAAAkaG10eBNuALAAAAScAAAAIGxvY2ECRgG2AAAEvAAAABJtYXhwAAsARQAABNAAAAAgbmFtZZlKCfsAAATwAAABhnBvc3QAAwAAAAAGeAAAACAAAwMWAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADxBwPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQASAAAAA4ACAACAAYAAQAg8ALwDfEH//3//wAAAAAAIPAC8AzxB//9//8AAf/jEAIP+Q8AAAMAAQAAAAAAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAgAA/7cDtwNuABsAQgAAATQnLgEnJiMiBw4BBwYVFBceARcWMzI3PgE3NgEUBiMiJi8BDgEjIicuAScmNTQ3PgE3NjMyFx4BFxYVFAYHFx4BFQKSFBRGLi81NS4vRRUUFBVFLy41NS8uRhQUASUrHg8bCsQydT1TSUptHyAgH21KSVNUSUltICAlIsQKCwHbNS8vRRQUFBRFLy81NS4vRRQVFRRFLy7+Wh4rCwvDIyQgH25JSVNUSUluHyAgH25JSVQ8dTPECRsPAAAAAQBFAFEDuwL4ACQAAAEUBgcBDgEjIiYnAS4BNTQ2PwE+ATMyFh8BAT4BMzIWHwEeARUDuwgI/hQHFQoLFQf+4wgICAhOCBQLChUIqAF2CBUKCxQITggIAnMKFQf+FAgICAgBHQcVCwoVB04ICAgIqAF3CAgICE4HFQsAAAEAPwA/AuYC5gA8AAAlFAYPAQ4BIyImLwEHDgEjIiYvAS4BNTQ2PwEnLgE1NDY/AT4BMzIWHwE3PgEzMhYfAR4BFRQGDwEXHgEVAuYJB04IFAsLFAioqAcVCwoVB04ICAgIqKgICAgITgcVCgsVB6ioCBQLCxQITgcJCQeoqAcJwwoVB04ICAgIqKgICAgITgcVCgsVB6ioCBQLCxQITgcJCQeoqAcJCQdOCBQLCxQIqKgHFQsAAAABACwA9QJmAkIAJAAAARQGBwEOASMiJicBLgE1NDY/AT4BMzIWHwE3PgEzMhYfAR4BFQJmAwL+9QIHBAMHA/72AwMDAxwDBwMEBwPg4QIHBAMHAx0CAwISAwcD/vYDAwMDAQoDBwMEBwIdAwMDA+HhAwMDAx0CBwQAAAAAAQAAAAAAAM+E8ltfDzz1AAsEAAAAAADWjK0fAAAAANaMrR8AAP+3A7sDbgAAAAgAAgAAAAAAAAABAAADwP/AAAAEAAAAAAADuwABAAAAAAAAAAAAAAAAAAAACAQAAAAAAAAAAAAAAAIAAAADtwAABAAARQMlAD8CkgAsAAAAAAAKABQAHgCEAMIBHgFcAAAAAQAAAAgAQwACAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAcAAAABAAAAAAACAAcAYAABAAAAAAADAAcANgABAAAAAAAEAAcAdQABAAAAAAAFAAsAFQABAAAAAAAGAAcASwABAAAAAAAKABoAigADAAEECQABAA4ABwADAAEECQACAA4AZwADAAEECQADAA4APQADAAEECQAEAA4AfAADAAEECQAFABYAIAADAAEECQAGAA4AUgADAAEECQAKADQApGljb21vb24AaQBjAG8AbQBvAG8AblZlcnNpb24gMS4wAFYAZQByAHMAaQBvAG4AIAAxAC4AMGljb21vb24AaQBjAG8AbQBvAG8Abmljb21vb24AaQBjAG8AbQBvAG8AblJlZ3VsYXIAUgBlAGcAdQBsAGEAcmljb21vb24AaQBjAG8AbQBvAG8AbkZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="

/***/ }),

/***/ "../../../../ngx-select-dropdown/dist/assets/fonts/icomoon.woff?eh7l1v":
/***/ (function(module, exports) {

module.exports = "data:application/font-woff;base64,d09GRgABAAAAAAbkAAsAAAAABpgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxINR2NtYXAAAAFoAAAAZAAAAGT/c9KmZ2FzcAAAAcwAAAAIAAAACAAAABBnbHlmAAAB1AAAArgAAAK4Ylb+XWhlYWQAAASMAAAANgAAADYP8p5gaGhlYQAABMQAAAAkAAAAJAd9A8lobXR4AAAE6AAAACAAAAAgE24AsGxvY2EAAAUIAAAAEgAAABICRgG2bWF4cAAABRwAAAAgAAAAIAALAEVuYW1lAAAFPAAAAYYAAAGGmUoJ+3Bvc3QAAAbEAAAAIAAAACAAAwAAAAMDFgGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA8QcDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEAEgAAAAOAAgAAgAGAAEAIPAC8A3xB//9//8AAAAAACDwAvAM8Qf//f//AAH/4xACD/kPAAADAAEAAAAAAAAAAAAAAAAAAAABAAH//wAPAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAIAAP+3A7cDbgAbAEIAAAE0Jy4BJyYjIgcOAQcGFRQXHgEXFjMyNz4BNzYBFAYjIiYvAQ4BIyInLgEnJjU0Nz4BNzYzMhceARcWFRQGBxceARUCkhQURi4vNTUuL0UVFBQVRS8uNTUvLkYUFAElKx4PGwrEMnU9U0lKbR8gIB9tSklTVElJbSAgJSLECgsB2zUvL0UUFBQURS8vNTUuL0UUFRUURS8u/loeKwsLwyMkIB9uSUlTVElJbh8gIB9uSUlUPHUzxAkbDwAAAAEARQBRA7sC+AAkAAABFAYHAQ4BIyImJwEuATU0Nj8BPgEzMhYfAQE+ATMyFh8BHgEVA7sICP4UBxUKCxUH/uMICAgITggUCwoVCKgBdggVCgsUCE4ICAJzChUH/hQICAgIAR0HFQsKFQdOCAgICKgBdwgICAhOBxULAAABAD8APwLmAuYAPAAAJRQGDwEOASMiJi8BBw4BIyImLwEuATU0Nj8BJy4BNTQ2PwE+ATMyFh8BNz4BMzIWHwEeARUUBg8BFx4BFQLmCQdOCBQLCxQIqKgHFQsKFQdOCAgICKioCAgICE4HFQoLFQeoqAgUCwsUCE4HCQkHqKgHCcMKFQdOCAgICKioCAgICE4HFQoLFQeoqAgUCwsUCE4HCQkHqKgHCQkHTggUCwsUCKioBxULAAAAAQAsAPUCZgJCACQAAAEUBgcBDgEjIiYnAS4BNTQ2PwE+ATMyFh8BNz4BMzIWHwEeARUCZgMC/vUCBwQDBwP+9gMDAwMcAwcDBAcD4OECBwQDBwMdAgMCEgMHA/72AwMDAwEKAwcDBAcCHQMDAwPh4QMDAwMdAgcEAAAAAAEAAAAAAADPhPJbXw889QALBAAAAAAA1oytHwAAAADWjK0fAAD/twO7A24AAAAIAAIAAAAAAAAAAQAAA8D/wAAABAAAAAAAA7sAAQAAAAAAAAAAAAAAAAAAAAgEAAAAAAAAAAAAAAACAAAAA7cAAAQAAEUDJQA/ApIALAAAAAAACgAUAB4AhADCAR4BXAAAAAEAAAAIAEMAAgAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQAHAAAAAQAAAAAAAgAHAGAAAQAAAAAAAwAHADYAAQAAAAAABAAHAHUAAQAAAAAABQALABUAAQAAAAAABgAHAEsAAQAAAAAACgAaAIoAAwABBAkAAQAOAAcAAwABBAkAAgAOAGcAAwABBAkAAwAOAD0AAwABBAkABAAOAHwAAwABBAkABQAWACAAAwABBAkABgAOAFIAAwABBAkACgA0AKRpY29tb29uAGkAYwBvAG0AbwBvAG5WZXJzaW9uIDEuMABWAGUAcgBzAGkAbwBuACAAMQAuADBpY29tb29uAGkAYwBvAG0AbwBvAG5pY29tb29uAGkAYwBvAG0AbwBvAG5SZWd1bGFyAFIAZQBnAHUAbABhAHJpY29tb29uAGkAYwBvAG0AbwBvAG5Gb250IGdlbmVyYXRlZCBieSBJY29Nb29uLgBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAC4AAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"

/***/ }),

/***/ "../../../../ngx-select-dropdown/dist/assets/style.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../ngx-select-dropdown/dist/assets/style.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../css-loader/index.js??ref--9-1!../../../postcss-loader/index.js??postcss!./style.css", function() {
			var newContent = require("!!../../../css-loader/index.js??ref--9-1!../../../postcss-loader/index.js??postcss!./style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../paper-dashboard/assets/css/paper-dashboard.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../paper-dashboard/assets/css/paper-dashboard.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../css-loader/index.js??ref--9-1!../../../postcss-loader/index.js??postcss!./paper-dashboard.css", function() {
			var newContent = require("!!../../../css-loader/index.js??ref--9-1!../../../postcss-loader/index.js??postcss!./paper-dashboard.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../paper-dashboard/assets/css/themify-icons.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../paper-dashboard/assets/css/themify-icons.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../css-loader/index.js??ref--9-1!../../../postcss-loader/index.js??postcss!./themify-icons.css", function() {
			var newContent = require("!!../../../css-loader/index.js??ref--9-1!../../../postcss-loader/index.js??postcss!./themify-icons.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../paper-dashboard/assets/fonts/themify.eot":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "themify.2c454669bdf3aebf32a1.eot";

/***/ }),

/***/ "../../../../paper-dashboard/assets/fonts/themify.eot?-fvbane":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "themify.2c454669bdf3aebf32a1.eot";

/***/ }),

/***/ "../../../../paper-dashboard/assets/fonts/themify.svg?-fvbane":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "themify.9c8e96ecc7fa01e6ebcd.svg";

/***/ }),

/***/ "../../../../paper-dashboard/assets/fonts/themify.ttf?-fvbane":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "themify.e23a7dcaefbde4e74e26.ttf";

/***/ }),

/***/ "../../../../paper-dashboard/assets/fonts/themify.woff?-fvbane":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "themify.a1ecc3b826d01251eddd.woff";

/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "../../../../wfk-montserrat/fonts/montserrat-black-italic.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "montserrat-black-italic.5811e69d2c096d8ad480.ttf";

/***/ }),

/***/ "../../../../wfk-montserrat/fonts/montserrat-black.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "montserrat-black.054ffd1ba6a6c109b3cc.ttf";

/***/ }),

/***/ "../../../../wfk-montserrat/fonts/montserrat-bold-italic.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "montserrat-bold-italic.5de9b5743038b63008bf.ttf";

/***/ }),

/***/ "../../../../wfk-montserrat/fonts/montserrat-bold.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "montserrat-bold.a8de8ffe262db7e277de.ttf";

/***/ }),

/***/ "../../../../wfk-montserrat/fonts/montserrat-extra-bold.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "montserrat-extra-bold.5e81217f7e141ed72533.ttf";

/***/ }),

/***/ "../../../../wfk-montserrat/fonts/montserrat-extra-bolditalic.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "montserrat-extra-bolditalic.ae2ace44e8b700f5b0cb.ttf";

/***/ }),

/***/ "../../../../wfk-montserrat/fonts/montserrat-extra-light-italic.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "montserrat-extra-light-italic.d27df57dc92f77b422ff.ttf";

/***/ }),

/***/ "../../../../wfk-montserrat/fonts/montserrat-extra-light.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "montserrat-extra-light.b415dcea9b371c36eaf4.ttf";

/***/ }),

/***/ "../../../../wfk-montserrat/fonts/montserrat-italic.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "montserrat-italic.8777b44e5f19cd64f831.ttf";

/***/ }),

/***/ "../../../../wfk-montserrat/fonts/montserrat-light-italic.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "montserrat-light-italic.179eed84529839d2edf7.ttf";

/***/ }),

/***/ "../../../../wfk-montserrat/fonts/montserrat-light.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "montserrat-light.9e52b00d737492e337b2.ttf";

/***/ }),

/***/ "../../../../wfk-montserrat/fonts/montserrat-medium-italic.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "montserrat-medium-italic.b74481b36cffbfa8ed83.ttf";

/***/ }),

/***/ "../../../../wfk-montserrat/fonts/montserrat-medium.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "montserrat-medium.5f797490f806b3b22929.ttf";

/***/ }),

/***/ "../../../../wfk-montserrat/fonts/montserrat-regular.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "montserrat-regular.f7213526ec9296ff4342.ttf";

/***/ }),

/***/ "../../../../wfk-montserrat/fonts/montserrat-semi-bold.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "montserrat-semi-bold.31e34a4dc526ffb104e2.ttf";

/***/ }),

/***/ "../../../../wfk-montserrat/fonts/montserrat-semi-bolditalic.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "montserrat-semi-bolditalic.abfff4a0713e68d64a73.ttf";

/***/ }),

/***/ "../../../../wfk-montserrat/fonts/montserrat-thin-italic.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "montserrat-thin-italic.81fbc50801009bb840b3.ttf";

/***/ }),

/***/ "../../../../wfk-montserrat/fonts/montserrat-thin.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "montserrat-thin.bbf2ff5d3749f1449251.ttf";

/***/ }),

/***/ "../../../../wfk-montserrat/montserrat.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../wfk-montserrat/montserrat.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../css-loader/index.js??ref--9-1!../postcss-loader/index.js??postcss!./montserrat.css", function() {
			var newContent = require("!!../css-loader/index.js??ref--9-1!../postcss-loader/index.js??postcss!./montserrat.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("../../../../wfk-montserrat/montserrat.css");
__webpack_require__("../../../../@typopro/web-gidole/TypoPRO-Gidole.css");
__webpack_require__("../../../../paper-dashboard/assets/css/paper-dashboard.css");
__webpack_require__("../../../../paper-dashboard/assets/css/themify-icons.css");
__webpack_require__("../../../../ngx-select-dropdown/dist/assets/style.css");
module.exports = __webpack_require__("../../../../../src/styles.css");


/***/ })

},[0]);
//# sourceMappingURL=styles.bundle.js.map
"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Japanese 3017.ttf */ "./src/Japanese 3017.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./Japan.ttf */ "./src/Japan.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./background.jpg */ "./src/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/* MY FONTS */\n\n\n@font-face {\n    font-family: 'japan-title';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype');\n}\n\n@font-face {\n    font-family: 'japan';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('truetype');\n}\n\n/* BACKGROUND */\n\n:root {\n    background: linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    background-size: cover;\n    background-attachment: fixed;\n}\n\n/* CONTENT CONTAINER */\n\n#content {\n    height: 100vh;\n    display: grid;\n    grid-template-rows: 120px 1fr 50px;\n}\n\n/* HEADER SECTION */\n\n#header {\n    display: grid;\n    grid-template-columns: repeat(3, 1ft);\n    grid-template-rows: 2f 1f;\n    background-color: white;\n    box-shadow: 5px 5px 100px gray;\n    padding: 5px;\n}\n\n#restaurant-name {\n    grid-column-start: 1;\n    grid-column-end: 4;\n    font-family: 'japan-title', sans-serif;\n    font-size: 3em;\n    letter-spacing: 10px;\n    font-weight: bold;\n    text-align: center;\n    padding-top: 10px;\n    margin-bottom: 10px;\n}\n\n.nav-button {\n    position: relative;\n    height: 90px;\n    width: 130px;\n    background-color: white;\n    border: 4px solid red;\n    border-radius: 45px;\n    align-self: center;\n    justify-self: center;\n    color: red;\n    font-family: 'japan', sans-serif;\n    font-size: 2em;\n    text-align: center;\n    transition: border .3s;\n    z-index: 5;\n}\n\n.nav-button:hover {\n    cursor: pointer;\n    border: 8px solid red;\n    filter: brightness(90%);\n}\n\n.nav-button:active {\n    color: white;\n    background-color: red;\n}\n\n.focus {\n    color: white;\n    background-color: red;\n}\n\n/* MIDDLE SECTION */\n\n/* Home */\n\n#mid-section {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 60px 0px 30px 0px;\n    z-index: 1;\n}\n\n#mid-section-content {\n    width: 600px;\n    min-height: 550px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n    background-color: white;\n    border-radius: 50px;\n    padding: 20px;\n    gap: 20px;\n}\n\n.mid-section-title {\n    font-family: 'japan';\n    font-size: 3em;\n    margin-top: 20px;\n}\n\n.mid-section-content {\n    font-size: 1.5em;\n    text-align: center;\n}\n\n#chef-content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n}\n\n#chef-img {\n    height: 300px;\n    width: 300px;\n    border-radius: 150px;\n    object-fit: cover;\n    object-position: 50% 100%;\n}\n\n/* Menu */\n\n.item-name-price {\n    font-family: 'japan';\n    font-size: 2em;\n}\n\n.item-div {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    margin-top: 20px;\n}\n\n.item-img {\n    height: 300px;\n    width: 300px;\n    object-fit: cover;\n    border-radius: 150px;\n    align-self: center;\n}\n\n.item-description {\n    text-align: center;\n}\n\n/* FOOTER SECTION */\n\n#footer {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: white;\n    font-family: 'japan-title', sans-serif;\n    font-size: 1em;\n    letter-spacing: 5px;\n    box-shadow: 0px 0px 100px gray;\n}\n\na {\n    text-decoration: none;\n    color: red;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;CAGC;;AAED;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB;;AAEA,aAAa;;;AAGb;IACI,0BAA0B;IAC1B,+DAAkD;AACtD;;AAEA;IACI,oBAAoB;IACpB,+DAA0C;AAC9C;;AAEA,eAAe;;AAEf;IACI,gHAAgG;IAChG,sBAAsB;IACtB,4BAA4B;AAChC;;AAEA,sBAAsB;;AAEtB;IACI,aAAa;IACb,aAAa;IACb,kCAAkC;AACtC;;AAEA,mBAAmB;;AAEnB;IACI,aAAa;IACb,qCAAqC;IACrC,yBAAyB;IACzB,uBAAuB;IACvB,8BAA8B;IAC9B,YAAY;AAChB;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,sCAAsC;IACtC,cAAc;IACd,oBAAoB;IACpB,iBAAiB;IACjB,kBAAkB;IAClB,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,YAAY;IACZ,uBAAuB;IACvB,qBAAqB;IACrB,mBAAmB;IACnB,kBAAkB;IAClB,oBAAoB;IACpB,UAAU;IACV,gCAAgC;IAChC,cAAc;IACd,kBAAkB;IAClB,sBAAsB;IACtB,UAAU;AACd;;AAEA;IACI,eAAe;IACf,qBAAqB;IACrB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,qBAAqB;AACzB;;AAEA;IACI,YAAY;IACZ,qBAAqB;AACzB;;AAEA,mBAAmB;;AAEnB,SAAS;;AAET;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,0BAA0B;IAC1B,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,6BAA6B;IAC7B,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;IACb,SAAS;AACb;;AAEA;IACI,oBAAoB;IACpB,cAAc;IACd,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,oBAAoB;IACpB,iBAAiB;IACjB,yBAAyB;AAC7B;;AAEA,SAAS;;AAET;IACI,oBAAoB;IACpB,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,iBAAiB;IACjB,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA,mBAAmB;;AAEnB;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,uBAAuB;IACvB,sCAAsC;IACtC,cAAc;IACd,mBAAmB;IACnB,8BAA8B;AAClC;;AAEA;IACI,qBAAqB;IACrB,UAAU;AACd","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/* MY FONTS */\n\n\n@font-face {\n    font-family: 'japan-title';\n    src: url('./Japanese 3017.ttf') format('truetype');\n}\n\n@font-face {\n    font-family: 'japan';\n    src: url('./Japan.ttf') format('truetype');\n}\n\n/* BACKGROUND */\n\n:root {\n    background: linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url('./background.jpg');\n    background-size: cover;\n    background-attachment: fixed;\n}\n\n/* CONTENT CONTAINER */\n\n#content {\n    height: 100vh;\n    display: grid;\n    grid-template-rows: 120px 1fr 50px;\n}\n\n/* HEADER SECTION */\n\n#header {\n    display: grid;\n    grid-template-columns: repeat(3, 1ft);\n    grid-template-rows: 2f 1f;\n    background-color: white;\n    box-shadow: 5px 5px 100px gray;\n    padding: 5px;\n}\n\n#restaurant-name {\n    grid-column-start: 1;\n    grid-column-end: 4;\n    font-family: 'japan-title', sans-serif;\n    font-size: 3em;\n    letter-spacing: 10px;\n    font-weight: bold;\n    text-align: center;\n    padding-top: 10px;\n    margin-bottom: 10px;\n}\n\n.nav-button {\n    position: relative;\n    height: 90px;\n    width: 130px;\n    background-color: white;\n    border: 4px solid red;\n    border-radius: 45px;\n    align-self: center;\n    justify-self: center;\n    color: red;\n    font-family: 'japan', sans-serif;\n    font-size: 2em;\n    text-align: center;\n    transition: border .3s;\n    z-index: 5;\n}\n\n.nav-button:hover {\n    cursor: pointer;\n    border: 8px solid red;\n    filter: brightness(90%);\n}\n\n.nav-button:active {\n    color: white;\n    background-color: red;\n}\n\n.focus {\n    color: white;\n    background-color: red;\n}\n\n/* MIDDLE SECTION */\n\n/* Home */\n\n#mid-section {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 60px 0px 30px 0px;\n    z-index: 1;\n}\n\n#mid-section-content {\n    width: 600px;\n    min-height: 550px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n    background-color: white;\n    border-radius: 50px;\n    padding: 20px;\n    gap: 20px;\n}\n\n.mid-section-title {\n    font-family: 'japan';\n    font-size: 3em;\n    margin-top: 20px;\n}\n\n.mid-section-content {\n    font-size: 1.5em;\n    text-align: center;\n}\n\n#chef-content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n}\n\n#chef-img {\n    height: 300px;\n    width: 300px;\n    border-radius: 150px;\n    object-fit: cover;\n    object-position: 50% 100%;\n}\n\n/* Menu */\n\n.item-name-price {\n    font-family: 'japan';\n    font-size: 2em;\n}\n\n.item-div {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    margin-top: 20px;\n}\n\n.item-img {\n    height: 300px;\n    width: 300px;\n    object-fit: cover;\n    border-radius: 150px;\n    align-self: center;\n}\n\n.item-description {\n    text-align: center;\n}\n\n/* FOOTER SECTION */\n\n#footer {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: white;\n    font-family: 'japan-title', sans-serif;\n    font-size: 1em;\n    letter-spacing: 5px;\n    box-shadow: 0px 0px 100px gray;\n}\n\na {\n    text-decoration: none;\n    color: red;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const loadContact = () => {
    console.log('contact.js was called!');

    const midSectionContent = document.getElementById('mid-section-content');
    while (midSectionContent.hasChildNodes()) {
        midSectionContent.firstChild.remove();
    }

    const phoneTitle = document.createElement('h2');
    phoneTitle.innerHTML = '――― Phone ―――';
    phoneTitle.className = "mid-section-title";

    const phoneText = document.createElement('p');
    phoneText.innerHTML = '777-333-1337';
    phoneText.className = "mid-section-content";

    midSectionContent.appendChild(phoneTitle);
    midSectionContent.appendChild(phoneText);

    const emailTitle = document.createElement('h2');
    emailTitle.innerHTML = '――― Email ―――';
    emailTitle.className = "mid-section-title";

    const emailText = document.createElement('p');
    emailText.innerHTML = 'contact@samuraisushi.com';
    emailText.className = "mid-section-content";

    midSectionContent.appendChild(emailTitle);
    midSectionContent.appendChild(emailText);

    const socialTitle = document.createElement('h2');
    socialTitle.innerHTML = '――― Social media ―――';
    socialTitle.className = "mid-section-title";

    const socialText = document.createElement('p');
    socialText.innerHTML = 'Visit our social media pages!';
    socialText.className = "mid-section-content";
    
    midSectionContent.appendChild(socialTitle);
    midSectionContent.appendChild(socialText);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);

/***/ }),

/***/ "./src/focusBtn.js":
/*!*************************!*\
  !*** ./src/focusBtn.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const focusBtn = (buttonToFocus) => {
   
    if (!buttonToFocus.classList.contains('focus')){
        
        buttonToFocus.classList.add('focus');

        const btns = document.getElementsByClassName('nav-button');

        for (let i = 0; i < btns.length; i++) {
            if (btns[i] !== buttonToFocus) {
                if (btns[i].classList.contains('focus')) {
                    btns[i].classList.remove('focus')
                }
            }
        }
    }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (focusBtn);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _chef_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chef.jpg */ "./src/chef.jpg");


const loadHome = () => {
    console.log('home.js was called!');

    function _buildHome(midSectionContent) {
        const aboutTitle = document.createElement('h2');
        aboutTitle.innerHTML = '――― About ―――';
        aboutTitle.className = "mid-section-title";

        const aboutText = document.createElement('p');
        aboutText.innerHTML = 'Samurai Sushi is a traditional japanese restaurant specialized on sushi dishes';
        aboutText.className = "mid-section-content";

        const chefTitle = document.createElement('h2');
        chefTitle.innerHTML = '――― Chef ―――';
        chefTitle.className = "mid-section-title";

        const chefDiv = document.createElement('div');
        chefDiv.id = "chef-content";

        const chefImg = document.createElement('img');
        chefImg.id = 'chef-img';
        chefImg.setAttribute('src', _chef_jpg__WEBPACK_IMPORTED_MODULE_0__);

        const chefText = document.createElement('p');
        chefText.innerHTML = 'Sushi Master Oda Nobunaga is a renowned sushi specialist winner of many culinary prizes';
        chefText.className = "mid-section-content";

        midSectionContent.appendChild(aboutTitle);
        midSectionContent.appendChild(aboutText);
        midSectionContent.appendChild(chefTitle);
        midSectionContent.appendChild(chefDiv);
        chefDiv.appendChild(chefImg);
        chefDiv.appendChild(chefText);
    }

    if (document.getElementById('mid-section-content')) {
        const midSectionContent = document.getElementById('mid-section-content');

        while (midSectionContent.hasChildNodes()) {
            midSectionContent.firstChild.remove();
        }

        _buildHome(midSectionContent);
    } else {
        const midSectionContent = document.createElement('div');
        midSectionContent.id = "mid-section-content";

        const midSection = document.getElementById('mid-section');

        midSection.appendChild(midSectionContent);

        _buildHome(midSectionContent);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-load */ "./src/page-load.js");
/* harmony import */ var _focusBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./focusBtn */ "./src/focusBtn.js");







console.log("index.js was called successfully");

(0,_page_load__WEBPACK_IMPORTED_MODULE_4__["default"])();
(0,_home__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_focusBtn__WEBPACK_IMPORTED_MODULE_5__["default"])(document.getElementById('home-btn'));

const homeBtn = document.getElementById('home-btn');
homeBtn.addEventListener('click', (e) => {
    (0,_home__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_focusBtn__WEBPACK_IMPORTED_MODULE_5__["default"])(e.target)
});

const menuBtn = document.getElementById('menu-btn');
menuBtn.addEventListener('click', (e) => {
    (0,_menu__WEBPACK_IMPORTED_MODULE_3__["default"])();
    (0,_focusBtn__WEBPACK_IMPORTED_MODULE_5__["default"])(e.target)
});

const contactBtn = document.getElementById('contact-btn');
contactBtn.addEventListener('click', (e) => {
    (0,_contact__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_focusBtn__WEBPACK_IMPORTED_MODULE_5__["default"])(e.target)
});

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nigiri_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nigiri.jpg */ "./src/nigiri.jpg");
/* harmony import */ var _uramaki_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uramaki.jpg */ "./src/uramaki.jpg");
/* harmony import */ var _temaki_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./temaki.jpeg */ "./src/temaki.jpeg");
/* harmony import */ var _sake_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sake.jpg */ "./src/sake.jpg");





const loadMenu = () => {
    console.log('menu.js was called!');

    //Menu items array

    const menuArray = [
        {
            type: 'sushi',
            name: 'Kami Nigiri',
            description: 'Delicious nigiri made with fresh fish and top ingredients',
            price: '$20',
            imgPath: _nigiri_jpg__WEBPACK_IMPORTED_MODULE_0__
        },
        {
            type: 'sushi',
            name: 'Salmon Uramaki',
            description: 'Flavorful sushi dish made with salmon and cream cheese',
            price: '$12',
            imgPath: _uramaki_jpg__WEBPACK_IMPORTED_MODULE_1__
        },
        {
            type: 'temaki',
            name: 'Salmon Temaki',
            description: 'Amazing salmon and cream cheese temaki',
            price: '$30',
            imgPath: _temaki_jpeg__WEBPACK_IMPORTED_MODULE_2__
        },
        {
            type: 'sake',
            name: 'Kojima Sake',
            description: 'High quality original sake made in Japan',
            price: '$100',
            imgPath: _sake_jpg__WEBPACK_IMPORTED_MODULE_3__
        },
    ];

    function _buildItems(type) {

        menuArray.forEach( (item) => {
            if(item.type === type){
                const itemDiv = document.createElement('div');
                itemDiv.className = 'item-div';
    
                const itemNameAndPrice = document.createElement('h3');
                itemNameAndPrice.className = 'item-name-price';
                itemNameAndPrice.innerHTML = `${item.name}   ${item.price}`

                const itemImg = document.createElement('img');
                itemImg.className = 'item-img';
                itemImg.setAttribute('src', item.imgPath)

                const itemDescription = document.createElement('p');
                itemDescription.className = 'item-description';
                itemDescription.innerHTML = item.description;

                itemDiv.appendChild(itemNameAndPrice);
                itemDiv.appendChild(itemImg);
                itemDiv.appendChild(itemDescription);
                midSectionContent.appendChild(itemDiv);
    
            }
        });

    }

    const midSectionContent = document.getElementById('mid-section-content');
    while (midSectionContent.hasChildNodes()) {
        midSectionContent.firstChild.remove();
    }

    const sushiTitle = document.createElement('h2');
    sushiTitle.innerHTML = '――― Sushi ―――';
    sushiTitle.className = "mid-section-title";

    midSectionContent.appendChild(sushiTitle);
    _buildItems('sushi');

    const temakiTitle = document.createElement('h2');
    temakiTitle.innerHTML = '――― Temaki ―――';
    temakiTitle.className = "mid-section-title";

    midSectionContent.appendChild(temakiTitle);
    _buildItems('temaki');

    const sakeTitle = document.createElement('h2');
    sakeTitle.innerHTML = '――― Sake ―――';
    sakeTitle.className = "mid-section-title";
    
    midSectionContent.appendChild(sakeTitle);
    _buildItems('sake');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const loadPage = () => {
    console.log('page-load.js was called!');
    //Create main content div
    const content = document.createElement('div');
    content.id = "content";

    document.body.appendChild(content);

    //Create header, mid section and footer divs
    const header = document.createElement('div');
    header.id = "header";

    const midSection = document.createElement('div');
    midSection.id = "mid-section";

    const footer = document.createElement('div');
    footer.id = "footer";

    content.appendChild(header);
    content.appendChild(midSection);
    content.appendChild(footer);

    //Create header elements
    const title = document.createElement('h1');
    title.innerHTML = "Samurai Sushi";
    title.id = "restaurant-name";

    const homeBtn = document.createElement('button');
    homeBtn.innerHTML = "Home";
    homeBtn.id = "home-btn";
    homeBtn.className = "nav-button";

    const menuBtn = document.createElement('button');
    menuBtn.innerHTML = "Menu";
    menuBtn.id = "menu-btn";
    menuBtn.className = "nav-button";

    const contactBtn = document.createElement('button');
    contactBtn.innerHTML = "Contact";
    contactBtn.id = "contact-btn";
    contactBtn.className = "nav-button";

    header.appendChild(title);
    header.appendChild(homeBtn);
    header.appendChild(menuBtn);
    header.appendChild(contactBtn);

    //Create footer elements
    const footerText = document.createElement('p');
    footerText.id = "footer-text";
    footerText.innerHTML = "Made by ";

    const footerLink = document.createElement('a');
    footerLink.setAttribute("href", "https://github.com/matheuspl92");
    footerLink.innerHTML = "matheuspl92";

    footerText.appendChild(footerLink);
    footer.appendChild(footerText);

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);

/***/ }),

/***/ "./src/Japan.ttf":
/*!***********************!*\
  !*** ./src/Japan.ttf ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7ca986b9c5d186c326e7.ttf";

/***/ }),

/***/ "./src/Japanese 3017.ttf":
/*!*******************************!*\
  !*** ./src/Japanese 3017.ttf ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2581cde6051ff37cd5ae.ttf";

/***/ }),

/***/ "./src/background.jpg":
/*!****************************!*\
  !*** ./src/background.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d3c6faeb0482739ccdbd.jpg";

/***/ }),

/***/ "./src/chef.jpg":
/*!**********************!*\
  !*** ./src/chef.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b759eea26c065650a0d3.jpg";

/***/ }),

/***/ "./src/nigiri.jpg":
/*!************************!*\
  !*** ./src/nigiri.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "05832e1c716c9e0d178c.jpg";

/***/ }),

/***/ "./src/sake.jpg":
/*!**********************!*\
  !*** ./src/sake.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "23edd3b89e1291138bb7.jpg";

/***/ }),

/***/ "./src/temaki.jpeg":
/*!*************************!*\
  !*** ./src/temaki.jpeg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "89be9aa67406e9fce906.jpeg";

/***/ }),

/***/ "./src/uramaki.jpg":
/*!*************************!*\
  !*** ./src/uramaki.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "882bcb2718c59eb319f0.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFFBQVE7Ozs7Ozs7Ozs7Ozs7O0FDakd2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLGlFQUFlLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZm9jdXNCdG4uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlLWxvYWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vSmFwYW5lc2UgMzAxNy50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL0phcGFuLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuLyogTVkgRk9OVFMgKi9cXG5cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdqYXBhbi10aXRsZSc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ2phcGFuJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG59XFxuXFxuLyogQkFDS0dST1VORCAqL1xcblxcbjpyb290IHtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LDI1NSwyNTUsLjUpLCByZ2JhKDI1NSwyNTUsMjU1LC41KSksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxufVxcblxcbi8qIENPTlRFTlQgQ09OVEFJTkVSICovXFxuXFxuI2NvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEyMHB4IDFmciA1MHB4O1xcbn1cXG5cXG4vKiBIRUFERVIgU0VDVElPTiAqL1xcblxcbiNoZWFkZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnQpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmIDFmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAxMDBweCBncmF5O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbiNyZXN0YXVyYW50LW5hbWUge1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiA0O1xcbiAgICBmb250LWZhbWlseTogJ2phcGFuLXRpdGxlJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAzZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiAxMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLm5hdi1idXR0b24ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGhlaWdodDogOTBweDtcXG4gICAgd2lkdGg6IDEzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgcmVkO1xcbiAgICBib3JkZXItcmFkaXVzOiA0NXB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBmb250LWZhbWlseTogJ2phcGFuJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyIC4zcztcXG4gICAgei1pbmRleDogNTtcXG59XFxuXFxuLm5hdi1idXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogOHB4IHNvbGlkIHJlZDtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDkwJSk7XFxufVxcblxcbi5uYXYtYnV0dG9uOmFjdGl2ZSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uZm9jdXMge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLyogTUlERExFIFNFQ1RJT04gKi9cXG5cXG4vKiBIb21lICovXFxuXFxuI21pZC1zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDYwcHggMHB4IDMwcHggMHB4O1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4jbWlkLXNlY3Rpb24tY29udGVudCB7XFxuICAgIHdpZHRoOiA2MDBweDtcXG4gICAgbWluLWhlaWdodDogNTUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4ubWlkLXNlY3Rpb24tdGl0bGUge1xcbiAgICBmb250LWZhbWlseTogJ2phcGFuJztcXG4gICAgZm9udC1zaXplOiAzZW07XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbi5taWQtc2VjdGlvbi1jb250ZW50IHtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jY2hlZi1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4jY2hlZi1pbWcge1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1MHB4O1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgb2JqZWN0LXBvc2l0aW9uOiA1MCUgMTAwJTtcXG59XFxuXFxuLyogTWVudSAqL1xcblxcbi5pdGVtLW5hbWUtcHJpY2Uge1xcbiAgICBmb250LWZhbWlseTogJ2phcGFuJztcXG4gICAgZm9udC1zaXplOiAyZW07XFxufVxcblxcbi5pdGVtLWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTVweDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLml0ZW0taW1nIHtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTUwcHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLml0ZW0tZGVzY3JpcHRpb24ge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi8qIEZPT1RFUiBTRUNUSU9OICovXFxuXFxuI2Zvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdqYXBhbi10aXRsZScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwMHB4IGdyYXk7XFxufVxcblxcbmEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiByZWQ7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztDQUdDOztBQUVEOzs7Ozs7Ozs7Ozs7O0NBYUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtDQUNmLGFBQWE7Q0FDYix3QkFBd0I7QUFDekI7QUFDQSxnREFBZ0Q7QUFDaEQ7O0NBRUMsY0FBYztBQUNmO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsWUFBWTtBQUNiO0FBQ0E7O0NBRUMsV0FBVztDQUNYLGFBQWE7QUFDZDtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLGlCQUFpQjtBQUNsQjs7QUFFQSxhQUFhOzs7QUFHYjtJQUNJLDBCQUEwQjtJQUMxQiwrREFBa0Q7QUFDdEQ7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsK0RBQTBDO0FBQzlDOztBQUVBLGVBQWU7O0FBRWY7SUFDSSxnSEFBZ0c7SUFDaEcsc0JBQXNCO0lBQ3RCLDRCQUE0QjtBQUNoQzs7QUFFQSxzQkFBc0I7O0FBRXRCO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixrQ0FBa0M7QUFDdEM7O0FBRUEsbUJBQW1COztBQUVuQjtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2Qiw4QkFBOEI7SUFDOUIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsc0NBQXNDO0lBQ3RDLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixVQUFVO0lBQ1YsZ0NBQWdDO0lBQ2hDLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7QUFDekI7O0FBRUEsbUJBQW1COztBQUVuQixTQUFTOztBQUVUO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLDBCQUEwQjtJQUMxQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCOztBQUVBLFNBQVM7O0FBRVQ7SUFDSSxvQkFBb0I7SUFDcEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUEsbUJBQW1COztBQUVuQjtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixzQ0FBc0M7SUFDdEMsY0FBYztJQUNkLG1CQUFtQjtJQUNuQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsVUFBVTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuLyogTVkgRk9OVFMgKi9cXG5cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdqYXBhbi10aXRsZSc7XFxuICAgIHNyYzogdXJsKCcuL0phcGFuZXNlIDMwMTcudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdqYXBhbic7XFxuICAgIHNyYzogdXJsKCcuL0phcGFuLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG59XFxuXFxuLyogQkFDS0dST1VORCAqL1xcblxcbjpyb290IHtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LDI1NSwyNTUsLjUpLCByZ2JhKDI1NSwyNTUsMjU1LC41KSksIHVybCgnLi9iYWNrZ3JvdW5kLmpwZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbn1cXG5cXG4vKiBDT05URU5UIENPTlRBSU5FUiAqL1xcblxcbiNjb250ZW50IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMjBweCAxZnIgNTBweDtcXG59XFxuXFxuLyogSEVBREVSIFNFQ1RJT04gKi9cXG5cXG4jaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZ0KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZiAxZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTAwcHggZ3JheTtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4jcmVzdGF1cmFudC1uYW1lIHtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogNDtcXG4gICAgZm9udC1mYW1pbHk6ICdqYXBhbi10aXRsZScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogM2VtO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMTBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5uYXYtYnV0dG9uIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBoZWlnaHQ6IDkwcHg7XFxuICAgIHdpZHRoOiAxMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIHJlZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNDVweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgZm9udC1mYW1pbHk6ICdqYXBhbicsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGJvcmRlciAuM3M7XFxuICAgIHotaW5kZXg6IDU7XFxufVxcblxcbi5uYXYtYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IDhweCBzb2xpZCByZWQ7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg5MCUpO1xcbn1cXG5cXG4ubmF2LWJ1dHRvbjphY3RpdmUge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmZvY3VzIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi8qIE1JRERMRSBTRUNUSU9OICovXFxuXFxuLyogSG9tZSAqL1xcblxcbiNtaWQtc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA2MHB4IDBweCAzMHB4IDBweDtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuI21pZC1zZWN0aW9uLWNvbnRlbnQge1xcbiAgICB3aWR0aDogNjAwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDU1MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLm1pZC1zZWN0aW9uLXRpdGxlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdqYXBhbic7XFxuICAgIGZvbnQtc2l6ZTogM2VtO1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4ubWlkLXNlY3Rpb24tY29udGVudCB7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2NoZWYtY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuI2NoZWYtaW1nIHtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNTBweDtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIG9iamVjdC1wb3NpdGlvbjogNTAlIDEwMCU7XFxufVxcblxcbi8qIE1lbnUgKi9cXG5cXG4uaXRlbS1uYW1lLXByaWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdqYXBhbic7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbn1cXG5cXG4uaXRlbS1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbi5pdGVtLWltZyB7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1MHB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5pdGVtLWRlc2NyaXB0aW9uIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4vKiBGT09URVIgU0VDVElPTiAqL1xcblxcbiNmb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnamFwYW4tdGl0bGUnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMDBweCBncmF5O1xcbn1cXG5cXG5hIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogcmVkO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgbG9hZENvbnRhY3QgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2NvbnRhY3QuanMgd2FzIGNhbGxlZCEnKTtcblxuICAgIGNvbnN0IG1pZFNlY3Rpb25Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21pZC1zZWN0aW9uLWNvbnRlbnQnKTtcbiAgICB3aGlsZSAobWlkU2VjdGlvbkNvbnRlbnQuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICAgIG1pZFNlY3Rpb25Db250ZW50LmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgcGhvbmVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgcGhvbmVUaXRsZS5pbm5lckhUTUwgPSAn4oCV4oCV4oCVIFBob25lIOKAleKAleKAlSc7XG4gICAgcGhvbmVUaXRsZS5jbGFzc05hbWUgPSBcIm1pZC1zZWN0aW9uLXRpdGxlXCI7XG5cbiAgICBjb25zdCBwaG9uZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGhvbmVUZXh0LmlubmVySFRNTCA9ICc3NzctMzMzLTEzMzcnO1xuICAgIHBob25lVGV4dC5jbGFzc05hbWUgPSBcIm1pZC1zZWN0aW9uLWNvbnRlbnRcIjtcblxuICAgIG1pZFNlY3Rpb25Db250ZW50LmFwcGVuZENoaWxkKHBob25lVGl0bGUpO1xuICAgIG1pZFNlY3Rpb25Db250ZW50LmFwcGVuZENoaWxkKHBob25lVGV4dCk7XG5cbiAgICBjb25zdCBlbWFpbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBlbWFpbFRpdGxlLmlubmVySFRNTCA9ICfigJXigJXigJUgRW1haWwg4oCV4oCV4oCVJztcbiAgICBlbWFpbFRpdGxlLmNsYXNzTmFtZSA9IFwibWlkLXNlY3Rpb24tdGl0bGVcIjtcblxuICAgIGNvbnN0IGVtYWlsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBlbWFpbFRleHQuaW5uZXJIVE1MID0gJ2NvbnRhY3RAc2FtdXJhaXN1c2hpLmNvbSc7XG4gICAgZW1haWxUZXh0LmNsYXNzTmFtZSA9IFwibWlkLXNlY3Rpb24tY29udGVudFwiO1xuXG4gICAgbWlkU2VjdGlvbkNvbnRlbnQuYXBwZW5kQ2hpbGQoZW1haWxUaXRsZSk7XG4gICAgbWlkU2VjdGlvbkNvbnRlbnQuYXBwZW5kQ2hpbGQoZW1haWxUZXh0KTtcblxuICAgIGNvbnN0IHNvY2lhbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBzb2NpYWxUaXRsZS5pbm5lckhUTUwgPSAn4oCV4oCV4oCVIFNvY2lhbCBtZWRpYSDigJXigJXigJUnO1xuICAgIHNvY2lhbFRpdGxlLmNsYXNzTmFtZSA9IFwibWlkLXNlY3Rpb24tdGl0bGVcIjtcblxuICAgIGNvbnN0IHNvY2lhbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgc29jaWFsVGV4dC5pbm5lckhUTUwgPSAnVmlzaXQgb3VyIHNvY2lhbCBtZWRpYSBwYWdlcyEnO1xuICAgIHNvY2lhbFRleHQuY2xhc3NOYW1lID0gXCJtaWQtc2VjdGlvbi1jb250ZW50XCI7XG4gICAgXG4gICAgbWlkU2VjdGlvbkNvbnRlbnQuYXBwZW5kQ2hpbGQoc29jaWFsVGl0bGUpO1xuICAgIG1pZFNlY3Rpb25Db250ZW50LmFwcGVuZENoaWxkKHNvY2lhbFRleHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkQ29udGFjdDsiLCJjb25zdCBmb2N1c0J0biA9IChidXR0b25Ub0ZvY3VzKSA9PiB7XG4gICBcbiAgICBpZiAoIWJ1dHRvblRvRm9jdXMuY2xhc3NMaXN0LmNvbnRhaW5zKCdmb2N1cycpKXtcbiAgICAgICAgXG4gICAgICAgIGJ1dHRvblRvRm9jdXMuY2xhc3NMaXN0LmFkZCgnZm9jdXMnKTtcblxuICAgICAgICBjb25zdCBidG5zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmF2LWJ1dHRvbicpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnRucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGJ0bnNbaV0gIT09IGJ1dHRvblRvRm9jdXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoYnRuc1tpXS5jbGFzc0xpc3QuY29udGFpbnMoJ2ZvY3VzJykpIHtcbiAgICAgICAgICAgICAgICAgICAgYnRuc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdmb2N1cycpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvY3VzQnRuOyIsImltcG9ydCBJbWFnZUNoZWYgZnJvbSAnLi9jaGVmLmpwZydcblxuY29uc3QgbG9hZEhvbWUgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2hvbWUuanMgd2FzIGNhbGxlZCEnKTtcblxuICAgIGZ1bmN0aW9uIF9idWlsZEhvbWUobWlkU2VjdGlvbkNvbnRlbnQpIHtcbiAgICAgICAgY29uc3QgYWJvdXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIGFib3V0VGl0bGUuaW5uZXJIVE1MID0gJ+KAleKAleKAlSBBYm91dCDigJXigJXigJUnO1xuICAgICAgICBhYm91dFRpdGxlLmNsYXNzTmFtZSA9IFwibWlkLXNlY3Rpb24tdGl0bGVcIjtcblxuICAgICAgICBjb25zdCBhYm91dFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGFib3V0VGV4dC5pbm5lckhUTUwgPSAnU2FtdXJhaSBTdXNoaSBpcyBhIHRyYWRpdGlvbmFsIGphcGFuZXNlIHJlc3RhdXJhbnQgc3BlY2lhbGl6ZWQgb24gc3VzaGkgZGlzaGVzJztcbiAgICAgICAgYWJvdXRUZXh0LmNsYXNzTmFtZSA9IFwibWlkLXNlY3Rpb24tY29udGVudFwiO1xuXG4gICAgICAgIGNvbnN0IGNoZWZUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIGNoZWZUaXRsZS5pbm5lckhUTUwgPSAn4oCV4oCV4oCVIENoZWYg4oCV4oCV4oCVJztcbiAgICAgICAgY2hlZlRpdGxlLmNsYXNzTmFtZSA9IFwibWlkLXNlY3Rpb24tdGl0bGVcIjtcblxuICAgICAgICBjb25zdCBjaGVmRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNoZWZEaXYuaWQgPSBcImNoZWYtY29udGVudFwiO1xuXG4gICAgICAgIGNvbnN0IGNoZWZJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgY2hlZkltZy5pZCA9ICdjaGVmLWltZyc7XG4gICAgICAgIGNoZWZJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBJbWFnZUNoZWYpO1xuXG4gICAgICAgIGNvbnN0IGNoZWZUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjaGVmVGV4dC5pbm5lckhUTUwgPSAnU3VzaGkgTWFzdGVyIE9kYSBOb2J1bmFnYSBpcyBhIHJlbm93bmVkIHN1c2hpIHNwZWNpYWxpc3Qgd2lubmVyIG9mIG1hbnkgY3VsaW5hcnkgcHJpemVzJztcbiAgICAgICAgY2hlZlRleHQuY2xhc3NOYW1lID0gXCJtaWQtc2VjdGlvbi1jb250ZW50XCI7XG5cbiAgICAgICAgbWlkU2VjdGlvbkNvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXRUaXRsZSk7XG4gICAgICAgIG1pZFNlY3Rpb25Db250ZW50LmFwcGVuZENoaWxkKGFib3V0VGV4dCk7XG4gICAgICAgIG1pZFNlY3Rpb25Db250ZW50LmFwcGVuZENoaWxkKGNoZWZUaXRsZSk7XG4gICAgICAgIG1pZFNlY3Rpb25Db250ZW50LmFwcGVuZENoaWxkKGNoZWZEaXYpO1xuICAgICAgICBjaGVmRGl2LmFwcGVuZENoaWxkKGNoZWZJbWcpO1xuICAgICAgICBjaGVmRGl2LmFwcGVuZENoaWxkKGNoZWZUZXh0KTtcbiAgICB9XG5cbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21pZC1zZWN0aW9uLWNvbnRlbnQnKSkge1xuICAgICAgICBjb25zdCBtaWRTZWN0aW9uQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtaWQtc2VjdGlvbi1jb250ZW50Jyk7XG5cbiAgICAgICAgd2hpbGUgKG1pZFNlY3Rpb25Db250ZW50Lmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgICAgICAgbWlkU2VjdGlvbkNvbnRlbnQuZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9idWlsZEhvbWUobWlkU2VjdGlvbkNvbnRlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG1pZFNlY3Rpb25Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1pZFNlY3Rpb25Db250ZW50LmlkID0gXCJtaWQtc2VjdGlvbi1jb250ZW50XCI7XG5cbiAgICAgICAgY29uc3QgbWlkU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtaWQtc2VjdGlvbicpO1xuXG4gICAgICAgIG1pZFNlY3Rpb24uYXBwZW5kQ2hpbGQobWlkU2VjdGlvbkNvbnRlbnQpO1xuXG4gICAgICAgIF9idWlsZEhvbWUobWlkU2VjdGlvbkNvbnRlbnQpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZEhvbWU7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgbG9hZENvbnRhY3QgZnJvbSAnLi9jb250YWN0JztcbmltcG9ydCBsb2FkSG9tZSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IGxvYWRNZW51IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgbG9hZFBhZ2UgZnJvbSAnLi9wYWdlLWxvYWQnO1xuaW1wb3J0IGZvY3VzQnRuIGZyb20gJy4vZm9jdXNCdG4nO1xuXG5jb25zb2xlLmxvZyhcImluZGV4LmpzIHdhcyBjYWxsZWQgc3VjY2Vzc2Z1bGx5XCIpO1xuXG5sb2FkUGFnZSgpO1xubG9hZEhvbWUoKTtcbmZvY3VzQnRuKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lLWJ0bicpKTtcblxuY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lLWJ0bicpO1xuaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgbG9hZEhvbWUoKTtcbiAgICBmb2N1c0J0bihlLnRhcmdldClcbn0pO1xuXG5jb25zdCBtZW51QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtYnRuJyk7XG5tZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBsb2FkTWVudSgpO1xuICAgIGZvY3VzQnRuKGUudGFyZ2V0KVxufSk7XG5cbmNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdC1idG4nKTtcbmNvbnRhY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGxvYWRDb250YWN0KCk7XG4gICAgZm9jdXNCdG4oZS50YXJnZXQpXG59KTsiLCJpbXBvcnQgSW1hZ2VOaWdpcmkgZnJvbSAnLi9uaWdpcmkuanBnJ1xuaW1wb3J0IEltYWdlVXJhbWFraSBmcm9tICcuL3VyYW1ha2kuanBnJ1xuaW1wb3J0IEltYWdlVGVtYWtpIGZyb20gJy4vdGVtYWtpLmpwZWcnXG5pbXBvcnQgSW1hZ2VTYWtlIGZyb20gJy4vc2FrZS5qcGcnXG5cbmNvbnN0IGxvYWRNZW51ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdtZW51LmpzIHdhcyBjYWxsZWQhJyk7XG5cbiAgICAvL01lbnUgaXRlbXMgYXJyYXlcblxuICAgIGNvbnN0IG1lbnVBcnJheSA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ3N1c2hpJyxcbiAgICAgICAgICAgIG5hbWU6ICdLYW1pIE5pZ2lyaScsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0RlbGljaW91cyBuaWdpcmkgbWFkZSB3aXRoIGZyZXNoIGZpc2ggYW5kIHRvcCBpbmdyZWRpZW50cycsXG4gICAgICAgICAgICBwcmljZTogJyQyMCcsXG4gICAgICAgICAgICBpbWdQYXRoOiBJbWFnZU5pZ2lyaVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnc3VzaGknLFxuICAgICAgICAgICAgbmFtZTogJ1NhbG1vbiBVcmFtYWtpJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRmxhdm9yZnVsIHN1c2hpIGRpc2ggbWFkZSB3aXRoIHNhbG1vbiBhbmQgY3JlYW0gY2hlZXNlJyxcbiAgICAgICAgICAgIHByaWNlOiAnJDEyJyxcbiAgICAgICAgICAgIGltZ1BhdGg6IEltYWdlVXJhbWFraVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAndGVtYWtpJyxcbiAgICAgICAgICAgIG5hbWU6ICdTYWxtb24gVGVtYWtpJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQW1hemluZyBzYWxtb24gYW5kIGNyZWFtIGNoZWVzZSB0ZW1ha2knLFxuICAgICAgICAgICAgcHJpY2U6ICckMzAnLFxuICAgICAgICAgICAgaW1nUGF0aDogSW1hZ2VUZW1ha2lcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ3Nha2UnLFxuICAgICAgICAgICAgbmFtZTogJ0tvamltYSBTYWtlJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnSGlnaCBxdWFsaXR5IG9yaWdpbmFsIHNha2UgbWFkZSBpbiBKYXBhbicsXG4gICAgICAgICAgICBwcmljZTogJyQxMDAnLFxuICAgICAgICAgICAgaW1nUGF0aDogSW1hZ2VTYWtlXG4gICAgICAgIH0sXG4gICAgXTtcblxuICAgIGZ1bmN0aW9uIF9idWlsZEl0ZW1zKHR5cGUpIHtcblxuICAgICAgICBtZW51QXJyYXkuZm9yRWFjaCggKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGlmKGl0ZW0udHlwZSA9PT0gdHlwZSl7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGl0ZW1EaXYuY2xhc3NOYW1lID0gJ2l0ZW0tZGl2JztcbiAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtTmFtZUFuZFByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgICAgICAgICBpdGVtTmFtZUFuZFByaWNlLmNsYXNzTmFtZSA9ICdpdGVtLW5hbWUtcHJpY2UnO1xuICAgICAgICAgICAgICAgIGl0ZW1OYW1lQW5kUHJpY2UuaW5uZXJIVE1MID0gYCR7aXRlbS5uYW1lfSAgICR7aXRlbS5wcmljZX1gXG5cbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICAgICAgaXRlbUltZy5jbGFzc05hbWUgPSAnaXRlbS1pbWcnO1xuICAgICAgICAgICAgICAgIGl0ZW1JbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBpdGVtLmltZ1BhdGgpXG5cbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgaXRlbURlc2NyaXB0aW9uLmNsYXNzTmFtZSA9ICdpdGVtLWRlc2NyaXB0aW9uJztcbiAgICAgICAgICAgICAgICBpdGVtRGVzY3JpcHRpb24uaW5uZXJIVE1MID0gaXRlbS5kZXNjcmlwdGlvbjtcblxuICAgICAgICAgICAgICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQoaXRlbU5hbWVBbmRQcmljZSk7XG4gICAgICAgICAgICAgICAgaXRlbURpdi5hcHBlbmRDaGlsZChpdGVtSW1nKTtcbiAgICAgICAgICAgICAgICBpdGVtRGl2LmFwcGVuZENoaWxkKGl0ZW1EZXNjcmlwdGlvbik7XG4gICAgICAgICAgICAgICAgbWlkU2VjdGlvbkNvbnRlbnQuYXBwZW5kQ2hpbGQoaXRlbURpdik7XG4gICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgY29uc3QgbWlkU2VjdGlvbkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWlkLXNlY3Rpb24tY29udGVudCcpO1xuICAgIHdoaWxlIChtaWRTZWN0aW9uQ29udGVudC5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgbWlkU2VjdGlvbkNvbnRlbnQuZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBjb25zdCBzdXNoaVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBzdXNoaVRpdGxlLmlubmVySFRNTCA9ICfigJXigJXigJUgU3VzaGkg4oCV4oCV4oCVJztcbiAgICBzdXNoaVRpdGxlLmNsYXNzTmFtZSA9IFwibWlkLXNlY3Rpb24tdGl0bGVcIjtcblxuICAgIG1pZFNlY3Rpb25Db250ZW50LmFwcGVuZENoaWxkKHN1c2hpVGl0bGUpO1xuICAgIF9idWlsZEl0ZW1zKCdzdXNoaScpO1xuXG4gICAgY29uc3QgdGVtYWtpVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHRlbWFraVRpdGxlLmlubmVySFRNTCA9ICfigJXigJXigJUgVGVtYWtpIOKAleKAleKAlSc7XG4gICAgdGVtYWtpVGl0bGUuY2xhc3NOYW1lID0gXCJtaWQtc2VjdGlvbi10aXRsZVwiO1xuXG4gICAgbWlkU2VjdGlvbkNvbnRlbnQuYXBwZW5kQ2hpbGQodGVtYWtpVGl0bGUpO1xuICAgIF9idWlsZEl0ZW1zKCd0ZW1ha2knKTtcblxuICAgIGNvbnN0IHNha2VUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgc2FrZVRpdGxlLmlubmVySFRNTCA9ICfigJXigJXigJUgU2FrZSDigJXigJXigJUnO1xuICAgIHNha2VUaXRsZS5jbGFzc05hbWUgPSBcIm1pZC1zZWN0aW9uLXRpdGxlXCI7XG4gICAgXG4gICAgbWlkU2VjdGlvbkNvbnRlbnQuYXBwZW5kQ2hpbGQoc2FrZVRpdGxlKTtcbiAgICBfYnVpbGRJdGVtcygnc2FrZScpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkTWVudTsiLCJjb25zdCBsb2FkUGFnZSA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygncGFnZS1sb2FkLmpzIHdhcyBjYWxsZWQhJyk7XG4gICAgLy9DcmVhdGUgbWFpbiBjb250ZW50IGRpdlxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50LmlkID0gXCJjb250ZW50XCI7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG4gICAgLy9DcmVhdGUgaGVhZGVyLCBtaWQgc2VjdGlvbiBhbmQgZm9vdGVyIGRpdnNcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuaWQgPSBcImhlYWRlclwiO1xuXG4gICAgY29uc3QgbWlkU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1pZFNlY3Rpb24uaWQgPSBcIm1pZC1zZWN0aW9uXCI7XG5cbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb290ZXIuaWQgPSBcImZvb3RlclwiO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWlkU2VjdGlvbik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xuXG4gICAgLy9DcmVhdGUgaGVhZGVyIGVsZW1lbnRzXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHRpdGxlLmlubmVySFRNTCA9IFwiU2FtdXJhaSBTdXNoaVwiO1xuICAgIHRpdGxlLmlkID0gXCJyZXN0YXVyYW50LW5hbWVcIjtcblxuICAgIGNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBob21lQnRuLmlubmVySFRNTCA9IFwiSG9tZVwiO1xuICAgIGhvbWVCdG4uaWQgPSBcImhvbWUtYnRuXCI7XG4gICAgaG9tZUJ0bi5jbGFzc05hbWUgPSBcIm5hdi1idXR0b25cIjtcblxuICAgIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBtZW51QnRuLmlubmVySFRNTCA9IFwiTWVudVwiO1xuICAgIG1lbnVCdG4uaWQgPSBcIm1lbnUtYnRuXCI7XG4gICAgbWVudUJ0bi5jbGFzc05hbWUgPSBcIm5hdi1idXR0b25cIjtcblxuICAgIGNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb250YWN0QnRuLmlubmVySFRNTCA9IFwiQ29udGFjdFwiO1xuICAgIGNvbnRhY3RCdG4uaWQgPSBcImNvbnRhY3QtYnRuXCI7XG4gICAgY29udGFjdEJ0bi5jbGFzc05hbWUgPSBcIm5hdi1idXR0b25cIjtcblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhvbWVCdG4pO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChtZW51QnRuKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoY29udGFjdEJ0bik7XG5cbiAgICAvL0NyZWF0ZSBmb290ZXIgZWxlbWVudHNcbiAgICBjb25zdCBmb290ZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGZvb3RlclRleHQuaWQgPSBcImZvb3Rlci10ZXh0XCI7XG4gICAgZm9vdGVyVGV4dC5pbm5lckhUTUwgPSBcIk1hZGUgYnkgXCI7XG5cbiAgICBjb25zdCBmb290ZXJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGZvb3Rlckxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcImh0dHBzOi8vZ2l0aHViLmNvbS9tYXRoZXVzcGw5MlwiKTtcbiAgICBmb290ZXJMaW5rLmlubmVySFRNTCA9IFwibWF0aGV1c3BsOTJcIjtcblxuICAgIGZvb3RlclRleHQuYXBwZW5kQ2hpbGQoZm9vdGVyTGluayk7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlclRleHQpO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRQYWdlOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
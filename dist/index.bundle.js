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
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/* MY FONTS */\n\n\n@font-face {\n    font-family: 'japan-title';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype');\n}\n\n@font-face {\n    font-family: 'japan';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('truetype');\n}\n\n/* BACKGROUND */\n\n:root {\n    background: linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    background-size: cover;\n    background-attachment: fixed;\n}\n\n/* CONTENT CONTAINER */\n\n#content {\n    height: 100vh;\n    display: grid;\n    grid-template-rows: 120px 1fr 50px;\n}\n\n/* HEADER SECTION */\n\n#header {\n    display: grid;\n    grid-template-columns: repeat(3, 1ft);\n    grid-template-rows: 2f 1f;\n    background-color: white;\n    box-shadow: 5px 5px 100px gray;\n    padding: 5px;\n}\n\n#restaurant-name {\n    grid-column-start: 1;\n    grid-column-end: 4;\n    font-family: 'japan-title', sans-serif;\n    font-size: 3em;\n    letter-spacing: 10px;\n    font-weight: bold;\n    text-align: center;\n    padding-top: 10px;\n    margin-bottom: 10px;\n}\n\n.nav-button {\n    position: relative;\n    height: 90px;\n    width: 130px;\n    background-color: white;\n    border: 4px solid red;\n    border-radius: 45px;\n    align-self: center;\n    justify-self: center;\n    color: red;\n    font-family: 'japan', sans-serif;\n    font-size: 2em;\n    text-align: center;\n    transition: border .3s;\n    z-index: 5;\n}\n\n.nav-button:hover {\n    cursor: pointer;\n    border: 8px solid red;\n    filter: brightness(90%);\n}\n\n.nav-button:active {\n    color: white;\n    background-color: red;\n}\n\n.focus {\n    color: white;\n    background-color: red;\n}\n\n/* MIDDLE SECTION */\n\n/* Home */\n\n#mid-section {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 60px 0px 30px 0px;\n    z-index: 1;\n}\n\n#mid-section-content {\n    width: 600px;\n    min-height: 550px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n    background-color: white;\n    border-radius: 50px;\n    padding: 20px;\n    gap: 20px;\n}\n\n.mid-section-title {\n    font-family: 'japan';\n    font-size: 3em;\n    margin-top: 20px;\n}\n\n.mid-section-content {\n    font-size: 1.5em;\n    text-align: center;\n}\n\n#chef-content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n}\n\n#chef-img {\n    height: 300px;\n    width: 300px;\n    border-radius: 150px;\n    object-fit: cover;\n    object-position: 50% 100%;\n}\n\n/* Menu */\n\n.item-name-price {\n    font-family: 'japan';\n    font-size: 2em;\n}\n\n.item-div {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    margin-top: 20px;\n}\n\n.item-img {\n    height: 300px;\n    width: 300px;\n    object-fit: cover;\n    border-radius: 150px;\n    align-self: center;\n}\n\n.item-description {\n    font-size: 1.5em;\n    text-align: center;\n}\n\n/* FOOTER SECTION */\n\n#footer {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: white;\n    font-family: 'japan-title', sans-serif;\n    font-size: 1em;\n    letter-spacing: 5px;\n    box-shadow: 0px 0px 100px gray;\n}\n\na {\n    text-decoration: none;\n    color: red;\n}\n\n/* ================ MEDIA QUERIES ================ */\n\n@media (max-width: 660px) {\n    /* HEADER */\n\n    #restaurant-name {\n        font-size: 6vw;\n        margin-bottom: 0;\n    }\n    \n    .nav-button {\n        height: 100%;\n        width: 30vw;\n        font-size: 1.5em;\n    }\n\n    /* MIDDLE SECTION */\n\n    /* Home */\n\n#mid-section-content {\n    width: 80vw;\n}\n\n}\n\n@media (max-width: 540px) {\n\n    .mid-section-title {\n        font-size: 8vw;\n    }\n    \n    .mid-section-content {\n        font-size: 1.25em;\n    }\n    \n    #chef-img {\n        height: 55vw;\n        width: 55vw;\n    }\n    \n    /* Menu */\n    \n    .item-name-price {\n        font-size: 1.5em;\n    }\n    \n    .item-img {\n        height: 55vw;\n        width: 55vw;\n    }\n    \n    .item-description {\n        font-size: 1.25em;\n    }\n    \n}\n\n@media (max-width: 350px) {\n    #footer-text {\n        text-align: center;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/* MY FONTS */\n\n\n@font-face {\n    font-family: 'japan-title';\n    src: url('./Japanese 3017.ttf') format('truetype');\n}\n\n@font-face {\n    font-family: 'japan';\n    src: url('./Japan.ttf') format('truetype');\n}\n\n/* BACKGROUND */\n\n:root {\n    background: linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url('./background.jpg');\n    background-size: cover;\n    background-attachment: fixed;\n}\n\n/* CONTENT CONTAINER */\n\n#content {\n    height: 100vh;\n    display: grid;\n    grid-template-rows: 120px 1fr 50px;\n}\n\n/* HEADER SECTION */\n\n#header {\n    display: grid;\n    grid-template-columns: repeat(3, 1ft);\n    grid-template-rows: 2f 1f;\n    background-color: white;\n    box-shadow: 5px 5px 100px gray;\n    padding: 5px;\n}\n\n#restaurant-name {\n    grid-column-start: 1;\n    grid-column-end: 4;\n    font-family: 'japan-title', sans-serif;\n    font-size: 3em;\n    letter-spacing: 10px;\n    font-weight: bold;\n    text-align: center;\n    padding-top: 10px;\n    margin-bottom: 10px;\n}\n\n.nav-button {\n    position: relative;\n    height: 90px;\n    width: 130px;\n    background-color: white;\n    border: 4px solid red;\n    border-radius: 45px;\n    align-self: center;\n    justify-self: center;\n    color: red;\n    font-family: 'japan', sans-serif;\n    font-size: 2em;\n    text-align: center;\n    transition: border .3s;\n    z-index: 5;\n}\n\n.nav-button:hover {\n    cursor: pointer;\n    border: 8px solid red;\n    filter: brightness(90%);\n}\n\n.nav-button:active {\n    color: white;\n    background-color: red;\n}\n\n.focus {\n    color: white;\n    background-color: red;\n}\n\n/* MIDDLE SECTION */\n\n/* Home */\n\n#mid-section {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 60px 0px 30px 0px;\n    z-index: 1;\n}\n\n#mid-section-content {\n    width: 600px;\n    min-height: 550px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n    background-color: white;\n    border-radius: 50px;\n    padding: 20px;\n    gap: 20px;\n}\n\n.mid-section-title {\n    font-family: 'japan';\n    font-size: 3em;\n    margin-top: 20px;\n}\n\n.mid-section-content {\n    font-size: 1.5em;\n    text-align: center;\n}\n\n#chef-content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n}\n\n#chef-img {\n    height: 300px;\n    width: 300px;\n    border-radius: 150px;\n    object-fit: cover;\n    object-position: 50% 100%;\n}\n\n/* Menu */\n\n.item-name-price {\n    font-family: 'japan';\n    font-size: 2em;\n}\n\n.item-div {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    margin-top: 20px;\n}\n\n.item-img {\n    height: 300px;\n    width: 300px;\n    object-fit: cover;\n    border-radius: 150px;\n    align-self: center;\n}\n\n.item-description {\n    font-size: 1.5em;\n    text-align: center;\n}\n\n/* FOOTER SECTION */\n\n#footer {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: white;\n    font-family: 'japan-title', sans-serif;\n    font-size: 1em;\n    letter-spacing: 5px;\n    box-shadow: 0px 0px 100px gray;\n}\n\na {\n    text-decoration: none;\n    color: red;\n}\n\n/* ================ MEDIA QUERIES ================ */\n\n@media (max-width: 660px) {\n    /* HEADER */\n\n    #restaurant-name {\n        font-size: 6vw;\n        margin-bottom: 0;\n    }\n    \n    .nav-button {\n        height: 100%;\n        width: 30vw;\n        font-size: 1.5em;\n    }\n\n    /* MIDDLE SECTION */\n\n    /* Home */\n\n#mid-section-content {\n    width: 80vw;\n}\n\n}\n\n@media (max-width: 540px) {\n\n    .mid-section-title {\n        font-size: 8vw;\n    }\n    \n    .mid-section-content {\n        font-size: 1.25em;\n    }\n    \n    #chef-img {\n        height: 55vw;\n        width: 55vw;\n    }\n    \n    /* Menu */\n    \n    .item-name-price {\n        font-size: 1.5em;\n    }\n    \n    .item-img {\n        height: 55vw;\n        width: 55vw;\n    }\n    \n    .item-description {\n        font-size: 1.25em;\n    }\n    \n}\n\n@media (max-width: 350px) {\n    #footer-text {\n        text-align: center;\n    }\n}"],"sourceRoot":""}]);
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
    socialTitle.innerHTML = '―― Social media ――';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVksS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFdBQVcsS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sYUFBYSxZQUFZLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLFdBQVcsS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sYUFBYSxNQUFNLFdBQVcsS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sYUFBYSxZQUFZLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLFdB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QUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxpRUFBZSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2ZvY3VzQnRuLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZS1sb2FkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL0phcGFuZXNlIDMwMTcudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9KYXBhbi50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2JhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbi8qIE1ZIEZPTlRTICovXFxuXFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnamFwYW4tdGl0bGUnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdqYXBhbic7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxufVxcblxcbi8qIEJBQ0tHUk9VTkQgKi9cXG5cXG46cm9vdCB7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwyNTUsMjU1LC41KSwgcmdiYSgyNTUsMjU1LDI1NSwuNSkpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbn1cXG5cXG4vKiBDT05URU5UIENPTlRBSU5FUiAqL1xcblxcbiNjb250ZW50IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMjBweCAxZnIgNTBweDtcXG59XFxuXFxuLyogSEVBREVSIFNFQ1RJT04gKi9cXG5cXG4jaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZ0KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZiAxZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTAwcHggZ3JheTtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4jcmVzdGF1cmFudC1uYW1lIHtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogNDtcXG4gICAgZm9udC1mYW1pbHk6ICdqYXBhbi10aXRsZScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogM2VtO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMTBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5uYXYtYnV0dG9uIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBoZWlnaHQ6IDkwcHg7XFxuICAgIHdpZHRoOiAxMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIHJlZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNDVweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgZm9udC1mYW1pbHk6ICdqYXBhbicsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGJvcmRlciAuM3M7XFxuICAgIHotaW5kZXg6IDU7XFxufVxcblxcbi5uYXYtYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IDhweCBzb2xpZCByZWQ7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg5MCUpO1xcbn1cXG5cXG4ubmF2LWJ1dHRvbjphY3RpdmUge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmZvY3VzIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi8qIE1JRERMRSBTRUNUSU9OICovXFxuXFxuLyogSG9tZSAqL1xcblxcbiNtaWQtc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA2MHB4IDBweCAzMHB4IDBweDtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuI21pZC1zZWN0aW9uLWNvbnRlbnQge1xcbiAgICB3aWR0aDogNjAwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDU1MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLm1pZC1zZWN0aW9uLXRpdGxlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdqYXBhbic7XFxuICAgIGZvbnQtc2l6ZTogM2VtO1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4ubWlkLXNlY3Rpb24tY29udGVudCB7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2NoZWYtY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuI2NoZWYtaW1nIHtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNTBweDtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIG9iamVjdC1wb3NpdGlvbjogNTAlIDEwMCU7XFxufVxcblxcbi8qIE1lbnUgKi9cXG5cXG4uaXRlbS1uYW1lLXByaWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdqYXBhbic7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbn1cXG5cXG4uaXRlbS1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbi5pdGVtLWltZyB7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1MHB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5pdGVtLWRlc2NyaXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4vKiBGT09URVIgU0VDVElPTiAqL1xcblxcbiNmb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnamFwYW4tdGl0bGUnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMDBweCBncmF5O1xcbn1cXG5cXG5hIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5cXG4vKiA9PT09PT09PT09PT09PT09IE1FRElBIFFVRVJJRVMgPT09PT09PT09PT09PT09PSAqL1xcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2NjBweCkge1xcbiAgICAvKiBIRUFERVIgKi9cXG5cXG4gICAgI3Jlc3RhdXJhbnQtbmFtZSB7XFxuICAgICAgICBmb250LXNpemU6IDZ2dztcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgIH1cXG4gICAgXFxuICAgIC5uYXYtYnV0dG9uIHtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIHdpZHRoOiAzMHZ3O1xcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgfVxcblxcbiAgICAvKiBNSURETEUgU0VDVElPTiAqL1xcblxcbiAgICAvKiBIb21lICovXFxuXFxuI21pZC1zZWN0aW9uLWNvbnRlbnQge1xcbiAgICB3aWR0aDogODB2dztcXG59XFxuXFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NDBweCkge1xcblxcbiAgICAubWlkLXNlY3Rpb24tdGl0bGUge1xcbiAgICAgICAgZm9udC1zaXplOiA4dnc7XFxuICAgIH1cXG4gICAgXFxuICAgIC5taWQtc2VjdGlvbi1jb250ZW50IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xcbiAgICB9XFxuICAgIFxcbiAgICAjY2hlZi1pbWcge1xcbiAgICAgICAgaGVpZ2h0OiA1NXZ3O1xcbiAgICAgICAgd2lkdGg6IDU1dnc7XFxuICAgIH1cXG4gICAgXFxuICAgIC8qIE1lbnUgKi9cXG4gICAgXFxuICAgIC5pdGVtLW5hbWUtcHJpY2Uge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgfVxcbiAgICBcXG4gICAgLml0ZW0taW1nIHtcXG4gICAgICAgIGhlaWdodDogNTV2dztcXG4gICAgICAgIHdpZHRoOiA1NXZ3O1xcbiAgICB9XFxuICAgIFxcbiAgICAuaXRlbS1kZXNjcmlwdGlvbiB7XFxuICAgICAgICBmb250LXNpemU6IDEuMjVlbTtcXG4gICAgfVxcbiAgICBcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDM1MHB4KSB7XFxuICAgICNmb290ZXItdGV4dCB7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0NBR0M7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Q0FhQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsYUFBYTtDQUNiLHdCQUF3QjtBQUN6QjtBQUNBLGdEQUFnRDtBQUNoRDs7Q0FFQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTs7Q0FFQyxXQUFXO0NBQ1gsYUFBYTtBQUNkO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsaUJBQWlCO0FBQ2xCOztBQUVBLGFBQWE7OztBQUdiO0lBQ0ksMEJBQTBCO0lBQzFCLCtEQUFrRDtBQUN0RDs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQiwrREFBMEM7QUFDOUM7O0FBRUEsZUFBZTs7QUFFZjtJQUNJLGdIQUFnRztJQUNoRyxzQkFBc0I7SUFDdEIsNEJBQTRCO0FBQ2hDOztBQUVBLHNCQUFzQjs7QUFFdEI7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLGtDQUFrQztBQUN0Qzs7QUFFQSxtQkFBbUI7O0FBRW5CO0lBQ0ksYUFBYTtJQUNiLHFDQUFxQztJQUNyQyx5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLDhCQUE4QjtJQUM5QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixzQ0FBc0M7SUFDdEMsY0FBYztJQUNkLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLFVBQVU7SUFDVixnQ0FBZ0M7SUFDaEMsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHFCQUFxQjtJQUNyQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtBQUN6Qjs7QUFFQSxtQkFBbUI7O0FBRW5CLFNBQVM7O0FBRVQ7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsMEJBQTBCO0lBQzFCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7O0FBRUEsU0FBUzs7QUFFVDtJQUNJLG9CQUFvQjtJQUNwQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUEsbUJBQW1COztBQUVuQjtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixzQ0FBc0M7SUFDdEMsY0FBYztJQUNkLG1CQUFtQjtJQUNuQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsVUFBVTtBQUNkOztBQUVBLG9EQUFvRDs7QUFFcEQ7SUFDSSxXQUFXOztJQUVYO1FBQ0ksY0FBYztRQUNkLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLFlBQVk7UUFDWixXQUFXO1FBQ1gsZ0JBQWdCO0lBQ3BCOztJQUVBLG1CQUFtQjs7SUFFbkIsU0FBUzs7QUFFYjtJQUNJLFdBQVc7QUFDZjs7QUFFQTs7QUFFQTs7SUFFSTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osV0FBVztJQUNmOztJQUVBLFNBQVM7O0lBRVQ7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osV0FBVztJQUNmOztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCOztBQUVKOztBQUVBO0lBQ0k7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbi8qIE1ZIEZPTlRTICovXFxuXFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnamFwYW4tdGl0bGUnO1xcbiAgICBzcmM6IHVybCgnLi9KYXBhbmVzZSAzMDE3LnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnamFwYW4nO1xcbiAgICBzcmM6IHVybCgnLi9KYXBhbi50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxufVxcblxcbi8qIEJBQ0tHUk9VTkQgKi9cXG5cXG46cm9vdCB7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwyNTUsMjU1LC41KSwgcmdiYSgyNTUsMjU1LDI1NSwuNSkpLCB1cmwoJy4vYmFja2dyb3VuZC5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG59XFxuXFxuLyogQ09OVEVOVCBDT05UQUlORVIgKi9cXG5cXG4jY29udGVudCB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTIwcHggMWZyIDUwcHg7XFxufVxcblxcbi8qIEhFQURFUiBTRUNUSU9OICovXFxuXFxuI2hlYWRlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmdCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMmYgMWY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDEwMHB4IGdyYXk7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuI3Jlc3RhdXJhbnQtbmFtZSB7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDQ7XFxuICAgIGZvbnQtZmFtaWx5OiAnamFwYW4tdGl0bGUnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDNlbTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4ubmF2LWJ1dHRvbiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgaGVpZ2h0OiA5MHB4O1xcbiAgICB3aWR0aDogMTMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCByZWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDQ1cHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGZvbnQtZmFtaWx5OiAnamFwYW4nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0cmFuc2l0aW9uOiBib3JkZXIgLjNzO1xcbiAgICB6LWluZGV4OiA1O1xcbn1cXG5cXG4ubmF2LWJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiA4cHggc29saWQgcmVkO1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoOTAlKTtcXG59XFxuXFxuLm5hdi1idXR0b246YWN0aXZlIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5mb2N1cyB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4vKiBNSURETEUgU0VDVElPTiAqL1xcblxcbi8qIEhvbWUgKi9cXG5cXG4jbWlkLXNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogNjBweCAwcHggMzBweCAwcHg7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbiNtaWQtc2VjdGlvbi1jb250ZW50IHtcXG4gICAgd2lkdGg6IDYwMHB4O1xcbiAgICBtaW4taGVpZ2h0OiA1NTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5taWQtc2VjdGlvbi10aXRsZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnamFwYW4nO1xcbiAgICBmb250LXNpemU6IDNlbTtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLm1pZC1zZWN0aW9uLWNvbnRlbnQge1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNjaGVmLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbiNjaGVmLWltZyB7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTUwcHg7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICBvYmplY3QtcG9zaXRpb246IDUwJSAxMDAlO1xcbn1cXG5cXG4vKiBNZW51ICovXFxuXFxuLml0ZW0tbmFtZS1wcmljZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnamFwYW4nO1xcbiAgICBmb250LXNpemU6IDJlbTtcXG59XFxuXFxuLml0ZW0tZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4uaXRlbS1pbWcge1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNTBweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uaXRlbS1kZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLyogRk9PVEVSIFNFQ1RJT04gKi9cXG5cXG4jZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogJ2phcGFuLXRpdGxlJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTAwcHggZ3JheTtcXG59XFxuXFxuYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuLyogPT09PT09PT09PT09PT09PSBNRURJQSBRVUVSSUVTID09PT09PT09PT09PT09PT0gKi9cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjYwcHgpIHtcXG4gICAgLyogSEVBREVSICovXFxuXFxuICAgICNyZXN0YXVyYW50LW5hbWUge1xcbiAgICAgICAgZm9udC1zaXplOiA2dnc7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICB9XFxuICAgIFxcbiAgICAubmF2LWJ1dHRvbiB7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICB3aWR0aDogMzB2dztcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgIH1cXG5cXG4gICAgLyogTUlERExFIFNFQ1RJT04gKi9cXG5cXG4gICAgLyogSG9tZSAqL1xcblxcbiNtaWQtc2VjdGlvbi1jb250ZW50IHtcXG4gICAgd2lkdGg6IDgwdnc7XFxufVxcblxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNTQwcHgpIHtcXG5cXG4gICAgLm1pZC1zZWN0aW9uLXRpdGxlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogOHZ3O1xcbiAgICB9XFxuICAgIFxcbiAgICAubWlkLXNlY3Rpb24tY29udGVudCB7XFxuICAgICAgICBmb250LXNpemU6IDEuMjVlbTtcXG4gICAgfVxcbiAgICBcXG4gICAgI2NoZWYtaW1nIHtcXG4gICAgICAgIGhlaWdodDogNTV2dztcXG4gICAgICAgIHdpZHRoOiA1NXZ3O1xcbiAgICB9XFxuICAgIFxcbiAgICAvKiBNZW51ICovXFxuICAgIFxcbiAgICAuaXRlbS1uYW1lLXByaWNlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgIH1cXG4gICAgXFxuICAgIC5pdGVtLWltZyB7XFxuICAgICAgICBoZWlnaHQ6IDU1dnc7XFxuICAgICAgICB3aWR0aDogNTV2dztcXG4gICAgfVxcbiAgICBcXG4gICAgLml0ZW0tZGVzY3JpcHRpb24ge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjI1ZW07XFxuICAgIH1cXG4gICAgXFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAzNTBweCkge1xcbiAgICAjZm9vdGVyLXRleHQge1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBsb2FkQ29udGFjdCA9ICgpID0+IHtcblxuICAgIGNvbnN0IG1pZFNlY3Rpb25Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21pZC1zZWN0aW9uLWNvbnRlbnQnKTtcbiAgICB3aGlsZSAobWlkU2VjdGlvbkNvbnRlbnQuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICAgIG1pZFNlY3Rpb25Db250ZW50LmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgcGhvbmVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgcGhvbmVUaXRsZS5pbm5lckhUTUwgPSAn4oCV4oCV4oCVIFBob25lIOKAleKAleKAlSc7XG4gICAgcGhvbmVUaXRsZS5jbGFzc05hbWUgPSBcIm1pZC1zZWN0aW9uLXRpdGxlXCI7XG5cbiAgICBjb25zdCBwaG9uZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGhvbmVUZXh0LmlubmVySFRNTCA9ICc3NzctMzMzLTEzMzcnO1xuICAgIHBob25lVGV4dC5jbGFzc05hbWUgPSBcIm1pZC1zZWN0aW9uLWNvbnRlbnRcIjtcblxuICAgIG1pZFNlY3Rpb25Db250ZW50LmFwcGVuZENoaWxkKHBob25lVGl0bGUpO1xuICAgIG1pZFNlY3Rpb25Db250ZW50LmFwcGVuZENoaWxkKHBob25lVGV4dCk7XG5cbiAgICBjb25zdCBlbWFpbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBlbWFpbFRpdGxlLmlubmVySFRNTCA9ICfigJXigJXigJUgRW1haWwg4oCV4oCV4oCVJztcbiAgICBlbWFpbFRpdGxlLmNsYXNzTmFtZSA9IFwibWlkLXNlY3Rpb24tdGl0bGVcIjtcblxuICAgIGNvbnN0IGVtYWlsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBlbWFpbFRleHQuaW5uZXJIVE1MID0gJ2NvbnRhY3RAc2FtdXJhaXN1c2hpLmNvbSc7XG4gICAgZW1haWxUZXh0LmNsYXNzTmFtZSA9IFwibWlkLXNlY3Rpb24tY29udGVudFwiO1xuXG4gICAgbWlkU2VjdGlvbkNvbnRlbnQuYXBwZW5kQ2hpbGQoZW1haWxUaXRsZSk7XG4gICAgbWlkU2VjdGlvbkNvbnRlbnQuYXBwZW5kQ2hpbGQoZW1haWxUZXh0KTtcblxuICAgIGNvbnN0IHNvY2lhbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBzb2NpYWxUaXRsZS5pbm5lckhUTUwgPSAn4oCV4oCVIFNvY2lhbCBtZWRpYSDigJXigJUnO1xuICAgIHNvY2lhbFRpdGxlLmNsYXNzTmFtZSA9IFwibWlkLXNlY3Rpb24tdGl0bGVcIjtcblxuICAgIGNvbnN0IHNvY2lhbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgc29jaWFsVGV4dC5pbm5lckhUTUwgPSAnVmlzaXQgb3VyIHNvY2lhbCBtZWRpYSBwYWdlcyEnO1xuICAgIHNvY2lhbFRleHQuY2xhc3NOYW1lID0gXCJtaWQtc2VjdGlvbi1jb250ZW50XCI7XG4gICAgXG4gICAgbWlkU2VjdGlvbkNvbnRlbnQuYXBwZW5kQ2hpbGQoc29jaWFsVGl0bGUpO1xuICAgIG1pZFNlY3Rpb25Db250ZW50LmFwcGVuZENoaWxkKHNvY2lhbFRleHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkQ29udGFjdDsiLCJjb25zdCBmb2N1c0J0biA9IChidXR0b25Ub0ZvY3VzKSA9PiB7XG4gICBcbiAgICBpZiAoIWJ1dHRvblRvRm9jdXMuY2xhc3NMaXN0LmNvbnRhaW5zKCdmb2N1cycpKXtcbiAgICAgICAgXG4gICAgICAgIGJ1dHRvblRvRm9jdXMuY2xhc3NMaXN0LmFkZCgnZm9jdXMnKTtcblxuICAgICAgICBjb25zdCBidG5zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmF2LWJ1dHRvbicpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnRucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGJ0bnNbaV0gIT09IGJ1dHRvblRvRm9jdXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoYnRuc1tpXS5jbGFzc0xpc3QuY29udGFpbnMoJ2ZvY3VzJykpIHtcbiAgICAgICAgICAgICAgICAgICAgYnRuc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdmb2N1cycpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvY3VzQnRuOyIsImltcG9ydCBJbWFnZUNoZWYgZnJvbSAnLi9jaGVmLmpwZydcblxuY29uc3QgbG9hZEhvbWUgPSAoKSA9PiB7XG5cbiAgICBmdW5jdGlvbiBfYnVpbGRIb21lKG1pZFNlY3Rpb25Db250ZW50KSB7XG4gICAgICAgIGNvbnN0IGFib3V0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBhYm91dFRpdGxlLmlubmVySFRNTCA9ICfigJXigJXigJUgQWJvdXQg4oCV4oCV4oCVJztcbiAgICAgICAgYWJvdXRUaXRsZS5jbGFzc05hbWUgPSBcIm1pZC1zZWN0aW9uLXRpdGxlXCI7XG5cbiAgICAgICAgY29uc3QgYWJvdXRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBhYm91dFRleHQuaW5uZXJIVE1MID0gJ1NhbXVyYWkgU3VzaGkgaXMgYSB0cmFkaXRpb25hbCBqYXBhbmVzZSByZXN0YXVyYW50IHNwZWNpYWxpemVkIG9uIHN1c2hpIGRpc2hlcyc7XG4gICAgICAgIGFib3V0VGV4dC5jbGFzc05hbWUgPSBcIm1pZC1zZWN0aW9uLWNvbnRlbnRcIjtcblxuICAgICAgICBjb25zdCBjaGVmVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBjaGVmVGl0bGUuaW5uZXJIVE1MID0gJ+KAleKAleKAlSBDaGVmIOKAleKAleKAlSc7XG4gICAgICAgIGNoZWZUaXRsZS5jbGFzc05hbWUgPSBcIm1pZC1zZWN0aW9uLXRpdGxlXCI7XG5cbiAgICAgICAgY29uc3QgY2hlZkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjaGVmRGl2LmlkID0gXCJjaGVmLWNvbnRlbnRcIjtcblxuICAgICAgICBjb25zdCBjaGVmSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGNoZWZJbWcuaWQgPSAnY2hlZi1pbWcnO1xuICAgICAgICBjaGVmSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgSW1hZ2VDaGVmKTtcblxuICAgICAgICBjb25zdCBjaGVmVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY2hlZlRleHQuaW5uZXJIVE1MID0gJ1N1c2hpIE1hc3RlciBPZGEgTm9idW5hZ2EgaXMgYSByZW5vd25lZCBzdXNoaSBzcGVjaWFsaXN0IHdpbm5lciBvZiBtYW55IGN1bGluYXJ5IHByaXplcyc7XG4gICAgICAgIGNoZWZUZXh0LmNsYXNzTmFtZSA9IFwibWlkLXNlY3Rpb24tY29udGVudFwiO1xuXG4gICAgICAgIG1pZFNlY3Rpb25Db250ZW50LmFwcGVuZENoaWxkKGFib3V0VGl0bGUpO1xuICAgICAgICBtaWRTZWN0aW9uQ29udGVudC5hcHBlbmRDaGlsZChhYm91dFRleHQpO1xuICAgICAgICBtaWRTZWN0aW9uQ29udGVudC5hcHBlbmRDaGlsZChjaGVmVGl0bGUpO1xuICAgICAgICBtaWRTZWN0aW9uQ29udGVudC5hcHBlbmRDaGlsZChjaGVmRGl2KTtcbiAgICAgICAgY2hlZkRpdi5hcHBlbmRDaGlsZChjaGVmSW1nKTtcbiAgICAgICAgY2hlZkRpdi5hcHBlbmRDaGlsZChjaGVmVGV4dCk7XG4gICAgfVxuXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtaWQtc2VjdGlvbi1jb250ZW50JykpIHtcbiAgICAgICAgY29uc3QgbWlkU2VjdGlvbkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWlkLXNlY3Rpb24tY29udGVudCcpO1xuXG4gICAgICAgIHdoaWxlIChtaWRTZWN0aW9uQ29udGVudC5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgICAgIG1pZFNlY3Rpb25Db250ZW50LmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBfYnVpbGRIb21lKG1pZFNlY3Rpb25Db250ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBtaWRTZWN0aW9uQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtaWRTZWN0aW9uQ29udGVudC5pZCA9IFwibWlkLXNlY3Rpb24tY29udGVudFwiO1xuXG4gICAgICAgIGNvbnN0IG1pZFNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWlkLXNlY3Rpb24nKTtcblxuICAgICAgICBtaWRTZWN0aW9uLmFwcGVuZENoaWxkKG1pZFNlY3Rpb25Db250ZW50KTtcblxuICAgICAgICBfYnVpbGRIb21lKG1pZFNlY3Rpb25Db250ZW50KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRIb21lOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGxvYWRDb250YWN0IGZyb20gJy4vY29udGFjdCc7XG5pbXBvcnQgbG9hZEhvbWUgZnJvbSAnLi9ob21lJztcbmltcG9ydCBsb2FkTWVudSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IGxvYWRQYWdlIGZyb20gJy4vcGFnZS1sb2FkJztcbmltcG9ydCBmb2N1c0J0biBmcm9tICcuL2ZvY3VzQnRuJztcblxubG9hZFBhZ2UoKTtcbmxvYWRIb21lKCk7XG5mb2N1c0J0bihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZS1idG4nKSk7XG5cbmNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZS1idG4nKTtcbmhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGxvYWRIb21lKCk7XG4gICAgZm9jdXNCdG4oZS50YXJnZXQpXG59KTtcblxuY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LWJ0bicpO1xubWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgbG9hZE1lbnUoKTtcbiAgICBmb2N1c0J0bihlLnRhcmdldClcbn0pO1xuXG5jb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QtYnRuJyk7XG5jb250YWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBsb2FkQ29udGFjdCgpO1xuICAgIGZvY3VzQnRuKGUudGFyZ2V0KVxufSk7IiwiaW1wb3J0IEltYWdlTmlnaXJpIGZyb20gJy4vbmlnaXJpLmpwZydcbmltcG9ydCBJbWFnZVVyYW1ha2kgZnJvbSAnLi91cmFtYWtpLmpwZydcbmltcG9ydCBJbWFnZVRlbWFraSBmcm9tICcuL3RlbWFraS5qcGVnJ1xuaW1wb3J0IEltYWdlU2FrZSBmcm9tICcuL3Nha2UuanBnJ1xuXG5jb25zdCBsb2FkTWVudSA9ICgpID0+IHtcblxuICAgIC8vTWVudSBpdGVtcyBhcnJheVxuXG4gICAgY29uc3QgbWVudUFycmF5ID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnc3VzaGknLFxuICAgICAgICAgICAgbmFtZTogJ0thbWkgTmlnaXJpJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRGVsaWNpb3VzIG5pZ2lyaSBtYWRlIHdpdGggZnJlc2ggZmlzaCBhbmQgdG9wIGluZ3JlZGllbnRzJyxcbiAgICAgICAgICAgIHByaWNlOiAnJDIwJyxcbiAgICAgICAgICAgIGltZ1BhdGg6IEltYWdlTmlnaXJpXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdzdXNoaScsXG4gICAgICAgICAgICBuYW1lOiAnU2FsbW9uIFVyYW1ha2knLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdGbGF2b3JmdWwgc3VzaGkgZGlzaCBtYWRlIHdpdGggc2FsbW9uIGFuZCBjcmVhbSBjaGVlc2UnLFxuICAgICAgICAgICAgcHJpY2U6ICckMTInLFxuICAgICAgICAgICAgaW1nUGF0aDogSW1hZ2VVcmFtYWtpXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICd0ZW1ha2knLFxuICAgICAgICAgICAgbmFtZTogJ1NhbG1vbiBUZW1ha2knLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdBbWF6aW5nIHNhbG1vbiBhbmQgY3JlYW0gY2hlZXNlIHRlbWFraScsXG4gICAgICAgICAgICBwcmljZTogJyQzMCcsXG4gICAgICAgICAgICBpbWdQYXRoOiBJbWFnZVRlbWFraVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnc2FrZScsXG4gICAgICAgICAgICBuYW1lOiAnS29qaW1hIFNha2UnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdIaWdoIHF1YWxpdHkgb3JpZ2luYWwgc2FrZSBtYWRlIGluIEphcGFuJyxcbiAgICAgICAgICAgIHByaWNlOiAnJDEwMCcsXG4gICAgICAgICAgICBpbWdQYXRoOiBJbWFnZVNha2VcbiAgICAgICAgfSxcbiAgICBdO1xuXG4gICAgZnVuY3Rpb24gX2J1aWxkSXRlbXModHlwZSkge1xuXG4gICAgICAgIG1lbnVBcnJheS5mb3JFYWNoKCAoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaWYoaXRlbS50eXBlID09PSB0eXBlKXtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgaXRlbURpdi5jbGFzc05hbWUgPSAnaXRlbS1kaXYnO1xuICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1OYW1lQW5kUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICAgICAgICAgIGl0ZW1OYW1lQW5kUHJpY2UuY2xhc3NOYW1lID0gJ2l0ZW0tbmFtZS1wcmljZSc7XG4gICAgICAgICAgICAgICAgaXRlbU5hbWVBbmRQcmljZS5pbm5lckhUTUwgPSBgJHtpdGVtLm5hbWV9ICAgJHtpdGVtLnByaWNlfWBcblxuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgICAgICBpdGVtSW1nLmNsYXNzTmFtZSA9ICdpdGVtLWltZyc7XG4gICAgICAgICAgICAgICAgaXRlbUltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGl0ZW0uaW1nUGF0aClcblxuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgICBpdGVtRGVzY3JpcHRpb24uY2xhc3NOYW1lID0gJ2l0ZW0tZGVzY3JpcHRpb24nO1xuICAgICAgICAgICAgICAgIGl0ZW1EZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBpdGVtLmRlc2NyaXB0aW9uO1xuXG4gICAgICAgICAgICAgICAgaXRlbURpdi5hcHBlbmRDaGlsZChpdGVtTmFtZUFuZFByaWNlKTtcbiAgICAgICAgICAgICAgICBpdGVtRGl2LmFwcGVuZENoaWxkKGl0ZW1JbWcpO1xuICAgICAgICAgICAgICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQoaXRlbURlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgICAgICBtaWRTZWN0aW9uQ29udGVudC5hcHBlbmRDaGlsZChpdGVtRGl2KTtcbiAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBjb25zdCBtaWRTZWN0aW9uQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtaWQtc2VjdGlvbi1jb250ZW50Jyk7XG4gICAgd2hpbGUgKG1pZFNlY3Rpb25Db250ZW50Lmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgICBtaWRTZWN0aW9uQ29udGVudC5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IHN1c2hpVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHN1c2hpVGl0bGUuaW5uZXJIVE1MID0gJ+KAleKAleKAlSBTdXNoaSDigJXigJXigJUnO1xuICAgIHN1c2hpVGl0bGUuY2xhc3NOYW1lID0gXCJtaWQtc2VjdGlvbi10aXRsZVwiO1xuXG4gICAgbWlkU2VjdGlvbkNvbnRlbnQuYXBwZW5kQ2hpbGQoc3VzaGlUaXRsZSk7XG4gICAgX2J1aWxkSXRlbXMoJ3N1c2hpJyk7XG5cbiAgICBjb25zdCB0ZW1ha2lUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgdGVtYWtpVGl0bGUuaW5uZXJIVE1MID0gJ+KAleKAleKAlSBUZW1ha2kg4oCV4oCV4oCVJztcbiAgICB0ZW1ha2lUaXRsZS5jbGFzc05hbWUgPSBcIm1pZC1zZWN0aW9uLXRpdGxlXCI7XG5cbiAgICBtaWRTZWN0aW9uQ29udGVudC5hcHBlbmRDaGlsZCh0ZW1ha2lUaXRsZSk7XG4gICAgX2J1aWxkSXRlbXMoJ3RlbWFraScpO1xuXG4gICAgY29uc3Qgc2FrZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBzYWtlVGl0bGUuaW5uZXJIVE1MID0gJ+KAleKAleKAlSBTYWtlIOKAleKAleKAlSc7XG4gICAgc2FrZVRpdGxlLmNsYXNzTmFtZSA9IFwibWlkLXNlY3Rpb24tdGl0bGVcIjtcbiAgICBcbiAgICBtaWRTZWN0aW9uQ29udGVudC5hcHBlbmRDaGlsZChzYWtlVGl0bGUpO1xuICAgIF9idWlsZEl0ZW1zKCdzYWtlJyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRNZW51OyIsImNvbnN0IGxvYWRQYWdlID0gKCkgPT4ge1xuICAgIC8vQ3JlYXRlIG1haW4gY29udGVudCBkaXZcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudC5pZCA9IFwiY29udGVudFwiO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuICAgIC8vQ3JlYXRlIGhlYWRlciwgbWlkIHNlY3Rpb24gYW5kIGZvb3RlciBkaXZzXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLmlkID0gXCJoZWFkZXJcIjtcblxuICAgIGNvbnN0IG1pZFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtaWRTZWN0aW9uLmlkID0gXCJtaWQtc2VjdGlvblwiO1xuXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vdGVyLmlkID0gXCJmb290ZXJcIjtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1pZFNlY3Rpb24pO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcblxuICAgIC8vQ3JlYXRlIGhlYWRlciBlbGVtZW50c1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICB0aXRsZS5pbm5lckhUTUwgPSBcIlNhbXVyYWkgU3VzaGlcIjtcbiAgICB0aXRsZS5pZCA9IFwicmVzdGF1cmFudC1uYW1lXCI7XG5cbiAgICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaG9tZUJ0bi5pbm5lckhUTUwgPSBcIkhvbWVcIjtcbiAgICBob21lQnRuLmlkID0gXCJob21lLWJ0blwiO1xuICAgIGhvbWVCdG4uY2xhc3NOYW1lID0gXCJuYXYtYnV0dG9uXCI7XG5cbiAgICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbWVudUJ0bi5pbm5lckhUTUwgPSBcIk1lbnVcIjtcbiAgICBtZW51QnRuLmlkID0gXCJtZW51LWJ0blwiO1xuICAgIG1lbnVCdG4uY2xhc3NOYW1lID0gXCJuYXYtYnV0dG9uXCI7XG5cbiAgICBjb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29udGFjdEJ0bi5pbm5lckhUTUwgPSBcIkNvbnRhY3RcIjtcbiAgICBjb250YWN0QnRuLmlkID0gXCJjb250YWN0LWJ0blwiO1xuICAgIGNvbnRhY3RCdG4uY2xhc3NOYW1lID0gXCJuYXYtYnV0dG9uXCI7XG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChob21lQnRuKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobWVudUJ0bik7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGNvbnRhY3RCdG4pO1xuXG4gICAgLy9DcmVhdGUgZm9vdGVyIGVsZW1lbnRzXG4gICAgY29uc3QgZm9vdGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBmb290ZXJUZXh0LmlkID0gXCJmb290ZXItdGV4dFwiO1xuICAgIGZvb3RlclRleHQuaW5uZXJIVE1MID0gXCJNYWRlIGJ5IFwiO1xuXG4gICAgY29uc3QgZm9vdGVyTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBmb290ZXJMaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJodHRwczovL2dpdGh1Yi5jb20vbWF0aGV1c3BsOTJcIik7XG4gICAgZm9vdGVyTGluay5pbm5lckhUTUwgPSBcIm1hdGhldXNwbDkyXCI7XG5cbiAgICBmb290ZXJUZXh0LmFwcGVuZENoaWxkKGZvb3RlckxpbmspO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJUZXh0KTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkUGFnZTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
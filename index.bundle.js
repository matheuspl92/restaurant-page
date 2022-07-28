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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
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
    phoneTitle.innerHTML = 'Phone';
    phoneTitle.className = "mid-section-title";

    const phoneText = document.createElement('p');
    phoneText.innerHTML = '777-333-1337';
    phoneText.className = "mid-section-content";

    midSectionContent.appendChild(phoneTitle);
    midSectionContent.appendChild(phoneText);

    const emailTitle = document.createElement('h2');
    emailTitle.innerHTML = 'Email';
    emailTitle.className = "mid-section-title";

    const emailText = document.createElement('p');
    emailText.innerHTML = 'contact@samuraisushi.com';
    emailText.className = "mid-section-content";

    midSectionContent.appendChild(emailTitle);
    midSectionContent.appendChild(emailText);

    const socialTitle = document.createElement('h2');
    socialTitle.innerHTML = 'Social media';
    socialTitle.className = "mid-section-title";

    const socialText = document.createElement('p');
    socialText.innerHTML = 'Visit our social media pages!';
    socialText.className = "mid-section-content";
    
    midSectionContent.appendChild(socialTitle);
    midSectionContent.appendChild(socialText);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);

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
const loadHome = () => {
    console.log('home.js was called!');

    function _buildHome(midSectionContent) {
        const aboutTitle = document.createElement('h2');
        aboutTitle.innerHTML = 'About';
        aboutTitle.className = "mid-section-title";

        const aboutText = document.createElement('p');
        aboutText.innerHTML = 'Samurai Sushi is a traditional japanese restaurant specialized on sushi dishes';
        aboutText.className = "mid-section-content";

        const chefTitle = document.createElement('h2');
        chefTitle.innerHTML = 'Chef';
        chefTitle.className = "mid-section-title";

        const chefDiv = document.createElement('div');
        chefDiv.id = "chef-content";

        const chefImg = document.createElement('img');
        chefImg.id = 'chef-img';
        chefImg.setAttribute('src', "#########");

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






console.log("index.js was called successfully");

(0,_page_load__WEBPACK_IMPORTED_MODULE_4__["default"])();
(0,_home__WEBPACK_IMPORTED_MODULE_2__["default"])();

const homeBtn = document.getElementById('home-btn');
homeBtn.addEventListener('click', _home__WEBPACK_IMPORTED_MODULE_2__["default"]);

const menuBtn = document.getElementById('menu-btn');
menuBtn.addEventListener('click', _menu__WEBPACK_IMPORTED_MODULE_3__["default"]);

const contactBtn = document.getElementById('contact-btn');
contactBtn.addEventListener('click', _contact__WEBPACK_IMPORTED_MODULE_1__["default"]);

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
const loadMenu = () => {
    console.log('menu.js was called!');

    //Menu items array

    const menuArray = [
        {
            type: 'sushi',
            name: 'sushi1',
            description: 'Delicious sushi dish',
            price: '$10',
            imgPath: ''
        },
        {
            type: 'sushi',
            name: 'sushi2',
            description: 'Delicious sushi dish',
            price: '$15',
            imgPath: ''
        },
        {
            type: 'temaki',
            name: 'temaki1',
            description: 'Delicious temaki dish',
            price: '$20',
            imgPath: ''
        },
        {
            type: 'sake',
            name: 'sake1',
            description: 'Original sake from Japan',
            price: '$50',
            imgPath: ''
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

                const itemDescription = document.createElement('p');
                itemDescription.className = 'item-description';
                itemDescription.innerHTML = item.description;

                itemDiv.appendChild(itemNameAndPrice);
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
    sushiTitle.innerHTML = 'Sushi';
    sushiTitle.className = "mid-section-title";

    midSectionContent.appendChild(sushiTitle);
    _buildItems('sushi');

    const temakiTitle = document.createElement('h2');
    temakiTitle.innerHTML = 'Temaki';
    temakiTitle.className = "mid-section-title";

    midSectionContent.appendChild(temakiTitle);
    _buildItems('temaki');

    const sakeTitle = document.createElement('h2');
    sakeTitle.innerHTML = 'Sake';
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

    //Create mid-section elements
    //div
    //  =>h2
    //  =>p
    //  =>h2
    //  =>div
    //      =>img
    //      =>p
    /*const midSectionContent = document.createElement('div');
    midSectionContent.id = "mid-section-content";

    const aboutTitle = document.createElement('h2');
    aboutTitle.innerHTML = 'About';
    aboutTitle.className = "mid-section-title";

    const aboutText = document.createElement('p');
    aboutText.innerHTML = 'Samurai Sushi is a traditional japanese restaurant specialized on sushi dishes';
    aboutText.className = "mid-section-content";

    const chefTitle = document.createElement('h2');
    chefTitle.innerHTML = 'Chef';
    chefTitle.className = "mid-section-title";

    const chefDiv = document.createElement('div');
    chefDiv.id = "chef-content";

    const chefImg = document.createElement('img');
    chefImg.id = 'chef-img';
    chefImg.setAttribute('src', "#########");

    const chefText = document.createElement('p');
    chefText.innerHTML = 'Sushi Master Oda Nobunaga is a renowned sushi specialist winner of many culinary prizes';
    chefText.className = "mid-section-content";

    midSection.appendChild(midSectionContent);
    midSectionContent.appendChild(aboutTitle);
    midSectionContent.appendChild(aboutText);
    midSectionContent.appendChild(chefTitle);
    midSectionContent.appendChild(chefDiv);
    chefDiv.appendChild(chefImg);
    chefDiv.appendChild(chefText);*/

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLGlFQUFlLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlLWxvYWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGxvYWRDb250YWN0ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdjb250YWN0LmpzIHdhcyBjYWxsZWQhJyk7XG5cbiAgICBjb25zdCBtaWRTZWN0aW9uQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtaWQtc2VjdGlvbi1jb250ZW50Jyk7XG4gICAgd2hpbGUgKG1pZFNlY3Rpb25Db250ZW50Lmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgICBtaWRTZWN0aW9uQ29udGVudC5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IHBob25lVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHBob25lVGl0bGUuaW5uZXJIVE1MID0gJ1Bob25lJztcbiAgICBwaG9uZVRpdGxlLmNsYXNzTmFtZSA9IFwibWlkLXNlY3Rpb24tdGl0bGVcIjtcblxuICAgIGNvbnN0IHBob25lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwaG9uZVRleHQuaW5uZXJIVE1MID0gJzc3Ny0zMzMtMTMzNyc7XG4gICAgcGhvbmVUZXh0LmNsYXNzTmFtZSA9IFwibWlkLXNlY3Rpb24tY29udGVudFwiO1xuXG4gICAgbWlkU2VjdGlvbkNvbnRlbnQuYXBwZW5kQ2hpbGQocGhvbmVUaXRsZSk7XG4gICAgbWlkU2VjdGlvbkNvbnRlbnQuYXBwZW5kQ2hpbGQocGhvbmVUZXh0KTtcblxuICAgIGNvbnN0IGVtYWlsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGVtYWlsVGl0bGUuaW5uZXJIVE1MID0gJ0VtYWlsJztcbiAgICBlbWFpbFRpdGxlLmNsYXNzTmFtZSA9IFwibWlkLXNlY3Rpb24tdGl0bGVcIjtcblxuICAgIGNvbnN0IGVtYWlsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBlbWFpbFRleHQuaW5uZXJIVE1MID0gJ2NvbnRhY3RAc2FtdXJhaXN1c2hpLmNvbSc7XG4gICAgZW1haWxUZXh0LmNsYXNzTmFtZSA9IFwibWlkLXNlY3Rpb24tY29udGVudFwiO1xuXG4gICAgbWlkU2VjdGlvbkNvbnRlbnQuYXBwZW5kQ2hpbGQoZW1haWxUaXRsZSk7XG4gICAgbWlkU2VjdGlvbkNvbnRlbnQuYXBwZW5kQ2hpbGQoZW1haWxUZXh0KTtcblxuICAgIGNvbnN0IHNvY2lhbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBzb2NpYWxUaXRsZS5pbm5lckhUTUwgPSAnU29jaWFsIG1lZGlhJztcbiAgICBzb2NpYWxUaXRsZS5jbGFzc05hbWUgPSBcIm1pZC1zZWN0aW9uLXRpdGxlXCI7XG5cbiAgICBjb25zdCBzb2NpYWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHNvY2lhbFRleHQuaW5uZXJIVE1MID0gJ1Zpc2l0IG91ciBzb2NpYWwgbWVkaWEgcGFnZXMhJztcbiAgICBzb2NpYWxUZXh0LmNsYXNzTmFtZSA9IFwibWlkLXNlY3Rpb24tY29udGVudFwiO1xuICAgIFxuICAgIG1pZFNlY3Rpb25Db250ZW50LmFwcGVuZENoaWxkKHNvY2lhbFRpdGxlKTtcbiAgICBtaWRTZWN0aW9uQ29udGVudC5hcHBlbmRDaGlsZChzb2NpYWxUZXh0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZENvbnRhY3Q7IiwiY29uc3QgbG9hZEhvbWUgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2hvbWUuanMgd2FzIGNhbGxlZCEnKTtcblxuICAgIGZ1bmN0aW9uIF9idWlsZEhvbWUobWlkU2VjdGlvbkNvbnRlbnQpIHtcbiAgICAgICAgY29uc3QgYWJvdXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIGFib3V0VGl0bGUuaW5uZXJIVE1MID0gJ0Fib3V0JztcbiAgICAgICAgYWJvdXRUaXRsZS5jbGFzc05hbWUgPSBcIm1pZC1zZWN0aW9uLXRpdGxlXCI7XG5cbiAgICAgICAgY29uc3QgYWJvdXRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBhYm91dFRleHQuaW5uZXJIVE1MID0gJ1NhbXVyYWkgU3VzaGkgaXMgYSB0cmFkaXRpb25hbCBqYXBhbmVzZSByZXN0YXVyYW50IHNwZWNpYWxpemVkIG9uIHN1c2hpIGRpc2hlcyc7XG4gICAgICAgIGFib3V0VGV4dC5jbGFzc05hbWUgPSBcIm1pZC1zZWN0aW9uLWNvbnRlbnRcIjtcblxuICAgICAgICBjb25zdCBjaGVmVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBjaGVmVGl0bGUuaW5uZXJIVE1MID0gJ0NoZWYnO1xuICAgICAgICBjaGVmVGl0bGUuY2xhc3NOYW1lID0gXCJtaWQtc2VjdGlvbi10aXRsZVwiO1xuXG4gICAgICAgIGNvbnN0IGNoZWZEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2hlZkRpdi5pZCA9IFwiY2hlZi1jb250ZW50XCI7XG5cbiAgICAgICAgY29uc3QgY2hlZkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBjaGVmSW1nLmlkID0gJ2NoZWYtaW1nJztcbiAgICAgICAgY2hlZkltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIFwiIyMjIyMjIyMjXCIpO1xuXG4gICAgICAgIGNvbnN0IGNoZWZUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjaGVmVGV4dC5pbm5lckhUTUwgPSAnU3VzaGkgTWFzdGVyIE9kYSBOb2J1bmFnYSBpcyBhIHJlbm93bmVkIHN1c2hpIHNwZWNpYWxpc3Qgd2lubmVyIG9mIG1hbnkgY3VsaW5hcnkgcHJpemVzJztcbiAgICAgICAgY2hlZlRleHQuY2xhc3NOYW1lID0gXCJtaWQtc2VjdGlvbi1jb250ZW50XCI7XG5cbiAgICAgICAgbWlkU2VjdGlvbkNvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXRUaXRsZSk7XG4gICAgICAgIG1pZFNlY3Rpb25Db250ZW50LmFwcGVuZENoaWxkKGFib3V0VGV4dCk7XG4gICAgICAgIG1pZFNlY3Rpb25Db250ZW50LmFwcGVuZENoaWxkKGNoZWZUaXRsZSk7XG4gICAgICAgIG1pZFNlY3Rpb25Db250ZW50LmFwcGVuZENoaWxkKGNoZWZEaXYpO1xuICAgICAgICBjaGVmRGl2LmFwcGVuZENoaWxkKGNoZWZJbWcpO1xuICAgICAgICBjaGVmRGl2LmFwcGVuZENoaWxkKGNoZWZUZXh0KTtcbiAgICB9XG5cbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21pZC1zZWN0aW9uLWNvbnRlbnQnKSkge1xuICAgICAgICBjb25zdCBtaWRTZWN0aW9uQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtaWQtc2VjdGlvbi1jb250ZW50Jyk7XG5cbiAgICAgICAgd2hpbGUgKG1pZFNlY3Rpb25Db250ZW50Lmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgICAgICAgbWlkU2VjdGlvbkNvbnRlbnQuZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9idWlsZEhvbWUobWlkU2VjdGlvbkNvbnRlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG1pZFNlY3Rpb25Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1pZFNlY3Rpb25Db250ZW50LmlkID0gXCJtaWQtc2VjdGlvbi1jb250ZW50XCI7XG5cbiAgICAgICAgY29uc3QgbWlkU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtaWQtc2VjdGlvbicpO1xuXG4gICAgICAgIG1pZFNlY3Rpb24uYXBwZW5kQ2hpbGQobWlkU2VjdGlvbkNvbnRlbnQpO1xuXG4gICAgICAgIF9idWlsZEhvbWUobWlkU2VjdGlvbkNvbnRlbnQpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZEhvbWU7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgbG9hZENvbnRhY3QgZnJvbSAnLi9jb250YWN0JztcbmltcG9ydCBsb2FkSG9tZSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IGxvYWRNZW51IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgbG9hZFBhZ2UgZnJvbSAnLi9wYWdlLWxvYWQnO1xuXG5jb25zb2xlLmxvZyhcImluZGV4LmpzIHdhcyBjYWxsZWQgc3VjY2Vzc2Z1bGx5XCIpO1xuXG5sb2FkUGFnZSgpO1xubG9hZEhvbWUoKTtcblxuY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lLWJ0bicpO1xuaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRIb21lKTtcblxuY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LWJ0bicpO1xubWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRNZW51KTtcblxuY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0LWJ0bicpO1xuY29udGFjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRDb250YWN0KTsiLCJjb25zdCBsb2FkTWVudSA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnbWVudS5qcyB3YXMgY2FsbGVkIScpO1xuXG4gICAgLy9NZW51IGl0ZW1zIGFycmF5XG5cbiAgICBjb25zdCBtZW51QXJyYXkgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdzdXNoaScsXG4gICAgICAgICAgICBuYW1lOiAnc3VzaGkxJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRGVsaWNpb3VzIHN1c2hpIGRpc2gnLFxuICAgICAgICAgICAgcHJpY2U6ICckMTAnLFxuICAgICAgICAgICAgaW1nUGF0aDogJydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ3N1c2hpJyxcbiAgICAgICAgICAgIG5hbWU6ICdzdXNoaTInLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdEZWxpY2lvdXMgc3VzaGkgZGlzaCcsXG4gICAgICAgICAgICBwcmljZTogJyQxNScsXG4gICAgICAgICAgICBpbWdQYXRoOiAnJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAndGVtYWtpJyxcbiAgICAgICAgICAgIG5hbWU6ICd0ZW1ha2kxJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRGVsaWNpb3VzIHRlbWFraSBkaXNoJyxcbiAgICAgICAgICAgIHByaWNlOiAnJDIwJyxcbiAgICAgICAgICAgIGltZ1BhdGg6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdzYWtlJyxcbiAgICAgICAgICAgIG5hbWU6ICdzYWtlMScsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ09yaWdpbmFsIHNha2UgZnJvbSBKYXBhbicsXG4gICAgICAgICAgICBwcmljZTogJyQ1MCcsXG4gICAgICAgICAgICBpbWdQYXRoOiAnJ1xuICAgICAgICB9LFxuICAgIF07XG5cbiAgICBmdW5jdGlvbiBfYnVpbGRJdGVtcyh0eXBlKSB7XG5cbiAgICAgICAgbWVudUFycmF5LmZvckVhY2goIChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpZihpdGVtLnR5cGUgPT09IHR5cGUpe1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBpdGVtRGl2LmNsYXNzTmFtZSA9ICdpdGVtLWRpdic7XG4gICAgXG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbU5hbWVBbmRQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgICAgICAgICAgaXRlbU5hbWVBbmRQcmljZS5jbGFzc05hbWUgPSAnaXRlbS1uYW1lLXByaWNlJztcbiAgICAgICAgICAgICAgICBpdGVtTmFtZUFuZFByaWNlLmlubmVySFRNTCA9IGAke2l0ZW0ubmFtZX0gICAke2l0ZW0ucHJpY2V9YFxuXG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgICAgIGl0ZW1EZXNjcmlwdGlvbi5jbGFzc05hbWUgPSAnaXRlbS1kZXNjcmlwdGlvbic7XG4gICAgICAgICAgICAgICAgaXRlbURlc2NyaXB0aW9uLmlubmVySFRNTCA9IGl0ZW0uZGVzY3JpcHRpb247XG5cbiAgICAgICAgICAgICAgICBpdGVtRGl2LmFwcGVuZENoaWxkKGl0ZW1OYW1lQW5kUHJpY2UpO1xuICAgICAgICAgICAgICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQoaXRlbURlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgICAgICBtaWRTZWN0aW9uQ29udGVudC5hcHBlbmRDaGlsZChpdGVtRGl2KTtcbiAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBjb25zdCBtaWRTZWN0aW9uQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtaWQtc2VjdGlvbi1jb250ZW50Jyk7XG4gICAgd2hpbGUgKG1pZFNlY3Rpb25Db250ZW50Lmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgICBtaWRTZWN0aW9uQ29udGVudC5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IHN1c2hpVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHN1c2hpVGl0bGUuaW5uZXJIVE1MID0gJ1N1c2hpJztcbiAgICBzdXNoaVRpdGxlLmNsYXNzTmFtZSA9IFwibWlkLXNlY3Rpb24tdGl0bGVcIjtcblxuICAgIG1pZFNlY3Rpb25Db250ZW50LmFwcGVuZENoaWxkKHN1c2hpVGl0bGUpO1xuICAgIF9idWlsZEl0ZW1zKCdzdXNoaScpO1xuXG4gICAgY29uc3QgdGVtYWtpVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHRlbWFraVRpdGxlLmlubmVySFRNTCA9ICdUZW1ha2knO1xuICAgIHRlbWFraVRpdGxlLmNsYXNzTmFtZSA9IFwibWlkLXNlY3Rpb24tdGl0bGVcIjtcblxuICAgIG1pZFNlY3Rpb25Db250ZW50LmFwcGVuZENoaWxkKHRlbWFraVRpdGxlKTtcbiAgICBfYnVpbGRJdGVtcygndGVtYWtpJyk7XG5cbiAgICBjb25zdCBzYWtlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHNha2VUaXRsZS5pbm5lckhUTUwgPSAnU2FrZSc7XG4gICAgc2FrZVRpdGxlLmNsYXNzTmFtZSA9IFwibWlkLXNlY3Rpb24tdGl0bGVcIjtcbiAgICBcbiAgICBtaWRTZWN0aW9uQ29udGVudC5hcHBlbmRDaGlsZChzYWtlVGl0bGUpO1xuICAgIF9idWlsZEl0ZW1zKCdzYWtlJyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRNZW51OyIsImNvbnN0IGxvYWRQYWdlID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdwYWdlLWxvYWQuanMgd2FzIGNhbGxlZCEnKTtcbiAgICAvL0NyZWF0ZSBtYWluIGNvbnRlbnQgZGl2XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnQuaWQgPSBcImNvbnRlbnRcIjtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbiAgICAvL0NyZWF0ZSBoZWFkZXIsIG1pZCBzZWN0aW9uIGFuZCBmb290ZXIgZGl2c1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci5pZCA9IFwiaGVhZGVyXCI7XG5cbiAgICBjb25zdCBtaWRTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWlkU2VjdGlvbi5pZCA9IFwibWlkLXNlY3Rpb25cIjtcblxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb3Rlci5pZCA9IFwiZm9vdGVyXCI7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtaWRTZWN0aW9uKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XG5cbiAgICAvL0NyZWF0ZSBoZWFkZXIgZWxlbWVudHNcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgdGl0bGUuaW5uZXJIVE1MID0gXCJTYW11cmFpIFN1c2hpXCI7XG4gICAgdGl0bGUuaWQgPSBcInJlc3RhdXJhbnQtbmFtZVwiO1xuXG4gICAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGhvbWVCdG4uaW5uZXJIVE1MID0gXCJIb21lXCI7XG4gICAgaG9tZUJ0bi5pZCA9IFwiaG9tZS1idG5cIjtcbiAgICBob21lQnRuLmNsYXNzTmFtZSA9IFwibmF2LWJ1dHRvblwiO1xuXG4gICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG1lbnVCdG4uaW5uZXJIVE1MID0gXCJNZW51XCI7XG4gICAgbWVudUJ0bi5pZCA9IFwibWVudS1idG5cIjtcbiAgICBtZW51QnRuLmNsYXNzTmFtZSA9IFwibmF2LWJ1dHRvblwiO1xuXG4gICAgY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnRhY3RCdG4uaW5uZXJIVE1MID0gXCJDb250YWN0XCI7XG4gICAgY29udGFjdEJ0bi5pZCA9IFwiY29udGFjdC1idG5cIjtcbiAgICBjb250YWN0QnRuLmNsYXNzTmFtZSA9IFwibmF2LWJ1dHRvblwiO1xuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaG9tZUJ0bik7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG1lbnVCdG4pO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChjb250YWN0QnRuKTtcblxuICAgIC8vQ3JlYXRlIG1pZC1zZWN0aW9uIGVsZW1lbnRzXG4gICAgLy9kaXZcbiAgICAvLyAgPT5oMlxuICAgIC8vICA9PnBcbiAgICAvLyAgPT5oMlxuICAgIC8vICA9PmRpdlxuICAgIC8vICAgICAgPT5pbWdcbiAgICAvLyAgICAgID0+cFxuICAgIC8qY29uc3QgbWlkU2VjdGlvbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtaWRTZWN0aW9uQ29udGVudC5pZCA9IFwibWlkLXNlY3Rpb24tY29udGVudFwiO1xuXG4gICAgY29uc3QgYWJvdXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgYWJvdXRUaXRsZS5pbm5lckhUTUwgPSAnQWJvdXQnO1xuICAgIGFib3V0VGl0bGUuY2xhc3NOYW1lID0gXCJtaWQtc2VjdGlvbi10aXRsZVwiO1xuXG4gICAgY29uc3QgYWJvdXRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGFib3V0VGV4dC5pbm5lckhUTUwgPSAnU2FtdXJhaSBTdXNoaSBpcyBhIHRyYWRpdGlvbmFsIGphcGFuZXNlIHJlc3RhdXJhbnQgc3BlY2lhbGl6ZWQgb24gc3VzaGkgZGlzaGVzJztcbiAgICBhYm91dFRleHQuY2xhc3NOYW1lID0gXCJtaWQtc2VjdGlvbi1jb250ZW50XCI7XG5cbiAgICBjb25zdCBjaGVmVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNoZWZUaXRsZS5pbm5lckhUTUwgPSAnQ2hlZic7XG4gICAgY2hlZlRpdGxlLmNsYXNzTmFtZSA9IFwibWlkLXNlY3Rpb24tdGl0bGVcIjtcblxuICAgIGNvbnN0IGNoZWZEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjaGVmRGl2LmlkID0gXCJjaGVmLWNvbnRlbnRcIjtcblxuICAgIGNvbnN0IGNoZWZJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjaGVmSW1nLmlkID0gJ2NoZWYtaW1nJztcbiAgICBjaGVmSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgXCIjIyMjIyMjIyNcIik7XG5cbiAgICBjb25zdCBjaGVmVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjaGVmVGV4dC5pbm5lckhUTUwgPSAnU3VzaGkgTWFzdGVyIE9kYSBOb2J1bmFnYSBpcyBhIHJlbm93bmVkIHN1c2hpIHNwZWNpYWxpc3Qgd2lubmVyIG9mIG1hbnkgY3VsaW5hcnkgcHJpemVzJztcbiAgICBjaGVmVGV4dC5jbGFzc05hbWUgPSBcIm1pZC1zZWN0aW9uLWNvbnRlbnRcIjtcblxuICAgIG1pZFNlY3Rpb24uYXBwZW5kQ2hpbGQobWlkU2VjdGlvbkNvbnRlbnQpO1xuICAgIG1pZFNlY3Rpb25Db250ZW50LmFwcGVuZENoaWxkKGFib3V0VGl0bGUpO1xuICAgIG1pZFNlY3Rpb25Db250ZW50LmFwcGVuZENoaWxkKGFib3V0VGV4dCk7XG4gICAgbWlkU2VjdGlvbkNvbnRlbnQuYXBwZW5kQ2hpbGQoY2hlZlRpdGxlKTtcbiAgICBtaWRTZWN0aW9uQ29udGVudC5hcHBlbmRDaGlsZChjaGVmRGl2KTtcbiAgICBjaGVmRGl2LmFwcGVuZENoaWxkKGNoZWZJbWcpO1xuICAgIGNoZWZEaXYuYXBwZW5kQ2hpbGQoY2hlZlRleHQpOyovXG5cbiAgICAvL0NyZWF0ZSBmb290ZXIgZWxlbWVudHNcbiAgICBjb25zdCBmb290ZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGZvb3RlclRleHQuaWQgPSBcImZvb3Rlci10ZXh0XCI7XG4gICAgZm9vdGVyVGV4dC5pbm5lckhUTUwgPSBcIk1hZGUgYnkgXCI7XG5cbiAgICBjb25zdCBmb290ZXJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGZvb3Rlckxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcImh0dHBzOi8vZ2l0aHViLmNvbS9tYXRoZXVzcGw5MlwiKTtcbiAgICBmb290ZXJMaW5rLmlubmVySFRNTCA9IFwibWF0aGV1c3BsOTJcIjtcblxuICAgIGZvb3RlclRleHQuYXBwZW5kQ2hpbGQoZm9vdGVyTGluayk7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlclRleHQpO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRQYWdlOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
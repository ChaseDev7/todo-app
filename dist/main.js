/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Roboto-Regular.ttf */ "./src/Roboto-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./Roboto-Bold.ttf */ "./src/Roboto-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --border-color: rgb(209, 206, 206);
  --blue-color: rgba(79,179,238,1);
  --box-shadow-color: rgb(161, 151, 151);
}

@font-face {
  font-family: 'Roboto';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('ttf'), 
  url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('ttf');
  font-weight: 400, 700;
  font-style: normal;
}

body {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  font-family: 'Roboto';
  background: linear-gradient(142deg, rgba(97, 207, 97, 1) 0%, rgba(79,179,238,1) 100%);
}

#container {
  width: 100%;
  height: 100vh;
  display: flex;
}

 #left-container {
  width: 250px;
  min-width: 250px;
  height: auto;
  background-color: white;
  margin: 15px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px solid var(--border-color);
  box-shadow: 1px 1px 3px 1px var(--box-shadow-color);
}

#todo-list-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#todo-list-title {
  width: 100%;
  height: 20px;
  border-radius: 10px 10px 0 0;
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  padding: 7px 0;
  font-weight: bold;
  background-color: var(--blue-color);
  border-bottom: 1px solid var(--box-shadow-color);
}

#todo-list {
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.todo-list-item {
  width: 85%;
  margin: 1px;
  font-size: 15px;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.7s;
}

.todo-list-item:hover {
  background-color: var(--blue-color);
  color: white;
}

.todo-list-item-amount {
  border-radius: 50%;
  background-color: rgb(97, 207, 97);
  color: white;
  width: 23px;
  height: 23px;
  font-size: 12px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
}

#bottom-todo-container {
  width: 100%;
  display: flex;
  justify-content: start;
}

#add-new-todo {
  font-size: 15px;
  font-weight: bold;
  border-radius: 5px;
  color: rgb(161, 157, 157);
  margin: 15px;
  padding: 5px 10px;
  border: 1px solid var(--border-color);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 1px 1px 3px 1px var(--box-shadow-color);
  transition: 0.7s;
}

#add-new-todo:hover {
  background-color: var(--blue-color);
  color: white;
}

#main-container {
  padding: 15px;
  margin: 15px;
  width: 400px;
  height: auto;
  border-radius: 10px;
  background-color: white;
  border: 1px solid var(--border-color);
  box-shadow: 1px 1px 3px 1px var(--box-shadow-color);
}

#main-container-title {
  font-size: 19px;
  font-weight: bold;
  padding-bottom: 10px;
  border-bottom: 1px double var(--border-color);
}

#new-todo-container {
  padding: 15px;
  margin: 15px;
  width: 400px;
  height: auto;
  background-color: white;
  color: rgb(161, 157, 157);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border-radius: 10px;
  border: 1px solid var(--border-color);
  box-shadow: 1px 1px 3px 1px var(--box-shadow-color);
}

#form {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
}

#new-form-close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 0 5px;
  cursor: pointer;
  border: 1px solid var(--border-color);
}

#new-form-close-btn:hover {
  background-color: var(--blue-color);
  color: white;
}

input, textarea {
  margin-left: 10px;
  border: 1px solid var(--border-color);
  border-radius: 10px;
  font-size: 15px;
  padding: 3px 10px;
  font-weight: bold;
}

fieldset {
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}

#priority-fieldset {
  border: 1px solid var(--border-color);
  border-radius: 10px;
  height: 50px;
  width: 50%;
  padding: 10px 11px 0 11px;
  display: flex;
  align-items: center;
}

.priority-option {
  margin-top: 0;
}

textarea {
  resize: none;
  width: 200px;
  height: 80px;
}

#submit-todo-button {
  margin-top: 50px;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 20px;
  cursor: pointer;
  color: white;
  background-color: var(--blue-color);
  border: 1px solid gray;
  box-shadow: 1px 1px 3px 1px var(--box-shadow-color);
  transition: 0.7s;
}

#submit-todo-button:hover {
  background-color: white;
  color: var(--blue-color);
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n  --border-color: rgb(209, 206, 206);\r\n  --blue-color: rgba(79,179,238,1);\r\n  --box-shadow-color: rgb(161, 151, 151);\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Roboto';\r\n  src: url('./Roboto-Regular.ttf') format('ttf'), \r\n  url('./Roboto-Bold.ttf') format('ttf');\r\n  font-weight: 400, 700;\r\n  font-style: normal;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin: 0;\r\n  font-family: 'Roboto';\r\n  background: linear-gradient(142deg, rgba(97, 207, 97, 1) 0%, rgba(79,179,238,1) 100%);\r\n}\r\n\r\n#container {\r\n  width: 100%;\r\n  height: 100vh;\r\n  display: flex;\r\n}\r\n\r\n #left-container {\r\n  width: 250px;\r\n  min-width: 250px;\r\n  height: auto;\r\n  background-color: white;\r\n  margin: 15px;\r\n  border-radius: 10px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  border: 1px solid var(--border-color);\r\n  box-shadow: 1px 1px 3px 1px var(--box-shadow-color);\r\n}\r\n\r\n#todo-list-container {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n#todo-list-title {\r\n  width: 100%;\r\n  height: 20px;\r\n  border-radius: 10px 10px 0 0;\r\n  display: flex;\r\n  color: white;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 20px;\r\n  padding: 7px 0;\r\n  font-weight: bold;\r\n  background-color: var(--blue-color);\r\n  border-bottom: 1px solid var(--box-shadow-color);\r\n}\r\n\r\n#todo-list {\r\n  width: 100%;\r\n  margin-top: 10px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.todo-list-item {\r\n  width: 85%;\r\n  margin: 1px;\r\n  font-size: 15px;\r\n  padding: 5px 10px;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  transition: 0.7s;\r\n}\r\n\r\n.todo-list-item:hover {\r\n  background-color: var(--blue-color);\r\n  color: white;\r\n}\r\n\r\n.todo-list-item-amount {\r\n  border-radius: 50%;\r\n  background-color: rgb(97, 207, 97);\r\n  color: white;\r\n  width: 23px;\r\n  height: 23px;\r\n  font-size: 12px;\r\n  font-weight: bold;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n#bottom-todo-container {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: start;\r\n}\r\n\r\n#add-new-todo {\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n  border-radius: 5px;\r\n  color: rgb(161, 157, 157);\r\n  margin: 15px;\r\n  padding: 5px 10px;\r\n  border: 1px solid var(--border-color);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  cursor: pointer;\r\n  box-shadow: 1px 1px 3px 1px var(--box-shadow-color);\r\n  transition: 0.7s;\r\n}\r\n\r\n#add-new-todo:hover {\r\n  background-color: var(--blue-color);\r\n  color: white;\r\n}\r\n\r\n#main-container {\r\n  padding: 15px;\r\n  margin: 15px;\r\n  width: 400px;\r\n  height: auto;\r\n  border-radius: 10px;\r\n  background-color: white;\r\n  border: 1px solid var(--border-color);\r\n  box-shadow: 1px 1px 3px 1px var(--box-shadow-color);\r\n}\r\n\r\n#main-container-title {\r\n  font-size: 19px;\r\n  font-weight: bold;\r\n  padding-bottom: 10px;\r\n  border-bottom: 1px double var(--border-color);\r\n}\r\n\r\n#new-todo-container {\r\n  padding: 15px;\r\n  margin: 15px;\r\n  width: 400px;\r\n  height: auto;\r\n  background-color: white;\r\n  color: rgb(161, 157, 157);\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  position: relative;\r\n  border-radius: 10px;\r\n  border: 1px solid var(--border-color);\r\n  box-shadow: 1px 1px 3px 1px var(--box-shadow-color);\r\n}\r\n\r\n#form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n}\r\n\r\n#new-form-close-btn {\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 10px;\r\n  padding: 0 5px;\r\n  cursor: pointer;\r\n  border: 1px solid var(--border-color);\r\n}\r\n\r\n#new-form-close-btn:hover {\r\n  background-color: var(--blue-color);\r\n  color: white;\r\n}\r\n\r\ninput, textarea {\r\n  margin-left: 10px;\r\n  border: 1px solid var(--border-color);\r\n  border-radius: 10px;\r\n  font-size: 15px;\r\n  padding: 3px 10px;\r\n  font-weight: bold;\r\n}\r\n\r\nfieldset {\r\n  width: 100%;\r\n  font-size: 15px;\r\n  font-weight: 400;\r\n  border: none;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-top: 10px;\r\n}\r\n\r\n#priority-fieldset {\r\n  border: 1px solid var(--border-color);\r\n  border-radius: 10px;\r\n  height: 50px;\r\n  width: 50%;\r\n  padding: 10px 11px 0 11px;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.priority-option {\r\n  margin-top: 0;\r\n}\r\n\r\ntextarea {\r\n  resize: none;\r\n  width: 200px;\r\n  height: 80px;\r\n}\r\n\r\n#submit-todo-button {\r\n  margin-top: 50px;\r\n  border-radius: 5px;\r\n  padding: 10px 20px;\r\n  font-size: 20px;\r\n  cursor: pointer;\r\n  color: white;\r\n  background-color: var(--blue-color);\r\n  border: 1px solid gray;\r\n  box-shadow: 1px 1px 3px 1px var(--box-shadow-color);\r\n  transition: 0.7s;\r\n}\r\n\r\n#submit-todo-button:hover {\r\n  background-color: white;\r\n  color: var(--blue-color);\r\n}"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
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
    return [content].concat([sourceMapping]).join("\n");
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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/new-todo-form.js":
/*!******************************!*\
  !*** ./src/new-todo-form.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   newForm: () => (/* binding */ newForm),
/* harmony export */   todoList: () => (/* binding */ todoList)
/* harmony export */ });
const todoList = [];

function Todo(title, description, dueDate) {
  return { title, description, dueDate };
};

const newForm = () => {
  const newTodoContainer = document.querySelector("#new-todo-container");
  const emptyToDoList = document.querySelector("#empty-todo");
  newTodoContainer.removeChild(emptyToDoList);
  const todoForm = document.createElement("form");
  todoForm.setAttribute("id", "form");
  todoForm.textContent = "NEW TODO";
  newTodoContainer.appendChild(todoForm);

  const closeButton = document.createElement("div");
  closeButton.setAttribute("id", "new-form-close-btn");
  closeButton.textContent = "X";
  newTodoContainer.appendChild(closeButton);

  closeButton.addEventListener("click", closeNewToDoForm);

  const titleFieldset = document.createElement("fieldset");
  titleFieldset.classList.add("todo-fieldset");
  todoForm.appendChild(titleFieldset);

  const titleLabel = document.createElement("label");
  titleLabel.setAttribute("for", "title-input");
  titleLabel.textContent = "Title:";
  titleFieldset.appendChild(titleLabel);

  const title = document.createElement("input");
  title.setAttribute("id", "title-input");
  titleFieldset.appendChild(title);

  const descriptionFieldset = document.createElement("fieldset");
  descriptionFieldset.classList.add("todo-fieldset");
  todoForm.appendChild(descriptionFieldset);

  const descriptionLabel = document.createElement("label");
  descriptionLabel.setAttribute("for", "description-textarea");
  descriptionLabel.textContent = "Description:";
  descriptionFieldset.appendChild(descriptionLabel);

  const description = document.createElement("textarea");
  description.setAttribute("id", "description-textarea");
  descriptionFieldset.appendChild(description);

  const dueDateFieldset = document.createElement("fieldset");
  dueDateFieldset.classList.add("todo-fieldset");
  todoForm.appendChild(dueDateFieldset);

  const dueDateLabel = document.createElement("label");
  dueDateLabel.setAttribute("for", "due-date");
  dueDateLabel.textContent = "Due Date:";
  dueDateFieldset.appendChild(dueDateLabel);

  const dueDate = document.createElement("input");
  dueDate.setAttribute("id", "due-date");
  dueDate.setAttribute("type", "date");
  dueDateFieldset.appendChild(dueDate);

  const priorityFieldset = document.createElement("fieldset");
  priorityFieldset.classList.add("todo-fieldset");
  priorityFieldset.setAttribute("id", "priority-fieldset");
  todoForm.appendChild(priorityFieldset);

  const priorityLegend = document.createElement("legend");
  priorityLegend.setAttribute("for", "priority-fieldset");
  priorityLegend.textContent = "Priority:";
  priorityFieldset.appendChild(priorityLegend);

  const lowPriorityOption = document.createElement("input");
  lowPriorityOption.setAttribute("type", "radio");
  lowPriorityOption.classList.add("priority-option");
  lowPriorityOption.setAttribute("name", "priority-option");
  lowPriorityOption.setAttribute("id", "low-priority");
  priorityFieldset.appendChild(lowPriorityOption);

  const lowPriorityLabel = document.createElement("label");
  lowPriorityLabel.setAttribute("for", "low-priority");
  lowPriorityLabel.textContent = "Low";
  priorityFieldset.appendChild(lowPriorityLabel);

  const highPriorityOption = document.createElement("input");
  highPriorityOption.setAttribute("type", "radio");
  highPriorityOption.classList.add("priority-option");
  highPriorityOption.setAttribute("name", "priority-option");
  highPriorityOption.setAttribute("id", "high-priority");
  priorityFieldset.appendChild(highPriorityOption);

  const highPriorityLabel = document.createElement("label");
  highPriorityLabel.setAttribute("for", "high-priority");
  highPriorityLabel.textContent = "High";
  priorityFieldset.appendChild(highPriorityLabel);

  const submitToDoFormButton = document.createElement("input");
  submitToDoFormButton.setAttribute("type", "button");
  submitToDoFormButton.setAttribute("id", "submit-todo-button");
  submitToDoFormButton.setAttribute("value", "SUBMIT TODO");
  todoForm.appendChild(submitToDoFormButton);

  submitToDoFormButton.addEventListener("click", addTodoIntoList);

  function closeNewToDoForm() {
    newTodoContainer.removeChild(todoForm);
    newTodoContainer.appendChild(emptyToDoList);
    newTodoContainer.removeChild(closeButton);
  };
};

const addTodoIntoList = () => {
  const title = document.querySelector("#title-input").value;
  const description = document.querySelector("#description-textarea").value;
  const dueDate = document.querySelector("#due-date").value;

  const newTodo = Todo(title, description, dueDate);
  todoList.push(newTodo);
  console.log(todoList);

  const mainContainer = document.querySelector("#main-container");
  const newToDoDiv = document.createElement("div");
  newToDoDiv.textContent = newTodo.title;
  const newToDoDivDescription = document.createElement("div");
  newToDoDivDescription.textContent = newTodo.description;
  mainContainer.appendChild(newToDoDiv);
  mainContainer.appendChild(newToDoDivDescription);
};



/***/ }),

/***/ "./src/Roboto-Bold.ttf":
/*!*****************************!*\
  !*** ./src/Roboto-Bold.ttf ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f80816a5455d171f948d.ttf";

/***/ }),

/***/ "./src/Roboto-Regular.ttf":
/*!********************************!*\
  !*** ./src/Roboto-Regular.ttf ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc2b5060f7accec5cf74.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _new_todo_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-todo-form */ "./src/new-todo-form.js");



const container = document.createElement("div");
container.setAttribute("id", "container");
document.body.appendChild(container);

const leftContainer = document.createElement("div");
leftContainer.setAttribute("id", "left-container");
container.appendChild(leftContainer);

const todoListContainer = document.createElement("div");
todoListContainer.setAttribute("id", "todo-list-container");
leftContainer.appendChild(todoListContainer);

const todoListTitle = document.createElement("div");
todoListTitle.setAttribute("id", "todo-list-title");
todoListTitle.textContent = "TODO LISTS";
todoListContainer.appendChild(todoListTitle);

const todoList = document.createElement("div");
todoList.setAttribute("id", "todo-list");
todoListContainer.appendChild(todoList);

const todoListAll = document.createElement("div");
todoListAll.classList.add("todo-list-item");
todoList.appendChild(todoListAll);

const todoListAllText = document.createElement("div");
todoListAllText.classList.add("todo-list-item-text");
todoListAllText.textContent = "All";
todoListAll.appendChild(todoListAllText);

const todoListAllAmount = document.createElement("div");
todoListAllAmount.classList.add("todo-list-item-amount");
todoListAllAmount.textContent = "0";
todoListAll.appendChild(todoListAllAmount);

const todoListPersonal = document.createElement("div");
todoListPersonal.classList.add("todo-list-item");
todoList.appendChild(todoListPersonal);

const todoListPersonalText = document.createElement("div");
todoListPersonalText.classList.add("todo-list-item-text");
todoListPersonalText.textContent = "Personal";
todoListPersonal.appendChild(todoListPersonalText);

const todoListPersonalAmount = document.createElement("div");
todoListPersonalAmount.classList.add("todo-list-item-amount");
todoListPersonalAmount.textContent = "2";
todoListPersonal.appendChild(todoListPersonalAmount);

const todoListWork = document.createElement("div");
todoListWork.classList.add("todo-list-item");
todoList.appendChild(todoListWork);

const todoListWorkText = document.createElement("div");
todoListWorkText.classList.add("todo-list-item-text");
todoListWorkText.textContent = "Work";
todoListWork.appendChild(todoListWorkText);

const todoListWorkAmount = document.createElement("div");
todoListWorkAmount.classList.add("todo-list-item-amount");
todoListWorkAmount.textContent = "5";
todoListWork.appendChild(todoListWorkAmount);

const bottomTodoContainer = document.createElement("div");
bottomTodoContainer.setAttribute("id", "bottom-todo-container");
leftContainer.appendChild(bottomTodoContainer);

const addNewTodo = document.createElement("div");
addNewTodo.setAttribute("id", "add-new-todo");
addNewTodo.textContent = "+ New Todo";
bottomTodoContainer.appendChild(addNewTodo);

addNewTodo.addEventListener("click", _new_todo_form__WEBPACK_IMPORTED_MODULE_1__.newForm);

const mainContainer = document.createElement("div");
mainContainer.setAttribute("id", "main-container");
container.appendChild(mainContainer);

const mainContainerTitle = document.createElement("div");
mainContainerTitle.setAttribute("id", "main-container-title");
mainContainerTitle.textContent = "ALL";
mainContainer.appendChild(mainContainerTitle);

const newTodoContainer = document.createElement("div");
newTodoContainer.setAttribute("id", "new-todo-container");
container.appendChild(newTodoContainer);

const emptyToDoList = document.createElement("div");
emptyToDoList.setAttribute("id", "empty-todo");
emptyToDoList.textContent = "No todo item selected.";
newTodoContainer.appendChild(emptyToDoList);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHFIQUF1QztBQUNuRiw0Q0FBNEMsK0dBQW9DO0FBQ2hGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hELFFBQVEsbUNBQW1DO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxPQUFPLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUss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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2hJQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ3FCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLG1EQUFPO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9uZXctdG9kby1mb3JtLmpzIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vUm9ib3RvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9Sb2JvdG8tQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XHJcbiAgLS1ib3JkZXItY29sb3I6IHJnYigyMDksIDIwNiwgMjA2KTtcclxuICAtLWJsdWUtY29sb3I6IHJnYmEoNzksMTc5LDIzOCwxKTtcclxuICAtLWJveC1zaGFkb3ctY29sb3I6IHJnYigxNjEsIDE1MSwgMTUxKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xyXG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdCgndHRmJyksIFxyXG4gIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQoJ3R0ZicpO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDAsIDcwMDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE0MmRlZywgcmdiYSg5NywgMjA3LCA5NywgMSkgMCUsIHJnYmEoNzksMTc5LDIzOCwxKSAxMDAlKTtcclxufVxyXG5cclxuI2NvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4gI2xlZnQtY29udGFpbmVyIHtcclxuICB3aWR0aDogMjUwcHg7XHJcbiAgbWluLXdpZHRoOiAyNTBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luOiAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbiAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggMXB4IHZhcigtLWJveC1zaGFkb3ctY29sb3IpO1xyXG59XHJcblxyXG4jdG9kby1saXN0LWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbiN0b2RvLWxpc3QtdGl0bGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDdweCAwO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUtY29sb3IpO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3gtc2hhZG93LWNvbG9yKTtcclxufVxyXG5cclxuI3RvZG8tbGlzdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnRvZG8tbGlzdC1pdGVtIHtcclxuICB3aWR0aDogODUlO1xyXG4gIG1hcmdpbjogMXB4O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogMC43cztcclxufVxyXG5cclxuLnRvZG8tbGlzdC1pdGVtOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlLWNvbG9yKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi50b2RvLWxpc3QtaXRlbS1hbW91bnQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTcsIDIwNywgOTcpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogMjNweDtcclxuICBoZWlnaHQ6IDIzcHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuI2JvdHRvbS10b2RvLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG59XHJcblxyXG4jYWRkLW5ldy10b2RvIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGNvbG9yOiByZ2IoMTYxLCAxNTcsIDE1Nyk7XHJcbiAgbWFyZ2luOiAxNXB4O1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAxcHggdmFyKC0tYm94LXNoYWRvdy1jb2xvcik7XHJcbiAgdHJhbnNpdGlvbjogMC43cztcclxufVxyXG5cclxuI2FkZC1uZXctdG9kbzpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZS1jb2xvcik7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jbWFpbi1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgbWFyZ2luOiAxNXB4O1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IDFweCB2YXIoLS1ib3gtc2hhZG93LWNvbG9yKTtcclxufVxyXG5cclxuI21haW4tY29udGFpbmVyLXRpdGxlIHtcclxuICBmb250LXNpemU6IDE5cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdWJsZSB2YXIoLS1ib3JkZXItY29sb3IpO1xyXG59XHJcblxyXG4jbmV3LXRvZG8tY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIG1hcmdpbjogMTVweDtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOiByZ2IoMTYxLCAxNTcsIDE1Nyk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcclxuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAxcHggdmFyKC0tYm94LXNoYWRvdy1jb2xvcik7XHJcbn1cclxuXHJcbiNmb3JtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbiNuZXctZm9ybS1jbG9zZS1idG4ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEwcHg7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgcGFkZGluZzogMCA1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbn1cclxuXHJcbiNuZXctZm9ybS1jbG9zZS1idG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUtY29sb3IpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaW5wdXQsIHRleHRhcmVhIHtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIHBhZGRpbmc6IDNweCAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5maWVsZHNldCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4jcHJpb3JpdHktZmllbGRzZXQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBwYWRkaW5nOiAxMHB4IDExcHggMCAxMXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnByaW9yaXR5LW9wdGlvbiB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxudGV4dGFyZWEge1xyXG4gIHJlc2l6ZTogbm9uZTtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG59XHJcblxyXG4jc3VibWl0LXRvZG8tYnV0dG9uIHtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZS1jb2xvcik7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAxcHggdmFyKC0tYm94LXNoYWRvdy1jb2xvcik7XHJcbiAgdHJhbnNpdGlvbjogMC43cztcclxufVxyXG5cclxuI3N1Ym1pdC10b2RvLWJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgY29sb3I6IHZhcigtLWJsdWUtY29sb3IpO1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usa0NBQWtDO0VBQ2xDLGdDQUFnQztFQUNoQyxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckI7dURBQ3NDO0VBQ3RDLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QscUJBQXFCO0VBQ3JCLHFGQUFxRjtBQUN2Rjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsYUFBYTtBQUNmOztDQUVDO0VBQ0MsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsYUFB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Q2YsWUFBWTtFQUNaLG1DQUFtQztFQUNuQyxzQkFBc0I7RUFDdEIsbURBQW1EO0VBQ25ELGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qix3QkFBd0I7QUFDMUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgLS1ib3JkZXItY29sb3I6IHJnYigyMDksIDIwNiwgMjA2KTtcXHJcXG4gIC0tYmx1ZS1jb2xvcjogcmdiYSg3OSwxNzksMjM4LDEpO1xcclxcbiAgLS1ib3gtc2hhZG93LWNvbG9yOiByZ2IoMTYxLCAxNTEsIDE1MSk7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcclxcbiAgc3JjOiB1cmwoJy4vUm9ib3RvLVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0dGYnKSwgXFxyXFxuICB1cmwoJy4vUm9ib3RvLUJvbGQudHRmJykgZm9ybWF0KCd0dGYnKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDAsIDcwMDtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBmb250LWZhbWlseTogJ1JvYm90byc7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQyZGVnLCByZ2JhKDk3LCAyMDcsIDk3LCAxKSAwJSwgcmdiYSg3OSwxNzksMjM4LDEpIDEwMCUpO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbiAjbGVmdC1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDI1MHB4O1xcclxcbiAgbWluLXdpZHRoOiAyNTBweDtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgbWFyZ2luOiAxNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxyXFxuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAxcHggdmFyKC0tYm94LXNoYWRvdy1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbiN0b2RvLWxpc3QtY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jdG9kby1saXN0LXRpdGxlIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBwYWRkaW5nOiA3cHggMDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZS1jb2xvcik7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm94LXNoYWRvdy1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbiN0b2RvLWxpc3Qge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1saXN0LWl0ZW0ge1xcclxcbiAgd2lkdGg6IDg1JTtcXHJcXG4gIG1hcmdpbjogMXB4O1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IDAuN3M7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWxpc3QtaXRlbTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlLWNvbG9yKTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tbGlzdC1pdGVtLWFtb3VudCB7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTcsIDIwNywgOTcpO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgd2lkdGg6IDIzcHg7XFxyXFxuICBoZWlnaHQ6IDIzcHg7XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNib3R0b20tdG9kby1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC1uZXctdG9kbyB7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGNvbG9yOiByZ2IoMTYxLCAxNTcsIDE1Nyk7XFxyXFxuICBtYXJnaW46IDE1cHg7XFxyXFxuICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggMXB4IHZhcigtLWJveC1zaGFkb3ctY29sb3IpO1xcclxcbiAgdHJhbnNpdGlvbjogMC43cztcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC1uZXctdG9kbzpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlLWNvbG9yKTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuI21haW4tY29udGFpbmVyIHtcXHJcXG4gIHBhZGRpbmc6IDE1cHg7XFxyXFxuICBtYXJnaW46IDE1cHg7XFxyXFxuICB3aWR0aDogNDAwcHg7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcclxcbiAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggMXB4IHZhcigtLWJveC1zaGFkb3ctY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4jbWFpbi1jb250YWluZXItdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAxOXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBkb3VibGUgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy10b2RvLWNvbnRhaW5lciB7XFxyXFxuICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgbWFyZ2luOiAxNXB4O1xcclxcbiAgd2lkdGg6IDQwMHB4O1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBjb2xvcjogcmdiKDE2MSwgMTU3LCAxNTcpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxyXFxuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAxcHggdmFyKC0tYm94LXNoYWRvdy1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbiNmb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LWZvcm0tY2xvc2UtYnRuIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMTBweDtcXHJcXG4gIHJpZ2h0OiAxMHB4O1xcclxcbiAgcGFkZGluZzogMCA1cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LWZvcm0tY2xvc2UtYnRuOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUtY29sb3IpO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCwgdGV4dGFyZWEge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIHBhZGRpbmc6IDNweCAxMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbmZpZWxkc2V0IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcHJpb3JpdHktZmllbGRzZXQge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgcGFkZGluZzogMTBweCAxMXB4IDAgMTFweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktb3B0aW9uIHtcXHJcXG4gIG1hcmdpbi10b3A6IDA7XFxyXFxufVxcclxcblxcclxcbnRleHRhcmVhIHtcXHJcXG4gIHJlc2l6ZTogbm9uZTtcXHJcXG4gIHdpZHRoOiAyMDBweDtcXHJcXG4gIGhlaWdodDogODBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3N1Ym1pdC10b2RvLWJ1dHRvbiB7XFxyXFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZS1jb2xvcik7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xcclxcbiAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggMXB4IHZhcigtLWJveC1zaGFkb3ctY29sb3IpO1xcclxcbiAgdHJhbnNpdGlvbjogMC43cztcXHJcXG59XFxyXFxuXFxyXFxuI3N1Ym1pdC10b2RvLWJ1dHRvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1ibHVlLWNvbG9yKTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCB0b2RvTGlzdCA9IFtdO1xyXG5cclxuZnVuY3Rpb24gVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUpIHtcclxuICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUgfTtcclxufTtcclxuXHJcbmNvbnN0IG5ld0Zvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgbmV3VG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LXRvZG8tY29udGFpbmVyXCIpO1xyXG4gIGNvbnN0IGVtcHR5VG9Eb0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VtcHR5LXRvZG9cIik7XHJcbiAgbmV3VG9kb0NvbnRhaW5lci5yZW1vdmVDaGlsZChlbXB0eVRvRG9MaXN0KTtcclxuICBjb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xyXG4gIHRvZG9Gb3JtLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZm9ybVwiKTtcclxuICB0b2RvRm9ybS50ZXh0Q29udGVudCA9IFwiTkVXIFRPRE9cIjtcclxuICBuZXdUb2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9Gb3JtKTtcclxuXHJcbiAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNsb3NlQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmV3LWZvcm0tY2xvc2UtYnRuXCIpO1xyXG4gIGNsb3NlQnV0dG9uLnRleHRDb250ZW50ID0gXCJYXCI7XHJcbiAgbmV3VG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XHJcblxyXG4gIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZU5ld1RvRG9Gb3JtKTtcclxuXHJcbiAgY29uc3QgdGl0bGVGaWVsZHNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKTtcclxuICB0aXRsZUZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWZpZWxkc2V0XCIpO1xyXG4gIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHRpdGxlRmllbGRzZXQpO1xyXG5cclxuICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gIHRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGl0bGUtaW5wdXRcIik7XHJcbiAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9IFwiVGl0bGU6XCI7XHJcbiAgdGl0bGVGaWVsZHNldC5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcclxuXHJcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgdGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0aXRsZS1pbnB1dFwiKTtcclxuICB0aXRsZUZpZWxkc2V0LmFwcGVuZENoaWxkKHRpdGxlKTtcclxuXHJcbiAgY29uc3QgZGVzY3JpcHRpb25GaWVsZHNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKTtcclxuICBkZXNjcmlwdGlvbkZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWZpZWxkc2V0XCIpO1xyXG4gIHRvZG9Gb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRmllbGRzZXQpO1xyXG5cclxuICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gIGRlc2NyaXB0aW9uTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZGVzY3JpcHRpb24tdGV4dGFyZWFcIik7XHJcbiAgZGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb246XCI7XHJcbiAgZGVzY3JpcHRpb25GaWVsZHNldC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKTtcclxuXHJcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XHJcbiAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkZXNjcmlwdGlvbi10ZXh0YXJlYVwiKTtcclxuICBkZXNjcmlwdGlvbkZpZWxkc2V0LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcclxuXHJcbiAgY29uc3QgZHVlRGF0ZUZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpO1xyXG4gIGR1ZURhdGVGaWVsZHNldC5jbGFzc0xpc3QuYWRkKFwidG9kby1maWVsZHNldFwiKTtcclxuICB0b2RvRm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlRmllbGRzZXQpO1xyXG5cclxuICBjb25zdCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgZHVlRGF0ZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImR1ZS1kYXRlXCIpO1xyXG4gIGR1ZURhdGVMYWJlbC50ZXh0Q29udGVudCA9IFwiRHVlIERhdGU6XCI7XHJcbiAgZHVlRGF0ZUZpZWxkc2V0LmFwcGVuZENoaWxkKGR1ZURhdGVMYWJlbCk7XHJcblxyXG4gIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImR1ZS1kYXRlXCIpO1xyXG4gIGR1ZURhdGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XHJcbiAgZHVlRGF0ZUZpZWxkc2V0LmFwcGVuZENoaWxkKGR1ZURhdGUpO1xyXG5cclxuICBjb25zdCBwcmlvcml0eUZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpO1xyXG4gIHByaW9yaXR5RmllbGRzZXQuY2xhc3NMaXN0LmFkZChcInRvZG8tZmllbGRzZXRcIik7XHJcbiAgcHJpb3JpdHlGaWVsZHNldC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByaW9yaXR5LWZpZWxkc2V0XCIpO1xyXG4gIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5RmllbGRzZXQpO1xyXG5cclxuICBjb25zdCBwcmlvcml0eUxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsZWdlbmRcIik7XHJcbiAgcHJpb3JpdHlMZWdlbmQuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwicHJpb3JpdHktZmllbGRzZXRcIik7XHJcbiAgcHJpb3JpdHlMZWdlbmQudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OlwiO1xyXG4gIHByaW9yaXR5RmllbGRzZXQuYXBwZW5kQ2hpbGQocHJpb3JpdHlMZWdlbmQpO1xyXG5cclxuICBjb25zdCBsb3dQcmlvcml0eU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBsb3dQcmlvcml0eU9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFkaW9cIik7XHJcbiAgbG93UHJpb3JpdHlPcHRpb24uY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LW9wdGlvblwiKTtcclxuICBsb3dQcmlvcml0eU9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJpb3JpdHktb3B0aW9uXCIpO1xyXG4gIGxvd1ByaW9yaXR5T3B0aW9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibG93LXByaW9yaXR5XCIpO1xyXG4gIHByaW9yaXR5RmllbGRzZXQuYXBwZW5kQ2hpbGQobG93UHJpb3JpdHlPcHRpb24pO1xyXG5cclxuICBjb25zdCBsb3dQcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gIGxvd1ByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwibG93LXByaW9yaXR5XCIpO1xyXG4gIGxvd1ByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSBcIkxvd1wiO1xyXG4gIHByaW9yaXR5RmllbGRzZXQuYXBwZW5kQ2hpbGQobG93UHJpb3JpdHlMYWJlbCk7XHJcblxyXG4gIGNvbnN0IGhpZ2hQcmlvcml0eU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBoaWdoUHJpb3JpdHlPcHRpb24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhZGlvXCIpO1xyXG4gIGhpZ2hQcmlvcml0eU9wdGlvbi5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktb3B0aW9uXCIpO1xyXG4gIGhpZ2hQcmlvcml0eU9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJpb3JpdHktb3B0aW9uXCIpO1xyXG4gIGhpZ2hQcmlvcml0eU9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhpZ2gtcHJpb3JpdHlcIik7XHJcbiAgcHJpb3JpdHlGaWVsZHNldC5hcHBlbmRDaGlsZChoaWdoUHJpb3JpdHlPcHRpb24pO1xyXG5cclxuICBjb25zdCBoaWdoUHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICBoaWdoUHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJoaWdoLXByaW9yaXR5XCIpO1xyXG4gIGhpZ2hQcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gXCJIaWdoXCI7XHJcbiAgcHJpb3JpdHlGaWVsZHNldC5hcHBlbmRDaGlsZChoaWdoUHJpb3JpdHlMYWJlbCk7XHJcblxyXG4gIGNvbnN0IHN1Ym1pdFRvRG9Gb3JtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIHN1Ym1pdFRvRG9Gb3JtQnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XHJcbiAgc3VibWl0VG9Eb0Zvcm1CdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzdWJtaXQtdG9kby1idXR0b25cIik7XHJcbiAgc3VibWl0VG9Eb0Zvcm1CdXR0b24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJTVUJNSVQgVE9ET1wiKTtcclxuICB0b2RvRm9ybS5hcHBlbmRDaGlsZChzdWJtaXRUb0RvRm9ybUJ1dHRvbik7XHJcblxyXG4gIHN1Ym1pdFRvRG9Gb3JtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRUb2RvSW50b0xpc3QpO1xyXG5cclxuICBmdW5jdGlvbiBjbG9zZU5ld1RvRG9Gb3JtKCkge1xyXG4gICAgbmV3VG9kb0NvbnRhaW5lci5yZW1vdmVDaGlsZCh0b2RvRm9ybSk7XHJcbiAgICBuZXdUb2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKGVtcHR5VG9Eb0xpc3QpO1xyXG4gICAgbmV3VG9kb0NvbnRhaW5lci5yZW1vdmVDaGlsZChjbG9zZUJ1dHRvbik7XHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IGFkZFRvZG9JbnRvTGlzdCA9ICgpID0+IHtcclxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGUtaW5wdXRcIikudmFsdWU7XHJcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rlc2NyaXB0aW9uLXRleHRhcmVhXCIpLnZhbHVlO1xyXG4gIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2R1ZS1kYXRlXCIpLnZhbHVlO1xyXG5cclxuICBjb25zdCBuZXdUb2RvID0gVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUpO1xyXG4gIHRvZG9MaXN0LnB1c2gobmV3VG9kbyk7XHJcbiAgY29uc29sZS5sb2codG9kb0xpc3QpO1xyXG5cclxuICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluLWNvbnRhaW5lclwiKTtcclxuICBjb25zdCBuZXdUb0RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBuZXdUb0RvRGl2LnRleHRDb250ZW50ID0gbmV3VG9kby50aXRsZTtcclxuICBjb25zdCBuZXdUb0RvRGl2RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG5ld1RvRG9EaXZEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IG5ld1RvZG8uZGVzY3JpcHRpb247XHJcbiAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdUb0RvRGl2KTtcclxuICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1RvRG9EaXZEZXNjcmlwdGlvbik7XHJcbn07XHJcblxyXG5leHBvcnQgeyBuZXdGb3JtLCB0b2RvTGlzdCB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7IG5ld0Zvcm0gfSBmcm9tICcuL25ldy10b2RvLWZvcm0nO1xyXG5cclxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGFpbmVyXCIpO1xyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcblxyXG5jb25zdCBsZWZ0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxubGVmdENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxlZnQtY29udGFpbmVyXCIpO1xyXG5jb250YWluZXIuYXBwZW5kQ2hpbGQobGVmdENvbnRhaW5lcik7XHJcblxyXG5jb25zdCB0b2RvTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbnRvZG9MaXN0Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kby1saXN0LWNvbnRhaW5lclwiKTtcclxubGVmdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvTGlzdENvbnRhaW5lcik7XHJcblxyXG5jb25zdCB0b2RvTGlzdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxudG9kb0xpc3RUaXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG8tbGlzdC10aXRsZVwiKTtcclxudG9kb0xpc3RUaXRsZS50ZXh0Q29udGVudCA9IFwiVE9ETyBMSVNUU1wiO1xyXG50b2RvTGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvTGlzdFRpdGxlKTtcclxuXHJcbmNvbnN0IHRvZG9MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxudG9kb0xpc3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvLWxpc3RcIik7XHJcbnRvZG9MaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9MaXN0KTtcclxuXHJcbmNvbnN0IHRvZG9MaXN0QWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxudG9kb0xpc3RBbGwuY2xhc3NMaXN0LmFkZChcInRvZG8tbGlzdC1pdGVtXCIpO1xyXG50b2RvTGlzdC5hcHBlbmRDaGlsZCh0b2RvTGlzdEFsbCk7XHJcblxyXG5jb25zdCB0b2RvTGlzdEFsbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG50b2RvTGlzdEFsbFRleHQuY2xhc3NMaXN0LmFkZChcInRvZG8tbGlzdC1pdGVtLXRleHRcIik7XHJcbnRvZG9MaXN0QWxsVGV4dC50ZXh0Q29udGVudCA9IFwiQWxsXCI7XHJcbnRvZG9MaXN0QWxsLmFwcGVuZENoaWxkKHRvZG9MaXN0QWxsVGV4dCk7XHJcblxyXG5jb25zdCB0b2RvTGlzdEFsbEFtb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbnRvZG9MaXN0QWxsQW1vdW50LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWxpc3QtaXRlbS1hbW91bnRcIik7XHJcbnRvZG9MaXN0QWxsQW1vdW50LnRleHRDb250ZW50ID0gXCIwXCI7XHJcbnRvZG9MaXN0QWxsLmFwcGVuZENoaWxkKHRvZG9MaXN0QWxsQW1vdW50KTtcclxuXHJcbmNvbnN0IHRvZG9MaXN0UGVyc29uYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG50b2RvTGlzdFBlcnNvbmFsLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWxpc3QtaXRlbVwiKTtcclxudG9kb0xpc3QuYXBwZW5kQ2hpbGQodG9kb0xpc3RQZXJzb25hbCk7XHJcblxyXG5jb25zdCB0b2RvTGlzdFBlcnNvbmFsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbnRvZG9MaXN0UGVyc29uYWxUZXh0LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWxpc3QtaXRlbS10ZXh0XCIpO1xyXG50b2RvTGlzdFBlcnNvbmFsVGV4dC50ZXh0Q29udGVudCA9IFwiUGVyc29uYWxcIjtcclxudG9kb0xpc3RQZXJzb25hbC5hcHBlbmRDaGlsZCh0b2RvTGlzdFBlcnNvbmFsVGV4dCk7XHJcblxyXG5jb25zdCB0b2RvTGlzdFBlcnNvbmFsQW1vdW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxudG9kb0xpc3RQZXJzb25hbEFtb3VudC5jbGFzc0xpc3QuYWRkKFwidG9kby1saXN0LWl0ZW0tYW1vdW50XCIpO1xyXG50b2RvTGlzdFBlcnNvbmFsQW1vdW50LnRleHRDb250ZW50ID0gXCIyXCI7XHJcbnRvZG9MaXN0UGVyc29uYWwuYXBwZW5kQ2hpbGQodG9kb0xpc3RQZXJzb25hbEFtb3VudCk7XHJcblxyXG5jb25zdCB0b2RvTGlzdFdvcmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG50b2RvTGlzdFdvcmsuY2xhc3NMaXN0LmFkZChcInRvZG8tbGlzdC1pdGVtXCIpO1xyXG50b2RvTGlzdC5hcHBlbmRDaGlsZCh0b2RvTGlzdFdvcmspO1xyXG5cclxuY29uc3QgdG9kb0xpc3RXb3JrVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbnRvZG9MaXN0V29ya1RleHQuY2xhc3NMaXN0LmFkZChcInRvZG8tbGlzdC1pdGVtLXRleHRcIik7XHJcbnRvZG9MaXN0V29ya1RleHQudGV4dENvbnRlbnQgPSBcIldvcmtcIjtcclxudG9kb0xpc3RXb3JrLmFwcGVuZENoaWxkKHRvZG9MaXN0V29ya1RleHQpO1xyXG5cclxuY29uc3QgdG9kb0xpc3RXb3JrQW1vdW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxudG9kb0xpc3RXb3JrQW1vdW50LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWxpc3QtaXRlbS1hbW91bnRcIik7XHJcbnRvZG9MaXN0V29ya0Ftb3VudC50ZXh0Q29udGVudCA9IFwiNVwiO1xyXG50b2RvTGlzdFdvcmsuYXBwZW5kQ2hpbGQodG9kb0xpc3RXb3JrQW1vdW50KTtcclxuXHJcbmNvbnN0IGJvdHRvbVRvZG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5ib3R0b21Ub2RvQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYm90dG9tLXRvZG8tY29udGFpbmVyXCIpO1xyXG5sZWZ0Q29udGFpbmVyLmFwcGVuZENoaWxkKGJvdHRvbVRvZG9Db250YWluZXIpO1xyXG5cclxuY29uc3QgYWRkTmV3VG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmFkZE5ld1RvZG8uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGQtbmV3LXRvZG9cIik7XHJcbmFkZE5ld1RvZG8udGV4dENvbnRlbnQgPSBcIisgTmV3IFRvZG9cIjtcclxuYm90dG9tVG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGROZXdUb2RvKTtcclxuXHJcbmFkZE5ld1RvZG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5ld0Zvcm0pO1xyXG5cclxuY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbm1haW5Db250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluLWNvbnRhaW5lclwiKTtcclxuY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5Db250YWluZXIpO1xyXG5cclxuY29uc3QgbWFpbkNvbnRhaW5lclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxubWFpbkNvbnRhaW5lclRpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFpbi1jb250YWluZXItdGl0bGVcIik7XHJcbm1haW5Db250YWluZXJUaXRsZS50ZXh0Q29udGVudCA9IFwiQUxMXCI7XHJcbm1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQobWFpbkNvbnRhaW5lclRpdGxlKTtcclxuXHJcbmNvbnN0IG5ld1RvZG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5uZXdUb2RvQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmV3LXRvZG8tY29udGFpbmVyXCIpO1xyXG5jb250YWluZXIuYXBwZW5kQ2hpbGQobmV3VG9kb0NvbnRhaW5lcik7XHJcblxyXG5jb25zdCBlbXB0eVRvRG9MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuZW1wdHlUb0RvTGlzdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVtcHR5LXRvZG9cIik7XHJcbmVtcHR5VG9Eb0xpc3QudGV4dENvbnRlbnQgPSBcIk5vIHRvZG8gaXRlbSBzZWxlY3RlZC5cIjtcclxubmV3VG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZChlbXB0eVRvRG9MaXN0KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
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
  border-radius: 9px 9px 0 0;
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
  border-bottom: 1px double var(--box-shadow-color);
}

#todos-container {
  width: 100%;
  height: auto;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
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

label, legend {
  font-size: 12px;
}

textarea {
  resize: none;
  width: 150px;
  height: 130px;
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
}

.todo-item {
  width: 90%;
  padding: 10px 5px;
  color: gray;
  font-weight: bold;
  font-size: 14px;
  margin: 2px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.7s;
  cursor: pointer;
  border-bottom: 1px solid var(--border-color);
}

.todo-item:hover {
  background-color: var(--blue-color);
  color: white;
  border-radius: 10px;
}

.item-due-date {
  font-size: 11px;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n  --border-color: rgb(209, 206, 206);\r\n  --blue-color: rgba(79,179,238,1);\r\n  --box-shadow-color: rgb(161, 151, 151);\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Roboto';\r\n  src: url('./Roboto-Regular.ttf') format('ttf'), \r\n  url('./Roboto-Bold.ttf') format('ttf');\r\n  font-weight: 400, 700;\r\n  font-style: normal;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin: 0;\r\n  font-family: 'Roboto';\r\n  background: linear-gradient(142deg, rgba(97, 207, 97, 1) 0%, rgba(79,179,238,1) 100%);\r\n}\r\n\r\n#container {\r\n  width: 100%;\r\n  height: 100vh;\r\n  display: flex;\r\n}\r\n\r\n #left-container {\r\n  width: 250px;\r\n  min-width: 250px;\r\n  height: auto;\r\n  background-color: white;\r\n  margin: 15px;\r\n  border-radius: 10px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  border: 1px solid var(--border-color);\r\n  box-shadow: 1px 1px 3px 1px var(--box-shadow-color);\r\n}\r\n\r\n#todo-list-container {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n#todo-list-title {\r\n  width: 100%;\r\n  height: 20px;\r\n  border-radius: 9px 9px 0 0;\r\n  display: flex;\r\n  color: white;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 20px;\r\n  padding: 7px 0;\r\n  font-weight: bold;\r\n  background-color: var(--blue-color);\r\n  border-bottom: 1px solid var(--box-shadow-color);\r\n}\r\n\r\n#todo-list {\r\n  width: 100%;\r\n  margin-top: 10px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.todo-list-item {\r\n  width: 85%;\r\n  margin: 1px;\r\n  font-size: 15px;\r\n  padding: 5px 10px;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  transition: 0.7s;\r\n}\r\n\r\n.todo-list-item:hover {\r\n  background-color: var(--blue-color);\r\n  color: white;\r\n}\r\n\r\n.todo-list-item-amount {\r\n  border-radius: 50%;\r\n  background-color: rgb(97, 207, 97);\r\n  color: white;\r\n  width: 23px;\r\n  height: 23px;\r\n  font-size: 12px;\r\n  font-weight: bold;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n#bottom-todo-container {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: start;\r\n}\r\n\r\n#add-new-todo {\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n  border-radius: 5px;\r\n  color: rgb(161, 157, 157);\r\n  margin: 15px;\r\n  padding: 5px 10px;\r\n  border: 1px solid var(--border-color);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  cursor: pointer;\r\n  box-shadow: 1px 1px 3px 1px var(--box-shadow-color);\r\n  transition: 0.7s;\r\n}\r\n\r\n#add-new-todo:hover {\r\n  background-color: var(--blue-color);\r\n  color: white;\r\n}\r\n\r\n#main-container {\r\n  padding: 15px;\r\n  margin: 15px;\r\n  width: 400px;\r\n  height: auto;\r\n  border-radius: 10px;\r\n  background-color: white;\r\n  border: 1px solid var(--border-color);\r\n  box-shadow: 1px 1px 3px 1px var(--box-shadow-color);\r\n}\r\n\r\n#main-container-title {\r\n  font-size: 19px;\r\n  font-weight: bold;\r\n  padding-bottom: 10px;\r\n  border-bottom: 1px double var(--box-shadow-color);\r\n}\r\n\r\n#todos-container {\r\n  width: 100%;\r\n  height: auto;\r\n  margin-top: 10px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n#new-todo-container {\r\n  padding: 15px;\r\n  margin: 15px;\r\n  width: 400px;\r\n  height: auto;\r\n  background-color: white;\r\n  color: rgb(161, 157, 157);\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  position: relative;\r\n  border-radius: 10px;\r\n  border: 1px solid var(--border-color);\r\n  box-shadow: 1px 1px 3px 1px var(--box-shadow-color);\r\n}\r\n\r\n#form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n}\r\n\r\n#new-form-close-btn {\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 10px;\r\n  padding: 0 5px;\r\n  cursor: pointer;\r\n  border: 1px solid var(--border-color);\r\n}\r\n\r\n#new-form-close-btn:hover {\r\n  background-color: var(--blue-color);\r\n  color: white;\r\n}\r\n\r\ninput, textarea {\r\n  margin-left: 10px;\r\n  border: 1px solid var(--border-color);\r\n  border-radius: 10px;\r\n  font-size: 15px;\r\n  padding: 3px 10px;\r\n  font-weight: bold;\r\n}\r\n\r\nfieldset {\r\n  width: 100%;\r\n  font-size: 15px;\r\n  font-weight: 400;\r\n  border: none;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-top: 10px;\r\n}\r\n\r\n#priority-fieldset {\r\n  border: 1px solid var(--border-color);\r\n  border-radius: 10px;\r\n  height: 50px;\r\n  width: 50%;\r\n  padding: 10px 11px 0 11px;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.priority-option {\r\n  margin-top: 0;\r\n}\r\n\r\nlabel, legend {\r\n  font-size: 12px;\r\n}\r\n\r\ntextarea {\r\n  resize: none;\r\n  width: 150px;\r\n  height: 130px;\r\n}\r\n\r\n#submit-todo-button {\r\n  margin-top: 50px;\r\n  border-radius: 5px;\r\n  padding: 10px 20px;\r\n  font-size: 20px;\r\n  cursor: pointer;\r\n  color: white;\r\n  background-color: var(--blue-color);\r\n  border: 1px solid gray;\r\n  box-shadow: 1px 1px 3px 1px var(--box-shadow-color);\r\n  transition: 0.7s;\r\n}\r\n\r\n#submit-todo-button:hover {\r\n  background-color: white;\r\n  color: var(--blue-color);\r\n}\r\n\r\n.todo-item {\r\n  width: 90%;\r\n  padding: 10px 5px;\r\n  color: gray;\r\n  font-weight: bold;\r\n  font-size: 14px;\r\n  margin: 2px 0;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  transition: 0.7s;\r\n  cursor: pointer;\r\n  border-bottom: 1px solid var(--border-color);\r\n}\r\n\r\n.todo-item:hover {\r\n  background-color: var(--blue-color);\r\n  color: white;\r\n  border-radius: 10px;\r\n}\r\n\r\n.item-due-date {\r\n  font-size: 11px;\r\n}"],"sourceRoot":""}]);
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
/* harmony export */   todoListArray: () => (/* binding */ todoListArray)
/* harmony export */ });
/* harmony import */ var _todo_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-items */ "./src/todo-items.js");



const todoListArray = [];

function Todo(title, description, dueDate) {
  return { title, description, dueDate };
};

const closeNewToDoForm = () => {
  const newTodoContainer = document.querySelector("#new-todo-container");
  const todoForm = document.querySelector("#form");
  const emptyToDoList = document.createElement("div");
  emptyToDoList.setAttribute("id", "empty-todo");
  emptyToDoList.textContent = "No todo item selected.";
  const closeButton = document.querySelector("#new-form-close-btn");
  newTodoContainer.removeChild(todoForm);
  newTodoContainer.appendChild(emptyToDoList);
  newTodoContainer.removeChild(closeButton);
};

const newForm = () => {
  const newTodoContainer = document.querySelector("#new-todo-container");
  newTodoContainer.innerHTML = "";
  const todoForm = document.createElement("form");
  todoForm.setAttribute("id", "form");
  todoForm.textContent = "NEW TODO";
  newTodoContainer.appendChild(todoForm);

  const closeButton = document.createElement("div");
  closeButton.setAttribute("id", "new-form-close-btn");
  closeButton.textContent = "X";
  newTodoContainer.appendChild(closeButton);

  const titleFieldset = document.createElement("fieldset");
  titleFieldset.classList.add("todo-fieldset");
  todoForm.appendChild(titleFieldset);

  const titleLabel = document.createElement("label");
  titleLabel.setAttribute("for", "title-input");
  titleLabel.setAttribute("required", "");
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

  closeButton.addEventListener("click", closeNewToDoForm);
};

const addTodoIntoList = () => {
  const title = document.querySelector("#title-input").value;
  const description = document.querySelector("#description-textarea").value;
  const dueDate = document.querySelector("#due-date").value;

  const newTodo = Todo(title, description, dueDate);
  todoListArray.push(newTodo);
  console.log(todoListArray);

  closeNewToDoForm();
  (0,_todo_items__WEBPACK_IMPORTED_MODULE_0__.showTodoList)();
  (0,_todo_items__WEBPACK_IMPORTED_MODULE_0__.todoListArrayLength)();
};



/***/ }),

/***/ "./src/todo-items.js":
/*!***************************!*\
  !*** ./src/todo-items.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showTodoList: () => (/* binding */ showTodoList),
/* harmony export */   todoListArrayLength: () => (/* binding */ todoListArrayLength)
/* harmony export */ });
/* harmony import */ var _new_todo_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-todo-form */ "./src/new-todo-form.js");


const showTodoList = () => {
  const todosContainer = document.querySelector("#todos-container");
  todosContainer.innerHTML = "";
  _new_todo_form__WEBPACK_IMPORTED_MODULE_0__.todoListArray.sort();
  console.log(_new_todo_form__WEBPACK_IMPORTED_MODULE_0__.todoListArray);

  for (let i = 0; i < _new_todo_form__WEBPACK_IMPORTED_MODULE_0__.todoListArray.length; i++) {
    const toDoItem = document.createElement("div");
    toDoItem.classList.add("todo-item");
    toDoItem.textContent = _new_todo_form__WEBPACK_IMPORTED_MODULE_0__.todoListArray[i].title;
    todosContainer.appendChild(toDoItem);
    const itemDueDate = document.createElement("div");
    itemDueDate.classList.add("item-due-date");
    itemDueDate.textContent = _new_todo_form__WEBPACK_IMPORTED_MODULE_0__.todoListArray[i].dueDate;
    toDoItem.appendChild(itemDueDate);
  };
};

const todoListArrayLength = () => {
  const listAmount = document.querySelector("#todo-list-all-amount");
  const todoListLength = _new_todo_form__WEBPACK_IMPORTED_MODULE_0__.todoListArray.length;
  listAmount.textContent = todoListLength;
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




console.log(_new_todo_form__WEBPACK_IMPORTED_MODULE_1__.todoListArray);

// ---- DOCUMENT CONTAINER ----
const container = document.createElement("div");
container.setAttribute("id", "container");
document.body.appendChild(container);


// ---- LEFT SIDE CONTAINER ----
const leftContainer = document.createElement("div");
leftContainer.setAttribute("id", "left-container");
container.appendChild(leftContainer);

// ---- Container for todos TITLE and LIST ----
const todoListContainer = document.createElement("div");
todoListContainer.setAttribute("id", "todo-list-container");
leftContainer.appendChild(todoListContainer);

// --- TITLE for LEFT container ----
const todoListTitle = document.createElement("div");
todoListTitle.setAttribute("id", "todo-list-title");
todoListTitle.textContent = "TODO LISTS";
todoListContainer.appendChild(todoListTitle);

// ---- Container for each GROUP of TODOS ----
const todoList = document.createElement("div");
todoList.setAttribute("id", "todo-list");
todoListContainer.appendChild(todoList);

// ---- ALL todos item container ----
const todoListAll = document.createElement("div");
todoListAll.classList.add("todo-list-item");
todoList.appendChild(todoListAll);

const todoListAllText = document.createElement("div");
todoListAllText.classList.add("todo-list-item-text");
todoListAllText.textContent = "All";
todoListAll.appendChild(todoListAllText);

// ---- Number of ALL todos ----
const todoListAllAmount = document.createElement("div");
todoListAllAmount.classList.add("todo-list-item-amount");
todoListAllAmount.setAttribute("id", "todo-list-all-amount");
todoListAllAmount.textContent = "0";
todoListAll.appendChild(todoListAllAmount);

// ---- PERSONAL todos item container ----
const todoListPersonal = document.createElement("div");
todoListPersonal.classList.add("todo-list-item");
todoList.appendChild(todoListPersonal);

const todoListPersonalText = document.createElement("div");
todoListPersonalText.classList.add("todo-list-item-text");
todoListPersonalText.textContent = "Personal";
todoListPersonal.appendChild(todoListPersonalText);

// ---- Number of PERSONAL todos ----
const todoListPersonalAmount = document.createElement("div");
todoListPersonalAmount.classList.add("todo-list-item-amount");
todoListPersonalAmount.textContent = "2";
todoListPersonal.appendChild(todoListPersonalAmount);

// ---- WORK todos item container ----
const todoListWork = document.createElement("div");
todoListWork.classList.add("todo-list-item");
todoList.appendChild(todoListWork);

const todoListWorkText = document.createElement("div");
todoListWorkText.classList.add("todo-list-item-text");
todoListWorkText.textContent = "Work";
todoListWork.appendChild(todoListWorkText);

// ---- Number of WORK todos ----
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


// ---- MAIN CONTAINER ----
const mainContainer = document.createElement("div");
mainContainer.setAttribute("id", "main-container");
container.appendChild(mainContainer);

const mainContainerTitle = document.createElement("div");
mainContainerTitle.setAttribute("id", "main-container-title");
mainContainerTitle.textContent = "ALL";
mainContainer.appendChild(mainContainerTitle);

const todosContainer = document.createElement("div");
todosContainer.setAttribute("id", "todos-container");
mainContainer.appendChild(todosContainer);


// ---- NEW TODOS CONTAINER ----
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHFIQUF1QztBQUNuRiw0Q0FBNEMsK0dBQW9DO0FBQ2hGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hELFFBQVEsbUNBQW1DO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sT0FBTyxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8s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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxtREFBTztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL25ldy10b2RvLWZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvdG9kby1pdGVtcy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL1JvYm90by1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vUm9ib3RvLUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xyXG4gIC0tYm9yZGVyLWNvbG9yOiByZ2IoMjA5LCAyMDYsIDIwNik7XHJcbiAgLS1ibHVlLWNvbG9yOiByZ2JhKDc5LDE3OSwyMzgsMSk7XHJcbiAgLS1ib3gtc2hhZG93LWNvbG9yOiByZ2IoMTYxLCAxNTEsIDE1MSk7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoJ3R0ZicpLCBcclxuICB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgZm9ybWF0KCd0dGYnKTtcclxuICBmb250LXdlaWdodDogNDAwLCA3MDA7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDJkZWcsIHJnYmEoOTcsIDIwNywgOTcsIDEpIDAlLCByZ2JhKDc5LDE3OSwyMzgsMSkgMTAwJSk7XHJcbn1cclxuXHJcbiNjb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuICNsZWZ0LWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbjogMTVweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IDFweCB2YXIoLS1ib3gtc2hhZG93LWNvbG9yKTtcclxufVxyXG5cclxuI3RvZG8tbGlzdC1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4jdG9kby1saXN0LXRpdGxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOXB4IDlweCAwIDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgcGFkZGluZzogN3B4IDA7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZS1jb2xvcik7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJveC1zaGFkb3ctY29sb3IpO1xyXG59XHJcblxyXG4jdG9kby1saXN0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4udG9kby1saXN0LWl0ZW0ge1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgbWFyZ2luOiAxcHg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiAwLjdzO1xyXG59XHJcblxyXG4udG9kby1saXN0LWl0ZW06aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUtY29sb3IpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnRvZG8tbGlzdC1pdGVtLWFtb3VudCB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig5NywgMjA3LCA5Nyk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiAyM3B4O1xyXG4gIGhlaWdodDogMjNweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4jYm90dG9tLXRvZG8tY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbn1cclxuXHJcbiNhZGQtbmV3LXRvZG8ge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgY29sb3I6IHJnYigxNjEsIDE1NywgMTU3KTtcclxuICBtYXJnaW46IDE1cHg7XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IDFweCB2YXIoLS1ib3gtc2hhZG93LWNvbG9yKTtcclxuICB0cmFuc2l0aW9uOiAwLjdzO1xyXG59XHJcblxyXG4jYWRkLW5ldy10b2RvOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlLWNvbG9yKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiNtYWluLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBtYXJnaW46IDE1cHg7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbiAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggMXB4IHZhcigtLWJveC1zaGFkb3ctY29sb3IpO1xyXG59XHJcblxyXG4jbWFpbi1jb250YWluZXItdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMTlweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggZG91YmxlIHZhcigtLWJveC1zaGFkb3ctY29sb3IpO1xyXG59XHJcblxyXG4jdG9kb3MtY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuI25ldy10b2RvLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBtYXJnaW46IDE1cHg7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBjb2xvcjogcmdiKDE2MSwgMTU3LCAxNTcpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbiAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggMXB4IHZhcigtLWJveC1zaGFkb3ctY29sb3IpO1xyXG59XHJcblxyXG4jZm9ybSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4jbmV3LWZvcm0tY2xvc2UtYnRuIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIHBhZGRpbmc6IDAgNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xyXG59XHJcblxyXG4jbmV3LWZvcm0tY2xvc2UtYnRuOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlLWNvbG9yKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlucHV0LCB0ZXh0YXJlYSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBwYWRkaW5nOiAzcHggMTBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuZmllbGRzZXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuI3ByaW9yaXR5LWZpZWxkc2V0IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgcGFkZGluZzogMTBweCAxMXB4IDAgMTFweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wcmlvcml0eS1vcHRpb24ge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuXHJcbmxhYmVsLCBsZWdlbmQge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxudGV4dGFyZWEge1xyXG4gIHJlc2l6ZTogbm9uZTtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgaGVpZ2h0OiAxMzBweDtcclxufVxyXG5cclxuI3N1Ym1pdC10b2RvLWJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUtY29sb3IpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggMXB4IHZhcigtLWJveC1zaGFkb3ctY29sb3IpO1xyXG4gIHRyYW5zaXRpb246IDAuN3M7XHJcbn1cclxuXHJcbiNzdWJtaXQtdG9kby1idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOiB2YXIoLS1ibHVlLWNvbG9yKTtcclxufVxyXG5cclxuLnRvZG8taXRlbSB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBwYWRkaW5nOiAxMHB4IDVweDtcclxuICBjb2xvcjogZ3JheTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luOiAycHggMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246IDAuN3M7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xyXG59XHJcblxyXG4udG9kby1pdGVtOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlLWNvbG9yKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLml0ZW0tZHVlLWRhdGUge1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGtDQUFrQztFQUNsQyxnQ0FBZ0M7RUFDaEMsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCO3VEQUNzQztFQUN0QyxxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsU0FBUztFQUNULHFCQUFxQjtFQUNyQixxRkFBcUY7QUFDdkY7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGFBQWE7QUFDZjs7Q0FFQztFQUNDLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5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RSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZUFBZTtFQUNmLFlBQVk7RUFDWixtQ0FBbUM7RUFDbkMsc0JBQXNCO0VBQ3RCLG1EQUFtRDtFQUNuRCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixhQUFhO0VBQ2IsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZiw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgLS1ib3JkZXItY29sb3I6IHJnYigyMDksIDIwNiwgMjA2KTtcXHJcXG4gIC0tYmx1ZS1jb2xvcjogcmdiYSg3OSwxNzksMjM4LDEpO1xcclxcbiAgLS1ib3gtc2hhZG93LWNvbG9yOiByZ2IoMTYxLCAxNTEsIDE1MSk7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcclxcbiAgc3JjOiB1cmwoJy4vUm9ib3RvLVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0dGYnKSwgXFxyXFxuICB1cmwoJy4vUm9ib3RvLUJvbGQudHRmJykgZm9ybWF0KCd0dGYnKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDAsIDcwMDtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBmb250LWZhbWlseTogJ1JvYm90byc7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQyZGVnLCByZ2JhKDk3LCAyMDcsIDk3LCAxKSAwJSwgcmdiYSg3OSwxNzksMjM4LDEpIDEwMCUpO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbiAjbGVmdC1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDI1MHB4O1xcclxcbiAgbWluLXdpZHRoOiAyNTBweDtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgbWFyZ2luOiAxNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxyXFxuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAxcHggdmFyKC0tYm94LXNoYWRvdy1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbiN0b2RvLWxpc3QtY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jdG9kby1saXN0LXRpdGxlIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogOXB4IDlweCAwIDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgcGFkZGluZzogN3B4IDA7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUtY29sb3IpO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJveC1zaGFkb3ctY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4jdG9kby1saXN0IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tbGlzdC1pdGVtIHtcXHJcXG4gIHdpZHRoOiA4NSU7XFxyXFxuICBtYXJnaW46IDFweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjdzO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1saXN0LWl0ZW06aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZS1jb2xvcik7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWxpc3QtaXRlbS1hbW91bnQge1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk3LCAyMDcsIDk3KTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHdpZHRoOiAyM3B4O1xcclxcbiAgaGVpZ2h0OiAyM3B4O1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jYm90dG9tLXRvZG8tY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbiNhZGQtbmV3LXRvZG8ge1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBjb2xvcjogcmdiKDE2MSwgMTU3LCAxNTcpO1xcclxcbiAgbWFyZ2luOiAxNXB4O1xcclxcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IDFweCB2YXIoLS1ib3gtc2hhZG93LWNvbG9yKTtcXHJcXG4gIHRyYW5zaXRpb246IDAuN3M7XFxyXFxufVxcclxcblxcclxcbiNhZGQtbmV3LXRvZG86aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZS1jb2xvcik7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbiNtYWluLWNvbnRhaW5lciB7XFxyXFxuICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgbWFyZ2luOiAxNXB4O1xcclxcbiAgd2lkdGg6IDQwMHB4O1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXHJcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IDFweCB2YXIoLS1ib3gtc2hhZG93LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuI21haW4tY29udGFpbmVyLXRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTlweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggZG91YmxlIHZhcigtLWJveC1zaGFkb3ctY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4jdG9kb3MtY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy10b2RvLWNvbnRhaW5lciB7XFxyXFxuICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgbWFyZ2luOiAxNXB4O1xcclxcbiAgd2lkdGg6IDQwMHB4O1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBjb2xvcjogcmdiKDE2MSwgMTU3LCAxNTcpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxyXFxuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAxcHggdmFyKC0tYm94LXNoYWRvdy1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbiNmb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LWZvcm0tY2xvc2UtYnRuIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMTBweDtcXHJcXG4gIHJpZ2h0OiAxMHB4O1xcclxcbiAgcGFkZGluZzogMCA1cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LWZvcm0tY2xvc2UtYnRuOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUtY29sb3IpO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCwgdGV4dGFyZWEge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIHBhZGRpbmc6IDNweCAxMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbmZpZWxkc2V0IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcHJpb3JpdHktZmllbGRzZXQge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgcGFkZGluZzogMTBweCAxMXB4IDAgMTFweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktb3B0aW9uIHtcXHJcXG4gIG1hcmdpbi10b3A6IDA7XFxyXFxufVxcclxcblxcclxcbmxhYmVsLCBsZWdlbmQge1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICByZXNpemU6IG5vbmU7XFxyXFxuICB3aWR0aDogMTUwcHg7XFxyXFxuICBoZWlnaHQ6IDEzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jc3VibWl0LXRvZG8tYnV0dG9uIHtcXHJcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlLWNvbG9yKTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XFxyXFxuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAxcHggdmFyKC0tYm94LXNoYWRvdy1jb2xvcik7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjdzO1xcclxcbn1cXHJcXG5cXHJcXG4jc3VibWl0LXRvZG8tYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgY29sb3I6IHZhcigtLWJsdWUtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1pdGVtIHtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDVweDtcXHJcXG4gIGNvbG9yOiBncmF5O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBtYXJnaW46IDJweCAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjdzO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWl0ZW06aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZS1jb2xvcik7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS1kdWUtZGF0ZSB7XFxyXFxuICBmb250LXNpemU6IDExcHg7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgc2hvd1RvZG9MaXN0IH0gZnJvbSBcIi4vdG9kby1pdGVtc1wiO1xyXG5pbXBvcnQgeyB0b2RvTGlzdEFycmF5TGVuZ3RoIH0gZnJvbSBcIi4vdG9kby1pdGVtc1wiO1xyXG5cclxuY29uc3QgdG9kb0xpc3RBcnJheSA9IFtdO1xyXG5cclxuZnVuY3Rpb24gVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUpIHtcclxuICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUgfTtcclxufTtcclxuXHJcbmNvbnN0IGNsb3NlTmV3VG9Eb0Zvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgbmV3VG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LXRvZG8tY29udGFpbmVyXCIpO1xyXG4gIGNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtXCIpO1xyXG4gIGNvbnN0IGVtcHR5VG9Eb0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGVtcHR5VG9Eb0xpc3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlbXB0eS10b2RvXCIpO1xyXG4gIGVtcHR5VG9Eb0xpc3QudGV4dENvbnRlbnQgPSBcIk5vIHRvZG8gaXRlbSBzZWxlY3RlZC5cIjtcclxuICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LWZvcm0tY2xvc2UtYnRuXCIpO1xyXG4gIG5ld1RvZG9Db250YWluZXIucmVtb3ZlQ2hpbGQodG9kb0Zvcm0pO1xyXG4gIG5ld1RvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQoZW1wdHlUb0RvTGlzdCk7XHJcbiAgbmV3VG9kb0NvbnRhaW5lci5yZW1vdmVDaGlsZChjbG9zZUJ1dHRvbik7XHJcbn07XHJcblxyXG5jb25zdCBuZXdGb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IG5ld1RvZG9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ldy10b2RvLWNvbnRhaW5lclwiKTtcclxuICBuZXdUb2RvQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcclxuICB0b2RvRm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZvcm1cIik7XHJcbiAgdG9kb0Zvcm0udGV4dENvbnRlbnQgPSBcIk5FVyBUT0RPXCI7XHJcbiAgbmV3VG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRm9ybSk7XHJcblxyXG4gIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjbG9zZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5ldy1mb3JtLWNsb3NlLWJ0blwiKTtcclxuICBjbG9zZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiWFwiO1xyXG4gIG5ld1RvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xyXG5cclxuICBjb25zdCB0aXRsZUZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpO1xyXG4gIHRpdGxlRmllbGRzZXQuY2xhc3NMaXN0LmFkZChcInRvZG8tZmllbGRzZXRcIik7XHJcbiAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQodGl0bGVGaWVsZHNldCk7XHJcblxyXG4gIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgdGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0aXRsZS1pbnB1dFwiKTtcclxuICB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwiXCIpO1xyXG4gIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSBcIlRpdGxlOlwiO1xyXG4gIHRpdGxlRmllbGRzZXQuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XHJcblxyXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIHRpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGl0bGUtaW5wdXRcIik7XHJcbiAgdGl0bGVGaWVsZHNldC5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcblxyXG4gIGNvbnN0IGRlc2NyaXB0aW9uRmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIik7XHJcbiAgZGVzY3JpcHRpb25GaWVsZHNldC5jbGFzc0xpc3QuYWRkKFwidG9kby1maWVsZHNldFwiKTtcclxuICB0b2RvRm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkZpZWxkc2V0KTtcclxuXHJcbiAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICBkZXNjcmlwdGlvbkxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImRlc2NyaXB0aW9uLXRleHRhcmVhXCIpO1xyXG4gIGRlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uOlwiO1xyXG4gIGRlc2NyaXB0aW9uRmllbGRzZXQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25MYWJlbCk7XHJcblxyXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xyXG4gIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGVzY3JpcHRpb24tdGV4dGFyZWFcIik7XHJcbiAgZGVzY3JpcHRpb25GaWVsZHNldC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XHJcblxyXG4gIGNvbnN0IGR1ZURhdGVGaWVsZHNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKTtcclxuICBkdWVEYXRlRmllbGRzZXQuY2xhc3NMaXN0LmFkZChcInRvZG8tZmllbGRzZXRcIik7XHJcbiAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZUZpZWxkc2V0KTtcclxuXHJcbiAgY29uc3QgZHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gIGR1ZURhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkdWUtZGF0ZVwiKTtcclxuICBkdWVEYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlOlwiO1xyXG4gIGR1ZURhdGVGaWVsZHNldC5hcHBlbmRDaGlsZChkdWVEYXRlTGFiZWwpO1xyXG5cclxuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIGR1ZURhdGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkdWUtZGF0ZVwiKTtcclxuICBkdWVEYXRlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xyXG4gIGR1ZURhdGVGaWVsZHNldC5hcHBlbmRDaGlsZChkdWVEYXRlKTtcclxuXHJcbiAgY29uc3QgcHJpb3JpdHlGaWVsZHNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKTtcclxuICBwcmlvcml0eUZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWZpZWxkc2V0XCIpO1xyXG4gIHByaW9yaXR5RmllbGRzZXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcmlvcml0eS1maWVsZHNldFwiKTtcclxuICB0b2RvRm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eUZpZWxkc2V0KTtcclxuXHJcbiAgY29uc3QgcHJpb3JpdHlMZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGVnZW5kXCIpO1xyXG4gIHByaW9yaXR5TGVnZW5kLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByaW9yaXR5LWZpZWxkc2V0XCIpO1xyXG4gIHByaW9yaXR5TGVnZW5kLnRleHRDb250ZW50ID0gXCJQcmlvcml0eTpcIjtcclxuICBwcmlvcml0eUZpZWxkc2V0LmFwcGVuZENoaWxkKHByaW9yaXR5TGVnZW5kKTtcclxuXHJcbiAgY29uc3QgbG93UHJpb3JpdHlPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgbG93UHJpb3JpdHlPcHRpb24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhZGlvXCIpO1xyXG4gIGxvd1ByaW9yaXR5T3B0aW9uLmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1vcHRpb25cIik7XHJcbiAgbG93UHJpb3JpdHlPcHRpb24uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByaW9yaXR5LW9wdGlvblwiKTtcclxuICBsb3dQcmlvcml0eU9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxvdy1wcmlvcml0eVwiKTtcclxuICBwcmlvcml0eUZpZWxkc2V0LmFwcGVuZENoaWxkKGxvd1ByaW9yaXR5T3B0aW9uKTtcclxuXHJcbiAgY29uc3QgbG93UHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICBsb3dQcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImxvdy1wcmlvcml0eVwiKTtcclxuICBsb3dQcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gXCJMb3dcIjtcclxuICBwcmlvcml0eUZpZWxkc2V0LmFwcGVuZENoaWxkKGxvd1ByaW9yaXR5TGFiZWwpO1xyXG5cclxuICBjb25zdCBoaWdoUHJpb3JpdHlPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgaGlnaFByaW9yaXR5T3B0aW9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcclxuICBoaWdoUHJpb3JpdHlPcHRpb24uY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LW9wdGlvblwiKTtcclxuICBoaWdoUHJpb3JpdHlPcHRpb24uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByaW9yaXR5LW9wdGlvblwiKTtcclxuICBoaWdoUHJpb3JpdHlPcHRpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJoaWdoLXByaW9yaXR5XCIpO1xyXG4gIHByaW9yaXR5RmllbGRzZXQuYXBwZW5kQ2hpbGQoaGlnaFByaW9yaXR5T3B0aW9uKTtcclxuXHJcbiAgY29uc3QgaGlnaFByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgaGlnaFByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiaGlnaC1wcmlvcml0eVwiKTtcclxuICBoaWdoUHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9IFwiSGlnaFwiO1xyXG4gIHByaW9yaXR5RmllbGRzZXQuYXBwZW5kQ2hpbGQoaGlnaFByaW9yaXR5TGFiZWwpO1xyXG5cclxuICBjb25zdCBzdWJtaXRUb0RvRm9ybUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBzdWJtaXRUb0RvRm9ybUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xyXG4gIHN1Ym1pdFRvRG9Gb3JtQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3VibWl0LXRvZG8tYnV0dG9uXCIpO1xyXG4gIHN1Ym1pdFRvRG9Gb3JtQnV0dG9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiU1VCTUlUIFRPRE9cIik7XHJcbiAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoc3VibWl0VG9Eb0Zvcm1CdXR0b24pO1xyXG5cclxuICBzdWJtaXRUb0RvRm9ybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkVG9kb0ludG9MaXN0KTtcclxuXHJcbiAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlTmV3VG9Eb0Zvcm0pO1xyXG59O1xyXG5cclxuY29uc3QgYWRkVG9kb0ludG9MaXN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZS1pbnB1dFwiKS52YWx1ZTtcclxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVzY3JpcHRpb24tdGV4dGFyZWFcIikudmFsdWU7XHJcbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHVlLWRhdGVcIikudmFsdWU7XHJcblxyXG4gIGNvbnN0IG5ld1RvZG8gPSBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSk7XHJcbiAgdG9kb0xpc3RBcnJheS5wdXNoKG5ld1RvZG8pO1xyXG4gIGNvbnNvbGUubG9nKHRvZG9MaXN0QXJyYXkpO1xyXG5cclxuICBjbG9zZU5ld1RvRG9Gb3JtKCk7XHJcbiAgc2hvd1RvZG9MaXN0KCk7XHJcbiAgdG9kb0xpc3RBcnJheUxlbmd0aCgpO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgbmV3Rm9ybSwgdG9kb0xpc3RBcnJheSB9OyIsImltcG9ydCB7IHRvZG9MaXN0QXJyYXkgfSBmcm9tIFwiLi9uZXctdG9kby1mb3JtXCI7XHJcblxyXG5jb25zdCBzaG93VG9kb0xpc3QgPSAoKSA9PiB7XHJcbiAgY29uc3QgdG9kb3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9zLWNvbnRhaW5lclwiKTtcclxuICB0b2Rvc0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIHRvZG9MaXN0QXJyYXkuc29ydCgpO1xyXG4gIGNvbnNvbGUubG9nKHRvZG9MaXN0QXJyYXkpO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9MaXN0QXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IHRvRG9JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRvRG9JdGVtLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWl0ZW1cIik7XHJcbiAgICB0b0RvSXRlbS50ZXh0Q29udGVudCA9IHRvZG9MaXN0QXJyYXlbaV0udGl0bGU7XHJcbiAgICB0b2Rvc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b0RvSXRlbSk7XHJcbiAgICBjb25zdCBpdGVtRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBpdGVtRHVlRGF0ZS5jbGFzc0xpc3QuYWRkKFwiaXRlbS1kdWUtZGF0ZVwiKTtcclxuICAgIGl0ZW1EdWVEYXRlLnRleHRDb250ZW50ID0gdG9kb0xpc3RBcnJheVtpXS5kdWVEYXRlO1xyXG4gICAgdG9Eb0l0ZW0uYXBwZW5kQ2hpbGQoaXRlbUR1ZURhdGUpO1xyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCB0b2RvTGlzdEFycmF5TGVuZ3RoID0gKCkgPT4ge1xyXG4gIGNvbnN0IGxpc3RBbW91bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tbGlzdC1hbGwtYW1vdW50XCIpO1xyXG4gIGNvbnN0IHRvZG9MaXN0TGVuZ3RoID0gdG9kb0xpc3RBcnJheS5sZW5ndGg7XHJcbiAgbGlzdEFtb3VudC50ZXh0Q29udGVudCA9IHRvZG9MaXN0TGVuZ3RoO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgc2hvd1RvZG9MaXN0LCB0b2RvTGlzdEFycmF5TGVuZ3RoIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IHsgbmV3Rm9ybSB9IGZyb20gJy4vbmV3LXRvZG8tZm9ybSc7XHJcbmltcG9ydCB7IHRvZG9MaXN0QXJyYXkgfSBmcm9tICcuL25ldy10b2RvLWZvcm0nO1xyXG5cclxuY29uc29sZS5sb2codG9kb0xpc3RBcnJheSk7XHJcblxyXG4vLyAtLS0tIERPQ1VNRU5UIENPTlRBSU5FUiAtLS0tXHJcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRhaW5lclwiKTtcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG5cclxuXHJcbi8vIC0tLS0gTEVGVCBTSURFIENPTlRBSU5FUiAtLS0tXHJcbmNvbnN0IGxlZnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5sZWZ0Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibGVmdC1jb250YWluZXJcIik7XHJcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChsZWZ0Q29udGFpbmVyKTtcclxuXHJcbi8vIC0tLS0gQ29udGFpbmVyIGZvciB0b2RvcyBUSVRMRSBhbmQgTElTVCAtLS0tXHJcbmNvbnN0IHRvZG9MaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxudG9kb0xpc3RDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvLWxpc3QtY29udGFpbmVyXCIpO1xyXG5sZWZ0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9MaXN0Q29udGFpbmVyKTtcclxuXHJcbi8vIC0tLSBUSVRMRSBmb3IgTEVGVCBjb250YWluZXIgLS0tLVxyXG5jb25zdCB0b2RvTGlzdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxudG9kb0xpc3RUaXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG8tbGlzdC10aXRsZVwiKTtcclxudG9kb0xpc3RUaXRsZS50ZXh0Q29udGVudCA9IFwiVE9ETyBMSVNUU1wiO1xyXG50b2RvTGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvTGlzdFRpdGxlKTtcclxuXHJcbi8vIC0tLS0gQ29udGFpbmVyIGZvciBlYWNoIEdST1VQIG9mIFRPRE9TIC0tLS1cclxuY29uc3QgdG9kb0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG50b2RvTGlzdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG8tbGlzdFwiKTtcclxudG9kb0xpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0xpc3QpO1xyXG5cclxuLy8gLS0tLSBBTEwgdG9kb3MgaXRlbSBjb250YWluZXIgLS0tLVxyXG5jb25zdCB0b2RvTGlzdEFsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbnRvZG9MaXN0QWxsLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWxpc3QtaXRlbVwiKTtcclxudG9kb0xpc3QuYXBwZW5kQ2hpbGQodG9kb0xpc3RBbGwpO1xyXG5cclxuY29uc3QgdG9kb0xpc3RBbGxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxudG9kb0xpc3RBbGxUZXh0LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWxpc3QtaXRlbS10ZXh0XCIpO1xyXG50b2RvTGlzdEFsbFRleHQudGV4dENvbnRlbnQgPSBcIkFsbFwiO1xyXG50b2RvTGlzdEFsbC5hcHBlbmRDaGlsZCh0b2RvTGlzdEFsbFRleHQpO1xyXG5cclxuLy8gLS0tLSBOdW1iZXIgb2YgQUxMIHRvZG9zIC0tLS1cclxuY29uc3QgdG9kb0xpc3RBbGxBbW91bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG50b2RvTGlzdEFsbEFtb3VudC5jbGFzc0xpc3QuYWRkKFwidG9kby1saXN0LWl0ZW0tYW1vdW50XCIpO1xyXG50b2RvTGlzdEFsbEFtb3VudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG8tbGlzdC1hbGwtYW1vdW50XCIpO1xyXG50b2RvTGlzdEFsbEFtb3VudC50ZXh0Q29udGVudCA9IFwiMFwiO1xyXG50b2RvTGlzdEFsbC5hcHBlbmRDaGlsZCh0b2RvTGlzdEFsbEFtb3VudCk7XHJcblxyXG4vLyAtLS0tIFBFUlNPTkFMIHRvZG9zIGl0ZW0gY29udGFpbmVyIC0tLS1cclxuY29uc3QgdG9kb0xpc3RQZXJzb25hbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbnRvZG9MaXN0UGVyc29uYWwuY2xhc3NMaXN0LmFkZChcInRvZG8tbGlzdC1pdGVtXCIpO1xyXG50b2RvTGlzdC5hcHBlbmRDaGlsZCh0b2RvTGlzdFBlcnNvbmFsKTtcclxuXHJcbmNvbnN0IHRvZG9MaXN0UGVyc29uYWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxudG9kb0xpc3RQZXJzb25hbFRleHQuY2xhc3NMaXN0LmFkZChcInRvZG8tbGlzdC1pdGVtLXRleHRcIik7XHJcbnRvZG9MaXN0UGVyc29uYWxUZXh0LnRleHRDb250ZW50ID0gXCJQZXJzb25hbFwiO1xyXG50b2RvTGlzdFBlcnNvbmFsLmFwcGVuZENoaWxkKHRvZG9MaXN0UGVyc29uYWxUZXh0KTtcclxuXHJcbi8vIC0tLS0gTnVtYmVyIG9mIFBFUlNPTkFMIHRvZG9zIC0tLS1cclxuY29uc3QgdG9kb0xpc3RQZXJzb25hbEFtb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbnRvZG9MaXN0UGVyc29uYWxBbW91bnQuY2xhc3NMaXN0LmFkZChcInRvZG8tbGlzdC1pdGVtLWFtb3VudFwiKTtcclxudG9kb0xpc3RQZXJzb25hbEFtb3VudC50ZXh0Q29udGVudCA9IFwiMlwiO1xyXG50b2RvTGlzdFBlcnNvbmFsLmFwcGVuZENoaWxkKHRvZG9MaXN0UGVyc29uYWxBbW91bnQpO1xyXG5cclxuLy8gLS0tLSBXT1JLIHRvZG9zIGl0ZW0gY29udGFpbmVyIC0tLS1cclxuY29uc3QgdG9kb0xpc3RXb3JrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxudG9kb0xpc3RXb3JrLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWxpc3QtaXRlbVwiKTtcclxudG9kb0xpc3QuYXBwZW5kQ2hpbGQodG9kb0xpc3RXb3JrKTtcclxuXHJcbmNvbnN0IHRvZG9MaXN0V29ya1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG50b2RvTGlzdFdvcmtUZXh0LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWxpc3QtaXRlbS10ZXh0XCIpO1xyXG50b2RvTGlzdFdvcmtUZXh0LnRleHRDb250ZW50ID0gXCJXb3JrXCI7XHJcbnRvZG9MaXN0V29yay5hcHBlbmRDaGlsZCh0b2RvTGlzdFdvcmtUZXh0KTtcclxuXHJcbi8vIC0tLS0gTnVtYmVyIG9mIFdPUksgdG9kb3MgLS0tLVxyXG5jb25zdCB0b2RvTGlzdFdvcmtBbW91bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG50b2RvTGlzdFdvcmtBbW91bnQuY2xhc3NMaXN0LmFkZChcInRvZG8tbGlzdC1pdGVtLWFtb3VudFwiKTtcclxudG9kb0xpc3RXb3JrQW1vdW50LnRleHRDb250ZW50ID0gXCI1XCI7XHJcbnRvZG9MaXN0V29yay5hcHBlbmRDaGlsZCh0b2RvTGlzdFdvcmtBbW91bnQpO1xyXG5cclxuY29uc3QgYm90dG9tVG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmJvdHRvbVRvZG9Db250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJib3R0b20tdG9kby1jb250YWluZXJcIik7XHJcbmxlZnRDb250YWluZXIuYXBwZW5kQ2hpbGQoYm90dG9tVG9kb0NvbnRhaW5lcik7XHJcblxyXG5jb25zdCBhZGROZXdUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuYWRkTmV3VG9kby5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZC1uZXctdG9kb1wiKTtcclxuYWRkTmV3VG9kby50ZXh0Q29udGVudCA9IFwiKyBOZXcgVG9kb1wiO1xyXG5ib3R0b21Ub2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZE5ld1RvZG8pO1xyXG5cclxuYWRkTmV3VG9kby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmV3Rm9ybSk7XHJcblxyXG5cclxuLy8gLS0tLSBNQUlOIENPTlRBSU5FUiAtLS0tXHJcbmNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5tYWluQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFpbi1jb250YWluZXJcIik7XHJcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluQ29udGFpbmVyKTtcclxuXHJcbmNvbnN0IG1haW5Db250YWluZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbm1haW5Db250YWluZXJUaXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW4tY29udGFpbmVyLXRpdGxlXCIpO1xyXG5tYWluQ29udGFpbmVyVGl0bGUudGV4dENvbnRlbnQgPSBcIkFMTFwiO1xyXG5tYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5Db250YWluZXJUaXRsZSk7XHJcblxyXG5jb25zdCB0b2Rvc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbnRvZG9zQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kb3MtY29udGFpbmVyXCIpO1xyXG5tYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9zQ29udGFpbmVyKTtcclxuXHJcblxyXG4vLyAtLS0tIE5FVyBUT0RPUyBDT05UQUlORVIgLS0tLVxyXG5jb25zdCBuZXdUb2RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxubmV3VG9kb0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5ldy10b2RvLWNvbnRhaW5lclwiKTtcclxuY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1RvZG9Db250YWluZXIpO1xyXG5cclxuY29uc3QgZW1wdHlUb0RvTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmVtcHR5VG9Eb0xpc3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlbXB0eS10b2RvXCIpO1xyXG5lbXB0eVRvRG9MaXN0LnRleHRDb250ZW50ID0gXCJObyB0b2RvIGl0ZW0gc2VsZWN0ZWQuXCI7XHJcbm5ld1RvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQoZW1wdHlUb0RvTGlzdCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
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
___CSS_LOADER_EXPORT___.push([module.id, `::placeholder {
  color: rgb(139, 133, 133);
}

@font-face {
  font-family: 'Roboto';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('ttf'), 
  url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('ttf');
  font-weight: 400, 700;
  font-style: normal;
}

body {
  margin: 0;
  font-family: 'Roboto';
  display: flex;
  justify-content: center;
  align-items: center;
}

#nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  font-size: 25px;
  font-weight: bold;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  background-color: rgb(62, 167, 253);
}

#left-nav-bar {
  display: flex;
  align-items: center;
}

#right-nav-bar {
  display: flex;
  align-items: center;
}

#container {
  display: flex;
  margin-top: 50px;
  width: 100vw;
  height: 85vh;
  border-bottom: 1px solid gray;
  box-shadow: 1px 2px 5px 1px rgb(170, 162, 162);
}

#left-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  height: 100%;
  background-color: rgb(229, 224, 224);
  border-right: 1px solid gray;
}

#project-list {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15px;
}

.project-list-item {
  font-size: 18px;
  font-weight: bold;
  width: 70%;
  border-radius: 5px;
  margin: 2px 0;
  padding: 5px 10px;
  transition: 0.7s;
  display: flex;
  justify-content: space-between;
}

.project-list-item:hover {
  background-color: rgb(198, 194, 194);
}

.project-item-text {
  width: 80%;
}

.project-item-amount {
  padding: 2px;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  color: white;
  background-color: rgb(62, 167, 253);
  font-size: 12px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.7s;
}

#right-container {
  display: flex;
  flex-direction: column;
  align-items: start;
  height: 100%;
  flex: 3;
}

#todos-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.todo-item {
  padding: 10px;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px;
  border-bottom: 1px solid rgb(169, 164, 164);
  transition: 0.7s;
}

.todo-item:hover {
  cursor: pointer;
  color: white;
  background-color: rgb(62, 167, 253);
}

.todo-item-left-container {
  display: flex;
  width: 50%;
  height: 100%;
  font-weight: bold;
  align-items: center;
  font-size: 19px;
}

.todo-item-right-container {
  display: flex;
  align-items: center;
}

.todo-item-title {
  margin-left: 10px;
}

.todo-item-high-priority {
  margin-left: 10px;
  color: white;
  background-color: rgb(215, 45, 45);
  padding: 2px 5px;
  border-radius: 10px;
  font-size: 10px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
}

.todo-item-due-date {
  color: gray;
  margin-right: 10px;
}

#edit-icon, #delete-icon {
  object-fit: cover;
  padding: 5px;
  border-radius: 50%;
  color: white;
  background-color: rgb(62, 167, 253);
  margin: 0 5px 2px 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.7s;
}

#edit-icon:hover, #delete-icon:hover {
  color: rgb(62, 167, 253);
  background-color: white;
}

#project-background, #todo-background {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: white;
  opacity: 0.7;
  z-index: 0;
}

#form-container {
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#cancel-todo-button-container {
  width: 400px;
  display: flex;
  justify-content: end;
}

#cancel-project-button-container {
  width: 250px;
  display: flex;
  justify-content: end;
}

#new-project-form, #new-todo-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  padding: 10px;
  background-color: white;
  border: 1px solid gray;
  box-shadow: 0px 0px 5px 1px rgb(170, 162, 162);
}

#new-project-button {
  width: 150px;
  cursor: pointer;
  border: 1px solid white;
  margin: 0 5px;
  color: rgb(62, 167, 253);
  font-size: 15px;
  font-weight: bold;
  border-radius: 20px;
  padding: 5px 20px;
  background-color: white;
  transition: 0.7s;
}

#add-todo-button {
  width: 150px;
  cursor: pointer;
  border: 1px solid rgb(62, 167, 253);
  margin: 20px 30px;
  color: rgb(62, 167, 253);
  font-size: 15px;
  font-weight: bold;
  border-radius: 20px;
  padding: 5px 20px;
  background-color: white;
  transition: 0.7s;
}

#new-project-button:hover, #add-todo-button:hover {
  background-color: rgb(62, 167, 253);
  color: white;
}

fieldset {
  border: none;
  width: 400px;
  padding: 5px 0;
  margin: 0;
}

input, #project-title {
  font-size: 15px;
  font-weight: bold;
  border-radius: 10px;
  margin: 5px 20px 0 20px;
  border: 1px solid rgb(223, 218, 218);
  padding: 5px 10px;
  width: 250px;
}

#project-title {
  margin: 10px;
}

textarea {
  resize: none;
  font-size: 15px;
  border-radius: 10px;
  margin: 5px 20px 0 20px;
  border: 1px solid rgb(223, 218, 218);
  padding: 5px 10px;
  width: 250px;
  height: 100px;
  font-weight: bold;
}

#due-date-fieldset {
  display: flex;
  justify-content: start;
}

#due-date-label, #priority-title {
  margin: 0 20px;
}

#select-project-label {
  padding-left: 20px;
}

#todo-due-date-input {
  width: 150px;
}

#priority-fieldset {
  margin-bottom: 20px;
}

.priority-option {
  margin: 20px;
  font-weight: bold;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px 15px;
}

#low-priority-label {
  color: rgb(11, 147, 11);
  border: 2px solid rgb(11, 147, 11);
  transition: 0.7s;
  font-size: 12px;
  font-weight: bold;
  padding: 3px 8px;
  border-radius: 10px;
  margin: 5px;
}

#low-priority-label:hover {
  color: white;
  background-color: rgb(11, 147, 11);
  cursor: pointer;
}

#high-priority-label {
  color: rgb(215, 45, 45);
  border: 2px solid rgb(215, 45, 45);
  transition: 0.7s;
  font-size: 12px;
  font-weight: bold;
  padding: 3px 8px;
  border-radius: 10px;
  margin: 5px;
}

#high-priority-label:hover {
  color: white;
  background-color: rgb(215, 45, 45);
  cursor: pointer;
}

.priority-option, #default-project-name, .project-name {
  position: fixed;
  opacity: 0;
  pointer-events: none;
}

#project-fieldset {
  display: flex;
}

#default-project-label, .project-label {
  color: rgb(62, 167, 253);
  border: 1px solid rgb(62, 167, 253);
  padding: 5px 10px;
  font-size: 12px;
  font-weight: bold;
  margin: 2px;
  border-radius: 10px;
  transition: 0.7s;
}

#default-project-label:hover, .project-label:hover {
  color: white;
  background-color: rgb(62, 167, 253);
  cursor: pointer;
}

#submit-project-button {
  width: 150px;
  cursor: pointer;
  border: 1px solid rgb(62, 167, 253);
  color: rgb(62, 167, 253);
  font-size: 15px;
  font-weight: bold;
  border-radius: 20px;
  margin: 10px 0;
  padding: 5px 20px;
  background-color: white;
  transition: 0.7s;
}

#submit-project-button:hover {
  background-color: rgb(62, 167, 253);
  color: white;
}

#cancel-project-button, #cancel-todo-button, #exit-todo-button {
  width: 20px;
  height: 20px;
  border: none;
  background-color: white;
  color: rgb(62, 167, 253);
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  transition: 0.7s;
}

#cancel-project-button:hover, #cancel-todo-button:hover, #exit-todo-button:hover {
  background-color: rgb(62, 167, 253);
  color: white;
}

#todo-details-container {
  padding: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 350px;
  background-color: white;
  border: 1px solid gray;
  box-shadow: 0px 0px 5px 1px rgb(170, 162, 162);
}

#selected-todo-item-title {
  width: 93%;
  padding: 10px;
  font-size: 20px;
  background-color: rgb(62, 167, 253);
  color: white;
  font-weight: bold;
}

#priority-container {
  margin: 5px 10px;
  display: flex;
  align-items: center;
}

#high-priority-container {
  margin-left: 10px;
  color: white;
  background-color: rgb(215, 45, 45);
  padding: 2px 5px;
  border-radius: 10px;
  font-size: 10px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
}

#low-priority-container {
  margin-left: 10px;
  color: white;
  background-color: rgb(11, 147, 11);
  padding: 2px 5px;
  border-radius: 10px;
  font-size: 10px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
}

#selected-todo-item-due-date {
  padding: 5px 0 0 10px;
  font-size: 12px;
  color: gray;
}

#selected-todo-item-description {
  font-size: 15px;
  padding: 10px;
}

#selected-title-label, #selected-due-date-label, #selected-description-label, #selected-priority-label {
  padding: 10px;
}

#selected-description-input {
  margin-bottom: 10px;
}

#submit-todo-edit-button {
  width: 150px;
  cursor: pointer;
  border: 1px solid rgb(62, 167, 253);
  margin: 10px auto;
  color: rgb(62, 167, 253);
  font-size: 15px;
  font-weight: bold;
  border-radius: 20px;
  padding: 5px 20px;
  background-color: white;
  transition: 0.7s;
}

#submit-todo-edit-button:hover {
  background-color: rgb(62, 167, 253);
  color: white;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["::placeholder {\r\n  color: rgb(139, 133, 133);\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Roboto';\r\n  src: url('./Roboto-Regular.ttf') format('ttf'), \r\n  url('./Roboto-Bold.ttf') format('ttf');\r\n  font-weight: 400, 700;\r\n  font-style: normal;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  font-family: 'Roboto';\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n#nav-bar {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  height: 50px;\r\n  font-size: 25px;\r\n  font-weight: bold;\r\n  color: white;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 0 15px;\r\n  background-color: rgb(62, 167, 253);\r\n}\r\n\r\n#left-nav-bar {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n#right-nav-bar {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n#container {\r\n  display: flex;\r\n  margin-top: 50px;\r\n  width: 100vw;\r\n  height: 85vh;\r\n  border-bottom: 1px solid gray;\r\n  box-shadow: 1px 2px 5px 1px rgb(170, 162, 162);\r\n}\r\n\r\n#left-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  flex: 1;\r\n  height: 100%;\r\n  background-color: rgb(229, 224, 224);\r\n  border-right: 1px solid gray;\r\n}\r\n\r\n#project-list {\r\n  width: 100%;\r\n  height: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding-top: 15px;\r\n}\r\n\r\n.project-list-item {\r\n  font-size: 18px;\r\n  font-weight: bold;\r\n  width: 70%;\r\n  border-radius: 5px;\r\n  margin: 2px 0;\r\n  padding: 5px 10px;\r\n  transition: 0.7s;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.project-list-item:hover {\r\n  background-color: rgb(198, 194, 194);\r\n}\r\n\r\n.project-item-text {\r\n  width: 80%;\r\n}\r\n\r\n.project-item-amount {\r\n  padding: 2px;\r\n  border-radius: 50%;\r\n  height: 20px;\r\n  width: 20px;\r\n  color: white;\r\n  background-color: rgb(62, 167, 253);\r\n  font-size: 12px;\r\n  font-weight: bold;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  transition: 0.7s;\r\n}\r\n\r\n#right-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: start;\r\n  height: 100%;\r\n  flex: 3;\r\n}\r\n\r\n#todos-container {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.todo-item {\r\n  padding: 10px;\r\n  width: 80%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin: 5px;\r\n  border-bottom: 1px solid rgb(169, 164, 164);\r\n  transition: 0.7s;\r\n}\r\n\r\n.todo-item:hover {\r\n  cursor: pointer;\r\n  color: white;\r\n  background-color: rgb(62, 167, 253);\r\n}\r\n\r\n.todo-item-left-container {\r\n  display: flex;\r\n  width: 50%;\r\n  height: 100%;\r\n  font-weight: bold;\r\n  align-items: center;\r\n  font-size: 19px;\r\n}\r\n\r\n.todo-item-right-container {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.todo-item-title {\r\n  margin-left: 10px;\r\n}\r\n\r\n.todo-item-high-priority {\r\n  margin-left: 10px;\r\n  color: white;\r\n  background-color: rgb(215, 45, 45);\r\n  padding: 2px 5px;\r\n  border-radius: 10px;\r\n  font-size: 10px;\r\n  font-weight: bold;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.todo-item-due-date {\r\n  color: gray;\r\n  margin-right: 10px;\r\n}\r\n\r\n#edit-icon, #delete-icon {\r\n  object-fit: cover;\r\n  padding: 5px;\r\n  border-radius: 50%;\r\n  color: white;\r\n  background-color: rgb(62, 167, 253);\r\n  margin: 0 5px 2px 5px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  transition: 0.7s;\r\n}\r\n\r\n#edit-icon:hover, #delete-icon:hover {\r\n  color: rgb(62, 167, 253);\r\n  background-color: white;\r\n}\r\n\r\n#project-background, #todo-background {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  background-color: white;\r\n  opacity: 0.7;\r\n  z-index: 0;\r\n}\r\n\r\n#form-container {\r\n  position: fixed;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  z-index: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n#cancel-todo-button-container {\r\n  width: 400px;\r\n  display: flex;\r\n  justify-content: end;\r\n}\r\n\r\n#cancel-project-button-container {\r\n  width: 250px;\r\n  display: flex;\r\n  justify-content: end;\r\n}\r\n\r\n#new-project-form, #new-todo-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  border-radius: 5px;\r\n  padding: 10px;\r\n  background-color: white;\r\n  border: 1px solid gray;\r\n  box-shadow: 0px 0px 5px 1px rgb(170, 162, 162);\r\n}\r\n\r\n#new-project-button {\r\n  width: 150px;\r\n  cursor: pointer;\r\n  border: 1px solid white;\r\n  margin: 0 5px;\r\n  color: rgb(62, 167, 253);\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n  border-radius: 20px;\r\n  padding: 5px 20px;\r\n  background-color: white;\r\n  transition: 0.7s;\r\n}\r\n\r\n#add-todo-button {\r\n  width: 150px;\r\n  cursor: pointer;\r\n  border: 1px solid rgb(62, 167, 253);\r\n  margin: 20px 30px;\r\n  color: rgb(62, 167, 253);\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n  border-radius: 20px;\r\n  padding: 5px 20px;\r\n  background-color: white;\r\n  transition: 0.7s;\r\n}\r\n\r\n#new-project-button:hover, #add-todo-button:hover {\r\n  background-color: rgb(62, 167, 253);\r\n  color: white;\r\n}\r\n\r\nfieldset {\r\n  border: none;\r\n  width: 400px;\r\n  padding: 5px 0;\r\n  margin: 0;\r\n}\r\n\r\ninput, #project-title {\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n  border-radius: 10px;\r\n  margin: 5px 20px 0 20px;\r\n  border: 1px solid rgb(223, 218, 218);\r\n  padding: 5px 10px;\r\n  width: 250px;\r\n}\r\n\r\n#project-title {\r\n  margin: 10px;\r\n}\r\n\r\ntextarea {\r\n  resize: none;\r\n  font-size: 15px;\r\n  border-radius: 10px;\r\n  margin: 5px 20px 0 20px;\r\n  border: 1px solid rgb(223, 218, 218);\r\n  padding: 5px 10px;\r\n  width: 250px;\r\n  height: 100px;\r\n  font-weight: bold;\r\n}\r\n\r\n#due-date-fieldset {\r\n  display: flex;\r\n  justify-content: start;\r\n}\r\n\r\n#due-date-label, #priority-title {\r\n  margin: 0 20px;\r\n}\r\n\r\n#select-project-label {\r\n  padding-left: 20px;\r\n}\r\n\r\n#todo-due-date-input {\r\n  width: 150px;\r\n}\r\n\r\n#priority-fieldset {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.priority-option {\r\n  margin: 20px;\r\n  font-weight: bold;\r\n  border: 1px solid black;\r\n  border-radius: 10px;\r\n  padding: 10px 15px;\r\n}\r\n\r\n#low-priority-label {\r\n  color: rgb(11, 147, 11);\r\n  border: 2px solid rgb(11, 147, 11);\r\n  transition: 0.7s;\r\n  font-size: 12px;\r\n  font-weight: bold;\r\n  padding: 3px 8px;\r\n  border-radius: 10px;\r\n  margin: 5px;\r\n}\r\n\r\n#low-priority-label:hover {\r\n  color: white;\r\n  background-color: rgb(11, 147, 11);\r\n  cursor: pointer;\r\n}\r\n\r\n#high-priority-label {\r\n  color: rgb(215, 45, 45);\r\n  border: 2px solid rgb(215, 45, 45);\r\n  transition: 0.7s;\r\n  font-size: 12px;\r\n  font-weight: bold;\r\n  padding: 3px 8px;\r\n  border-radius: 10px;\r\n  margin: 5px;\r\n}\r\n\r\n#high-priority-label:hover {\r\n  color: white;\r\n  background-color: rgb(215, 45, 45);\r\n  cursor: pointer;\r\n}\r\n\r\n.priority-option, #default-project-name, .project-name {\r\n  position: fixed;\r\n  opacity: 0;\r\n  pointer-events: none;\r\n}\r\n\r\n#project-fieldset {\r\n  display: flex;\r\n}\r\n\r\n#default-project-label, .project-label {\r\n  color: rgb(62, 167, 253);\r\n  border: 1px solid rgb(62, 167, 253);\r\n  padding: 5px 10px;\r\n  font-size: 12px;\r\n  font-weight: bold;\r\n  margin: 2px;\r\n  border-radius: 10px;\r\n  transition: 0.7s;\r\n}\r\n\r\n#default-project-label:hover, .project-label:hover {\r\n  color: white;\r\n  background-color: rgb(62, 167, 253);\r\n  cursor: pointer;\r\n}\r\n\r\n#submit-project-button {\r\n  width: 150px;\r\n  cursor: pointer;\r\n  border: 1px solid rgb(62, 167, 253);\r\n  color: rgb(62, 167, 253);\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n  border-radius: 20px;\r\n  margin: 10px 0;\r\n  padding: 5px 20px;\r\n  background-color: white;\r\n  transition: 0.7s;\r\n}\r\n\r\n#submit-project-button:hover {\r\n  background-color: rgb(62, 167, 253);\r\n  color: white;\r\n}\r\n\r\n#cancel-project-button, #cancel-todo-button, #exit-todo-button {\r\n  width: 20px;\r\n  height: 20px;\r\n  border: none;\r\n  background-color: white;\r\n  color: rgb(62, 167, 253);\r\n  cursor: pointer;\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-bottom: 5px;\r\n  transition: 0.7s;\r\n}\r\n\r\n#cancel-project-button:hover, #cancel-todo-button:hover, #exit-todo-button:hover {\r\n  background-color: rgb(62, 167, 253);\r\n  color: white;\r\n}\r\n\r\n#todo-details-container {\r\n  padding: 10px;\r\n  border-radius: 5px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: start;\r\n  width: 350px;\r\n  background-color: white;\r\n  border: 1px solid gray;\r\n  box-shadow: 0px 0px 5px 1px rgb(170, 162, 162);\r\n}\r\n\r\n#selected-todo-item-title {\r\n  width: 93%;\r\n  padding: 10px;\r\n  font-size: 20px;\r\n  background-color: rgb(62, 167, 253);\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n\r\n#priority-container {\r\n  margin: 5px 10px;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n#high-priority-container {\r\n  margin-left: 10px;\r\n  color: white;\r\n  background-color: rgb(215, 45, 45);\r\n  padding: 2px 5px;\r\n  border-radius: 10px;\r\n  font-size: 10px;\r\n  font-weight: bold;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n#low-priority-container {\r\n  margin-left: 10px;\r\n  color: white;\r\n  background-color: rgb(11, 147, 11);\r\n  padding: 2px 5px;\r\n  border-radius: 10px;\r\n  font-size: 10px;\r\n  font-weight: bold;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n#selected-todo-item-due-date {\r\n  padding: 5px 0 0 10px;\r\n  font-size: 12px;\r\n  color: gray;\r\n}\r\n\r\n#selected-todo-item-description {\r\n  font-size: 15px;\r\n  padding: 10px;\r\n}\r\n\r\n#selected-title-label, #selected-due-date-label, #selected-description-label, #selected-priority-label {\r\n  padding: 10px;\r\n}\r\n\r\n#selected-description-input {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n#submit-todo-edit-button {\r\n  width: 150px;\r\n  cursor: pointer;\r\n  border: 1px solid rgb(62, 167, 253);\r\n  margin: 10px auto;\r\n  color: rgb(62, 167, 253);\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n  border-radius: 20px;\r\n  padding: 5px 20px;\r\n  background-color: white;\r\n  transition: 0.7s;\r\n}\r\n\r\n#submit-todo-edit-button:hover {\r\n  background-color: rgb(62, 167, 253);\r\n  color: white;\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultProject: () => (/* binding */ defaultProject),
/* harmony export */   projectListArray: () => (/* binding */ projectListArray)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _new_project_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-project-form */ "./src/new-project-form.js");
/* harmony import */ var _new_todo_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-todo-form */ "./src/new-todo-form.js");
/* harmony import */ var _show_todo_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./show-todo-list */ "./src/show-todo-list.js");





const link = document.createElement("link");
link.setAttribute("rel", "stylesheet");
link.setAttribute("href", "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,300,0,0");
document.head.appendChild(link);

const projectListArray = [];
projectListArray.textContent = "Project List";

const defaultProject = [];
defaultProject.textContent = "Default Project";
projectListArray.push(defaultProject);

const libraryApp = [];
libraryApp.textContent = "Library App";
projectListArray.push(libraryApp);

const restaurantPage = [];
restaurantPage.textContent = "Restaurant Page";
projectListArray.push(restaurantPage);

const todoItemOne = {
  title: "New todo", 
  description: "Things to read", 
  dueDate: "2023-09-19", 
  lowPriority: false, 
  highPriority: true
};

const todoItemTwo = {
  title: "Add edit button", 
  description: "Need to add button in order to edit details!", 
  dueDate: "2023-09-30",
  lowPriority: true, 
  highPriority: false
};

const todoItemThree = {
  title: "Clean tables", 
  description: "The restaurant is busy at night.", 
  dueDate: "2023-10-07", 
  lowPriority: true, 
  highPriority: false
};

const todoItemFour = {
  title: "Finish Project", 
  description: "These are details of the todo you selected. This description is longer than others, in order to expand the container.", 
  dueDate: "2023-09-27",
  lowPriority: true, 
  highPriority: false
};

defaultProject.push(todoItemOne);
defaultProject.push(todoItemTwo);
restaurantPage.push(todoItemThree);
defaultProject.push(todoItemFour);

const navBar = document.createElement("div");
navBar.setAttribute("id", "nav-bar");
navBar.textContent = "Todo App";
document.body.appendChild(navBar);

const leftNavBar = document.createElement("div");
leftNavBar.setAttribute("id", "left-nav-bar");
navBar.appendChild(leftNavBar);

const rightNavBar = document.createElement("div");
rightNavBar.setAttribute("id", "right-nav-bar");
navBar.appendChild(rightNavBar);

const container = document.createElement("div");
container.setAttribute("id", "container");
document.body.appendChild(container);

const leftContainer = document.createElement("div");
leftContainer.setAttribute("id", "left-container");
container.appendChild(leftContainer);

const projectList = document.createElement("div");
projectList.setAttribute("id", "project-list");
leftContainer.appendChild(projectList);

(0,_show_todo_list__WEBPACK_IMPORTED_MODULE_3__.updateProjectList)();

const rightContainer = document.createElement("div");
rightContainer.setAttribute("id", "right-container");
container.appendChild(rightContainer);

const addTodoButton = document.createElement("button");
addTodoButton.setAttribute("id", "add-todo-button");
addTodoButton.textContent = "Add Todo";
rightContainer.appendChild(addTodoButton);

addTodoButton.addEventListener("click", _new_todo_form__WEBPACK_IMPORTED_MODULE_2__.addTodoForm);

const todosContainer = document.createElement("div");
todosContainer.setAttribute("id", "todos-container");
rightContainer.appendChild(todosContainer);

const newProjectButton = document.createElement("button");
newProjectButton.setAttribute("id", "new-project-button");
newProjectButton.textContent = "Add Project";
rightNavBar.appendChild(newProjectButton);

newProjectButton.addEventListener("click", _new_project_form__WEBPACK_IMPORTED_MODULE_1__.addProjectForm);



/***/ }),

/***/ "./src/new-project-form.js":
/*!*********************************!*\
  !*** ./src/new-project-form.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProjectForm: () => (/* binding */ addProjectForm),
/* harmony export */   submitProjectForm: () => (/* binding */ submitProjectForm)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _show_todo_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show-todo-list */ "./src/show-todo-list.js");



const project = [];

const addProjectForm = () => {
  const projectBackground = document.createElement("div");
  projectBackground.setAttribute("id", "project-background");
  document.body.appendChild(projectBackground);

  const formContainer = document.createElement("div");
  formContainer.setAttribute("id", "form-container");
  document.body.appendChild(formContainer);

  const cancelButtonContainer = document.createElement("div");
  cancelButtonContainer.setAttribute("id", "cancel-project-button-container");
  formContainer.appendChild(cancelButtonContainer);

  const cancelProjectButton = document.createElement("button");
  cancelProjectButton.setAttribute("id", "cancel-project-button");
  cancelProjectButton.textContent = "X";
  cancelButtonContainer.appendChild(cancelProjectButton);

  cancelProjectButton.addEventListener("click", removeProjectForm);

  const newProjectForm = document.createElement("form");
  newProjectForm.setAttribute("id", "new-project-form");
  formContainer.appendChild(newProjectForm);

  const projectTitle = document.createElement("input");
  projectTitle.setAttribute("id", "project-title");
  projectTitle.setAttribute("placeholder", "Enter Project Title");
  newProjectForm.appendChild(projectTitle);

  const submitProjectButton = document.createElement("button");
  submitProjectButton.setAttribute("id", "submit-project-button");
  submitProjectButton.textContent = "Submit Project";
  newProjectForm.appendChild(submitProjectButton);

  submitProjectButton.addEventListener("click", submitProjectForm);
};

const submitProjectForm = (event) => {
  event.preventDefault();
  
  const title = document.querySelector("#project-title").value;

  const newProjectArray = project.slice();
  newProjectArray.textContent = title;
  console.log(newProjectArray);
  ___WEBPACK_IMPORTED_MODULE_0__.projectListArray.push(newProjectArray);

  (0,_show_todo_list__WEBPACK_IMPORTED_MODULE_1__.updateProjectList)();
  removeProjectForm();
};

const removeProjectForm = () => {
  const projectBackground = document.querySelector("#project-background");
  document.body.removeChild(projectBackground);

  const formContainer = document.querySelector("#form-container");
  document.body.removeChild(formContainer);
};



/***/ }),

/***/ "./src/new-todo-form.js":
/*!******************************!*\
  !*** ./src/new-todo-form.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTodoForm: () => (/* binding */ addTodoForm),
/* harmony export */   submitTodoForm: () => (/* binding */ submitTodoForm)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _show_todo_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show-todo-list */ "./src/show-todo-list.js");




const Todo = (title, description, dueDate, lowPriority, highPriority) => {
  return { title, description, dueDate, lowPriority, highPriority };
};

const addTodoForm = () => {
  const todoBackground = document.createElement("div");
  todoBackground.setAttribute("id", "todo-background");
  document.body.appendChild(todoBackground);

  const formContainer = document.createElement("div");
  formContainer.setAttribute("id", "form-container");
  document.body.appendChild(formContainer);

  const cancelButtonContainer = document.createElement("div");
  cancelButtonContainer.setAttribute("id", "cancel-todo-button-container");
  formContainer.appendChild(cancelButtonContainer);

  const cancelTodoButton = document.createElement("button");
  cancelTodoButton.setAttribute("id", "cancel-todo-button");
  cancelTodoButton.textContent = "X";
  cancelButtonContainer.appendChild(cancelTodoButton);

  cancelTodoButton.addEventListener("click", removeTodoForm);

  const newTodoForm = document.createElement("form");
  newTodoForm.setAttribute("id", "new-todo-form");
  formContainer.appendChild(newTodoForm);

  const titleFieldset = document.createElement("fieldset");
  titleFieldset.setAttribute("id", "title-fieldset");
  newTodoForm.appendChild(titleFieldset);

  const todoTitle = document.createElement("input");
  todoTitle.setAttribute("id", "todo-title-input");
  todoTitle.setAttribute("type", "text");
  todoTitle.setAttribute("maxlength", "50");
  todoTitle.setAttribute("placeholder", "Entere Todo Title");
  todoTitle.required = true;
  titleFieldset.appendChild(todoTitle);

  const descriptionFieldset = document.createElement("fieldset");
  descriptionFieldset.setAttribute("id", "description-fieldset");
  newTodoForm.appendChild(descriptionFieldset);

  const todoDescription = document.createElement("textarea");
  todoDescription.setAttribute("id", "description-textarea");
  todoDescription.setAttribute("placeholder", "Description:");
  descriptionFieldset.appendChild(todoDescription);

  const dueDateFieldset = document.createElement("fieldset");
  dueDateFieldset.setAttribute("id", "due-date-fieldset");
  newTodoForm.appendChild(dueDateFieldset);

  const dueDateLabel = document.createElement("label");
  dueDateLabel.setAttribute("for", "todo-due-date-input");
  dueDateLabel.setAttribute("id", "due-date-label");
  dueDateLabel.textContent = "Due Date:";
  dueDateFieldset.appendChild(dueDateLabel);

  const todoDueDate = document.createElement("input");
  todoDueDate.setAttribute("id", "todo-due-date-input");
  todoDueDate.setAttribute("type", "date");
  todoDueDate.required = true;
  dueDateFieldset.appendChild(todoDueDate);

  const priorityFieldset = document.createElement("fieldset");
  priorityFieldset.setAttribute("id", "priority-fieldset");
  newTodoForm.appendChild(priorityFieldset);

  const priorityTitle = document.createElement("div");
  priorityTitle.setAttribute("id", "priority-title");
  priorityTitle.textContent = "Priority:";
  priorityFieldset.appendChild(priorityTitle);

  const lowPriorityOption = document.createElement("input");
  lowPriorityOption.setAttribute("type", "radio");
  lowPriorityOption.classList.add("priority-option");
  lowPriorityOption.setAttribute("name", "priority-option");
  lowPriorityOption.setAttribute("id", "low-priority");
  lowPriorityOption.setAttribute("checked", "");
  priorityTitle.appendChild(lowPriorityOption);

  const lowPriorityLabel = document.createElement("label");
  lowPriorityLabel.setAttribute("for", "low-priority");
  lowPriorityLabel.setAttribute("id", "low-priority-label");
  lowPriorityLabel.textContent = "LOW";
  priorityTitle.appendChild(lowPriorityLabel);

  const highPriorityOption = document.createElement("input");
  highPriorityOption.setAttribute("type", "radio");
  highPriorityOption.classList.add("priority-option");
  highPriorityOption.setAttribute("name", "priority-option");
  highPriorityOption.setAttribute("id", "high-priority");
  priorityTitle.appendChild(highPriorityOption);

  const highPriorityLabel = document.createElement("label");
  highPriorityLabel.setAttribute("for", "high-priority");
  highPriorityLabel.setAttribute("id", "high-priority-label");
  highPriorityLabel.textContent = "HIGH";
  priorityTitle.appendChild(highPriorityLabel);

  const projectLabel = document.createElement("fieldset");
  projectLabel.setAttribute("id", "select-project-label");
  projectLabel.textContent = "Choose Project to add Todo:";
  newTodoForm.appendChild(projectLabel);

  const projectFieldset = document.createElement("fieldset");
  projectFieldset.setAttribute("id", "project-fieldset");
  newTodoForm.appendChild(projectFieldset);

  const defaultProjectRadio = document.createElement("input");
  defaultProjectRadio.setAttribute("type", "radio");
  defaultProjectRadio.setAttribute("id", "default-project-name");
  defaultProjectRadio.classList.add("project-name");
  defaultProjectRadio.setAttribute("name", "project-name");
  defaultProjectRadio.setAttribute("checked", "");
  projectFieldset.appendChild(defaultProjectRadio);

  const defaultProjectLabel = document.createElement("label");
  defaultProjectLabel.setAttribute("for", "default-project-name");
  defaultProjectLabel.setAttribute("id", "default-project-label");
  defaultProjectLabel.textContent = ___WEBPACK_IMPORTED_MODULE_0__.defaultProject.textContent;
  projectFieldset.appendChild(defaultProjectLabel);

  for (let i = 1; i < ___WEBPACK_IMPORTED_MODULE_0__.projectListArray.length; i++) {
    const newProjectRadio = document.createElement("input");
    newProjectRadio.setAttribute("type", "radio");
    newProjectRadio.classList.add("project-name");
    newProjectRadio.setAttribute("name", "project-name");
    newProjectRadio.setAttribute("id", `project-index-${i}`);
    projectFieldset.appendChild(newProjectRadio);

    const newProjectLabel = document.createElement("label");
    newProjectLabel.setAttribute("for", `project-index-${i}`);
    newProjectLabel.classList.add("project-label");
    newProjectLabel.textContent = ___WEBPACK_IMPORTED_MODULE_0__.projectListArray[i].textContent;
    projectFieldset.appendChild(newProjectLabel);
  };

  const submitTodoButton = document.createElement("button");
  submitTodoButton.setAttribute("id", "submit-project-button");
  submitTodoButton.textContent = "Submit Todo";
  newTodoForm.appendChild(submitTodoButton);

  submitTodoButton.addEventListener("click", submitTodoForm);
};

const submitTodoForm = (event) => {
  event.preventDefault();

  const title = document.querySelector("#todo-title-input").value;
  const description = document.querySelector("#description-textarea").value;
  const dueDate = document.querySelector("#todo-due-date-input").value;
  const lowPriority = document.querySelector("#low-priority").checked;
  const highPriority = document.querySelector("#high-priority").checked;

  const newTodo = Todo(title, description, dueDate, lowPriority, highPriority);
  console.log(newTodo);

  for (let i = 0; i < ___WEBPACK_IMPORTED_MODULE_0__.projectListArray.length; i++) {
    const newProjectRadio = document.querySelectorAll(".project-name");
    if (newProjectRadio[i].checked == true) {
      ___WEBPACK_IMPORTED_MODULE_0__.projectListArray[i].push(newTodo);
    };
  };

  const todosContainer = document.querySelector("#todos-container");
  todosContainer.innerHTML = "";

  (0,_show_todo_list__WEBPACK_IMPORTED_MODULE_1__.updateProjectList)();
  removeTodoForm();
};

const removeTodoForm = () => {
  const todoBackground = document.querySelector("#todo-background");
  document.body.removeChild(todoBackground);

  const formContainer = document.querySelector("#form-container");
  document.body.removeChild(formContainer);
};



/***/ }),

/***/ "./src/show-todo-list.js":
/*!*******************************!*\
  !*** ./src/show-todo-list.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateProjectList: () => (/* binding */ updateProjectList)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");



const updateProjectList = () => {
  const projectList = document.querySelector("#project-list");
  projectList.innerHTML = "";
  
  for (let i = 0; i < ___WEBPACK_IMPORTED_MODULE_0__.projectListArray.length; i++) {
    const projectListItem = document.createElement("div");
    projectListItem.classList.add("project-list-item");
    projectListItem.setAttribute("data-project-id", i);
    projectList.appendChild(projectListItem);

    const projectItemText = document.createElement("div");
    projectItemText.classList.add("project-item-text");
    projectItemText.textContent = ___WEBPACK_IMPORTED_MODULE_0__.projectListArray[i].textContent.toUpperCase();
    projectListItem.appendChild(projectItemText);

    const projectItemAmount = document.createElement("div");
    projectItemAmount.classList.add("project-item-amount");
    projectItemAmount.textContent = ___WEBPACK_IMPORTED_MODULE_0__.projectListArray[i].length;
    projectListItem.appendChild(projectItemAmount);
  };

  const projectListItem = document.querySelectorAll(".project-list-item");

  projectListItem.forEach((project) => {
    project.addEventListener("click", function showTodosFromProject () {
      const selectedProject = ___WEBPACK_IMPORTED_MODULE_0__.projectListArray[project.dataset.projectId];

      const showTodosList = () => {
        const todosContainer = document.querySelector("#todos-container");
        todosContainer.innerHTML = "";

        for (let i = 0; i < selectedProject.length; i++) {
          // selectedProject[i].dueDate.sort(compareAsc);
          // PPPppp
          const todoItem = document.createElement("div");
          todoItem.classList.add("todo-item");
          todoItem.setAttribute("data-todo-id", i);
          todosContainer.appendChild(todoItem);

          const todoItemLeftContainer = document.createElement("div");
          todoItemLeftContainer.classList.add("todo-item-left-container");
          todoItem.appendChild(todoItemLeftContainer);

          todoItemLeftContainer.addEventListener("click", function showTodoItem () {
            const todoBackground = document.createElement("div");
            todoBackground.setAttribute("id", "todo-background");
            document.body.appendChild(todoBackground);
          
            const formContainer = document.createElement("div");
            formContainer.setAttribute("id", "form-container");
            document.body.appendChild(formContainer);
          
            const cancelButtonContainer = document.createElement("div");
            cancelButtonContainer.setAttribute("id", "cancel-project-button-container");
            formContainer.appendChild(cancelButtonContainer);
          
            const exitTodoButton = document.createElement("button");
            exitTodoButton.setAttribute("id", "exit-todo-button");
            exitTodoButton.textContent = "X";
            cancelButtonContainer.appendChild(exitTodoButton);

            exitTodoButton.addEventListener("click", exitTodo);

            const todoDetailsContainer = document.createElement("div");
            todoDetailsContainer.setAttribute("id", "todo-details-container");
            formContainer.appendChild(todoDetailsContainer);
          
            const selectedTodoItemTitle = document.createElement("div");
            selectedTodoItemTitle.setAttribute("id", "selected-todo-item-title");
            selectedTodoItemTitle.textContent = selectedProject[i].title;
            todoDetailsContainer.appendChild(selectedTodoItemTitle);

            const priorityContainer = document.createElement("div");
            priorityContainer.setAttribute("id", "priority-container");
            priorityContainer.textContent = "Priority: ";
            todoDetailsContainer.appendChild(priorityContainer);

            if (selectedProject[i].highPriority == true) {
              const highPriorityContainer = document.createElement("div");
              highPriorityContainer.setAttribute("id", "high-priority-container");
              highPriorityContainer.textContent = "HIGH";
              priorityContainer.appendChild(highPriorityContainer);
            } else if (selectedProject[i].lowPriority == true) {
              const lowPriorityContainer = document.createElement("div");
              lowPriorityContainer.setAttribute("id", "low-priority-container");
              lowPriorityContainer.textContent = "LOW";
              priorityContainer.appendChild(lowPriorityContainer);
            };

            const selectedTodoItemDueDate = document.createElement("div");
            selectedTodoItemDueDate.setAttribute("id", "selected-todo-item-due-date");
            selectedTodoItemDueDate.textContent = `Due date: ${selectedProject[i].dueDate}`;
            todoDetailsContainer.appendChild(selectedTodoItemDueDate);

            const selectedTodoItemDescription = document.createElement("div");
            selectedTodoItemDescription.setAttribute("id", "selected-todo-item-description");
            selectedTodoItemDescription.textContent = `Description: ${selectedProject[i].description}`;
            todoDetailsContainer.appendChild(selectedTodoItemDescription);
          });

          const todoItemTitle = document.createElement("div");
          todoItemTitle.classList.add("todo-item-title");
          todoItemTitle.textContent = selectedProject[i].title;
          todoItemLeftContainer.appendChild(todoItemTitle);

          if (selectedProject[i].highPriority == true) {
            const todoItemHighPriority = document.createElement("div");
            todoItemHighPriority.classList.add("todo-item-high-priority");
            todoItemHighPriority.textContent = "HIGH";
            todoItemLeftContainer.appendChild(todoItemHighPriority);
          };

          const todoItemRightContainer = document.createElement("div");
          todoItemRightContainer.classList.add("todo-item-right-container");
          todoItem.appendChild(todoItemRightContainer);

          const itemDueDate = document.createElement("div");
          itemDueDate.classList.add("todo-item-due-date");
          itemDueDate.textContent = selectedProject[i].dueDate;
          todoItemRightContainer.appendChild(itemDueDate);

          const editIcon = document.createElement("class");
          editIcon.setAttribute("id", "edit-icon");
          editIcon.classList.add("id", "material-symbols-outlined");
          editIcon.textContent = "edit";
          todoItemRightContainer.appendChild(editIcon);

          editIcon.addEventListener("click", editTodoItem);

          function editTodoItem () {
            const todoBackground = document.createElement("div");
            todoBackground.setAttribute("id", "todo-background");
            document.body.appendChild(todoBackground);
          
            const formContainer = document.createElement("div");
            formContainer.setAttribute("id", "form-container");
            document.body.appendChild(formContainer);
          
            const cancelButtonContainer = document.createElement("div");
            cancelButtonContainer.setAttribute("id", "cancel-project-button-container");
            formContainer.appendChild(cancelButtonContainer);
          
            const exitTodoButton = document.createElement("button");
            exitTodoButton.setAttribute("id", "exit-todo-button");
            exitTodoButton.textContent = "X";
            cancelButtonContainer.appendChild(exitTodoButton);

            exitTodoButton.addEventListener("click", exitTodo);

            const todoDetailsContainer = document.createElement("div");
            todoDetailsContainer.setAttribute("id", "todo-details-container");
            formContainer.appendChild(todoDetailsContainer);

            const selectedTitleLabel = document.createElement("div");
            selectedTitleLabel.setAttribute("id", "selected-title-label");
            selectedTitleLabel.textContent = "Title";
            todoDetailsContainer.appendChild(selectedTitleLabel);
          
            const selectedTodoItemTitle = document.createElement("input");
            selectedTodoItemTitle.setAttribute("id", "selected-title-input");
            selectedTodoItemTitle.value = selectedProject[i].title;
            todoDetailsContainer.appendChild(selectedTodoItemTitle);

            const selectedDueDateLabel = document.createElement("div");
            selectedDueDateLabel.setAttribute("id", "selected-due-date-label");
            selectedDueDateLabel.textContent = "Due Date";
            todoDetailsContainer.appendChild(selectedDueDateLabel);

            const selectedTodoItemDueDate = document.createElement("input");
            selectedTodoItemDueDate.setAttribute("type", "date");
            selectedTodoItemDueDate.setAttribute("id", "selected-due-date-input");
            selectedTodoItemDueDate.value = selectedProject[i].dueDate;
            todoDetailsContainer.appendChild(selectedTodoItemDueDate);

            const selectedDescriptionLabel = document.createElement("div");
            selectedDescriptionLabel.setAttribute("id", "selected-description-label");
            selectedDescriptionLabel.textContent = "Description";
            todoDetailsContainer.appendChild(selectedDescriptionLabel);

            const selectedTodoItemDescription = document.createElement("textarea");
            selectedTodoItemDescription.setAttribute("id", "selected-description-textarea");
            selectedTodoItemDescription.value = selectedProject[i].description;
            todoDetailsContainer.appendChild(selectedTodoItemDescription);

            const selectedPriorityLabel = document.createElement("div");
            selectedPriorityLabel.setAttribute("id", "selected-priority-label");
            selectedPriorityLabel.textContent = "Priority";
            todoDetailsContainer.appendChild(selectedPriorityLabel);

            const selectedLowPriorityLabel = document.createElement("label");
            selectedLowPriorityLabel.setAttribute("id", "low-priority-label");
            selectedLowPriorityLabel.setAttribute("for", "low-priority");
            selectedLowPriorityLabel.textContent = "LOW";
            todoDetailsContainer.appendChild(selectedLowPriorityLabel);

            const selectedTodoItemLowPriority = document.createElement("input");
            selectedTodoItemLowPriority.setAttribute("type", "radio");
            selectedTodoItemLowPriority.setAttribute("id", "low-priority");
            selectedTodoItemLowPriority.classList.add("priority-option");
            selectedTodoItemLowPriority.setAttribute("name", "priority-option");
            selectedTodoItemLowPriority.checked = selectedProject[i].lowPriority;
            todoDetailsContainer.appendChild(selectedTodoItemLowPriority);

            const selectedHighPriorityLabel = document.createElement("label");
            selectedHighPriorityLabel.setAttribute("id", "high-priority-label");
            selectedHighPriorityLabel.setAttribute("for", "high-priority");
            selectedHighPriorityLabel.textContent = "HIGH";
            todoDetailsContainer.appendChild(selectedHighPriorityLabel);

            const selectedTodoItemHighPriority = document.createElement("input");
            selectedTodoItemHighPriority.setAttribute("type", "radio");
            selectedTodoItemHighPriority.setAttribute("id", "high-priority");
            selectedTodoItemHighPriority.classList.add("priority-option");
            selectedTodoItemHighPriority.setAttribute("name", "priority-option");
            selectedTodoItemHighPriority.checked = selectedProject[i].highPriority;
            todoDetailsContainer.appendChild(selectedTodoItemHighPriority);

            const submitEditTodoButton = document.createElement("button");
            submitEditTodoButton.setAttribute("id", "submit-todo-edit-button");
            submitEditTodoButton.textContent = "Submit Edit";
            todoDetailsContainer.appendChild(submitEditTodoButton);

            const submitTodoEditForm = (event) => {
              event.preventDefault();

              const EditedTodo = (title, description, dueDate, lowPriority, highPriority) => {
                return { title, description, dueDate, lowPriority, highPriority };
              };

              const title = document.querySelector("#selected-title-input").value;
              const description = document.querySelector("#selected-description-textarea").value;
              const dueDate = document.querySelector("#selected-due-date-input").value;
              const lowPriority = document.querySelector("#low-priority").checked;
              const highPriority = document.querySelector("#high-priority").checked;
              
              const todoEdit = EditedTodo(title, description, dueDate, lowPriority, highPriority);

              selectedProject.splice(todoItem.dataset.todoId, 1, todoEdit);
              showTodosList();
              updateProjectList();

              const todoBackground = document.querySelector("#todo-background");
              document.body.removeChild(todoBackground);

              const formContainer = document.querySelector("#form-container");
              document.body.removeChild(formContainer);
            };

            submitEditTodoButton.addEventListener("click", submitTodoEditForm);
          };

          const deleteIcon = document.createElement("class");
          deleteIcon.setAttribute("id", "delete-icon");
          deleteIcon.classList.add("id", "material-symbols-outlined");
          deleteIcon.textContent = "delete";
          todoItemRightContainer.appendChild(deleteIcon);

          deleteIcon.addEventListener("click", deleteTodoItem);

          function deleteTodoItem () {
            todosContainer.removeChild(todoItem);
            selectedProject.splice(todoItem.dataset.todoId, 1);
            showTodosList();
            updateProjectList();
          };
        };
      };

      showTodosList();
    });
  });
};

const exitTodo = () => {
  const todoBackground = document.querySelector("#todo-background");
  document.body.removeChild(todoBackground);

  const formContainer = document.querySelector("#form-container");
  document.body.removeChild(formContainer);
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHFIQUF1QztBQUNuRiw0Q0FBNEMsK0dBQW9DO0FBQ2hGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQsUUFBUSxtQ0FBbUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxPQUFPLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUs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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0VBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLHVEQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLDZEQUFjO0FBQ3pEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5R3FDO0FBQ2dCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0NBQWdCO0FBQ2xCO0FBQ0EsRUFBRSxrRUFBaUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0RtQztBQUNFO0FBQ2dCO0FBQ3JEO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzUkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9uZXctcHJvamVjdC1mb3JtLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL25ldy10b2RvLWZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc2hvdy10b2RvLWxpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vUm9ib3RvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9Sb2JvdG8tQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogcmdiKDEzOSwgMTMzLCAxMzMpO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KCd0dGYnKSwgXHJcbiAgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdCgndHRmJyk7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMCwgNzAwO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNuYXYtYmFyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYyLCAxNjcsIDI1Myk7XHJcbn1cclxuXHJcbiNsZWZ0LW5hdi1iYXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuI3JpZ2h0LW5hdi1iYXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuI2NvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDg1dmg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XHJcbiAgYm94LXNoYWRvdzogMXB4IDJweCA1cHggMXB4IHJnYigxNzAsIDE2MiwgMTYyKTtcclxufVxyXG5cclxuI2xlZnQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4OiAxO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI5LCAyMjQsIDIyNCk7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgZ3JheTtcclxufVxyXG5cclxuI3Byb2plY3QtbGlzdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG59XHJcblxyXG4ucHJvamVjdC1saXN0LWl0ZW0ge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB3aWR0aDogNzAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBtYXJnaW46IDJweCAwO1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIHRyYW5zaXRpb246IDAuN3M7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5wcm9qZWN0LWxpc3QtaXRlbTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5OCwgMTk0LCAxOTQpO1xyXG59XHJcblxyXG4ucHJvamVjdC1pdGVtLXRleHQge1xyXG4gIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWl0ZW0tYW1vdW50IHtcclxuICBwYWRkaW5nOiAycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGhlaWdodDogMjBweDtcclxuICB3aWR0aDogMjBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYyLCAxNjcsIDI1Myk7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiAwLjdzO1xyXG59XHJcblxyXG4jcmlnaHQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBmbGV4OiAzO1xyXG59XHJcblxyXG4jdG9kb3MtY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnRvZG8taXRlbSB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB3aWR0aDogODAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxNjksIDE2NCwgMTY0KTtcclxuICB0cmFuc2l0aW9uOiAwLjdzO1xyXG59XHJcblxyXG4udG9kby1pdGVtOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2MiwgMTY3LCAyNTMpO1xyXG59XHJcblxyXG4udG9kby1pdGVtLWxlZnQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxOXB4O1xyXG59XHJcblxyXG4udG9kby1pdGVtLXJpZ2h0LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4udG9kby1pdGVtLXRpdGxlIHtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuLnRvZG8taXRlbS1oaWdoLXByaW9yaXR5IHtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNSwgNDUsIDQ1KTtcclxuICBwYWRkaW5nOiAycHggNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnRvZG8taXRlbS1kdWUtZGF0ZSB7XHJcbiAgY29sb3I6IGdyYXk7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4jZWRpdC1pY29uLCAjZGVsZXRlLWljb24ge1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2MiwgMTY3LCAyNTMpO1xyXG4gIG1hcmdpbjogMCA1cHggMnB4IDVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogMC43cztcclxufVxyXG5cclxuI2VkaXQtaWNvbjpob3ZlciwgI2RlbGV0ZS1pY29uOmhvdmVyIHtcclxuICBjb2xvcjogcmdiKDYyLCAxNjcsIDI1Myk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiNwcm9qZWN0LWJhY2tncm91bmQsICN0b2RvLWJhY2tncm91bmQge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgb3BhY2l0eTogMC43O1xyXG4gIHotaW5kZXg6IDA7XHJcbn1cclxuXHJcbiNmb3JtLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNjYW5jZWwtdG9kby1idXR0b24tY29udGFpbmVyIHtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcclxufVxyXG5cclxuI2NhbmNlbC1wcm9qZWN0LWJ1dHRvbi1jb250YWluZXIge1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xyXG59XHJcblxyXG4jbmV3LXByb2plY3QtZm9ybSwgI25ldy10b2RvLWZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMXB4IHJnYigxNzAsIDE2MiwgMTYyKTtcclxufVxyXG5cclxuI25ldy1wcm9qZWN0LWJ1dHRvbiB7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICBtYXJnaW46IDAgNXB4O1xyXG4gIGNvbG9yOiByZ2IoNjIsIDE2NywgMjUzKTtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBwYWRkaW5nOiA1cHggMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiAwLjdzO1xyXG59XHJcblxyXG4jYWRkLXRvZG8tYnV0dG9uIHtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYig2MiwgMTY3LCAyNTMpO1xyXG4gIG1hcmdpbjogMjBweCAzMHB4O1xyXG4gIGNvbG9yOiByZ2IoNjIsIDE2NywgMjUzKTtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBwYWRkaW5nOiA1cHggMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiAwLjdzO1xyXG59XHJcblxyXG4jbmV3LXByb2plY3QtYnV0dG9uOmhvdmVyLCAjYWRkLXRvZG8tYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjIsIDE2NywgMjUzKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmZpZWxkc2V0IHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIHBhZGRpbmc6IDVweCAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuaW5wdXQsICNwcm9qZWN0LXRpdGxlIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBtYXJnaW46IDVweCAyMHB4IDAgMjBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjIzLCAyMTgsIDIxOCk7XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG59XHJcblxyXG4jcHJvamVjdC10aXRsZSB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgcmVzaXplOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbjogNXB4IDIwcHggMCAyMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMjMsIDIxOCwgMjE4KTtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuICB3aWR0aDogMjUwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuI2R1ZS1kYXRlLWZpZWxkc2V0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbn1cclxuXHJcbiNkdWUtZGF0ZS1sYWJlbCwgI3ByaW9yaXR5LXRpdGxlIHtcclxuICBtYXJnaW46IDAgMjBweDtcclxufVxyXG5cclxuI3NlbGVjdC1wcm9qZWN0LWxhYmVsIHtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbiN0b2RvLWR1ZS1kYXRlLWlucHV0IHtcclxuICB3aWR0aDogMTUwcHg7XHJcbn1cclxuXHJcbiNwcmlvcml0eS1maWVsZHNldCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLnByaW9yaXR5LW9wdGlvbiB7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZzogMTBweCAxNXB4O1xyXG59XHJcblxyXG4jbG93LXByaW9yaXR5LWxhYmVsIHtcclxuICBjb2xvcjogcmdiKDExLCAxNDcsIDExKTtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTEsIDE0NywgMTEpO1xyXG4gIHRyYW5zaXRpb246IDAuN3M7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHBhZGRpbmc6IDNweCA4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBtYXJnaW46IDVweDtcclxufVxyXG5cclxuI2xvdy1wcmlvcml0eS1sYWJlbDpob3ZlciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMSwgMTQ3LCAxMSk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4jaGlnaC1wcmlvcml0eS1sYWJlbCB7XHJcbiAgY29sb3I6IHJnYigyMTUsIDQ1LCA0NSk7XHJcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDIxNSwgNDUsIDQ1KTtcclxuICB0cmFuc2l0aW9uOiAwLjdzO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nOiAzcHggOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbn1cclxuXHJcbiNoaWdoLXByaW9yaXR5LWxhYmVsOmhvdmVyIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNSwgNDUsIDQ1KTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5wcmlvcml0eS1vcHRpb24sICNkZWZhdWx0LXByb2plY3QtbmFtZSwgLnByb2plY3QtbmFtZSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbiNwcm9qZWN0LWZpZWxkc2V0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4jZGVmYXVsdC1wcm9qZWN0LWxhYmVsLCAucHJvamVjdC1sYWJlbCB7XHJcbiAgY29sb3I6IHJnYig2MiwgMTY3LCAyNTMpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYig2MiwgMTY3LCAyNTMpO1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW46IDJweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHRyYW5zaXRpb246IDAuN3M7XHJcbn1cclxuXHJcbiNkZWZhdWx0LXByb2plY3QtbGFiZWw6aG92ZXIsIC5wcm9qZWN0LWxhYmVsOmhvdmVyIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYyLCAxNjcsIDI1Myk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4jc3VibWl0LXByb2plY3QtYnV0dG9uIHtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYig2MiwgMTY3LCAyNTMpO1xyXG4gIGNvbG9yOiByZ2IoNjIsIDE2NywgMjUzKTtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBtYXJnaW46IDEwcHggMDtcclxuICBwYWRkaW5nOiA1cHggMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiAwLjdzO1xyXG59XHJcblxyXG4jc3VibWl0LXByb2plY3QtYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjIsIDE2NywgMjUzKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiNjYW5jZWwtcHJvamVjdC1idXR0b24sICNjYW5jZWwtdG9kby1idXR0b24sICNleGl0LXRvZG8tYnV0dG9uIHtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOiByZ2IoNjIsIDE2NywgMjUzKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgdHJhbnNpdGlvbjogMC43cztcclxufVxyXG5cclxuI2NhbmNlbC1wcm9qZWN0LWJ1dHRvbjpob3ZlciwgI2NhbmNlbC10b2RvLWJ1dHRvbjpob3ZlciwgI2V4aXQtdG9kby1idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2MiwgMTY3LCAyNTMpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI3RvZG8tZGV0YWlscy1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcbiAgd2lkdGg6IDM1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMXB4IHJnYigxNzAsIDE2MiwgMTYyKTtcclxufVxyXG5cclxuI3NlbGVjdGVkLXRvZG8taXRlbS10aXRsZSB7XHJcbiAgd2lkdGg6IDkzJTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjIsIDE2NywgMjUzKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbiNwcmlvcml0eS1jb250YWluZXIge1xyXG4gIG1hcmdpbjogNXB4IDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4jaGlnaC1wcmlvcml0eS1jb250YWluZXIge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE1LCA0NSwgNDUpO1xyXG4gIHBhZGRpbmc6IDJweCA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4jbG93LXByaW9yaXR5LWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMSwgMTQ3LCAxMSk7XHJcbiAgcGFkZGluZzogMnB4IDVweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbiNzZWxlY3RlZC10b2RvLWl0ZW0tZHVlLWRhdGUge1xyXG4gIHBhZGRpbmc6IDVweCAwIDAgMTBweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6IGdyYXk7XHJcbn1cclxuXHJcbiNzZWxlY3RlZC10b2RvLWl0ZW0tZGVzY3JpcHRpb24ge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4jc2VsZWN0ZWQtdGl0bGUtbGFiZWwsICNzZWxlY3RlZC1kdWUtZGF0ZS1sYWJlbCwgI3NlbGVjdGVkLWRlc2NyaXB0aW9uLWxhYmVsLCAjc2VsZWN0ZWQtcHJpb3JpdHktbGFiZWwge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbiNzZWxlY3RlZC1kZXNjcmlwdGlvbi1pbnB1dCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuI3N1Ym1pdC10b2RvLWVkaXQtYnV0dG9uIHtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYig2MiwgMTY3LCAyNTMpO1xyXG4gIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gIGNvbG9yOiByZ2IoNjIsIDE2NywgMjUzKTtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBwYWRkaW5nOiA1cHggMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiAwLjdzO1xyXG59XHJcblxyXG4jc3VibWl0LXRvZG8tZWRpdC1idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2MiwgMTY3LCAyNTMpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQjt1REFDc0M7RUFDdEMscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxxQkFBcUI7RUFDckIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGVBQWU7RUFDZixtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7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bUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixtQ0FBbUM7RUFDbkMsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOjpwbGFjZWhvbGRlciB7XFxyXFxuICBjb2xvcjogcmdiKDEzOSwgMTMzLCAxMzMpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXHJcXG4gIHNyYzogdXJsKCcuL1JvYm90by1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHRmJyksIFxcclxcbiAgdXJsKCcuL1JvYm90by1Cb2xkLnR0ZicpIGZvcm1hdCgndHRmJyk7XFxyXFxuICBmb250LXdlaWdodDogNDAwLCA3MDA7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI25hdi1iYXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHBhZGRpbmc6IDAgMTVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2MiwgMTY3LCAyNTMpO1xcclxcbn1cXHJcXG5cXHJcXG4jbGVmdC1uYXYtYmFyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jcmlnaHQtbmF2LWJhciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbWFyZ2luLXRvcDogNTBweDtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogODV2aDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xcclxcbiAgYm94LXNoYWRvdzogMXB4IDJweCA1cHggMXB4IHJnYigxNzAsIDE2MiwgMTYyKTtcXHJcXG59XFxyXFxuXFxyXFxuI2xlZnQtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI5LCAyMjQsIDIyNCk7XFxyXFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdC1saXN0IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZy10b3A6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWxpc3QtaXRlbSB7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBtYXJnaW46IDJweCAwO1xcclxcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjdzO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtbGlzdC1pdGVtOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTgsIDE5NCwgMTk0KTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtaXRlbS10ZXh0IHtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWl0ZW0tYW1vdW50IHtcXHJcXG4gIHBhZGRpbmc6IDJweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYyLCAxNjcsIDI1Myk7XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjdzO1xcclxcbn1cXHJcXG5cXHJcXG4jcmlnaHQtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZmxleDogMztcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG9zLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8taXRlbSB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luOiA1cHg7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDE2OSwgMTY0LCAxNjQpO1xcclxcbiAgdHJhbnNpdGlvbjogMC43cztcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8taXRlbTpob3ZlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjIsIDE2NywgMjUzKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8taXRlbS1sZWZ0LWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMTlweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8taXRlbS1yaWdodC1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWl0ZW0tdGl0bGUge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWl0ZW0taGlnaC1wcmlvcml0eSB7XFxyXFxuICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTUsIDQ1LCA0NSk7XFxyXFxuICBwYWRkaW5nOiAycHggNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8taXRlbS1kdWUtZGF0ZSB7XFxyXFxuICBjb2xvcjogZ3JheTtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2VkaXQtaWNvbiwgI2RlbGV0ZS1pY29uIHtcXHJcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYyLCAxNjcsIDI1Myk7XFxyXFxuICBtYXJnaW46IDAgNXB4IDJweCA1cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgdHJhbnNpdGlvbjogMC43cztcXHJcXG59XFxyXFxuXFxyXFxuI2VkaXQtaWNvbjpob3ZlciwgI2RlbGV0ZS1pY29uOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiByZ2IoNjIsIDE2NywgMjUzKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdC1iYWNrZ3JvdW5kLCAjdG9kby1iYWNrZ3JvdW5kIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgb3BhY2l0eTogMC43O1xcclxcbiAgei1pbmRleDogMDtcXHJcXG59XFxyXFxuXFxyXFxuI2Zvcm0tY29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNjYW5jZWwtdG9kby1idXR0b24tY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiA0MDBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG59XFxyXFxuXFxyXFxuI2NhbmNlbC1wcm9qZWN0LWJ1dHRvbi1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDI1MHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXByb2plY3QtZm9ybSwgI25ldy10b2RvLWZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDFweCByZ2IoMTcwLCAxNjIsIDE2Mik7XFxyXFxufVxcclxcblxcclxcbiNuZXctcHJvamVjdC1idXR0b24ge1xcclxcbiAgd2lkdGg6IDE1MHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxyXFxuICBtYXJnaW46IDAgNXB4O1xcclxcbiAgY29sb3I6IHJnYig2MiwgMTY3LCAyNTMpO1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgcGFkZGluZzogNXB4IDIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIHRyYW5zaXRpb246IDAuN3M7XFxyXFxufVxcclxcblxcclxcbiNhZGQtdG9kby1idXR0b24ge1xcclxcbiAgd2lkdGg6IDE1MHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDYyLCAxNjcsIDI1Myk7XFxyXFxuICBtYXJnaW46IDIwcHggMzBweDtcXHJcXG4gIGNvbG9yOiByZ2IoNjIsIDE2NywgMjUzKTtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIHBhZGRpbmc6IDVweCAyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjdzO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXByb2plY3QtYnV0dG9uOmhvdmVyLCAjYWRkLXRvZG8tYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2MiwgMTY3LCAyNTMpO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5maWVsZHNldCB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICB3aWR0aDogNDAwcHg7XFxyXFxuICBwYWRkaW5nOiA1cHggMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQsICNwcm9qZWN0LXRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIG1hcmdpbjogNXB4IDIwcHggMCAyMHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIyMywgMjE4LCAyMTgpO1xcclxcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxuICB3aWR0aDogMjUwcHg7XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0LXRpdGxlIHtcXHJcXG4gIG1hcmdpbjogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxudGV4dGFyZWEge1xcclxcbiAgcmVzaXplOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIG1hcmdpbjogNXB4IDIwcHggMCAyMHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIyMywgMjE4LCAyMTgpO1xcclxcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxuICB3aWR0aDogMjUwcHg7XFxyXFxuICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbiNkdWUtZGF0ZS1maWVsZHNldCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuI2R1ZS1kYXRlLWxhYmVsLCAjcHJpb3JpdHktdGl0bGUge1xcclxcbiAgbWFyZ2luOiAwIDIwcHg7XFxyXFxufVxcclxcblxcclxcbiNzZWxlY3QtcHJvamVjdC1sYWJlbCB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbiN0b2RvLWR1ZS1kYXRlLWlucHV0IHtcXHJcXG4gIHdpZHRoOiAxNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3ByaW9yaXR5LWZpZWxkc2V0IHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1vcHRpb24ge1xcclxcbiAgbWFyZ2luOiAyMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxyXFxufVxcclxcblxcclxcbiNsb3ctcHJpb3JpdHktbGFiZWwge1xcclxcbiAgY29sb3I6IHJnYigxMSwgMTQ3LCAxMSk7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTEsIDE0NywgMTEpO1xcclxcbiAgdHJhbnNpdGlvbjogMC43cztcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgcGFkZGluZzogM3B4IDhweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBtYXJnaW46IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuI2xvdy1wcmlvcml0eS1sYWJlbDpob3ZlciB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTEsIDE0NywgMTEpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jaGlnaC1wcmlvcml0eS1sYWJlbCB7XFxyXFxuICBjb2xvcjogcmdiKDIxNSwgNDUsIDQ1KTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMTUsIDQ1LCA0NSk7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjdzO1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBwYWRkaW5nOiAzcHggOHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIG1hcmdpbjogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jaGlnaC1wcmlvcml0eS1sYWJlbDpob3ZlciB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE1LCA0NSwgNDUpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktb3B0aW9uLCAjZGVmYXVsdC1wcm9qZWN0LW5hbWUsIC5wcm9qZWN0LW5hbWUge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdC1maWVsZHNldCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4jZGVmYXVsdC1wcm9qZWN0LWxhYmVsLCAucHJvamVjdC1sYWJlbCB7XFxyXFxuICBjb2xvcjogcmdiKDYyLCAxNjcsIDI1Myk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoNjIsIDE2NywgMjUzKTtcXHJcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBtYXJnaW46IDJweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjdzO1xcclxcbn1cXHJcXG5cXHJcXG4jZGVmYXVsdC1wcm9qZWN0LWxhYmVsOmhvdmVyLCAucHJvamVjdC1sYWJlbDpob3ZlciB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjIsIDE2NywgMjUzKTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3N1Ym1pdC1wcm9qZWN0LWJ1dHRvbiB7XFxyXFxuICB3aWR0aDogMTUwcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoNjIsIDE2NywgMjUzKTtcXHJcXG4gIGNvbG9yOiByZ2IoNjIsIDE2NywgMjUzKTtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIG1hcmdpbjogMTBweCAwO1xcclxcbiAgcGFkZGluZzogNXB4IDIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIHRyYW5zaXRpb246IDAuN3M7XFxyXFxufVxcclxcblxcclxcbiNzdWJtaXQtcHJvamVjdC1idXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYyLCAxNjcsIDI1Myk7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbiNjYW5jZWwtcHJvamVjdC1idXR0b24sICNjYW5jZWwtdG9kby1idXR0b24sICNleGl0LXRvZG8tYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBjb2xvcjogcmdiKDYyLCAxNjcsIDI1Myk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjdzO1xcclxcbn1cXHJcXG5cXHJcXG4jY2FuY2VsLXByb2plY3QtYnV0dG9uOmhvdmVyLCAjY2FuY2VsLXRvZG8tYnV0dG9uOmhvdmVyLCAjZXhpdC10b2RvLWJ1dHRvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjIsIDE2NywgMjUzKTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG8tZGV0YWlscy1jb250YWluZXIge1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcclxcbiAgd2lkdGg6IDM1MHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xcclxcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMXB4IHJnYigxNzAsIDE2MiwgMTYyKTtcXHJcXG59XFxyXFxuXFxyXFxuI3NlbGVjdGVkLXRvZG8taXRlbS10aXRsZSB7XFxyXFxuICB3aWR0aDogOTMlO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2MiwgMTY3LCAyNTMpO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbiNwcmlvcml0eS1jb250YWluZXIge1xcclxcbiAgbWFyZ2luOiA1cHggMTBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jaGlnaC1wcmlvcml0eS1jb250YWluZXIge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE1LCA0NSwgNDUpO1xcclxcbiAgcGFkZGluZzogMnB4IDVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBmb250LXNpemU6IDEwcHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNsb3ctcHJpb3JpdHktY29udGFpbmVyIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExLCAxNDcsIDExKTtcXHJcXG4gIHBhZGRpbmc6IDJweCA1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAxMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jc2VsZWN0ZWQtdG9kby1pdGVtLWR1ZS1kYXRlIHtcXHJcXG4gIHBhZGRpbmc6IDVweCAwIDAgMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIGNvbG9yOiBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4jc2VsZWN0ZWQtdG9kby1pdGVtLWRlc2NyaXB0aW9uIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbiNzZWxlY3RlZC10aXRsZS1sYWJlbCwgI3NlbGVjdGVkLWR1ZS1kYXRlLWxhYmVsLCAjc2VsZWN0ZWQtZGVzY3JpcHRpb24tbGFiZWwsICNzZWxlY3RlZC1wcmlvcml0eS1sYWJlbCB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jc2VsZWN0ZWQtZGVzY3JpcHRpb24taW5wdXQge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3N1Ym1pdC10b2RvLWVkaXQtYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiAxNTBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYig2MiwgMTY3LCAyNTMpO1xcclxcbiAgbWFyZ2luOiAxMHB4IGF1dG87XFxyXFxuICBjb2xvcjogcmdiKDYyLCAxNjcsIDI1Myk7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBwYWRkaW5nOiA1cHggMjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgdHJhbnNpdGlvbjogMC43cztcXHJcXG59XFxyXFxuXFxyXFxuI3N1Ym1pdC10b2RvLWVkaXQtYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2MiwgMTY3LCAyNTMpO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgeyBhZGRQcm9qZWN0Rm9ybSB9IGZyb20gJy4vbmV3LXByb2plY3QtZm9ybSc7XHJcbmltcG9ydCB7IGFkZFRvZG9Gb3JtIH0gZnJvbSBcIi4vbmV3LXRvZG8tZm9ybVwiO1xyXG5pbXBvcnQgeyB1cGRhdGVQcm9qZWN0TGlzdCB9IGZyb20gJy4vc2hvdy10b2RvLWxpc3QnO1xyXG5cclxuY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xyXG5saW5rLnNldEF0dHJpYnV0ZShcInJlbFwiLCBcInN0eWxlc2hlZXRcIik7XHJcbmxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWF0ZXJpYWwrU3ltYm9scytPdXRsaW5lZDpvcHN6LHdnaHQsRklMTCxHUkFEQDI0LDMwMCwwLDBcIik7XHJcbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XHJcblxyXG5jb25zdCBwcm9qZWN0TGlzdEFycmF5ID0gW107XHJcbnByb2plY3RMaXN0QXJyYXkudGV4dENvbnRlbnQgPSBcIlByb2plY3QgTGlzdFwiO1xyXG5cclxuY29uc3QgZGVmYXVsdFByb2plY3QgPSBbXTtcclxuZGVmYXVsdFByb2plY3QudGV4dENvbnRlbnQgPSBcIkRlZmF1bHQgUHJvamVjdFwiO1xyXG5wcm9qZWN0TGlzdEFycmF5LnB1c2goZGVmYXVsdFByb2plY3QpO1xyXG5cclxuY29uc3QgbGlicmFyeUFwcCA9IFtdO1xyXG5saWJyYXJ5QXBwLnRleHRDb250ZW50ID0gXCJMaWJyYXJ5IEFwcFwiO1xyXG5wcm9qZWN0TGlzdEFycmF5LnB1c2gobGlicmFyeUFwcCk7XHJcblxyXG5jb25zdCByZXN0YXVyYW50UGFnZSA9IFtdO1xyXG5yZXN0YXVyYW50UGFnZS50ZXh0Q29udGVudCA9IFwiUmVzdGF1cmFudCBQYWdlXCI7XHJcbnByb2plY3RMaXN0QXJyYXkucHVzaChyZXN0YXVyYW50UGFnZSk7XHJcblxyXG5jb25zdCB0b2RvSXRlbU9uZSA9IHtcclxuICB0aXRsZTogXCJOZXcgdG9kb1wiLCBcclxuICBkZXNjcmlwdGlvbjogXCJUaGluZ3MgdG8gcmVhZFwiLCBcclxuICBkdWVEYXRlOiBcIjIwMjMtMDktMTlcIiwgXHJcbiAgbG93UHJpb3JpdHk6IGZhbHNlLCBcclxuICBoaWdoUHJpb3JpdHk6IHRydWVcclxufTtcclxuXHJcbmNvbnN0IHRvZG9JdGVtVHdvID0ge1xyXG4gIHRpdGxlOiBcIkFkZCBlZGl0IGJ1dHRvblwiLCBcclxuICBkZXNjcmlwdGlvbjogXCJOZWVkIHRvIGFkZCBidXR0b24gaW4gb3JkZXIgdG8gZWRpdCBkZXRhaWxzIVwiLCBcclxuICBkdWVEYXRlOiBcIjIwMjMtMDktMzBcIixcclxuICBsb3dQcmlvcml0eTogdHJ1ZSwgXHJcbiAgaGlnaFByaW9yaXR5OiBmYWxzZVxyXG59O1xyXG5cclxuY29uc3QgdG9kb0l0ZW1UaHJlZSA9IHtcclxuICB0aXRsZTogXCJDbGVhbiB0YWJsZXNcIiwgXHJcbiAgZGVzY3JpcHRpb246IFwiVGhlIHJlc3RhdXJhbnQgaXMgYnVzeSBhdCBuaWdodC5cIiwgXHJcbiAgZHVlRGF0ZTogXCIyMDIzLTEwLTA3XCIsIFxyXG4gIGxvd1ByaW9yaXR5OiB0cnVlLCBcclxuICBoaWdoUHJpb3JpdHk6IGZhbHNlXHJcbn07XHJcblxyXG5jb25zdCB0b2RvSXRlbUZvdXIgPSB7XHJcbiAgdGl0bGU6IFwiRmluaXNoIFByb2plY3RcIiwgXHJcbiAgZGVzY3JpcHRpb246IFwiVGhlc2UgYXJlIGRldGFpbHMgb2YgdGhlIHRvZG8geW91IHNlbGVjdGVkLiBUaGlzIGRlc2NyaXB0aW9uIGlzIGxvbmdlciB0aGFuIG90aGVycywgaW4gb3JkZXIgdG8gZXhwYW5kIHRoZSBjb250YWluZXIuXCIsIFxyXG4gIGR1ZURhdGU6IFwiMjAyMy0wOS0yN1wiLFxyXG4gIGxvd1ByaW9yaXR5OiB0cnVlLCBcclxuICBoaWdoUHJpb3JpdHk6IGZhbHNlXHJcbn07XHJcblxyXG5kZWZhdWx0UHJvamVjdC5wdXNoKHRvZG9JdGVtT25lKTtcclxuZGVmYXVsdFByb2plY3QucHVzaCh0b2RvSXRlbVR3byk7XHJcbnJlc3RhdXJhbnRQYWdlLnB1c2godG9kb0l0ZW1UaHJlZSk7XHJcbmRlZmF1bHRQcm9qZWN0LnB1c2godG9kb0l0ZW1Gb3VyKTtcclxuXHJcbmNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbm5hdkJhci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5hdi1iYXJcIik7XHJcbm5hdkJhci50ZXh0Q29udGVudCA9IFwiVG9kbyBBcHBcIjtcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChuYXZCYXIpO1xyXG5cclxuY29uc3QgbGVmdE5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmxlZnROYXZCYXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsZWZ0LW5hdi1iYXJcIik7XHJcbm5hdkJhci5hcHBlbmRDaGlsZChsZWZ0TmF2QmFyKTtcclxuXHJcbmNvbnN0IHJpZ2h0TmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxucmlnaHROYXZCYXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJyaWdodC1uYXYtYmFyXCIpO1xyXG5uYXZCYXIuYXBwZW5kQ2hpbGQocmlnaHROYXZCYXIpO1xyXG5cclxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGFpbmVyXCIpO1xyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcblxyXG5jb25zdCBsZWZ0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxubGVmdENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxlZnQtY29udGFpbmVyXCIpO1xyXG5jb250YWluZXIuYXBwZW5kQ2hpbGQobGVmdENvbnRhaW5lcik7XHJcblxyXG5jb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbnByb2plY3RMaXN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdC1saXN0XCIpO1xyXG5sZWZ0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RMaXN0KTtcclxuXHJcbnVwZGF0ZVByb2plY3RMaXN0KCk7XHJcblxyXG5jb25zdCByaWdodENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbnJpZ2h0Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicmlnaHQtY29udGFpbmVyXCIpO1xyXG5jb250YWluZXIuYXBwZW5kQ2hpbGQocmlnaHRDb250YWluZXIpO1xyXG5cclxuY29uc3QgYWRkVG9kb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbmFkZFRvZG9CdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGQtdG9kby1idXR0b25cIik7XHJcbmFkZFRvZG9CdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZCBUb2RvXCI7XHJcbnJpZ2h0Q29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRvZG9CdXR0b24pO1xyXG5cclxuYWRkVG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkVG9kb0Zvcm0pO1xyXG5cclxuY29uc3QgdG9kb3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG50b2Rvc0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG9zLWNvbnRhaW5lclwiKTtcclxucmlnaHRDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb3NDb250YWluZXIpO1xyXG5cclxuY29uc3QgbmV3UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbm5ld1Byb2plY3RCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuZXctcHJvamVjdC1idXR0b25cIik7XHJcbm5ld1Byb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZCBQcm9qZWN0XCI7XHJcbnJpZ2h0TmF2QmFyLmFwcGVuZENoaWxkKG5ld1Byb2plY3RCdXR0b24pO1xyXG5cclxubmV3UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkUHJvamVjdEZvcm0pO1xyXG5cclxuZXhwb3J0IHsgZGVmYXVsdFByb2plY3QsIHByb2plY3RMaXN0QXJyYXkgfTsiLCJpbXBvcnQgeyBwcm9qZWN0TGlzdEFycmF5IH0gZnJvbSBcIi5cIjtcclxuaW1wb3J0IHsgdXBkYXRlUHJvamVjdExpc3QgfSBmcm9tIFwiLi9zaG93LXRvZG8tbGlzdFwiO1xyXG5cclxuY29uc3QgcHJvamVjdCA9IFtdO1xyXG5cclxuY29uc3QgYWRkUHJvamVjdEZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgcHJvamVjdEJhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHByb2plY3RCYWNrZ3JvdW5kLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdC1iYWNrZ3JvdW5kXCIpO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocHJvamVjdEJhY2tncm91bmQpO1xyXG5cclxuICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBmb3JtQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZm9ybS1jb250YWluZXJcIik7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcclxuXHJcbiAgY29uc3QgY2FuY2VsQnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjYW5jZWxCdXR0b25Db250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjYW5jZWwtcHJvamVjdC1idXR0b24tY29udGFpbmVyXCIpO1xyXG4gIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uQ29udGFpbmVyKTtcclxuXHJcbiAgY29uc3QgY2FuY2VsUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgY2FuY2VsUHJvamVjdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNhbmNlbC1wcm9qZWN0LWJ1dHRvblwiKTtcclxuICBjYW5jZWxQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJYXCI7XHJcbiAgY2FuY2VsQnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhbmNlbFByb2plY3RCdXR0b24pO1xyXG5cclxuICBjYW5jZWxQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW1vdmVQcm9qZWN0Rm9ybSk7XHJcblxyXG4gIGNvbnN0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XHJcbiAgbmV3UHJvamVjdEZvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuZXctcHJvamVjdC1mb3JtXCIpO1xyXG4gIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEZvcm0pO1xyXG5cclxuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgcHJvamVjdFRpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdC10aXRsZVwiKTtcclxuICBwcm9qZWN0VGl0bGUuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJFbnRlciBQcm9qZWN0IFRpdGxlXCIpO1xyXG4gIG5ld1Byb2plY3RGb3JtLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XHJcblxyXG4gIGNvbnN0IHN1Ym1pdFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIHN1Ym1pdFByb2plY3RCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzdWJtaXQtcHJvamVjdC1idXR0b25cIik7XHJcbiAgc3VibWl0UHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU3VibWl0IFByb2plY3RcIjtcclxuICBuZXdQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChzdWJtaXRQcm9qZWN0QnV0dG9uKTtcclxuXHJcbiAgc3VibWl0UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3VibWl0UHJvamVjdEZvcm0pO1xyXG59O1xyXG5cclxuY29uc3Qgc3VibWl0UHJvamVjdEZvcm0gPSAoZXZlbnQpID0+IHtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIFxyXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LXRpdGxlXCIpLnZhbHVlO1xyXG5cclxuICBjb25zdCBuZXdQcm9qZWN0QXJyYXkgPSBwcm9qZWN0LnNsaWNlKCk7XHJcbiAgbmV3UHJvamVjdEFycmF5LnRleHRDb250ZW50ID0gdGl0bGU7XHJcbiAgY29uc29sZS5sb2cobmV3UHJvamVjdEFycmF5KTtcclxuICBwcm9qZWN0TGlzdEFycmF5LnB1c2gobmV3UHJvamVjdEFycmF5KTtcclxuXHJcbiAgdXBkYXRlUHJvamVjdExpc3QoKTtcclxuICByZW1vdmVQcm9qZWN0Rm9ybSgpO1xyXG59O1xyXG5cclxuY29uc3QgcmVtb3ZlUHJvamVjdEZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgcHJvamVjdEJhY2tncm91bmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtYmFja2dyb3VuZFwiKTtcclxuICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHByb2plY3RCYWNrZ3JvdW5kKTtcclxuXHJcbiAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybS1jb250YWluZXJcIik7XHJcbiAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChmb3JtQ29udGFpbmVyKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IGFkZFByb2plY3RGb3JtLCBzdWJtaXRQcm9qZWN0Rm9ybSB9OyIsImltcG9ydCB7IGRlZmF1bHRQcm9qZWN0IH0gZnJvbSBcIi5cIjtcclxuaW1wb3J0IHsgcHJvamVjdExpc3RBcnJheSB9IGZyb20gXCIuXCI7XHJcbmltcG9ydCB7IHVwZGF0ZVByb2plY3RMaXN0IH0gZnJvbSBcIi4vc2hvdy10b2RvLWxpc3RcIjtcclxuXHJcbmNvbnN0IFRvZG8gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBsb3dQcmlvcml0eSwgaGlnaFByaW9yaXR5KSA9PiB7XHJcbiAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBsb3dQcmlvcml0eSwgaGlnaFByaW9yaXR5IH07XHJcbn07XHJcblxyXG5jb25zdCBhZGRUb2RvRm9ybSA9ICgpID0+IHtcclxuICBjb25zdCB0b2RvQmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgdG9kb0JhY2tncm91bmQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvLWJhY2tncm91bmRcIik7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0b2RvQmFja2dyb3VuZCk7XHJcblxyXG4gIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGZvcm1Db250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmb3JtLWNvbnRhaW5lclwiKTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xyXG5cclxuICBjb25zdCBjYW5jZWxCdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNhbmNlbEJ1dHRvbkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNhbmNlbC10b2RvLWJ1dHRvbi1jb250YWluZXJcIik7XHJcbiAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b25Db250YWluZXIpO1xyXG5cclxuICBjb25zdCBjYW5jZWxUb2RvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBjYW5jZWxUb2RvQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2FuY2VsLXRvZG8tYnV0dG9uXCIpO1xyXG4gIGNhbmNlbFRvZG9CdXR0b24udGV4dENvbnRlbnQgPSBcIlhcIjtcclxuICBjYW5jZWxCdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoY2FuY2VsVG9kb0J1dHRvbik7XHJcblxyXG4gIGNhbmNlbFRvZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZVRvZG9Gb3JtKTtcclxuXHJcbiAgY29uc3QgbmV3VG9kb0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcclxuICBuZXdUb2RvRm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5ldy10b2RvLWZvcm1cIik7XHJcbiAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdUb2RvRm9ybSk7XHJcblxyXG4gIGNvbnN0IHRpdGxlRmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIik7XHJcbiAgdGl0bGVGaWVsZHNldC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRpdGxlLWZpZWxkc2V0XCIpO1xyXG4gIG5ld1RvZG9Gb3JtLmFwcGVuZENoaWxkKHRpdGxlRmllbGRzZXQpO1xyXG5cclxuICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgdG9kb1RpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kby10aXRsZS1pbnB1dFwiKTtcclxuICB0b2RvVGl0bGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XHJcbiAgdG9kb1RpdGxlLnNldEF0dHJpYnV0ZShcIm1heGxlbmd0aFwiLCBcIjUwXCIpO1xyXG4gIHRvZG9UaXRsZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkVudGVyZSBUb2RvIFRpdGxlXCIpO1xyXG4gIHRvZG9UaXRsZS5yZXF1aXJlZCA9IHRydWU7XHJcbiAgdGl0bGVGaWVsZHNldC5hcHBlbmRDaGlsZCh0b2RvVGl0bGUpO1xyXG5cclxuICBjb25zdCBkZXNjcmlwdGlvbkZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpO1xyXG4gIGRlc2NyaXB0aW9uRmllbGRzZXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkZXNjcmlwdGlvbi1maWVsZHNldFwiKTtcclxuICBuZXdUb2RvRm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkZpZWxkc2V0KTtcclxuXHJcbiAgY29uc3QgdG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xyXG4gIHRvZG9EZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRlc2NyaXB0aW9uLXRleHRhcmVhXCIpO1xyXG4gIHRvZG9EZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkRlc2NyaXB0aW9uOlwiKTtcclxuICBkZXNjcmlwdGlvbkZpZWxkc2V0LmFwcGVuZENoaWxkKHRvZG9EZXNjcmlwdGlvbik7XHJcblxyXG4gIGNvbnN0IGR1ZURhdGVGaWVsZHNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKTtcclxuICBkdWVEYXRlRmllbGRzZXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkdWUtZGF0ZS1maWVsZHNldFwiKTtcclxuICBuZXdUb2RvRm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlRmllbGRzZXQpO1xyXG5cclxuICBjb25zdCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgZHVlRGF0ZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRvZG8tZHVlLWRhdGUtaW5wdXRcIik7XHJcbiAgZHVlRGF0ZUxhYmVsLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZHVlLWRhdGUtbGFiZWxcIik7XHJcbiAgZHVlRGF0ZUxhYmVsLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZTpcIjtcclxuICBkdWVEYXRlRmllbGRzZXQuYXBwZW5kQ2hpbGQoZHVlRGF0ZUxhYmVsKTtcclxuXHJcbiAgY29uc3QgdG9kb0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgdG9kb0R1ZURhdGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvLWR1ZS1kYXRlLWlucHV0XCIpO1xyXG4gIHRvZG9EdWVEYXRlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xyXG4gIHRvZG9EdWVEYXRlLnJlcXVpcmVkID0gdHJ1ZTtcclxuICBkdWVEYXRlRmllbGRzZXQuYXBwZW5kQ2hpbGQodG9kb0R1ZURhdGUpO1xyXG5cclxuICBjb25zdCBwcmlvcml0eUZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpO1xyXG4gIHByaW9yaXR5RmllbGRzZXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcmlvcml0eS1maWVsZHNldFwiKTtcclxuICBuZXdUb2RvRm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eUZpZWxkc2V0KTtcclxuXHJcbiAgY29uc3QgcHJpb3JpdHlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcHJpb3JpdHlUaXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByaW9yaXR5LXRpdGxlXCIpO1xyXG4gIHByaW9yaXR5VGl0bGUudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OlwiO1xyXG4gIHByaW9yaXR5RmllbGRzZXQuYXBwZW5kQ2hpbGQocHJpb3JpdHlUaXRsZSk7XHJcblxyXG4gIGNvbnN0IGxvd1ByaW9yaXR5T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIGxvd1ByaW9yaXR5T3B0aW9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcclxuICBsb3dQcmlvcml0eU9wdGlvbi5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktb3B0aW9uXCIpO1xyXG4gIGxvd1ByaW9yaXR5T3B0aW9uLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcmlvcml0eS1vcHRpb25cIik7XHJcbiAgbG93UHJpb3JpdHlPcHRpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsb3ctcHJpb3JpdHlcIik7XHJcbiAgbG93UHJpb3JpdHlPcHRpb24uc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLCBcIlwiKTtcclxuICBwcmlvcml0eVRpdGxlLmFwcGVuZENoaWxkKGxvd1ByaW9yaXR5T3B0aW9uKTtcclxuXHJcbiAgY29uc3QgbG93UHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICBsb3dQcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImxvdy1wcmlvcml0eVwiKTtcclxuICBsb3dQcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibG93LXByaW9yaXR5LWxhYmVsXCIpO1xyXG4gIGxvd1ByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSBcIkxPV1wiO1xyXG4gIHByaW9yaXR5VGl0bGUuYXBwZW5kQ2hpbGQobG93UHJpb3JpdHlMYWJlbCk7XHJcblxyXG4gIGNvbnN0IGhpZ2hQcmlvcml0eU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBoaWdoUHJpb3JpdHlPcHRpb24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhZGlvXCIpO1xyXG4gIGhpZ2hQcmlvcml0eU9wdGlvbi5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktb3B0aW9uXCIpO1xyXG4gIGhpZ2hQcmlvcml0eU9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJpb3JpdHktb3B0aW9uXCIpO1xyXG4gIGhpZ2hQcmlvcml0eU9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhpZ2gtcHJpb3JpdHlcIik7XHJcbiAgcHJpb3JpdHlUaXRsZS5hcHBlbmRDaGlsZChoaWdoUHJpb3JpdHlPcHRpb24pO1xyXG5cclxuICBjb25zdCBoaWdoUHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICBoaWdoUHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJoaWdoLXByaW9yaXR5XCIpO1xyXG4gIGhpZ2hQcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaGlnaC1wcmlvcml0eS1sYWJlbFwiKTtcclxuICBoaWdoUHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9IFwiSElHSFwiO1xyXG4gIHByaW9yaXR5VGl0bGUuYXBwZW5kQ2hpbGQoaGlnaFByaW9yaXR5TGFiZWwpO1xyXG5cclxuICBjb25zdCBwcm9qZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIik7XHJcbiAgcHJvamVjdExhYmVsLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2VsZWN0LXByb2plY3QtbGFiZWxcIik7XHJcbiAgcHJvamVjdExhYmVsLnRleHRDb250ZW50ID0gXCJDaG9vc2UgUHJvamVjdCB0byBhZGQgVG9kbzpcIjtcclxuICBuZXdUb2RvRm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0TGFiZWwpO1xyXG5cclxuICBjb25zdCBwcm9qZWN0RmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIik7XHJcbiAgcHJvamVjdEZpZWxkc2V0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdC1maWVsZHNldFwiKTtcclxuICBuZXdUb2RvRm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0RmllbGRzZXQpO1xyXG5cclxuICBjb25zdCBkZWZhdWx0UHJvamVjdFJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIGRlZmF1bHRQcm9qZWN0UmFkaW8uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhZGlvXCIpO1xyXG4gIGRlZmF1bHRQcm9qZWN0UmFkaW8uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkZWZhdWx0LXByb2plY3QtbmFtZVwiKTtcclxuICBkZWZhdWx0UHJvamVjdFJhZGlvLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LW5hbWVcIik7XHJcbiAgZGVmYXVsdFByb2plY3RSYWRpby5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJvamVjdC1uYW1lXCIpO1xyXG4gIGRlZmF1bHRQcm9qZWN0UmFkaW8uc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLCBcIlwiKTtcclxuICBwcm9qZWN0RmllbGRzZXQuYXBwZW5kQ2hpbGQoZGVmYXVsdFByb2plY3RSYWRpbyk7XHJcblxyXG4gIGNvbnN0IGRlZmF1bHRQcm9qZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgZGVmYXVsdFByb2plY3RMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkZWZhdWx0LXByb2plY3QtbmFtZVwiKTtcclxuICBkZWZhdWx0UHJvamVjdExhYmVsLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGVmYXVsdC1wcm9qZWN0LWxhYmVsXCIpO1xyXG4gIGRlZmF1bHRQcm9qZWN0TGFiZWwudGV4dENvbnRlbnQgPSBkZWZhdWx0UHJvamVjdC50ZXh0Q29udGVudDtcclxuICBwcm9qZWN0RmllbGRzZXQuYXBwZW5kQ2hpbGQoZGVmYXVsdFByb2plY3RMYWJlbCk7XHJcblxyXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcHJvamVjdExpc3RBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgbmV3UHJvamVjdFJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgbmV3UHJvamVjdFJhZGlvLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcclxuICAgIG5ld1Byb2plY3RSYWRpby5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1uYW1lXCIpO1xyXG4gICAgbmV3UHJvamVjdFJhZGlvLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcm9qZWN0LW5hbWVcIik7XHJcbiAgICBuZXdQcm9qZWN0UmFkaW8uc2V0QXR0cmlidXRlKFwiaWRcIiwgYHByb2plY3QtaW5kZXgtJHtpfWApO1xyXG4gICAgcHJvamVjdEZpZWxkc2V0LmFwcGVuZENoaWxkKG5ld1Byb2plY3RSYWRpbyk7XHJcblxyXG4gICAgY29uc3QgbmV3UHJvamVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgbmV3UHJvamVjdExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBgcHJvamVjdC1pbmRleC0ke2l9YCk7XHJcbiAgICBuZXdQcm9qZWN0TGFiZWwuY2xhc3NMaXN0LmFkZChcInByb2plY3QtbGFiZWxcIik7XHJcbiAgICBuZXdQcm9qZWN0TGFiZWwudGV4dENvbnRlbnQgPSBwcm9qZWN0TGlzdEFycmF5W2ldLnRleHRDb250ZW50O1xyXG4gICAgcHJvamVjdEZpZWxkc2V0LmFwcGVuZENoaWxkKG5ld1Byb2plY3RMYWJlbCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc3VibWl0VG9kb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgc3VibWl0VG9kb0J1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN1Ym1pdC1wcm9qZWN0LWJ1dHRvblwiKTtcclxuICBzdWJtaXRUb2RvQnV0dG9uLnRleHRDb250ZW50ID0gXCJTdWJtaXQgVG9kb1wiO1xyXG4gIG5ld1RvZG9Gb3JtLmFwcGVuZENoaWxkKHN1Ym1pdFRvZG9CdXR0b24pO1xyXG5cclxuICBzdWJtaXRUb2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdWJtaXRUb2RvRm9ybSk7XHJcbn07XHJcblxyXG5jb25zdCBzdWJtaXRUb2RvRm9ybSA9IChldmVudCkgPT4ge1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLXRpdGxlLWlucHV0XCIpLnZhbHVlO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvbi10ZXh0YXJlYVwiKS52YWx1ZTtcclxuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLWR1ZS1kYXRlLWlucHV0XCIpLnZhbHVlO1xyXG4gIGNvbnN0IGxvd1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb3ctcHJpb3JpdHlcIikuY2hlY2tlZDtcclxuICBjb25zdCBoaWdoUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hpZ2gtcHJpb3JpdHlcIikuY2hlY2tlZDtcclxuXHJcbiAgY29uc3QgbmV3VG9kbyA9IFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBsb3dQcmlvcml0eSwgaGlnaFByaW9yaXR5KTtcclxuICBjb25zb2xlLmxvZyhuZXdUb2RvKTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdEFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBuZXdQcm9qZWN0UmFkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtbmFtZVwiKTtcclxuICAgIGlmIChuZXdQcm9qZWN0UmFkaW9baV0uY2hlY2tlZCA9PSB0cnVlKSB7XHJcbiAgICAgIHByb2plY3RMaXN0QXJyYXlbaV0ucHVzaChuZXdUb2RvKTtcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdG9kb3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9zLWNvbnRhaW5lclwiKTtcclxuICB0b2Rvc0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICB1cGRhdGVQcm9qZWN0TGlzdCgpO1xyXG4gIHJlbW92ZVRvZG9Gb3JtKCk7XHJcbn07XHJcblxyXG5jb25zdCByZW1vdmVUb2RvRm9ybSA9ICgpID0+IHtcclxuICBjb25zdCB0b2RvQmFja2dyb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1iYWNrZ3JvdW5kXCIpO1xyXG4gIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodG9kb0JhY2tncm91bmQpO1xyXG5cclxuICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtLWNvbnRhaW5lclwiKTtcclxuICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGZvcm1Db250YWluZXIpO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgYWRkVG9kb0Zvcm0sIHN1Ym1pdFRvZG9Gb3JtIH07IiwiaW1wb3J0IHsgcHJvamVjdExpc3RBcnJheSB9IGZyb20gXCIuXCI7XHJcbmltcG9ydCB7IGNvbXBhcmVBc2MgfSBmcm9tICdkYXRlLWZucyc7XHJcblxyXG5jb25zdCB1cGRhdGVQcm9qZWN0TGlzdCA9ICgpID0+IHtcclxuICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1saXN0XCIpO1xyXG4gIHByb2plY3RMaXN0LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdEFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0TGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcHJvamVjdExpc3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWxpc3QtaXRlbVwiKTtcclxuICAgIHByb2plY3RMaXN0SXRlbS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaWRcIiwgaSk7XHJcbiAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdEl0ZW0pO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3RJdGVtVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBwcm9qZWN0SXRlbVRleHQuY2xhc3NMaXN0LmFkZChcInByb2plY3QtaXRlbS10ZXh0XCIpO1xyXG4gICAgcHJvamVjdEl0ZW1UZXh0LnRleHRDb250ZW50ID0gcHJvamVjdExpc3RBcnJheVtpXS50ZXh0Q29udGVudC50b1VwcGVyQ2FzZSgpO1xyXG4gICAgcHJvamVjdExpc3RJdGVtLmFwcGVuZENoaWxkKHByb2plY3RJdGVtVGV4dCk7XHJcblxyXG4gICAgY29uc3QgcHJvamVjdEl0ZW1BbW91bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcHJvamVjdEl0ZW1BbW91bnQuY2xhc3NMaXN0LmFkZChcInByb2plY3QtaXRlbS1hbW91bnRcIik7XHJcbiAgICBwcm9qZWN0SXRlbUFtb3VudC50ZXh0Q29udGVudCA9IHByb2plY3RMaXN0QXJyYXlbaV0ubGVuZ3RoO1xyXG4gICAgcHJvamVjdExpc3RJdGVtLmFwcGVuZENoaWxkKHByb2plY3RJdGVtQW1vdW50KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBwcm9qZWN0TGlzdEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtbGlzdC1pdGVtXCIpO1xyXG5cclxuICBwcm9qZWN0TGlzdEl0ZW0uZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gc2hvd1RvZG9zRnJvbVByb2plY3QgKCkge1xyXG4gICAgICBjb25zdCBzZWxlY3RlZFByb2plY3QgPSBwcm9qZWN0TGlzdEFycmF5W3Byb2plY3QuZGF0YXNldC5wcm9qZWN0SWRdO1xyXG5cclxuICAgICAgY29uc3Qgc2hvd1RvZG9zTGlzdCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB0b2Rvc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kb3MtY29udGFpbmVyXCIpO1xyXG4gICAgICAgIHRvZG9zQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0ZWRQcm9qZWN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAvLyBzZWxlY3RlZFByb2plY3RbaV0uZHVlRGF0ZS5zb3J0KGNvbXBhcmVBc2MpO1xyXG4gICAgICAgICAgLy8gUFBQcHBwXHJcbiAgICAgICAgICBjb25zdCB0b2RvSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICB0b2RvSXRlbS5jbGFzc0xpc3QuYWRkKFwidG9kby1pdGVtXCIpO1xyXG4gICAgICAgICAgdG9kb0l0ZW0uc2V0QXR0cmlidXRlKFwiZGF0YS10b2RvLWlkXCIsIGkpO1xyXG4gICAgICAgICAgdG9kb3NDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0l0ZW0pO1xyXG5cclxuICAgICAgICAgIGNvbnN0IHRvZG9JdGVtTGVmdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICB0b2RvSXRlbUxlZnRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRvZG8taXRlbS1sZWZ0LWNvbnRhaW5lclwiKTtcclxuICAgICAgICAgIHRvZG9JdGVtLmFwcGVuZENoaWxkKHRvZG9JdGVtTGVmdENvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgdG9kb0l0ZW1MZWZ0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiBzaG93VG9kb0l0ZW0gKCkge1xyXG4gICAgICAgICAgICBjb25zdCB0b2RvQmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIHRvZG9CYWNrZ3JvdW5kLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kby1iYWNrZ3JvdW5kXCIpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRvZG9CYWNrZ3JvdW5kKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgZm9ybUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZvcm0tY29udGFpbmVyXCIpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IGNhbmNlbEJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvbkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNhbmNlbC1wcm9qZWN0LWJ1dHRvbi1jb250YWluZXJcIik7XHJcbiAgICAgICAgICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uQ29udGFpbmVyKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBleGl0VG9kb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgIGV4aXRUb2RvQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZXhpdC10b2RvLWJ1dHRvblwiKTtcclxuICAgICAgICAgICAgZXhpdFRvZG9CdXR0b24udGV4dENvbnRlbnQgPSBcIlhcIjtcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGV4aXRUb2RvQnV0dG9uKTtcclxuXHJcbiAgICAgICAgICAgIGV4aXRUb2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBleGl0VG9kbyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0b2RvRGV0YWlsc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIHRvZG9EZXRhaWxzQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kby1kZXRhaWxzLWNvbnRhaW5lclwiKTtcclxuICAgICAgICAgICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRGV0YWlsc0NvbnRhaW5lcik7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRUb2RvSXRlbVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgc2VsZWN0ZWRUb2RvSXRlbVRpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2VsZWN0ZWQtdG9kby1pdGVtLXRpdGxlXCIpO1xyXG4gICAgICAgICAgICBzZWxlY3RlZFRvZG9JdGVtVGl0bGUudGV4dENvbnRlbnQgPSBzZWxlY3RlZFByb2plY3RbaV0udGl0bGU7XHJcbiAgICAgICAgICAgIHRvZG9EZXRhaWxzQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlbGVjdGVkVG9kb0l0ZW1UaXRsZSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIHByaW9yaXR5Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJpb3JpdHktY29udGFpbmVyXCIpO1xyXG4gICAgICAgICAgICBwcmlvcml0eUNvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6IFwiO1xyXG4gICAgICAgICAgICB0b2RvRGV0YWlsc0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eUNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRQcm9qZWN0W2ldLmhpZ2hQcmlvcml0eSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgaGlnaFByaW9yaXR5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICBoaWdoUHJpb3JpdHlDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJoaWdoLXByaW9yaXR5LWNvbnRhaW5lclwiKTtcclxuICAgICAgICAgICAgICBoaWdoUHJpb3JpdHlDb250YWluZXIudGV4dENvbnRlbnQgPSBcIkhJR0hcIjtcclxuICAgICAgICAgICAgICBwcmlvcml0eUNvbnRhaW5lci5hcHBlbmRDaGlsZChoaWdoUHJpb3JpdHlDb250YWluZXIpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkUHJvamVjdFtpXS5sb3dQcmlvcml0eSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgbG93UHJpb3JpdHlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgIGxvd1ByaW9yaXR5Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibG93LXByaW9yaXR5LWNvbnRhaW5lclwiKTtcclxuICAgICAgICAgICAgICBsb3dQcmlvcml0eUNvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiTE9XXCI7XHJcbiAgICAgICAgICAgICAgcHJpb3JpdHlDb250YWluZXIuYXBwZW5kQ2hpbGQobG93UHJpb3JpdHlDb250YWluZXIpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRUb2RvSXRlbUR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBzZWxlY3RlZFRvZG9JdGVtRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNlbGVjdGVkLXRvZG8taXRlbS1kdWUtZGF0ZVwiKTtcclxuICAgICAgICAgICAgc2VsZWN0ZWRUb2RvSXRlbUR1ZURhdGUudGV4dENvbnRlbnQgPSBgRHVlIGRhdGU6ICR7c2VsZWN0ZWRQcm9qZWN0W2ldLmR1ZURhdGV9YDtcclxuICAgICAgICAgICAgdG9kb0RldGFpbHNDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZWN0ZWRUb2RvSXRlbUR1ZURhdGUpO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRUb2RvSXRlbURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgc2VsZWN0ZWRUb2RvSXRlbURlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2VsZWN0ZWQtdG9kby1pdGVtLWRlc2NyaXB0aW9uXCIpO1xyXG4gICAgICAgICAgICBzZWxlY3RlZFRvZG9JdGVtRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBgRGVzY3JpcHRpb246ICR7c2VsZWN0ZWRQcm9qZWN0W2ldLmRlc2NyaXB0aW9ufWA7XHJcbiAgICAgICAgICAgIHRvZG9EZXRhaWxzQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlbGVjdGVkVG9kb0l0ZW1EZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBjb25zdCB0b2RvSXRlbVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgIHRvZG9JdGVtVGl0bGUuY2xhc3NMaXN0LmFkZChcInRvZG8taXRlbS10aXRsZVwiKTtcclxuICAgICAgICAgIHRvZG9JdGVtVGl0bGUudGV4dENvbnRlbnQgPSBzZWxlY3RlZFByb2plY3RbaV0udGl0bGU7XHJcbiAgICAgICAgICB0b2RvSXRlbUxlZnRDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0l0ZW1UaXRsZSk7XHJcblxyXG4gICAgICAgICAgaWYgKHNlbGVjdGVkUHJvamVjdFtpXS5oaWdoUHJpb3JpdHkgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBjb25zdCB0b2RvSXRlbUhpZ2hQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIHRvZG9JdGVtSGlnaFByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWl0ZW0taGlnaC1wcmlvcml0eVwiKTtcclxuICAgICAgICAgICAgdG9kb0l0ZW1IaWdoUHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIkhJR0hcIjtcclxuICAgICAgICAgICAgdG9kb0l0ZW1MZWZ0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9JdGVtSGlnaFByaW9yaXR5KTtcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgY29uc3QgdG9kb0l0ZW1SaWdodENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICB0b2RvSXRlbVJpZ2h0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWl0ZW0tcmlnaHQtY29udGFpbmVyXCIpO1xyXG4gICAgICAgICAgdG9kb0l0ZW0uYXBwZW5kQ2hpbGQodG9kb0l0ZW1SaWdodENvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgY29uc3QgaXRlbUR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgaXRlbUR1ZURhdGUuY2xhc3NMaXN0LmFkZChcInRvZG8taXRlbS1kdWUtZGF0ZVwiKTtcclxuICAgICAgICAgIGl0ZW1EdWVEYXRlLnRleHRDb250ZW50ID0gc2VsZWN0ZWRQcm9qZWN0W2ldLmR1ZURhdGU7XHJcbiAgICAgICAgICB0b2RvSXRlbVJpZ2h0Q29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1EdWVEYXRlKTtcclxuXHJcbiAgICAgICAgICBjb25zdCBlZGl0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjbGFzc1wiKTtcclxuICAgICAgICAgIGVkaXRJY29uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZWRpdC1pY29uXCIpO1xyXG4gICAgICAgICAgZWRpdEljb24uY2xhc3NMaXN0LmFkZChcImlkXCIsIFwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiKTtcclxuICAgICAgICAgIGVkaXRJY29uLnRleHRDb250ZW50ID0gXCJlZGl0XCI7XHJcbiAgICAgICAgICB0b2RvSXRlbVJpZ2h0Q29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRJY29uKTtcclxuXHJcbiAgICAgICAgICBlZGl0SWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZWRpdFRvZG9JdGVtKTtcclxuXHJcbiAgICAgICAgICBmdW5jdGlvbiBlZGl0VG9kb0l0ZW0gKCkge1xyXG4gICAgICAgICAgICBjb25zdCB0b2RvQmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIHRvZG9CYWNrZ3JvdW5kLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kby1iYWNrZ3JvdW5kXCIpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRvZG9CYWNrZ3JvdW5kKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgZm9ybUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZvcm0tY29udGFpbmVyXCIpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IGNhbmNlbEJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvbkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNhbmNlbC1wcm9qZWN0LWJ1dHRvbi1jb250YWluZXJcIik7XHJcbiAgICAgICAgICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uQ29udGFpbmVyKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBleGl0VG9kb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgIGV4aXRUb2RvQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZXhpdC10b2RvLWJ1dHRvblwiKTtcclxuICAgICAgICAgICAgZXhpdFRvZG9CdXR0b24udGV4dENvbnRlbnQgPSBcIlhcIjtcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGV4aXRUb2RvQnV0dG9uKTtcclxuXHJcbiAgICAgICAgICAgIGV4aXRUb2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBleGl0VG9kbyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0b2RvRGV0YWlsc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIHRvZG9EZXRhaWxzQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kby1kZXRhaWxzLWNvbnRhaW5lclwiKTtcclxuICAgICAgICAgICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRGV0YWlsc0NvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZFRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBzZWxlY3RlZFRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzZWxlY3RlZC10aXRsZS1sYWJlbFwiKTtcclxuICAgICAgICAgICAgc2VsZWN0ZWRUaXRsZUxhYmVsLnRleHRDb250ZW50ID0gXCJUaXRsZVwiO1xyXG4gICAgICAgICAgICB0b2RvRGV0YWlsc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxlY3RlZFRpdGxlTGFiZWwpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkVG9kb0l0ZW1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICAgICAgc2VsZWN0ZWRUb2RvSXRlbVRpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2VsZWN0ZWQtdGl0bGUtaW5wdXRcIik7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkVG9kb0l0ZW1UaXRsZS52YWx1ZSA9IHNlbGVjdGVkUHJvamVjdFtpXS50aXRsZTtcclxuICAgICAgICAgICAgdG9kb0RldGFpbHNDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZWN0ZWRUb2RvSXRlbVRpdGxlKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkRHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgc2VsZWN0ZWREdWVEYXRlTGFiZWwuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzZWxlY3RlZC1kdWUtZGF0ZS1sYWJlbFwiKTtcclxuICAgICAgICAgICAgc2VsZWN0ZWREdWVEYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlXCI7XHJcbiAgICAgICAgICAgIHRvZG9EZXRhaWxzQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlbGVjdGVkRHVlRGF0ZUxhYmVsKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkVG9kb0l0ZW1EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgICAgICBzZWxlY3RlZFRvZG9JdGVtRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcclxuICAgICAgICAgICAgc2VsZWN0ZWRUb2RvSXRlbUR1ZURhdGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzZWxlY3RlZC1kdWUtZGF0ZS1pbnB1dFwiKTtcclxuICAgICAgICAgICAgc2VsZWN0ZWRUb2RvSXRlbUR1ZURhdGUudmFsdWUgPSBzZWxlY3RlZFByb2plY3RbaV0uZHVlRGF0ZTtcclxuICAgICAgICAgICAgdG9kb0RldGFpbHNDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZWN0ZWRUb2RvSXRlbUR1ZURhdGUpO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWREZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgc2VsZWN0ZWREZXNjcmlwdGlvbkxhYmVsLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2VsZWN0ZWQtZGVzY3JpcHRpb24tbGFiZWxcIik7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkRGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb25cIjtcclxuICAgICAgICAgICAgdG9kb0RldGFpbHNDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZWN0ZWREZXNjcmlwdGlvbkxhYmVsKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkVG9kb0l0ZW1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcclxuICAgICAgICAgICAgc2VsZWN0ZWRUb2RvSXRlbURlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2VsZWN0ZWQtZGVzY3JpcHRpb24tdGV4dGFyZWFcIik7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkVG9kb0l0ZW1EZXNjcmlwdGlvbi52YWx1ZSA9IHNlbGVjdGVkUHJvamVjdFtpXS5kZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgdG9kb0RldGFpbHNDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZWN0ZWRUb2RvSXRlbURlc2NyaXB0aW9uKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkUHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkUHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNlbGVjdGVkLXByaW9yaXR5LWxhYmVsXCIpO1xyXG4gICAgICAgICAgICBzZWxlY3RlZFByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5XCI7XHJcbiAgICAgICAgICAgIHRvZG9EZXRhaWxzQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlbGVjdGVkUHJpb3JpdHlMYWJlbCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZExvd1ByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkTG93UHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxvdy1wcmlvcml0eS1sYWJlbFwiKTtcclxuICAgICAgICAgICAgc2VsZWN0ZWRMb3dQcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImxvdy1wcmlvcml0eVwiKTtcclxuICAgICAgICAgICAgc2VsZWN0ZWRMb3dQcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gXCJMT1dcIjtcclxuICAgICAgICAgICAgdG9kb0RldGFpbHNDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZWN0ZWRMb3dQcmlvcml0eUxhYmVsKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkVG9kb0l0ZW1Mb3dQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICAgICAgc2VsZWN0ZWRUb2RvSXRlbUxvd1ByaW9yaXR5LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcclxuICAgICAgICAgICAgc2VsZWN0ZWRUb2RvSXRlbUxvd1ByaW9yaXR5LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibG93LXByaW9yaXR5XCIpO1xyXG4gICAgICAgICAgICBzZWxlY3RlZFRvZG9JdGVtTG93UHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LW9wdGlvblwiKTtcclxuICAgICAgICAgICAgc2VsZWN0ZWRUb2RvSXRlbUxvd1ByaW9yaXR5LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcmlvcml0eS1vcHRpb25cIik7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkVG9kb0l0ZW1Mb3dQcmlvcml0eS5jaGVja2VkID0gc2VsZWN0ZWRQcm9qZWN0W2ldLmxvd1ByaW9yaXR5O1xyXG4gICAgICAgICAgICB0b2RvRGV0YWlsc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxlY3RlZFRvZG9JdGVtTG93UHJpb3JpdHkpO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRIaWdoUHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgICAgICAgICAgc2VsZWN0ZWRIaWdoUHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhpZ2gtcHJpb3JpdHktbGFiZWxcIik7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkSGlnaFByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiaGlnaC1wcmlvcml0eVwiKTtcclxuICAgICAgICAgICAgc2VsZWN0ZWRIaWdoUHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9IFwiSElHSFwiO1xyXG4gICAgICAgICAgICB0b2RvRGV0YWlsc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxlY3RlZEhpZ2hQcmlvcml0eUxhYmVsKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkVG9kb0l0ZW1IaWdoUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkVG9kb0l0ZW1IaWdoUHJpb3JpdHkuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhZGlvXCIpO1xyXG4gICAgICAgICAgICBzZWxlY3RlZFRvZG9JdGVtSGlnaFByaW9yaXR5LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaGlnaC1wcmlvcml0eVwiKTtcclxuICAgICAgICAgICAgc2VsZWN0ZWRUb2RvSXRlbUhpZ2hQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktb3B0aW9uXCIpO1xyXG4gICAgICAgICAgICBzZWxlY3RlZFRvZG9JdGVtSGlnaFByaW9yaXR5LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcmlvcml0eS1vcHRpb25cIik7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkVG9kb0l0ZW1IaWdoUHJpb3JpdHkuY2hlY2tlZCA9IHNlbGVjdGVkUHJvamVjdFtpXS5oaWdoUHJpb3JpdHk7XHJcbiAgICAgICAgICAgIHRvZG9EZXRhaWxzQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlbGVjdGVkVG9kb0l0ZW1IaWdoUHJpb3JpdHkpO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc3VibWl0RWRpdFRvZG9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICBzdWJtaXRFZGl0VG9kb0J1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN1Ym1pdC10b2RvLWVkaXQtYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICBzdWJtaXRFZGl0VG9kb0J1dHRvbi50ZXh0Q29udGVudCA9IFwiU3VibWl0IEVkaXRcIjtcclxuICAgICAgICAgICAgdG9kb0RldGFpbHNDb250YWluZXIuYXBwZW5kQ2hpbGQoc3VibWl0RWRpdFRvZG9CdXR0b24pO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc3VibWl0VG9kb0VkaXRGb3JtID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgY29uc3QgRWRpdGVkVG9kbyA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGxvd1ByaW9yaXR5LCBoaWdoUHJpb3JpdHkpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgbG93UHJpb3JpdHksIGhpZ2hQcmlvcml0eSB9O1xyXG4gICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3RlZC10aXRsZS1pbnB1dFwiKS52YWx1ZTtcclxuICAgICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VsZWN0ZWQtZGVzY3JpcHRpb24tdGV4dGFyZWFcIikudmFsdWU7XHJcbiAgICAgICAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VsZWN0ZWQtZHVlLWRhdGUtaW5wdXRcIikudmFsdWU7XHJcbiAgICAgICAgICAgICAgY29uc3QgbG93UHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvdy1wcmlvcml0eVwiKS5jaGVja2VkO1xyXG4gICAgICAgICAgICAgIGNvbnN0IGhpZ2hQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGlnaC1wcmlvcml0eVwiKS5jaGVja2VkO1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIGNvbnN0IHRvZG9FZGl0ID0gRWRpdGVkVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGxvd1ByaW9yaXR5LCBoaWdoUHJpb3JpdHkpO1xyXG5cclxuICAgICAgICAgICAgICBzZWxlY3RlZFByb2plY3Quc3BsaWNlKHRvZG9JdGVtLmRhdGFzZXQudG9kb0lkLCAxLCB0b2RvRWRpdCk7XHJcbiAgICAgICAgICAgICAgc2hvd1RvZG9zTGlzdCgpO1xyXG4gICAgICAgICAgICAgIHVwZGF0ZVByb2plY3RMaXN0KCk7XHJcblxyXG4gICAgICAgICAgICAgIGNvbnN0IHRvZG9CYWNrZ3JvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLWJhY2tncm91bmRcIik7XHJcbiAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0b2RvQmFja2dyb3VuZCk7XHJcblxyXG4gICAgICAgICAgICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm0tY29udGFpbmVyXCIpO1xyXG4gICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZm9ybUNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBzdWJtaXRFZGl0VG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3VibWl0VG9kb0VkaXRGb3JtKTtcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgY29uc3QgZGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjbGFzc1wiKTtcclxuICAgICAgICAgIGRlbGV0ZUljb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkZWxldGUtaWNvblwiKTtcclxuICAgICAgICAgIGRlbGV0ZUljb24uY2xhc3NMaXN0LmFkZChcImlkXCIsIFwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiKTtcclxuICAgICAgICAgIGRlbGV0ZUljb24udGV4dENvbnRlbnQgPSBcImRlbGV0ZVwiO1xyXG4gICAgICAgICAgdG9kb0l0ZW1SaWdodENvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVJY29uKTtcclxuXHJcbiAgICAgICAgICBkZWxldGVJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWxldGVUb2RvSXRlbSk7XHJcblxyXG4gICAgICAgICAgZnVuY3Rpb24gZGVsZXRlVG9kb0l0ZW0gKCkge1xyXG4gICAgICAgICAgICB0b2Rvc0NvbnRhaW5lci5yZW1vdmVDaGlsZCh0b2RvSXRlbSk7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkUHJvamVjdC5zcGxpY2UodG9kb0l0ZW0uZGF0YXNldC50b2RvSWQsIDEpO1xyXG4gICAgICAgICAgICBzaG93VG9kb3NMaXN0KCk7XHJcbiAgICAgICAgICAgIHVwZGF0ZVByb2plY3RMaXN0KCk7XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBzaG93VG9kb3NMaXN0KCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGV4aXRUb2RvID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRvZG9CYWNrZ3JvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLWJhY2tncm91bmRcIik7XHJcbiAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0b2RvQmFja2dyb3VuZCk7XHJcblxyXG4gIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm0tY29udGFpbmVyXCIpO1xyXG4gIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZm9ybUNvbnRhaW5lcik7XHJcbn07XHJcblxyXG5leHBvcnQgeyB1cGRhdGVQcm9qZWN0TGlzdCB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
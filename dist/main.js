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

#new-project-button, #check-projects-button, #check-default-project-button {
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
  font-family: 'Roboto';
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
  width: 90%;
  padding: 10px;
  margin-left: 10px;
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
  margin: 10px;
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["::placeholder {\r\n  color: rgb(139, 133, 133);\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Roboto';\r\n  src: url('./Roboto-Regular.ttf') format('ttf'), \r\n  url('./Roboto-Bold.ttf') format('ttf');\r\n  font-weight: 400, 700;\r\n  font-style: normal;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  font-family: 'Roboto';\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n#nav-bar {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  height: 50px;\r\n  font-size: 25px;\r\n  font-weight: bold;\r\n  color: white;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 0 15px;\r\n  background-color: rgb(62, 167, 253);\r\n}\r\n\r\n#left-nav-bar {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n#right-nav-bar {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n#container {\r\n  display: flex;\r\n  margin-top: 50px;\r\n  width: 100vw;\r\n  height: 85vh;\r\n  border-bottom: 1px solid gray;\r\n  box-shadow: 1px 2px 5px 1px rgb(170, 162, 162);\r\n}\r\n\r\n#left-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  flex: 1;\r\n  height: 100%;\r\n  background-color: rgb(229, 224, 224);\r\n  border-right: 1px solid gray;\r\n}\r\n\r\n#project-list {\r\n  width: 100%;\r\n  height: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding-top: 15px;\r\n}\r\n\r\n.project-list-item {\r\n  font-size: 18px;\r\n  font-weight: bold;\r\n  width: 70%;\r\n  border-radius: 5px;\r\n  margin: 2px 0;\r\n  padding: 5px 10px;\r\n  transition: 0.7s;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.project-list-item:hover {\r\n  background-color: rgb(198, 194, 194);\r\n}\r\n\r\n.project-item-text {\r\n  width: 80%;\r\n}\r\n\r\n.project-item-amount {\r\n  padding: 2px;\r\n  border-radius: 50%;\r\n  height: 20px;\r\n  width: 20px;\r\n  color: white;\r\n  background-color: rgb(62, 167, 253);\r\n  font-size: 12px;\r\n  font-weight: bold;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  transition: 0.7s;\r\n}\r\n\r\n#right-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: start;\r\n  height: 100%;\r\n  flex: 3;\r\n}\r\n\r\n#todos-container {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.todo-item {\r\n  padding: 10px;\r\n  width: 80%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin: 5px;\r\n  border-bottom: 1px solid rgb(169, 164, 164);\r\n  transition: 0.7s;\r\n}\r\n\r\n.todo-item:hover {\r\n  cursor: pointer;\r\n  color: white;\r\n  background-color: rgb(62, 167, 253);\r\n}\r\n\r\n.todo-item-left-container {\r\n  display: flex;\r\n  width: 50%;\r\n  height: 100%;\r\n  font-weight: bold;\r\n  align-items: center;\r\n  font-size: 19px;\r\n}\r\n\r\n.todo-item-right-container {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.todo-item-high-priority {\r\n  margin-left: 10px;\r\n  color: white;\r\n  background-color: rgb(215, 45, 45);\r\n  padding: 2px 5px;\r\n  border-radius: 10px;\r\n  font-size: 10px;\r\n  font-weight: bold;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.todo-item-due-date {\r\n  color: gray;\r\n  margin-right: 10px;\r\n}\r\n\r\n#edit-icon, #delete-icon {\r\n  object-fit: cover;\r\n  padding: 5px;\r\n  border-radius: 50%;\r\n  color: white;\r\n  background-color: rgb(62, 167, 253);\r\n  margin: 0 5px 2px 5px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  transition: 0.7s;\r\n}\r\n\r\n#edit-icon:hover, #delete-icon:hover {\r\n  color: rgb(62, 167, 253);\r\n  background-color: white;\r\n}\r\n\r\n#project-background, #todo-background {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  background-color: white;\r\n  opacity: 0.7;\r\n  z-index: 0;\r\n}\r\n\r\n#form-container {\r\n  position: fixed;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  z-index: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n#cancel-todo-button-container {\r\n  width: 400px;\r\n  display: flex;\r\n  justify-content: end;\r\n}\r\n\r\n#cancel-project-button-container {\r\n  width: 250px;\r\n  display: flex;\r\n  justify-content: end;\r\n}\r\n\r\n#new-project-form, #new-todo-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  border-radius: 5px;\r\n  padding: 10px;\r\n  background-color: white;\r\n  border: 1px solid gray;\r\n  box-shadow: 0px 0px 5px 1px rgb(170, 162, 162);\r\n}\r\n\r\n#new-project-button, #check-projects-button, #check-default-project-button {\r\n  width: 150px;\r\n  cursor: pointer;\r\n  border: 1px solid white;\r\n  margin: 0 5px;\r\n  color: rgb(62, 167, 253);\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n  border-radius: 20px;\r\n  padding: 5px 20px;\r\n  background-color: white;\r\n  transition: 0.7s;\r\n}\r\n\r\n#add-todo-button {\r\n  width: 150px;\r\n  cursor: pointer;\r\n  border: 1px solid rgb(62, 167, 253);\r\n  margin: 20px 30px;\r\n  color: rgb(62, 167, 253);\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n  border-radius: 20px;\r\n  padding: 5px 20px;\r\n  background-color: white;\r\n  transition: 0.7s;\r\n}\r\n\r\n#new-project-button:hover, #add-todo-button:hover {\r\n  background-color: rgb(62, 167, 253);\r\n  color: white;\r\n}\r\n\r\nfieldset {\r\n  border: none;\r\n  width: 400px;\r\n  padding: 5px 0;\r\n  margin: 0;\r\n}\r\n\r\ninput, #project-title {\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n  border-radius: 10px;\r\n  margin: 5px 20px 0 20px;\r\n  border: 1px solid rgb(223, 218, 218);\r\n  padding: 5px 10px;\r\n  width: 250px;\r\n}\r\n\r\n#project-title {\r\n  margin: 10px;\r\n}\r\n\r\ntextarea {\r\n  resize: none;\r\n  font-size: 15px;\r\n  border-radius: 10px;\r\n  margin: 5px 20px 0 20px;\r\n  border: 1px solid rgb(223, 218, 218);\r\n  padding: 5px 10px;\r\n  width: 250px;\r\n  font-family: 'Roboto';\r\n}\r\n\r\n#due-date-fieldset {\r\n  display: flex;\r\n  justify-content: start;\r\n}\r\n\r\n#due-date-label, #priority-title {\r\n  margin: 0 20px;\r\n}\r\n\r\n#select-project-label {\r\n  padding-left: 20px;\r\n}\r\n\r\n#todo-due-date-input {\r\n  width: 150px;\r\n}\r\n\r\n#priority-fieldset {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.priority-option {\r\n  margin: 20px;\r\n  font-weight: bold;\r\n  border: 1px solid black;\r\n  border-radius: 10px;\r\n  padding: 10px 15px;\r\n}\r\n\r\n#low-priority-label {\r\n  color: rgb(11, 147, 11);\r\n  border: 2px solid rgb(11, 147, 11);\r\n  transition: 0.7s;\r\n  font-size: 12px;\r\n  font-weight: bold;\r\n  padding: 3px 8px;\r\n  border-radius: 10px;\r\n  margin: 5px;\r\n}\r\n\r\n#low-priority-label:hover {\r\n  color: white;\r\n  background-color: rgb(11, 147, 11);\r\n  cursor: pointer;\r\n}\r\n\r\n#high-priority-label {\r\n  color: rgb(215, 45, 45);\r\n  border: 2px solid rgb(215, 45, 45);\r\n  transition: 0.7s;\r\n  font-size: 12px;\r\n  font-weight: bold;\r\n  padding: 3px 8px;\r\n  border-radius: 10px;\r\n  margin: 5px;\r\n}\r\n\r\n#high-priority-label:hover {\r\n  color: white;\r\n  background-color: rgb(215, 45, 45);\r\n  cursor: pointer;\r\n}\r\n\r\n.priority-option, #default-project-name, .project-name {\r\n  position: fixed;\r\n  opacity: 0;\r\n  pointer-events: none;\r\n}\r\n\r\n#project-fieldset {\r\n  display: flex;\r\n}\r\n\r\n#default-project-label, .project-label {\r\n  color: rgb(62, 167, 253);\r\n  border: 1px solid rgb(62, 167, 253);\r\n  padding: 5px 10px;\r\n  font-size: 12px;\r\n  font-weight: bold;\r\n  margin: 2px;\r\n  border-radius: 10px;\r\n  transition: 0.7s;\r\n}\r\n\r\n#default-project-label:hover, .project-label:hover {\r\n  color: white;\r\n  background-color: rgb(62, 167, 253);\r\n  cursor: pointer;\r\n}\r\n\r\n#submit-project-button {\r\n  width: 150px;\r\n  cursor: pointer;\r\n  border: 1px solid rgb(62, 167, 253);\r\n  color: rgb(62, 167, 253);\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n  border-radius: 20px;\r\n  margin: 10px 0;\r\n  padding: 5px 20px;\r\n  background-color: white;\r\n  transition: 0.7s;\r\n}\r\n\r\n#submit-project-button:hover {\r\n  background-color: rgb(62, 167, 253);\r\n  color: white;\r\n}\r\n\r\n#cancel-project-button, #cancel-todo-button, #exit-todo-button {\r\n  width: 20px;\r\n  height: 20px;\r\n  border: none;\r\n  background-color: white;\r\n  color: rgb(62, 167, 253);\r\n  cursor: pointer;\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-bottom: 5px;\r\n  transition: 0.7s;\r\n}\r\n\r\n#cancel-project-button:hover, #cancel-todo-button:hover, #exit-todo-button:hover {\r\n  background-color: rgb(62, 167, 253);\r\n  color: white;\r\n}\r\n\r\n#todo-details-container {\r\n  padding: 10px;\r\n  border-radius: 5px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: start;\r\n  width: 350px;\r\n  background-color: white;\r\n  border: 1px solid gray;\r\n  box-shadow: 0px 0px 5px 1px rgb(170, 162, 162);\r\n}\r\n\r\n#selected-todo-item-title {\r\n  width: 90%;\r\n  padding: 10px;\r\n  margin-left: 10px;\r\n  font-size: 20px;\r\n  background-color: rgb(62, 167, 253);\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n\r\n#priority-container {\r\n  margin: 5px 10px;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n#high-priority-container {\r\n  margin-left: 10px;\r\n  color: white;\r\n  background-color: rgb(215, 45, 45);\r\n  padding: 2px 5px;\r\n  border-radius: 10px;\r\n  font-size: 10px;\r\n  font-weight: bold;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n#low-priority-container {\r\n  margin: 10px;\r\n  color: white;\r\n  background-color: rgb(11, 147, 11);\r\n  padding: 2px 5px;\r\n  border-radius: 10px;\r\n  font-size: 10px;\r\n  font-weight: bold;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n#selected-todo-item-due-date {\r\n  padding: 5px 0 0 10px;\r\n  font-size: 12px;\r\n  color: gray;\r\n}\r\n\r\n#selected-todo-item-description {\r\n  font-size: 15px;\r\n  padding: 10px;\r\n}\r\n\r\n#selected-title-label, #selected-due-date-label, #selected-description-label, #selected-priority-label {\r\n  padding: 10px;\r\n}\r\n\r\n#selected-description-input {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n#submit-todo-edit-button {\r\n  width: 150px;\r\n  cursor: pointer;\r\n  border: 1px solid rgb(62, 167, 253);\r\n  margin: 10px auto;\r\n  color: rgb(62, 167, 253);\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n  border-radius: 20px;\r\n  padding: 5px 20px;\r\n  background-color: white;\r\n  transition: 0.7s;\r\n}\r\n\r\n#submit-todo-edit-button:hover {\r\n  background-color: rgb(62, 167, 253);\r\n  color: white;\r\n}"],"sourceRoot":""}]);
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

defaultProject.push(todoItemOne);
defaultProject.push(todoItemTwo);

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

const checkProjects = document.createElement("button");
checkProjects.setAttribute("id", "check-projects-button");
checkProjects.textContent = "Check Project";
rightNavBar.appendChild(checkProjects);

const checkDefaultProject = document.createElement("button");
checkDefaultProject.setAttribute("id", "check-default-project-button");
checkDefaultProject.textContent = "Check Default";
rightNavBar.appendChild(checkDefaultProject);

checkProjects.addEventListener("click", function checkProjectsInList () {
  console.log(projectListArray);
});

checkDefaultProject.addEventListener("click", function checkDefaultProject () {
  console.log(defaultProject);
});

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
            selectedTodoItemDueDate.setAttribute("id", "selected-due-date-input");
            selectedTodoItemDueDate.value = selectedProject[i].dueDate;
            todoDetailsContainer.appendChild(selectedTodoItemDueDate);

            const selectedDescriptionLabel = document.createElement("div");
            selectedDescriptionLabel.setAttribute("id", "selected-description-label");
            selectedDescriptionLabel.textContent = "Description";
            todoDetailsContainer.appendChild(selectedDescriptionLabel);

            const selectedTodoItemDescription = document.createElement("input");
            selectedTodoItemDescription.setAttribute("id", "selected-description-input");
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
              const description = document.querySelector("#selected-description-input").value;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHFIQUF1QztBQUNuRiw0Q0FBNEMsK0dBQW9DO0FBQ2hGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQsUUFBUSxtQ0FBbUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sT0FBTyxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEs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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0VBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLHVEQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDJDQUEyQyw2REFBYztBQUN6RDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUdxQztBQUNnQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLCtDQUFnQjtBQUNsQjtBQUNBLEVBQUUsa0VBQWlCO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9EbUM7QUFDRTtBQUNnQjtBQUNyRDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2UkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9uZXctcHJvamVjdC1mb3JtLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL25ldy10b2RvLWZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc2hvdy10b2RvLWxpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vUm9ib3RvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9Sb2JvdG8tQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogcmdiKDEzOSwgMTMzLCAxMzMpO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KCd0dGYnKSwgXHJcbiAgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdCgndHRmJyk7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMCwgNzAwO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNuYXYtYmFyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYyLCAxNjcsIDI1Myk7XHJcbn1cclxuXHJcbiNsZWZ0LW5hdi1iYXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuI3JpZ2h0LW5hdi1iYXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuI2NvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDg1dmg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XHJcbiAgYm94LXNoYWRvdzogMXB4IDJweCA1cHggMXB4IHJnYigxNzAsIDE2MiwgMTYyKTtcclxufVxyXG5cclxuI2xlZnQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4OiAxO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI5LCAyMjQsIDIyNCk7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgZ3JheTtcclxufVxyXG5cclxuI3Byb2plY3QtbGlzdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG59XHJcblxyXG4ucHJvamVjdC1saXN0LWl0ZW0ge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB3aWR0aDogNzAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBtYXJnaW46IDJweCAwO1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIHRyYW5zaXRpb246IDAuN3M7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5wcm9qZWN0LWxpc3QtaXRlbTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5OCwgMTk0LCAxOTQpO1xyXG59XHJcblxyXG4ucHJvamVjdC1pdGVtLXRleHQge1xyXG4gIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWl0ZW0tYW1vdW50IHtcclxuICBwYWRkaW5nOiAycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGhlaWdodDogMjBweDtcclxuICB3aWR0aDogMjBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYyLCAxNjcsIDI1Myk7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiAwLjdzO1xyXG59XHJcblxyXG4jcmlnaHQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBmbGV4OiAzO1xyXG59XHJcblxyXG4jdG9kb3MtY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnRvZG8taXRlbSB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB3aWR0aDogODAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxNjksIDE2NCwgMTY0KTtcclxuICB0cmFuc2l0aW9uOiAwLjdzO1xyXG59XHJcblxyXG4udG9kby1pdGVtOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2MiwgMTY3LCAyNTMpO1xyXG59XHJcblxyXG4udG9kby1pdGVtLWxlZnQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxOXB4O1xyXG59XHJcblxyXG4udG9kby1pdGVtLXJpZ2h0LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4udG9kby1pdGVtLWhpZ2gtcHJpb3JpdHkge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE1LCA0NSwgNDUpO1xyXG4gIHBhZGRpbmc6IDJweCA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4udG9kby1pdGVtLWR1ZS1kYXRlIHtcclxuICBjb2xvcjogZ3JheTtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbiNlZGl0LWljb24sICNkZWxldGUtaWNvbiB7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYyLCAxNjcsIDI1Myk7XHJcbiAgbWFyZ2luOiAwIDVweCAycHggNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiAwLjdzO1xyXG59XHJcblxyXG4jZWRpdC1pY29uOmhvdmVyLCAjZGVsZXRlLWljb246aG92ZXIge1xyXG4gIGNvbG9yOiByZ2IoNjIsIDE2NywgMjUzKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI3Byb2plY3QtYmFja2dyb3VuZCwgI3RvZG8tYmFja2dyb3VuZCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBvcGFjaXR5OiAwLjc7XHJcbiAgei1pbmRleDogMDtcclxufVxyXG5cclxuI2Zvcm0tY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgei1pbmRleDogMTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuI2NhbmNlbC10b2RvLWJ1dHRvbi1jb250YWluZXIge1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xyXG59XHJcblxyXG4jY2FuY2VsLXByb2plY3QtYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XHJcbn1cclxuXHJcbiNuZXctcHJvamVjdC1mb3JtLCAjbmV3LXRvZG8tZm9ybSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAxcHggcmdiKDE3MCwgMTYyLCAxNjIpO1xyXG59XHJcblxyXG4jbmV3LXByb2plY3QtYnV0dG9uLCAjY2hlY2stcHJvamVjdHMtYnV0dG9uLCAjY2hlY2stZGVmYXVsdC1wcm9qZWN0LWJ1dHRvbiB7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICBtYXJnaW46IDAgNXB4O1xyXG4gIGNvbG9yOiByZ2IoNjIsIDE2NywgMjUzKTtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBwYWRkaW5nOiA1cHggMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiAwLjdzO1xyXG59XHJcblxyXG4jYWRkLXRvZG8tYnV0dG9uIHtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYig2MiwgMTY3LCAyNTMpO1xyXG4gIG1hcmdpbjogMjBweCAzMHB4O1xyXG4gIGNvbG9yOiByZ2IoNjIsIDE2NywgMjUzKTtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBwYWRkaW5nOiA1cHggMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiAwLjdzO1xyXG59XHJcblxyXG4jbmV3LXByb2plY3QtYnV0dG9uOmhvdmVyLCAjYWRkLXRvZG8tYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjIsIDE2NywgMjUzKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmZpZWxkc2V0IHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIHBhZGRpbmc6IDVweCAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuaW5wdXQsICNwcm9qZWN0LXRpdGxlIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBtYXJnaW46IDVweCAyMHB4IDAgMjBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjIzLCAyMTgsIDIxOCk7XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG59XHJcblxyXG4jcHJvamVjdC10aXRsZSB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgcmVzaXplOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbjogNXB4IDIwcHggMCAyMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMjMsIDIxOCwgMjE4KTtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuICB3aWR0aDogMjUwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xyXG59XHJcblxyXG4jZHVlLWRhdGUtZmllbGRzZXQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcclxufVxyXG5cclxuI2R1ZS1kYXRlLWxhYmVsLCAjcHJpb3JpdHktdGl0bGUge1xyXG4gIG1hcmdpbjogMCAyMHB4O1xyXG59XHJcblxyXG4jc2VsZWN0LXByb2plY3QtbGFiZWwge1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxufVxyXG5cclxuI3RvZG8tZHVlLWRhdGUtaW5wdXQge1xyXG4gIHdpZHRoOiAxNTBweDtcclxufVxyXG5cclxuI3ByaW9yaXR5LWZpZWxkc2V0IHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4ucHJpb3JpdHktb3B0aW9uIHtcclxuICBtYXJnaW46IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbn1cclxuXHJcbiNsb3ctcHJpb3JpdHktbGFiZWwge1xyXG4gIGNvbG9yOiByZ2IoMTEsIDE0NywgMTEpO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxMSwgMTQ3LCAxMSk7XHJcbiAgdHJhbnNpdGlvbjogMC43cztcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZzogM3B4IDhweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG4jbG93LXByaW9yaXR5LWxhYmVsOmhvdmVyIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExLCAxNDcsIDExKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiNoaWdoLXByaW9yaXR5LWxhYmVsIHtcclxuICBjb2xvcjogcmdiKDIxNSwgNDUsIDQ1KTtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjE1LCA0NSwgNDUpO1xyXG4gIHRyYW5zaXRpb246IDAuN3M7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHBhZGRpbmc6IDNweCA4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBtYXJnaW46IDVweDtcclxufVxyXG5cclxuI2hpZ2gtcHJpb3JpdHktbGFiZWw6aG92ZXIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE1LCA0NSwgNDUpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnByaW9yaXR5LW9wdGlvbiwgI2RlZmF1bHQtcHJvamVjdC1uYW1lLCAucHJvamVjdC1uYW1lIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgb3BhY2l0eTogMDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuI3Byb2plY3QtZmllbGRzZXQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbiNkZWZhdWx0LXByb2plY3QtbGFiZWwsIC5wcm9qZWN0LWxhYmVsIHtcclxuICBjb2xvcjogcmdiKDYyLCAxNjcsIDI1Myk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDYyLCAxNjcsIDI1Myk7XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbjogMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgdHJhbnNpdGlvbjogMC43cztcclxufVxyXG5cclxuI2RlZmF1bHQtcHJvamVjdC1sYWJlbDpob3ZlciwgLnByb2plY3QtbGFiZWw6aG92ZXIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjIsIDE2NywgMjUzKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiNzdWJtaXQtcHJvamVjdC1idXR0b24ge1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDYyLCAxNjcsIDI1Myk7XHJcbiAgY29sb3I6IHJnYig2MiwgMTY3LCAyNTMpO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIG1hcmdpbjogMTBweCAwO1xyXG4gIHBhZGRpbmc6IDVweCAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IDAuN3M7XHJcbn1cclxuXHJcbiNzdWJtaXQtcHJvamVjdC1idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2MiwgMTY3LCAyNTMpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI2NhbmNlbC1wcm9qZWN0LWJ1dHRvbiwgI2NhbmNlbC10b2RvLWJ1dHRvbiwgI2V4aXQtdG9kby1idXR0b24ge1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgY29sb3I6IHJnYig2MiwgMTY3LCAyNTMpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICB0cmFuc2l0aW9uOiAwLjdzO1xyXG59XHJcblxyXG4jY2FuY2VsLXByb2plY3QtYnV0dG9uOmhvdmVyLCAjY2FuY2VsLXRvZG8tYnV0dG9uOmhvdmVyLCAjZXhpdC10b2RvLWJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYyLCAxNjcsIDI1Myk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jdG9kby1kZXRhaWxzLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcclxuICB3aWR0aDogMzUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAxcHggcmdiKDE3MCwgMTYyLCAxNjIpO1xyXG59XHJcblxyXG4jc2VsZWN0ZWQtdG9kby1pdGVtLXRpdGxlIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2MiwgMTY3LCAyNTMpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuI3ByaW9yaXR5LWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiA1cHggMTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNoaWdoLXByaW9yaXR5LWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTUsIDQ1LCA0NSk7XHJcbiAgcGFkZGluZzogMnB4IDVweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbiNsb3ctcHJpb3JpdHktY29udGFpbmVyIHtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMSwgMTQ3LCAxMSk7XHJcbiAgcGFkZGluZzogMnB4IDVweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbiNzZWxlY3RlZC10b2RvLWl0ZW0tZHVlLWRhdGUge1xyXG4gIHBhZGRpbmc6IDVweCAwIDAgMTBweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6IGdyYXk7XHJcbn1cclxuXHJcbiNzZWxlY3RlZC10b2RvLWl0ZW0tZGVzY3JpcHRpb24ge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4jc2VsZWN0ZWQtdGl0bGUtbGFiZWwsICNzZWxlY3RlZC1kdWUtZGF0ZS1sYWJlbCwgI3NlbGVjdGVkLWRlc2NyaXB0aW9uLWxhYmVsLCAjc2VsZWN0ZWQtcHJpb3JpdHktbGFiZWwge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbiNzZWxlY3RlZC1kZXNjcmlwdGlvbi1pbnB1dCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuI3N1Ym1pdC10b2RvLWVkaXQtYnV0dG9uIHtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYig2MiwgMTY3LCAyNTMpO1xyXG4gIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gIGNvbG9yOiByZ2IoNjIsIDE2NywgMjUzKTtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBwYWRkaW5nOiA1cHggMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiAwLjdzO1xyXG59XHJcblxyXG4jc3VibWl0LXRvZG8tZWRpdC1idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2MiwgMTY3LCAyNTMpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQjt1REFDc0M7RUFDdEMscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxxQkFBcUI7RUFDckIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGVBQWU7RUFDZixtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsOENBQThDO0FBQ2hEOztBQUVBO0VBQ0UsYUFB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QUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixtQ0FBbUM7RUFDbkMsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOjpwbGFjZWhvbGRlciB7XFxyXFxuICBjb2xvcjogcmdiKDEzOSwgMTMzLCAxMzMpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXHJcXG4gIHNyYzogdXJsKCcuL1JvYm90by1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHRmJyksIFxcclxcbiAgdXJsKCcuL1JvYm90by1Cb2xkLnR0ZicpIGZvcm1hdCgndHRmJyk7XFxyXFxuICBmb250LXdlaWdodDogNDAwLCA3MDA7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI25hdi1iYXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHBhZGRpbmc6IDAgMTVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2MiwgMTY3LCAyNTMpO1xcclxcbn1cXHJcXG5cXHJcXG4jbGVmdC1uYXYtYmFyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jcmlnaHQtbmF2LWJhciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbWFyZ2luLXRvcDogNTBweDtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogODV2aDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xcclxcbiAgYm94LXNoYWRvdzogMXB4IDJweCA1cHggMXB4IHJnYigxNzAsIDE2MiwgMTYyKTtcXHJcXG59XFxyXFxuXFxyXFxuI2xlZnQtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI5LCAyMjQsIDIyNCk7XFxyXFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdC1saXN0IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZy10b3A6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWxpc3QtaXRlbSB7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBtYXJnaW46IDJweCAwO1xcclxcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjdzO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtbGlzdC1pdGVtOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTgsIDE5NCwgMTk0KTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtaXRlbS10ZXh0IHtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWl0ZW0tYW1vdW50IHtcXHJcXG4gIHBhZGRpbmc6IDJweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYyLCAxNjcsIDI1Myk7XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjdzO1xcclxcbn1cXHJcXG5cXHJcXG4jcmlnaHQtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZmxleDogMztcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG9zLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8taXRlbSB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luOiA1cHg7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDE2OSwgMTY0LCAxNjQpO1xcclxcbiAgdHJhbnNpdGlvbjogMC43cztcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8taXRlbTpob3ZlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjIsIDE2NywgMjUzKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8taXRlbS1sZWZ0LWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMTlweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8taXRlbS1yaWdodC1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWl0ZW0taGlnaC1wcmlvcml0eSB7XFxyXFxuICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTUsIDQ1LCA0NSk7XFxyXFxuICBwYWRkaW5nOiAycHggNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8taXRlbS1kdWUtZGF0ZSB7XFxyXFxuICBjb2xvcjogZ3JheTtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2VkaXQtaWNvbiwgI2RlbGV0ZS1pY29uIHtcXHJcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYyLCAxNjcsIDI1Myk7XFxyXFxuICBtYXJnaW46IDAgNXB4IDJweCA1cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgdHJhbnNpdGlvbjogMC43cztcXHJcXG59XFxyXFxuXFxyXFxuI2VkaXQtaWNvbjpob3ZlciwgI2RlbGV0ZS1pY29uOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiByZ2IoNjIsIDE2NywgMjUzKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdC1iYWNrZ3JvdW5kLCAjdG9kby1iYWNrZ3JvdW5kIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgb3BhY2l0eTogMC43O1xcclxcbiAgei1pbmRleDogMDtcXHJcXG59XFxyXFxuXFxyXFxuI2Zvcm0tY29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNjYW5jZWwtdG9kby1idXR0b24tY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiA0MDBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG59XFxyXFxuXFxyXFxuI2NhbmNlbC1wcm9qZWN0LWJ1dHRvbi1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDI1MHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXByb2plY3QtZm9ybSwgI25ldy10b2RvLWZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDFweCByZ2IoMTcwLCAxNjIsIDE2Mik7XFxyXFxufVxcclxcblxcclxcbiNuZXctcHJvamVjdC1idXR0b24sICNjaGVjay1wcm9qZWN0cy1idXR0b24sICNjaGVjay1kZWZhdWx0LXByb2plY3QtYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiAxNTBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgbWFyZ2luOiAwIDVweDtcXHJcXG4gIGNvbG9yOiByZ2IoNjIsIDE2NywgMjUzKTtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIHBhZGRpbmc6IDVweCAyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjdzO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXRvZG8tYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiAxNTBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYig2MiwgMTY3LCAyNTMpO1xcclxcbiAgbWFyZ2luOiAyMHB4IDMwcHg7XFxyXFxuICBjb2xvcjogcmdiKDYyLCAxNjcsIDI1Myk7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBwYWRkaW5nOiA1cHggMjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgdHJhbnNpdGlvbjogMC43cztcXHJcXG59XFxyXFxuXFxyXFxuI25ldy1wcm9qZWN0LWJ1dHRvbjpob3ZlciwgI2FkZC10b2RvLWJ1dHRvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjIsIDE2NywgMjUzKTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuZmllbGRzZXQge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgd2lkdGg6IDQwMHB4O1xcclxcbiAgcGFkZGluZzogNXB4IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbmlucHV0LCAjcHJvamVjdC10aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBtYXJnaW46IDVweCAyMHB4IDAgMjBweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMjMsIDIxOCwgMjE4KTtcXHJcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcclxcbiAgd2lkdGg6IDI1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdC10aXRsZSB7XFxyXFxuICBtYXJnaW46IDEwcHg7XFxyXFxufVxcclxcblxcclxcbnRleHRhcmVhIHtcXHJcXG4gIHJlc2l6ZTogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBtYXJnaW46IDVweCAyMHB4IDAgMjBweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMjMsIDIxOCwgMjE4KTtcXHJcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcclxcbiAgd2lkdGg6IDI1MHB4O1xcclxcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcclxcbn1cXHJcXG5cXHJcXG4jZHVlLWRhdGUtZmllbGRzZXQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbiNkdWUtZGF0ZS1sYWJlbCwgI3ByaW9yaXR5LXRpdGxlIHtcXHJcXG4gIG1hcmdpbjogMCAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jc2VsZWN0LXByb2plY3QtbGFiZWwge1xcclxcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jdG9kby1kdWUtZGF0ZS1pbnB1dCB7XFxyXFxuICB3aWR0aDogMTUwcHg7XFxyXFxufVxcclxcblxcclxcbiNwcmlvcml0eS1maWVsZHNldCB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktb3B0aW9uIHtcXHJcXG4gIG1hcmdpbjogMjBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgcGFkZGluZzogMTBweCAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbG93LXByaW9yaXR5LWxhYmVsIHtcXHJcXG4gIGNvbG9yOiByZ2IoMTEsIDE0NywgMTEpO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDExLCAxNDcsIDExKTtcXHJcXG4gIHRyYW5zaXRpb246IDAuN3M7XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIHBhZGRpbmc6IDNweCA4cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgbWFyZ2luOiA1cHg7XFxyXFxufVxcclxcblxcclxcbiNsb3ctcHJpb3JpdHktbGFiZWw6aG92ZXIge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExLCAxNDcsIDExKTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2hpZ2gtcHJpb3JpdHktbGFiZWwge1xcclxcbiAgY29sb3I6IHJnYigyMTUsIDQ1LCA0NSk7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjE1LCA0NSwgNDUpO1xcclxcbiAgdHJhbnNpdGlvbjogMC43cztcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgcGFkZGluZzogM3B4IDhweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBtYXJnaW46IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuI2hpZ2gtcHJpb3JpdHktbGFiZWw6aG92ZXIge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNSwgNDUsIDQ1KTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5LW9wdGlvbiwgI2RlZmF1bHQtcHJvamVjdC1uYW1lLCAucHJvamVjdC1uYW1lIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3QtZmllbGRzZXQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuI2RlZmF1bHQtcHJvamVjdC1sYWJlbCwgLnByb2plY3QtbGFiZWwge1xcclxcbiAgY29sb3I6IHJnYig2MiwgMTY3LCAyNTMpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDYyLCAxNjcsIDI1Myk7XFxyXFxuICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgbWFyZ2luOiAycHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogMC43cztcXHJcXG59XFxyXFxuXFxyXFxuI2RlZmF1bHQtcHJvamVjdC1sYWJlbDpob3ZlciwgLnByb2plY3QtbGFiZWw6aG92ZXIge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYyLCAxNjcsIDI1Myk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNzdWJtaXQtcHJvamVjdC1idXR0b24ge1xcclxcbiAgd2lkdGg6IDE1MHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDYyLCAxNjcsIDI1Myk7XFxyXFxuICBjb2xvcjogcmdiKDYyLCAxNjcsIDI1Myk7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBtYXJnaW46IDEwcHggMDtcXHJcXG4gIHBhZGRpbmc6IDVweCAyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjdzO1xcclxcbn1cXHJcXG5cXHJcXG4jc3VibWl0LXByb2plY3QtYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2MiwgMTY3LCAyNTMpO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4jY2FuY2VsLXByb2plY3QtYnV0dG9uLCAjY2FuY2VsLXRvZG8tYnV0dG9uLCAjZXhpdC10b2RvLWJ1dHRvbiB7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgY29sb3I6IHJnYig2MiwgMTY3LCAyNTMpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbiAgdHJhbnNpdGlvbjogMC43cztcXHJcXG59XFxyXFxuXFxyXFxuI2NhbmNlbC1wcm9qZWN0LWJ1dHRvbjpob3ZlciwgI2NhbmNlbC10b2RvLWJ1dHRvbjpob3ZlciwgI2V4aXQtdG9kby1idXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYyLCAxNjcsIDI1Myk7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbiN0b2RvLWRldGFpbHMtY29udGFpbmVyIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXHJcXG4gIHdpZHRoOiAzNTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDFweCByZ2IoMTcwLCAxNjIsIDE2Mik7XFxyXFxufVxcclxcblxcclxcbiNzZWxlY3RlZC10b2RvLWl0ZW0tdGl0bGUge1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2MiwgMTY3LCAyNTMpO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbiNwcmlvcml0eS1jb250YWluZXIge1xcclxcbiAgbWFyZ2luOiA1cHggMTBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jaGlnaC1wcmlvcml0eS1jb250YWluZXIge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE1LCA0NSwgNDUpO1xcclxcbiAgcGFkZGluZzogMnB4IDVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBmb250LXNpemU6IDEwcHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNsb3ctcHJpb3JpdHktY29udGFpbmVyIHtcXHJcXG4gIG1hcmdpbjogMTBweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMSwgMTQ3LCAxMSk7XFxyXFxuICBwYWRkaW5nOiAycHggNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3NlbGVjdGVkLXRvZG8taXRlbS1kdWUtZGF0ZSB7XFxyXFxuICBwYWRkaW5nOiA1cHggMCAwIDEwcHg7XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxuICBjb2xvcjogZ3JheTtcXHJcXG59XFxyXFxuXFxyXFxuI3NlbGVjdGVkLXRvZG8taXRlbS1kZXNjcmlwdGlvbiB7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jc2VsZWN0ZWQtdGl0bGUtbGFiZWwsICNzZWxlY3RlZC1kdWUtZGF0ZS1sYWJlbCwgI3NlbGVjdGVkLWRlc2NyaXB0aW9uLWxhYmVsLCAjc2VsZWN0ZWQtcHJpb3JpdHktbGFiZWwge1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3NlbGVjdGVkLWRlc2NyaXB0aW9uLWlucHV0IHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxufVxcclxcblxcclxcbiNzdWJtaXQtdG9kby1lZGl0LWJ1dHRvbiB7XFxyXFxuICB3aWR0aDogMTUwcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoNjIsIDE2NywgMjUzKTtcXHJcXG4gIG1hcmdpbjogMTBweCBhdXRvO1xcclxcbiAgY29sb3I6IHJnYig2MiwgMTY3LCAyNTMpO1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgcGFkZGluZzogNXB4IDIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIHRyYW5zaXRpb246IDAuN3M7XFxyXFxufVxcclxcblxcclxcbiNzdWJtaXQtdG9kby1lZGl0LWJ1dHRvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjIsIDE2NywgMjUzKTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IHsgYWRkUHJvamVjdEZvcm0gfSBmcm9tICcuL25ldy1wcm9qZWN0LWZvcm0nO1xyXG5pbXBvcnQgeyBhZGRUb2RvRm9ybSB9IGZyb20gXCIuL25ldy10b2RvLWZvcm1cIjtcclxuaW1wb3J0IHsgdXBkYXRlUHJvamVjdExpc3QgfSBmcm9tICcuL3Nob3ctdG9kby1saXN0JztcclxuXHJcbmNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcclxubGluay5zZXRBdHRyaWJ1dGUoXCJyZWxcIiwgXCJzdHlsZXNoZWV0XCIpO1xyXG5saW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1hdGVyaWFsK1N5bWJvbHMrT3V0bGluZWQ6b3Bzeix3Z2h0LEZJTEwsR1JBREAyNCwzMDAsMCwwXCIpO1xyXG5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xyXG5cclxuY29uc3QgcHJvamVjdExpc3RBcnJheSA9IFtdO1xyXG5wcm9qZWN0TGlzdEFycmF5LnRleHRDb250ZW50ID0gXCJQcm9qZWN0IExpc3RcIjtcclxuXHJcbmNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gW107XHJcbmRlZmF1bHRQcm9qZWN0LnRleHRDb250ZW50ID0gXCJEZWZhdWx0IFByb2plY3RcIjtcclxucHJvamVjdExpc3RBcnJheS5wdXNoKGRlZmF1bHRQcm9qZWN0KTtcclxuXHJcbmNvbnN0IGxpYnJhcnlBcHAgPSBbXTtcclxubGlicmFyeUFwcC50ZXh0Q29udGVudCA9IFwiTGlicmFyeSBBcHBcIjtcclxucHJvamVjdExpc3RBcnJheS5wdXNoKGxpYnJhcnlBcHApO1xyXG5cclxuY29uc3QgcmVzdGF1cmFudFBhZ2UgPSBbXTtcclxucmVzdGF1cmFudFBhZ2UudGV4dENvbnRlbnQgPSBcIlJlc3RhdXJhbnQgUGFnZVwiO1xyXG5wcm9qZWN0TGlzdEFycmF5LnB1c2gocmVzdGF1cmFudFBhZ2UpO1xyXG5cclxuY29uc3QgdG9kb0l0ZW1PbmUgPSB7XHJcbiAgdGl0bGU6IFwiTmV3IHRvZG9cIiwgXHJcbiAgZGVzY3JpcHRpb246IFwiVGhpbmdzIHRvIHJlYWRcIiwgXHJcbiAgZHVlRGF0ZTogXCIyMDIzLTA5LTE5XCIsIFxyXG4gIGxvd1ByaW9yaXR5OiBmYWxzZSwgXHJcbiAgaGlnaFByaW9yaXR5OiB0cnVlXHJcbn07XHJcblxyXG5jb25zdCB0b2RvSXRlbVR3byA9IHtcclxuICB0aXRsZTogXCJBZGQgZWRpdCBidXR0b25cIiwgXHJcbiAgZGVzY3JpcHRpb246IFwiTmVlZCB0byBhZGQgYnV0dG9uIGluIG9yZGVyIHRvIGVkaXQgZGV0YWlscyFcIiwgXHJcbiAgZHVlRGF0ZTogXCIyMDIzLTA5LTMwXCIsIFxyXG4gIGxvd1ByaW9yaXR5OiB0cnVlLCBcclxuICBoaWdoUHJpb3JpdHk6IGZhbHNlXHJcbn07XHJcblxyXG5kZWZhdWx0UHJvamVjdC5wdXNoKHRvZG9JdGVtT25lKTtcclxuZGVmYXVsdFByb2plY3QucHVzaCh0b2RvSXRlbVR3byk7XHJcblxyXG5jb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5uYXZCYXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuYXYtYmFyXCIpO1xyXG5uYXZCYXIudGV4dENvbnRlbnQgPSBcIlRvZG8gQXBwXCI7XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobmF2QmFyKTtcclxuXHJcbmNvbnN0IGxlZnROYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5sZWZ0TmF2QmFyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibGVmdC1uYXYtYmFyXCIpO1xyXG5uYXZCYXIuYXBwZW5kQ2hpbGQobGVmdE5hdkJhcik7XHJcblxyXG5jb25zdCByaWdodE5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbnJpZ2h0TmF2QmFyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicmlnaHQtbmF2LWJhclwiKTtcclxubmF2QmFyLmFwcGVuZENoaWxkKHJpZ2h0TmF2QmFyKTtcclxuXHJcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRhaW5lclwiKTtcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG5cclxuY29uc3QgbGVmdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmxlZnRDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsZWZ0LWNvbnRhaW5lclwiKTtcclxuY29udGFpbmVyLmFwcGVuZENoaWxkKGxlZnRDb250YWluZXIpO1xyXG5cclxuY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5wcm9qZWN0TGlzdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3QtbGlzdFwiKTtcclxubGVmdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdCk7XHJcblxyXG51cGRhdGVQcm9qZWN0TGlzdCgpO1xyXG5cclxuY29uc3QgcmlnaHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5yaWdodENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInJpZ2h0LWNvbnRhaW5lclwiKTtcclxuY29udGFpbmVyLmFwcGVuZENoaWxkKHJpZ2h0Q29udGFpbmVyKTtcclxuXHJcbmNvbnN0IGFkZFRvZG9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG5hZGRUb2RvQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkLXRvZG8tYnV0dG9uXCIpO1xyXG5hZGRUb2RvQnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGQgVG9kb1wiO1xyXG5yaWdodENvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUb2RvQnV0dG9uKTtcclxuXHJcbmFkZFRvZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZFRvZG9Gb3JtKTtcclxuXHJcbmNvbnN0IHRvZG9zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxudG9kb3NDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2Rvcy1jb250YWluZXJcIik7XHJcbnJpZ2h0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9zQ29udGFpbmVyKTtcclxuXHJcbmNvbnN0IG5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG5uZXdQcm9qZWN0QnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmV3LXByb2plY3QtYnV0dG9uXCIpO1xyXG5uZXdQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGQgUHJvamVjdFwiO1xyXG5yaWdodE5hdkJhci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0QnV0dG9uKTtcclxuXHJcbmNvbnN0IGNoZWNrUHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG5jaGVja1Byb2plY3RzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2hlY2stcHJvamVjdHMtYnV0dG9uXCIpO1xyXG5jaGVja1Byb2plY3RzLnRleHRDb250ZW50ID0gXCJDaGVjayBQcm9qZWN0XCI7XHJcbnJpZ2h0TmF2QmFyLmFwcGVuZENoaWxkKGNoZWNrUHJvamVjdHMpO1xyXG5cclxuY29uc3QgY2hlY2tEZWZhdWx0UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbmNoZWNrRGVmYXVsdFByb2plY3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjaGVjay1kZWZhdWx0LXByb2plY3QtYnV0dG9uXCIpO1xyXG5jaGVja0RlZmF1bHRQcm9qZWN0LnRleHRDb250ZW50ID0gXCJDaGVjayBEZWZhdWx0XCI7XHJcbnJpZ2h0TmF2QmFyLmFwcGVuZENoaWxkKGNoZWNrRGVmYXVsdFByb2plY3QpO1xyXG5cclxuY2hlY2tQcm9qZWN0cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gY2hlY2tQcm9qZWN0c0luTGlzdCAoKSB7XHJcbiAgY29uc29sZS5sb2cocHJvamVjdExpc3RBcnJheSk7XHJcbn0pO1xyXG5cclxuY2hlY2tEZWZhdWx0UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gY2hlY2tEZWZhdWx0UHJvamVjdCAoKSB7XHJcbiAgY29uc29sZS5sb2coZGVmYXVsdFByb2plY3QpO1xyXG59KTtcclxuXHJcbm5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZFByb2plY3RGb3JtKTtcclxuXHJcbmV4cG9ydCB7IGRlZmF1bHRQcm9qZWN0LCBwcm9qZWN0TGlzdEFycmF5IH07IiwiaW1wb3J0IHsgcHJvamVjdExpc3RBcnJheSB9IGZyb20gXCIuXCI7XHJcbmltcG9ydCB7IHVwZGF0ZVByb2plY3RMaXN0IH0gZnJvbSBcIi4vc2hvdy10b2RvLWxpc3RcIjtcclxuXHJcbmNvbnN0IHByb2plY3QgPSBbXTtcclxuXHJcbmNvbnN0IGFkZFByb2plY3RGb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IHByb2plY3RCYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBwcm9qZWN0QmFja2dyb3VuZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3QtYmFja2dyb3VuZFwiKTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHByb2plY3RCYWNrZ3JvdW5kKTtcclxuXHJcbiAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZm9ybUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZvcm0tY29udGFpbmVyXCIpO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XHJcblxyXG4gIGNvbnN0IGNhbmNlbEJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY2FuY2VsQnV0dG9uQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2FuY2VsLXByb2plY3QtYnV0dG9uLWNvbnRhaW5lclwiKTtcclxuICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbkNvbnRhaW5lcik7XHJcblxyXG4gIGNvbnN0IGNhbmNlbFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGNhbmNlbFByb2plY3RCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjYW5jZWwtcHJvamVjdC1idXR0b25cIik7XHJcbiAgY2FuY2VsUHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiWFwiO1xyXG4gIGNhbmNlbEJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjYW5jZWxQcm9qZWN0QnV0dG9uKTtcclxuXHJcbiAgY2FuY2VsUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVtb3ZlUHJvamVjdEZvcm0pO1xyXG5cclxuICBjb25zdCBuZXdQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xyXG4gIG5ld1Byb2plY3RGb3JtLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmV3LXByb2plY3QtZm9ybVwiKTtcclxuICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Byb2plY3RGb3JtKTtcclxuXHJcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIHByb2plY3RUaXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3QtdGl0bGVcIik7XHJcbiAgcHJvamVjdFRpdGxlLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRW50ZXIgUHJvamVjdCBUaXRsZVwiKTtcclxuICBuZXdQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xyXG5cclxuICBjb25zdCBzdWJtaXRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBzdWJtaXRQcm9qZWN0QnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3VibWl0LXByb2plY3QtYnV0dG9uXCIpO1xyXG4gIHN1Ym1pdFByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSBcIlN1Ym1pdCBQcm9qZWN0XCI7XHJcbiAgbmV3UHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0UHJvamVjdEJ1dHRvbik7XHJcblxyXG4gIHN1Ym1pdFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN1Ym1pdFByb2plY3RGb3JtKTtcclxufTtcclxuXHJcbmNvbnN0IHN1Ym1pdFByb2plY3RGb3JtID0gKGV2ZW50KSA9PiB7XHJcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICBcclxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC10aXRsZVwiKS52YWx1ZTtcclxuXHJcbiAgY29uc3QgbmV3UHJvamVjdEFycmF5ID0gcHJvamVjdC5zbGljZSgpO1xyXG4gIG5ld1Byb2plY3RBcnJheS50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG4gIGNvbnNvbGUubG9nKG5ld1Byb2plY3RBcnJheSk7XHJcbiAgcHJvamVjdExpc3RBcnJheS5wdXNoKG5ld1Byb2plY3RBcnJheSk7XHJcblxyXG4gIHVwZGF0ZVByb2plY3RMaXN0KCk7XHJcbiAgcmVtb3ZlUHJvamVjdEZvcm0oKTtcclxufTtcclxuXHJcbmNvbnN0IHJlbW92ZVByb2plY3RGb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IHByb2plY3RCYWNrZ3JvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWJhY2tncm91bmRcIik7XHJcbiAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChwcm9qZWN0QmFja2dyb3VuZCk7XHJcblxyXG4gIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm0tY29udGFpbmVyXCIpO1xyXG4gIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZm9ybUNvbnRhaW5lcik7XHJcbn07XHJcblxyXG5leHBvcnQgeyBhZGRQcm9qZWN0Rm9ybSwgc3VibWl0UHJvamVjdEZvcm0gfTsiLCJpbXBvcnQgeyBkZWZhdWx0UHJvamVjdCB9IGZyb20gXCIuXCI7XHJcbmltcG9ydCB7IHByb2plY3RMaXN0QXJyYXkgfSBmcm9tIFwiLlwiO1xyXG5pbXBvcnQgeyB1cGRhdGVQcm9qZWN0TGlzdCB9IGZyb20gXCIuL3Nob3ctdG9kby1saXN0XCI7XHJcblxyXG5jb25zdCBUb2RvID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgbG93UHJpb3JpdHksIGhpZ2hQcmlvcml0eSkgPT4ge1xyXG4gIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgbG93UHJpb3JpdHksIGhpZ2hQcmlvcml0eSB9O1xyXG59O1xyXG5cclxuY29uc3QgYWRkVG9kb0Zvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgdG9kb0JhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHRvZG9CYWNrZ3JvdW5kLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kby1iYWNrZ3JvdW5kXCIpO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodG9kb0JhY2tncm91bmQpO1xyXG5cclxuICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBmb3JtQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZm9ybS1jb250YWluZXJcIik7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcclxuXHJcbiAgY29uc3QgY2FuY2VsQnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjYW5jZWxCdXR0b25Db250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjYW5jZWwtdG9kby1idXR0b24tY29udGFpbmVyXCIpO1xyXG4gIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uQ29udGFpbmVyKTtcclxuXHJcbiAgY29uc3QgY2FuY2VsVG9kb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgY2FuY2VsVG9kb0J1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNhbmNlbC10b2RvLWJ1dHRvblwiKTtcclxuICBjYW5jZWxUb2RvQnV0dG9uLnRleHRDb250ZW50ID0gXCJYXCI7XHJcbiAgY2FuY2VsQnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhbmNlbFRvZG9CdXR0b24pO1xyXG5cclxuICBjYW5jZWxUb2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW1vdmVUb2RvRm9ybSk7XHJcblxyXG4gIGNvbnN0IG5ld1RvZG9Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XHJcbiAgbmV3VG9kb0Zvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuZXctdG9kby1mb3JtXCIpO1xyXG4gIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQobmV3VG9kb0Zvcm0pO1xyXG5cclxuICBjb25zdCB0aXRsZUZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpO1xyXG4gIHRpdGxlRmllbGRzZXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0aXRsZS1maWVsZHNldFwiKTtcclxuICBuZXdUb2RvRm9ybS5hcHBlbmRDaGlsZCh0aXRsZUZpZWxkc2V0KTtcclxuXHJcbiAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIHRvZG9UaXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG8tdGl0bGUtaW5wdXRcIik7XHJcbiAgdG9kb1RpdGxlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xyXG4gIHRvZG9UaXRsZS5zZXRBdHRyaWJ1dGUoXCJtYXhsZW5ndGhcIiwgXCI1MFwiKTtcclxuICB0b2RvVGl0bGUuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJFbnRlcmUgVG9kbyBUaXRsZVwiKTtcclxuICB0b2RvVGl0bGUucmVxdWlyZWQgPSB0cnVlO1xyXG4gIHRpdGxlRmllbGRzZXQuYXBwZW5kQ2hpbGQodG9kb1RpdGxlKTtcclxuXHJcbiAgY29uc3QgZGVzY3JpcHRpb25GaWVsZHNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKTtcclxuICBkZXNjcmlwdGlvbkZpZWxkc2V0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGVzY3JpcHRpb24tZmllbGRzZXRcIik7XHJcbiAgbmV3VG9kb0Zvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25GaWVsZHNldCk7XHJcblxyXG4gIGNvbnN0IHRvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcclxuICB0b2RvRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkZXNjcmlwdGlvbi10ZXh0YXJlYVwiKTtcclxuICB0b2RvRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJEZXNjcmlwdGlvbjpcIik7XHJcbiAgZGVzY3JpcHRpb25GaWVsZHNldC5hcHBlbmRDaGlsZCh0b2RvRGVzY3JpcHRpb24pO1xyXG5cclxuICBjb25zdCBkdWVEYXRlRmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIik7XHJcbiAgZHVlRGF0ZUZpZWxkc2V0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZHVlLWRhdGUtZmllbGRzZXRcIik7XHJcbiAgbmV3VG9kb0Zvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZUZpZWxkc2V0KTtcclxuXHJcbiAgY29uc3QgZHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gIGR1ZURhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0b2RvLWR1ZS1kYXRlLWlucHV0XCIpO1xyXG4gIGR1ZURhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImR1ZS1kYXRlLWxhYmVsXCIpO1xyXG4gIGR1ZURhdGVMYWJlbC50ZXh0Q29udGVudCA9IFwiRHVlIERhdGU6XCI7XHJcbiAgZHVlRGF0ZUZpZWxkc2V0LmFwcGVuZENoaWxkKGR1ZURhdGVMYWJlbCk7XHJcblxyXG4gIGNvbnN0IHRvZG9EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIHRvZG9EdWVEYXRlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kby1kdWUtZGF0ZS1pbnB1dFwiKTtcclxuICB0b2RvRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcclxuICB0b2RvRHVlRGF0ZS5yZXF1aXJlZCA9IHRydWU7XHJcbiAgZHVlRGF0ZUZpZWxkc2V0LmFwcGVuZENoaWxkKHRvZG9EdWVEYXRlKTtcclxuXHJcbiAgY29uc3QgcHJpb3JpdHlGaWVsZHNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKTtcclxuICBwcmlvcml0eUZpZWxkc2V0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJpb3JpdHktZmllbGRzZXRcIik7XHJcbiAgbmV3VG9kb0Zvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlGaWVsZHNldCk7XHJcblxyXG4gIGNvbnN0IHByaW9yaXR5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHByaW9yaXR5VGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcmlvcml0eS10aXRsZVwiKTtcclxuICBwcmlvcml0eVRpdGxlLnRleHRDb250ZW50ID0gXCJQcmlvcml0eTpcIjtcclxuICBwcmlvcml0eUZpZWxkc2V0LmFwcGVuZENoaWxkKHByaW9yaXR5VGl0bGUpO1xyXG5cclxuICBjb25zdCBsb3dQcmlvcml0eU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBsb3dQcmlvcml0eU9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFkaW9cIik7XHJcbiAgbG93UHJpb3JpdHlPcHRpb24uY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LW9wdGlvblwiKTtcclxuICBsb3dQcmlvcml0eU9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJpb3JpdHktb3B0aW9uXCIpO1xyXG4gIGxvd1ByaW9yaXR5T3B0aW9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibG93LXByaW9yaXR5XCIpO1xyXG4gIGxvd1ByaW9yaXR5T3B0aW9uLnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIiwgXCJcIik7XHJcbiAgcHJpb3JpdHlUaXRsZS5hcHBlbmRDaGlsZChsb3dQcmlvcml0eU9wdGlvbik7XHJcblxyXG4gIGNvbnN0IGxvd1ByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgbG93UHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJsb3ctcHJpb3JpdHlcIik7XHJcbiAgbG93UHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxvdy1wcmlvcml0eS1sYWJlbFwiKTtcclxuICBsb3dQcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gXCJMT1dcIjtcclxuICBwcmlvcml0eVRpdGxlLmFwcGVuZENoaWxkKGxvd1ByaW9yaXR5TGFiZWwpO1xyXG5cclxuICBjb25zdCBoaWdoUHJpb3JpdHlPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgaGlnaFByaW9yaXR5T3B0aW9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcclxuICBoaWdoUHJpb3JpdHlPcHRpb24uY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LW9wdGlvblwiKTtcclxuICBoaWdoUHJpb3JpdHlPcHRpb24uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByaW9yaXR5LW9wdGlvblwiKTtcclxuICBoaWdoUHJpb3JpdHlPcHRpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJoaWdoLXByaW9yaXR5XCIpO1xyXG4gIHByaW9yaXR5VGl0bGUuYXBwZW5kQ2hpbGQoaGlnaFByaW9yaXR5T3B0aW9uKTtcclxuXHJcbiAgY29uc3QgaGlnaFByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgaGlnaFByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiaGlnaC1wcmlvcml0eVwiKTtcclxuICBoaWdoUHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhpZ2gtcHJpb3JpdHktbGFiZWxcIik7XHJcbiAgaGlnaFByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSBcIkhJR0hcIjtcclxuICBwcmlvcml0eVRpdGxlLmFwcGVuZENoaWxkKGhpZ2hQcmlvcml0eUxhYmVsKTtcclxuXHJcbiAgY29uc3QgcHJvamVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpO1xyXG4gIHByb2plY3RMYWJlbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNlbGVjdC1wcm9qZWN0LWxhYmVsXCIpO1xyXG4gIHByb2plY3RMYWJlbC50ZXh0Q29udGVudCA9IFwiQ2hvb3NlIFByb2plY3QgdG8gYWRkIFRvZG86XCI7XHJcbiAgbmV3VG9kb0Zvcm0uYXBwZW5kQ2hpbGQocHJvamVjdExhYmVsKTtcclxuXHJcbiAgY29uc3QgcHJvamVjdEZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpO1xyXG4gIHByb2plY3RGaWVsZHNldC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3QtZmllbGRzZXRcIik7XHJcbiAgbmV3VG9kb0Zvcm0uYXBwZW5kQ2hpbGQocHJvamVjdEZpZWxkc2V0KTtcclxuXHJcbiAgY29uc3QgZGVmYXVsdFByb2plY3RSYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBkZWZhdWx0UHJvamVjdFJhZGlvLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcclxuICBkZWZhdWx0UHJvamVjdFJhZGlvLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGVmYXVsdC1wcm9qZWN0LW5hbWVcIik7XHJcbiAgZGVmYXVsdFByb2plY3RSYWRpby5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1uYW1lXCIpO1xyXG4gIGRlZmF1bHRQcm9qZWN0UmFkaW8uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByb2plY3QtbmFtZVwiKTtcclxuICBkZWZhdWx0UHJvamVjdFJhZGlvLnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIiwgXCJcIik7XHJcbiAgcHJvamVjdEZpZWxkc2V0LmFwcGVuZENoaWxkKGRlZmF1bHRQcm9qZWN0UmFkaW8pO1xyXG5cclxuICBjb25zdCBkZWZhdWx0UHJvamVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gIGRlZmF1bHRQcm9qZWN0TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZGVmYXVsdC1wcm9qZWN0LW5hbWVcIik7XHJcbiAgZGVmYXVsdFByb2plY3RMYWJlbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRlZmF1bHQtcHJvamVjdC1sYWJlbFwiKTtcclxuICBkZWZhdWx0UHJvamVjdExhYmVsLnRleHRDb250ZW50ID0gZGVmYXVsdFByb2plY3QudGV4dENvbnRlbnQ7XHJcbiAgcHJvamVjdEZpZWxkc2V0LmFwcGVuZENoaWxkKGRlZmF1bHRQcm9qZWN0TGFiZWwpO1xyXG5cclxuICBmb3IgKGxldCBpID0gMTsgaSA8IHByb2plY3RMaXN0QXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IG5ld1Byb2plY3RSYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIG5ld1Byb2plY3RSYWRpby5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFkaW9cIik7XHJcbiAgICBuZXdQcm9qZWN0UmFkaW8uY2xhc3NMaXN0LmFkZChcInByb2plY3QtbmFtZVwiKTtcclxuICAgIG5ld1Byb2plY3RSYWRpby5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJvamVjdC1uYW1lXCIpO1xyXG4gICAgbmV3UHJvamVjdFJhZGlvLnNldEF0dHJpYnV0ZShcImlkXCIsIGBwcm9qZWN0LWluZGV4LSR7aX1gKTtcclxuICAgIHByb2plY3RGaWVsZHNldC5hcHBlbmRDaGlsZChuZXdQcm9qZWN0UmFkaW8pO1xyXG5cclxuICAgIGNvbnN0IG5ld1Byb2plY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgIG5ld1Byb2plY3RMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgYHByb2plY3QtaW5kZXgtJHtpfWApO1xyXG4gICAgbmV3UHJvamVjdExhYmVsLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWxhYmVsXCIpO1xyXG4gICAgbmV3UHJvamVjdExhYmVsLnRleHRDb250ZW50ID0gcHJvamVjdExpc3RBcnJheVtpXS50ZXh0Q29udGVudDtcclxuICAgIHByb2plY3RGaWVsZHNldC5hcHBlbmRDaGlsZChuZXdQcm9qZWN0TGFiZWwpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHN1Ym1pdFRvZG9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIHN1Ym1pdFRvZG9CdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzdWJtaXQtcHJvamVjdC1idXR0b25cIik7XHJcbiAgc3VibWl0VG9kb0J1dHRvbi50ZXh0Q29udGVudCA9IFwiU3VibWl0IFRvZG9cIjtcclxuICBuZXdUb2RvRm9ybS5hcHBlbmRDaGlsZChzdWJtaXRUb2RvQnV0dG9uKTtcclxuXHJcbiAgc3VibWl0VG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3VibWl0VG9kb0Zvcm0pO1xyXG59O1xyXG5cclxuY29uc3Qgc3VibWl0VG9kb0Zvcm0gPSAoZXZlbnQpID0+IHtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby10aXRsZS1pbnB1dFwiKS52YWx1ZTtcclxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVzY3JpcHRpb24tdGV4dGFyZWFcIikudmFsdWU7XHJcbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1kdWUtZGF0ZS1pbnB1dFwiKS52YWx1ZTtcclxuICBjb25zdCBsb3dQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG93LXByaW9yaXR5XCIpLmNoZWNrZWQ7XHJcbiAgY29uc3QgaGlnaFByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoaWdoLXByaW9yaXR5XCIpLmNoZWNrZWQ7XHJcblxyXG4gIGNvbnN0IG5ld1RvZG8gPSBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgbG93UHJpb3JpdHksIGhpZ2hQcmlvcml0eSk7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdExpc3RBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgbmV3UHJvamVjdFJhZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0LW5hbWVcIik7XHJcbiAgICBpZiAobmV3UHJvamVjdFJhZGlvW2ldLmNoZWNrZWQgPT0gdHJ1ZSkge1xyXG4gICAgICBwcm9qZWN0TGlzdEFycmF5W2ldLnB1c2gobmV3VG9kbyk7XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRvZG9zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2Rvcy1jb250YWluZXJcIik7XHJcbiAgdG9kb3NDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgdXBkYXRlUHJvamVjdExpc3QoKTtcclxuICByZW1vdmVUb2RvRm9ybSgpO1xyXG59O1xyXG5cclxuY29uc3QgcmVtb3ZlVG9kb0Zvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgdG9kb0JhY2tncm91bmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tYmFja2dyb3VuZFwiKTtcclxuICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRvZG9CYWNrZ3JvdW5kKTtcclxuXHJcbiAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybS1jb250YWluZXJcIik7XHJcbiAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChmb3JtQ29udGFpbmVyKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IGFkZFRvZG9Gb3JtLCBzdWJtaXRUb2RvRm9ybSB9OyIsImltcG9ydCB7IHByb2plY3RMaXN0QXJyYXkgfSBmcm9tIFwiLlwiO1xyXG5cclxuY29uc3QgdXBkYXRlUHJvamVjdExpc3QgPSAoKSA9PiB7XHJcbiAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtbGlzdFwiKTtcclxuICBwcm9qZWN0TGlzdC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIFxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdExpc3RBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgcHJvamVjdExpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHByb2plY3RMaXN0SXRlbS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1saXN0LWl0ZW1cIik7XHJcbiAgICBwcm9qZWN0TGlzdEl0ZW0uc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWlkXCIsIGkpO1xyXG4gICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQocHJvamVjdExpc3RJdGVtKTtcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0SXRlbVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcHJvamVjdEl0ZW1UZXh0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWl0ZW0tdGV4dFwiKTtcclxuICAgIHByb2plY3RJdGVtVGV4dC50ZXh0Q29udGVudCA9IHByb2plY3RMaXN0QXJyYXlbaV0udGV4dENvbnRlbnQudG9VcHBlckNhc2UoKTtcclxuICAgIHByb2plY3RMaXN0SXRlbS5hcHBlbmRDaGlsZChwcm9qZWN0SXRlbVRleHQpO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3RJdGVtQW1vdW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHByb2plY3RJdGVtQW1vdW50LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWl0ZW0tYW1vdW50XCIpO1xyXG4gICAgcHJvamVjdEl0ZW1BbW91bnQudGV4dENvbnRlbnQgPSBwcm9qZWN0TGlzdEFycmF5W2ldLmxlbmd0aDtcclxuICAgIHByb2plY3RMaXN0SXRlbS5hcHBlbmRDaGlsZChwcm9qZWN0SXRlbUFtb3VudCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcHJvamVjdExpc3RJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0LWxpc3QtaXRlbVwiKTtcclxuXHJcbiAgcHJvamVjdExpc3RJdGVtLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIHNob3dUb2Rvc0Zyb21Qcm9qZWN0ICgpIHtcclxuICAgICAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gcHJvamVjdExpc3RBcnJheVtwcm9qZWN0LmRhdGFzZXQucHJvamVjdElkXTtcclxuXHJcbiAgICAgIGNvbnN0IHNob3dUb2Rvc0xpc3QgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG9kb3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9zLWNvbnRhaW5lclwiKTtcclxuICAgICAgICB0b2Rvc0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdGVkUHJvamVjdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgY29uc3QgdG9kb0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgdG9kb0l0ZW0uY2xhc3NMaXN0LmFkZChcInRvZG8taXRlbVwiKTtcclxuICAgICAgICAgIHRvZG9JdGVtLnNldEF0dHJpYnV0ZShcImRhdGEtdG9kby1pZFwiLCBpKTtcclxuICAgICAgICAgIHRvZG9zQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9JdGVtKTtcclxuXHJcbiAgICAgICAgICBjb25zdCB0b2RvSXRlbUxlZnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgdG9kb0l0ZW1MZWZ0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWl0ZW0tbGVmdC1jb250YWluZXJcIik7XHJcbiAgICAgICAgICB0b2RvSXRlbS5hcHBlbmRDaGlsZCh0b2RvSXRlbUxlZnRDb250YWluZXIpO1xyXG5cclxuICAgICAgICAgIHRvZG9JdGVtTGVmdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gc2hvd1RvZG9JdGVtICgpIHtcclxuICAgICAgICAgICAgY29uc3QgdG9kb0JhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICB0b2RvQmFja2dyb3VuZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG8tYmFja2dyb3VuZFwiKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0b2RvQmFja2dyb3VuZCk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGZvcm1Db250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmb3JtLWNvbnRhaW5lclwiKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBjYW5jZWxCdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25Db250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjYW5jZWwtcHJvamVjdC1idXR0b24tY29udGFpbmVyXCIpO1xyXG4gICAgICAgICAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbkNvbnRhaW5lcik7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgZXhpdFRvZG9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICBleGl0VG9kb0J1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImV4aXQtdG9kby1idXR0b25cIik7XHJcbiAgICAgICAgICAgIGV4aXRUb2RvQnV0dG9uLnRleHRDb250ZW50ID0gXCJYXCI7XHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChleGl0VG9kb0J1dHRvbik7XHJcblxyXG4gICAgICAgICAgICBleGl0VG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXhpdFRvZG8pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdG9kb0RldGFpbHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICB0b2RvRGV0YWlsc0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG8tZGV0YWlscy1jb250YWluZXJcIik7XHJcbiAgICAgICAgICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0RldGFpbHNDb250YWluZXIpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkVG9kb0l0ZW1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkVG9kb0l0ZW1UaXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNlbGVjdGVkLXRvZG8taXRlbS10aXRsZVwiKTtcclxuICAgICAgICAgICAgc2VsZWN0ZWRUb2RvSXRlbVRpdGxlLnRleHRDb250ZW50ID0gc2VsZWN0ZWRQcm9qZWN0W2ldLnRpdGxlO1xyXG4gICAgICAgICAgICB0b2RvRGV0YWlsc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxlY3RlZFRvZG9JdGVtVGl0bGUpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBwcmlvcml0eUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByaW9yaXR5LWNvbnRhaW5lclwiKTtcclxuICAgICAgICAgICAgcHJpb3JpdHlDb250YWluZXIudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OiBcIjtcclxuICAgICAgICAgICAgdG9kb0RldGFpbHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlDb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkUHJvamVjdFtpXS5oaWdoUHJpb3JpdHkgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGhpZ2hQcmlvcml0eUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgaGlnaFByaW9yaXR5Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaGlnaC1wcmlvcml0eS1jb250YWluZXJcIik7XHJcbiAgICAgICAgICAgICAgaGlnaFByaW9yaXR5Q29udGFpbmVyLnRleHRDb250ZW50ID0gXCJISUdIXCI7XHJcbiAgICAgICAgICAgICAgcHJpb3JpdHlDb250YWluZXIuYXBwZW5kQ2hpbGQoaGlnaFByaW9yaXR5Q29udGFpbmVyKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZFByb2plY3RbaV0ubG93UHJpb3JpdHkgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGxvd1ByaW9yaXR5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICBsb3dQcmlvcml0eUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxvdy1wcmlvcml0eS1jb250YWluZXJcIik7XHJcbiAgICAgICAgICAgICAgbG93UHJpb3JpdHlDb250YWluZXIudGV4dENvbnRlbnQgPSBcIkxPV1wiO1xyXG4gICAgICAgICAgICAgIHByaW9yaXR5Q29udGFpbmVyLmFwcGVuZENoaWxkKGxvd1ByaW9yaXR5Q29udGFpbmVyKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkVG9kb0l0ZW1EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgc2VsZWN0ZWRUb2RvSXRlbUR1ZURhdGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzZWxlY3RlZC10b2RvLWl0ZW0tZHVlLWRhdGVcIik7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkVG9kb0l0ZW1EdWVEYXRlLnRleHRDb250ZW50ID0gYER1ZSBkYXRlOiAke3NlbGVjdGVkUHJvamVjdFtpXS5kdWVEYXRlfWA7XHJcbiAgICAgICAgICAgIHRvZG9EZXRhaWxzQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlbGVjdGVkVG9kb0l0ZW1EdWVEYXRlKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkVG9kb0l0ZW1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkVG9kb0l0ZW1EZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNlbGVjdGVkLXRvZG8taXRlbS1kZXNjcmlwdGlvblwiKTtcclxuICAgICAgICAgICAgc2VsZWN0ZWRUb2RvSXRlbURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gYERlc2NyaXB0aW9uOiAke3NlbGVjdGVkUHJvamVjdFtpXS5kZXNjcmlwdGlvbn1gO1xyXG4gICAgICAgICAgICB0b2RvRGV0YWlsc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxlY3RlZFRvZG9JdGVtRGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgY29uc3QgdG9kb0l0ZW1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICB0b2RvSXRlbVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWl0ZW0tdGl0bGVcIik7XHJcbiAgICAgICAgICB0b2RvSXRlbVRpdGxlLnRleHRDb250ZW50ID0gc2VsZWN0ZWRQcm9qZWN0W2ldLnRpdGxlO1xyXG4gICAgICAgICAgdG9kb0l0ZW1MZWZ0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9JdGVtVGl0bGUpO1xyXG5cclxuICAgICAgICAgIGlmIChzZWxlY3RlZFByb2plY3RbaV0uaGlnaFByaW9yaXR5ID09IHRydWUpIHtcclxuICAgICAgICAgICAgY29uc3QgdG9kb0l0ZW1IaWdoUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICB0b2RvSXRlbUhpZ2hQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwidG9kby1pdGVtLWhpZ2gtcHJpb3JpdHlcIik7XHJcbiAgICAgICAgICAgIHRvZG9JdGVtSGlnaFByaW9yaXR5LnRleHRDb250ZW50ID0gXCJISUdIXCI7XHJcbiAgICAgICAgICAgIHRvZG9JdGVtTGVmdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvSXRlbUhpZ2hQcmlvcml0eSk7XHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIGNvbnN0IHRvZG9JdGVtUmlnaHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgdG9kb0l0ZW1SaWdodENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidG9kby1pdGVtLXJpZ2h0LWNvbnRhaW5lclwiKTtcclxuICAgICAgICAgIHRvZG9JdGVtLmFwcGVuZENoaWxkKHRvZG9JdGVtUmlnaHRDb250YWluZXIpO1xyXG5cclxuICAgICAgICAgIGNvbnN0IGl0ZW1EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgIGl0ZW1EdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWl0ZW0tZHVlLWRhdGVcIik7XHJcbiAgICAgICAgICBpdGVtRHVlRGF0ZS50ZXh0Q29udGVudCA9IHNlbGVjdGVkUHJvamVjdFtpXS5kdWVEYXRlO1xyXG4gICAgICAgICAgdG9kb0l0ZW1SaWdodENvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtRHVlRGF0ZSk7XHJcblxyXG4gICAgICAgICAgY29uc3QgZWRpdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2xhc3NcIik7XHJcbiAgICAgICAgICBlZGl0SWNvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVkaXQtaWNvblwiKTtcclxuICAgICAgICAgIGVkaXRJY29uLmNsYXNzTGlzdC5hZGQoXCJpZFwiLCBcIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIik7XHJcbiAgICAgICAgICBlZGl0SWNvbi50ZXh0Q29udGVudCA9IFwiZWRpdFwiO1xyXG4gICAgICAgICAgdG9kb0l0ZW1SaWdodENvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0SWNvbik7XHJcblxyXG4gICAgICAgICAgZWRpdEljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGVkaXRUb2RvSXRlbSk7XHJcblxyXG4gICAgICAgICAgZnVuY3Rpb24gZWRpdFRvZG9JdGVtICgpIHtcclxuICAgICAgICAgICAgY29uc3QgdG9kb0JhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICB0b2RvQmFja2dyb3VuZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG8tYmFja2dyb3VuZFwiKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0b2RvQmFja2dyb3VuZCk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGZvcm1Db250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmb3JtLWNvbnRhaW5lclwiKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBjYW5jZWxCdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25Db250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjYW5jZWwtcHJvamVjdC1idXR0b24tY29udGFpbmVyXCIpO1xyXG4gICAgICAgICAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbkNvbnRhaW5lcik7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgZXhpdFRvZG9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICBleGl0VG9kb0J1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImV4aXQtdG9kby1idXR0b25cIik7XHJcbiAgICAgICAgICAgIGV4aXRUb2RvQnV0dG9uLnRleHRDb250ZW50ID0gXCJYXCI7XHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChleGl0VG9kb0J1dHRvbik7XHJcblxyXG4gICAgICAgICAgICBleGl0VG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXhpdFRvZG8pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdG9kb0RldGFpbHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICB0b2RvRGV0YWlsc0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG8tZGV0YWlscy1jb250YWluZXJcIik7XHJcbiAgICAgICAgICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0RldGFpbHNDb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRUaXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgc2VsZWN0ZWRUaXRsZUxhYmVsLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2VsZWN0ZWQtdGl0bGUtbGFiZWxcIik7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkVGl0bGVMYWJlbC50ZXh0Q29udGVudCA9IFwiVGl0bGVcIjtcclxuICAgICAgICAgICAgdG9kb0RldGFpbHNDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZWN0ZWRUaXRsZUxhYmVsKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZFRvZG9JdGVtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkVG9kb0l0ZW1UaXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNlbGVjdGVkLXRpdGxlLWlucHV0XCIpO1xyXG4gICAgICAgICAgICBzZWxlY3RlZFRvZG9JdGVtVGl0bGUudmFsdWUgPSBzZWxlY3RlZFByb2plY3RbaV0udGl0bGU7XHJcbiAgICAgICAgICAgIHRvZG9EZXRhaWxzQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlbGVjdGVkVG9kb0l0ZW1UaXRsZSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZER1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkRHVlRGF0ZUxhYmVsLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2VsZWN0ZWQtZHVlLWRhdGUtbGFiZWxcIik7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkRHVlRGF0ZUxhYmVsLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZVwiO1xyXG4gICAgICAgICAgICB0b2RvRGV0YWlsc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxlY3RlZER1ZURhdGVMYWJlbCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZFRvZG9JdGVtRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICAgICAgc2VsZWN0ZWRUb2RvSXRlbUR1ZURhdGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzZWxlY3RlZC1kdWUtZGF0ZS1pbnB1dFwiKTtcclxuICAgICAgICAgICAgc2VsZWN0ZWRUb2RvSXRlbUR1ZURhdGUudmFsdWUgPSBzZWxlY3RlZFByb2plY3RbaV0uZHVlRGF0ZTtcclxuICAgICAgICAgICAgdG9kb0RldGFpbHNDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZWN0ZWRUb2RvSXRlbUR1ZURhdGUpO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWREZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgc2VsZWN0ZWREZXNjcmlwdGlvbkxhYmVsLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2VsZWN0ZWQtZGVzY3JpcHRpb24tbGFiZWxcIik7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkRGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb25cIjtcclxuICAgICAgICAgICAgdG9kb0RldGFpbHNDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZWN0ZWREZXNjcmlwdGlvbkxhYmVsKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkVG9kb0l0ZW1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICAgICAgc2VsZWN0ZWRUb2RvSXRlbURlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2VsZWN0ZWQtZGVzY3JpcHRpb24taW5wdXRcIik7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkVG9kb0l0ZW1EZXNjcmlwdGlvbi52YWx1ZSA9IHNlbGVjdGVkUHJvamVjdFtpXS5kZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgdG9kb0RldGFpbHNDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZWN0ZWRUb2RvSXRlbURlc2NyaXB0aW9uKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkUHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkUHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNlbGVjdGVkLXByaW9yaXR5LWxhYmVsXCIpO1xyXG4gICAgICAgICAgICBzZWxlY3RlZFByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5XCI7XHJcbiAgICAgICAgICAgIHRvZG9EZXRhaWxzQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlbGVjdGVkUHJpb3JpdHlMYWJlbCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZExvd1ByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkTG93UHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxvdy1wcmlvcml0eS1sYWJlbFwiKTtcclxuICAgICAgICAgICAgc2VsZWN0ZWRMb3dQcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImxvdy1wcmlvcml0eVwiKTtcclxuICAgICAgICAgICAgc2VsZWN0ZWRMb3dQcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gXCJMT1dcIjtcclxuICAgICAgICAgICAgdG9kb0RldGFpbHNDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZWN0ZWRMb3dQcmlvcml0eUxhYmVsKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkVG9kb0l0ZW1Mb3dQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICAgICAgc2VsZWN0ZWRUb2RvSXRlbUxvd1ByaW9yaXR5LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcclxuICAgICAgICAgICAgc2VsZWN0ZWRUb2RvSXRlbUxvd1ByaW9yaXR5LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibG93LXByaW9yaXR5XCIpO1xyXG4gICAgICAgICAgICBzZWxlY3RlZFRvZG9JdGVtTG93UHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LW9wdGlvblwiKTtcclxuICAgICAgICAgICAgc2VsZWN0ZWRUb2RvSXRlbUxvd1ByaW9yaXR5LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcmlvcml0eS1vcHRpb25cIik7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkVG9kb0l0ZW1Mb3dQcmlvcml0eS5jaGVja2VkID0gc2VsZWN0ZWRQcm9qZWN0W2ldLmxvd1ByaW9yaXR5O1xyXG4gICAgICAgICAgICB0b2RvRGV0YWlsc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxlY3RlZFRvZG9JdGVtTG93UHJpb3JpdHkpO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRIaWdoUHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgICAgICAgICAgc2VsZWN0ZWRIaWdoUHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhpZ2gtcHJpb3JpdHktbGFiZWxcIik7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkSGlnaFByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiaGlnaC1wcmlvcml0eVwiKTtcclxuICAgICAgICAgICAgc2VsZWN0ZWRIaWdoUHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9IFwiSElHSFwiO1xyXG4gICAgICAgICAgICB0b2RvRGV0YWlsc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxlY3RlZEhpZ2hQcmlvcml0eUxhYmVsKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkVG9kb0l0ZW1IaWdoUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkVG9kb0l0ZW1IaWdoUHJpb3JpdHkuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhZGlvXCIpO1xyXG4gICAgICAgICAgICBzZWxlY3RlZFRvZG9JdGVtSGlnaFByaW9yaXR5LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaGlnaC1wcmlvcml0eVwiKTtcclxuICAgICAgICAgICAgc2VsZWN0ZWRUb2RvSXRlbUhpZ2hQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktb3B0aW9uXCIpO1xyXG4gICAgICAgICAgICBzZWxlY3RlZFRvZG9JdGVtSGlnaFByaW9yaXR5LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcmlvcml0eS1vcHRpb25cIik7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkVG9kb0l0ZW1IaWdoUHJpb3JpdHkuY2hlY2tlZCA9IHNlbGVjdGVkUHJvamVjdFtpXS5oaWdoUHJpb3JpdHk7XHJcbiAgICAgICAgICAgIHRvZG9EZXRhaWxzQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlbGVjdGVkVG9kb0l0ZW1IaWdoUHJpb3JpdHkpO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc3VibWl0RWRpdFRvZG9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICBzdWJtaXRFZGl0VG9kb0J1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN1Ym1pdC10b2RvLWVkaXQtYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICBzdWJtaXRFZGl0VG9kb0J1dHRvbi50ZXh0Q29udGVudCA9IFwiU3VibWl0IEVkaXRcIjtcclxuICAgICAgICAgICAgdG9kb0RldGFpbHNDb250YWluZXIuYXBwZW5kQ2hpbGQoc3VibWl0RWRpdFRvZG9CdXR0b24pO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc3VibWl0VG9kb0VkaXRGb3JtID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgY29uc3QgRWRpdGVkVG9kbyA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGxvd1ByaW9yaXR5LCBoaWdoUHJpb3JpdHkpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgbG93UHJpb3JpdHksIGhpZ2hQcmlvcml0eSB9O1xyXG4gICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3RlZC10aXRsZS1pbnB1dFwiKS52YWx1ZTtcclxuICAgICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VsZWN0ZWQtZGVzY3JpcHRpb24taW5wdXRcIikudmFsdWU7XHJcbiAgICAgICAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VsZWN0ZWQtZHVlLWRhdGUtaW5wdXRcIikudmFsdWU7XHJcbiAgICAgICAgICAgICAgY29uc3QgbG93UHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvdy1wcmlvcml0eVwiKS5jaGVja2VkO1xyXG4gICAgICAgICAgICAgIGNvbnN0IGhpZ2hQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGlnaC1wcmlvcml0eVwiKS5jaGVja2VkO1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIGNvbnN0IHRvZG9FZGl0ID0gRWRpdGVkVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGxvd1ByaW9yaXR5LCBoaWdoUHJpb3JpdHkpO1xyXG5cclxuICAgICAgICAgICAgICBzZWxlY3RlZFByb2plY3Quc3BsaWNlKHRvZG9JdGVtLmRhdGFzZXQudG9kb0lkLCAxLCB0b2RvRWRpdCk7XHJcbiAgICAgICAgICAgICAgc2hvd1RvZG9zTGlzdCgpO1xyXG4gICAgICAgICAgICAgIHVwZGF0ZVByb2plY3RMaXN0KCk7XHJcblxyXG4gICAgICAgICAgICAgIGNvbnN0IHRvZG9CYWNrZ3JvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLWJhY2tncm91bmRcIik7XHJcbiAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0b2RvQmFja2dyb3VuZCk7XHJcblxyXG4gICAgICAgICAgICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm0tY29udGFpbmVyXCIpO1xyXG4gICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZm9ybUNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBzdWJtaXRFZGl0VG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3VibWl0VG9kb0VkaXRGb3JtKTtcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgY29uc3QgZGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjbGFzc1wiKTtcclxuICAgICAgICAgIGRlbGV0ZUljb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkZWxldGUtaWNvblwiKTtcclxuICAgICAgICAgIGRlbGV0ZUljb24uY2xhc3NMaXN0LmFkZChcImlkXCIsIFwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiKTtcclxuICAgICAgICAgIGRlbGV0ZUljb24udGV4dENvbnRlbnQgPSBcImRlbGV0ZVwiO1xyXG4gICAgICAgICAgdG9kb0l0ZW1SaWdodENvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVJY29uKTtcclxuXHJcbiAgICAgICAgICBkZWxldGVJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWxldGVUb2RvSXRlbSk7XHJcblxyXG4gICAgICAgICAgZnVuY3Rpb24gZGVsZXRlVG9kb0l0ZW0gKCkge1xyXG4gICAgICAgICAgICB0b2Rvc0NvbnRhaW5lci5yZW1vdmVDaGlsZCh0b2RvSXRlbSk7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkUHJvamVjdC5zcGxpY2UodG9kb0l0ZW0uZGF0YXNldC50b2RvSWQsIDEpO1xyXG4gICAgICAgICAgICBzaG93VG9kb3NMaXN0KCk7XHJcbiAgICAgICAgICAgIHVwZGF0ZVByb2plY3RMaXN0KCk7XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBzaG93VG9kb3NMaXN0KCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGV4aXRUb2RvID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRvZG9CYWNrZ3JvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLWJhY2tncm91bmRcIik7XHJcbiAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0b2RvQmFja2dyb3VuZCk7XHJcblxyXG4gIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm0tY29udGFpbmVyXCIpO1xyXG4gIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZm9ybUNvbnRhaW5lcik7XHJcbn07XHJcblxyXG5leHBvcnQgeyB1cGRhdGVQcm9qZWN0TGlzdCB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
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

#selected-todo-item-due-date {
  padding: 5px 0 0 10px;
  font-size: 12px;
  color: gray;
}

#selected-todo-item-description {
  font-size: 15px;
  padding: 10px;
}

#selected-title-label, #selected-due-date-label, #selected-description-label {
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["::placeholder {\r\n  color: rgb(139, 133, 133);\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Roboto';\r\n  src: url('./Roboto-Regular.ttf') format('ttf'), \r\n  url('./Roboto-Bold.ttf') format('ttf');\r\n  font-weight: 400, 700;\r\n  font-style: normal;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  font-family: 'Roboto';\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n#nav-bar {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  height: 50px;\r\n  font-size: 25px;\r\n  font-weight: bold;\r\n  color: white;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 0 15px;\r\n  background-color: rgb(62, 167, 253);\r\n}\r\n\r\n#left-nav-bar {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n#right-nav-bar {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n#container {\r\n  display: flex;\r\n  margin-top: 50px;\r\n  width: 100vw;\r\n  height: 85vh;\r\n  border-bottom: 1px solid gray;\r\n  box-shadow: 1px 2px 5px 1px rgb(170, 162, 162);\r\n}\r\n\r\n#left-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  flex: 1;\r\n  height: 100%;\r\n  background-color: rgb(229, 224, 224);\r\n  border-right: 1px solid gray;\r\n}\r\n\r\n#project-list {\r\n  width: 100%;\r\n  height: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding-top: 15px;\r\n}\r\n\r\n.project-list-item {\r\n  font-size: 18px;\r\n  font-weight: bold;\r\n  width: 70%;\r\n  border-radius: 5px;\r\n  margin: 2px 0;\r\n  padding: 5px 10px;\r\n  transition: 0.7s;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.project-list-item:hover {\r\n  background-color: rgb(198, 194, 194);\r\n}\r\n\r\n.project-item-text {\r\n  width: 80%;\r\n}\r\n\r\n.project-item-amount {\r\n  padding: 2px;\r\n  border-radius: 50%;\r\n  height: 20px;\r\n  width: 20px;\r\n  color: white;\r\n  background-color: rgb(62, 167, 253);\r\n  font-size: 12px;\r\n  font-weight: bold;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  transition: 0.7s;\r\n}\r\n\r\n#right-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: start;\r\n  height: 100%;\r\n  flex: 3;\r\n}\r\n\r\n#todos-container {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.todo-item {\r\n  padding: 10px;\r\n  width: 80%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin: 5px;\r\n  border-bottom: 1px solid rgb(169, 164, 164);\r\n  transition: 0.7s;\r\n}\r\n\r\n.todo-item:hover {\r\n  cursor: pointer;\r\n  color: white;\r\n  background-color: rgb(62, 167, 253);\r\n}\r\n\r\n.todo-item-left-container {\r\n  display: flex;\r\n  width: 50%;\r\n  height: 100%;\r\n  font-weight: bold;\r\n  align-items: center;\r\n  font-size: 19px;\r\n}\r\n\r\n.todo-item-right-container {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.todo-item-high-priority {\r\n  margin-left: 10px;\r\n  color: white;\r\n  background-color: rgb(215, 45, 45);\r\n  padding: 2px 5px;\r\n  border-radius: 10px;\r\n  font-size: 10px;\r\n  font-weight: bold;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.todo-item-due-date {\r\n  color: gray;\r\n  margin-right: 10px;\r\n}\r\n\r\n#edit-icon, #delete-icon {\r\n  object-fit: cover;\r\n  padding: 5px;\r\n  border-radius: 50%;\r\n  color: white;\r\n  background-color: rgb(62, 167, 253);\r\n  margin: 0 5px 2px 5px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  transition: 0.7s;\r\n}\r\n\r\n#edit-icon:hover, #delete-icon:hover {\r\n  color: rgb(62, 167, 253);\r\n  background-color: white;\r\n}\r\n\r\n#project-background, #todo-background {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  background-color: white;\r\n  opacity: 0.7;\r\n  z-index: 0;\r\n}\r\n\r\n#form-container {\r\n  position: fixed;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  z-index: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n#cancel-todo-button-container {\r\n  width: 400px;\r\n  display: flex;\r\n  justify-content: end;\r\n}\r\n\r\n#cancel-project-button-container {\r\n  width: 250px;\r\n  display: flex;\r\n  justify-content: end;\r\n}\r\n\r\n#new-project-form, #new-todo-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  border-radius: 5px;\r\n  padding: 10px;\r\n  background-color: white;\r\n  border: 1px solid gray;\r\n  box-shadow: 0px 0px 5px 1px rgb(170, 162, 162);\r\n}\r\n\r\n#new-project-button, #check-projects-button, #check-default-project-button {\r\n  width: 150px;\r\n  cursor: pointer;\r\n  border: 1px solid white;\r\n  margin: 0 5px;\r\n  color: rgb(62, 167, 253);\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n  border-radius: 20px;\r\n  padding: 5px 20px;\r\n  background-color: white;\r\n  transition: 0.7s;\r\n}\r\n\r\n#add-todo-button {\r\n  width: 150px;\r\n  cursor: pointer;\r\n  border: 1px solid rgb(62, 167, 253);\r\n  margin: 20px 30px;\r\n  color: rgb(62, 167, 253);\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n  border-radius: 20px;\r\n  padding: 5px 20px;\r\n  background-color: white;\r\n  transition: 0.7s;\r\n}\r\n\r\n#new-project-button:hover, #add-todo-button:hover {\r\n  background-color: rgb(62, 167, 253);\r\n  color: white;\r\n}\r\n\r\nfieldset {\r\n  border: none;\r\n  width: 400px;\r\n  padding: 5px 0;\r\n  margin: 0;\r\n}\r\n\r\ninput, #project-title {\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n  border-radius: 10px;\r\n  margin: 5px 20px 0 20px;\r\n  border: 1px solid rgb(223, 218, 218);\r\n  padding: 5px 10px;\r\n  width: 250px;\r\n}\r\n\r\n#project-title {\r\n  margin: 10px;\r\n}\r\n\r\ntextarea {\r\n  resize: none;\r\n  font-size: 15px;\r\n  border-radius: 10px;\r\n  margin: 5px 20px 0 20px;\r\n  border: 1px solid rgb(223, 218, 218);\r\n  padding: 5px 10px;\r\n  width: 250px;\r\n  font-family: 'Roboto';\r\n}\r\n\r\n#due-date-fieldset {\r\n  display: flex;\r\n  justify-content: start;\r\n}\r\n\r\n#due-date-label, #priority-title {\r\n  margin: 0 20px;\r\n}\r\n\r\n#select-project-label {\r\n  padding-left: 20px;\r\n}\r\n\r\n#todo-due-date-input {\r\n  width: 150px;\r\n}\r\n\r\n#priority-fieldset {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.priority-option {\r\n  margin: 20px;\r\n  font-weight: bold;\r\n  border: 1px solid black;\r\n  border-radius: 10px;\r\n  padding: 10px 15px;\r\n}\r\n\r\n#low-priority-label {\r\n  color: rgb(11, 147, 11);\r\n  border: 2px solid rgb(11, 147, 11);\r\n  transition: 0.7s;\r\n  font-size: 12px;\r\n  font-weight: bold;\r\n  padding: 3px 8px;\r\n  border-radius: 10px;\r\n  margin: 5px;\r\n}\r\n\r\n#low-priority-label:hover {\r\n  color: white;\r\n  background-color: rgb(11, 147, 11);\r\n  cursor: pointer;\r\n}\r\n\r\n#high-priority-label {\r\n  color: rgb(215, 45, 45);\r\n  border: 2px solid rgb(215, 45, 45);\r\n  transition: 0.7s;\r\n  font-size: 12px;\r\n  font-weight: bold;\r\n  padding: 3px 8px;\r\n  border-radius: 10px;\r\n  margin: 5px;\r\n}\r\n\r\n#high-priority-label:hover {\r\n  color: white;\r\n  background-color: rgb(215, 45, 45);\r\n  cursor: pointer;\r\n}\r\n\r\n.priority-option, #default-project-name, .project-name {\r\n  position: fixed;\r\n  opacity: 0;\r\n  pointer-events: none;\r\n}\r\n\r\n#project-fieldset {\r\n  display: flex;\r\n}\r\n\r\n#default-project-label, .project-label {\r\n  color: rgb(62, 167, 253);\r\n  border: 1px solid rgb(62, 167, 253);\r\n  padding: 5px 10px;\r\n  font-size: 12px;\r\n  font-weight: bold;\r\n  margin: 2px;\r\n  border-radius: 10px;\r\n  transition: 0.7s;\r\n}\r\n\r\n#default-project-label:hover, .project-label:hover {\r\n  color: white;\r\n  background-color: rgb(62, 167, 253);\r\n  cursor: pointer;\r\n}\r\n\r\n#submit-project-button {\r\n  width: 150px;\r\n  cursor: pointer;\r\n  border: 1px solid rgb(62, 167, 253);\r\n  color: rgb(62, 167, 253);\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n  border-radius: 20px;\r\n  margin: 10px 0;\r\n  padding: 5px 20px;\r\n  background-color: white;\r\n  transition: 0.7s;\r\n}\r\n\r\n#submit-project-button:hover {\r\n  background-color: rgb(62, 167, 253);\r\n  color: white;\r\n}\r\n\r\n#cancel-project-button, #cancel-todo-button, #exit-todo-button {\r\n  width: 20px;\r\n  height: 20px;\r\n  border: none;\r\n  background-color: white;\r\n  color: rgb(62, 167, 253);\r\n  cursor: pointer;\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-bottom: 5px;\r\n  transition: 0.7s;\r\n}\r\n\r\n#cancel-project-button:hover, #cancel-todo-button:hover, #exit-todo-button:hover {\r\n  background-color: rgb(62, 167, 253);\r\n  color: white;\r\n}\r\n\r\n#todo-details-container {\r\n  padding: 10px;\r\n  border-radius: 5px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: start;\r\n  width: 350px;\r\n  background-color: white;\r\n  border: 1px solid gray;\r\n  box-shadow: 0px 0px 5px 1px rgb(170, 162, 162);\r\n}\r\n\r\n#selected-todo-item-title {\r\n  width: 90%;\r\n  padding: 10px;\r\n  margin-left: 10px;\r\n  font-size: 20px;\r\n  background-color: rgb(62, 167, 253);\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n\r\n#selected-todo-item-due-date {\r\n  padding: 5px 0 0 10px;\r\n  font-size: 12px;\r\n  color: gray;\r\n}\r\n\r\n#selected-todo-item-description {\r\n  font-size: 15px;\r\n  padding: 10px;\r\n}\r\n\r\n#selected-title-label, #selected-due-date-label, #selected-description-label {\r\n  padding: 10px;\r\n}\r\n\r\n#selected-description-input {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n#submit-todo-edit-button {\r\n  width: 150px;\r\n  cursor: pointer;\r\n  border: 1px solid rgb(62, 167, 253);\r\n  margin: 10px auto;\r\n  color: rgb(62, 167, 253);\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n  border-radius: 20px;\r\n  padding: 5px 20px;\r\n  background-color: white;\r\n  transition: 0.7s;\r\n}\r\n\r\n#submit-todo-edit-button:hover {\r\n  background-color: rgb(62, 167, 253);\r\n  color: white;\r\n}"],"sourceRoot":""}]);
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

            const selectedLowPriorityLabel = document.createElement("label");
            selectedLowPriorityLabel.setAttribute("id", "low-priority-label");
            selectedLowPriorityLabel.textContent = "LOW";
            todoDetailsContainer.appendChild(selectedLowPriorityLabel);

            const selectedTodoItemLowPriority = document.createElement("input");
            selectedTodoItemLowPriority.setAttribute("type", "radio");
            selectedTodoItemLowPriority.setAttribute("id", "low-priority");
            // selectedTodoItemLowPriority.classList.add("priority-option");
            selectedTodoItemLowPriority.setAttribute("name", "priority-option");
            selectedTodoItemLowPriority.checked = selectedProject[i].lowPriority;
            todoDetailsContainer.appendChild(selectedTodoItemLowPriority);

            const selectedHighPriorityLabel = document.createElement("label");
            selectedHighPriorityLabel.setAttribute("id", "high-priority-label");
            selectedHighPriorityLabel.textContent = "HIGH";
            todoDetailsContainer.appendChild(selectedHighPriorityLabel);

            const selectedTodoItemHighPriority = document.createElement("input");
            selectedTodoItemHighPriority.setAttribute("type", "radio");
            selectedTodoItemHighPriority.setAttribute("id", "high-priority");
            // selectedTodoItemHighPriority.classList.add("priority-option");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHFIQUF1QztBQUNuRiw0Q0FBNEMsK0dBQW9DO0FBQ2hGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQsUUFBUSxtQ0FBbUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxPQUFPLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUs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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSwrQ0FBZ0I7QUFDbEI7QUFDQSxFQUFFLGtFQUFpQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRG1DO0FBQ0U7QUFDZ0I7QUFDckQ7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLDZDQUFjO0FBQ2xEO0FBQ0E7QUFDQSxrQkFBa0IsSUFBSSwrQ0FBZ0IsU0FBUztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCxFQUFFO0FBQzFEO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxFQUFFO0FBQzNEO0FBQ0Esa0NBQWtDLCtDQUFnQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixJQUFJLCtDQUFnQixTQUFTO0FBQy9DO0FBQ0E7QUFDQSxNQUFNLCtDQUFnQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGtFQUFpQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkxxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLElBQUksK0NBQWdCLFNBQVM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsK0NBQWdCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLCtDQUFnQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QiwrQ0FBZ0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw0QkFBNEI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBK0QsMkJBQTJCO0FBQzFGO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFLCtCQUErQjtBQUNyRztBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQy9QQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL25ldy1wcm9qZWN0LWZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvbmV3LXRvZG8tZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zaG93LXRvZG8tbGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9Sb2JvdG8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL1JvYm90by1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiByZ2IoMTM5LCAxMzMsIDEzMyk7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoJ3R0ZicpLCBcclxuICB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgZm9ybWF0KCd0dGYnKTtcclxuICBmb250LXdlaWdodDogNDAwLCA3MDA7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuI25hdi1iYXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmc6IDAgMTVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjIsIDE2NywgMjUzKTtcclxufVxyXG5cclxuI2xlZnQtbmF2LWJhciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4jcmlnaHQtbmF2LWJhciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4jY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogODV2aDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JheTtcclxuICBib3gtc2hhZG93OiAxcHggMnB4IDVweCAxcHggcmdiKDE3MCwgMTYyLCAxNjIpO1xyXG59XHJcblxyXG4jbGVmdC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXg6IDE7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjksIDIyNCwgMjI0KTtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBncmF5O1xyXG59XHJcblxyXG4jcHJvamVjdC1saXN0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWxpc3QtaXRlbSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbjogMnB4IDA7XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgdHJhbnNpdGlvbjogMC43cztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLnByb2plY3QtbGlzdC1pdGVtOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk4LCAxOTQsIDE5NCk7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWl0ZW0tdGV4dCB7XHJcbiAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLnByb2plY3QtaXRlbS1hbW91bnQge1xyXG4gIHBhZGRpbmc6IDJweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjIsIDE2NywgMjUzKTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246IDAuN3M7XHJcbn1cclxuXHJcbiNyaWdodC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGZsZXg6IDM7XHJcbn1cclxuXHJcbiN0b2Rvcy1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4udG9kby1pdGVtIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW46IDVweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDE2OSwgMTY0LCAxNjQpO1xyXG4gIHRyYW5zaXRpb246IDAuN3M7XHJcbn1cclxuXHJcbi50b2RvLWl0ZW06aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYyLCAxNjcsIDI1Myk7XHJcbn1cclxuXHJcbi50b2RvLWl0ZW0tbGVmdC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE5cHg7XHJcbn1cclxuXHJcbi50b2RvLWl0ZW0tcmlnaHQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50b2RvLWl0ZW0taGlnaC1wcmlvcml0eSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTUsIDQ1LCA0NSk7XHJcbiAgcGFkZGluZzogMnB4IDVweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi50b2RvLWl0ZW0tZHVlLWRhdGUge1xyXG4gIGNvbG9yOiBncmF5O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuI2VkaXQtaWNvbiwgI2RlbGV0ZS1pY29uIHtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjIsIDE2NywgMjUzKTtcclxuICBtYXJnaW46IDAgNXB4IDJweCA1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246IDAuN3M7XHJcbn1cclxuXHJcbiNlZGl0LWljb246aG92ZXIsICNkZWxldGUtaWNvbjpob3ZlciB7XHJcbiAgY29sb3I6IHJnYig2MiwgMTY3LCAyNTMpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jcHJvamVjdC1iYWNrZ3JvdW5kLCAjdG9kby1iYWNrZ3JvdW5kIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIG9wYWNpdHk6IDAuNztcclxuICB6LWluZGV4OiAwO1xyXG59XHJcblxyXG4jZm9ybS1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB6LWluZGV4OiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4jY2FuY2VsLXRvZG8tYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XHJcbn1cclxuXHJcbiNjYW5jZWwtcHJvamVjdC1idXR0b24tY29udGFpbmVyIHtcclxuICB3aWR0aDogMjUwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcclxufVxyXG5cclxuI25ldy1wcm9qZWN0LWZvcm0sICNuZXctdG9kby1mb3JtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDFweCByZ2IoMTcwLCAxNjIsIDE2Mik7XHJcbn1cclxuXHJcbiNuZXctcHJvamVjdC1idXR0b24sICNjaGVjay1wcm9qZWN0cy1idXR0b24sICNjaGVjay1kZWZhdWx0LXByb2plY3QtYnV0dG9uIHtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIG1hcmdpbjogMCA1cHg7XHJcbiAgY29sb3I6IHJnYig2MiwgMTY3LCAyNTMpO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDVweCAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IDAuN3M7XHJcbn1cclxuXHJcbiNhZGQtdG9kby1idXR0b24ge1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDYyLCAxNjcsIDI1Myk7XHJcbiAgbWFyZ2luOiAyMHB4IDMwcHg7XHJcbiAgY29sb3I6IHJnYig2MiwgMTY3LCAyNTMpO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDVweCAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IDAuN3M7XHJcbn1cclxuXHJcbiNuZXctcHJvamVjdC1idXR0b246aG92ZXIsICNhZGQtdG9kby1idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2MiwgMTY3LCAyNTMpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuZmllbGRzZXQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgcGFkZGluZzogNXB4IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5pbnB1dCwgI3Byb2plY3QtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbjogNXB4IDIwcHggMCAyMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMjMsIDIxOCwgMjE4KTtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuICB3aWR0aDogMjUwcHg7XHJcbn1cclxuXHJcbiNwcm9qZWN0LXRpdGxlIHtcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbnRleHRhcmVhIHtcclxuICByZXNpemU6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luOiA1cHggMjBweCAwIDIwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIyMywgMjE4LCAyMTgpO1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbn1cclxuXHJcbiNkdWUtZGF0ZS1maWVsZHNldCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG59XHJcblxyXG4jZHVlLWRhdGUtbGFiZWwsICNwcmlvcml0eS10aXRsZSB7XHJcbiAgbWFyZ2luOiAwIDIwcHg7XHJcbn1cclxuXHJcbiNzZWxlY3QtcHJvamVjdC1sYWJlbCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4jdG9kby1kdWUtZGF0ZS1pbnB1dCB7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG59XHJcblxyXG4jcHJpb3JpdHktZmllbGRzZXQge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5wcmlvcml0eS1vcHRpb24ge1xyXG4gIG1hcmdpbjogMjBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcclxufVxyXG5cclxuI2xvdy1wcmlvcml0eS1sYWJlbCB7XHJcbiAgY29sb3I6IHJnYigxMSwgMTQ3LCAxMSk7XHJcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDExLCAxNDcsIDExKTtcclxuICB0cmFuc2l0aW9uOiAwLjdzO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nOiAzcHggOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbn1cclxuXHJcbiNsb3ctcHJpb3JpdHktbGFiZWw6aG92ZXIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTEsIDE0NywgMTEpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuI2hpZ2gtcHJpb3JpdHktbGFiZWwge1xyXG4gIGNvbG9yOiByZ2IoMjE1LCA0NSwgNDUpO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMTUsIDQ1LCA0NSk7XHJcbiAgdHJhbnNpdGlvbjogMC43cztcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZzogM3B4IDhweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG4jaGlnaC1wcmlvcml0eS1sYWJlbDpob3ZlciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTUsIDQ1LCA0NSk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucHJpb3JpdHktb3B0aW9uLCAjZGVmYXVsdC1wcm9qZWN0LW5hbWUsIC5wcm9qZWN0LW5hbWUge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4jcHJvamVjdC1maWVsZHNldCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuI2RlZmF1bHQtcHJvamVjdC1sYWJlbCwgLnByb2plY3QtbGFiZWwge1xyXG4gIGNvbG9yOiByZ2IoNjIsIDE2NywgMjUzKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoNjIsIDE2NywgMjUzKTtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luOiAycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB0cmFuc2l0aW9uOiAwLjdzO1xyXG59XHJcblxyXG4jZGVmYXVsdC1wcm9qZWN0LWxhYmVsOmhvdmVyLCAucHJvamVjdC1sYWJlbDpob3ZlciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2MiwgMTY3LCAyNTMpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuI3N1Ym1pdC1wcm9qZWN0LWJ1dHRvbiB7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoNjIsIDE2NywgMjUzKTtcclxuICBjb2xvcjogcmdiKDYyLCAxNjcsIDI1Myk7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgcGFkZGluZzogNXB4IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogMC43cztcclxufVxyXG5cclxuI3N1Ym1pdC1wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYyLCAxNjcsIDI1Myk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jY2FuY2VsLXByb2plY3QtYnV0dG9uLCAjY2FuY2VsLXRvZG8tYnV0dG9uLCAjZXhpdC10b2RvLWJ1dHRvbiB7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBjb2xvcjogcmdiKDYyLCAxNjcsIDI1Myk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIHRyYW5zaXRpb246IDAuN3M7XHJcbn1cclxuXHJcbiNjYW5jZWwtcHJvamVjdC1idXR0b246aG92ZXIsICNjYW5jZWwtdG9kby1idXR0b246aG92ZXIsICNleGl0LXRvZG8tYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjIsIDE2NywgMjUzKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiN0b2RvLWRldGFpbHMtY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG4gIHdpZHRoOiAzNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDFweCByZ2IoMTcwLCAxNjIsIDE2Mik7XHJcbn1cclxuXHJcbiNzZWxlY3RlZC10b2RvLWl0ZW0tdGl0bGUge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYyLCAxNjcsIDI1Myk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4jc2VsZWN0ZWQtdG9kby1pdGVtLWR1ZS1kYXRlIHtcclxuICBwYWRkaW5nOiA1cHggMCAwIDEwcHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiBncmF5O1xyXG59XHJcblxyXG4jc2VsZWN0ZWQtdG9kby1pdGVtLWRlc2NyaXB0aW9uIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuI3NlbGVjdGVkLXRpdGxlLWxhYmVsLCAjc2VsZWN0ZWQtZHVlLWRhdGUtbGFiZWwsICNzZWxlY3RlZC1kZXNjcmlwdGlvbi1sYWJlbCB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuI3NlbGVjdGVkLWRlc2NyaXB0aW9uLWlucHV0IHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4jc3VibWl0LXRvZG8tZWRpdC1idXR0b24ge1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDYyLCAxNjcsIDI1Myk7XHJcbiAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgY29sb3I6IHJnYig2MiwgMTY3LCAyNTMpO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDVweCAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IDAuN3M7XHJcbn1cclxuXHJcbiNzdWJtaXQtdG9kby1lZGl0LWJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYyLCAxNjcsIDI1Myk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Us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QixlQUFlO0VBQ2YsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsOENBQThDO0FBQ2hEOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLG1DQUFtQztFQUNuQyxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixtQ0FBbUM7RUFDbkMsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOjpwbGFjZWhvbGRlciB7XFxyXFxuICBjb2xvcjogcmdiKDEzOSwgMTMzLCAxMzMpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXHJcXG4gIHNyYzogdXJsKCcuL1JvYm90by1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHRmJyksIFxcclxcbiAgdXJsKCcuL1JvYm90by1Cb2xkLnR0ZicpIGZvcm1hdCgndHRmJyk7XFxyXFxuICBmb250LXdlaWdodDogNDAwLCA3MDA7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI25hdi1iYXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHBhZGRpbmc6IDAgMTVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2MiwgMTY3LCAyNTMpO1xcclxcbn1cXHJcXG5cXHJcXG4jbGVmdC1uYXYtYmFyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jcmlnaHQtbmF2LWJhciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbWFyZ2luLXRvcDogNTBweDtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogODV2aDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xcclxcbiAgYm94LXNoYWRvdzogMXB4IDJweCA1cHggMXB4IHJnYigxNzAsIDE2MiwgMTYyKTtcXHJcXG59XFxyXFxuXFxyXFxuI2xlZnQtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI5LCAyMjQsIDIyNCk7XFxyXFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdC1saXN0IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZy10b3A6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWxpc3QtaXRlbSB7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBtYXJnaW46IDJweCAwO1xcclxcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjdzO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtbGlzdC1pdGVtOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTgsIDE5NCwgMTk0KTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtaXRlbS10ZXh0IHtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWl0ZW0tYW1vdW50IHtcXHJcXG4gIHBhZGRpbmc6IDJweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYyLCAxNjcsIDI1Myk7XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjdzO1xcclxcbn1cXHJcXG5cXHJcXG4jcmlnaHQtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZmxleDogMztcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG9zLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8taXRlbSB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luOiA1cHg7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDE2OSwgMTY0LCAxNjQpO1xcclxcbiAgdHJhbnNpdGlvbjogMC43cztcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8taXRlbTpob3ZlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjIsIDE2NywgMjUzKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8taXRlbS1sZWZ0LWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMTlweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8taXRlbS1yaWdodC1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWl0ZW0taGlnaC1wcmlvcml0eSB7XFxyXFxuICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTUsIDQ1LCA0NSk7XFxyXFxuICBwYWRkaW5nOiAycHggNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8taXRlbS1kdWUtZGF0ZSB7XFxyXFxuICBjb2xvcjogZ3JheTtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2VkaXQtaWNvbiwgI2RlbGV0ZS1pY29uIHtcXHJcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYyLCAxNjcsIDI1Myk7XFxyXFxuICBtYXJnaW46IDAgNXB4IDJweCA1cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgdHJhbnNpdGlvbjogMC43cztcXHJcXG59XFxyXFxuXFxyXFxuI2VkaXQtaWNvbjpob3ZlciwgI2RlbGV0ZS1pY29uOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiByZ2IoNjIsIDE2NywgMjUzKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdC1iYWNrZ3JvdW5kLCAjdG9kby1iYWNrZ3JvdW5kIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgb3BhY2l0eTogMC43O1xcclxcbiAgei1pbmRleDogMDtcXHJcXG59XFxyXFxuXFxyXFxuI2Zvcm0tY29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNjYW5jZWwtdG9kby1idXR0b24tY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiA0MDBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG59XFxyXFxuXFxyXFxuI2NhbmNlbC1wcm9qZWN0LWJ1dHRvbi1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDI1MHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXByb2plY3QtZm9ybSwgI25ldy10b2RvLWZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDFweCByZ2IoMTcwLCAxNjIsIDE2Mik7XFxyXFxufVxcclxcblxcclxcbiNuZXctcHJvamVjdC1idXR0b24sICNjaGVjay1wcm9qZWN0cy1idXR0b24sICNjaGVjay1kZWZhdWx0LXByb2plY3QtYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiAxNTBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgbWFyZ2luOiAwIDVweDtcXHJcXG4gIGNvbG9yOiByZ2IoNjIsIDE2NywgMjUzKTtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIHBhZGRpbmc6IDVweCAyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjdzO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXRvZG8tYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiAxNTBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYig2MiwgMTY3LCAyNTMpO1xcclxcbiAgbWFyZ2luOiAyMHB4IDMwcHg7XFxyXFxuICBjb2xvcjogcmdiKDYyLCAxNjcsIDI1Myk7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBwYWRkaW5nOiA1cHggMjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgdHJhbnNpdGlvbjogMC43cztcXHJcXG59XFxyXFxuXFxyXFxuI25ldy1wcm9qZWN0LWJ1dHRvbjpob3ZlciwgI2FkZC10b2RvLWJ1dHRvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjIsIDE2NywgMjUzKTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuZmllbGRzZXQge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgd2lkdGg6IDQwMHB4O1xcclxcbiAgcGFkZGluZzogNXB4IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbmlucHV0LCAjcHJvamVjdC10aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBtYXJnaW46IDVweCAyMHB4IDAgMjBweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMjMsIDIxOCwgMjE4KTtcXHJcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcclxcbiAgd2lkdGg6IDI1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdC10aXRsZSB7XFxyXFxuICBtYXJnaW46IDEwcHg7XFxyXFxufVxcclxcblxcclxcbnRleHRhcmVhIHtcXHJcXG4gIHJlc2l6ZTogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBtYXJnaW46IDVweCAyMHB4IDAgMjBweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMjMsIDIxOCwgMjE4KTtcXHJcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcclxcbiAgd2lkdGg6IDI1MHB4O1xcclxcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcclxcbn1cXHJcXG5cXHJcXG4jZHVlLWRhdGUtZmllbGRzZXQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbiNkdWUtZGF0ZS1sYWJlbCwgI3ByaW9yaXR5LXRpdGxlIHtcXHJcXG4gIG1hcmdpbjogMCAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jc2VsZWN0LXByb2plY3QtbGFiZWwge1xcclxcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jdG9kby1kdWUtZGF0ZS1pbnB1dCB7XFxyXFxuICB3aWR0aDogMTUwcHg7XFxyXFxufVxcclxcblxcclxcbiNwcmlvcml0eS1maWVsZHNldCB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktb3B0aW9uIHtcXHJcXG4gIG1hcmdpbjogMjBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgcGFkZGluZzogMTBweCAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbG93LXByaW9yaXR5LWxhYmVsIHtcXHJcXG4gIGNvbG9yOiByZ2IoMTEsIDE0NywgMTEpO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDExLCAxNDcsIDExKTtcXHJcXG4gIHRyYW5zaXRpb246IDAuN3M7XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIHBhZGRpbmc6IDNweCA4cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgbWFyZ2luOiA1cHg7XFxyXFxufVxcclxcblxcclxcbiNsb3ctcHJpb3JpdHktbGFiZWw6aG92ZXIge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExLCAxNDcsIDExKTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2hpZ2gtcHJpb3JpdHktbGFiZWwge1xcclxcbiAgY29sb3I6IHJnYigyMTUsIDQ1LCA0NSk7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjE1LCA0NSwgNDUpO1xcclxcbiAgdHJhbnNpdGlvbjogMC43cztcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgcGFkZGluZzogM3B4IDhweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBtYXJnaW46IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuI2hpZ2gtcHJpb3JpdHktbGFiZWw6aG92ZXIge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNSwgNDUsIDQ1KTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5LW9wdGlvbiwgI2RlZmF1bHQtcHJvamVjdC1uYW1lLCAucHJvamVjdC1uYW1lIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3QtZmllbGRzZXQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuI2RlZmF1bHQtcHJvamVjdC1sYWJlbCwgLnByb2plY3QtbGFiZWwge1xcclxcbiAgY29sb3I6IHJnYig2MiwgMTY3LCAyNTMpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDYyLCAxNjcsIDI1Myk7XFxyXFxuICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgbWFyZ2luOiAycHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogMC43cztcXHJcXG59XFxyXFxuXFxyXFxuI2RlZmF1bHQtcHJvamVjdC1sYWJlbDpob3ZlciwgLnByb2plY3QtbGFiZWw6aG92ZXIge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYyLCAxNjcsIDI1Myk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNzdWJtaXQtcHJvamVjdC1idXR0b24ge1xcclxcbiAgd2lkdGg6IDE1MHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDYyLCAxNjcsIDI1Myk7XFxyXFxuICBjb2xvcjogcmdiKDYyLCAxNjcsIDI1Myk7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBtYXJnaW46IDEwcHggMDtcXHJcXG4gIHBhZGRpbmc6IDVweCAyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjdzO1xcclxcbn1cXHJcXG5cXHJcXG4jc3VibWl0LXByb2plY3QtYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2MiwgMTY3LCAyNTMpO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4jY2FuY2VsLXByb2plY3QtYnV0dG9uLCAjY2FuY2VsLXRvZG8tYnV0dG9uLCAjZXhpdC10b2RvLWJ1dHRvbiB7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgY29sb3I6IHJnYig2MiwgMTY3LCAyNTMpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbiAgdHJhbnNpdGlvbjogMC43cztcXHJcXG59XFxyXFxuXFxyXFxuI2NhbmNlbC1wcm9qZWN0LWJ1dHRvbjpob3ZlciwgI2NhbmNlbC10b2RvLWJ1dHRvbjpob3ZlciwgI2V4aXQtdG9kby1idXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYyLCAxNjcsIDI1Myk7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbiN0b2RvLWRldGFpbHMtY29udGFpbmVyIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXHJcXG4gIHdpZHRoOiAzNTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDFweCByZ2IoMTcwLCAxNjIsIDE2Mik7XFxyXFxufVxcclxcblxcclxcbiNzZWxlY3RlZC10b2RvLWl0ZW0tdGl0bGUge1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2MiwgMTY3LCAyNTMpO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbiNzZWxlY3RlZC10b2RvLWl0ZW0tZHVlLWRhdGUge1xcclxcbiAgcGFkZGluZzogNXB4IDAgMCAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgY29sb3I6IGdyYXk7XFxyXFxufVxcclxcblxcclxcbiNzZWxlY3RlZC10b2RvLWl0ZW0tZGVzY3JpcHRpb24ge1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3NlbGVjdGVkLXRpdGxlLWxhYmVsLCAjc2VsZWN0ZWQtZHVlLWRhdGUtbGFiZWwsICNzZWxlY3RlZC1kZXNjcmlwdGlvbi1sYWJlbCB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jc2VsZWN0ZWQtZGVzY3JpcHRpb24taW5wdXQge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3N1Ym1pdC10b2RvLWVkaXQtYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiAxNTBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYig2MiwgMTY3LCAyNTMpO1xcclxcbiAgbWFyZ2luOiAxMHB4IGF1dG87XFxyXFxuICBjb2xvcjogcmdiKDYyLCAxNjcsIDI1Myk7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBwYWRkaW5nOiA1cHggMjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgdHJhbnNpdGlvbjogMC43cztcXHJcXG59XFxyXFxuXFxyXFxuI3N1Ym1pdC10b2RvLWVkaXQtYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2MiwgMTY3LCAyNTMpO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgeyBhZGRQcm9qZWN0Rm9ybSB9IGZyb20gJy4vbmV3LXByb2plY3QtZm9ybSc7XHJcbmltcG9ydCB7IGFkZFRvZG9Gb3JtIH0gZnJvbSBcIi4vbmV3LXRvZG8tZm9ybVwiO1xyXG5pbXBvcnQgeyB1cGRhdGVQcm9qZWN0TGlzdCB9IGZyb20gJy4vc2hvdy10b2RvLWxpc3QnO1xyXG5cclxuY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xyXG5saW5rLnNldEF0dHJpYnV0ZShcInJlbFwiLCBcInN0eWxlc2hlZXRcIik7XHJcbmxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWF0ZXJpYWwrU3ltYm9scytPdXRsaW5lZDpvcHN6LHdnaHQsRklMTCxHUkFEQDI0LDMwMCwwLDBcIik7XHJcbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XHJcblxyXG5jb25zdCBwcm9qZWN0TGlzdEFycmF5ID0gW107XHJcbnByb2plY3RMaXN0QXJyYXkudGV4dENvbnRlbnQgPSBcIlByb2plY3QgTGlzdFwiO1xyXG5cclxuY29uc3QgZGVmYXVsdFByb2plY3QgPSBbXTtcclxuZGVmYXVsdFByb2plY3QudGV4dENvbnRlbnQgPSBcIkRlZmF1bHQgUHJvamVjdFwiO1xyXG5wcm9qZWN0TGlzdEFycmF5LnB1c2goZGVmYXVsdFByb2plY3QpO1xyXG5cclxuY29uc3QgbGlicmFyeUFwcCA9IFtdO1xyXG5saWJyYXJ5QXBwLnRleHRDb250ZW50ID0gXCJMaWJyYXJ5IEFwcFwiO1xyXG5wcm9qZWN0TGlzdEFycmF5LnB1c2gobGlicmFyeUFwcCk7XHJcblxyXG5jb25zdCByZXN0YXVyYW50UGFnZSA9IFtdO1xyXG5yZXN0YXVyYW50UGFnZS50ZXh0Q29udGVudCA9IFwiUmVzdGF1cmFudCBQYWdlXCI7XHJcbnByb2plY3RMaXN0QXJyYXkucHVzaChyZXN0YXVyYW50UGFnZSk7XHJcblxyXG5jb25zdCB0b2RvSXRlbU9uZSA9IHtcclxuICB0aXRsZTogXCJOZXcgdG9kb1wiLCBcclxuICBkZXNjcmlwdGlvbjogXCJUaGluZ3MgdG8gcmVhZFwiLCBcclxuICBkdWVEYXRlOiBcIjIwMjMtMDktMTlcIiwgXHJcbiAgbG93UHJpb3JpdHk6IGZhbHNlLCBcclxuICBoaWdoUHJpb3JpdHk6IHRydWVcclxufTtcclxuXHJcbmNvbnN0IHRvZG9JdGVtVHdvID0ge1xyXG4gIHRpdGxlOiBcIkFkZCBlZGl0IGJ1dHRvblwiLCBcclxuICBkZXNjcmlwdGlvbjogXCJOZWVkIHRvIGFkZCBidXR0b24gaW4gb3JkZXIgdG8gZWRpdCBkZXRhaWxzIVwiLCBcclxuICBkdWVEYXRlOiBcIjIwMjMtMDktMzBcIiwgXHJcbiAgbG93UHJpb3JpdHk6IHRydWUsIFxyXG4gIGhpZ2hQcmlvcml0eTogZmFsc2VcclxufTtcclxuXHJcbmRlZmF1bHRQcm9qZWN0LnB1c2godG9kb0l0ZW1PbmUpO1xyXG5kZWZhdWx0UHJvamVjdC5wdXNoKHRvZG9JdGVtVHdvKTtcclxuXHJcbmNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbm5hdkJhci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5hdi1iYXJcIik7XHJcbm5hdkJhci50ZXh0Q29udGVudCA9IFwiVG9kbyBBcHBcIjtcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChuYXZCYXIpO1xyXG5cclxuY29uc3QgbGVmdE5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmxlZnROYXZCYXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsZWZ0LW5hdi1iYXJcIik7XHJcbm5hdkJhci5hcHBlbmRDaGlsZChsZWZ0TmF2QmFyKTtcclxuXHJcbmNvbnN0IHJpZ2h0TmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxucmlnaHROYXZCYXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJyaWdodC1uYXYtYmFyXCIpO1xyXG5uYXZCYXIuYXBwZW5kQ2hpbGQocmlnaHROYXZCYXIpO1xyXG5cclxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGFpbmVyXCIpO1xyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcblxyXG5jb25zdCBsZWZ0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxubGVmdENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxlZnQtY29udGFpbmVyXCIpO1xyXG5jb250YWluZXIuYXBwZW5kQ2hpbGQobGVmdENvbnRhaW5lcik7XHJcblxyXG5jb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbnByb2plY3RMaXN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdC1saXN0XCIpO1xyXG5sZWZ0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RMaXN0KTtcclxuXHJcbnVwZGF0ZVByb2plY3RMaXN0KCk7XHJcblxyXG5jb25zdCByaWdodENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbnJpZ2h0Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicmlnaHQtY29udGFpbmVyXCIpO1xyXG5jb250YWluZXIuYXBwZW5kQ2hpbGQocmlnaHRDb250YWluZXIpO1xyXG5cclxuY29uc3QgYWRkVG9kb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbmFkZFRvZG9CdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGQtdG9kby1idXR0b25cIik7XHJcbmFkZFRvZG9CdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZCBUb2RvXCI7XHJcbnJpZ2h0Q29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRvZG9CdXR0b24pO1xyXG5cclxuYWRkVG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkVG9kb0Zvcm0pO1xyXG5cclxuY29uc3QgdG9kb3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG50b2Rvc0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG9zLWNvbnRhaW5lclwiKTtcclxucmlnaHRDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb3NDb250YWluZXIpO1xyXG5cclxuY29uc3QgbmV3UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbm5ld1Byb2plY3RCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuZXctcHJvamVjdC1idXR0b25cIik7XHJcbm5ld1Byb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZCBQcm9qZWN0XCI7XHJcbnJpZ2h0TmF2QmFyLmFwcGVuZENoaWxkKG5ld1Byb2plY3RCdXR0b24pO1xyXG5cclxuY29uc3QgY2hlY2tQcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbmNoZWNrUHJvamVjdHMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjaGVjay1wcm9qZWN0cy1idXR0b25cIik7XHJcbmNoZWNrUHJvamVjdHMudGV4dENvbnRlbnQgPSBcIkNoZWNrIFByb2plY3RcIjtcclxucmlnaHROYXZCYXIuYXBwZW5kQ2hpbGQoY2hlY2tQcm9qZWN0cyk7XHJcblxyXG5jb25zdCBjaGVja0RlZmF1bHRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuY2hlY2tEZWZhdWx0UHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNoZWNrLWRlZmF1bHQtcHJvamVjdC1idXR0b25cIik7XHJcbmNoZWNrRGVmYXVsdFByb2plY3QudGV4dENvbnRlbnQgPSBcIkNoZWNrIERlZmF1bHRcIjtcclxucmlnaHROYXZCYXIuYXBwZW5kQ2hpbGQoY2hlY2tEZWZhdWx0UHJvamVjdCk7XHJcblxyXG5jaGVja1Byb2plY3RzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiBjaGVja1Byb2plY3RzSW5MaXN0ICgpIHtcclxuICBjb25zb2xlLmxvZyhwcm9qZWN0TGlzdEFycmF5KTtcclxufSk7XHJcblxyXG5jaGVja0RlZmF1bHRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiBjaGVja0RlZmF1bHRQcm9qZWN0ICgpIHtcclxuICBjb25zb2xlLmxvZyhkZWZhdWx0UHJvamVjdCk7XHJcbn0pO1xyXG5cclxubmV3UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkUHJvamVjdEZvcm0pO1xyXG5cclxuZXhwb3J0IHsgZGVmYXVsdFByb2plY3QsIHByb2plY3RMaXN0QXJyYXkgfTsiLCJpbXBvcnQgeyBwcm9qZWN0TGlzdEFycmF5IH0gZnJvbSBcIi5cIjtcclxuaW1wb3J0IHsgdXBkYXRlUHJvamVjdExpc3QgfSBmcm9tIFwiLi9zaG93LXRvZG8tbGlzdFwiO1xyXG5cclxuY29uc3QgcHJvamVjdCA9IFtdO1xyXG5cclxuY29uc3QgYWRkUHJvamVjdEZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgcHJvamVjdEJhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHByb2plY3RCYWNrZ3JvdW5kLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdC1iYWNrZ3JvdW5kXCIpO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocHJvamVjdEJhY2tncm91bmQpO1xyXG5cclxuICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBmb3JtQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZm9ybS1jb250YWluZXJcIik7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcclxuXHJcbiAgY29uc3QgY2FuY2VsQnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjYW5jZWxCdXR0b25Db250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjYW5jZWwtcHJvamVjdC1idXR0b24tY29udGFpbmVyXCIpO1xyXG4gIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uQ29udGFpbmVyKTtcclxuXHJcbiAgY29uc3QgY2FuY2VsUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgY2FuY2VsUHJvamVjdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNhbmNlbC1wcm9qZWN0LWJ1dHRvblwiKTtcclxuICBjYW5jZWxQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJYXCI7XHJcbiAgY2FuY2VsQnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhbmNlbFByb2plY3RCdXR0b24pO1xyXG5cclxuICBjYW5jZWxQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW1vdmVQcm9qZWN0Rm9ybSk7XHJcblxyXG4gIGNvbnN0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XHJcbiAgbmV3UHJvamVjdEZvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuZXctcHJvamVjdC1mb3JtXCIpO1xyXG4gIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEZvcm0pO1xyXG5cclxuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgcHJvamVjdFRpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdC10aXRsZVwiKTtcclxuICBwcm9qZWN0VGl0bGUuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJFbnRlciBQcm9qZWN0IFRpdGxlXCIpO1xyXG4gIG5ld1Byb2plY3RGb3JtLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XHJcblxyXG4gIGNvbnN0IHN1Ym1pdFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIHN1Ym1pdFByb2plY3RCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzdWJtaXQtcHJvamVjdC1idXR0b25cIik7XHJcbiAgc3VibWl0UHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU3VibWl0IFByb2plY3RcIjtcclxuICBuZXdQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChzdWJtaXRQcm9qZWN0QnV0dG9uKTtcclxuXHJcbiAgc3VibWl0UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3VibWl0UHJvamVjdEZvcm0pO1xyXG59O1xyXG5cclxuY29uc3Qgc3VibWl0UHJvamVjdEZvcm0gPSAoZXZlbnQpID0+IHtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIFxyXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LXRpdGxlXCIpLnZhbHVlO1xyXG5cclxuICBjb25zdCBuZXdQcm9qZWN0QXJyYXkgPSBwcm9qZWN0LnNsaWNlKCk7XHJcbiAgbmV3UHJvamVjdEFycmF5LnRleHRDb250ZW50ID0gdGl0bGU7XHJcbiAgY29uc29sZS5sb2cobmV3UHJvamVjdEFycmF5KTtcclxuICBwcm9qZWN0TGlzdEFycmF5LnB1c2gobmV3UHJvamVjdEFycmF5KTtcclxuXHJcbiAgdXBkYXRlUHJvamVjdExpc3QoKTtcclxuICByZW1vdmVQcm9qZWN0Rm9ybSgpO1xyXG59O1xyXG5cclxuY29uc3QgcmVtb3ZlUHJvamVjdEZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgcHJvamVjdEJhY2tncm91bmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtYmFja2dyb3VuZFwiKTtcclxuICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHByb2plY3RCYWNrZ3JvdW5kKTtcclxuXHJcbiAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybS1jb250YWluZXJcIik7XHJcbiAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChmb3JtQ29udGFpbmVyKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IGFkZFByb2plY3RGb3JtLCBzdWJtaXRQcm9qZWN0Rm9ybSB9OyIsImltcG9ydCB7IGRlZmF1bHRQcm9qZWN0IH0gZnJvbSBcIi5cIjtcclxuaW1wb3J0IHsgcHJvamVjdExpc3RBcnJheSB9IGZyb20gXCIuXCI7XHJcbmltcG9ydCB7IHVwZGF0ZVByb2plY3RMaXN0IH0gZnJvbSBcIi4vc2hvdy10b2RvLWxpc3RcIjtcclxuXHJcbmNvbnN0IFRvZG8gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBsb3dQcmlvcml0eSwgaGlnaFByaW9yaXR5KSA9PiB7XHJcbiAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBsb3dQcmlvcml0eSwgaGlnaFByaW9yaXR5IH07XHJcbn07XHJcblxyXG5jb25zdCBhZGRUb2RvRm9ybSA9ICgpID0+IHtcclxuICBjb25zdCB0b2RvQmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgdG9kb0JhY2tncm91bmQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvLWJhY2tncm91bmRcIik7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0b2RvQmFja2dyb3VuZCk7XHJcblxyXG4gIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGZvcm1Db250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmb3JtLWNvbnRhaW5lclwiKTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xyXG5cclxuICBjb25zdCBjYW5jZWxCdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNhbmNlbEJ1dHRvbkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNhbmNlbC10b2RvLWJ1dHRvbi1jb250YWluZXJcIik7XHJcbiAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b25Db250YWluZXIpO1xyXG5cclxuICBjb25zdCBjYW5jZWxUb2RvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBjYW5jZWxUb2RvQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2FuY2VsLXRvZG8tYnV0dG9uXCIpO1xyXG4gIGNhbmNlbFRvZG9CdXR0b24udGV4dENvbnRlbnQgPSBcIlhcIjtcclxuICBjYW5jZWxCdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoY2FuY2VsVG9kb0J1dHRvbik7XHJcblxyXG4gIGNhbmNlbFRvZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZVRvZG9Gb3JtKTtcclxuXHJcbiAgY29uc3QgbmV3VG9kb0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcclxuICBuZXdUb2RvRm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5ldy10b2RvLWZvcm1cIik7XHJcbiAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdUb2RvRm9ybSk7XHJcblxyXG4gIGNvbnN0IHRpdGxlRmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIik7XHJcbiAgdGl0bGVGaWVsZHNldC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRpdGxlLWZpZWxkc2V0XCIpO1xyXG4gIG5ld1RvZG9Gb3JtLmFwcGVuZENoaWxkKHRpdGxlRmllbGRzZXQpO1xyXG5cclxuICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgdG9kb1RpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kby10aXRsZS1pbnB1dFwiKTtcclxuICB0b2RvVGl0bGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XHJcbiAgdG9kb1RpdGxlLnNldEF0dHJpYnV0ZShcIm1heGxlbmd0aFwiLCBcIjUwXCIpO1xyXG4gIHRvZG9UaXRsZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkVudGVyZSBUb2RvIFRpdGxlXCIpO1xyXG4gIHRvZG9UaXRsZS5yZXF1aXJlZCA9IHRydWU7XHJcbiAgdGl0bGVGaWVsZHNldC5hcHBlbmRDaGlsZCh0b2RvVGl0bGUpO1xyXG5cclxuICBjb25zdCBkZXNjcmlwdGlvbkZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpO1xyXG4gIGRlc2NyaXB0aW9uRmllbGRzZXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkZXNjcmlwdGlvbi1maWVsZHNldFwiKTtcclxuICBuZXdUb2RvRm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkZpZWxkc2V0KTtcclxuXHJcbiAgY29uc3QgdG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xyXG4gIHRvZG9EZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRlc2NyaXB0aW9uLXRleHRhcmVhXCIpO1xyXG4gIHRvZG9EZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkRlc2NyaXB0aW9uOlwiKTtcclxuICBkZXNjcmlwdGlvbkZpZWxkc2V0LmFwcGVuZENoaWxkKHRvZG9EZXNjcmlwdGlvbik7XHJcblxyXG4gIGNvbnN0IGR1ZURhdGVGaWVsZHNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKTtcclxuICBkdWVEYXRlRmllbGRzZXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkdWUtZGF0ZS1maWVsZHNldFwiKTtcclxuICBuZXdUb2RvRm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlRmllbGRzZXQpO1xyXG5cclxuICBjb25zdCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgZHVlRGF0ZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRvZG8tZHVlLWRhdGUtaW5wdXRcIik7XHJcbiAgZHVlRGF0ZUxhYmVsLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZHVlLWRhdGUtbGFiZWxcIik7XHJcbiAgZHVlRGF0ZUxhYmVsLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZTpcIjtcclxuICBkdWVEYXRlRmllbGRzZXQuYXBwZW5kQ2hpbGQoZHVlRGF0ZUxhYmVsKTtcclxuXHJcbiAgY29uc3QgdG9kb0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgdG9kb0R1ZURhdGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvLWR1ZS1kYXRlLWlucHV0XCIpO1xyXG4gIHRvZG9EdWVEYXRlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xyXG4gIHRvZG9EdWVEYXRlLnJlcXVpcmVkID0gdHJ1ZTtcclxuICBkdWVEYXRlRmllbGRzZXQuYXBwZW5kQ2hpbGQodG9kb0R1ZURhdGUpO1xyXG5cclxuICBjb25zdCBwcmlvcml0eUZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpO1xyXG4gIHByaW9yaXR5RmllbGRzZXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcmlvcml0eS1maWVsZHNldFwiKTtcclxuICBuZXdUb2RvRm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eUZpZWxkc2V0KTtcclxuXHJcbiAgY29uc3QgcHJpb3JpdHlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcHJpb3JpdHlUaXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByaW9yaXR5LXRpdGxlXCIpO1xyXG4gIHByaW9yaXR5VGl0bGUudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OlwiO1xyXG4gIHByaW9yaXR5RmllbGRzZXQuYXBwZW5kQ2hpbGQocHJpb3JpdHlUaXRsZSk7XHJcblxyXG4gIGNvbnN0IGxvd1ByaW9yaXR5T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIGxvd1ByaW9yaXR5T3B0aW9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcclxuICBsb3dQcmlvcml0eU9wdGlvbi5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktb3B0aW9uXCIpO1xyXG4gIGxvd1ByaW9yaXR5T3B0aW9uLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcmlvcml0eS1vcHRpb25cIik7XHJcbiAgbG93UHJpb3JpdHlPcHRpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsb3ctcHJpb3JpdHlcIik7XHJcbiAgbG93UHJpb3JpdHlPcHRpb24uc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLCBcIlwiKTtcclxuICBwcmlvcml0eVRpdGxlLmFwcGVuZENoaWxkKGxvd1ByaW9yaXR5T3B0aW9uKTtcclxuXHJcbiAgY29uc3QgbG93UHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICBsb3dQcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImxvdy1wcmlvcml0eVwiKTtcclxuICBsb3dQcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibG93LXByaW9yaXR5LWxhYmVsXCIpO1xyXG4gIGxvd1ByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSBcIkxPV1wiO1xyXG4gIHByaW9yaXR5VGl0bGUuYXBwZW5kQ2hpbGQobG93UHJpb3JpdHlMYWJlbCk7XHJcblxyXG4gIGNvbnN0IGhpZ2hQcmlvcml0eU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBoaWdoUHJpb3JpdHlPcHRpb24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhZGlvXCIpO1xyXG4gIGhpZ2hQcmlvcml0eU9wdGlvbi5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktb3B0aW9uXCIpO1xyXG4gIGhpZ2hQcmlvcml0eU9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJpb3JpdHktb3B0aW9uXCIpO1xyXG4gIGhpZ2hQcmlvcml0eU9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhpZ2gtcHJpb3JpdHlcIik7XHJcbiAgcHJpb3JpdHlUaXRsZS5hcHBlbmRDaGlsZChoaWdoUHJpb3JpdHlPcHRpb24pO1xyXG5cclxuICBjb25zdCBoaWdoUHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICBoaWdoUHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJoaWdoLXByaW9yaXR5XCIpO1xyXG4gIGhpZ2hQcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaGlnaC1wcmlvcml0eS1sYWJlbFwiKTtcclxuICBoaWdoUHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9IFwiSElHSFwiO1xyXG4gIHByaW9yaXR5VGl0bGUuYXBwZW5kQ2hpbGQoaGlnaFByaW9yaXR5TGFiZWwpO1xyXG5cclxuICBjb25zdCBwcm9qZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIik7XHJcbiAgcHJvamVjdExhYmVsLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2VsZWN0LXByb2plY3QtbGFiZWxcIik7XHJcbiAgcHJvamVjdExhYmVsLnRleHRDb250ZW50ID0gXCJDaG9vc2UgUHJvamVjdCB0byBhZGQgVG9kbzpcIjtcclxuICBuZXdUb2RvRm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0TGFiZWwpO1xyXG5cclxuICBjb25zdCBwcm9qZWN0RmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIik7XHJcbiAgcHJvamVjdEZpZWxkc2V0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdC1maWVsZHNldFwiKTtcclxuICBuZXdUb2RvRm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0RmllbGRzZXQpO1xyXG5cclxuICBjb25zdCBkZWZhdWx0UHJvamVjdFJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIGRlZmF1bHRQcm9qZWN0UmFkaW8uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhZGlvXCIpO1xyXG4gIGRlZmF1bHRQcm9qZWN0UmFkaW8uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkZWZhdWx0LXByb2plY3QtbmFtZVwiKTtcclxuICBkZWZhdWx0UHJvamVjdFJhZGlvLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LW5hbWVcIik7XHJcbiAgZGVmYXVsdFByb2plY3RSYWRpby5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJvamVjdC1uYW1lXCIpO1xyXG4gIGRlZmF1bHRQcm9qZWN0UmFkaW8uc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLCBcIlwiKTtcclxuICBwcm9qZWN0RmllbGRzZXQuYXBwZW5kQ2hpbGQoZGVmYXVsdFByb2plY3RSYWRpbyk7XHJcblxyXG4gIGNvbnN0IGRlZmF1bHRQcm9qZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgZGVmYXVsdFByb2plY3RMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkZWZhdWx0LXByb2plY3QtbmFtZVwiKTtcclxuICBkZWZhdWx0UHJvamVjdExhYmVsLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGVmYXVsdC1wcm9qZWN0LWxhYmVsXCIpO1xyXG4gIGRlZmF1bHRQcm9qZWN0TGFiZWwudGV4dENvbnRlbnQgPSBkZWZhdWx0UHJvamVjdC50ZXh0Q29udGVudDtcclxuICBwcm9qZWN0RmllbGRzZXQuYXBwZW5kQ2hpbGQoZGVmYXVsdFByb2plY3RMYWJlbCk7XHJcblxyXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcHJvamVjdExpc3RBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgbmV3UHJvamVjdFJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgbmV3UHJvamVjdFJhZGlvLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcclxuICAgIG5ld1Byb2plY3RSYWRpby5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1uYW1lXCIpO1xyXG4gICAgbmV3UHJvamVjdFJhZGlvLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcm9qZWN0LW5hbWVcIik7XHJcbiAgICBuZXdQcm9qZWN0UmFkaW8uc2V0QXR0cmlidXRlKFwiaWRcIiwgYHByb2plY3QtaW5kZXgtJHtpfWApO1xyXG4gICAgcHJvamVjdEZpZWxkc2V0LmFwcGVuZENoaWxkKG5ld1Byb2plY3RSYWRpbyk7XHJcblxyXG4gICAgY29uc3QgbmV3UHJvamVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgbmV3UHJvamVjdExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBgcHJvamVjdC1pbmRleC0ke2l9YCk7XHJcbiAgICBuZXdQcm9qZWN0TGFiZWwuY2xhc3NMaXN0LmFkZChcInByb2plY3QtbGFiZWxcIik7XHJcbiAgICBuZXdQcm9qZWN0TGFiZWwudGV4dENvbnRlbnQgPSBwcm9qZWN0TGlzdEFycmF5W2ldLnRleHRDb250ZW50O1xyXG4gICAgcHJvamVjdEZpZWxkc2V0LmFwcGVuZENoaWxkKG5ld1Byb2plY3RMYWJlbCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc3VibWl0VG9kb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgc3VibWl0VG9kb0J1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN1Ym1pdC1wcm9qZWN0LWJ1dHRvblwiKTtcclxuICBzdWJtaXRUb2RvQnV0dG9uLnRleHRDb250ZW50ID0gXCJTdWJtaXQgVG9kb1wiO1xyXG4gIG5ld1RvZG9Gb3JtLmFwcGVuZENoaWxkKHN1Ym1pdFRvZG9CdXR0b24pO1xyXG5cclxuICBzdWJtaXRUb2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdWJtaXRUb2RvRm9ybSk7XHJcbn07XHJcblxyXG5jb25zdCBzdWJtaXRUb2RvRm9ybSA9IChldmVudCkgPT4ge1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLXRpdGxlLWlucHV0XCIpLnZhbHVlO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvbi10ZXh0YXJlYVwiKS52YWx1ZTtcclxuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLWR1ZS1kYXRlLWlucHV0XCIpLnZhbHVlO1xyXG4gIGNvbnN0IGxvd1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb3ctcHJpb3JpdHlcIikuY2hlY2tlZDtcclxuICBjb25zdCBoaWdoUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hpZ2gtcHJpb3JpdHlcIikuY2hlY2tlZDtcclxuXHJcbiAgY29uc3QgbmV3VG9kbyA9IFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBsb3dQcmlvcml0eSwgaGlnaFByaW9yaXR5KTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdEFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBuZXdQcm9qZWN0UmFkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtbmFtZVwiKTtcclxuICAgIGlmIChuZXdQcm9qZWN0UmFkaW9baV0uY2hlY2tlZCA9PSB0cnVlKSB7XHJcbiAgICAgIHByb2plY3RMaXN0QXJyYXlbaV0ucHVzaChuZXdUb2RvKTtcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdG9kb3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9zLWNvbnRhaW5lclwiKTtcclxuICB0b2Rvc0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICB1cGRhdGVQcm9qZWN0TGlzdCgpO1xyXG4gIHJlbW92ZVRvZG9Gb3JtKCk7XHJcbn07XHJcblxyXG5jb25zdCByZW1vdmVUb2RvRm9ybSA9ICgpID0+IHtcclxuICBjb25zdCB0b2RvQmFja2dyb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1iYWNrZ3JvdW5kXCIpO1xyXG4gIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodG9kb0JhY2tncm91bmQpO1xyXG5cclxuICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtLWNvbnRhaW5lclwiKTtcclxuICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGZvcm1Db250YWluZXIpO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgYWRkVG9kb0Zvcm0sIHN1Ym1pdFRvZG9Gb3JtIH07IiwiaW1wb3J0IHsgcHJvamVjdExpc3RBcnJheSB9IGZyb20gXCIuXCI7XHJcblxyXG5jb25zdCB1cGRhdGVQcm9qZWN0TGlzdCA9ICgpID0+IHtcclxuICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1saXN0XCIpO1xyXG4gIHByb2plY3RMaXN0LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdEFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0TGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcHJvamVjdExpc3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWxpc3QtaXRlbVwiKTtcclxuICAgIHByb2plY3RMaXN0SXRlbS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaWRcIiwgaSk7XHJcbiAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdEl0ZW0pO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3RJdGVtVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBwcm9qZWN0SXRlbVRleHQuY2xhc3NMaXN0LmFkZChcInByb2plY3QtaXRlbS10ZXh0XCIpO1xyXG4gICAgcHJvamVjdEl0ZW1UZXh0LnRleHRDb250ZW50ID0gcHJvamVjdExpc3RBcnJheVtpXS50ZXh0Q29udGVudC50b1VwcGVyQ2FzZSgpO1xyXG4gICAgcHJvamVjdExpc3RJdGVtLmFwcGVuZENoaWxkKHByb2plY3RJdGVtVGV4dCk7XHJcblxyXG4gICAgY29uc3QgcHJvamVjdEl0ZW1BbW91bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcHJvamVjdEl0ZW1BbW91bnQuY2xhc3NMaXN0LmFkZChcInByb2plY3QtaXRlbS1hbW91bnRcIik7XHJcbiAgICBwcm9qZWN0SXRlbUFtb3VudC50ZXh0Q29udGVudCA9IHByb2plY3RMaXN0QXJyYXlbaV0ubGVuZ3RoO1xyXG4gICAgcHJvamVjdExpc3RJdGVtLmFwcGVuZENoaWxkKHByb2plY3RJdGVtQW1vdW50KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBwcm9qZWN0TGlzdEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtbGlzdC1pdGVtXCIpO1xyXG5cclxuICBwcm9qZWN0TGlzdEl0ZW0uZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gc2hvd1RvZG9zRnJvbVByb2plY3QgKCkge1xyXG4gICAgICBjb25zdCBzZWxlY3RlZFByb2plY3QgPSBwcm9qZWN0TGlzdEFycmF5W3Byb2plY3QuZGF0YXNldC5wcm9qZWN0SWRdO1xyXG5cclxuICAgICAgY29uc3Qgc2hvd1RvZG9zTGlzdCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB0b2Rvc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kb3MtY29udGFpbmVyXCIpO1xyXG4gICAgICAgIHRvZG9zQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0ZWRQcm9qZWN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBjb25zdCB0b2RvSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICB0b2RvSXRlbS5jbGFzc0xpc3QuYWRkKFwidG9kby1pdGVtXCIpO1xyXG4gICAgICAgICAgdG9kb0l0ZW0uc2V0QXR0cmlidXRlKFwiZGF0YS10b2RvLWlkXCIsIGkpO1xyXG4gICAgICAgICAgdG9kb3NDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0l0ZW0pO1xyXG5cclxuICAgICAgICAgIGNvbnN0IHRvZG9JdGVtTGVmdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICB0b2RvSXRlbUxlZnRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRvZG8taXRlbS1sZWZ0LWNvbnRhaW5lclwiKTtcclxuICAgICAgICAgIHRvZG9JdGVtLmFwcGVuZENoaWxkKHRvZG9JdGVtTGVmdENvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgdG9kb0l0ZW1MZWZ0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiBzaG93VG9kb0l0ZW0gKCkge1xyXG4gICAgICAgICAgICBjb25zdCB0b2RvQmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIHRvZG9CYWNrZ3JvdW5kLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kby1iYWNrZ3JvdW5kXCIpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRvZG9CYWNrZ3JvdW5kKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgZm9ybUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZvcm0tY29udGFpbmVyXCIpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IGNhbmNlbEJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvbkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNhbmNlbC1wcm9qZWN0LWJ1dHRvbi1jb250YWluZXJcIik7XHJcbiAgICAgICAgICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uQ29udGFpbmVyKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBleGl0VG9kb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgIGV4aXRUb2RvQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZXhpdC10b2RvLWJ1dHRvblwiKTtcclxuICAgICAgICAgICAgZXhpdFRvZG9CdXR0b24udGV4dENvbnRlbnQgPSBcIlhcIjtcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGV4aXRUb2RvQnV0dG9uKTtcclxuXHJcbiAgICAgICAgICAgIGV4aXRUb2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBleGl0VG9kbyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0b2RvRGV0YWlsc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIHRvZG9EZXRhaWxzQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kby1kZXRhaWxzLWNvbnRhaW5lclwiKTtcclxuICAgICAgICAgICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRGV0YWlsc0NvbnRhaW5lcik7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRUb2RvSXRlbVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgc2VsZWN0ZWRUb2RvSXRlbVRpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2VsZWN0ZWQtdG9kby1pdGVtLXRpdGxlXCIpO1xyXG4gICAgICAgICAgICBzZWxlY3RlZFRvZG9JdGVtVGl0bGUudGV4dENvbnRlbnQgPSBzZWxlY3RlZFByb2plY3RbaV0udGl0bGU7XHJcbiAgICAgICAgICAgIHRvZG9EZXRhaWxzQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlbGVjdGVkVG9kb0l0ZW1UaXRsZSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZFRvZG9JdGVtRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkVG9kb0l0ZW1EdWVEYXRlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2VsZWN0ZWQtdG9kby1pdGVtLWR1ZS1kYXRlXCIpO1xyXG4gICAgICAgICAgICBzZWxlY3RlZFRvZG9JdGVtRHVlRGF0ZS50ZXh0Q29udGVudCA9IGBEdWUgZGF0ZTogJHtzZWxlY3RlZFByb2plY3RbaV0uZHVlRGF0ZX1gO1xyXG4gICAgICAgICAgICB0b2RvRGV0YWlsc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxlY3RlZFRvZG9JdGVtRHVlRGF0ZSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZFRvZG9JdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBzZWxlY3RlZFRvZG9JdGVtRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzZWxlY3RlZC10b2RvLWl0ZW0tZGVzY3JpcHRpb25cIik7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkVG9kb0l0ZW1EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGBEZXNjcmlwdGlvbjogJHtzZWxlY3RlZFByb2plY3RbaV0uZGVzY3JpcHRpb259YDtcclxuICAgICAgICAgICAgdG9kb0RldGFpbHNDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZWN0ZWRUb2RvSXRlbURlc2NyaXB0aW9uKTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIGNvbnN0IHRvZG9JdGVtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgdG9kb0l0ZW1UaXRsZS5jbGFzc0xpc3QuYWRkKFwidG9kby1pdGVtLXRpdGxlXCIpO1xyXG4gICAgICAgICAgdG9kb0l0ZW1UaXRsZS50ZXh0Q29udGVudCA9IHNlbGVjdGVkUHJvamVjdFtpXS50aXRsZTtcclxuICAgICAgICAgIHRvZG9JdGVtTGVmdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvSXRlbVRpdGxlKTtcclxuXHJcbiAgICAgICAgICBpZiAoc2VsZWN0ZWRQcm9qZWN0W2ldLmhpZ2hQcmlvcml0eSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvZG9JdGVtSGlnaFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgdG9kb0l0ZW1IaWdoUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInRvZG8taXRlbS1oaWdoLXByaW9yaXR5XCIpO1xyXG4gICAgICAgICAgICB0b2RvSXRlbUhpZ2hQcmlvcml0eS50ZXh0Q29udGVudCA9IFwiSElHSFwiO1xyXG4gICAgICAgICAgICB0b2RvSXRlbUxlZnRDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0l0ZW1IaWdoUHJpb3JpdHkpO1xyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICBjb25zdCB0b2RvSXRlbVJpZ2h0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgIHRvZG9JdGVtUmlnaHRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRvZG8taXRlbS1yaWdodC1jb250YWluZXJcIik7XHJcbiAgICAgICAgICB0b2RvSXRlbS5hcHBlbmRDaGlsZCh0b2RvSXRlbVJpZ2h0Q29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICBjb25zdCBpdGVtRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICBpdGVtRHVlRGF0ZS5jbGFzc0xpc3QuYWRkKFwidG9kby1pdGVtLWR1ZS1kYXRlXCIpO1xyXG4gICAgICAgICAgaXRlbUR1ZURhdGUudGV4dENvbnRlbnQgPSBzZWxlY3RlZFByb2plY3RbaV0uZHVlRGF0ZTtcclxuICAgICAgICAgIHRvZG9JdGVtUmlnaHRDb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbUR1ZURhdGUpO1xyXG5cclxuICAgICAgICAgIGNvbnN0IGVkaXRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNsYXNzXCIpO1xyXG4gICAgICAgICAgZWRpdEljb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlZGl0LWljb25cIik7XHJcbiAgICAgICAgICBlZGl0SWNvbi5jbGFzc0xpc3QuYWRkKFwiaWRcIiwgXCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCIpO1xyXG4gICAgICAgICAgZWRpdEljb24udGV4dENvbnRlbnQgPSBcImVkaXRcIjtcclxuICAgICAgICAgIHRvZG9JdGVtUmlnaHRDb250YWluZXIuYXBwZW5kQ2hpbGQoZWRpdEljb24pO1xyXG5cclxuICAgICAgICAgIGVkaXRJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlZGl0VG9kb0l0ZW0pO1xyXG5cclxuICAgICAgICAgIGZ1bmN0aW9uIGVkaXRUb2RvSXRlbSAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvZG9CYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgdG9kb0JhY2tncm91bmQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvLWJhY2tncm91bmRcIik7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodG9kb0JhY2tncm91bmQpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBmb3JtQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZm9ybS1jb250YWluZXJcIik7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgY2FuY2VsQnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2FuY2VsLXByb2plY3QtYnV0dG9uLWNvbnRhaW5lclwiKTtcclxuICAgICAgICAgICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b25Db250YWluZXIpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IGV4aXRUb2RvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgZXhpdFRvZG9CdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJleGl0LXRvZG8tYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICBleGl0VG9kb0J1dHRvbi50ZXh0Q29udGVudCA9IFwiWFwiO1xyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoZXhpdFRvZG9CdXR0b24pO1xyXG5cclxuICAgICAgICAgICAgZXhpdFRvZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV4aXRUb2RvKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRvZG9EZXRhaWxzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgdG9kb0RldGFpbHNDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvLWRldGFpbHMtY29udGFpbmVyXCIpO1xyXG4gICAgICAgICAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9EZXRhaWxzQ29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkVGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkVGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNlbGVjdGVkLXRpdGxlLWxhYmVsXCIpO1xyXG4gICAgICAgICAgICBzZWxlY3RlZFRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSBcIlRpdGxlXCI7XHJcbiAgICAgICAgICAgIHRvZG9EZXRhaWxzQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlbGVjdGVkVGl0bGVMYWJlbCk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRUb2RvSXRlbVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgICAgICBzZWxlY3RlZFRvZG9JdGVtVGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzZWxlY3RlZC10aXRsZS1pbnB1dFwiKTtcclxuICAgICAgICAgICAgc2VsZWN0ZWRUb2RvSXRlbVRpdGxlLnZhbHVlID0gc2VsZWN0ZWRQcm9qZWN0W2ldLnRpdGxlO1xyXG4gICAgICAgICAgICB0b2RvRGV0YWlsc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxlY3RlZFRvZG9JdGVtVGl0bGUpO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWREdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBzZWxlY3RlZER1ZURhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNlbGVjdGVkLWR1ZS1kYXRlLWxhYmVsXCIpO1xyXG4gICAgICAgICAgICBzZWxlY3RlZER1ZURhdGVMYWJlbC50ZXh0Q29udGVudCA9IFwiRHVlIERhdGVcIjtcclxuICAgICAgICAgICAgdG9kb0RldGFpbHNDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZWN0ZWREdWVEYXRlTGFiZWwpO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRUb2RvSXRlbUR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkVG9kb0l0ZW1EdWVEYXRlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2VsZWN0ZWQtZHVlLWRhdGUtaW5wdXRcIik7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkVG9kb0l0ZW1EdWVEYXRlLnZhbHVlID0gc2VsZWN0ZWRQcm9qZWN0W2ldLmR1ZURhdGU7XHJcbiAgICAgICAgICAgIHRvZG9EZXRhaWxzQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlbGVjdGVkVG9kb0l0ZW1EdWVEYXRlKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkRGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkRGVzY3JpcHRpb25MYWJlbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNlbGVjdGVkLWRlc2NyaXB0aW9uLWxhYmVsXCIpO1xyXG4gICAgICAgICAgICBzZWxlY3RlZERlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uXCI7XHJcbiAgICAgICAgICAgIHRvZG9EZXRhaWxzQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlbGVjdGVkRGVzY3JpcHRpb25MYWJlbCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZFRvZG9JdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkVG9kb0l0ZW1EZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNlbGVjdGVkLWRlc2NyaXB0aW9uLWlucHV0XCIpO1xyXG4gICAgICAgICAgICBzZWxlY3RlZFRvZG9JdGVtRGVzY3JpcHRpb24udmFsdWUgPSBzZWxlY3RlZFByb2plY3RbaV0uZGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgIHRvZG9EZXRhaWxzQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlbGVjdGVkVG9kb0l0ZW1EZXNjcmlwdGlvbik7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZExvd1ByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkTG93UHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxvdy1wcmlvcml0eS1sYWJlbFwiKTtcclxuICAgICAgICAgICAgc2VsZWN0ZWRMb3dQcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gXCJMT1dcIjtcclxuICAgICAgICAgICAgdG9kb0RldGFpbHNDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZWN0ZWRMb3dQcmlvcml0eUxhYmVsKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkVG9kb0l0ZW1Mb3dQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICAgICAgc2VsZWN0ZWRUb2RvSXRlbUxvd1ByaW9yaXR5LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcclxuICAgICAgICAgICAgc2VsZWN0ZWRUb2RvSXRlbUxvd1ByaW9yaXR5LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibG93LXByaW9yaXR5XCIpO1xyXG4gICAgICAgICAgICAvLyBzZWxlY3RlZFRvZG9JdGVtTG93UHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LW9wdGlvblwiKTtcclxuICAgICAgICAgICAgc2VsZWN0ZWRUb2RvSXRlbUxvd1ByaW9yaXR5LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcmlvcml0eS1vcHRpb25cIik7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkVG9kb0l0ZW1Mb3dQcmlvcml0eS5jaGVja2VkID0gc2VsZWN0ZWRQcm9qZWN0W2ldLmxvd1ByaW9yaXR5O1xyXG4gICAgICAgICAgICB0b2RvRGV0YWlsc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxlY3RlZFRvZG9JdGVtTG93UHJpb3JpdHkpO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRIaWdoUHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgICAgICAgICAgc2VsZWN0ZWRIaWdoUHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhpZ2gtcHJpb3JpdHktbGFiZWxcIik7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkSGlnaFByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSBcIkhJR0hcIjtcclxuICAgICAgICAgICAgdG9kb0RldGFpbHNDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZWN0ZWRIaWdoUHJpb3JpdHlMYWJlbCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZFRvZG9JdGVtSGlnaFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgICAgICBzZWxlY3RlZFRvZG9JdGVtSGlnaFByaW9yaXR5LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcclxuICAgICAgICAgICAgc2VsZWN0ZWRUb2RvSXRlbUhpZ2hQcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhpZ2gtcHJpb3JpdHlcIik7XHJcbiAgICAgICAgICAgIC8vIHNlbGVjdGVkVG9kb0l0ZW1IaWdoUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LW9wdGlvblwiKTtcclxuICAgICAgICAgICAgc2VsZWN0ZWRUb2RvSXRlbUhpZ2hQcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJpb3JpdHktb3B0aW9uXCIpO1xyXG4gICAgICAgICAgICBzZWxlY3RlZFRvZG9JdGVtSGlnaFByaW9yaXR5LmNoZWNrZWQgPSBzZWxlY3RlZFByb2plY3RbaV0uaGlnaFByaW9yaXR5O1xyXG4gICAgICAgICAgICB0b2RvRGV0YWlsc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxlY3RlZFRvZG9JdGVtSGlnaFByaW9yaXR5KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHN1Ym1pdEVkaXRUb2RvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgc3VibWl0RWRpdFRvZG9CdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzdWJtaXQtdG9kby1lZGl0LWJ1dHRvblwiKTtcclxuICAgICAgICAgICAgc3VibWl0RWRpdFRvZG9CdXR0b24udGV4dENvbnRlbnQgPSBcIlN1Ym1pdCBFZGl0XCI7XHJcbiAgICAgICAgICAgIHRvZG9EZXRhaWxzQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1Ym1pdEVkaXRUb2RvQnV0dG9uKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHN1Ym1pdFRvZG9FZGl0Rm9ybSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgIGNvbnN0IEVkaXRlZFRvZG8gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBsb3dQcmlvcml0eSwgaGlnaFByaW9yaXR5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGxvd1ByaW9yaXR5LCBoaWdoUHJpb3JpdHkgfTtcclxuICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VsZWN0ZWQtdGl0bGUtaW5wdXRcIikudmFsdWU7XHJcbiAgICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlbGVjdGVkLWRlc2NyaXB0aW9uLWlucHV0XCIpLnZhbHVlO1xyXG4gICAgICAgICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlbGVjdGVkLWR1ZS1kYXRlLWlucHV0XCIpLnZhbHVlO1xyXG4gICAgICAgICAgICAgIGNvbnN0IGxvd1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb3ctcHJpb3JpdHlcIikuY2hlY2tlZDtcclxuICAgICAgICAgICAgICBjb25zdCBoaWdoUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hpZ2gtcHJpb3JpdHlcIikuY2hlY2tlZDtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBjb25zdCB0b2RvRWRpdCA9IEVkaXRlZFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBsb3dQcmlvcml0eSwgaGlnaFByaW9yaXR5KTtcclxuXHJcbiAgICAgICAgICAgICAgc2VsZWN0ZWRQcm9qZWN0LnNwbGljZSh0b2RvSXRlbS5kYXRhc2V0LnRvZG9JZCwgMSwgdG9kb0VkaXQpO1xyXG4gICAgICAgICAgICAgIHNob3dUb2Rvc0xpc3QoKTtcclxuICAgICAgICAgICAgICB1cGRhdGVQcm9qZWN0TGlzdCgpO1xyXG5cclxuICAgICAgICAgICAgICBjb25zdCB0b2RvQmFja2dyb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1iYWNrZ3JvdW5kXCIpO1xyXG4gICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodG9kb0JhY2tncm91bmQpO1xyXG5cclxuICAgICAgICAgICAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtLWNvbnRhaW5lclwiKTtcclxuICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGZvcm1Db250YWluZXIpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgc3VibWl0RWRpdFRvZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN1Ym1pdFRvZG9FZGl0Rm9ybSk7XHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIGNvbnN0IGRlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2xhc3NcIik7XHJcbiAgICAgICAgICBkZWxldGVJY29uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGVsZXRlLWljb25cIik7XHJcbiAgICAgICAgICBkZWxldGVJY29uLmNsYXNzTGlzdC5hZGQoXCJpZFwiLCBcIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIik7XHJcbiAgICAgICAgICBkZWxldGVJY29uLnRleHRDb250ZW50ID0gXCJkZWxldGVcIjtcclxuICAgICAgICAgIHRvZG9JdGVtUmlnaHRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbik7XHJcblxyXG4gICAgICAgICAgZGVsZXRlSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGVsZXRlVG9kb0l0ZW0pO1xyXG5cclxuICAgICAgICAgIGZ1bmN0aW9uIGRlbGV0ZVRvZG9JdGVtICgpIHtcclxuICAgICAgICAgICAgdG9kb3NDb250YWluZXIucmVtb3ZlQ2hpbGQodG9kb0l0ZW0pO1xyXG4gICAgICAgICAgICBzZWxlY3RlZFByb2plY3Quc3BsaWNlKHRvZG9JdGVtLmRhdGFzZXQudG9kb0lkLCAxKTtcclxuICAgICAgICAgICAgc2hvd1RvZG9zTGlzdCgpO1xyXG4gICAgICAgICAgICB1cGRhdGVQcm9qZWN0TGlzdCgpO1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgc2hvd1RvZG9zTGlzdCgpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBleGl0VG9kbyA9ICgpID0+IHtcclxuICBjb25zdCB0b2RvQmFja2dyb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1iYWNrZ3JvdW5kXCIpO1xyXG4gIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodG9kb0JhY2tncm91bmQpO1xyXG5cclxuICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtLWNvbnRhaW5lclwiKTtcclxuICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGZvcm1Db250YWluZXIpO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgdXBkYXRlUHJvamVjdExpc3QgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
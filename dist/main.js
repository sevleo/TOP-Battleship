/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100&family=Lato:wght@300&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;1,200;1,300;1,400;1,500&family=Roboto:wght@100&family=Rubik:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Nunito", sans-serif;
  font-weight: 300;
  /* pointer-events: none;
  touch-action: none; */
  user-select: none;
}

body {
  height: 100vh;
  width: 100vw;
}

.main {
  display: grid;
  height: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 1fr;
}

.header {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}

.content {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  /* padding-top: 40px; */
}

.commands {
  align-self: center;
  justify-self: start;
  display: flex;
  gap: 15px;
  margin-bottom: 50px;
}

.commands > div {
  /* user-select: none; */
  cursor: pointer;
  font-weight: 100;
  font-size: 20px;
}

.commands > div:hover {
  color: blue;
  text-decoration: underline;
  text-decoration-thickness: 1px;
}

.boards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 50px;
  width: 100%;
  /* gap: 20px; */
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
}

.boards > .playerOne-board,
.boards > .playerTwo-board {
  width: 400px;
  height: 400px;
  outline: 0.5px solid rgb(118, 118, 118, 0.6);
  justify-self: center;
  margin: 20px;
}

.playerOne-board {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}

.playerTwo-board {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
}

.player-one-board-name {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  align-self: flex-start;
  justify-self: center;
}

.player-two-board-name {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  align-self: flex-start;
  justify-self: center;
}

.playerOne-board,
.playerTwo-board {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
}

.playerOne-board > div,
.playerTwo-board > div {
  outline: 0.5px solid rgba(118, 118, 118, 0.6);
  position: relative;
  /* z-index: 1; */
}

.playerTwo-board > .ship-cell {
  background-color: rgba(0, 0, 255, 0.3);
}

.playerOne-board > .ship-cell {
  outline: 0.5px solid rgba(118, 118, 118, 0.2);
}

.ship {
  /* z-index: 2; */
  position: absolute;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 255, 0.1);
  outline: 1px solid blue;
}

.draggable {
  cursor: move !important;
  z-index: 5;
  /* pointer-events: all;
  touch-action: all; */
}

/* .ship:hover {
  cursor: move;
} */

[draggable="true"] {
  cursor: move !important;
}

[draggable="true"]:hover {
  z-index: 9999;
  cursor: move !important;
}

/* .draggable {
  cursor: alias;
} */

[droppable="true"] {
  /* border: 2px dashed #aaa; */
  /* pointer-events: all; */
}

.mark_col {
  position: absolute;
  width: 100%;
  text-align: center;
  top: -20px;
  font-size: 10px;
  user-select: none;
}

.mark_row {
  position: absolute;
  text-align: right;
  width: 50%;
  left: -30px;
  top: 10px;
  font-size: 10px;
  user-select: none;
}

.dragging {
  outline: 1px green solid;
  background-color: rgba(0, 255, 0, 0.5);
}

[droppable="true"] {
  background-color: rgba(0, 128, 0, 0.2);
}

[droppable="false"] {
  background-color: rgba(255, 0, 0, 0.3);
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,iCAAiC;EACjC,gBAAgB;EAChB;uBACqB;EACrB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,0BAA0B;EAC1B,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,kBAAkB;EAClB,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,aAAa;EACb,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,eAAe;EACf,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,0BAA0B;EAC1B,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,4BAA4B;EAC5B,WAAW;EACX,eAAe;EACf,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;;EAEE,YAAY;EACZ,aAAa;EACb,4CAA4C;EAC5C,oBAAoB;EACpB,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,sBAAsB;EACtB,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,sBAAsB;EACtB,oBAAoB;AACtB;;AAEA;;EAEE,aAAa;EACb,sCAAsC;AACxC;;AAEA;;EAEE,6CAA6C;EAC7C,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,6CAA6C;AAC/C;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,OAAO;EACP,MAAM;EACN,sCAAsC;EACtC,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;EACvB,UAAU;EACV;sBACoB;AACtB;;AAEA;;GAEG;;AAEH;EACE,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;;GAEG;;AAEH;EACE,6BAA6B;EAC7B,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,kBAAkB;EAClB,UAAU;EACV,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,UAAU;EACV,WAAW;EACX,SAAS;EACT,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,wBAAwB;EACxB,sCAAsC;AACxC;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,sCAAsC;AACxC","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100&family=Lato:wght@300&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;1,200;1,300;1,400;1,500&family=Roboto:wght@100&family=Rubik:wght@300&display=swap\");\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Nunito\", sans-serif;\n  font-weight: 300;\n  /* pointer-events: none;\n  touch-action: none; */\n  user-select: none;\n}\n\nbody {\n  height: 100vh;\n  width: 100vw;\n}\n\n.main {\n  display: grid;\n  height: 100%;\n  grid-template-columns: 1fr;\n  grid-template-rows: 100px 1fr;\n}\n\n.header {\n  grid-column: 1 / 2;\n  grid-row: 1 / 2;\n}\n\n.content {\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: start;\n  /* padding-top: 40px; */\n}\n\n.commands {\n  align-self: center;\n  justify-self: start;\n  display: flex;\n  gap: 15px;\n  margin-bottom: 50px;\n}\n\n.commands > div {\n  /* user-select: none; */\n  cursor: pointer;\n  font-weight: 100;\n  font-size: 20px;\n}\n\n.commands > div:hover {\n  color: blue;\n  text-decoration: underline;\n  text-decoration-thickness: 1px;\n}\n\n.boards {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 50px;\n  width: 100%;\n  /* gap: 20px; */\n  justify-content: center;\n  align-items: center;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.boards > .playerOne-board,\n.boards > .playerTwo-board {\n  width: 400px;\n  height: 400px;\n  outline: 0.5px solid rgb(118, 118, 118, 0.6);\n  justify-self: center;\n  margin: 20px;\n}\n\n.playerOne-board {\n  grid-column: 1 / 2;\n  grid-row: 1 / 2;\n}\n\n.playerTwo-board {\n  grid-column: 2 / 3;\n  grid-row: 1 / 2;\n}\n\n.player-one-board-name {\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n  align-self: flex-start;\n  justify-self: center;\n}\n\n.player-two-board-name {\n  grid-column: 2 / 3;\n  grid-row: 2 / 3;\n  align-self: flex-start;\n  justify-self: center;\n}\n\n.playerOne-board,\n.playerTwo-board {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n}\n\n.playerOne-board > div,\n.playerTwo-board > div {\n  outline: 0.5px solid rgba(118, 118, 118, 0.6);\n  position: relative;\n  /* z-index: 1; */\n}\n\n.playerTwo-board > .ship-cell {\n  background-color: rgba(0, 0, 255, 0.3);\n}\n\n.playerOne-board > .ship-cell {\n  outline: 0.5px solid rgba(118, 118, 118, 0.2);\n}\n\n.ship {\n  /* z-index: 2; */\n  position: absolute;\n  left: 0;\n  top: 0;\n  background-color: rgba(0, 0, 255, 0.1);\n  outline: 1px solid blue;\n}\n\n.draggable {\n  cursor: move !important;\n  z-index: 5;\n  /* pointer-events: all;\n  touch-action: all; */\n}\n\n/* .ship:hover {\n  cursor: move;\n} */\n\n[draggable=\"true\"] {\n  cursor: move !important;\n}\n\n[draggable=\"true\"]:hover {\n  z-index: 9999;\n  cursor: move !important;\n}\n\n/* .draggable {\n  cursor: alias;\n} */\n\n[droppable=\"true\"] {\n  /* border: 2px dashed #aaa; */\n  /* pointer-events: all; */\n}\n\n.mark_col {\n  position: absolute;\n  width: 100%;\n  text-align: center;\n  top: -20px;\n  font-size: 10px;\n  user-select: none;\n}\n\n.mark_row {\n  position: absolute;\n  text-align: right;\n  width: 50%;\n  left: -30px;\n  top: 10px;\n  font-size: 10px;\n  user-select: none;\n}\n\n.dragging {\n  outline: 1px green solid;\n  background-color: rgba(0, 255, 0, 0.5);\n}\n\n[droppable=\"true\"] {\n  background-color: rgba(0, 128, 0, 0.2);\n}\n\n[droppable=\"false\"] {\n  background-color: rgba(255, 0, 0, 0.3);\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/DOMHandler.js":
/*!***************************!*\
  !*** ./src/DOMHandler.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _eventManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventManager */ "./src/eventManager.js");
// eslint-disable-next-line import/no-cycle


/* eslint-disable prefer-const */
const DOMHandler = (() => {
  const body = document.querySelector("body");
  let playerOneBoard = null;
  let playerTwoBoard = null;
  let playerOneShips = null;
  let playerTwoShips = null;

  const staticLayoutElements = [
    {
      type: "div",
      class: "main",
      childrenElements: [
        {
          type: "div",
          class: "header",
        },
        {
          type: "div",
          class: "content",
          childrenElements: [
            {
              type: "div",
              class: "commands",
              childrenElements: [
                {
                  type: "div",
                  class: "randomize",
                  textContent: "randomize",
                },
                {
                  type: "div",
                  class: "start-game",
                  textContent: "start",
                },
              ],
            },
            {
              type: "div",
              class: "boards",
              childrenElements: [
                {
                  type: "div",
                  class: "playerOne-board",
                },
                {
                  type: "div",
                  class: "playerTwo-board",
                },
                {
                  type: "div",
                  class: "player-one-board-name",
                  textContent: "Your board",
                },
                {
                  type: "div",
                  class: "player-two-board-name",
                  textContent: "Opponent's board",
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  function createPageLayout(parent, tree) {
    tree.forEach((element) => {
      const newElement = document.createElement(element.type);
      if (element.class) {
        newElement.classList.add(element.class);
      }
      if (element.textContent) {
        newElement.textContent = element.textContent;
      }
      parent.append(newElement);
      if (element.childrenElements) {
        createPageLayout(newElement, element.childrenElements);
      }
    });
  }

  function createBoardCells() {
    const playerOneBoardDiv = document.querySelector(".playerOne-board");
    const playerTwoBoardDiv = document.querySelector(".playerTwo-board");

    DOMHandler.playerOneBoard.forEach((element) => {
      const newCell = document.createElement("div");
      newCell.classList.add(element.coordinates);
      newCell.classList.add("cell");
      if (element.occupied) {
        newCell.setAttribute("droppable", false);
      } else {
        newCell.setAttribute("droppable", true);
      }

      playerOneBoardDiv.append(newCell);

      // eslint-disable-next-line no-lone-blocks
      {
        if (newCell.classList[0] === "1,1") {
          const markCol = document.createElement("div");
          markCol.classList.add("mark_col");
          markCol.textContent = "A";
          newCell.append(markCol);
          const markRow = document.createElement("div");
          markRow.classList.add("mark_row");
          markRow.textContent = "1";
          newCell.append(markRow);
        }
        if (newCell.classList[0] === "1,2") {
          const markCol = document.createElement("div");
          markCol.classList.add("mark_col");
          markCol.textContent = "B";
          newCell.append(markCol);
        }
        if (newCell.classList[0] === "1,3") {
          const markCol = document.createElement("div");
          markCol.classList.add("mark_col");
          markCol.textContent = "C";
          newCell.append(markCol);
        }
        if (newCell.classList[0] === "1,4") {
          const markCol = document.createElement("div");
          markCol.classList.add("mark_col");
          markCol.textContent = "D";
          newCell.append(markCol);
        }
        if (newCell.classList[0] === "1,5") {
          const markCol = document.createElement("div");
          markCol.classList.add("mark_col");
          markCol.textContent = "E";
          newCell.append(markCol);
        }
        if (newCell.classList[0] === "1,6") {
          const markCol = document.createElement("div");
          markCol.classList.add("mark_col");
          markCol.textContent = "F";
          newCell.append(markCol);
        }
        if (newCell.classList[0] === "1,7") {
          const markCol = document.createElement("div");
          markCol.classList.add("mark_col");
          markCol.textContent = "G";
          newCell.append(markCol);
        }
        if (newCell.classList[0] === "1,8") {
          const markCol = document.createElement("div");
          markCol.classList.add("mark_col");
          markCol.textContent = "H";
          newCell.append(markCol);
        }
        if (newCell.classList[0] === "1,9") {
          const markCol = document.createElement("div");
          markCol.classList.add("mark_col");
          markCol.textContent = "I";
          newCell.append(markCol);
        }
        if (newCell.classList[0] === "1,10") {
          const markCol = document.createElement("div");
          markCol.classList.add("mark_col");
          markCol.textContent = "J";
          newCell.append(markCol);
        }
        if (newCell.classList[0] === "2,1") {
          const markRow = document.createElement("div");
          markRow.classList.add("mark_row");
          markRow.textContent = "2";
          newCell.append(markRow);
        }
        if (newCell.classList[0] === "3,1") {
          const markRow = document.createElement("div");
          markRow.classList.add("mark_row");
          markRow.textContent = "3";
          newCell.append(markRow);
        }
        if (newCell.classList[0] === "4,1") {
          const markRow = document.createElement("div");
          markRow.classList.add("mark_row");
          markRow.textContent = "4";
          newCell.append(markRow);
        }
        if (newCell.classList[0] === "5,1") {
          const markRow = document.createElement("div");
          markRow.classList.add("mark_row");
          markRow.textContent = "5";
          newCell.append(markRow);
        }
        if (newCell.classList[0] === "6,1") {
          const markRow = document.createElement("div");
          markRow.classList.add("mark_row");
          markRow.textContent = "6";
          newCell.append(markRow);
        }
        if (newCell.classList[0] === "7,1") {
          const markRow = document.createElement("div");
          markRow.classList.add("mark_row");
          markRow.textContent = "7";
          newCell.append(markRow);
        }
        if (newCell.classList[0] === "8,1") {
          const markRow = document.createElement("div");
          markRow.classList.add("mark_row");
          markRow.textContent = "8";
          newCell.append(markRow);
        }
        if (newCell.classList[0] === "9,1") {
          const markRow = document.createElement("div");
          markRow.classList.add("mark_row");
          markRow.textContent = "9";
          newCell.append(markRow);
        }
        if (newCell.classList[0] === "10,1") {
          const markRow = document.createElement("div");
          markRow.classList.add("mark_row");
          markRow.textContent = "10";
          newCell.append(markRow);
        }
      }
    });

    DOMHandler.playerTwoBoard.forEach((element) => {
      const newCell = document.createElement("div");
      newCell.classList.add(element.coordinates);
      newCell.classList.add("cell");
      playerTwoBoardDiv.append(newCell);
      if (newCell.classList[0] === "1,1") {
        const markCol = document.createElement("div");
        markCol.classList.add("mark_col");
        markCol.textContent = "A";
        newCell.append(markCol);
        const markRow = document.createElement("div");
        markRow.classList.add("mark_row");
        markRow.textContent = "1";
        newCell.append(markRow);
      }
      if (newCell.classList[0] === "1,2") {
        const markCol = document.createElement("div");
        markCol.classList.add("mark_col");
        markCol.textContent = "B";
        newCell.append(markCol);
      }
      if (newCell.classList[0] === "1,3") {
        const markCol = document.createElement("div");
        markCol.classList.add("mark_col");
        markCol.textContent = "C";
        newCell.append(markCol);
      }
      if (newCell.classList[0] === "1,4") {
        const markCol = document.createElement("div");
        markCol.classList.add("mark_col");
        markCol.textContent = "D";
        newCell.append(markCol);
      }
      if (newCell.classList[0] === "1,5") {
        const markCol = document.createElement("div");
        markCol.classList.add("mark_col");
        markCol.textContent = "E";
        newCell.append(markCol);
      }
      if (newCell.classList[0] === "1,6") {
        const markCol = document.createElement("div");
        markCol.classList.add("mark_col");
        markCol.textContent = "F";
        newCell.append(markCol);
      }
      if (newCell.classList[0] === "1,7") {
        const markCol = document.createElement("div");
        markCol.classList.add("mark_col");
        markCol.textContent = "G";
        newCell.append(markCol);
      }
      if (newCell.classList[0] === "1,8") {
        const markCol = document.createElement("div");
        markCol.classList.add("mark_col");
        markCol.textContent = "H";
        newCell.append(markCol);
      }
      if (newCell.classList[0] === "1,9") {
        const markCol = document.createElement("div");
        markCol.classList.add("mark_col");
        markCol.textContent = "I";
        newCell.append(markCol);
      }
      if (newCell.classList[0] === "1,10") {
        const markCol = document.createElement("div");
        markCol.classList.add("mark_col");
        markCol.textContent = "J";
        newCell.append(markCol);
      }
      if (newCell.classList[0] === "2,1") {
        const markRow = document.createElement("div");
        markRow.classList.add("mark_row");
        markRow.textContent = "2";
        newCell.append(markRow);
      }
      if (newCell.classList[0] === "3,1") {
        const markRow = document.createElement("div");
        markRow.classList.add("mark_row");
        markRow.textContent = "3";
        newCell.append(markRow);
      }
      if (newCell.classList[0] === "4,1") {
        const markRow = document.createElement("div");
        markRow.classList.add("mark_row");
        markRow.textContent = "4";
        newCell.append(markRow);
      }
      if (newCell.classList[0] === "5,1") {
        const markRow = document.createElement("div");
        markRow.classList.add("mark_row");
        markRow.textContent = "5";
        newCell.append(markRow);
      }
      if (newCell.classList[0] === "6,1") {
        const markRow = document.createElement("div");
        markRow.classList.add("mark_row");
        markRow.textContent = "6";
        newCell.append(markRow);
      }
      if (newCell.classList[0] === "7,1") {
        const markRow = document.createElement("div");
        markRow.classList.add("mark_row");
        markRow.textContent = "7";
        newCell.append(markRow);
      }
      if (newCell.classList[0] === "8,1") {
        const markRow = document.createElement("div");
        markRow.classList.add("mark_row");
        markRow.textContent = "8";
        newCell.append(markRow);
      }
      if (newCell.classList[0] === "2,1") {
        const markRow = document.createElement("div");
        markRow.classList.add("mark_row");
        markRow.textContent = "2";
        newCell.append(markRow);
      }
      if (newCell.classList[0] === "9,1") {
        const markRow = document.createElement("div");
        markRow.classList.add("mark_row");
        markRow.textContent = "9";
        newCell.append(markRow);
      }
      if (newCell.classList[0] === "10,1") {
        const markRow = document.createElement("div");
        markRow.classList.add("mark_row");
        markRow.textContent = "10";
        newCell.append(markRow);
      }
    });
  }

  function findDivByCoordinates(coordinates, parentDiv) {
    const div = parentDiv.querySelector(`[class*="${coordinates}"].cell`);
    return div;
  }

  function drawShips() {
    const parentDivBoardOne = document.querySelector(".playerOne-board");
    DOMHandler.playerOneShips.forEach((ship) => {
      // console.log(`${ship.coordinates[0][0]},${ship.coordinates[0][1]}`);
      const div = findDivByCoordinates(
        `${ship.coordinates[0][0]},${ship.coordinates[0][1]}`,
        parentDivBoardOne,
      );

      const shipDiv = document.createElement("div");
      shipDiv.classList.add("ship");
      shipDiv.classList.add("draggable");
      // shipDiv.setAttribute("draggable", true);
      // shipDiv.setAttribute("draggable", true);

      if (ship.position === "h") {
        const width = 40 * ship.length;
        shipDiv.style.width = `${width}px`;
        shipDiv.style.height = "40px";
      }
      if (ship.position === "v") {
        const height = 40 * ship.length;
        shipDiv.style.height = `${height}px`;
        shipDiv.style.width = "40px";
      }
      div.append(shipDiv);

      ship.coordinates.forEach((c) => {
        const className = `${c[0]},${c[1]}`;
        const shipCells = Array.from(
          parentDivBoardOne.getElementsByTagName("div"),
        ).filter((elem) => elem.classList.contains(className));
        shipCells.forEach((element) => {
          // element.classList.add("ship-cell");
        });
      });
    });

    DOMHandler.playerTwoShips.forEach((ship) => {
      ship.coordinates.forEach((c) => {
        const parentDivBoardTwo = document.querySelector(".playerTwo-board");
        const div = findDivByCoordinates(`${c[0]},${c[1]}`, parentDivBoardTwo);
        div.classList.add("ship-cell");
      });
    });
  }

  function createDom() {
    createPageLayout(body, staticLayoutElements);
    createBoardCells();
    drawShips();
    (0,_eventManager__WEBPACK_IMPORTED_MODULE_0__["default"])();
  }

  return {
    playerOneBoard,
    playerTwoBoard,
    playerOneShips,
    playerTwoShips,
    createDom,
    findDivByCoordinates,
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOMHandler);


/***/ }),

/***/ "./src/DS_Graph.js":
/*!*************************!*\
  !*** ./src/DS_Graph.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable max-classes-per-file */

class Vertex {
  constructor(coordinates) {
    this.coordinates = coordinates;
    this.adjacencyList = [];
    this.occupied = false;
    this.occupiedByShip = false;
  }

  addNeighbor(vertex) {
    if (!this.adjacencyList.includes(vertex)) {
      this.adjacencyList.push(vertex);
    }
  }
}

class Graph {
  constructor() {
    this.vertices = [];
  }

  addVertex(x, y) {
    const vertex = new Vertex([x, y]);
    this.vertices.push(vertex);
  }

  // eslint-disable-next-line class-methods-use-this
  addEdge(vertex1, vertex2) {
    vertex1.addNeighbor(vertex2);
    vertex2.addNeighbor(vertex1);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Graph);


/***/ }),

/***/ "./src/eventManager.js":
/*!*****************************!*\
  !*** ./src/eventManager.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addDocumentEventListeners: () => (/* binding */ addDocumentEventListeners),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _DOMHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMHandler */ "./src/DOMHandler.js");
/* eslint-disable no-param-reassign */
// eslint-disable-next-line import/no-cycle



function addEventListeners() {
  const randomizeButton = document.querySelector(".randomize");
  randomizeButton.addEventListener("click", () => {
    (0,___WEBPACK_IMPORTED_MODULE_0__["default"])();
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addEventListeners);

function addDocumentEventListeners() {
  let draggableElement = null;
  let draggableElementRect = null;

  let isDragging = false;
  let offSetX;
  let offSetY;
  let mouseDownOffsetHor = 0;
  let mouseDownOffsetVer = 0;
  let originalElementBelow = null;
  let elementBelow = null;

  // Checks if the element is getting dropped within the borders of the board
  function checkBorders() {
    if (elementBelow) {
      const elementBelowCoordinates = elementBelow.classList[0]
        .split(",")
        .map(Number);
      if (draggableElementRect.height === 80) {
        if (elementBelowCoordinates[0] > 9) {
          elementBelow.setAttribute("droppable", false);
        }
      }
      if (draggableElementRect.height === 120) {
        if (elementBelowCoordinates[0] > 8) {
          elementBelow.setAttribute("droppable", false);
        }
      }
      if (draggableElementRect.height === 160) {
        if (elementBelowCoordinates[0] > 7) {
          elementBelow.setAttribute("droppable", false);
        }
      }

      if (draggableElementRect.width === 80) {
        if (elementBelowCoordinates[1] > 9) {
          elementBelow.setAttribute("droppable", false);
        }
      }
      if (draggableElementRect.width === 120) {
        if (elementBelowCoordinates[1] > 8) {
          elementBelow.setAttribute("droppable", false);
        }
      }
      if (draggableElementRect.width === 160) {
        if (elementBelowCoordinates[1] > 7) {
          elementBelow.setAttribute("droppable", false);
        }
      }
    }
  }

  // Update droppable attribute on board
  function updateDroppableAttribute() {
    const parentDivBoardOne = document.querySelector(".playerOne-board");

    ___WEBPACK_IMPORTED_MODULE_0__.playerOneBoard.board.vertices.forEach((vertex) => {
      const div = _DOMHandler__WEBPACK_IMPORTED_MODULE_1__["default"].findDivByCoordinates(
        `${vertex.coordinates[0]},${vertex.coordinates[1]}`,
        parentDivBoardOne,
      );
      if (vertex.occupied === true) {
        div.setAttribute("droppable", false);
      }
      if (vertex.occupied === false) {
        div.setAttribute("droppable", true);
      }
    });
  }

  // The cells under the draggable element will be made undroppable when the mouse is up
  function makeUndroppable(elBelow) {
    const cells = [];
    const cellsVertices = [];
    const firstCell = elBelow;

    cells.push(firstCell);

    const firstCellClassArray = firstCell.classList[0].split(",").map(Number);
    const parentDivBoardOne = document.querySelector(".playerOne-board");
    const secondCellH = _DOMHandler__WEBPACK_IMPORTED_MODULE_1__["default"].findDivByCoordinates(
      `${firstCellClassArray[0]},${firstCellClassArray[1] + 1}`,
      parentDivBoardOne,
    );
    const thirdCellH = _DOMHandler__WEBPACK_IMPORTED_MODULE_1__["default"].findDivByCoordinates(
      `${firstCellClassArray[0]},${firstCellClassArray[1] + 2}`,
      parentDivBoardOne,
    );
    const fourthCellH = _DOMHandler__WEBPACK_IMPORTED_MODULE_1__["default"].findDivByCoordinates(
      `${firstCellClassArray[0]},${firstCellClassArray[1] + 3}`,
      parentDivBoardOne,
    );
    const secondCellV = _DOMHandler__WEBPACK_IMPORTED_MODULE_1__["default"].findDivByCoordinates(
      `${firstCellClassArray[0] + 1},${firstCellClassArray[1]}`,
      parentDivBoardOne,
    );
    const thirdCellV = _DOMHandler__WEBPACK_IMPORTED_MODULE_1__["default"].findDivByCoordinates(
      `${firstCellClassArray[0] + 2},${firstCellClassArray[1]}`,
      parentDivBoardOne,
    );
    const fourthCellV = _DOMHandler__WEBPACK_IMPORTED_MODULE_1__["default"].findDivByCoordinates(
      `${firstCellClassArray[0] + 3},${firstCellClassArray[1]}`,
      parentDivBoardOne,
    );

    if (draggableElementRect.width >= 160) {
      cells.push(secondCellH);
      cells.push(thirdCellH);
      cells.push(fourthCellH);
    } else if (draggableElementRect.width >= 120) {
      cells.push(secondCellH);
      cells.push(thirdCellH);
    } else if (draggableElementRect.width >= 80) {
      cells.push(secondCellH);
    }

    if (draggableElementRect.height >= 160) {
      cells.push(secondCellV);
      cells.push(thirdCellV);
      cells.push(fourthCellV);
    } else if (draggableElementRect.height >= 120) {
      cells.push(secondCellV);
      cells.push(thirdCellV);
    } else if (draggableElementRect.height >= 80) {
      cells.push(secondCellV);
    }

    // Set droppable attribute on the cells under draggable element
    cells.forEach((cell) => {
      if (cell) {
        cell.setAttribute("droppable", false);
        const className = cell.classList[0];
        const array = className.split(",").map(Number);
        const vertex = ___WEBPACK_IMPORTED_MODULE_0__.playerOneBoard.findVertextObjectByCoordinates(array);
        cellsVertices.push(vertex);
      }
    });

    // Update the graph accordingly
    cellsVertices.forEach((cellVertex) => {
      cellVertex.occupiedByShip = true;
      cellVertex.occupied = true;

      // Update adjacent cells:
      cellVertex.adjacencyList.forEach((adjacency) => {
        // In the graph
        adjacency.occupied = true;
        const className = `${adjacency.coordinates[0]},${adjacency.coordinates[1]}`;
        const parentDiv = document.querySelector(".playerOne-board");
        const div = parentDiv.querySelector(`[class*="${className}"].cell`);
        // In DOM
        div.setAttribute("droppable", false);
      });
    });
    console.log(___WEBPACK_IMPORTED_MODULE_0__.playerOneBoard.board.vertices);
  }

  // Mouse down
  const onMouseDown = (event) => {
    const elementsFromPoint = document.elementsFromPoint(
      event.clientX,
      event.clientY,
    );

    elementsFromPoint.forEach((el) => {
      if (el.classList.contains("draggable")) {
        draggableElement = el;
        draggableElementRect = draggableElement.getBoundingClientRect();
      }
    });

    if (draggableElement) {
      isDragging = true;
      draggableElement.style.left = 0;
      draggableElement.style.top = 0;
      draggableElement.style.zIndex = 0;
      offSetX = event.clientX;
      offSetY = event.clientY;

      draggableElement.classList.add("dragging");

      const parentRect = draggableElement.parentElement.getBoundingClientRect();

      const cells = [];
      const cellsVertices = [];
      const cellsVerticesAdjacent = [];
      const firstCell = draggableElement.parentElement;
      let secondCell;
      let thirdCell;
      let fourthCell;

      cells.push(firstCell);
      if (offSetX > parentRect.x + 120) {
        mouseDownOffsetHor = 120;
      } else if (offSetX > parentRect.x + 80) {
        mouseDownOffsetHor = 80;
      } else if (offSetX > parentRect.x + 40) {
        mouseDownOffsetHor = 40;
      } else if (offSetY > parentRect.y + 120) {
        mouseDownOffsetVer = 120;
      } else if (offSetY > parentRect.y + 80) {
        mouseDownOffsetVer = 80;
      } else if (offSetY > parentRect.y + 40) {
        mouseDownOffsetVer = 40;
      }

      // If width of draggable equal or greater than 80, grab 2nd element and put it in the cells list
      if (draggableElementRect.width >= 80) {
        const cellElements = document.elementsFromPoint(
          event.clientX - mouseDownOffsetHor + 40,
          event.clientY - mouseDownOffsetVer,
        );
        cellElements.forEach((element) => {
          if (element.classList.contains("cell")) {
            secondCell = element;
            cells.push(secondCell);
          }
        });
      }

      // If width of draggable equal or greater than 120, grab 3rd element and put it in the cells list
      if (draggableElementRect.width >= 120) {
        const cellElements = document.elementsFromPoint(
          event.clientX - mouseDownOffsetHor + 80,
          event.clientY - mouseDownOffsetVer,
        );
        cellElements.forEach((element) => {
          if (element.classList.contains("cell")) {
            thirdCell = element;
            cells.push(thirdCell);
          }
        });
      }

      // If width of draggable equal or greater than 160, grab 4th element and put it in the cells list
      if (draggableElementRect.width >= 160) {
        const cellElements = document.elementsFromPoint(
          event.clientX - mouseDownOffsetHor + 120,
          event.clientY - mouseDownOffsetVer,
        );
        cellElements.forEach((element) => {
          if (element.classList.contains("cell")) {
            fourthCell = element;
            cells.push(fourthCell);
          }
        });
      }

      // If height of draggable equal or greater than 80, grab 2nd element and put it in the cells list
      if (draggableElementRect.height >= 80) {
        const cellElements = document.elementsFromPoint(
          event.clientX - mouseDownOffsetHor,
          event.clientY - mouseDownOffsetVer + 40,
        );
        cellElements.forEach((element) => {
          if (element.classList.contains("cell")) {
            secondCell = element;
            cells.push(secondCell);
          }
        });
      }

      // If height of draggable equal or greater than 120, grab 3rd element and put it in the cells list
      if (draggableElementRect.height >= 120) {
        const cellElements = document.elementsFromPoint(
          event.clientX - mouseDownOffsetHor,
          event.clientY - mouseDownOffsetVer + 80,
        );
        cellElements.forEach((element) => {
          if (element.classList.contains("cell")) {
            thirdCell = element;
            cells.push(thirdCell);
          }
        });
      }

      // If height of draggable equal or greater than 160, grab 4th element and put it in the cells list
      if (draggableElementRect.height >= 160) {
        const cellElements = document.elementsFromPoint(
          event.clientX - mouseDownOffsetHor,
          event.clientY - mouseDownOffsetVer + 120,
        );
        cellElements.forEach((element) => {
          if (element.classList.contains("cell")) {
            fourthCell = element;
            cells.push(fourthCell);
          }
        });
      }

      // Change the droppable attribute of each cell under draggable element to true
      cells.forEach((cell) => {
        cell.setAttribute("droppable", true);
        const className = cell.classList[0];
        const array = className.split(",").map(Number);
        const vertex = ___WEBPACK_IMPORTED_MODULE_0__.playerOneBoard.findVertextObjectByCoordinates(array);
        cellsVertices.push(vertex);
      });

      // Change the droppable attribute of each cell's adjacent cell to true (except those occupied or neighbored to ships)
      cellsVertices.forEach((cellVertex) => {
        cellVertex.occupiedByShip = false;
        cellVertex.occupied = false;
        cellVertex.adjacencyList.forEach((adjacency) => {
          if (!cellsVertices.includes(adjacency)) {
            adjacency.occupied = false;
            adjacency.adjacencyList.forEach((adj) => {
              if (!cellsVertices.includes(adj)) {
                if (adj.occupiedByShip) {
                  adjacency.occupied = true;
                }
              }
            });
            if (
              adjacency.occupied === false &&
              !cellsVerticesAdjacent.includes(adjacency)
            ) {
              cellsVerticesAdjacent.push(adjacency);
            }
          }
        });
      });

      cellsVerticesAdjacent.forEach((vertex) => {
        const className = `${vertex.coordinates[0]},${vertex.coordinates[1]}`;
        const parentDiv = document.querySelector(".playerOne-board");
        const div = parentDiv.querySelector(`[class*="${className}"].cell`);
        div.setAttribute("droppable", true);
        // div.classList.add("ship-cell");
      });

      //   console.log(cells);
      //   console.log(cellsVertices);
      //   console.log(cellsVerticesAdjacent);
      //   console.log(playerOneBoard);
      const elementsBelow = document.elementsFromPoint(
        event.clientX - mouseDownOffsetHor,
        event.clientY - mouseDownOffsetVer,
      );
      elementsBelow.forEach((element) => {
        if (element.classList.contains("cell")) {
          if (element.getAttribute("droppable") === "true") {
            elementBelow = element;
            originalElementBelow = element;
          } else {
            elementBelow = null;
            originalElementBelow = null;
          }
        }
      });
    }
  };

  // Mouse move
  const onMouseMove = (event) => {
    if (isDragging) {
      const elementsBelow = document.elementsFromPoint(
        event.clientX - mouseDownOffsetHor,
        event.clientY - mouseDownOffsetVer,
      );
      elementsBelow.forEach((element) => {
        if (element.classList.contains("cell")) {
          if (element.getAttribute("droppable") === "true") {
            elementBelow = element;
          } else {
            elementBelow = null;
          }
        }
      });
      if (draggableElement) {
        draggableElement.style.left = `${event.clientX - offSetX}px`;
        draggableElement.style.top = `${event.clientY - offSetY}px`;
      }
    }
  };

  // Mouse up
  const onMouseUp = (event) => {
    if (isDragging) {
      isDragging = false;
      // let appended = false;

      if (draggableElementRect.width > 40 || draggableElementRect.height > 40) {
        let lastShipElement;

        if (draggableElementRect.width === 80) {
          lastShipElement = document.elementsFromPoint(
            event.clientX - mouseDownOffsetHor + 40,
            event.clientY - mouseDownOffsetVer,
          );
        } else if (draggableElementRect.width === 120) {
          lastShipElement = document.elementsFromPoint(
            event.clientX - mouseDownOffsetHor + 80,
            event.clientY - mouseDownOffsetVer,
          );
        } else if (draggableElementRect.width === 160) {
          lastShipElement = document.elementsFromPoint(
            event.clientX - mouseDownOffsetHor + 120,
            event.clientY - mouseDownOffsetVer,
          );
        } else if (draggableElementRect.height === 80) {
          lastShipElement = document.elementsFromPoint(
            event.clientX - mouseDownOffsetHor,
            event.clientY - mouseDownOffsetVer + 40,
          );
        } else if (draggableElementRect.height === 120) {
          lastShipElement = document.elementsFromPoint(
            event.clientX - mouseDownOffsetHor,
            event.clientY - mouseDownOffsetVer + 80,
          );
        } else if (draggableElementRect.height === 160) {
          lastShipElement = document.elementsFromPoint(
            event.clientX - mouseDownOffsetHor,
            event.clientY - mouseDownOffsetVer + 120,
          );
        }

        lastShipElement.forEach((element) => {
          if (element.classList.contains("cell")) {
            const className = element.classList[0];
            const array = className.split(",").map(Number);
            const vertex = ___WEBPACK_IMPORTED_MODULE_0__.playerOneBoard.findVertextObjectByCoordinates(array);

            vertex.adjacencyList.forEach((adjacency) => {
              if (adjacency.occupiedByShip === true) {
                if (elementBelow) {
                  elementBelow.setAttribute("droppable", false);
                }
              }
            });
          }
        });
      }

      // Check border
      checkBorders();

      if (elementBelow !== null) {
        if (elementBelow.getAttribute("droppable") === "true") {
          elementBelow.append(draggableElement);
          makeUndroppable(elementBelow);
          // appended = true;
        } else if (elementBelow.getAttribute("droppable") === "false") {
          originalElementBelow.append(draggableElement);
          makeUndroppable(originalElementBelow);
          // appended = false;
        }
      } else {
        originalElementBelow.append(draggableElement);
        makeUndroppable(originalElementBelow);
        // appended = false;
      }

      draggableElement.style.left = 0;
      draggableElement.style.top = 0;
      draggableElement.style.zIndex = 5;
      draggableElement.classList.remove("dragging");

      offSetX = null;
      offSetY = null;
      mouseDownOffsetHor = 0;
      mouseDownOffsetVer = 0;
      // if (elementBelow && appended === false) {
      //   if (elementBelow === originalElementBelow) {
      //     elementBelow.setAttribute("droppable", true);
      //   }
      // }
      // if (elementBelow === null) {
      //   originalElementBelow.setAttribute("droppable", false);
      // }
    }
    draggableElement = null;
    draggableElementRect = null;
    updateDroppableAttribute();
  };

  document.addEventListener("mousedown", onMouseDown);
  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);
}




/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _DS_Graph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DS_Graph */ "./src/DS_Graph.js");
/* eslint-disable no-param-reassign */
/* eslint-disable no-continue */



function GameboardModule() {
  const board = new _DS_Graph__WEBPACK_IMPORTED_MODULE_1__["default"]();
  const ships = [];
  const missingShots = [];

  // Create 10x10 cells as graph vertexes
  function createCells() {
    for (let i = 1; i < 11; i += 1) {
      for (let j = 1; j < 11; j += 1) {
        board.addVertex(i, j);
      }
    }
  }

  // Find the vertex object matching the given coordinates
  function findVertextObjectByCoordinates(coordinates) {
    // console.log(coordinates);
    const foundVertex = board.vertices.find(
      (vertex) =>
        JSON.stringify(vertex.coordinates) === JSON.stringify(coordinates),
    );

    if (foundVertex) {
      return foundVertex;
    }
    return null;
  }

  // Fill out adjacencyList for a vertex
  function addCellAdjacencies(vertex) {
    const y = vertex.coordinates[0];
    const x = vertex.coordinates[1];
    const potentialAdjacencies = [
      [y - 1, x - 1],
      [y - 1, x],
      [y - 1, x + 1],
      [y, x - 1],
      [y, x + 1],
      [y + 1, x - 1],
      [y + 1, x],
      [y + 1, x + 1],
    ];
    const adjacencies = [];
    potentialAdjacencies.forEach((adjacency) => {
      if (
        adjacency[0] > 0 &&
        adjacency[0] <= 10 &&
        adjacency[1] > 0 &&
        adjacency[1] <= 10
      ) {
        const adjacencyObject = findVertextObjectByCoordinates(adjacency);
        adjacencies.push(adjacencyObject);
      }
    });
    return adjacencies;
  }

  // Fill out adjacencyList for each cell vertex
  function createAdjacencies() {
    board.vertices.forEach((vertex) => {
      // eslint-disable-next-line no-param-reassign
      const adjacentVertices = addCellAdjacencies(vertex);
      adjacentVertices.forEach((adjacentVertex) => {
        board.addEdge(vertex, adjacentVertex);
      });
    });
  }

  // Fill the Board array
  function createBoard() {
    createCells();
    createAdjacencies();
  }

  // Fill the Ships array
  function createShips() {
    const shipsConfig = [
      //   {
      //     shipLength: 1,
      //   },
      //   {
      //     shipLength: 1,
      //   },
      //   {
      //     shipLength: 1,
      //   },
      //   {
      //     shipLength: 2,
      //   },
      //   {
      //     shipLength: 2,
      //   },
      {
        shipLength: 3,
      },
      {
        shipLength: 4,
      },
    ];
    shipsConfig.forEach((element) => {
      const ship = _ship__WEBPACK_IMPORTED_MODULE_0__["default"].createShip(element.shipLength);
      ships.push(ship);
    });
  }

  // Fill the missingShots array
  function recordMissingShot(coordinates) {
    const missedShotVertex = findVertextObjectByCoordinates(coordinates);
    if (!missingShots.includes(missedShotVertex.coordinates)) {
      missingShots.push(missedShotVertex.coordinates);
    }
    missedShotVertex.adjacencyList.forEach((element) => {
      if (!missingShots.includes(element.coordinates)) {
        missingShots.push(element.coordinates);
      }
    });
  }

  // Register and process attacks
  function receiveAttack(coordinates) {
    let hitRegistered = false;
    ships.some((ship) => {
      if (
        JSON.stringify(ship.coordinates).includes(JSON.stringify(coordinates))
      ) {
        ship.hit();
        hitRegistered = true;
        return true;
      }
      return false;
    });
    if (!hitRegistered) {
      recordMissingShot(coordinates);
    }
  }

  // Check if all ships on a board have been sunk
  function allShipsSunk() {
    return ships.every((ship) => ship.isSunk());
  }

  function positionShips() {
    ships.sort((a, b) => b.length - a.length);
    ships.forEach((ship) => {
      const orientation = Math.floor(Math.random() * 2) === 0 ? "v" : "h";
      ship.position = orientation;

      const filteredBoard = board.vertices.filter(
        (obj) => obj.occupied === false,
      );

      if (filteredBoard.length > 0) {
        let positionFound = false;
        while (!positionFound) {
          // eslint-disable-next-line prefer-const
          let position = [];
          // eslint-disable-next-line prefer-const
          let positionCoordinates = [];
          const firstCellIndex = Math.floor(
            Math.random() * filteredBoard.length,
          );
          const firstCellObject = filteredBoard[firstCellIndex];
          positionCoordinates.push(firstCellObject.coordinates);
          position.push(firstCellObject);
          //   console.log(position);
          for (let i = 1; i < ship.length; i += 1) {
            const nextCellObjectCoordinates =
              ship.position === "v"
                ? [
                    firstCellObject.coordinates[0] + i,
                    firstCellObject.coordinates[1],
                  ]
                : [
                    firstCellObject.coordinates[0],
                    firstCellObject.coordinates[1] + i,
                  ];
            // console.log(nextCellObjectCoordinates);
            const nextCellObject = board.vertices.filter(
              (obj) =>
                JSON.stringify(obj.coordinates) ===
                JSON.stringify(nextCellObjectCoordinates),
            );
            // console.log(nextCellObject[0]);
            if (nextCellObject[0]) {
              if (nextCellObject[0].occupied === false) {
                positionCoordinates.push(nextCellObject[0].coordinates);
                position.push(nextCellObject[0]);
              } else {
                continue;
              }
            } else {
              continue;
            }
          }

          if (position.length === ship.length) {
            ship.assignCoordinates(...positionCoordinates);

            position.forEach((p) => {
              p.occupied = true;
              p.occupiedByShip = true;
              p.adjacencyList.forEach((adj) => {
                adj.occupied = true;
              });
            });
            positionFound = true;
          }
        }
      }
    });
  }

  return {
    board,
    ships,
    missingShots,
    createBoard,
    createShips,
    receiveAttack,
    allShipsSunk,
    positionShips,
    findVertextObjectByCoordinates,
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameboardModule);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   playerOneBoard: () => (/* binding */ playerOneBoard)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _DOMHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMHandler */ "./src/DOMHandler.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _eventManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eventManager */ "./src/eventManager.js");

// eslint-disable-next-line import/no-cycle




let playerOneBoard = null;

function gameLoop() {
  const main = document.querySelector(".main");
  if (main) {
    main.remove();
  }
  playerOneBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_2__["default"])();
  playerOneBoard.createBoard();
  playerOneBoard.createShips();
  playerOneBoard.positionShips();

  const playerTwoBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_2__["default"])();
  playerTwoBoard.createBoard();
  playerTwoBoard.createShips();
  playerTwoBoard.positionShips();

  _DOMHandler__WEBPACK_IMPORTED_MODULE_1__["default"].playerOneBoard = playerOneBoard.board.vertices;
  _DOMHandler__WEBPACK_IMPORTED_MODULE_1__["default"].playerOneShips = playerOneBoard.ships;

  _DOMHandler__WEBPACK_IMPORTED_MODULE_1__["default"].playerTwoBoard = playerTwoBoard.board.vertices;
  _DOMHandler__WEBPACK_IMPORTED_MODULE_1__["default"].playerTwoShips = playerTwoBoard.ships;

  _DOMHandler__WEBPACK_IMPORTED_MODULE_1__["default"].createDom();
  console.log(playerOneBoard);
}

gameLoop();
(0,_eventManager__WEBPACK_IMPORTED_MODULE_3__.addDocumentEventListeners)();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameLoop);



/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const ShipModule = (() => {
  // Creates a ship
  function createShip(shipLength) {
    const ship = {
      hitCount: 0,
      coordinates: [],
      length: shipLength,
      position: "h",

      hit() {
        ship.hitCount += 1;
      },

      isSunk() {
        if (ship.hitCount === ship.length) {
          return true;
        }
        return false;
      },

      assignCoordinates(...args) {
        ship.coordinates = args;

        // Determine if ship position is horizontal or vertical
        if (ship.coordinates.length === 1) {
          this.position = "h";
        } else if (ship.coordinates[0][0] === ship.coordinates[1][0]) {
          this.position = "h";
        } else {
          this.position = "v";
        }
      },
    };

    return ship;
  }

  return {
    createShip,
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShipModule);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxvREFBb0QsWUFBWTtBQUNoRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtB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QXlCO0FBQ2xGO0FBQ0Esd0RBQXdELFVBQVU7QUFDbEU7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0wsZ0JBQWdCLDZDQUFjO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDZDQUFjO0FBQ3JDO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNB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QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7O1VDMUMxQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL0RPTUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9EU19HcmFwaC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2V2ZW50TWFuYWdlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Kb3NlZmluK1NhbnM6d2dodEAxMDAmZmFtaWx5PUxhdG86d2dodEAzMDAmZmFtaWx5PU51bml0bzppdGFsLHdnaHRAMCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDAmZmFtaWx5PVJvYm90bzp3Z2h0QDEwMCZmYW1pbHk9UnViaWs6d2dodEAzMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLyogcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRvdWNoLWFjdGlvbjogbm9uZTsgKi9cbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbmJvZHkge1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG59XG5cbi5tYWluIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAxZnI7XG59XG5cbi5oZWFkZXIge1xuICBncmlkLWNvbHVtbjogMSAvIDI7XG4gIGdyaWQtcm93OiAxIC8gMjtcbn1cblxuLmNvbnRlbnQge1xuICBncmlkLWNvbHVtbjogMSAvIDI7XG4gIGdyaWQtcm93OiAyIC8gMztcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICAvKiBwYWRkaW5nLXRvcDogNDBweDsgKi9cbn1cblxuLmNvbW1hbmRzIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbi5jb21tYW5kcyA+IGRpdiB7XG4gIC8qIHVzZXItc2VsZWN0OiBub25lOyAqL1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmNvbW1hbmRzID4gZGl2OmhvdmVyIHtcbiAgY29sb3I6IGJsdWU7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB0ZXh0LWRlY29yYXRpb24tdGhpY2tuZXNzOiAxcHg7XG59XG5cbi5ib2FyZHMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICAvKiBnYXA6IDIwcHg7ICovXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5cbi5ib2FyZHMgPiAucGxheWVyT25lLWJvYXJkLFxuLmJvYXJkcyA+IC5wbGF5ZXJUd28tYm9hcmQge1xuICB3aWR0aDogNDAwcHg7XG4gIGhlaWdodDogNDAwcHg7XG4gIG91dGxpbmU6IDAuNXB4IHNvbGlkIHJnYigxMTgsIDExOCwgMTE4LCAwLjYpO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgbWFyZ2luOiAyMHB4O1xufVxuXG4ucGxheWVyT25lLWJvYXJkIHtcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICBncmlkLXJvdzogMSAvIDI7XG59XG5cbi5wbGF5ZXJUd28tYm9hcmQge1xuICBncmlkLWNvbHVtbjogMiAvIDM7XG4gIGdyaWQtcm93OiAxIC8gMjtcbn1cblxuLnBsYXllci1vbmUtYm9hcmQtbmFtZSB7XG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgZ3JpZC1yb3c6IDIgLyAzO1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbn1cblxuLnBsYXllci10d28tYm9hcmQtbmFtZSB7XG4gIGdyaWQtY29sdW1uOiAyIC8gMztcbiAgZ3JpZC1yb3c6IDIgLyAzO1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbn1cblxuLnBsYXllck9uZS1ib2FyZCxcbi5wbGF5ZXJUd28tYm9hcmQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcbn1cblxuLnBsYXllck9uZS1ib2FyZCA+IGRpdixcbi5wbGF5ZXJUd28tYm9hcmQgPiBkaXYge1xuICBvdXRsaW5lOiAwLjVweCBzb2xpZCByZ2JhKDExOCwgMTE4LCAxMTgsIDAuNik7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLyogei1pbmRleDogMTsgKi9cbn1cblxuLnBsYXllclR3by1ib2FyZCA+IC5zaGlwLWNlbGwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC4zKTtcbn1cblxuLnBsYXllck9uZS1ib2FyZCA+IC5zaGlwLWNlbGwge1xuICBvdXRsaW5lOiAwLjVweCBzb2xpZCByZ2JhKDExOCwgMTE4LCAxMTgsIDAuMik7XG59XG5cbi5zaGlwIHtcbiAgLyogei1pbmRleDogMjsgKi9cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjEpO1xuICBvdXRsaW5lOiAxcHggc29saWQgYmx1ZTtcbn1cblxuLmRyYWdnYWJsZSB7XG4gIGN1cnNvcjogbW92ZSAhaW1wb3J0YW50O1xuICB6LWluZGV4OiA1O1xuICAvKiBwb2ludGVyLWV2ZW50czogYWxsO1xuICB0b3VjaC1hY3Rpb246IGFsbDsgKi9cbn1cblxuLyogLnNoaXA6aG92ZXIge1xuICBjdXJzb3I6IG1vdmU7XG59ICovXG5cbltkcmFnZ2FibGU9XCJ0cnVlXCJdIHtcbiAgY3Vyc29yOiBtb3ZlICFpbXBvcnRhbnQ7XG59XG5cbltkcmFnZ2FibGU9XCJ0cnVlXCJdOmhvdmVyIHtcbiAgei1pbmRleDogOTk5OTtcbiAgY3Vyc29yOiBtb3ZlICFpbXBvcnRhbnQ7XG59XG5cbi8qIC5kcmFnZ2FibGUge1xuICBjdXJzb3I6IGFsaWFzO1xufSAqL1xuXG5bZHJvcHBhYmxlPVwidHJ1ZVwiXSB7XG4gIC8qIGJvcmRlcjogMnB4IGRhc2hlZCAjYWFhOyAqL1xuICAvKiBwb2ludGVyLWV2ZW50czogYWxsOyAqL1xufVxuXG4ubWFya19jb2wge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRvcDogLTIwcHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5tYXJrX3JvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHdpZHRoOiA1MCU7XG4gIGxlZnQ6IC0zMHB4O1xuICB0b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5kcmFnZ2luZyB7XG4gIG91dGxpbmU6IDFweCBncmVlbiBzb2xpZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyNTUsIDAsIDAuNSk7XG59XG5cbltkcm9wcGFibGU9XCJ0cnVlXCJdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMjgsIDAsIDAuMik7XG59XG5cbltkcm9wcGFibGU9XCJmYWxzZVwiXSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjMpO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGlDQUFpQztFQUNqQyxnQkFBZ0I7RUFDaEI7dUJBQ3FCO0VBQ3JCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLDBCQUEwQjtFQUMxQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCwwQkFBMEI7RUFDMUIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5Qiw0QkFBNEI7RUFDNUIsV0FBVztFQUNYLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLGFBQWE7RUFDYiw0Q0FBNEM7RUFDNUMsb0JBQW9CO0VBQ3BCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixvQkFBb0I7QUFDdEI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLHNDQUFzQztBQUN4Qzs7QUFFQTs7RUFFRSw2Q0FBNkM7RUFDN0Msa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLDZDQUE2QztBQUMvQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE1BQU07RUFDTixzQ0FBc0M7RUFDdEMsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVjtzQkFDb0I7QUFDdEI7O0FBRUE7O0dBRUc7O0FBRUg7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBOztHQUVHOztBQUVIO0VBQ0UsNkJBQTZCO0VBQzdCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsV0FBVztFQUNYLFNBQVM7RUFDVCxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLHNDQUFzQztBQUN4Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Kb3NlZmluK1NhbnM6d2dodEAxMDAmZmFtaWx5PUxhdG86d2dodEAzMDAmZmFtaWx5PU51bml0bzppdGFsLHdnaHRAMCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDAmZmFtaWx5PVJvYm90bzp3Z2h0QDEwMCZmYW1pbHk9UnViaWs6d2dodEAzMDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTnVuaXRvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAvKiBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHRvdWNoLWFjdGlvbjogbm9uZTsgKi9cXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxufVxcblxcbi5tYWluIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggMWZyO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gIC8qIHBhZGRpbmctdG9wOiA0MHB4OyAqL1xcbn1cXG5cXG4uY29tbWFuZHMge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDE1cHg7XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbn1cXG5cXG4uY29tbWFuZHMgPiBkaXYge1xcbiAgLyogdXNlci1zZWxlY3Q6IG5vbmU7ICovXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXdlaWdodDogMTAwO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uY29tbWFuZHMgPiBkaXY6aG92ZXIge1xcbiAgY29sb3I6IGJsdWU7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIHRleHQtZGVjb3JhdGlvbi10aGlja25lc3M6IDFweDtcXG59XFxuXFxuLmJvYXJkcyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgLyogZ2FwOiAyMHB4OyAqL1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMjBweDtcXG59XFxuXFxuLmJvYXJkcyA+IC5wbGF5ZXJPbmUtYm9hcmQsXFxuLmJvYXJkcyA+IC5wbGF5ZXJUd28tYm9hcmQge1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIG91dGxpbmU6IDAuNXB4IHNvbGlkIHJnYigxMTgsIDExOCwgMTE4LCAwLjYpO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBtYXJnaW46IDIwcHg7XFxufVxcblxcbi5wbGF5ZXJPbmUtYm9hcmQge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5cXG4ucGxheWVyVHdvLWJvYXJkIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuLnBsYXllci1vbmUtYm9hcmQtbmFtZSB7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5wbGF5ZXItdHdvLWJvYXJkLW5hbWUge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ucGxheWVyT25lLWJvYXJkLFxcbi5wbGF5ZXJUd28tYm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbn1cXG5cXG4ucGxheWVyT25lLWJvYXJkID4gZGl2LFxcbi5wbGF5ZXJUd28tYm9hcmQgPiBkaXYge1xcbiAgb3V0bGluZTogMC41cHggc29saWQgcmdiYSgxMTgsIDExOCwgMTE4LCAwLjYpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgLyogei1pbmRleDogMTsgKi9cXG59XFxuXFxuLnBsYXllclR3by1ib2FyZCA+IC5zaGlwLWNlbGwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAyNTUsIDAuMyk7XFxufVxcblxcbi5wbGF5ZXJPbmUtYm9hcmQgPiAuc2hpcC1jZWxsIHtcXG4gIG91dGxpbmU6IDAuNXB4IHNvbGlkIHJnYmEoMTE4LCAxMTgsIDExOCwgMC4yKTtcXG59XFxuXFxuLnNoaXAge1xcbiAgLyogei1pbmRleDogMjsgKi9cXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC4xKTtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCBibHVlO1xcbn1cXG5cXG4uZHJhZ2dhYmxlIHtcXG4gIGN1cnNvcjogbW92ZSAhaW1wb3J0YW50O1xcbiAgei1pbmRleDogNTtcXG4gIC8qIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxuICB0b3VjaC1hY3Rpb246IGFsbDsgKi9cXG59XFxuXFxuLyogLnNoaXA6aG92ZXIge1xcbiAgY3Vyc29yOiBtb3ZlO1xcbn0gKi9cXG5cXG5bZHJhZ2dhYmxlPVxcXCJ0cnVlXFxcIl0ge1xcbiAgY3Vyc29yOiBtb3ZlICFpbXBvcnRhbnQ7XFxufVxcblxcbltkcmFnZ2FibGU9XFxcInRydWVcXFwiXTpob3ZlciB7XFxuICB6LWluZGV4OiA5OTk5O1xcbiAgY3Vyc29yOiBtb3ZlICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIC5kcmFnZ2FibGUge1xcbiAgY3Vyc29yOiBhbGlhcztcXG59ICovXFxuXFxuW2Ryb3BwYWJsZT1cXFwidHJ1ZVxcXCJdIHtcXG4gIC8qIGJvcmRlcjogMnB4IGRhc2hlZCAjYWFhOyAqL1xcbiAgLyogcG9pbnRlci1ldmVudHM6IGFsbDsgKi9cXG59XFxuXFxuLm1hcmtfY29sIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdG9wOiAtMjBweDtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4ubWFya19yb3cge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICB3aWR0aDogNTAlO1xcbiAgbGVmdDogLTMwcHg7XFxuICB0b3A6IDEwcHg7XFxuICBmb250LXNpemU6IDEwcHg7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLmRyYWdnaW5nIHtcXG4gIG91dGxpbmU6IDFweCBncmVlbiBzb2xpZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCAwLCAwLjUpO1xcbn1cXG5cXG5bZHJvcHBhYmxlPVxcXCJ0cnVlXFxcIl0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMjgsIDAsIDAuMik7XFxufVxcblxcbltkcm9wcGFibGU9XFxcImZhbHNlXFxcIl0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuMyk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tY3ljbGVcbmltcG9ydCBhZGRFdmVudExpc3RlbmVycyBmcm9tIFwiLi9ldmVudE1hbmFnZXJcIjtcblxuLyogZXNsaW50LWRpc2FibGUgcHJlZmVyLWNvbnN0ICovXG5jb25zdCBET01IYW5kbGVyID0gKCgpID0+IHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICBsZXQgcGxheWVyT25lQm9hcmQgPSBudWxsO1xuICBsZXQgcGxheWVyVHdvQm9hcmQgPSBudWxsO1xuICBsZXQgcGxheWVyT25lU2hpcHMgPSBudWxsO1xuICBsZXQgcGxheWVyVHdvU2hpcHMgPSBudWxsO1xuXG4gIGNvbnN0IHN0YXRpY0xheW91dEVsZW1lbnRzID0gW1xuICAgIHtcbiAgICAgIHR5cGU6IFwiZGl2XCIsXG4gICAgICBjbGFzczogXCJtYWluXCIsXG4gICAgICBjaGlsZHJlbkVsZW1lbnRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiBcImRpdlwiLFxuICAgICAgICAgIGNsYXNzOiBcImhlYWRlclwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogXCJkaXZcIixcbiAgICAgICAgICBjbGFzczogXCJjb250ZW50XCIsXG4gICAgICAgICAgY2hpbGRyZW5FbGVtZW50czogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0eXBlOiBcImRpdlwiLFxuICAgICAgICAgICAgICBjbGFzczogXCJjb21tYW5kc1wiLFxuICAgICAgICAgICAgICBjaGlsZHJlbkVsZW1lbnRzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdHlwZTogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBcInJhbmRvbWl6ZVwiLFxuICAgICAgICAgICAgICAgICAgdGV4dENvbnRlbnQ6IFwicmFuZG9taXplXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0eXBlOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IFwic3RhcnQtZ2FtZVwiLFxuICAgICAgICAgICAgICAgICAgdGV4dENvbnRlbnQ6IFwic3RhcnRcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdHlwZTogXCJkaXZcIixcbiAgICAgICAgICAgICAgY2xhc3M6IFwiYm9hcmRzXCIsXG4gICAgICAgICAgICAgIGNoaWxkcmVuRWxlbWVudHM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0eXBlOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IFwicGxheWVyT25lLWJvYXJkXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0eXBlOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IFwicGxheWVyVHdvLWJvYXJkXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0eXBlOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IFwicGxheWVyLW9uZS1ib2FyZC1uYW1lXCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogXCJZb3VyIGJvYXJkXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0eXBlOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IFwicGxheWVyLXR3by1ib2FyZC1uYW1lXCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogXCJPcHBvbmVudCdzIGJvYXJkXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgXTtcblxuICBmdW5jdGlvbiBjcmVhdGVQYWdlTGF5b3V0KHBhcmVudCwgdHJlZSkge1xuICAgIHRyZWUuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudC50eXBlKTtcbiAgICAgIGlmIChlbGVtZW50LmNsYXNzKSB7XG4gICAgICAgIG5ld0VsZW1lbnQuY2xhc3NMaXN0LmFkZChlbGVtZW50LmNsYXNzKTtcbiAgICAgIH1cbiAgICAgIGlmIChlbGVtZW50LnRleHRDb250ZW50KSB7XG4gICAgICAgIG5ld0VsZW1lbnQudGV4dENvbnRlbnQgPSBlbGVtZW50LnRleHRDb250ZW50O1xuICAgICAgfVxuICAgICAgcGFyZW50LmFwcGVuZChuZXdFbGVtZW50KTtcbiAgICAgIGlmIChlbGVtZW50LmNoaWxkcmVuRWxlbWVudHMpIHtcbiAgICAgICAgY3JlYXRlUGFnZUxheW91dChuZXdFbGVtZW50LCBlbGVtZW50LmNoaWxkcmVuRWxlbWVudHMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQm9hcmRDZWxscygpIHtcbiAgICBjb25zdCBwbGF5ZXJPbmVCb2FyZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyT25lLWJvYXJkXCIpO1xuICAgIGNvbnN0IHBsYXllclR3b0JvYXJkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXJUd28tYm9hcmRcIik7XG5cbiAgICBET01IYW5kbGVyLnBsYXllck9uZUJvYXJkLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IG5ld0NlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbmV3Q2VsbC5jbGFzc0xpc3QuYWRkKGVsZW1lbnQuY29vcmRpbmF0ZXMpO1xuICAgICAgbmV3Q2VsbC5jbGFzc0xpc3QuYWRkKFwiY2VsbFwiKTtcbiAgICAgIGlmIChlbGVtZW50Lm9jY3VwaWVkKSB7XG4gICAgICAgIG5ld0NlbGwuc2V0QXR0cmlidXRlKFwiZHJvcHBhYmxlXCIsIGZhbHNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld0NlbGwuc2V0QXR0cmlidXRlKFwiZHJvcHBhYmxlXCIsIHRydWUpO1xuICAgICAgfVxuXG4gICAgICBwbGF5ZXJPbmVCb2FyZERpdi5hcHBlbmQobmV3Q2VsbCk7XG5cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1sb25lLWJsb2Nrc1xuICAgICAge1xuICAgICAgICBpZiAobmV3Q2VsbC5jbGFzc0xpc3RbMF0gPT09IFwiMSwxXCIpIHtcbiAgICAgICAgICBjb25zdCBtYXJrQ29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBtYXJrQ29sLmNsYXNzTGlzdC5hZGQoXCJtYXJrX2NvbFwiKTtcbiAgICAgICAgICBtYXJrQ29sLnRleHRDb250ZW50ID0gXCJBXCI7XG4gICAgICAgICAgbmV3Q2VsbC5hcHBlbmQobWFya0NvbCk7XG4gICAgICAgICAgY29uc3QgbWFya1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgbWFya1Jvdy5jbGFzc0xpc3QuYWRkKFwibWFya19yb3dcIik7XG4gICAgICAgICAgbWFya1Jvdy50ZXh0Q29udGVudCA9IFwiMVwiO1xuICAgICAgICAgIG5ld0NlbGwuYXBwZW5kKG1hcmtSb3cpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdDZWxsLmNsYXNzTGlzdFswXSA9PT0gXCIxLDJcIikge1xuICAgICAgICAgIGNvbnN0IG1hcmtDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIG1hcmtDb2wuY2xhc3NMaXN0LmFkZChcIm1hcmtfY29sXCIpO1xuICAgICAgICAgIG1hcmtDb2wudGV4dENvbnRlbnQgPSBcIkJcIjtcbiAgICAgICAgICBuZXdDZWxsLmFwcGVuZChtYXJrQ29sKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3Q2VsbC5jbGFzc0xpc3RbMF0gPT09IFwiMSwzXCIpIHtcbiAgICAgICAgICBjb25zdCBtYXJrQ29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBtYXJrQ29sLmNsYXNzTGlzdC5hZGQoXCJtYXJrX2NvbFwiKTtcbiAgICAgICAgICBtYXJrQ29sLnRleHRDb250ZW50ID0gXCJDXCI7XG4gICAgICAgICAgbmV3Q2VsbC5hcHBlbmQobWFya0NvbCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld0NlbGwuY2xhc3NMaXN0WzBdID09PSBcIjEsNFwiKSB7XG4gICAgICAgICAgY29uc3QgbWFya0NvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgbWFya0NvbC5jbGFzc0xpc3QuYWRkKFwibWFya19jb2xcIik7XG4gICAgICAgICAgbWFya0NvbC50ZXh0Q29udGVudCA9IFwiRFwiO1xuICAgICAgICAgIG5ld0NlbGwuYXBwZW5kKG1hcmtDb2wpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdDZWxsLmNsYXNzTGlzdFswXSA9PT0gXCIxLDVcIikge1xuICAgICAgICAgIGNvbnN0IG1hcmtDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIG1hcmtDb2wuY2xhc3NMaXN0LmFkZChcIm1hcmtfY29sXCIpO1xuICAgICAgICAgIG1hcmtDb2wudGV4dENvbnRlbnQgPSBcIkVcIjtcbiAgICAgICAgICBuZXdDZWxsLmFwcGVuZChtYXJrQ29sKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3Q2VsbC5jbGFzc0xpc3RbMF0gPT09IFwiMSw2XCIpIHtcbiAgICAgICAgICBjb25zdCBtYXJrQ29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBtYXJrQ29sLmNsYXNzTGlzdC5hZGQoXCJtYXJrX2NvbFwiKTtcbiAgICAgICAgICBtYXJrQ29sLnRleHRDb250ZW50ID0gXCJGXCI7XG4gICAgICAgICAgbmV3Q2VsbC5hcHBlbmQobWFya0NvbCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld0NlbGwuY2xhc3NMaXN0WzBdID09PSBcIjEsN1wiKSB7XG4gICAgICAgICAgY29uc3QgbWFya0NvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgbWFya0NvbC5jbGFzc0xpc3QuYWRkKFwibWFya19jb2xcIik7XG4gICAgICAgICAgbWFya0NvbC50ZXh0Q29udGVudCA9IFwiR1wiO1xuICAgICAgICAgIG5ld0NlbGwuYXBwZW5kKG1hcmtDb2wpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdDZWxsLmNsYXNzTGlzdFswXSA9PT0gXCIxLDhcIikge1xuICAgICAgICAgIGNvbnN0IG1hcmtDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIG1hcmtDb2wuY2xhc3NMaXN0LmFkZChcIm1hcmtfY29sXCIpO1xuICAgICAgICAgIG1hcmtDb2wudGV4dENvbnRlbnQgPSBcIkhcIjtcbiAgICAgICAgICBuZXdDZWxsLmFwcGVuZChtYXJrQ29sKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3Q2VsbC5jbGFzc0xpc3RbMF0gPT09IFwiMSw5XCIpIHtcbiAgICAgICAgICBjb25zdCBtYXJrQ29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBtYXJrQ29sLmNsYXNzTGlzdC5hZGQoXCJtYXJrX2NvbFwiKTtcbiAgICAgICAgICBtYXJrQ29sLnRleHRDb250ZW50ID0gXCJJXCI7XG4gICAgICAgICAgbmV3Q2VsbC5hcHBlbmQobWFya0NvbCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld0NlbGwuY2xhc3NMaXN0WzBdID09PSBcIjEsMTBcIikge1xuICAgICAgICAgIGNvbnN0IG1hcmtDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIG1hcmtDb2wuY2xhc3NMaXN0LmFkZChcIm1hcmtfY29sXCIpO1xuICAgICAgICAgIG1hcmtDb2wudGV4dENvbnRlbnQgPSBcIkpcIjtcbiAgICAgICAgICBuZXdDZWxsLmFwcGVuZChtYXJrQ29sKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3Q2VsbC5jbGFzc0xpc3RbMF0gPT09IFwiMiwxXCIpIHtcbiAgICAgICAgICBjb25zdCBtYXJrUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBtYXJrUm93LmNsYXNzTGlzdC5hZGQoXCJtYXJrX3Jvd1wiKTtcbiAgICAgICAgICBtYXJrUm93LnRleHRDb250ZW50ID0gXCIyXCI7XG4gICAgICAgICAgbmV3Q2VsbC5hcHBlbmQobWFya1Jvdyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld0NlbGwuY2xhc3NMaXN0WzBdID09PSBcIjMsMVwiKSB7XG4gICAgICAgICAgY29uc3QgbWFya1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgbWFya1Jvdy5jbGFzc0xpc3QuYWRkKFwibWFya19yb3dcIik7XG4gICAgICAgICAgbWFya1Jvdy50ZXh0Q29udGVudCA9IFwiM1wiO1xuICAgICAgICAgIG5ld0NlbGwuYXBwZW5kKG1hcmtSb3cpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdDZWxsLmNsYXNzTGlzdFswXSA9PT0gXCI0LDFcIikge1xuICAgICAgICAgIGNvbnN0IG1hcmtSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIG1hcmtSb3cuY2xhc3NMaXN0LmFkZChcIm1hcmtfcm93XCIpO1xuICAgICAgICAgIG1hcmtSb3cudGV4dENvbnRlbnQgPSBcIjRcIjtcbiAgICAgICAgICBuZXdDZWxsLmFwcGVuZChtYXJrUm93KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3Q2VsbC5jbGFzc0xpc3RbMF0gPT09IFwiNSwxXCIpIHtcbiAgICAgICAgICBjb25zdCBtYXJrUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBtYXJrUm93LmNsYXNzTGlzdC5hZGQoXCJtYXJrX3Jvd1wiKTtcbiAgICAgICAgICBtYXJrUm93LnRleHRDb250ZW50ID0gXCI1XCI7XG4gICAgICAgICAgbmV3Q2VsbC5hcHBlbmQobWFya1Jvdyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld0NlbGwuY2xhc3NMaXN0WzBdID09PSBcIjYsMVwiKSB7XG4gICAgICAgICAgY29uc3QgbWFya1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgbWFya1Jvdy5jbGFzc0xpc3QuYWRkKFwibWFya19yb3dcIik7XG4gICAgICAgICAgbWFya1Jvdy50ZXh0Q29udGVudCA9IFwiNlwiO1xuICAgICAgICAgIG5ld0NlbGwuYXBwZW5kKG1hcmtSb3cpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdDZWxsLmNsYXNzTGlzdFswXSA9PT0gXCI3LDFcIikge1xuICAgICAgICAgIGNvbnN0IG1hcmtSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIG1hcmtSb3cuY2xhc3NMaXN0LmFkZChcIm1hcmtfcm93XCIpO1xuICAgICAgICAgIG1hcmtSb3cudGV4dENvbnRlbnQgPSBcIjdcIjtcbiAgICAgICAgICBuZXdDZWxsLmFwcGVuZChtYXJrUm93KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3Q2VsbC5jbGFzc0xpc3RbMF0gPT09IFwiOCwxXCIpIHtcbiAgICAgICAgICBjb25zdCBtYXJrUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBtYXJrUm93LmNsYXNzTGlzdC5hZGQoXCJtYXJrX3Jvd1wiKTtcbiAgICAgICAgICBtYXJrUm93LnRleHRDb250ZW50ID0gXCI4XCI7XG4gICAgICAgICAgbmV3Q2VsbC5hcHBlbmQobWFya1Jvdyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld0NlbGwuY2xhc3NMaXN0WzBdID09PSBcIjksMVwiKSB7XG4gICAgICAgICAgY29uc3QgbWFya1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgbWFya1Jvdy5jbGFzc0xpc3QuYWRkKFwibWFya19yb3dcIik7XG4gICAgICAgICAgbWFya1Jvdy50ZXh0Q29udGVudCA9IFwiOVwiO1xuICAgICAgICAgIG5ld0NlbGwuYXBwZW5kKG1hcmtSb3cpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdDZWxsLmNsYXNzTGlzdFswXSA9PT0gXCIxMCwxXCIpIHtcbiAgICAgICAgICBjb25zdCBtYXJrUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBtYXJrUm93LmNsYXNzTGlzdC5hZGQoXCJtYXJrX3Jvd1wiKTtcbiAgICAgICAgICBtYXJrUm93LnRleHRDb250ZW50ID0gXCIxMFwiO1xuICAgICAgICAgIG5ld0NlbGwuYXBwZW5kKG1hcmtSb3cpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBET01IYW5kbGVyLnBsYXllclR3b0JvYXJkLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IG5ld0NlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbmV3Q2VsbC5jbGFzc0xpc3QuYWRkKGVsZW1lbnQuY29vcmRpbmF0ZXMpO1xuICAgICAgbmV3Q2VsbC5jbGFzc0xpc3QuYWRkKFwiY2VsbFwiKTtcbiAgICAgIHBsYXllclR3b0JvYXJkRGl2LmFwcGVuZChuZXdDZWxsKTtcbiAgICAgIGlmIChuZXdDZWxsLmNsYXNzTGlzdFswXSA9PT0gXCIxLDFcIikge1xuICAgICAgICBjb25zdCBtYXJrQ29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWFya0NvbC5jbGFzc0xpc3QuYWRkKFwibWFya19jb2xcIik7XG4gICAgICAgIG1hcmtDb2wudGV4dENvbnRlbnQgPSBcIkFcIjtcbiAgICAgICAgbmV3Q2VsbC5hcHBlbmQobWFya0NvbCk7XG4gICAgICAgIGNvbnN0IG1hcmtSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBtYXJrUm93LmNsYXNzTGlzdC5hZGQoXCJtYXJrX3Jvd1wiKTtcbiAgICAgICAgbWFya1Jvdy50ZXh0Q29udGVudCA9IFwiMVwiO1xuICAgICAgICBuZXdDZWxsLmFwcGVuZChtYXJrUm93KTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXdDZWxsLmNsYXNzTGlzdFswXSA9PT0gXCIxLDJcIikge1xuICAgICAgICBjb25zdCBtYXJrQ29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWFya0NvbC5jbGFzc0xpc3QuYWRkKFwibWFya19jb2xcIik7XG4gICAgICAgIG1hcmtDb2wudGV4dENvbnRlbnQgPSBcIkJcIjtcbiAgICAgICAgbmV3Q2VsbC5hcHBlbmQobWFya0NvbCk7XG4gICAgICB9XG4gICAgICBpZiAobmV3Q2VsbC5jbGFzc0xpc3RbMF0gPT09IFwiMSwzXCIpIHtcbiAgICAgICAgY29uc3QgbWFya0NvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1hcmtDb2wuY2xhc3NMaXN0LmFkZChcIm1hcmtfY29sXCIpO1xuICAgICAgICBtYXJrQ29sLnRleHRDb250ZW50ID0gXCJDXCI7XG4gICAgICAgIG5ld0NlbGwuYXBwZW5kKG1hcmtDb2wpO1xuICAgICAgfVxuICAgICAgaWYgKG5ld0NlbGwuY2xhc3NMaXN0WzBdID09PSBcIjEsNFwiKSB7XG4gICAgICAgIGNvbnN0IG1hcmtDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBtYXJrQ29sLmNsYXNzTGlzdC5hZGQoXCJtYXJrX2NvbFwiKTtcbiAgICAgICAgbWFya0NvbC50ZXh0Q29udGVudCA9IFwiRFwiO1xuICAgICAgICBuZXdDZWxsLmFwcGVuZChtYXJrQ29sKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXdDZWxsLmNsYXNzTGlzdFswXSA9PT0gXCIxLDVcIikge1xuICAgICAgICBjb25zdCBtYXJrQ29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWFya0NvbC5jbGFzc0xpc3QuYWRkKFwibWFya19jb2xcIik7XG4gICAgICAgIG1hcmtDb2wudGV4dENvbnRlbnQgPSBcIkVcIjtcbiAgICAgICAgbmV3Q2VsbC5hcHBlbmQobWFya0NvbCk7XG4gICAgICB9XG4gICAgICBpZiAobmV3Q2VsbC5jbGFzc0xpc3RbMF0gPT09IFwiMSw2XCIpIHtcbiAgICAgICAgY29uc3QgbWFya0NvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1hcmtDb2wuY2xhc3NMaXN0LmFkZChcIm1hcmtfY29sXCIpO1xuICAgICAgICBtYXJrQ29sLnRleHRDb250ZW50ID0gXCJGXCI7XG4gICAgICAgIG5ld0NlbGwuYXBwZW5kKG1hcmtDb2wpO1xuICAgICAgfVxuICAgICAgaWYgKG5ld0NlbGwuY2xhc3NMaXN0WzBdID09PSBcIjEsN1wiKSB7XG4gICAgICAgIGNvbnN0IG1hcmtDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBtYXJrQ29sLmNsYXNzTGlzdC5hZGQoXCJtYXJrX2NvbFwiKTtcbiAgICAgICAgbWFya0NvbC50ZXh0Q29udGVudCA9IFwiR1wiO1xuICAgICAgICBuZXdDZWxsLmFwcGVuZChtYXJrQ29sKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXdDZWxsLmNsYXNzTGlzdFswXSA9PT0gXCIxLDhcIikge1xuICAgICAgICBjb25zdCBtYXJrQ29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWFya0NvbC5jbGFzc0xpc3QuYWRkKFwibWFya19jb2xcIik7XG4gICAgICAgIG1hcmtDb2wudGV4dENvbnRlbnQgPSBcIkhcIjtcbiAgICAgICAgbmV3Q2VsbC5hcHBlbmQobWFya0NvbCk7XG4gICAgICB9XG4gICAgICBpZiAobmV3Q2VsbC5jbGFzc0xpc3RbMF0gPT09IFwiMSw5XCIpIHtcbiAgICAgICAgY29uc3QgbWFya0NvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1hcmtDb2wuY2xhc3NMaXN0LmFkZChcIm1hcmtfY29sXCIpO1xuICAgICAgICBtYXJrQ29sLnRleHRDb250ZW50ID0gXCJJXCI7XG4gICAgICAgIG5ld0NlbGwuYXBwZW5kKG1hcmtDb2wpO1xuICAgICAgfVxuICAgICAgaWYgKG5ld0NlbGwuY2xhc3NMaXN0WzBdID09PSBcIjEsMTBcIikge1xuICAgICAgICBjb25zdCBtYXJrQ29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWFya0NvbC5jbGFzc0xpc3QuYWRkKFwibWFya19jb2xcIik7XG4gICAgICAgIG1hcmtDb2wudGV4dENvbnRlbnQgPSBcIkpcIjtcbiAgICAgICAgbmV3Q2VsbC5hcHBlbmQobWFya0NvbCk7XG4gICAgICB9XG4gICAgICBpZiAobmV3Q2VsbC5jbGFzc0xpc3RbMF0gPT09IFwiMiwxXCIpIHtcbiAgICAgICAgY29uc3QgbWFya1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1hcmtSb3cuY2xhc3NMaXN0LmFkZChcIm1hcmtfcm93XCIpO1xuICAgICAgICBtYXJrUm93LnRleHRDb250ZW50ID0gXCIyXCI7XG4gICAgICAgIG5ld0NlbGwuYXBwZW5kKG1hcmtSb3cpO1xuICAgICAgfVxuICAgICAgaWYgKG5ld0NlbGwuY2xhc3NMaXN0WzBdID09PSBcIjMsMVwiKSB7XG4gICAgICAgIGNvbnN0IG1hcmtSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBtYXJrUm93LmNsYXNzTGlzdC5hZGQoXCJtYXJrX3Jvd1wiKTtcbiAgICAgICAgbWFya1Jvdy50ZXh0Q29udGVudCA9IFwiM1wiO1xuICAgICAgICBuZXdDZWxsLmFwcGVuZChtYXJrUm93KTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXdDZWxsLmNsYXNzTGlzdFswXSA9PT0gXCI0LDFcIikge1xuICAgICAgICBjb25zdCBtYXJrUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWFya1Jvdy5jbGFzc0xpc3QuYWRkKFwibWFya19yb3dcIik7XG4gICAgICAgIG1hcmtSb3cudGV4dENvbnRlbnQgPSBcIjRcIjtcbiAgICAgICAgbmV3Q2VsbC5hcHBlbmQobWFya1Jvdyk7XG4gICAgICB9XG4gICAgICBpZiAobmV3Q2VsbC5jbGFzc0xpc3RbMF0gPT09IFwiNSwxXCIpIHtcbiAgICAgICAgY29uc3QgbWFya1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1hcmtSb3cuY2xhc3NMaXN0LmFkZChcIm1hcmtfcm93XCIpO1xuICAgICAgICBtYXJrUm93LnRleHRDb250ZW50ID0gXCI1XCI7XG4gICAgICAgIG5ld0NlbGwuYXBwZW5kKG1hcmtSb3cpO1xuICAgICAgfVxuICAgICAgaWYgKG5ld0NlbGwuY2xhc3NMaXN0WzBdID09PSBcIjYsMVwiKSB7XG4gICAgICAgIGNvbnN0IG1hcmtSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBtYXJrUm93LmNsYXNzTGlzdC5hZGQoXCJtYXJrX3Jvd1wiKTtcbiAgICAgICAgbWFya1Jvdy50ZXh0Q29udGVudCA9IFwiNlwiO1xuICAgICAgICBuZXdDZWxsLmFwcGVuZChtYXJrUm93KTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXdDZWxsLmNsYXNzTGlzdFswXSA9PT0gXCI3LDFcIikge1xuICAgICAgICBjb25zdCBtYXJrUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWFya1Jvdy5jbGFzc0xpc3QuYWRkKFwibWFya19yb3dcIik7XG4gICAgICAgIG1hcmtSb3cudGV4dENvbnRlbnQgPSBcIjdcIjtcbiAgICAgICAgbmV3Q2VsbC5hcHBlbmQobWFya1Jvdyk7XG4gICAgICB9XG4gICAgICBpZiAobmV3Q2VsbC5jbGFzc0xpc3RbMF0gPT09IFwiOCwxXCIpIHtcbiAgICAgICAgY29uc3QgbWFya1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1hcmtSb3cuY2xhc3NMaXN0LmFkZChcIm1hcmtfcm93XCIpO1xuICAgICAgICBtYXJrUm93LnRleHRDb250ZW50ID0gXCI4XCI7XG4gICAgICAgIG5ld0NlbGwuYXBwZW5kKG1hcmtSb3cpO1xuICAgICAgfVxuICAgICAgaWYgKG5ld0NlbGwuY2xhc3NMaXN0WzBdID09PSBcIjIsMVwiKSB7XG4gICAgICAgIGNvbnN0IG1hcmtSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBtYXJrUm93LmNsYXNzTGlzdC5hZGQoXCJtYXJrX3Jvd1wiKTtcbiAgICAgICAgbWFya1Jvdy50ZXh0Q29udGVudCA9IFwiMlwiO1xuICAgICAgICBuZXdDZWxsLmFwcGVuZChtYXJrUm93KTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXdDZWxsLmNsYXNzTGlzdFswXSA9PT0gXCI5LDFcIikge1xuICAgICAgICBjb25zdCBtYXJrUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWFya1Jvdy5jbGFzc0xpc3QuYWRkKFwibWFya19yb3dcIik7XG4gICAgICAgIG1hcmtSb3cudGV4dENvbnRlbnQgPSBcIjlcIjtcbiAgICAgICAgbmV3Q2VsbC5hcHBlbmQobWFya1Jvdyk7XG4gICAgICB9XG4gICAgICBpZiAobmV3Q2VsbC5jbGFzc0xpc3RbMF0gPT09IFwiMTAsMVwiKSB7XG4gICAgICAgIGNvbnN0IG1hcmtSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBtYXJrUm93LmNsYXNzTGlzdC5hZGQoXCJtYXJrX3Jvd1wiKTtcbiAgICAgICAgbWFya1Jvdy50ZXh0Q29udGVudCA9IFwiMTBcIjtcbiAgICAgICAgbmV3Q2VsbC5hcHBlbmQobWFya1Jvdyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBmaW5kRGl2QnlDb29yZGluYXRlcyhjb29yZGluYXRlcywgcGFyZW50RGl2KSB7XG4gICAgY29uc3QgZGl2ID0gcGFyZW50RGl2LnF1ZXJ5U2VsZWN0b3IoYFtjbGFzcyo9XCIke2Nvb3JkaW5hdGVzfVwiXS5jZWxsYCk7XG4gICAgcmV0dXJuIGRpdjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRyYXdTaGlwcygpIHtcbiAgICBjb25zdCBwYXJlbnREaXZCb2FyZE9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyT25lLWJvYXJkXCIpO1xuICAgIERPTUhhbmRsZXIucGxheWVyT25lU2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coYCR7c2hpcC5jb29yZGluYXRlc1swXVswXX0sJHtzaGlwLmNvb3JkaW5hdGVzWzBdWzFdfWApO1xuICAgICAgY29uc3QgZGl2ID0gZmluZERpdkJ5Q29vcmRpbmF0ZXMoXG4gICAgICAgIGAke3NoaXAuY29vcmRpbmF0ZXNbMF1bMF19LCR7c2hpcC5jb29yZGluYXRlc1swXVsxXX1gLFxuICAgICAgICBwYXJlbnREaXZCb2FyZE9uZSxcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IHNoaXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgc2hpcERpdi5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICAgIHNoaXBEaXYuY2xhc3NMaXN0LmFkZChcImRyYWdnYWJsZVwiKTtcbiAgICAgIC8vIHNoaXBEaXYuc2V0QXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIsIHRydWUpO1xuICAgICAgLy8gc2hpcERpdi5zZXRBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIiwgdHJ1ZSk7XG5cbiAgICAgIGlmIChzaGlwLnBvc2l0aW9uID09PSBcImhcIikge1xuICAgICAgICBjb25zdCB3aWR0aCA9IDQwICogc2hpcC5sZW5ndGg7XG4gICAgICAgIHNoaXBEaXYuc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGA7XG4gICAgICAgIHNoaXBEaXYuc3R5bGUuaGVpZ2h0ID0gXCI0MHB4XCI7XG4gICAgICB9XG4gICAgICBpZiAoc2hpcC5wb3NpdGlvbiA9PT0gXCJ2XCIpIHtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gNDAgKiBzaGlwLmxlbmd0aDtcbiAgICAgICAgc2hpcERpdi5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgO1xuICAgICAgICBzaGlwRGl2LnN0eWxlLndpZHRoID0gXCI0MHB4XCI7XG4gICAgICB9XG4gICAgICBkaXYuYXBwZW5kKHNoaXBEaXYpO1xuXG4gICAgICBzaGlwLmNvb3JkaW5hdGVzLmZvckVhY2goKGMpID0+IHtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gYCR7Y1swXX0sJHtjWzFdfWA7XG4gICAgICAgIGNvbnN0IHNoaXBDZWxscyA9IEFycmF5LmZyb20oXG4gICAgICAgICAgcGFyZW50RGl2Qm9hcmRPbmUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJkaXZcIiksXG4gICAgICAgICkuZmlsdGVyKChlbGVtKSA9PiBlbGVtLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpKTtcbiAgICAgICAgc2hpcENlbGxzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAvLyBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzaGlwLWNlbGxcIik7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBET01IYW5kbGVyLnBsYXllclR3b1NoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIHNoaXAuY29vcmRpbmF0ZXMuZm9yRWFjaCgoYykgPT4ge1xuICAgICAgICBjb25zdCBwYXJlbnREaXZCb2FyZFR3byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyVHdvLWJvYXJkXCIpO1xuICAgICAgICBjb25zdCBkaXYgPSBmaW5kRGl2QnlDb29yZGluYXRlcyhgJHtjWzBdfSwke2NbMV19YCwgcGFyZW50RGl2Qm9hcmRUd28pO1xuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChcInNoaXAtY2VsbFwiKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRG9tKCkge1xuICAgIGNyZWF0ZVBhZ2VMYXlvdXQoYm9keSwgc3RhdGljTGF5b3V0RWxlbWVudHMpO1xuICAgIGNyZWF0ZUJvYXJkQ2VsbHMoKTtcbiAgICBkcmF3U2hpcHMoKTtcbiAgICBhZGRFdmVudExpc3RlbmVycygpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwbGF5ZXJPbmVCb2FyZCxcbiAgICBwbGF5ZXJUd29Cb2FyZCxcbiAgICBwbGF5ZXJPbmVTaGlwcyxcbiAgICBwbGF5ZXJUd29TaGlwcyxcbiAgICBjcmVhdGVEb20sXG4gICAgZmluZERpdkJ5Q29vcmRpbmF0ZXMsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBET01IYW5kbGVyO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbWF4LWNsYXNzZXMtcGVyLWZpbGUgKi9cblxuY2xhc3MgVmVydGV4IHtcbiAgY29uc3RydWN0b3IoY29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLmNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXM7XG4gICAgdGhpcy5hZGphY2VuY3lMaXN0ID0gW107XG4gICAgdGhpcy5vY2N1cGllZCA9IGZhbHNlO1xuICAgIHRoaXMub2NjdXBpZWRCeVNoaXAgPSBmYWxzZTtcbiAgfVxuXG4gIGFkZE5laWdoYm9yKHZlcnRleCkge1xuICAgIGlmICghdGhpcy5hZGphY2VuY3lMaXN0LmluY2x1ZGVzKHZlcnRleCkpIHtcbiAgICAgIHRoaXMuYWRqYWNlbmN5TGlzdC5wdXNoKHZlcnRleCk7XG4gICAgfVxuICB9XG59XG5cbmNsYXNzIEdyYXBoIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy52ZXJ0aWNlcyA9IFtdO1xuICB9XG5cbiAgYWRkVmVydGV4KHgsIHkpIHtcbiAgICBjb25zdCB2ZXJ0ZXggPSBuZXcgVmVydGV4KFt4LCB5XSk7XG4gICAgdGhpcy52ZXJ0aWNlcy5wdXNoKHZlcnRleCk7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2xhc3MtbWV0aG9kcy11c2UtdGhpc1xuICBhZGRFZGdlKHZlcnRleDEsIHZlcnRleDIpIHtcbiAgICB2ZXJ0ZXgxLmFkZE5laWdoYm9yKHZlcnRleDIpO1xuICAgIHZlcnRleDIuYWRkTmVpZ2hib3IodmVydGV4MSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR3JhcGg7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1jeWNsZVxuaW1wb3J0IGdhbWVMb29wLCB7IHBsYXllck9uZUJvYXJkIH0gZnJvbSBcIi5cIjtcbmltcG9ydCBET01IYW5kbGVyIGZyb20gXCIuL0RPTUhhbmRsZXJcIjtcblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gIGNvbnN0IHJhbmRvbWl6ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmFuZG9taXplXCIpO1xuICByYW5kb21pemVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBnYW1lTG9vcCgpO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWRkRXZlbnRMaXN0ZW5lcnM7XG5cbmZ1bmN0aW9uIGFkZERvY3VtZW50RXZlbnRMaXN0ZW5lcnMoKSB7XG4gIGxldCBkcmFnZ2FibGVFbGVtZW50ID0gbnVsbDtcbiAgbGV0IGRyYWdnYWJsZUVsZW1lbnRSZWN0ID0gbnVsbDtcblxuICBsZXQgaXNEcmFnZ2luZyA9IGZhbHNlO1xuICBsZXQgb2ZmU2V0WDtcbiAgbGV0IG9mZlNldFk7XG4gIGxldCBtb3VzZURvd25PZmZzZXRIb3IgPSAwO1xuICBsZXQgbW91c2VEb3duT2Zmc2V0VmVyID0gMDtcbiAgbGV0IG9yaWdpbmFsRWxlbWVudEJlbG93ID0gbnVsbDtcbiAgbGV0IGVsZW1lbnRCZWxvdyA9IG51bGw7XG5cbiAgLy8gQ2hlY2tzIGlmIHRoZSBlbGVtZW50IGlzIGdldHRpbmcgZHJvcHBlZCB3aXRoaW4gdGhlIGJvcmRlcnMgb2YgdGhlIGJvYXJkXG4gIGZ1bmN0aW9uIGNoZWNrQm9yZGVycygpIHtcbiAgICBpZiAoZWxlbWVudEJlbG93KSB7XG4gICAgICBjb25zdCBlbGVtZW50QmVsb3dDb29yZGluYXRlcyA9IGVsZW1lbnRCZWxvdy5jbGFzc0xpc3RbMF1cbiAgICAgICAgLnNwbGl0KFwiLFwiKVxuICAgICAgICAubWFwKE51bWJlcik7XG4gICAgICBpZiAoZHJhZ2dhYmxlRWxlbWVudFJlY3QuaGVpZ2h0ID09PSA4MCkge1xuICAgICAgICBpZiAoZWxlbWVudEJlbG93Q29vcmRpbmF0ZXNbMF0gPiA5KSB7XG4gICAgICAgICAgZWxlbWVudEJlbG93LnNldEF0dHJpYnV0ZShcImRyb3BwYWJsZVwiLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChkcmFnZ2FibGVFbGVtZW50UmVjdC5oZWlnaHQgPT09IDEyMCkge1xuICAgICAgICBpZiAoZWxlbWVudEJlbG93Q29vcmRpbmF0ZXNbMF0gPiA4KSB7XG4gICAgICAgICAgZWxlbWVudEJlbG93LnNldEF0dHJpYnV0ZShcImRyb3BwYWJsZVwiLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChkcmFnZ2FibGVFbGVtZW50UmVjdC5oZWlnaHQgPT09IDE2MCkge1xuICAgICAgICBpZiAoZWxlbWVudEJlbG93Q29vcmRpbmF0ZXNbMF0gPiA3KSB7XG4gICAgICAgICAgZWxlbWVudEJlbG93LnNldEF0dHJpYnV0ZShcImRyb3BwYWJsZVwiLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGRyYWdnYWJsZUVsZW1lbnRSZWN0LndpZHRoID09PSA4MCkge1xuICAgICAgICBpZiAoZWxlbWVudEJlbG93Q29vcmRpbmF0ZXNbMV0gPiA5KSB7XG4gICAgICAgICAgZWxlbWVudEJlbG93LnNldEF0dHJpYnV0ZShcImRyb3BwYWJsZVwiLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChkcmFnZ2FibGVFbGVtZW50UmVjdC53aWR0aCA9PT0gMTIwKSB7XG4gICAgICAgIGlmIChlbGVtZW50QmVsb3dDb29yZGluYXRlc1sxXSA+IDgpIHtcbiAgICAgICAgICBlbGVtZW50QmVsb3cuc2V0QXR0cmlidXRlKFwiZHJvcHBhYmxlXCIsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGRyYWdnYWJsZUVsZW1lbnRSZWN0LndpZHRoID09PSAxNjApIHtcbiAgICAgICAgaWYgKGVsZW1lbnRCZWxvd0Nvb3JkaW5hdGVzWzFdID4gNykge1xuICAgICAgICAgIGVsZW1lbnRCZWxvdy5zZXRBdHRyaWJ1dGUoXCJkcm9wcGFibGVcIiwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gVXBkYXRlIGRyb3BwYWJsZSBhdHRyaWJ1dGUgb24gYm9hcmRcbiAgZnVuY3Rpb24gdXBkYXRlRHJvcHBhYmxlQXR0cmlidXRlKCkge1xuICAgIGNvbnN0IHBhcmVudERpdkJvYXJkT25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXJPbmUtYm9hcmRcIik7XG5cbiAgICBwbGF5ZXJPbmVCb2FyZC5ib2FyZC52ZXJ0aWNlcy5mb3JFYWNoKCh2ZXJ0ZXgpID0+IHtcbiAgICAgIGNvbnN0IGRpdiA9IERPTUhhbmRsZXIuZmluZERpdkJ5Q29vcmRpbmF0ZXMoXG4gICAgICAgIGAke3ZlcnRleC5jb29yZGluYXRlc1swXX0sJHt2ZXJ0ZXguY29vcmRpbmF0ZXNbMV19YCxcbiAgICAgICAgcGFyZW50RGl2Qm9hcmRPbmUsXG4gICAgICApO1xuICAgICAgaWYgKHZlcnRleC5vY2N1cGllZCA9PT0gdHJ1ZSkge1xuICAgICAgICBkaXYuc2V0QXR0cmlidXRlKFwiZHJvcHBhYmxlXCIsIGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIGlmICh2ZXJ0ZXgub2NjdXBpZWQgPT09IGZhbHNlKSB7XG4gICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJkcm9wcGFibGVcIiwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyBUaGUgY2VsbHMgdW5kZXIgdGhlIGRyYWdnYWJsZSBlbGVtZW50IHdpbGwgYmUgbWFkZSB1bmRyb3BwYWJsZSB3aGVuIHRoZSBtb3VzZSBpcyB1cFxuICBmdW5jdGlvbiBtYWtlVW5kcm9wcGFibGUoZWxCZWxvdykge1xuICAgIGNvbnN0IGNlbGxzID0gW107XG4gICAgY29uc3QgY2VsbHNWZXJ0aWNlcyA9IFtdO1xuICAgIGNvbnN0IGZpcnN0Q2VsbCA9IGVsQmVsb3c7XG5cbiAgICBjZWxscy5wdXNoKGZpcnN0Q2VsbCk7XG5cbiAgICBjb25zdCBmaXJzdENlbGxDbGFzc0FycmF5ID0gZmlyc3RDZWxsLmNsYXNzTGlzdFswXS5zcGxpdChcIixcIikubWFwKE51bWJlcik7XG4gICAgY29uc3QgcGFyZW50RGl2Qm9hcmRPbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllck9uZS1ib2FyZFwiKTtcbiAgICBjb25zdCBzZWNvbmRDZWxsSCA9IERPTUhhbmRsZXIuZmluZERpdkJ5Q29vcmRpbmF0ZXMoXG4gICAgICBgJHtmaXJzdENlbGxDbGFzc0FycmF5WzBdfSwke2ZpcnN0Q2VsbENsYXNzQXJyYXlbMV0gKyAxfWAsXG4gICAgICBwYXJlbnREaXZCb2FyZE9uZSxcbiAgICApO1xuICAgIGNvbnN0IHRoaXJkQ2VsbEggPSBET01IYW5kbGVyLmZpbmREaXZCeUNvb3JkaW5hdGVzKFxuICAgICAgYCR7Zmlyc3RDZWxsQ2xhc3NBcnJheVswXX0sJHtmaXJzdENlbGxDbGFzc0FycmF5WzFdICsgMn1gLFxuICAgICAgcGFyZW50RGl2Qm9hcmRPbmUsXG4gICAgKTtcbiAgICBjb25zdCBmb3VydGhDZWxsSCA9IERPTUhhbmRsZXIuZmluZERpdkJ5Q29vcmRpbmF0ZXMoXG4gICAgICBgJHtmaXJzdENlbGxDbGFzc0FycmF5WzBdfSwke2ZpcnN0Q2VsbENsYXNzQXJyYXlbMV0gKyAzfWAsXG4gICAgICBwYXJlbnREaXZCb2FyZE9uZSxcbiAgICApO1xuICAgIGNvbnN0IHNlY29uZENlbGxWID0gRE9NSGFuZGxlci5maW5kRGl2QnlDb29yZGluYXRlcyhcbiAgICAgIGAke2ZpcnN0Q2VsbENsYXNzQXJyYXlbMF0gKyAxfSwke2ZpcnN0Q2VsbENsYXNzQXJyYXlbMV19YCxcbiAgICAgIHBhcmVudERpdkJvYXJkT25lLFxuICAgICk7XG4gICAgY29uc3QgdGhpcmRDZWxsViA9IERPTUhhbmRsZXIuZmluZERpdkJ5Q29vcmRpbmF0ZXMoXG4gICAgICBgJHtmaXJzdENlbGxDbGFzc0FycmF5WzBdICsgMn0sJHtmaXJzdENlbGxDbGFzc0FycmF5WzFdfWAsXG4gICAgICBwYXJlbnREaXZCb2FyZE9uZSxcbiAgICApO1xuICAgIGNvbnN0IGZvdXJ0aENlbGxWID0gRE9NSGFuZGxlci5maW5kRGl2QnlDb29yZGluYXRlcyhcbiAgICAgIGAke2ZpcnN0Q2VsbENsYXNzQXJyYXlbMF0gKyAzfSwke2ZpcnN0Q2VsbENsYXNzQXJyYXlbMV19YCxcbiAgICAgIHBhcmVudERpdkJvYXJkT25lLFxuICAgICk7XG5cbiAgICBpZiAoZHJhZ2dhYmxlRWxlbWVudFJlY3Qud2lkdGggPj0gMTYwKSB7XG4gICAgICBjZWxscy5wdXNoKHNlY29uZENlbGxIKTtcbiAgICAgIGNlbGxzLnB1c2godGhpcmRDZWxsSCk7XG4gICAgICBjZWxscy5wdXNoKGZvdXJ0aENlbGxIKTtcbiAgICB9IGVsc2UgaWYgKGRyYWdnYWJsZUVsZW1lbnRSZWN0LndpZHRoID49IDEyMCkge1xuICAgICAgY2VsbHMucHVzaChzZWNvbmRDZWxsSCk7XG4gICAgICBjZWxscy5wdXNoKHRoaXJkQ2VsbEgpO1xuICAgIH0gZWxzZSBpZiAoZHJhZ2dhYmxlRWxlbWVudFJlY3Qud2lkdGggPj0gODApIHtcbiAgICAgIGNlbGxzLnB1c2goc2Vjb25kQ2VsbEgpO1xuICAgIH1cblxuICAgIGlmIChkcmFnZ2FibGVFbGVtZW50UmVjdC5oZWlnaHQgPj0gMTYwKSB7XG4gICAgICBjZWxscy5wdXNoKHNlY29uZENlbGxWKTtcbiAgICAgIGNlbGxzLnB1c2godGhpcmRDZWxsVik7XG4gICAgICBjZWxscy5wdXNoKGZvdXJ0aENlbGxWKTtcbiAgICB9IGVsc2UgaWYgKGRyYWdnYWJsZUVsZW1lbnRSZWN0LmhlaWdodCA+PSAxMjApIHtcbiAgICAgIGNlbGxzLnB1c2goc2Vjb25kQ2VsbFYpO1xuICAgICAgY2VsbHMucHVzaCh0aGlyZENlbGxWKTtcbiAgICB9IGVsc2UgaWYgKGRyYWdnYWJsZUVsZW1lbnRSZWN0LmhlaWdodCA+PSA4MCkge1xuICAgICAgY2VsbHMucHVzaChzZWNvbmRDZWxsVik7XG4gICAgfVxuXG4gICAgLy8gU2V0IGRyb3BwYWJsZSBhdHRyaWJ1dGUgb24gdGhlIGNlbGxzIHVuZGVyIGRyYWdnYWJsZSBlbGVtZW50XG4gICAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgaWYgKGNlbGwpIHtcbiAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoXCJkcm9wcGFibGVcIiwgZmFsc2UpO1xuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBjZWxsLmNsYXNzTGlzdFswXTtcbiAgICAgICAgY29uc3QgYXJyYXkgPSBjbGFzc05hbWUuc3BsaXQoXCIsXCIpLm1hcChOdW1iZXIpO1xuICAgICAgICBjb25zdCB2ZXJ0ZXggPSBwbGF5ZXJPbmVCb2FyZC5maW5kVmVydGV4dE9iamVjdEJ5Q29vcmRpbmF0ZXMoYXJyYXkpO1xuICAgICAgICBjZWxsc1ZlcnRpY2VzLnB1c2godmVydGV4KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFVwZGF0ZSB0aGUgZ3JhcGggYWNjb3JkaW5nbHlcbiAgICBjZWxsc1ZlcnRpY2VzLmZvckVhY2goKGNlbGxWZXJ0ZXgpID0+IHtcbiAgICAgIGNlbGxWZXJ0ZXgub2NjdXBpZWRCeVNoaXAgPSB0cnVlO1xuICAgICAgY2VsbFZlcnRleC5vY2N1cGllZCA9IHRydWU7XG5cbiAgICAgIC8vIFVwZGF0ZSBhZGphY2VudCBjZWxsczpcbiAgICAgIGNlbGxWZXJ0ZXguYWRqYWNlbmN5TGlzdC5mb3JFYWNoKChhZGphY2VuY3kpID0+IHtcbiAgICAgICAgLy8gSW4gdGhlIGdyYXBoXG4gICAgICAgIGFkamFjZW5jeS5vY2N1cGllZCA9IHRydWU7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGAke2FkamFjZW5jeS5jb29yZGluYXRlc1swXX0sJHthZGphY2VuY3kuY29vcmRpbmF0ZXNbMV19YDtcbiAgICAgICAgY29uc3QgcGFyZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXJPbmUtYm9hcmRcIik7XG4gICAgICAgIGNvbnN0IGRpdiA9IHBhcmVudERpdi5xdWVyeVNlbGVjdG9yKGBbY2xhc3MqPVwiJHtjbGFzc05hbWV9XCJdLmNlbGxgKTtcbiAgICAgICAgLy8gSW4gRE9NXG4gICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJkcm9wcGFibGVcIiwgZmFsc2UpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2cocGxheWVyT25lQm9hcmQuYm9hcmQudmVydGljZXMpO1xuICB9XG5cbiAgLy8gTW91c2UgZG93blxuICBjb25zdCBvbk1vdXNlRG93biA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnRzRnJvbVBvaW50ID0gZG9jdW1lbnQuZWxlbWVudHNGcm9tUG9pbnQoXG4gICAgICBldmVudC5jbGllbnRYLFxuICAgICAgZXZlbnQuY2xpZW50WSxcbiAgICApO1xuXG4gICAgZWxlbWVudHNGcm9tUG9pbnQuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoXCJkcmFnZ2FibGVcIikpIHtcbiAgICAgICAgZHJhZ2dhYmxlRWxlbWVudCA9IGVsO1xuICAgICAgICBkcmFnZ2FibGVFbGVtZW50UmVjdCA9IGRyYWdnYWJsZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoZHJhZ2dhYmxlRWxlbWVudCkge1xuICAgICAgaXNEcmFnZ2luZyA9IHRydWU7XG4gICAgICBkcmFnZ2FibGVFbGVtZW50LnN0eWxlLmxlZnQgPSAwO1xuICAgICAgZHJhZ2dhYmxlRWxlbWVudC5zdHlsZS50b3AgPSAwO1xuICAgICAgZHJhZ2dhYmxlRWxlbWVudC5zdHlsZS56SW5kZXggPSAwO1xuICAgICAgb2ZmU2V0WCA9IGV2ZW50LmNsaWVudFg7XG4gICAgICBvZmZTZXRZID0gZXZlbnQuY2xpZW50WTtcblxuICAgICAgZHJhZ2dhYmxlRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZHJhZ2dpbmdcIik7XG5cbiAgICAgIGNvbnN0IHBhcmVudFJlY3QgPSBkcmFnZ2FibGVFbGVtZW50LnBhcmVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgIGNvbnN0IGNlbGxzID0gW107XG4gICAgICBjb25zdCBjZWxsc1ZlcnRpY2VzID0gW107XG4gICAgICBjb25zdCBjZWxsc1ZlcnRpY2VzQWRqYWNlbnQgPSBbXTtcbiAgICAgIGNvbnN0IGZpcnN0Q2VsbCA9IGRyYWdnYWJsZUVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgIGxldCBzZWNvbmRDZWxsO1xuICAgICAgbGV0IHRoaXJkQ2VsbDtcbiAgICAgIGxldCBmb3VydGhDZWxsO1xuXG4gICAgICBjZWxscy5wdXNoKGZpcnN0Q2VsbCk7XG4gICAgICBpZiAob2ZmU2V0WCA+IHBhcmVudFJlY3QueCArIDEyMCkge1xuICAgICAgICBtb3VzZURvd25PZmZzZXRIb3IgPSAxMjA7XG4gICAgICB9IGVsc2UgaWYgKG9mZlNldFggPiBwYXJlbnRSZWN0LnggKyA4MCkge1xuICAgICAgICBtb3VzZURvd25PZmZzZXRIb3IgPSA4MDtcbiAgICAgIH0gZWxzZSBpZiAob2ZmU2V0WCA+IHBhcmVudFJlY3QueCArIDQwKSB7XG4gICAgICAgIG1vdXNlRG93bk9mZnNldEhvciA9IDQwO1xuICAgICAgfSBlbHNlIGlmIChvZmZTZXRZID4gcGFyZW50UmVjdC55ICsgMTIwKSB7XG4gICAgICAgIG1vdXNlRG93bk9mZnNldFZlciA9IDEyMDtcbiAgICAgIH0gZWxzZSBpZiAob2ZmU2V0WSA+IHBhcmVudFJlY3QueSArIDgwKSB7XG4gICAgICAgIG1vdXNlRG93bk9mZnNldFZlciA9IDgwO1xuICAgICAgfSBlbHNlIGlmIChvZmZTZXRZID4gcGFyZW50UmVjdC55ICsgNDApIHtcbiAgICAgICAgbW91c2VEb3duT2Zmc2V0VmVyID0gNDA7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHdpZHRoIG9mIGRyYWdnYWJsZSBlcXVhbCBvciBncmVhdGVyIHRoYW4gODAsIGdyYWIgMm5kIGVsZW1lbnQgYW5kIHB1dCBpdCBpbiB0aGUgY2VsbHMgbGlzdFxuICAgICAgaWYgKGRyYWdnYWJsZUVsZW1lbnRSZWN0LndpZHRoID49IDgwKSB7XG4gICAgICAgIGNvbnN0IGNlbGxFbGVtZW50cyA9IGRvY3VtZW50LmVsZW1lbnRzRnJvbVBvaW50KFxuICAgICAgICAgIGV2ZW50LmNsaWVudFggLSBtb3VzZURvd25PZmZzZXRIb3IgKyA0MCxcbiAgICAgICAgICBldmVudC5jbGllbnRZIC0gbW91c2VEb3duT2Zmc2V0VmVyLFxuICAgICAgICApO1xuICAgICAgICBjZWxsRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImNlbGxcIikpIHtcbiAgICAgICAgICAgIHNlY29uZENlbGwgPSBlbGVtZW50O1xuICAgICAgICAgICAgY2VsbHMucHVzaChzZWNvbmRDZWxsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiB3aWR0aCBvZiBkcmFnZ2FibGUgZXF1YWwgb3IgZ3JlYXRlciB0aGFuIDEyMCwgZ3JhYiAzcmQgZWxlbWVudCBhbmQgcHV0IGl0IGluIHRoZSBjZWxscyBsaXN0XG4gICAgICBpZiAoZHJhZ2dhYmxlRWxlbWVudFJlY3Qud2lkdGggPj0gMTIwKSB7XG4gICAgICAgIGNvbnN0IGNlbGxFbGVtZW50cyA9IGRvY3VtZW50LmVsZW1lbnRzRnJvbVBvaW50KFxuICAgICAgICAgIGV2ZW50LmNsaWVudFggLSBtb3VzZURvd25PZmZzZXRIb3IgKyA4MCxcbiAgICAgICAgICBldmVudC5jbGllbnRZIC0gbW91c2VEb3duT2Zmc2V0VmVyLFxuICAgICAgICApO1xuICAgICAgICBjZWxsRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImNlbGxcIikpIHtcbiAgICAgICAgICAgIHRoaXJkQ2VsbCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICBjZWxscy5wdXNoKHRoaXJkQ2VsbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgd2lkdGggb2YgZHJhZ2dhYmxlIGVxdWFsIG9yIGdyZWF0ZXIgdGhhbiAxNjAsIGdyYWIgNHRoIGVsZW1lbnQgYW5kIHB1dCBpdCBpbiB0aGUgY2VsbHMgbGlzdFxuICAgICAgaWYgKGRyYWdnYWJsZUVsZW1lbnRSZWN0LndpZHRoID49IDE2MCkge1xuICAgICAgICBjb25zdCBjZWxsRWxlbWVudHMgPSBkb2N1bWVudC5lbGVtZW50c0Zyb21Qb2ludChcbiAgICAgICAgICBldmVudC5jbGllbnRYIC0gbW91c2VEb3duT2Zmc2V0SG9yICsgMTIwLFxuICAgICAgICAgIGV2ZW50LmNsaWVudFkgLSBtb3VzZURvd25PZmZzZXRWZXIsXG4gICAgICAgICk7XG4gICAgICAgIGNlbGxFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2VsbFwiKSkge1xuICAgICAgICAgICAgZm91cnRoQ2VsbCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICBjZWxscy5wdXNoKGZvdXJ0aENlbGwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIGhlaWdodCBvZiBkcmFnZ2FibGUgZXF1YWwgb3IgZ3JlYXRlciB0aGFuIDgwLCBncmFiIDJuZCBlbGVtZW50IGFuZCBwdXQgaXQgaW4gdGhlIGNlbGxzIGxpc3RcbiAgICAgIGlmIChkcmFnZ2FibGVFbGVtZW50UmVjdC5oZWlnaHQgPj0gODApIHtcbiAgICAgICAgY29uc3QgY2VsbEVsZW1lbnRzID0gZG9jdW1lbnQuZWxlbWVudHNGcm9tUG9pbnQoXG4gICAgICAgICAgZXZlbnQuY2xpZW50WCAtIG1vdXNlRG93bk9mZnNldEhvcixcbiAgICAgICAgICBldmVudC5jbGllbnRZIC0gbW91c2VEb3duT2Zmc2V0VmVyICsgNDAsXG4gICAgICAgICk7XG4gICAgICAgIGNlbGxFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2VsbFwiKSkge1xuICAgICAgICAgICAgc2Vjb25kQ2VsbCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICBjZWxscy5wdXNoKHNlY29uZENlbGwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIGhlaWdodCBvZiBkcmFnZ2FibGUgZXF1YWwgb3IgZ3JlYXRlciB0aGFuIDEyMCwgZ3JhYiAzcmQgZWxlbWVudCBhbmQgcHV0IGl0IGluIHRoZSBjZWxscyBsaXN0XG4gICAgICBpZiAoZHJhZ2dhYmxlRWxlbWVudFJlY3QuaGVpZ2h0ID49IDEyMCkge1xuICAgICAgICBjb25zdCBjZWxsRWxlbWVudHMgPSBkb2N1bWVudC5lbGVtZW50c0Zyb21Qb2ludChcbiAgICAgICAgICBldmVudC5jbGllbnRYIC0gbW91c2VEb3duT2Zmc2V0SG9yLFxuICAgICAgICAgIGV2ZW50LmNsaWVudFkgLSBtb3VzZURvd25PZmZzZXRWZXIgKyA4MCxcbiAgICAgICAgKTtcbiAgICAgICAgY2VsbEVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJjZWxsXCIpKSB7XG4gICAgICAgICAgICB0aGlyZENlbGwgPSBlbGVtZW50O1xuICAgICAgICAgICAgY2VsbHMucHVzaCh0aGlyZENlbGwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIGhlaWdodCBvZiBkcmFnZ2FibGUgZXF1YWwgb3IgZ3JlYXRlciB0aGFuIDE2MCwgZ3JhYiA0dGggZWxlbWVudCBhbmQgcHV0IGl0IGluIHRoZSBjZWxscyBsaXN0XG4gICAgICBpZiAoZHJhZ2dhYmxlRWxlbWVudFJlY3QuaGVpZ2h0ID49IDE2MCkge1xuICAgICAgICBjb25zdCBjZWxsRWxlbWVudHMgPSBkb2N1bWVudC5lbGVtZW50c0Zyb21Qb2ludChcbiAgICAgICAgICBldmVudC5jbGllbnRYIC0gbW91c2VEb3duT2Zmc2V0SG9yLFxuICAgICAgICAgIGV2ZW50LmNsaWVudFkgLSBtb3VzZURvd25PZmZzZXRWZXIgKyAxMjAsXG4gICAgICAgICk7XG4gICAgICAgIGNlbGxFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2VsbFwiKSkge1xuICAgICAgICAgICAgZm91cnRoQ2VsbCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICBjZWxscy5wdXNoKGZvdXJ0aENlbGwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIENoYW5nZSB0aGUgZHJvcHBhYmxlIGF0dHJpYnV0ZSBvZiBlYWNoIGNlbGwgdW5kZXIgZHJhZ2dhYmxlIGVsZW1lbnQgdG8gdHJ1ZVxuICAgICAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZShcImRyb3BwYWJsZVwiLCB0cnVlKTtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gY2VsbC5jbGFzc0xpc3RbMF07XG4gICAgICAgIGNvbnN0IGFycmF5ID0gY2xhc3NOYW1lLnNwbGl0KFwiLFwiKS5tYXAoTnVtYmVyKTtcbiAgICAgICAgY29uc3QgdmVydGV4ID0gcGxheWVyT25lQm9hcmQuZmluZFZlcnRleHRPYmplY3RCeUNvb3JkaW5hdGVzKGFycmF5KTtcbiAgICAgICAgY2VsbHNWZXJ0aWNlcy5wdXNoKHZlcnRleCk7XG4gICAgICB9KTtcblxuICAgICAgLy8gQ2hhbmdlIHRoZSBkcm9wcGFibGUgYXR0cmlidXRlIG9mIGVhY2ggY2VsbCdzIGFkamFjZW50IGNlbGwgdG8gdHJ1ZSAoZXhjZXB0IHRob3NlIG9jY3VwaWVkIG9yIG5laWdoYm9yZWQgdG8gc2hpcHMpXG4gICAgICBjZWxsc1ZlcnRpY2VzLmZvckVhY2goKGNlbGxWZXJ0ZXgpID0+IHtcbiAgICAgICAgY2VsbFZlcnRleC5vY2N1cGllZEJ5U2hpcCA9IGZhbHNlO1xuICAgICAgICBjZWxsVmVydGV4Lm9jY3VwaWVkID0gZmFsc2U7XG4gICAgICAgIGNlbGxWZXJ0ZXguYWRqYWNlbmN5TGlzdC5mb3JFYWNoKChhZGphY2VuY3kpID0+IHtcbiAgICAgICAgICBpZiAoIWNlbGxzVmVydGljZXMuaW5jbHVkZXMoYWRqYWNlbmN5KSkge1xuICAgICAgICAgICAgYWRqYWNlbmN5Lm9jY3VwaWVkID0gZmFsc2U7XG4gICAgICAgICAgICBhZGphY2VuY3kuYWRqYWNlbmN5TGlzdC5mb3JFYWNoKChhZGopID0+IHtcbiAgICAgICAgICAgICAgaWYgKCFjZWxsc1ZlcnRpY2VzLmluY2x1ZGVzKGFkaikpIHtcbiAgICAgICAgICAgICAgICBpZiAoYWRqLm9jY3VwaWVkQnlTaGlwKSB7XG4gICAgICAgICAgICAgICAgICBhZGphY2VuY3kub2NjdXBpZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIGFkamFjZW5jeS5vY2N1cGllZCA9PT0gZmFsc2UgJiZcbiAgICAgICAgICAgICAgIWNlbGxzVmVydGljZXNBZGphY2VudC5pbmNsdWRlcyhhZGphY2VuY3kpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgY2VsbHNWZXJ0aWNlc0FkamFjZW50LnB1c2goYWRqYWNlbmN5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIGNlbGxzVmVydGljZXNBZGphY2VudC5mb3JFYWNoKCh2ZXJ0ZXgpID0+IHtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gYCR7dmVydGV4LmNvb3JkaW5hdGVzWzBdfSwke3ZlcnRleC5jb29yZGluYXRlc1sxXX1gO1xuICAgICAgICBjb25zdCBwYXJlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllck9uZS1ib2FyZFwiKTtcbiAgICAgICAgY29uc3QgZGl2ID0gcGFyZW50RGl2LnF1ZXJ5U2VsZWN0b3IoYFtjbGFzcyo9XCIke2NsYXNzTmFtZX1cIl0uY2VsbGApO1xuICAgICAgICBkaXYuc2V0QXR0cmlidXRlKFwiZHJvcHBhYmxlXCIsIHRydWUpO1xuICAgICAgICAvLyBkaXYuY2xhc3NMaXN0LmFkZChcInNoaXAtY2VsbFwiKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyAgIGNvbnNvbGUubG9nKGNlbGxzKTtcbiAgICAgIC8vICAgY29uc29sZS5sb2coY2VsbHNWZXJ0aWNlcyk7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKGNlbGxzVmVydGljZXNBZGphY2VudCk7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKHBsYXllck9uZUJvYXJkKTtcbiAgICAgIGNvbnN0IGVsZW1lbnRzQmVsb3cgPSBkb2N1bWVudC5lbGVtZW50c0Zyb21Qb2ludChcbiAgICAgICAgZXZlbnQuY2xpZW50WCAtIG1vdXNlRG93bk9mZnNldEhvcixcbiAgICAgICAgZXZlbnQuY2xpZW50WSAtIG1vdXNlRG93bk9mZnNldFZlcixcbiAgICAgICk7XG4gICAgICBlbGVtZW50c0JlbG93LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2VsbFwiKSkge1xuICAgICAgICAgIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZShcImRyb3BwYWJsZVwiKSA9PT0gXCJ0cnVlXCIpIHtcbiAgICAgICAgICAgIGVsZW1lbnRCZWxvdyA9IGVsZW1lbnQ7XG4gICAgICAgICAgICBvcmlnaW5hbEVsZW1lbnRCZWxvdyA9IGVsZW1lbnQ7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnRCZWxvdyA9IG51bGw7XG4gICAgICAgICAgICBvcmlnaW5hbEVsZW1lbnRCZWxvdyA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgLy8gTW91c2UgbW92ZVxuICBjb25zdCBvbk1vdXNlTW92ZSA9IChldmVudCkgPT4ge1xuICAgIGlmIChpc0RyYWdnaW5nKSB7XG4gICAgICBjb25zdCBlbGVtZW50c0JlbG93ID0gZG9jdW1lbnQuZWxlbWVudHNGcm9tUG9pbnQoXG4gICAgICAgIGV2ZW50LmNsaWVudFggLSBtb3VzZURvd25PZmZzZXRIb3IsXG4gICAgICAgIGV2ZW50LmNsaWVudFkgLSBtb3VzZURvd25PZmZzZXRWZXIsXG4gICAgICApO1xuICAgICAgZWxlbWVudHNCZWxvdy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImNlbGxcIikpIHtcbiAgICAgICAgICBpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkcm9wcGFibGVcIikgPT09IFwidHJ1ZVwiKSB7XG4gICAgICAgICAgICBlbGVtZW50QmVsb3cgPSBlbGVtZW50O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGVtZW50QmVsb3cgPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAoZHJhZ2dhYmxlRWxlbWVudCkge1xuICAgICAgICBkcmFnZ2FibGVFbGVtZW50LnN0eWxlLmxlZnQgPSBgJHtldmVudC5jbGllbnRYIC0gb2ZmU2V0WH1weGA7XG4gICAgICAgIGRyYWdnYWJsZUVsZW1lbnQuc3R5bGUudG9wID0gYCR7ZXZlbnQuY2xpZW50WSAtIG9mZlNldFl9cHhgO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvLyBNb3VzZSB1cFxuICBjb25zdCBvbk1vdXNlVXAgPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoaXNEcmFnZ2luZykge1xuICAgICAgaXNEcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgLy8gbGV0IGFwcGVuZGVkID0gZmFsc2U7XG5cbiAgICAgIGlmIChkcmFnZ2FibGVFbGVtZW50UmVjdC53aWR0aCA+IDQwIHx8IGRyYWdnYWJsZUVsZW1lbnRSZWN0LmhlaWdodCA+IDQwKSB7XG4gICAgICAgIGxldCBsYXN0U2hpcEVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKGRyYWdnYWJsZUVsZW1lbnRSZWN0LndpZHRoID09PSA4MCkge1xuICAgICAgICAgIGxhc3RTaGlwRWxlbWVudCA9IGRvY3VtZW50LmVsZW1lbnRzRnJvbVBvaW50KFxuICAgICAgICAgICAgZXZlbnQuY2xpZW50WCAtIG1vdXNlRG93bk9mZnNldEhvciArIDQwLFxuICAgICAgICAgICAgZXZlbnQuY2xpZW50WSAtIG1vdXNlRG93bk9mZnNldFZlcixcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKGRyYWdnYWJsZUVsZW1lbnRSZWN0LndpZHRoID09PSAxMjApIHtcbiAgICAgICAgICBsYXN0U2hpcEVsZW1lbnQgPSBkb2N1bWVudC5lbGVtZW50c0Zyb21Qb2ludChcbiAgICAgICAgICAgIGV2ZW50LmNsaWVudFggLSBtb3VzZURvd25PZmZzZXRIb3IgKyA4MCxcbiAgICAgICAgICAgIGV2ZW50LmNsaWVudFkgLSBtb3VzZURvd25PZmZzZXRWZXIsXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmIChkcmFnZ2FibGVFbGVtZW50UmVjdC53aWR0aCA9PT0gMTYwKSB7XG4gICAgICAgICAgbGFzdFNoaXBFbGVtZW50ID0gZG9jdW1lbnQuZWxlbWVudHNGcm9tUG9pbnQoXG4gICAgICAgICAgICBldmVudC5jbGllbnRYIC0gbW91c2VEb3duT2Zmc2V0SG9yICsgMTIwLFxuICAgICAgICAgICAgZXZlbnQuY2xpZW50WSAtIG1vdXNlRG93bk9mZnNldFZlcixcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKGRyYWdnYWJsZUVsZW1lbnRSZWN0LmhlaWdodCA9PT0gODApIHtcbiAgICAgICAgICBsYXN0U2hpcEVsZW1lbnQgPSBkb2N1bWVudC5lbGVtZW50c0Zyb21Qb2ludChcbiAgICAgICAgICAgIGV2ZW50LmNsaWVudFggLSBtb3VzZURvd25PZmZzZXRIb3IsXG4gICAgICAgICAgICBldmVudC5jbGllbnRZIC0gbW91c2VEb3duT2Zmc2V0VmVyICsgNDAsXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmIChkcmFnZ2FibGVFbGVtZW50UmVjdC5oZWlnaHQgPT09IDEyMCkge1xuICAgICAgICAgIGxhc3RTaGlwRWxlbWVudCA9IGRvY3VtZW50LmVsZW1lbnRzRnJvbVBvaW50KFxuICAgICAgICAgICAgZXZlbnQuY2xpZW50WCAtIG1vdXNlRG93bk9mZnNldEhvcixcbiAgICAgICAgICAgIGV2ZW50LmNsaWVudFkgLSBtb3VzZURvd25PZmZzZXRWZXIgKyA4MCxcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKGRyYWdnYWJsZUVsZW1lbnRSZWN0LmhlaWdodCA9PT0gMTYwKSB7XG4gICAgICAgICAgbGFzdFNoaXBFbGVtZW50ID0gZG9jdW1lbnQuZWxlbWVudHNGcm9tUG9pbnQoXG4gICAgICAgICAgICBldmVudC5jbGllbnRYIC0gbW91c2VEb3duT2Zmc2V0SG9yLFxuICAgICAgICAgICAgZXZlbnQuY2xpZW50WSAtIG1vdXNlRG93bk9mZnNldFZlciArIDEyMCxcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgbGFzdFNoaXBFbGVtZW50LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJjZWxsXCIpKSB7XG4gICAgICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBlbGVtZW50LmNsYXNzTGlzdFswXTtcbiAgICAgICAgICAgIGNvbnN0IGFycmF5ID0gY2xhc3NOYW1lLnNwbGl0KFwiLFwiKS5tYXAoTnVtYmVyKTtcbiAgICAgICAgICAgIGNvbnN0IHZlcnRleCA9IHBsYXllck9uZUJvYXJkLmZpbmRWZXJ0ZXh0T2JqZWN0QnlDb29yZGluYXRlcyhhcnJheSk7XG5cbiAgICAgICAgICAgIHZlcnRleC5hZGphY2VuY3lMaXN0LmZvckVhY2goKGFkamFjZW5jeSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoYWRqYWNlbmN5Lm9jY3VwaWVkQnlTaGlwID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnRCZWxvdykge1xuICAgICAgICAgICAgICAgICAgZWxlbWVudEJlbG93LnNldEF0dHJpYnV0ZShcImRyb3BwYWJsZVwiLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBDaGVjayBib3JkZXJcbiAgICAgIGNoZWNrQm9yZGVycygpO1xuXG4gICAgICBpZiAoZWxlbWVudEJlbG93ICE9PSBudWxsKSB7XG4gICAgICAgIGlmIChlbGVtZW50QmVsb3cuZ2V0QXR0cmlidXRlKFwiZHJvcHBhYmxlXCIpID09PSBcInRydWVcIikge1xuICAgICAgICAgIGVsZW1lbnRCZWxvdy5hcHBlbmQoZHJhZ2dhYmxlRWxlbWVudCk7XG4gICAgICAgICAgbWFrZVVuZHJvcHBhYmxlKGVsZW1lbnRCZWxvdyk7XG4gICAgICAgICAgLy8gYXBwZW5kZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnRCZWxvdy5nZXRBdHRyaWJ1dGUoXCJkcm9wcGFibGVcIikgPT09IFwiZmFsc2VcIikge1xuICAgICAgICAgIG9yaWdpbmFsRWxlbWVudEJlbG93LmFwcGVuZChkcmFnZ2FibGVFbGVtZW50KTtcbiAgICAgICAgICBtYWtlVW5kcm9wcGFibGUob3JpZ2luYWxFbGVtZW50QmVsb3cpO1xuICAgICAgICAgIC8vIGFwcGVuZGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9yaWdpbmFsRWxlbWVudEJlbG93LmFwcGVuZChkcmFnZ2FibGVFbGVtZW50KTtcbiAgICAgICAgbWFrZVVuZHJvcHBhYmxlKG9yaWdpbmFsRWxlbWVudEJlbG93KTtcbiAgICAgICAgLy8gYXBwZW5kZWQgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgZHJhZ2dhYmxlRWxlbWVudC5zdHlsZS5sZWZ0ID0gMDtcbiAgICAgIGRyYWdnYWJsZUVsZW1lbnQuc3R5bGUudG9wID0gMDtcbiAgICAgIGRyYWdnYWJsZUVsZW1lbnQuc3R5bGUuekluZGV4ID0gNTtcbiAgICAgIGRyYWdnYWJsZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRyYWdnaW5nXCIpO1xuXG4gICAgICBvZmZTZXRYID0gbnVsbDtcbiAgICAgIG9mZlNldFkgPSBudWxsO1xuICAgICAgbW91c2VEb3duT2Zmc2V0SG9yID0gMDtcbiAgICAgIG1vdXNlRG93bk9mZnNldFZlciA9IDA7XG4gICAgICAvLyBpZiAoZWxlbWVudEJlbG93ICYmIGFwcGVuZGVkID09PSBmYWxzZSkge1xuICAgICAgLy8gICBpZiAoZWxlbWVudEJlbG93ID09PSBvcmlnaW5hbEVsZW1lbnRCZWxvdykge1xuICAgICAgLy8gICAgIGVsZW1lbnRCZWxvdy5zZXRBdHRyaWJ1dGUoXCJkcm9wcGFibGVcIiwgdHJ1ZSk7XG4gICAgICAvLyAgIH1cbiAgICAgIC8vIH1cbiAgICAgIC8vIGlmIChlbGVtZW50QmVsb3cgPT09IG51bGwpIHtcbiAgICAgIC8vICAgb3JpZ2luYWxFbGVtZW50QmVsb3cuc2V0QXR0cmlidXRlKFwiZHJvcHBhYmxlXCIsIGZhbHNlKTtcbiAgICAgIC8vIH1cbiAgICB9XG4gICAgZHJhZ2dhYmxlRWxlbWVudCA9IG51bGw7XG4gICAgZHJhZ2dhYmxlRWxlbWVudFJlY3QgPSBudWxsO1xuICAgIHVwZGF0ZURyb3BwYWJsZUF0dHJpYnV0ZSgpO1xuICB9O1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgb25Nb3VzZURvd24pO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG9uTW91c2VNb3ZlKTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgb25Nb3VzZVVwKTtcbn1cblxuZXhwb3J0IHsgYWRkRG9jdW1lbnRFdmVudExpc3RlbmVycyB9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnRpbnVlICovXG5pbXBvcnQgU2hpcE1vZHVsZSBmcm9tIFwiLi9zaGlwXCI7XG5pbXBvcnQgR3JhcGggZnJvbSBcIi4vRFNfR3JhcGhcIjtcblxuZnVuY3Rpb24gR2FtZWJvYXJkTW9kdWxlKCkge1xuICBjb25zdCBib2FyZCA9IG5ldyBHcmFwaCgpO1xuICBjb25zdCBzaGlwcyA9IFtdO1xuICBjb25zdCBtaXNzaW5nU2hvdHMgPSBbXTtcblxuICAvLyBDcmVhdGUgMTB4MTAgY2VsbHMgYXMgZ3JhcGggdmVydGV4ZXNcbiAgZnVuY3Rpb24gY3JlYXRlQ2VsbHMoKSB7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCAxMTsgaSArPSAxKSB7XG4gICAgICBmb3IgKGxldCBqID0gMTsgaiA8IDExOyBqICs9IDEpIHtcbiAgICAgICAgYm9hcmQuYWRkVmVydGV4KGksIGopO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIEZpbmQgdGhlIHZlcnRleCBvYmplY3QgbWF0Y2hpbmcgdGhlIGdpdmVuIGNvb3JkaW5hdGVzXG4gIGZ1bmN0aW9uIGZpbmRWZXJ0ZXh0T2JqZWN0QnlDb29yZGluYXRlcyhjb29yZGluYXRlcykge1xuICAgIC8vIGNvbnNvbGUubG9nKGNvb3JkaW5hdGVzKTtcbiAgICBjb25zdCBmb3VuZFZlcnRleCA9IGJvYXJkLnZlcnRpY2VzLmZpbmQoXG4gICAgICAodmVydGV4KSA9PlxuICAgICAgICBKU09OLnN0cmluZ2lmeSh2ZXJ0ZXguY29vcmRpbmF0ZXMpID09PSBKU09OLnN0cmluZ2lmeShjb29yZGluYXRlcyksXG4gICAgKTtcblxuICAgIGlmIChmb3VuZFZlcnRleCkge1xuICAgICAgcmV0dXJuIGZvdW5kVmVydGV4O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8vIEZpbGwgb3V0IGFkamFjZW5jeUxpc3QgZm9yIGEgdmVydGV4XG4gIGZ1bmN0aW9uIGFkZENlbGxBZGphY2VuY2llcyh2ZXJ0ZXgpIHtcbiAgICBjb25zdCB5ID0gdmVydGV4LmNvb3JkaW5hdGVzWzBdO1xuICAgIGNvbnN0IHggPSB2ZXJ0ZXguY29vcmRpbmF0ZXNbMV07XG4gICAgY29uc3QgcG90ZW50aWFsQWRqYWNlbmNpZXMgPSBbXG4gICAgICBbeSAtIDEsIHggLSAxXSxcbiAgICAgIFt5IC0gMSwgeF0sXG4gICAgICBbeSAtIDEsIHggKyAxXSxcbiAgICAgIFt5LCB4IC0gMV0sXG4gICAgICBbeSwgeCArIDFdLFxuICAgICAgW3kgKyAxLCB4IC0gMV0sXG4gICAgICBbeSArIDEsIHhdLFxuICAgICAgW3kgKyAxLCB4ICsgMV0sXG4gICAgXTtcbiAgICBjb25zdCBhZGphY2VuY2llcyA9IFtdO1xuICAgIHBvdGVudGlhbEFkamFjZW5jaWVzLmZvckVhY2goKGFkamFjZW5jeSkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBhZGphY2VuY3lbMF0gPiAwICYmXG4gICAgICAgIGFkamFjZW5jeVswXSA8PSAxMCAmJlxuICAgICAgICBhZGphY2VuY3lbMV0gPiAwICYmXG4gICAgICAgIGFkamFjZW5jeVsxXSA8PSAxMFxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IGFkamFjZW5jeU9iamVjdCA9IGZpbmRWZXJ0ZXh0T2JqZWN0QnlDb29yZGluYXRlcyhhZGphY2VuY3kpO1xuICAgICAgICBhZGphY2VuY2llcy5wdXNoKGFkamFjZW5jeU9iamVjdCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGFkamFjZW5jaWVzO1xuICB9XG5cbiAgLy8gRmlsbCBvdXQgYWRqYWNlbmN5TGlzdCBmb3IgZWFjaCBjZWxsIHZlcnRleFxuICBmdW5jdGlvbiBjcmVhdGVBZGphY2VuY2llcygpIHtcbiAgICBib2FyZC52ZXJ0aWNlcy5mb3JFYWNoKCh2ZXJ0ZXgpID0+IHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgY29uc3QgYWRqYWNlbnRWZXJ0aWNlcyA9IGFkZENlbGxBZGphY2VuY2llcyh2ZXJ0ZXgpO1xuICAgICAgYWRqYWNlbnRWZXJ0aWNlcy5mb3JFYWNoKChhZGphY2VudFZlcnRleCkgPT4ge1xuICAgICAgICBib2FyZC5hZGRFZGdlKHZlcnRleCwgYWRqYWNlbnRWZXJ0ZXgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBGaWxsIHRoZSBCb2FyZCBhcnJheVxuICBmdW5jdGlvbiBjcmVhdGVCb2FyZCgpIHtcbiAgICBjcmVhdGVDZWxscygpO1xuICAgIGNyZWF0ZUFkamFjZW5jaWVzKCk7XG4gIH1cblxuICAvLyBGaWxsIHRoZSBTaGlwcyBhcnJheVxuICBmdW5jdGlvbiBjcmVhdGVTaGlwcygpIHtcbiAgICBjb25zdCBzaGlwc0NvbmZpZyA9IFtcbiAgICAgIC8vICAge1xuICAgICAgLy8gICAgIHNoaXBMZW5ndGg6IDEsXG4gICAgICAvLyAgIH0sXG4gICAgICAvLyAgIHtcbiAgICAgIC8vICAgICBzaGlwTGVuZ3RoOiAxLFxuICAgICAgLy8gICB9LFxuICAgICAgLy8gICB7XG4gICAgICAvLyAgICAgc2hpcExlbmd0aDogMSxcbiAgICAgIC8vICAgfSxcbiAgICAgIC8vICAge1xuICAgICAgLy8gICAgIHNoaXBMZW5ndGg6IDIsXG4gICAgICAvLyAgIH0sXG4gICAgICAvLyAgIHtcbiAgICAgIC8vICAgICBzaGlwTGVuZ3RoOiAyLFxuICAgICAgLy8gICB9LFxuICAgICAge1xuICAgICAgICBzaGlwTGVuZ3RoOiAzLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2hpcExlbmd0aDogNCxcbiAgICAgIH0sXG4gICAgXTtcbiAgICBzaGlwc0NvbmZpZy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBzaGlwID0gU2hpcE1vZHVsZS5jcmVhdGVTaGlwKGVsZW1lbnQuc2hpcExlbmd0aCk7XG4gICAgICBzaGlwcy5wdXNoKHNoaXApO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gRmlsbCB0aGUgbWlzc2luZ1Nob3RzIGFycmF5XG4gIGZ1bmN0aW9uIHJlY29yZE1pc3NpbmdTaG90KGNvb3JkaW5hdGVzKSB7XG4gICAgY29uc3QgbWlzc2VkU2hvdFZlcnRleCA9IGZpbmRWZXJ0ZXh0T2JqZWN0QnlDb29yZGluYXRlcyhjb29yZGluYXRlcyk7XG4gICAgaWYgKCFtaXNzaW5nU2hvdHMuaW5jbHVkZXMobWlzc2VkU2hvdFZlcnRleC5jb29yZGluYXRlcykpIHtcbiAgICAgIG1pc3NpbmdTaG90cy5wdXNoKG1pc3NlZFNob3RWZXJ0ZXguY29vcmRpbmF0ZXMpO1xuICAgIH1cbiAgICBtaXNzZWRTaG90VmVydGV4LmFkamFjZW5jeUxpc3QuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgaWYgKCFtaXNzaW5nU2hvdHMuaW5jbHVkZXMoZWxlbWVudC5jb29yZGluYXRlcykpIHtcbiAgICAgICAgbWlzc2luZ1Nob3RzLnB1c2goZWxlbWVudC5jb29yZGluYXRlcyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyBSZWdpc3RlciBhbmQgcHJvY2VzcyBhdHRhY2tzXG4gIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXMpIHtcbiAgICBsZXQgaGl0UmVnaXN0ZXJlZCA9IGZhbHNlO1xuICAgIHNoaXBzLnNvbWUoKHNoaXApID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoc2hpcC5jb29yZGluYXRlcykuaW5jbHVkZXMoSlNPTi5zdHJpbmdpZnkoY29vcmRpbmF0ZXMpKVxuICAgICAgKSB7XG4gICAgICAgIHNoaXAuaGl0KCk7XG4gICAgICAgIGhpdFJlZ2lzdGVyZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgICBpZiAoIWhpdFJlZ2lzdGVyZWQpIHtcbiAgICAgIHJlY29yZE1pc3NpbmdTaG90KGNvb3JkaW5hdGVzKTtcbiAgICB9XG4gIH1cblxuICAvLyBDaGVjayBpZiBhbGwgc2hpcHMgb24gYSBib2FyZCBoYXZlIGJlZW4gc3Vua1xuICBmdW5jdGlvbiBhbGxTaGlwc1N1bmsoKSB7XG4gICAgcmV0dXJuIHNoaXBzLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLmlzU3VuaygpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBvc2l0aW9uU2hpcHMoKSB7XG4gICAgc2hpcHMuc29ydCgoYSwgYikgPT4gYi5sZW5ndGggLSBhLmxlbmd0aCk7XG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgY29uc3Qgb3JpZW50YXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKSA9PT0gMCA/IFwidlwiIDogXCJoXCI7XG4gICAgICBzaGlwLnBvc2l0aW9uID0gb3JpZW50YXRpb247XG5cbiAgICAgIGNvbnN0IGZpbHRlcmVkQm9hcmQgPSBib2FyZC52ZXJ0aWNlcy5maWx0ZXIoXG4gICAgICAgIChvYmopID0+IG9iai5vY2N1cGllZCA9PT0gZmFsc2UsXG4gICAgICApO1xuXG4gICAgICBpZiAoZmlsdGVyZWRCb2FyZC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxldCBwb3NpdGlvbkZvdW5kID0gZmFsc2U7XG4gICAgICAgIHdoaWxlICghcG9zaXRpb25Gb3VuZCkge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItY29uc3RcbiAgICAgICAgICBsZXQgcG9zaXRpb24gPSBbXTtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWNvbnN0XG4gICAgICAgICAgbGV0IHBvc2l0aW9uQ29vcmRpbmF0ZXMgPSBbXTtcbiAgICAgICAgICBjb25zdCBmaXJzdENlbGxJbmRleCA9IE1hdGguZmxvb3IoXG4gICAgICAgICAgICBNYXRoLnJhbmRvbSgpICogZmlsdGVyZWRCb2FyZC5sZW5ndGgsXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjb25zdCBmaXJzdENlbGxPYmplY3QgPSBmaWx0ZXJlZEJvYXJkW2ZpcnN0Q2VsbEluZGV4XTtcbiAgICAgICAgICBwb3NpdGlvbkNvb3JkaW5hdGVzLnB1c2goZmlyc3RDZWxsT2JqZWN0LmNvb3JkaW5hdGVzKTtcbiAgICAgICAgICBwb3NpdGlvbi5wdXNoKGZpcnN0Q2VsbE9iamVjdCk7XG4gICAgICAgICAgLy8gICBjb25zb2xlLmxvZyhwb3NpdGlvbik7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzaGlwLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBjb25zdCBuZXh0Q2VsbE9iamVjdENvb3JkaW5hdGVzID1cbiAgICAgICAgICAgICAgc2hpcC5wb3NpdGlvbiA9PT0gXCJ2XCJcbiAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RDZWxsT2JqZWN0LmNvb3JkaW5hdGVzWzBdICsgaSxcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RDZWxsT2JqZWN0LmNvb3JkaW5hdGVzWzFdLFxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIDogW1xuICAgICAgICAgICAgICAgICAgICBmaXJzdENlbGxPYmplY3QuY29vcmRpbmF0ZXNbMF0sXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0Q2VsbE9iamVjdC5jb29yZGluYXRlc1sxXSArIGksXG4gICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobmV4dENlbGxPYmplY3RDb29yZGluYXRlcyk7XG4gICAgICAgICAgICBjb25zdCBuZXh0Q2VsbE9iamVjdCA9IGJvYXJkLnZlcnRpY2VzLmZpbHRlcihcbiAgICAgICAgICAgICAgKG9iaikgPT5cbiAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShvYmouY29vcmRpbmF0ZXMpID09PVxuICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KG5leHRDZWxsT2JqZWN0Q29vcmRpbmF0ZXMpLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG5leHRDZWxsT2JqZWN0WzBdKTtcbiAgICAgICAgICAgIGlmIChuZXh0Q2VsbE9iamVjdFswXSkge1xuICAgICAgICAgICAgICBpZiAobmV4dENlbGxPYmplY3RbMF0ub2NjdXBpZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb25Db29yZGluYXRlcy5wdXNoKG5leHRDZWxsT2JqZWN0WzBdLmNvb3JkaW5hdGVzKTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbi5wdXNoKG5leHRDZWxsT2JqZWN0WzBdKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHBvc2l0aW9uLmxlbmd0aCA9PT0gc2hpcC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHNoaXAuYXNzaWduQ29vcmRpbmF0ZXMoLi4ucG9zaXRpb25Db29yZGluYXRlcyk7XG5cbiAgICAgICAgICAgIHBvc2l0aW9uLmZvckVhY2goKHApID0+IHtcbiAgICAgICAgICAgICAgcC5vY2N1cGllZCA9IHRydWU7XG4gICAgICAgICAgICAgIHAub2NjdXBpZWRCeVNoaXAgPSB0cnVlO1xuICAgICAgICAgICAgICBwLmFkamFjZW5jeUxpc3QuZm9yRWFjaCgoYWRqKSA9PiB7XG4gICAgICAgICAgICAgICAgYWRqLm9jY3VwaWVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHBvc2l0aW9uRm91bmQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBib2FyZCxcbiAgICBzaGlwcyxcbiAgICBtaXNzaW5nU2hvdHMsXG4gICAgY3JlYXRlQm9hcmQsXG4gICAgY3JlYXRlU2hpcHMsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBhbGxTaGlwc1N1bmssXG4gICAgcG9zaXRpb25TaGlwcyxcbiAgICBmaW5kVmVydGV4dE9iamVjdEJ5Q29vcmRpbmF0ZXMsXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZE1vZHVsZTtcbiIsImltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1jeWNsZVxuaW1wb3J0IERPTUhhbmRsZXIgZnJvbSBcIi4vRE9NSGFuZGxlclwiO1xuaW1wb3J0IEdhbWVib2FyZE1vZHVsZSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCB7IGFkZERvY3VtZW50RXZlbnRMaXN0ZW5lcnMgfSBmcm9tIFwiLi9ldmVudE1hbmFnZXJcIjtcblxubGV0IHBsYXllck9uZUJvYXJkID0gbnVsbDtcblxuZnVuY3Rpb24gZ2FtZUxvb3AoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XG4gIGlmIChtYWluKSB7XG4gICAgbWFpbi5yZW1vdmUoKTtcbiAgfVxuICBwbGF5ZXJPbmVCb2FyZCA9IEdhbWVib2FyZE1vZHVsZSgpO1xuICBwbGF5ZXJPbmVCb2FyZC5jcmVhdGVCb2FyZCgpO1xuICBwbGF5ZXJPbmVCb2FyZC5jcmVhdGVTaGlwcygpO1xuICBwbGF5ZXJPbmVCb2FyZC5wb3NpdGlvblNoaXBzKCk7XG5cbiAgY29uc3QgcGxheWVyVHdvQm9hcmQgPSBHYW1lYm9hcmRNb2R1bGUoKTtcbiAgcGxheWVyVHdvQm9hcmQuY3JlYXRlQm9hcmQoKTtcbiAgcGxheWVyVHdvQm9hcmQuY3JlYXRlU2hpcHMoKTtcbiAgcGxheWVyVHdvQm9hcmQucG9zaXRpb25TaGlwcygpO1xuXG4gIERPTUhhbmRsZXIucGxheWVyT25lQm9hcmQgPSBwbGF5ZXJPbmVCb2FyZC5ib2FyZC52ZXJ0aWNlcztcbiAgRE9NSGFuZGxlci5wbGF5ZXJPbmVTaGlwcyA9IHBsYXllck9uZUJvYXJkLnNoaXBzO1xuXG4gIERPTUhhbmRsZXIucGxheWVyVHdvQm9hcmQgPSBwbGF5ZXJUd29Cb2FyZC5ib2FyZC52ZXJ0aWNlcztcbiAgRE9NSGFuZGxlci5wbGF5ZXJUd29TaGlwcyA9IHBsYXllclR3b0JvYXJkLnNoaXBzO1xuXG4gIERPTUhhbmRsZXIuY3JlYXRlRG9tKCk7XG4gIGNvbnNvbGUubG9nKHBsYXllck9uZUJvYXJkKTtcbn1cblxuZ2FtZUxvb3AoKTtcbmFkZERvY3VtZW50RXZlbnRMaXN0ZW5lcnMoKTtcblxuZXhwb3J0IGRlZmF1bHQgZ2FtZUxvb3A7XG5leHBvcnQgeyBwbGF5ZXJPbmVCb2FyZCB9O1xuIiwiY29uc3QgU2hpcE1vZHVsZSA9ICgoKSA9PiB7XG4gIC8vIENyZWF0ZXMgYSBzaGlwXG4gIGZ1bmN0aW9uIGNyZWF0ZVNoaXAoc2hpcExlbmd0aCkge1xuICAgIGNvbnN0IHNoaXAgPSB7XG4gICAgICBoaXRDb3VudDogMCxcbiAgICAgIGNvb3JkaW5hdGVzOiBbXSxcbiAgICAgIGxlbmd0aDogc2hpcExlbmd0aCxcbiAgICAgIHBvc2l0aW9uOiBcImhcIixcblxuICAgICAgaGl0KCkge1xuICAgICAgICBzaGlwLmhpdENvdW50ICs9IDE7XG4gICAgICB9LFxuXG4gICAgICBpc1N1bmsoKSB7XG4gICAgICAgIGlmIChzaGlwLmhpdENvdW50ID09PSBzaGlwLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0sXG5cbiAgICAgIGFzc2lnbkNvb3JkaW5hdGVzKC4uLmFyZ3MpIHtcbiAgICAgICAgc2hpcC5jb29yZGluYXRlcyA9IGFyZ3M7XG5cbiAgICAgICAgLy8gRGV0ZXJtaW5lIGlmIHNoaXAgcG9zaXRpb24gaXMgaG9yaXpvbnRhbCBvciB2ZXJ0aWNhbFxuICAgICAgICBpZiAoc2hpcC5jb29yZGluYXRlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gXCJoXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoc2hpcC5jb29yZGluYXRlc1swXVswXSA9PT0gc2hpcC5jb29yZGluYXRlc1sxXVswXSkge1xuICAgICAgICAgIHRoaXMucG9zaXRpb24gPSBcImhcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gXCJ2XCI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfTtcblxuICAgIHJldHVybiBzaGlwO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVTaGlwLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgU2hpcE1vZHVsZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
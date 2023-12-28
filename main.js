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
      shipDiv.setAttribute("id", ship.id);
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

  // Find cells under the ship
  function findShipCells(firstElement, orientation, length) {
    const cells = [];
    cells.push(firstElement);
    const firstCellClassArray = firstElement.classList[0]
      .split(",")
      .map(Number);
    const parentDivBoardOne = document.querySelector(".playerOne-board");

    for (let i = 1; i <= length; i += 1) {
      if (orientation === "h") {
        const cell = _DOMHandler__WEBPACK_IMPORTED_MODULE_1__["default"].findDivByCoordinates(
          `${firstCellClassArray[0]},${firstCellClassArray[1] + i}`,
          parentDivBoardOne,
        );
        cells.push(cell);
      }
      if (orientation === "v") {
        const cell = _DOMHandler__WEBPACK_IMPORTED_MODULE_1__["default"].findDivByCoordinates(
          `${firstCellClassArray[0] + i},${firstCellClassArray[1]}`,
          parentDivBoardOne,
        );
        cells.push(cell);
      }
    }
    return cells;
  }

  // Find cells to change to "droppable = true" after drag & dropping a ship
  function identifyCellsToMakeDroppable() {
    const shipObject = ___WEBPACK_IMPORTED_MODULE_0__.playerOneBoard.findShipById(draggableElement.id);
    if (elementBelow !== null) {
      if (elementBelow.getAttribute("droppable") === "true") {
        elementBelow.append(draggableElement);
        return findShipCells(
          elementBelow,
          shipObject.position,
          shipObject.length - 1,
        );
      }
      if (elementBelow.getAttribute("droppable") === "false") {
        originalElementBelow.append(draggableElement);
        return findShipCells(
          originalElementBelow,
          shipObject.position,
          shipObject.length - 1,
        );
      }
    } else {
      originalElementBelow.append(draggableElement);
      return findShipCells(
        originalElementBelow,
        shipObject.position,
        shipObject.length - 1,
      );
    }
    return null;
  }

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
  function makeUndroppable(cells) {
    const cellsVertices = [];
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

      // console.log(cellsVerticesAdjacent);

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
    if (elementBelow === originalElementBelow) {
      if (draggableElement) {
        const width = `${draggableElementRect.height}px`;
        const height = `${draggableElementRect.width}px`;

        draggableElement.style.width = width;
        draggableElement.style.height = height;
        const ship = ___WEBPACK_IMPORTED_MODULE_0__.playerOneBoard.findShipById(draggableElement.id);
        if (height > width) {
          ship.position = "v";
        } else {
          ship.position = "h";
        }
        console.log(ship);
        console.log(elementBelow);
      }
    }

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

      checkBorders();
      makeUndroppable(identifyCellsToMakeDroppable());

      draggableElement.style.left = 0;
      draggableElement.style.top = 0;
      draggableElement.style.zIndex = 5;
      draggableElement.classList.remove("dragging");

      offSetX = null;
      offSetY = null;
      mouseDownOffsetHor = 0;
      mouseDownOffsetVer = 0;
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
      //     shipId: 0,
      //   },
      //   {
      //     shipLength: 1,
      //     shipId: 1,
      //   },
      //   {
      //     shipLength: 1,
      //     shipId: 2,
      //   },
      //   {
      //     shipLength: 2,
      //     shipId: 3,
      //   },
      //   {
      //     shipLength: 2,
      //     shipId: 4,
      //   },
      {
        shipLength: 3,
        shipId: 5,
      },
      {
        shipLength: 4,
        shipId: 6,
      },
    ];
    shipsConfig.forEach((element) => {
      const ship = _ship__WEBPACK_IMPORTED_MODULE_0__["default"].createShip(element.shipLength, element.shipId);
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

  // Find ship by shipId
  function findShipById(id) {
    let ship = null;
    ships.forEach((s) => {
      if (s.id === parseInt(id)) {
        ship = s;
      }
    });
    return ship;
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
    findShipById,
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
}

gameLoop();
(0,_eventManager__WEBPACK_IMPORTED_MODULE_3__.addDocumentEventListeners)();

document.addEventListener("keydown", (event) => {
  if (event.key === "c" || event.key === "C") {
    console.log(playerOneBoard);
  }
});

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
  function createShip(shipLength, shipId) {
    const ship = {
      id: shipId,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxvREFBb0QsWUFBWTtBQUNoRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtB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QUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw2Q0FBYztBQUNyQztBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTzs7QUFFUDs7QUFFQTtBQUNBLDZCQUE2QixzQkFBc0IsR0FBRyxzQkFBc0I7QUFDNUU7QUFDQSx3REFBd0QsVUFBVTtBQUNsRTtBQUNBO0FB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Q0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGlFQUFlLFVBQVUsRUFBQzs7Ozs7OztVQzNDMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9ET01IYW5kbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvRFNfR3JhcGguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9ldmVudE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zZWZpbitTYW5zOndnaHRAMTAwJmZhbWlseT1MYXRvOndnaHRAMzAwJmZhbWlseT1OdW5pdG86aXRhbCx3Z2h0QDAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwJmZhbWlseT1Sb2JvdG86d2dodEAxMDAmZmFtaWx5PVJ1YmlrOndnaHRAMzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIC8qIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0b3VjaC1hY3Rpb246IG5vbmU7ICovXG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xufVxuXG4ubWFpbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGhlaWdodDogMTAwJTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggMWZyO1xufVxuXG4uaGVhZGVyIHtcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICBncmlkLXJvdzogMSAvIDI7XG59XG5cbi5jb250ZW50IHtcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICBncmlkLXJvdzogMiAvIDM7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgLyogcGFkZGluZy10b3A6IDQwcHg7ICovXG59XG5cbi5jb21tYW5kcyB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4uY29tbWFuZHMgPiBkaXYge1xuICAvKiB1c2VyLXNlbGVjdDogbm9uZTsgKi9cbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogMTAwO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5jb21tYW5kcyA+IGRpdjpob3ZlciB7XG4gIGNvbG9yOiBibHVlO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogMXB4O1xufVxuXG4uYm9hcmRzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgLyogZ2FwOiAyMHB4OyAqL1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuXG4uYm9hcmRzID4gLnBsYXllck9uZS1ib2FyZCxcbi5ib2FyZHMgPiAucGxheWVyVHdvLWJvYXJkIHtcbiAgd2lkdGg6IDQwMHB4O1xuICBoZWlnaHQ6IDQwMHB4O1xuICBvdXRsaW5lOiAwLjVweCBzb2xpZCByZ2IoMTE4LCAxMTgsIDExOCwgMC42KTtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIG1hcmdpbjogMjBweDtcbn1cblxuLnBsYXllck9uZS1ib2FyZCB7XG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgZ3JpZC1yb3c6IDEgLyAyO1xufVxuXG4ucGxheWVyVHdvLWJvYXJkIHtcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuICBncmlkLXJvdzogMSAvIDI7XG59XG5cbi5wbGF5ZXItb25lLWJvYXJkLW5hbWUge1xuICBncmlkLWNvbHVtbjogMSAvIDI7XG4gIGdyaWQtcm93OiAyIC8gMztcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG59XG5cbi5wbGF5ZXItdHdvLWJvYXJkLW5hbWUge1xuICBncmlkLWNvbHVtbjogMiAvIDM7XG4gIGdyaWQtcm93OiAyIC8gMztcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG59XG5cbi5wbGF5ZXJPbmUtYm9hcmQsXG4ucGxheWVyVHdvLWJvYXJkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XG59XG5cbi5wbGF5ZXJPbmUtYm9hcmQgPiBkaXYsXG4ucGxheWVyVHdvLWJvYXJkID4gZGl2IHtcbiAgb3V0bGluZTogMC41cHggc29saWQgcmdiYSgxMTgsIDExOCwgMTE4LCAwLjYpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8qIHotaW5kZXg6IDE7ICovXG59XG5cbi5wbGF5ZXJUd28tYm9hcmQgPiAuc2hpcC1jZWxsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAyNTUsIDAuMyk7XG59XG5cbi5wbGF5ZXJPbmUtYm9hcmQgPiAuc2hpcC1jZWxsIHtcbiAgb3V0bGluZTogMC41cHggc29saWQgcmdiYSgxMTgsIDExOCwgMTE4LCAwLjIpO1xufVxuXG4uc2hpcCB7XG4gIC8qIHotaW5kZXg6IDI7ICovXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC4xKTtcbiAgb3V0bGluZTogMXB4IHNvbGlkIGJsdWU7XG59XG5cbi5kcmFnZ2FibGUge1xuICBjdXJzb3I6IG1vdmUgIWltcG9ydGFudDtcbiAgei1pbmRleDogNTtcbiAgLyogcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgdG91Y2gtYWN0aW9uOiBhbGw7ICovXG59XG5cbi8qIC5zaGlwOmhvdmVyIHtcbiAgY3Vyc29yOiBtb3ZlO1xufSAqL1xuXG5bZHJhZ2dhYmxlPVwidHJ1ZVwiXSB7XG4gIGN1cnNvcjogbW92ZSAhaW1wb3J0YW50O1xufVxuXG5bZHJhZ2dhYmxlPVwidHJ1ZVwiXTpob3ZlciB7XG4gIHotaW5kZXg6IDk5OTk7XG4gIGN1cnNvcjogbW92ZSAhaW1wb3J0YW50O1xufVxuXG4vKiAuZHJhZ2dhYmxlIHtcbiAgY3Vyc29yOiBhbGlhcztcbn0gKi9cblxuW2Ryb3BwYWJsZT1cInRydWVcIl0ge1xuICAvKiBib3JkZXI6IDJweCBkYXNoZWQgI2FhYTsgKi9cbiAgLyogcG9pbnRlci1ldmVudHM6IGFsbDsgKi9cbn1cblxuLm1hcmtfY29sIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0b3A6IC0yMHB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4ubWFya19yb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICB3aWR0aDogNTAlO1xuICBsZWZ0OiAtMzBweDtcbiAgdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uZHJhZ2dpbmcge1xuICBvdXRsaW5lOiAxcHggZ3JlZW4gc29saWQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCAwLCAwLjUpO1xufVxuXG5bZHJvcHBhYmxlPVwidHJ1ZVwiXSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTI4LCAwLCAwLjIpO1xufVxuXG5bZHJvcHBhYmxlPVwiZmFsc2VcIl0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4zKTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixpQ0FBaUM7RUFDakMsZ0JBQWdCO0VBQ2hCO3VCQUNxQjtFQUNyQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsMEJBQTBCO0VBQzFCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsNEJBQTRCO0VBQzVCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLFlBQVk7RUFDWixhQUFhO0VBQ2IsNENBQTRDO0VBQzVDLG9CQUFvQjtFQUNwQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsb0JBQW9CO0FBQ3RCOztBQUVBOztFQUVFLGFBQWE7RUFDYixzQ0FBc0M7QUFDeEM7O0FBRUE7O0VBRUUsNkNBQTZDO0VBQzdDLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxNQUFNO0VBQ04sc0NBQXNDO0VBQ3RDLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1Y7c0JBQ29CO0FBQ3RCOztBQUVBOztHQUVHOztBQUVIO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTs7R0FFRzs7QUFFSDtFQUNFLDZCQUE2QjtFQUM3Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFdBQVc7RUFDWCxTQUFTO0VBQ1QsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zZWZpbitTYW5zOndnaHRAMTAwJmZhbWlseT1MYXRvOndnaHRAMzAwJmZhbWlseT1OdW5pdG86aXRhbCx3Z2h0QDAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwJmZhbWlseT1Sb2JvdG86d2dodEAxMDAmZmFtaWx5PVJ1YmlrOndnaHRAMzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogXFxcIk51bml0b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgLyogcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB0b3VjaC1hY3Rpb246IG5vbmU7ICovXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4ubWFpbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDFmcjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBncmlkLXJvdzogMSAvIDI7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGdyaWQtcm93OiAyIC8gMztcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICAvKiBwYWRkaW5nLXRvcDogNDBweDsgKi9cXG59XFxuXFxuLmNvbW1hbmRzIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG59XFxuXFxuLmNvbW1hbmRzID4gZGl2IHtcXG4gIC8qIHVzZXItc2VsZWN0OiBub25lOyAqL1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLmNvbW1hbmRzID4gZGl2OmhvdmVyIHtcXG4gIGNvbG9yOiBibHVlO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICB0ZXh0LWRlY29yYXRpb24tdGhpY2tuZXNzOiAxcHg7XFxufVxcblxcbi5ib2FyZHMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDUwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIC8qIGdhcDogMjBweDsgKi9cXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxufVxcblxcbi5ib2FyZHMgPiAucGxheWVyT25lLWJvYXJkLFxcbi5ib2FyZHMgPiAucGxheWVyVHdvLWJvYXJkIHtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBvdXRsaW5lOiAwLjVweCBzb2xpZCByZ2IoMTE4LCAxMTgsIDExOCwgMC42KTtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgbWFyZ2luOiAyMHB4O1xcbn1cXG5cXG4ucGxheWVyT25lLWJvYXJkIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuLnBsYXllclR3by1ib2FyZCB7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBncmlkLXJvdzogMSAvIDI7XFxufVxcblxcbi5wbGF5ZXItb25lLWJvYXJkLW5hbWUge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ucGxheWVyLXR3by1ib2FyZC1uYW1lIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGdyaWQtcm93OiAyIC8gMztcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnBsYXllck9uZS1ib2FyZCxcXG4ucGxheWVyVHdvLWJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuXFxuLnBsYXllck9uZS1ib2FyZCA+IGRpdixcXG4ucGxheWVyVHdvLWJvYXJkID4gZGl2IHtcXG4gIG91dGxpbmU6IDAuNXB4IHNvbGlkIHJnYmEoMTE4LCAxMTgsIDExOCwgMC42KTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIC8qIHotaW5kZXg6IDE7ICovXFxufVxcblxcbi5wbGF5ZXJUd28tYm9hcmQgPiAuc2hpcC1jZWxsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjMpO1xcbn1cXG5cXG4ucGxheWVyT25lLWJvYXJkID4gLnNoaXAtY2VsbCB7XFxuICBvdXRsaW5lOiAwLjVweCBzb2xpZCByZ2JhKDExOCwgMTE4LCAxMTgsIDAuMik7XFxufVxcblxcbi5zaGlwIHtcXG4gIC8qIHotaW5kZXg6IDI7ICovXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAyNTUsIDAuMSk7XFxuICBvdXRsaW5lOiAxcHggc29saWQgYmx1ZTtcXG59XFxuXFxuLmRyYWdnYWJsZSB7XFxuICBjdXJzb3I6IG1vdmUgIWltcG9ydGFudDtcXG4gIHotaW5kZXg6IDU7XFxuICAvKiBwb2ludGVyLWV2ZW50czogYWxsO1xcbiAgdG91Y2gtYWN0aW9uOiBhbGw7ICovXFxufVxcblxcbi8qIC5zaGlwOmhvdmVyIHtcXG4gIGN1cnNvcjogbW92ZTtcXG59ICovXFxuXFxuW2RyYWdnYWJsZT1cXFwidHJ1ZVxcXCJdIHtcXG4gIGN1cnNvcjogbW92ZSAhaW1wb3J0YW50O1xcbn1cXG5cXG5bZHJhZ2dhYmxlPVxcXCJ0cnVlXFxcIl06aG92ZXIge1xcbiAgei1pbmRleDogOTk5OTtcXG4gIGN1cnNvcjogbW92ZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKiAuZHJhZ2dhYmxlIHtcXG4gIGN1cnNvcjogYWxpYXM7XFxufSAqL1xcblxcbltkcm9wcGFibGU9XFxcInRydWVcXFwiXSB7XFxuICAvKiBib3JkZXI6IDJweCBkYXNoZWQgI2FhYTsgKi9cXG4gIC8qIHBvaW50ZXItZXZlbnRzOiBhbGw7ICovXFxufVxcblxcbi5tYXJrX2NvbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRvcDogLTIwcHg7XFxuICBmb250LXNpemU6IDEwcHg7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLm1hcmtfcm93IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgd2lkdGg6IDUwJTtcXG4gIGxlZnQ6IC0zMHB4O1xcbiAgdG9wOiAxMHB4O1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5kcmFnZ2luZyB7XFxuICBvdXRsaW5lOiAxcHggZ3JlZW4gc29saWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDI1NSwgMCwgMC41KTtcXG59XFxuXFxuW2Ryb3BwYWJsZT1cXFwidHJ1ZVxcXCJdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTI4LCAwLCAwLjIpO1xcbn1cXG5cXG5bZHJvcHBhYmxlPVxcXCJmYWxzZVxcXCJdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjMpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWN5Y2xlXG5pbXBvcnQgYWRkRXZlbnRMaXN0ZW5lcnMgZnJvbSBcIi4vZXZlbnRNYW5hZ2VyXCI7XG5cbi8qIGVzbGludC1kaXNhYmxlIHByZWZlci1jb25zdCAqL1xuY29uc3QgRE9NSGFuZGxlciA9ICgoKSA9PiB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgbGV0IHBsYXllck9uZUJvYXJkID0gbnVsbDtcbiAgbGV0IHBsYXllclR3b0JvYXJkID0gbnVsbDtcbiAgbGV0IHBsYXllck9uZVNoaXBzID0gbnVsbDtcbiAgbGV0IHBsYXllclR3b1NoaXBzID0gbnVsbDtcblxuICBjb25zdCBzdGF0aWNMYXlvdXRFbGVtZW50cyA9IFtcbiAgICB7XG4gICAgICB0eXBlOiBcImRpdlwiLFxuICAgICAgY2xhc3M6IFwibWFpblwiLFxuICAgICAgY2hpbGRyZW5FbGVtZW50czogW1xuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogXCJkaXZcIixcbiAgICAgICAgICBjbGFzczogXCJoZWFkZXJcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6IFwiZGl2XCIsXG4gICAgICAgICAgY2xhc3M6IFwiY29udGVudFwiLFxuICAgICAgICAgIGNoaWxkcmVuRWxlbWVudHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdHlwZTogXCJkaXZcIixcbiAgICAgICAgICAgICAgY2xhc3M6IFwiY29tbWFuZHNcIixcbiAgICAgICAgICAgICAgY2hpbGRyZW5FbGVtZW50czogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICBjbGFzczogXCJyYW5kb21pemVcIixcbiAgICAgICAgICAgICAgICAgIHRleHRDb250ZW50OiBcInJhbmRvbWl6ZVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdHlwZTogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBcInN0YXJ0LWdhbWVcIixcbiAgICAgICAgICAgICAgICAgIHRleHRDb250ZW50OiBcInN0YXJ0XCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHR5cGU6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIGNsYXNzOiBcImJvYXJkc1wiLFxuICAgICAgICAgICAgICBjaGlsZHJlbkVsZW1lbnRzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdHlwZTogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBcInBsYXllck9uZS1ib2FyZFwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdHlwZTogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBcInBsYXllclR3by1ib2FyZFwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdHlwZTogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBcInBsYXllci1vbmUtYm9hcmQtbmFtZVwiLFxuICAgICAgICAgICAgICAgICAgdGV4dENvbnRlbnQ6IFwiWW91ciBib2FyZFwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdHlwZTogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBcInBsYXllci10d28tYm9hcmQtbmFtZVwiLFxuICAgICAgICAgICAgICAgICAgdGV4dENvbnRlbnQ6IFwiT3Bwb25lbnQncyBib2FyZFwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIF07XG5cbiAgZnVuY3Rpb24gY3JlYXRlUGFnZUxheW91dChwYXJlbnQsIHRyZWUpIHtcbiAgICB0cmVlLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQudHlwZSk7XG4gICAgICBpZiAoZWxlbWVudC5jbGFzcykge1xuICAgICAgICBuZXdFbGVtZW50LmNsYXNzTGlzdC5hZGQoZWxlbWVudC5jbGFzcyk7XG4gICAgICB9XG4gICAgICBpZiAoZWxlbWVudC50ZXh0Q29udGVudCkge1xuICAgICAgICBuZXdFbGVtZW50LnRleHRDb250ZW50ID0gZWxlbWVudC50ZXh0Q29udGVudDtcbiAgICAgIH1cbiAgICAgIHBhcmVudC5hcHBlbmQobmV3RWxlbWVudCk7XG4gICAgICBpZiAoZWxlbWVudC5jaGlsZHJlbkVsZW1lbnRzKSB7XG4gICAgICAgIGNyZWF0ZVBhZ2VMYXlvdXQobmV3RWxlbWVudCwgZWxlbWVudC5jaGlsZHJlbkVsZW1lbnRzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUJvYXJkQ2VsbHMoKSB7XG4gICAgY29uc3QgcGxheWVyT25lQm9hcmREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllck9uZS1ib2FyZFwiKTtcbiAgICBjb25zdCBwbGF5ZXJUd29Cb2FyZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyVHdvLWJvYXJkXCIpO1xuXG4gICAgRE9NSGFuZGxlci5wbGF5ZXJPbmVCb2FyZC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBuZXdDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIG5ld0NlbGwuY2xhc3NMaXN0LmFkZChlbGVtZW50LmNvb3JkaW5hdGVzKTtcbiAgICAgIG5ld0NlbGwuY2xhc3NMaXN0LmFkZChcImNlbGxcIik7XG4gICAgICBpZiAoZWxlbWVudC5vY2N1cGllZCkge1xuICAgICAgICBuZXdDZWxsLnNldEF0dHJpYnV0ZShcImRyb3BwYWJsZVwiLCBmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdDZWxsLnNldEF0dHJpYnV0ZShcImRyb3BwYWJsZVwiLCB0cnVlKTtcbiAgICAgIH1cblxuICAgICAgcGxheWVyT25lQm9hcmREaXYuYXBwZW5kKG5ld0NlbGwpO1xuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9uZS1ibG9ja3NcbiAgICAgIHtcbiAgICAgICAgaWYgKG5ld0NlbGwuY2xhc3NMaXN0WzBdID09PSBcIjEsMVwiKSB7XG4gICAgICAgICAgY29uc3QgbWFya0NvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgbWFya0NvbC5jbGFzc0xpc3QuYWRkKFwibWFya19jb2xcIik7XG4gICAgICAgICAgbWFya0NvbC50ZXh0Q29udGVudCA9IFwiQVwiO1xuICAgICAgICAgIG5ld0NlbGwuYXBwZW5kKG1hcmtDb2wpO1xuICAgICAgICAgIGNvbnN0IG1hcmtSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIG1hcmtSb3cuY2xhc3NMaXN0LmFkZChcIm1hcmtfcm93XCIpO1xuICAgICAgICAgIG1hcmtSb3cudGV4dENvbnRlbnQgPSBcIjFcIjtcbiAgICAgICAgICBuZXdDZWxsLmFwcGVuZChtYXJrUm93KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3Q2VsbC5jbGFzc0xpc3RbMF0gPT09IFwiMSwyXCIpIHtcbiAgICAgICAgICBjb25zdCBtYXJrQ29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBtYXJrQ29sLmNsYXNzTGlzdC5hZGQoXCJtYXJrX2NvbFwiKTtcbiAgICAgICAgICBtYXJrQ29sLnRleHRDb250ZW50ID0gXCJCXCI7XG4gICAgICAgICAgbmV3Q2VsbC5hcHBlbmQobWFya0NvbCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld0NlbGwuY2xhc3NMaXN0WzBdID09PSBcIjEsM1wiKSB7XG4gICAgICAgICAgY29uc3QgbWFya0NvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgbWFya0NvbC5jbGFzc0xpc3QuYWRkKFwibWFya19jb2xcIik7XG4gICAgICAgICAgbWFya0NvbC50ZXh0Q29udGVudCA9IFwiQ1wiO1xuICAgICAgICAgIG5ld0NlbGwuYXBwZW5kKG1hcmtDb2wpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdDZWxsLmNsYXNzTGlzdFswXSA9PT0gXCIxLDRcIikge1xuICAgICAgICAgIGNvbnN0IG1hcmtDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIG1hcmtDb2wuY2xhc3NMaXN0LmFkZChcIm1hcmtfY29sXCIpO1xuICAgICAgICAgIG1hcmtDb2wudGV4dENvbnRlbnQgPSBcIkRcIjtcbiAgICAgICAgICBuZXdDZWxsLmFwcGVuZChtYXJrQ29sKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3Q2VsbC5jbGFzc0xpc3RbMF0gPT09IFwiMSw1XCIpIHtcbiAgICAgICAgICBjb25zdCBtYXJrQ29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBtYXJrQ29sLmNsYXNzTGlzdC5hZGQoXCJtYXJrX2NvbFwiKTtcbiAgICAgICAgICBtYXJrQ29sLnRleHRDb250ZW50ID0gXCJFXCI7XG4gICAgICAgICAgbmV3Q2VsbC5hcHBlbmQobWFya0NvbCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld0NlbGwuY2xhc3NMaXN0WzBdID09PSBcIjEsNlwiKSB7XG4gICAgICAgICAgY29uc3QgbWFya0NvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgbWFya0NvbC5jbGFzc0xpc3QuYWRkKFwibWFya19jb2xcIik7XG4gICAgICAgICAgbWFya0NvbC50ZXh0Q29udGVudCA9IFwiRlwiO1xuICAgICAgICAgIG5ld0NlbGwuYXBwZW5kKG1hcmtDb2wpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdDZWxsLmNsYXNzTGlzdFswXSA9PT0gXCIxLDdcIikge1xuICAgICAgICAgIGNvbnN0IG1hcmtDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIG1hcmtDb2wuY2xhc3NMaXN0LmFkZChcIm1hcmtfY29sXCIpO1xuICAgICAgICAgIG1hcmtDb2wudGV4dENvbnRlbnQgPSBcIkdcIjtcbiAgICAgICAgICBuZXdDZWxsLmFwcGVuZChtYXJrQ29sKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3Q2VsbC5jbGFzc0xpc3RbMF0gPT09IFwiMSw4XCIpIHtcbiAgICAgICAgICBjb25zdCBtYXJrQ29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBtYXJrQ29sLmNsYXNzTGlzdC5hZGQoXCJtYXJrX2NvbFwiKTtcbiAgICAgICAgICBtYXJrQ29sLnRleHRDb250ZW50ID0gXCJIXCI7XG4gICAgICAgICAgbmV3Q2VsbC5hcHBlbmQobWFya0NvbCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld0NlbGwuY2xhc3NMaXN0WzBdID09PSBcIjEsOVwiKSB7XG4gICAgICAgICAgY29uc3QgbWFya0NvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgbWFya0NvbC5jbGFzc0xpc3QuYWRkKFwibWFya19jb2xcIik7XG4gICAgICAgICAgbWFya0NvbC50ZXh0Q29udGVudCA9IFwiSVwiO1xuICAgICAgICAgIG5ld0NlbGwuYXBwZW5kKG1hcmtDb2wpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdDZWxsLmNsYXNzTGlzdFswXSA9PT0gXCIxLDEwXCIpIHtcbiAgICAgICAgICBjb25zdCBtYXJrQ29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBtYXJrQ29sLmNsYXNzTGlzdC5hZGQoXCJtYXJrX2NvbFwiKTtcbiAgICAgICAgICBtYXJrQ29sLnRleHRDb250ZW50ID0gXCJKXCI7XG4gICAgICAgICAgbmV3Q2VsbC5hcHBlbmQobWFya0NvbCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld0NlbGwuY2xhc3NMaXN0WzBdID09PSBcIjIsMVwiKSB7XG4gICAgICAgICAgY29uc3QgbWFya1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgbWFya1Jvdy5jbGFzc0xpc3QuYWRkKFwibWFya19yb3dcIik7XG4gICAgICAgICAgbWFya1Jvdy50ZXh0Q29udGVudCA9IFwiMlwiO1xuICAgICAgICAgIG5ld0NlbGwuYXBwZW5kKG1hcmtSb3cpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdDZWxsLmNsYXNzTGlzdFswXSA9PT0gXCIzLDFcIikge1xuICAgICAgICAgIGNvbnN0IG1hcmtSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIG1hcmtSb3cuY2xhc3NMaXN0LmFkZChcIm1hcmtfcm93XCIpO1xuICAgICAgICAgIG1hcmtSb3cudGV4dENvbnRlbnQgPSBcIjNcIjtcbiAgICAgICAgICBuZXdDZWxsLmFwcGVuZChtYXJrUm93KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3Q2VsbC5jbGFzc0xpc3RbMF0gPT09IFwiNCwxXCIpIHtcbiAgICAgICAgICBjb25zdCBtYXJrUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBtYXJrUm93LmNsYXNzTGlzdC5hZGQoXCJtYXJrX3Jvd1wiKTtcbiAgICAgICAgICBtYXJrUm93LnRleHRDb250ZW50ID0gXCI0XCI7XG4gICAgICAgICAgbmV3Q2VsbC5hcHBlbmQobWFya1Jvdyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld0NlbGwuY2xhc3NMaXN0WzBdID09PSBcIjUsMVwiKSB7XG4gICAgICAgICAgY29uc3QgbWFya1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgbWFya1Jvdy5jbGFzc0xpc3QuYWRkKFwibWFya19yb3dcIik7XG4gICAgICAgICAgbWFya1Jvdy50ZXh0Q29udGVudCA9IFwiNVwiO1xuICAgICAgICAgIG5ld0NlbGwuYXBwZW5kKG1hcmtSb3cpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdDZWxsLmNsYXNzTGlzdFswXSA9PT0gXCI2LDFcIikge1xuICAgICAgICAgIGNvbnN0IG1hcmtSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIG1hcmtSb3cuY2xhc3NMaXN0LmFkZChcIm1hcmtfcm93XCIpO1xuICAgICAgICAgIG1hcmtSb3cudGV4dENvbnRlbnQgPSBcIjZcIjtcbiAgICAgICAgICBuZXdDZWxsLmFwcGVuZChtYXJrUm93KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3Q2VsbC5jbGFzc0xpc3RbMF0gPT09IFwiNywxXCIpIHtcbiAgICAgICAgICBjb25zdCBtYXJrUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBtYXJrUm93LmNsYXNzTGlzdC5hZGQoXCJtYXJrX3Jvd1wiKTtcbiAgICAgICAgICBtYXJrUm93LnRleHRDb250ZW50ID0gXCI3XCI7XG4gICAgICAgICAgbmV3Q2VsbC5hcHBlbmQobWFya1Jvdyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld0NlbGwuY2xhc3NMaXN0WzBdID09PSBcIjgsMVwiKSB7XG4gICAgICAgICAgY29uc3QgbWFya1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgbWFya1Jvdy5jbGFzc0xpc3QuYWRkKFwibWFya19yb3dcIik7XG4gICAgICAgICAgbWFya1Jvdy50ZXh0Q29udGVudCA9IFwiOFwiO1xuICAgICAgICAgIG5ld0NlbGwuYXBwZW5kKG1hcmtSb3cpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdDZWxsLmNsYXNzTGlzdFswXSA9PT0gXCI5LDFcIikge1xuICAgICAgICAgIGNvbnN0IG1hcmtSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIG1hcmtSb3cuY2xhc3NMaXN0LmFkZChcIm1hcmtfcm93XCIpO1xuICAgICAgICAgIG1hcmtSb3cudGV4dENvbnRlbnQgPSBcIjlcIjtcbiAgICAgICAgICBuZXdDZWxsLmFwcGVuZChtYXJrUm93KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3Q2VsbC5jbGFzc0xpc3RbMF0gPT09IFwiMTAsMVwiKSB7XG4gICAgICAgICAgY29uc3QgbWFya1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgbWFya1Jvdy5jbGFzc0xpc3QuYWRkKFwibWFya19yb3dcIik7XG4gICAgICAgICAgbWFya1Jvdy50ZXh0Q29udGVudCA9IFwiMTBcIjtcbiAgICAgICAgICBuZXdDZWxsLmFwcGVuZChtYXJrUm93KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgRE9NSGFuZGxlci5wbGF5ZXJUd29Cb2FyZC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBuZXdDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIG5ld0NlbGwuY2xhc3NMaXN0LmFkZChlbGVtZW50LmNvb3JkaW5hdGVzKTtcbiAgICAgIG5ld0NlbGwuY2xhc3NMaXN0LmFkZChcImNlbGxcIik7XG4gICAgICBwbGF5ZXJUd29Cb2FyZERpdi5hcHBlbmQobmV3Q2VsbCk7XG4gICAgICBpZiAobmV3Q2VsbC5jbGFzc0xpc3RbMF0gPT09IFwiMSwxXCIpIHtcbiAgICAgICAgY29uc3QgbWFya0NvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1hcmtDb2wuY2xhc3NMaXN0LmFkZChcIm1hcmtfY29sXCIpO1xuICAgICAgICBtYXJrQ29sLnRleHRDb250ZW50ID0gXCJBXCI7XG4gICAgICAgIG5ld0NlbGwuYXBwZW5kKG1hcmtDb2wpO1xuICAgICAgICBjb25zdCBtYXJrUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWFya1Jvdy5jbGFzc0xpc3QuYWRkKFwibWFya19yb3dcIik7XG4gICAgICAgIG1hcmtSb3cudGV4dENvbnRlbnQgPSBcIjFcIjtcbiAgICAgICAgbmV3Q2VsbC5hcHBlbmQobWFya1Jvdyk7XG4gICAgICB9XG4gICAgICBpZiAobmV3Q2VsbC5jbGFzc0xpc3RbMF0gPT09IFwiMSwyXCIpIHtcbiAgICAgICAgY29uc3QgbWFya0NvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1hcmtDb2wuY2xhc3NMaXN0LmFkZChcIm1hcmtfY29sXCIpO1xuICAgICAgICBtYXJrQ29sLnRleHRDb250ZW50ID0gXCJCXCI7XG4gICAgICAgIG5ld0NlbGwuYXBwZW5kKG1hcmtDb2wpO1xuICAgICAgfVxuICAgICAgaWYgKG5ld0NlbGwuY2xhc3NMaXN0WzBdID09PSBcIjEsM1wiKSB7XG4gICAgICAgIGNvbnN0IG1hcmtDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBtYXJrQ29sLmNsYXNzTGlzdC5hZGQoXCJtYXJrX2NvbFwiKTtcbiAgICAgICAgbWFya0NvbC50ZXh0Q29udGVudCA9IFwiQ1wiO1xuICAgICAgICBuZXdDZWxsLmFwcGVuZChtYXJrQ29sKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXdDZWxsLmNsYXNzTGlzdFswXSA9PT0gXCIxLDRcIikge1xuICAgICAgICBjb25zdCBtYXJrQ29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWFya0NvbC5jbGFzc0xpc3QuYWRkKFwibWFya19jb2xcIik7XG4gICAgICAgIG1hcmtDb2wudGV4dENvbnRlbnQgPSBcIkRcIjtcbiAgICAgICAgbmV3Q2VsbC5hcHBlbmQobWFya0NvbCk7XG4gICAgICB9XG4gICAgICBpZiAobmV3Q2VsbC5jbGFzc0xpc3RbMF0gPT09IFwiMSw1XCIpIHtcbiAgICAgICAgY29uc3QgbWFya0NvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1hcmtDb2wuY2xhc3NMaXN0LmFkZChcIm1hcmtfY29sXCIpO1xuICAgICAgICBtYXJrQ29sLnRleHRDb250ZW50ID0gXCJFXCI7XG4gICAgICAgIG5ld0NlbGwuYXBwZW5kKG1hcmtDb2wpO1xuICAgICAgfVxuICAgICAgaWYgKG5ld0NlbGwuY2xhc3NMaXN0WzBdID09PSBcIjEsNlwiKSB7XG4gICAgICAgIGNvbnN0IG1hcmtDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBtYXJrQ29sLmNsYXNzTGlzdC5hZGQoXCJtYXJrX2NvbFwiKTtcbiAgICAgICAgbWFya0NvbC50ZXh0Q29udGVudCA9IFwiRlwiO1xuICAgICAgICBuZXdDZWxsLmFwcGVuZChtYXJrQ29sKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXdDZWxsLmNsYXNzTGlzdFswXSA9PT0gXCIxLDdcIikge1xuICAgICAgICBjb25zdCBtYXJrQ29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWFya0NvbC5jbGFzc0xpc3QuYWRkKFwibWFya19jb2xcIik7XG4gICAgICAgIG1hcmtDb2wudGV4dENvbnRlbnQgPSBcIkdcIjtcbiAgICAgICAgbmV3Q2VsbC5hcHBlbmQobWFya0NvbCk7XG4gICAgICB9XG4gICAgICBpZiAobmV3Q2VsbC5jbGFzc0xpc3RbMF0gPT09IFwiMSw4XCIpIHtcbiAgICAgICAgY29uc3QgbWFya0NvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1hcmtDb2wuY2xhc3NMaXN0LmFkZChcIm1hcmtfY29sXCIpO1xuICAgICAgICBtYXJrQ29sLnRleHRDb250ZW50ID0gXCJIXCI7XG4gICAgICAgIG5ld0NlbGwuYXBwZW5kKG1hcmtDb2wpO1xuICAgICAgfVxuICAgICAgaWYgKG5ld0NlbGwuY2xhc3NMaXN0WzBdID09PSBcIjEsOVwiKSB7XG4gICAgICAgIGNvbnN0IG1hcmtDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBtYXJrQ29sLmNsYXNzTGlzdC5hZGQoXCJtYXJrX2NvbFwiKTtcbiAgICAgICAgbWFya0NvbC50ZXh0Q29udGVudCA9IFwiSVwiO1xuICAgICAgICBuZXdDZWxsLmFwcGVuZChtYXJrQ29sKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXdDZWxsLmNsYXNzTGlzdFswXSA9PT0gXCIxLDEwXCIpIHtcbiAgICAgICAgY29uc3QgbWFya0NvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1hcmtDb2wuY2xhc3NMaXN0LmFkZChcIm1hcmtfY29sXCIpO1xuICAgICAgICBtYXJrQ29sLnRleHRDb250ZW50ID0gXCJKXCI7XG4gICAgICAgIG5ld0NlbGwuYXBwZW5kKG1hcmtDb2wpO1xuICAgICAgfVxuICAgICAgaWYgKG5ld0NlbGwuY2xhc3NMaXN0WzBdID09PSBcIjIsMVwiKSB7XG4gICAgICAgIGNvbnN0IG1hcmtSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBtYXJrUm93LmNsYXNzTGlzdC5hZGQoXCJtYXJrX3Jvd1wiKTtcbiAgICAgICAgbWFya1Jvdy50ZXh0Q29udGVudCA9IFwiMlwiO1xuICAgICAgICBuZXdDZWxsLmFwcGVuZChtYXJrUm93KTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXdDZWxsLmNsYXNzTGlzdFswXSA9PT0gXCIzLDFcIikge1xuICAgICAgICBjb25zdCBtYXJrUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWFya1Jvdy5jbGFzc0xpc3QuYWRkKFwibWFya19yb3dcIik7XG4gICAgICAgIG1hcmtSb3cudGV4dENvbnRlbnQgPSBcIjNcIjtcbiAgICAgICAgbmV3Q2VsbC5hcHBlbmQobWFya1Jvdyk7XG4gICAgICB9XG4gICAgICBpZiAobmV3Q2VsbC5jbGFzc0xpc3RbMF0gPT09IFwiNCwxXCIpIHtcbiAgICAgICAgY29uc3QgbWFya1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1hcmtSb3cuY2xhc3NMaXN0LmFkZChcIm1hcmtfcm93XCIpO1xuICAgICAgICBtYXJrUm93LnRleHRDb250ZW50ID0gXCI0XCI7XG4gICAgICAgIG5ld0NlbGwuYXBwZW5kKG1hcmtSb3cpO1xuICAgICAgfVxuICAgICAgaWYgKG5ld0NlbGwuY2xhc3NMaXN0WzBdID09PSBcIjUsMVwiKSB7XG4gICAgICAgIGNvbnN0IG1hcmtSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBtYXJrUm93LmNsYXNzTGlzdC5hZGQoXCJtYXJrX3Jvd1wiKTtcbiAgICAgICAgbWFya1Jvdy50ZXh0Q29udGVudCA9IFwiNVwiO1xuICAgICAgICBuZXdDZWxsLmFwcGVuZChtYXJrUm93KTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXdDZWxsLmNsYXNzTGlzdFswXSA9PT0gXCI2LDFcIikge1xuICAgICAgICBjb25zdCBtYXJrUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWFya1Jvdy5jbGFzc0xpc3QuYWRkKFwibWFya19yb3dcIik7XG4gICAgICAgIG1hcmtSb3cudGV4dENvbnRlbnQgPSBcIjZcIjtcbiAgICAgICAgbmV3Q2VsbC5hcHBlbmQobWFya1Jvdyk7XG4gICAgICB9XG4gICAgICBpZiAobmV3Q2VsbC5jbGFzc0xpc3RbMF0gPT09IFwiNywxXCIpIHtcbiAgICAgICAgY29uc3QgbWFya1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1hcmtSb3cuY2xhc3NMaXN0LmFkZChcIm1hcmtfcm93XCIpO1xuICAgICAgICBtYXJrUm93LnRleHRDb250ZW50ID0gXCI3XCI7XG4gICAgICAgIG5ld0NlbGwuYXBwZW5kKG1hcmtSb3cpO1xuICAgICAgfVxuICAgICAgaWYgKG5ld0NlbGwuY2xhc3NMaXN0WzBdID09PSBcIjgsMVwiKSB7XG4gICAgICAgIGNvbnN0IG1hcmtSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBtYXJrUm93LmNsYXNzTGlzdC5hZGQoXCJtYXJrX3Jvd1wiKTtcbiAgICAgICAgbWFya1Jvdy50ZXh0Q29udGVudCA9IFwiOFwiO1xuICAgICAgICBuZXdDZWxsLmFwcGVuZChtYXJrUm93KTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXdDZWxsLmNsYXNzTGlzdFswXSA9PT0gXCIyLDFcIikge1xuICAgICAgICBjb25zdCBtYXJrUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWFya1Jvdy5jbGFzc0xpc3QuYWRkKFwibWFya19yb3dcIik7XG4gICAgICAgIG1hcmtSb3cudGV4dENvbnRlbnQgPSBcIjJcIjtcbiAgICAgICAgbmV3Q2VsbC5hcHBlbmQobWFya1Jvdyk7XG4gICAgICB9XG4gICAgICBpZiAobmV3Q2VsbC5jbGFzc0xpc3RbMF0gPT09IFwiOSwxXCIpIHtcbiAgICAgICAgY29uc3QgbWFya1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1hcmtSb3cuY2xhc3NMaXN0LmFkZChcIm1hcmtfcm93XCIpO1xuICAgICAgICBtYXJrUm93LnRleHRDb250ZW50ID0gXCI5XCI7XG4gICAgICAgIG5ld0NlbGwuYXBwZW5kKG1hcmtSb3cpO1xuICAgICAgfVxuICAgICAgaWYgKG5ld0NlbGwuY2xhc3NMaXN0WzBdID09PSBcIjEwLDFcIikge1xuICAgICAgICBjb25zdCBtYXJrUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWFya1Jvdy5jbGFzc0xpc3QuYWRkKFwibWFya19yb3dcIik7XG4gICAgICAgIG1hcmtSb3cudGV4dENvbnRlbnQgPSBcIjEwXCI7XG4gICAgICAgIG5ld0NlbGwuYXBwZW5kKG1hcmtSb3cpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZmluZERpdkJ5Q29vcmRpbmF0ZXMoY29vcmRpbmF0ZXMsIHBhcmVudERpdikge1xuICAgIGNvbnN0IGRpdiA9IHBhcmVudERpdi5xdWVyeVNlbGVjdG9yKGBbY2xhc3MqPVwiJHtjb29yZGluYXRlc31cIl0uY2VsbGApO1xuICAgIHJldHVybiBkaXY7XG4gIH1cblxuICBmdW5jdGlvbiBkcmF3U2hpcHMoKSB7XG4gICAgY29uc3QgcGFyZW50RGl2Qm9hcmRPbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllck9uZS1ib2FyZFwiKTtcbiAgICBET01IYW5kbGVyLnBsYXllck9uZVNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGAke3NoaXAuY29vcmRpbmF0ZXNbMF1bMF19LCR7c2hpcC5jb29yZGluYXRlc1swXVsxXX1gKTtcbiAgICAgIGNvbnN0IGRpdiA9IGZpbmREaXZCeUNvb3JkaW5hdGVzKFxuICAgICAgICBgJHtzaGlwLmNvb3JkaW5hdGVzWzBdWzBdfSwke3NoaXAuY29vcmRpbmF0ZXNbMF1bMV19YCxcbiAgICAgICAgcGFyZW50RGl2Qm9hcmRPbmUsXG4gICAgICApO1xuXG4gICAgICBjb25zdCBzaGlwRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHNoaXBEaXYuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgICBzaGlwRGl2LmNsYXNzTGlzdC5hZGQoXCJkcmFnZ2FibGVcIik7XG4gICAgICBzaGlwRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIHNoaXAuaWQpO1xuICAgICAgLy8gc2hpcERpdi5zZXRBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIiwgdHJ1ZSk7XG4gICAgICAvLyBzaGlwRGl2LnNldEF0dHJpYnV0ZShcImRyYWdnYWJsZVwiLCB0cnVlKTtcblxuICAgICAgaWYgKHNoaXAucG9zaXRpb24gPT09IFwiaFwiKSB7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gNDAgKiBzaGlwLmxlbmd0aDtcbiAgICAgICAgc2hpcERpdi5zdHlsZS53aWR0aCA9IGAke3dpZHRofXB4YDtcbiAgICAgICAgc2hpcERpdi5zdHlsZS5oZWlnaHQgPSBcIjQwcHhcIjtcbiAgICAgIH1cbiAgICAgIGlmIChzaGlwLnBvc2l0aW9uID09PSBcInZcIikge1xuICAgICAgICBjb25zdCBoZWlnaHQgPSA0MCAqIHNoaXAubGVuZ3RoO1xuICAgICAgICBzaGlwRGl2LnN0eWxlLmhlaWdodCA9IGAke2hlaWdodH1weGA7XG4gICAgICAgIHNoaXBEaXYuc3R5bGUud2lkdGggPSBcIjQwcHhcIjtcbiAgICAgIH1cbiAgICAgIGRpdi5hcHBlbmQoc2hpcERpdik7XG5cbiAgICAgIHNoaXAuY29vcmRpbmF0ZXMuZm9yRWFjaCgoYykgPT4ge1xuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBgJHtjWzBdfSwke2NbMV19YDtcbiAgICAgICAgY29uc3Qgc2hpcENlbGxzID0gQXJyYXkuZnJvbShcbiAgICAgICAgICBwYXJlbnREaXZCb2FyZE9uZS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImRpdlwiKSxcbiAgICAgICAgKS5maWx0ZXIoKGVsZW0pID0+IGVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkpO1xuICAgICAgICBzaGlwQ2VsbHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgIC8vIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInNoaXAtY2VsbFwiKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIERPTUhhbmRsZXIucGxheWVyVHdvU2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgc2hpcC5jb29yZGluYXRlcy5mb3JFYWNoKChjKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmVudERpdkJvYXJkVHdvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXJUd28tYm9hcmRcIik7XG4gICAgICAgIGNvbnN0IGRpdiA9IGZpbmREaXZCeUNvb3JkaW5hdGVzKGAke2NbMF19LCR7Y1sxXX1gLCBwYXJlbnREaXZCb2FyZFR3byk7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwic2hpcC1jZWxsXCIpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVEb20oKSB7XG4gICAgY3JlYXRlUGFnZUxheW91dChib2R5LCBzdGF0aWNMYXlvdXRFbGVtZW50cyk7XG4gICAgY3JlYXRlQm9hcmRDZWxscygpO1xuICAgIGRyYXdTaGlwcygpO1xuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHBsYXllck9uZUJvYXJkLFxuICAgIHBsYXllclR3b0JvYXJkLFxuICAgIHBsYXllck9uZVNoaXBzLFxuICAgIHBsYXllclR3b1NoaXBzLFxuICAgIGNyZWF0ZURvbSxcbiAgICBmaW5kRGl2QnlDb29yZGluYXRlcyxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IERPTUhhbmRsZXI7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtY2xhc3Nlcy1wZXItZmlsZSAqL1xuXG5jbGFzcyBWZXJ0ZXgge1xuICBjb25zdHJ1Y3Rvcihjb29yZGluYXRlcykge1xuICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcbiAgICB0aGlzLmFkamFjZW5jeUxpc3QgPSBbXTtcbiAgICB0aGlzLm9jY3VwaWVkID0gZmFsc2U7XG4gICAgdGhpcy5vY2N1cGllZEJ5U2hpcCA9IGZhbHNlO1xuICB9XG5cbiAgYWRkTmVpZ2hib3IodmVydGV4KSB7XG4gICAgaWYgKCF0aGlzLmFkamFjZW5jeUxpc3QuaW5jbHVkZXModmVydGV4KSkge1xuICAgICAgdGhpcy5hZGphY2VuY3lMaXN0LnB1c2godmVydGV4KTtcbiAgICB9XG4gIH1cbn1cblxuY2xhc3MgR3JhcGgge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnZlcnRpY2VzID0gW107XG4gIH1cblxuICBhZGRWZXJ0ZXgoeCwgeSkge1xuICAgIGNvbnN0IHZlcnRleCA9IG5ldyBWZXJ0ZXgoW3gsIHldKTtcbiAgICB0aGlzLnZlcnRpY2VzLnB1c2godmVydGV4KTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzXG4gIGFkZEVkZ2UodmVydGV4MSwgdmVydGV4Mikge1xuICAgIHZlcnRleDEuYWRkTmVpZ2hib3IodmVydGV4Mik7XG4gICAgdmVydGV4Mi5hZGROZWlnaGJvcih2ZXJ0ZXgxKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHcmFwaDtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWN5Y2xlXG5pbXBvcnQgZ2FtZUxvb3AsIHsgcGxheWVyT25lQm9hcmQgfSBmcm9tIFwiLlwiO1xuaW1wb3J0IERPTUhhbmRsZXIgZnJvbSBcIi4vRE9NSGFuZGxlclwiO1xuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgY29uc3QgcmFuZG9taXplQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yYW5kb21pemVcIik7XG4gIHJhbmRvbWl6ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGdhbWVMb29wKCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhZGRFdmVudExpc3RlbmVycztcblxuZnVuY3Rpb24gYWRkRG9jdW1lbnRFdmVudExpc3RlbmVycygpIHtcbiAgbGV0IGRyYWdnYWJsZUVsZW1lbnQgPSBudWxsO1xuICBsZXQgZHJhZ2dhYmxlRWxlbWVudFJlY3QgPSBudWxsO1xuXG4gIGxldCBpc0RyYWdnaW5nID0gZmFsc2U7XG4gIGxldCBvZmZTZXRYO1xuICBsZXQgb2ZmU2V0WTtcbiAgbGV0IG1vdXNlRG93bk9mZnNldEhvciA9IDA7XG4gIGxldCBtb3VzZURvd25PZmZzZXRWZXIgPSAwO1xuICBsZXQgb3JpZ2luYWxFbGVtZW50QmVsb3cgPSBudWxsO1xuICBsZXQgZWxlbWVudEJlbG93ID0gbnVsbDtcblxuICAvLyBGaW5kIGNlbGxzIHVuZGVyIHRoZSBzaGlwXG4gIGZ1bmN0aW9uIGZpbmRTaGlwQ2VsbHMoZmlyc3RFbGVtZW50LCBvcmllbnRhdGlvbiwgbGVuZ3RoKSB7XG4gICAgY29uc3QgY2VsbHMgPSBbXTtcbiAgICBjZWxscy5wdXNoKGZpcnN0RWxlbWVudCk7XG4gICAgY29uc3QgZmlyc3RDZWxsQ2xhc3NBcnJheSA9IGZpcnN0RWxlbWVudC5jbGFzc0xpc3RbMF1cbiAgICAgIC5zcGxpdChcIixcIilcbiAgICAgIC5tYXAoTnVtYmVyKTtcbiAgICBjb25zdCBwYXJlbnREaXZCb2FyZE9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyT25lLWJvYXJkXCIpO1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJoXCIpIHtcbiAgICAgICAgY29uc3QgY2VsbCA9IERPTUhhbmRsZXIuZmluZERpdkJ5Q29vcmRpbmF0ZXMoXG4gICAgICAgICAgYCR7Zmlyc3RDZWxsQ2xhc3NBcnJheVswXX0sJHtmaXJzdENlbGxDbGFzc0FycmF5WzFdICsgaX1gLFxuICAgICAgICAgIHBhcmVudERpdkJvYXJkT25lLFxuICAgICAgICApO1xuICAgICAgICBjZWxscy5wdXNoKGNlbGwpO1xuICAgICAgfVxuICAgICAgaWYgKG9yaWVudGF0aW9uID09PSBcInZcIikge1xuICAgICAgICBjb25zdCBjZWxsID0gRE9NSGFuZGxlci5maW5kRGl2QnlDb29yZGluYXRlcyhcbiAgICAgICAgICBgJHtmaXJzdENlbGxDbGFzc0FycmF5WzBdICsgaX0sJHtmaXJzdENlbGxDbGFzc0FycmF5WzFdfWAsXG4gICAgICAgICAgcGFyZW50RGl2Qm9hcmRPbmUsXG4gICAgICAgICk7XG4gICAgICAgIGNlbGxzLnB1c2goY2VsbCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjZWxscztcbiAgfVxuXG4gIC8vIEZpbmQgY2VsbHMgdG8gY2hhbmdlIHRvIFwiZHJvcHBhYmxlID0gdHJ1ZVwiIGFmdGVyIGRyYWcgJiBkcm9wcGluZyBhIHNoaXBcbiAgZnVuY3Rpb24gaWRlbnRpZnlDZWxsc1RvTWFrZURyb3BwYWJsZSgpIHtcbiAgICBjb25zdCBzaGlwT2JqZWN0ID0gcGxheWVyT25lQm9hcmQuZmluZFNoaXBCeUlkKGRyYWdnYWJsZUVsZW1lbnQuaWQpO1xuICAgIGlmIChlbGVtZW50QmVsb3cgIT09IG51bGwpIHtcbiAgICAgIGlmIChlbGVtZW50QmVsb3cuZ2V0QXR0cmlidXRlKFwiZHJvcHBhYmxlXCIpID09PSBcInRydWVcIikge1xuICAgICAgICBlbGVtZW50QmVsb3cuYXBwZW5kKGRyYWdnYWJsZUVsZW1lbnQpO1xuICAgICAgICByZXR1cm4gZmluZFNoaXBDZWxscyhcbiAgICAgICAgICBlbGVtZW50QmVsb3csXG4gICAgICAgICAgc2hpcE9iamVjdC5wb3NpdGlvbixcbiAgICAgICAgICBzaGlwT2JqZWN0Lmxlbmd0aCAtIDEsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAoZWxlbWVudEJlbG93LmdldEF0dHJpYnV0ZShcImRyb3BwYWJsZVwiKSA9PT0gXCJmYWxzZVwiKSB7XG4gICAgICAgIG9yaWdpbmFsRWxlbWVudEJlbG93LmFwcGVuZChkcmFnZ2FibGVFbGVtZW50KTtcbiAgICAgICAgcmV0dXJuIGZpbmRTaGlwQ2VsbHMoXG4gICAgICAgICAgb3JpZ2luYWxFbGVtZW50QmVsb3csXG4gICAgICAgICAgc2hpcE9iamVjdC5wb3NpdGlvbixcbiAgICAgICAgICBzaGlwT2JqZWN0Lmxlbmd0aCAtIDEsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG9yaWdpbmFsRWxlbWVudEJlbG93LmFwcGVuZChkcmFnZ2FibGVFbGVtZW50KTtcbiAgICAgIHJldHVybiBmaW5kU2hpcENlbGxzKFxuICAgICAgICBvcmlnaW5hbEVsZW1lbnRCZWxvdyxcbiAgICAgICAgc2hpcE9iamVjdC5wb3NpdGlvbixcbiAgICAgICAgc2hpcE9iamVjdC5sZW5ndGggLSAxLFxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvLyBDaGVja3MgaWYgdGhlIGVsZW1lbnQgaXMgZ2V0dGluZyBkcm9wcGVkIHdpdGhpbiB0aGUgYm9yZGVycyBvZiB0aGUgYm9hcmRcbiAgZnVuY3Rpb24gY2hlY2tCb3JkZXJzKCkge1xuICAgIGlmIChlbGVtZW50QmVsb3cpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnRCZWxvd0Nvb3JkaW5hdGVzID0gZWxlbWVudEJlbG93LmNsYXNzTGlzdFswXVxuICAgICAgICAuc3BsaXQoXCIsXCIpXG4gICAgICAgIC5tYXAoTnVtYmVyKTtcbiAgICAgIGlmIChkcmFnZ2FibGVFbGVtZW50UmVjdC5oZWlnaHQgPT09IDgwKSB7XG4gICAgICAgIGlmIChlbGVtZW50QmVsb3dDb29yZGluYXRlc1swXSA+IDkpIHtcbiAgICAgICAgICBlbGVtZW50QmVsb3cuc2V0QXR0cmlidXRlKFwiZHJvcHBhYmxlXCIsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGRyYWdnYWJsZUVsZW1lbnRSZWN0LmhlaWdodCA9PT0gMTIwKSB7XG4gICAgICAgIGlmIChlbGVtZW50QmVsb3dDb29yZGluYXRlc1swXSA+IDgpIHtcbiAgICAgICAgICBlbGVtZW50QmVsb3cuc2V0QXR0cmlidXRlKFwiZHJvcHBhYmxlXCIsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGRyYWdnYWJsZUVsZW1lbnRSZWN0LmhlaWdodCA9PT0gMTYwKSB7XG4gICAgICAgIGlmIChlbGVtZW50QmVsb3dDb29yZGluYXRlc1swXSA+IDcpIHtcbiAgICAgICAgICBlbGVtZW50QmVsb3cuc2V0QXR0cmlidXRlKFwiZHJvcHBhYmxlXCIsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZHJhZ2dhYmxlRWxlbWVudFJlY3Qud2lkdGggPT09IDgwKSB7XG4gICAgICAgIGlmIChlbGVtZW50QmVsb3dDb29yZGluYXRlc1sxXSA+IDkpIHtcbiAgICAgICAgICBlbGVtZW50QmVsb3cuc2V0QXR0cmlidXRlKFwiZHJvcHBhYmxlXCIsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGRyYWdnYWJsZUVsZW1lbnRSZWN0LndpZHRoID09PSAxMjApIHtcbiAgICAgICAgaWYgKGVsZW1lbnRCZWxvd0Nvb3JkaW5hdGVzWzFdID4gOCkge1xuICAgICAgICAgIGVsZW1lbnRCZWxvdy5zZXRBdHRyaWJ1dGUoXCJkcm9wcGFibGVcIiwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZHJhZ2dhYmxlRWxlbWVudFJlY3Qud2lkdGggPT09IDE2MCkge1xuICAgICAgICBpZiAoZWxlbWVudEJlbG93Q29vcmRpbmF0ZXNbMV0gPiA3KSB7XG4gICAgICAgICAgZWxlbWVudEJlbG93LnNldEF0dHJpYnV0ZShcImRyb3BwYWJsZVwiLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBVcGRhdGUgZHJvcHBhYmxlIGF0dHJpYnV0ZSBvbiBib2FyZFxuICBmdW5jdGlvbiB1cGRhdGVEcm9wcGFibGVBdHRyaWJ1dGUoKSB7XG4gICAgY29uc3QgcGFyZW50RGl2Qm9hcmRPbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllck9uZS1ib2FyZFwiKTtcblxuICAgIHBsYXllck9uZUJvYXJkLmJvYXJkLnZlcnRpY2VzLmZvckVhY2goKHZlcnRleCkgPT4ge1xuICAgICAgY29uc3QgZGl2ID0gRE9NSGFuZGxlci5maW5kRGl2QnlDb29yZGluYXRlcyhcbiAgICAgICAgYCR7dmVydGV4LmNvb3JkaW5hdGVzWzBdfSwke3ZlcnRleC5jb29yZGluYXRlc1sxXX1gLFxuICAgICAgICBwYXJlbnREaXZCb2FyZE9uZSxcbiAgICAgICk7XG4gICAgICBpZiAodmVydGV4Lm9jY3VwaWVkID09PSB0cnVlKSB7XG4gICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJkcm9wcGFibGVcIiwgZmFsc2UpO1xuICAgICAgfVxuICAgICAgaWYgKHZlcnRleC5vY2N1cGllZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgZGl2LnNldEF0dHJpYnV0ZShcImRyb3BwYWJsZVwiLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIFRoZSBjZWxscyB1bmRlciB0aGUgZHJhZ2dhYmxlIGVsZW1lbnQgd2lsbCBiZSBtYWRlIHVuZHJvcHBhYmxlIHdoZW4gdGhlIG1vdXNlIGlzIHVwXG4gIGZ1bmN0aW9uIG1ha2VVbmRyb3BwYWJsZShjZWxscykge1xuICAgIGNvbnN0IGNlbGxzVmVydGljZXMgPSBbXTtcbiAgICAvLyBTZXQgZHJvcHBhYmxlIGF0dHJpYnV0ZSBvbiB0aGUgY2VsbHMgdW5kZXIgZHJhZ2dhYmxlIGVsZW1lbnRcbiAgICBjZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICBpZiAoY2VsbCkge1xuICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZShcImRyb3BwYWJsZVwiLCBmYWxzZSk7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNlbGwuY2xhc3NMaXN0WzBdO1xuICAgICAgICBjb25zdCBhcnJheSA9IGNsYXNzTmFtZS5zcGxpdChcIixcIikubWFwKE51bWJlcik7XG4gICAgICAgIGNvbnN0IHZlcnRleCA9IHBsYXllck9uZUJvYXJkLmZpbmRWZXJ0ZXh0T2JqZWN0QnlDb29yZGluYXRlcyhhcnJheSk7XG4gICAgICAgIGNlbGxzVmVydGljZXMucHVzaCh2ZXJ0ZXgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gVXBkYXRlIHRoZSBncmFwaCBhY2NvcmRpbmdseVxuICAgIGNlbGxzVmVydGljZXMuZm9yRWFjaCgoY2VsbFZlcnRleCkgPT4ge1xuICAgICAgY2VsbFZlcnRleC5vY2N1cGllZEJ5U2hpcCA9IHRydWU7XG4gICAgICBjZWxsVmVydGV4Lm9jY3VwaWVkID0gdHJ1ZTtcblxuICAgICAgLy8gVXBkYXRlIGFkamFjZW50IGNlbGxzOlxuICAgICAgY2VsbFZlcnRleC5hZGphY2VuY3lMaXN0LmZvckVhY2goKGFkamFjZW5jeSkgPT4ge1xuICAgICAgICAvLyBJbiB0aGUgZ3JhcGhcbiAgICAgICAgYWRqYWNlbmN5Lm9jY3VwaWVkID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gYCR7YWRqYWNlbmN5LmNvb3JkaW5hdGVzWzBdfSwke2FkamFjZW5jeS5jb29yZGluYXRlc1sxXX1gO1xuICAgICAgICBjb25zdCBwYXJlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllck9uZS1ib2FyZFwiKTtcbiAgICAgICAgY29uc3QgZGl2ID0gcGFyZW50RGl2LnF1ZXJ5U2VsZWN0b3IoYFtjbGFzcyo9XCIke2NsYXNzTmFtZX1cIl0uY2VsbGApO1xuICAgICAgICAvLyBJbiBET01cbiAgICAgICAgZGl2LnNldEF0dHJpYnV0ZShcImRyb3BwYWJsZVwiLCBmYWxzZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIE1vdXNlIGRvd25cbiAgY29uc3Qgb25Nb3VzZURvd24gPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50c0Zyb21Qb2ludCA9IGRvY3VtZW50LmVsZW1lbnRzRnJvbVBvaW50KFxuICAgICAgZXZlbnQuY2xpZW50WCxcbiAgICAgIGV2ZW50LmNsaWVudFksXG4gICAgKTtcblxuICAgIGVsZW1lbnRzRnJvbVBvaW50LmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZHJhZ2dhYmxlXCIpKSB7XG4gICAgICAgIGRyYWdnYWJsZUVsZW1lbnQgPSBlbDtcbiAgICAgICAgZHJhZ2dhYmxlRWxlbWVudFJlY3QgPSBkcmFnZ2FibGVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGRyYWdnYWJsZUVsZW1lbnQpIHtcbiAgICAgIGlzRHJhZ2dpbmcgPSB0cnVlO1xuICAgICAgZHJhZ2dhYmxlRWxlbWVudC5zdHlsZS5sZWZ0ID0gMDtcbiAgICAgIGRyYWdnYWJsZUVsZW1lbnQuc3R5bGUudG9wID0gMDtcbiAgICAgIGRyYWdnYWJsZUVsZW1lbnQuc3R5bGUuekluZGV4ID0gMDtcbiAgICAgIG9mZlNldFggPSBldmVudC5jbGllbnRYO1xuICAgICAgb2ZmU2V0WSA9IGV2ZW50LmNsaWVudFk7XG5cbiAgICAgIGRyYWdnYWJsZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImRyYWdnaW5nXCIpO1xuXG4gICAgICBjb25zdCBwYXJlbnRSZWN0ID0gZHJhZ2dhYmxlRWxlbWVudC5wYXJlbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICBjb25zdCBjZWxscyA9IFtdO1xuICAgICAgY29uc3QgY2VsbHNWZXJ0aWNlcyA9IFtdO1xuICAgICAgY29uc3QgY2VsbHNWZXJ0aWNlc0FkamFjZW50ID0gW107XG4gICAgICBjb25zdCBmaXJzdENlbGwgPSBkcmFnZ2FibGVFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICBsZXQgc2Vjb25kQ2VsbDtcbiAgICAgIGxldCB0aGlyZENlbGw7XG4gICAgICBsZXQgZm91cnRoQ2VsbDtcblxuICAgICAgY2VsbHMucHVzaChmaXJzdENlbGwpO1xuICAgICAgaWYgKG9mZlNldFggPiBwYXJlbnRSZWN0LnggKyAxMjApIHtcbiAgICAgICAgbW91c2VEb3duT2Zmc2V0SG9yID0gMTIwO1xuICAgICAgfSBlbHNlIGlmIChvZmZTZXRYID4gcGFyZW50UmVjdC54ICsgODApIHtcbiAgICAgICAgbW91c2VEb3duT2Zmc2V0SG9yID0gODA7XG4gICAgICB9IGVsc2UgaWYgKG9mZlNldFggPiBwYXJlbnRSZWN0LnggKyA0MCkge1xuICAgICAgICBtb3VzZURvd25PZmZzZXRIb3IgPSA0MDtcbiAgICAgIH0gZWxzZSBpZiAob2ZmU2V0WSA+IHBhcmVudFJlY3QueSArIDEyMCkge1xuICAgICAgICBtb3VzZURvd25PZmZzZXRWZXIgPSAxMjA7XG4gICAgICB9IGVsc2UgaWYgKG9mZlNldFkgPiBwYXJlbnRSZWN0LnkgKyA4MCkge1xuICAgICAgICBtb3VzZURvd25PZmZzZXRWZXIgPSA4MDtcbiAgICAgIH0gZWxzZSBpZiAob2ZmU2V0WSA+IHBhcmVudFJlY3QueSArIDQwKSB7XG4gICAgICAgIG1vdXNlRG93bk9mZnNldFZlciA9IDQwO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiB3aWR0aCBvZiBkcmFnZ2FibGUgZXF1YWwgb3IgZ3JlYXRlciB0aGFuIDgwLCBncmFiIDJuZCBlbGVtZW50IGFuZCBwdXQgaXQgaW4gdGhlIGNlbGxzIGxpc3RcbiAgICAgIGlmIChkcmFnZ2FibGVFbGVtZW50UmVjdC53aWR0aCA+PSA4MCkge1xuICAgICAgICBjb25zdCBjZWxsRWxlbWVudHMgPSBkb2N1bWVudC5lbGVtZW50c0Zyb21Qb2ludChcbiAgICAgICAgICBldmVudC5jbGllbnRYIC0gbW91c2VEb3duT2Zmc2V0SG9yICsgNDAsXG4gICAgICAgICAgZXZlbnQuY2xpZW50WSAtIG1vdXNlRG93bk9mZnNldFZlcixcbiAgICAgICAgKTtcbiAgICAgICAgY2VsbEVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJjZWxsXCIpKSB7XG4gICAgICAgICAgICBzZWNvbmRDZWxsID0gZWxlbWVudDtcbiAgICAgICAgICAgIGNlbGxzLnB1c2goc2Vjb25kQ2VsbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgd2lkdGggb2YgZHJhZ2dhYmxlIGVxdWFsIG9yIGdyZWF0ZXIgdGhhbiAxMjAsIGdyYWIgM3JkIGVsZW1lbnQgYW5kIHB1dCBpdCBpbiB0aGUgY2VsbHMgbGlzdFxuICAgICAgaWYgKGRyYWdnYWJsZUVsZW1lbnRSZWN0LndpZHRoID49IDEyMCkge1xuICAgICAgICBjb25zdCBjZWxsRWxlbWVudHMgPSBkb2N1bWVudC5lbGVtZW50c0Zyb21Qb2ludChcbiAgICAgICAgICBldmVudC5jbGllbnRYIC0gbW91c2VEb3duT2Zmc2V0SG9yICsgODAsXG4gICAgICAgICAgZXZlbnQuY2xpZW50WSAtIG1vdXNlRG93bk9mZnNldFZlcixcbiAgICAgICAgKTtcbiAgICAgICAgY2VsbEVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJjZWxsXCIpKSB7XG4gICAgICAgICAgICB0aGlyZENlbGwgPSBlbGVtZW50O1xuICAgICAgICAgICAgY2VsbHMucHVzaCh0aGlyZENlbGwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHdpZHRoIG9mIGRyYWdnYWJsZSBlcXVhbCBvciBncmVhdGVyIHRoYW4gMTYwLCBncmFiIDR0aCBlbGVtZW50IGFuZCBwdXQgaXQgaW4gdGhlIGNlbGxzIGxpc3RcbiAgICAgIGlmIChkcmFnZ2FibGVFbGVtZW50UmVjdC53aWR0aCA+PSAxNjApIHtcbiAgICAgICAgY29uc3QgY2VsbEVsZW1lbnRzID0gZG9jdW1lbnQuZWxlbWVudHNGcm9tUG9pbnQoXG4gICAgICAgICAgZXZlbnQuY2xpZW50WCAtIG1vdXNlRG93bk9mZnNldEhvciArIDEyMCxcbiAgICAgICAgICBldmVudC5jbGllbnRZIC0gbW91c2VEb3duT2Zmc2V0VmVyLFxuICAgICAgICApO1xuICAgICAgICBjZWxsRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImNlbGxcIikpIHtcbiAgICAgICAgICAgIGZvdXJ0aENlbGwgPSBlbGVtZW50O1xuICAgICAgICAgICAgY2VsbHMucHVzaChmb3VydGhDZWxsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiBoZWlnaHQgb2YgZHJhZ2dhYmxlIGVxdWFsIG9yIGdyZWF0ZXIgdGhhbiA4MCwgZ3JhYiAybmQgZWxlbWVudCBhbmQgcHV0IGl0IGluIHRoZSBjZWxscyBsaXN0XG4gICAgICBpZiAoZHJhZ2dhYmxlRWxlbWVudFJlY3QuaGVpZ2h0ID49IDgwKSB7XG4gICAgICAgIGNvbnN0IGNlbGxFbGVtZW50cyA9IGRvY3VtZW50LmVsZW1lbnRzRnJvbVBvaW50KFxuICAgICAgICAgIGV2ZW50LmNsaWVudFggLSBtb3VzZURvd25PZmZzZXRIb3IsXG4gICAgICAgICAgZXZlbnQuY2xpZW50WSAtIG1vdXNlRG93bk9mZnNldFZlciArIDQwLFxuICAgICAgICApO1xuICAgICAgICBjZWxsRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImNlbGxcIikpIHtcbiAgICAgICAgICAgIHNlY29uZENlbGwgPSBlbGVtZW50O1xuICAgICAgICAgICAgY2VsbHMucHVzaChzZWNvbmRDZWxsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiBoZWlnaHQgb2YgZHJhZ2dhYmxlIGVxdWFsIG9yIGdyZWF0ZXIgdGhhbiAxMjAsIGdyYWIgM3JkIGVsZW1lbnQgYW5kIHB1dCBpdCBpbiB0aGUgY2VsbHMgbGlzdFxuICAgICAgaWYgKGRyYWdnYWJsZUVsZW1lbnRSZWN0LmhlaWdodCA+PSAxMjApIHtcbiAgICAgICAgY29uc3QgY2VsbEVsZW1lbnRzID0gZG9jdW1lbnQuZWxlbWVudHNGcm9tUG9pbnQoXG4gICAgICAgICAgZXZlbnQuY2xpZW50WCAtIG1vdXNlRG93bk9mZnNldEhvcixcbiAgICAgICAgICBldmVudC5jbGllbnRZIC0gbW91c2VEb3duT2Zmc2V0VmVyICsgODAsXG4gICAgICAgICk7XG4gICAgICAgIGNlbGxFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2VsbFwiKSkge1xuICAgICAgICAgICAgdGhpcmRDZWxsID0gZWxlbWVudDtcbiAgICAgICAgICAgIGNlbGxzLnB1c2godGhpcmRDZWxsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiBoZWlnaHQgb2YgZHJhZ2dhYmxlIGVxdWFsIG9yIGdyZWF0ZXIgdGhhbiAxNjAsIGdyYWIgNHRoIGVsZW1lbnQgYW5kIHB1dCBpdCBpbiB0aGUgY2VsbHMgbGlzdFxuICAgICAgaWYgKGRyYWdnYWJsZUVsZW1lbnRSZWN0LmhlaWdodCA+PSAxNjApIHtcbiAgICAgICAgY29uc3QgY2VsbEVsZW1lbnRzID0gZG9jdW1lbnQuZWxlbWVudHNGcm9tUG9pbnQoXG4gICAgICAgICAgZXZlbnQuY2xpZW50WCAtIG1vdXNlRG93bk9mZnNldEhvcixcbiAgICAgICAgICBldmVudC5jbGllbnRZIC0gbW91c2VEb3duT2Zmc2V0VmVyICsgMTIwLFxuICAgICAgICApO1xuICAgICAgICBjZWxsRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImNlbGxcIikpIHtcbiAgICAgICAgICAgIGZvdXJ0aENlbGwgPSBlbGVtZW50O1xuICAgICAgICAgICAgY2VsbHMucHVzaChmb3VydGhDZWxsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBDaGFuZ2UgdGhlIGRyb3BwYWJsZSBhdHRyaWJ1dGUgb2YgZWFjaCBjZWxsIHVuZGVyIGRyYWdnYWJsZSBlbGVtZW50IHRvIHRydWVcbiAgICAgIGNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoXCJkcm9wcGFibGVcIiwgdHJ1ZSk7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNlbGwuY2xhc3NMaXN0WzBdO1xuICAgICAgICBjb25zdCBhcnJheSA9IGNsYXNzTmFtZS5zcGxpdChcIixcIikubWFwKE51bWJlcik7XG4gICAgICAgIGNvbnN0IHZlcnRleCA9IHBsYXllck9uZUJvYXJkLmZpbmRWZXJ0ZXh0T2JqZWN0QnlDb29yZGluYXRlcyhhcnJheSk7XG4gICAgICAgIGNlbGxzVmVydGljZXMucHVzaCh2ZXJ0ZXgpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIENoYW5nZSB0aGUgZHJvcHBhYmxlIGF0dHJpYnV0ZSBvZiBlYWNoIGNlbGwncyBhZGphY2VudCBjZWxsIHRvIHRydWUgKGV4Y2VwdCB0aG9zZSBvY2N1cGllZCBvciBuZWlnaGJvcmVkIHRvIHNoaXBzKVxuICAgICAgY2VsbHNWZXJ0aWNlcy5mb3JFYWNoKChjZWxsVmVydGV4KSA9PiB7XG4gICAgICAgIGNlbGxWZXJ0ZXgub2NjdXBpZWRCeVNoaXAgPSBmYWxzZTtcbiAgICAgICAgY2VsbFZlcnRleC5vY2N1cGllZCA9IGZhbHNlO1xuICAgICAgICBjZWxsVmVydGV4LmFkamFjZW5jeUxpc3QuZm9yRWFjaCgoYWRqYWNlbmN5KSA9PiB7XG4gICAgICAgICAgaWYgKCFjZWxsc1ZlcnRpY2VzLmluY2x1ZGVzKGFkamFjZW5jeSkpIHtcbiAgICAgICAgICAgIGFkamFjZW5jeS5vY2N1cGllZCA9IGZhbHNlO1xuICAgICAgICAgICAgYWRqYWNlbmN5LmFkamFjZW5jeUxpc3QuZm9yRWFjaCgoYWRqKSA9PiB7XG4gICAgICAgICAgICAgIGlmICghY2VsbHNWZXJ0aWNlcy5pbmNsdWRlcyhhZGopKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFkai5vY2N1cGllZEJ5U2hpcCkge1xuICAgICAgICAgICAgICAgICAgYWRqYWNlbmN5Lm9jY3VwaWVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBhZGphY2VuY3kub2NjdXBpZWQgPT09IGZhbHNlICYmXG4gICAgICAgICAgICAgICFjZWxsc1ZlcnRpY2VzQWRqYWNlbnQuaW5jbHVkZXMoYWRqYWNlbmN5KVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGNlbGxzVmVydGljZXNBZGphY2VudC5wdXNoKGFkamFjZW5jeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBjb25zb2xlLmxvZyhjZWxsc1ZlcnRpY2VzQWRqYWNlbnQpO1xuXG4gICAgICBjZWxsc1ZlcnRpY2VzQWRqYWNlbnQuZm9yRWFjaCgodmVydGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGAke3ZlcnRleC5jb29yZGluYXRlc1swXX0sJHt2ZXJ0ZXguY29vcmRpbmF0ZXNbMV19YDtcbiAgICAgICAgY29uc3QgcGFyZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXJPbmUtYm9hcmRcIik7XG4gICAgICAgIGNvbnN0IGRpdiA9IHBhcmVudERpdi5xdWVyeVNlbGVjdG9yKGBbY2xhc3MqPVwiJHtjbGFzc05hbWV9XCJdLmNlbGxgKTtcbiAgICAgICAgZGl2LnNldEF0dHJpYnV0ZShcImRyb3BwYWJsZVwiLCB0cnVlKTtcbiAgICAgICAgLy8gZGl2LmNsYXNzTGlzdC5hZGQoXCJzaGlwLWNlbGxcIik7XG4gICAgICB9KTtcblxuICAgICAgLy8gICBjb25zb2xlLmxvZyhjZWxscyk7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKGNlbGxzVmVydGljZXMpO1xuICAgICAgLy8gICBjb25zb2xlLmxvZyhjZWxsc1ZlcnRpY2VzQWRqYWNlbnQpO1xuICAgICAgLy8gICBjb25zb2xlLmxvZyhwbGF5ZXJPbmVCb2FyZCk7XG4gICAgICBjb25zdCBlbGVtZW50c0JlbG93ID0gZG9jdW1lbnQuZWxlbWVudHNGcm9tUG9pbnQoXG4gICAgICAgIGV2ZW50LmNsaWVudFggLSBtb3VzZURvd25PZmZzZXRIb3IsXG4gICAgICAgIGV2ZW50LmNsaWVudFkgLSBtb3VzZURvd25PZmZzZXRWZXIsXG4gICAgICApO1xuICAgICAgZWxlbWVudHNCZWxvdy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImNlbGxcIikpIHtcbiAgICAgICAgICBpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkcm9wcGFibGVcIikgPT09IFwidHJ1ZVwiKSB7XG4gICAgICAgICAgICBlbGVtZW50QmVsb3cgPSBlbGVtZW50O1xuICAgICAgICAgICAgb3JpZ2luYWxFbGVtZW50QmVsb3cgPSBlbGVtZW50O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGVtZW50QmVsb3cgPSBudWxsO1xuICAgICAgICAgICAgb3JpZ2luYWxFbGVtZW50QmVsb3cgPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIC8vIE1vdXNlIG1vdmVcbiAgY29uc3Qgb25Nb3VzZU1vdmUgPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoaXNEcmFnZ2luZykge1xuICAgICAgY29uc3QgZWxlbWVudHNCZWxvdyA9IGRvY3VtZW50LmVsZW1lbnRzRnJvbVBvaW50KFxuICAgICAgICBldmVudC5jbGllbnRYIC0gbW91c2VEb3duT2Zmc2V0SG9yLFxuICAgICAgICBldmVudC5jbGllbnRZIC0gbW91c2VEb3duT2Zmc2V0VmVyLFxuICAgICAgKTtcbiAgICAgIGVsZW1lbnRzQmVsb3cuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJjZWxsXCIpKSB7XG4gICAgICAgICAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZHJvcHBhYmxlXCIpID09PSBcInRydWVcIikge1xuICAgICAgICAgICAgZWxlbWVudEJlbG93ID0gZWxlbWVudDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlbWVudEJlbG93ID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKGRyYWdnYWJsZUVsZW1lbnQpIHtcbiAgICAgICAgZHJhZ2dhYmxlRWxlbWVudC5zdHlsZS5sZWZ0ID0gYCR7ZXZlbnQuY2xpZW50WCAtIG9mZlNldFh9cHhgO1xuICAgICAgICBkcmFnZ2FibGVFbGVtZW50LnN0eWxlLnRvcCA9IGAke2V2ZW50LmNsaWVudFkgLSBvZmZTZXRZfXB4YDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLy8gTW91c2UgdXBcbiAgY29uc3Qgb25Nb3VzZVVwID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKGVsZW1lbnRCZWxvdyA9PT0gb3JpZ2luYWxFbGVtZW50QmVsb3cpIHtcbiAgICAgIGlmIChkcmFnZ2FibGVFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gYCR7ZHJhZ2dhYmxlRWxlbWVudFJlY3QuaGVpZ2h0fXB4YDtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gYCR7ZHJhZ2dhYmxlRWxlbWVudFJlY3Qud2lkdGh9cHhgO1xuXG4gICAgICAgIGRyYWdnYWJsZUVsZW1lbnQuc3R5bGUud2lkdGggPSB3aWR0aDtcbiAgICAgICAgZHJhZ2dhYmxlRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIGNvbnN0IHNoaXAgPSBwbGF5ZXJPbmVCb2FyZC5maW5kU2hpcEJ5SWQoZHJhZ2dhYmxlRWxlbWVudC5pZCk7XG4gICAgICAgIGlmIChoZWlnaHQgPiB3aWR0aCkge1xuICAgICAgICAgIHNoaXAucG9zaXRpb24gPSBcInZcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzaGlwLnBvc2l0aW9uID0gXCJoXCI7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coc2hpcCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnRCZWxvdyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzRHJhZ2dpbmcpIHtcbiAgICAgIGlzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgIC8vIGxldCBhcHBlbmRlZCA9IGZhbHNlO1xuXG4gICAgICBpZiAoZHJhZ2dhYmxlRWxlbWVudFJlY3Qud2lkdGggPiA0MCB8fCBkcmFnZ2FibGVFbGVtZW50UmVjdC5oZWlnaHQgPiA0MCkge1xuICAgICAgICBsZXQgbGFzdFNoaXBFbGVtZW50O1xuXG4gICAgICAgIGlmIChkcmFnZ2FibGVFbGVtZW50UmVjdC53aWR0aCA9PT0gODApIHtcbiAgICAgICAgICBsYXN0U2hpcEVsZW1lbnQgPSBkb2N1bWVudC5lbGVtZW50c0Zyb21Qb2ludChcbiAgICAgICAgICAgIGV2ZW50LmNsaWVudFggLSBtb3VzZURvd25PZmZzZXRIb3IgKyA0MCxcbiAgICAgICAgICAgIGV2ZW50LmNsaWVudFkgLSBtb3VzZURvd25PZmZzZXRWZXIsXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmIChkcmFnZ2FibGVFbGVtZW50UmVjdC53aWR0aCA9PT0gMTIwKSB7XG4gICAgICAgICAgbGFzdFNoaXBFbGVtZW50ID0gZG9jdW1lbnQuZWxlbWVudHNGcm9tUG9pbnQoXG4gICAgICAgICAgICBldmVudC5jbGllbnRYIC0gbW91c2VEb3duT2Zmc2V0SG9yICsgODAsXG4gICAgICAgICAgICBldmVudC5jbGllbnRZIC0gbW91c2VEb3duT2Zmc2V0VmVyLFxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAoZHJhZ2dhYmxlRWxlbWVudFJlY3Qud2lkdGggPT09IDE2MCkge1xuICAgICAgICAgIGxhc3RTaGlwRWxlbWVudCA9IGRvY3VtZW50LmVsZW1lbnRzRnJvbVBvaW50KFxuICAgICAgICAgICAgZXZlbnQuY2xpZW50WCAtIG1vdXNlRG93bk9mZnNldEhvciArIDEyMCxcbiAgICAgICAgICAgIGV2ZW50LmNsaWVudFkgLSBtb3VzZURvd25PZmZzZXRWZXIsXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmIChkcmFnZ2FibGVFbGVtZW50UmVjdC5oZWlnaHQgPT09IDgwKSB7XG4gICAgICAgICAgbGFzdFNoaXBFbGVtZW50ID0gZG9jdW1lbnQuZWxlbWVudHNGcm9tUG9pbnQoXG4gICAgICAgICAgICBldmVudC5jbGllbnRYIC0gbW91c2VEb3duT2Zmc2V0SG9yLFxuICAgICAgICAgICAgZXZlbnQuY2xpZW50WSAtIG1vdXNlRG93bk9mZnNldFZlciArIDQwLFxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAoZHJhZ2dhYmxlRWxlbWVudFJlY3QuaGVpZ2h0ID09PSAxMjApIHtcbiAgICAgICAgICBsYXN0U2hpcEVsZW1lbnQgPSBkb2N1bWVudC5lbGVtZW50c0Zyb21Qb2ludChcbiAgICAgICAgICAgIGV2ZW50LmNsaWVudFggLSBtb3VzZURvd25PZmZzZXRIb3IsXG4gICAgICAgICAgICBldmVudC5jbGllbnRZIC0gbW91c2VEb3duT2Zmc2V0VmVyICsgODAsXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmIChkcmFnZ2FibGVFbGVtZW50UmVjdC5oZWlnaHQgPT09IDE2MCkge1xuICAgICAgICAgIGxhc3RTaGlwRWxlbWVudCA9IGRvY3VtZW50LmVsZW1lbnRzRnJvbVBvaW50KFxuICAgICAgICAgICAgZXZlbnQuY2xpZW50WCAtIG1vdXNlRG93bk9mZnNldEhvcixcbiAgICAgICAgICAgIGV2ZW50LmNsaWVudFkgLSBtb3VzZURvd25PZmZzZXRWZXIgKyAxMjAsXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxhc3RTaGlwRWxlbWVudC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2VsbFwiKSkge1xuICAgICAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc0xpc3RbMF07XG4gICAgICAgICAgICBjb25zdCBhcnJheSA9IGNsYXNzTmFtZS5zcGxpdChcIixcIikubWFwKE51bWJlcik7XG4gICAgICAgICAgICBjb25zdCB2ZXJ0ZXggPSBwbGF5ZXJPbmVCb2FyZC5maW5kVmVydGV4dE9iamVjdEJ5Q29vcmRpbmF0ZXMoYXJyYXkpO1xuXG4gICAgICAgICAgICB2ZXJ0ZXguYWRqYWNlbmN5TGlzdC5mb3JFYWNoKChhZGphY2VuY3kpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGFkamFjZW5jeS5vY2N1cGllZEJ5U2hpcCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50QmVsb3cpIHtcbiAgICAgICAgICAgICAgICAgIGVsZW1lbnRCZWxvdy5zZXRBdHRyaWJ1dGUoXCJkcm9wcGFibGVcIiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgY2hlY2tCb3JkZXJzKCk7XG4gICAgICBtYWtlVW5kcm9wcGFibGUoaWRlbnRpZnlDZWxsc1RvTWFrZURyb3BwYWJsZSgpKTtcblxuICAgICAgZHJhZ2dhYmxlRWxlbWVudC5zdHlsZS5sZWZ0ID0gMDtcbiAgICAgIGRyYWdnYWJsZUVsZW1lbnQuc3R5bGUudG9wID0gMDtcbiAgICAgIGRyYWdnYWJsZUVsZW1lbnQuc3R5bGUuekluZGV4ID0gNTtcbiAgICAgIGRyYWdnYWJsZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRyYWdnaW5nXCIpO1xuXG4gICAgICBvZmZTZXRYID0gbnVsbDtcbiAgICAgIG9mZlNldFkgPSBudWxsO1xuICAgICAgbW91c2VEb3duT2Zmc2V0SG9yID0gMDtcbiAgICAgIG1vdXNlRG93bk9mZnNldFZlciA9IDA7XG4gICAgfVxuICAgIGRyYWdnYWJsZUVsZW1lbnQgPSBudWxsO1xuICAgIGRyYWdnYWJsZUVsZW1lbnRSZWN0ID0gbnVsbDtcbiAgICB1cGRhdGVEcm9wcGFibGVBdHRyaWJ1dGUoKTtcbiAgfTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIG9uTW91c2VEb3duKTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBvbk1vdXNlTW92ZSk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIG9uTW91c2VVcCk7XG59XG5cbmV4cG9ydCB7IGFkZERvY3VtZW50RXZlbnRMaXN0ZW5lcnMgfTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1jb250aW51ZSAqL1xuaW1wb3J0IFNoaXBNb2R1bGUgZnJvbSBcIi4vc2hpcFwiO1xuaW1wb3J0IEdyYXBoIGZyb20gXCIuL0RTX0dyYXBoXCI7XG5cbmZ1bmN0aW9uIEdhbWVib2FyZE1vZHVsZSgpIHtcbiAgY29uc3QgYm9hcmQgPSBuZXcgR3JhcGgoKTtcbiAgY29uc3Qgc2hpcHMgPSBbXTtcbiAgY29uc3QgbWlzc2luZ1Nob3RzID0gW107XG5cbiAgLy8gQ3JlYXRlIDEweDEwIGNlbGxzIGFzIGdyYXBoIHZlcnRleGVzXG4gIGZ1bmN0aW9uIGNyZWF0ZUNlbGxzKCkge1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMTE7IGkgKz0gMSkge1xuICAgICAgZm9yIChsZXQgaiA9IDE7IGogPCAxMTsgaiArPSAxKSB7XG4gICAgICAgIGJvYXJkLmFkZFZlcnRleChpLCBqKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBGaW5kIHRoZSB2ZXJ0ZXggb2JqZWN0IG1hdGNoaW5nIHRoZSBnaXZlbiBjb29yZGluYXRlc1xuICBmdW5jdGlvbiBmaW5kVmVydGV4dE9iamVjdEJ5Q29vcmRpbmF0ZXMoY29vcmRpbmF0ZXMpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhjb29yZGluYXRlcyk7XG4gICAgY29uc3QgZm91bmRWZXJ0ZXggPSBib2FyZC52ZXJ0aWNlcy5maW5kKFxuICAgICAgKHZlcnRleCkgPT5cbiAgICAgICAgSlNPTi5zdHJpbmdpZnkodmVydGV4LmNvb3JkaW5hdGVzKSA9PT0gSlNPTi5zdHJpbmdpZnkoY29vcmRpbmF0ZXMpLFxuICAgICk7XG5cbiAgICBpZiAoZm91bmRWZXJ0ZXgpIHtcbiAgICAgIHJldHVybiBmb3VuZFZlcnRleDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvLyBGaWxsIG91dCBhZGphY2VuY3lMaXN0IGZvciBhIHZlcnRleFxuICBmdW5jdGlvbiBhZGRDZWxsQWRqYWNlbmNpZXModmVydGV4KSB7XG4gICAgY29uc3QgeSA9IHZlcnRleC5jb29yZGluYXRlc1swXTtcbiAgICBjb25zdCB4ID0gdmVydGV4LmNvb3JkaW5hdGVzWzFdO1xuICAgIGNvbnN0IHBvdGVudGlhbEFkamFjZW5jaWVzID0gW1xuICAgICAgW3kgLSAxLCB4IC0gMV0sXG4gICAgICBbeSAtIDEsIHhdLFxuICAgICAgW3kgLSAxLCB4ICsgMV0sXG4gICAgICBbeSwgeCAtIDFdLFxuICAgICAgW3ksIHggKyAxXSxcbiAgICAgIFt5ICsgMSwgeCAtIDFdLFxuICAgICAgW3kgKyAxLCB4XSxcbiAgICAgIFt5ICsgMSwgeCArIDFdLFxuICAgIF07XG4gICAgY29uc3QgYWRqYWNlbmNpZXMgPSBbXTtcbiAgICBwb3RlbnRpYWxBZGphY2VuY2llcy5mb3JFYWNoKChhZGphY2VuY3kpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgYWRqYWNlbmN5WzBdID4gMCAmJlxuICAgICAgICBhZGphY2VuY3lbMF0gPD0gMTAgJiZcbiAgICAgICAgYWRqYWNlbmN5WzFdID4gMCAmJlxuICAgICAgICBhZGphY2VuY3lbMV0gPD0gMTBcbiAgICAgICkge1xuICAgICAgICBjb25zdCBhZGphY2VuY3lPYmplY3QgPSBmaW5kVmVydGV4dE9iamVjdEJ5Q29vcmRpbmF0ZXMoYWRqYWNlbmN5KTtcbiAgICAgICAgYWRqYWNlbmNpZXMucHVzaChhZGphY2VuY3lPYmplY3QpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBhZGphY2VuY2llcztcbiAgfVxuXG4gIC8vIEZpbGwgb3V0IGFkamFjZW5jeUxpc3QgZm9yIGVhY2ggY2VsbCB2ZXJ0ZXhcbiAgZnVuY3Rpb24gY3JlYXRlQWRqYWNlbmNpZXMoKSB7XG4gICAgYm9hcmQudmVydGljZXMuZm9yRWFjaCgodmVydGV4KSA9PiB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIGNvbnN0IGFkamFjZW50VmVydGljZXMgPSBhZGRDZWxsQWRqYWNlbmNpZXModmVydGV4KTtcbiAgICAgIGFkamFjZW50VmVydGljZXMuZm9yRWFjaCgoYWRqYWNlbnRWZXJ0ZXgpID0+IHtcbiAgICAgICAgYm9hcmQuYWRkRWRnZSh2ZXJ0ZXgsIGFkamFjZW50VmVydGV4KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gRmlsbCB0aGUgQm9hcmQgYXJyYXlcbiAgZnVuY3Rpb24gY3JlYXRlQm9hcmQoKSB7XG4gICAgY3JlYXRlQ2VsbHMoKTtcbiAgICBjcmVhdGVBZGphY2VuY2llcygpO1xuICB9XG5cbiAgLy8gRmlsbCB0aGUgU2hpcHMgYXJyYXlcbiAgZnVuY3Rpb24gY3JlYXRlU2hpcHMoKSB7XG4gICAgY29uc3Qgc2hpcHNDb25maWcgPSBbXG4gICAgICAvLyAgIHtcbiAgICAgIC8vICAgICBzaGlwTGVuZ3RoOiAxLFxuICAgICAgLy8gICAgIHNoaXBJZDogMCxcbiAgICAgIC8vICAgfSxcbiAgICAgIC8vICAge1xuICAgICAgLy8gICAgIHNoaXBMZW5ndGg6IDEsXG4gICAgICAvLyAgICAgc2hpcElkOiAxLFxuICAgICAgLy8gICB9LFxuICAgICAgLy8gICB7XG4gICAgICAvLyAgICAgc2hpcExlbmd0aDogMSxcbiAgICAgIC8vICAgICBzaGlwSWQ6IDIsXG4gICAgICAvLyAgIH0sXG4gICAgICAvLyAgIHtcbiAgICAgIC8vICAgICBzaGlwTGVuZ3RoOiAyLFxuICAgICAgLy8gICAgIHNoaXBJZDogMyxcbiAgICAgIC8vICAgfSxcbiAgICAgIC8vICAge1xuICAgICAgLy8gICAgIHNoaXBMZW5ndGg6IDIsXG4gICAgICAvLyAgICAgc2hpcElkOiA0LFxuICAgICAgLy8gICB9LFxuICAgICAge1xuICAgICAgICBzaGlwTGVuZ3RoOiAzLFxuICAgICAgICBzaGlwSWQ6IDUsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzaGlwTGVuZ3RoOiA0LFxuICAgICAgICBzaGlwSWQ6IDYsXG4gICAgICB9LFxuICAgIF07XG4gICAgc2hpcHNDb25maWcuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3Qgc2hpcCA9IFNoaXBNb2R1bGUuY3JlYXRlU2hpcChlbGVtZW50LnNoaXBMZW5ndGgsIGVsZW1lbnQuc2hpcElkKTtcbiAgICAgIHNoaXBzLnB1c2goc2hpcCk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBGaWxsIHRoZSBtaXNzaW5nU2hvdHMgYXJyYXlcbiAgZnVuY3Rpb24gcmVjb3JkTWlzc2luZ1Nob3QoY29vcmRpbmF0ZXMpIHtcbiAgICBjb25zdCBtaXNzZWRTaG90VmVydGV4ID0gZmluZFZlcnRleHRPYmplY3RCeUNvb3JkaW5hdGVzKGNvb3JkaW5hdGVzKTtcbiAgICBpZiAoIW1pc3NpbmdTaG90cy5pbmNsdWRlcyhtaXNzZWRTaG90VmVydGV4LmNvb3JkaW5hdGVzKSkge1xuICAgICAgbWlzc2luZ1Nob3RzLnB1c2gobWlzc2VkU2hvdFZlcnRleC5jb29yZGluYXRlcyk7XG4gICAgfVxuICAgIG1pc3NlZFNob3RWZXJ0ZXguYWRqYWNlbmN5TGlzdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBpZiAoIW1pc3NpbmdTaG90cy5pbmNsdWRlcyhlbGVtZW50LmNvb3JkaW5hdGVzKSkge1xuICAgICAgICBtaXNzaW5nU2hvdHMucHVzaChlbGVtZW50LmNvb3JkaW5hdGVzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIEZpbmQgc2hpcCBieSBzaGlwSWRcbiAgZnVuY3Rpb24gZmluZFNoaXBCeUlkKGlkKSB7XG4gICAgbGV0IHNoaXAgPSBudWxsO1xuICAgIHNoaXBzLmZvckVhY2goKHMpID0+IHtcbiAgICAgIGlmIChzLmlkID09PSBwYXJzZUludChpZCkpIHtcbiAgICAgICAgc2hpcCA9IHM7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHNoaXA7XG4gIH1cblxuICAvLyBSZWdpc3RlciBhbmQgcHJvY2VzcyBhdHRhY2tzXG4gIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXMpIHtcbiAgICBsZXQgaGl0UmVnaXN0ZXJlZCA9IGZhbHNlO1xuICAgIHNoaXBzLnNvbWUoKHNoaXApID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoc2hpcC5jb29yZGluYXRlcykuaW5jbHVkZXMoSlNPTi5zdHJpbmdpZnkoY29vcmRpbmF0ZXMpKVxuICAgICAgKSB7XG4gICAgICAgIHNoaXAuaGl0KCk7XG4gICAgICAgIGhpdFJlZ2lzdGVyZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgICBpZiAoIWhpdFJlZ2lzdGVyZWQpIHtcbiAgICAgIHJlY29yZE1pc3NpbmdTaG90KGNvb3JkaW5hdGVzKTtcbiAgICB9XG4gIH1cblxuICAvLyBDaGVjayBpZiBhbGwgc2hpcHMgb24gYSBib2FyZCBoYXZlIGJlZW4gc3Vua1xuICBmdW5jdGlvbiBhbGxTaGlwc1N1bmsoKSB7XG4gICAgcmV0dXJuIHNoaXBzLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLmlzU3VuaygpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBvc2l0aW9uU2hpcHMoKSB7XG4gICAgc2hpcHMuc29ydCgoYSwgYikgPT4gYi5sZW5ndGggLSBhLmxlbmd0aCk7XG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgY29uc3Qgb3JpZW50YXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKSA9PT0gMCA/IFwidlwiIDogXCJoXCI7XG4gICAgICBzaGlwLnBvc2l0aW9uID0gb3JpZW50YXRpb247XG5cbiAgICAgIGNvbnN0IGZpbHRlcmVkQm9hcmQgPSBib2FyZC52ZXJ0aWNlcy5maWx0ZXIoXG4gICAgICAgIChvYmopID0+IG9iai5vY2N1cGllZCA9PT0gZmFsc2UsXG4gICAgICApO1xuXG4gICAgICBpZiAoZmlsdGVyZWRCb2FyZC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxldCBwb3NpdGlvbkZvdW5kID0gZmFsc2U7XG4gICAgICAgIHdoaWxlICghcG9zaXRpb25Gb3VuZCkge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItY29uc3RcbiAgICAgICAgICBsZXQgcG9zaXRpb24gPSBbXTtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWNvbnN0XG4gICAgICAgICAgbGV0IHBvc2l0aW9uQ29vcmRpbmF0ZXMgPSBbXTtcbiAgICAgICAgICBjb25zdCBmaXJzdENlbGxJbmRleCA9IE1hdGguZmxvb3IoXG4gICAgICAgICAgICBNYXRoLnJhbmRvbSgpICogZmlsdGVyZWRCb2FyZC5sZW5ndGgsXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjb25zdCBmaXJzdENlbGxPYmplY3QgPSBmaWx0ZXJlZEJvYXJkW2ZpcnN0Q2VsbEluZGV4XTtcbiAgICAgICAgICBwb3NpdGlvbkNvb3JkaW5hdGVzLnB1c2goZmlyc3RDZWxsT2JqZWN0LmNvb3JkaW5hdGVzKTtcbiAgICAgICAgICBwb3NpdGlvbi5wdXNoKGZpcnN0Q2VsbE9iamVjdCk7XG4gICAgICAgICAgLy8gICBjb25zb2xlLmxvZyhwb3NpdGlvbik7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzaGlwLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBjb25zdCBuZXh0Q2VsbE9iamVjdENvb3JkaW5hdGVzID1cbiAgICAgICAgICAgICAgc2hpcC5wb3NpdGlvbiA9PT0gXCJ2XCJcbiAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RDZWxsT2JqZWN0LmNvb3JkaW5hdGVzWzBdICsgaSxcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RDZWxsT2JqZWN0LmNvb3JkaW5hdGVzWzFdLFxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIDogW1xuICAgICAgICAgICAgICAgICAgICBmaXJzdENlbGxPYmplY3QuY29vcmRpbmF0ZXNbMF0sXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0Q2VsbE9iamVjdC5jb29yZGluYXRlc1sxXSArIGksXG4gICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobmV4dENlbGxPYmplY3RDb29yZGluYXRlcyk7XG4gICAgICAgICAgICBjb25zdCBuZXh0Q2VsbE9iamVjdCA9IGJvYXJkLnZlcnRpY2VzLmZpbHRlcihcbiAgICAgICAgICAgICAgKG9iaikgPT5cbiAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShvYmouY29vcmRpbmF0ZXMpID09PVxuICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KG5leHRDZWxsT2JqZWN0Q29vcmRpbmF0ZXMpLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG5leHRDZWxsT2JqZWN0WzBdKTtcbiAgICAgICAgICAgIGlmIChuZXh0Q2VsbE9iamVjdFswXSkge1xuICAgICAgICAgICAgICBpZiAobmV4dENlbGxPYmplY3RbMF0ub2NjdXBpZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb25Db29yZGluYXRlcy5wdXNoKG5leHRDZWxsT2JqZWN0WzBdLmNvb3JkaW5hdGVzKTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbi5wdXNoKG5leHRDZWxsT2JqZWN0WzBdKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHBvc2l0aW9uLmxlbmd0aCA9PT0gc2hpcC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHNoaXAuYXNzaWduQ29vcmRpbmF0ZXMoLi4ucG9zaXRpb25Db29yZGluYXRlcyk7XG5cbiAgICAgICAgICAgIHBvc2l0aW9uLmZvckVhY2goKHApID0+IHtcbiAgICAgICAgICAgICAgcC5vY2N1cGllZCA9IHRydWU7XG4gICAgICAgICAgICAgIHAub2NjdXBpZWRCeVNoaXAgPSB0cnVlO1xuICAgICAgICAgICAgICBwLmFkamFjZW5jeUxpc3QuZm9yRWFjaCgoYWRqKSA9PiB7XG4gICAgICAgICAgICAgICAgYWRqLm9jY3VwaWVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHBvc2l0aW9uRm91bmQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBib2FyZCxcbiAgICBzaGlwcyxcbiAgICBtaXNzaW5nU2hvdHMsXG4gICAgY3JlYXRlQm9hcmQsXG4gICAgY3JlYXRlU2hpcHMsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBhbGxTaGlwc1N1bmssXG4gICAgcG9zaXRpb25TaGlwcyxcbiAgICBmaW5kVmVydGV4dE9iamVjdEJ5Q29vcmRpbmF0ZXMsXG4gICAgZmluZFNoaXBCeUlkLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmRNb2R1bGU7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tY3ljbGVcbmltcG9ydCBET01IYW5kbGVyIGZyb20gXCIuL0RPTUhhbmRsZXJcIjtcbmltcG9ydCBHYW1lYm9hcmRNb2R1bGUgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgeyBhZGREb2N1bWVudEV2ZW50TGlzdGVuZXJzIH0gZnJvbSBcIi4vZXZlbnRNYW5hZ2VyXCI7XG5cbmxldCBwbGF5ZXJPbmVCb2FyZCA9IG51bGw7XG5cbmZ1bmN0aW9uIGdhbWVMb29wKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xuICBpZiAobWFpbikge1xuICAgIG1haW4ucmVtb3ZlKCk7XG4gIH1cbiAgcGxheWVyT25lQm9hcmQgPSBHYW1lYm9hcmRNb2R1bGUoKTtcbiAgcGxheWVyT25lQm9hcmQuY3JlYXRlQm9hcmQoKTtcbiAgcGxheWVyT25lQm9hcmQuY3JlYXRlU2hpcHMoKTtcbiAgcGxheWVyT25lQm9hcmQucG9zaXRpb25TaGlwcygpO1xuXG4gIGNvbnN0IHBsYXllclR3b0JvYXJkID0gR2FtZWJvYXJkTW9kdWxlKCk7XG4gIHBsYXllclR3b0JvYXJkLmNyZWF0ZUJvYXJkKCk7XG4gIHBsYXllclR3b0JvYXJkLmNyZWF0ZVNoaXBzKCk7XG4gIHBsYXllclR3b0JvYXJkLnBvc2l0aW9uU2hpcHMoKTtcblxuICBET01IYW5kbGVyLnBsYXllck9uZUJvYXJkID0gcGxheWVyT25lQm9hcmQuYm9hcmQudmVydGljZXM7XG4gIERPTUhhbmRsZXIucGxheWVyT25lU2hpcHMgPSBwbGF5ZXJPbmVCb2FyZC5zaGlwcztcblxuICBET01IYW5kbGVyLnBsYXllclR3b0JvYXJkID0gcGxheWVyVHdvQm9hcmQuYm9hcmQudmVydGljZXM7XG4gIERPTUhhbmRsZXIucGxheWVyVHdvU2hpcHMgPSBwbGF5ZXJUd29Cb2FyZC5zaGlwcztcblxuICBET01IYW5kbGVyLmNyZWF0ZURvbSgpO1xufVxuXG5nYW1lTG9vcCgpO1xuYWRkRG9jdW1lbnRFdmVudExpc3RlbmVycygpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHtcbiAgaWYgKGV2ZW50LmtleSA9PT0gXCJjXCIgfHwgZXZlbnQua2V5ID09PSBcIkNcIikge1xuICAgIGNvbnNvbGUubG9nKHBsYXllck9uZUJvYXJkKTtcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGdhbWVMb29wO1xuZXhwb3J0IHsgcGxheWVyT25lQm9hcmQgfTtcbiIsImNvbnN0IFNoaXBNb2R1bGUgPSAoKCkgPT4ge1xuICAvLyBDcmVhdGVzIGEgc2hpcFxuICBmdW5jdGlvbiBjcmVhdGVTaGlwKHNoaXBMZW5ndGgsIHNoaXBJZCkge1xuICAgIGNvbnN0IHNoaXAgPSB7XG4gICAgICBpZDogc2hpcElkLFxuICAgICAgaGl0Q291bnQ6IDAsXG4gICAgICBjb29yZGluYXRlczogW10sXG4gICAgICBsZW5ndGg6IHNoaXBMZW5ndGgsXG4gICAgICBwb3NpdGlvbjogXCJoXCIsXG5cbiAgICAgIGhpdCgpIHtcbiAgICAgICAgc2hpcC5oaXRDb3VudCArPSAxO1xuICAgICAgfSxcblxuICAgICAgaXNTdW5rKCkge1xuICAgICAgICBpZiAoc2hpcC5oaXRDb3VudCA9PT0gc2hpcC5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9LFxuXG4gICAgICBhc3NpZ25Db29yZGluYXRlcyguLi5hcmdzKSB7XG4gICAgICAgIHNoaXAuY29vcmRpbmF0ZXMgPSBhcmdzO1xuXG4gICAgICAgIC8vIERldGVybWluZSBpZiBzaGlwIHBvc2l0aW9uIGlzIGhvcml6b250YWwgb3IgdmVydGljYWxcbiAgICAgICAgaWYgKHNoaXAuY29vcmRpbmF0ZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgdGhpcy5wb3NpdGlvbiA9IFwiaFwiO1xuICAgICAgICB9IGVsc2UgaWYgKHNoaXAuY29vcmRpbmF0ZXNbMF1bMF0gPT09IHNoaXAuY29vcmRpbmF0ZXNbMV1bMF0pIHtcbiAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gXCJoXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5wb3NpdGlvbiA9IFwidlwiO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH07XG5cbiAgICByZXR1cm4gc2hpcDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlU2hpcCxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXBNb2R1bGU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
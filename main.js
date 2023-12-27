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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _DOMHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMHandler */ "./src/DOMHandler.js");
// eslint-disable-next-line import/no-cycle




function addEventListeners() {
  const randomizeButton = document.querySelector(".randomize");
  randomizeButton.addEventListener("click", () => {
    (0,___WEBPACK_IMPORTED_MODULE_0__["default"])();
  });

  let draggableElement = null;
  let draggableElementRect = null;

  let isDragging = false;
  let offSetX;
  let offSetY;
  let mouseDownOffsetHor = 0;
  let mouseDownOffsetVer = 0;
  let originalElementBelow = null;
  let elementBelow = null;

  // Mouse down
  document.addEventListener("mousedown", (event) => {
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

      // Change the droppable attribute of each cell to true
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
  });

  // Mouse move
  document.addEventListener("mousemove", (event) => {
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
  });

  // Mouse up
  document.addEventListener("mouseup", (event) => {
    if (isDragging) {
      isDragging = false;
      let appended = false;

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
                  console.log(elementBelow);
                  console.log(lastShipElement);
                }
              }
            });
          }
        });
      }

      console.log(elementBelow);
      if (elementBelow !== null) {
        if (elementBelow.getAttribute("droppable") === "true") {
          makeDroppable(elementBelow);
          elementBelow.append(draggableElement);
          appended = true;
        } else if (elementBelow.getAttribute("droppable") === "false") {
          makeDroppable(originalElementBelow);
          appended = false;
        }
      } else {
        makeDroppable(originalElementBelow);
        originalElementBelow.append(draggableElement);
        appended = false;
      }

      draggableElement.style.left = 0;
      draggableElement.style.top = 0;
      draggableElement.style.zIndex = 5;
      draggableElement.classList.remove("dragging");

      offSetX = null;
      offSetY = null;
      mouseDownOffsetHor = 0;
      mouseDownOffsetVer = 0;
      if (elementBelow && appended === false) {
        elementBelow.setAttribute("droppable", true);
      }
      if (elementBelow === null) {
        originalElementBelow.setAttribute("droppable", false);
      }
    }
    draggableElement = null;
    draggableElementRect = null;
  });

  // The cells under the draggable element will be made droppable while the element is getting dragged
  function makeDroppable(elBelow) {
    const cells = [];
    const cellsVertices = [];
    const firstCell = elBelow;
    let secondCellH;
    let thirdCellH;
    let fourthCellH;
    let secondCellV;
    let thirdCellV;
    let fourthCellV;

    cells.push(firstCell);

    const firstCellClassArray = firstCell.classList[0].split(",").map(Number);
    const parentDivBoardOne = document.querySelector(".playerOne-board");
    secondCellH = _DOMHandler__WEBPACK_IMPORTED_MODULE_1__["default"].findDivByCoordinates(
      `${firstCellClassArray[0]},${firstCellClassArray[1] + 1}`,
      parentDivBoardOne,
    );
    thirdCellH = _DOMHandler__WEBPACK_IMPORTED_MODULE_1__["default"].findDivByCoordinates(
      `${firstCellClassArray[0]},${firstCellClassArray[1] + 2}`,
      parentDivBoardOne,
    );
    fourthCellH = _DOMHandler__WEBPACK_IMPORTED_MODULE_1__["default"].findDivByCoordinates(
      `${firstCellClassArray[0]},${firstCellClassArray[1] + 3}`,
      parentDivBoardOne,
    );
    secondCellV = _DOMHandler__WEBPACK_IMPORTED_MODULE_1__["default"].findDivByCoordinates(
      `${firstCellClassArray[0] + 1},${firstCellClassArray[1]}`,
      parentDivBoardOne,
    );
    thirdCellV = _DOMHandler__WEBPACK_IMPORTED_MODULE_1__["default"].findDivByCoordinates(
      `${firstCellClassArray[0] + 2},${firstCellClassArray[1]}`,
      parentDivBoardOne,
    );
    fourthCellV = _DOMHandler__WEBPACK_IMPORTED_MODULE_1__["default"].findDivByCoordinates(
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

      // Update adjacent cells
      cellVertex.adjacencyList.forEach((adjacency) => {
        // Graph
        adjacency.occupied = true;
        const className = `${adjacency.coordinates[0]},${adjacency.coordinates[1]}`;
        const parentDiv = document.querySelector(".playerOne-board");
        const div = parentDiv.querySelector(`[class*="${className}"].cell`);
        // Node element
        div.setAttribute("droppable", false);
      });
    });
    console.log(___WEBPACK_IMPORTED_MODULE_0__.playerOneBoard.board.vertices);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addEventListeners);


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
      {
        shipLength: 2,
      },
      {
        shipLength: 2,
      },
      {
        shipLength: 2,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHdLQUF3SyxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxpRUFBaUU7QUFDN1E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBLDhCQUE4QjtBQUM5QiwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU8saUZBQWlGLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLE9BQU8sYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsS0FBSyxPQUFPLE9BQU8sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLDBKQUEwSixNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxtRUFBbUUsT0FBTyxjQUFjLGVBQWUsMkJBQTJCLHdDQUF3QyxxQkFBcUIsNEJBQTRCLHdCQUF3Qix3QkFBd0IsR0FBRyxVQUFVLGtCQUFrQixpQkFBaUIsR0FBRyxXQUFXLGtCQUFrQixpQkFBaUIsK0JBQStCLGtDQUFrQyxHQUFHLGFBQWEsdUJBQXVCLG9CQUFvQixHQUFHLGNBQWMsdUJBQXVCLG9CQUFvQixpQkFBaUIsa0JBQWtCLDJCQUEyQiw0QkFBNEIsdUJBQXVCLDBCQUEwQixLQUFLLGVBQWUsdUJBQXVCLHdCQUF3QixrQkFBa0IsY0FBYyx3QkFBd0IsR0FBRyxxQkFBcUIsMEJBQTBCLHNCQUFzQixxQkFBcUIsb0JBQW9CLEdBQUcsMkJBQTJCLGdCQUFnQiwrQkFBK0IsbUNBQW1DLEdBQUcsYUFBYSxrQkFBa0IsbUNBQW1DLGlDQUFpQyxnQkFBZ0Isa0JBQWtCLDhCQUE4Qix3QkFBd0IsdUJBQXVCLHdCQUF3QixHQUFHLDZEQUE2RCxpQkFBaUIsa0JBQWtCLGlEQUFpRCx5QkFBeUIsaUJBQWlCLEdBQUcsc0JBQXNCLHVCQUF1QixvQkFBb0IsR0FBRyxzQkFBc0IsdUJBQXVCLG9CQUFvQixHQUFHLDRCQUE0Qix1QkFBdUIsb0JBQW9CLDJCQUEyQix5QkFBeUIsR0FBRyw0QkFBNEIsdUJBQXVCLG9CQUFvQiwyQkFBMkIseUJBQXlCLEdBQUcseUNBQXlDLGtCQUFrQiwyQ0FBMkMsR0FBRyxxREFBcUQsa0RBQWtELHVCQUF1QixtQkFBbUIsS0FBSyxtQ0FBbUMsMkNBQTJDLEdBQUcsbUNBQW1DLGtEQUFrRCxHQUFHLFdBQVcsbUJBQW1CLHlCQUF5QixZQUFZLFdBQVcsMkNBQTJDLDRCQUE0QixHQUFHLGdCQUFnQiw0QkFBNEIsZUFBZSwyQkFBMkIsdUJBQXVCLEtBQUssb0JBQW9CLGlCQUFpQixJQUFJLDRCQUE0Qiw0QkFBNEIsR0FBRyxnQ0FBZ0Msa0JBQWtCLDRCQUE0QixHQUFHLG1CQUFtQixrQkFBa0IsSUFBSSw0QkFBNEIsZ0NBQWdDLDhCQUE4QixLQUFLLGVBQWUsdUJBQXVCLGdCQUFnQix1QkFBdUIsZUFBZSxvQkFBb0Isc0JBQXNCLEdBQUcsZUFBZSx1QkFBdUIsc0JBQXNCLGVBQWUsZ0JBQWdCLGNBQWMsb0JBQW9CLHNCQUFzQixHQUFHLGVBQWUsNkJBQTZCLDJDQUEyQyxHQUFHLDBCQUEwQiwyQ0FBMkMsR0FBRywyQkFBMkIsMkNBQTJDLEdBQUcscUJBQXFCO0FBQ2hrSztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQzNNMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW9HO0FBQ3BHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsdUZBQU87Ozs7QUFJOEM7QUFDdEUsT0FBTyxpRUFBZSx1RkFBTyxJQUFJLHVGQUFPLFVBQVUsdUZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQytDOztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxvREFBb0QsWUFBWTtBQUNoRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtB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Y3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvRE9NSGFuZGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL0RTX0dyYXBoLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZXZlbnRNYW5hZ2VyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpvc2VmaW4rU2Fuczp3Z2h0QDEwMCZmYW1pbHk9TGF0bzp3Z2h0QDMwMCZmYW1pbHk9TnVuaXRvOml0YWwsd2dodEAwLDIwMDswLDMwMDswLDQwMDswLDUwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMCZmYW1pbHk9Um9ib3RvOndnaHRAMTAwJmZhbWlseT1SdWJpazp3Z2h0QDMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICAvKiBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdG91Y2gtYWN0aW9uOiBub25lOyAqL1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuYm9keSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbn1cblxuLm1haW4ge1xuICBkaXNwbGF5OiBncmlkO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDFmcjtcbn1cblxuLmhlYWRlciB7XG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgZ3JpZC1yb3c6IDEgLyAyO1xufVxuXG4uY29udGVudCB7XG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgZ3JpZC1yb3c6IDIgLyAzO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gIC8qIHBhZGRpbmctdG9wOiA0MHB4OyAqL1xufVxuXG4uY29tbWFuZHMge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuLmNvbW1hbmRzID4gZGl2IHtcbiAgLyogdXNlci1zZWxlY3Q6IG5vbmU7ICovXG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uY29tbWFuZHMgPiBkaXY6aG92ZXIge1xuICBjb2xvcjogYmx1ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIHRleHQtZGVjb3JhdGlvbi10aGlja25lc3M6IDFweDtcbn1cblxuLmJvYXJkcyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIC8qIGdhcDogMjBweDsgKi9cbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cblxuLmJvYXJkcyA+IC5wbGF5ZXJPbmUtYm9hcmQsXG4uYm9hcmRzID4gLnBsYXllclR3by1ib2FyZCB7XG4gIHdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgb3V0bGluZTogMC41cHggc29saWQgcmdiKDExOCwgMTE4LCAxMTgsIDAuNik7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICBtYXJnaW46IDIwcHg7XG59XG5cbi5wbGF5ZXJPbmUtYm9hcmQge1xuICBncmlkLWNvbHVtbjogMSAvIDI7XG4gIGdyaWQtcm93OiAxIC8gMjtcbn1cblxuLnBsYXllclR3by1ib2FyZCB7XG4gIGdyaWQtY29sdW1uOiAyIC8gMztcbiAgZ3JpZC1yb3c6IDEgLyAyO1xufVxuXG4ucGxheWVyLW9uZS1ib2FyZC1uYW1lIHtcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICBncmlkLXJvdzogMiAvIDM7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xufVxuXG4ucGxheWVyLXR3by1ib2FyZC1uYW1lIHtcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuICBncmlkLXJvdzogMiAvIDM7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xufVxuXG4ucGxheWVyT25lLWJvYXJkLFxuLnBsYXllclR3by1ib2FyZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xufVxuXG4ucGxheWVyT25lLWJvYXJkID4gZGl2LFxuLnBsYXllclR3by1ib2FyZCA+IGRpdiB7XG4gIG91dGxpbmU6IDAuNXB4IHNvbGlkIHJnYmEoMTE4LCAxMTgsIDExOCwgMC42KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvKiB6LWluZGV4OiAxOyAqL1xufVxuXG4ucGxheWVyVHdvLWJvYXJkID4gLnNoaXAtY2VsbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjMpO1xufVxuXG4ucGxheWVyT25lLWJvYXJkID4gLnNoaXAtY2VsbCB7XG4gIG91dGxpbmU6IDAuNXB4IHNvbGlkIHJnYmEoMTE4LCAxMTgsIDExOCwgMC4yKTtcbn1cblxuLnNoaXAge1xuICAvKiB6LWluZGV4OiAyOyAqL1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAyNTUsIDAuMSk7XG4gIG91dGxpbmU6IDFweCBzb2xpZCBibHVlO1xufVxuXG4uZHJhZ2dhYmxlIHtcbiAgY3Vyc29yOiBtb3ZlICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDU7XG4gIC8qIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gIHRvdWNoLWFjdGlvbjogYWxsOyAqL1xufVxuXG4vKiAuc2hpcDpob3ZlciB7XG4gIGN1cnNvcjogbW92ZTtcbn0gKi9cblxuW2RyYWdnYWJsZT1cInRydWVcIl0ge1xuICBjdXJzb3I6IG1vdmUgIWltcG9ydGFudDtcbn1cblxuW2RyYWdnYWJsZT1cInRydWVcIl06aG92ZXIge1xuICB6LWluZGV4OiA5OTk5O1xuICBjdXJzb3I6IG1vdmUgIWltcG9ydGFudDtcbn1cblxuLyogLmRyYWdnYWJsZSB7XG4gIGN1cnNvcjogYWxpYXM7XG59ICovXG5cbltkcm9wcGFibGU9XCJ0cnVlXCJdIHtcbiAgLyogYm9yZGVyOiAycHggZGFzaGVkICNhYWE7ICovXG4gIC8qIHBvaW50ZXItZXZlbnRzOiBhbGw7ICovXG59XG5cbi5tYXJrX2NvbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdG9wOiAtMjBweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLm1hcmtfcm93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgd2lkdGg6IDUwJTtcbiAgbGVmdDogLTMwcHg7XG4gIHRvcDogMTBweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLmRyYWdnaW5nIHtcbiAgb3V0bGluZTogMXB4IGdyZWVuIHNvbGlkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDI1NSwgMCwgMC41KTtcbn1cblxuW2Ryb3BwYWJsZT1cInRydWVcIl0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEyOCwgMCwgMC4yKTtcbn1cblxuW2Ryb3BwYWJsZT1cImZhbHNlXCJdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuMyk7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQjt1QkFDcUI7RUFDckIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLDBCQUEwQjtFQUMxQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLDRCQUE0QjtFQUM1QixXQUFXO0VBQ1gsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osYUFBYTtFQUNiLDRDQUE0QztFQUM1QyxvQkFBb0I7RUFDcEIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLG9CQUFvQjtBQUN0Qjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2Isc0NBQXNDO0FBQ3hDOztBQUVBOztFQUVFLDZDQUE2QztFQUM3QyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtFQUNOLHNDQUFzQztFQUN0Qyx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsVUFBVTtFQUNWO3NCQUNvQjtBQUN0Qjs7QUFFQTs7R0FFRzs7QUFFSDtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7O0dBRUc7O0FBRUg7RUFDRSw2QkFBNkI7RUFDN0IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixXQUFXO0VBQ1gsU0FBUztFQUNULGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpvc2VmaW4rU2Fuczp3Z2h0QDEwMCZmYW1pbHk9TGF0bzp3Z2h0QDMwMCZmYW1pbHk9TnVuaXRvOml0YWwsd2dodEAwLDIwMDswLDMwMDswLDQwMDswLDUwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMCZmYW1pbHk9Um9ib3RvOndnaHRAMTAwJmZhbWlseT1SdWJpazp3Z2h0QDMwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOdW5pdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIC8qIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgdG91Y2gtYWN0aW9uOiBub25lOyAqL1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuLm1haW4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAxZnI7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgLyogcGFkZGluZy10b3A6IDQwcHg7ICovXFxufVxcblxcbi5jb21tYW5kcyB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTVweDtcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxufVxcblxcbi5jb21tYW5kcyA+IGRpdiB7XFxuICAvKiB1c2VyLXNlbGVjdDogbm9uZTsgKi9cXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5jb21tYW5kcyA+IGRpdjpob3ZlciB7XFxuICBjb2xvcjogYmx1ZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogMXB4O1xcbn1cXG5cXG4uYm9hcmRzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA1MHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICAvKiBnYXA6IDIwcHg7ICovXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG4uYm9hcmRzID4gLnBsYXllck9uZS1ib2FyZCxcXG4uYm9hcmRzID4gLnBsYXllclR3by1ib2FyZCB7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgb3V0bGluZTogMC41cHggc29saWQgcmdiKDExOCwgMTE4LCAxMTgsIDAuNik7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIG1hcmdpbjogMjBweDtcXG59XFxuXFxuLnBsYXllck9uZS1ib2FyZCB7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBncmlkLXJvdzogMSAvIDI7XFxufVxcblxcbi5wbGF5ZXJUd28tYm9hcmQge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5cXG4ucGxheWVyLW9uZS1ib2FyZC1uYW1lIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGdyaWQtcm93OiAyIC8gMztcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnBsYXllci10d28tYm9hcmQtbmFtZSB7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5wbGF5ZXJPbmUtYm9hcmQsXFxuLnBsYXllclR3by1ib2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxufVxcblxcbi5wbGF5ZXJPbmUtYm9hcmQgPiBkaXYsXFxuLnBsYXllclR3by1ib2FyZCA+IGRpdiB7XFxuICBvdXRsaW5lOiAwLjVweCBzb2xpZCByZ2JhKDExOCwgMTE4LCAxMTgsIDAuNik7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAvKiB6LWluZGV4OiAxOyAqL1xcbn1cXG5cXG4ucGxheWVyVHdvLWJvYXJkID4gLnNoaXAtY2VsbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC4zKTtcXG59XFxuXFxuLnBsYXllck9uZS1ib2FyZCA+IC5zaGlwLWNlbGwge1xcbiAgb3V0bGluZTogMC41cHggc29saWQgcmdiYSgxMTgsIDExOCwgMTE4LCAwLjIpO1xcbn1cXG5cXG4uc2hpcCB7XFxuICAvKiB6LWluZGV4OiAyOyAqL1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjEpO1xcbiAgb3V0bGluZTogMXB4IHNvbGlkIGJsdWU7XFxufVxcblxcbi5kcmFnZ2FibGUge1xcbiAgY3Vyc29yOiBtb3ZlICFpbXBvcnRhbnQ7XFxuICB6LWluZGV4OiA1O1xcbiAgLyogcG9pbnRlci1ldmVudHM6IGFsbDtcXG4gIHRvdWNoLWFjdGlvbjogYWxsOyAqL1xcbn1cXG5cXG4vKiAuc2hpcDpob3ZlciB7XFxuICBjdXJzb3I6IG1vdmU7XFxufSAqL1xcblxcbltkcmFnZ2FibGU9XFxcInRydWVcXFwiXSB7XFxuICBjdXJzb3I6IG1vdmUgIWltcG9ydGFudDtcXG59XFxuXFxuW2RyYWdnYWJsZT1cXFwidHJ1ZVxcXCJdOmhvdmVyIHtcXG4gIHotaW5kZXg6IDk5OTk7XFxuICBjdXJzb3I6IG1vdmUgIWltcG9ydGFudDtcXG59XFxuXFxuLyogLmRyYWdnYWJsZSB7XFxuICBjdXJzb3I6IGFsaWFzO1xcbn0gKi9cXG5cXG5bZHJvcHBhYmxlPVxcXCJ0cnVlXFxcIl0ge1xcbiAgLyogYm9yZGVyOiAycHggZGFzaGVkICNhYWE7ICovXFxuICAvKiBwb2ludGVyLWV2ZW50czogYWxsOyAqL1xcbn1cXG5cXG4ubWFya19jb2wge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0b3A6IC0yMHB4O1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5tYXJrX3JvdyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIHdpZHRoOiA1MCU7XFxuICBsZWZ0OiAtMzBweDtcXG4gIHRvcDogMTBweDtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4uZHJhZ2dpbmcge1xcbiAgb3V0bGluZTogMXB4IGdyZWVuIHNvbGlkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyNTUsIDAsIDAuNSk7XFxufVxcblxcbltkcm9wcGFibGU9XFxcInRydWVcXFwiXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEyOCwgMCwgMC4yKTtcXG59XFxuXFxuW2Ryb3BwYWJsZT1cXFwiZmFsc2VcXFwiXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4zKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1jeWNsZVxuaW1wb3J0IGFkZEV2ZW50TGlzdGVuZXJzIGZyb20gXCIuL2V2ZW50TWFuYWdlclwiO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBwcmVmZXItY29uc3QgKi9cbmNvbnN0IERPTUhhbmRsZXIgPSAoKCkgPT4ge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gIGxldCBwbGF5ZXJPbmVCb2FyZCA9IG51bGw7XG4gIGxldCBwbGF5ZXJUd29Cb2FyZCA9IG51bGw7XG4gIGxldCBwbGF5ZXJPbmVTaGlwcyA9IG51bGw7XG4gIGxldCBwbGF5ZXJUd29TaGlwcyA9IG51bGw7XG5cbiAgY29uc3Qgc3RhdGljTGF5b3V0RWxlbWVudHMgPSBbXG4gICAge1xuICAgICAgdHlwZTogXCJkaXZcIixcbiAgICAgIGNsYXNzOiBcIm1haW5cIixcbiAgICAgIGNoaWxkcmVuRWxlbWVudHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6IFwiZGl2XCIsXG4gICAgICAgICAgY2xhc3M6IFwiaGVhZGVyXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiBcImRpdlwiLFxuICAgICAgICAgIGNsYXNzOiBcImNvbnRlbnRcIixcbiAgICAgICAgICBjaGlsZHJlbkVsZW1lbnRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHR5cGU6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIGNsYXNzOiBcImNvbW1hbmRzXCIsXG4gICAgICAgICAgICAgIGNoaWxkcmVuRWxlbWVudHM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0eXBlOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IFwicmFuZG9taXplXCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogXCJyYW5kb21pemVcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICBjbGFzczogXCJzdGFydC1nYW1lXCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogXCJzdGFydFwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0eXBlOiBcImRpdlwiLFxuICAgICAgICAgICAgICBjbGFzczogXCJib2FyZHNcIixcbiAgICAgICAgICAgICAgY2hpbGRyZW5FbGVtZW50czogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICBjbGFzczogXCJwbGF5ZXJPbmUtYm9hcmRcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICBjbGFzczogXCJwbGF5ZXJUd28tYm9hcmRcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICBjbGFzczogXCJwbGF5ZXItb25lLWJvYXJkLW5hbWVcIixcbiAgICAgICAgICAgICAgICAgIHRleHRDb250ZW50OiBcIllvdXIgYm9hcmRcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICBjbGFzczogXCJwbGF5ZXItdHdvLWJvYXJkLW5hbWVcIixcbiAgICAgICAgICAgICAgICAgIHRleHRDb250ZW50OiBcIk9wcG9uZW50J3MgYm9hcmRcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICBdO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZVBhZ2VMYXlvdXQocGFyZW50LCB0cmVlKSB7XG4gICAgdHJlZS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50LnR5cGUpO1xuICAgICAgaWYgKGVsZW1lbnQuY2xhc3MpIHtcbiAgICAgICAgbmV3RWxlbWVudC5jbGFzc0xpc3QuYWRkKGVsZW1lbnQuY2xhc3MpO1xuICAgICAgfVxuICAgICAgaWYgKGVsZW1lbnQudGV4dENvbnRlbnQpIHtcbiAgICAgICAgbmV3RWxlbWVudC50ZXh0Q29udGVudCA9IGVsZW1lbnQudGV4dENvbnRlbnQ7XG4gICAgICB9XG4gICAgICBwYXJlbnQuYXBwZW5kKG5ld0VsZW1lbnQpO1xuICAgICAgaWYgKGVsZW1lbnQuY2hpbGRyZW5FbGVtZW50cykge1xuICAgICAgICBjcmVhdGVQYWdlTGF5b3V0KG5ld0VsZW1lbnQsIGVsZW1lbnQuY2hpbGRyZW5FbGVtZW50cyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVCb2FyZENlbGxzKCkge1xuICAgIGNvbnN0IHBsYXllck9uZUJvYXJkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXJPbmUtYm9hcmRcIik7XG4gICAgY29uc3QgcGxheWVyVHdvQm9hcmREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllclR3by1ib2FyZFwiKTtcblxuICAgIERPTUhhbmRsZXIucGxheWVyT25lQm9hcmQuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgbmV3Q2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBuZXdDZWxsLmNsYXNzTGlzdC5hZGQoZWxlbWVudC5jb29yZGluYXRlcyk7XG4gICAgICBuZXdDZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xuICAgICAgaWYgKGVsZW1lbnQub2NjdXBpZWQpIHtcbiAgICAgICAgbmV3Q2VsbC5zZXRBdHRyaWJ1dGUoXCJkcm9wcGFibGVcIiwgZmFsc2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3Q2VsbC5zZXRBdHRyaWJ1dGUoXCJkcm9wcGFibGVcIiwgdHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIHBsYXllck9uZUJvYXJkRGl2LmFwcGVuZChuZXdDZWxsKTtcblxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWxvbmUtYmxvY2tzXG4gICAgICB7XG4gICAgICAgIGlmIChuZXdDZWxsLmNsYXNzTGlzdFswXSA9PT0gXCIxLDFcIikge1xuICAgICAgICAgIGNvbnN0IG1hcmtDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIG1hcmtDb2wuY2xhc3NMaXN0LmFkZChcIm1hcmtfY29sXCIpO1xuICAgICAgICAgIG1hcmtDb2wudGV4dENvbnRlbnQgPSBcIkFcIjtcbiAgICAgICAgICBuZXdDZWxsLmFwcGVuZChtYXJrQ29sKTtcbiAgICAgICAgICBjb25zdCBtYXJrUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBtYXJrUm93LmNsYXNzTGlzdC5hZGQoXCJtYXJrX3Jvd1wiKTtcbiAgICAgICAgICBtYXJrUm93LnRleHRDb250ZW50ID0gXCIxXCI7XG4gICAgICAgICAgbmV3Q2VsbC5hcHBlbmQobWFya1Jvdyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld0NlbGwuY2xhc3NMaXN0WzBdID09PSBcIjEsMlwiKSB7XG4gICAgICAgICAgY29uc3QgbWFya0NvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgbWFya0NvbC5jbGFzc0xpc3QuYWRkKFwibWFya19jb2xcIik7XG4gICAgICAgICAgbWFya0NvbC50ZXh0Q29udGVudCA9IFwiQlwiO1xuICAgICAgICAgIG5ld0NlbGwuYXBwZW5kKG1hcmtDb2wpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdDZWxsLmNsYXNzTGlzdFswXSA9PT0gXCIxLDNcIikge1xuICAgICAgICAgIGNvbnN0IG1hcmtDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIG1hcmtDb2wuY2xhc3NMaXN0LmFkZChcIm1hcmtfY29sXCIpO1xuICAgICAgICAgIG1hcmtDb2wudGV4dENvbnRlbnQgPSBcIkNcIjtcbiAgICAgICAgICBuZXdDZWxsLmFwcGVuZChtYXJrQ29sKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3Q2VsbC5jbGFzc0xpc3RbMF0gPT09IFwiMSw0XCIpIHtcbiAgICAgICAgICBjb25zdCBtYXJrQ29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBtYXJrQ29sLmNsYXNzTGlzdC5hZGQoXCJtYXJrX2NvbFwiKTtcbiAgICAgICAgICBtYXJrQ29sLnRleHRDb250ZW50ID0gXCJEXCI7XG4gICAgICAgICAgbmV3Q2VsbC5hcHBlbmQobWFya0NvbCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld0NlbGwuY2xhc3NMaXN0WzBdID09PSBcIjEsNVwiKSB7XG4gICAgICAgICAgY29uc3QgbWFya0NvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgbWFya0NvbC5jbGFzc0xpc3QuYWRkKFwibWFya19jb2xcIik7XG4gICAgICAgICAgbWFya0NvbC50ZXh0Q29udGVudCA9IFwiRVwiO1xuICAgICAgICAgIG5ld0NlbGwuYXBwZW5kKG1hcmtDb2wpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdDZWxsLmNsYXNzTGlzdFswXSA9PT0gXCIxLDZcIikge1xuICAgICAgICAgIGNvbnN0IG1hcmtDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIG1hcmtDb2wuY2xhc3NMaXN0LmFkZChcIm1hcmtfY29sXCIpO1xuICAgICAgICAgIG1hcmtDb2wudGV4dENvbnRlbnQgPSBcIkZcIjtcbiAgICAgICAgICBuZXdDZWxsLmFwcGVuZChtYXJrQ29sKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3Q2VsbC5jbGFzc0xpc3RbMF0gPT09IFwiMSw3XCIpIHtcbiAgICAgICAgICBjb25zdCBtYXJrQ29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBtYXJrQ29sLmNsYXNzTGlzdC5hZGQoXCJtYXJrX2NvbFwiKTtcbiAgICAgICAgICBtYXJrQ29sLnRleHRDb250ZW50ID0gXCJHXCI7XG4gICAgICAgICAgbmV3Q2VsbC5hcHBlbmQobWFya0NvbCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld0NlbGwuY2xhc3NMaXN0WzBdID09PSBcIjEsOFwiKSB7XG4gICAgICAgICAgY29uc3QgbWFya0NvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgbWFya0NvbC5jbGFzc0xpc3QuYWRkKFwibWFya19jb2xcIik7XG4gICAgICAgICAgbWFya0NvbC50ZXh0Q29udGVudCA9IFwiSFwiO1xuICAgICAgICAgIG5ld0NlbGwuYXBwZW5kKG1hcmtDb2wpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdDZWxsLmNsYXNzTGlzdFswXSA9PT0gXCIxLDlcIikge1xuICAgICAgICAgIGNvbnN0IG1hcmtDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIG1hcmtDb2wuY2xhc3NMaXN0LmFkZChcIm1hcmtfY29sXCIpO1xuICAgICAgICAgIG1hcmtDb2wudGV4dENvbnRlbnQgPSBcIklcIjtcbiAgICAgICAgICBuZXdDZWxsLmFwcGVuZChtYXJrQ29sKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3Q2VsbC5jbGFzc0xpc3RbMF0gPT09IFwiMSwxMFwiKSB7XG4gICAgICAgICAgY29uc3QgbWFya0NvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgbWFya0NvbC5jbGFzc0xpc3QuYWRkKFwibWFya19jb2xcIik7XG4gICAgICAgICAgbWFya0NvbC50ZXh0Q29udGVudCA9IFwiSlwiO1xuICAgICAgICAgIG5ld0NlbGwuYXBwZW5kKG1hcmtDb2wpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdDZWxsLmNsYXNzTGlzdFswXSA9PT0gXCIyLDFcIikge1xuICAgICAgICAgIGNvbnN0IG1hcmtSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIG1hcmtSb3cuY2xhc3NMaXN0LmFkZChcIm1hcmtfcm93XCIpO1xuICAgICAgICAgIG1hcmtSb3cudGV4dENvbnRlbnQgPSBcIjJcIjtcbiAgICAgICAgICBuZXdDZWxsLmFwcGVuZChtYXJrUm93KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3Q2VsbC5jbGFzc0xpc3RbMF0gPT09IFwiMywxXCIpIHtcbiAgICAgICAgICBjb25zdCBtYXJrUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBtYXJrUm93LmNsYXNzTGlzdC5hZGQoXCJtYXJrX3Jvd1wiKTtcbiAgICAgICAgICBtYXJrUm93LnRleHRDb250ZW50ID0gXCIzXCI7XG4gICAgICAgICAgbmV3Q2VsbC5hcHBlbmQobWFya1Jvdyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld0NlbGwuY2xhc3NMaXN0WzBdID09PSBcIjQsMVwiKSB7XG4gICAgICAgICAgY29uc3QgbWFya1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgbWFya1Jvdy5jbGFzc0xpc3QuYWRkKFwibWFya19yb3dcIik7XG4gICAgICAgICAgbWFya1Jvdy50ZXh0Q29udGVudCA9IFwiNFwiO1xuICAgICAgICAgIG5ld0NlbGwuYXBwZW5kKG1hcmtSb3cpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdDZWxsLmNsYXNzTGlzdFswXSA9PT0gXCI1LDFcIikge1xuICAgICAgICAgIGNvbnN0IG1hcmtSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIG1hcmtSb3cuY2xhc3NMaXN0LmFkZChcIm1hcmtfcm93XCIpO1xuICAgICAgICAgIG1hcmtSb3cudGV4dENvbnRlbnQgPSBcIjVcIjtcbiAgICAgICAgICBuZXdDZWxsLmFwcGVuZChtYXJrUm93KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3Q2VsbC5jbGFzc0xpc3RbMF0gPT09IFwiNiwxXCIpIHtcbiAgICAgICAgICBjb25zdCBtYXJrUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBtYXJrUm93LmNsYXNzTGlzdC5hZGQoXCJtYXJrX3Jvd1wiKTtcbiAgICAgICAgICBtYXJrUm93LnRleHRDb250ZW50ID0gXCI2XCI7XG4gICAgICAgICAgbmV3Q2VsbC5hcHBlbmQobWFya1Jvdyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld0NlbGwuY2xhc3NMaXN0WzBdID09PSBcIjcsMVwiKSB7XG4gICAgICAgICAgY29uc3QgbWFya1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgbWFya1Jvdy5jbGFzc0xpc3QuYWRkKFwibWFya19yb3dcIik7XG4gICAgICAgICAgbWFya1Jvdy50ZXh0Q29udGVudCA9IFwiN1wiO1xuICAgICAgICAgIG5ld0NlbGwuYXBwZW5kKG1hcmtSb3cpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdDZWxsLmNsYXNzTGlzdFswXSA9PT0gXCI4LDFcIikge1xuICAgICAgICAgIGNvbnN0IG1hcmtSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIG1hcmtSb3cuY2xhc3NMaXN0LmFkZChcIm1hcmtfcm93XCIpO1xuICAgICAgICAgIG1hcmtSb3cudGV4dENvbnRlbnQgPSBcIjhcIjtcbiAgICAgICAgICBuZXdDZWxsLmFwcGVuZChtYXJrUm93KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3Q2VsbC5jbGFzc0xpc3RbMF0gPT09IFwiOSwxXCIpIHtcbiAgICAgICAgICBjb25zdCBtYXJrUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBtYXJrUm93LmNsYXNzTGlzdC5hZGQoXCJtYXJrX3Jvd1wiKTtcbiAgICAgICAgICBtYXJrUm93LnRleHRDb250ZW50ID0gXCI5XCI7XG4gICAgICAgICAgbmV3Q2VsbC5hcHBlbmQobWFya1Jvdyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld0NlbGwuY2xhc3NMaXN0WzBdID09PSBcIjEwLDFcIikge1xuICAgICAgICAgIGNvbnN0IG1hcmtSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIG1hcmtSb3cuY2xhc3NMaXN0LmFkZChcIm1hcmtfcm93XCIpO1xuICAgICAgICAgIG1hcmtSb3cudGV4dENvbnRlbnQgPSBcIjEwXCI7XG4gICAgICAgICAgbmV3Q2VsbC5hcHBlbmQobWFya1Jvdyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIERPTUhhbmRsZXIucGxheWVyVHdvQm9hcmQuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgbmV3Q2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBuZXdDZWxsLmNsYXNzTGlzdC5hZGQoZWxlbWVudC5jb29yZGluYXRlcyk7XG4gICAgICBuZXdDZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xuICAgICAgcGxheWVyVHdvQm9hcmREaXYuYXBwZW5kKG5ld0NlbGwpO1xuICAgICAgaWYgKG5ld0NlbGwuY2xhc3NMaXN0WzBdID09PSBcIjEsMVwiKSB7XG4gICAgICAgIGNvbnN0IG1hcmtDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBtYXJrQ29sLmNsYXNzTGlzdC5hZGQoXCJtYXJrX2NvbFwiKTtcbiAgICAgICAgbWFya0NvbC50ZXh0Q29udGVudCA9IFwiQVwiO1xuICAgICAgICBuZXdDZWxsLmFwcGVuZChtYXJrQ29sKTtcbiAgICAgICAgY29uc3QgbWFya1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1hcmtSb3cuY2xhc3NMaXN0LmFkZChcIm1hcmtfcm93XCIpO1xuICAgICAgICBtYXJrUm93LnRleHRDb250ZW50ID0gXCIxXCI7XG4gICAgICAgIG5ld0NlbGwuYXBwZW5kKG1hcmtSb3cpO1xuICAgICAgfVxuICAgICAgaWYgKG5ld0NlbGwuY2xhc3NMaXN0WzBdID09PSBcIjEsMlwiKSB7XG4gICAgICAgIGNvbnN0IG1hcmtDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBtYXJrQ29sLmNsYXNzTGlzdC5hZGQoXCJtYXJrX2NvbFwiKTtcbiAgICAgICAgbWFya0NvbC50ZXh0Q29udGVudCA9IFwiQlwiO1xuICAgICAgICBuZXdDZWxsLmFwcGVuZChtYXJrQ29sKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXdDZWxsLmNsYXNzTGlzdFswXSA9PT0gXCIxLDNcIikge1xuICAgICAgICBjb25zdCBtYXJrQ29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWFya0NvbC5jbGFzc0xpc3QuYWRkKFwibWFya19jb2xcIik7XG4gICAgICAgIG1hcmtDb2wudGV4dENvbnRlbnQgPSBcIkNcIjtcbiAgICAgICAgbmV3Q2VsbC5hcHBlbmQobWFya0NvbCk7XG4gICAgICB9XG4gICAgICBpZiAobmV3Q2VsbC5jbGFzc0xpc3RbMF0gPT09IFwiMSw0XCIpIHtcbiAgICAgICAgY29uc3QgbWFya0NvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1hcmtDb2wuY2xhc3NMaXN0LmFkZChcIm1hcmtfY29sXCIpO1xuICAgICAgICBtYXJrQ29sLnRleHRDb250ZW50ID0gXCJEXCI7XG4gICAgICAgIG5ld0NlbGwuYXBwZW5kKG1hcmtDb2wpO1xuICAgICAgfVxuICAgICAgaWYgKG5ld0NlbGwuY2xhc3NMaXN0WzBdID09PSBcIjEsNVwiKSB7XG4gICAgICAgIGNvbnN0IG1hcmtDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBtYXJrQ29sLmNsYXNzTGlzdC5hZGQoXCJtYXJrX2NvbFwiKTtcbiAgICAgICAgbWFya0NvbC50ZXh0Q29udGVudCA9IFwiRVwiO1xuICAgICAgICBuZXdDZWxsLmFwcGVuZChtYXJrQ29sKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXdDZWxsLmNsYXNzTGlzdFswXSA9PT0gXCIxLDZcIikge1xuICAgICAgICBjb25zdCBtYXJrQ29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWFya0NvbC5jbGFzc0xpc3QuYWRkKFwibWFya19jb2xcIik7XG4gICAgICAgIG1hcmtDb2wudGV4dENvbnRlbnQgPSBcIkZcIjtcbiAgICAgICAgbmV3Q2VsbC5hcHBlbmQobWFya0NvbCk7XG4gICAgICB9XG4gICAgICBpZiAobmV3Q2VsbC5jbGFzc0xpc3RbMF0gPT09IFwiMSw3XCIpIHtcbiAgICAgICAgY29uc3QgbWFya0NvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1hcmtDb2wuY2xhc3NMaXN0LmFkZChcIm1hcmtfY29sXCIpO1xuICAgICAgICBtYXJrQ29sLnRleHRDb250ZW50ID0gXCJHXCI7XG4gICAgICAgIG5ld0NlbGwuYXBwZW5kKG1hcmtDb2wpO1xuICAgICAgfVxuICAgICAgaWYgKG5ld0NlbGwuY2xhc3NMaXN0WzBdID09PSBcIjEsOFwiKSB7XG4gICAgICAgIGNvbnN0IG1hcmtDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBtYXJrQ29sLmNsYXNzTGlzdC5hZGQoXCJtYXJrX2NvbFwiKTtcbiAgICAgICAgbWFya0NvbC50ZXh0Q29udGVudCA9IFwiSFwiO1xuICAgICAgICBuZXdDZWxsLmFwcGVuZChtYXJrQ29sKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXdDZWxsLmNsYXNzTGlzdFswXSA9PT0gXCIxLDlcIikge1xuICAgICAgICBjb25zdCBtYXJrQ29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWFya0NvbC5jbGFzc0xpc3QuYWRkKFwibWFya19jb2xcIik7XG4gICAgICAgIG1hcmtDb2wudGV4dENvbnRlbnQgPSBcIklcIjtcbiAgICAgICAgbmV3Q2VsbC5hcHBlbmQobWFya0NvbCk7XG4gICAgICB9XG4gICAgICBpZiAobmV3Q2VsbC5jbGFzc0xpc3RbMF0gPT09IFwiMSwxMFwiKSB7XG4gICAgICAgIGNvbnN0IG1hcmtDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBtYXJrQ29sLmNsYXNzTGlzdC5hZGQoXCJtYXJrX2NvbFwiKTtcbiAgICAgICAgbWFya0NvbC50ZXh0Q29udGVudCA9IFwiSlwiO1xuICAgICAgICBuZXdDZWxsLmFwcGVuZChtYXJrQ29sKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXdDZWxsLmNsYXNzTGlzdFswXSA9PT0gXCIyLDFcIikge1xuICAgICAgICBjb25zdCBtYXJrUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWFya1Jvdy5jbGFzc0xpc3QuYWRkKFwibWFya19yb3dcIik7XG4gICAgICAgIG1hcmtSb3cudGV4dENvbnRlbnQgPSBcIjJcIjtcbiAgICAgICAgbmV3Q2VsbC5hcHBlbmQobWFya1Jvdyk7XG4gICAgICB9XG4gICAgICBpZiAobmV3Q2VsbC5jbGFzc0xpc3RbMF0gPT09IFwiMywxXCIpIHtcbiAgICAgICAgY29uc3QgbWFya1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1hcmtSb3cuY2xhc3NMaXN0LmFkZChcIm1hcmtfcm93XCIpO1xuICAgICAgICBtYXJrUm93LnRleHRDb250ZW50ID0gXCIzXCI7XG4gICAgICAgIG5ld0NlbGwuYXBwZW5kKG1hcmtSb3cpO1xuICAgICAgfVxuICAgICAgaWYgKG5ld0NlbGwuY2xhc3NMaXN0WzBdID09PSBcIjQsMVwiKSB7XG4gICAgICAgIGNvbnN0IG1hcmtSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBtYXJrUm93LmNsYXNzTGlzdC5hZGQoXCJtYXJrX3Jvd1wiKTtcbiAgICAgICAgbWFya1Jvdy50ZXh0Q29udGVudCA9IFwiNFwiO1xuICAgICAgICBuZXdDZWxsLmFwcGVuZChtYXJrUm93KTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXdDZWxsLmNsYXNzTGlzdFswXSA9PT0gXCI1LDFcIikge1xuICAgICAgICBjb25zdCBtYXJrUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWFya1Jvdy5jbGFzc0xpc3QuYWRkKFwibWFya19yb3dcIik7XG4gICAgICAgIG1hcmtSb3cudGV4dENvbnRlbnQgPSBcIjVcIjtcbiAgICAgICAgbmV3Q2VsbC5hcHBlbmQobWFya1Jvdyk7XG4gICAgICB9XG4gICAgICBpZiAobmV3Q2VsbC5jbGFzc0xpc3RbMF0gPT09IFwiNiwxXCIpIHtcbiAgICAgICAgY29uc3QgbWFya1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1hcmtSb3cuY2xhc3NMaXN0LmFkZChcIm1hcmtfcm93XCIpO1xuICAgICAgICBtYXJrUm93LnRleHRDb250ZW50ID0gXCI2XCI7XG4gICAgICAgIG5ld0NlbGwuYXBwZW5kKG1hcmtSb3cpO1xuICAgICAgfVxuICAgICAgaWYgKG5ld0NlbGwuY2xhc3NMaXN0WzBdID09PSBcIjcsMVwiKSB7XG4gICAgICAgIGNvbnN0IG1hcmtSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBtYXJrUm93LmNsYXNzTGlzdC5hZGQoXCJtYXJrX3Jvd1wiKTtcbiAgICAgICAgbWFya1Jvdy50ZXh0Q29udGVudCA9IFwiN1wiO1xuICAgICAgICBuZXdDZWxsLmFwcGVuZChtYXJrUm93KTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXdDZWxsLmNsYXNzTGlzdFswXSA9PT0gXCI4LDFcIikge1xuICAgICAgICBjb25zdCBtYXJrUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWFya1Jvdy5jbGFzc0xpc3QuYWRkKFwibWFya19yb3dcIik7XG4gICAgICAgIG1hcmtSb3cudGV4dENvbnRlbnQgPSBcIjhcIjtcbiAgICAgICAgbmV3Q2VsbC5hcHBlbmQobWFya1Jvdyk7XG4gICAgICB9XG4gICAgICBpZiAobmV3Q2VsbC5jbGFzc0xpc3RbMF0gPT09IFwiMiwxXCIpIHtcbiAgICAgICAgY29uc3QgbWFya1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1hcmtSb3cuY2xhc3NMaXN0LmFkZChcIm1hcmtfcm93XCIpO1xuICAgICAgICBtYXJrUm93LnRleHRDb250ZW50ID0gXCIyXCI7XG4gICAgICAgIG5ld0NlbGwuYXBwZW5kKG1hcmtSb3cpO1xuICAgICAgfVxuICAgICAgaWYgKG5ld0NlbGwuY2xhc3NMaXN0WzBdID09PSBcIjksMVwiKSB7XG4gICAgICAgIGNvbnN0IG1hcmtSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBtYXJrUm93LmNsYXNzTGlzdC5hZGQoXCJtYXJrX3Jvd1wiKTtcbiAgICAgICAgbWFya1Jvdy50ZXh0Q29udGVudCA9IFwiOVwiO1xuICAgICAgICBuZXdDZWxsLmFwcGVuZChtYXJrUm93KTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXdDZWxsLmNsYXNzTGlzdFswXSA9PT0gXCIxMCwxXCIpIHtcbiAgICAgICAgY29uc3QgbWFya1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1hcmtSb3cuY2xhc3NMaXN0LmFkZChcIm1hcmtfcm93XCIpO1xuICAgICAgICBtYXJrUm93LnRleHRDb250ZW50ID0gXCIxMFwiO1xuICAgICAgICBuZXdDZWxsLmFwcGVuZChtYXJrUm93KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbmREaXZCeUNvb3JkaW5hdGVzKGNvb3JkaW5hdGVzLCBwYXJlbnREaXYpIHtcbiAgICBjb25zdCBkaXYgPSBwYXJlbnREaXYucXVlcnlTZWxlY3RvcihgW2NsYXNzKj1cIiR7Y29vcmRpbmF0ZXN9XCJdLmNlbGxgKTtcbiAgICByZXR1cm4gZGl2O1xuICB9XG5cbiAgZnVuY3Rpb24gZHJhd1NoaXBzKCkge1xuICAgIGNvbnN0IHBhcmVudERpdkJvYXJkT25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXJPbmUtYm9hcmRcIik7XG4gICAgRE9NSGFuZGxlci5wbGF5ZXJPbmVTaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBjb25zdCBkaXYgPSBmaW5kRGl2QnlDb29yZGluYXRlcyhcbiAgICAgICAgYCR7c2hpcC5jb29yZGluYXRlc1swXVswXX0sJHtzaGlwLmNvb3JkaW5hdGVzWzBdWzFdfWAsXG4gICAgICAgIHBhcmVudERpdkJvYXJkT25lLFxuICAgICAgKTtcblxuICAgICAgY29uc3Qgc2hpcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBzaGlwRGl2LmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgICAgc2hpcERpdi5jbGFzc0xpc3QuYWRkKFwiZHJhZ2dhYmxlXCIpO1xuICAgICAgLy8gc2hpcERpdi5zZXRBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIiwgdHJ1ZSk7XG4gICAgICAvLyBzaGlwRGl2LnNldEF0dHJpYnV0ZShcImRyYWdnYWJsZVwiLCB0cnVlKTtcblxuICAgICAgaWYgKHNoaXAucG9zaXRpb24gPT09IFwiaFwiKSB7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gNDAgKiBzaGlwLmxlbmd0aDtcbiAgICAgICAgc2hpcERpdi5zdHlsZS53aWR0aCA9IGAke3dpZHRofXB4YDtcbiAgICAgICAgc2hpcERpdi5zdHlsZS5oZWlnaHQgPSBcIjQwcHhcIjtcbiAgICAgIH1cbiAgICAgIGlmIChzaGlwLnBvc2l0aW9uID09PSBcInZcIikge1xuICAgICAgICBjb25zdCBoZWlnaHQgPSA0MCAqIHNoaXAubGVuZ3RoO1xuICAgICAgICBzaGlwRGl2LnN0eWxlLmhlaWdodCA9IGAke2hlaWdodH1weGA7XG4gICAgICAgIHNoaXBEaXYuc3R5bGUud2lkdGggPSBcIjQwcHhcIjtcbiAgICAgIH1cbiAgICAgIGRpdi5hcHBlbmQoc2hpcERpdik7XG5cbiAgICAgIHNoaXAuY29vcmRpbmF0ZXMuZm9yRWFjaCgoYykgPT4ge1xuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBgJHtjWzBdfSwke2NbMV19YDtcbiAgICAgICAgY29uc3Qgc2hpcENlbGxzID0gQXJyYXkuZnJvbShcbiAgICAgICAgICBwYXJlbnREaXZCb2FyZE9uZS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImRpdlwiKSxcbiAgICAgICAgKS5maWx0ZXIoKGVsZW0pID0+IGVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkpO1xuICAgICAgICBzaGlwQ2VsbHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgIC8vIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInNoaXAtY2VsbFwiKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIERPTUhhbmRsZXIucGxheWVyVHdvU2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgc2hpcC5jb29yZGluYXRlcy5mb3JFYWNoKChjKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmVudERpdkJvYXJkVHdvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXJUd28tYm9hcmRcIik7XG4gICAgICAgIGNvbnN0IGRpdiA9IGZpbmREaXZCeUNvb3JkaW5hdGVzKGAke2NbMF19LCR7Y1sxXX1gLCBwYXJlbnREaXZCb2FyZFR3byk7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwic2hpcC1jZWxsXCIpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVEb20oKSB7XG4gICAgY3JlYXRlUGFnZUxheW91dChib2R5LCBzdGF0aWNMYXlvdXRFbGVtZW50cyk7XG4gICAgY3JlYXRlQm9hcmRDZWxscygpO1xuICAgIGRyYXdTaGlwcygpO1xuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHBsYXllck9uZUJvYXJkLFxuICAgIHBsYXllclR3b0JvYXJkLFxuICAgIHBsYXllck9uZVNoaXBzLFxuICAgIHBsYXllclR3b1NoaXBzLFxuICAgIGNyZWF0ZURvbSxcbiAgICBmaW5kRGl2QnlDb29yZGluYXRlcyxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IERPTUhhbmRsZXI7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtY2xhc3Nlcy1wZXItZmlsZSAqL1xuXG5jbGFzcyBWZXJ0ZXgge1xuICBjb25zdHJ1Y3Rvcihjb29yZGluYXRlcykge1xuICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcbiAgICB0aGlzLmFkamFjZW5jeUxpc3QgPSBbXTtcbiAgICB0aGlzLm9jY3VwaWVkID0gZmFsc2U7XG4gICAgdGhpcy5vY2N1cGllZEJ5U2hpcCA9IGZhbHNlO1xuICB9XG5cbiAgYWRkTmVpZ2hib3IodmVydGV4KSB7XG4gICAgaWYgKCF0aGlzLmFkamFjZW5jeUxpc3QuaW5jbHVkZXModmVydGV4KSkge1xuICAgICAgdGhpcy5hZGphY2VuY3lMaXN0LnB1c2godmVydGV4KTtcbiAgICB9XG4gIH1cbn1cblxuY2xhc3MgR3JhcGgge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnZlcnRpY2VzID0gW107XG4gIH1cblxuICBhZGRWZXJ0ZXgoeCwgeSkge1xuICAgIGNvbnN0IHZlcnRleCA9IG5ldyBWZXJ0ZXgoW3gsIHldKTtcbiAgICB0aGlzLnZlcnRpY2VzLnB1c2godmVydGV4KTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzXG4gIGFkZEVkZ2UodmVydGV4MSwgdmVydGV4Mikge1xuICAgIHZlcnRleDEuYWRkTmVpZ2hib3IodmVydGV4Mik7XG4gICAgdmVydGV4Mi5hZGROZWlnaGJvcih2ZXJ0ZXgxKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHcmFwaDtcbiIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tY3ljbGVcbmltcG9ydCBnYW1lTG9vcCBmcm9tIFwiLlwiO1xuaW1wb3J0IHsgcGxheWVyT25lQm9hcmQgfSBmcm9tIFwiLlwiO1xuaW1wb3J0IERPTUhhbmRsZXIgZnJvbSBcIi4vRE9NSGFuZGxlclwiO1xuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgY29uc3QgcmFuZG9taXplQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yYW5kb21pemVcIik7XG4gIHJhbmRvbWl6ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGdhbWVMb29wKCk7XG4gIH0pO1xuXG4gIGxldCBkcmFnZ2FibGVFbGVtZW50ID0gbnVsbDtcbiAgbGV0IGRyYWdnYWJsZUVsZW1lbnRSZWN0ID0gbnVsbDtcblxuICBsZXQgaXNEcmFnZ2luZyA9IGZhbHNlO1xuICBsZXQgb2ZmU2V0WDtcbiAgbGV0IG9mZlNldFk7XG4gIGxldCBtb3VzZURvd25PZmZzZXRIb3IgPSAwO1xuICBsZXQgbW91c2VEb3duT2Zmc2V0VmVyID0gMDtcbiAgbGV0IG9yaWdpbmFsRWxlbWVudEJlbG93ID0gbnVsbDtcbiAgbGV0IGVsZW1lbnRCZWxvdyA9IG51bGw7XG5cbiAgLy8gTW91c2UgZG93blxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnRzRnJvbVBvaW50ID0gZG9jdW1lbnQuZWxlbWVudHNGcm9tUG9pbnQoXG4gICAgICBldmVudC5jbGllbnRYLFxuICAgICAgZXZlbnQuY2xpZW50WSxcbiAgICApO1xuXG4gICAgZWxlbWVudHNGcm9tUG9pbnQuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoXCJkcmFnZ2FibGVcIikpIHtcbiAgICAgICAgZHJhZ2dhYmxlRWxlbWVudCA9IGVsO1xuICAgICAgICBkcmFnZ2FibGVFbGVtZW50UmVjdCA9IGRyYWdnYWJsZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoZHJhZ2dhYmxlRWxlbWVudCkge1xuICAgICAgaXNEcmFnZ2luZyA9IHRydWU7XG4gICAgICBkcmFnZ2FibGVFbGVtZW50LnN0eWxlLmxlZnQgPSAwO1xuICAgICAgZHJhZ2dhYmxlRWxlbWVudC5zdHlsZS50b3AgPSAwO1xuICAgICAgZHJhZ2dhYmxlRWxlbWVudC5zdHlsZS56SW5kZXggPSAwO1xuICAgICAgb2ZmU2V0WCA9IGV2ZW50LmNsaWVudFg7XG4gICAgICBvZmZTZXRZID0gZXZlbnQuY2xpZW50WTtcblxuICAgICAgZHJhZ2dhYmxlRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZHJhZ2dpbmdcIik7XG5cbiAgICAgIGNvbnN0IHBhcmVudFJlY3QgPSBkcmFnZ2FibGVFbGVtZW50LnBhcmVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgIGNvbnN0IGNlbGxzID0gW107XG4gICAgICBjb25zdCBjZWxsc1ZlcnRpY2VzID0gW107XG4gICAgICBjb25zdCBjZWxsc1ZlcnRpY2VzQWRqYWNlbnQgPSBbXTtcbiAgICAgIGNvbnN0IGZpcnN0Q2VsbCA9IGRyYWdnYWJsZUVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgIGxldCBzZWNvbmRDZWxsO1xuICAgICAgbGV0IHRoaXJkQ2VsbDtcbiAgICAgIGxldCBmb3VydGhDZWxsO1xuXG4gICAgICBjZWxscy5wdXNoKGZpcnN0Q2VsbCk7XG4gICAgICBpZiAob2ZmU2V0WCA+IHBhcmVudFJlY3QueCArIDEyMCkge1xuICAgICAgICBtb3VzZURvd25PZmZzZXRIb3IgPSAxMjA7XG4gICAgICB9IGVsc2UgaWYgKG9mZlNldFggPiBwYXJlbnRSZWN0LnggKyA4MCkge1xuICAgICAgICBtb3VzZURvd25PZmZzZXRIb3IgPSA4MDtcbiAgICAgIH0gZWxzZSBpZiAob2ZmU2V0WCA+IHBhcmVudFJlY3QueCArIDQwKSB7XG4gICAgICAgIG1vdXNlRG93bk9mZnNldEhvciA9IDQwO1xuICAgICAgfSBlbHNlIGlmIChvZmZTZXRZID4gcGFyZW50UmVjdC55ICsgMTIwKSB7XG4gICAgICAgIG1vdXNlRG93bk9mZnNldFZlciA9IDEyMDtcbiAgICAgIH0gZWxzZSBpZiAob2ZmU2V0WSA+IHBhcmVudFJlY3QueSArIDgwKSB7XG4gICAgICAgIG1vdXNlRG93bk9mZnNldFZlciA9IDgwO1xuICAgICAgfSBlbHNlIGlmIChvZmZTZXRZID4gcGFyZW50UmVjdC55ICsgNDApIHtcbiAgICAgICAgbW91c2VEb3duT2Zmc2V0VmVyID0gNDA7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHdpZHRoIG9mIGRyYWdnYWJsZSBlcXVhbCBvciBncmVhdGVyIHRoYW4gODAsIGdyYWIgMm5kIGVsZW1lbnQgYW5kIHB1dCBpdCBpbiB0aGUgY2VsbHMgbGlzdFxuICAgICAgaWYgKGRyYWdnYWJsZUVsZW1lbnRSZWN0LndpZHRoID49IDgwKSB7XG4gICAgICAgIGNvbnN0IGNlbGxFbGVtZW50cyA9IGRvY3VtZW50LmVsZW1lbnRzRnJvbVBvaW50KFxuICAgICAgICAgIGV2ZW50LmNsaWVudFggLSBtb3VzZURvd25PZmZzZXRIb3IgKyA0MCxcbiAgICAgICAgICBldmVudC5jbGllbnRZIC0gbW91c2VEb3duT2Zmc2V0VmVyLFxuICAgICAgICApO1xuICAgICAgICBjZWxsRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImNlbGxcIikpIHtcbiAgICAgICAgICAgIHNlY29uZENlbGwgPSBlbGVtZW50O1xuICAgICAgICAgICAgY2VsbHMucHVzaChzZWNvbmRDZWxsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiB3aWR0aCBvZiBkcmFnZ2FibGUgZXF1YWwgb3IgZ3JlYXRlciB0aGFuIDEyMCwgZ3JhYiAzcmQgZWxlbWVudCBhbmQgcHV0IGl0IGluIHRoZSBjZWxscyBsaXN0XG4gICAgICBpZiAoZHJhZ2dhYmxlRWxlbWVudFJlY3Qud2lkdGggPj0gMTIwKSB7XG4gICAgICAgIGNvbnN0IGNlbGxFbGVtZW50cyA9IGRvY3VtZW50LmVsZW1lbnRzRnJvbVBvaW50KFxuICAgICAgICAgIGV2ZW50LmNsaWVudFggLSBtb3VzZURvd25PZmZzZXRIb3IgKyA4MCxcbiAgICAgICAgICBldmVudC5jbGllbnRZIC0gbW91c2VEb3duT2Zmc2V0VmVyLFxuICAgICAgICApO1xuICAgICAgICBjZWxsRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImNlbGxcIikpIHtcbiAgICAgICAgICAgIHRoaXJkQ2VsbCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICBjZWxscy5wdXNoKHRoaXJkQ2VsbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgd2lkdGggb2YgZHJhZ2dhYmxlIGVxdWFsIG9yIGdyZWF0ZXIgdGhhbiAxNjAsIGdyYWIgNHRoIGVsZW1lbnQgYW5kIHB1dCBpdCBpbiB0aGUgY2VsbHMgbGlzdFxuICAgICAgaWYgKGRyYWdnYWJsZUVsZW1lbnRSZWN0LndpZHRoID49IDE2MCkge1xuICAgICAgICBjb25zdCBjZWxsRWxlbWVudHMgPSBkb2N1bWVudC5lbGVtZW50c0Zyb21Qb2ludChcbiAgICAgICAgICBldmVudC5jbGllbnRYIC0gbW91c2VEb3duT2Zmc2V0SG9yICsgMTIwLFxuICAgICAgICAgIGV2ZW50LmNsaWVudFkgLSBtb3VzZURvd25PZmZzZXRWZXIsXG4gICAgICAgICk7XG4gICAgICAgIGNlbGxFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2VsbFwiKSkge1xuICAgICAgICAgICAgZm91cnRoQ2VsbCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICBjZWxscy5wdXNoKGZvdXJ0aENlbGwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIGhlaWdodCBvZiBkcmFnZ2FibGUgZXF1YWwgb3IgZ3JlYXRlciB0aGFuIDgwLCBncmFiIDJuZCBlbGVtZW50IGFuZCBwdXQgaXQgaW4gdGhlIGNlbGxzIGxpc3RcbiAgICAgIGlmIChkcmFnZ2FibGVFbGVtZW50UmVjdC5oZWlnaHQgPj0gODApIHtcbiAgICAgICAgY29uc3QgY2VsbEVsZW1lbnRzID0gZG9jdW1lbnQuZWxlbWVudHNGcm9tUG9pbnQoXG4gICAgICAgICAgZXZlbnQuY2xpZW50WCAtIG1vdXNlRG93bk9mZnNldEhvcixcbiAgICAgICAgICBldmVudC5jbGllbnRZIC0gbW91c2VEb3duT2Zmc2V0VmVyICsgNDAsXG4gICAgICAgICk7XG4gICAgICAgIGNlbGxFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2VsbFwiKSkge1xuICAgICAgICAgICAgc2Vjb25kQ2VsbCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICBjZWxscy5wdXNoKHNlY29uZENlbGwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIGhlaWdodCBvZiBkcmFnZ2FibGUgZXF1YWwgb3IgZ3JlYXRlciB0aGFuIDEyMCwgZ3JhYiAzcmQgZWxlbWVudCBhbmQgcHV0IGl0IGluIHRoZSBjZWxscyBsaXN0XG4gICAgICBpZiAoZHJhZ2dhYmxlRWxlbWVudFJlY3QuaGVpZ2h0ID49IDEyMCkge1xuICAgICAgICBjb25zdCBjZWxsRWxlbWVudHMgPSBkb2N1bWVudC5lbGVtZW50c0Zyb21Qb2ludChcbiAgICAgICAgICBldmVudC5jbGllbnRYIC0gbW91c2VEb3duT2Zmc2V0SG9yLFxuICAgICAgICAgIGV2ZW50LmNsaWVudFkgLSBtb3VzZURvd25PZmZzZXRWZXIgKyA4MCxcbiAgICAgICAgKTtcbiAgICAgICAgY2VsbEVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJjZWxsXCIpKSB7XG4gICAgICAgICAgICB0aGlyZENlbGwgPSBlbGVtZW50O1xuICAgICAgICAgICAgY2VsbHMucHVzaCh0aGlyZENlbGwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIGhlaWdodCBvZiBkcmFnZ2FibGUgZXF1YWwgb3IgZ3JlYXRlciB0aGFuIDE2MCwgZ3JhYiA0dGggZWxlbWVudCBhbmQgcHV0IGl0IGluIHRoZSBjZWxscyBsaXN0XG4gICAgICBpZiAoZHJhZ2dhYmxlRWxlbWVudFJlY3QuaGVpZ2h0ID49IDE2MCkge1xuICAgICAgICBjb25zdCBjZWxsRWxlbWVudHMgPSBkb2N1bWVudC5lbGVtZW50c0Zyb21Qb2ludChcbiAgICAgICAgICBldmVudC5jbGllbnRYIC0gbW91c2VEb3duT2Zmc2V0SG9yLFxuICAgICAgICAgIGV2ZW50LmNsaWVudFkgLSBtb3VzZURvd25PZmZzZXRWZXIgKyAxMjAsXG4gICAgICAgICk7XG4gICAgICAgIGNlbGxFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2VsbFwiKSkge1xuICAgICAgICAgICAgZm91cnRoQ2VsbCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICBjZWxscy5wdXNoKGZvdXJ0aENlbGwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIENoYW5nZSB0aGUgZHJvcHBhYmxlIGF0dHJpYnV0ZSBvZiBlYWNoIGNlbGwgdG8gdHJ1ZVxuICAgICAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZShcImRyb3BwYWJsZVwiLCB0cnVlKTtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gY2VsbC5jbGFzc0xpc3RbMF07XG4gICAgICAgIGNvbnN0IGFycmF5ID0gY2xhc3NOYW1lLnNwbGl0KFwiLFwiKS5tYXAoTnVtYmVyKTtcbiAgICAgICAgY29uc3QgdmVydGV4ID0gcGxheWVyT25lQm9hcmQuZmluZFZlcnRleHRPYmplY3RCeUNvb3JkaW5hdGVzKGFycmF5KTtcbiAgICAgICAgY2VsbHNWZXJ0aWNlcy5wdXNoKHZlcnRleCk7XG4gICAgICB9KTtcblxuICAgICAgLy8gQ2hhbmdlIHRoZSBkcm9wcGFibGUgYXR0cmlidXRlIG9mIGVhY2ggY2VsbCdzIGFkamFjZW50IGNlbGwgdG8gdHJ1ZSAoZXhjZXB0IHRob3NlIG9jY3VwaWVkIG9yIG5laWdoYm9yZWQgdG8gc2hpcHMpXG4gICAgICBjZWxsc1ZlcnRpY2VzLmZvckVhY2goKGNlbGxWZXJ0ZXgpID0+IHtcbiAgICAgICAgY2VsbFZlcnRleC5vY2N1cGllZEJ5U2hpcCA9IGZhbHNlO1xuICAgICAgICBjZWxsVmVydGV4Lm9jY3VwaWVkID0gZmFsc2U7XG4gICAgICAgIGNlbGxWZXJ0ZXguYWRqYWNlbmN5TGlzdC5mb3JFYWNoKChhZGphY2VuY3kpID0+IHtcbiAgICAgICAgICBpZiAoIWNlbGxzVmVydGljZXMuaW5jbHVkZXMoYWRqYWNlbmN5KSkge1xuICAgICAgICAgICAgYWRqYWNlbmN5Lm9jY3VwaWVkID0gZmFsc2U7XG4gICAgICAgICAgICBhZGphY2VuY3kuYWRqYWNlbmN5TGlzdC5mb3JFYWNoKChhZGopID0+IHtcbiAgICAgICAgICAgICAgaWYgKCFjZWxsc1ZlcnRpY2VzLmluY2x1ZGVzKGFkaikpIHtcbiAgICAgICAgICAgICAgICBpZiAoYWRqLm9jY3VwaWVkQnlTaGlwKSB7XG4gICAgICAgICAgICAgICAgICBhZGphY2VuY3kub2NjdXBpZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIGFkamFjZW5jeS5vY2N1cGllZCA9PT0gZmFsc2UgJiZcbiAgICAgICAgICAgICAgIWNlbGxzVmVydGljZXNBZGphY2VudC5pbmNsdWRlcyhhZGphY2VuY3kpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgY2VsbHNWZXJ0aWNlc0FkamFjZW50LnB1c2goYWRqYWNlbmN5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIGNlbGxzVmVydGljZXNBZGphY2VudC5mb3JFYWNoKCh2ZXJ0ZXgpID0+IHtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gYCR7dmVydGV4LmNvb3JkaW5hdGVzWzBdfSwke3ZlcnRleC5jb29yZGluYXRlc1sxXX1gO1xuICAgICAgICBjb25zdCBwYXJlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllck9uZS1ib2FyZFwiKTtcbiAgICAgICAgY29uc3QgZGl2ID0gcGFyZW50RGl2LnF1ZXJ5U2VsZWN0b3IoYFtjbGFzcyo9XCIke2NsYXNzTmFtZX1cIl0uY2VsbGApO1xuICAgICAgICBkaXYuc2V0QXR0cmlidXRlKFwiZHJvcHBhYmxlXCIsIHRydWUpO1xuICAgICAgICAvLyBkaXYuY2xhc3NMaXN0LmFkZChcInNoaXAtY2VsbFwiKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyAgIGNvbnNvbGUubG9nKGNlbGxzKTtcbiAgICAgIC8vICAgY29uc29sZS5sb2coY2VsbHNWZXJ0aWNlcyk7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKGNlbGxzVmVydGljZXNBZGphY2VudCk7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKHBsYXllck9uZUJvYXJkKTtcbiAgICAgIGNvbnN0IGVsZW1lbnRzQmVsb3cgPSBkb2N1bWVudC5lbGVtZW50c0Zyb21Qb2ludChcbiAgICAgICAgZXZlbnQuY2xpZW50WCAtIG1vdXNlRG93bk9mZnNldEhvcixcbiAgICAgICAgZXZlbnQuY2xpZW50WSAtIG1vdXNlRG93bk9mZnNldFZlcixcbiAgICAgICk7XG4gICAgICBlbGVtZW50c0JlbG93LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2VsbFwiKSkge1xuICAgICAgICAgIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZShcImRyb3BwYWJsZVwiKSA9PT0gXCJ0cnVlXCIpIHtcbiAgICAgICAgICAgIGVsZW1lbnRCZWxvdyA9IGVsZW1lbnQ7XG4gICAgICAgICAgICBvcmlnaW5hbEVsZW1lbnRCZWxvdyA9IGVsZW1lbnQ7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnRCZWxvdyA9IG51bGw7XG4gICAgICAgICAgICBvcmlnaW5hbEVsZW1lbnRCZWxvdyA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIE1vdXNlIG1vdmVcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoaXNEcmFnZ2luZykge1xuICAgICAgY29uc3QgZWxlbWVudHNCZWxvdyA9IGRvY3VtZW50LmVsZW1lbnRzRnJvbVBvaW50KFxuICAgICAgICBldmVudC5jbGllbnRYIC0gbW91c2VEb3duT2Zmc2V0SG9yLFxuICAgICAgICBldmVudC5jbGllbnRZIC0gbW91c2VEb3duT2Zmc2V0VmVyLFxuICAgICAgKTtcbiAgICAgIGVsZW1lbnRzQmVsb3cuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJjZWxsXCIpKSB7XG4gICAgICAgICAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZHJvcHBhYmxlXCIpID09PSBcInRydWVcIikge1xuICAgICAgICAgICAgZWxlbWVudEJlbG93ID0gZWxlbWVudDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlbWVudEJlbG93ID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKGRyYWdnYWJsZUVsZW1lbnQpIHtcbiAgICAgICAgZHJhZ2dhYmxlRWxlbWVudC5zdHlsZS5sZWZ0ID0gYCR7ZXZlbnQuY2xpZW50WCAtIG9mZlNldFh9cHhgO1xuICAgICAgICBkcmFnZ2FibGVFbGVtZW50LnN0eWxlLnRvcCA9IGAke2V2ZW50LmNsaWVudFkgLSBvZmZTZXRZfXB4YDtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIC8vIE1vdXNlIHVwXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIChldmVudCkgPT4ge1xuICAgIGlmIChpc0RyYWdnaW5nKSB7XG4gICAgICBpc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgICBsZXQgYXBwZW5kZWQgPSBmYWxzZTtcblxuICAgICAgaWYgKGRyYWdnYWJsZUVsZW1lbnRSZWN0LndpZHRoID4gNDAgfHwgZHJhZ2dhYmxlRWxlbWVudFJlY3QuaGVpZ2h0ID4gNDApIHtcbiAgICAgICAgbGV0IGxhc3RTaGlwRWxlbWVudDtcblxuICAgICAgICBpZiAoZHJhZ2dhYmxlRWxlbWVudFJlY3Qud2lkdGggPT09IDgwKSB7XG4gICAgICAgICAgbGFzdFNoaXBFbGVtZW50ID0gZG9jdW1lbnQuZWxlbWVudHNGcm9tUG9pbnQoXG4gICAgICAgICAgICBldmVudC5jbGllbnRYIC0gbW91c2VEb3duT2Zmc2V0SG9yICsgNDAsXG4gICAgICAgICAgICBldmVudC5jbGllbnRZIC0gbW91c2VEb3duT2Zmc2V0VmVyLFxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAoZHJhZ2dhYmxlRWxlbWVudFJlY3Qud2lkdGggPT09IDEyMCkge1xuICAgICAgICAgIGxhc3RTaGlwRWxlbWVudCA9IGRvY3VtZW50LmVsZW1lbnRzRnJvbVBvaW50KFxuICAgICAgICAgICAgZXZlbnQuY2xpZW50WCAtIG1vdXNlRG93bk9mZnNldEhvciArIDgwLFxuICAgICAgICAgICAgZXZlbnQuY2xpZW50WSAtIG1vdXNlRG93bk9mZnNldFZlcixcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKGRyYWdnYWJsZUVsZW1lbnRSZWN0LndpZHRoID09PSAxNjApIHtcbiAgICAgICAgICBsYXN0U2hpcEVsZW1lbnQgPSBkb2N1bWVudC5lbGVtZW50c0Zyb21Qb2ludChcbiAgICAgICAgICAgIGV2ZW50LmNsaWVudFggLSBtb3VzZURvd25PZmZzZXRIb3IgKyAxMjAsXG4gICAgICAgICAgICBldmVudC5jbGllbnRZIC0gbW91c2VEb3duT2Zmc2V0VmVyLFxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAoZHJhZ2dhYmxlRWxlbWVudFJlY3QuaGVpZ2h0ID09PSA4MCkge1xuICAgICAgICAgIGxhc3RTaGlwRWxlbWVudCA9IGRvY3VtZW50LmVsZW1lbnRzRnJvbVBvaW50KFxuICAgICAgICAgICAgZXZlbnQuY2xpZW50WCAtIG1vdXNlRG93bk9mZnNldEhvcixcbiAgICAgICAgICAgIGV2ZW50LmNsaWVudFkgLSBtb3VzZURvd25PZmZzZXRWZXIgKyA0MCxcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKGRyYWdnYWJsZUVsZW1lbnRSZWN0LmhlaWdodCA9PT0gMTIwKSB7XG4gICAgICAgICAgbGFzdFNoaXBFbGVtZW50ID0gZG9jdW1lbnQuZWxlbWVudHNGcm9tUG9pbnQoXG4gICAgICAgICAgICBldmVudC5jbGllbnRYIC0gbW91c2VEb3duT2Zmc2V0SG9yLFxuICAgICAgICAgICAgZXZlbnQuY2xpZW50WSAtIG1vdXNlRG93bk9mZnNldFZlciArIDgwLFxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAoZHJhZ2dhYmxlRWxlbWVudFJlY3QuaGVpZ2h0ID09PSAxNjApIHtcbiAgICAgICAgICBsYXN0U2hpcEVsZW1lbnQgPSBkb2N1bWVudC5lbGVtZW50c0Zyb21Qb2ludChcbiAgICAgICAgICAgIGV2ZW50LmNsaWVudFggLSBtb3VzZURvd25PZmZzZXRIb3IsXG4gICAgICAgICAgICBldmVudC5jbGllbnRZIC0gbW91c2VEb3duT2Zmc2V0VmVyICsgMTIwLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBsYXN0U2hpcEVsZW1lbnQuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImNlbGxcIikpIHtcbiAgICAgICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGVsZW1lbnQuY2xhc3NMaXN0WzBdO1xuICAgICAgICAgICAgY29uc3QgYXJyYXkgPSBjbGFzc05hbWUuc3BsaXQoXCIsXCIpLm1hcChOdW1iZXIpO1xuICAgICAgICAgICAgY29uc3QgdmVydGV4ID0gcGxheWVyT25lQm9hcmQuZmluZFZlcnRleHRPYmplY3RCeUNvb3JkaW5hdGVzKGFycmF5KTtcblxuICAgICAgICAgICAgdmVydGV4LmFkamFjZW5jeUxpc3QuZm9yRWFjaCgoYWRqYWNlbmN5KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChhZGphY2VuY3kub2NjdXBpZWRCeVNoaXAgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudEJlbG93KSB7XG4gICAgICAgICAgICAgICAgICBlbGVtZW50QmVsb3cuc2V0QXR0cmlidXRlKFwiZHJvcHBhYmxlXCIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnRCZWxvdyk7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhsYXN0U2hpcEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgY29uc29sZS5sb2coZWxlbWVudEJlbG93KTtcbiAgICAgIGlmIChlbGVtZW50QmVsb3cgIT09IG51bGwpIHtcbiAgICAgICAgaWYgKGVsZW1lbnRCZWxvdy5nZXRBdHRyaWJ1dGUoXCJkcm9wcGFibGVcIikgPT09IFwidHJ1ZVwiKSB7XG4gICAgICAgICAgbWFrZURyb3BwYWJsZShlbGVtZW50QmVsb3cpO1xuICAgICAgICAgIGVsZW1lbnRCZWxvdy5hcHBlbmQoZHJhZ2dhYmxlRWxlbWVudCk7XG4gICAgICAgICAgYXBwZW5kZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnRCZWxvdy5nZXRBdHRyaWJ1dGUoXCJkcm9wcGFibGVcIikgPT09IFwiZmFsc2VcIikge1xuICAgICAgICAgIG1ha2VEcm9wcGFibGUob3JpZ2luYWxFbGVtZW50QmVsb3cpO1xuICAgICAgICAgIGFwcGVuZGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1ha2VEcm9wcGFibGUob3JpZ2luYWxFbGVtZW50QmVsb3cpO1xuICAgICAgICBvcmlnaW5hbEVsZW1lbnRCZWxvdy5hcHBlbmQoZHJhZ2dhYmxlRWxlbWVudCk7XG4gICAgICAgIGFwcGVuZGVkID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGRyYWdnYWJsZUVsZW1lbnQuc3R5bGUubGVmdCA9IDA7XG4gICAgICBkcmFnZ2FibGVFbGVtZW50LnN0eWxlLnRvcCA9IDA7XG4gICAgICBkcmFnZ2FibGVFbGVtZW50LnN0eWxlLnpJbmRleCA9IDU7XG4gICAgICBkcmFnZ2FibGVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkcmFnZ2luZ1wiKTtcblxuICAgICAgb2ZmU2V0WCA9IG51bGw7XG4gICAgICBvZmZTZXRZID0gbnVsbDtcbiAgICAgIG1vdXNlRG93bk9mZnNldEhvciA9IDA7XG4gICAgICBtb3VzZURvd25PZmZzZXRWZXIgPSAwO1xuICAgICAgaWYgKGVsZW1lbnRCZWxvdyAmJiBhcHBlbmRlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgZWxlbWVudEJlbG93LnNldEF0dHJpYnV0ZShcImRyb3BwYWJsZVwiLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIGlmIChlbGVtZW50QmVsb3cgPT09IG51bGwpIHtcbiAgICAgICAgb3JpZ2luYWxFbGVtZW50QmVsb3cuc2V0QXR0cmlidXRlKFwiZHJvcHBhYmxlXCIsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZHJhZ2dhYmxlRWxlbWVudCA9IG51bGw7XG4gICAgZHJhZ2dhYmxlRWxlbWVudFJlY3QgPSBudWxsO1xuICB9KTtcblxuICAvLyBUaGUgY2VsbHMgdW5kZXIgdGhlIGRyYWdnYWJsZSBlbGVtZW50IHdpbGwgYmUgbWFkZSBkcm9wcGFibGUgd2hpbGUgdGhlIGVsZW1lbnQgaXMgZ2V0dGluZyBkcmFnZ2VkXG4gIGZ1bmN0aW9uIG1ha2VEcm9wcGFibGUoZWxCZWxvdykge1xuICAgIGNvbnN0IGNlbGxzID0gW107XG4gICAgY29uc3QgY2VsbHNWZXJ0aWNlcyA9IFtdO1xuICAgIGNvbnN0IGZpcnN0Q2VsbCA9IGVsQmVsb3c7XG4gICAgbGV0IHNlY29uZENlbGxIO1xuICAgIGxldCB0aGlyZENlbGxIO1xuICAgIGxldCBmb3VydGhDZWxsSDtcbiAgICBsZXQgc2Vjb25kQ2VsbFY7XG4gICAgbGV0IHRoaXJkQ2VsbFY7XG4gICAgbGV0IGZvdXJ0aENlbGxWO1xuXG4gICAgY2VsbHMucHVzaChmaXJzdENlbGwpO1xuXG4gICAgY29uc3QgZmlyc3RDZWxsQ2xhc3NBcnJheSA9IGZpcnN0Q2VsbC5jbGFzc0xpc3RbMF0uc3BsaXQoXCIsXCIpLm1hcChOdW1iZXIpO1xuICAgIGNvbnN0IHBhcmVudERpdkJvYXJkT25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXJPbmUtYm9hcmRcIik7XG4gICAgc2Vjb25kQ2VsbEggPSBET01IYW5kbGVyLmZpbmREaXZCeUNvb3JkaW5hdGVzKFxuICAgICAgYCR7Zmlyc3RDZWxsQ2xhc3NBcnJheVswXX0sJHtmaXJzdENlbGxDbGFzc0FycmF5WzFdICsgMX1gLFxuICAgICAgcGFyZW50RGl2Qm9hcmRPbmUsXG4gICAgKTtcbiAgICB0aGlyZENlbGxIID0gRE9NSGFuZGxlci5maW5kRGl2QnlDb29yZGluYXRlcyhcbiAgICAgIGAke2ZpcnN0Q2VsbENsYXNzQXJyYXlbMF19LCR7Zmlyc3RDZWxsQ2xhc3NBcnJheVsxXSArIDJ9YCxcbiAgICAgIHBhcmVudERpdkJvYXJkT25lLFxuICAgICk7XG4gICAgZm91cnRoQ2VsbEggPSBET01IYW5kbGVyLmZpbmREaXZCeUNvb3JkaW5hdGVzKFxuICAgICAgYCR7Zmlyc3RDZWxsQ2xhc3NBcnJheVswXX0sJHtmaXJzdENlbGxDbGFzc0FycmF5WzFdICsgM31gLFxuICAgICAgcGFyZW50RGl2Qm9hcmRPbmUsXG4gICAgKTtcbiAgICBzZWNvbmRDZWxsViA9IERPTUhhbmRsZXIuZmluZERpdkJ5Q29vcmRpbmF0ZXMoXG4gICAgICBgJHtmaXJzdENlbGxDbGFzc0FycmF5WzBdICsgMX0sJHtmaXJzdENlbGxDbGFzc0FycmF5WzFdfWAsXG4gICAgICBwYXJlbnREaXZCb2FyZE9uZSxcbiAgICApO1xuICAgIHRoaXJkQ2VsbFYgPSBET01IYW5kbGVyLmZpbmREaXZCeUNvb3JkaW5hdGVzKFxuICAgICAgYCR7Zmlyc3RDZWxsQ2xhc3NBcnJheVswXSArIDJ9LCR7Zmlyc3RDZWxsQ2xhc3NBcnJheVsxXX1gLFxuICAgICAgcGFyZW50RGl2Qm9hcmRPbmUsXG4gICAgKTtcbiAgICBmb3VydGhDZWxsViA9IERPTUhhbmRsZXIuZmluZERpdkJ5Q29vcmRpbmF0ZXMoXG4gICAgICBgJHtmaXJzdENlbGxDbGFzc0FycmF5WzBdICsgM30sJHtmaXJzdENlbGxDbGFzc0FycmF5WzFdfWAsXG4gICAgICBwYXJlbnREaXZCb2FyZE9uZSxcbiAgICApO1xuXG4gICAgaWYgKGRyYWdnYWJsZUVsZW1lbnRSZWN0LndpZHRoID49IDE2MCkge1xuICAgICAgY2VsbHMucHVzaChzZWNvbmRDZWxsSCk7XG4gICAgICBjZWxscy5wdXNoKHRoaXJkQ2VsbEgpO1xuICAgICAgY2VsbHMucHVzaChmb3VydGhDZWxsSCk7XG4gICAgfSBlbHNlIGlmIChkcmFnZ2FibGVFbGVtZW50UmVjdC53aWR0aCA+PSAxMjApIHtcbiAgICAgIGNlbGxzLnB1c2goc2Vjb25kQ2VsbEgpO1xuICAgICAgY2VsbHMucHVzaCh0aGlyZENlbGxIKTtcbiAgICB9IGVsc2UgaWYgKGRyYWdnYWJsZUVsZW1lbnRSZWN0LndpZHRoID49IDgwKSB7XG4gICAgICBjZWxscy5wdXNoKHNlY29uZENlbGxIKTtcbiAgICB9XG5cbiAgICBpZiAoZHJhZ2dhYmxlRWxlbWVudFJlY3QuaGVpZ2h0ID49IDE2MCkge1xuICAgICAgY2VsbHMucHVzaChzZWNvbmRDZWxsVik7XG4gICAgICBjZWxscy5wdXNoKHRoaXJkQ2VsbFYpO1xuICAgICAgY2VsbHMucHVzaChmb3VydGhDZWxsVik7XG4gICAgfSBlbHNlIGlmIChkcmFnZ2FibGVFbGVtZW50UmVjdC5oZWlnaHQgPj0gMTIwKSB7XG4gICAgICBjZWxscy5wdXNoKHNlY29uZENlbGxWKTtcbiAgICAgIGNlbGxzLnB1c2godGhpcmRDZWxsVik7XG4gICAgfSBlbHNlIGlmIChkcmFnZ2FibGVFbGVtZW50UmVjdC5oZWlnaHQgPj0gODApIHtcbiAgICAgIGNlbGxzLnB1c2goc2Vjb25kQ2VsbFYpO1xuICAgIH1cblxuICAgIC8vIFNldCBkcm9wcGFibGUgYXR0cmlidXRlIG9uIHRoZSBjZWxscyB1bmRlciBkcmFnZ2FibGUgZWxlbWVudFxuICAgIGNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgIGlmIChjZWxsKSB7XG4gICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKFwiZHJvcHBhYmxlXCIsIGZhbHNlKTtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gY2VsbC5jbGFzc0xpc3RbMF07XG4gICAgICAgIGNvbnN0IGFycmF5ID0gY2xhc3NOYW1lLnNwbGl0KFwiLFwiKS5tYXAoTnVtYmVyKTtcbiAgICAgICAgY29uc3QgdmVydGV4ID0gcGxheWVyT25lQm9hcmQuZmluZFZlcnRleHRPYmplY3RCeUNvb3JkaW5hdGVzKGFycmF5KTtcbiAgICAgICAgY2VsbHNWZXJ0aWNlcy5wdXNoKHZlcnRleCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBVcGRhdGUgdGhlIGdyYXBoIGFjY29yZGluZ2x5XG4gICAgY2VsbHNWZXJ0aWNlcy5mb3JFYWNoKChjZWxsVmVydGV4KSA9PiB7XG4gICAgICBjZWxsVmVydGV4Lm9jY3VwaWVkQnlTaGlwID0gdHJ1ZTtcbiAgICAgIGNlbGxWZXJ0ZXgub2NjdXBpZWQgPSB0cnVlO1xuXG4gICAgICAvLyBVcGRhdGUgYWRqYWNlbnQgY2VsbHNcbiAgICAgIGNlbGxWZXJ0ZXguYWRqYWNlbmN5TGlzdC5mb3JFYWNoKChhZGphY2VuY3kpID0+IHtcbiAgICAgICAgLy8gR3JhcGhcbiAgICAgICAgYWRqYWNlbmN5Lm9jY3VwaWVkID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gYCR7YWRqYWNlbmN5LmNvb3JkaW5hdGVzWzBdfSwke2FkamFjZW5jeS5jb29yZGluYXRlc1sxXX1gO1xuICAgICAgICBjb25zdCBwYXJlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllck9uZS1ib2FyZFwiKTtcbiAgICAgICAgY29uc3QgZGl2ID0gcGFyZW50RGl2LnF1ZXJ5U2VsZWN0b3IoYFtjbGFzcyo9XCIke2NsYXNzTmFtZX1cIl0uY2VsbGApO1xuICAgICAgICAvLyBOb2RlIGVsZW1lbnRcbiAgICAgICAgZGl2LnNldEF0dHJpYnV0ZShcImRyb3BwYWJsZVwiLCBmYWxzZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhwbGF5ZXJPbmVCb2FyZC5ib2FyZC52ZXJ0aWNlcyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYWRkRXZlbnRMaXN0ZW5lcnM7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tY29udGludWUgKi9cbmltcG9ydCBTaGlwTW9kdWxlIGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCBHcmFwaCBmcm9tIFwiLi9EU19HcmFwaFwiO1xuXG5mdW5jdGlvbiBHYW1lYm9hcmRNb2R1bGUoKSB7XG4gIGNvbnN0IGJvYXJkID0gbmV3IEdyYXBoKCk7XG4gIGNvbnN0IHNoaXBzID0gW107XG4gIGNvbnN0IG1pc3NpbmdTaG90cyA9IFtdO1xuXG4gIC8vIENyZWF0ZSAxMHgxMCBjZWxscyBhcyBncmFwaCB2ZXJ0ZXhlc1xuICBmdW5jdGlvbiBjcmVhdGVDZWxscygpIHtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDExOyBpICs9IDEpIHtcbiAgICAgIGZvciAobGV0IGogPSAxOyBqIDwgMTE7IGogKz0gMSkge1xuICAgICAgICBib2FyZC5hZGRWZXJ0ZXgoaSwgaik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gRmluZCB0aGUgdmVydGV4IG9iamVjdCBtYXRjaGluZyB0aGUgZ2l2ZW4gY29vcmRpbmF0ZXNcbiAgZnVuY3Rpb24gZmluZFZlcnRleHRPYmplY3RCeUNvb3JkaW5hdGVzKGNvb3JkaW5hdGVzKSB7XG4gICAgLy8gY29uc29sZS5sb2coY29vcmRpbmF0ZXMpO1xuICAgIGNvbnN0IGZvdW5kVmVydGV4ID0gYm9hcmQudmVydGljZXMuZmluZChcbiAgICAgICh2ZXJ0ZXgpID0+XG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHZlcnRleC5jb29yZGluYXRlcykgPT09IEpTT04uc3RyaW5naWZ5KGNvb3JkaW5hdGVzKSxcbiAgICApO1xuXG4gICAgaWYgKGZvdW5kVmVydGV4KSB7XG4gICAgICByZXR1cm4gZm91bmRWZXJ0ZXg7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLy8gRmlsbCBvdXQgYWRqYWNlbmN5TGlzdCBmb3IgYSB2ZXJ0ZXhcbiAgZnVuY3Rpb24gYWRkQ2VsbEFkamFjZW5jaWVzKHZlcnRleCkge1xuICAgIGNvbnN0IHkgPSB2ZXJ0ZXguY29vcmRpbmF0ZXNbMF07XG4gICAgY29uc3QgeCA9IHZlcnRleC5jb29yZGluYXRlc1sxXTtcbiAgICBjb25zdCBwb3RlbnRpYWxBZGphY2VuY2llcyA9IFtcbiAgICAgIFt5IC0gMSwgeCAtIDFdLFxuICAgICAgW3kgLSAxLCB4XSxcbiAgICAgIFt5IC0gMSwgeCArIDFdLFxuICAgICAgW3ksIHggLSAxXSxcbiAgICAgIFt5LCB4ICsgMV0sXG4gICAgICBbeSArIDEsIHggLSAxXSxcbiAgICAgIFt5ICsgMSwgeF0sXG4gICAgICBbeSArIDEsIHggKyAxXSxcbiAgICBdO1xuICAgIGNvbnN0IGFkamFjZW5jaWVzID0gW107XG4gICAgcG90ZW50aWFsQWRqYWNlbmNpZXMuZm9yRWFjaCgoYWRqYWNlbmN5KSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGFkamFjZW5jeVswXSA+IDAgJiZcbiAgICAgICAgYWRqYWNlbmN5WzBdIDw9IDEwICYmXG4gICAgICAgIGFkamFjZW5jeVsxXSA+IDAgJiZcbiAgICAgICAgYWRqYWNlbmN5WzFdIDw9IDEwXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgYWRqYWNlbmN5T2JqZWN0ID0gZmluZFZlcnRleHRPYmplY3RCeUNvb3JkaW5hdGVzKGFkamFjZW5jeSk7XG4gICAgICAgIGFkamFjZW5jaWVzLnB1c2goYWRqYWNlbmN5T2JqZWN0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gYWRqYWNlbmNpZXM7XG4gIH1cblxuICAvLyBGaWxsIG91dCBhZGphY2VuY3lMaXN0IGZvciBlYWNoIGNlbGwgdmVydGV4XG4gIGZ1bmN0aW9uIGNyZWF0ZUFkamFjZW5jaWVzKCkge1xuICAgIGJvYXJkLnZlcnRpY2VzLmZvckVhY2goKHZlcnRleCkgPT4ge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBjb25zdCBhZGphY2VudFZlcnRpY2VzID0gYWRkQ2VsbEFkamFjZW5jaWVzKHZlcnRleCk7XG4gICAgICBhZGphY2VudFZlcnRpY2VzLmZvckVhY2goKGFkamFjZW50VmVydGV4KSA9PiB7XG4gICAgICAgIGJvYXJkLmFkZEVkZ2UodmVydGV4LCBhZGphY2VudFZlcnRleCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIEZpbGwgdGhlIEJvYXJkIGFycmF5XG4gIGZ1bmN0aW9uIGNyZWF0ZUJvYXJkKCkge1xuICAgIGNyZWF0ZUNlbGxzKCk7XG4gICAgY3JlYXRlQWRqYWNlbmNpZXMoKTtcbiAgfVxuXG4gIC8vIEZpbGwgdGhlIFNoaXBzIGFycmF5XG4gIGZ1bmN0aW9uIGNyZWF0ZVNoaXBzKCkge1xuICAgIGNvbnN0IHNoaXBzQ29uZmlnID0gW1xuICAgICAge1xuICAgICAgICBzaGlwTGVuZ3RoOiAyLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2hpcExlbmd0aDogMixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNoaXBMZW5ndGg6IDIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzaGlwTGVuZ3RoOiA0LFxuICAgICAgfSxcbiAgICBdO1xuICAgIHNoaXBzQ29uZmlnLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IHNoaXAgPSBTaGlwTW9kdWxlLmNyZWF0ZVNoaXAoZWxlbWVudC5zaGlwTGVuZ3RoKTtcbiAgICAgIHNoaXBzLnB1c2goc2hpcCk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBGaWxsIHRoZSBtaXNzaW5nU2hvdHMgYXJyYXlcbiAgZnVuY3Rpb24gcmVjb3JkTWlzc2luZ1Nob3QoY29vcmRpbmF0ZXMpIHtcbiAgICBjb25zdCBtaXNzZWRTaG90VmVydGV4ID0gZmluZFZlcnRleHRPYmplY3RCeUNvb3JkaW5hdGVzKGNvb3JkaW5hdGVzKTtcbiAgICBpZiAoIW1pc3NpbmdTaG90cy5pbmNsdWRlcyhtaXNzZWRTaG90VmVydGV4LmNvb3JkaW5hdGVzKSkge1xuICAgICAgbWlzc2luZ1Nob3RzLnB1c2gobWlzc2VkU2hvdFZlcnRleC5jb29yZGluYXRlcyk7XG4gICAgfVxuICAgIG1pc3NlZFNob3RWZXJ0ZXguYWRqYWNlbmN5TGlzdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBpZiAoIW1pc3NpbmdTaG90cy5pbmNsdWRlcyhlbGVtZW50LmNvb3JkaW5hdGVzKSkge1xuICAgICAgICBtaXNzaW5nU2hvdHMucHVzaChlbGVtZW50LmNvb3JkaW5hdGVzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIFJlZ2lzdGVyIGFuZCBwcm9jZXNzIGF0dGFja3NcbiAgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayhjb29yZGluYXRlcykge1xuICAgIGxldCBoaXRSZWdpc3RlcmVkID0gZmFsc2U7XG4gICAgc2hpcHMuc29tZSgoc2hpcCkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBKU09OLnN0cmluZ2lmeShzaGlwLmNvb3JkaW5hdGVzKS5pbmNsdWRlcyhKU09OLnN0cmluZ2lmeShjb29yZGluYXRlcykpXG4gICAgICApIHtcbiAgICAgICAgc2hpcC5oaXQoKTtcbiAgICAgICAgaGl0UmVnaXN0ZXJlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICAgIGlmICghaGl0UmVnaXN0ZXJlZCkge1xuICAgICAgcmVjb3JkTWlzc2luZ1Nob3QoY29vcmRpbmF0ZXMpO1xuICAgIH1cbiAgfVxuXG4gIC8vIENoZWNrIGlmIGFsbCBzaGlwcyBvbiBhIGJvYXJkIGhhdmUgYmVlbiBzdW5rXG4gIGZ1bmN0aW9uIGFsbFNoaXBzU3VuaygpIHtcbiAgICByZXR1cm4gc2hpcHMuZXZlcnkoKHNoaXApID0+IHNoaXAuaXNTdW5rKCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcG9zaXRpb25TaGlwcygpIHtcbiAgICBzaGlwcy5zb3J0KChhLCBiKSA9PiBiLmxlbmd0aCAtIGEubGVuZ3RoKTtcbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBjb25zdCBvcmllbnRhdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpID09PSAwID8gXCJ2XCIgOiBcImhcIjtcbiAgICAgIHNoaXAucG9zaXRpb24gPSBvcmllbnRhdGlvbjtcblxuICAgICAgY29uc3QgZmlsdGVyZWRCb2FyZCA9IGJvYXJkLnZlcnRpY2VzLmZpbHRlcihcbiAgICAgICAgKG9iaikgPT4gb2JqLm9jY3VwaWVkID09PSBmYWxzZSxcbiAgICAgICk7XG5cbiAgICAgIGlmIChmaWx0ZXJlZEJvYXJkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbGV0IHBvc2l0aW9uRm91bmQgPSBmYWxzZTtcbiAgICAgICAgd2hpbGUgKCFwb3NpdGlvbkZvdW5kKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1jb25zdFxuICAgICAgICAgIGxldCBwb3NpdGlvbiA9IFtdO1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItY29uc3RcbiAgICAgICAgICBsZXQgcG9zaXRpb25Db29yZGluYXRlcyA9IFtdO1xuICAgICAgICAgIGNvbnN0IGZpcnN0Q2VsbEluZGV4ID0gTWF0aC5mbG9vcihcbiAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgKiBmaWx0ZXJlZEJvYXJkLmxlbmd0aCxcbiAgICAgICAgICApO1xuICAgICAgICAgIGNvbnN0IGZpcnN0Q2VsbE9iamVjdCA9IGZpbHRlcmVkQm9hcmRbZmlyc3RDZWxsSW5kZXhdO1xuICAgICAgICAgIHBvc2l0aW9uQ29vcmRpbmF0ZXMucHVzaChmaXJzdENlbGxPYmplY3QuY29vcmRpbmF0ZXMpO1xuICAgICAgICAgIHBvc2l0aW9uLnB1c2goZmlyc3RDZWxsT2JqZWN0KTtcbiAgICAgICAgICAvLyAgIGNvbnNvbGUubG9nKHBvc2l0aW9uKTtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHNoaXAubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IG5leHRDZWxsT2JqZWN0Q29vcmRpbmF0ZXMgPVxuICAgICAgICAgICAgICBzaGlwLnBvc2l0aW9uID09PSBcInZcIlxuICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICBmaXJzdENlbGxPYmplY3QuY29vcmRpbmF0ZXNbMF0gKyBpLFxuICAgICAgICAgICAgICAgICAgICBmaXJzdENlbGxPYmplY3QuY29vcmRpbmF0ZXNbMV0sXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgOiBbXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0Q2VsbE9iamVjdC5jb29yZGluYXRlc1swXSxcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RDZWxsT2JqZWN0LmNvb3JkaW5hdGVzWzFdICsgaSxcbiAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhuZXh0Q2VsbE9iamVjdENvb3JkaW5hdGVzKTtcbiAgICAgICAgICAgIGNvbnN0IG5leHRDZWxsT2JqZWN0ID0gYm9hcmQudmVydGljZXMuZmlsdGVyKFxuICAgICAgICAgICAgICAob2JqKSA9PlxuICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KG9iai5jb29yZGluYXRlcykgPT09XG4gICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkobmV4dENlbGxPYmplY3RDb29yZGluYXRlcyksXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobmV4dENlbGxPYmplY3RbMF0pO1xuICAgICAgICAgICAgaWYgKG5leHRDZWxsT2JqZWN0WzBdKSB7XG4gICAgICAgICAgICAgIGlmIChuZXh0Q2VsbE9iamVjdFswXS5vY2N1cGllZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbkNvb3JkaW5hdGVzLnB1c2gobmV4dENlbGxPYmplY3RbMF0uY29vcmRpbmF0ZXMpO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uLnB1c2gobmV4dENlbGxPYmplY3RbMF0pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAocG9zaXRpb24ubGVuZ3RoID09PSBzaGlwLmxlbmd0aCkge1xuICAgICAgICAgICAgc2hpcC5hc3NpZ25Db29yZGluYXRlcyguLi5wb3NpdGlvbkNvb3JkaW5hdGVzKTtcblxuICAgICAgICAgICAgcG9zaXRpb24uZm9yRWFjaCgocCkgPT4ge1xuICAgICAgICAgICAgICBwLm9jY3VwaWVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgcC5vY2N1cGllZEJ5U2hpcCA9IHRydWU7XG4gICAgICAgICAgICAgIHAuYWRqYWNlbmN5TGlzdC5mb3JFYWNoKChhZGopID0+IHtcbiAgICAgICAgICAgICAgICBhZGoub2NjdXBpZWQgPSB0cnVlO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcG9zaXRpb25Gb3VuZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGJvYXJkLFxuICAgIHNoaXBzLFxuICAgIG1pc3NpbmdTaG90cyxcbiAgICBjcmVhdGVCb2FyZCxcbiAgICBjcmVhdGVTaGlwcyxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIGFsbFNoaXBzU3VuayxcbiAgICBwb3NpdGlvblNoaXBzLFxuICAgIGZpbmRWZXJ0ZXh0T2JqZWN0QnlDb29yZGluYXRlcyxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkTW9kdWxlO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWN5Y2xlXG5pbXBvcnQgRE9NSGFuZGxlciBmcm9tIFwiLi9ET01IYW5kbGVyXCI7XG5pbXBvcnQgR2FtZWJvYXJkTW9kdWxlIGZyb20gXCIuL2dhbWVib2FyZFwiO1xuXG5sZXQgcGxheWVyT25lQm9hcmQgPSBudWxsO1xuXG5mdW5jdGlvbiBnYW1lTG9vcCgpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKTtcbiAgaWYgKG1haW4pIHtcbiAgICBtYWluLnJlbW92ZSgpO1xuICB9XG4gIHBsYXllck9uZUJvYXJkID0gR2FtZWJvYXJkTW9kdWxlKCk7XG4gIHBsYXllck9uZUJvYXJkLmNyZWF0ZUJvYXJkKCk7XG4gIHBsYXllck9uZUJvYXJkLmNyZWF0ZVNoaXBzKCk7XG4gIHBsYXllck9uZUJvYXJkLnBvc2l0aW9uU2hpcHMoKTtcblxuICBjb25zdCBwbGF5ZXJUd29Cb2FyZCA9IEdhbWVib2FyZE1vZHVsZSgpO1xuICBwbGF5ZXJUd29Cb2FyZC5jcmVhdGVCb2FyZCgpO1xuICBwbGF5ZXJUd29Cb2FyZC5jcmVhdGVTaGlwcygpO1xuICBwbGF5ZXJUd29Cb2FyZC5wb3NpdGlvblNoaXBzKCk7XG5cbiAgRE9NSGFuZGxlci5wbGF5ZXJPbmVCb2FyZCA9IHBsYXllck9uZUJvYXJkLmJvYXJkLnZlcnRpY2VzO1xuICBET01IYW5kbGVyLnBsYXllck9uZVNoaXBzID0gcGxheWVyT25lQm9hcmQuc2hpcHM7XG5cbiAgRE9NSGFuZGxlci5wbGF5ZXJUd29Cb2FyZCA9IHBsYXllclR3b0JvYXJkLmJvYXJkLnZlcnRpY2VzO1xuICBET01IYW5kbGVyLnBsYXllclR3b1NoaXBzID0gcGxheWVyVHdvQm9hcmQuc2hpcHM7XG5cbiAgRE9NSGFuZGxlci5jcmVhdGVEb20oKTtcbiAgY29uc29sZS5sb2cocGxheWVyT25lQm9hcmQpO1xufVxuXG5nYW1lTG9vcCgpO1xuXG5leHBvcnQgZGVmYXVsdCBnYW1lTG9vcDtcbmV4cG9ydCB7IHBsYXllck9uZUJvYXJkIH07XG4iLCJjb25zdCBTaGlwTW9kdWxlID0gKCgpID0+IHtcbiAgLy8gQ3JlYXRlcyBhIHNoaXBcbiAgZnVuY3Rpb24gY3JlYXRlU2hpcChzaGlwTGVuZ3RoKSB7XG4gICAgY29uc3Qgc2hpcCA9IHtcbiAgICAgIGhpdENvdW50OiAwLFxuICAgICAgY29vcmRpbmF0ZXM6IFtdLFxuICAgICAgbGVuZ3RoOiBzaGlwTGVuZ3RoLFxuICAgICAgcG9zaXRpb246IFwiaFwiLFxuXG4gICAgICBoaXQoKSB7XG4gICAgICAgIHNoaXAuaGl0Q291bnQgKz0gMTtcbiAgICAgIH0sXG5cbiAgICAgIGlzU3VuaygpIHtcbiAgICAgICAgaWYgKHNoaXAuaGl0Q291bnQgPT09IHNoaXAubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSxcblxuICAgICAgYXNzaWduQ29vcmRpbmF0ZXMoLi4uYXJncykge1xuICAgICAgICBzaGlwLmNvb3JkaW5hdGVzID0gYXJncztcblxuICAgICAgICAvLyBEZXRlcm1pbmUgaWYgc2hpcCBwb3NpdGlvbiBpcyBob3Jpem9udGFsIG9yIHZlcnRpY2FsXG4gICAgICAgIGlmIChzaGlwLmNvb3JkaW5hdGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIHRoaXMucG9zaXRpb24gPSBcImhcIjtcbiAgICAgICAgfSBlbHNlIGlmIChzaGlwLmNvb3JkaW5hdGVzWzBdWzBdID09PSBzaGlwLmNvb3JkaW5hdGVzWzFdWzBdKSB7XG4gICAgICAgICAgdGhpcy5wb3NpdGlvbiA9IFwiaFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucG9zaXRpb24gPSBcInZcIjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHNoaXA7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZVNoaXAsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBTaGlwTW9kdWxlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
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

.ship.droppable {
  background-color: rgba(0, 255, 0, 0.5);
}

.ship.undroppable {
  background-color: rgba(255, 0, 0, 0.5);
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
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,iCAAiC;EACjC,gBAAgB;EAChB;uBACqB;EACrB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,0BAA0B;EAC1B,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,kBAAkB;EAClB,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,aAAa;EACb,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,eAAe;EACf,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,0BAA0B;EAC1B,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,4BAA4B;EAC5B,WAAW;EACX,eAAe;EACf,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;;EAEE,YAAY;EACZ,aAAa;EACb,4CAA4C;EAC5C,oBAAoB;EACpB,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,sBAAsB;EACtB,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,sBAAsB;EACtB,oBAAoB;AACtB;;AAEA;;EAEE,aAAa;EACb,sCAAsC;AACxC;;AAEA;;EAEE,6CAA6C;EAC7C,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,6CAA6C;AAC/C;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,OAAO;EACP,MAAM;EACN,sCAAsC;EACtC,uBAAuB;AACzB;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,uBAAuB;EACvB,UAAU;EACV;sBACoB;AACtB;;AAEA;;GAEG;;AAEH;EACE,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;;GAEG;;AAEH;EACE,kBAAkB;EAClB,WAAW;EACX,kBAAkB;EAClB,UAAU;EACV,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,UAAU;EACV,WAAW;EACX,SAAS;EACT,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,wBAAwB;EACxB,sCAAsC;AACxC;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,sCAAsC;AACxC","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100&family=Lato:wght@300&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;1,200;1,300;1,400;1,500&family=Roboto:wght@100&family=Rubik:wght@300&display=swap\");\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Nunito\", sans-serif;\n  font-weight: 300;\n  /* pointer-events: none;\n  touch-action: none; */\n  user-select: none;\n}\n\nbody {\n  height: 100vh;\n  width: 100vw;\n}\n\n.main {\n  display: grid;\n  height: 100%;\n  grid-template-columns: 1fr;\n  grid-template-rows: 100px 1fr;\n}\n\n.header {\n  grid-column: 1 / 2;\n  grid-row: 1 / 2;\n}\n\n.content {\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: start;\n  /* padding-top: 40px; */\n}\n\n.commands {\n  align-self: center;\n  justify-self: start;\n  display: flex;\n  gap: 15px;\n  margin-bottom: 50px;\n}\n\n.commands > div {\n  /* user-select: none; */\n  cursor: pointer;\n  font-weight: 100;\n  font-size: 20px;\n}\n\n.commands > div:hover {\n  color: blue;\n  text-decoration: underline;\n  text-decoration-thickness: 1px;\n}\n\n.boards {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 50px;\n  width: 100%;\n  /* gap: 20px; */\n  justify-content: center;\n  align-items: center;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.boards > .playerOne-board,\n.boards > .playerTwo-board {\n  width: 400px;\n  height: 400px;\n  outline: 0.5px solid rgb(118, 118, 118, 0.6);\n  justify-self: center;\n  margin: 20px;\n}\n\n.playerOne-board {\n  grid-column: 1 / 2;\n  grid-row: 1 / 2;\n}\n\n.playerTwo-board {\n  grid-column: 2 / 3;\n  grid-row: 1 / 2;\n}\n\n.player-one-board-name {\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n  align-self: flex-start;\n  justify-self: center;\n}\n\n.player-two-board-name {\n  grid-column: 2 / 3;\n  grid-row: 2 / 3;\n  align-self: flex-start;\n  justify-self: center;\n}\n\n.playerOne-board,\n.playerTwo-board {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n}\n\n.playerOne-board > div,\n.playerTwo-board > div {\n  outline: 0.5px solid rgba(118, 118, 118, 0.6);\n  position: relative;\n  /* z-index: 1; */\n}\n\n.playerTwo-board > .ship-cell {\n  background-color: rgba(0, 0, 255, 0.3);\n}\n\n.playerOne-board > .ship-cell {\n  outline: 0.5px solid rgba(118, 118, 118, 0.2);\n}\n\n.ship {\n  /* z-index: 2; */\n  position: absolute;\n  left: 0;\n  top: 0;\n  background-color: rgba(0, 0, 255, 0.1);\n  outline: 1px solid blue;\n}\n\n.ship.droppable {\n  background-color: rgba(0, 255, 0, 0.5);\n}\n\n.ship.undroppable {\n  background-color: rgba(255, 0, 0, 0.5);\n}\n\n.draggable {\n  cursor: move !important;\n  z-index: 5;\n  /* pointer-events: all;\n  touch-action: all; */\n}\n\n/* .ship:hover {\n  cursor: move;\n} */\n\n[draggable=\"true\"] {\n  cursor: move !important;\n}\n\n[draggable=\"true\"]:hover {\n  z-index: 9999;\n  cursor: move !important;\n}\n\n/* .draggable {\n  cursor: alias;\n} */\n\n.mark_col {\n  position: absolute;\n  width: 100%;\n  text-align: center;\n  top: -20px;\n  font-size: 10px;\n  user-select: none;\n}\n\n.mark_row {\n  position: absolute;\n  text-align: right;\n  width: 50%;\n  left: -30px;\n  top: 10px;\n  font-size: 10px;\n  user-select: none;\n}\n\n.dragging {\n  outline: 1px green solid;\n  background-color: rgba(0, 255, 0, 0.5);\n}\n\n[droppable=\"true\"] {\n  background-color: rgba(0, 128, 0, 0.2);\n}\n\n[droppable=\"false\"] {\n  background-color: rgba(255, 0, 0, 0.3);\n}\n"],"sourceRoot":""}]);
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
/* eslint-disable import/no-cycle */
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
  let previousElementBelow = null;

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
  function identifyCellsToMakeDroppable(event) {
    const shipObject = ___WEBPACK_IMPORTED_MODULE_0__.playerOneBoard.findShipById(draggableElement.id);
    if (event.type === "mouseup") {
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

    if (event.type === "mousedown") {
      return findShipCells(
        draggableElement.parentElement,
        shipObject.position,
        shipObject.length - 1,
      );
    }
    return null;
  }

  // Checks if dropping the ship on the position will cause
  // overlap with another ship
  function checkOtherShipOverlap(event) {
    let noOverlap = true;
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
                noOverlap = false;
              }
            }
          });
        }
      });
    }
    return noOverlap;
  }

  // Checks if the element is getting dropped within the borders of the board
  function checkWithinBorders(event) {
    const elementBelowCoordinates = elementBelow.classList[0]
      .split(",")
      .map(Number);
    if (draggableElementRect.height === 80) {
      if (elementBelowCoordinates[0] > 9) {
        return false;
      }
    }
    if (draggableElementRect.height === 120) {
      if (elementBelowCoordinates[0] > 8) {
        return false;
      }
    }
    if (draggableElementRect.height === 160) {
      if (elementBelowCoordinates[0] > 7) {
        return false;
      }
    }
    if (draggableElementRect.width === 80) {
      if (elementBelowCoordinates[1] > 9) {
        return false;
      }
    }
    if (draggableElementRect.width === 120) {
      if (elementBelowCoordinates[1] > 8) {
        return false;
      }
    }
    if (draggableElementRect.width === 160) {
      if (elementBelowCoordinates[1] > 7) {
        return false;
      }
    }
    const outOfBoardElements = document.elementsFromPoint(
      event.clientX,
      event.clientY,
    );
    let cellElement = null;
    outOfBoardElements.forEach((element) => {
      if (element.classList.contains("cell")) {
        // console.log(element);
        cellElement = element;
      }
    });

    if (cellElement === null) {
      return false;
    }
    return true;
  }

  // Update droppable attribute on board for each cell based on occupied value in the graph
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

  // The cells under the draggable element will be made droppable when the mouse is down
  function makeDroppable(cells) {
    const cellsVertices = [];

    // Set droppable attribute on the cells under draggable element to true
    cells.forEach((cell) => {
      cell.setAttribute("droppable", true);
      const className = cell.classList[0];
      const array = className.split(",").map(Number);
      const vertex = ___WEBPACK_IMPORTED_MODULE_0__.playerOneBoard.findVertextObjectByCoordinates(array);
      cellsVertices.push(vertex);
    });

    /// Update the graph accordingly
    cellsVertices.forEach((cellVertex) => {
      cellVertex.occupiedByShip = false;
      cellVertex.occupied = false;

      // Update adjacent cells:
      cellVertex.adjacencyList.forEach((adjacency) => {
        // In the graph
        adjacency.occupied = false;
        adjacency.adjacencyList.forEach((adj) => {
          if (adj.occupiedByShip) {
            adjacency.occupied = true;
          }
        });
        if (adjacency.occupied === false) {
          const className = `${adjacency.coordinates[0]},${adjacency.coordinates[1]}`;
          const parentDiv = document.querySelector(".playerOne-board");
          const div = parentDiv.querySelector(`[class*="${className}"].cell`);
          div.setAttribute("droppable", true);
        }
      });
    });
  }

  // The cells under the draggable element will be made undroppable when the mouse is up
  function makeUndroppable(cells) {
    const cellsVertices = [];
    // Set droppable attribute on the cells under draggable element to false
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

    elementsFromPoint.forEach((element) => {
      if (element.classList.contains("draggable")) {
        draggableElement = element;
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

      const cells = identifyCellsToMakeDroppable(event);
      makeDroppable(cells);

      const parentRect = draggableElement.parentElement.getBoundingClientRect();

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
            previousElementBelow = null;
          }
        }
      });
    }
  };

  // Mouse move
  const onMouseMove = (event) => {
    if (isDragging) {
      const elementsFromPoint = document.elementsFromPoint(
        event.clientX - mouseDownOffsetHor,
        event.clientY - mouseDownOffsetVer,
      );
      elementsFromPoint.forEach((element) => {
        if (
          element.classList.contains("cell") &&
          element.getAttribute("droppable")
        ) {
          previousElementBelow = elementBelow;
          if (previousElementBelow.classList.contains("temp")) {
            previousElementBelow.setAttribute("droppable", true);
            draggableElement.classList.remove("undroppable");
            previousElementBelow.classList.remove("temp");
          }
          elementBelow = element;
        }
      });

      if (!checkOtherShipOverlap(event) || !checkWithinBorders(event)) {
        elementBelow.setAttribute("droppable", false);
        elementBelow.classList.add("temp");
      }

      if (elementBelow.getAttribute("droppable") === "false") {
        draggableElement.classList.add("undroppable");
        draggableElement.classList.remove("droppable");
      } else {
        draggableElement.classList.add("droppable");
        draggableElement.classList.remove("undroppable");
      }

      if (draggableElement) {
        draggableElement.style.left = `${event.clientX - offSetX}px`;
        draggableElement.style.top = `${event.clientY - offSetY}px`;
      }
    }
  };

  // Mouse up
  const onMouseUp = (event) => {
    const ship = draggableElement
      ? ___WEBPACK_IMPORTED_MODULE_0__.playerOneBoard.findShipById(draggableElement.id)
      : null;
    if (elementBelow === originalElementBelow) {
      if (draggableElement) {
        const width = `${draggableElementRect.height}px`;
        const height = `${draggableElementRect.width}px`;

        draggableElement.style.width = width;
        draggableElement.style.height = height;

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
      draggableElement.classList.remove("droppable");
      draggableElement.classList.remove("undroppable");
      if (elementBelow) {
        if (!checkOtherShipOverlap(event)) {
          elementBelow.setAttribute("droppable", false);
        }
        if (!checkWithinBorders(event)) {
          elementBelow.setAttribute("droppable", false);
        }
      }

      const cells = identifyCellsToMakeDroppable(event);
      makeUndroppable(cells);

      const newShipCoordinates = [];
      cells.forEach((cell) => {
        newShipCoordinates.push(
          Array.from(cell.classList[0].split(",").map(Number)),
        );
      });
      ship.assignCoordinates(newShipCoordinates);

      isDragging = false;
      draggableElement.style.left = 0;
      draggableElement.style.top = 0;
      draggableElement.style.zIndex = 5;
      offSetX = null;
      offSetY = null;
      mouseDownOffsetHor = 0;
      mouseDownOffsetVer = 0;
      draggableElement.classList.remove("dragging");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHdLQUF3SyxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxpRUFBaUU7QUFDN1E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGlGQUFpRixVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxPQUFPLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLEtBQUssT0FBTyxPQUFPLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sTUFBTSxLQUFLLFlB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QUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0Esb0RBQW9ELFlBQVk7QUFDaEU7QUFD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxtQkFBbUIsNkNBQVU7QUFDN0I7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixpQkFBaUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsZUFBZSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pQVDtBQUN0QjtBQUNzQztBQUNJO0FBQ2lCOztBQUUzRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHNEQUFlO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUIsc0RBQWU7QUFDeEM7QUFDQTtBQUNBOztBQUVBLEVBQUUsbURBQVU7QUFDWixFQUFFLG1EQUFVOztBQUVaLEVBQUUsbURBQVU7QUFDWixFQUFFLG1EQUFVOztBQUVaLEVBQUUsbURBQVU7QUFDWjs7QUFFQTtBQUNBLHdFQUF5Qjs7QUFFekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGlFQUFlLFFBQVEsRUFBQztBQUNFOzs7Ozs7Ozs7Ozs7Ozs7QUMxQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7VUMzQzFCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvRE9NSGFuZGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL0RTX0dyYXBoLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZXZlbnRNYW5hZ2VyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpvc2VmaW4rU2Fuczp3Z2h0QDEwMCZmYW1pbHk9TGF0bzp3Z2h0QDMwMCZmYW1pbHk9TnVuaXRvOml0YWwsd2dodEAwLDIwMDswLDMwMDswLDQwMDswLDUwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMCZmYW1pbHk9Um9ib3RvOndnaHRAMTAwJmZhbWlseT1SdWJpazp3Z2h0QDMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICAvKiBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdG91Y2gtYWN0aW9uOiBub25lOyAqL1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuYm9keSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbn1cblxuLm1haW4ge1xuICBkaXNwbGF5OiBncmlkO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDFmcjtcbn1cblxuLmhlYWRlciB7XG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgZ3JpZC1yb3c6IDEgLyAyO1xufVxuXG4uY29udGVudCB7XG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgZ3JpZC1yb3c6IDIgLyAzO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gIC8qIHBhZGRpbmctdG9wOiA0MHB4OyAqL1xufVxuXG4uY29tbWFuZHMge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuLmNvbW1hbmRzID4gZGl2IHtcbiAgLyogdXNlci1zZWxlY3Q6IG5vbmU7ICovXG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uY29tbWFuZHMgPiBkaXY6aG92ZXIge1xuICBjb2xvcjogYmx1ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIHRleHQtZGVjb3JhdGlvbi10aGlja25lc3M6IDFweDtcbn1cblxuLmJvYXJkcyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIC8qIGdhcDogMjBweDsgKi9cbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cblxuLmJvYXJkcyA+IC5wbGF5ZXJPbmUtYm9hcmQsXG4uYm9hcmRzID4gLnBsYXllclR3by1ib2FyZCB7XG4gIHdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgb3V0bGluZTogMC41cHggc29saWQgcmdiKDExOCwgMTE4LCAxMTgsIDAuNik7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICBtYXJnaW46IDIwcHg7XG59XG5cbi5wbGF5ZXJPbmUtYm9hcmQge1xuICBncmlkLWNvbHVtbjogMSAvIDI7XG4gIGdyaWQtcm93OiAxIC8gMjtcbn1cblxuLnBsYXllclR3by1ib2FyZCB7XG4gIGdyaWQtY29sdW1uOiAyIC8gMztcbiAgZ3JpZC1yb3c6IDEgLyAyO1xufVxuXG4ucGxheWVyLW9uZS1ib2FyZC1uYW1lIHtcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICBncmlkLXJvdzogMiAvIDM7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xufVxuXG4ucGxheWVyLXR3by1ib2FyZC1uYW1lIHtcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuICBncmlkLXJvdzogMiAvIDM7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xufVxuXG4ucGxheWVyT25lLWJvYXJkLFxuLnBsYXllclR3by1ib2FyZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xufVxuXG4ucGxheWVyT25lLWJvYXJkID4gZGl2LFxuLnBsYXllclR3by1ib2FyZCA+IGRpdiB7XG4gIG91dGxpbmU6IDAuNXB4IHNvbGlkIHJnYmEoMTE4LCAxMTgsIDExOCwgMC42KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvKiB6LWluZGV4OiAxOyAqL1xufVxuXG4ucGxheWVyVHdvLWJvYXJkID4gLnNoaXAtY2VsbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjMpO1xufVxuXG4ucGxheWVyT25lLWJvYXJkID4gLnNoaXAtY2VsbCB7XG4gIG91dGxpbmU6IDAuNXB4IHNvbGlkIHJnYmEoMTE4LCAxMTgsIDExOCwgMC4yKTtcbn1cblxuLnNoaXAge1xuICAvKiB6LWluZGV4OiAyOyAqL1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAyNTUsIDAuMSk7XG4gIG91dGxpbmU6IDFweCBzb2xpZCBibHVlO1xufVxuXG4uc2hpcC5kcm9wcGFibGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDI1NSwgMCwgMC41KTtcbn1cblxuLnNoaXAudW5kcm9wcGFibGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC41KTtcbn1cblxuLmRyYWdnYWJsZSB7XG4gIGN1cnNvcjogbW92ZSAhaW1wb3J0YW50O1xuICB6LWluZGV4OiA1O1xuICAvKiBwb2ludGVyLWV2ZW50czogYWxsO1xuICB0b3VjaC1hY3Rpb246IGFsbDsgKi9cbn1cblxuLyogLnNoaXA6aG92ZXIge1xuICBjdXJzb3I6IG1vdmU7XG59ICovXG5cbltkcmFnZ2FibGU9XCJ0cnVlXCJdIHtcbiAgY3Vyc29yOiBtb3ZlICFpbXBvcnRhbnQ7XG59XG5cbltkcmFnZ2FibGU9XCJ0cnVlXCJdOmhvdmVyIHtcbiAgei1pbmRleDogOTk5OTtcbiAgY3Vyc29yOiBtb3ZlICFpbXBvcnRhbnQ7XG59XG5cbi8qIC5kcmFnZ2FibGUge1xuICBjdXJzb3I6IGFsaWFzO1xufSAqL1xuXG4ubWFya19jb2wge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRvcDogLTIwcHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5tYXJrX3JvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHdpZHRoOiA1MCU7XG4gIGxlZnQ6IC0zMHB4O1xuICB0b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5kcmFnZ2luZyB7XG4gIG91dGxpbmU6IDFweCBncmVlbiBzb2xpZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyNTUsIDAsIDAuNSk7XG59XG5cbltkcm9wcGFibGU9XCJ0cnVlXCJdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMjgsIDAsIDAuMik7XG59XG5cbltkcm9wcGFibGU9XCJmYWxzZVwiXSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjMpO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGlDQUFpQztFQUNqQyxnQkFBZ0I7RUFDaEI7dUJBQ3FCO0VBQ3JCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLDBCQUEwQjtFQUMxQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCwwQkFBMEI7RUFDMUIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5Qiw0QkFBNEI7RUFDNUIsV0FBVztFQUNYLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLGFBQWE7RUFDYiw0Q0FBNEM7RUFDNUMsb0JBQW9CO0VBQ3BCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixvQkFBb0I7QUFDdEI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLHNDQUFzQztBQUN4Qzs7QUFFQTs7RUFFRSw2Q0FBNkM7RUFDN0Msa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLDZDQUE2QztBQUMvQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE1BQU07RUFDTixzQ0FBc0M7RUFDdEMsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVjtzQkFDb0I7QUFDdEI7O0FBRUE7O0dBRUc7O0FBRUg7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBOztHQUVHOztBQUVIO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixXQUFXO0VBQ1gsU0FBUztFQUNULGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpvc2VmaW4rU2Fuczp3Z2h0QDEwMCZmYW1pbHk9TGF0bzp3Z2h0QDMwMCZmYW1pbHk9TnVuaXRvOml0YWwsd2dodEAwLDIwMDswLDMwMDswLDQwMDswLDUwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMCZmYW1pbHk9Um9ib3RvOndnaHRAMTAwJmZhbWlseT1SdWJpazp3Z2h0QDMwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOdW5pdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIC8qIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgdG91Y2gtYWN0aW9uOiBub25lOyAqL1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuLm1haW4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAxZnI7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgLyogcGFkZGluZy10b3A6IDQwcHg7ICovXFxufVxcblxcbi5jb21tYW5kcyB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTVweDtcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxufVxcblxcbi5jb21tYW5kcyA+IGRpdiB7XFxuICAvKiB1c2VyLXNlbGVjdDogbm9uZTsgKi9cXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5jb21tYW5kcyA+IGRpdjpob3ZlciB7XFxuICBjb2xvcjogYmx1ZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogMXB4O1xcbn1cXG5cXG4uYm9hcmRzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA1MHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICAvKiBnYXA6IDIwcHg7ICovXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG4uYm9hcmRzID4gLnBsYXllck9uZS1ib2FyZCxcXG4uYm9hcmRzID4gLnBsYXllclR3by1ib2FyZCB7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgb3V0bGluZTogMC41cHggc29saWQgcmdiKDExOCwgMTE4LCAxMTgsIDAuNik7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIG1hcmdpbjogMjBweDtcXG59XFxuXFxuLnBsYXllck9uZS1ib2FyZCB7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBncmlkLXJvdzogMSAvIDI7XFxufVxcblxcbi5wbGF5ZXJUd28tYm9hcmQge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5cXG4ucGxheWVyLW9uZS1ib2FyZC1uYW1lIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGdyaWQtcm93OiAyIC8gMztcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnBsYXllci10d28tYm9hcmQtbmFtZSB7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5wbGF5ZXJPbmUtYm9hcmQsXFxuLnBsYXllclR3by1ib2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxufVxcblxcbi5wbGF5ZXJPbmUtYm9hcmQgPiBkaXYsXFxuLnBsYXllclR3by1ib2FyZCA+IGRpdiB7XFxuICBvdXRsaW5lOiAwLjVweCBzb2xpZCByZ2JhKDExOCwgMTE4LCAxMTgsIDAuNik7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAvKiB6LWluZGV4OiAxOyAqL1xcbn1cXG5cXG4ucGxheWVyVHdvLWJvYXJkID4gLnNoaXAtY2VsbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC4zKTtcXG59XFxuXFxuLnBsYXllck9uZS1ib2FyZCA+IC5zaGlwLWNlbGwge1xcbiAgb3V0bGluZTogMC41cHggc29saWQgcmdiYSgxMTgsIDExOCwgMTE4LCAwLjIpO1xcbn1cXG5cXG4uc2hpcCB7XFxuICAvKiB6LWluZGV4OiAyOyAqL1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjEpO1xcbiAgb3V0bGluZTogMXB4IHNvbGlkIGJsdWU7XFxufVxcblxcbi5zaGlwLmRyb3BwYWJsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDI1NSwgMCwgMC41KTtcXG59XFxuXFxuLnNoaXAudW5kcm9wcGFibGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNSk7XFxufVxcblxcbi5kcmFnZ2FibGUge1xcbiAgY3Vyc29yOiBtb3ZlICFpbXBvcnRhbnQ7XFxuICB6LWluZGV4OiA1O1xcbiAgLyogcG9pbnRlci1ldmVudHM6IGFsbDtcXG4gIHRvdWNoLWFjdGlvbjogYWxsOyAqL1xcbn1cXG5cXG4vKiAuc2hpcDpob3ZlciB7XFxuICBjdXJzb3I6IG1vdmU7XFxufSAqL1xcblxcbltkcmFnZ2FibGU9XFxcInRydWVcXFwiXSB7XFxuICBjdXJzb3I6IG1vdmUgIWltcG9ydGFudDtcXG59XFxuXFxuW2RyYWdnYWJsZT1cXFwidHJ1ZVxcXCJdOmhvdmVyIHtcXG4gIHotaW5kZXg6IDk5OTk7XFxuICBjdXJzb3I6IG1vdmUgIWltcG9ydGFudDtcXG59XFxuXFxuLyogLmRyYWdnYWJsZSB7XFxuICBjdXJzb3I6IGFsaWFzO1xcbn0gKi9cXG5cXG4ubWFya19jb2wge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0b3A6IC0yMHB4O1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5tYXJrX3JvdyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIHdpZHRoOiA1MCU7XFxuICBsZWZ0OiAtMzBweDtcXG4gIHRvcDogMTBweDtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4uZHJhZ2dpbmcge1xcbiAgb3V0bGluZTogMXB4IGdyZWVuIHNvbGlkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyNTUsIDAsIDAuNSk7XFxufVxcblxcbltkcm9wcGFibGU9XFxcInRydWVcXFwiXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEyOCwgMCwgMC4yKTtcXG59XFxuXFxuW2Ryb3BwYWJsZT1cXFwiZmFsc2VcXFwiXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4zKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1jeWNsZVxuaW1wb3J0IGFkZEV2ZW50TGlzdGVuZXJzIGZyb20gXCIuL2V2ZW50TWFuYWdlclwiO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBwcmVmZXItY29uc3QgKi9cbmNvbnN0IERPTUhhbmRsZXIgPSAoKCkgPT4ge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gIGxldCBwbGF5ZXJPbmVCb2FyZCA9IG51bGw7XG4gIGxldCBwbGF5ZXJUd29Cb2FyZCA9IG51bGw7XG4gIGxldCBwbGF5ZXJPbmVTaGlwcyA9IG51bGw7XG4gIGxldCBwbGF5ZXJUd29TaGlwcyA9IG51bGw7XG5cbiAgY29uc3Qgc3RhdGljTGF5b3V0RWxlbWVudHMgPSBbXG4gICAge1xuICAgICAgdHlwZTogXCJkaXZcIixcbiAgICAgIGNsYXNzOiBcIm1haW5cIixcbiAgICAgIGNoaWxkcmVuRWxlbWVudHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6IFwiZGl2XCIsXG4gICAgICAgICAgY2xhc3M6IFwiaGVhZGVyXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiBcImRpdlwiLFxuICAgICAgICAgIGNsYXNzOiBcImNvbnRlbnRcIixcbiAgICAgICAgICBjaGlsZHJlbkVsZW1lbnRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHR5cGU6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIGNsYXNzOiBcImNvbW1hbmRzXCIsXG4gICAgICAgICAgICAgIGNoaWxkcmVuRWxlbWVudHM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0eXBlOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IFwicmFuZG9taXplXCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogXCJyYW5kb21pemVcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICBjbGFzczogXCJzdGFydC1nYW1lXCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogXCJzdGFydFwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0eXBlOiBcImRpdlwiLFxuICAgICAgICAgICAgICBjbGFzczogXCJib2FyZHNcIixcbiAgICAgICAgICAgICAgY2hpbGRyZW5FbGVtZW50czogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICBjbGFzczogXCJwbGF5ZXJPbmUtYm9hcmRcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICBjbGFzczogXCJwbGF5ZXJUd28tYm9hcmRcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICBjbGFzczogXCJwbGF5ZXItb25lLWJvYXJkLW5hbWVcIixcbiAgICAgICAgICAgICAgICAgIHRleHRDb250ZW50OiBcIllvdXIgYm9hcmRcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICBjbGFzczogXCJwbGF5ZXItdHdvLWJvYXJkLW5hbWVcIixcbiAgICAgICAgICAgICAgICAgIHRleHRDb250ZW50OiBcIk9wcG9uZW50J3MgYm9hcmRcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICBdO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZVBhZ2VMYXlvdXQocGFyZW50LCB0cmVlKSB7XG4gICAgdHJlZS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50LnR5cGUpO1xuICAgICAgaWYgKGVsZW1lbnQuY2xhc3MpIHtcbiAgICAgICAgbmV3RWxlbWVudC5jbGFzc0xpc3QuYWRkKGVsZW1lbnQuY2xhc3MpO1xuICAgICAgfVxuICAgICAgaWYgKGVsZW1lbnQudGV4dENvbnRlbnQpIHtcbiAgICAgICAgbmV3RWxlbWVudC50ZXh0Q29udGVudCA9IGVsZW1lbnQudGV4dENvbnRlbnQ7XG4gICAgICB9XG4gICAgICBwYXJlbnQuYXBwZW5kKG5ld0VsZW1lbnQpO1xuICAgICAgaWYgKGVsZW1lbnQuY2hpbGRyZW5FbGVtZW50cykge1xuICAgICAgICBjcmVhdGVQYWdlTGF5b3V0KG5ld0VsZW1lbnQsIGVsZW1lbnQuY2hpbGRyZW5FbGVtZW50cyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVCb2FyZENlbGxzKCkge1xuICAgIGNvbnN0IHBsYXllck9uZUJvYXJkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXJPbmUtYm9hcmRcIik7XG4gICAgY29uc3QgcGxheWVyVHdvQm9hcmREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllclR3by1ib2FyZFwiKTtcblxuICAgIERPTUhhbmRsZXIucGxheWVyT25lQm9hcmQuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgbmV3Q2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBuZXdDZWxsLmNsYXNzTGlzdC5hZGQoZWxlbWVudC5jb29yZGluYXRlcyk7XG4gICAgICBuZXdDZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xuICAgICAgaWYgKGVsZW1lbnQub2NjdXBpZWQpIHtcbiAgICAgICAgbmV3Q2VsbC5zZXRBdHRyaWJ1dGUoXCJkcm9wcGFibGVcIiwgZmFsc2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3Q2VsbC5zZXRBdHRyaWJ1dGUoXCJkcm9wcGFibGVcIiwgdHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIHBsYXllck9uZUJvYXJkRGl2LmFwcGVuZChuZXdDZWxsKTtcblxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWxvbmUtYmxvY2tzXG4gICAgICB7XG4gICAgICAgIGlmIChuZXdDZWxsLmNsYXNzTGlzdFswXSA9PT0gXCIxLDFcIikge1xuICAgICAgICAgIGNvbnN0IG1hcmtDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIG1hcmtDb2wuY2xhc3NMaXN0LmFkZChcIm1hcmtfY29sXCIpO1xuICAgICAgICAgIG1hcmtDb2wudGV4dENvbnRlbnQgPSBcIkFcIjtcbiAgICAgICAgICBuZXdDZWxsLmFwcGVuZChtYXJrQ29sKTtcbiAgICAgICAgICBjb25zdCBtYXJrUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBtYXJrUm93LmNsYXNzTGlzdC5hZGQoXCJtYXJrX3Jvd1wiKTtcbiAgICAgICAgICBtYXJrUm93LnRleHRDb250ZW50ID0gXCIxXCI7XG4gICAgICAgICAgbmV3Q2VsbC5hcHBlbmQobWFya1Jvdyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld0NlbGwuY2xhc3NMaXN0WzBdID09PSBcIjEsMlwiKSB7XG4gICAgICAgICAgY29uc3QgbWFya0NvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgbWFya0NvbC5jbGFzc0xpc3QuYWRkKFwibWFya19jb2xcIik7XG4gICAgICAgICAgbWFya0NvbC50ZXh0Q29udGVudCA9IFwiQlwiO1xuICAgICAgICAgIG5ld0NlbGwuYXBwZW5kKG1hcmtDb2wpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdDZWxsLmNsYXNzTGlzdFswXSA9PT0gXCIxLDNcIikge1xuICAgICAgICAgIGNvbnN0IG1hcmtDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIG1hcmtDb2wuY2xhc3NMaXN0LmFkZChcIm1hcmtfY29sXCIpO1xuICAgICAgICAgIG1hcmtDb2wudGV4dENvbnRlbnQgPSBcIkNcIjtcbiAgICAgICAgICBuZXdDZWxsLmFwcGVuZChtYXJrQ29sKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3Q2VsbC5jbGFzc0xpc3RbMF0gPT09IFwiMSw0XCIpIHtcbiAgICAgICAgICBjb25zdCBtYXJrQ29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBtYXJrQ29sLmNsYXNzTGlzdC5hZGQoXCJtYXJrX2NvbFwiKTtcbiAgICAgICAgICBtYXJrQ29sLnRleHRDb250ZW50ID0gXCJEXCI7XG4gICAgICAgICAgbmV3Q2VsbC5hcHBlbmQobWFya0NvbCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld0NlbGwuY2xhc3NMaXN0WzBdID09PSBcIjEsNVwiKSB7XG4gICAgICAgICAgY29uc3QgbWFya0NvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgbWFya0NvbC5jbGFzc0xpc3QuYWRkKFwibWFya19jb2xcIik7XG4gICAgICAgICAgbWFya0NvbC50ZXh0Q29udGVudCA9IFwiRVwiO1xuICAgICAgICAgIG5ld0NlbGwuYXBwZW5kKG1hcmtDb2wpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdDZWxsLmNsYXNzTGlzdFswXSA9PT0gXCIxLDZcIikge1xuICAgICAgICAgIGNvbnN0IG1hcmtDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIG1hcmtDb2wuY2xhc3NMaXN0LmFkZChcIm1hcmtfY29sXCIpO1xuICAgICAgICAgIG1hcmtDb2wudGV4dENvbnRlbnQgPSBcIkZcIjtcbiAgICAgICAgICBuZXdDZWxsLmFwcGVuZChtYXJrQ29sKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3Q2VsbC5jbGFzc0xpc3RbMF0gPT09IFwiMSw3XCIpIHtcbiAgICAgICAgICBjb25zdCBtYXJrQ29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBtYXJrQ29sLmNsYXNzTGlzdC5hZGQoXCJtYXJrX2NvbFwiKTtcbiAgICAgICAgICBtYXJrQ29sLnRleHRDb250ZW50ID0gXCJHXCI7XG4gICAgICAgICAgbmV3Q2VsbC5hcHBlbmQobWFya0NvbCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld0NlbGwuY2xhc3NMaXN0WzBdID09PSBcIjEsOFwiKSB7XG4gICAgICAgICAgY29uc3QgbWFya0NvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgbWFya0NvbC5jbGFzc0xpc3QuYWRkKFwibWFya19jb2xcIik7XG4gICAgICAgICAgbWFya0NvbC50ZXh0Q29udGVudCA9IFwiSFwiO1xuICAgICAgICAgIG5ld0NlbGwuYXBwZW5kKG1hcmtDb2wpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdDZWxsLmNsYXNzTGlzdFswXSA9PT0gXCIxLDlcIikge1xuICAgICAgICAgIGNvbnN0IG1hcmtDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIG1hcmtDb2wuY2xhc3NMaXN0LmFkZChcIm1hcmtfY29sXCIpO1xuICAgICAgICAgIG1hcmtDb2wudGV4dENvbnRlbnQgPSBcIklcIjtcbiAgICAgICAgICBuZXdDZWxsLmFwcGVuZChtYXJrQ29sKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3Q2VsbC5jbGFzc0xpc3RbMF0gPT09IFwiMSwxMFwiKSB7XG4gICAgICAgICAgY29uc3QgbWFya0NvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgbWFya0NvbC5jbGFzc0xpc3QuYWRkKFwibWFya19jb2xcIik7XG4gICAgICAgICAgbWFya0NvbC50ZXh0Q29udGVudCA9IFwiSlwiO1xuICAgICAgICAgIG5ld0NlbGwuYXBwZW5kKG1hcmtDb2wpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdDZWxsLmNsYXNzTGlzdFswXSA9PT0gXCIyLDFcIikge1xuICAgICAgICAgIGNvbnN0IG1hcmtSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIG1hcmtSb3cuY2xhc3NMaXN0LmFkZChcIm1hcmtfcm93XCIpO1xuICAgICAgICAgIG1hcmtSb3cudGV4dENvbnRlbnQgPSBcIjJcIjtcbiAgICAgICAgICBuZXdDZWxsLmFwcGVuZChtYXJrUm93KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3Q2VsbC5jbGFzc0xpc3RbMF0gPT09IFwiMywxXCIpIHtcbiAgICAgICAgICBjb25zdCBtYXJrUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBtYXJrUm93LmNsYXNzTGlzdC5hZGQoXCJtYXJrX3Jvd1wiKTtcbiAgICAgICAgICBtYXJrUm93LnRleHRDb250ZW50ID0gXCIzXCI7XG4gICAgICAgICAgbmV3Q2VsbC5hcHBlbmQobWFya1Jvdyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld0NlbGwuY2xhc3NMaXN0WzBdID09PSBcIjQsMVwiKSB7XG4gICAgICAgICAgY29uc3QgbWFya1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgbWFya1Jvdy5jbGFzc0xpc3QuYWRkKFwibWFya19yb3dcIik7XG4gICAgICAgICAgbWFya1Jvdy50ZXh0Q29udGVudCA9IFwiNFwiO1xuICAgICAgICAgIG5ld0NlbGwuYXBwZW5kKG1hcmtSb3cpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdDZWxsLmNsYXNzTGlzdFswXSA9PT0gXCI1LDFcIikge1xuICAgICAgICAgIGNvbnN0IG1hcmtSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIG1hcmtSb3cuY2xhc3NMaXN0LmFkZChcIm1hcmtfcm93XCIpO1xuICAgICAgICAgIG1hcmtSb3cudGV4dENvbnRlbnQgPSBcIjVcIjtcbiAgICAgICAgICBuZXdDZWxsLmFwcGVuZChtYXJrUm93KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3Q2VsbC5jbGFzc0xpc3RbMF0gPT09IFwiNiwxXCIpIHtcbiAgICAgICAgICBjb25zdCBtYXJrUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBtYXJrUm93LmNsYXNzTGlzdC5hZGQoXCJtYXJrX3Jvd1wiKTtcbiAgICAgICAgICBtYXJrUm93LnRleHRDb250ZW50ID0gXCI2XCI7XG4gICAgICAgICAgbmV3Q2VsbC5hcHBlbmQobWFya1Jvdyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld0NlbGwuY2xhc3NMaXN0WzBdID09PSBcIjcsMVwiKSB7XG4gICAgICAgICAgY29uc3QgbWFya1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgbWFya1Jvdy5jbGFzc0xpc3QuYWRkKFwibWFya19yb3dcIik7XG4gICAgICAgICAgbWFya1Jvdy50ZXh0Q29udGVudCA9IFwiN1wiO1xuICAgICAgICAgIG5ld0NlbGwuYXBwZW5kKG1hcmtSb3cpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdDZWxsLmNsYXNzTGlzdFswXSA9PT0gXCI4LDFcIikge1xuICAgICAgICAgIGNvbnN0IG1hcmtSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIG1hcmtSb3cuY2xhc3NMaXN0LmFkZChcIm1hcmtfcm93XCIpO1xuICAgICAgICAgIG1hcmtSb3cudGV4dENvbnRlbnQgPSBcIjhcIjtcbiAgICAgICAgICBuZXdDZWxsLmFwcGVuZChtYXJrUm93KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3Q2VsbC5jbGFzc0xpc3RbMF0gPT09IFwiOSwxXCIpIHtcbiAgICAgICAgICBjb25zdCBtYXJrUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBtYXJrUm93LmNsYXNzTGlzdC5hZGQoXCJtYXJrX3Jvd1wiKTtcbiAgICAgICAgICBtYXJrUm93LnRleHRDb250ZW50ID0gXCI5XCI7XG4gICAgICAgICAgbmV3Q2VsbC5hcHBlbmQobWFya1Jvdyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld0NlbGwuY2xhc3NMaXN0WzBdID09PSBcIjEwLDFcIikge1xuICAgICAgICAgIGNvbnN0IG1hcmtSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIG1hcmtSb3cuY2xhc3NMaXN0LmFkZChcIm1hcmtfcm93XCIpO1xuICAgICAgICAgIG1hcmtSb3cudGV4dENvbnRlbnQgPSBcIjEwXCI7XG4gICAgICAgICAgbmV3Q2VsbC5hcHBlbmQobWFya1Jvdyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIERPTUhhbmRsZXIucGxheWVyVHdvQm9hcmQuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgbmV3Q2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBuZXdDZWxsLmNsYXNzTGlzdC5hZGQoZWxlbWVudC5jb29yZGluYXRlcyk7XG4gICAgICBuZXdDZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xuICAgICAgcGxheWVyVHdvQm9hcmREaXYuYXBwZW5kKG5ld0NlbGwpO1xuICAgICAgaWYgKG5ld0NlbGwuY2xhc3NMaXN0WzBdID09PSBcIjEsMVwiKSB7XG4gICAgICAgIGNvbnN0IG1hcmtDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBtYXJrQ29sLmNsYXNzTGlzdC5hZGQoXCJtYXJrX2NvbFwiKTtcbiAgICAgICAgbWFya0NvbC50ZXh0Q29udGVudCA9IFwiQVwiO1xuICAgICAgICBuZXdDZWxsLmFwcGVuZChtYXJrQ29sKTtcbiAgICAgICAgY29uc3QgbWFya1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1hcmtSb3cuY2xhc3NMaXN0LmFkZChcIm1hcmtfcm93XCIpO1xuICAgICAgICBtYXJrUm93LnRleHRDb250ZW50ID0gXCIxXCI7XG4gICAgICAgIG5ld0NlbGwuYXBwZW5kKG1hcmtSb3cpO1xuICAgICAgfVxuICAgICAgaWYgKG5ld0NlbGwuY2xhc3NMaXN0WzBdID09PSBcIjEsMlwiKSB7XG4gICAgICAgIGNvbnN0IG1hcmtDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBtYXJrQ29sLmNsYXNzTGlzdC5hZGQoXCJtYXJrX2NvbFwiKTtcbiAgICAgICAgbWFya0NvbC50ZXh0Q29udGVudCA9IFwiQlwiO1xuICAgICAgICBuZXdDZWxsLmFwcGVuZChtYXJrQ29sKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXdDZWxsLmNsYXNzTGlzdFswXSA9PT0gXCIxLDNcIikge1xuICAgICAgICBjb25zdCBtYXJrQ29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWFya0NvbC5jbGFzc0xpc3QuYWRkKFwibWFya19jb2xcIik7XG4gICAgICAgIG1hcmtDb2wudGV4dENvbnRlbnQgPSBcIkNcIjtcbiAgICAgICAgbmV3Q2VsbC5hcHBlbmQobWFya0NvbCk7XG4gICAgICB9XG4gICAgICBpZiAobmV3Q2VsbC5jbGFzc0xpc3RbMF0gPT09IFwiMSw0XCIpIHtcbiAgICAgICAgY29uc3QgbWFya0NvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1hcmtDb2wuY2xhc3NMaXN0LmFkZChcIm1hcmtfY29sXCIpO1xuICAgICAgICBtYXJrQ29sLnRleHRDb250ZW50ID0gXCJEXCI7XG4gICAgICAgIG5ld0NlbGwuYXBwZW5kKG1hcmtDb2wpO1xuICAgICAgfVxuICAgICAgaWYgKG5ld0NlbGwuY2xhc3NMaXN0WzBdID09PSBcIjEsNVwiKSB7XG4gICAgICAgIGNvbnN0IG1hcmtDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBtYXJrQ29sLmNsYXNzTGlzdC5hZGQoXCJtYXJrX2NvbFwiKTtcbiAgICAgICAgbWFya0NvbC50ZXh0Q29udGVudCA9IFwiRVwiO1xuICAgICAgICBuZXdDZWxsLmFwcGVuZChtYXJrQ29sKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXdDZWxsLmNsYXNzTGlzdFswXSA9PT0gXCIxLDZcIikge1xuICAgICAgICBjb25zdCBtYXJrQ29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWFya0NvbC5jbGFzc0xpc3QuYWRkKFwibWFya19jb2xcIik7XG4gICAgICAgIG1hcmtDb2wudGV4dENvbnRlbnQgPSBcIkZcIjtcbiAgICAgICAgbmV3Q2VsbC5hcHBlbmQobWFya0NvbCk7XG4gICAgICB9XG4gICAgICBpZiAobmV3Q2VsbC5jbGFzc0xpc3RbMF0gPT09IFwiMSw3XCIpIHtcbiAgICAgICAgY29uc3QgbWFya0NvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1hcmtDb2wuY2xhc3NMaXN0LmFkZChcIm1hcmtfY29sXCIpO1xuICAgICAgICBtYXJrQ29sLnRleHRDb250ZW50ID0gXCJHXCI7XG4gICAgICAgIG5ld0NlbGwuYXBwZW5kKG1hcmtDb2wpO1xuICAgICAgfVxuICAgICAgaWYgKG5ld0NlbGwuY2xhc3NMaXN0WzBdID09PSBcIjEsOFwiKSB7XG4gICAgICAgIGNvbnN0IG1hcmtDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBtYXJrQ29sLmNsYXNzTGlzdC5hZGQoXCJtYXJrX2NvbFwiKTtcbiAgICAgICAgbWFya0NvbC50ZXh0Q29udGVudCA9IFwiSFwiO1xuICAgICAgICBuZXdDZWxsLmFwcGVuZChtYXJrQ29sKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXdDZWxsLmNsYXNzTGlzdFswXSA9PT0gXCIxLDlcIikge1xuICAgICAgICBjb25zdCBtYXJrQ29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWFya0NvbC5jbGFzc0xpc3QuYWRkKFwibWFya19jb2xcIik7XG4gICAgICAgIG1hcmtDb2wudGV4dENvbnRlbnQgPSBcIklcIjtcbiAgICAgICAgbmV3Q2VsbC5hcHBlbmQobWFya0NvbCk7XG4gICAgICB9XG4gICAgICBpZiAobmV3Q2VsbC5jbGFzc0xpc3RbMF0gPT09IFwiMSwxMFwiKSB7XG4gICAgICAgIGNvbnN0IG1hcmtDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBtYXJrQ29sLmNsYXNzTGlzdC5hZGQoXCJtYXJrX2NvbFwiKTtcbiAgICAgICAgbWFya0NvbC50ZXh0Q29udGVudCA9IFwiSlwiO1xuICAgICAgICBuZXdDZWxsLmFwcGVuZChtYXJrQ29sKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXdDZWxsLmNsYXNzTGlzdFswXSA9PT0gXCIyLDFcIikge1xuICAgICAgICBjb25zdCBtYXJrUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWFya1Jvdy5jbGFzc0xpc3QuYWRkKFwibWFya19yb3dcIik7XG4gICAgICAgIG1hcmtSb3cudGV4dENvbnRlbnQgPSBcIjJcIjtcbiAgICAgICAgbmV3Q2VsbC5hcHBlbmQobWFya1Jvdyk7XG4gICAgICB9XG4gICAgICBpZiAobmV3Q2VsbC5jbGFzc0xpc3RbMF0gPT09IFwiMywxXCIpIHtcbiAgICAgICAgY29uc3QgbWFya1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1hcmtSb3cuY2xhc3NMaXN0LmFkZChcIm1hcmtfcm93XCIpO1xuICAgICAgICBtYXJrUm93LnRleHRDb250ZW50ID0gXCIzXCI7XG4gICAgICAgIG5ld0NlbGwuYXBwZW5kKG1hcmtSb3cpO1xuICAgICAgfVxuICAgICAgaWYgKG5ld0NlbGwuY2xhc3NMaXN0WzBdID09PSBcIjQsMVwiKSB7XG4gICAgICAgIGNvbnN0IG1hcmtSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBtYXJrUm93LmNsYXNzTGlzdC5hZGQoXCJtYXJrX3Jvd1wiKTtcbiAgICAgICAgbWFya1Jvdy50ZXh0Q29udGVudCA9IFwiNFwiO1xuICAgICAgICBuZXdDZWxsLmFwcGVuZChtYXJrUm93KTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXdDZWxsLmNsYXNzTGlzdFswXSA9PT0gXCI1LDFcIikge1xuICAgICAgICBjb25zdCBtYXJrUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWFya1Jvdy5jbGFzc0xpc3QuYWRkKFwibWFya19yb3dcIik7XG4gICAgICAgIG1hcmtSb3cudGV4dENvbnRlbnQgPSBcIjVcIjtcbiAgICAgICAgbmV3Q2VsbC5hcHBlbmQobWFya1Jvdyk7XG4gICAgICB9XG4gICAgICBpZiAobmV3Q2VsbC5jbGFzc0xpc3RbMF0gPT09IFwiNiwxXCIpIHtcbiAgICAgICAgY29uc3QgbWFya1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1hcmtSb3cuY2xhc3NMaXN0LmFkZChcIm1hcmtfcm93XCIpO1xuICAgICAgICBtYXJrUm93LnRleHRDb250ZW50ID0gXCI2XCI7XG4gICAgICAgIG5ld0NlbGwuYXBwZW5kKG1hcmtSb3cpO1xuICAgICAgfVxuICAgICAgaWYgKG5ld0NlbGwuY2xhc3NMaXN0WzBdID09PSBcIjcsMVwiKSB7XG4gICAgICAgIGNvbnN0IG1hcmtSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBtYXJrUm93LmNsYXNzTGlzdC5hZGQoXCJtYXJrX3Jvd1wiKTtcbiAgICAgICAgbWFya1Jvdy50ZXh0Q29udGVudCA9IFwiN1wiO1xuICAgICAgICBuZXdDZWxsLmFwcGVuZChtYXJrUm93KTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXdDZWxsLmNsYXNzTGlzdFswXSA9PT0gXCI4LDFcIikge1xuICAgICAgICBjb25zdCBtYXJrUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWFya1Jvdy5jbGFzc0xpc3QuYWRkKFwibWFya19yb3dcIik7XG4gICAgICAgIG1hcmtSb3cudGV4dENvbnRlbnQgPSBcIjhcIjtcbiAgICAgICAgbmV3Q2VsbC5hcHBlbmQobWFya1Jvdyk7XG4gICAgICB9XG4gICAgICBpZiAobmV3Q2VsbC5jbGFzc0xpc3RbMF0gPT09IFwiMiwxXCIpIHtcbiAgICAgICAgY29uc3QgbWFya1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1hcmtSb3cuY2xhc3NMaXN0LmFkZChcIm1hcmtfcm93XCIpO1xuICAgICAgICBtYXJrUm93LnRleHRDb250ZW50ID0gXCIyXCI7XG4gICAgICAgIG5ld0NlbGwuYXBwZW5kKG1hcmtSb3cpO1xuICAgICAgfVxuICAgICAgaWYgKG5ld0NlbGwuY2xhc3NMaXN0WzBdID09PSBcIjksMVwiKSB7XG4gICAgICAgIGNvbnN0IG1hcmtSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBtYXJrUm93LmNsYXNzTGlzdC5hZGQoXCJtYXJrX3Jvd1wiKTtcbiAgICAgICAgbWFya1Jvdy50ZXh0Q29udGVudCA9IFwiOVwiO1xuICAgICAgICBuZXdDZWxsLmFwcGVuZChtYXJrUm93KTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXdDZWxsLmNsYXNzTGlzdFswXSA9PT0gXCIxMCwxXCIpIHtcbiAgICAgICAgY29uc3QgbWFya1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1hcmtSb3cuY2xhc3NMaXN0LmFkZChcIm1hcmtfcm93XCIpO1xuICAgICAgICBtYXJrUm93LnRleHRDb250ZW50ID0gXCIxMFwiO1xuICAgICAgICBuZXdDZWxsLmFwcGVuZChtYXJrUm93KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbmREaXZCeUNvb3JkaW5hdGVzKGNvb3JkaW5hdGVzLCBwYXJlbnREaXYpIHtcbiAgICBjb25zdCBkaXYgPSBwYXJlbnREaXYucXVlcnlTZWxlY3RvcihgW2NsYXNzKj1cIiR7Y29vcmRpbmF0ZXN9XCJdLmNlbGxgKTtcbiAgICByZXR1cm4gZGl2O1xuICB9XG5cbiAgZnVuY3Rpb24gZHJhd1NoaXBzKCkge1xuICAgIGNvbnN0IHBhcmVudERpdkJvYXJkT25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXJPbmUtYm9hcmRcIik7XG4gICAgRE9NSGFuZGxlci5wbGF5ZXJPbmVTaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhgJHtzaGlwLmNvb3JkaW5hdGVzWzBdWzBdfSwke3NoaXAuY29vcmRpbmF0ZXNbMF1bMV19YCk7XG4gICAgICBjb25zdCBkaXYgPSBmaW5kRGl2QnlDb29yZGluYXRlcyhcbiAgICAgICAgYCR7c2hpcC5jb29yZGluYXRlc1swXVswXX0sJHtzaGlwLmNvb3JkaW5hdGVzWzBdWzFdfWAsXG4gICAgICAgIHBhcmVudERpdkJvYXJkT25lLFxuICAgICAgKTtcblxuICAgICAgY29uc3Qgc2hpcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBzaGlwRGl2LmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgICAgc2hpcERpdi5jbGFzc0xpc3QuYWRkKFwiZHJhZ2dhYmxlXCIpO1xuICAgICAgc2hpcERpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBzaGlwLmlkKTtcbiAgICAgIC8vIHNoaXBEaXYuc2V0QXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIsIHRydWUpO1xuICAgICAgLy8gc2hpcERpdi5zZXRBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIiwgdHJ1ZSk7XG5cbiAgICAgIGlmIChzaGlwLnBvc2l0aW9uID09PSBcImhcIikge1xuICAgICAgICBjb25zdCB3aWR0aCA9IDQwICogc2hpcC5sZW5ndGg7XG4gICAgICAgIHNoaXBEaXYuc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGA7XG4gICAgICAgIHNoaXBEaXYuc3R5bGUuaGVpZ2h0ID0gXCI0MHB4XCI7XG4gICAgICB9XG4gICAgICBpZiAoc2hpcC5wb3NpdGlvbiA9PT0gXCJ2XCIpIHtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gNDAgKiBzaGlwLmxlbmd0aDtcbiAgICAgICAgc2hpcERpdi5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgO1xuICAgICAgICBzaGlwRGl2LnN0eWxlLndpZHRoID0gXCI0MHB4XCI7XG4gICAgICB9XG4gICAgICBkaXYuYXBwZW5kKHNoaXBEaXYpO1xuXG4gICAgICBzaGlwLmNvb3JkaW5hdGVzLmZvckVhY2goKGMpID0+IHtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gYCR7Y1swXX0sJHtjWzFdfWA7XG4gICAgICAgIGNvbnN0IHNoaXBDZWxscyA9IEFycmF5LmZyb20oXG4gICAgICAgICAgcGFyZW50RGl2Qm9hcmRPbmUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJkaXZcIiksXG4gICAgICAgICkuZmlsdGVyKChlbGVtKSA9PiBlbGVtLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpKTtcbiAgICAgICAgc2hpcENlbGxzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAvLyBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzaGlwLWNlbGxcIik7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBET01IYW5kbGVyLnBsYXllclR3b1NoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIHNoaXAuY29vcmRpbmF0ZXMuZm9yRWFjaCgoYykgPT4ge1xuICAgICAgICBjb25zdCBwYXJlbnREaXZCb2FyZFR3byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyVHdvLWJvYXJkXCIpO1xuICAgICAgICBjb25zdCBkaXYgPSBmaW5kRGl2QnlDb29yZGluYXRlcyhgJHtjWzBdfSwke2NbMV19YCwgcGFyZW50RGl2Qm9hcmRUd28pO1xuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChcInNoaXAtY2VsbFwiKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRG9tKCkge1xuICAgIGNyZWF0ZVBhZ2VMYXlvdXQoYm9keSwgc3RhdGljTGF5b3V0RWxlbWVudHMpO1xuICAgIGNyZWF0ZUJvYXJkQ2VsbHMoKTtcbiAgICBkcmF3U2hpcHMoKTtcbiAgICBhZGRFdmVudExpc3RlbmVycygpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwbGF5ZXJPbmVCb2FyZCxcbiAgICBwbGF5ZXJUd29Cb2FyZCxcbiAgICBwbGF5ZXJPbmVTaGlwcyxcbiAgICBwbGF5ZXJUd29TaGlwcyxcbiAgICBjcmVhdGVEb20sXG4gICAgZmluZERpdkJ5Q29vcmRpbmF0ZXMsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBET01IYW5kbGVyO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbWF4LWNsYXNzZXMtcGVyLWZpbGUgKi9cblxuY2xhc3MgVmVydGV4IHtcbiAgY29uc3RydWN0b3IoY29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLmNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXM7XG4gICAgdGhpcy5hZGphY2VuY3lMaXN0ID0gW107XG4gICAgdGhpcy5vY2N1cGllZCA9IGZhbHNlO1xuICAgIHRoaXMub2NjdXBpZWRCeVNoaXAgPSBmYWxzZTtcbiAgfVxuXG4gIGFkZE5laWdoYm9yKHZlcnRleCkge1xuICAgIGlmICghdGhpcy5hZGphY2VuY3lMaXN0LmluY2x1ZGVzKHZlcnRleCkpIHtcbiAgICAgIHRoaXMuYWRqYWNlbmN5TGlzdC5wdXNoKHZlcnRleCk7XG4gICAgfVxuICB9XG59XG5cbmNsYXNzIEdyYXBoIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy52ZXJ0aWNlcyA9IFtdO1xuICB9XG5cbiAgYWRkVmVydGV4KHgsIHkpIHtcbiAgICBjb25zdCB2ZXJ0ZXggPSBuZXcgVmVydGV4KFt4LCB5XSk7XG4gICAgdGhpcy52ZXJ0aWNlcy5wdXNoKHZlcnRleCk7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2xhc3MtbWV0aG9kcy11c2UtdGhpc1xuICBhZGRFZGdlKHZlcnRleDEsIHZlcnRleDIpIHtcbiAgICB2ZXJ0ZXgxLmFkZE5laWdoYm9yKHZlcnRleDIpO1xuICAgIHZlcnRleDIuYWRkTmVpZ2hib3IodmVydGV4MSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR3JhcGg7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWN5Y2xlXG5pbXBvcnQgZ2FtZUxvb3AsIHsgcGxheWVyT25lQm9hcmQgfSBmcm9tIFwiLlwiO1xuaW1wb3J0IERPTUhhbmRsZXIgZnJvbSBcIi4vRE9NSGFuZGxlclwiO1xuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgY29uc3QgcmFuZG9taXplQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yYW5kb21pemVcIik7XG4gIHJhbmRvbWl6ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGdhbWVMb29wKCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhZGRFdmVudExpc3RlbmVycztcblxuZnVuY3Rpb24gYWRkRG9jdW1lbnRFdmVudExpc3RlbmVycygpIHtcbiAgbGV0IGRyYWdnYWJsZUVsZW1lbnQgPSBudWxsO1xuICBsZXQgZHJhZ2dhYmxlRWxlbWVudFJlY3QgPSBudWxsO1xuXG4gIGxldCBpc0RyYWdnaW5nID0gZmFsc2U7XG4gIGxldCBvZmZTZXRYO1xuICBsZXQgb2ZmU2V0WTtcbiAgbGV0IG1vdXNlRG93bk9mZnNldEhvciA9IDA7XG4gIGxldCBtb3VzZURvd25PZmZzZXRWZXIgPSAwO1xuICBsZXQgb3JpZ2luYWxFbGVtZW50QmVsb3cgPSBudWxsO1xuICBsZXQgZWxlbWVudEJlbG93ID0gbnVsbDtcbiAgbGV0IHByZXZpb3VzRWxlbWVudEJlbG93ID0gbnVsbDtcblxuICAvLyBGaW5kIGNlbGxzIHVuZGVyIHRoZSBzaGlwXG4gIGZ1bmN0aW9uIGZpbmRTaGlwQ2VsbHMoZmlyc3RFbGVtZW50LCBvcmllbnRhdGlvbiwgbGVuZ3RoKSB7XG4gICAgY29uc3QgY2VsbHMgPSBbXTtcbiAgICBjZWxscy5wdXNoKGZpcnN0RWxlbWVudCk7XG4gICAgY29uc3QgZmlyc3RDZWxsQ2xhc3NBcnJheSA9IGZpcnN0RWxlbWVudC5jbGFzc0xpc3RbMF1cbiAgICAgIC5zcGxpdChcIixcIilcbiAgICAgIC5tYXAoTnVtYmVyKTtcbiAgICBjb25zdCBwYXJlbnREaXZCb2FyZE9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyT25lLWJvYXJkXCIpO1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJoXCIpIHtcbiAgICAgICAgY29uc3QgY2VsbCA9IERPTUhhbmRsZXIuZmluZERpdkJ5Q29vcmRpbmF0ZXMoXG4gICAgICAgICAgYCR7Zmlyc3RDZWxsQ2xhc3NBcnJheVswXX0sJHtmaXJzdENlbGxDbGFzc0FycmF5WzFdICsgaX1gLFxuICAgICAgICAgIHBhcmVudERpdkJvYXJkT25lLFxuICAgICAgICApO1xuICAgICAgICBjZWxscy5wdXNoKGNlbGwpO1xuICAgICAgfVxuICAgICAgaWYgKG9yaWVudGF0aW9uID09PSBcInZcIikge1xuICAgICAgICBjb25zdCBjZWxsID0gRE9NSGFuZGxlci5maW5kRGl2QnlDb29yZGluYXRlcyhcbiAgICAgICAgICBgJHtmaXJzdENlbGxDbGFzc0FycmF5WzBdICsgaX0sJHtmaXJzdENlbGxDbGFzc0FycmF5WzFdfWAsXG4gICAgICAgICAgcGFyZW50RGl2Qm9hcmRPbmUsXG4gICAgICAgICk7XG4gICAgICAgIGNlbGxzLnB1c2goY2VsbCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjZWxscztcbiAgfVxuXG4gIC8vIEZpbmQgY2VsbHMgdG8gY2hhbmdlIHRvIFwiZHJvcHBhYmxlID0gdHJ1ZVwiIGFmdGVyIGRyYWcgJiBkcm9wcGluZyBhIHNoaXBcbiAgZnVuY3Rpb24gaWRlbnRpZnlDZWxsc1RvTWFrZURyb3BwYWJsZShldmVudCkge1xuICAgIGNvbnN0IHNoaXBPYmplY3QgPSBwbGF5ZXJPbmVCb2FyZC5maW5kU2hpcEJ5SWQoZHJhZ2dhYmxlRWxlbWVudC5pZCk7XG4gICAgaWYgKGV2ZW50LnR5cGUgPT09IFwibW91c2V1cFwiKSB7XG4gICAgICBpZiAoZWxlbWVudEJlbG93ICE9PSBudWxsKSB7XG4gICAgICAgIGlmIChlbGVtZW50QmVsb3cuZ2V0QXR0cmlidXRlKFwiZHJvcHBhYmxlXCIpID09PSBcInRydWVcIikge1xuICAgICAgICAgIGVsZW1lbnRCZWxvdy5hcHBlbmQoZHJhZ2dhYmxlRWxlbWVudCk7XG4gICAgICAgICAgcmV0dXJuIGZpbmRTaGlwQ2VsbHMoXG4gICAgICAgICAgICBlbGVtZW50QmVsb3csXG4gICAgICAgICAgICBzaGlwT2JqZWN0LnBvc2l0aW9uLFxuICAgICAgICAgICAgc2hpcE9iamVjdC5sZW5ndGggLSAxLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsZW1lbnRCZWxvdy5nZXRBdHRyaWJ1dGUoXCJkcm9wcGFibGVcIikgPT09IFwiZmFsc2VcIikge1xuICAgICAgICAgIG9yaWdpbmFsRWxlbWVudEJlbG93LmFwcGVuZChkcmFnZ2FibGVFbGVtZW50KTtcbiAgICAgICAgICByZXR1cm4gZmluZFNoaXBDZWxscyhcbiAgICAgICAgICAgIG9yaWdpbmFsRWxlbWVudEJlbG93LFxuICAgICAgICAgICAgc2hpcE9iamVjdC5wb3NpdGlvbixcbiAgICAgICAgICAgIHNoaXBPYmplY3QubGVuZ3RoIC0gMSxcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvcmlnaW5hbEVsZW1lbnRCZWxvdy5hcHBlbmQoZHJhZ2dhYmxlRWxlbWVudCk7XG4gICAgICAgIHJldHVybiBmaW5kU2hpcENlbGxzKFxuICAgICAgICAgIG9yaWdpbmFsRWxlbWVudEJlbG93LFxuICAgICAgICAgIHNoaXBPYmplY3QucG9zaXRpb24sXG4gICAgICAgICAgc2hpcE9iamVjdC5sZW5ndGggLSAxLFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LnR5cGUgPT09IFwibW91c2Vkb3duXCIpIHtcbiAgICAgIHJldHVybiBmaW5kU2hpcENlbGxzKFxuICAgICAgICBkcmFnZ2FibGVFbGVtZW50LnBhcmVudEVsZW1lbnQsXG4gICAgICAgIHNoaXBPYmplY3QucG9zaXRpb24sXG4gICAgICAgIHNoaXBPYmplY3QubGVuZ3RoIC0gMSxcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLy8gQ2hlY2tzIGlmIGRyb3BwaW5nIHRoZSBzaGlwIG9uIHRoZSBwb3NpdGlvbiB3aWxsIGNhdXNlXG4gIC8vIG92ZXJsYXAgd2l0aCBhbm90aGVyIHNoaXBcbiAgZnVuY3Rpb24gY2hlY2tPdGhlclNoaXBPdmVybGFwKGV2ZW50KSB7XG4gICAgbGV0IG5vT3ZlcmxhcCA9IHRydWU7XG4gICAgaWYgKGRyYWdnYWJsZUVsZW1lbnRSZWN0LndpZHRoID4gNDAgfHwgZHJhZ2dhYmxlRWxlbWVudFJlY3QuaGVpZ2h0ID4gNDApIHtcbiAgICAgIGxldCBsYXN0U2hpcEVsZW1lbnQ7XG5cbiAgICAgIGlmIChkcmFnZ2FibGVFbGVtZW50UmVjdC53aWR0aCA9PT0gODApIHtcbiAgICAgICAgbGFzdFNoaXBFbGVtZW50ID0gZG9jdW1lbnQuZWxlbWVudHNGcm9tUG9pbnQoXG4gICAgICAgICAgZXZlbnQuY2xpZW50WCAtIG1vdXNlRG93bk9mZnNldEhvciArIDQwLFxuICAgICAgICAgIGV2ZW50LmNsaWVudFkgLSBtb3VzZURvd25PZmZzZXRWZXIsXG4gICAgICAgICk7XG4gICAgICB9IGVsc2UgaWYgKGRyYWdnYWJsZUVsZW1lbnRSZWN0LndpZHRoID09PSAxMjApIHtcbiAgICAgICAgbGFzdFNoaXBFbGVtZW50ID0gZG9jdW1lbnQuZWxlbWVudHNGcm9tUG9pbnQoXG4gICAgICAgICAgZXZlbnQuY2xpZW50WCAtIG1vdXNlRG93bk9mZnNldEhvciArIDgwLFxuICAgICAgICAgIGV2ZW50LmNsaWVudFkgLSBtb3VzZURvd25PZmZzZXRWZXIsXG4gICAgICAgICk7XG4gICAgICB9IGVsc2UgaWYgKGRyYWdnYWJsZUVsZW1lbnRSZWN0LndpZHRoID09PSAxNjApIHtcbiAgICAgICAgbGFzdFNoaXBFbGVtZW50ID0gZG9jdW1lbnQuZWxlbWVudHNGcm9tUG9pbnQoXG4gICAgICAgICAgZXZlbnQuY2xpZW50WCAtIG1vdXNlRG93bk9mZnNldEhvciArIDEyMCxcbiAgICAgICAgICBldmVudC5jbGllbnRZIC0gbW91c2VEb3duT2Zmc2V0VmVyLFxuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmIChkcmFnZ2FibGVFbGVtZW50UmVjdC5oZWlnaHQgPT09IDgwKSB7XG4gICAgICAgIGxhc3RTaGlwRWxlbWVudCA9IGRvY3VtZW50LmVsZW1lbnRzRnJvbVBvaW50KFxuICAgICAgICAgIGV2ZW50LmNsaWVudFggLSBtb3VzZURvd25PZmZzZXRIb3IsXG4gICAgICAgICAgZXZlbnQuY2xpZW50WSAtIG1vdXNlRG93bk9mZnNldFZlciArIDQwLFxuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmIChkcmFnZ2FibGVFbGVtZW50UmVjdC5oZWlnaHQgPT09IDEyMCkge1xuICAgICAgICBsYXN0U2hpcEVsZW1lbnQgPSBkb2N1bWVudC5lbGVtZW50c0Zyb21Qb2ludChcbiAgICAgICAgICBldmVudC5jbGllbnRYIC0gbW91c2VEb3duT2Zmc2V0SG9yLFxuICAgICAgICAgIGV2ZW50LmNsaWVudFkgLSBtb3VzZURvd25PZmZzZXRWZXIgKyA4MCxcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAoZHJhZ2dhYmxlRWxlbWVudFJlY3QuaGVpZ2h0ID09PSAxNjApIHtcbiAgICAgICAgbGFzdFNoaXBFbGVtZW50ID0gZG9jdW1lbnQuZWxlbWVudHNGcm9tUG9pbnQoXG4gICAgICAgICAgZXZlbnQuY2xpZW50WCAtIG1vdXNlRG93bk9mZnNldEhvcixcbiAgICAgICAgICBldmVudC5jbGllbnRZIC0gbW91c2VEb3duT2Zmc2V0VmVyICsgMTIwLFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBsYXN0U2hpcEVsZW1lbnQuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJjZWxsXCIpKSB7XG4gICAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc0xpc3RbMF07XG4gICAgICAgICAgY29uc3QgYXJyYXkgPSBjbGFzc05hbWUuc3BsaXQoXCIsXCIpLm1hcChOdW1iZXIpO1xuICAgICAgICAgIGNvbnN0IHZlcnRleCA9IHBsYXllck9uZUJvYXJkLmZpbmRWZXJ0ZXh0T2JqZWN0QnlDb29yZGluYXRlcyhhcnJheSk7XG5cbiAgICAgICAgICB2ZXJ0ZXguYWRqYWNlbmN5TGlzdC5mb3JFYWNoKChhZGphY2VuY3kpID0+IHtcbiAgICAgICAgICAgIGlmIChhZGphY2VuY3kub2NjdXBpZWRCeVNoaXAgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgaWYgKGVsZW1lbnRCZWxvdykge1xuICAgICAgICAgICAgICAgIG5vT3ZlcmxhcCA9IGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbm9PdmVybGFwO1xuICB9XG5cbiAgLy8gQ2hlY2tzIGlmIHRoZSBlbGVtZW50IGlzIGdldHRpbmcgZHJvcHBlZCB3aXRoaW4gdGhlIGJvcmRlcnMgb2YgdGhlIGJvYXJkXG4gIGZ1bmN0aW9uIGNoZWNrV2l0aGluQm9yZGVycyhldmVudCkge1xuICAgIGNvbnN0IGVsZW1lbnRCZWxvd0Nvb3JkaW5hdGVzID0gZWxlbWVudEJlbG93LmNsYXNzTGlzdFswXVxuICAgICAgLnNwbGl0KFwiLFwiKVxuICAgICAgLm1hcChOdW1iZXIpO1xuICAgIGlmIChkcmFnZ2FibGVFbGVtZW50UmVjdC5oZWlnaHQgPT09IDgwKSB7XG4gICAgICBpZiAoZWxlbWVudEJlbG93Q29vcmRpbmF0ZXNbMF0gPiA5KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGRyYWdnYWJsZUVsZW1lbnRSZWN0LmhlaWdodCA9PT0gMTIwKSB7XG4gICAgICBpZiAoZWxlbWVudEJlbG93Q29vcmRpbmF0ZXNbMF0gPiA4KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGRyYWdnYWJsZUVsZW1lbnRSZWN0LmhlaWdodCA9PT0gMTYwKSB7XG4gICAgICBpZiAoZWxlbWVudEJlbG93Q29vcmRpbmF0ZXNbMF0gPiA3KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGRyYWdnYWJsZUVsZW1lbnRSZWN0LndpZHRoID09PSA4MCkge1xuICAgICAgaWYgKGVsZW1lbnRCZWxvd0Nvb3JkaW5hdGVzWzFdID4gOSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChkcmFnZ2FibGVFbGVtZW50UmVjdC53aWR0aCA9PT0gMTIwKSB7XG4gICAgICBpZiAoZWxlbWVudEJlbG93Q29vcmRpbmF0ZXNbMV0gPiA4KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGRyYWdnYWJsZUVsZW1lbnRSZWN0LndpZHRoID09PSAxNjApIHtcbiAgICAgIGlmIChlbGVtZW50QmVsb3dDb29yZGluYXRlc1sxXSA+IDcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBvdXRPZkJvYXJkRWxlbWVudHMgPSBkb2N1bWVudC5lbGVtZW50c0Zyb21Qb2ludChcbiAgICAgIGV2ZW50LmNsaWVudFgsXG4gICAgICBldmVudC5jbGllbnRZLFxuICAgICk7XG4gICAgbGV0IGNlbGxFbGVtZW50ID0gbnVsbDtcbiAgICBvdXRPZkJvYXJkRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2VsbFwiKSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhlbGVtZW50KTtcbiAgICAgICAgY2VsbEVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGNlbGxFbGVtZW50ID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gVXBkYXRlIGRyb3BwYWJsZSBhdHRyaWJ1dGUgb24gYm9hcmQgZm9yIGVhY2ggY2VsbCBiYXNlZCBvbiBvY2N1cGllZCB2YWx1ZSBpbiB0aGUgZ3JhcGhcbiAgZnVuY3Rpb24gdXBkYXRlRHJvcHBhYmxlQXR0cmlidXRlKCkge1xuICAgIGNvbnN0IHBhcmVudERpdkJvYXJkT25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXJPbmUtYm9hcmRcIik7XG5cbiAgICBwbGF5ZXJPbmVCb2FyZC5ib2FyZC52ZXJ0aWNlcy5mb3JFYWNoKCh2ZXJ0ZXgpID0+IHtcbiAgICAgIGNvbnN0IGRpdiA9IERPTUhhbmRsZXIuZmluZERpdkJ5Q29vcmRpbmF0ZXMoXG4gICAgICAgIGAke3ZlcnRleC5jb29yZGluYXRlc1swXX0sJHt2ZXJ0ZXguY29vcmRpbmF0ZXNbMV19YCxcbiAgICAgICAgcGFyZW50RGl2Qm9hcmRPbmUsXG4gICAgICApO1xuICAgICAgaWYgKHZlcnRleC5vY2N1cGllZCA9PT0gdHJ1ZSkge1xuICAgICAgICBkaXYuc2V0QXR0cmlidXRlKFwiZHJvcHBhYmxlXCIsIGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIGlmICh2ZXJ0ZXgub2NjdXBpZWQgPT09IGZhbHNlKSB7XG4gICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJkcm9wcGFibGVcIiwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyBUaGUgY2VsbHMgdW5kZXIgdGhlIGRyYWdnYWJsZSBlbGVtZW50IHdpbGwgYmUgbWFkZSBkcm9wcGFibGUgd2hlbiB0aGUgbW91c2UgaXMgZG93blxuICBmdW5jdGlvbiBtYWtlRHJvcHBhYmxlKGNlbGxzKSB7XG4gICAgY29uc3QgY2VsbHNWZXJ0aWNlcyA9IFtdO1xuXG4gICAgLy8gU2V0IGRyb3BwYWJsZSBhdHRyaWJ1dGUgb24gdGhlIGNlbGxzIHVuZGVyIGRyYWdnYWJsZSBlbGVtZW50IHRvIHRydWVcbiAgICBjZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICBjZWxsLnNldEF0dHJpYnV0ZShcImRyb3BwYWJsZVwiLCB0cnVlKTtcbiAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNlbGwuY2xhc3NMaXN0WzBdO1xuICAgICAgY29uc3QgYXJyYXkgPSBjbGFzc05hbWUuc3BsaXQoXCIsXCIpLm1hcChOdW1iZXIpO1xuICAgICAgY29uc3QgdmVydGV4ID0gcGxheWVyT25lQm9hcmQuZmluZFZlcnRleHRPYmplY3RCeUNvb3JkaW5hdGVzKGFycmF5KTtcbiAgICAgIGNlbGxzVmVydGljZXMucHVzaCh2ZXJ0ZXgpO1xuICAgIH0pO1xuXG4gICAgLy8vIFVwZGF0ZSB0aGUgZ3JhcGggYWNjb3JkaW5nbHlcbiAgICBjZWxsc1ZlcnRpY2VzLmZvckVhY2goKGNlbGxWZXJ0ZXgpID0+IHtcbiAgICAgIGNlbGxWZXJ0ZXgub2NjdXBpZWRCeVNoaXAgPSBmYWxzZTtcbiAgICAgIGNlbGxWZXJ0ZXgub2NjdXBpZWQgPSBmYWxzZTtcblxuICAgICAgLy8gVXBkYXRlIGFkamFjZW50IGNlbGxzOlxuICAgICAgY2VsbFZlcnRleC5hZGphY2VuY3lMaXN0LmZvckVhY2goKGFkamFjZW5jeSkgPT4ge1xuICAgICAgICAvLyBJbiB0aGUgZ3JhcGhcbiAgICAgICAgYWRqYWNlbmN5Lm9jY3VwaWVkID0gZmFsc2U7XG4gICAgICAgIGFkamFjZW5jeS5hZGphY2VuY3lMaXN0LmZvckVhY2goKGFkaikgPT4ge1xuICAgICAgICAgIGlmIChhZGoub2NjdXBpZWRCeVNoaXApIHtcbiAgICAgICAgICAgIGFkamFjZW5jeS5vY2N1cGllZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGFkamFjZW5jeS5vY2N1cGllZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBgJHthZGphY2VuY3kuY29vcmRpbmF0ZXNbMF19LCR7YWRqYWNlbmN5LmNvb3JkaW5hdGVzWzFdfWA7XG4gICAgICAgICAgY29uc3QgcGFyZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXJPbmUtYm9hcmRcIik7XG4gICAgICAgICAgY29uc3QgZGl2ID0gcGFyZW50RGl2LnF1ZXJ5U2VsZWN0b3IoYFtjbGFzcyo9XCIke2NsYXNzTmFtZX1cIl0uY2VsbGApO1xuICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJkcm9wcGFibGVcIiwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gVGhlIGNlbGxzIHVuZGVyIHRoZSBkcmFnZ2FibGUgZWxlbWVudCB3aWxsIGJlIG1hZGUgdW5kcm9wcGFibGUgd2hlbiB0aGUgbW91c2UgaXMgdXBcbiAgZnVuY3Rpb24gbWFrZVVuZHJvcHBhYmxlKGNlbGxzKSB7XG4gICAgY29uc3QgY2VsbHNWZXJ0aWNlcyA9IFtdO1xuICAgIC8vIFNldCBkcm9wcGFibGUgYXR0cmlidXRlIG9uIHRoZSBjZWxscyB1bmRlciBkcmFnZ2FibGUgZWxlbWVudCB0byBmYWxzZVxuICAgIGNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgIGlmIChjZWxsKSB7XG4gICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKFwiZHJvcHBhYmxlXCIsIGZhbHNlKTtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gY2VsbC5jbGFzc0xpc3RbMF07XG4gICAgICAgIGNvbnN0IGFycmF5ID0gY2xhc3NOYW1lLnNwbGl0KFwiLFwiKS5tYXAoTnVtYmVyKTtcbiAgICAgICAgY29uc3QgdmVydGV4ID0gcGxheWVyT25lQm9hcmQuZmluZFZlcnRleHRPYmplY3RCeUNvb3JkaW5hdGVzKGFycmF5KTtcbiAgICAgICAgY2VsbHNWZXJ0aWNlcy5wdXNoKHZlcnRleCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBVcGRhdGUgdGhlIGdyYXBoIGFjY29yZGluZ2x5XG4gICAgY2VsbHNWZXJ0aWNlcy5mb3JFYWNoKChjZWxsVmVydGV4KSA9PiB7XG4gICAgICBjZWxsVmVydGV4Lm9jY3VwaWVkQnlTaGlwID0gdHJ1ZTtcbiAgICAgIGNlbGxWZXJ0ZXgub2NjdXBpZWQgPSB0cnVlO1xuXG4gICAgICAvLyBVcGRhdGUgYWRqYWNlbnQgY2VsbHM6XG4gICAgICBjZWxsVmVydGV4LmFkamFjZW5jeUxpc3QuZm9yRWFjaCgoYWRqYWNlbmN5KSA9PiB7XG4gICAgICAgIC8vIEluIHRoZSBncmFwaFxuICAgICAgICBhZGphY2VuY3kub2NjdXBpZWQgPSB0cnVlO1xuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBgJHthZGphY2VuY3kuY29vcmRpbmF0ZXNbMF19LCR7YWRqYWNlbmN5LmNvb3JkaW5hdGVzWzFdfWA7XG4gICAgICAgIGNvbnN0IHBhcmVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyT25lLWJvYXJkXCIpO1xuICAgICAgICBjb25zdCBkaXYgPSBwYXJlbnREaXYucXVlcnlTZWxlY3RvcihgW2NsYXNzKj1cIiR7Y2xhc3NOYW1lfVwiXS5jZWxsYCk7XG4gICAgICAgIC8vIEluIERPTVxuICAgICAgICBkaXYuc2V0QXR0cmlidXRlKFwiZHJvcHBhYmxlXCIsIGZhbHNlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gTW91c2UgZG93blxuICBjb25zdCBvbk1vdXNlRG93biA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnRzRnJvbVBvaW50ID0gZG9jdW1lbnQuZWxlbWVudHNGcm9tUG9pbnQoXG4gICAgICBldmVudC5jbGllbnRYLFxuICAgICAgZXZlbnQuY2xpZW50WSxcbiAgICApO1xuXG4gICAgZWxlbWVudHNGcm9tUG9pbnQuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZHJhZ2dhYmxlXCIpKSB7XG4gICAgICAgIGRyYWdnYWJsZUVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICBkcmFnZ2FibGVFbGVtZW50UmVjdCA9IGRyYWdnYWJsZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoZHJhZ2dhYmxlRWxlbWVudCkge1xuICAgICAgaXNEcmFnZ2luZyA9IHRydWU7XG4gICAgICBkcmFnZ2FibGVFbGVtZW50LnN0eWxlLmxlZnQgPSAwO1xuICAgICAgZHJhZ2dhYmxlRWxlbWVudC5zdHlsZS50b3AgPSAwO1xuICAgICAgZHJhZ2dhYmxlRWxlbWVudC5zdHlsZS56SW5kZXggPSAwO1xuICAgICAgb2ZmU2V0WCA9IGV2ZW50LmNsaWVudFg7XG4gICAgICBvZmZTZXRZID0gZXZlbnQuY2xpZW50WTtcbiAgICAgIGRyYWdnYWJsZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImRyYWdnaW5nXCIpO1xuXG4gICAgICBjb25zdCBjZWxscyA9IGlkZW50aWZ5Q2VsbHNUb01ha2VEcm9wcGFibGUoZXZlbnQpO1xuICAgICAgbWFrZURyb3BwYWJsZShjZWxscyk7XG5cbiAgICAgIGNvbnN0IHBhcmVudFJlY3QgPSBkcmFnZ2FibGVFbGVtZW50LnBhcmVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgIGlmIChvZmZTZXRYID4gcGFyZW50UmVjdC54ICsgMTIwKSB7XG4gICAgICAgIG1vdXNlRG93bk9mZnNldEhvciA9IDEyMDtcbiAgICAgIH0gZWxzZSBpZiAob2ZmU2V0WCA+IHBhcmVudFJlY3QueCArIDgwKSB7XG4gICAgICAgIG1vdXNlRG93bk9mZnNldEhvciA9IDgwO1xuICAgICAgfSBlbHNlIGlmIChvZmZTZXRYID4gcGFyZW50UmVjdC54ICsgNDApIHtcbiAgICAgICAgbW91c2VEb3duT2Zmc2V0SG9yID0gNDA7XG4gICAgICB9IGVsc2UgaWYgKG9mZlNldFkgPiBwYXJlbnRSZWN0LnkgKyAxMjApIHtcbiAgICAgICAgbW91c2VEb3duT2Zmc2V0VmVyID0gMTIwO1xuICAgICAgfSBlbHNlIGlmIChvZmZTZXRZID4gcGFyZW50UmVjdC55ICsgODApIHtcbiAgICAgICAgbW91c2VEb3duT2Zmc2V0VmVyID0gODA7XG4gICAgICB9IGVsc2UgaWYgKG9mZlNldFkgPiBwYXJlbnRSZWN0LnkgKyA0MCkge1xuICAgICAgICBtb3VzZURvd25PZmZzZXRWZXIgPSA0MDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZWxlbWVudHNCZWxvdyA9IGRvY3VtZW50LmVsZW1lbnRzRnJvbVBvaW50KFxuICAgICAgICBldmVudC5jbGllbnRYIC0gbW91c2VEb3duT2Zmc2V0SG9yLFxuICAgICAgICBldmVudC5jbGllbnRZIC0gbW91c2VEb3duT2Zmc2V0VmVyLFxuICAgICAgKTtcblxuICAgICAgZWxlbWVudHNCZWxvdy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImNlbGxcIikpIHtcbiAgICAgICAgICBpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkcm9wcGFibGVcIikgPT09IFwidHJ1ZVwiKSB7XG4gICAgICAgICAgICBlbGVtZW50QmVsb3cgPSBlbGVtZW50O1xuICAgICAgICAgICAgb3JpZ2luYWxFbGVtZW50QmVsb3cgPSBlbGVtZW50O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGVtZW50QmVsb3cgPSBudWxsO1xuICAgICAgICAgICAgb3JpZ2luYWxFbGVtZW50QmVsb3cgPSBudWxsO1xuICAgICAgICAgICAgcHJldmlvdXNFbGVtZW50QmVsb3cgPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIC8vIE1vdXNlIG1vdmVcbiAgY29uc3Qgb25Nb3VzZU1vdmUgPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoaXNEcmFnZ2luZykge1xuICAgICAgY29uc3QgZWxlbWVudHNGcm9tUG9pbnQgPSBkb2N1bWVudC5lbGVtZW50c0Zyb21Qb2ludChcbiAgICAgICAgZXZlbnQuY2xpZW50WCAtIG1vdXNlRG93bk9mZnNldEhvcixcbiAgICAgICAgZXZlbnQuY2xpZW50WSAtIG1vdXNlRG93bk9mZnNldFZlcixcbiAgICAgICk7XG4gICAgICBlbGVtZW50c0Zyb21Qb2ludC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImNlbGxcIikgJiZcbiAgICAgICAgICBlbGVtZW50LmdldEF0dHJpYnV0ZShcImRyb3BwYWJsZVwiKVxuICAgICAgICApIHtcbiAgICAgICAgICBwcmV2aW91c0VsZW1lbnRCZWxvdyA9IGVsZW1lbnRCZWxvdztcbiAgICAgICAgICBpZiAocHJldmlvdXNFbGVtZW50QmVsb3cuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGVtcFwiKSkge1xuICAgICAgICAgICAgcHJldmlvdXNFbGVtZW50QmVsb3cuc2V0QXR0cmlidXRlKFwiZHJvcHBhYmxlXCIsIHRydWUpO1xuICAgICAgICAgICAgZHJhZ2dhYmxlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwidW5kcm9wcGFibGVcIik7XG4gICAgICAgICAgICBwcmV2aW91c0VsZW1lbnRCZWxvdy5jbGFzc0xpc3QucmVtb3ZlKFwidGVtcFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxlbWVudEJlbG93ID0gZWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICghY2hlY2tPdGhlclNoaXBPdmVybGFwKGV2ZW50KSB8fCAhY2hlY2tXaXRoaW5Cb3JkZXJzKGV2ZW50KSkge1xuICAgICAgICBlbGVtZW50QmVsb3cuc2V0QXR0cmlidXRlKFwiZHJvcHBhYmxlXCIsIGZhbHNlKTtcbiAgICAgICAgZWxlbWVudEJlbG93LmNsYXNzTGlzdC5hZGQoXCJ0ZW1wXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZWxlbWVudEJlbG93LmdldEF0dHJpYnV0ZShcImRyb3BwYWJsZVwiKSA9PT0gXCJmYWxzZVwiKSB7XG4gICAgICAgIGRyYWdnYWJsZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInVuZHJvcHBhYmxlXCIpO1xuICAgICAgICBkcmFnZ2FibGVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkcm9wcGFibGVcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkcmFnZ2FibGVFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkcm9wcGFibGVcIik7XG4gICAgICAgIGRyYWdnYWJsZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInVuZHJvcHBhYmxlXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZHJhZ2dhYmxlRWxlbWVudCkge1xuICAgICAgICBkcmFnZ2FibGVFbGVtZW50LnN0eWxlLmxlZnQgPSBgJHtldmVudC5jbGllbnRYIC0gb2ZmU2V0WH1weGA7XG4gICAgICAgIGRyYWdnYWJsZUVsZW1lbnQuc3R5bGUudG9wID0gYCR7ZXZlbnQuY2xpZW50WSAtIG9mZlNldFl9cHhgO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvLyBNb3VzZSB1cFxuICBjb25zdCBvbk1vdXNlVXAgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBzaGlwID0gZHJhZ2dhYmxlRWxlbWVudFxuICAgICAgPyBwbGF5ZXJPbmVCb2FyZC5maW5kU2hpcEJ5SWQoZHJhZ2dhYmxlRWxlbWVudC5pZClcbiAgICAgIDogbnVsbDtcbiAgICBpZiAoZWxlbWVudEJlbG93ID09PSBvcmlnaW5hbEVsZW1lbnRCZWxvdykge1xuICAgICAgaWYgKGRyYWdnYWJsZUVsZW1lbnQpIHtcbiAgICAgICAgY29uc3Qgd2lkdGggPSBgJHtkcmFnZ2FibGVFbGVtZW50UmVjdC5oZWlnaHR9cHhgO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSBgJHtkcmFnZ2FibGVFbGVtZW50UmVjdC53aWR0aH1weGA7XG5cbiAgICAgICAgZHJhZ2dhYmxlRWxlbWVudC5zdHlsZS53aWR0aCA9IHdpZHRoO1xuICAgICAgICBkcmFnZ2FibGVFbGVtZW50LnN0eWxlLmhlaWdodCA9IGhlaWdodDtcblxuICAgICAgICBpZiAoaGVpZ2h0ID4gd2lkdGgpIHtcbiAgICAgICAgICBzaGlwLnBvc2l0aW9uID0gXCJ2XCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2hpcC5wb3NpdGlvbiA9IFwiaFwiO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHNoaXApO1xuICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50QmVsb3cpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpc0RyYWdnaW5nKSB7XG4gICAgICBkcmFnZ2FibGVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkcm9wcGFibGVcIik7XG4gICAgICBkcmFnZ2FibGVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJ1bmRyb3BwYWJsZVwiKTtcbiAgICAgIGlmIChlbGVtZW50QmVsb3cpIHtcbiAgICAgICAgaWYgKCFjaGVja090aGVyU2hpcE92ZXJsYXAoZXZlbnQpKSB7XG4gICAgICAgICAgZWxlbWVudEJlbG93LnNldEF0dHJpYnV0ZShcImRyb3BwYWJsZVwiLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFjaGVja1dpdGhpbkJvcmRlcnMoZXZlbnQpKSB7XG4gICAgICAgICAgZWxlbWVudEJlbG93LnNldEF0dHJpYnV0ZShcImRyb3BwYWJsZVwiLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgY2VsbHMgPSBpZGVudGlmeUNlbGxzVG9NYWtlRHJvcHBhYmxlKGV2ZW50KTtcbiAgICAgIG1ha2VVbmRyb3BwYWJsZShjZWxscyk7XG5cbiAgICAgIGNvbnN0IG5ld1NoaXBDb29yZGluYXRlcyA9IFtdO1xuICAgICAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICBuZXdTaGlwQ29vcmRpbmF0ZXMucHVzaChcbiAgICAgICAgICBBcnJheS5mcm9tKGNlbGwuY2xhc3NMaXN0WzBdLnNwbGl0KFwiLFwiKS5tYXAoTnVtYmVyKSksXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICAgIHNoaXAuYXNzaWduQ29vcmRpbmF0ZXMobmV3U2hpcENvb3JkaW5hdGVzKTtcblxuICAgICAgaXNEcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgZHJhZ2dhYmxlRWxlbWVudC5zdHlsZS5sZWZ0ID0gMDtcbiAgICAgIGRyYWdnYWJsZUVsZW1lbnQuc3R5bGUudG9wID0gMDtcbiAgICAgIGRyYWdnYWJsZUVsZW1lbnQuc3R5bGUuekluZGV4ID0gNTtcbiAgICAgIG9mZlNldFggPSBudWxsO1xuICAgICAgb2ZmU2V0WSA9IG51bGw7XG4gICAgICBtb3VzZURvd25PZmZzZXRIb3IgPSAwO1xuICAgICAgbW91c2VEb3duT2Zmc2V0VmVyID0gMDtcbiAgICAgIGRyYWdnYWJsZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRyYWdnaW5nXCIpO1xuICAgIH1cbiAgICBkcmFnZ2FibGVFbGVtZW50ID0gbnVsbDtcbiAgICBkcmFnZ2FibGVFbGVtZW50UmVjdCA9IG51bGw7XG4gICAgdXBkYXRlRHJvcHBhYmxlQXR0cmlidXRlKCk7XG4gIH07XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBvbk1vdXNlRG93bik7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgb25Nb3VzZU1vdmUpO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBvbk1vdXNlVXApO1xufVxuXG5leHBvcnQgeyBhZGREb2N1bWVudEV2ZW50TGlzdGVuZXJzIH07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tY29udGludWUgKi9cbmltcG9ydCBTaGlwTW9kdWxlIGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCBHcmFwaCBmcm9tIFwiLi9EU19HcmFwaFwiO1xuXG5mdW5jdGlvbiBHYW1lYm9hcmRNb2R1bGUoKSB7XG4gIGNvbnN0IGJvYXJkID0gbmV3IEdyYXBoKCk7XG4gIGNvbnN0IHNoaXBzID0gW107XG4gIGNvbnN0IG1pc3NpbmdTaG90cyA9IFtdO1xuXG4gIC8vIENyZWF0ZSAxMHgxMCBjZWxscyBhcyBncmFwaCB2ZXJ0ZXhlc1xuICBmdW5jdGlvbiBjcmVhdGVDZWxscygpIHtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDExOyBpICs9IDEpIHtcbiAgICAgIGZvciAobGV0IGogPSAxOyBqIDwgMTE7IGogKz0gMSkge1xuICAgICAgICBib2FyZC5hZGRWZXJ0ZXgoaSwgaik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gRmluZCB0aGUgdmVydGV4IG9iamVjdCBtYXRjaGluZyB0aGUgZ2l2ZW4gY29vcmRpbmF0ZXNcbiAgZnVuY3Rpb24gZmluZFZlcnRleHRPYmplY3RCeUNvb3JkaW5hdGVzKGNvb3JkaW5hdGVzKSB7XG4gICAgLy8gY29uc29sZS5sb2coY29vcmRpbmF0ZXMpO1xuICAgIGNvbnN0IGZvdW5kVmVydGV4ID0gYm9hcmQudmVydGljZXMuZmluZChcbiAgICAgICh2ZXJ0ZXgpID0+XG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHZlcnRleC5jb29yZGluYXRlcykgPT09IEpTT04uc3RyaW5naWZ5KGNvb3JkaW5hdGVzKSxcbiAgICApO1xuXG4gICAgaWYgKGZvdW5kVmVydGV4KSB7XG4gICAgICByZXR1cm4gZm91bmRWZXJ0ZXg7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLy8gRmlsbCBvdXQgYWRqYWNlbmN5TGlzdCBmb3IgYSB2ZXJ0ZXhcbiAgZnVuY3Rpb24gYWRkQ2VsbEFkamFjZW5jaWVzKHZlcnRleCkge1xuICAgIGNvbnN0IHkgPSB2ZXJ0ZXguY29vcmRpbmF0ZXNbMF07XG4gICAgY29uc3QgeCA9IHZlcnRleC5jb29yZGluYXRlc1sxXTtcbiAgICBjb25zdCBwb3RlbnRpYWxBZGphY2VuY2llcyA9IFtcbiAgICAgIFt5IC0gMSwgeCAtIDFdLFxuICAgICAgW3kgLSAxLCB4XSxcbiAgICAgIFt5IC0gMSwgeCArIDFdLFxuICAgICAgW3ksIHggLSAxXSxcbiAgICAgIFt5LCB4ICsgMV0sXG4gICAgICBbeSArIDEsIHggLSAxXSxcbiAgICAgIFt5ICsgMSwgeF0sXG4gICAgICBbeSArIDEsIHggKyAxXSxcbiAgICBdO1xuICAgIGNvbnN0IGFkamFjZW5jaWVzID0gW107XG4gICAgcG90ZW50aWFsQWRqYWNlbmNpZXMuZm9yRWFjaCgoYWRqYWNlbmN5KSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGFkamFjZW5jeVswXSA+IDAgJiZcbiAgICAgICAgYWRqYWNlbmN5WzBdIDw9IDEwICYmXG4gICAgICAgIGFkamFjZW5jeVsxXSA+IDAgJiZcbiAgICAgICAgYWRqYWNlbmN5WzFdIDw9IDEwXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgYWRqYWNlbmN5T2JqZWN0ID0gZmluZFZlcnRleHRPYmplY3RCeUNvb3JkaW5hdGVzKGFkamFjZW5jeSk7XG4gICAgICAgIGFkamFjZW5jaWVzLnB1c2goYWRqYWNlbmN5T2JqZWN0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gYWRqYWNlbmNpZXM7XG4gIH1cblxuICAvLyBGaWxsIG91dCBhZGphY2VuY3lMaXN0IGZvciBlYWNoIGNlbGwgdmVydGV4XG4gIGZ1bmN0aW9uIGNyZWF0ZUFkamFjZW5jaWVzKCkge1xuICAgIGJvYXJkLnZlcnRpY2VzLmZvckVhY2goKHZlcnRleCkgPT4ge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBjb25zdCBhZGphY2VudFZlcnRpY2VzID0gYWRkQ2VsbEFkamFjZW5jaWVzKHZlcnRleCk7XG4gICAgICBhZGphY2VudFZlcnRpY2VzLmZvckVhY2goKGFkamFjZW50VmVydGV4KSA9PiB7XG4gICAgICAgIGJvYXJkLmFkZEVkZ2UodmVydGV4LCBhZGphY2VudFZlcnRleCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIEZpbGwgdGhlIEJvYXJkIGFycmF5XG4gIGZ1bmN0aW9uIGNyZWF0ZUJvYXJkKCkge1xuICAgIGNyZWF0ZUNlbGxzKCk7XG4gICAgY3JlYXRlQWRqYWNlbmNpZXMoKTtcbiAgfVxuXG4gIC8vIEZpbGwgdGhlIFNoaXBzIGFycmF5XG4gIGZ1bmN0aW9uIGNyZWF0ZVNoaXBzKCkge1xuICAgIGNvbnN0IHNoaXBzQ29uZmlnID0gW1xuICAgICAgLy8gICB7XG4gICAgICAvLyAgICAgc2hpcExlbmd0aDogMSxcbiAgICAgIC8vICAgICBzaGlwSWQ6IDAsXG4gICAgICAvLyAgIH0sXG4gICAgICAvLyAgIHtcbiAgICAgIC8vICAgICBzaGlwTGVuZ3RoOiAxLFxuICAgICAgLy8gICAgIHNoaXBJZDogMSxcbiAgICAgIC8vICAgfSxcbiAgICAgIC8vICAge1xuICAgICAgLy8gICAgIHNoaXBMZW5ndGg6IDEsXG4gICAgICAvLyAgICAgc2hpcElkOiAyLFxuICAgICAgLy8gICB9LFxuICAgICAgLy8gICB7XG4gICAgICAvLyAgICAgc2hpcExlbmd0aDogMixcbiAgICAgIC8vICAgICBzaGlwSWQ6IDMsXG4gICAgICAvLyAgIH0sXG4gICAgICAvLyAgIHtcbiAgICAgIC8vICAgICBzaGlwTGVuZ3RoOiAyLFxuICAgICAgLy8gICAgIHNoaXBJZDogNCxcbiAgICAgIC8vICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2hpcExlbmd0aDogMyxcbiAgICAgICAgc2hpcElkOiA1LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2hpcExlbmd0aDogNCxcbiAgICAgICAgc2hpcElkOiA2LFxuICAgICAgfSxcbiAgICBdO1xuICAgIHNoaXBzQ29uZmlnLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IHNoaXAgPSBTaGlwTW9kdWxlLmNyZWF0ZVNoaXAoZWxlbWVudC5zaGlwTGVuZ3RoLCBlbGVtZW50LnNoaXBJZCk7XG4gICAgICBzaGlwcy5wdXNoKHNoaXApO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gRmlsbCB0aGUgbWlzc2luZ1Nob3RzIGFycmF5XG4gIGZ1bmN0aW9uIHJlY29yZE1pc3NpbmdTaG90KGNvb3JkaW5hdGVzKSB7XG4gICAgY29uc3QgbWlzc2VkU2hvdFZlcnRleCA9IGZpbmRWZXJ0ZXh0T2JqZWN0QnlDb29yZGluYXRlcyhjb29yZGluYXRlcyk7XG4gICAgaWYgKCFtaXNzaW5nU2hvdHMuaW5jbHVkZXMobWlzc2VkU2hvdFZlcnRleC5jb29yZGluYXRlcykpIHtcbiAgICAgIG1pc3NpbmdTaG90cy5wdXNoKG1pc3NlZFNob3RWZXJ0ZXguY29vcmRpbmF0ZXMpO1xuICAgIH1cbiAgICBtaXNzZWRTaG90VmVydGV4LmFkamFjZW5jeUxpc3QuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgaWYgKCFtaXNzaW5nU2hvdHMuaW5jbHVkZXMoZWxlbWVudC5jb29yZGluYXRlcykpIHtcbiAgICAgICAgbWlzc2luZ1Nob3RzLnB1c2goZWxlbWVudC5jb29yZGluYXRlcyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyBGaW5kIHNoaXAgYnkgc2hpcElkXG4gIGZ1bmN0aW9uIGZpbmRTaGlwQnlJZChpZCkge1xuICAgIGxldCBzaGlwID0gbnVsbDtcbiAgICBzaGlwcy5mb3JFYWNoKChzKSA9PiB7XG4gICAgICBpZiAocy5pZCA9PT0gcGFyc2VJbnQoaWQpKSB7XG4gICAgICAgIHNoaXAgPSBzO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBzaGlwO1xuICB9XG5cbiAgLy8gUmVnaXN0ZXIgYW5kIHByb2Nlc3MgYXR0YWNrc1xuICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzKSB7XG4gICAgbGV0IGhpdFJlZ2lzdGVyZWQgPSBmYWxzZTtcbiAgICBzaGlwcy5zb21lKChzaGlwKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHNoaXAuY29vcmRpbmF0ZXMpLmluY2x1ZGVzKEpTT04uc3RyaW5naWZ5KGNvb3JkaW5hdGVzKSlcbiAgICAgICkge1xuICAgICAgICBzaGlwLmhpdCgpO1xuICAgICAgICBoaXRSZWdpc3RlcmVkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gICAgaWYgKCFoaXRSZWdpc3RlcmVkKSB7XG4gICAgICByZWNvcmRNaXNzaW5nU2hvdChjb29yZGluYXRlcyk7XG4gICAgfVxuICB9XG5cbiAgLy8gQ2hlY2sgaWYgYWxsIHNoaXBzIG9uIGEgYm9hcmQgaGF2ZSBiZWVuIHN1bmtcbiAgZnVuY3Rpb24gYWxsU2hpcHNTdW5rKCkge1xuICAgIHJldHVybiBzaGlwcy5ldmVyeSgoc2hpcCkgPT4gc2hpcC5pc1N1bmsoKSk7XG4gIH1cblxuICBmdW5jdGlvbiBwb3NpdGlvblNoaXBzKCkge1xuICAgIHNoaXBzLnNvcnQoKGEsIGIpID0+IGIubGVuZ3RoIC0gYS5sZW5ndGgpO1xuICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIGNvbnN0IG9yaWVudGF0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMikgPT09IDAgPyBcInZcIiA6IFwiaFwiO1xuICAgICAgc2hpcC5wb3NpdGlvbiA9IG9yaWVudGF0aW9uO1xuXG4gICAgICBjb25zdCBmaWx0ZXJlZEJvYXJkID0gYm9hcmQudmVydGljZXMuZmlsdGVyKFxuICAgICAgICAob2JqKSA9PiBvYmoub2NjdXBpZWQgPT09IGZhbHNlLFxuICAgICAgKTtcblxuICAgICAgaWYgKGZpbHRlcmVkQm9hcmQubGVuZ3RoID4gMCkge1xuICAgICAgICBsZXQgcG9zaXRpb25Gb3VuZCA9IGZhbHNlO1xuICAgICAgICB3aGlsZSAoIXBvc2l0aW9uRm91bmQpIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWNvbnN0XG4gICAgICAgICAgbGV0IHBvc2l0aW9uID0gW107XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1jb25zdFxuICAgICAgICAgIGxldCBwb3NpdGlvbkNvb3JkaW5hdGVzID0gW107XG4gICAgICAgICAgY29uc3QgZmlyc3RDZWxsSW5kZXggPSBNYXRoLmZsb29yKFxuICAgICAgICAgICAgTWF0aC5yYW5kb20oKSAqIGZpbHRlcmVkQm9hcmQubGVuZ3RoLFxuICAgICAgICAgICk7XG4gICAgICAgICAgY29uc3QgZmlyc3RDZWxsT2JqZWN0ID0gZmlsdGVyZWRCb2FyZFtmaXJzdENlbGxJbmRleF07XG4gICAgICAgICAgcG9zaXRpb25Db29yZGluYXRlcy5wdXNoKGZpcnN0Q2VsbE9iamVjdC5jb29yZGluYXRlcyk7XG4gICAgICAgICAgcG9zaXRpb24ucHVzaChmaXJzdENlbGxPYmplY3QpO1xuICAgICAgICAgIC8vICAgY29uc29sZS5sb2cocG9zaXRpb24pO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc2hpcC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgY29uc3QgbmV4dENlbGxPYmplY3RDb29yZGluYXRlcyA9XG4gICAgICAgICAgICAgIHNoaXAucG9zaXRpb24gPT09IFwidlwiXG4gICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0Q2VsbE9iamVjdC5jb29yZGluYXRlc1swXSArIGksXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0Q2VsbE9iamVjdC5jb29yZGluYXRlc1sxXSxcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RDZWxsT2JqZWN0LmNvb3JkaW5hdGVzWzBdLFxuICAgICAgICAgICAgICAgICAgICBmaXJzdENlbGxPYmplY3QuY29vcmRpbmF0ZXNbMV0gKyBpLFxuICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG5leHRDZWxsT2JqZWN0Q29vcmRpbmF0ZXMpO1xuICAgICAgICAgICAgY29uc3QgbmV4dENlbGxPYmplY3QgPSBib2FyZC52ZXJ0aWNlcy5maWx0ZXIoXG4gICAgICAgICAgICAgIChvYmopID0+XG4gICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkob2JqLmNvb3JkaW5hdGVzKSA9PT1cbiAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShuZXh0Q2VsbE9iamVjdENvb3JkaW5hdGVzKSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhuZXh0Q2VsbE9iamVjdFswXSk7XG4gICAgICAgICAgICBpZiAobmV4dENlbGxPYmplY3RbMF0pIHtcbiAgICAgICAgICAgICAgaWYgKG5leHRDZWxsT2JqZWN0WzBdLm9jY3VwaWVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uQ29vcmRpbmF0ZXMucHVzaChuZXh0Q2VsbE9iamVjdFswXS5jb29yZGluYXRlcyk7XG4gICAgICAgICAgICAgICAgcG9zaXRpb24ucHVzaChuZXh0Q2VsbE9iamVjdFswXSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChwb3NpdGlvbi5sZW5ndGggPT09IHNoaXAubGVuZ3RoKSB7XG4gICAgICAgICAgICBzaGlwLmFzc2lnbkNvb3JkaW5hdGVzKC4uLnBvc2l0aW9uQ29vcmRpbmF0ZXMpO1xuXG4gICAgICAgICAgICBwb3NpdGlvbi5mb3JFYWNoKChwKSA9PiB7XG4gICAgICAgICAgICAgIHAub2NjdXBpZWQgPSB0cnVlO1xuICAgICAgICAgICAgICBwLm9jY3VwaWVkQnlTaGlwID0gdHJ1ZTtcbiAgICAgICAgICAgICAgcC5hZGphY2VuY3lMaXN0LmZvckVhY2goKGFkaikgPT4ge1xuICAgICAgICAgICAgICAgIGFkai5vY2N1cGllZCA9IHRydWU7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBwb3NpdGlvbkZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgYm9hcmQsXG4gICAgc2hpcHMsXG4gICAgbWlzc2luZ1Nob3RzLFxuICAgIGNyZWF0ZUJvYXJkLFxuICAgIGNyZWF0ZVNoaXBzLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgYWxsU2hpcHNTdW5rLFxuICAgIHBvc2l0aW9uU2hpcHMsXG4gICAgZmluZFZlcnRleHRPYmplY3RCeUNvb3JkaW5hdGVzLFxuICAgIGZpbmRTaGlwQnlJZCxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkTW9kdWxlO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWN5Y2xlXG5pbXBvcnQgRE9NSGFuZGxlciBmcm9tIFwiLi9ET01IYW5kbGVyXCI7XG5pbXBvcnQgR2FtZWJvYXJkTW9kdWxlIGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IHsgYWRkRG9jdW1lbnRFdmVudExpc3RlbmVycyB9IGZyb20gXCIuL2V2ZW50TWFuYWdlclwiO1xuXG5sZXQgcGxheWVyT25lQm9hcmQgPSBudWxsO1xuXG5mdW5jdGlvbiBnYW1lTG9vcCgpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKTtcbiAgaWYgKG1haW4pIHtcbiAgICBtYWluLnJlbW92ZSgpO1xuICB9XG4gIHBsYXllck9uZUJvYXJkID0gR2FtZWJvYXJkTW9kdWxlKCk7XG4gIHBsYXllck9uZUJvYXJkLmNyZWF0ZUJvYXJkKCk7XG4gIHBsYXllck9uZUJvYXJkLmNyZWF0ZVNoaXBzKCk7XG4gIHBsYXllck9uZUJvYXJkLnBvc2l0aW9uU2hpcHMoKTtcblxuICBjb25zdCBwbGF5ZXJUd29Cb2FyZCA9IEdhbWVib2FyZE1vZHVsZSgpO1xuICBwbGF5ZXJUd29Cb2FyZC5jcmVhdGVCb2FyZCgpO1xuICBwbGF5ZXJUd29Cb2FyZC5jcmVhdGVTaGlwcygpO1xuICBwbGF5ZXJUd29Cb2FyZC5wb3NpdGlvblNoaXBzKCk7XG5cbiAgRE9NSGFuZGxlci5wbGF5ZXJPbmVCb2FyZCA9IHBsYXllck9uZUJvYXJkLmJvYXJkLnZlcnRpY2VzO1xuICBET01IYW5kbGVyLnBsYXllck9uZVNoaXBzID0gcGxheWVyT25lQm9hcmQuc2hpcHM7XG5cbiAgRE9NSGFuZGxlci5wbGF5ZXJUd29Cb2FyZCA9IHBsYXllclR3b0JvYXJkLmJvYXJkLnZlcnRpY2VzO1xuICBET01IYW5kbGVyLnBsYXllclR3b1NoaXBzID0gcGxheWVyVHdvQm9hcmQuc2hpcHM7XG5cbiAgRE9NSGFuZGxlci5jcmVhdGVEb20oKTtcbn1cblxuZ2FtZUxvb3AoKTtcbmFkZERvY3VtZW50RXZlbnRMaXN0ZW5lcnMoKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGV2ZW50KSA9PiB7XG4gIGlmIChldmVudC5rZXkgPT09IFwiY1wiIHx8IGV2ZW50LmtleSA9PT0gXCJDXCIpIHtcbiAgICBjb25zb2xlLmxvZyhwbGF5ZXJPbmVCb2FyZCk7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBnYW1lTG9vcDtcbmV4cG9ydCB7IHBsYXllck9uZUJvYXJkIH07XG4iLCJjb25zdCBTaGlwTW9kdWxlID0gKCgpID0+IHtcbiAgLy8gQ3JlYXRlcyBhIHNoaXBcbiAgZnVuY3Rpb24gY3JlYXRlU2hpcChzaGlwTGVuZ3RoLCBzaGlwSWQpIHtcbiAgICBjb25zdCBzaGlwID0ge1xuICAgICAgaWQ6IHNoaXBJZCxcbiAgICAgIGhpdENvdW50OiAwLFxuICAgICAgY29vcmRpbmF0ZXM6IFtdLFxuICAgICAgbGVuZ3RoOiBzaGlwTGVuZ3RoLFxuICAgICAgcG9zaXRpb246IFwiaFwiLFxuXG4gICAgICBoaXQoKSB7XG4gICAgICAgIHNoaXAuaGl0Q291bnQgKz0gMTtcbiAgICAgIH0sXG5cbiAgICAgIGlzU3VuaygpIHtcbiAgICAgICAgaWYgKHNoaXAuaGl0Q291bnQgPT09IHNoaXAubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSxcblxuICAgICAgYXNzaWduQ29vcmRpbmF0ZXMoLi4uYXJncykge1xuICAgICAgICBzaGlwLmNvb3JkaW5hdGVzID0gYXJncztcblxuICAgICAgICAvLyBEZXRlcm1pbmUgaWYgc2hpcCBwb3NpdGlvbiBpcyBob3Jpem9udGFsIG9yIHZlcnRpY2FsXG4gICAgICAgIGlmIChzaGlwLmNvb3JkaW5hdGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIHRoaXMucG9zaXRpb24gPSBcImhcIjtcbiAgICAgICAgfSBlbHNlIGlmIChzaGlwLmNvb3JkaW5hdGVzWzBdWzBdID09PSBzaGlwLmNvb3JkaW5hdGVzWzFdWzBdKSB7XG4gICAgICAgICAgdGhpcy5wb3NpdGlvbiA9IFwiaFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucG9zaXRpb24gPSBcInZcIjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHNoaXA7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZVNoaXAsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBTaGlwTW9kdWxlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
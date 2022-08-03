/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* http://meyerweb.com/eric/tools/css/reset/ \\n   v2.0 | 20110126\\n   License: none (public domain)\\n*/\\n\\nhtml,\\nbody,\\ndiv,\\nspan,\\napplet,\\nobject,\\niframe,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\np,\\nblockquote,\\npre,\\na,\\nabbr,\\nacronym,\\naddress,\\nbig,\\ncite,\\ncode,\\ndel,\\ndfn,\\nem,\\nimg,\\nins,\\nkbd,\\nq,\\ns,\\nsamp,\\nsmall,\\nstrike,\\nstrong,\\nsub,\\nsup,\\ntt,\\nvar,\\nb,\\nu,\\ni,\\ncenter,\\ndl,\\ndt,\\ndd,\\nol,\\nul,\\nli,\\nfieldset,\\nform,\\nlabel,\\nlegend,\\ntable,\\ncaption,\\ntbody,\\ntfoot,\\nthead,\\ntr,\\nth,\\ntd,\\narticle,\\naside,\\ncanvas,\\ndetails,\\nembed,\\nfigure,\\nfigcaption,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\noutput,\\nruby,\\nsection,\\nsummary,\\ntime,\\nmark,\\naudio,\\nvideo {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n}\\n/* HTML5 display-role reset for older browsers */\\narticle,\\naside,\\ndetails,\\nfigcaption,\\nfigure,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\nsection {\\n  display: block;\\n}\\nbody {\\n  line-height: 1;\\n}\\nol,\\nul {\\n  list-style: none;\\n}\\nblockquote,\\nq {\\n  quotes: none;\\n}\\nblockquote:before,\\nblockquote:after,\\nq:before,\\nq:after {\\n  content: '';\\n  content: none;\\n}\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\n/* My CSS  */\\n\\nbody {\\n  display: grid;\\n  grid-template-rows: 5vw 5vw 1fr;\\n  height: 100vh;\\n  background-image: linear-gradient(to bottom right, #242582, #5959e3);\\n  color: #fff;\\n  text-shadow: 0 0 0.05vw #fff, 0 0 0.1vw #fff, 0 0 0.3vw #fff, 0 0 0.8vw;\\n  font-family: 'Vujahday Script', cursive;\\n}\\n\\n.wrapper {\\n  padding: 10px;\\n}\\n\\n.header {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  padding: 5px;\\n}\\n\\nh1 {\\n  font-size: 5vw;\\n}\\n\\nh2 {\\n  font-size: 2.5vw;\\n}\\n\\n.boards {\\n  display: grid;\\n  grid-template-columns: 1fr 7vw 1fr;\\n}\\n\\n.boardContainer {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  gap: 10px;\\n}\\n\\n.boardBox {\\n  display: grid;\\n  grid-template-columns: repeat(10, 1fr);\\n  grid-template-rows: repeat(10, 1fr);\\n  width: 30vw;\\n  height: 30vw;\\n  gap: 3px;\\n}\\n\\n.coord {\\n  border: 2px solid #f64c72;\\n  box-shadow: 0 0 0.05vw #f64c72, 0 0 0.05vw #fff, 0 0 0.05vw #f64c72,\\n    0 0 0.05rem #f64c72, 0 0 0.5rem #f64c72, inset 0 0 0.5rem #f64c72;\\n}\\n\\n.center-column {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  gap: 50px;\\n}\\n\\n.center-column button {\\n  font-size: 2vw;\\n  width: 100%;\\n}\\nbutton {\\n  display: inline-block;\\n  vertical-align: middle;\\n  text-align: center;\\n  padding: 5px;\\n}\\n\\n.info-bar {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  font-size: 2vw;\\n}\\n\\nbutton {\\n  font-family: 'Vujahday Script', cursive;\\n  color: #fff;\\n  text-shadow: 0 0 0.05vw #fff, 0 0 0.1vw #fff, 0 0 0.4vw #fff, 0 0 1vw;\\n  background-color: rgba(255, 255, 255, 0);\\n  border: 2px solid #fff;\\n  box-shadow: 0 0 0.05rem #fff, 0 0 0.05rem #fff, 0 0 0.05rem #fff,\\n    0 0 0.05rem #fff, 0 0 0.5rem #fff, inset 0 0 0.5rem #fff;\\n}\\n\\nbutton:hover {\\n  font-family: 'Vujahday Script', cursive;\\n  color: #88df6e;\\n  text-shadow: 0 0 0.05vw #88df6e, 0 0 0.1vw #88df6e, 0 0 0.4vw #88df6e, 0 0 1vw;\\n  background-color: rgba(255, 255, 255, 0);\\n  border: 2px solid #88df6e;\\n  box-shadow: 0 0 0.1rem #88df6e, 0 0 0.1rem #88df6e, 0 0 0.1rem #88df6e,\\n    0 0 0.1rem #88df6e, 0 0 1rem #88df6e, inset 0 0 1rem #88df6e;\\n}\\n\\n.occupied {\\n  background-color: #f64c72;\\n}\\n\\n.miss {\\n  background-color: #ffffff54;\\n  border: 2px solid #ffffff54;\\n  box-shadow: 0 0 0.05rem #ffffff54, 0 0 0.05rem #fff, 0 0 0.05rem #ffffff54,\\n    0 0 0.05rem #ffffff54, 0 0 0.5rem #ffffff54, inset 0 0 0.5rem #ffffff54;\\n}\\n\\n.hit {\\n  background-color: #88df6e;\\n  border: 2px solid #88df6e;\\n  box-shadow: 0 0 0.05rem #88df6e, 0 0 0.05rem #fff, 0 0 0.05rem #88df6e,\\n    0 0 0.05rem #88df6e, 0 0 0.5rem #88df6e, inset 0 0 0.5rem #88df6e;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-battleships/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://odin-battleships/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-battleships/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-battleships/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-battleships/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-battleships/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-battleships/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-battleships/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-battleships/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-battleships/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/domInteraction.js":
/*!*******************************!*\
  !*** ./src/domInteraction.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayGameOver\": () => (/* binding */ displayGameOver),\n/* harmony export */   \"makeBoard\": () => (/* binding */ makeBoard),\n/* harmony export */   \"renderAttacks\": () => (/* binding */ renderAttacks),\n/* harmony export */   \"renderShips\": () => (/* binding */ renderShips),\n/* harmony export */   \"updateScores\": () => (/* binding */ updateScores),\n/* harmony export */   \"updateStatus\": () => (/* binding */ updateStatus),\n/* harmony export */   \"wipeBoards\": () => (/* binding */ wipeBoards)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\nfunction renderShips(prefix, board) {\n  board.ships.forEach((ship) => {\n    ship.coordinates.forEach((coordinate) => {\n      const square = document.getElementById(\n        `${prefix}-${coordinate[0]}-${coordinate[1]}`\n      );\n      square.classList.add('occupied');\n    });\n  });\n}\n\nfunction renderAttacks(prefix, board) {\n  board.missedShots.forEach((missedShot) => {\n    const square = document.getElementById(\n      `${prefix}-${missedShot[0]}-${missedShot[1]}`\n    );\n    square.classList.add('miss');\n  });\n\n  board.ships.forEach((ship) => {\n    ship.hitLocations.forEach((location) => {\n      const square = document.getElementById(\n        `${prefix}-${location[0]}-${location[1]}`\n      );\n      square.classList.add('hit');\n    });\n  });\n}\n\nfunction displayGameOver(player) {\n  const infoBox = document.getElementById('info');\n  infoBox.textContent = `${player} the winner!`;\n}\n\nfunction wipeBoards() {\n  const boardA = document.getElementById('board1');\n  boardA.innerHTML = '';\n\n  const boardB = document.getElementById('board2');\n  boardB.innerHTML = '';\n}\n\nfunction updateStatus(length) {\n  const infoBox = document.getElementById('info');\n  switch (length) {\n    case 5:\n      infoBox.textContent = 'Position your aircraft carrier...';\n      break;\n    case 4:\n      infoBox.textContent = 'Position your battleship...';\n      break;\n    case 3:\n      infoBox.textContent = 'Position your cruiser...';\n      break;\n    case 2:\n      infoBox.textContent = 'Position your destroyer...';\n      break;\n    case 1:\n      infoBox.textContent = 'Position your submarine...';\n      break;\n    case 0:\n      infoBox.textContent = 'Battle!';\n      break;\n    default:\n      infoBox.textContent = '';\n  }\n}\n\nfunction shipHover() {\n  const board = (0,_index__WEBPACK_IMPORTED_MODULE_0__.getBoardA)();\n\n  if ((0,_index__WEBPACK_IMPORTED_MODULE_0__.getShipsPlaced)() === false && this.id.split('-')[0] === 'A') {\n    const coordinates = this.id.split('-');\n    const potentialCords = board.makeShipCoordinates(\n      Number(coordinates[1]),\n      Number(coordinates[2]),\n      board.newShipLength,\n      (0,_index__WEBPACK_IMPORTED_MODULE_0__.getRotation)()\n    );\n\n    if (board.isValidPosition(potentialCords, (0,_index__WEBPACK_IMPORTED_MODULE_0__.getRotation)())) {\n      potentialCords.forEach((coord) => {\n        const cell = document.getElementById(`A-${coord[0]}-${coord[1]}`);\n        cell.classList.add('occupied');\n      });\n    } else {\n      const cell = document.getElementById(\n        `A-${coordinates[1]}-${coordinates[2]}`\n      );\n      cell.style.cursor = 'not-allowed';\n    }\n  }\n}\n\nfunction unHover() {\n  const board = (0,_index__WEBPACK_IMPORTED_MODULE_0__.getBoardA)();\n  if ((0,_index__WEBPACK_IMPORTED_MODULE_0__.getShipsPlaced)() === false && this.id.split('-')[0] === 'A') {\n    const coordinates = this.id.split('-');\n\n    const potentialCords = board.makeShipCoordinates(\n      Number(coordinates[1]),\n      Number(coordinates[2]),\n      board.newShipLength,\n      (0,_index__WEBPACK_IMPORTED_MODULE_0__.getRotation)()\n    );\n\n    if (board.isValidPosition(potentialCords, (0,_index__WEBPACK_IMPORTED_MODULE_0__.getRotation)())) {\n      potentialCords.forEach((coord) => {\n        const cell = document.getElementById(`A-${coord[0]}-${coord[1]}`);\n        cell.classList.remove('occupied');\n      });\n    } else {\n      const cell = document.getElementById(\n        `A-${coordinates[1]}-${coordinates[2]}`\n      );\n      cell.style.cursor = 'default';\n    }\n  }\n}\n\nfunction makeBoard(prefix, id) {\n  const container = document.getElementById(`${id}`);\n  const boardBox = document.createElement('div');\n  container.appendChild(boardBox);\n\n  boardBox.classList.add('boardBox');\n\n  for (let i = 1; i <= 10; i += 1) {\n    for (let x = 1; x <= 10; x += 1) {\n      const coord = document.createElement('div');\n      coord.classList.add('coord');\n      coord.setAttribute('id', `${prefix}-${x}-${i}`);\n      coord.setAttribute('value', `${prefix}-${x}-${i}`);\n      coord.addEventListener('mouseover', shipHover);\n      coord.addEventListener('mouseout', unHover);\n      coord.addEventListener('click', _index__WEBPACK_IMPORTED_MODULE_0__.clickNewShip);\n      coord.addEventListener('click', _index__WEBPACK_IMPORTED_MODULE_0__.gameLoop);\n      boardBox.appendChild(coord);\n    }\n  }\n}\n\nfunction updateScores(player, computer) {\n  const playerBox = document.getElementById('board1');\n  const playerScore = document.createElement('h1');\n  playerBox.appendChild(playerScore);\n  if (player.score > 0 || computer.score > 0) {\n    playerScore.textContent = `You - ${player.score} wins`;\n  } else {\n    playerScore.textContent = 'You';\n  }\n\n  const computerBox = document.getElementById('board2');\n  const computerScore = document.createElement('h1');\n  computerBox.appendChild(computerScore);\n  if (computer.score > 0 || player.score > 0) {\n    computerScore.textContent = `Computer - ${computer.score} wins`;\n  } else {\n    computerScore.textContent = 'Computer';\n  }\n}\n\nfunction refreshRotation() {\n  (0,_index__WEBPACK_IMPORTED_MODULE_0__.rotateShip)();\n}\n\nconst rotationBtn = document.getElementById('rotationBtn');\nrotationBtn.addEventListener('click', refreshRotation);\n\n\n//# sourceURL=webpack://odin-battleships/./src/domInteraction.js?");

/***/ }),

/***/ "./src/factories/gameboard.js":
/*!************************************!*\
  !*** ./src/factories/gameboard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gameboard\": () => (/* binding */ gameboard)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/factories/ship.js\");\n\n\nfunction gameboard() {\n  return {\n    ships: [],\n    missedShots: [],\n    newShipLength: 5,\n\n    // Makes new ship object, sets coordinates, validates coordinates\n    // and stores in gameboard ships array if within grid\n    newShip(length, xCOORD, yCOORD, orientation) {\n      const newShip = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.ship)(length);\n      newShip.coordinates = this.makeShipCoordinates(\n        xCOORD,\n        yCOORD,\n        length,\n        orientation\n      );\n\n      if (this.isValidPosition(newShip.coordinates, orientation)) {\n        this.ships.push(newShip);\n        this.newShipLength -= 1;\n      } else {\n        console.log('Invalid placement!');\n      }\n    },\n\n    // Returns true if given coordinates are both within the grid, and all coordinates are available\n    isValidPosition(coordinates, orientation) {\n      if (\n        this.isWithinGrid(coordinates, orientation) &&\n        this.isSpaceAvailable(coordinates)\n      ) {\n        return true;\n      }\n      return false;\n    },\n\n    randomShip() {\n      const newShip = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.ship)(this.newShipLength);\n      {\n        const randomX = Math.floor(Math.random() * 10 + 1);\n        const randomY = Math.floor(Math.random() * 10 + 1);\n        const length = this.newShipLength;\n        const shipOrientation = this.randomOrientation();\n\n        newShip.coordinates = this.makeShipCoordinates(\n          randomX,\n          randomY,\n          length,\n          shipOrientation\n        );\n\n        if (this.isValidPosition(newShip.coordinates, shipOrientation)) {\n          this.ships.push(newShip);\n          this.newShipLength -= 1;\n        } else {\n          this.randomShip();\n        }\n      }\n    },\n\n    randomCoordinates() {\n      const randomX = Math.floor(Math.random() * 10 + 1);\n      const randomY = Math.floor(Math.random() * 10 + 1);\n      const length = this.newShipLength;\n      const shipOrientation = this.randomOrientation();\n\n      return this.makeShipCoordinates(\n        randomX,\n        randomY,\n        length,\n        shipOrientation\n      );\n    },\n\n    randomOrientation() {\n      const randomNumber = Math.floor(Math.random() * 10 + 1);\n\n      if (randomNumber % 2 === 0) {\n        return 'horizontal';\n      }\n      return 'vertical';\n    },\n\n    // Creates array for coordinates starting at bow for given length and orientation\n    makeShipCoordinates(bowX, bowY, length, orientation) {\n      const shipCoordinates = [];\n\n      if (orientation === 'horizontal') {\n        for (let i = bowX; i < bowX + length; i += 1) {\n          shipCoordinates.push([i, bowY]);\n        }\n      }\n\n      if (orientation === 'vertical') {\n        for (let i = bowY; i < bowY + length; i += 1) {\n          shipCoordinates.push([bowX, i]);\n        }\n      }\n      return shipCoordinates;\n    },\n\n    // Returns true if ship placement is within 10 x 10 grid, or false otherwise\n    isWithinGrid(coordinates, orientation) {\n      if (orientation === 'horizontal') {\n        const bow = coordinates[0][0];\n        const stern = coordinates[coordinates.length - 1][0];\n\n        if (bow >= 1 && stern <= 10) {\n          return true;\n        }\n        return false;\n      }\n\n      if (orientation === 'vertical') {\n        const bow = coordinates[0][1];\n        const stern = coordinates[coordinates.length - 1][1];\n\n        if (bow >= 1 && stern <= 10) {\n          return true;\n        }\n        return false;\n      }\n      return false;\n    },\n\n    // Takes coordinates array [x, y] and returns true if single coordinate is available\n    isCoordAvailable(singleCOORD) {\n      const xCOORD = singleCOORD[0];\n      const yCOORD = singleCOORD[1];\n\n      let isAvailable = true;\n\n      this.ships.forEach((ship) => {\n        ship.coordinates.forEach((coordinate) => {\n          if (coordinate[0] === xCOORD && coordinate[1] === yCOORD) {\n            isAvailable = false;\n          }\n        });\n      });\n      return isAvailable;\n    },\n\n    // Takes array of coordinates and returns true if all are available\n    isSpaceAvailable(coordinates) {\n      return coordinates.every((coordinate) =>\n        this.isCoordAvailable([coordinate[0], coordinate[1]])\n      );\n    },\n\n    // Takes single coordinates array, finds relevant ship and records hit or miss.\n    receieveAtttack(singleCOORD) {\n      let didHitShip = false;\n      const xCOORD = singleCOORD[0];\n      const yCOORD = singleCOORD[1];\n\n      this.ships.forEach((ship) => {\n        ship.coordinates.forEach((coordinate) => {\n          if (coordinate[0] === xCOORD && coordinate[1] === yCOORD) {\n            ship.hit(singleCOORD);\n            didHitShip = true;\n          }\n        });\n      });\n\n      if (didHitShip === false) {\n        this.missedShots.push(singleCOORD);\n      }\n    },\n\n    // Returns true if all ships on the gameboard have been sunk\n    areShipsSunk() {\n      return this.ships.every((ship) => ship.isSunk());\n    },\n  };\n}\n\n\n//# sourceURL=webpack://odin-battleships/./src/factories/gameboard.js?");

/***/ }),

/***/ "./src/factories/player.js":
/*!*********************************!*\
  !*** ./src/factories/player.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"player\": () => (/* binding */ player)\n/* harmony export */ });\nfunction player() {\n  return {\n    // Stores coordinates of all fired shots in array\n    firedShots: [],\n    score: 0,\n\n    // Triggers receieveAttack function on on given board with provided coordinates\n    fire(board, coords) {\n      if (this.firedShots > 0) {\n        if (this.isOriginalShot(coords)) {\n          board.receieveAtttack(coords);\n          this.firedShots.push(coords);\n        } else {\n          throw new Error('Cordinate has already been fired upon');\n        }\n      } else {\n        board.receieveAtttack(coords);\n        this.firedShots.push(coords);\n      }\n    },\n\n    // Compares input coordinates against previous shots and returns true if they're original.\n    isOriginalShot(coords) {\n      return this.firedShots.every((shot) => {\n        if (coords[0] === shot[0] && coords[1] === shot[1]) {\n          return false;\n        }\n        return true;\n      });\n    },\n\n    // Fires random shot upon input board\n    randomFire(board) {\n      const coords = this.makeRandomCoords();\n\n      if (this.firedShots.length >= 0 && this.firedShots.length <= 99) {\n        if (this.isOriginalShot(coords)) {\n          board.receieveAtttack(coords);\n          this.firedShots.push(coords);\n        } else {\n          this.randomFire(board);\n        }\n      } else {\n        throw new Error('Board covered!');\n      }\n    },\n\n    // Returns random coordinates [[1-10], [1-10]]\n    makeRandomCoords() {\n      const randomX = Math.floor(Math.random() * 10 + 1);\n      const randomY = Math.floor(Math.random() * 10 + 1);\n      return [randomX, randomY];\n    },\n  };\n}\n\n\n//# sourceURL=webpack://odin-battleships/./src/factories/player.js?");

/***/ }),

/***/ "./src/factories/ship.js":
/*!*******************************!*\
  !*** ./src/factories/ship.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ship\": () => (/* binding */ ship)\n/* harmony export */ });\nfunction ship(length) {\n  return {\n    length,\n    hitLocations: [],\n    hit(coords) {\n      this.hitLocations.push(coords);\n    },\n    isSunk() {\n      if (this.hitLocations.length >= this.length) {\n        return true;\n      }\n      return false;\n    },\n  };\n}\n\n\n//# sourceURL=webpack://odin-battleships/./src/factories/ship.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clickNewShip\": () => (/* binding */ clickNewShip),\n/* harmony export */   \"gameLoop\": () => (/* binding */ gameLoop),\n/* harmony export */   \"getBoardA\": () => (/* binding */ getBoardA),\n/* harmony export */   \"getRotation\": () => (/* binding */ getRotation),\n/* harmony export */   \"getShipsPlaced\": () => (/* binding */ getShipsPlaced),\n/* harmony export */   \"newGame\": () => (/* binding */ newGame),\n/* harmony export */   \"rotateShip\": () => (/* binding */ rotateShip)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _domInteraction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domInteraction */ \"./src/domInteraction.js\");\n/* harmony import */ var _factories_gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factories/gameboard */ \"./src/factories/gameboard.js\");\n/* harmony import */ var _factories_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./factories/player */ \"./src/factories/player.js\");\n\n\n\n\n\n\nlet shipsPlaced = false;\n\nlet rotation = 'horizontal';\n\n// Toggles new ship orientation as horizontal or vertical\nfunction rotateShip() {\n  if (rotation === 'horizontal') {\n    rotation = 'vertical';\n  } else {\n    rotation = 'horizontal';\n  }\n}\n\nconst playerA = (0,_factories_player__WEBPACK_IMPORTED_MODULE_3__.player)();\nconst playerB = (0,_factories_player__WEBPACK_IMPORTED_MODULE_3__.player)();\nconst boardA = (0,_factories_gameboard__WEBPACK_IMPORTED_MODULE_2__.gameboard)();\nconst boardB = (0,_factories_gameboard__WEBPACK_IMPORTED_MODULE_2__.gameboard)();\n\n// makeBoard('A', 'board1');\n// renderShips('A', boardA);\n\n// boardB.randomShip();\n// boardB.randomShip();\n// boardB.randomShip();\n// boardB.randomShip();\n// boardB.randomShip();\n\n// makeBoard('B', 'board2');\n// renderShips('B', boardB);\n\nfunction checkGameOver() {\n  if (boardA.areShipsSunk()) {\n    (0,_domInteraction__WEBPACK_IMPORTED_MODULE_1__.displayGameOver)('The Computer is');\n    playerB.score += 1;\n    shipsPlaced = false;\n  }\n\n  if (boardB.areShipsSunk()) {\n    (0,_domInteraction__WEBPACK_IMPORTED_MODULE_1__.displayGameOver)('You are');\n    playerA.score += 1;\n    shipsPlaced = false;\n  }\n}\n\nfunction gameLoop() {\n  if (shipsPlaced === true) {\n    const coordinates = this.id.split('-');\n\n    if (coordinates[0] === 'B') {\n      const xCord = Number(coordinates[1]);\n      const yCord = Number(coordinates[2]);\n      playerA.fire(boardB, [xCord, yCord]);\n      (0,_domInteraction__WEBPACK_IMPORTED_MODULE_1__.renderAttacks)('B', boardB);\n\n      playerB.randomFire(boardA);\n      (0,_domInteraction__WEBPACK_IMPORTED_MODULE_1__.renderAttacks)('A', boardA);\n      checkGameOver();\n    }\n  }\n}\n\nfunction getBoardA() {\n  return boardA;\n}\n\nfunction getShipsPlaced() {\n  return shipsPlaced;\n}\n\nfunction getRotation() {\n  return rotation;\n}\n\nfunction clickNewShip() {\n  if (shipsPlaced === false && this.id.split('-')[0] === 'A') {\n    const coordinates = this.id.split('-');\n    boardA.newShip(\n      boardA.newShipLength,\n      Number(coordinates[1]),\n      Number(coordinates[2]),\n      rotation\n    );\n\n    (0,_domInteraction__WEBPACK_IMPORTED_MODULE_1__.renderShips)('A', boardA);\n    (0,_domInteraction__WEBPACK_IMPORTED_MODULE_1__.updateStatus)(boardA.newShipLength);\n\n    if (boardA.ships.length >= 5) {\n      shipsPlaced = true;\n    }\n  }\n}\n\nfunction newGame() {\n  (0,_domInteraction__WEBPACK_IMPORTED_MODULE_1__.wipeBoards)();\n  (0,_domInteraction__WEBPACK_IMPORTED_MODULE_1__.updateScores)(playerA, playerB);\n  (0,_domInteraction__WEBPACK_IMPORTED_MODULE_1__.makeBoard)('A', 'board1');\n  (0,_domInteraction__WEBPACK_IMPORTED_MODULE_1__.makeBoard)('B', 'board2');\n  shipsPlaced = false;\n\n  playerA.firedShots = [];\n  playerB.firedShots = [];\n\n  boardA.ships = [];\n  boardA.newShipLength = 5;\n  boardA.missedShots = [];\n\n  (0,_domInteraction__WEBPACK_IMPORTED_MODULE_1__.updateStatus)(boardA.newShipLength);\n\n  boardB.ships = [];\n  boardB.newShipLength = 5;\n  boardB.missedShots = [];\n\n  boardB.randomShip();\n  boardB.randomShip();\n  boardB.randomShip();\n  boardB.randomShip();\n  boardB.randomShip();\n  (0,_domInteraction__WEBPACK_IMPORTED_MODULE_1__.renderShips)('B', boardB);\n}\n\nconst resetBtn = document.getElementById('resetBtn');\nresetBtn.addEventListener('click', newGame);\n\nnewGame();\n\n\n//# sourceURL=webpack://odin-battleships/./src/index.js?");

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
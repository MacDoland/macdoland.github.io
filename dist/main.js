/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nvar urlEscape = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/url-escape.js */ \"./node_modules/css-loader/dist/runtime/url-escape.js\");\nvar ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../images/pila-background.jpg */ \"./src/images/pila-background.jpg\"));\nvar ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(/*! ../images/pila-background.webp */ \"./src/images/pila-background.webp\"));\nvar ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(/*! ../images/garden-background.jpg */ \"./src/images/garden-background.jpg\"));\nvar ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(/*! ../images/garden-background.webp */ \"./src/images/garden-background.webp\"));\nvar ___CSS_LOADER_URL___4___ = urlEscape(__webpack_require__(/*! ../images/pattern-background.jpg */ \"./src/images/pattern-background.jpg\"));\nvar ___CSS_LOADER_URL___5___ = urlEscape(__webpack_require__(/*! ../images/pattern-background.webp */ \"./src/images/pattern-background.webp\"));\nvar ___CSS_LOADER_URL___6___ = urlEscape(__webpack_require__(/*! ../images/unearthed.jpg */ \"./src/images/unearthed.jpg\"));\nvar ___CSS_LOADER_URL___7___ = urlEscape(__webpack_require__(/*! ../images/unearthed.webp */ \"./src/images/unearthed.webp\"));\nvar ___CSS_LOADER_URL___8___ = urlEscape(__webpack_require__(/*! ../images/funeral-mapper.png */ \"./src/images/funeral-mapper.png\"));\nvar ___CSS_LOADER_URL___9___ = urlEscape(__webpack_require__(/*! ../images/funeral-mapper.webp */ \"./src/images/funeral-mapper.webp\"));\nvar ___CSS_LOADER_URL___10___ = urlEscape(__webpack_require__(/*! ../images/efl-match-center.jpg */ \"./src/images/efl-match-center.jpg\"));\nvar ___CSS_LOADER_URL___11___ = urlEscape(__webpack_require__(/*! ../images/efl-match-center.webp */ \"./src/images/efl-match-center.webp\"));\nvar ___CSS_LOADER_URL___12___ = urlEscape(__webpack_require__(/*! ../images/royal-london.png */ \"./src/images/royal-london.png\"));\nvar ___CSS_LOADER_URL___13___ = urlEscape(__webpack_require__(/*! ../images/royal-london.webp */ \"./src/images/royal-london.webp\"));\nvar ___CSS_LOADER_URL___14___ = urlEscape(__webpack_require__(/*! ../images/syfy20.jpg */ \"./src/images/syfy20.jpg\"));\nvar ___CSS_LOADER_URL___15___ = urlEscape(__webpack_require__(/*! ../images/syfy20.webp */ \"./src/images/syfy20.webp\"));\nvar ___CSS_LOADER_URL___16___ = urlEscape(__webpack_require__(/*! ../images/ghost-background.jpg */ \"./src/images/ghost-background.jpg\"));\nvar ___CSS_LOADER_URL___17___ = urlEscape(__webpack_require__(/*! ../images/ghost-background.webp */ \"./src/images/ghost-background.webp\"));\nvar ___CSS_LOADER_URL___18___ = urlEscape(__webpack_require__(/*! ../images/lexus.png */ \"./src/images/lexus.png\"));\nvar ___CSS_LOADER_URL___19___ = urlEscape(__webpack_require__(/*! ../images/lexus.webp */ \"./src/images/lexus.webp\"));\nvar ___CSS_LOADER_URL___20___ = urlEscape(__webpack_require__(/*! ../images/advent-calendar.png */ \"./src/images/advent-calendar.png\"));\nvar ___CSS_LOADER_URL___21___ = urlEscape(__webpack_require__(/*! ../images/advent-calendar.webp */ \"./src/images/advent-calendar.webp\"));\nvar ___CSS_LOADER_URL___22___ = urlEscape(__webpack_require__(/*! ../images/profile.png */ \"./src/images/profile.png\"));\nvar ___CSS_LOADER_URL___23___ = urlEscape(__webpack_require__(/*! ../images/profile.webp */ \"./src/images/profile.webp\"));\nvar ___CSS_LOADER_URL___24___ = urlEscape(__webpack_require__(/*! ../images/pila-game.png */ \"./src/images/pila-game.png\"));\nvar ___CSS_LOADER_URL___25___ = urlEscape(__webpack_require__(/*! ../images/pila-game.webp */ \"./src/images/pila-game.webp\"));\nvar ___CSS_LOADER_URL___26___ = urlEscape(__webpack_require__(/*! ../images/joe-mcdowall-itadakimasu.jpg */ \"./src/images/joe-mcdowall-itadakimasu.jpg\"));\nvar ___CSS_LOADER_URL___27___ = urlEscape(__webpack_require__(/*! ../images/joe-mcdowall-itadakimasu.webp */ \"./src/images/joe-mcdowall-itadakimasu.webp\"));\nvar ___CSS_LOADER_URL___28___ = urlEscape(__webpack_require__(/*! ../images/islands.png */ \"./src/images/islands.png\"));\nvar ___CSS_LOADER_URL___29___ = urlEscape(__webpack_require__(/*! ../images/islands.webp */ \"./src/images/islands.webp\"));\nvar ___CSS_LOADER_URL___30___ = urlEscape(__webpack_require__(/*! ../images/hunt.png */ \"./src/images/hunt.png\"));\nvar ___CSS_LOADER_URL___31___ = urlEscape(__webpack_require__(/*! ../images/hunt.webp */ \"./src/images/hunt.webp\"));\nvar ___CSS_LOADER_URL___32___ = urlEscape(__webpack_require__(/*! ../images/green-city.png */ \"./src/images/green-city.png\"));\nvar ___CSS_LOADER_URL___33___ = urlEscape(__webpack_require__(/*! ../images/green-city.webp */ \"./src/images/green-city.webp\"));\n\n// Module\nexports.push([module.i, \"/* http://meyerweb.com/eric/tools/css/reset/ \\r\\n   v2.0 | 20110126\\r\\n   License: none (public domain)\\r\\n*/\\nhtml, body, div, span, applet, object, iframe,\\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\\na, abbr, acronym, address, big, cite, code,\\ndel, dfn, em, img, ins, kbd, q, s, samp,\\nsmall, strike, strong, sub, sup, tt, var,\\nb, u, i, center,\\ndl, dt, dd, ol, ul, li,\\nfieldset, form, label, legend,\\ntable, caption, tbody, tfoot, thead, tr, th, td,\\narticle, aside, canvas, details, embed,\\nfigure, figcaption, footer, header, hgroup,\\nmenu, nav, output, ruby, section, summary,\\ntime, mark, audio, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline; }\\n\\n/* HTML5 display-role reset for older browsers */\\narticle, aside, details, figcaption, figure,\\nfooter, header, hgroup, menu, nav, section {\\n  display: block; }\\n\\nbody {\\n  line-height: 1; }\\n\\nol, ul {\\n  list-style: none; }\\n\\nblockquote, q {\\n  quotes: none; }\\n\\nblockquote:before, blockquote:after,\\nq:before, q:after {\\n  content: '';\\n  content: none; }\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0; }\\n\\n.c-grid {\\n  display: grid;\\n  grid-gap: 1px;\\n  grid-template-columns: 1fr;\\n  grid-template-rows: repeat(20, 100vmin);\\n  height: 100%;\\n  width: 100%; }\\n  @media (min-width: 768px) {\\n    .c-grid {\\n      grid-template-columns: 1fr 1fr;\\n      grid-template-rows: repeat(20, 33.3333vmin); } }\\n  @media (min-width: 992px) {\\n    .c-grid {\\n      grid-template-columns: 1fr 1fr 1fr;\\n      grid-template-rows: repeat(20, 33.3333vmin); } }\\n  @media (min-width: 1280px) {\\n    .c-grid {\\n      grid-template-columns: 1fr 1fr 1fr 1fr;\\n      grid-template-rows: repeat(20, 33.3333vmin); } }\\n  .c-grid__item {\\n    background: #292929;\\n    box-sizing: border-box;\\n    height: 100%;\\n    width: 100%;\\n    grid-auto-columns: minmax(calc(100% / 1), auto); }\\n    @media (min-width: 768px) {\\n      .c-grid__item {\\n        grid-auto-rows: minmax(calc(100% / 3), auto);\\n        grid-auto-columns: minmax(calc(100% / 4), auto); }\\n        .c-grid__item--double {\\n          background: #2e2e2e;\\n          grid-column: 1 / 3;\\n          grid-row: 1 / 3; } }\\n  .c-grid__item__inner {\\n    padding: 20px; }\\n  .c-grid iframe {\\n    height: 100%;\\n    width: 100%;\\n    position: relative !important; }\\n\\n.c-gallery__item--web {\\n  cursor: pointer;\\n  transition: transform 0.5s;\\n  opacity: 0.9; }\\n  .c-gallery__item--web:hover {\\n    transform: scale(0.99);\\n    opacity: 1; }\\n\\n.c-overlay {\\n  display: none; }\\n  .c-overlay--is-open {\\n    display: block;\\n    position: fixed;\\n    background: rgba(0, 0, 0, 0.5);\\n    top: 0;\\n    left: 0;\\n    right: 0;\\n    bottom: 0;\\n    padding: 80px 5%;\\n    z-index: 1000; }\\n    .c-overlay--is-open .c-overlay__inner {\\n      background: #000;\\n      box-sizing: border-box;\\n      display: flex;\\n      height: 100%;\\n      padding: 40px;\\n      position: relative;\\n      justify-content: space-between;\\n      overflow-y: scroll; }\\n    .c-overlay--is-open .c-overlay__details {\\n      width: 40%;\\n      padding-right: 40px; }\\n    .c-overlay--is-open .c-overlay__image {\\n      background-size: contain !important;\\n      background-repeat: no-repeat !important;\\n      width: 60%; }\\n    .c-overlay--is-open h2 {\\n      font-size: 36px; }\\n    .c-overlay--is-open .c-overlay__close-button {\\n      margin: 20px;\\n      position: absolute;\\n      top: 0;\\n      right: 0; }\\n      .c-overlay--is-open .c-overlay__close-button span {\\n        position: absolute;\\n        left: -10000px;\\n        visibility: hidden; }\\n\\n/* Close button */\\n.close {\\n  background: #000;\\n  position: absolute;\\n  right: 32px;\\n  top: 32px;\\n  width: 32px;\\n  height: 32px;\\n  opacity: 0.3;\\n  cursor: pointer;\\n  border: none;\\n  color: white; }\\n\\n.close:hover {\\n  opacity: 1; }\\n\\n.close:before, .close:after {\\n  position: absolute;\\n  left: 15px;\\n  content: ' ';\\n  height: 33px;\\n  width: 2px;\\n  background-color: #fff;\\n  top: 0; }\\n\\n.close:before {\\n  transform: rotate(45deg); }\\n\\n.close:after {\\n  transform: rotate(-45deg); }\\n\\n/* Close button -- end */\\nhtml,\\nbody,\\n#portfolio-grid {\\n  background: #000;\\n  height: 100%;\\n  width: 100%; }\\n\\n.remove-scroll {\\n  overflow: hidden; }\\n\\nbody {\\n  color: #fff;\\n  font-family: \\\"Open Sans Condensed\\\", Arial, sans-serif;\\n  font-size: 16px;\\n  letter-spacing: 1px;\\n  line-height: 20px;\\n  height: 100%;\\n  width: 100%; }\\n  @media (min-width: 768px) {\\n    body {\\n      font-size: 24px;\\n      line-height: 24px; } }\\n\\nh2 {\\n  font-size: 24px;\\n  line-height: 24px;\\n  margin: 5px 0 10px; }\\n  @media (min-width: 768px) {\\n    h2 {\\n      margin: 10px 0 20px; } }\\n\\np {\\n  margin: 20px 0; }\\n\\n.page-title {\\n  font-family: \\\"Anton\\\", sans-serif;\\n  font-size: 28vmin;\\n  font-weight: bold;\\n  padding: 80px 40px;\\n  position: relative;\\n  max-height: 100%;\\n  text-align: right;\\n  text-transform: uppercase;\\n  color: #fff; }\\n\\n.profile {\\n  -webkit-filter: grayscale(100%);\\n  /* Safari 6.0 - 9.0 */\\n  filter: grayscale(100%);\\n  position: relative;\\n  z-index: 0; }\\n\\n.profile::before {\\n  background: #292929;\\n  content: \\\"\\\";\\n  position: absolute;\\n  top: 0;\\n  right: 0;\\n  left: 0;\\n  bottom: 0;\\n  z-index: 0; }\\n\\n.profile::after {\\n  background: #292929;\\n  content: \\\"\\\";\\n  position: absolute;\\n  top: 0;\\n  right: 0;\\n  left: 0;\\n  bottom: 0;\\n  z-index: 10; }\\n\\n.sketchfab-embed-wrapper {\\n  height: 100%;\\n  width: 100%; }\\n\\n.image-background {\\n  position: relative; }\\n\\n.image-background a {\\n  background-color: rgba(0, 0, 0, 0.85);\\n  color: #fff;\\n  display: block;\\n  position: absolute;\\n  padding: 10px;\\n  bottom: 0;\\n  right: 0; }\\n\\n.no-webp .pila-background {\\n  background: url(\" + ___CSS_LOADER_URL___0___ + \");\\n  background-size: cover;\\n  background-position: center center; }\\n\\n.webp .pila-background {\\n  background: url(\" + ___CSS_LOADER_URL___1___ + \");\\n  background-size: cover;\\n  background-position: center center; }\\n\\n.no-webp .garden-background {\\n  background: url(\" + ___CSS_LOADER_URL___2___ + \");\\n  background-size: cover;\\n  background-position: center top; }\\n\\n.webp .garden-background {\\n  background: url(\" + ___CSS_LOADER_URL___3___ + \");\\n  background-size: cover;\\n  background-position: center top; }\\n\\n.no-webp .pattern-background {\\n  background: url(\" + ___CSS_LOADER_URL___4___ + \");\\n  background-size: cover;\\n  background-position: center top; }\\n\\n.webp .pattern-background {\\n  background: url(\" + ___CSS_LOADER_URL___5___ + \");\\n  background-size: cover;\\n  background-position: center top; }\\n\\n.no-webp .unearthed-background {\\n  background: url(\" + ___CSS_LOADER_URL___6___ + \");\\n  background-size: cover;\\n  background-position: center top; }\\n\\n.webp .unearthed-background {\\n  background: url(\" + ___CSS_LOADER_URL___7___ + \");\\n  background-size: cover;\\n  background-position: center top; }\\n\\n.no-webp .funeral-background {\\n  background: url(\" + ___CSS_LOADER_URL___8___ + \");\\n  background-size: cover;\\n  background-position: center top; }\\n\\n.webp .funeral-background {\\n  background: url(\" + ___CSS_LOADER_URL___9___ + \");\\n  background-size: cover;\\n  background-position: center top; }\\n\\n.no-webp .efl-background {\\n  background: url(\" + ___CSS_LOADER_URL___10___ + \");\\n  background-size: cover;\\n  background-position: center top; }\\n\\n.webp .efl-background {\\n  background: url(\" + ___CSS_LOADER_URL___11___ + \");\\n  background-size: cover;\\n  background-position: center top; }\\n\\n.no-webp .royal-london-background {\\n  background: url(\" + ___CSS_LOADER_URL___12___ + \");\\n  background-size: cover;\\n  background-position: center top; }\\n\\n.webp .royal-london-background {\\n  background: url(\" + ___CSS_LOADER_URL___13___ + \");\\n  background-size: cover;\\n  background-position: center top; }\\n\\n.no-webp .syfy-background {\\n  background: url(\" + ___CSS_LOADER_URL___14___ + \");\\n  /*source: http://picnicstudio.tv/syfy*/\\n  background-size: cover;\\n  background-position: center top; }\\n\\n.webp .syfy-background {\\n  background: url(\" + ___CSS_LOADER_URL___15___ + \");\\n  /*source: http://picnicstudio.tv/syfy*/\\n  background-size: cover;\\n  background-position: center top; }\\n\\n.no-webp .ghost-background {\\n  background: url(\" + ___CSS_LOADER_URL___16___ + \");\\n  background-size: cover;\\n  background-position: center top; }\\n\\n.webp .ghost-background {\\n  background: url(\" + ___CSS_LOADER_URL___17___ + \");\\n  background-size: cover;\\n  background-position: center top; }\\n\\n.no-webp .lexus-background {\\n  background: url(\" + ___CSS_LOADER_URL___18___ + \");\\n  background-size: cover;\\n  background-position: center top; }\\n\\n.webp .lexus-background {\\n  background: url(\" + ___CSS_LOADER_URL___19___ + \");\\n  background-size: cover;\\n  background-position: center top; }\\n\\n.no-webp .advent-background {\\n  background: url(\" + ___CSS_LOADER_URL___20___ + \");\\n  background-size: cover;\\n  background-position: center top; }\\n\\n.webp .advent-background {\\n  background: url(\" + ___CSS_LOADER_URL___21___ + \");\\n  background-size: cover;\\n  background-position: center top; }\\n\\n.no-webp .profile-background::after {\\n  background: url(\" + ___CSS_LOADER_URL___22___ + \");\\n  background-size: cover;\\n  background-position: center center;\\n  background-repeat: no-repeat; }\\n\\n.webp .profile-background::after {\\n  background: url(\" + ___CSS_LOADER_URL___23___ + \");\\n  background-size: contain;\\n  background-position: center bottom;\\n  background-repeat: no-repeat; }\\n\\n.no-webp .pila-game-background {\\n  background: url(\" + ___CSS_LOADER_URL___24___ + \");\\n  background-size: cover;\\n  background-position: center center;\\n  background-repeat: no-repeat; }\\n\\n.webp .pila-game-background {\\n  background: url(\" + ___CSS_LOADER_URL___25___ + \");\\n  background-size: cover;\\n  background-position: center center;\\n  background-repeat: no-repeat; }\\n\\n.no-webp .rice-background {\\n  background: url(\" + ___CSS_LOADER_URL___26___ + \");\\n  background-size: cover;\\n  background-position: center center;\\n  background-repeat: no-repeat; }\\n\\n.webp .rice-background {\\n  background: url(\" + ___CSS_LOADER_URL___27___ + \");\\n  background-size: cover;\\n  background-position: center center;\\n  background-repeat: no-repeat; }\\n\\n.no-webp .island-background {\\n  background: url(\" + ___CSS_LOADER_URL___28___ + \");\\n  background-size: cover;\\n  background-position: center center;\\n  background-repeat: no-repeat; }\\n\\n.webp .island-background {\\n  background: url(\" + ___CSS_LOADER_URL___29___ + \");\\n  background-size: cover;\\n  background-position: center center;\\n  background-repeat: no-repeat; }\\n\\n.no-webp .hunt-background {\\n  background: url(\" + ___CSS_LOADER_URL___30___ + \");\\n  background-size: cover;\\n  background-position: center center;\\n  background-repeat: no-repeat; }\\n\\n.webp .hunt-background {\\n  background: url(\" + ___CSS_LOADER_URL___31___ + \");\\n  background-size: cover;\\n  background-position: center center;\\n  background-repeat: no-repeat; }\\n\\n.no-webp .green-city-background {\\n  background: url(\" + ___CSS_LOADER_URL___32___ + \");\\n  background-size: cover;\\n  background-position: center center;\\n  background-repeat: no-repeat; }\\n\\n.webp .green-city-background {\\n  background: url(\" + ___CSS_LOADER_URL___33___ + \");\\n  background-size: cover;\\n  background-position: center center;\\n  background-repeat: no-repeat; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/scss/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return '@media ' + item[2] + '{' + content + '}';\n      } else {\n        return content;\n      }\n    }).join('');\n  }; // import a list of modules into the list\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (i = 0; i < modules.length; i++) {\n      var item = modules[i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || '';\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n  return '/*# ' + data + ' */';\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/url-escape.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/url-escape.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function escape(url, needQuotes) {\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || needQuotes) {\n    return '\"' + url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n') + '\"';\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/url-escape.js?");

/***/ }),

/***/ "./node_modules/dot/doT.js":
/*!*********************************!*\
  !*** ./node_modules/dot/doT.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_RESULT__;// doT.js\n// 2011-2014, Laura Doktorova, https://github.com/olado/doT\n// Licensed under the MIT license.\n\n(function () {\n\t\"use strict\";\n\n\tvar doT = {\n\t\tname: \"doT\",\n\t\tversion: \"1.1.1\",\n\t\ttemplateSettings: {\n\t\t\tevaluate:    /\\{\\{([\\s\\S]+?(\\}?)+)\\}\\}/g,\n\t\t\tinterpolate: /\\{\\{=([\\s\\S]+?)\\}\\}/g,\n\t\t\tencode:      /\\{\\{!([\\s\\S]+?)\\}\\}/g,\n\t\t\tuse:         /\\{\\{#([\\s\\S]+?)\\}\\}/g,\n\t\t\tuseParams:   /(^|[^\\w$])def(?:\\.|\\[[\\'\\\"])([\\w$\\.]+)(?:[\\'\\\"]\\])?\\s*\\:\\s*([\\w$\\.]+|\\\"[^\\\"]+\\\"|\\'[^\\']+\\'|\\{[^\\}]+\\})/g,\n\t\t\tdefine:      /\\{\\{##\\s*([\\w\\.$]+)\\s*(\\:|=)([\\s\\S]+?)#\\}\\}/g,\n\t\t\tdefineParams:/^\\s*([\\w$]+):([\\s\\S]+)/,\n\t\t\tconditional: /\\{\\{\\?(\\?)?\\s*([\\s\\S]*?)\\s*\\}\\}/g,\n\t\t\titerate:     /\\{\\{~\\s*(?:\\}\\}|([\\s\\S]+?)\\s*\\:\\s*([\\w$]+)\\s*(?:\\:\\s*([\\w$]+))?\\s*\\}\\})/g,\n\t\t\tvarname:\t\"it\",\n\t\t\tstrip:\t\ttrue,\n\t\t\tappend:\t\ttrue,\n\t\t\tselfcontained: false,\n\t\t\tdoNotSkipEncoded: false\n\t\t},\n\t\ttemplate: undefined, //fn, compile template\n\t\tcompile:  undefined, //fn, for express\n\t\tlog: true\n\t}, _globals;\n\n\tdoT.encodeHTMLSource = function(doNotSkipEncoded) {\n\t\tvar encodeHTMLRules = { \"&\": \"&#38;\", \"<\": \"&#60;\", \">\": \"&#62;\", '\"': \"&#34;\", \"'\": \"&#39;\", \"/\": \"&#47;\" },\n\t\t\tmatchHTML = doNotSkipEncoded ? /[&<>\"'\\/]/g : /&(?!#?\\w+;)|<|>|\"|'|\\//g;\n\t\treturn function(code) {\n\t\t\treturn code ? code.toString().replace(matchHTML, function(m) {return encodeHTMLRules[m] || m;}) : \"\";\n\t\t};\n\t};\n\n\t_globals = (function(){ return this || (0,eval)(\"this\"); }());\n\n\t/* istanbul ignore else */\n\tif ( true && module.exports) {\n\t\tmodule.exports = doT;\n\t} else if (true) {\n\t\t!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return doT;}).call(exports, __webpack_require__, exports, module),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else {}\n\n\tvar startend = {\n\t\tappend: { start: \"'+(\",      end: \")+'\",      startencode: \"'+encodeHTML(\" },\n\t\tsplit:  { start: \"';out+=(\", end: \");out+='\", startencode: \"';out+=encodeHTML(\" }\n\t}, skip = /$^/;\n\n\tfunction resolveDefs(c, block, def) {\n\t\treturn ((typeof block === \"string\") ? block : block.toString())\n\t\t.replace(c.define || skip, function(m, code, assign, value) {\n\t\t\tif (code.indexOf(\"def.\") === 0) {\n\t\t\t\tcode = code.substring(4);\n\t\t\t}\n\t\t\tif (!(code in def)) {\n\t\t\t\tif (assign === \":\") {\n\t\t\t\t\tif (c.defineParams) value.replace(c.defineParams, function(m, param, v) {\n\t\t\t\t\t\tdef[code] = {arg: param, text: v};\n\t\t\t\t\t});\n\t\t\t\t\tif (!(code in def)) def[code]= value;\n\t\t\t\t} else {\n\t\t\t\t\tnew Function(\"def\", \"def['\"+code+\"']=\" + value)(def);\n\t\t\t\t}\n\t\t\t}\n\t\t\treturn \"\";\n\t\t})\n\t\t.replace(c.use || skip, function(m, code) {\n\t\t\tif (c.useParams) code = code.replace(c.useParams, function(m, s, d, param) {\n\t\t\t\tif (def[d] && def[d].arg && param) {\n\t\t\t\t\tvar rw = (d+\":\"+param).replace(/'|\\\\/g, \"_\");\n\t\t\t\t\tdef.__exp = def.__exp || {};\n\t\t\t\t\tdef.__exp[rw] = def[d].text.replace(new RegExp(\"(^|[^\\\\w$])\" + def[d].arg + \"([^\\\\w$])\", \"g\"), \"$1\" + param + \"$2\");\n\t\t\t\t\treturn s + \"def.__exp['\"+rw+\"']\";\n\t\t\t\t}\n\t\t\t});\n\t\t\tvar v = new Function(\"def\", \"return \" + code)(def);\n\t\t\treturn v ? resolveDefs(c, v, def) : v;\n\t\t});\n\t}\n\n\tfunction unescape(code) {\n\t\treturn code.replace(/\\\\('|\\\\)/g, \"$1\").replace(/[\\r\\t\\n]/g, \" \");\n\t}\n\n\tdoT.template = function(tmpl, c, def) {\n\t\tc = c || doT.templateSettings;\n\t\tvar cse = c.append ? startend.append : startend.split, needhtmlencode, sid = 0, indv,\n\t\t\tstr  = (c.use || c.define) ? resolveDefs(c, tmpl, def || {}) : tmpl;\n\n\t\tstr = (\"var out='\" + (c.strip ? str.replace(/(^|\\r|\\n)\\t* +| +\\t*(\\r|\\n|$)/g,\" \")\n\t\t\t\t\t.replace(/\\r|\\n|\\t|\\/\\*[\\s\\S]*?\\*\\//g,\"\"): str)\n\t\t\t.replace(/'|\\\\/g, \"\\\\$&\")\n\t\t\t.replace(c.interpolate || skip, function(m, code) {\n\t\t\t\treturn cse.start + unescape(code) + cse.end;\n\t\t\t})\n\t\t\t.replace(c.encode || skip, function(m, code) {\n\t\t\t\tneedhtmlencode = true;\n\t\t\t\treturn cse.startencode + unescape(code) + cse.end;\n\t\t\t})\n\t\t\t.replace(c.conditional || skip, function(m, elsecase, code) {\n\t\t\t\treturn elsecase ?\n\t\t\t\t\t(code ? \"';}else if(\" + unescape(code) + \"){out+='\" : \"';}else{out+='\") :\n\t\t\t\t\t(code ? \"';if(\" + unescape(code) + \"){out+='\" : \"';}out+='\");\n\t\t\t})\n\t\t\t.replace(c.iterate || skip, function(m, iterate, vname, iname) {\n\t\t\t\tif (!iterate) return \"';} } out+='\";\n\t\t\t\tsid+=1; indv=iname || \"i\"+sid; iterate=unescape(iterate);\n\t\t\t\treturn \"';var arr\"+sid+\"=\"+iterate+\";if(arr\"+sid+\"){var \"+vname+\",\"+indv+\"=-1,l\"+sid+\"=arr\"+sid+\".length-1;while(\"+indv+\"<l\"+sid+\"){\"\n\t\t\t\t\t+vname+\"=arr\"+sid+\"[\"+indv+\"+=1];out+='\";\n\t\t\t})\n\t\t\t.replace(c.evaluate || skip, function(m, code) {\n\t\t\t\treturn \"';\" + unescape(code) + \"out+='\";\n\t\t\t})\n\t\t\t+ \"';return out;\")\n\t\t\t.replace(/\\n/g, \"\\\\n\").replace(/\\t/g, '\\\\t').replace(/\\r/g, \"\\\\r\")\n\t\t\t.replace(/(\\s|;|\\}|^|\\{)out\\+='';/g, '$1').replace(/\\+''/g, \"\");\n\t\t\t//.replace(/(\\s|;|\\}|^|\\{)out\\+=''\\+/g,'$1out+=');\n\n\t\tif (needhtmlencode) {\n\t\t\tif (!c.selfcontained && _globals && !_globals._encodeHTML) _globals._encodeHTML = doT.encodeHTMLSource(c.doNotSkipEncoded);\n\t\t\tstr = \"var encodeHTML = typeof _encodeHTML !== 'undefined' ? _encodeHTML : (\"\n\t\t\t\t+ doT.encodeHTMLSource.toString() + \"(\" + (c.doNotSkipEncoded || '') + \"));\"\n\t\t\t\t+ str;\n\t\t}\n\t\ttry {\n\t\t\treturn new Function(c.varname, str);\n\t\t} catch (e) {\n\t\t\t/* istanbul ignore else */\n\t\t\tif (typeof console !== \"undefined\") console.log(\"Could not create a template function: \" + str);\n\t\t\tthrow e;\n\t\t}\n\t};\n\n\tdoT.compile = function(tmpl, def) {\n\t\treturn doT.template(tmpl, null, def);\n\t};\n}());\n\n\n//# sourceURL=webpack:///./node_modules/dot/doT.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target, parent) {\n  if (parent){\n    return parent.querySelector(target);\n  }\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target, parent) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target, parent);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertAt.before, target);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\tif(options.attrs.nonce === undefined) {\n\t\tvar nonce = getNonce();\n\t\tif (nonce) {\n\t\t\toptions.attrs.nonce = nonce;\n\t\t}\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction getNonce() {\n\tif (false) {}\n\n\treturn __webpack_require__.nc;\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = typeof options.transform === 'function'\n\t\t ? options.transform(obj.css) \n\t\t : options.transform.default(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./src/images/advent-calendar.png":
/*!****************************************!*\
  !*** ./src/images/advent-calendar.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"eeeb4c1283269e680d79a378db71012e.png\";\n\n//# sourceURL=webpack:///./src/images/advent-calendar.png?");

/***/ }),

/***/ "./src/images/advent-calendar.webp":
/*!*****************************************!*\
  !*** ./src/images/advent-calendar.webp ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fa351678566894b1949f6e0debae0bda.webp\";\n\n//# sourceURL=webpack:///./src/images/advent-calendar.webp?");

/***/ }),

/***/ "./src/images/efl-match-center.jpg":
/*!*****************************************!*\
  !*** ./src/images/efl-match-center.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"6edaeff8476df52e78ff3483acead2f4.jpg\";\n\n//# sourceURL=webpack:///./src/images/efl-match-center.jpg?");

/***/ }),

/***/ "./src/images/efl-match-center.webp":
/*!******************************************!*\
  !*** ./src/images/efl-match-center.webp ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"45fb533460a6468798d7c9abbb4f4283.webp\";\n\n//# sourceURL=webpack:///./src/images/efl-match-center.webp?");

/***/ }),

/***/ "./src/images/funeral-mapper.png":
/*!***************************************!*\
  !*** ./src/images/funeral-mapper.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"dc1be6425b742b6da170b30c9a364ff3.png\";\n\n//# sourceURL=webpack:///./src/images/funeral-mapper.png?");

/***/ }),

/***/ "./src/images/funeral-mapper.webp":
/*!****************************************!*\
  !*** ./src/images/funeral-mapper.webp ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"7475b2f6a740c46fbe15b8c8a36a311c.webp\";\n\n//# sourceURL=webpack:///./src/images/funeral-mapper.webp?");

/***/ }),

/***/ "./src/images/garden-background.jpg":
/*!******************************************!*\
  !*** ./src/images/garden-background.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"f2598edb285b33bbf32572389dd763bf.jpg\";\n\n//# sourceURL=webpack:///./src/images/garden-background.jpg?");

/***/ }),

/***/ "./src/images/garden-background.webp":
/*!*******************************************!*\
  !*** ./src/images/garden-background.webp ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"b2c546429a1b004c37baff94032ff350.webp\";\n\n//# sourceURL=webpack:///./src/images/garden-background.webp?");

/***/ }),

/***/ "./src/images/ghost-background.jpg":
/*!*****************************************!*\
  !*** ./src/images/ghost-background.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"c5da999d283687c38750c7cbc720b893.jpg\";\n\n//# sourceURL=webpack:///./src/images/ghost-background.jpg?");

/***/ }),

/***/ "./src/images/ghost-background.webp":
/*!******************************************!*\
  !*** ./src/images/ghost-background.webp ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"b2a6610a8dc048ddfcc8ce6c4177b7db.webp\";\n\n//# sourceURL=webpack:///./src/images/ghost-background.webp?");

/***/ }),

/***/ "./src/images/green-city.png":
/*!***********************************!*\
  !*** ./src/images/green-city.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"443706aeb340d000e5218b14ce8f36da.png\";\n\n//# sourceURL=webpack:///./src/images/green-city.png?");

/***/ }),

/***/ "./src/images/green-city.webp":
/*!************************************!*\
  !*** ./src/images/green-city.webp ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"44a2940c2b58492fd4ab13139decf6c3.webp\";\n\n//# sourceURL=webpack:///./src/images/green-city.webp?");

/***/ }),

/***/ "./src/images/hunt.png":
/*!*****************************!*\
  !*** ./src/images/hunt.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"ad0f691deb10ef051f782c53a6cab27b.png\";\n\n//# sourceURL=webpack:///./src/images/hunt.png?");

/***/ }),

/***/ "./src/images/hunt.webp":
/*!******************************!*\
  !*** ./src/images/hunt.webp ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"d54fd27afaec9fbe7a02713a194b9871.webp\";\n\n//# sourceURL=webpack:///./src/images/hunt.webp?");

/***/ }),

/***/ "./src/images/islands.png":
/*!********************************!*\
  !*** ./src/images/islands.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"270a6c66c874efef6e3307e42013cfec.png\";\n\n//# sourceURL=webpack:///./src/images/islands.png?");

/***/ }),

/***/ "./src/images/islands.webp":
/*!*********************************!*\
  !*** ./src/images/islands.webp ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"c6fcecb2bcefd47e621ca3b35fd74ec0.webp\";\n\n//# sourceURL=webpack:///./src/images/islands.webp?");

/***/ }),

/***/ "./src/images/joe-mcdowall-itadakimasu.jpg":
/*!*************************************************!*\
  !*** ./src/images/joe-mcdowall-itadakimasu.jpg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"ff635713c8dde1e23e39c017870be2ff.jpg\";\n\n//# sourceURL=webpack:///./src/images/joe-mcdowall-itadakimasu.jpg?");

/***/ }),

/***/ "./src/images/joe-mcdowall-itadakimasu.webp":
/*!**************************************************!*\
  !*** ./src/images/joe-mcdowall-itadakimasu.webp ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"7cb3d8d470c048219ec52078c9979647.webp\";\n\n//# sourceURL=webpack:///./src/images/joe-mcdowall-itadakimasu.webp?");

/***/ }),

/***/ "./src/images/lexus.png":
/*!******************************!*\
  !*** ./src/images/lexus.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"c3a2554dc7a8f086f08b84f4929bff20.png\";\n\n//# sourceURL=webpack:///./src/images/lexus.png?");

/***/ }),

/***/ "./src/images/lexus.webp":
/*!*******************************!*\
  !*** ./src/images/lexus.webp ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"7570c4aa3dabc89b672fd9d426c3b91a.webp\";\n\n//# sourceURL=webpack:///./src/images/lexus.webp?");

/***/ }),

/***/ "./src/images/pattern-background.jpg":
/*!*******************************************!*\
  !*** ./src/images/pattern-background.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"18ecdb40b46be3ed09ec4e88c23acdf0.jpg\";\n\n//# sourceURL=webpack:///./src/images/pattern-background.jpg?");

/***/ }),

/***/ "./src/images/pattern-background.webp":
/*!********************************************!*\
  !*** ./src/images/pattern-background.webp ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"84fb5308da6a68c79712c821edbfcf4c.webp\";\n\n//# sourceURL=webpack:///./src/images/pattern-background.webp?");

/***/ }),

/***/ "./src/images/pila-background.jpg":
/*!****************************************!*\
  !*** ./src/images/pila-background.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"a605e15b5e3555c96e4a804d822596d5.jpg\";\n\n//# sourceURL=webpack:///./src/images/pila-background.jpg?");

/***/ }),

/***/ "./src/images/pila-background.webp":
/*!*****************************************!*\
  !*** ./src/images/pila-background.webp ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"b112cd5b049715025623cb1fd47e2668.webp\";\n\n//# sourceURL=webpack:///./src/images/pila-background.webp?");

/***/ }),

/***/ "./src/images/pila-game.png":
/*!**********************************!*\
  !*** ./src/images/pila-game.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"5b3325e4f4d10f01fb321aebfe9bd8d0.png\";\n\n//# sourceURL=webpack:///./src/images/pila-game.png?");

/***/ }),

/***/ "./src/images/pila-game.webp":
/*!***********************************!*\
  !*** ./src/images/pila-game.webp ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"5058c1adee9e546edbee2c01b415aa12.webp\";\n\n//# sourceURL=webpack:///./src/images/pila-game.webp?");

/***/ }),

/***/ "./src/images/profile.png":
/*!********************************!*\
  !*** ./src/images/profile.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"b7de4f99375ebee1a68fdb3fdba3da82.png\";\n\n//# sourceURL=webpack:///./src/images/profile.png?");

/***/ }),

/***/ "./src/images/profile.webp":
/*!*********************************!*\
  !*** ./src/images/profile.webp ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"079b42941ce6ce49250dcd2b61d9404c.webp\";\n\n//# sourceURL=webpack:///./src/images/profile.webp?");

/***/ }),

/***/ "./src/images/royal-london.png":
/*!*************************************!*\
  !*** ./src/images/royal-london.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"10f637e7fd0fbed9301df0a7d06e3165.png\";\n\n//# sourceURL=webpack:///./src/images/royal-london.png?");

/***/ }),

/***/ "./src/images/royal-london.webp":
/*!**************************************!*\
  !*** ./src/images/royal-london.webp ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"525d98760f887b7bd7b0fad160e05582.webp\";\n\n//# sourceURL=webpack:///./src/images/royal-london.webp?");

/***/ }),

/***/ "./src/images/syfy20.jpg":
/*!*******************************!*\
  !*** ./src/images/syfy20.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"67f64bf80cf6ff383989d573dbce1d81.jpg\";\n\n//# sourceURL=webpack:///./src/images/syfy20.jpg?");

/***/ }),

/***/ "./src/images/syfy20.webp":
/*!********************************!*\
  !*** ./src/images/syfy20.webp ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"5e5b65a56708c6b90c736c83c7a8edf2.webp\";\n\n//# sourceURL=webpack:///./src/images/syfy20.webp?");

/***/ }),

/***/ "./src/images/unearthed.jpg":
/*!**********************************!*\
  !*** ./src/images/unearthed.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"5805e6b4cab146bcec5c79058f20d66c.jpg\";\n\n//# sourceURL=webpack:///./src/images/unearthed.jpg?");

/***/ }),

/***/ "./src/images/unearthed.webp":
/*!***********************************!*\
  !*** ./src/images/unearthed.webp ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"89120d9d3f5af90a4be8b12130a09f2a.webp\";\n\n//# sourceURL=webpack:///./src/images/unearthed.webp?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _doT = __webpack_require__(/*! ../node_modules/dot/doT */ \"./node_modules/dot/doT.js\");\n\nvar _doT2 = _interopRequireDefault(_doT);\n\n__webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n\nvar _componentManager = __webpack_require__(/*! ./js/component-manager */ \"./src/js/component-manager.js\");\n\nvar _componentManager2 = _interopRequireDefault(_componentManager);\n\nvar _gallery = __webpack_require__(/*! ./js/gallery.component */ \"./src/js/gallery.component.js\");\n\nvar _gallery2 = _interopRequireDefault(_gallery);\n\nvar _overlay = __webpack_require__(/*! ./js/overlay.component */ \"./src/js/overlay.component.js\");\n\nvar _overlay2 = _interopRequireDefault(_overlay);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//document.addEventListener(\"DOMContentLoaded\", componentManager.init.bind(componentManager));\n\nvar galleryElement = document.body.querySelector('#portfolio-grid');\nvar overlayElement = document.body.querySelector('#overlay');\nvar gallery = new _gallery2.default(galleryElement);\nvar overlay = new _overlay2.default(overlayElement);\nvar overlayOpen = overlay.open.bind(overlay);\n\ngallery.init();\noverlay.init();\n\ngallery.onItemClick(overlayOpen);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/component-manager.js":
/*!*************************************!*\
  !*** ./src/js/component-manager.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar ComponentManager = function () {\n    function ComponentManager() {\n        _classCallCheck(this, ComponentManager);\n\n        this.componentClasses = [];\n        this.components = [];\n    }\n\n    _createClass(ComponentManager, [{\n        key: 'register',\n        value: function register(componentName, componentClass) {\n            this.componentClasses[componentName] = componentClass;\n        }\n    }, {\n        key: 'init',\n        value: function init() {\n            var _this = this;\n\n            //TODO: make this whole function more defensive\n            var componentElements = Array.prototype.slice.call(document.body.querySelectorAll('[data-component]'));\n\n            componentElements.forEach(function (element) {\n                var name = element.getAttribute('data-component');\n\n                if (name && name in _this.componentClasses) {\n                    _this.components[name] = new _this.componentClasses[name](element);\n                }\n            });\n\n            for (var key in this.components) {\n                this.components[key].init();\n            }\n        }\n    }]);\n\n    return ComponentManager;\n}();\n\nvar componentManager = new ComponentManager();\n\nexports.default = componentManager;\n\n//# sourceURL=webpack:///./src/js/component-manager.js?");

/***/ }),

/***/ "./src/js/event-dispatcher.js":
/*!************************************!*\
  !*** ./src/js/event-dispatcher.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar EventDispatcher = function () {\n    function EventDispatcher() {\n        _classCallCheck(this, EventDispatcher);\n\n        this._events = [];\n    }\n\n    _createClass(EventDispatcher, [{\n        key: 'addEvent',\n        value: function addEvent(eventName) {\n            if (typeof this._events[eventName] === 'undefined') {\n                this._events[eventName] = [];\n            }\n        }\n    }, {\n        key: 'clearEvent',\n        value: function clearEvent(eventName) {\n            this._events[eventName] = [];\n        }\n    }, {\n        key: 'registerHandler',\n        value: function registerHandler(eventName, handler) {\n            this.addEvent(eventName);\n            this._events[eventName].push(handler);\n        }\n    }, {\n        key: 'deregisterHandler',\n        value: function deregisterHandler(eventName, handler) {\n            var index = this._events[eventName].indexOf(handler);\n\n            if (index !== -1) this._events[eventName].splice(index, 1);\n        }\n    }, {\n        key: 'dispatch',\n        value: function dispatch(eventName, arg) {\n            if (typeof this._events[eventName] !== \"undefined\") {\n\n                for (var i = 0; i < this._events[eventName].length; i++) {\n                    this._events[eventName][i](arg);\n                }\n            }\n        }\n    }]);\n\n    return EventDispatcher;\n}();\n\nexports.default = EventDispatcher;\n\n//# sourceURL=webpack:///./src/js/event-dispatcher.js?");

/***/ }),

/***/ "./src/js/gallery.component.js":
/*!*************************************!*\
  !*** ./src/js/gallery.component.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _doT = __webpack_require__(/*! ../../node_modules/dot/doT */ \"./node_modules/dot/doT.js\");\n\nvar _doT2 = _interopRequireDefault(_doT);\n\nvar _componentManager = __webpack_require__(/*! ../js/component-manager */ \"./src/js/component-manager.js\");\n\nvar _componentManager2 = _interopRequireDefault(_componentManager);\n\nvar _galleryData = __webpack_require__(/*! ../json/gallery-data */ \"./src/json/gallery-data.js\");\n\nvar _galleryData2 = _interopRequireDefault(_galleryData);\n\nvar _eventDispatcher = __webpack_require__(/*! ../js/event-dispatcher */ \"./src/js/event-dispatcher.js\");\n\nvar _eventDispatcher2 = _interopRequireDefault(_eventDispatcher);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Gallery = function () {\n    function Gallery(element) {\n        _classCallCheck(this, Gallery);\n\n        this.element = element;\n        this.eventDispatcher = new _eventDispatcher2.default();\n        this.events = {\n            onItemclick: 'events-on-gallery-item-click'\n        };\n        this.data = _galleryData2.default;\n\n        this.template = _doT2.default.template('\\n        <ul class=\"c-gallery c-grid\">\\n            {{~it.tiles :value}}\\n                {{?value.type == \\'content\\'}}\\n                    <li id=\"{{=value.id}}\" class=\"c-gallery__item c-grid__item image-background\">\\n                        <div class=\"c-grid__item__inner\">\\n                            <h2>{{=value.title}}</h2>\\n                            {{? value.text }}\\n                                {{~value.text :text}}\\n                                    <p>{{=text}}</p>\\n                                {{~}}\\n                            {{?}}\\n                        </div>\\n                    </li>\\n                {{?}}\\n                {{?value.type == \\'image\\'}}\\n                    <li id=\"{{=value.id}}\" class=\"c-gallery__item c-gallery__item--image c-grid__item image-background {{=value.className}}\"></li>\\n                {{?}}\\n                {{?value.type == \\'web\\'}}\\n                    <li id=\"{{=value.id}}\" class=\"c-gallery__item c-gallery__item--web c-grid__item image-background {{=value.className}}\"></li>\\n                {{?}}\\n                {{?value.type == \\'sketchfab\\'}}\\n                <li id=\"{{=value.id}}\" class=\"c-grid__item\">\\n                    <div class=\"sketchfab-embed-wrapper\">\\n                        <iframe title=\"sketchfab model\"\\n                            src=\"{{=value.src}}\"\\n                            frameborder=\"0\" allow=\"autoplay; fullscreen; vr\" mozallowfullscreen=\"true\"\\n                            webkitallowfullscreen=\"true\"></iframe>\\n                    </div>\\n                 </li>\\n                 {{?}}\\n\\n            {{~}}\\n        </ul>\\n        ');\n    }\n\n    _createClass(Gallery, [{\n        key: 'init',\n        value: function init() {\n            this.render();\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            this.element.innerHTML = this.template(this.data);\n            this.bindEvents();\n        }\n    }, {\n        key: 'onItemClickHandler',\n        value: function onItemClickHandler(event) {\n            var id = event.target.id;\n\n            if (id) {\n                var result = this.data.tiles.filter(function (item) {\n                    return item.id === id;\n                });\n\n                if (result.length > 0) {\n                    this.eventDispatcher.dispatch(this.events.onItemclick, result[0]);\n                }\n            }\n        }\n    }, {\n        key: 'bindEvents',\n        value: function bindEvents() {\n            var that = this;\n            var elements = Array.prototype.slice.call(this.element.querySelectorAll('.c-gallery__item'));\n\n            elements.forEach(function (element) {\n                element.removeEventListener('click', that.onItemClickHandler.bind(that));\n                element.addEventListener('click', that.onItemClickHandler.bind(that));\n            });\n        }\n    }, {\n        key: 'onItemClick',\n        value: function onItemClick(handler) {\n            this.eventDispatcher.registerHandler(this.events.onItemclick, handler);\n        }\n    }]);\n\n    return Gallery;\n}();\n\n//componentManager.register(\"c-gallery\", Gallery);\n\n\nexports.default = Gallery;\n\n//# sourceURL=webpack:///./src/js/gallery.component.js?");

/***/ }),

/***/ "./src/js/overlay.component.js":
/*!*************************************!*\
  !*** ./src/js/overlay.component.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _doT = __webpack_require__(/*! ../../node_modules/dot/doT */ \"./node_modules/dot/doT.js\");\n\nvar _doT2 = _interopRequireDefault(_doT);\n\nvar _componentManager = __webpack_require__(/*! ../js/component-manager */ \"./src/js/component-manager.js\");\n\nvar _componentManager2 = _interopRequireDefault(_componentManager);\n\nvar _eventDispatcher = __webpack_require__(/*! ../js/event-dispatcher */ \"./src/js/event-dispatcher.js\");\n\nvar _eventDispatcher2 = _interopRequireDefault(_eventDispatcher);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Overlay = function () {\n    function Overlay(element) {\n        _classCallCheck(this, Overlay);\n\n        this.element = element;\n        this.state = {\n            isOpen: false,\n            title: \"Example Title\",\n            text: [\"content\", \"example\"]\n        };\n\n        this.eventDispatcher = new _eventDispatcher2.default();\n        this.events = {\n            onOpenOverlay: 'events-overlay-open',\n            onCloseOverlay: 'events-overlay-close'\n        };\n\n        this.template = _doT2.default.template('\\n            <div class=\"c-overlay {{? it.isOpen }}c-overlay--is-open{{?}}\">\\n             <div class=\"c-overlay__inner\">\\n            <button class=\"c-overlay__close-button close\"><span>Close</span></button>\\n\\n                <div class=\"c-overlay__details\">\\n                    <h2>{{=it.title}}</h2>\\n                    {{? it.text }}\\n                        {{~it.text :text}}\\n                            <p>{{=text}}</p>\\n                        {{~}}\\n                    {{?}}\\n                </div>\\n                <div class=\"c-overlay__image {{=it.className}}\">             \\n                </div>\\n             </div>\\n             </div>\\n        ');\n    }\n\n    _createClass(Overlay, [{\n        key: 'init',\n        value: function init() {\n            this.render();\n        }\n    }, {\n        key: 'bindEvents',\n        value: function bindEvents() {\n            var that = this;\n            this.closeButton = this.element.querySelector('.c-overlay__close-button');\n\n            if (this.closeButton) {\n                this.closeButton.addEventListener('click', function (event) {\n                    that.close.bind(that)();\n                });\n            }\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            this.element.innerHTML = this.template(this.state);\n            this.bindEvents();\n        }\n    }, {\n        key: 'open',\n        value: function open(data) {\n            document.body.classList.add('remove-scroll');\n            if (data) {\n                this.state = data;\n                this.state.isOpen = true;\n                this.render();\n            }\n        }\n    }, {\n        key: 'close',\n        value: function close() {\n            document.body.classList.remove('remove-scroll');\n            this.state.isOpen = false;\n            this.render();\n        }\n    }, {\n        key: 'onOpen',\n        value: function onOpen(handler) {\n            this.eventDispatcher.registerHandler(this.events.onOpenOverlay, handler);\n        }\n    }, {\n        key: 'onClose',\n        value: function onClose(handler) {\n            this.eventDispatcher.registerHandler(this.events.onCloseOverlay, handler);\n        }\n    }]);\n\n    return Overlay;\n}();\n\n//componentManager.register(\"c-overlay\", Overlay);\n\n\nexports.default = Overlay;\n\n//# sourceURL=webpack:///./src/js/overlay.component.js?");

/***/ }),

/***/ "./src/json/gallery-data.js":
/*!**********************************!*\
  !*** ./src/json/gallery-data.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = {\n    tiles: [{ id: 'profile', type: 'image', className: 'profile profile-background' }, {\n        id: 'unearthed',\n        title: 'BBC Unearthed',\n        type: 'web',\n        className: 'unearthed-background'\n    }, { id: 'funeral', title: 'SunLife Funeral Mapper', type: 'web', className: 'funeral-background' }, { id: 'efl', title: 'EFL Match Centre', type: 'web', className: 'efl-background' }, { id: 'green-city', title: 'BBC Green City', type: 'web', className: 'green-city-background' }, { id: 'royal-london', title: 'Royal London', type: 'web', className: 'royal-london-background' }, {\n        id: 'intro',\n        type: 'content',\n        className: '',\n        title: \"Joe McDowall\",\n        text: [\"<a href=\\\"mailto:joe.mcdowall@gmail.com\\\">joe.mcdowall@gmail.com</a>\", \"A pragmatic web developer, passionate generalist, JavaScript specialist and a secret creative with over 9 years experience working for companies around Edinburgh\", \"Please feel free to explore some of the work I have been involved in.\"]\n    }, { id: 'garden-sketchfab', title: 'In the garden', type: 'sketchfab', src: 'https://sketchfab.com/models/75431eb321164f9689f6f98ef317f34f/embed?autospin=0.2&amp;preload=1&amp;transparent=0' }, { id: 'syfy', title: 'Syfy Channel 20th Anniversary Quiz game', type: 'web', className: 'syfy-background' }, {\n        id: 'ghost',\n        title: 'Ghost train builder',\n        type: 'web',\n        className: 'ghost-background',\n        text: ['Ghost train builder was a side project we worked on for a few months leading up to Halloween. \\n                At the time we were keen to explore the Aframe framework and came up with this idea of a user being able to customise their own Ghost train ride.\\n                My responsibilities on the project included building 3D models for the rooms, rides and monsters but also a lot of the JavaScript to make the cart follow its course.', 'A few years prior to this project I had worked on another side project to allow for the setup of simple scenes in ThreeJS through AngularJS directives. \\n                So it was refreshing to use a framework that was developed along the same ideals. Because models could be defined by HTML, this allowed anyone on the team regardless of 3D experience to manipulated the levels.', 'The core idea behind this was to uv unwrap all the building blocks onto a single texture and then swap these textures out to skin each room dynamically. The user had limited choices on lighting, theme and the monsters that would pop up.', 'Relevant technologies: <br/> <ul><li>Vue.js</li><li>Aframe</li><li>Three.js</li></ul>', '<a href=\"http://ghosttrainbuilder.com/\">http://ghosttrainbuilder.com/</a>']\n    }, { id: 'bird', title: 'Steller\\'s Jay', type: 'sketchfab', src: 'https://sketchfab.com/models/9cfe5bd6f132405fbf48bd004fa688bd/embed?autospin=0.2&amp;preload=1&amp;transparent=0' }, { id: 'lexus', title: 'Lexus', type: 'web', className: 'lexus-background' }, { id: 'advent', title: 'Team Advent Calendar', type: 'web', className: 'advent-background' }, { id: 'plant', title: 'Potted plant', type: 'sketchfab', src: 'https://sketchfab.com/models/e92dd6ae7eb242018642bb40a91e744e/embed?autospin=0.2&amp;autostart=0&amp;transparent=0' }, { id: 'island', title: 'Procedural Islands', type: 'web', className: 'island-background' }, { id: 'egg-hunt', title: 'Project Egg Hunt', type: 'web', className: 'hunt-background' }, { id: 'pila', title: 'Pila', type: 'sketchfab', src: 'https://sketchfab.com/models/ace7d3e35fea473599e10d2c62e7ab56/embed?autospin=0.2&amp;preload=1&amp;transparent=0' }, { id: 'garden', title: 'In the garden', type: 'web', className: 'garden-background' }, { id: 'landscape', title: 'Low Poly Environment', type: 'web', className: 'pila-background' }, { id: 'weasel', title: 'Weasel character art', type: 'sketchfab', src: 'https://sketchfab.com/models/a995319e79e84c6a8df1ed8e5d3a58b0/embed?autospin=0.2&amp;preload=1&amp;transparent=0' }, { id: 'rice', title: 'Rice ball illustration', type: 'web', className: 'rice-background' }, { id: 'pila-game', title: '3D person character controller prototype', type: 'web', className: 'pila-game-background' }]\n};\n\n//# sourceURL=webpack:///./src/json/gallery-data.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/scss/main.scss?");

/***/ })

/******/ });
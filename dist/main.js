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

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../images/pila-background.jpg */ "./src/images/pila-background.jpg"));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(/*! ../images/pila-background.webp */ "./src/images/pila-background.webp"));
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(/*! ../images/garden-background.jpg */ "./src/images/garden-background.jpg"));
var ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(/*! ../images/garden-background.webp */ "./src/images/garden-background.webp"));
var ___CSS_LOADER_URL___4___ = urlEscape(__webpack_require__(/*! ../images/pattern-background.jpg */ "./src/images/pattern-background.jpg"));
var ___CSS_LOADER_URL___5___ = urlEscape(__webpack_require__(/*! ../images/pattern-background.webp */ "./src/images/pattern-background.webp"));
var ___CSS_LOADER_URL___6___ = urlEscape(__webpack_require__(/*! ../images/unearthed.jpg */ "./src/images/unearthed.jpg"));
var ___CSS_LOADER_URL___7___ = urlEscape(__webpack_require__(/*! ../images/unearthed.webp */ "./src/images/unearthed.webp"));
var ___CSS_LOADER_URL___8___ = urlEscape(__webpack_require__(/*! ../images/funeral-mapper.png */ "./src/images/funeral-mapper.png"));
var ___CSS_LOADER_URL___9___ = urlEscape(__webpack_require__(/*! ../images/funeral-mapper.webp */ "./src/images/funeral-mapper.webp"));
var ___CSS_LOADER_URL___10___ = urlEscape(__webpack_require__(/*! ../images/efl-match-center.jpg */ "./src/images/efl-match-center.jpg"));
var ___CSS_LOADER_URL___11___ = urlEscape(__webpack_require__(/*! ../images/efl-match-center.webp */ "./src/images/efl-match-center.webp"));
var ___CSS_LOADER_URL___12___ = urlEscape(__webpack_require__(/*! ../images/royal-london.png */ "./src/images/royal-london.png"));
var ___CSS_LOADER_URL___13___ = urlEscape(__webpack_require__(/*! ../images/royal-london.webp */ "./src/images/royal-london.webp"));
var ___CSS_LOADER_URL___14___ = urlEscape(__webpack_require__(/*! ../images/syfy20.jpg */ "./src/images/syfy20.jpg"));
var ___CSS_LOADER_URL___15___ = urlEscape(__webpack_require__(/*! ../images/syfy20.webp */ "./src/images/syfy20.webp"));
var ___CSS_LOADER_URL___16___ = urlEscape(__webpack_require__(/*! ../images/ghost-background.jpg */ "./src/images/ghost-background.jpg"));
var ___CSS_LOADER_URL___17___ = urlEscape(__webpack_require__(/*! ../images/ghost-background.webp */ "./src/images/ghost-background.webp"));
var ___CSS_LOADER_URL___18___ = urlEscape(__webpack_require__(/*! ../images/lexus.png */ "./src/images/lexus.png"));
var ___CSS_LOADER_URL___19___ = urlEscape(__webpack_require__(/*! ../images/lexus.webp */ "./src/images/lexus.webp"));
var ___CSS_LOADER_URL___20___ = urlEscape(__webpack_require__(/*! ../images/advent-calendar.png */ "./src/images/advent-calendar.png"));
var ___CSS_LOADER_URL___21___ = urlEscape(__webpack_require__(/*! ../images/advent-calendar.webp */ "./src/images/advent-calendar.webp"));
var ___CSS_LOADER_URL___22___ = urlEscape(__webpack_require__(/*! ../images/profile.png */ "./src/images/profile.png"));
var ___CSS_LOADER_URL___23___ = urlEscape(__webpack_require__(/*! ../images/profile.webp */ "./src/images/profile.webp"));
var ___CSS_LOADER_URL___24___ = urlEscape(__webpack_require__(/*! ../images/pila-game.png */ "./src/images/pila-game.png"));
var ___CSS_LOADER_URL___25___ = urlEscape(__webpack_require__(/*! ../images/pila-game.webp */ "./src/images/pila-game.webp"));
var ___CSS_LOADER_URL___26___ = urlEscape(__webpack_require__(/*! ../images/joe-mcdowall-itadakimasu.jpg */ "./src/images/joe-mcdowall-itadakimasu.jpg"));
var ___CSS_LOADER_URL___27___ = urlEscape(__webpack_require__(/*! ../images/joe-mcdowall-itadakimasu.webp */ "./src/images/joe-mcdowall-itadakimasu.webp"));
var ___CSS_LOADER_URL___28___ = urlEscape(__webpack_require__(/*! ../images/islands.png */ "./src/images/islands.png"));
var ___CSS_LOADER_URL___29___ = urlEscape(__webpack_require__(/*! ../images/islands.webp */ "./src/images/islands.webp"));
var ___CSS_LOADER_URL___30___ = urlEscape(__webpack_require__(/*! ../images/hunt.png */ "./src/images/hunt.png"));
var ___CSS_LOADER_URL___31___ = urlEscape(__webpack_require__(/*! ../images/hunt.webp */ "./src/images/hunt.webp"));
var ___CSS_LOADER_URL___32___ = urlEscape(__webpack_require__(/*! ../images/green-city.png */ "./src/images/green-city.png"));
var ___CSS_LOADER_URL___33___ = urlEscape(__webpack_require__(/*! ../images/green-city.webp */ "./src/images/green-city.webp"));
var ___CSS_LOADER_URL___34___ = urlEscape(__webpack_require__(/*! ../images/heathrow.png */ "./src/images/heathrow.png"));
var ___CSS_LOADER_URL___35___ = urlEscape(__webpack_require__(/*! ../images/heathrow.webp */ "./src/images/heathrow.webp"));
var ___CSS_LOADER_URL___36___ = urlEscape(__webpack_require__(/*! ../images/lions.png */ "./src/images/lions.png"));
var ___CSS_LOADER_URL___37___ = urlEscape(__webpack_require__(/*! ../images/lions.webp */ "./src/images/lions.webp"));
var ___CSS_LOADER_URL___38___ = urlEscape(__webpack_require__(/*! ../images/bermuda-splash.png */ "./src/images/bermuda-splash.png"));
var ___CSS_LOADER_URL___39___ = urlEscape(__webpack_require__(/*! ../images/bermuda-splash.webp */ "./src/images/bermuda-splash.webp"));
var ___CSS_LOADER_URL___40___ = urlEscape(__webpack_require__(/*! ../images/scottish-widows.png */ "./src/images/scottish-widows.png"));
var ___CSS_LOADER_URL___41___ = urlEscape(__webpack_require__(/*! ../images/scottish-widows.webp */ "./src/images/scottish-widows.webp"));
var ___CSS_LOADER_URL___42___ = urlEscape(__webpack_require__(/*! ../images/ssiesta.png */ "./src/images/ssiesta.png"));
var ___CSS_LOADER_URL___43___ = urlEscape(__webpack_require__(/*! ../images/ssiesta.webp */ "./src/images/ssiesta.webp"));
var ___CSS_LOADER_URL___44___ = urlEscape(__webpack_require__(/*! ../images/sailgp.png */ "./src/images/sailgp.png"));
var ___CSS_LOADER_URL___45___ = urlEscape(__webpack_require__(/*! ../images/sailgp.webp */ "./src/images/sailgp.webp"));
var ___CSS_LOADER_URL___46___ = urlEscape(__webpack_require__(/*! ../images/rl-3d.png */ "./src/images/rl-3d.png"));
var ___CSS_LOADER_URL___47___ = urlEscape(__webpack_require__(/*! ../images/rl-3d.webp */ "./src/images/rl-3d.webp"));

// Module
exports.push([module.i, "/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\n.c-grid {\n  display: grid;\n  grid-gap: 1px;\n  grid-template-columns: 1fr;\n  grid-template-rows: repeat(20, 100vmin);\n  height: 100%;\n  width: 100%; }\n  @media (min-width: 768px) {\n    .c-grid {\n      grid-template-columns: 1fr 1fr;\n      grid-template-rows: repeat(20, 33.3333vmin); } }\n  @media (min-width: 992px) {\n    .c-grid {\n      grid-template-columns: 1fr 1fr 1fr;\n      grid-template-rows: repeat(20, 33.3333vmin); } }\n  @media (min-width: 1280px) {\n    .c-grid {\n      grid-template-columns: 1fr 1fr 1fr 1fr;\n      grid-template-rows: repeat(20, 33.3333vmin); } }\n  .c-grid__item {\n    background: #292929;\n    box-sizing: border-box;\n    height: 100%;\n    width: 100%;\n    grid-auto-columns: minmax(calc(100% / 1), auto); }\n    @media (min-width: 768px) {\n      .c-grid__item {\n        grid-auto-rows: minmax(calc(100% / 3), auto);\n        grid-auto-columns: minmax(calc(100% / 4), auto); }\n        .c-grid__item--double {\n          background: #2e2e2e;\n          grid-column: 1 / 3;\n          grid-row: 1 / 3; } }\n  .c-grid__item__inner {\n    padding: 20px; }\n  .c-grid iframe {\n    height: 100%;\n    width: 100%;\n    position: relative !important; }\n\n.c-gallery__item--web {\n  cursor: pointer;\n  transition: transform 0.5s;\n  opacity: 0.9; }\n  .c-gallery__item--web:hover {\n    transform: scale(0.99);\n    opacity: 1; }\n\n.c-overlay {\n  display: none; }\n  .c-overlay--is-open {\n    display: block;\n    position: fixed;\n    background: rgba(0, 0, 0, 0.75);\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    padding: 80px 5%;\n    z-index: 1000; }\n    .c-overlay--is-open .c-overlay__inner {\n      background: #000;\n      box-sizing: border-box;\n      display: flex;\n      height: 100%;\n      padding: 40px;\n      position: relative;\n      justify-content: space-between; }\n    .c-overlay--is-open .c-overlay__details {\n      width: 40%;\n      padding-right: 40px; }\n    .c-overlay--is-open .c-overlay__image {\n      background-size: contain !important;\n      background-repeat: no-repeat !important;\n      width: 60%; }\n    .c-overlay--is-open h2 {\n      font-size: 36px; }\n    .c-overlay--is-open .c-overlay__close-button {\n      margin: 20px;\n      position: absolute;\n      top: 0;\n      right: 0; }\n      .c-overlay--is-open .c-overlay__close-button span {\n        position: absolute;\n        left: -10000px;\n        visibility: hidden; }\n\n/* Close button */\n.close {\n  background: #000;\n  position: absolute;\n  right: 32px;\n  top: 32px;\n  width: 32px;\n  height: 32px;\n  opacity: 0.3;\n  cursor: pointer;\n  border: none;\n  color: white; }\n\n.close:hover {\n  opacity: 1; }\n\n.close:before, .close:after {\n  position: absolute;\n  left: 15px;\n  content: ' ';\n  height: 33px;\n  width: 2px;\n  background-color: #fff;\n  top: 0; }\n\n.close:before {\n  transform: rotate(45deg); }\n\n.close:after {\n  transform: rotate(-45deg); }\n\n/* Close button -- end */\nhtml,\nbody,\n#portfolio-grid {\n  background: #292929;\n  height: 100%;\n  width: 100%; }\n\nheader {\n  background: #66a574;\n  border-bottom: 20px solid #292929;\n  height: 200px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 20px; }\n  @media (min-width: 768px) {\n    header {\n      border-bottom: 80px solid #292929;\n      height: 400px;\n      padding: 0 40px; } }\n  header h1 {\n    font-size: 32px;\n    line-height: 32px;\n    margin: 0 10px; }\n    @media (min-width: 768px) {\n      header h1 {\n        font-size: 128px;\n        line-height: 128px;\n        margin: 0 40px; } }\n  header div.image-background {\n    width: 128px;\n    height: 128px;\n    border-radius: 128px;\n    overflow: hidden; }\n    @media (min-width: 768px) {\n      header div.image-background {\n        width: 320px;\n        height: 320px;\n        border-radius: 320px; } }\n\n.remove-scroll {\n  overflow: hidden; }\n\nbody {\n  color: #fff;\n  font-family: \"Open Sans Condensed\", Arial, sans-serif;\n  font-size: 16px;\n  letter-spacing: 1px;\n  line-height: 20px;\n  height: 100%;\n  width: 100%; }\n  @media (min-width: 768px) {\n    body {\n      font-size: 24px;\n      line-height: 24px; } }\n\nh2 {\n  font-size: 24px;\n  line-height: 24px;\n  margin: 5px 0 10px; }\n  @media (min-width: 768px) {\n    h2 {\n      margin: 10px 0 20px; } }\n\np {\n  margin: 20px 0; }\n\n.page-title {\n  font-family: \"Anton\", sans-serif;\n  font-size: 28vmin;\n  font-weight: bold;\n  padding: 80px 40px;\n  position: relative;\n  max-height: 100%;\n  text-align: right;\n  text-transform: uppercase;\n  color: #fff; }\n\n.profile {\n  -webkit-filter: grayscale(100%);\n  /* Safari 6.0 - 9.0 */\n  filter: grayscale(100%);\n  position: relative;\n  z-index: 0; }\n\n.profile::before {\n  background: #292929;\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  z-index: 0; }\n\n.profile::after {\n  background: #292929;\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  z-index: 10; }\n\n.sketchfab-embed-wrapper {\n  height: 100%;\n  width: 100%; }\n\n.image-background {\n  position: relative; }\n\n.image-background a {\n  background-color: rgba(0, 0, 0, 0.85);\n  color: #fff;\n  display: block;\n  position: absolute;\n  padding: 10px;\n  bottom: 0;\n  right: 0; }\n\n.no-webp .pila-background {\n  background: url(" + ___CSS_LOADER_URL___0___ + ");\n  background-size: cover;\n  background-position: center center; }\n\n.webp .pila-background {\n  background: url(" + ___CSS_LOADER_URL___1___ + ");\n  background-size: cover;\n  background-position: center center; }\n\n.no-webp .garden-background {\n  background: url(" + ___CSS_LOADER_URL___2___ + ");\n  background-size: cover;\n  background-position: center top; }\n\n.webp .garden-background {\n  background: url(" + ___CSS_LOADER_URL___3___ + ");\n  background-size: cover;\n  background-position: center top; }\n\n.no-webp .pattern-background {\n  background: url(" + ___CSS_LOADER_URL___4___ + ");\n  background-size: cover;\n  background-position: center top; }\n\n.webp .pattern-background {\n  background: url(" + ___CSS_LOADER_URL___5___ + ");\n  background-size: cover;\n  background-position: center top; }\n\n.no-webp .unearthed-background {\n  background: url(" + ___CSS_LOADER_URL___6___ + ");\n  background-size: cover;\n  background-position: center top; }\n\n.webp .unearthed-background {\n  background: url(" + ___CSS_LOADER_URL___7___ + ");\n  background-size: cover;\n  background-position: center top; }\n\n.no-webp .funeral-background {\n  background: url(" + ___CSS_LOADER_URL___8___ + ");\n  background-size: cover;\n  background-position: center top; }\n\n.webp .funeral-background {\n  background: url(" + ___CSS_LOADER_URL___9___ + ");\n  background-size: cover;\n  background-position: center top; }\n\n.no-webp .efl-background {\n  background: url(" + ___CSS_LOADER_URL___10___ + ");\n  background-size: cover;\n  background-position: center top; }\n\n.webp .efl-background {\n  background: url(" + ___CSS_LOADER_URL___11___ + ");\n  background-size: cover;\n  background-position: center top; }\n\n.no-webp .royal-london-background {\n  background: url(" + ___CSS_LOADER_URL___12___ + ");\n  background-size: cover;\n  background-position: center top; }\n\n.webp .royal-london-background {\n  background: url(" + ___CSS_LOADER_URL___13___ + ");\n  background-size: cover;\n  background-position: center top; }\n\n.no-webp .syfy-background {\n  background: url(" + ___CSS_LOADER_URL___14___ + ");\n  /*source: http://picnicstudio.tv/syfy*/\n  background-size: cover;\n  background-position: center top; }\n\n.webp .syfy-background {\n  background: url(" + ___CSS_LOADER_URL___15___ + ");\n  /*source: http://picnicstudio.tv/syfy*/\n  background-size: cover;\n  background-position: center top; }\n\n.no-webp .ghost-background {\n  background: url(" + ___CSS_LOADER_URL___16___ + ");\n  background-size: cover;\n  background-position: center top; }\n\n.webp .ghost-background {\n  background: url(" + ___CSS_LOADER_URL___17___ + ");\n  background-size: cover;\n  background-position: center top; }\n\n.no-webp .lexus-background {\n  background: url(" + ___CSS_LOADER_URL___18___ + ");\n  background-size: cover;\n  background-position: center top; }\n\n.webp .lexus-background {\n  background: url(" + ___CSS_LOADER_URL___19___ + ");\n  background-size: cover;\n  background-position: center top; }\n\n.no-webp .advent-background {\n  background: url(" + ___CSS_LOADER_URL___20___ + ");\n  background-size: cover;\n  background-position: center top; }\n\n.webp .advent-background {\n  background: url(" + ___CSS_LOADER_URL___21___ + ");\n  background-size: cover;\n  background-position: center top; }\n\n.no-webp .profile-background::after {\n  background: url(" + ___CSS_LOADER_URL___22___ + ");\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat; }\n\n.webp .profile-background::after {\n  background: url(" + ___CSS_LOADER_URL___23___ + ");\n  background-size: contain;\n  background-position: center center;\n  background-repeat: no-repeat; }\n\n.no-webp .pila-game-background {\n  background: url(" + ___CSS_LOADER_URL___24___ + ");\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat; }\n\n.webp .pila-game-background {\n  background: url(" + ___CSS_LOADER_URL___25___ + ");\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat; }\n\n.no-webp .rice-background {\n  background: url(" + ___CSS_LOADER_URL___26___ + ");\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat; }\n\n.webp .rice-background {\n  background: url(" + ___CSS_LOADER_URL___27___ + ");\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat; }\n\n.no-webp .island-background {\n  background: url(" + ___CSS_LOADER_URL___28___ + ");\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat; }\n\n.webp .island-background {\n  background: url(" + ___CSS_LOADER_URL___29___ + ");\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat; }\n\n.no-webp .hunt-background {\n  background: url(" + ___CSS_LOADER_URL___30___ + ");\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat; }\n\n.webp .hunt-background {\n  background: url(" + ___CSS_LOADER_URL___31___ + ");\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat; }\n\n.no-webp .green-city-background {\n  background: url(" + ___CSS_LOADER_URL___32___ + ");\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat; }\n\n.webp .green-city-background {\n  background: url(" + ___CSS_LOADER_URL___33___ + ");\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat; }\n\n.no-webp .heathrow-background {\n  background: url(" + ___CSS_LOADER_URL___34___ + ");\n  background-size: cover;\n  background-position: center top;\n  background-repeat: no-repeat; }\n\n.webp .heathrow-background {\n  background: url(" + ___CSS_LOADER_URL___35___ + ");\n  background-size: cover;\n  background-position: center top;\n  background-repeat: no-repeat; }\n\n.no-webp .lions-background {\n  background: url(" + ___CSS_LOADER_URL___36___ + ");\n  background-size: cover;\n  background-position: center top;\n  background-repeat: no-repeat; }\n\n.webp .lions-background {\n  background: url(" + ___CSS_LOADER_URL___37___ + ");\n  background-size: cover;\n  background-position: center top;\n  background-repeat: no-repeat; }\n\n.no-webp .bermuda-splash-background {\n  background: url(" + ___CSS_LOADER_URL___38___ + ");\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat; }\n\n.webp .bermuda-splash-background {\n  background: url(" + ___CSS_LOADER_URL___39___ + ");\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat; }\n\n.no-webp .scottish-widows-background {\n  background: url(" + ___CSS_LOADER_URL___40___ + ");\n  background-size: cover;\n  background-position: center top;\n  background-repeat: no-repeat; }\n\n.webp .scottish-widows-background {\n  background: url(" + ___CSS_LOADER_URL___41___ + ");\n  background-size: cover;\n  background-position: center top;\n  background-repeat: no-repeat; }\n\n.no-webp .ssiesta-background {\n  background: url(" + ___CSS_LOADER_URL___42___ + ");\n  background-size: cover;\n  background-position: center top;\n  background-repeat: no-repeat; }\n\n.webp .ssiesta-background {\n  background: url(" + ___CSS_LOADER_URL___43___ + ");\n  background-size: cover;\n  background-position: center top;\n  background-repeat: no-repeat; }\n\n.no-webp .sailgp-background {\n  background: url(" + ___CSS_LOADER_URL___44___ + ");\n  background-size: cover;\n  background-position: center top;\n  background-repeat: no-repeat; }\n\n.webp .sailgp-background {\n  background: url(" + ___CSS_LOADER_URL___45___ + ");\n  background-size: cover;\n  background-position: center top;\n  background-repeat: no-repeat; }\n\n.no-webp .rl-3d-background {\n  background: url(" + ___CSS_LOADER_URL___46___ + ");\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat; }\n\n.webp .rl-3d-background {\n  background: url(" + ___CSS_LOADER_URL___47___ + ");\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/url-escape.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/url-escape.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),

/***/ "./node_modules/dot/doT.js":
/*!*********************************!*\
  !*** ./node_modules/dot/doT.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;// doT.js
// 2011-2014, Laura Doktorova, https://github.com/olado/doT
// Licensed under the MIT license.

(function () {
	"use strict";

	var doT = {
		name: "doT",
		version: "1.1.1",
		templateSettings: {
			evaluate:    /\{\{([\s\S]+?(\}?)+)\}\}/g,
			interpolate: /\{\{=([\s\S]+?)\}\}/g,
			encode:      /\{\{!([\s\S]+?)\}\}/g,
			use:         /\{\{#([\s\S]+?)\}\}/g,
			useParams:   /(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,
			define:      /\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,
			defineParams:/^\s*([\w$]+):([\s\S]+)/,
			conditional: /\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,
			iterate:     /\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,
			varname:	"it",
			strip:		true,
			append:		true,
			selfcontained: false,
			doNotSkipEncoded: false
		},
		template: undefined, //fn, compile template
		compile:  undefined, //fn, for express
		log: true
	}, _globals;

	doT.encodeHTMLSource = function(doNotSkipEncoded) {
		var encodeHTMLRules = { "&": "&#38;", "<": "&#60;", ">": "&#62;", '"': "&#34;", "'": "&#39;", "/": "&#47;" },
			matchHTML = doNotSkipEncoded ? /[&<>"'\/]/g : /&(?!#?\w+;)|<|>|"|'|\//g;
		return function(code) {
			return code ? code.toString().replace(matchHTML, function(m) {return encodeHTMLRules[m] || m;}) : "";
		};
	};

	_globals = (function(){ return this || (0,eval)("this"); }());

	/* istanbul ignore else */
	if ( true && module.exports) {
		module.exports = doT;
	} else if (true) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return doT;}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

	var startend = {
		append: { start: "'+(",      end: ")+'",      startencode: "'+encodeHTML(" },
		split:  { start: "';out+=(", end: ");out+='", startencode: "';out+=encodeHTML(" }
	}, skip = /$^/;

	function resolveDefs(c, block, def) {
		return ((typeof block === "string") ? block : block.toString())
		.replace(c.define || skip, function(m, code, assign, value) {
			if (code.indexOf("def.") === 0) {
				code = code.substring(4);
			}
			if (!(code in def)) {
				if (assign === ":") {
					if (c.defineParams) value.replace(c.defineParams, function(m, param, v) {
						def[code] = {arg: param, text: v};
					});
					if (!(code in def)) def[code]= value;
				} else {
					new Function("def", "def['"+code+"']=" + value)(def);
				}
			}
			return "";
		})
		.replace(c.use || skip, function(m, code) {
			if (c.useParams) code = code.replace(c.useParams, function(m, s, d, param) {
				if (def[d] && def[d].arg && param) {
					var rw = (d+":"+param).replace(/'|\\/g, "_");
					def.__exp = def.__exp || {};
					def.__exp[rw] = def[d].text.replace(new RegExp("(^|[^\\w$])" + def[d].arg + "([^\\w$])", "g"), "$1" + param + "$2");
					return s + "def.__exp['"+rw+"']";
				}
			});
			var v = new Function("def", "return " + code)(def);
			return v ? resolveDefs(c, v, def) : v;
		});
	}

	function unescape(code) {
		return code.replace(/\\('|\\)/g, "$1").replace(/[\r\t\n]/g, " ");
	}

	doT.template = function(tmpl, c, def) {
		c = c || doT.templateSettings;
		var cse = c.append ? startend.append : startend.split, needhtmlencode, sid = 0, indv,
			str  = (c.use || c.define) ? resolveDefs(c, tmpl, def || {}) : tmpl;

		str = ("var out='" + (c.strip ? str.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g," ")
					.replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g,""): str)
			.replace(/'|\\/g, "\\$&")
			.replace(c.interpolate || skip, function(m, code) {
				return cse.start + unescape(code) + cse.end;
			})
			.replace(c.encode || skip, function(m, code) {
				needhtmlencode = true;
				return cse.startencode + unescape(code) + cse.end;
			})
			.replace(c.conditional || skip, function(m, elsecase, code) {
				return elsecase ?
					(code ? "';}else if(" + unescape(code) + "){out+='" : "';}else{out+='") :
					(code ? "';if(" + unescape(code) + "){out+='" : "';}out+='");
			})
			.replace(c.iterate || skip, function(m, iterate, vname, iname) {
				if (!iterate) return "';} } out+='";
				sid+=1; indv=iname || "i"+sid; iterate=unescape(iterate);
				return "';var arr"+sid+"="+iterate+";if(arr"+sid+"){var "+vname+","+indv+"=-1,l"+sid+"=arr"+sid+".length-1;while("+indv+"<l"+sid+"){"
					+vname+"=arr"+sid+"["+indv+"+=1];out+='";
			})
			.replace(c.evaluate || skip, function(m, code) {
				return "';" + unescape(code) + "out+='";
			})
			+ "';return out;")
			.replace(/\n/g, "\\n").replace(/\t/g, '\\t').replace(/\r/g, "\\r")
			.replace(/(\s|;|\}|^|\{)out\+='';/g, '$1').replace(/\+''/g, "");
			//.replace(/(\s|;|\}|^|\{)out\+=''\+/g,'$1out+=');

		if (needhtmlencode) {
			if (!c.selfcontained && _globals && !_globals._encodeHTML) _globals._encodeHTML = doT.encodeHTMLSource(c.doNotSkipEncoded);
			str = "var encodeHTML = typeof _encodeHTML !== 'undefined' ? _encodeHTML : ("
				+ doT.encodeHTMLSource.toString() + "(" + (c.doNotSkipEncoded || '') + "));"
				+ str;
		}
		try {
			return new Function(c.varname, str);
		} catch (e) {
			/* istanbul ignore else */
			if (typeof console !== "undefined") console.log("Could not create a template function: " + str);
			throw e;
		}
	};

	doT.compile = function(tmpl, def) {
		return doT.template(tmpl, null, def);
	};
}());


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/images/advent-calendar.png":
/*!****************************************!*\
  !*** ./src/images/advent-calendar.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "eeeb4c1283269e680d79a378db71012e.png";

/***/ }),

/***/ "./src/images/advent-calendar.webp":
/*!*****************************************!*\
  !*** ./src/images/advent-calendar.webp ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fa351678566894b1949f6e0debae0bda.webp";

/***/ }),

/***/ "./src/images/bermuda-splash.png":
/*!***************************************!*\
  !*** ./src/images/bermuda-splash.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a992f010c588eb2e5442165555cd3ee1.png";

/***/ }),

/***/ "./src/images/bermuda-splash.webp":
/*!****************************************!*\
  !*** ./src/images/bermuda-splash.webp ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "693aee7c058844e1a9ad5028a1fdd384.webp";

/***/ }),

/***/ "./src/images/efl-match-center.jpg":
/*!*****************************************!*\
  !*** ./src/images/efl-match-center.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6edaeff8476df52e78ff3483acead2f4.jpg";

/***/ }),

/***/ "./src/images/efl-match-center.webp":
/*!******************************************!*\
  !*** ./src/images/efl-match-center.webp ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "45fb533460a6468798d7c9abbb4f4283.webp";

/***/ }),

/***/ "./src/images/funeral-mapper.png":
/*!***************************************!*\
  !*** ./src/images/funeral-mapper.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dc1be6425b742b6da170b30c9a364ff3.png";

/***/ }),

/***/ "./src/images/funeral-mapper.webp":
/*!****************************************!*\
  !*** ./src/images/funeral-mapper.webp ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7475b2f6a740c46fbe15b8c8a36a311c.webp";

/***/ }),

/***/ "./src/images/garden-background.jpg":
/*!******************************************!*\
  !*** ./src/images/garden-background.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f2598edb285b33bbf32572389dd763bf.jpg";

/***/ }),

/***/ "./src/images/garden-background.webp":
/*!*******************************************!*\
  !*** ./src/images/garden-background.webp ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b2c546429a1b004c37baff94032ff350.webp";

/***/ }),

/***/ "./src/images/ghost-background.jpg":
/*!*****************************************!*\
  !*** ./src/images/ghost-background.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c5da999d283687c38750c7cbc720b893.jpg";

/***/ }),

/***/ "./src/images/ghost-background.webp":
/*!******************************************!*\
  !*** ./src/images/ghost-background.webp ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b2a6610a8dc048ddfcc8ce6c4177b7db.webp";

/***/ }),

/***/ "./src/images/green-city.png":
/*!***********************************!*\
  !*** ./src/images/green-city.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "443706aeb340d000e5218b14ce8f36da.png";

/***/ }),

/***/ "./src/images/green-city.webp":
/*!************************************!*\
  !*** ./src/images/green-city.webp ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "44a2940c2b58492fd4ab13139decf6c3.webp";

/***/ }),

/***/ "./src/images/heathrow.png":
/*!*********************************!*\
  !*** ./src/images/heathrow.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1d4b228d118d196c11cf9cd768456f46.png";

/***/ }),

/***/ "./src/images/heathrow.webp":
/*!**********************************!*\
  !*** ./src/images/heathrow.webp ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ce0dd6418a2e68b0b37a4e42e97b9a5e.webp";

/***/ }),

/***/ "./src/images/hunt.png":
/*!*****************************!*\
  !*** ./src/images/hunt.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ad0f691deb10ef051f782c53a6cab27b.png";

/***/ }),

/***/ "./src/images/hunt.webp":
/*!******************************!*\
  !*** ./src/images/hunt.webp ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d54fd27afaec9fbe7a02713a194b9871.webp";

/***/ }),

/***/ "./src/images/islands.png":
/*!********************************!*\
  !*** ./src/images/islands.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "270a6c66c874efef6e3307e42013cfec.png";

/***/ }),

/***/ "./src/images/islands.webp":
/*!*********************************!*\
  !*** ./src/images/islands.webp ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c6fcecb2bcefd47e621ca3b35fd74ec0.webp";

/***/ }),

/***/ "./src/images/joe-mcdowall-itadakimasu.jpg":
/*!*************************************************!*\
  !*** ./src/images/joe-mcdowall-itadakimasu.jpg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ff635713c8dde1e23e39c017870be2ff.jpg";

/***/ }),

/***/ "./src/images/joe-mcdowall-itadakimasu.webp":
/*!**************************************************!*\
  !*** ./src/images/joe-mcdowall-itadakimasu.webp ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7cb3d8d470c048219ec52078c9979647.webp";

/***/ }),

/***/ "./src/images/lexus.png":
/*!******************************!*\
  !*** ./src/images/lexus.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c3a2554dc7a8f086f08b84f4929bff20.png";

/***/ }),

/***/ "./src/images/lexus.webp":
/*!*******************************!*\
  !*** ./src/images/lexus.webp ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7570c4aa3dabc89b672fd9d426c3b91a.webp";

/***/ }),

/***/ "./src/images/lions.png":
/*!******************************!*\
  !*** ./src/images/lions.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f27feb6f26d907f5818bf98f0f165479.png";

/***/ }),

/***/ "./src/images/lions.webp":
/*!*******************************!*\
  !*** ./src/images/lions.webp ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bd2cfba3e8027bbd3cb81bb1e117c28c.webp";

/***/ }),

/***/ "./src/images/pattern-background.jpg":
/*!*******************************************!*\
  !*** ./src/images/pattern-background.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "18ecdb40b46be3ed09ec4e88c23acdf0.jpg";

/***/ }),

/***/ "./src/images/pattern-background.webp":
/*!********************************************!*\
  !*** ./src/images/pattern-background.webp ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "84fb5308da6a68c79712c821edbfcf4c.webp";

/***/ }),

/***/ "./src/images/pila-background.jpg":
/*!****************************************!*\
  !*** ./src/images/pila-background.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a605e15b5e3555c96e4a804d822596d5.jpg";

/***/ }),

/***/ "./src/images/pila-background.webp":
/*!*****************************************!*\
  !*** ./src/images/pila-background.webp ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b112cd5b049715025623cb1fd47e2668.webp";

/***/ }),

/***/ "./src/images/pila-game.png":
/*!**********************************!*\
  !*** ./src/images/pila-game.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5b3325e4f4d10f01fb321aebfe9bd8d0.png";

/***/ }),

/***/ "./src/images/pila-game.webp":
/*!***********************************!*\
  !*** ./src/images/pila-game.webp ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5058c1adee9e546edbee2c01b415aa12.webp";

/***/ }),

/***/ "./src/images/profile.png":
/*!********************************!*\
  !*** ./src/images/profile.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b7de4f99375ebee1a68fdb3fdba3da82.png";

/***/ }),

/***/ "./src/images/profile.webp":
/*!*********************************!*\
  !*** ./src/images/profile.webp ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "079b42941ce6ce49250dcd2b61d9404c.webp";

/***/ }),

/***/ "./src/images/rl-3d.png":
/*!******************************!*\
  !*** ./src/images/rl-3d.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5944def86b970d6da36d207d9a46378f.png";

/***/ }),

/***/ "./src/images/rl-3d.webp":
/*!*******************************!*\
  !*** ./src/images/rl-3d.webp ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f2850effcf823899dcfe81ea943a52a1.webp";

/***/ }),

/***/ "./src/images/royal-london.png":
/*!*************************************!*\
  !*** ./src/images/royal-london.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "10f637e7fd0fbed9301df0a7d06e3165.png";

/***/ }),

/***/ "./src/images/royal-london.webp":
/*!**************************************!*\
  !*** ./src/images/royal-london.webp ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "525d98760f887b7bd7b0fad160e05582.webp";

/***/ }),

/***/ "./src/images/sailgp.png":
/*!*******************************!*\
  !*** ./src/images/sailgp.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "92af2ec0010f486ea836c009b1dc0f1b.png";

/***/ }),

/***/ "./src/images/sailgp.webp":
/*!********************************!*\
  !*** ./src/images/sailgp.webp ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "25c1fbfa08cbccca11779b5487db5c64.webp";

/***/ }),

/***/ "./src/images/scottish-widows.png":
/*!****************************************!*\
  !*** ./src/images/scottish-widows.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "990b61984882540d2cf4bd8010e15827.png";

/***/ }),

/***/ "./src/images/scottish-widows.webp":
/*!*****************************************!*\
  !*** ./src/images/scottish-widows.webp ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "64d399885b5264d549870dda1ef4e56f.webp";

/***/ }),

/***/ "./src/images/ssiesta.png":
/*!********************************!*\
  !*** ./src/images/ssiesta.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6e7ae0ecaaf20e5478abb61608c07d4c.png";

/***/ }),

/***/ "./src/images/ssiesta.webp":
/*!*********************************!*\
  !*** ./src/images/ssiesta.webp ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "67af27f7fb624b6f5a184ff1b4899e1e.webp";

/***/ }),

/***/ "./src/images/syfy20.jpg":
/*!*******************************!*\
  !*** ./src/images/syfy20.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "67f64bf80cf6ff383989d573dbce1d81.jpg";

/***/ }),

/***/ "./src/images/syfy20.webp":
/*!********************************!*\
  !*** ./src/images/syfy20.webp ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5e5b65a56708c6b90c736c83c7a8edf2.webp";

/***/ }),

/***/ "./src/images/unearthed.jpg":
/*!**********************************!*\
  !*** ./src/images/unearthed.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5805e6b4cab146bcec5c79058f20d66c.jpg";

/***/ }),

/***/ "./src/images/unearthed.webp":
/*!***********************************!*\
  !*** ./src/images/unearthed.webp ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "89120d9d3f5af90a4be8b12130a09f2a.webp";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _doT = __webpack_require__(/*! ../node_modules/dot/doT */ "./node_modules/dot/doT.js");

var _doT2 = _interopRequireDefault(_doT);

__webpack_require__(/*! ./scss/main.scss */ "./src/scss/main.scss");

var _componentManager = __webpack_require__(/*! ./js/component-manager */ "./src/js/component-manager.js");

var _componentManager2 = _interopRequireDefault(_componentManager);

var _gallery = __webpack_require__(/*! ./js/gallery.component */ "./src/js/gallery.component.js");

var _gallery2 = _interopRequireDefault(_gallery);

var _overlay = __webpack_require__(/*! ./js/overlay.component */ "./src/js/overlay.component.js");

var _overlay2 = _interopRequireDefault(_overlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//document.addEventListener("DOMContentLoaded", componentManager.init.bind(componentManager));

var galleryElement = document.body.querySelector('#portfolio-grid');
var overlayElement = document.body.querySelector('#overlay');
var gallery = new _gallery2.default(galleryElement);
var overlay = new _overlay2.default(overlayElement);
var overlayOpen = overlay.open.bind(overlay);

gallery.init();
overlay.init();

gallery.onItemClick(overlayOpen);

/***/ }),

/***/ "./src/js/component-manager.js":
/*!*************************************!*\
  !*** ./src/js/component-manager.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ComponentManager = function () {
    function ComponentManager() {
        _classCallCheck(this, ComponentManager);

        this.componentClasses = [];
        this.components = [];
    }

    _createClass(ComponentManager, [{
        key: 'register',
        value: function register(componentName, componentClass) {
            this.componentClasses[componentName] = componentClass;
        }
    }, {
        key: 'init',
        value: function init() {
            var _this = this;

            //TODO: make this whole function more defensive
            var componentElements = Array.prototype.slice.call(document.body.querySelectorAll('[data-component]'));

            componentElements.forEach(function (element) {
                var name = element.getAttribute('data-component');

                if (name && name in _this.componentClasses) {
                    _this.components[name] = new _this.componentClasses[name](element);
                }
            });

            for (var key in this.components) {
                this.components[key].init();
            }
        }
    }]);

    return ComponentManager;
}();

var componentManager = new ComponentManager();

exports.default = componentManager;

/***/ }),

/***/ "./src/js/event-dispatcher.js":
/*!************************************!*\
  !*** ./src/js/event-dispatcher.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventDispatcher = function () {
    function EventDispatcher() {
        _classCallCheck(this, EventDispatcher);

        this._events = [];
    }

    _createClass(EventDispatcher, [{
        key: 'addEvent',
        value: function addEvent(eventName) {
            if (typeof this._events[eventName] === 'undefined') {
                this._events[eventName] = [];
            }
        }
    }, {
        key: 'clearEvent',
        value: function clearEvent(eventName) {
            this._events[eventName] = [];
        }
    }, {
        key: 'registerHandler',
        value: function registerHandler(eventName, handler) {
            this.addEvent(eventName);
            this._events[eventName].push(handler);
        }
    }, {
        key: 'deregisterHandler',
        value: function deregisterHandler(eventName, handler) {
            var index = this._events[eventName].indexOf(handler);

            if (index !== -1) this._events[eventName].splice(index, 1);
        }
    }, {
        key: 'dispatch',
        value: function dispatch(eventName, arg) {
            if (typeof this._events[eventName] !== "undefined") {

                for (var i = 0; i < this._events[eventName].length; i++) {
                    this._events[eventName][i](arg);
                }
            }
        }
    }]);

    return EventDispatcher;
}();

exports.default = EventDispatcher;

/***/ }),

/***/ "./src/js/gallery.component.js":
/*!*************************************!*\
  !*** ./src/js/gallery.component.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _doT = __webpack_require__(/*! ../../node_modules/dot/doT */ "./node_modules/dot/doT.js");

var _doT2 = _interopRequireDefault(_doT);

var _componentManager = __webpack_require__(/*! ../js/component-manager */ "./src/js/component-manager.js");

var _componentManager2 = _interopRequireDefault(_componentManager);

var _galleryData = __webpack_require__(/*! ../json/gallery-data */ "./src/json/gallery-data.js");

var _galleryData2 = _interopRequireDefault(_galleryData);

var _eventDispatcher = __webpack_require__(/*! ../js/event-dispatcher */ "./src/js/event-dispatcher.js");

var _eventDispatcher2 = _interopRequireDefault(_eventDispatcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Gallery = function () {
    function Gallery(element) {
        _classCallCheck(this, Gallery);

        this.element = element;
        this.eventDispatcher = new _eventDispatcher2.default();
        this.events = {
            onItemclick: 'events-on-gallery-item-click'
        };
        this.data = _galleryData2.default;

        this.template = _doT2.default.template('\n        <ul class="c-gallery c-grid">\n            {{~it.tiles :value}}\n                {{?value.type == \'content\'}}\n                    <li id="{{=value.id}}" class="c-gallery__item c-grid__item image-background">\n                        <div class="c-grid__item__inner">\n                            <h2>{{=value.title}}</h2>\n                            {{? value.text }}\n                                {{~value.text :text}}\n                                    <p>{{=text}}</p>\n                                {{~}}\n                            {{?}}\n                        </div>\n                    </li>\n                {{?}}\n                {{?value.type == \'image\'}}\n                    <li id="{{=value.id}}" class="c-gallery__item c-gallery__item--image c-grid__item image-background {{=value.className}}"></li>\n                {{?}}\n                {{?value.type == \'web\'}}\n                    <li id="{{=value.id}}" class="c-gallery__item c-gallery__item--web c-grid__item image-background {{=value.className}}"></li>\n                {{?}}\n                {{?value.type == \'sketchfab\'}}\n                <li id="{{=value.id}}" class="c-grid__item">\n                    <div class="sketchfab-embed-wrapper">\n                        <iframe title="sketchfab model"\n                            src="{{=value.src}}"\n                            frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true"\n                            webkitallowfullscreen="true"></iframe>\n                    </div>\n                 </li>\n                 {{?}}\n\n            {{~}}\n        </ul>\n        ');
    }

    _createClass(Gallery, [{
        key: 'init',
        value: function init() {
            this.render();
        }
    }, {
        key: 'render',
        value: function render() {
            this.element.innerHTML = this.template(this.data);
            this.bindEvents();
        }
    }, {
        key: 'onItemClickHandler',
        value: function onItemClickHandler(event) {
            var id = event.target.id;

            if (id && id !== "profile") {
                var result = this.data.tiles.filter(function (item) {
                    return item.id === id;
                });

                if (result.length > 0) {
                    this.eventDispatcher.dispatch(this.events.onItemclick, result[0]);
                }
            }
        }
    }, {
        key: 'bindEvents',
        value: function bindEvents() {
            var that = this;
            var elements = Array.prototype.slice.call(this.element.querySelectorAll('.c-gallery__item'));

            elements.forEach(function (element) {
                element.removeEventListener('click', that.onItemClickHandler.bind(that));
                element.addEventListener('click', that.onItemClickHandler.bind(that));
            });
        }
    }, {
        key: 'onItemClick',
        value: function onItemClick(handler) {
            this.eventDispatcher.registerHandler(this.events.onItemclick, handler);
        }
    }]);

    return Gallery;
}();

//componentManager.register("c-gallery", Gallery);


exports.default = Gallery;

/***/ }),

/***/ "./src/js/overlay.component.js":
/*!*************************************!*\
  !*** ./src/js/overlay.component.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _doT = __webpack_require__(/*! ../../node_modules/dot/doT */ "./node_modules/dot/doT.js");

var _doT2 = _interopRequireDefault(_doT);

var _componentManager = __webpack_require__(/*! ../js/component-manager */ "./src/js/component-manager.js");

var _componentManager2 = _interopRequireDefault(_componentManager);

var _eventDispatcher = __webpack_require__(/*! ../js/event-dispatcher */ "./src/js/event-dispatcher.js");

var _eventDispatcher2 = _interopRequireDefault(_eventDispatcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Overlay = function () {
    function Overlay(element) {
        _classCallCheck(this, Overlay);

        this.element = element;
        this.state = {
            isOpen: false,
            title: "Example Title",
            text: ["content", "example"]
        };

        this.eventDispatcher = new _eventDispatcher2.default();
        this.events = {
            onOpenOverlay: 'events-overlay-open',
            onCloseOverlay: 'events-overlay-close'
        };

        this.template = _doT2.default.template('\n            <div class="c-overlay {{? it.isOpen }}c-overlay--is-open{{?}}">\n             <div class="c-overlay__inner">\n            <button class="c-overlay__close-button close"><span>Close</span></button>\n\n                <div class="c-overlay__details">\n                    <h2>{{=it.title}}</h2>\n                    {{? it.text }}\n                        {{~it.text :text}}\n                            <p>{{=text}}</p>\n                        {{~}}\n                    {{?}}\n                </div>\n                <div class="c-overlay__image {{=it.className}}">             \n                </div>\n             </div>\n             </div>\n        ');
    }

    _createClass(Overlay, [{
        key: 'init',
        value: function init() {
            this.render();
        }
    }, {
        key: 'bindEvents',
        value: function bindEvents() {
            var that = this;
            this.closeButton = this.element.querySelector('.c-overlay__close-button');

            if (this.closeButton) {
                this.closeButton.addEventListener('click', function (event) {
                    that.close.bind(that)();
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            this.element.innerHTML = this.template(this.state);
            this.bindEvents();
        }
    }, {
        key: 'open',
        value: function open(data) {
            document.body.classList.add('remove-scroll');
            if (data) {
                this.state = data;
                this.state.isOpen = true;
                this.render();
            }
        }
    }, {
        key: 'close',
        value: function close() {
            document.body.classList.remove('remove-scroll');
            this.state.isOpen = false;
            this.render();
        }
    }, {
        key: 'onOpen',
        value: function onOpen(handler) {
            this.eventDispatcher.registerHandler(this.events.onOpenOverlay, handler);
        }
    }, {
        key: 'onClose',
        value: function onClose(handler) {
            this.eventDispatcher.registerHandler(this.events.onCloseOverlay, handler);
        }
    }]);

    return Overlay;
}();

//componentManager.register("c-overlay", Overlay);


exports.default = Overlay;

/***/ }),

/***/ "./src/json/gallery-data.js":
/*!**********************************!*\
  !*** ./src/json/gallery-data.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    tiles: [{
        id: 'unearthed',
        title: 'BBC Unearthed',
        type: 'web',
        className: 'unearthed-background'
    }, { id: 'lexus', title: 'Lexus', type: 'web', className: 'lexus-background' }, { id: 'egg-hunt', title: 'Project Egg Hunt', type: 'web', className: 'hunt-background' }, { id: 'sailgp', title: 'SailGP', type: 'web', className: 'sailgp-background' }, { id: 'funeral', title: 'SunLife Funeral Mapper', type: 'web', className: 'funeral-background' }, { id: 'efl', title: 'EFL Match Centre', type: 'web', className: 'efl-background' }, { id: 'green-city', title: 'BBC Green City', type: 'web', className: 'green-city-background' }, { id: 'royal-london', title: 'Royal London', type: 'web', className: 'royal-london-background' }, { id: 'garden-sketchfab', title: 'In the garden', type: 'sketchfab', src: 'https://sketchfab.com/models/75431eb321164f9689f6f98ef317f34f/embed?autospin=0.2&amp;preload=1&amp;transparent=0' }, { id: 'syfy', title: 'Syfy Channel 20th Anniversary Quiz game', type: 'web', className: 'syfy-background' }, {
        id: 'ghost',
        title: 'Ghost train builder',
        type: 'web',
        className: 'ghost-background',
        text: ['Ghost train builder was a side project we worked on for a few months leading up to Halloween. \n                At the time we were keen to explore the Aframe framework and came up with this idea of a user being able to customise their own Ghost train ride.\n                My responsibilities on the project included building 3D models for the rooms, rides and monsters but also a lot of the JavaScript to make the cart follow its course.', 'A few years prior to this project I had worked on another side project to allow for the setup of simple scenes in ThreeJS through AngularJS directives. \n                So it was refreshing to use a framework that was developed along the same ideals. Because models could be defined by HTML, this allowed anyone on the team regardless of 3D experience to manipulated the levels.', 'The core idea behind this was to uv unwrap all the building blocks onto a single texture and then swap these textures out to skin each room dynamically. The user had limited choices on lighting, theme and the monsters that would pop up.', 'Relevant technologies: <br/> <ul><li>Vue.js</li><li>Aframe</li><li>Three.js</li></ul>', '<a href="http://ghosttrainbuilder.com/">http://ghosttrainbuilder.com/</a>']
    }, { id: 'bird', title: 'Steller\'s Jay', type: 'sketchfab', src: 'https://sketchfab.com/models/9cfe5bd6f132405fbf48bd004fa688bd/embed?autospin=0.2&amp;preload=1&amp;transparent=0' }, { id: 'advent', title: 'Team Advent Calendar', type: 'web', className: 'advent-background' }, { id: 'plant', title: 'Potted plant', type: 'sketchfab', src: 'https://sketchfab.com/models/e92dd6ae7eb242018642bb40a91e744e/embed?autospin=0.2&amp;autostart=0&amp;transparent=0' }, { id: 'island', title: 'Procedural Islands', type: 'web', className: 'island-background' }, { id: 'pila', title: 'Pila', type: 'sketchfab', src: 'https://sketchfab.com/models/ace7d3e35fea473599e10d2c62e7ab56/embed?autospin=0.2&amp;preload=1&amp;transparent=0' }, { id: 'garden', title: 'In the garden', type: 'web', className: 'garden-background' }, { id: 'landscape', title: 'Low Poly Environment', type: 'web', className: 'pila-background' }, { id: 'weasel', title: 'Weasel character art', type: 'sketchfab', src: 'https://sketchfab.com/models/a995319e79e84c6a8df1ed8e5d3a58b0/embed?autospin=0.2&amp;preload=1&amp;transparent=0' }, { id: 'rice', title: 'Rice ball illustration', type: 'web', className: 'rice-background' }, { id: 'pila-game', title: '3D person character controller prototype', type: 'web', className: 'pila-game-background' }, { id: 'rl-3d', title: 'Realise logo 3D scene', type: 'web', className: 'rl-3d-background' }, { id: 'scottish-widows', title: 'Scottish Widows', type: 'web', className: 'scottish-widows-background' }, { id: 'heathrow', title: 'Heathrow - Kids go free', type: 'web', className: 'heathrow-background' }, { id: 'bermuda-splash', title: 'Expedia Bermuda', type: 'web', className: 'bermuda-splash-background' }, { id: 'lions', title: 'Lions 2017 Tour', type: 'web', className: 'lions-background' }, { id: 'ssiesta', title: 'Naked Wines: Supermarket Siesta', type: 'web', className: 'ssiesta-background' }]
};

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

/******/ });
//# sourceMappingURL=main.js.map
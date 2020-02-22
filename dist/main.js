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

var _galleryData = __webpack_require__(/*! ./json/gallery-data */ "./src/json/gallery-data.js");

var _galleryData2 = _interopRequireDefault(_galleryData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//document.addEventListener("DOMContentLoaded", componentManager.init.bind(componentManager));

var data = _galleryData2.default.tiles;

var galleryHighlightElement = document.body.querySelector('#portfolio-highlight-grid');
var galleryElement = document.body.querySelector('#portfolio-grid');
var overlayElement = document.body.querySelector('#overlay');

var highlights = data.filter(function (item) {
  return item.highlighted;
});
var galleryItems = data.filter(function (item) {
  return !item.highlighted;
});

var gallery = new _gallery2.default(galleryElement, galleryItems);
var galleryHighlight = new _gallery2.default(galleryHighlightElement, highlights);

var overlay = new _overlay2.default(overlayElement);
var overlayOpen = overlay.open.bind(overlay);

gallery.init();
galleryHighlight.init();
overlay.init();

gallery.onItemClick(overlayOpen);
galleryHighlight.onItemClick(overlayOpen);

document.body.style.visibility = 'visible';

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

var _eventDispatcher = __webpack_require__(/*! ../js/event-dispatcher */ "./src/js/event-dispatcher.js");

var _eventDispatcher2 = _interopRequireDefault(_eventDispatcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Gallery = function () {
    function Gallery(element, data) {
        _classCallCheck(this, Gallery);

        this.element = element;
        this.eventDispatcher = new _eventDispatcher2.default();
        this.events = {
            onItemclick: 'events-on-gallery-item-click'
        };
        this.data = data;

        this.template = _doT2.default.template('\n        <ul class="c-gallery c-grid">\n            {{~it :value}}\n                {{?value.type == \'content\'}}\n                    <li id="{{=value.id}}" class="c-gallery__item c-grid__item image-background">\n                            {{?value.clientName}}<div class="c-gallery__item__client-name"><span>{{=value.clientName}}</span></div>{{?}}\n                            <div class="c-grid__item__inner">\n                                <h2>{{=value.title}}</h2>\n                                {{? value.text }}\n                                    {{~value.text :text}}\n                                        {{=text}}\n                                    {{~}}\n                                {{?}}\n                            </div>\n                    </li>\n                {{?}}\n                {{?value.type == \'image\'}}\n                    <li id="{{=value.id}}" class="c-gallery__item c-gallery__item--image c-grid__item image-background {{=value.className}}">\n                    {{?value.clientName}}<div class="c-gallery__item__client-name"><span>{{=value.clientName}}</span></div>{{?}}\n                    </li>\n                {{?}}\n                {{?value.type == \'web\'}}\n                    <li id="{{=value.id}}" class="c-gallery__item c-gallery__item--web c-grid__item image-background {{=value.className}}">\n                        {{?value.clientName}}<div class="c-gallery__item__client-name"><span>{{=value.clientName}}</span></div>{{?}}\n                    </li>\n                {{?}}\n                {{?value.type == \'sketchfab\'}}\n                <li id="{{=value.id}}" class="c-grid__item">\n                {{?value.clientName}}<div class="c-gallery__item__client-name"><span>{{=value.clientName}}</span></div>{{?}}\n                    <div class="sketchfab-embed-wrapper">\n                        <iframe title="sketchfab model"\n                            src="{{=value.src}}"\n                            frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true"\n                            webkitallowfullscreen="true"></iframe>\n                    </div>\n                 </li>\n                 {{?}}\n\n            {{~}}\n        </ul>\n        ');
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
            var id = event.currentTarget.id;

            if (id && id !== "profile") {
                var result = this.data.filter(function (item) {
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

        this.template = _doT2.default.template('\n            <div class="c-overlay {{? it.isOpen }}c-overlay--is-open{{?}}">\n            <div class="c-overlay__outer">\n            <button class="c-overlay__close-button close"><span>Close</span></button>\n\n             <div class="c-overlay__inner">\n\n             {{? it.overlayContent }}\n                {{=it.overlayContent}}\n             {{?}}\n             {{? !it.overlayContent }}\n                <div class="c-overlay__image {{=it.className}}"></div>\n             {{?}}\n\n                <div class="c-overlay__details">\n                    <h2>{{=it.title}}</h2>\n                    {{? it.text }}\n                        {{~it.text :text}}\n                            <p>{{=text}}</p>\n                        {{~}}\n                    {{?}}\n                </div>\n             </div>\n             </div>\n             </div>\n        ');
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
        id: 'lexus',
        title: 'Lexus',
        clientName: 'Lexus',
        type: 'web',
        className: 'lexus-background',
        highlighted: true,
        text: ['\n                <p>In the summer of 2019 I started working on the Lexus Europe and Lexus UK accounts. \n                I worked alongside the other seniors on the account but I was specifically brought on to lead the front end development moving forward.<p/>\n                \n                <p>The lexus marketing site is a multi-tenancy application built using Backbone that is powered by a Tridion and MongoDB back end.</p>\n                 \n                <p>My role included:\n                 <ul>\n                    <li>code views on front end relate pull requests</li>\n                    <li>supporting the onboarding of new members to the team</li>\n                    <li>the estimation of tasks in JIRA</li>\n                    <li>feeding into the ongoing process improvements</li>\n                    <li>implementing integrated testing</li>\n                    <li>writing AB tests through Google Optimize</li>\n                    <li>building schemas and components in Tridion</li>\n                 </ul>\n                </p>\n\n                <p>The platform was well established and had been running for several years but there were improvements that could be made.</p>\n                \n                <p>\n                Relevant links:\n                </p>\n\n                <p>\n                    <a href="https://www.lexus.eu/en/">https://www.lexus.eu/en/</a>\n                </p>\n\n                <p>\n                    <a href="https://www.lexus.co.uk">https://www.lexus.co.uk</a>\n                </p>\n                '] }, {
        id: 'garden',
        title: 'In the garden',
        type: 'web',
        className: 'garden-background',
        clientName: 'In the garden',
        highlighted: false,
        overlayContent: '\n                <iframe src="https://sketchfab.com/models/75431eb321164f9689f6f98ef317f34f/embed?autospin=0.2&amp;preload=1&amp;transparent=0"></iframe>\n            ',
        text: ['\n                <p>This piece of work close to my heart. A side project I worked on last year that went through many months of iteration. \n                I was looking for some practice on building out environments so decided to impose a size limition to that of a garden to help with scope and focus.</p>\n    \n                <p>I created a reference board with PureRef of all the various garden related objects that interested me. I was particularly drawn to outhouse conversions and that quickly became the main focus.</p>\n    \n                <p>I like the idea of every scene having a story behind it and for this I settled on the thought that the garden belonged to an elderly man who was spending his years of retirement building bird houses.</p>\n    \n                <p>The scene was almost entirely modelled and textured in Blender with the exception of some foliage shapes being produced using Photoshop. \n                This was built prior to the official release of Blender 2.8, but I did download a beta version to help combine UV maps for baking. \n                I baked the entire scene into textures for uploading to Sketchfab where it was staff picked. A mechanism where staff can feature particular pieces of work.</p>\n    \n                <p>\n                Some work in progress renders can be found here on artstation: \n                <a href="https://www.artstation.com/artwork/2xOmLy">https://www.artstation.com/artwork/2xOmLy</a>\n                </p>\n    \n                <p>\n                Sketchfab: \n                <a href="https://sketchfab.com/3d-models/in-the-garden-75431eb321164f9689f6f98ef317f34f">https://sketchfab.com/3d-models/in-the-garden-75431eb321164f9689f6f98ef317f34f</a>\n                </p>\n                \n                \n                ']

    }, {
        id: 'egg-hunt',
        title: 'WIP Project Egg Hunt',
        type: 'web',
        className: 'hunt-background',
        clientName: 'Project Egg Hunt',
        highlighted: false,
        overlayContent: '\n                <iframe src="http://project-egg-hunt.azurewebsites.net/"></iframe>\n            ',
        text: ['\n                    <p>\n                    Project Egg is a side initiative currently being worked on for Easter 2020.\n                    The core idea behind it was to allow for the painting of eggs in the browser and then supplying the painted eggs through an API for various experiences and games to make use of.\n                    </p>\n\n                    <p>This piece is one such experience. It is a 3D egg hunt game where a series of random painted egg textures are retrieved from the API and used to decorate eggs hidden around the scene.\n                    The game then becomes trying to find these eggs by rotating and paning the camera around the world to find them. </p>\n\n                    <p> All models and textures thus far have been created using Blender. Using ThreeJS I am importing the models and baked textures and rendering them to the canvas when the scene needs to redraw.\n                    </p>\n\n                    <p>This is very much work in progress and is currently hosted in Azure on a free tier web app, so may be sleeping!</p>\n\n                    <p>\n                    Relevant technologies: Blender, ThreeJS</p>\n\n                    <p>Link: <a href="http://project-egg-hunt.azurewebsites.net/">http://project-egg-hunt.azurewebsites.net/</a></p>\n                \n                ']
    }, {
        id: 'sailgp',
        title: 'SailGP',
        clientName: 'SailGP',
        type: 'web',
        className: 'sailgp-background',
        highlighted: true,
        text: ['\n                <p>SailGP is a popular international sailing event and we were tasked with building out the event website.</p>\n                <p>A major requirement for the site was to allow for the creation of any number of pages in the CMS from a number of blocks set out by our UX and design teams. This meant that the notion of pages in the traditional sense didn\u2019t really exist as far as our team were concerned. We started to consider the site in terms of components, with a page being nothing more than a collection of those components.</p>\n\n                <p>In order to support that way of thinking we had to be very deliberate in our choice of technology stack.</p>\n\n                <p>Our stack includes:\n                    <ul>\n                        <li>Contentful - a headless CMS</li>\n                        <li>Content Service - a service layer built in Node.js</li>\n                        <li>React - our front end framework of choice</li>\n                        <li>Docker</li>\n                    </ul>\n                </p>\n\n                <p>\n                    Using Contentful and our Content Service we have a lot of control and flexibility over how the data is presented to the application. We were able to define components and send over a detailed structure on how these components should be used by the application to create our pages. React lets us use this data and rapidly construct the visual components that the user sees on each page. Docker ensures that the application is packaged up and deployed with everything it needs to run which gives us confidence in our testing.\n                </p>\n\n                <p>\n                    In the front end project we set up a container, a React specific piece of code, that requests the data from the content service for a certain page on the site. The data received includes a definition of what components should appear, the data for these components as well as some global data and site settings to populate the components that appear on every page.\n                </p>\n\n                <p>Using React made a lot of sense here as components are front and center of it\'s ideology. We take the component definition list then dynamically render components based on this list in order. Each component follows the same rules and receives data in the same way. As we aren\u2019t really concerned with pages, the focus is on building components in isolation, this makes splitting the work out between the team easier. </p>\n\n                <p>The benefits of our chosen architecture are that we are left with flexible pieces that are focused on their own concerns. We can add, edit or remove components, create entirely new pages and even decide to completely replace the front end solution with something different and the content remains unaffected. </p>\n                <p>\n                Relevant technologies: React, NodeJS, Contentful, Docker</p>\n\n                <p>Link: <a href="https://sailgp.com/">https://sailgp.com/</a></p>\n                ']
    }, {
        id: 'pila-game',
        title: 'Prototype 3D Platformer',
        clientName: 'Prototype 3D Platformer',
        type: 'web',
        className: 'pila-game-background',
        text: ['\n                    <p>Pila and the secret door is one of the Unity projects I\'ve been working on for fun in my own time. \n                    It\'s a 3D platformer that uses a custom kinematic character controller I\'ve been writing that extends Unitys default one.</p>\n\n                    <p>I\'m particularly fond of the compositional approach I\'ve take where each behaviour is defined in a seperate game component.\n                    Although this comes with a slight performance cost, it has made life so much easier whe revisiting the project after extended breaks.\n                    </p>\n\n                    <p>I\'ve recently begun refactoring the reusable elements such as this character controller and the camera into reusable unity packages imported via a git repository.</p>\n\n\n\n\n                '],
        overlayContent: '\n            \n            <iframe src="https://player.vimeo.com/video/204263108" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>\n\n            \n            '

    }, {
        id: 'funeral',
        title: 'SunLife Funeral Mapper',
        clientName: 'SunLife',
        type: 'web',
        className: 'funeral-background',
        highlighted: true,
        text: ['\n                    <p>SunLife were looking for a custom google map to help people plan services they would need during the death of a loved one. After experiencing a few bloated google maps over the last few years I decided to keep this one pretty light and performant. I brought in a custom event dispatcher and hooked up a lightweight pub-sub arhitecture. To handle UI updates based on pin clicks.</p>\n                    <p>Using an event driven system made it quite easy to update multiple UI components with the same data such as a favourited pin changing icon, updating the count and displaying it on a list.\n                    <p>Link: <a href="https://www.sunlife.co.uk/funeral-planning/funeral-planning-mapper/">https://www.sunlife.co.uk/funeral-planning/funeral-planning-mapper/</a></p>\n                \n                    ']
    }, {
        id: 'efl',
        title: 'EFL Match Centre',
        clientName: 'EFL',
        type: 'web',
        className: 'efl-background',
        highlighted: true,
        text: ['\n                    <p>This project for the English Football League (EFL) was the first major EpiServer build our agency won. \n                    It was another multi-tenancy web application that catered for 66 different english football clubs initially.</p>\n\n                    <p>I was put in charge of the integration of the Match Centre for all 66 clubs. This involved creating event pages for every game in a season with pre, during and post match states. </p>\n                    <p>The majority of the work was integrating and theming of Opta Widgets. I built a Match Center management component which registered and orchestrated the rendering of the right widget during the right match state.</p>\n\n                    <p>Relevant technologies: EpiServer </p>\n                    <p>Link: <a href="https://www.swfc.co.uk/matches/fixtures/">https://www.swfc.co.uk/matches/fixtures/<a/></p>\n                    <p>Link: <a href="https://www.bwfc.co.uk/matches/fixtures/">https://www.bwfc.co.uk/matches/fixtures/<a/></p>\n                    \n                ']
    }, {
        id: 'unearthed',
        title: 'BBC Unearthed',
        clientName: 'BBC',
        type: 'web',
        className: 'unearthed-background',
        highlighted: true,
        text: ['\n                <p>Unearthed was an interactive experience that followed the story of the hummingbirds struggle to survive.</p>\n\n                <p>It was a pilot built in collaboration with BBC Connected Studios for their BBC Taster programme which is the home for their new ideas.</p>\n                \n                <p>The pilot consists of a few interactive scenes:\n\n                    <ul>\n                        <li>Tutorial introduction</li>\n                        <li>3D panaoramic video with binaural audio</li>\n                        <li>Interactive video sequences</li>\n                        <li>Narrated video sequences which stitched the experience together\n                    </ul>\n                </p>\n\n                <p> As the sole developer on the project I worked closely with our Media and Motion graphics designer to craft each interactive element.\n                I first built a custom interactive timeline framework that allowed us to stitch together the various scenes into a coherent experience. \n                The binaural audio was achieved through the use of the web audio API and we coordinated with sound designer Richard de Mowbray to get the most out of the assets.\n\n                <p>Winner of Best Immersion at BIMA Awards 2016</p>\n\n                <p>Nominated for Grand Prix at BIMA Awards 2016</p>\n                <p>Related article: <a href="https://www.bbc.co.uk/taster/pilots/unearthed">https://www.bbc.co.uk/taster/pilots/unearthed</a></p>\n                ']
    }, {
        id: 'royal-london',
        title: 'Royal London',
        clientName: 'Royal London',
        type: 'web',
        className: 'royal-london-background',
        text: ['\n                <p>I spent the first 14 months of my employment with Realise on site at Royal Londons offices. There I was part of a team of developers working on Royal Londons rebranding. One particular highlight was the navigation system which consisted of a grid of boxes of various sizes with interesting CSS transitions. \n                The sub items needed to grow and expand to cover the parent boxes in a pleasing manner.</p>\n                <p>Relevant technologies: Bootstrap 3, Angular 1.x </p>\n                <p>Link: <a href="https://www.royallondon.com/">https://www.royallondon.com/<a/></p>\n                ']

    }, {
        id: 'syfy',
        title: 'Syfy Channel 20th Anniversary game',
        clientName: 'Syfy',
        type: 'web',
        className: 'syfy-background',
        text: ['\n                    <p>In partnership withh Picnic Studio we built an interactive "Where\'s wally?" style scene to celebrate the Syfy channels 20th anniversary.  \n                    The scene was littered with loads of popular science fiction references such as Doctor Who and Battlestar Gallactica.</p> \n                    <p>It was up to the user to search and find every reference. A major consideration on this scene was browser rendering performance, \n                    since it was effectively a single huge image. Leveraging image compression and using 3D transforms to make use the users GPU helped. \n                    We also had to do a large amount of device testing and iteration to make sure it was responsive across all browsers and devices.</p>\n                ']
    }, {
        id: 'ghost',
        title: 'Ghost train builder',
        clientName: 'Ghost Train Builder',
        type: 'web',
        className: 'ghost-background-2',
        overlayContent: '\n                <div class="c-overlay__image ghost-background"></div>\n            ',
        text: ['Ghost train builder was a side project we worked on for a few months leading up to Halloween. \n                At the time we were keen to explore the Aframe framework and came up with this idea of a user being able to customise their own Ghost train ride.\n                My responsibilities on the project included building 3D models for the rooms, rides and monsters but also a lot of the JavaScript to make the cart follow its course.', 'A few years prior to this project I had worked on another side project to allow for the setup of simple scenes in ThreeJS through AngularJS directives. \n                So it was refreshing to use a framework that was developed along the same ideals. Because models could be defined by HTML, this allowed anyone on the team regardless of 3D experience to manipulate the levels.', 'The core idea behind this was to uv unwrap all the building blocks onto a single texture and then swap these textures out to skin each room dynamically. The user had limited choices on lighting, theme and the monsters that would pop up.', 'Featured in net magazine issue 291 April 2017', 'Relevant technologies: <br/> <ul><li>Vue.js</li><li>Aframe</li><li>Three.js</li></ul>', '<a href="http://ghosttrainbuilder.com/">http://ghosttrainbuilder.com/</a>']
    }, { id: 'bird', title: 'Steller\'s Jay', type: 'sketchfab', src: 'https://sketchfab.com/models/9cfe5bd6f132405fbf48bd004fa688bd/embed?autospin=0.2&amp;preload=1&amp;transparent=0' }, {
        id: 'advent',
        title: 'Team Advent Calendar',
        clientName: 'TUX 2019 Advent Calendar',
        type: 'web',
        className: 'advent-background',
        text: ['\n                    <p>On the lead up to Christmas 2019 a few members of the team decided to band together to organise a team advent calendar.</p>\n\n                    <p>The team were give a simple brief; to supply a fixed-size picture, animation or experience that conformed to a selected colour palette.\n                    The submissions were revealed to company one by one every day in december leading up to Christmas day.\n                    </p>\n\n                    <p>The entries were stored on the server behind GUID based urls to make it harder for pesky web developers to guess them and find someones submission early. \n                    I decided to update the content and configuration via a FireBase database, which was pulled in using a NodeJS server and rendered server side to again prevent any cheating.</p>\n\n                    <p>The event was well recieved and we got quite a lot of entries from the team which was a great way to end the year.</p>\n                    <p>Relevant technologies: Firebase, NodeJS </p>\n                    <p>Link: <a href="https://tux-advent-calendar.azurewebsites.net/">https://tux-advent-calendar.azurewebsites.net/<a/></p>\n                ']
    }, { id: 'plant', title: 'Potted plant', type: 'sketchfab', src: 'https://sketchfab.com/models/e92dd6ae7eb242018642bb40a91e744e/embed?autospin=0.2&amp;autostart=0&amp;transparent=0' }, {
        id: 'island',
        title: 'Procedural Islands',
        clientName: 'Procedural Islands',
        highlighted: false,
        type: 'web',
        className: 'island-background',
        overlayContent: '\n                <iframe src="./proc-islands"></iframe>\n            ',
        text: ['\n                <p>Procedural generation is something that has always interested me. Particularly the blend between crafted experiences and procedural generation. I\'ve had some experience using the Unity game engine to craft little procedural planets.</p>\n                <p>I was really keen on taking this concept to the browser and trying my hand at a few techniques using ThreeJS.</p>\n                <p>I made use of perlin.js to generate a number of different noise textures which were merged together to build a heightmap.\n                I then translated this heightmap into geometry and used a custom shader with some simple rules such as height or slope angle to paint the terrain with some simple colours to represent rock or grass.</p>\n                <p>One element I particularly loved was generating new islands by hitting spacebar and watching the islands blend between the different states. This was done by capturing the height data of both states then blending between them over time. Since the colouring was calculated by the shader, this gave a nice effect during the blend.\n                ']

    }, { id: 'pila', title: 'Pila', type: 'sketchfab', src: 'https://sketchfab.com/models/ace7d3e35fea473599e10d2c62e7ab56/embed?autospin=0.2&amp;preload=1&amp;transparent=0' }, {
        id: 'landscape',
        title: 'Low Poly Environment',
        type: 'web',
        clientName: 'Green valley',
        className: 'pila-background',
        text: ['\n                <p>This was a challenge that I set myself to push my experience in building out environments. \n                I was inspired by works of art that looked incredibly complex but when analysed closer you could see that actually the scene was made up of a very small number of unique assets.</p>\n\n                <p>The entire scene was built in Blender with mostly simple low poly style objects. I made heavy use of Blenders hair particle system to place all the trees and individual small objects like stones and grass.\n                    This was a huge time saver, I just made sure to mask the areas of generation by grouping together the vertices and passing those through to the particle system.\n                </p>\n\n                <p>Relevant technologies: Blender </p>\n                <p>Link: <a href="https://www.artstation.com/artwork/oGLJO">https://www.artstation.com/artwork/oGLJO<a/></p>\n                ']
    }, { id: 'weasel', title: 'Weasel character art', type: 'sketchfab', src: 'https://sketchfab.com/models/a995319e79e84c6a8df1ed8e5d3a58b0/embed?autospin=0.2&amp;preload=1&amp;transparent=0' }, { id: 'rice', title: 'Rice ball illustration', type: 'web', className: 'rice-background', clientName: '2D Illustration' }, {
        id: 'gea',
        title: 'Halifax: Giving Extra Awards',
        type: 'web',
        clientName: 'Halifax',
        className: 'gea-background',
        highlighted: true,
        overlayContent: '<div class="c-overlay__image gea-background-2"></div>',
        text: ['\n                <p>In 2015 I worked on the front end build for the Halifax Giving Extra Awards. My favourite part of this site was the google map integration to show all the nominees and award winners.</p>\n                <p>In that year I had witnessed another map built for another client that really wasn\'t performing to expectations so for this map I decided that performance was going to be a primary consideration.</p>\n                <p>This was achieved in two ways:</p>\n                <ul>\n                <li>Clustering</li>\n                <li>A quadtree data structure</li>\n                </ul>\n                <p>The map was split up in to 4 equal chunks recursively so that within each chunk that same division happened again until there were no nodes left. This made finding pins for a particlar area, or geolocation bounds very fast. </p>\n                \n                ']

    }, {
        id: 'green-city',
        title: 'BBC Green City',
        clientName: 'BBC',
        type: 'web',
        className: 'green-city-background',
        highlighted: true,
        text: ['\n            <p>\n            This piece of work was the first commerical project I\'ve worked on where I didn\'t write any code. \n            The BBC were looking for a short video sequence of a prototype scene that demonstrated their green city idea. \n            The project had a really tight turn around and we had to deliver something in less than two weeks.\n            </p>\n\n            <p>For speed I used a Blender addon called "BLAM" which provides guided perspective matching which allowed me to match the scenes camera to the perspective used in a storyboard.\n            This allowed me to quickly block out the scene with simple primitive shapes to get a sense of scale.</p>\n            \n            <p>From that block-out I built two versions of the city using a colour palette provided by our designer. \n            The first version was a congested, polluted, smoggy scene and the other was filled with greenery and open spaces.\n            A camera animation sequence was captured for each city version and then composited together by our motion graphics designer.</p>\n\n            ']
    }, { id: 'rlgol', clientName: 'Game of life', title: 'Coding exercise: Game Of Life', type: 'web', className: 'game-of-life' }, { id: 'scottish-widows', clientName: 'Scottish Widows', title: 'Scottish Widows', type: 'web', className: 'scottish-widows-background' }, { id: 'su2c', clientName: 'Stand Up To Cancer', title: 'Stand Up To Cancer: Hackathon', type: 'web', className: 'su2c-background' }, { id: 'heathrow', clientName: 'Heathrow', title: 'Heathrow - Kids go free', type: 'web', className: 'heathrow-background' }, { id: 'lions', clientName: 'Standard Life Investments', title: 'Lions 2017 Tour', type: 'web', className: 'lions-background' }, { id: 'ssiesta', clientName: 'Naked Wines', title: 'Naked Wines: Supermarket Siesta', type: 'web', className: 'ssiesta-background' }, { id: 'rl-theatre', clientName: 'Royal London', title: 'Royal London: Theatre Of Life', type: 'web', className: 'theatre-background', overlayContent: '<div class="c-overlay__image theatre-background-2"></div>', highlighted: true, text: ['\n                <p>Royal London\'s Theatre of Life was an interactive piece which was put together to teach customers about life insurance before they made their application. It was mainly done using layered gifs/PNG sequences and CSS3 animations all orchestrated by a little bit of timeline JavaScript.</p>\n            '] }]
};

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=main.js.map
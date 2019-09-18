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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery2.default)(document).ready(function () {
    (0, _jquery2.default)(".item-slide").on("click", function () {
        (0, _jquery2.default)(this).toggleClass("item-slide--active");
        (0, _jquery2.default)(this).find(".item-slide__content").slideToggle();
    });

    // Mobile Navbar
    (0, _jquery2.default)(".nav-btn#nav").on("click", function () {
        if (!(0, _jquery2.default)(this).hasClass("nav-btn--active")) {
            (0, _jquery2.default)(this).addClass("nav-btn--active");
            (0, _jquery2.default)(".navbar-mobile").addClass("navbar-mobile--active");
            (0, _jquery2.default)("body").attr("style", "position: fixed; overflow: hidden;");
        } else {
            (0, _jquery2.default)(this).removeClass("nav-btn--active");
            (0, _jquery2.default)(".navbar-mobile").removeClass("navbar-mobile--active");
            (0, _jquery2.default)("body").attr("style", "");
        }
    });
    (0, _jquery2.default)(document).mouseup(function (e) {
        // событие клика по веб-документу
        var dropdownActive = (0, _jquery2.default)(".navbar-mobile.navbar-mobile--active"); // элемент

        if (!dropdownActive.is(e.target) // клик был не по блоку
        && dropdownActive.has(e.target).length === 0 // и не по его дочерним элементам
        && !(0, _jquery2.default)(".nav-btn#nav").is(e.target)) {
            dropdownActive.removeClass("navbar-mobile--active");
            (0, _jquery2.default)("body").attr("style", "");
        }
    });
    // Hide Navigation on Mobile
    (0, _jquery2.default)(window).resize(function () {
        if ((0, _jquery2.default)(window).width() > 991) {
            (0, _jquery2.default)(".navbar-mobile.navbar-mobile--active").removeClass("navbar-mobile--active");
            (0, _jquery2.default)("body").attr("style", "");
        }
    });
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })
/******/ ]);
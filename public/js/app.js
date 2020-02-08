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
    (0, _jquery2.default)("a.scroll").click(function () {
        (0, _jquery2.default)("html, body").animate({
            scrollTop: (0, _jquery2.default)((0, _jquery2.default)(this).attr("href")).offset().top + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });

    (0, _jquery2.default)(".item-slide").on("click", function () {
        (0, _jquery2.default)(this).toggleClass("item-slide--active");
        (0, _jquery2.default)(this).find(".item-slide__content").slideToggle();
    });

    var $mediaElementsAll = (0, _jquery2.default)(".timetable-col");
    var $mediaElements = (0, _jquery2.default)(".timetable-col:not(.archive)");
    (0, _jquery2.default)('.timetable-nav .timetable-nav__link').click(function (e) {
        e.preventDefault();
        var filterVal = (0, _jquery2.default)(this).data('filter');

        if (!(0, _jquery2.default)(this).hasClass("timetable-nav__link--active")) {
            (0, _jquery2.default)('.timetable-nav .timetable-nav__link.timetable-nav__link--active').removeClass("timetable-nav__link--active");
            (0, _jquery2.default)(this).addClass("timetable-nav__link--active");
            if (filterVal === 'all') {
                $mediaElementsAll.hide();
                $mediaElements.show();
            } else {
                // hide all then filter the ones to show
                $mediaElementsAll.hide().filter('.' + filterVal).show();
            }
        }
    });

    // Timetable Page
    (0, _jquery2.default)(".timetable-btn").on("click", function () {
        (0, _jquery2.default)('.cta-block .cta-block__form .form__input_title').val((0, _jquery2.default)(this).data("title"));
    });

    // Sertificate Page
    (0, _jquery2.default)(".info__link.info__link_show").on("click", function (e) {
        e.preventDefault();
        var info = (0, _jquery2.default)(this).closest(".info");
        info.addClass("info--active");
        info.find(".info__content__inside[data-info='intro']").addClass("info__content__inside--hidden-left");
        info.find(".info__content__inside[data-info='details']").removeClass("info__content__inside--hidden-right");
    });
    (0, _jquery2.default)(".info__link.info__link_hide").on("click", function (e) {
        e.preventDefault();
        var info = (0, _jquery2.default)(this).closest(".info");
        info.removeClass("info--active");
        info.find(".info__content__inside[data-info='intro']").removeClass("info__content__inside--hidden-left");
        info.find(".info__content__inside[data-info='details']").addClass("info__content__inside--hidden-right");
    });
    (0, _jquery2.default)(".info .info__content .btn").on("click", function (e) {
        e.preventDefault();
        var title = (0, _jquery2.default)(this).data("title");

        // дополнение описания CTA блока
        (0, _jquery2.default)("#sertificateInfo").html(title);
        // заполнение скрытого поля формы
        (0, _jquery2.default)(".cta-block#getSertificate .cta-block__form .form__input_title").val(title);
        // прокрутка к форме
        (0, _jquery2.default)("html, body").animate({ scrollTop: (0, _jquery2.default)("#getSertificate").offset().top + "px" }, { duration: 500, easing: "swing" });
    });
    (0, _jquery2.default)(".info .btn.amount").on("click", function (e) {
        e.preventDefault();
        var title = (0, _jquery2.default)(this).data("title");
        var amount = (0, _jquery2.default)(".info .info__form .form-input").val();

        if (amount != '') {
            // заполнение скрытого поля формы
            (0, _jquery2.default)(".cta-block#getSertificate .cta-block__form .form__input_title").val(title + " на сумму " + amount);
            // дополнение описания CTA блока
            (0, _jquery2.default)("#sertificateInfo").html(title + " на сумму " + amount);
        } else {
            // заполнение скрытого поля формы
            (0, _jquery2.default)(".cta-block#getSertificate .cta-block__form .form__input_title").val(title);
            // дополнение описания CTA блока
            (0, _jquery2.default)("#sertificateInfo").html(title);
        }
        // прокрутка к форме
        (0, _jquery2.default)("html, body").animate({ scrollTop: (0, _jquery2.default)("#getSertificate").offset().top + "px" }, { duration: 500, easing: "swing" });
    });
    // Corporate Page
    (0, _jquery2.default)(".preview-link .preview-link__link").on("click", function (e) {
        e.preventDefault();
        var title = (0, _jquery2.default)(this).data("title");
        // заполнение скрытого поля формы
        (0, _jquery2.default)(".form#corporateForm .form__input_title").val(title);
        // прокрутка к форме
        (0, _jquery2.default)("html, body").animate({ scrollTop: (0, _jquery2.default)("#corporateForm").offset().top - 100 + "px" }, { duration: 500, easing: "swing" });
    });
    // Slider
    if ((0, _jquery2.default)(".slider").length) {
        // Slider Link
        (0, _jquery2.default)('.slider.slider_link').slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: false,
            dots: true,
            infinite: false,
            responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
    };
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
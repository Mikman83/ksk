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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/filter.js":
/*!**************************!*\
  !*** ./src/js/filter.js ***!
  \**************************/
/*! exports provided: filterEntity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filterEntity\", function() { return filterEntity; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Filter =\n/*#__PURE__*/\nfunction () {\n  function Filter(complex, finishDates, rooms) {\n    _classCallCheck(this, Filter);\n\n    this.complex = complex || [];\n    this.finishDates = finishDates || [];\n    this.rooms = rooms || [];\n    this.flatsList = [];\n    this.ready = false;\n    this.counterElement = document.querySelector('.obj-filter__results-text') ? document.querySelector('.obj-filter__results-text').querySelector('span') : null;\n  }\n\n  _createClass(Filter, [{\n    key: \"defineComplexName\",\n    value: function defineComplexName(str) {\n      if (str === 'cd') {\n        return 'ЖК Чудная Долина';\n      }\n\n      if (str === 'p') {\n        return 'ЖК Павловский';\n      }\n\n      return 'МКР Центральный';\n    }\n  }, {\n    key: \"defineFlatType\",\n    value: function defineFlatType(str) {\n      if (str === '1') {\n        return '1-комнатная квартира';\n      }\n\n      if (str === '2') {\n        return '2-комнатная квартира';\n      }\n\n      if (str === '3') {\n        return '3-комнатная квартира';\n      }\n\n      return 'Студия';\n    }\n  }, {\n    key: \"parseJSONMessage\",\n    value: function parseJSONMessage(str) {\n      var result;\n\n      try {\n        result = JSON.parse(str);\n      } catch (e) {\n        console.error('cannot parse json');\n      }\n\n      return result;\n    }\n  }, {\n    key: \"setFilterOption\",\n    value: function setFilterOption(option, value) {\n      this[option] = value;\n      var filteredArray = this.filterFlatsList();\n      this.counterElement.innerHTML = filteredArray.length;\n\n      if (option === 'ready') {\n        this.complex = [];\n        this.rooms = [];\n        document.querySelector('.obj-filter__rooms-wrap').querySelectorAll('input[type=\"checkbox\"]').forEach(function (sel) {\n          sel.checked = false;\n        });\n      } else {\n        this.ready = false;\n        document.querySelector('.obj-filter__build-apartments-btn').style = '';\n      }\n    }\n  }, {\n    key: \"renderFlatsList\",\n    value: function renderFlatsList() {\n      var wrapper = document.querySelector('.object__list');\n      wrapper.innerHTML = '';\n      var listPreparedForRender = this.filterFlatsList();\n\n      for (var i = 0; i < listPreparedForRender.length; i++) {\n        var priceFormatted = listPreparedForRender[i].priceFlat.slice(0, 1) + ' ' + listPreparedForRender[i].priceFlat.slice(1, 4) + ' ' + listPreparedForRender[i].priceFlat.slice(4);\n        wrapper.innerHTML += \"<div class=\\\"object-block__item product-card\\\"><a href=\\\"\".concat(listPreparedForRender[i].link_flats, \"\\\" class=\\\"product-card__link\\\">\\n        <div class=\\\"product-card__img product-card__img--frame\\\">\\n          <img\\n            src=\\\"\").concat(listPreparedForRender[i].imgLink, \"\\\"\\n            alt=\\\"\\u0418\\u0437\\u043E\\u0431\\u0440\\u0430\\u0436\\u0435\\u043D\\u0438\\u0435\\\"\\n          />\\n        </div>\\n        <div\\n          class=\\\"product-card__title product-card__title--second-color\\\"\\n        >\\n          <h3>\").concat(this.defineComplexName(listPreparedForRender[i].complex), \"</h3>\\n        </div>\\n        <div class=\\\"product-card__room-value\\\">\\n          <span>\").concat(listPreparedForRender[i].studio ? 'Студия' : this.defineFlatType(listPreparedForRender[i].roomsQuantity), \"</span>\\n        </div>\\n        <div class=\\\"product-card__object-status\\\">\\n          <span>\\u0421\\u0434\\u0430\\u0435\\u0442\\u0441\\u044F</span>\\n        </div>\\n        <div class=\\\"product-card__square\\\">\\n          <span>\\u041F\\u043B\\u043E\\u0449\\u0430\\u0434\\u044C</span>\\n        </div>\\n        <div class=\\\"product-card__square-value\\\">\\n          <span>\").concat(listPreparedForRender[i].fullFlat, \" \\u043C<sup>2</sup></span>\\n        </div>\\n        <div class=\\\"product-card__footer\\\">\\n          <span\\n            >\").concat(priceFormatted, \" &#8381;\\n            <span class=\\\"product-card__arrow\\\">\\u0441\\u0442\\u0440\\u0435\\u043B\\u043A\\u0430</span>\\n          </span>\\n        </div>\\n      </a></div>\");\n      }\n    }\n  }, {\n    key: \"fetchFlatsList\",\n    value: function fetchFlatsList() {\n      var xhr = new XMLHttpRequest();\n      xhr.open('GET', './new_jsonFlats.json', false);\n      xhr.send();\n\n      if (xhr.status != 200) {\n        console.error(xhr.status + ': ' + xhr.statusText);\n      } else {\n        var flatsObj = this.parseJSONMessage(xhr.responseText);\n        console.log(flatsObj);\n        var one = flatsObj.one,\n            two = flatsObj.two,\n            three = flatsObj.three,\n            studio = flatsObj.studio;\n        this.flatsList = [].concat(_toConsumableArray(one), _toConsumableArray(two), _toConsumableArray(three), _toConsumableArray(studio.map(function (s) {\n          return _objectSpread({}, s, {\n            studio: true\n          });\n        })));\n        this.counterElement.innerHTML = this.flatsList.length;\n        this.addEventOnSubmit();\n\n        if (window.location.pathname.includes('poisk-kvartir')) {\n          this.renderFlatsList();\n        }\n      }\n    }\n  }, {\n    key: \"addEventOnSubmit\",\n    value: function addEventOnSubmit() {\n      var _this = this;\n\n      var readyFlatsButton = document.querySelector('.obj-filter__build-apartments-btn');\n      document.querySelector('.obj-filter__results-btn').addEventListener('click', function (e) {\n        e.preventDefault();\n\n        if (_this.ready) {\n          _this.setFilterOption('ready', false);\n\n          readyFlatsButton.style = '';\n        }\n\n        _this.renderFlatsList();\n      });\n      readyFlatsButton.addEventListener('click', function (e) {\n        e.preventDefault();\n        $('.obj-filter__complex-select').val([]);\n        $('.obj-filter__complex-select').trigger('change');\n        $('.obj-filter__deadline-select').val([]);\n        $('.obj-filter__deadline-select').trigger('change');\n\n        _this.setFilterOption('ready', true);\n\n        readyFlatsButton.style.backgroundColor = 'rgba(255, 138, 0, 0.25)';\n        readyFlatsButton.style.borderColor = '#fff';\n        readyFlatsButton.style.color = '#fff';\n\n        _this.renderFlatsList();\n      });\n    }\n  }, {\n    key: \"filterFlatsList\",\n    value: function filterFlatsList() {\n      var _this2 = this;\n\n      var filteredArray = this.flatsList.filter(function (flat) {\n        var isStudioAndStudiosSelected = _this2.rooms.includes('s') && flat.studio;\n\n        if (_this2.ready) {\n          return Number(flat.delivery) < 2018;\n        }\n\n        if (_this2.rooms.length) {\n          if (!_this2.rooms.includes(flat.roomsQuantity) && !flat.studio) {\n            return false;\n          }\n\n          if (flat.studio && _this2.rooms.length && !_this2.rooms.includes('s')) {\n            return false;\n          }\n        }\n\n        if (_this2.finishDates.length) {\n          if (!_this2.finishDates.includes(flat.delivery)) {\n            return false;\n          }\n        }\n\n        if (_this2.complex.length) {\n          if (!_this2.complex.includes(flat.complex)) {\n            return false;\n          }\n        }\n\n        return true;\n      });\n      return filteredArray;\n    }\n  }]);\n\n  return Filter;\n}();\n\nvar filterEntity = new Filter();\n\nif (document.querySelector('.obj-filter__complex-select')) {\n  filterEntity.fetchFlatsList();\n  $('.obj-filter__complex-select').on('change', function (e) {\n    filterEntity.setFilterOption('complex', $(e.target).select2('val'));\n  });\n  $('.obj-filter__deadline-select').on('change', function (e) {\n    filterEntity.setFilterOption('finishDates', $(e.target).select2('val'));\n  });\n  var roomsForm = document.querySelector('.obj-filter__rooms-wrap');\n  var roomsCheckboxes = roomsForm.querySelectorAll('input[type=\"checkbox\"]');\n  roomsCheckboxes.forEach(function (sel) {\n    sel.addEventListener('change', function (e) {\n      var newRoomsSelection = [];\n      roomsCheckboxes.forEach(function (check) {\n        if (check.checked) newRoomsSelection.push(check.value);\n      });\n      filterEntity.setFilterOption('rooms', newRoomsSelection);\n    });\n  });\n}\n\n//# sourceURL=webpack:///./src/js/filter.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter */ \"./src/js/filter.js\");\n\n$(document).ready(function () {\n  // БУРГЕР\n  $('.main-nav__toggle').click(function (e) {\n    e.preventDefault;\n    $('.main-nav__burger').toggleClass('main-nav__burger--active');\n    $('.main-nav__menu').toggleClass('main-nav__menu--active');\n    $('.page-header__offers-button').toggleClass('page-header__offers-button--active');\n  }); // ВЫПАДАЮЩЕЕ МЕНЮ\n\n  $('.main-nav__link').click(function () {\n    var width = $(window).width();\n    $(this).toggleClass('main-nav__link--active').next().slideToggle();\n\n    if (width >= 1200) {\n      $('.main-nav__link').not(this).removeClass('main-nav__link--active').next().slideUp();\n    }\n  });\n  $('.page-footer__nav-link').click(function () {\n    var width = $(window).width();\n    $(this).toggleClass('page-footer__nav-link--active').next().slideToggle();\n\n    if (width >= 1200) {\n      $('.page-footer__nav-link').not(this).removeClass('page-footer__nav-link--active').next().slideUp();\n    }\n  });\n  $('.files-accardion__title').click(function () {\n    $(this).toggleClass('files-accardion__title--active').next().slideToggle();\n    $('.files-accardion__title').not(this).removeClass('files-accardion__title--active').next().slideUp();\n  });\n  $('.specification__tab').click(function () {\n    $('.specification__tab').removeClass('specification__tab--active');\n    $(this).addClass('specification__tab--active');\n    $('.specification__show').removeClass('specification__show--on');\n    $('.specification__show').eq($(this).index()).addClass('specification__show--on');\n  }); //АККАРДИОН КОММЕРЧ ПОМЕЩЕНИЙ\n\n  $('.object-block__show-btn').click(function (e) {\n    e.preventDefault();\n    $(this).toggleClass('object-block__show-btn--active').next().slideToggle();\n    $('.object-block__show-btn').not(this).removeClass('object-block__show-btn--active').next().slideUp();\n  }); // ПРОМО СЛАЙДЕР\n\n  $('.promo__slider').slick({\n    infinite: true,\n    autoplay: true,\n    autoplaySpeed: 5000,\n    slidesToShow: 1,\n    adaptiveHeight: true\n  }); // СЛАЙДЕР ОБЪЕКТОВ\n\n  $('.objects__slider').slick({\n    infinite: true,\n    slidesToShow: 4,\n    responsive: [{\n      breakpoint: 1200,\n      settings: {\n        centerMode: false,\n        infinite: true,\n        slidesToShow: 3\n      }\n    }, {\n      breakpoint: 768,\n      settings: {\n        centerMode: true,\n        slidesToShow: 1,\n        swipe: true,\n        swipeToSlide: true,\n        centerPadding: '60px'\n      }\n    }]\n  }); // СЛАЙДЕР ОБЩИЙ ВИД\n\n  $('.pictures-slider').slick({\n    slidesToShow: 1,\n    adaptiveHeight: true\n  });\n  var slider = $('.pictures-slider');\n  $('.specification__counts').text(slider.slick('getSlick').slideCount);\n  $('.pictures-slider').on('afterChange', function (event, slick, currentSlide) {\n    this.parentNode.querySelector('.specification__current-count').textContent = currentSlide + 1;\n  }); // СЛАЙДЕР ПЛАНИРОВОК\n\n  $('.plans-slider').slick({\n    slidesToShow: 1,\n    adaptiveHeight: true\n  });\n\n  if (document.querySelector('.obj-filter__complex-select')) {\n    $('.obj-filter__complex-select').select2({\n      minimumResultsForSearch: Infinity,\n      placeholder: 'Все',\n      width: '270px',\n      closeOnSelect: false,\n      data: [{\n        obj: 'centr',\n        text: 'МКР Центральный',\n        id: 'c'\n      }, {\n        obj: 'chd',\n        text: 'ЖК Чудная Долина',\n        id: 'cd'\n      }, {\n        obj: 'saray',\n        text: 'ЖК Павловский',\n        id: 'p'\n      }]\n    });\n    $('.obj-filter__deadline-select').select2({\n      minimumResultsForSearch: Infinity,\n      placeholder: 'Все',\n      width: '100%',\n      closeOnSelect: false,\n      data: [{\n        text: '2019 год',\n        id: 2019\n      }, {\n        text: '2020 год',\n        id: 2020\n      }, {\n        text: '2021 год',\n        id: 2021\n      }, {\n        text: '2022 год',\n        id: 2022\n      }]\n    });\n    $('.obj-filter__deadline-select').on('select2:opening select2:closing', function (event) {\n      var $searchfield = $(this).parent().find('.select2-search__field');\n      $searchfield.prop('disabled', true);\n    });\n    $('.obj-filter__complex-select').on('select2:opening select2:closing', function (event) {\n      var $searchfield = $(this).parent().find('.select2-search__field');\n      $searchfield.prop('disabled', true);\n    });\n  }\n\n  var searchQuery = window.location.search;\n  var complex = window.location.search.split('=')[1];\n\n  if (complex) {\n    if (complex === 'pavlovsky') {\n      $('.obj-filter__complex-select').val(['p']);\n      $('.obj-filter__complex-select').trigger('change');\n    } else if (complex === 'centralny') {\n      $('.obj-filter__complex-select').val(['c']);\n      $('.obj-filter__complex-select').trigger('change');\n    } else if (complex === 'chdolina') {\n      $('.obj-filter__complex-select').val(['chd']);\n      $('.obj-filter__complex-select').trigger('change');\n    }\n  }\n\n  if (['pavlovsky', 'centralny', 'chdolina'].includes(complex)) {\n    _filter__WEBPACK_IMPORTED_MODULE_0__[\"filterEntity\"].renderFlatsList();\n  }\n\n  var linkShaumyana = document.getElementById('linkSh');\n  var linkKoltushi = document.getElementById('linkKoltushi');\n\n  if (linkShaumyana && linkKoltushi) {\n    var mapWrapper = document.querySelector('.contacts-map');\n    linkShaumyana.addEventListener('click', function (e) {\n      e.preventDefault();\n      mapWrapper.innerHTML = '';\n      var newScript = document.createElement('script');\n      newScript.setAttribute('src', 'http://api-maps.yandex.ru/services/constructor/1.0/js/?sid=c78mFLUWc5iUcRZkOF8tx_pebi4uUfEX&amp;width=600&amp;height=450');\n      mapWrapper.appendChild(newScript);\n    });\n    linkKoltushi.addEventListener('click', function (e) {\n      e.preventDefault();\n      mapWrapper.innerHTML = '';\n      var newScript = document.createElement('script');\n      newScript.setAttribute('src', 'http://api-maps.yandex.ru/services/constructor/1.0/js/?sid=jNIMSSaft1IBOkd8f3K2eeumIur6-QJG&amp;width=600&amp;height=450');\n      mapWrapper.appendChild(newScript);\n    });\n  }\n});\n\n//# sourceURL=webpack:///./src/js/script.js?");

/***/ }),

/***/ 0:
/*!***************************************************!*\
  !*** multi ./src/js/filter.js ./src/js/script.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! /Users/gmaslechkin/Documents/ksk_clone/src/js/filter.js */\"./src/js/filter.js\");\nmodule.exports = __webpack_require__(/*! /Users/gmaslechkin/Documents/ksk_clone/src/js/script.js */\"./src/js/script.js\");\n\n\n//# sourceURL=webpack:///multi_./src/js/filter.js_./src/js/script.js?");

/***/ })

/******/ });
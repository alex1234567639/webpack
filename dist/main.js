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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./cal.js":
/*!****************!*\
  !*** ./cal.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//計算函式\r\nfunction calculate(n){\r\n    return n*100 + 'unit'\r\n}\r\n\r\n//字串\r\nvar text = 'hi webpack';\r\n\r\nmodule.exports = {\r\n    name : text,\r\n    cal : calculate\r\n}\r\n\r\nfunction getSize(width, height, depth){\r\n    var area = width*height;\r\n    var volume = width*height*depth;\r\n    var size = [area, volume];;\r\n    return size;\r\n}\r\n\r\nvar areaOne = getSize(3,2,3)[0];\r\nvar volumeOne = getSize(3,2,3)[1];\r\n\r\nconsole.log(areaOne);\r\nconsole.log(volumeOne);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jYWwuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jYWwuanM/OTdjYiJdLCJzb3VyY2VzQ29udGVudCI6WyIvL+ioiOeul+WHveW8j1xyXG5mdW5jdGlvbiBjYWxjdWxhdGUobil7XHJcbiAgICByZXR1cm4gbioxMDAgKyAndW5pdCdcclxufVxyXG5cclxuLy/lrZfkuLJcclxudmFyIHRleHQgPSAnaGkgd2VicGFjayc7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIG5hbWUgOiB0ZXh0LFxyXG4gICAgY2FsIDogY2FsY3VsYXRlXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFNpemUod2lkdGgsIGhlaWdodCwgZGVwdGgpe1xyXG4gICAgdmFyIGFyZWEgPSB3aWR0aCpoZWlnaHQ7XHJcbiAgICB2YXIgdm9sdW1lID0gd2lkdGgqaGVpZ2h0KmRlcHRoO1xyXG4gICAgdmFyIHNpemUgPSBbYXJlYSwgdm9sdW1lXTs7XHJcbiAgICByZXR1cm4gc2l6ZTtcclxufVxyXG5cclxudmFyIGFyZWFPbmUgPSBnZXRTaXplKDMsMiwzKVswXTtcclxudmFyIHZvbHVtZU9uZSA9IGdldFNpemUoMywyLDMpWzFdO1xyXG5cclxuY29uc29sZS5sb2coYXJlYU9uZSk7XHJcbmNvbnNvbGUubG9nKHZvbHVtZU9uZSk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./cal.js\n");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var obj = __webpack_require__(/*! ./cal */ \"./cal.js\");\r\n\r\nconsole.log(obj.cal(10));\r\nconsole.log(obj.name);\r\n\r\ndocument.write(obj.cal(10));\r\n// console.log('ok');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2luZGV4LmpzPzQxZjUiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG9iaiA9IHJlcXVpcmUoJy4vY2FsJyk7XHJcblxyXG5jb25zb2xlLmxvZyhvYmouY2FsKDEwKSk7XHJcbmNvbnNvbGUubG9nKG9iai5uYW1lKTtcclxuXHJcbmRvY3VtZW50LndyaXRlKG9iai5jYWwoMTApKTtcclxuLy8gY29uc29sZS5sb2coJ29rJyk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./index.js\n");

/***/ })

/******/ });
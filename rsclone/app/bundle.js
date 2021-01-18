/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/GameField.js":
/*!**************************!*\
  !*** ./src/GameField.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ GameField\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\n\nvar GameField = function GameField() {\n  var canvas = document.getElementById(\"canvas\");\n  var context = canvas.getContext(\"2d\");\n  context.canvas.width = _constants__WEBPACK_IMPORTED_MODULE_0__.COLS * _constants__WEBPACK_IMPORTED_MODULE_0__.BLOCK_SIZE;\n  context.canvas.height = _constants__WEBPACK_IMPORTED_MODULE_0__.ROWS * _constants__WEBPACK_IMPORTED_MODULE_0__.BLOCK_SIZE; // Устанавливаем масштаб\n\n  context.scale(_constants__WEBPACK_IMPORTED_MODULE_0__.BLOCK_SIZE, _constants__WEBPACK_IMPORTED_MODULE_0__.BLOCK_SIZE); // Set score to 0\n\n  var score = 0;\n};\n\n\nvar gameFielld = new GameField();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL0dhbWVGaWVsZC5qcz84ZDIwIl0sIm5hbWVzIjpbIkdhbWVGaWVsZCIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsIndpZHRoIiwiQ09MUyIsIkJMT0NLX1NJWkUiLCJoZWlnaHQiLCJST1dTIiwic2NhbGUiLCJzY29yZSIsImdhbWVGaWVsbGQiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0lBRXFCQSxTLEdBQ2pCLHFCQUFhO0FBRVQsTUFBTUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBZjtBQUNBLE1BQU1DLE9BQU8sR0FBR0gsTUFBTSxDQUFDSSxVQUFQLENBQWtCLElBQWxCLENBQWhCO0FBRUFELFNBQU8sQ0FBQ0gsTUFBUixDQUFlSyxLQUFmLEdBQXVCQyw0Q0FBSSxHQUFHQyxrREFBOUI7QUFDQUosU0FBTyxDQUFDSCxNQUFSLENBQWVRLE1BQWYsR0FBd0JDLDRDQUFJLEdBQUdGLGtEQUEvQixDQU5TLENBUVQ7O0FBQ0FKLFNBQU8sQ0FBQ08sS0FBUixDQUFjSCxrREFBZCxFQUEwQkEsa0RBQTFCLEVBVFMsQ0FVVDs7QUFDQSxNQUFJSSxLQUFLLEdBQUcsQ0FBWjtBQUVILEM7OztBQUtMLElBQUlDLFVBQVUsR0FBRyxJQUFJYixTQUFKLEVBQWpCIiwiZmlsZSI6Ii4vc3JjL0dhbWVGaWVsZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENPTFMsIFJPV1MsIEJMT0NLX1NJWkUgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lRmllbGR7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xyXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgXHJcbiAgICAgICAgY29udGV4dC5jYW52YXMud2lkdGggPSBDT0xTICogQkxPQ0tfU0laRTtcclxuICAgICAgICBjb250ZXh0LmNhbnZhcy5oZWlnaHQgPSBST1dTICogQkxPQ0tfU0laRTtcclxuICAgICAgICBcclxuICAgICAgICAvLyDQo9GB0YLQsNC90LDQstC70LjQstCw0LXQvCDQvNCw0YHRiNGC0LDQsVxyXG4gICAgICAgIGNvbnRleHQuc2NhbGUoQkxPQ0tfU0laRSwgQkxPQ0tfU0laRSk7XHJcbiAgICAgICAgLy8gU2V0IHNjb3JlIHRvIDBcclxuICAgICAgICBsZXQgc2NvcmUgPSAwO1xyXG4gICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgXHJcbn1cclxuXHJcbmxldCBnYW1lRmllbGxkID0gbmV3IEdhbWVGaWVsZCgpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/GameField.js\n");

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"COLS\": () => /* binding */ COLS,\n/* harmony export */   \"ROWS\": () => /* binding */ ROWS,\n/* harmony export */   \"BLOCK_SIZE\": () => /* binding */ BLOCK_SIZE\n/* harmony export */ });\nvar COLS = 10;\nvar ROWS = 20;\nvar BLOCK_SIZE = 30;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2NvbnN0YW50cy5qcz81ZmIwIl0sIm5hbWVzIjpbIkNPTFMiLCJST1dTIiwiQkxPQ0tfU0laRSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQU8sSUFBTUEsSUFBSSxHQUFHLEVBQWI7QUFDQSxJQUFNQyxJQUFJLEdBQUcsRUFBYjtBQUNBLElBQU1DLFVBQVUsR0FBRyxFQUFuQiIsImZpbGUiOiIuL3NyYy9jb25zdGFudHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQ09MUyA9IDEwO1xyXG5leHBvcnQgY29uc3QgUk9XUyA9IDIwO1xyXG5leHBvcnQgY29uc3QgQkxPQ0tfU0laRSA9IDMwOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/constants.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GameField_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameField.js */ "./src/GameField.js");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
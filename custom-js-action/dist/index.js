/******/ (() => { // webpackBootstrap
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
const name = process.env.INPUT_NAME;

if (!name) {
  console.error("The required input 'name' was not provided.");
  process.exit(1);
}

console.log(`Hello, ${name}!`);

module.exports = __webpack_exports__;
/******/ })()
;
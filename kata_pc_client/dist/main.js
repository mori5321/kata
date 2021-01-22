/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar electron_1 = __webpack_require__(/*! electron */ \"electron\");\nvar mainURL = \"file://\" + __dirname + \"/index.html\";\nvar mainWindow = null;\nvar createWindow = function () {\n    mainWindow = new electron_1.BrowserWindow({\n        width: 600,\n        height: 450,\n        webPreferences: {\n            worldSafeExecuteJavaScript: true,\n            nodeIntegration: false,\n            contextIsolation: true\n        }\n    });\n    mainWindow.loadURL(mainURL);\n    // 開発者ツールも同時に開く\n    mainWindow.webContents.openDevTools();\n    mainWindow.on('closed', function () {\n        mainWindow = null;\n    });\n};\nelectron_1.app.on('ready', createWindow);\nelectron_1.app.on('window-all-closed', function () {\n    electron_1.app.quit();\n});\nelectron_1.app.on('activate', function () {\n    if (mainWindow === null) {\n        createWindow();\n    }\n});\n\n\n//# sourceURL=webpack://kata_pc_client/./src/main.ts?");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

eval("module.exports = require(\"electron\");;\n\n//# sourceURL=webpack://kata_pc_client/external_%22electron%22?");

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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/main.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
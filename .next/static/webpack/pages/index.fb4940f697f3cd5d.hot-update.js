"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/styles.ts":
/*!*****************************!*\
  !*** ./src/pages/styles.ts ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Button: function() { return /* binding */ Button; },\n/* harmony export */   Container: function() { return /* binding */ Container; },\n/* harmony export */   Title: function() { return /* binding */ Title; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nconst Title = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h1`\r\n  text-align: center;\r\n  font-size: 64px;\r\n  color: #000;\r\n  margin-bottom: 20px;\r\n\r\n  @media (max-width: 600px) {\r\n    font-size: 32px;\r\n  }\r\n`;\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`\r\n  align-items: center;\r\n  width: 100%;\r\n  max-width: 985px;\r\n  height: 453px;\r\n  margin: auto;\r\n  background-image: url('/image.png');\r\n  background-size: cover;\r\n  background-position: center;\r\n  padding: 20px;\r\n\r\n  @media (max-width: 600px) {\r\n    height: 200px;\r\n    flex-direction: column;\r\n  }\r\n`;\nconst Button = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button`\r\n  flex-grow: 1;\r\n  margin: 10px;\r\n  height: 83px;\r\n  background-color: ${(props)=>props.color};\r\n  font-family: 'JejuGothic', sans-serif;\r\n  font-size: 48px;\r\n  line-height: 52px;\r\n  color: #000;\r\n  border: none;\r\n  cursor: pointer;\r\n\r\n  @media (max-width: 600px) {\r\n    font-size: 24px;\r\n    line-height: 26px;\r\n    height: 41px;\r\n  }\r\n`;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvc3R5bGVzLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBdUM7QUFNaEMsTUFBTUMsUUFBUUQsNERBQVMsQ0FBQzs7Ozs7Ozs7O0FBUy9CLENBQUMsQ0FBQztBQUdLLE1BQU1HLFlBQVlILDZEQUFVLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQWVwQyxDQUFDLENBQUM7QUFFSyxNQUFNSyxTQUFTTCxnRUFBYSxDQUFjOzs7O29CQUk3QixFQUFFTyxDQUFBQSxRQUFTQSxNQUFNQyxLQUFLLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFhM0MsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9zdHlsZXMudHM/ZWFjOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmludGVyZmFjZSBCdXR0b25Qcm9wcyB7XHJcbiAgY29sb3I6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFRpdGxlID0gc3R5bGVkLmgxYFxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDY0cHg7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA5ODVweDtcclxuICBoZWlnaHQ6IDQ1M3B4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9pbWFnZS5wbmcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uPEJ1dHRvblByb3BzPmBcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGhlaWdodDogODNweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLmNvbG9yfTtcclxuICBmb250LWZhbWlseTogJ0planVHb3RoaWMnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogNDhweDtcclxuICBsaW5lLWhlaWdodDogNTJweDtcclxuICBjb2xvcjogIzAwMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gICAgaGVpZ2h0OiA0MXB4O1xyXG4gIH1cclxuYDtcclxuIl0sIm5hbWVzIjpbInN0eWxlZCIsIlRpdGxlIiwiaDEiLCJDb250YWluZXIiLCJkaXYiLCJCdXR0b24iLCJidXR0b24iLCJwcm9wcyIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/styles.ts\n"));

/***/ })

});
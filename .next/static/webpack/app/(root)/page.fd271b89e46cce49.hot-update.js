"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(root)/page",{

/***/ "(app-pages-browser)/./components/DoughnutChart.tsx":
/*!**************************************!*\
  !*** ./components/DoughnutChart.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ \"(app-pages-browser)/./node_modules/chart.js/dist/chart.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-chartjs-2 */ \"(app-pages-browser)/./node_modules/react-chartjs-2/dist/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_2__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_2__.ArcElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_2__.Legend);\nconst DoughnutChart = (param)=>{\n    let { totalTransaction } = param;\n    const data = {\n        datasets: [\n            {\n                label: \"Type\",\n                data: [\n                    1250,\n                    2500\n                ],\n                backgroundColor: [\n                    \"#2265d8\",\n                    \"#2f91fa\"\n                ]\n            }\n        ],\n        labels: [\n            \"Underpaid\",\n            \"Overpaid\"\n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__.Doughnut, {\n        data: data,\n        options: {\n            cutout: \"60%\",\n            plugins: {\n                legend: {\n                    display: false\n                }\n            }\n        }\n    }, void 0, false, {\n        fileName: \"/Users/dhavansinghal/Documents/Personal Project/Homework/react-app-homework/frontend/components/DoughnutChart.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_c = DoughnutChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DoughnutChart);\nvar _c;\n$RefreshReg$(_c, \"DoughnutChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvRG91Z2hudXRDaGFydC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUMwQjtBQUN3RDtBQUN2QztBQUUzQ0UsMkNBQU9BLENBQUNLLFFBQVEsQ0FBQ0osZ0RBQVVBLEVBQUVDLDZDQUFPQSxFQUFFQyw0Q0FBTUE7QUFHNUMsTUFBTUcsZ0JBQWdCO1FBQUMsRUFBQ0MsZ0JBQWdCLEVBQUs7SUFFM0MsTUFBTUMsT0FBTztRQUNYQyxVQUFVO1lBQ1I7Z0JBQ0VDLE9BQU87Z0JBQ1BGLE1BQU07b0JBQUM7b0JBQUs7aUJBQUs7Z0JBQ2pCRyxpQkFBaUI7b0JBQUM7b0JBQVU7aUJBQVU7WUFDeEM7U0FDRDtRQUNEQyxRQUFPO1lBQUM7WUFBWTtTQUFXO0lBQ2pDO0lBRUEscUJBQ0UsOERBQUNSLHFEQUFRQTtRQUFDSSxNQUFNQTtRQUNoQkssU0FBUztZQUNMQyxRQUFPO1lBQ1BDLFNBQVM7Z0JBQ0xDLFFBQU87b0JBQ0hDLFNBQVE7Z0JBQ1o7WUFDSjtRQUNKOzs7Ozs7QUFHSjtLQXpCTVg7QUEyQk4sK0RBQWVBLGFBQWFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Eb3VnaG51dENoYXJ0LnRzeD82YmFhIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENoYXJ0IGFzIENoYXJ0SlMsIEFyY0VsZW1lbnQsIFRvb2x0aXAsIExlZ2VuZCwgcGx1Z2lucyB9IGZyb20gJ2NoYXJ0LmpzJztcbmltcG9ydCB7IERvdWdobnV0IH0gZnJvbSAncmVhY3QtY2hhcnRqcy0yJztcblxuQ2hhcnRKUy5yZWdpc3RlcihBcmNFbGVtZW50LCBUb29sdGlwLCBMZWdlbmQpO1xuXG5cbmNvbnN0IERvdWdobnV0Q2hhcnQgPSAoe3RvdGFsVHJhbnNhY3Rpb259OmFueSkgPT4ge1xuICBcbiAgY29uc3QgZGF0YSA9IHtcbiAgICBkYXRhc2V0czogW1xuICAgICAge1xuICAgICAgICBsYWJlbDogJ1R5cGUnLFxuICAgICAgICBkYXRhOiBbMTI1MCwyNTAwXSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbJyMyMjY1ZDgnLCcjMmY5MWZhJ11cbiAgICAgIH0sXG4gICAgXSxcbiAgICBsYWJlbHM6WydVbmRlcnBhaWQnLCdPdmVycGFpZCddXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8RG91Z2hudXQgZGF0YT17ZGF0YX0gXG4gICAgb3B0aW9ucz17e1xuICAgICAgICBjdXRvdXQ6JzYwJScsXG4gICAgICAgIHBsdWdpbnM6IHtcbiAgICAgICAgICAgIGxlZ2VuZDp7XG4gICAgICAgICAgICAgICAgZGlzcGxheTpmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfX1cbiAgICAvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERvdWdobnV0Q2hhcnRcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNoYXJ0IiwiQ2hhcnRKUyIsIkFyY0VsZW1lbnQiLCJUb29sdGlwIiwiTGVnZW5kIiwiRG91Z2hudXQiLCJyZWdpc3RlciIsIkRvdWdobnV0Q2hhcnQiLCJ0b3RhbFRyYW5zYWN0aW9uIiwiZGF0YSIsImRhdGFzZXRzIiwibGFiZWwiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsYWJlbHMiLCJvcHRpb25zIiwiY3V0b3V0IiwicGx1Z2lucyIsImxlZ2VuZCIsImRpc3BsYXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/DoughnutChart.tsx\n"));

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(root)/transaction-history/page",{

/***/ "(app-pages-browser)/./components/TransactionReturnForm.tsx":
/*!**********************************************!*\
  !*** ./components/TransactionReturnForm.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TransactionReturnForm: function() { return /* binding */ TransactionReturnForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var _components_ui_alert_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/alert-dialog */ \"(app-pages-browser)/./components/ui/alert-dialog.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_action_transaction_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/action/transaction.actions */ \"(app-pages-browser)/./lib/action/transaction.actions.ts\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./lib/utils.ts\");\n/* __next_internal_client_entry_do_not_use__ TransactionReturnForm,default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction TransactionReturnForm(param) {\n    let { transaction, transactionId } = param;\n    _s();\n    const [IsOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [IsLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    console.log(transactionId);\n    console.log(transactionId);\n    function formFunctionFucked() {\n        return new Promise((resolve, reject)=>{\n            if (transaction) {\n                const result = (0,_lib_action_transaction_actions__WEBPACK_IMPORTED_MODULE_4__.returnTransactionByTransactionId)(transaction === null || transaction === void 0 ? void 0 : transaction.$id);\n                console.log(result);\n                resolve(transaction);\n            } else {\n                // console.log(transaction);\n                reject(transaction);\n            }\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                className: \"shadcn-button bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-1 px-2 border border-green-500 hover:border-transparent rounded-lg \",\n                variant: \"outline\",\n                onClick: ()=>setIsOpen(true),\n                children: \"Returned ?\"\n            }, void 0, false, {\n                fileName: \"/Users/dhavansinghal/Documents/Personal Project/Homework/react-app-homework/frontend/components/TransactionReturnForm.tsx\",\n                lineNumber: 80,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_alert_dialog__WEBPACK_IMPORTED_MODULE_2__.AlertDialog, {\n                open: IsOpen,\n                onOpenChange: ()=>setIsOpen(false),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_alert_dialog__WEBPACK_IMPORTED_MODULE_2__.AlertDialogContent, {\n                    className: \"bg-white\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_alert_dialog__WEBPACK_IMPORTED_MODULE_2__.AlertDialogHeader, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_alert_dialog__WEBPACK_IMPORTED_MODULE_2__.AlertDialogTitle, {\n                                    children: \"Are you absolutely sure?\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/dhavansinghal/Documents/Personal Project/Homework/react-app-homework/frontend/components/TransactionReturnForm.tsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_alert_dialog__WEBPACK_IMPORTED_MODULE_2__.AlertDialogDescription, {\n                                    children: [\n                                        \"Is this vendor returned your full amount? That is Now \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                            children: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_5__.convertNumberToMoney)(transaction === null || transaction === void 0 ? void 0 : transaction.finalAmount)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/dhavansinghal/Documents/Personal Project/Homework/react-app-homework/frontend/components/TransactionReturnForm.tsx\",\n                                            lineNumber: 87,\n                                            columnNumber: 83\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/dhavansinghal/Documents/Personal Project/Homework/react-app-homework/frontend/components/TransactionReturnForm.tsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/dhavansinghal/Documents/Personal Project/Homework/react-app-homework/frontend/components/TransactionReturnForm.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_alert_dialog__WEBPACK_IMPORTED_MODULE_2__.AlertDialogFooter, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_alert_dialog__WEBPACK_IMPORTED_MODULE_2__.AlertDialogCancel, {\n                                    children: \"Cancel\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/dhavansinghal/Documents/Personal Project/Homework/react-app-homework/frontend/components/TransactionReturnForm.tsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_alert_dialog__WEBPACK_IMPORTED_MODULE_2__.AlertDialogAction, {\n                                    onClick: (event)=>{\n                                        formFunctionFucked().then(()=>setIsOpen(false));\n                                        event.preventDefault();\n                                    },\n                                    className: \"add-new-vendor-btn bg-bank-gradient\",\n                                    children: \"Returned\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/dhavansinghal/Documents/Personal Project/Homework/react-app-homework/frontend/components/TransactionReturnForm.tsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/dhavansinghal/Documents/Personal Project/Homework/react-app-homework/frontend/components/TransactionReturnForm.tsx\",\n                            lineNumber: 91,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/dhavansinghal/Documents/Personal Project/Homework/react-app-homework/frontend/components/TransactionReturnForm.tsx\",\n                    lineNumber: 83,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dhavansinghal/Documents/Personal Project/Homework/react-app-homework/frontend/components/TransactionReturnForm.tsx\",\n                lineNumber: 82,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(TransactionReturnForm, \"H6Sb3FsuEjN7UaOmX7wpD0Zuqzs=\");\n_c = TransactionReturnForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TransactionReturnForm);\nvar _c;\n$RefreshReg$(_c, \"TransactionReturnForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvVHJhbnNhY3Rpb25SZXR1cm5Gb3JtLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBSytDO0FBbUNSO0FBS1A7QUFFbUU7QUFDakQ7QUFJM0MsU0FBU1ksc0JBQXNCLEtBQXVEO1FBQXZELEVBQUNDLFdBQVcsRUFBQ0MsYUFBYSxFQUE2QixHQUF2RDs7SUFFbEMsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ1EsV0FBVUMsYUFBYSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUUxQ1UsUUFBUUMsR0FBRyxDQUFDTjtJQUNaSyxRQUFRQyxHQUFHLENBQUNOO0lBQ1osU0FBU087UUFFTCxPQUFTLElBQUlDLFFBQVEsQ0FBQ0MsU0FBU0M7WUFFbkIsSUFBR1gsYUFBWTtnQkFFWCxNQUFNWSxTQUFTZixpR0FBZ0NBLENBQUNHLHdCQUFBQSxrQ0FBQUEsWUFBYWEsR0FBRztnQkFDaEVQLFFBQVFDLEdBQUcsQ0FBQ0s7Z0JBRVpGLFFBQVFWO1lBQ1osT0FDSztnQkFDRCw0QkFBNEI7Z0JBQzVCVyxPQUFPWDtZQUNYO1FBQ0o7SUFDWjtJQUVBLHFCQUNJOzswQkFDSSw4REFBQ2IseURBQU1BO2dCQUFDMkIsV0FBVTtnQkFBdUtDLFNBQVE7Z0JBQVVDLFNBQVMsSUFBTWIsVUFBVTswQkFBUTs7Ozs7OzBCQUU1Tyw4REFBQ2Ysb0VBQVdBO2dCQUFDNkIsTUFBTWY7Z0JBQVFnQixjQUFjLElBQU1mLFVBQVU7MEJBQ3JELDRFQUFDWiwyRUFBa0JBO29CQUFDdUIsV0FBVTs7c0NBQzFCLDhEQUFDcEIsMEVBQWlCQTs7OENBQ2QsOERBQUNDLHlFQUFnQkE7OENBQUM7Ozs7Ozs4Q0FDbEIsOERBQUNILCtFQUFzQkE7O3dDQUFDO3NEQUNrQyw4REFBQzJCO3NEQUFHckIsZ0VBQW9CQSxDQUFDRSx3QkFBQUEsa0NBQUFBLFlBQWFvQixXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBSS9HLDhEQUFDM0IsMEVBQWlCQTs7OENBQ2QsOERBQUNILDBFQUFpQkE7OENBQUM7Ozs7Ozs4Q0FDbkIsOERBQUNELDBFQUFpQkE7b0NBQUMyQixTQUFTLENBQUNLO3dDQUM5Q2IscUJBQXFCYyxJQUFJLENBQUMsSUFBTW5CLFVBQVU7d0NBQzFDa0IsTUFBTUUsY0FBYztvQ0FDckI7b0NBQUdULFdBQVU7OENBQXNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXpEO0dBakRnQmY7S0FBQUE7QUFtRGhCLCtEQUFlQSxxQkFBcUJBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UcmFuc2FjdGlvblJldHVybkZvcm0udHN4P2RmNWIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IHpvZFJlc29sdmVyIH0gZnJvbSBcIkBob29rZm9ybS9yZXNvbHZlcnMvem9kXCJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCJcbmltcG9ydCB7en0gZnJvbSAnem9kJ1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIlxuaW1wb3J0IHtcbiAgRm9ybSxcbiAgRm9ybUNvbnRyb2wsXG4gIEZvcm1GaWVsZCxcbiAgRm9ybUl0ZW0sXG4gIEZvcm1NZXNzYWdlXG59IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvZm9ybVwiXG5cbmltcG9ydCB7XG4gIERpYWxvZyxcbiAgRGlhbG9nQ29udGVudCxcbiAgRGlhbG9nRGVzY3JpcHRpb24sXG4gIERpYWxvZ0hlYWRlcixcbiAgRGlhbG9nVGl0bGUsXG59IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvZGlhbG9nXCJcblxuaW1wb3J0IHtcbiAgICBTZWxlY3QsXG4gICAgU2VsZWN0Q29udGVudCxcbiAgICBTZWxlY3RJdGVtLFxuICAgIFNlbGVjdFRyaWdnZXIsXG4gICAgU2VsZWN0VmFsdWUsXG4gIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9zZWxlY3RcIlxuXG5pbXBvcnQge1xuICAgIEFsZXJ0RGlhbG9nLFxuICAgIEFsZXJ0RGlhbG9nQWN0aW9uLFxuICAgIEFsZXJ0RGlhbG9nQ2FuY2VsLFxuICAgIEFsZXJ0RGlhbG9nQ29udGVudCxcbiAgICBBbGVydERpYWxvZ0Rlc2NyaXB0aW9uLFxuICAgIEFsZXJ0RGlhbG9nRm9vdGVyLFxuICAgIEFsZXJ0RGlhbG9nSGVhZGVyLFxuICAgIEFsZXJ0RGlhbG9nVGl0bGUsXG4gICAgQWxlcnREaWFsb2dUcmlnZ2VyLFxuICB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYWxlcnQtZGlhbG9nXCJcblxuICBcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9pbnB1dFwiXG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvbGFiZWxcIlxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgTG9hZGVyMiB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIlxuaW1wb3J0IHsgYWRkVHJhbnNhY3Rpb24sIHJldHVyblRyYW5zYWN0aW9uQnlUcmFuc2FjdGlvbklkIH0gZnJvbSBcIkAvbGliL2FjdGlvbi90cmFuc2FjdGlvbi5hY3Rpb25zXCJcbmltcG9ydCB7IGNvbnZlcnROdW1iZXJUb01vbmV5IH0gZnJvbSBcIkAvbGliL3V0aWxzXCJcblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBUcmFuc2FjdGlvblJldHVybkZvcm0oe3RyYW5zYWN0aW9uLHRyYW5zYWN0aW9uSWR9OiBUcmFuc2FjdGlvblJldHVybkZvcm1Qcm9wcykge1xuXG4gICAgY29uc3QgW0lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbSXNMb2FkaW5nLHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zb2xlLmxvZyh0cmFuc2FjdGlvbklkKTtcbiAgICBjb25zb2xlLmxvZyh0cmFuc2FjdGlvbklkKTtcbiAgICBmdW5jdGlvbiBmb3JtRnVuY3Rpb25GdWNrZWQgKCkge1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYodHJhbnNhY3Rpb24pe1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSByZXR1cm5UcmFuc2FjdGlvbkJ5VHJhbnNhY3Rpb25JZCh0cmFuc2FjdGlvbj8uJGlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7IFxuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRyYW5zYWN0aW9uKTsgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0cmFuc2FjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QodHJhbnNhY3Rpb24pOyBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cInNoYWRjbi1idXR0b24gYmctdHJhbnNwYXJlbnQgaG92ZXI6YmctZ3JlZW4tNTAwIHRleHQtZ3JlZW4tNzAwIGZvbnQtc2VtaWJvbGQgaG92ZXI6dGV4dC13aGl0ZSBweS0xIHB4LTIgYm9yZGVyIGJvcmRlci1ncmVlbi01MDAgaG92ZXI6Ym9yZGVyLXRyYW5zcGFyZW50IHJvdW5kZWQtbGcgXCIgdmFyaWFudD1cIm91dGxpbmVcIiBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4odHJ1ZSl9ID5SZXR1cm5lZCA/PC9CdXR0b24+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxBbGVydERpYWxvZyBvcGVuPXtJc09wZW59IG9uT3BlbkNoYW5nZT17KCkgPT4gc2V0SXNPcGVuKGZhbHNlKX0+XG4gICAgICAgICAgICAgICAgPEFsZXJ0RGlhbG9nQ29udGVudCBjbGFzc05hbWU9XCJiZy13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8QWxlcnREaWFsb2dIZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QWxlcnREaWFsb2dUaXRsZT5BcmUgeW91IGFic29sdXRlbHkgc3VyZT88L0FsZXJ0RGlhbG9nVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QWxlcnREaWFsb2dEZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJcyB0aGlzIHZlbmRvciByZXR1cm5lZCB5b3VyIGZ1bGwgYW1vdW50PyBUaGF0IGlzIE5vdyA8Yj57Y29udmVydE51bWJlclRvTW9uZXkodHJhbnNhY3Rpb24/LmZpbmFsQW1vdW50KX08L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0FsZXJ0RGlhbG9nRGVzY3JpcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvQWxlcnREaWFsb2dIZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8QWxlcnREaWFsb2dGb290ZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QWxlcnREaWFsb2dDYW5jZWw+Q2FuY2VsPC9BbGVydERpYWxvZ0NhbmNlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBbGVydERpYWxvZ0FjdGlvbiBvbkNsaWNrPXsoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdFx0Zm9ybUZ1bmN0aW9uRnVja2VkKCkudGhlbigoKSA9PiBzZXRJc09wZW4oZmFsc2UpKTtcblx0XHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdH19IGNsYXNzTmFtZT0nYWRkLW5ldy12ZW5kb3ItYnRuIGJnLWJhbmstZ3JhZGllbnQnPlJldHVybmVkPC9BbGVydERpYWxvZ0FjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9BbGVydERpYWxvZ0Zvb3Rlcj5cbiAgICAgICAgICAgICAgICA8L0FsZXJ0RGlhbG9nQ29udGVudD5cbiAgICAgICAgICAgIDwvQWxlcnREaWFsb2c+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJhbnNhY3Rpb25SZXR1cm5Gb3JtXG5cblxuIl0sIm5hbWVzIjpbIkJ1dHRvbiIsIkFsZXJ0RGlhbG9nIiwiQWxlcnREaWFsb2dBY3Rpb24iLCJBbGVydERpYWxvZ0NhbmNlbCIsIkFsZXJ0RGlhbG9nQ29udGVudCIsIkFsZXJ0RGlhbG9nRGVzY3JpcHRpb24iLCJBbGVydERpYWxvZ0Zvb3RlciIsIkFsZXJ0RGlhbG9nSGVhZGVyIiwiQWxlcnREaWFsb2dUaXRsZSIsInVzZVN0YXRlIiwicmV0dXJuVHJhbnNhY3Rpb25CeVRyYW5zYWN0aW9uSWQiLCJjb252ZXJ0TnVtYmVyVG9Nb25leSIsIlRyYW5zYWN0aW9uUmV0dXJuRm9ybSIsInRyYW5zYWN0aW9uIiwidHJhbnNhY3Rpb25JZCIsIklzT3BlbiIsInNldElzT3BlbiIsIklzTG9hZGluZyIsInNldElzTG9hZGluZyIsImNvbnNvbGUiLCJsb2ciLCJmb3JtRnVuY3Rpb25GdWNrZWQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlc3VsdCIsIiRpZCIsImNsYXNzTmFtZSIsInZhcmlhbnQiLCJvbkNsaWNrIiwib3BlbiIsIm9uT3BlbkNoYW5nZSIsImIiLCJmaW5hbEFtb3VudCIsImV2ZW50IiwidGhlbiIsInByZXZlbnREZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/TransactionReturnForm.tsx\n"));

/***/ })

});
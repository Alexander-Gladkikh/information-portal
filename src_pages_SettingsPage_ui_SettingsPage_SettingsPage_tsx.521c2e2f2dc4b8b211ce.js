"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkproduction_project"] = self["webpackChunkproduction_project"] || []).push([["src_pages_SettingsPage_ui_SettingsPage_SettingsPage_tsx"],{

/***/ "./src/features/uiDesignSwitcher/index.ts":
/*!************************************************!*\
  !*** ./src/features/uiDesignSwitcher/index.ts ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UiDesignSwitcher: function() { return /* reexport safe */ _ui_UiDesignSwitcher_UiDesignSwitcher__WEBPACK_IMPORTED_MODULE_0__.UiDesignSwitcher; }\n/* harmony export */ });\n/* harmony import */ var _ui_UiDesignSwitcher_UiDesignSwitcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/UiDesignSwitcher/UiDesignSwitcher */ \"./src/features/uiDesignSwitcher/ui/UiDesignSwitcher/UiDesignSwitcher.tsx\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\n\n\nvar $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nvar $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tvar errorOverlay;\n\t\tif (typeof __react_refresh_error_overlay__ !== 'undefined') {\n\t\t\terrorOverlay = __react_refresh_error_overlay__;\n\t\t}\n\t\tvar testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmVhdHVyZXMvdWlEZXNpZ25Td2l0Y2hlci9pbmRleC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2R1Y3Rpb24tcHJvamVjdC8uL3NyYy9mZWF0dXJlcy91aURlc2lnblN3aXRjaGVyL2luZGV4LnRzPzJlODIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgVWlEZXNpZ25Td2l0Y2hlciB9IGZyb20gJy4vdWkvVWlEZXNpZ25Td2l0Y2hlci9VaURlc2lnblN3aXRjaGVyJztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/features/uiDesignSwitcher/index.ts\n");

/***/ }),

/***/ "./src/features/uiDesignSwitcher/ui/UiDesignSwitcher/UiDesignSwitcher.tsx":
/*!********************************************************************************!*\
  !*** ./src/features/uiDesignSwitcher/ui/UiDesignSwitcher/UiDesignSwitcher.tsx ***!
  \********************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UiDesignSwitcher: function() { return /* binding */ UiDesignSwitcher; }\n/* harmony export */ });\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-i18next */ \"./node_modules/react-i18next/dist/es/useTranslation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _shared_ui_redesigned_Popups__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/shared/ui/redesigned/Popups */ \"./src/shared/ui/redesigned/Popups/index.ts\");\n/* harmony import */ var _shared_ui_redesigned_Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/shared/ui/redesigned/Text */ \"./src/shared/ui/redesigned/Text/index.ts\");\n/* harmony import */ var _shared_lib_features__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/shared/lib/features */ \"./src/shared/lib/features/index.ts\");\n/* harmony import */ var _shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/shared/lib/hooks/useAppDispatch/useAppDispatch */ \"./src/shared/lib/hooks/useAppDispatch/useAppDispatch.ts\");\n/* harmony import */ var _entities_User__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/entities/User */ \"./src/entities/User/index.ts\");\n/* harmony import */ var _shared_ui_redesigned_Stack__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/shared/ui/redesigned/Stack */ \"./src/shared/ui/redesigned/Stack/index.ts\");\n/* harmony import */ var _shared_ui_redesigned_Skeleton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/shared/ui/redesigned/Skeleton */ \"./src/shared/ui/redesigned/Skeleton/index.ts\");\n/* harmony import */ var _shared_lib_render_forceUpdate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/shared/lib/render/forceUpdate */ \"./src/shared/lib/render/forceUpdate.tsx\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\nvar _s = __webpack_require__.$Refresh$.signature();\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst UiDesignSwitcher = /*#__PURE__*/_s( /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(_c = _s(props => {\n  _s();\n  const {\n    className\n  } = props;\n  const {\n    t\n  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_11__.useTranslation)();\n  const isAppRedesigned = (0,_shared_lib_features__WEBPACK_IMPORTED_MODULE_4__.getFeatureFlag)('isAppRedesigned');\n  const dispatch = (0,_shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_5__.useAppDispatch)();\n  const authData = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_entities_User__WEBPACK_IMPORTED_MODULE_6__.getUserAuthData);\n  const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const forceUpdate = (0,_shared_lib_render_forceUpdate__WEBPACK_IMPORTED_MODULE_9__.useForceUpdate)();\n  const items = [{\n    content: t('Новый'),\n    value: 'new'\n  }, {\n    content: t('Старый'),\n    value: 'old'\n  }];\n  const onChange = async value => {\n    if (authData) {\n      setIsLoading(true);\n      await dispatch((0,_shared_lib_features__WEBPACK_IMPORTED_MODULE_4__.updateFeatureFlag)({\n        userId: authData.id,\n        newFeatures: {\n          isAppRedesigned: value === 'new'\n        }\n      })).unwrap();\n      setIsLoading(false);\n      forceUpdate();\n    }\n  };\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_shared_ui_redesigned_Stack__WEBPACK_IMPORTED_MODULE_7__.HStack, {\n    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_shared_ui_redesigned_Text__WEBPACK_IMPORTED_MODULE_3__.Text, {\n      text: t('Вариант интерфейса')\n    }), isLoading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_shared_ui_redesigned_Skeleton__WEBPACK_IMPORTED_MODULE_8__.Skeleton, {\n      width: 100,\n      height: 40\n    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_shared_ui_redesigned_Popups__WEBPACK_IMPORTED_MODULE_2__.ListBox, {\n      onChange: onChange,\n      items: items,\n      value: isAppRedesigned ? 'new' : 'old',\n      className: className\n    })]\n  });\n}, \"DK8W+oOJYUqMQrjGYnqaexfGA+g=\", false, function () {\n  return [react_i18next__WEBPACK_IMPORTED_MODULE_11__.useTranslation, _shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_5__.useAppDispatch, react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector, _shared_lib_render_forceUpdate__WEBPACK_IMPORTED_MODULE_9__.useForceUpdate];\n})), \"DK8W+oOJYUqMQrjGYnqaexfGA+g=\", false, function () {\n  return [react_i18next__WEBPACK_IMPORTED_MODULE_11__.useTranslation, _shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_5__.useAppDispatch, react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector, _shared_lib_render_forceUpdate__WEBPACK_IMPORTED_MODULE_9__.useForceUpdate];\n});\n_c2 = UiDesignSwitcher;\nvar _c, _c2;\n__webpack_require__.$Refresh$.register(_c, \"UiDesignSwitcher$memo\");\n__webpack_require__.$Refresh$.register(_c2, \"UiDesignSwitcher\");\n\nvar $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nvar $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tvar errorOverlay;\n\t\tif (typeof __react_refresh_error_overlay__ !== 'undefined') {\n\t\t\terrorOverlay = __react_refresh_error_overlay__;\n\t\t}\n\t\tvar testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmVhdHVyZXMvdWlEZXNpZ25Td2l0Y2hlci91aS9VaURlc2lnblN3aXRjaGVyL1VpRGVzaWduU3dpdGNoZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBR0E7QUFBQTtBQTVDQTtBQTRDQTtBQTVDQTtBQTRDQTtBQW5EQTtBQUFBO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9kdWN0aW9uLXByb2plY3QvLi9zcmMvZmVhdHVyZXMvdWlEZXNpZ25Td2l0Y2hlci91aS9VaURlc2lnblN3aXRjaGVyL1VpRGVzaWduU3dpdGNoZXIudHN4PzhmZmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IG1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBMaXN0Qm94IH0gZnJvbSAnQC9zaGFyZWQvdWkvcmVkZXNpZ25lZC9Qb3B1cHMnO1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJ0Avc2hhcmVkL3VpL3JlZGVzaWduZWQvVGV4dCc7XG5pbXBvcnQgeyBnZXRGZWF0dXJlRmxhZywgdXBkYXRlRmVhdHVyZUZsYWcgfSBmcm9tICdAL3NoYXJlZC9saWIvZmVhdHVyZXMnO1xuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2ggfSBmcm9tICdAL3NoYXJlZC9saWIvaG9va3MvdXNlQXBwRGlzcGF0Y2gvdXNlQXBwRGlzcGF0Y2gnO1xuaW1wb3J0IHsgZ2V0VXNlckF1dGhEYXRhIH0gZnJvbSAnQC9lbnRpdGllcy9Vc2VyJztcbmltcG9ydCB7IEhTdGFjayB9IGZyb20gJ0Avc2hhcmVkL3VpL3JlZGVzaWduZWQvU3RhY2snO1xuaW1wb3J0IHsgU2tlbGV0b24gfSBmcm9tICdAL3NoYXJlZC91aS9yZWRlc2lnbmVkL1NrZWxldG9uJztcbmltcG9ydCB7IHVzZUZvcmNlVXBkYXRlIH0gZnJvbSAnQC9zaGFyZWQvbGliL3JlbmRlci9mb3JjZVVwZGF0ZSc7XG5cbmludGVyZmFjZSBVaURlc2lnblN3aXRjaGVyUHJvcHMge1xuICAgIGNsYXNzTmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IFVpRGVzaWduU3dpdGNoZXIgPSBtZW1vKChwcm9wczogVWlEZXNpZ25Td2l0Y2hlclByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUgfSA9IHByb3BzO1xuICAgIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgICBjb25zdCBpc0FwcFJlZGVzaWduZWQgPSBnZXRGZWF0dXJlRmxhZygnaXNBcHBSZWRlc2lnbmVkJyk7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xuICAgIGNvbnN0IGF1dGhEYXRhID0gdXNlU2VsZWN0b3IoZ2V0VXNlckF1dGhEYXRhKTtcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IGZvcmNlVXBkYXRlID0gdXNlRm9yY2VVcGRhdGUoKTtcblxuICAgIGNvbnN0IGl0ZW1zID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBjb250ZW50OiB0KCfQndC+0LLRi9C5JyksXG4gICAgICAgICAgICB2YWx1ZTogJ25ldycsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IHQoJ9Ch0YLQsNGA0YvQuScpLFxuICAgICAgICAgICAgdmFsdWU6ICdvbGQnLFxuICAgICAgICB9LFxuICAgIF07XG5cbiAgICBjb25zdCBvbkNoYW5nZSA9IGFzeW5jICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGlmIChhdXRoRGF0YSkge1xuICAgICAgICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgICAgICAgICAgYXdhaXQgZGlzcGF0Y2goXG4gICAgICAgICAgICAgICAgdXBkYXRlRmVhdHVyZUZsYWcoe1xuICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IGF1dGhEYXRhLmlkLFxuICAgICAgICAgICAgICAgICAgICBuZXdGZWF0dXJlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNBcHBSZWRlc2lnbmVkOiB2YWx1ZSA9PT0gJ25ldycsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICApLnVud3JhcCgpO1xuICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIGZvcmNlVXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEhTdGFjaz5cbiAgICAgICAgICAgIDxUZXh0IHRleHQ9e3QoJ9CS0LDRgNC40LDQvdGCINC40L3RgtC10YDRhNC10LnRgdCwJyl9IC8+XG4gICAgICAgICAgICB7aXNMb2FkaW5nID8gKFxuICAgICAgICAgICAgICAgIDxTa2VsZXRvbiB3aWR0aD17MTAwfSBoZWlnaHQ9ezQwfSAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8TGlzdEJveFxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtpdGVtc31cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2lzQXBwUmVkZXNpZ25lZCA/ICduZXcnIDogJ29sZCd9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L0hTdGFjaz5cbiAgICApO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/features/uiDesignSwitcher/ui/UiDesignSwitcher/UiDesignSwitcher.tsx\n");

/***/ }),

/***/ "./src/pages/SettingsPage/ui/SettingsPage/SettingsPage.tsx":
/*!*****************************************************************!*\
  !*** ./src/pages/SettingsPage/ui/SettingsPage/SettingsPage.tsx ***!
  \*****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ \"./node_modules/react-i18next/dist/es/useTranslation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _shared_ui_redesigned_Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/shared/ui/redesigned/Text */ \"./src/shared/ui/redesigned/Text/index.ts\");\n/* harmony import */ var _widgets_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/widgets/Page */ \"./src/widgets/Page/index.ts\");\n/* harmony import */ var _shared_ui_redesigned_Stack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/shared/ui/redesigned/Stack */ \"./src/shared/ui/redesigned/Stack/index.ts\");\n/* harmony import */ var _features_uiDesignSwitcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/features/uiDesignSwitcher */ \"./src/features/uiDesignSwitcher/index.ts\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\nvar _s = __webpack_require__.$Refresh$.signature();\n\n\n\n\n\n\n\n\nconst SettingsPage = /*#__PURE__*/_s( /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(_c = _s(props => {\n  _s();\n  const {\n    className\n  } = props;\n  const {\n    t\n  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)();\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_widgets_Page__WEBPACK_IMPORTED_MODULE_2__.Page, {\n    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_shared_ui_redesigned_Stack__WEBPACK_IMPORTED_MODULE_3__.VStack, {\n      gap: \"16\",\n      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_shared_ui_redesigned_Text__WEBPACK_IMPORTED_MODULE_1__.Text, {\n        title: t('Настройки пользователя')\n      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_features_uiDesignSwitcher__WEBPACK_IMPORTED_MODULE_4__.UiDesignSwitcher, {})]\n    })\n  });\n}, \"zlIdU9EjM2llFt74AbE2KsUJXyM=\", false, function () {\n  return [react_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation];\n})), \"zlIdU9EjM2llFt74AbE2KsUJXyM=\", false, function () {\n  return [react_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation];\n});\n_c2 = SettingsPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SettingsPage);\nvar _c, _c2;\n__webpack_require__.$Refresh$.register(_c, \"SettingsPage$memo\");\n__webpack_require__.$Refresh$.register(_c2, \"SettingsPage\");\n\nvar $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nvar $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tvar errorOverlay;\n\t\tif (typeof __react_refresh_error_overlay__ !== 'undefined') {\n\t\t\terrorOverlay = __react_refresh_error_overlay__;\n\t\t}\n\t\tvar testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvU2V0dGluZ3NQYWdlL3VpL1NldHRpbmdzUGFnZS9TZXR0aW5nc1BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQVZBO0FBVUE7QUFWQTtBQVVBO0FBRUE7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9kdWN0aW9uLXByb2plY3QvLi9zcmMvcGFnZXMvU2V0dGluZ3NQYWdlL3VpL1NldHRpbmdzUGFnZS9TZXR0aW5nc1BhZ2UudHN4P2IyN2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IG1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnQC9zaGFyZWQvdWkvcmVkZXNpZ25lZC9UZXh0JztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICdAL3dpZGdldHMvUGFnZSc7XG5pbXBvcnQgeyBWU3RhY2sgfSBmcm9tICdAL3NoYXJlZC91aS9yZWRlc2lnbmVkL1N0YWNrJztcbmltcG9ydCB7IFVpRGVzaWduU3dpdGNoZXIgfSBmcm9tICdAL2ZlYXR1cmVzL3VpRGVzaWduU3dpdGNoZXInO1xuXG5pbnRlcmZhY2UgU2V0dGluZ3NQYWdlUHJvcHMge1xuICAgIGNsYXNzTmFtZT86IHN0cmluZztcbn1cblxuY29uc3QgU2V0dGluZ3NQYWdlID0gbWVtbygocHJvcHM6IFNldHRpbmdzUGFnZVByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUgfSA9IHByb3BzO1xuICAgIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxQYWdlPlxuICAgICAgICAgICAgPFZTdGFjayBnYXA9XCIxNlwiPlxuICAgICAgICAgICAgICAgIDxUZXh0IHRpdGxlPXt0KCfQndCw0YHRgtGA0L7QudC60Lgg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPJyl9IC8+XG4gICAgICAgICAgICAgICAgPFVpRGVzaWduU3dpdGNoZXIgLz5cbiAgICAgICAgICAgIDwvVlN0YWNrPlxuICAgICAgICA8L1BhZ2U+XG4gICAgKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBTZXR0aW5nc1BhZ2U7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/SettingsPage/ui/SettingsPage/SettingsPage.tsx\n");

/***/ })

}]);
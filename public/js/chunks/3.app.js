(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./resources/js/src/views/User/index.js":
/*!**********************************************!*\
  !*** ./resources/js/src/views/User/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\n\n\nvar user = function user(props) {\n  console.log(props);\n  var modal = props.datatable.modal;\n  var openModal = props.openModal;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Table User\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: function onClick() {\n      return openModal();\n    }\n  }, \"buka modal\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"open modal : \", modal ? 1 : 0));\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    datatable: state.datatable\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    openModal: function openModal() {\n      return dispatch({\n        type: 'OPEN_MODAL'\n      });\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, mapDispatchToProps)(user));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvc3JjL3ZpZXdzL1VzZXIvaW5kZXguanM/N2Y5NiJdLCJuYW1lcyI6WyJ1c2VyIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwibW9kYWwiLCJkYXRhdGFibGUiLCJvcGVuTW9kYWwiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwidHlwZSIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFBQyxLQUFLLEVBQUk7QUFDbEJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBRGtCLE1BRVhHLEtBRlcsR0FFSUgsS0FBSyxDQUFDSSxTQUZWLENBRVhELEtBRlc7QUFBQSxNQUdYRSxTQUhXLEdBR0lMLEtBSEosQ0FHWEssU0FIVztBQUtsQixzQkFDSSxxRkFDSSxvRkFESixlQUVJO0FBQVEsV0FBTyxFQUFFO0FBQUEsYUFBTUEsU0FBUyxFQUFmO0FBQUE7QUFBakIsa0JBRkosZUFHSSx1RkFBaUJGLEtBQUssR0FBRyxDQUFILEdBQU8sQ0FBN0IsQ0FISixDQURKO0FBT0gsQ0FaRDs7QUFjQSxJQUFNRyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUFDLEtBQUssRUFBSTtBQUM3QixTQUFNO0FBQ0ZILGFBQVMsRUFBRUcsS0FBSyxDQUFDSDtBQURmLEdBQU47QUFHSCxDQUpEOztBQU1BLElBQU1JLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQUMsUUFBUSxFQUFJO0FBQ25DLFNBQU07QUFDRkosYUFBUyxFQUFFO0FBQUEsYUFBTUksUUFBUSxDQUFDO0FBQUNDLFlBQUksRUFBRTtBQUFQLE9BQUQsQ0FBZDtBQUFBO0FBRFQsR0FBTjtBQUdILENBSkQ7O0FBTWVDLDBIQUFPLENBQUNMLGVBQUQsRUFBa0JFLGtCQUFsQixDQUFQLENBQTZDVCxJQUE3QyxDQUFmIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL3NyYy92aWV3cy9Vc2VyL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuY29uc3QgdXNlciA9IHByb3BzID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHByb3BzKTtcclxuICAgIGNvbnN0IHttb2RhbH0gICAgICAgPSBwcm9wcy5kYXRhdGFibGU7XHJcbiAgICBjb25zdCB7b3Blbk1vZGFsfSAgID0gcHJvcHM7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMT5UYWJsZSBVc2VyPC9oMT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvcGVuTW9kYWwoKX0+YnVrYSBtb2RhbDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8cD5vcGVuIG1vZGFsIDoge21vZGFsID8gMSA6IDB9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgZGF0YXRhYmxlOiBzdGF0ZS5kYXRhdGFibGUsXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHtcclxuICAgIHJldHVybntcclxuICAgICAgICBvcGVuTW9kYWw6ICgpID0+IGRpc3BhdGNoKHt0eXBlOiAnT1BFTl9NT0RBTCd9KSxcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykodXNlcik7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/src/views/User/index.js\n");

/***/ })

}]);
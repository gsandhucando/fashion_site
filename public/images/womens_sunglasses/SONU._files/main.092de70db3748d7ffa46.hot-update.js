webpackHotUpdate("main",{

/***/ "./src/pages/Item.js":
/*!***************************!*\
  !*** ./src/pages/Item.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_gsandhu916_Desktop_projects_fashion_site_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _components_ItemImgDisplay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ItemImgDisplay */ "./src/components/ItemImgDisplay.js");
/* harmony import */ var _components_ItemDiscDisplay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ItemDiscDisplay */ "./src/components/ItemDiscDisplay.js");
/* harmony import */ var _babel_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/types */ "./node_modules/@babel/types/lib/index.js");
/* harmony import */ var _babel_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_types__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "/Users/gsandhu916/Desktop/projects/fashion_site/src/pages/Item.js";






const ChevronLeft = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faChevronLeft"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
});
const styles = {
  item: {
    display: "grid",
    // justifyContent: "center",
    gridTemplateColumns: "1fr 2fr 1fr" // background: 'salmon'

  },
  button: {
    height: 50,
    width: 130,
    margin: 10,
    background: "#333",
    color: "white",
    fontSize: "20px"
  },
  moddle: {
    background: "rgba(128,128,128,0.8)",
    position: "absolute",
    top: "0%",
    height: "100vh",
    width: "100vw"
  },
  moddleCard: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    height: '300px',
    width: '300px',
    background: 'white',
    transform: 'translate(-50%, -50%)'
  }
};

const Item = props => {
  let _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_Users_gsandhu916_Desktop_projects_fashion_site_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      toggleClick = _useState2[0],
      setToggleClick = _useState2[1];

  let checkoutPreview = () => {
    setToggleClick(true);
    console.log("clicked");
  };

  let moddle = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: styles.moddle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: styles.moddleCard,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }));
  let id = props.match.params.id;
  let price = props.location.state.price;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: styles.item,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, toggleClick ? moddle : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: () => props.history.goBack(),
    style: styles.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, ChevronLeft, " back"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ItemImgDisplay__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: id,
    items: props.location.state.menu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ItemDiscDisplay__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: id,
    toggleClick: checkoutPreview,
    price: price,
    items: props.location.state,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Item);

/***/ })

})
//# sourceMappingURL=main.092de70db3748d7ffa46.hot-update.js.map
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home() {
  return _react.default.createElement("div", null, _react.default.createElement("h2", {
    className: "align"
  }, "This is the home page"), _react.default.createElement("img", {
    className: "align",
    src: "assets/images/image-1.jpg"
  }));
};

var _default = Home;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var About = function About() {
  return _react.default.createElement("div", null, _react.default.createElement("h2", {
    className: "align"
  }, "This is the about page"), _react.default.createElement("img", {
    className: "align",
    src: "assets/images/image-2.jpg"
  }));
};

var _default = About;
exports.default = _default;
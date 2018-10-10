"use strict";

var _server = require("react-dom/server");

var _app = _interopRequireDefault(require("./app"));

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function render(req) {
  var context = {};
  var content = (0, _server.renderToString)(_react.default.createElement(_reactRouterDom.StaticRouter, {
    context: context,
    location: req.url
  }, _react.default.createElement(_app.default, null)));
  return {
    content: content
  };
};
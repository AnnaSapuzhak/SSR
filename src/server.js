import { renderToString } from 'react-dom/server'
import App from './app'
import React from 'react';
import { StaticRouter } from "react-router-dom";

module.exports = function render(req) {
  const context = { };
  let content = renderToString(
    <StaticRouter context={ context } location={ req.url }>
      <App />
    </StaticRouter>
  );
  return {content};
}

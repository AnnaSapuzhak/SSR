"use strict";

// html skeleton provider
function template(title, content) {
  var page = "<!DOCTYPE html>\n                <html lang=\"en\">\n                <head>\n                  <meta charset=\"utf-8\">\n                  <title> ".concat(title, " </title>\n                  <link href=\"assets/style.css\" rel=\"stylesheet\">\n                </head>\n                <body>\n                  <div id=\"app\">").concat(content, "\n                  </div>                \n                <script src=\"assets/bundle.js\"></script>\n                </body>\n                ");
  return page;
}

module.exports = template;
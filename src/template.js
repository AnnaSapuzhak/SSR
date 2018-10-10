// html skeleton provider
function template(title , content ){
    let page = `<!DOCTYPE html>
                <html lang="en">
                <head>
                  <meta charset="utf-8">
                  <title> ${title} </title>
                  <link href="assets/style.css" rel="stylesheet">
                </head>
                <body>
                  <div id="app">${content}
                  </div>                
                <script src="assets/bundle.js"></script>
                </body>
                `;
  
    return page;
}
  
  module.exports = template;
  
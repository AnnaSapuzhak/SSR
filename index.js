const express = require('express'),
          app = express(),
     template = require('./views/template'),
         path = require('path');

const ssr = require('./views/server');

// Serving static files
app.use('/assets', express.static(path.resolve(__dirname, 'assets')));

// hide powered by express
app.disable('x-powered-by');

// start the server
app.listen(process.env.PORT || 3004);

app.get('/*', (req, res) => {
      const {content} = ssr(req)

      const response = template("Server Rendered Page", content);
      res.setHeader('Cache-Control', 'assets, max-age=604800');
      res.send(response);
    }
);

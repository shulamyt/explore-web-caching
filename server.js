const express = require('express');
const path = require('path');

const app = express();

var staticOptions = {
  setHeaders: function (res, path, stat) {
  	console.log(path);
    res.setHeader('Cache-Control', 'public, max-age=3600');
  }
};

app.use(express.static(path.join(__dirname, './'), staticOptions));

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log('http://localhost:' + port + '/');
});

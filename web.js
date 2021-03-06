var express = require('express');

var app = express.createServer(express.logger());

app.get('*', function(request, response) {
  console.log(JSON.stringify(request.headers));
  response.redirect(process.env.NEW_BASE_URL + request.url)
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

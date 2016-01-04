var express = require('express');
var serve = express();
serve.use(express.static(__dirname + '/web'));
serve.set('port', (process.env.PORT || 6789));
serve.listen(serve.get('port'), function () {
  console.log('Node app of Messe München is running at localhost:' + serve.get('port'));
});

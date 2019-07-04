const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(process.cwd(), 'build')));

app.set('port', (process.env.PORT || 8405));

app.get('/', function(req, res) {
  res.sendFile(path.join(process.cwd(), 'build', 'index.html'));
});

app.listen(app.get('port'), function() {
  console.log("Deploy-Offline is started !! (port : " + app.get('port') + ")");
});
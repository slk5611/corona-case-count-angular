// Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/corona-case-count-angular'));

// tslint:disable-next-line:only-arrow-functions
app.get('/*', function(req, res) {

    res.sendFile(path.join(__dirname + '/dist/corona-case-count-angular/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8085);
console.log('Running app on PORT http://localhost:8085/');

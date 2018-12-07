var express = require('express');
var app = express();
var PORT = process.env.PORT || 5000;

app.get('/',function(req, res) {
	res.send("Welcome to the demo")
});
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
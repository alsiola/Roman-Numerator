var express = require('express');
var app = express();

require('dotenv').load();

app.use(express.static('build'));

app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
    console.log("Server listening at", process.env.IP + ":" + process.env.PORT);
});

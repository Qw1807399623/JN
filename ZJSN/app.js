const express=require('express');
const bodyParser=require('body-parser');
const apiRouter=require('./routes/api.js');
var app=express();
app.listen(8080);
app.use(express.static('html'));
app.use(bodyParser.urlencoded({
 extended:false
}))
app.use('/zjsn',apiRouter);



var express=require ('express');
var app =express();


var customercontroller=function(){
var obj =[{name:"ash",id:2},
{name:"ash",id:2},
{name:"ash",id:2}];
resp.send(obj);
}

app.get('/ved',customercontroller);

var server=app.listen(8000,function(){
var host =server.address().address
var port =server.address().port
console.log("Example app listening at http://localhost:8088", host, port)
)}
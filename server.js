const express= require("express");
var app=express();
const {join}=require("path");
const path=require("path");
app.get("/",function(req,resp){
    resp.sendFile(path.join(__dirname,"./Public/shashank.html"))
});
app.listen(3000);
console.log("Server has started");
/*var count=34;
count++;
console.log("Server is running");
console.log(count);


//CTL + SHIFT + C   

*/

var express =require("express");  //lib-----Node Module
var app=express();  // will create app object from express package

var onAboutUs=function(req, res){
    res.send("Harish Domale");
};
var onDefault=function(req, res){
    res.send("<h1>Online Shopping</h1>"+
              "<hr/>"+
              "<ol>"+
                    " <li>Electronic</li>"+
                    " <li>Home Appliance</li>"+
                    " <li>Furniture</li>"+
                    " <li>Fasshion</li>"+
             "</ol>");
};
app.get("/",onDefault);  // Request handler functions are registered
app.get("/aboutus",onAboutUs);  // Request handler functions are registered
var server=app.listen(9090);
console.log("Server is running on port 9090");
// if external packages are required
// we have to download those packages from internet using  package manager tool
// Runtime--------tools-------------packages-----------------------config file
// Java-----------maven--------------.jar files----------------------pom.xml
// Android--------graddle------------android jar file----------------pom.xml
// Python---------pip----------------Python libraries----------------
// .NET ---------Nugget--------------dll files-----------------------package.config
// NodeJS----------npm --------------download node modules-----------package.json 

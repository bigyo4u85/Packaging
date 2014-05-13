/**
 * Request handling logic.
 *
 * @author Balázs Csernai
 * @created 2014.03.23.
 */
var fs = require("fs");
var qs = require("querystring");

function handlePackages(request, response) {
    var data = "";
    request.addListener("data", function(dataChunk) {
        console.log("Chunk: " + dataChunk);
        data += dataChunk;
    });
    request.addListener("end", function() {
       response.write('<!DOCTYPE html><html><head><meta http-equiv="Content-Type" content="text/html" charset="UTF-8"/><title>Packages</title></head><body>' + handleData(data) + '<form action="packages" name="package" method="post"><fieldset><legend>Package</legend><label>name</label><input type="text" name="name"><label>width</label><input type="text" name="width"><label>height</label><input type="text" name="height"><label>weight</label><input type="text" name="weight"></fieldset><input type="submit" value="add"></form></body></html>');
       response.end();
    });
}

function handleDefault(response) {
    response.write("Ooops! Not found.");
    response.end();
}

function handleData(data) {
    var parsedData = qs.parse(data);
    return '<label>name</label><input type="text" name="name" value="' + parsedData["name"] +
        '" disabled><label>width</label><input type="text" name="width" value="' + parsedData["width"] +
        '" disabled><label>height</label><input type="text" name="height" value="' + parsedData["height"] +
        '" disabled><label>weight</label><input type="text" name="weight" value="' + parsedData["weight"] + '" disabled>';
}

exports.packages = handlePackages;
exports.default = handleDefault;
/**
 * Request handling logic.
 *
 * @author Balázs Csernai
 * @created 2014.03.23.
 */
var fileSystem = require("fs");

function handlePackages(requestParams, response) {
    response.write(fileSystem.readFileSync("./html/packages.html"));
}

function handleDefault(response) {
    response.write("Ooops! Not found.");
}

exports.packages = handlePackages;
exports.default = handleDefault;
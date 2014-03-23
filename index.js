/**
 * Entry point logic.
 *
 * @author Balázs Csernai
 * @created 2014.03.23.
 */
var server = require("./server/server");
var router = require("./server/router");
var handlers = require("./server/handlers");

var requestHandlers = {
    "/packages" : handlers.packages
};

console.log("Starting packaging server.");
server.start(router.route, requestHandlers, handlers.default);


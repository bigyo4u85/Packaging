/**
 * Packaging server logic.
 *
 * @author Balázs Csernai
 * @created 2014.03.23.
 */
var http = require("http");
var url = require("url");

/**
 * Starts the server logic.
 *
 * @param requestRouter Routes the incoming requests
 * @param requestHandlers Responds to the incoming requests
 */
function startServer(requestRouter, requestHandlers, defaultRequestHandler) {

    /**
     * Callback for incoming requests.
     *
     * @param request Incoming request
     * @param response Blank response
     */
    function onRequest(request, response) {
        var requestPath = url.parse(request.url).pathname;
//        var requestParams = url.parse(request.url).search;

        requestRouter(requestHandlers, defaultRequestHandler, requestPath, request, response);
    }

    http.createServer(onRequest).listen(8880);
    console.log("Packaging server has been started.");
}

exports.start = startServer;



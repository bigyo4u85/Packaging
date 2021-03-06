/**
 * Request router logic.
 *
 * @author Balázs Csernai
 * @created 2014.03.23.
 */

function routeRequest(requestHandlers, defaultRequestHandler, requestPath, request, response) {

    if (typeof requestHandlers[requestPath] === 'function') {
        response.writeHeader(200, {"Content-Type" : "text/html"});
        requestHandlers[requestPath](request, response);
    } else {
        response.writeHeader(404, {"Content-Type" : "text/plain"});
        defaultRequestHandler(response);
    }

}

exports.route = routeRequest;
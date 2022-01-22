const ExpressError = require("./expressError");

function logger(req, res, next) {
    console.log(`Received a ${req.method} request to ${req.path}`);
    return next();
}
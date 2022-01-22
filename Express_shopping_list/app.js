const express = require("express");
const morgan = require("morgan");
const ExpressError = require("./expressError");
const app = express();
const ExpressError = require("./middleware");
const itemsRoutes = require("./routes/items")


app.use(middleware.logger);
app.use(express.json());
app.use(morgan('dev'));
app.use("/items", itemsRoutes);

//404 Handler
app.use(function(req, res, next) {
    return next(new ExpressError("Not Found", 404))
});

//Error handler
app.use(function(req, res, next) {
    let status = err.status || 500;
    return res.status(status).json({
        error: {
            message: err.message,
            status: status
        }
    });
});



module.exports = app;
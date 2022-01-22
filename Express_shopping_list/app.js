const express = require("express");
const ExpressError = require("./expressError");
const itemRoutes = require("./itemsRoutes");

const app = express();
app.use(express.json());
app.use("/items", itemRoutes);

//404 Handler
app.use(function(req, res, next) {
    return next(new ExpressError("Not Found", 404));
});

//General error handler
app.use(function(req, res, next) {
    let status = err.status || 500;
    return res.status(status).json({
        error: {
            message: err.message,
            status: status
        }
    });
});

app.listen(3000, function() {
    console.log("Server is listening on port 3000");
});
const express = require("express");
const morgan = require("morgan");
const ExpressError = require("./expressError");
const
const port = 3000;

const app = express();
app.use(express.json());
app.use(morgan('dev'));

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

app.listen(port, () => {
    console.log(`Listening on app: http://localhost${port}`);
})
const express = require("express");
const router = new express.Router();
const ExpressError = require("../expressError")
const items = require("../fakeDb");

router.get("/", function(req, res, next) {
    res.json({ items })
});
router.post("/", function(req, res, next) {
    const newItem = { name: req.body.name, price: req.body.name };
    items.push(newItem);
    res.status(201).json({ item: newItem });
})

router.get("/items", function(req, res, next) {
    res.json({ items })
});

router.post("/:name", function(req, res, next) {

});

router.get("/items/:name", function(req, res, next) {

});

router.patch("/items/:name", function(req, res, next) {

});

router.delete("/items/:name", function(req, res, next) {

});

module.exports = router;
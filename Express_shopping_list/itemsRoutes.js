const express = require("express");
const ExpressError = require("./expressError");
const router = new express.Router();
// const ExpressError = require("../expressError");

// const items = require("../fakeDb")
const items = [
    { name: "popsicle", price: 1.45 },
    { name: "cheerios", price: 3.4 }
];

router.get("/", function(req, res) {
    return res.json({ items });
});

/* POST /
items - this route should accept JSON data and add it to the shopping list.
Here is what a sample request / response looks like:

    {“ name”: ”popsicle”, “price”: 1.45 } => {“ added”: {“ name”: “popsicle”, “price”: 1.45 } } */

router.post("/", function(req, res) {
    console.log(req.body);
    const newItem = { name: req.body.name, price: req.body.price };
    items.push(newItem);
    console.log(newItem);
    res.status(201).json({ item: newItem });
});

/* 3. GET /items/:name - this route should display a single item’s name and price.
Here is what a sample response looks like:
{“name”: “popsicle”, “price”: 1.45}*/

router.get("/:name", function(req, res) {
    const singleItem = items.find((item) => item.name === req.params.name);
    // const singleItem = items.find(item => item.name && item.price === req.params.name)
    if (singleItem === undefined) {
        throw new ExpressError("Item not found", 404);
    }
    res.json({ name: singleItem });
});

/* 4. PATCH /items/:name, this route should modify a single item’s name and/or price.
Here is what a sample request/response looks like:

{“name”:”new popsicle”, “price”: 2.45} => {“updated”: {“name”: “new popsicle”, “price”: 2.45}} */
router.patch("/:name", function(req, res) {
    const singleItem = items.find((item) => item.name === req.params.name);
    console.log(singleItem);
    // const singleItem = items.find(item => item.name && item.price === req.params.name)
    if (singleItem === undefined) {
        throw new ExpressError("Item not found", 404);
    }
    singleItem.name = req.body.name;
    singleItem.price = req.body.price;
    return res.json({ item: singleItem });
});

/* 5. DELETE /items/:name - this route should allow you to delete a specific item from the array.
Here is what a sample response looks like:
{message: “Deleted”} */

router.delete("/:name", function(req, res) {
    const singleItem = items.findIndex((item) => item.name === req.params.name);
    if (singleItem === -1) {
        throw new ExpressError("Item not found", 404);
    }
    items.splice(singleItem, 1);
    res.json({
        message: "Deleted"
    });
});

module.exports = router;
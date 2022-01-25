process.env.NODE_ENV = "test";

const request = require("supertest");

const app = require("../app");
const items = require("./fakeDb");

let candy = { name: "Gummy Bears", price: 1.99 };

beforeEach(function() {
    items.push(candy);
});
afterEach(function() {
    items.length = 0;
});

describe("GET /items", async function() {
    test("Get all items", async function() {
        const res = await request(app).get("/");
        // expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ items: [candy] });
        // expect(res.body).toEqual({ items: [{ name: "Gummy Bears", price: 1.99 }] })
        //debugger;
    })
})

describe("GET /items/:name", () => {
    test("Get item by name", async() => {
        const res = await request(app).get(`/items/${candy.name}`);
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ item: candy })
    })
    test("Responds with 404 for invalid item", async() => {
        const res = await request(app).get(`/items/Umaibo`);
        expect(res.statusCode).toBe(404);
        expect(res.body).toEqual({ item: candy })
    })
})


describe("POST /items", () => {
    test("Create an item", async() => {
        const res = await request(app).post("/").send({ name: "Bubblegum", price: 0.99 });
        expect(res.statusCode).toBe(201);
        expect(res.body).toEqual({ item: { name: "Bubblegum", price: 0.99 } });
    })
})

describe("PATCH /items/:name", () => {
    test("Updates a single item", async() => {
        const res = await request(app).patch(`/items/${candy.name}`).send({ name: "Dubble Bubble", price: 1.29 });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ newItem: { name: "Dubble Bubble", price: 1.29 } });
    })
    test("Responds with 404 for invalid item", async() => {
        const res = await request(app)
            .patch(`/items/fkgjhd`)
            .send({ name: "Dubble Bubble", price: 1.29 });
        expect(res.statusCode).toBe(404);
        d
    })
})

describe("DELETE /items/:name", () => {
    test("Deletes a single item", async() => {
        const res = await request(app).delete(`/items/${candy.name, candy.price}`);
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ message: "Deleted" });
    })
    test("Responds with 404 for invalid item", async() => {
        const res = await request(app)
            .patch(`/items/cxnvkeu`)
            .send({ name: "Dubble Bubble", price: 1.29 });
        expect(res.body).toBe(404);
        expect(res.body).toEqual({ message: "Deleted" });
    })
})
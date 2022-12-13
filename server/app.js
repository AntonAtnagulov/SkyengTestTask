require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const items = require("./fakeDB");

const PORT = process.env.PORT || 3100;
const app = express();

const basket = [];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "static")));
app.use(express.static(path.join(process.cwd(), "public")));

app.use(cookieParser());
app.use(
    cors({
        credentials: true,
        origin: [PORT, process.env.CLIENT_URL],
    })
);

app.get("/items", (req, res) => {
    res.json(items);
});

app.post("/add", (req, res) => {
    const arr = basket.map((el) => JSON.stringify(el));
    if (!arr.includes(JSON.stringify(req.body))) {
        basket.push(req.body);
    }
    res.json(req.body);
});

app.get("/cart", (req, res) => {
    res.json(basket);
});

app.post("/cart", (req, res) => {

})

app.delete("/cart/:id", (req, res) => {
    basket.forEach((el, i) => {
        if (el.id == req.params.id) {
            basket.splice(i, 1);
        }
    });
    res.end();
});

app.listen(PORT, () => {
    console.log(`server start at ${PORT}`);
});

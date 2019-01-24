require('dotenv').config();
const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const booksList = require('./booklist.json')
const item = require('./item.json')
const product = require('./products.json')
const productId = require('./productid.json')

app.set("views", "./src/views");
app.set("view engine", "pug");

app.use("/static", express.static("./public"));

app.get("/", (request, response) => {
  response.render("index", {
    projectTitle: "MY OWN FANCY PROJECT"
  });
});

app.get("/docs/books/list", (request, response) => {
  response.render("books_list", {
    name: "GET /books",
    endpoint: "https://api.myownfancyproject.com/rest/v2/books",
    list: booksList
  });
});

app.get("/docs/books/item", (request, response) => {
  response.render("books_item", {
    name: "GET Books Item",
    endpoint: "https://api.myownfancyproject.com/rest/v2/books/{id}",
    list: item
  });
});

app.get("/docs/products/list", (request, response) => {
  response.render("products_list", {
    name: "GET /products",
    endpoint: "https://api.myownfancyproject.com/rest/v2/products",
    list: product
  });
});

app.get("/docs/products/item", (request, response) => {
  response.render("products_item", {
    name: "GET /products/:id",
    endpoint: "https://api.myownfancyproject.com/rest/v2/products/{id}",
    list: productId
  });
});

app.listen(PORT, () => {
  console.log(`Running on PORT ${ PORT }`)
});

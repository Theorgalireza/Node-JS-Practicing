const express = require("express");
require("dotenv").config();
const app = express();
const connectDB = require("./db/connect");
const productsRouter = require('./routes/products')
const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");
require('express-async-errors')




//MiddleWare
app.use(express.json());

//Routes
app.get("/", (req, res) => {
  res.send('<h1>Store API</H1> <a href="/api/v1/products">Products Routes</a>');
});

app.use("/api/v1/products",productsRouter)

//Products Routes

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is running on port ${port}.`);
    });
  } catch (err) {
    console.log("DataBase Is Not Connecting!");
  }
};
start();

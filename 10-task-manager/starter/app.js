const { connectDB } = require("./db/connect");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const tasks = require("./routes/task");
require("dotenv").config();
const notFound = require("./middleware/notfound");
const errorHandlerMiddleware = require("./middleware/Error-Handler");

//middleware
app.use(express.static("./public"));
app.use(express.json());

//routes
app.use("/api/v1/tasks", tasks);

//Not Found Error
app.use(notFound);

//error handling
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      //we start server just if we connected to the db
      console.log(`Server Is Running On Port ${port}.`);
    });
  } catch (err) {
    console.log(err);
  }
};
start();

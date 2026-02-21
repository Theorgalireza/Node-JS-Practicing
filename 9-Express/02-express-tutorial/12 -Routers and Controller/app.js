const express = require("express");
const app = express();
const people = require("./router/people");
const login = require('./router/login')
//static assets
app.use([express.static("./methods-public")]);
//parse form data
app.use(express.urlencoded({ extended: false }));
//parse json
app.use(express.json());

//routers
app.use("/api/people", people);
app.use("/login", login);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

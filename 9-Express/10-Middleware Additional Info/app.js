const express = require("express");
const app = express();
const logger = require('./logger')
const authorize = require('./authorize')
const morgan = require('morgan')

//1. use vs route
//2.options - create our own / express / third party
// app.use(express.static("./public"));
app.use(morgan('dev'))

//Order Matters
// app.use([logger,authorize])



app.get("/",[logger,authorize],(req,res)=>{
  console.log(req.user);
  
  res.send("Home")
})
app.get("/about",(req,res)=>{

  res.send("About")
})


// app.get("/",(req,res)=>{
//   const data = {method: req.method, url: req.url, date: new Date().getFullYear()}
//   console.log(data);
//   res.send("Home")
// })
// app.get("/about",(req,res)=>{
//   const data = {method: req.method, url: req.url, date: new Date().getFullYear()}
//   console.log(data);
//   res.send("About")
// })
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

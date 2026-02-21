const { readfile } = require("fs");

const getText = (path) => { //We Make The Promise Here / Wrapper Function
  return new Promise((resolve, reject) => {
    readfile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};
// readfile ('./','utf8',(err,data)=>{
//     if(err){
//         return
//     }
//     else{
//         console.log(data);
//     }
// })
getText("./content/first.txt") //Handling With Promise Things or Consume promise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// Executer Async / Await
const start = async () => { //Create a New Async Function For Executing And Handling Promise In Async Await Way
  try {
    const data = await getText("./content/first.txt"); //Promise
    const second = await getText("./content/second.txt"); //Promise
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
start() 
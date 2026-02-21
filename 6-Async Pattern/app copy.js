const { readFile,writeFile } = require("fs").promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)






const start = async () => { //Create a New Async Function For Handling Promise In Async Await Way
  try {
    const data = await readFile("./content/first.txt",'utf8'); //Promise
    const result = await readFile("./content/second.txt",utf)
    await writeFile(path,"This is Awesome",{flag:'a'})
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};    
start()

// const getText = (path) => { //We Make The Promise Here
//   return new Promise((resolve, reject) => {
//     readfile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };
// readfile ('./','utf8',(err,data)=>{
//     if(err){
//         return
//     }
//     else{
//         console.log(data);
//     }
// })
// getText("./content/first.txt") //Handling With Promise Things
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });


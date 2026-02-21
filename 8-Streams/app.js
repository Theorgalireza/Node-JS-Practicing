const {createReadStream} = require('fs');
const Stream = require('stream');
const stream = createReadStream("./Big.txt",{highWaterMark: 9000,encoding: 'utf8'})

// deafault 64kb
// last buffer - remainder
//highWaterMark - control panel
// const stream = createReadStream("./Big.txt",{highWaterMark: 9000})
// const stream = createReadStream("./Big.txt",{encoding: 'utf8'})


stream.on("data",(result)=>{
    console.log(result);
    
})

stream.on('error',(err)=>{
    console.log(err);
    
})
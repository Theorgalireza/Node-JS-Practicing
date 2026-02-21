//Commonjs, every file is module {by deafault}
//Module, Encapsulate Code {only share minimum}
// const john = 'john'
// const peter = 'peter'

// const sayHi = (name)=>{
//     console.log(`Hi ${name}`);
// }

const names = require('./names')
const sayHi = require('./utills')
require('./MindGrenade')
sayHi(names.john)
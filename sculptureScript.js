const sculptureList = require('./data.js'); // import data.js

let counter = 0;

const sculptureListLengths = [];

for(let i = 0; i < sculptureList.length; i++){
    const element = sculptureList[i];
    const temp = {};
    for (let key in element) {
        if (element.hasOwnProperty(key)){
            temp[key] = element[key].length;
        }
    }
    
    sculptureListLengths.push(temp);
    counter += 1;
}

console.log(sculptureListLengths);


// this following snippet is just to show how to iterate an object's keys
// comment this out in your solution!
// for (const key in element){
//     console.log(`${key}: ${element[key].length}`)
// }
const sculptureList = require('./data.js');     // import data.js

let counter = 0;                                // counter to iterate loop

const sculptureListLengths = [];           

for(let i = 0; i < sculptureList.length; i++){  // iterates through sculptureList elements
    const element = sculptureList[i];
    const temp = {};                            // placeholder for updating key lengths into sculptureListLengths element
    for (let key in element) {                  // iterates through the keys in a sculptureList element
        if (element.hasOwnProperty(key)){       // if the element owns its key, the key length is copied into the temp 
            temp[key] = element[key].length;
        }
    }
    
    sculptureListLengths.push(temp);            // temp is added as an element to sculptureListLengths
    counter += 1;                               // increase counter by 1
}

console.log(sculptureListLengths);              // prints out the sculptureListLengths


// this following snippet is just to show how to iterate an object's keys
// comment this out in your solution!
// for (const key in element){
//     console.log(`${key}: ${element[key].length}`)
// }

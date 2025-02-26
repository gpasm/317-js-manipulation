# 317-js-manipulation

const sculptureList = require('./data.js');

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

const jsonData = require('./Data.json');
console.log(jsonData);

if((jsonData.id)!== "1"){
    throw new Error("not one")
}
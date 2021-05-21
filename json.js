"use strict";

let person = {
    "firstName" : "Alice",
    "lastName" : "Jones"
};
console.log(person);

// JSON serialization
let personString = JSON.stringify(person);
console.log(personString);

// JSON deserialization
let personParsed = JSON.parse(personString);
console.log(personParsed);
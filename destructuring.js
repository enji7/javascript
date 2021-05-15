let arr = ["one", "two", "three", "four"];

// assigning the array's elements to the given variables in one go:
let [first, second, ...rest] = arr;

console.log(first);
console.log(second);
console.log(rest);

let obj = {
    firstName: "Alice",
    lastName: "Jones",
    birthYear: "1995",
    school: "Home Schooling"
};

// assigning the object's properties to the given variables in one go:
let { firstName, lastName, ...objRest } = obj;

console.log(firstName);
console.log(objRest);
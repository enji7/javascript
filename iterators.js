let arr = ["a", "b", "c"];

// classic for loop
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.log("********");

// for...of
for (let elem of arr) {
    console.log(elem);
}

console.log("********");

// Array.forEach
arr.forEach((value, index) => console.log(`${index}: ${value}`));

console.log("********");

/** Creates an iterator from 3 to 5. */
function* createIterator() {
    for (let i = 3; i <= 5; i++) {
        yield i;
    }
}

let iter = createIterator();
for (let elem of iter) {
    console.log(elem);
}

console.log("********");

/** Creates an iterator from 3 to 5. */
function* createIteratorExplicit() {
    yield 3;
    yield 4;
    yield 5;
}

iter = createIteratorExplicit();
for (let elem of iter) {
    console.log(elem);
}

console.log("********");

/** Creates an iterator from 3 to 5. */
function* createIteratorExplicitShort() {
    // "yield*" iterates over its operand
    yield* [3, 4, 5];
}

iter = createIteratorExplicitShort();
for (let elem of iter) {
    console.log(elem);
}

"use strict";

/**
 * Simple function.
 */
function greet(name) {
    console.log(`invoking ${name} function!`);
}

// invoking the simple function
greet("simple");

/**
 * Function that takes another function as input.
 */
function execute(executeMe, param) {
    console.log("---------------");
    console.log("about to execute the passed function with the given parameter...");
    executeMe(param);
    console.log("done executing this function!");
}

// invoking the executor with the simple function as input
execute(greet, "passed simple");

// invoking the executor with an anonymous function as input
execute(function(param) { console.log(`invoking ${param} function`); }, "anonymous");

// invoking the executor with an arrow function as input
execute((param) => console.log(`invoking ${param} function`), "arrow");

// functions can also be assigned to variables, which then become aliases to this function
console.log("---------------");
const alias = greet;
const alias1 = alias;
alias("aliased");
alias1("aliased-1");

/**
 * You don't have to declare the arguments that you pass into a function.
 * Use the "arguments" object to gain access to these anonymous parameters.
 */
function argsAreOkayForMe() {
    console.log("the arguments object:");
    console.log(arguments);
    for (let i = 0; i < arguments.length; i++) {
        console.log(`argument ${i}: ${arguments[i]}`);
    }
}

console.log("---------------");
argsAreOkayForMe("first", "second");

/**
 * You can define default values for missing parameters.
 */
function defaultParams(first = "first", second) {
    console.log(`first: ${first}`);
    console.log(`second: ${second}`);
}

console.log("---------------");
defaultParams();

/**
 * Resembles usage of the implicit arguments object, but uses a semi-explicit array with three-dot syntax instead.
 */
function restParameters(...args) {
    console.log("an array of arguments:");
    console.log(args);
    for (let i = 0; i < args.length; i++) {
        console.log(`argument ${i}: ${args[i]}`);
    }
}

console.log("---------------");
restParameters("first", "second");
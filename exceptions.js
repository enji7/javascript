"use strict";

// throw and catch the built-in Error object;
// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error;
// can be extended to add user-defined exceptions (see below)
try {
    throw new Error("error message");
}
catch (e) {
    // Error has certain pre-defined properties:
    console.log(`name: ${e.name}, message: ${e.message}`);
    // also logs the stack trace:
    console.log(e);
}
finally {
    console.log("finally is always executed");
}

// you can throw just about anything (even though throwing dedicated exception objects is more useful)
try {
    throw "thrown string";
}
catch (e) {
    console.log(e);
}

/** Example for a custom error that adds an error code. */
class ErrorWithCode extends Error {

    constructor(message, code) {
        super(message);
        this.code = code;
    }

}

/** Example for a custom error that adds an error reason. */
class ErrorWithReason extends Error {

    constructor(message, reason) {
        super(message);
        this.reason = reason;
    }

}

try {
    throw new ErrorWithCode("ce1", "E-42");
} catch (e) {
    console.log(e);   
}

try {
    throw new ErrorWithReason("ce1", "some arbitrary reason object");
} catch (e) {
    console.log(e);   
}
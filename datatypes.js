"use strict";

function printType(v) {
    let vString = v;
    if (typeof v === "symbol") {
        // symbols are not auto-converted to strings
        vString = v.toString();
    }
    console.log(`${vString} is of type ${typeof v}`);    
}

// primitive types ***********************

// undefined
printType(undefined);

// boolean
printType(true);

// number
printType(42);
printType(42.3);
printType(NaN);

// string
printType("foo");

// bigint
printType(84n);

// symbol
printType(Symbol("xyz"));

// structural types ***********************

// object
printType({ a: 1});    // object literal
printType([1, 2, 3]);  // array literal
printType(/ab+c/);     // regexp literal
printType(null);

// function
printType(() => 42);

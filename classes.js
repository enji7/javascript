"use strict";

/**
 * Class definition.
 */
class Person {

    // field definition
    species = "human";

    /** 
     * Special constructor function (invoked by "new").
     */
    constructor(firstName, lastName, birthYear) {
        // there is no explicit definition of these member variables
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
    }

    /** 
     * Getter for dynamically computing a property.
     */ 
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    /**
     * Normal method.
     */
    greet() {
        return `Hello, I'm ${this.firstName}. How are you?`;
    }

}

// classes have to be defined first before you can use them (no "hoisting")
let alice = new Person("Alice", "Jones", "1995");
let bob = new Person("Bob", "Smith", 1990);

console.log(alice);
console.log(bob);

// trick for also logging the variable names:
console.log({alice, bob});

// nice tabular display:
console.table({alice, bob});

// properties can be directly accessed (no getter / setter necessary)
console.log(`Alice was born in ${alice.birthYear}`);

// getters look like normal properties to the invoker
console.log(`Alice's full name is ${alice.fullName}`);

// access to explicitly definied properties: just the same
console.log(`Alice is a ${alice.species} being`);

// normal method invocation
console.log(alice.greet());

/**
 * Inheritance.
 */
class Pupil extends Person {

    constructor(firstName, lastName, birthYear, school) {
        // calling the super class constructor
        super(firstName, lastName, birthYear);
        this.school = school;
    }

    /**
     * Overriding a superclass method.
     */
    greet() {
        return `${super.greet()} I am going to ${this.school}`;
    }

}

let jake = new Pupil("Jake", "Jackson", 2010, "Home School");

console.log(jake.greet());
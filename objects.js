// object initializer
let alice = {

    /** Field definition, */
    firstName: "Alice",
    lastName: "Jones",
    birthYear: "1995",

    /**
     * Normal method.
     */
    greet: function() {
        return `Hello, I'm ${this.firstName}. How are you?`;
    }

};

// properties can be directly accessed (no getter / setter necessary)
console.log(`Alice was born in ${alice.birthYear}`);

// normal method invocation
console.log(alice.greet());

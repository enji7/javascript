"use strict";

/**
 * Long-running function.
 * @param {number} ms number of milliseconds to run
 * @param {boolean} success indicating whether to simulate success or failure
 * @returns a Promise with success or failure payload
 */
function longRunner(ms, success) {
    return new Promise((resolve, reject) => { 
        if (success) {
            setTimeout(() => resolve("resolve payload"), ms);
        }
        else {
            setTimeout(() => reject("reject payload"), ms);
        }
    });
}

/** Demo for Promise usage. */
async function demo() {

    console.log("one");

    // successful promise
    await longRunner(1000, true)
        .then(resolve => console.log(`resolved: ${resolve}`))
        .catch(reject => console.log(`rejected: ${reject}`));

    console.log("two");

    // failed promise
    await longRunner(1000, false)
        .then(resolve => console.log(`resolved: ${resolve}`))
        .catch(reject => console.log(`rejected: ${reject}`));

}

console.log("before invoking asynchronous demo...");
demo();
console.log("after invoking asynchronous demo");
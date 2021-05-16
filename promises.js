"use strict";

/**
 * Long-running function. Wraps the old, callback-style "setTimeout" with a Promise.
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

/** 
 * Demo for Promise usage. 
 * @returns implicitly a Promise itself, because this is an async function
 */
async function demo() {

    // Promise handling with then-catch-finally (success)
    longRunner(1000, true)
        .then(resolve => `adapted ${resolve}`)
        .then(resolve => console.log(`resolved: ${resolve}`))
        .catch(reject => console.log(`rejected: ${reject}`));

    // Promise handling with then-catch-finally (failure)
    longRunner(1000, false)
        .then(resolve => console.log(`resolved: ${resolve}`))
        .catch(reject => console.log(`rejected: ${reject}`));

    // Promise handling with "await" (success)
    let successPayload = await longRunner(1000, true);
    console.log(`resolved (await): ${successPayload}`);

    // Promise handling with "await" (failure)
    try {
        successPayload = await longRunner(1000, false);
        console.log("should not reach");
    }
    catch (failurePayload) {
        console.log(`rejected (await): ${failurePayload}`);
    }
    
    return "demo done!";

}

console.log("before invoking asynchronous demo...");

demo().then(console.log);

console.log("after invoking asynchronous demo");
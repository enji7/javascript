// exports & imports require modules,
// and modules require the ".mjs" extension in Node.js (or a package.json with appropriate type declaration)

class ExportMe1 {

    greet() {
        console.log("I am an export hit #1!");
    }

}

class ExportMe2 {

    greet() {
        console.log("I am an export hit #2!");
    }

}

// instead of listing the exports like this, we could have written "export class ExportMe1" above
export { ExportMe1, ExportMe2 };
// normal exports have to be imported with curly braces
import { ExportMe1, ExportMe2 } from "./exports.mjs";

// default exports don't need curly braces, and can be renamed on-the-fly without "as" syntax:
import ExMe3 from "./exports-default.mjs";

new ExportMe1().greet();
new ExportMe2().greet();

new ExMe3().greet();
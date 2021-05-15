"use strict";

// standard log output:
console.log("Hello World!");

// level-based log output:
console.debug("debug level")
console.info("level info");
console.warn("level warn");
console.error("level error");

// grouping (=indenting) log messages:
console.group("group header 1");
console.log("inside first group")
console.group("group header 2");
console.log("inside second group")
console.groupEnd();
console.groupEnd();

// see 'classes.js' for an example of 'console.table()'

/* 
 * For more infos on the console object, see
 * https://developer.mozilla.org/en-US/docs/Web/API/Console
 */

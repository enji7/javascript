// no difference between double and single quotes;
// double quotes are more Java-like;
// single quotes are useful directly inside HTML code
let doubleQuotes = "string with double quotes";
let singleQuotes = 'string with single quotes';

// backtick notation allows for
// * embedded expressions
// * implicit line breaks (without "\n\")
let backtick = `You can use either
 "${doubleQuotes}"
 or
 '${singleQuotes}'
`;

console.log(backtick);
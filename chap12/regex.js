/* /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g */

let text = "I love JavaScript! nodejs react";

let textMatch = text.match(/javascript|nodejs|react/gi);
console.log("textMatch", textMatch);
console.log(text.match(/javascript/i));
// i - case insensitive
console.log("-----------------");

let aZAz = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890";

let aZAzMatch = aZAz.match(/[a-zA-Z0-9]/g);

console.log(aZAzMatch);

console.log("--------textDot---------");

let textDot = "Just some text.";

console.log(
  "/./g =",
  textDot.match(/./g),
  "/./ =",
  textDot.match(/./),
  "/./g =",
  textDot.match(/\./g)
);
console.log("-----------------");
// special characters

let textSpecialD = "I'm 29 years old.";

console.log(textSpecialD.match(/\d/g));

let textSpecialS = "Coding is a lot of fun!";
console.log(textSpecialS.match(/\s/g));

let textSpecialB = "In the end or at the beginning?";
console.log(textSpecialB.match(/\bin/gi));

console.log("-----------------");

// groups
let textGroup = "I love JavaScript!";
console.log(textGroup.match(/(love|dislike)\s(javascript|spiders)/gi));

let textGroupTwo = "I love JavaScript!";
console.log(
  textGroupTwo.match(/[a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9]/g)
);
console.log("-----------------");

let needTextOrNot = "You are doing great!";
console.log(needTextOrNot.match(/n?g/gi));

let moreTextRepeat = "465123456789123a";

console.log(moreTextRepeat.match(/(123)+/g));

console.log(moreTextRepeat.match(/(123)*a/));

let textRepeatMinMax = "abcasdabcwrqerabc";
console.log(textRepeatMinMax.match(/(?<MinMax>abc){1,2}/));

console.log("-----------------");

// practical use of regex

let searchText = "The quick brown fox jumps over the lazy dog case.";

console.log(searchText.search(/Case/i));

let textReplaceMatch = "Coding is fun. Coding opens up a lot of opportunities.";
console.log(textReplaceMatch.replace(/Coding/g, "JavaScript"));


/* email validation 
[name]@[domain].[extension]
*/


let emailExample = "h8HgK@example.com";
let emailExampleRegEx = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,6})/
// const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/g;


let validEmailTest = "maaike_1234@gmail.com";

let invalidEmailTest = "maoole@gmail.com"

console.log(validEmailTest.match(emailExampleRegEx));
console.log(invalidEmailTest.match(emailExampleRegEx));


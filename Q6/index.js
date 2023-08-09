"use strict";
//stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
//name with white spaces.
let personName = "\t     Muhammad Bilal     \n ";
console.log("Name with White spaces:", personName);
//stripped name
let strippedName = personName.trim();
console.log("name with out white spaces:", strippedName);

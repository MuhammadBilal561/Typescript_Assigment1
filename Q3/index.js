"use strict";
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName = "Muhammad Bilal";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
const titleCase = personName
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
console.log(titleCase);

// More Conditional Tests: You don’t have to limit the number of tests you create to 10.
//  If you want to try more comparisons, write more tests.
//  Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

// ........................................................solutoin;



// Tests for equality and inequality with strings


let names='bilal';
// equality


console.log(names=='bilal');

// inequality


console.log(names==='Bilal');

//Tests using the lower case function

let city='PAKISTAN';

// "equality"

console.log(city.toLowerCase()=='pakistan');

// inequality


console.log(city.toLowerCase()=='PAKISTAN')



// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

//  equality 

let age=18;
console.log(age==18);

// inequality

console.log(age!=18);

// greater than 
console.log(age>18);

// and less than

console.log(age<18);

// greater than or equal to,

console.log(age>=18);



// less than or equal to,

console.log(age<=18);

// Tests using "and" and "or" operators

let percentage=85;

// and operator

console.log(percentage==80 && percentage>=85 );


// or operators

console.log(percentage==85 || percentage>=90);



// • Test whether an item is in a array
// 1

let fruits:string[]=['orange','apple','mango','banana','lemon'];

console.log(fruits.includes('apple'));

// 2

console.log(fruits.includes('pineapple'));


// • Test whether an item is not in a array

// 1

console.log(!fruits.includes('lemon'));

// 2

console.log(!fruits.includes('pear'));


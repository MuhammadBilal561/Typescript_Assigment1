// Animals: Think of at least three different animals that have a common characteristic. 
// Store the names of these animals in a list, 
// and then use a for loop to print out the name of each animal. 
// • Modify your program to print a statement about each animal, such as A dog would make a great pet. 
// • Add a line at the end of your program stating what these animals have in common. 
// You could print a sentence such as Any of these animals would make a great pet!

// ............................


// three animals having common characteristics

let animals:string[]=['dog','cat','rabbit'];

// use for loop to print names of these animals

for(let animal of animals){
    console.log(animal)
};

// modify for loops

for(let animal of animals){
    console.log(`A ${animal} would make a great pet.`)
};

// add a statement at the end for common characterisitic

console.log(`Any of these animals would make a great pet!`);




let guestList:string[]=["ALI","Ahmed","Hamza"];

guestList.forEach((guestName)=>{
    console.log(`Dear ${guestName},You are cordially invited to a dinner party at my place.`)
});

// guest who can't make dinner

console.log(`Unfortunately, ${guestList[2]} can't make it to the dinner.`);

// replace guest

guestList[2]="usama";

// new invitation


guestList.forEach((guestName)=>
{console.log(`Dear ${guestName},You are cordially invited to a dinner party at my place.`)
});

console.log("NEW LIST")


 /*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. •
 Use append() to add one new guest to the end of your list. 
 • Print a new set of invitation messages, 
 one for each person in your list.*/


// Add one new guest to the beginning of your array.


guestList.unshift("Bilal");

// Add one new guest to the middle of your array. •

guestList.splice(2,0,"tayyab");

// add one new guest to the end of your list. 

guestList.push('Umer');

//new invitation 

guestList.forEach((guestName)=>
{console.log(`Dear ${guestName},You are invited to a dinner party at my place.`)
});



/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
 and you have space for only two guests.
• Start with your program from Exercise 16.
 Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. 
Each time you pop a name from your list, 
print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list.
 Print your list to make sure you actually have an empty list at the end of your program.*/

//  messege

 let message:string="I can invite only two people for dinner";
 console.log(message)

//  removing guest until two guest remain

console.log(`Dear ` + guestList.pop() +` I am  sorry I can't invite you to dinner.`)


console.log(`Dear ` + guestList.pop() +` I am  sorry I can't invite you to dinner.`)

console.log(`Dear ` + guestList.pop() +` I am  sorry I can't invite you to dinner.`)

console.log(`Dear ` + guestList.pop() +` I am  sorry I can't invite you to dinner.`)

// guest who still remain

console.log('Dear '+guestList[0] +" and "+ guestList[1]+ ` you are still invited.`)

// removing last two guest 

guestList.pop();
guestList.pop();

// empty list

console.log(guestList);













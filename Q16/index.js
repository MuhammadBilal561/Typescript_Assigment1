"use strict";
let guestList = ["ALI", "Ahmed", "Hamza"];
/*guestList.forEach((guestName)=>{
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
guestList.splice(2, 0, "tayyab");
// add one new guest to the end of your list. 
guestList.push('umer');
//new invitation 
guestList.forEach((guestName) => {
    console.log(`Dear ${guestName},You are invited to a dinner party at my place.`);
});

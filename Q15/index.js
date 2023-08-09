"use strict";
/* Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.*/
let guestList = ["ALI", "Ahmed", "Hamza"];
guestList.forEach((guestName) => {
    console.log(`Dear ${guestName},You are cordially invited to a dinner party at my place.`);
});
// guest who can't make dinner
console.log(`Unfortunately, ${guestList[2]} can't make it to the dinner.`);
// replace guest
guestList[2] = "usama";
// new invitation
guestList.forEach((guestName) => {
    console.log(`Dear ${guestName},You are cordially invited to a dinner party at my place.`);
});

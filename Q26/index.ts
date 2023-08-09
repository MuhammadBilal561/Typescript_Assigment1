/*Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.*/

// version that run if block

let alien_Color = "green";

if(alien_Color=="green"){
    console.log('You just earned 5 points.' )
}
else{
    console.log('you just earned 10 points')
};

// version that run else block

if (alien_Color=='red'){
    console.log('You just earned 5 points')
}
else{
    console.log('You just earned 10 points')
};
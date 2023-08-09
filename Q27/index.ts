/*Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.*/

//ex1

let alien_Color="green";

if(alien_Color=="green"){
    console.log("You just earned 5 points.")
}
else if (alien_Color=="yellow"){
    console.log('you just earned 10 Points.')
}
else if (alien_Color=="red"){
    console.log("you just earned 10 points.")
}


//ex2

let alien_Color1="yellow";


if(alien_Color1=="green"){
    console.log("You just earned 5 points.")
}
else if (alien_Color1=="yellow"){
    console.log('you just earned 10 Points.')
}
else if (alien_Color1=="red"){
    console.log("you just earned 10 points.")
}



//ex3

let alien_Color2="red";


if(alien_Color2=="green"){
    console.log("You just earned 5 points.")
}
else if (alien_Color2=="yellow"){
    console.log('you just earned 10 Points.')
}
else if (alien_Color2=="red"){
    console.log(`you just earned 15 points.`)
}






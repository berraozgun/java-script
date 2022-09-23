const secretNumber= Math.floor(Math.random() * 100);
let userGuess=null
let trial=0

while (userGuess !== secretNumber){
    userGuess=prompt("guess the number")
    trial++;
    alert("guess number: "+ trial)

    if (userGuess<secretNumber){
        alert("Go up!")
    }

    else if (userGuess>secretNumber){
        alert("Go DOWN!")
    }

    else if(userGuess==secretNumber){
        alert("congrats! you WON!")
        break;
    }
    else {
        alert("Stop playing around! Enter a valid number!!")

    }

    if(trial>4){
        alert ("Game over. The number was " + secretNumber)
        break;
    }

}
function startGame() {
const max = prompt("enter a max number");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("guess the number");

while(true){
    if(guess == "quit"){
        alert("user quit");
        break;
    }

    if(guess == random){
        alert(`you are right! congrats!! random number was ${random}`);
        break;
    }
    else if(guess < random){
        guess = prompt("hint : your guess was too small. please try to think more large again");
    }
    else{
        guess = prompt("hint : your guess was too large. please try to think more small again");
    }
}

}
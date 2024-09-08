let computerGuess;
let userGuess = [];
let userGuessUpdate = document.getElementById("textOutput");
let userNumerUpdate = document.getElementById("inputBox");
let audio = new Audio("music.mp3");

const init = ()=>{

    computerGuess = Math.floor(Math.random()*100);
    // console.log(computerGuess);
    document.getElementById("newGameButton").style.display="none";
    document.getElementById("gameArea").style.display="none";
}

// init();

const newGameBegin = ()=>{

    window.location.reload();
}

const startGame = ()=>{

    document.getElementById("welcomeScreen").style.display="none";
    document.getElementById("gameArea").style.display="block";
}

// NewButton
const startNewGame = ()=>{

    document.getElementById("newGameButton").style.display = "inline";
    userNumerUpdate.setAttribute("disabled", true);
}

// mainLogic
const compareGuess = ()=>{

    audio.play();
    const userNumber = Number(document.getElementById("inputBox").value);
    userGuess = [...userGuess, userNumber];
    document.getElementById("guesses").innerHTML = userGuess;

    // check the value low or high
    if(userGuess.length < maxGuess){

        if(userNumber > computerGuess){

            userGuessUpdate.innerHTML = "Your guess is High";
            userNumerUpdate.value = "";
        }
        else if(userNumber < computerGuess){
    
            userGuessUpdate.innerHTML = "Your guess is Low";
            userNumerUpdate.value = "";
        }
        else{
    
            userGuessUpdate.innerHTML = "It's Correct";
            userNumerUpdate.value = "";
            startNewGame();
        }
    }
    else{

        if(userNumber > computerGuess){

            userGuessUpdate.innerHTML = `You loose !! correct Number was ${computerGuess}`;
            userNumerUpdate.value = "";
            startNewGame();
        }
        else if(userNumber < computerGuess){
    
            userGuessUpdate.innerHTML = `You loose !! correct Number was ${computerGuess}`;
            userNumerUpdate.value = "";
            startNewGame();
        }
        else{
    
            userGuessUpdate.innerHTML = "It's Correct";
            userNumerUpdate.value = "";
            startNewGame();
        }
    }
    
    document.getElementById("attempts").innerHTML = userGuess.length;
}

const easyMode = ()=>{

    audio.play();
    maxGuess = 10;
    startGame();
};

const hardMode = ()=>{

    audio.play();
    maxGuess = 5;
    startGame();
};
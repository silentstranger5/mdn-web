let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const last = document.querySelector(".last");
const hint = document.querySelector(".hint");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;

guessField.focus();

function checkGuess() {
    const userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = "Previous guesses: ";
    }
    guesses.textContent = `${guesses.textContent} ${userGuess}`;

    if (userGuess === randomNumber) {
        last.textContent = "Congratulations! You've got it right!";
        last.style.backgroundColor = "green";
        hint.textContent = "";
        setGameOver();
    } else if (guessCount === 10) {
        last.textContent = "Game Over!";
        hint.textContent = "";
        setGameOver();
    } else {
        last.textContent = "Wrong!";
        last.style.backgroundColor = "red";
        if (userGuess < randomNumber) {
            hint.textContent = "Last guess was too low!";
        } else {
            hint.textContent = "Last guess was too high!";
        }
    }

    guessCount++;
    guessField.value = "";
    guessField.focus();
}

guessSubmit.addEventListener("click", checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Start new game";
    document.body.append(resetButton);
    resetButton.addEventListener("click", resetGame);
}

function resetGame() {
    guessCount = 1;

    const result = document.querySelectorAll(".result p");

    for (const paragraph of result) {
        paragraph.textContent = "";
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();

    last.style.backgroundColor = "white";
    
    randomNumber = Math.floor(Math.random() * 100) + 1;
}
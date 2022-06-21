import { initializeModal } from "./modal.js";

document.addEventListener("DOMContentLoaded", updateScore);
initializeModal();

const selections = [
    {
        name: "rock",
        beats: "scissors"
    }, {
        name: "paper",
        beats: "rock"
    }, {
        name: "scissors",
        beats: "paper"
    }
];

let score = Number(localStorage.getItem("RPS_Score")) || 0;

const selectionButtons = document.querySelectorAll(".selections [data-selection]");
const winLoseTextElement = document.getElementById("winLoseText");
const restartButton = document.getElementById("restartButton");
const userSelectionButton = document.getElementById("userSelectionButton");
const computerSelectionButton = document.getElementById("computerSelectionButton");
const scoreTextElement = document.getElementById("score");

selectionButtons.forEach(button => button.addEventListener("click", makeSelection));
restartButton.addEventListener("click", restart);

function updateScore() {
    scoreTextElement.textContent = score;
    localStorage.setItem("RPS_Score", score);
}

function setGameState(state) {
    document.body.classList.add(state);
}

function restart() {
    document.body.classList = "";
    removeSelection(userSelectionButton);
    removeSelection(computerSelectionButton);
}

function checkWinLose(userSelection, computerSelection) {
    if (userSelection.name === computerSelection.beats) {
        winLoseTextElement.textContent = "You Lose";
        computerSelectionButton.classList.add("winner");
    }

    if (computerSelection.name === userSelection.beats) {
        score++;
        updateScore();
        winLoseTextElement.textContent = "You Win";
        userSelectionButton.classList.add("winner");
    }

    if (computerSelection.name === userSelection.name) {
        winLoseTextElement.textContent = "Draw";
    }

    setGameState("game-over");
}

function makeSelection({ target }) {
    setGameState("user-picked");

    const button = target.closest("[data-selection]");
    const selection = selections.find(item => {
        return button.getAttribute("data-selection") === item.name;
    });

    const userSelection = selection;
    const computerSelection = getRandomSelection();

    insertSelection(userSelectionButton, userSelection);

    setTimeout(() => {
        setGameState("computer-picked");
        insertSelection(computerSelectionButton, computerSelection);
        checkWinLose(userSelection, computerSelection);
    }, 2000);
}

function getRandomSelection() {
    return selections[Math.floor(Math.random() * selections.length)];
}

function insertSelection(button, { name: selection }) {
    button.insertAdjacentHTML("afterbegin", `<img src="images/icon-${selection}.svg" alt="${selection}">`);
    button.setAttribute("data-selection", selection);
    button.ariaLabel = selection;
}

function removeSelection(button) {
    const image = button.querySelector("img");

    button.classList.remove("winner");
    image.remove();
    button.setAttribute("data-selection", "");
    button.ariaLabel = "";
}
let currentPlayer = 'X';
let gameActive = true;
const gameState = ["", "", "", "", "", "", "", "", ""];

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleCellClick(clickedCellIndex) {
    if (gameState[clickedCellIndex] !== "" || !gameActive) {
        return;
    }

    gameState[clickedCellIndex] = currentPlayer;
    document.getElementById(`box${clickedCellIndex + 1}`).innerText = currentPlayer;

    checkResult();
    if (gameActive) {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}

function checkResult() {
    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
            document.getElementById("winner").innerText = `Player ${currentPlayer} Wins!`;
            gameActive = false;
            return;
        }
    }

    if (!gameState.includes("")) {
        document.getElementById("winner").innerText = "It's a Draw!";
        gameActive = false;
    }
}

function resetGame() {
    currentPlayer = 'X';
    gameActive = true;
    gameState.fill("");
    document.getElementById("winner").innerText = "";

    for (let i = 1; i <= 9; i++) {
        document.getElementById(`box${i}`).innerText = "";
    }
}

document.getElementById("box1").onclick = () => handleCellClick(0);
document.getElementById("box2").onclick = () => handleCellClick(1);
document.getElementById("box3").onclick = () => handleCellClick(2);
document.getElementById("box4").onclick = () => handleCellClick(3);
document.getElementById("box5").onclick = () => handleCellClick(4);
document.getElementById("box6").onclick = () => handleCellClick(5);
document.getElementById("box7").onclick = () => handleCellClick(6);
document.getElementById("box8").onclick = () => handleCellClick(7);
document.getElementById("box9").onclick = () => handleCellClick(8);

document.querySelector("button").onclick = resetGame;

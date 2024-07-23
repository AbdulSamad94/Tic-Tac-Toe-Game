let currentPlayer = "O";
let board = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;
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

const afterClicking = (index) => {
    if (board[index] === "" && gameActive) {
        board[index] = currentPlayer;
        document.getElementById(`box${index + 1}`).innerText = currentPlayer;
        if (checkWinner()) {
            document.getElementById("winner").innerText = `Player ${currentPlayer} Wins!`;
            gameActive = false;
        } else if (board.every(cell => cell !== "")) {
            document.getElementById("winner").innerText = "It's a Draw!";
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }
};

const checkWinner = () => {
    for (let condition of winningConditions) {
        const [a, b, c] = condition;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }
    return false;
};

const reset = () => {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameActive = true;
    document.getElementById("winner").innerText = "";
    for (let i = 1; i <= 9; i++) {
        document.getElementById(`box${i}`).innerText = "";
    }
};

// Event listeners for the boxes
for (let i = 1; i <= 9; i++) {
    document.getElementById(`box${i}`).addEventListener('click', () => afterClicking(i - 1));
}

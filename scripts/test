export class Morpion {
    constructor(gridElement) {
        this.grid = gridElement;
        this.cells = Array.from(this.grid.querySelectorAll('.cell'));
        this.currentPlayerDisplay = document.getElementById('currentPlayer');
        this.playerOneScore = document.getElementById('playerOne');
        this.playerTwoScore = document.getElementById('playerTwo');
        this.winDisplay = this.grid.querySelector('.win-display');
        this.replayButton = document.getElementById('replay');
        
        this.currentPlayer = 1;
        this.board = Array(9).fill(null);
        this.gameActive = true;
        
        this.winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]             
        ];

        this.initializeGame();
    }

    initializeGame() {
        this.cells.forEach(cell => {
            cell.addEventListener('click', () => this.handleCellClick(cell));
        });
        this.replayButton.addEventListener('click', () => this.resetGame());
        this.updatePlayerDisplay();
    }

    handleCellClick(cell) {
        if (!this.gameActive) return;
        
        const index = this.cells.indexOf(cell);
        if (this.board[index] !== null) return;

        this.board[index] = this.currentPlayer;
        cell.textContent = this.currentPlayer === 1 ? 'X' : 'O';
        
        if (this.checkWin()) {
            this.handleWin();
        } else if (this.board.every(cell => cell !== null)) {
            this.handleDraw();
        } else {
            this.switchPlayer();
        }
    }

    checkWin() {
        return this.winningCombinations.some(combination => {
            return combination.every(index => {
                return this.board[index] === this.currentPlayer;
            });
        });
    }

    handleWin() {
        this.gameActive = false;
        this.grid.classList.add('won');
        this.winDisplay.textContent = `Joueur ${this.currentPlayer} a gagnÃ© !`;
        
        if (this.currentPlayer === 1) {
            this.playerOneScore.textContent = parseInt(this.playerOneScore.textContent) + 1;
        } else {
            this.playerTwoScore.textContent = parseInt(this.playerTwoScore.textContent) + 1;
        }
    }

    handleDraw() {
        this.gameActive = false;
        this.grid.classList.add('won');
        this.winDisplay.textContent = "Match nul !";
    }

    switchPlayer() {
        this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
        this.updatePlayerDisplay();
    }

    updatePlayerDisplay() {
        this.currentPlayerDisplay.textContent = `Joueur ${this.currentPlayer}`;
    }

    resetGame() {
        this.board.fill(null);
        this.cells.forEach(cell => cell.textContent = '');
        this.grid.classList.remove('won');
        this.gameActive = true;
        this.currentPlayer = 1;
        this.updatePlayerDisplay();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('#grid');
    new Morpion(grid);
});
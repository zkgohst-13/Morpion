import { Morpion } from './module/morpion.js';
new Morpion(document.querySelector('#grid'));
// Sélection des éléments HTML
const cell = document.querySelectorAll('.cell');
const currentPlayer = document.querySelector('#currentPlayer');
const winnerMessage = document.querySelector('.win-display');

// Initialisation des variables
let currentPlayerDisplay = 'X';
currentPlayer.innerHTML = 'Joueur 1';

let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

// Gestion des clics sur les cases
cell.forEach((element, index) => {
    element.addEventListener('click', () => {
        let row = Math.floor(index / 3);
        let col = index % 3;

        if (element.innerHTML === '' && board[row][col] === '') {
            // Met à jour la cellule et la grille
            element.innerHTML = currentPlayerDisplay;
            board[row][col] = currentPlayerDisplay;

            // Vérifie si le joueur actuel a gagné
            if (checkWinner()) {
                showWinner(`Le joueur ${currentPlayerDisplay} a gagné !`);
            } else {
                // Alterne entre les joueurs
                currentPlayerDisplay = currentPlayerDisplay === 'X' ? 'O' : 'X';
                currentPlayer.innerHTML = 'Joueur ' + (currentPlayerDisplay === 'X' ? '1' : '2');
            }
        }
    });
});

// Vérification de la victoire
function checkWinner() {
    // Vérifie les lignes
    for (let row = 0; row < 3; row++) {
        if (board[row][0] !== '' && board[row][0] === board[row][1] && board[row][1] === board[row][2]) {
            return true;
        }
    }

    // Vérifie les colonnes
    for (let col = 0; col < 3; col++) {
        if (board[0][col] !== '' && board[0][col] === board[1][col] && board[1][col] === board[2][col]) {
            return true;
        }
    }

    // Vérifie les diagonales
    if (board[0][0] !== '' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
        return true;
    }
    if (board[0][2] !== '' && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
        return true;
    }

    return false;
}

// Affichage du message de victoire
function showWinner(message) {
    winnerMessage.style.display = 'block';
    winnerMessage.innerHTML = message;
    alert(message);
}




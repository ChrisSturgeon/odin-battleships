import './style.css';
import {
  makeBoard,
  renderShips,
  renderAttacks,
  displayGameOver,
  wipeBoards,
  updateStatus,
  updateScores,
} from './domInteraction';
import { gameboard } from './factories/gameboard';
import { player } from './factories/player';

let shipsPlaced = false;
let rotation = 'horizontal';

// Toggles new ship orientation as horizontal or vertical
export function rotateShip() {
  if (rotation === 'horizontal') {
    rotation = 'vertical';
  } else {
    rotation = 'horizontal';
  }
}

const playerA = player();
const playerB = player();
const boardA = gameboard();
const boardB = gameboard();

// Checks if ships on either board have all been sunk and triggers game-end msg
function checkGameOver() {
  if (boardA.areShipsSunk()) {
    displayGameOver('The Computer is');
    playerB.score += 1;
    shipsPlaced = false;
  }

  if (boardB.areShipsSunk()) {
    displayGameOver('You are');
    playerA.score += 1;
    shipsPlaced = false;
  }
}

// Main game loop
export function gameLoop() {
  if (shipsPlaced === true) {
    const coordinates = this.id.split('-');

    if (coordinates[0] === 'B') {
      const xCord = Number(coordinates[1]);
      const yCord = Number(coordinates[2]);
      playerA.fire(boardB, [xCord, yCord]);
      renderAttacks('B', boardB);

      playerB.randomFire(boardA);
      renderAttacks('A', boardA);
      checkGameOver();
    }
  }
}

export function getBoardA() {
  return boardA;
}

export function getShipsPlaced() {
  return shipsPlaced;
}

export function getRotation() {
  return rotation;
}

// Allows player to click and place new ship on their board
export function clickNewShip() {
  if (shipsPlaced === false && this.id.split('-')[0] === 'A') {
    const coordinates = this.id.split('-');
    boardA.newShip(
      boardA.newShipLength,
      Number(coordinates[1]),
      Number(coordinates[2]),
      rotation
    );

    renderShips('A', boardA);
    updateStatus(boardA.newShipLength);

    if (boardA.ships.length >= 5) {
      shipsPlaced = true;
    }
  }
}

// Resets all stats to initial and creates random placement of five new enemy ships on board
export function newGame() {
  wipeBoards();
  updateScores(playerA, playerB);
  makeBoard('A', 'board1');
  makeBoard('B', 'board2');
  shipsPlaced = false;

  playerA.firedShots = [];
  playerB.firedShots = [];

  boardA.ships = [];
  boardA.newShipLength = 5;
  boardA.missedShots = [];

  updateStatus(boardA.newShipLength);

  boardB.ships = [];
  boardB.newShipLength = 5;
  boardB.missedShots = [];

  boardB.randomShip();
  boardB.randomShip();
  boardB.randomShip();
  boardB.randomShip();
  boardB.randomShip();
}

const resetBtn = document.getElementById('resetBtn');
resetBtn.addEventListener('click', newGame);

newGame();

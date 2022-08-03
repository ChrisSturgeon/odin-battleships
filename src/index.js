import './style.css';

import {
  makeBoard,
  renderShips,
  renderAttacks,
  displayGameOver,
  wipeBoards,
  updateStatus,
} from './domInteraction';
import { gameboard } from './factories/gameboard';
import { player } from './factories/player';

let shipsPlaced = false;

let rotation = 'horizontal';
const rotationBox = document.getElementById('rotation');
rotationBox.textContent = rotation;
const rotationBtn = document.getElementById('rotationBtn');
rotationBtn.addEventListener('click', () => {
  if (rotation === 'horizontal') {
    rotation = 'vertical';
    rotationBox.textContent = rotation;
  } else {
    rotation = 'horizontal';
    rotationBox.textContent = rotation;
  }
});

const playerA = player();
const boardA = gameboard();

makeBoard('A', 'board1');
renderShips('A', boardA);

const playerB = player();
const boardB = gameboard();

boardB.randomShip();
boardB.randomShip();
boardB.randomShip();
boardB.randomShip();
boardB.randomShip();
// boardB.newShip(2, 8, 9, 'horizontal');
// boardB.newShip(3, 7, 2, 'horizontal');
// boardB.newShip(4, 2, 8, 'horizontal');
// boardB.newShip(5, 5, 5, 'horizontal');

makeBoard('B', 'board2');
renderShips('B', boardB);

updateStatus(boardA.newShipLength);

function checkGameOver() {
  if (boardA.areShipsSunk()) {
    displayGameOver('Player B');
  }

  if (boardB.areShipsSunk()) {
    displayGameOver('Player A');
  }
}

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

export function shipHover() {
  if (shipsPlaced === false && this.id.split('-')[0] === 'A') {
    const coordinates = this.id.split('-');
    const potentialCords = boardA.makeShipCoordinates(
      Number(coordinates[1]),
      Number(coordinates[2]),
      boardA.newShipLength,
      rotation
    );

    if (boardA.isValidPosition(potentialCords, rotation)) {
      potentialCords.forEach((coord) => {
        const cell = document.getElementById(`A-${coord[0]}-${coord[1]}`);
        cell.style.backgroundColor = 'yellow';
      });
    } else {
      const cell = document.getElementById(
        `A-${coordinates[1]}-${coordinates[2]}`
      );
      cell.style.cursor = 'not-allowed';
    }
  }
}

export function unHover() {
  if (shipsPlaced === false && this.id.split('-')[0] === 'A') {
    const coordinates = this.id.split('-');

    const potentialCords = boardA.makeShipCoordinates(
      Number(coordinates[1]),
      Number(coordinates[2]),
      boardA.newShipLength,
      rotation
    );

    if (boardA.isValidPosition(potentialCords, rotation)) {
      potentialCords.forEach((coord) => {
        const cell = document.getElementById(`A-${coord[0]}-${coord[1]}`);
        cell.style.backgroundColor = 'white';
      });
    } else {
      const cell = document.getElementById(
        `A-${coordinates[1]}-${coordinates[2]}`
      );
      cell.style.cursor = 'default';
    }
  }
}

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

export function newGame() {
  wipeBoards();
  makeBoard('A', 'board1');
  makeBoard('B', 'board2');
  shipsPlaced = false;

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
  renderShips('B', boardB);
}

const resetBtn = document.getElementById('resetBtn');
resetBtn.addEventListener('click', newGame);

console.log(boardA.randomCoordinates());

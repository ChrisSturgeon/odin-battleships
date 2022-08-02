import './style.css';

import {
  makeBoard,
  renderShips,
  renderAttacks,
  displayGameOver,
} from './domInteraction';
import { gameboard } from './factories/gameboard';
import { player } from './factories/player';

const gameOver = false;
let shipsPlaced = false;

const playerA = player();
const boardA = gameboard();
// boardA.newShip(1, 10, 7, 'vertical');
// boardA.newShip(2, 4, 2, 'vertical');
// boardA.newShip(3, 2, 5, 'vertical');
// boardA.newShip(4, 6, 4, 'horizontal');
// boardA.newShip(5, 2, 10, 'horizontal');

makeBoard('A', 'board1');
renderShips('A', boardA);

const playerB = player();
const boardB = gameboard();
boardB.newShip(1, 2, 3, 'vertical');
boardB.newShip(2, 8, 9, 'horizontal');
boardB.newShip(3, 7, 2, 'horizontal');
boardB.newShip(4, 2, 8, 'horizontal');
boardB.newShip(5, 5, 5, 'horizontal');

makeBoard('B', 'board2');
renderShips('B', boardB);

function checkGameOver() {
  if (boardA.areShipsSunk()) {
    displayGameOver('Player A');
  }

  if (boardB.areShipsSunk()) {
    displayGameOver('Player B');
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

function makeNewShip() {
  const length = Number(document.getElementById('length').value);
  const xCOORD = Number(document.getElementById('xCOORD').value);
  const yCOORD = Number(document.getElementById('yCOORD').value);
  const orientation = document.getElementById('orientation').value;
  console.log(typeof length, typeof xCOORD, typeof yCOORD, typeof orientation);
  boardA.newShip(length, xCOORD, yCOORD, orientation);
  renderShips('A', boardA);
  console.log(boardA.ships.length);

  if (boardA.ships.length >= 5) {
    shipsPlaced = true;
  }
}

const newShipBtn = document.getElementById('newShipBtn');

newShipBtn.addEventListener('click', makeNewShip);

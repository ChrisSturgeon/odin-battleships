import { clickNewShip, gameLoop, shipHover, unHover } from './index';

export function makeBoard(prefix, id) {
  const container = document.getElementById(`${id}`);
  const boardBox = document.createElement('div');
  container.appendChild(boardBox);

  boardBox.classList.add('boardBox');

  for (let i = 1; i <= 10; i += 1) {
    for (let x = 1; x <= 10; x += 1) {
      const coord = document.createElement('div');
      coord.classList.add('coord');
      coord.setAttribute('id', `${prefix}-${x}-${i}`);
      coord.setAttribute('value', `${prefix}-${x}-${i}`);
      coord.addEventListener('mouseover', shipHover);
      coord.addEventListener('mouseout', unHover);
      coord.addEventListener('click', clickNewShip);
      coord.addEventListener('click', gameLoop);
      boardBox.appendChild(coord);
    }
  }
}

export function renderShips(prefix, board) {
  board.ships.forEach((ship) => {
    ship.coordinates.forEach((coordinate) => {
      const square = document.getElementById(
        `${prefix}-${coordinate[0]}-${coordinate[1]}`
      );
      square.style.backgroundColor = 'blue';
    });
  });
}

export function renderAttacks(prefix, board) {
  board.missedShots.forEach((missedShot) => {
    const square = document.getElementById(
      `${prefix}-${missedShot[0]}-${missedShot[1]}`
    );
    square.style.backgroundColor = 'red';
  });

  board.ships.forEach((ship) => {
    ship.hitLocations.forEach((location) => {
      const square = document.getElementById(
        `${prefix}-${location[0]}-${location[1]}`
      );
      square.style.backgroundColor = 'green';
    });
  });
}

export function displayGameOver(player) {
  console.log(`${player} is the bloody winner!`);
  const boards = document.getElementById('boards');
  boards.innerHTML = '';
  boards.innerText = `${player} is the bloody winner!`;
}
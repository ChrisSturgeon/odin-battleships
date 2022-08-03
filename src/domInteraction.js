import {
  clickNewShip,
  gameLoop,
  shipHover,
  unHover,
  getShipLength,
} from './index';

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
  const infoBox = document.getElementById('info');
  infoBox.textContent = `${player} is the winner!`;
}

export function wipeBoards() {
  const boardA = document.getElementById('board1');
  boardA.innerHTML = '';

  const boardB = document.getElementById('board2');
  boardB.innerHTML = '';
}

export function updateStatus(length) {
  const infoBox = document.getElementById('info');
  switch (length) {
    case 5:
      infoBox.textContent = 'Position your aircraft carrier...';
      break;
    case 4:
      infoBox.textContent = 'Position your battleship...';
      break;
    case 3:
      infoBox.textContent = 'Position your cruiser...';
      break;
    case 2:
      infoBox.textContent = 'Position your destroyer...';
      break;
    case 1:
      infoBox.textContent = 'Position your submarine...';
      break;
    case 0:
      infoBox.textContent = 'Battle!';
      break;
    default:
      infoBox.textContent = '';
  }
}

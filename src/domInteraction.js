import {
  gameLoop,
  getBoardA,
  getShipsPlaced,
  rotateShip,
  getRotation,
  clickNewShip,
} from './index';

// Renders all ships on each board
export function renderShips(prefix, board) {
  board.ships.forEach((ship) => {
    ship.coordinates.forEach((coordinate) => {
      const square = document.getElementById(
        `${prefix}-${coordinate[0]}-${coordinate[1]}`
      );
      square.classList.add('occupied');
    });
  });
}

// Renders attackes on each board
export function renderAttacks(prefix, board) {
  board.missedShots.forEach((missedShot) => {
    const square = document.getElementById(
      `${prefix}-${missedShot[0]}-${missedShot[1]}`
    );
    square.classList.add('miss');
  });

  board.ships.forEach((ship) => {
    ship.hitLocations.forEach((location) => {
      const square = document.getElementById(
        `${prefix}-${location[0]}-${location[1]}`
      );
      square.classList.add('hit');
    });
  });
}

// Displays gameover and winner in info bar
export function displayGameOver(player) {
  const infoBox = document.getElementById('info');
  infoBox.textContent = `${player} the winner!`;
}

// Removes used boards
export function wipeBoards() {
  const boardA = document.getElementById('board1');
  boardA.innerHTML = '';

  const boardB = document.getElementById('board2');
  boardB.innerHTML = '';
}

// Updates the ship which should be positioned
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

// Displays a 'shadow' of where the new ship will be placed during positioning phase
function shipHover() {
  const board = getBoardA();

  if (getShipsPlaced() === false && this.id.split('-')[0] === 'A') {
    const coordinates = this.id.split('-');
    const potentialCords = board.makeShipCoordinates(
      Number(coordinates[1]),
      Number(coordinates[2]),
      board.newShipLength,
      getRotation()
    );

    if (board.isValidPosition(potentialCords, getRotation())) {
      potentialCords.forEach((coord) => {
        const cell = document.getElementById(`A-${coord[0]}-${coord[1]}`);
        cell.classList.add('occupied');
      });
    } else {
      const cell = document.getElementById(
        `A-${coordinates[1]}-${coordinates[2]}`
      );
      cell.style.cursor = 'not-allowed';
    }
  }
}

// Reverses shipHover styling when cursor changes to different coordinate
function unHover() {
  const board = getBoardA();
  if (getShipsPlaced() === false && this.id.split('-')[0] === 'A') {
    const coordinates = this.id.split('-');

    const potentialCords = board.makeShipCoordinates(
      Number(coordinates[1]),
      Number(coordinates[2]),
      board.newShipLength,
      getRotation()
    );

    if (board.isValidPosition(potentialCords, getRotation())) {
      potentialCords.forEach((coord) => {
        const cell = document.getElementById(`A-${coord[0]}-${coord[1]}`);
        cell.classList.remove('occupied');
      });
    } else {
      const cell = document.getElementById(
        `A-${coordinates[1]}-${coordinates[2]}`
      );
      cell.style.cursor = 'default';
    }
  }
}

// Renders gameboard and adds required event listeners
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

// Displays scores once either player has won
export function updateScores(player, computer) {
  const playerBox = document.getElementById('board1');
  const playerScore = document.createElement('h1');
  playerBox.appendChild(playerScore);
  if (player.score > 0 || computer.score > 0) {
    playerScore.textContent = `You - ${player.score} wins`;
  } else {
    playerScore.textContent = 'You';
  }

  const computerBox = document.getElementById('board2');
  const computerScore = document.createElement('h1');
  computerBox.appendChild(computerScore);
  if (computer.score > 0 || player.score > 0) {
    computerScore.textContent = `Computer - ${computer.score} wins`;
  } else {
    computerScore.textContent = 'Computer';
  }
}

// Triggers ship rotation during positioning phase
function refreshRotation() {
  rotateShip();
}

const rotationBtn = document.getElementById('rotationBtn');
rotationBtn.addEventListener('click', refreshRotation);

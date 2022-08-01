import './style.css';

import { makeBoard, renderShips, renderAttacks } from './domInteraction';
import { gameboard } from './factories/gameboard';
import { player } from './factories/player';

const playerA = player();
const boardA = gameboard();
boardA.newShip(1, 10, 7, 'vertical');
boardA.newShip(2, 4, 2, 'vertical');
boardA.newShip(3, 2, 5, 'vertical');
boardA.newShip(4, 6, 4, 'horizontal');
boardA.newShip(5, 2, 10, 'horizontal');

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

window.onclick = (e) => {
  const idArr = e.target.id.split('-');

  if (idArr.length === 3) {
    if (idArr[0] === 'B') {
      const xCord = Number(idArr[1]);
      const yCord = Number(idArr[2]);
      playerA.fire(boardB, [xCord, yCord]);
      renderAttacks('B', boardB);

      playerB.randomFire(boardA);
      renderAttacks('A', boardA);
    }
  }
};

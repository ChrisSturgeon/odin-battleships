import { ship } from './ship';

export function gameboard() {
  return {
    ships: [],
    newShip(length) {
      const newShip = ship(length);
      this.ships.push(newShip);
    },
    receiveAttack(COORD) {
      const xCOORD = COORD[0];
      const yCOORD = COORD[1];

      return this.ships[1].positions[1][1];
    },
  };
}

export function bottle() {
  // Happy?
}

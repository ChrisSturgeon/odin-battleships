import { ship } from './ship';

export function gameboard() {
  return {
    ships: [],
    missedShots: [],
    newShipLength: 5,

    // Makes new ship object, sets coordinates, validates coordinates
    // and stores in gameboard ships array if within grid
    newShip(length, xCOORD, yCOORD, orientation) {
      const newShip = ship(length);
      newShip.coordinates = this.makeShipCoordinates(
        xCOORD,
        yCOORD,
        length,
        orientation
      );

      if (this.isValidPosition(newShip.coordinates, orientation)) {
        this.ships.push(newShip);
        this.newShipLength -= 1;
      } else {
        console.log('Invalid placement!');
      }
    },

    // Returns true if given coordinates are both within the grid, and all coordinates are available
    isValidPosition(coordinates, orientation) {
      if (
        this.isWithinGrid(coordinates, orientation) &&
        this.isSpaceAvailable(coordinates)
      ) {
        return true;
      }
      return false;
    },

    // Creates and places random ship
    randomShip() {
      const newShip = ship(this.newShipLength);
      {
        const randomX = Math.floor(Math.random() * 10 + 1);
        const randomY = Math.floor(Math.random() * 10 + 1);
        const length = this.newShipLength;
        const shipOrientation = this.randomOrientation();

        newShip.coordinates = this.makeShipCoordinates(
          randomX,
          randomY,
          length,
          shipOrientation
        );

        if (this.isValidPosition(newShip.coordinates, shipOrientation)) {
          this.ships.push(newShip);
          this.newShipLength -= 1;
        } else {
          this.randomShip();
        }
      }
    },

    // Creates random set of coordinates
    randomCoordinates() {
      const randomX = Math.floor(Math.random() * 10 + 1);
      const randomY = Math.floor(Math.random() * 10 + 1);
      const length = this.newShipLength;
      const shipOrientation = this.randomOrientation();

      return this.makeShipCoordinates(
        randomX,
        randomY,
        length,
        shipOrientation
      );
    },

    // Returns random horizontal or vertical
    randomOrientation() {
      const randomNumber = Math.floor(Math.random() * 10 + 1);

      if (randomNumber % 2 === 0) {
        return 'horizontal';
      }
      return 'vertical';
    },

    // Creates array for coordinates starting at bow for given length and orientation
    makeShipCoordinates(bowX, bowY, length, orientation) {
      const shipCoordinates = [];

      if (orientation === 'horizontal') {
        for (let i = bowX; i < bowX + length; i += 1) {
          shipCoordinates.push([i, bowY]);
        }
      }

      if (orientation === 'vertical') {
        for (let i = bowY; i < bowY + length; i += 1) {
          shipCoordinates.push([bowX, i]);
        }
      }
      return shipCoordinates;
    },

    // Returns true if ship placement is within 10 x 10 grid, or false otherwise
    isWithinGrid(coordinates, orientation) {
      if (orientation === 'horizontal') {
        const bow = coordinates[0][0];
        const stern = coordinates[coordinates.length - 1][0];

        if (bow >= 1 && stern <= 10) {
          return true;
        }
        return false;
      }

      if (orientation === 'vertical') {
        const bow = coordinates[0][1];
        const stern = coordinates[coordinates.length - 1][1];

        if (bow >= 1 && stern <= 10) {
          return true;
        }
        return false;
      }
      return false;
    },

    // Takes coordinates array [x, y] and returns true if single coordinate is available
    isCoordAvailable(singleCOORD) {
      const xCOORD = singleCOORD[0];
      const yCOORD = singleCOORD[1];

      let isAvailable = true;

      this.ships.forEach((ship) => {
        ship.coordinates.forEach((coordinate) => {
          if (coordinate[0] === xCOORD && coordinate[1] === yCOORD) {
            isAvailable = false;
          }
        });
      });
      return isAvailable;
    },

    // Takes array of coordinates and returns true if all are available
    isSpaceAvailable(coordinates) {
      return coordinates.every((coordinate) =>
        this.isCoordAvailable([coordinate[0], coordinate[1]])
      );
    },

    // Takes single coordinates array, finds relevant ship and records hit or miss.
    receieveAtttack(singleCOORD) {
      let didHitShip = false;
      const xCOORD = singleCOORD[0];
      const yCOORD = singleCOORD[1];

      this.ships.forEach((ship) => {
        ship.coordinates.forEach((coordinate) => {
          if (coordinate[0] === xCOORD && coordinate[1] === yCOORD) {
            ship.hit(singleCOORD);
            didHitShip = true;
          }
        });
      });

      if (didHitShip === false) {
        this.missedShots.push(singleCOORD);
      }
    },

    // Returns true if all ships on the gameboard have been sunk
    areShipsSunk() {
      return this.ships.every((ship) => ship.isSunk());
    },
  };
}

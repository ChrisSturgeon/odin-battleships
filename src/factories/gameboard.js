import { ship } from './ship';

export function gameboard() {
  return {
    ships: [],

    // Makes new ship object, sets coordinates and stores in gameboard ships array.
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
      } else {
        throw new Error('Error: invalid placement');
      }
    },

    receiveAttack(COORD) {
      const xCOORD = COORD[0];
      const yCOORD = COORD[1];
      return this.ships[1].positions[1][1];
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
  };
}

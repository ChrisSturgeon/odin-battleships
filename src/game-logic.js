// Factory function for creating ship object.

export function ship(name, length) {
  if (typeof length === 'number') {
    return {
      name,
      length,
      hitLocations: [],
      sunk: false,
      hit(position) {
        if (!this.hitLocations.includes(position)) {
          this.hitLocations.push(position);
        }
      },
      isSunk() {
        if (this.hitLocations.length === this.length) {
          return true;
        }
        return false;
      },
    };
  }
  throw new Error('length must be type number');
}

export function gameboard() {
  return {
    // Stores locations of ship in obj
    shipLocations: {},

    // Enters new ship into shipLocations object
    placeShip(cordX, cordY, vessel, orientation) {
      const newShipPositions = this.createShipPositions(
        cordX,
        cordY,
        vessel,
        orientation
      );

      if (this.checkNoOverFlow(newShipPositions, orientation)) {
        if (this.isSpaceAvailable(newShipPositions)) {
          this.shipLocations[`${vessel.name}`] = newShipPositions;
        } else {
          throw new Error('Error: space already occupied by existing ship');
        }
      } else {
        throw new Error('Error: placement is outside grid');
      }
    },

    // Creates cordinates of requested new ship if position is horizontal
    createShipPositions(cordX, cordY, vessel, orientation) {
      const requestedLocations = [];

      if (orientation === 'horizontal') {
        for (let i = cordX; i < cordX + vessel.length; i += 1) {
          requestedLocations.push([i, cordY]);
        }
      }

      if (orientation === 'vertical') {
        for (let i = cordY; i < cordY + vessel.length; i += 1) {
          requestedLocations.push([cordX, i]);
        }
      }

      return requestedLocations;
    },

    // Returns array of all occupied coordinates
    occupiedCords() {
      const allCordinates = [];
      for (let i = 0; i < Object.values(this.shipLocations).length; i += 1) {
        allCordinates.push(Object.values(this.shipLocations)[i]);
      }
      return allCordinates.flat();
    },

    // Checks ship does not over-flow the gamegrid
    checkNoOverFlow(shipCords, orientation) {
      if (orientation === 'horizontal') {
        const bow = shipCords[0][0];
        const stern = shipCords[shipCords.length - 1][0];

        if (bow >= 1 && stern <= 10) {
          return true;
        }
        return false;
      }

      if (orientation === 'vertical') {
        const bow = shipCords[0][1];
        const stern = shipCords[shipCords.length - 1][1];

        if (bow >= 1 && stern <= 10) {
          return true;
        }
        return false;
      }
    },

    // Returns true if single co-ordinate is vacant
    checkCordVacant(cordX, cordY) {
      const validity = this.occupiedCords().every((element) => {
        if (element[0] === cordX && element[1] === cordY) {
          return false;
        }
        return true;
      });
      return validity;
    },

    // Returns true if space for each ship coordinate is available
    isSpaceAvailable(newShipCords) {
      return newShipCords.every((element) =>
        this.checkCordVacant(element[0], element[1])
      );
    },
  };
}

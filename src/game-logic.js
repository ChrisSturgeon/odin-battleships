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
    placeShip(cordX, cordY, vessel) {
      const newShipPositions = this.createPositionArray(cordX, cordY, vessel);
      this.shipLocations[`${vessel.name}`] = newShipPositions;
    },

    // Creates positions of requested new ship
    createPositionArray(cordX, cordY, vessel) {
      const requestedLocations = [];
      for (let i = cordX; i < cordX + vessel.length; i += 1) {
        requestedLocations.push([i, cordY]);
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
  };
}

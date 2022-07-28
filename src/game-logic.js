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

    // Places ship if it doesn't overlap
    placeShip(cordX, cordY, vessel) {
      const vesselLocations = [];
      for (let i = cordX; i < cordX + vessel.length; i += 1) {
        vesselLocations.push([i, cordY]);
      }
      this.shipLocations[`${vessel.name}`] = vesselLocations;
    },
  };
}

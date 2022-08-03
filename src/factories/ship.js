export function ship(length) {
  return {
    length,
    hitLocations: [],
    hit(coords) {
      this.hitLocations.push(coords);
    },
    isSunk() {
      if (this.hitLocations.length >= this.length) {
        return true;
      }
      return false;
    },
  };
}

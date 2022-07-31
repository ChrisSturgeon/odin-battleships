export default function ship(name, length) {
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

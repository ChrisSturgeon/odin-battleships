export function player() {
  return {
    // Stores coordinates of all fired shots in array
    firedShots: [],

    // Triggers receieveAttack function on on given board with provided coordinates
    fire(board, coords) {
      if (this.firedShots > 0) {
        if (this.isOriginalShot(coords)) {
          board.receieveAtttack(coords);
          this.firedShots.push(coords);
        } else {
          throw new Error('Cordinate has already been fired upon');
        }
      } else {
        board.receieveAtttack(coords);
        this.firedShots.push(coords);
      }
    },

    // Compares input coordinates against previous shots and returns true if they're original.
    isOriginalShot(coords) {
      return this.firedShots.every((shot) => {
        if (coords[0] !== shot[0] && coords[1] !== shot[1]) {
          return true;
        }
        return false;
      });
    },

    // Fires random shot upon input board
    randomFire(board) {
      const coords = this.makeRandomCoords();

      if (this.firedShots.length > 0) {
        if (this.isOriginalShot(coords)) {
          board.receieveAtttack(coords);
          this.firedShots.push(coords);
        } else if (this.firedShots.length < 100) {
          this.randomFire();
        } else {
          throw new Error('Maximum shots reached');
        }
      } else {
        board.receieveAtttack(coords);
        this.firedShots.push(coords);
      }
    },

    // Returns random coordinates [[1-10], [1-10]]
    makeRandomCoords() {
      const randomX = Math.floor(Math.random() * 10 + 1);
      const randomY = Math.floor(Math.random() * 10 + 1);
      return [randomX, randomY];
    },
  };
}

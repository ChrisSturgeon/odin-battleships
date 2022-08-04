import { gameboard } from '../src/factories/gameboard';
import { ship } from '../src/factories/ship';
import { expect } from 'expect';

// import { test } from 'picomatch';

test('stores new ships in ships array', () => {
  const testboard = gameboard();
  testboard.newShip(3, 1, 1, 'horizontal');
  testboard.newShip(4, 7, 7, 'vertical');
  expect(testboard.ships.length).toBe(2);
});

test('makes correct array of ship coordinates for horizontal orientation', () => {
  const testboard = gameboard();

  expect(testboard.makeShipCoordinates(1, 2, 4, 'horizontal')).toStrictEqual([
    [1, 2],
    [2, 2],
    [3, 2],
    [4, 2],
  ]);
});

test('makes correct array of ship coordinates for vertical orientation', () => {
  const testboard = gameboard();

  expect(testboard.makeShipCoordinates(5, 5, 3, 'vertical')).toStrictEqual([
    [5, 5],
    [5, 6],
    [5, 7],
  ]);
});

test('isWithinGrid returns true if ship coordinates are horizontally within 10 x 10 grid', () => {
  const testboard = gameboard();

  expect(
    testboard.isWithinGrid(
      [
        [1, 2],
        [3, 2],
        [4, 2],
        [5, 2],
        [6, 2],
      ],
      'horizontal'
    )
  ).toBe(true);
});

test('isWithinGrid returns true if ship coordinates are vertically within 10 x 10 grid', () => {
  const testboard = gameboard();

  expect(
    testboard.isWithinGrid(
      [
        [1, 2],
        [2, 3],
        [2, 4],
        [2, 5],
        [2, 6],
      ],
      'vertical'
    )
  ).toBe(true);
});

test('isWithinGrid returns false if ship coordinates are horizontally outside 10 x 10 grid', () => {
  const testboard = gameboard();

  expect(
    testboard.isWithinGrid(
      [
        [8, 8],
        [9, 8],
        [10, 8],
        [11, 8],
      ],
      'horizontal'
    )
  ).toBe(false);
});

test('isWithinGrid returns false if ship coordinates are vertically outside 10 x 10 grid', () => {
  const testboard = gameboard();

  expect(
    testboard.isWithinGrid(
      [
        [7, 8],
        [7, 9],
        [7, 10],
        [7, 11],
      ],
      'vertical'
    )
  ).toBe(false);
});

test('newShip method sets correct ship coordinates', () => {
  const testboard = gameboard();
  testboard.newShip(4, 1, 2, 'horizontal');

  expect(testboard.ships[0].coordinates).toStrictEqual([
    [1, 2],
    [2, 2],
    [3, 2],
    [4, 2],
  ]);
});

test('isCoordAvailable returns true for available coordinate', () => {
  const testboard = gameboard();

  expect(testboard.isCoordAvailable([2, 5])).toBe(true);
});

test('isCoordAvailable returns false for occupied coordinate', () => {
  const testboard = gameboard();
  testboard.newShip(4, 5, 5, 'horizontal');

  expect(testboard.isCoordAvailable([5, 5])).toBe(false);
});

test('isSpaceAvailable returns true if all coordinates are available', () => {
  const testboard = gameboard();
  expect(
    testboard.isSpaceAvailable([
      [1, 2],
      [1, 3],
      [1, 4],
    ])
  ).toBe(true);
});

test('isSpaceAvailable returns false if a coordinate is already occupied', () => {
  const testboard = gameboard();
  testboard.newShip(4, 5, 5, 'horizontal');
  expect(
    testboard.isSpaceAvailable([
      [6, 4],
      [6, 5],
      [6, 6],
    ])
  ).toBe(false);
});

test('newShip method throws error if desired position is outside the grid', () => {
  const testboard = gameboard();
  expect(() => {
    testboard.newShip(5, 8, 1, 'horizontal');
  }).toThrow();
});

test('newShip method throws error if a coordinate is already occupied', () => {
  const testboard = gameboard();

  testboard.newShip(4, 5, 5, 'horizontal');

  expect(() => {
    testboard.newShip(5, 6, 4, 'vertical');
  }).toThrow();
});

test('receiveAttack method finds triggers ship hit when ship at given coordinate', () => {
  const testboard = gameboard();
  testboard.newShip(4, 5, 5, 'horizontal');
  testboard.receieveAtttack([5, 5]);

  expect(testboard.ships[0].hitLocations).toStrictEqual([[5, 5]]);
});

test('receiveAttack method records missed shots', () => {
  const testboard = gameboard();
  testboard.newShip(4, 5, 5, 'horizontal');
  testboard.receieveAtttack([1, 1]);
  testboard.receieveAtttack([10, 10]);
  testboard.receieveAtttack([8, 9]);

  expect(testboard.missedShots).toStrictEqual([
    [1, 1],
    [10, 10],
    [8, 9],
  ]);
});

test('ships return as sunk once length has been reached', () => {
  const testboard = gameboard();
  testboard.newShip(4, 5, 5, 'horizontal');
  testboard.receieveAtttack([5, 5]);
  testboard.receieveAtttack([6, 5]);
  testboard.receieveAtttack([7, 5]);
  testboard.receieveAtttack([8, 5]);

  expect(testboard.ships[0].isSunk()).toBe(true);
});

test('are ships sunk returns true if all ships on the board have been sunk', () => {
  const testboard = gameboard();
  testboard.newShip(2, 1, 1, 'horizontal');
  testboard.newShip(2, 5, 5, 'vertical');
  testboard.newShip(2, 7, 7, 'vertical');

  testboard.receieveAtttack([1, 1]);
  testboard.receieveAtttack([2, 1]);
  testboard.receieveAtttack([5, 5]);
  testboard.receieveAtttack([5, 6]);
  testboard.receieveAtttack([7, 7]);
  testboard.receieveAtttack([7, 8]);

  expect(testboard.areShipsSunk()).toBe(true);
});

test('are ships sunk returns false if not all ships on the board have been sunk', () => {
  const testboard = gameboard();
  testboard.newShip(2, 1, 1, 'horizontal');
  testboard.newShip(2, 5, 5, 'vertical');
  testboard.newShip(2, 7, 7, 'vertical');

  testboard.receieveAtttack([1, 1]);
  testboard.receieveAtttack([2, 1]);
  testboard.receieveAtttack([5, 5]);
  testboard.receieveAtttack([5, 6]);

  expect(testboard.areShipsSunk()).toBe(false);
});

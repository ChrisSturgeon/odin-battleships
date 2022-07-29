import { gameboard, ship } from '../src/game-logic';
import { expect } from 'expect';

test('has shipLocations array', () => {
  expect(gameboard().hasOwnProperty('shipLocations')).toBe(true);
});

test('has placeShip method', () => {
  expect(gameboard().hasOwnProperty('placeShip')).toBe(true);
});

test('vessel of length 1 is stored in gameboard', () => {
  const testBoard = gameboard();
  testBoard.placeShip(2, 4, ship('submarine', 1), 'horizontal');

  expect(testBoard.shipLocations.submarine).toStrictEqual([[2, 4]]);
});

test('vessel of length 5 is stored in gameboard', () => {
  const testBoard = gameboard();
  testBoard.placeShip(4, 9, ship('carrier', 5), 'horizontal');

  expect(testBoard.shipLocations.carrier).toStrictEqual([
    [4, 9],
    [5, 9],
    [6, 9],
    [7, 9],
    [8, 9],
  ]);
});

test('board stores multiple ships', () => {
  const testBoard = gameboard();
  testBoard.placeShip(5, 5, ship('carrier', 5), 'horizontal');
  testBoard.placeShip(1, 9, ship('battleship', 4), 'horizontal');
  testBoard.placeShip(1, 9, ship('cruiser', 3), 'horizontal');
  testBoard.placeShip(1, 9, ship('destroyer', 2), 'horizontal');
  testBoard.placeShip(1, 9, ship('submarine', 1), 'horizontal');

  expect(Object.keys(testBoard.shipLocations).length).toBe(5);
});

test('createHorizontalArray works (1)', () => {
  const testBoard = gameboard();
  expect(
    testBoard.createShipPositions(4, 9, ship('cruiser', 3), 'horizontal')
  ).toStrictEqual = [
    [4, 9],
    [5, 0],
    [6, 9],
  ];
});

test('createHorizontalArray  works (2)', () => {
  const testBoard = gameboard();
  expect(
    testBoard.createShipPositions(6, 4, ship('destroyer', 2), 'horizontal')
  ).toStrictEqual = [
    [6, 4],
    [7, 4],
  ];
});

test('createVerticalArray works (1)', () => {
  const testBoard = gameboard();
  expect(
    testBoard.createShipPositions(2, 5, ship('cruiser', 3), 'vertical')
  ).toStrictEqual([
    [2, 5],
    [2, 6],
    [2, 7],
  ]);
});

test('createVerticalArray works (2)', () => {
  const testBoard = gameboard();
  expect(
    testBoard.createShipPositions(10, 6, ship('carrier', 5), 'vertical')
  ).toStrictEqual([
    [10, 6],
    [10, 7],
    [10, 8],
    [10, 9],
    [10, 10],
  ]);
});

test('placeShip stores coordinates of single new vessel', () => {
  const testBoard = gameboard();
  testBoard.placeShip(4, 1, ship('cruiser', 3), 'horizontal');

  expect(Object.values(testBoard.shipLocations).length).toBe(1);
});

test('placeShip stores coordinates of all new vessels', () => {
  const testBoard = gameboard();
  testBoard.placeShip(5, 5, ship('carrier', 5), 'horizontal');
  testBoard.placeShip(1, 9, ship('battleship', 4), 'horizontal');
  testBoard.placeShip(1, 9, ship('cruiser', 3), 'horizontal');
  testBoard.placeShip(1, 9, ship('destroyer', 2), 'horizontal');
  testBoard.placeShip(1, 9, ship('submarine', 1), 'horizontal');

  expect(Object.values(testBoard.shipLocations).length).toBe(5);
});

test('occupiedCords method returns correct array', () => {
  const testBoard = gameboard();
  testBoard.placeShip(1, 1, ship('destroyer', 2), 'horizontal');
  testBoard.placeShip(1, 9, ship('submarine', 1), 'horizontal');

  expect(testBoard.occupiedCords()).toStrictEqual([
    [1, 1],
    [2, 1],
    [1, 9],
  ]);
});

test('checkCordVacant returns true if square vacant ', () => {
  const testBoard = gameboard();
  testBoard.placeShip(5, 5, ship('carrier', 5), 'horizontal');
  testBoard.placeShip(2, 8, ship('battleship', 4), 'horizontal');
  testBoard.placeShip(7, 2, ship('cruiser', 3), 'horizontal');
  testBoard.placeShip(8, 9, ship('destroyer', 2), 'horizontal');
  testBoard.placeShip(2, 3, ship('submarine', 1), 'horizontal');

  expect(testBoard.checkCordVacant(6, 8)).toBe(true);
});

test('checkCordVacant returns false if square occupied ', () => {
  const testBoard = gameboard();
  testBoard.placeShip(5, 5, ship('carrier', 5), 'horizontal');
  testBoard.placeShip(2, 8, ship('battleship', 4), 'horizontal');
  testBoard.placeShip(7, 2, ship('cruiser', 3), 'horizontal');
  testBoard.placeShip(8, 9, ship('destroyer', 2), 'horizontal');
  testBoard.placeShip(2, 3, ship('submarine', 1), 'horizontal');

  expect(testBoard.checkCordVacant(8, 9)).toBe(false);
});

test('checkNoOverFlow returns true with valid ship', () => {
  const testBoard = gameboard();
  expect(
    testBoard.checkNoOverFlow(
      [
        [7, 2],
        [8, 2],
        [9, 2],
      ],
      'horizontal'
    )
  ).toBe(true);
});

test('checkNoOverFlow horizontal returns false with bow outside grid', () => {
  const testBoard = gameboard();
  expect(
    testBoard.checkNoOverFlow(
      [
        [0, 2],
        [1, 2],
        [2, 2],
      ],
      'horizontal'
    )
  ).toBe(false);
});

test('checkNoOverFlow horizontal returns false with stern outside grid', () => {
  const testBoard = gameboard();
  expect(
    testBoard.checkNoOverFlow(
      [
        [9, 2],
        [10, 2],
        [11, 2],
      ],
      'horizontal'
    )
  ).toBe(false);
});

test('checkNoOverFlow vertical returns true with a valid ship', () => {
  const testBoard = gameboard();
  expect(
    testBoard.checkNoOverFlow(
      [
        [3, 5],
        [3, 6],
        [3, 7],
      ],
      'vertical'
    )
  ).toBe(true);
});

test('checkNoOverFlow vertical returns false with bow outside grid', () => {
  const testBoard = gameboard();
  expect(
    testBoard.checkNoOverFlow(
      [
        [5, 0],
        [5, 1],
        [5, 2],
      ],
      'vertical'
    )
  ).toBe(false);
});

test('checkNoOverFlow vertical returns false with stern outside grid', () => {
  const testBoard = gameboard();
  expect(
    testBoard.checkNoOverFlow(
      [
        [5, 9],
        [5, 10],
        [5, 11],
      ],
      'vertical'
    )
  ).toBe(false);
});

test('placeShip stores single vertical ship', () => {
  const testBoard = gameboard();
  testBoard.placeShip(2, 4, ship('cruiser', 3), 'vertical');
  expect(testBoard.shipLocations.cruiser).toStrictEqual([
    [2, 4],
    [2, 5],
    [2, 6],
  ]);
});

test('placeShip rejects ships outside the grid horizontally', () => {
  const testBoard = gameboard();
  expect(() => {
    testBoard.placeShip(10, 10, ship('carrier', 5), 'horizontal');
  }).toThrow();
});

test('placeShip rejects ships outside the grid vertically', () => {
  const testBoard = gameboard();
  expect(() => {
    testBoard.placeShip(6, 8, ship('carrier', 5), 'vertical');
  }).toThrow();
});

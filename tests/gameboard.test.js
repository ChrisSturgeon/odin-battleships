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
  testBoard.placeShip(2, 4, ship('submarine', 1));

  expect(testBoard.shipLocations.submarine).toStrictEqual([[2, 4]]);
});

test('vessel of length 5 is stored in gameboard', () => {
  const testBoard = gameboard();
  testBoard.placeShip(4, 9, ship('carrier', 5));

  expect(testBoard.shipLocations.carrier).toStrictEqual([
    [4, 9],
    [5, 9],
    [6, 9],
    [7, 9],
    [8, 9],
  ]);
});

// test('does not allow overlapping of ships', () => {
//   const testBoard = gameboard();
//   testBoard.placeShip(5, 5, ship('carrier', 5));

//   expect(() => {
//     testBoard.placeShip(1, 9, ship('battleship', 4));
//   }).toThrow();
// });

test('board stores multiple ships', () => {
  const testBoard = gameboard();
  testBoard.placeShip(5, 5, ship('carrier', 5));
  testBoard.placeShip(1, 9, ship('battleship', 4));
  testBoard.placeShip(1, 9, ship('cruiser', 3));
  testBoard.placeShip(1, 9, ship('destroyer', 2));
  testBoard.placeShip(1, 9, ship('submarine', 1));

  expect(Object.keys(testBoard.shipLocations).length).toBe(5);
});

test('returns position array works (1)', () => {
  const testBoard = gameboard();

  expect(
    testBoard.createPositionArray(4, 9, ship('cruiser', 3))
  ).toStrictEqual = [
    [4, 9],
    [5, 0],
    [6, 9],
  ];
});

test('returns position array works (2)', () => {
  const testBoard = gameboard();

  expect(
    testBoard.createPositionArray(6, 4, ship('destroyer', 2))
  ).toStrictEqual = [
    [6, 4],
    [7, 4],
  ];
});

test('placeShip stores coordinates of single new vessel', () => {
  const testBoard = gameboard();
  testBoard.placeShip(4, 1, ship('cruiser', 3));

  expect(Object.values(testBoard.shipLocations).length).toBe(1);
});

test('placeShip stores coordinates of all new vessels', () => {
  const testBoard = gameboard();
  testBoard.placeShip(5, 5, ship('carrier', 5));
  testBoard.placeShip(1, 9, ship('battleship', 4));
  testBoard.placeShip(1, 9, ship('cruiser', 3));
  testBoard.placeShip(1, 9, ship('destroyer', 2));
  testBoard.placeShip(1, 9, ship('submarine', 1));

  expect(Object.values(testBoard.shipLocations).length).toBe(5);
});

test('occupiedCords method returns correct array', () => {
  const testBoard = gameboard();
  testBoard.placeShip(1, 1, ship('destroyer', 2));
  testBoard.placeShip(1, 9, ship('submarine', 1));

  expect(testBoard.occupiedCords()).toStrictEqual([
    [1, 1],
    [2, 1],
    [1, 9],
  ]);
});

test('checkCordVacant returns true if square vacant ', () => {
  const testBoard = gameboard();
  testBoard.placeShip(5, 5, ship('carrier', 5));
  testBoard.placeShip(2, 8, ship('battleship', 4));
  testBoard.placeShip(7, 2, ship('cruiser', 3));
  testBoard.placeShip(8, 9, ship('destroyer', 2));
  testBoard.placeShip(2, 3, ship('submarine', 1));

  expect(testBoard.checkCordVacant(6, 8)).toBe(true);
});

test('checkCordVacant returns false if square occupied ', () => {
  const testBoard = gameboard();
  testBoard.placeShip(5, 5, ship('carrier', 5));
  testBoard.placeShip(2, 8, ship('battleship', 4));
  testBoard.placeShip(7, 2, ship('cruiser', 3));
  testBoard.placeShip(8, 9, ship('destroyer', 2));
  testBoard.placeShip(2, 3, ship('submarine', 1));

  expect(testBoard.checkCordVacant(8, 9)).toBe(false);
});

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

test('does not allow overlapping of ships', () => {
  const testBoard = gameboard();
  testBoard.placeShip(5, 5, ship('carrier', 5));

  expect(() => {
    testBoard.placeShip(1, 9, ship('battleship', 4));
  }).toThrow();
});

test('board stores multiple ships', () => {
  const testBoard = gameboard();
  testBoard.placeShip(5, 5, ship('carrier', 5));
  testBoard.placeShip(1, 9, ship('battleship', 4));
  testBoard.placeShip(1, 9, ship('cruiser', 3));
  testBoard.placeShip(1, 9, ship('destroyer', 2));
  testBoard.placeShip(1, 9, ship('submarine', 1));

  expect(Object.keys(testBoard.shipLocations).length).toBe(5);
});

import { gameboard } from '../src/factories/gameboard';
import { ship } from '../src/factories/ship';
import { expect } from 'expect';
// import { test } from 'picomatch';

test('testing', () => {
  const testboard = gameboard();
  testboard.newShip(3);
  testboard.newShip(4);

  expect(testboard.ships.length).toBe(2);
});

test('test hit', () => {
  const testboard = gameboard();
  testboard.newShip(3);
  testboard.newShip(4);

  testboard.ships[1].hit([1, 1]);

  expect(testboard.ships[1].hitLocations).toStrictEqual([[1, 1]]);
});

test('test sunk', () => {
  const testboard = gameboard();
  testboard.newShip(3);
  testboard.newShip(4);

  testboard.ships[1].hit(1);
  testboard.ships[1].hit(2);
  testboard.ships[1].hit(3);
  testboard.ships[1].hit(4);

  expect(testboard.ships[1].sunk).toBe(false);
});

test('trigger hit', () => {
  const testboard = gameboard();
  testboard.newShip(3);
  testboard.newShip(4);

  testboard.ships[1].positions = [
    [1, 1],
    [1, 2],
  ];

  // expect(testboard.ships[1].positions[1][1]).toBe(2);

  expect(testboard.receiveAttack([1, 1])).toBe(true);
});

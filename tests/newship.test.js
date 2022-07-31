import { expect } from 'expect';
import { TestEnvironment } from 'jest-environment-node';

import { ship } from '../src/factories/ship';

test('hit method records a single hit', () => {
  const testShip = ship(3);
  testShip.hit([5, 6]);

  expect(testShip.hitLocations).toStrictEqual([[5, 6]]);
});

test('hit method records mulitple hits in correct order', () => {
  const testShip = ship(4);
  testShip.hit([1, 2]);
  testShip.hit([1, 3]);
  testShip.hit([1, 4]);
  expect(testShip.hitLocations).toStrictEqual([
    [1, 2],
    [1, 3],
    [1, 4],
  ]);
});

test('isSunk method returns true when each ship location has been hit', () => {
  const testShip = ship(2);
  testShip.hit([1, 2]);
  testShip.hit([2, 2]);

  expect(testShip.isSunk()).toBe(true);
});

test('isSunk method returns false when not all ship locations have been hit', () => {
  const testShip = ship(2);
  testShip.hit([1, 2]);

  expect(testShip.isSunk()).toBe(false);
});

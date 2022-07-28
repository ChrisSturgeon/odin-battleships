import { expect } from 'expect';
// import { test } from 'picomatch';
import { ship } from '../src/game-logic';

test('returns object', () => {
  expect(typeof ship('battleship', 4)).toBe('object');
});

test('has name property', () => {
  expect(ship('battleship', 4).hasOwnProperty('name')).toBe(true);
});

test('has length property', () => {
  expect(ship('battleship', 4).hasOwnProperty('length')).toBe(true);
});

test('throws if length argument is non-number type', () => {
  expect(() => {
    ship('battleship', 'four');
  }).toThrow();
});

test('has hit locations property', () => {
  expect(ship('battleship', 4).hasOwnProperty('hitLocations')).toBe(true);
});

test('his locations property is array', () => {
  expect(typeof ship('battleship', 4).hitLocations).toBe('object');
});

test('has sunk property', () => {
  expect(ship('battleship', 4).hasOwnProperty('sunk')).toBe(true);
});

test('sunk property returns as boolean', () => {
  expect(typeof ship('battleship', 4).sunk).toBe('boolean');
});

test('has hit method', () => {
  expect(ship('battleship', 4).hasOwnProperty('hit')).toBe(true);
});

test('hit method is function', () => {
  expect(typeof ship('battleship', 4).hit).toBe('function');
});

test('hit method records single hit', () => {
  const testShip = ship('battleship', 4);
  testShip.hit(2);
  expect(testShip.hitLocations).toStrictEqual([2]);
});

test('hit method records mulitple hits in correct order', () => {
  const testShip = ship('battleship', 4);
  testShip.hit(2);
  testShip.hit(1);
  testShip.hit(3);
  testShip.hit(4);
  expect(testShip.hitLocations).toStrictEqual([2, 1, 3, 4]);
});

test('has isSunk method', () => {
  expect(ship('battleship', 4).hasOwnProperty('isSunk')).toBe(true);
});

test('isSunk method is function', () => {
  expect(typeof ship('battleship', 4).isSunk).toBe('function');
});

test('isSunk method is true when hitLocations equal to ship lengh', () => {
  const testShip = ship('battleship', 4);
  testShip.hit(2);
  testShip.hit(1);
  testShip.hit(3);
  testShip.hit(4);
  expect(testShip.isSunk()).toBe(true);
});

test('isSunk method is false when hitLocations not equal to ship lengh', () => {
  const testShip = ship('battleship', 4);
  testShip.hit(2);
  testShip.hit(3);
  testShip.hit(4);
  expect(testShip.isSunk()).toBe(false);
});

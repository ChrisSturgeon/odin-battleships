import { expect } from 'expect';
import { player } from '../src/factories/player';
import { gameboard } from '../src/factories/gameboard';

test('player returns object', () => {
  expect(typeof player()).toBe('object');
});

test('fire method sends attack to gameboard object', () => {
  const enemyBoard = gameboard();
  const user = player();

  user.fire(enemyBoard, [5, 5]);
  user.fire(enemyBoard, [6, 5]);

  expect(enemyBoard.missedShots).toStrictEqual([
    [5, 5],
    [6, 5],
  ]);
});

test('fire method sends hits gameboard ship', () => {
  const enemyBoard = gameboard();
  enemyBoard.newShip(2, 3, 3, 'vertical');
  const user = player();

  user.fire(enemyBoard, [3, 3]);
  user.fire(enemyBoard, [3, 4]);

  expect(enemyBoard.areShipsSunk()).toBe(true);
});

test('fire method stores fired coordinates in player object array', () => {
  const user = player();
  const enemyBoard = gameboard();
  user.fire(enemyBoard, [3, 3]);

  expect(user.firedShots).toStrictEqual([[3, 3]]);
});

test('isOriginaShot method returns true if coordindate has not already been fired upon', () => {
  const user = player();
  const enemyBoard = gameboard();
  user.fire(enemyBoard, [3, 3]);

  expect(user.isOriginalShot([1, 1])).toBe(true);
});

test('isOriginaShot method returns false if coordindate has already been fired upon', () => {
  const user = player();
  const enemyBoard = gameboard();
  user.fire(enemyBoard, [3, 3]);

  expect(user.isOriginalShot([3, 3])).toBe(false);
});

test('randomFire method fires on enemy board', () => {
  const user = player();
  const enemyBoard = gameboard();
  user.randomFire(enemyBoard);

  expect(enemyBoard.missedShots.length).toBe(1);
});

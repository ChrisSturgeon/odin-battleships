
import { ship } from '../src/game-logic';

test('expect object', () => {
  expect(typeof(ship())).toBe('object');
})
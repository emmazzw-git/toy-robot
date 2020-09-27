import { handleRobot } from './handleRobot';
import { Table } from '../table/table';

describe('handleRobot Test Suite', () => {
  const table = new Table(5, 5);

  test('should return robot OnTable State with position and facing', () => {
    const result = handleRobot(table, [
      { command: 'Place', x: 0, y: 0, facing: 'North' },
      { command: 'Right' },
      { command: 'Move' },
      { command: 'Left' },
      { command: 'Move' },
      { command: 'Move' },
      { command: 'Report' }
    ]);
    expect(result).toEqual({
      state: 'OnTable',
      x: 1,
      y: 2,
      facing: 'North'
    });
  });

  test('should return robot Out of Table when placed out', () => {
    const result = handleRobot(table, [
      { command: 'Place', x: 0, y: 9, facing: 'North' }
    ]);
    expect(result).toEqual({
      state: 'OutOfTable'
    });
  });

  test('should return robot Out of Table when not placed', () => {
    const result = handleRobot(table, [
      { command: 'Move' }
    ]);
    expect(result).toEqual({
      state: 'OutOfTable'
    });
  });

  test('should return robot OutOfTable State', () => {
    const result = handleRobot(table, []);
    expect(result).toEqual({
      state: 'OutOfTable'
    });
  });
});

import { handlePlace } from './handlePlace';
import { Table } from '../table/table';

describe('handlePlace Test Suite', () => {
  const table = new Table(5, 5);
  test('should return current state of the robot on the table', () => {
    const result = handlePlace(
      table,
      {
        state: 'OnTable',
        x: 1,
        y: 4,
        facing: 'West'
      },
      1,
      0,
      'South'
    );
    expect(result).toEqual({
      state: 'OnTable',
      x: 1,
      y: 0,
      facing: 'South'
    });
  });

  test('should return current state of the robot out of table', () => {
    const result = handlePlace(
      table,
      {
        state: 'OutOfTable'
      },
      9,
      0,
      'South'
    );
    expect(result).toEqual({
      state: 'OutOfTable'
    });
  });
});
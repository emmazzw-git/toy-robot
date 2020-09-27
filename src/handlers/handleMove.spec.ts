import { handleMove } from './handleMove';
import { Table } from '../table/table';

describe('handleMove Test Suite', () => {
  const table = new Table(5, 5);
  test('should return current state on the table after moving west', () => {
    const result = handleMove(
      table,
      {
        state: 'OnTable',
        x: 1,
        y: 4,
        facing: 'West'
      });
    expect(result).toEqual({
      state: 'OnTable',
      x: 0,
      y: 4,
      facing: 'West'
    });
  });

  test('should return current state on the table after moving east', () => {
    const result = handleMove(
      table,
      {
        state: 'OnTable',
        x: 1,
        y: 4,
        facing: 'East'
      });
    expect(result).toEqual({
      state: 'OnTable',
      x: 2,
      y: 4,
      facing: 'East'
    });
  });

  test('should return current state on the table after moving north', () => {
    const result = handleMove(
      table,
      {
        state: 'OnTable',
        x: 1,
        y: 4,
        facing: 'North'
      });
    expect(result).toEqual({
      state: 'OnTable',
      x: 1,
      y: 4,
      facing: 'North'
    });
  });

  test('should return current state on the table after moving south', () => {
    const result = handleMove(
      table,
      {
        state: 'OnTable',
        x: 1,
        y: 4,
        facing: 'South'
      });
    expect(result).toEqual({
      state: 'OnTable',
      x: 1,
      y: 3,
      facing: 'South'
    });
  });
});
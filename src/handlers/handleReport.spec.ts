import { handleReport } from './handleReport';

describe('handleReport Test Suite', () => {
  test('should return current state of the robot on the table', () => {
    const result = handleReport({
      state: 'OnTable',
      x: 1,
      y: 4,
      facing: 'West'
    });
    expect(result).toEqual({
      state: 'OnTable',
      x: 1,
      y: 4,
      facing: 'West'
    });
  });
});
import { handleLeft } from './handleLeft';

describe('handleLeft Test Suite', () => {
  test('should return current state of the robot on the table after turning left', () => {
    const result = handleLeft({
      state: 'OnTable',
      x: 1,
      y: 4,
      facing: 'West'
    });
    expect(result).toEqual({
      state: 'OnTable',
      x: 1,
      y: 4,
      facing: 'South'
    });
  });
});
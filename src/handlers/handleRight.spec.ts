import { handleRight } from './handleRight';

describe('handleRight Test Suite', () => {
  test('should return current state of the robot on the table after turning right', () => {
    const result = handleRight({
      state: 'OnTable',
      x: 1,
      y: 4,
      facing: 'West'
    });
    expect(result).toEqual({
      state: 'OnTable',
      x: 1,
      y: 4,
      facing: 'North'
    });
  });
});
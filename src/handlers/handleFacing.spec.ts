import { handleFacing } from './handleFacing';

describe('handleFacing Test Suite', () => {
  test('should return current facing value - north', () => {
    const result = handleFacing('NORTH');
    expect(result).toEqual('North');
  });

  test('should return current facing value - south', () => {
    const result = handleFacing('SOUTH');
    expect(result).toEqual('South');
  });

  test('should return current facing value - west', () => {
    const result = handleFacing('WEST');
    expect(result).toEqual('West');
  });

  test('should return current facing value - east', () => {
    const result = handleFacing('EAST');
    expect(result).toEqual('East');
  });

  test('should return invalid facing value - southeast', () => {
    expect(
      () => handleFacing('SOUTHEAST')
    ).toThrow();
  });
});
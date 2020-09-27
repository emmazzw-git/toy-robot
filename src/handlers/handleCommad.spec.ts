import { handleCommand } from './handleCommand';

describe('handleCommand Test Suite', () => {
  test('should return Place command', () => {
    const result = handleCommand('PLACE 0,0,NORTH');
    expect(result).toEqual({
      command: 'Place',
      x: 0,
      y: 0,
      facing: 'North',
    });
  });

  test('should return Move command', () => {
    const result = handleCommand('MOVE');
    expect(result).toEqual({ command: 'Move' });
  });

  test('should return Left command', () => {
    const result = handleCommand('LEFT');
    expect(result).toEqual({ command: 'Left' });
  });

  test('should return Right command', () => {
    const result = handleCommand('RIGHT');
    expect(result).toEqual({ command: 'Right' });
  });

  test('should return Report command', () => {
    const result = handleCommand('REPORT');
    expect(result).toEqual({ command: 'Report' });
  });

  test('should return invalid command - southeast', () => {
    expect(
      () => handleCommand('PUT 0,0,NORTH')
    ).toThrow();
  });
});
import { rotateLeft, rotateRight } from './rotation';

describe('rotation Test Suite', () => {
  describe('rotateLeft', () => {
    test('should return rotate left from north to west', () => {
      const result = rotateLeft('North');
      expect(result).toEqual('West');
    });
        
    test('should return rotate left from west to south', () => {
      const result = rotateLeft('West');
      expect(result).toEqual('South');
    });
        
    test('should return rotate left from south to east', () => {
      const result = rotateLeft('South');
      expect(result).toEqual('East');
    });
        
    test('should return rotate left from east to north', () => {
      const result = rotateLeft('East');
      expect(result).toEqual('North');
    });
  });

  describe('rotateRight', () => {
    test('should return rotate right from north to east', () => {
      const result = rotateRight('North');
      expect(result).toEqual('East');
    });
        
    test('should return rotate right from east to south', () => {
      const result = rotateRight('East');
      expect(result).toEqual('South');
    });
        
    test('should return rotate right from south to west', () => {
      const result = rotateRight('South');
      expect(result).toEqual('West');
    });

    test('should return rotate right from west to north', () => {
      const result = rotateRight('West');
      expect(result).toEqual('North');
    });
  });
});
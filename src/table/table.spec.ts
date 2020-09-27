import { Table } from "./table";

describe('Table', () => {
  const table = new Table(5, 5);
  describe('isOnTable', () => {
    test('should be on the table', () => {
      const result = table.isOnTable(0, 0);
      expect(result).toEqual(true);
    });

    test('should be out of the table', () => {
      const result = table.isOnTable(-9, 0);
      expect(result).toEqual(false);
    });

    test('should be out of the table', () => {
      const result = table.isOnTable(0, -7);
      expect(result).toEqual(false);
    });
  });

  describe('forwardX', () => {
    test('should not forward along x axis on the table', () => {
      const result = table.forwardX(7);
      expect(result).toEqual(4);
    });

    test('should forward along x axis on the table', () => {
      const result = table.forwardX(1);
      expect(result).toEqual(2);
    });
  });


  describe('forwardY', () => {
    test('should not forward along x axis on the table', () => {
      const result = table.forwardY(7);
      expect(result).toEqual(4);
    });

    test('should forward along x axis on the table', () => {
      const result = table.forwardY(1);
      expect(result).toEqual(2);
    });
  });

  describe('backwardX', () => {
    test('should not forward along x axis on the table', () => {
      const result = table.backwardX(4);
      expect(result).toEqual(3);
    });

    test('should forward along x axis on the table', () => {
      const result = table.backwardX(0);
      expect(result).toEqual(0);
    });
  });

  describe('backwardY', () => {
    test('should not forward along x axis on the table', () => {
      const result = table.backwardY(3);
      expect(result).toEqual(2);
    });

    test('should forward along x axis on the table', () => {
      const result = table.backwardY(0);
      expect(result).toEqual(0);
    });
  });
});
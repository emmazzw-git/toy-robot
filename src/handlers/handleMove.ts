import { Table } from '../table/table';
import { OnTable } from '../type/types';

export const handleMove = (table: Table, { state, x, y, facing }: OnTable): OnTable => {
  switch (facing) {
  case 'North':
    return { state, x, y: table.forwardY(y), facing };
  case 'East':
    return { state, y, x: table.forwardX(x), facing };
  case 'South':
    return { state, x, y: table.backwardY(y), facing };
  case 'West':
    return { state, y, x: table.backwardX(x), facing };
  }
};
  
import { Facing, XAxis, YAxis, OnTable, OutOfTable } from '../type/types';
import { Table } from '../table/table';

export const handlePlace = (
  table: Table,
  status: OnTable | OutOfTable,
  x: XAxis,
  y: YAxis,
  facing: Facing,
): OnTable | OutOfTable => {
  return table.isOnTable(x, y) ? { state: 'OnTable', x, y, facing } : status;
};
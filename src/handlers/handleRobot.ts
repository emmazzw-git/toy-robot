import { Table } from '../table/table';
import { Command, OnTable, OutOfTable } from '../type/types'; 

import { handlePlace } from './handlePlace';
import { handleMove } from './handleMove';
import { handleLeft } from './handleLeft';
import { handleRight } from './handleRight';
import { handleReport } from './handleReport';

export const handleRobot = (table: Table, commands: Command[]): OnTable | OutOfTable => commands.reduce(
  (state: OnTable | OutOfTable, comd: Command) => {
    if (comd.command === 'Place') {
      return handlePlace(table, state, comd.x, comd.y, comd.facing);
    }
  
    if (state.state === 'OnTable') {
      switch (comd.command) {
      case 'Move':
        return handleMove(table, state);
      case 'Left':
        return handleLeft(state);
      case 'Right':
        return handleRight(state);
      case 'Report':
        return handleReport(state);
      }
    } 
  
    return state;
  },
  {state: 'OutOfTable'}
);

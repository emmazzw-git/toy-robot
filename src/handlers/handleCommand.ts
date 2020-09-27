import { Command } from '../type/types';
import { handleFacing } from './handleFacing';

export const handleCommand = (command: string): Command => {
  const commandType: string[] = command.trim().split(/ |,/);
  switch (commandType[0]) {
  case 'PLACE':
    return {
      command: 'Place',
      x: parseInt(commandType[1], 10),
      y: parseInt(commandType[2], 10),
      facing: handleFacing(commandType[3]),
    };
  case 'MOVE':
    return { command: 'Move' };
  case 'LEFT':
    return { command: 'Left' };
  case 'RIGHT':
    return { command: 'Right' };
  case 'REPORT':
    return { command: 'Report' };
  default:
    throw new Error(`Invalid Command: ${commandType[0]}`);
  }
};
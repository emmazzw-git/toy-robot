import { Facing } from '../type/types';

export const handleFacing = (f: string): Facing => {
  switch (f) {
  case 'NORTH':
    return 'North';
  case 'SOUTH':
    return 'South';
  case 'WEST':
    return 'West';
  case 'EAST':
    return 'East';
  default:
    throw new Error(`Invalid Facing Value: ${f}`);
  }
};
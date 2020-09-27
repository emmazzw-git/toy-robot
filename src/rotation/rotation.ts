import { Facing } from '../type/types';

export const rotateLeft = (facing: Facing): Facing => {
  switch (facing) {
  case 'North':
    return 'West';
  case 'West':
    return 'South';
  case 'South':
    return 'East';
  case 'East':
    return 'North';
  }
};
  
export const rotateRight = (facing: Facing): Facing => {
  switch (facing) {
  case 'North':
    return 'East';
  case 'East':
    return 'South';
  case 'South':
    return 'West';
  case 'West':
    return 'North';
  }
};
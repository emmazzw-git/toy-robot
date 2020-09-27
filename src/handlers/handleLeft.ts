import { rotateLeft } from '../rotation/rotation';
import { OnTable } from '../type/types';

export const handleLeft = ({ state, x, y, facing }: OnTable): OnTable => ({
  state,
  x,
  y,
  facing: rotateLeft(facing),
});
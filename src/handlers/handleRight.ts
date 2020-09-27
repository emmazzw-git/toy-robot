import { rotateRight } from '../rotation/rotation';
import { OnTable } from '../type/types';

export const handleRight = ({ state, x, y, facing }: OnTable): OnTable => ({
  state,
  x,
  y,
  facing: rotateRight(facing),
});
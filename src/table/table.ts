import { XAxis } from '../type/types';
import { YAxis } from '../type/types';

export class Table {
    private maxX: XAxis;
    private minX: XAxis;
    private maxY: YAxis;
    private minY: YAxis;

    constructor(sizeX: number, sizeY: number) {
      this.maxX = sizeX - 1;
      this.minX = 0;
      this.maxY = sizeY - 1;
      this.minY = 0;
    }

    isOnTable = (x: XAxis, y: YAxis) : boolean  => 
      x >= this.minX && x <= this.maxX && y >= this.minY && y <= this.maxY;

    forwardX = (x: XAxis): XAxis => Math.min(x + 1, this.maxX);

    backwardX = (x: XAxis): XAxis => Math.max(x - 1, this.minX);
    
    forwardY = (y: YAxis): YAxis => Math.min(y + 1, this.maxY);
    
    backwardY = (y: YAxis): YAxis => Math.max(y - 1, this.minY);
}

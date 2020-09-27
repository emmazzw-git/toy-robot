export type North = 'North';
export type South = 'South';
export type West = 'West';
export type East = 'East';

export type Facing = North | South | West | East;

export type XAxis = number;
export type YAxis = number;

export type Place = {
    command: 'Place';
    x: XAxis;
    y: YAxis;
    facing: Facing;
};
  
export type Move = {
    command: 'Move';
};
  
export type Left = {
    command: 'Left';
};
    
export type Right = {
    command: 'Right';
};

export type Report = {
    command: 'Report';
};
  
export type Command = Place | Left | Right | Move | Report;

export type OnTable = {
    state: 'OnTable';
    x: XAxis;
    y: YAxis;
    facing: Facing;
};
  
export type OutOfTable = {
    state: 'OutOfTable';
};
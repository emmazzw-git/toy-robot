import request from 'supertest';
import { app }  from '../src/index';
describe('e2e', () => {
  it('should make robot roam and output robot position', async () => {
    const res = await request(app)
      .post('/command')
      .send({
        commands: [
          'PLACE 0,0,NORTH',
          'RIGHT',
          'MOVE',
          'LEFT',
          'MOVE',
          'MOVE',
          'REPORT'
        ]
      });
    expect(res.text).toEqual('Output: 1,2,NORTH');
  });

  it('should make robot roam and re-position the robot', async () => {
    const res = await request(app)
      .post('/command')
      .send({
        commands: [
          'PLACE 0,0,NORTH',
          'RIGHT',
          'MOVE',
          'LEFT',
          'MOVE',
          'MOVE',
          'PLACE 1,3,WEST',
          'MOVE',
          'MOVE',
          'PLACE 1,2,SOUTH',
          'REPORT'
        ]
      });
    expect(res.text).toEqual('Output: 1,2,SOUTH');
  });

  it('should output robot ouf of table as the command place the robot out', async () => {
    const res = await request(app)
      .post('/command')
      .send({
        commands: [
          'REPORT',
          'LEFT',
          'MOVE',
          'MOVE',
          'RIGHT',
          'PLACE 1,8,EAST',
          'MOVE',
          'RIGHT',
        ]
      });
    expect(res.text).toEqual('Output: Robot is out of table.');
  });

  it('should output robot ouf of table with no command as input', async () => {
    const res = await request(app)
      .post('/command')
      .send({
        commands: []
      });
    expect(res.text).toEqual('Output: Robot is out of table.');
  });
});
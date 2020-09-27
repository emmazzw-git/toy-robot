import express from 'express';
import * as bodyParser from 'body-parser';
import { Table } from './table/table';
import { handleCommand } from './handlers/handleCommand';
import { handleRobot } from './handlers/handleRobot';
import { Command, OnTable, OutOfTable } from './type/types';

// Create a new express app instance
export const app: express.Application = express();

app.use(bodyParser.json());

app.get('/', (req: express.Request, res:express.Response) => {
  res.send('Hello World!');
});

app.post('/command', (req: express.Request, res:express.Response) => {
  const table = new Table(5, 5);
  const requestBody: { commands: string[] } = req.body;
  const commands: Command[] = requestBody.commands.map((comd: string) => handleCommand(comd));
  const s: OnTable| OutOfTable = handleRobot(table, commands);
  res.send(`Output: ${s.state === 'OnTable' ? `${s.x},${s.y},${s.facing.toUpperCase()}`: 'Robot is out of table.'}`);
});

app.listen(3000, () => {
  console.log('App is listening on port 3000!');
}); 

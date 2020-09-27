# Toy Robot App 
This app simulate a robot roaming on a 5 by 5 grid table. The command is sent through the POST request body following the format,
```
{
    "commands": [
        "PLACE 0,0,NORTH",
        "RIGHT",
        "MOVE",
        "LEFT",
        "MOVE",
        "MOVE",
        "REPORT"
    ]
}
```
To be able to let he robot roam, we need to send a valid starting point. 

This App will report the robot out of the table if the robot is placed out of the table. 
This App will let the robot roam if the robot is placed on the table. After the robot is on the table, it roams to `North`, `South`, `East`, and `South` directions. When the robot roams to the border of the table, any further MOVE command will keep the robot stay on the table.

The robot has two status `OnTable` and `OutOfTable`. 

The command we send has five status `PLACE`, `LEFT`, `RIGHT`, `MOVE` and `REPORT`.

The position of the robot on the table consists of two indexes `XAxis` and `YAxis`.

## Getting Started
* Spin up a local express server on port 3000 and the source code is in typescript.

```
npm start
```

* Build the app to /dist dir in es2015

```bash
npm run build
```

* Run eslint

```bash
npm run lint
```

* Run unit test with coverage
- This app has 100% unit test coverage

```bash
npm run test
```

* Run e2e test

```bash
npm tun e2e
```

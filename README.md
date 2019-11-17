# Redcastus

Simple server status for Express Middleware

> Developed with ❤ by Percenuage.

## Installation

```bash
$ npm install --save redcactus
```

## Usage

1. Edit your express application like this:

```js
const express = require('express');
const status = require('redcactus');
const app = express();

app.use('/status', status());

app.listen(3000);
```

2. Start your server with `npm start` or equivalent

3. You can access to your server status at [localhost:3000/status](http://localhost:3000/status).

4. Enjoy!

See status example:

```json
{
  "server": {
    "status": "up",
    "name": "redcactus",
    "version": "1.0.0",
    "description": "Simple server status for Express Middleware",
    "started_at": "2019-11-17T17:43:19+01:00",
    "uptime": 3,
    "uptime_human": "a few seconds ago"
  },
  "git": {
    "sha": "e377f30",
    "branch": "master",
    "subject": "Implement foo",
    "author": {
      "name": "John Doe",
      "email": "jdoe@gmail.com"
    }
  }
}
```

## Important Notes

In order to access to your `package.json`, I suppose it locate in your **root directory** (in the most cases).
So I'm using `process.cwd()` to know to your root path of your npm project.

If you run your project from a different directory where there is your `package.json`, it may not work properly.

## Test

```bash
$ npm i && npm test
```

## Contribute

I will be happy to know your suggestions to improve this package :)



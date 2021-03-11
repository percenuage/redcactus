const express = require('express');
const status = require('../src/redcactus');

const app = express();

app.use(status({ disableGitStatus: false }));

app.listen(process.env.PORT || 3000, () => console.log('Server listening @ 3000'));

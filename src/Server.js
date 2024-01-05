// const express = require('express');
// const bodyParser = require('body-parser');
// const fs = require('fs');

// const app = express();
// const port = 3001;

// app.use(bodyParser.json());

// app.post('/api/signup', (req, res) => {
//   const existingData = fs.existsSync('users.json') ? JSON.parse(fs.readFileSync('users.json')) : [];
//   const newData = [...existingData, req.body];
//   fs.writeFileSync('users.json', JSON.stringify(newData, null, 2));
//   res.json({ message: 'User registered successfully' });
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3001;

app.use(bodyParser.json());

app.post('/api/signup', (req, res) => {
  const existingData = fs.existsSync('users.json') ? JSON.parse(fs.readFileSync('users.json')) : [];
  const newData = [...existingData, req.body];
  fs.writeFileSync('users.json', JSON.stringify(newData, null, 2));

  res.json({ message: 'User registered successfully' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

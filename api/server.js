
const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, '..', 'dist')));
app.get('/api/localdb', (req, res) => {
  res.sendFile(path.join(__dirname, 'localdb.json'));
});
app.get('/api/search', (req, res) => {
  res.sendFile(path.join(__dirname, 'localdb.json'));
});
const port = process.env.PORT || 3000;
app.listen(port, ()=>console.log('Server listening on', port));

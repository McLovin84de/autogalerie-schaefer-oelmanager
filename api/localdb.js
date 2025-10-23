
const fs = require('fs');
const path = require('path');
module.exports = async (req, res) => {
  const dbPath = path.join(__dirname, 'localdb.json');
  const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(db));
};

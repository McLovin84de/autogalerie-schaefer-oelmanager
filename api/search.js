
const fs = require('fs');
const path = require('path');

module.exports = async (req, res) => {
  try {
    const q = (req.query.q || '').toLowerCase();
    const dbPath = path.join(__dirname, 'localdb.json');
    const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

    let results = db.filter(item => {
      if (!q) return true;
      return (item.bezeichnung && item.bezeichnung.toLowerCase().includes(q)) ||
             (item.freigaben && item.freigaben.toLowerCase().includes(q)) ||
             (item.hersteller && item.hersteller.toLowerCase().includes(q));
    });

    // Placeholder for real price fetching:
    // Implement actual web-scrapers or API calls here. Use environment variables for keys.
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(results));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

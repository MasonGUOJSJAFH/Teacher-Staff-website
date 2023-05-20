const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Create a database connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'hujian',
  database: 'databasedua',
});

// Parse the request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Create the profiles route
app.post('/api/profiles', (req, res) => {
  const { name, title, researchField } = req.body;

  // Perform the insert operation to save the data to the database
  const query = `INSERT INTO profiles (name, title, researchField) VALUES (?, ?, ?)`;
  pool.query(query, [name, title, researchField], (error, results) => {
    if (error) {
      console.error('Error inserting profile:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.status(200).json({ success: true });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

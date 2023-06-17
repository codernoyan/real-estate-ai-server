require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());

// Actual Route
(function run() {
  try {
    app.get('/', (req, res) => {
      res.send('server is running broh');
    });
  } catch (err) {
    console.error(err);
  }
})();

app.listen(port, () => console.log(`App listening on port ${port}!`));

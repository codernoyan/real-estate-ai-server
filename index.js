require('dotenv').config();
const lol = require('./routes/lol');
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());
app.use('/', lol);

app.listen(port, () => console.log(`App listening on port ${port}!`));

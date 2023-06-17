require('dotenv').config();
const lol = require('./routes/lol');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));



app.listen(port, () => console.log(`Server is listening on port: ${port}`));

const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const morgan = require('morgan');
const { dbConnect } = require('./mongodb/mongodb.config');
const openAiRoutes = require('./routes/openAiRoutes');
const propertiesRoutes = require('./routes/propertiesRoutes');
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// run mongodb
dbConnect();

// open ai api routes
app.use('/openai', openAiRoutes);

// properties routes
app.use('/properties', propertiesRoutes);

// default get route
app.get('/', (req, res) => {
  res.send('Real Estate server is running');
});

app.listen(port, () => console.log(`Server is listening on http://localhost:${port}`));

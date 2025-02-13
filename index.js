const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');


const db = require('./config/mongoose.js');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
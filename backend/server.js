const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

const PORT = 5000;

app.get('/', (req, res) => res.send('Hello from Express backend!'));

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
  })
  .catch(err => console.error(err));

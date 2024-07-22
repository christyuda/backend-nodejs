const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bookRoutes = require('./src/routes/bookRoutes');
const { errorHandler } = require('./src/middleware/errorHandler');
const { connectDB } = require('./src/config/db');

const app = express();
const port = process.env.PORT || 5000;

connectDB();

app.use(bodyParser.json());

app.use('/api/books', bookRoutes);

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

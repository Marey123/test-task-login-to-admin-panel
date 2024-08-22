const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const app = express();

require('dotenv').config();

connectDB();

app.use(express.json());
app.use(cors());

app.use('/api/auth', require('./routes/authRoutes'));

const PORT = 9000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

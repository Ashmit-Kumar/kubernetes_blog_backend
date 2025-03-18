const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const postRoutes = require('./routes/blogRoutes');
const connectDB = require('./DB/connectDB')
const express = require('express')
dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
const dbName=process.env.DBNAME;
connectDB(dbName);

// Routes
app.use('/api', postRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});

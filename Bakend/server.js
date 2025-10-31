const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const { sequelize } = require('./models');

dotenv.config();
const app = express();

// ✅ CORS paling atas
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
  optionsSuccessStatus: 200
}));

// ✅ Parser (ditingkatkan limit-nya)
app.use(cookieParser());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// ✅ Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/categories', require('./routes/categoryRoutes'));
app.use('/api/documents', require('./routes/documentRoutes'));
app.use('/api/sections', require('./routes/sectionRoutes'));
app.use('/api/upload', require('./routes/uploadRoutes'));
app.use('/uploads', express.static('uploads'));

// ✅ DB
sequelize.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error connecting to database: ' + err));

sequelize.sync({ force: false, alter: true })

  .then(() => console.log('Database synced successfully!'))
  .catch(err => console.error('Error syncing database:', err));

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

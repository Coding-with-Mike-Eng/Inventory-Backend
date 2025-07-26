import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import medicineRoutes from './Routes/MedicineRoutes.js';

// Load environment variables
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// API Routes
app.use('/api/medicines', medicineRoutes);

// Start Server
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Backend is running ✅');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


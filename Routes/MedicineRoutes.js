
import express from 'express';
import Medicine from '../Models/Medicine.js'; // ✅ Make sure this path is correct

const router = express.Router();

// ✅ GET all medicines
router.get('/', async (req, res) => {
    try {
        const medicines = await Medicine.find();
        res.status(200).json(medicines);
    } catch (error) {
        console.error('Error fetching medicines:', error);
        res.status(500).json({ error: 'Failed to fetch medicines' });
    }
});

// ✅ POST new medicine
router.post('/', async (req, res) => {
    try {
        const { name, manufacturer, stock, price, expiryDate } = req.body;

        console.log('➡️ Received from frontend:', req.body); // ✅ DEBUG log

        const newMedicine = new Medicine({
            name,
            manufacturer,
            stock,
            price,
            expiryDate
        });

        const savedMedicine = await newMedicine.save();

        console.log('✅ Saved to DB:', savedMedicine); // ✅ DEBUG log

        res.status(201).json(savedMedicine); // ✅ send back to frontend
    } catch (error) {
        console.error('❌ Error saving medicine:', error);
        res.status(400).json({ error: 'Failed to save medicine' });
    }
});

export default router;




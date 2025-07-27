
import express from 'express';
import Medicine from '../Models/Medicine.js'; // adjust the path if needed

const router = express.Router();

// ✅ GET: fetch all medicines
router.get('/', async (req, res) => {
    try {
        const medicines = await Medicine.find();
        res.json(medicines);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch medicines' });
    }
});

// ✅ POST: add a new medicine
router.post('/', async (req, res) => {
    try {
        const { name, manufacturer, stock, price, expiryDate } = req.body;

        const newMedicine = new Medicine({
            name,
            manufacturer,
            stock,
            price,
            expiryDate
        });

        const savedMedicine = await newMedicine.save();

        // ✅ return saved object so frontend can update
        res.status(201).json(savedMedicine);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Failed to save medicine' });
    }
});

export default router;



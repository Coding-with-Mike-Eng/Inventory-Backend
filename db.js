// Backend/db.js
const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://apollomike7:Kabondo%401993@clusterapp.92yv1j6.mongodb.net/?retryWrites=true&w=majority&appName=ClusterApp"


const client = new MongoClient(uri);

async function connectDB() {
    try {
        await client.connect();
        console.log("✅ Connected to MongoDB");
        return client.db('ClusterApp'); // replace with your DB name
    } catch (err) {
        console.error("❌ MongoDB connection error:", err);
    }
}

module.exports = connectDB;

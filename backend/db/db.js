const mongoose  = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectToDb = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECT, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB Connected...");
    } catch (error) {
        console.error("MongoDB Connection Error:", error);
        process.exit(1);
    }
};



module.exports = connectToDb;
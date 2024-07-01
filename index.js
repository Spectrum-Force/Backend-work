import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect to database
await mongoose.connect(process.env.MONGO_URL);


dbConnection()

// create Express App
const app = express();




// Listem for incoming requests
app.listen(3000, () =>{
    console.log('App is listening on port 3000')
});
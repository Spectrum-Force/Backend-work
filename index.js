import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import { dbConnection } from './config/db.js';
import userRouter from './Routes/user.js';
import authRouter from './Controllers/auth.js';


// Connect to database
await mongoose.connect(process.env.MONGO_URL);


dbConnection()

// create Express App
const app = express();

//Apply middlewares
app.use(express.json());

// routes
app.use( userRouter);
app.use( authRouter);


// Listem for incoming requests
app.listen(3030, () =>{
    console.log('App is listening on port 3030')
});
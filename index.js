import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import cors from 'cors';
import expressOasGenerator from 'express-oas-generator';
import { dbConnection } from './config/db.js';
import userRouter from './Routes/user.js';
import authenticationRouter from './Routes/auth.js';
import eventRouter from './Routes/event_router.js';


// Connect to database
await mongoose.connect(process.env.MONGO_URL);


dbConnection()

// create Express App
const app = express();
// The following lines of code are to generate the documentation. First install express-oas-generator
expressOasGenerator.handleResponses(app, {
    alwaysServeDocs: true,
    tags: ['events', 'users'],
    mongooseModels: mongoose.modelNames(),
});

//Apply middlewares
app.use(express.json());
app.use(cors());

// routes
app.use( userRouter);
app.use( authenticationRouter);
app.use(eventRouter);


// Listem for incoming requests
app.listen(3030, () =>{
    console.log('App is listening on port 3030')
});
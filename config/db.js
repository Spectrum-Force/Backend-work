import mongoose from "mongoose";
import 'dotenv/config';


const connectionstring = process.env.Mongo_URL;

export const dbConnection = () =>{
    mongoose.connect(connectionstring).then(() =>{
        console.log('Databse is connected');
    })
}
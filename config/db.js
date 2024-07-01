import mongoose from "mongoose";
import 'dotenv/config';

const connectionstring = process.env.Mongo_url;

export const dbConnection = () =>{
    mongoose.connect(connectionstring).then(() =>{
        console.log('Databse is connected');
    })
}
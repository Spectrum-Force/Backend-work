// import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const eventSchema = new Schema ({
    eventName: {type: String},
    description: {type: String},
    date: {type: Date},
    price: {type: Number},
    location: {type: String},
    flyer: {type: String}
})

export const eventModel = model('event', eventSchema)
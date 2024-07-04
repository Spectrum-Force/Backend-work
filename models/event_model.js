// import mongoose from "mongoose";
import { Schema, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const eventSchema = new Schema ({
    eventName: {type: String},
    description: {type: String},
    date: {type: String},
    price: {type: Number},
    location: {type: String},
    flyer: {type: String}
})

eventSchema.plugin(toJSON);

export const eventModel = model('event', eventSchema)
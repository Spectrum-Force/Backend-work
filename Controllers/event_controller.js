import { eventModel } from "../models/event_model.js";

// Endpoint to post events
export const addEvent = async (req, res, next) => {
    try {
        // Declare a variable to store the data posted
        const addData = await eventModel.create({
            ...req.body,
            flyer: req.file.filename
        });
        // console.log('request', req.body)
        res.status(200).json(addData)
    } catch (error) {
        next(error)
    }
}

// Endpoint to get all events
export const getEvents = async (req, res, next) => {
    try {
        // Get query parameters
        const { 
            filter = "{}", //use curly braces when expecting something to return as an object
            sort = "{}",
            fields = "{}",
            limit = 10, 
            skip = 0 
         } = req.query;
        // Get all categories from database
        const allEvents = await eventModel
            .find(JSON.parse(filter))
            .sort(JSON.parse(sort))
            .select(JSON.parse(fields))
            .limit(limit)
            .skip(skip);
// Return response
res.status(200).json(allEvents);
    } catch (error) {
        next(error)
    }
}

// Endpoint to get an event with a unique id
export const getEvent = async (req, res, next) => {
    try {
        const event = await eventModel.findById(req.params.id)
        console.log(`Event with ID ${req.params.id} has been retrieved`)
        res.status(200).json(event)
    } catch (error) {
        next(error)
    }
}

// Endpoint to update the details of an event
export const patchEvent = async (req, res, next) => {
    try {
        // Update recipe ny id
        const updatedEvent = await eventModel.findByIdAndUpdate(req.params.id, 
            {...req.body, image: req?.file?.filename},
                {new: true })
        // Return response
        res.json(updatedEvent)
    } catch (error) {
        next(error)
    }
}

// Endpoint to delete an event with a unique id
export const deleteEvent = async (req, res, next) => {
    try {
        const deleteData = await eventModel.findByIdAndDelete(req.params.id)
        console.log(`Event with ID ${req.params.id} has been deleted`)
        res.json(`Event with ID ${req.params.id} has been deleted`)
    } catch (error) {
        next(error)
    }
}
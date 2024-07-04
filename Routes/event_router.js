import { Router } from "express";
import { addEvent, deleteEvent, getEvent, getEvents, patchEvent } from "../Controllers/event_controller.js";
import { remoteUpload } from "../middleware/upload.js";

// Create a router
const eventRouter = Router();

// Define routes
// Post an event
eventRouter.post('/events', remoteUpload.single('flyer'), addEvent)

// Get all events
eventRouter.get('/events', getEvents)

// Get event with a unique ID
eventRouter.get('/events/:id', getEvent)

// Update an event
eventRouter.patch('/events/:id', remoteUpload.single('flyer'), patchEvent)

// Delete an event
eventRouter.delete('/events/:id', deleteEvent)

export default eventRouter
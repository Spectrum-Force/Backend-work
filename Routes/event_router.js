import { Router } from "express";
import { addEvent, deleteEvent, getEvent, getEvents, patchEvent } from "../Controllers/event_controller";

// Create a router
const eventRouter = Router();

// Define routes
// Post an event
eventRouter.post('/events', addEvent)

// Get all events
eventRouter.get('/events', getEvents)

// Get event with a unique ID
eventRouter.get('/events', getEvent)

// Update an event
eventRouter.patch('/events', patchEvent)

// Delete an event
eventRouter.delete('/events', deleteEvent)
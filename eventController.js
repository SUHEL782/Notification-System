const Event = require('../models/event'); 
exports.createEvent = async (req, res) => {
    try {
        const { title, description, date, category } = req.body;
        
       
        const newEvent = new Event({
            title,
            description,
            date,
            category
        });
        
        await newEvent.save();
        res.status(201).json({ message: 'Event created successfully', event: newEvent });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating event', error: error.message });
    }
};
exports.getAllEvents = async (req, res) => {
    try {
        const events = await Event.find().sort({ date: 1 }); 
        res.status(200).json(events);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching events', error: error.message });
    }
};
exports.getEventsByCategory = async (req, res) => {
    const { category } = req.params;
    try {
        const events = await Event.find({ category }).sort({ date: 1 });
        if (events.length === 0) {
            return res.status(404).json({ message: `No events found for category: ${category}` });
        }
        res.status(200).json(events);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching events by category', error: error.message });
    }
};
exports.registerForEvent = async (req, res) => {
    const { eventId, userId } = req.body;
    try {
        const event = await Event.findById(eventId);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        if (!event.registeredUsers) {
            event.registeredUsers = [];
        }
        
        if (event.registeredUsers.includes(userId)) {
            return res.status(400).json({ message: 'User already registered for this event' });
        }

        event.registeredUsers.push(userId);
        await event.save();
        res.status(200).json({ message: 'Registration successful', event });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error registering for event', error: error.message });
    }
};

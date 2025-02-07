const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
router.post('/events', eventController.createEvent);
router.get('/events', eventController.getAllEvents);
router.get('/events/category/:category', eventController.getEventsByCategory);
router.post('/events/register', eventController.registerForEvent);

module.exports = router;

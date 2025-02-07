const cron = require('node-cron');
const Event = require('../models/Event');
const awsSnsService = require('../services/awsSnsService');
cron.schedule('0 8 * * *', async () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const events = await Event.find({ date: { $lte: tomorrow } });
  events.forEach(async (event) => {
    event.attendees.forEach(async (userId) => {
      const user = await User.findById(userId);
      if (user) {
        const message = `Reminder: ${event.title} is happening tomorrow at ${event.location}.`;
        await awsSnsService.sendNotification(user.phoneNumber, message);
      }
    });
  });
});
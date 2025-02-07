const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/users/register', userController.registerUser);
router.put('/users/:userId/preferences', userController.updatePreferences);
module.exports = router;
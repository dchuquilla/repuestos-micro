const express = require('express');
const chatbotController = require('./controllers/chatbotController');

const router = express.Router();

// ...existing code...

router.use('/chatbot', chatbotController);

module.exports = router;

const express = require('express');
const router = express.Router();

// ...existing code...

router.get('/', (req, res) => {
  res.send('Chatbot service is running');
});

module.exports = router;

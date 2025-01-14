const express = require('express');
const app = require('./app');
const routes = require('./adapters/routes');

const port = 3000;

// ...existing code...

app.use('/', routes);

app.listen(port, () => {
  console.log(`Chatbot service listening at http://localhost:${port}`);
});

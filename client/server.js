const express = require('express');
const path = require('path');

const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(path.join(__dirname, '../build/client')));

app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, '../build/client', 'index.html'));
});

app.listen(port);
console.log(`Server started on port ${port}`);

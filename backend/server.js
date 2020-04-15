// Basic
const http = require('http');
// Express app import
const app = require('./app');

// Server
app.set('port', process.env.PORT || 3000);
const server = http.createServer(app);

// Listening
server.listen(process.env.PORT || 3000);
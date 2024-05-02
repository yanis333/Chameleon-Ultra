//Import express
import express from "express";
const app = express();

const PORT = 3000;

//Socket and HTTP
const http = require('http');
const { Server } = require('socket.io');

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello from Node.js!");
});

// Start server
app.listen(PORT, () => { console.log("Server started on port 3000")});


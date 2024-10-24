const express = require('express');
const winston = require('winston');
const path = require('path');
const cors = require('cors');
const fs = require('fs');

const app = express();


// Configuración de winston
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'server.log' })
  ]
});




app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  logger.info(`Received request: ${req.method} ${req.url}`);
  next();
});


// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve index.html for the root URL
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/data', (req, res) => {
  fs.readFile(path.join(__dirname, 'data.json'), 'utf8', (err, data) => {
    if (err) {
      logger.error('Error reading JSON file:', err);
      return res.status(500).json({ error: 'Failed to read JSON file' });
    }
    res.json(JSON.parse(data));
  });
});

app.post("/aduid", async (req, res) => {
    console.log(req.body)
    return res.status(200);
  });

const start = async () => {
    try {
      app.listen(3000, () => console.log("Server started on port 3000"));
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  };
  
  start();
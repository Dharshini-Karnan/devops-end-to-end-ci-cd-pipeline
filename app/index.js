const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const APP_VERSION = "1.0.0";

let visitCount = 0;

/* =========================
   LOGGING SETUP
========================= */
const logsDir = path.join(__dirname, 'logs');
const logFile = path.join(logsDir, 'app.log');

try {
  if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir, { recursive: true });
  }
  if (!fs.existsSync(logFile)) {
    fs.writeFileSync(logFile, '');
  }
} catch (err) {
  console.error("Log setup error:", err.message);
}

function writeLog(message) {
  try {
    const logMessage = `${new Date().toISOString()} - ${message}\n`;
    fs.appendFileSync(logFile, logMessage);
  } catch (err) {
    console.error("Log write error:", err.message);
  }
}

/* =========================
   STATIC UI
========================= */
app.use(express.static(path.join(__dirname, 'public')));

/* =========================
   API ROUTES
========================= */

// Status API
app.get('/api/status', (req, res) => {
  visitCount++;
  writeLog(`Status API accessed | Count: ${visitCount}`);

  res.json({
    message: "DevOps Service is running",
    version: APP_VERSION,
    visits: visitCount,
    time: new Date()
  });
});

// Health API
app.get('/health', (req, res) => {
  writeLog("Health check accessed");

  res.status(200).json({
    status: "UP",
    uptime: process.uptime(),
    version: APP_VERSION
  });
});

/* =========================
   UI FALLBACK ROUTE
========================= */
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

/* =========================
   START SERVER
========================= */
app.listen(PORT, () => {
  writeLog(`Application started on port ${PORT}`);
  console.log(`App running on port ${PORT}`);
});

const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;
const DATA_FILE = path.join(__dirname, "contactData.json");

// Middleware
app.use(cors()); // allow your React dev server (http://localhost:3000) to talk to this backend
app.use(express.json({ limit: "200kb" }));

// Ensure file exists
if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, JSON.stringify([] , null, 2), "utf8");
}

// Basic input validator & sanitizer helper
function sanitizeString(str = "") {
  // simple sanitize - trim and remove weird control chars
  return String(str).trim().replace(/[\u0000-\u001f\u007f-\u009f]/g, "");
}

// POST endpoint to save data
app.post("/save-data", (req, res) => {
  try {
    const { name, email, message } = req.body || {};

    // Server-side validation
    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, error: "name, email and message are required." });
    }

    // Basic email check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(String(email))) {
      return res.status(400).json({ ok: false, error: "invalid email address." });
    }

    const entry = {
      id: Date.now(),
      name: sanitizeString(name),
      email: sanitizeString(email),
      message: sanitizeString(message),
      createdAt: new Date().toISOString()
    };

    // Read current file
    const raw = fs.readFileSync(DATA_FILE, "utf8");
    const arr = JSON.parse(raw || "[]");

    // Append and write back (atomic-ish)
    arr.push(entry);
    fs.writeFileSync(DATA_FILE, JSON.stringify(arr, null, 2), "utf8");

    return res.json({ ok: true, saved: entry });
  } catch (err) {
    console.error("Error saving data:", err);
    return res.status(500).json({ ok: false, error: "internal server error" });
  }
});

// Test endpoint
app.get("/", (req, res) => res.send("Contact backend is running. POST /save-data to save contact entries."));

app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));

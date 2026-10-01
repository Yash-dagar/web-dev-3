const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// ==========================================
// 1. MIDDLEWARE
// ==========================================

// Enable CORS (Cross-Origin Resource Sharing)
app.use(cors());

// HTTP request logger
app.use(morgan('dev'));

// Parse incoming JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static HTML/CSS/JS files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// ==========================================
// 2. SAMPLE IN-MEMORY DATA
// ==========================================

let items = [
  { id: 1, title: 'Learn Web Development', completed: true },
  { id: 2, title: 'Build a Node.js API', completed: false }
];

// ==========================================
// 3. API ROUTES
// ==========================================

// GET: Fetch all items
app.get('/api/items', (req, res) => {
  res.status(200).json({ success: true, count: items.length, data: items });
});

// GET: Fetch a single item by ID
app.get('/api/items/:id', (req, res) => {
  const item = items.find((i) => i.id === parseInt(req.params.id));
  if (!item) {
    return res.status(404).json({ success: false, message: 'Item not found' });
  }
  res.status(200).json({ success: true, data: item });
});

// POST: Add a new item
app.post('/api/items', (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ success: false, message: 'Title is required' });
  }

  const newItem = {
    id: items.length ? items[items.length - 1].id + 1 : 1,
    title,
    completed: false
  };

  items.push(newItem);
  res.status(201).json({ success: true, data: newItem });
});

// DELETE: Delete an item
app.delete('/api/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const exists = items.some((item) => item.id === id);

  if (!exists) {
    return res.status(404).json({ success: false, message: 'Item not found' });
  }

  items = items.filter((item) => item.id !== id);
  res.status(200).json({ success: true, message: `Item ${id} deleted` });
});

// ==========================================
// 4. FRONTEND FALLBACK (SPA Support)
// ==========================================

// Catch-all route to serve index.html for unrecognized GET routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ==========================================
// 5. ERROR HANDLING MIDDLEWARE
// ==========================================

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Internal Server Error',
    error: process.env.NODE_ENV === 'development' ? err.message : {}
  });
});

// ==========================================
// 6. START SERVER
// ==========================================

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
app.on('error', (err) => {
  console.error('Server error:', err);
});
app.on('close', () => {
  console.log('Server closed');
});
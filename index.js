const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse incoming JSON
app.use(express.json());

// ✅ Root endpoint — can be used for basic testing
app.post('/', (req, res) => {
  const { transcript, conversation_id, phone_number } = req.body;
  console.log('Received data at /:', req.body);

  res.json({
    status: 'Success',
    message: 'Data received successfully at root endpoint',
  });
});

// ✅ Call endpoint — for initiating mock outbound calls
app.post('/call', async (req, res) => {
  const { phone_number, message } = req.body;

  if (!phone_number || !message) {
    return res.status(400).json({ error: 'Missing phone_number or message' });
  }

  console.log(`Initiating call to ${phone_number} with message: "${message}"`);

  res.json({
    status: 'Call initiated',
    to: phone_number,
    message,
    info: 'Mock call only — connect actual call logic here.',
  });
});

// ✅ Log all available routes for debugging (optional)
app._router.stack
  .filter((r) => r.route)
  .forEach((r) => console.log(`Available route: ${r.route.path}`));

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});

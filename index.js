const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Health check route
app.get('/ping', (req, res) => {
  res.send('pong');
});

// Call API
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
  
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

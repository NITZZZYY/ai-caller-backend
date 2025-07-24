const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/', (req, res) => {
  const { transcript, conversation_id, phone_number } = req.body;
  console.log('Received data:', req.body);
  res.json({ status: 'Success', message: 'Data received successfully' });
});

app.post('/call', async (req, res) => {
  const { phone_number, message } = req.body;

  if (!phone_number || !message) {
    return res.status(400).json({ error: 'Missing phone_number or message' });
  }

  // Simulated outbound call logic
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

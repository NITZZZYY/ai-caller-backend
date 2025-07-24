const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/', (req, res) => {
  const { transcript, conversation_id, phone_number } = req.body;
  console.log('Received data:', req.body);

  // You can add your AI logic or save this to file/db here
  res.json({ status: 'Success', message: 'Data received successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

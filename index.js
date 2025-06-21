const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint to receive Blockly code
app.post('/api/run', (req, res) => {
  const { code } = req.body;
  console.log('Received code:', code);

  // Here you could safely run/evaluate code, save it, etc.
  // For now, just send a response back
  res.json({ output: `Code received with length ${code.length}` });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

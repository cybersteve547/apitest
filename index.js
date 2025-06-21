const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send("cool api thing here");
  console.log(`ooo somebody looked at it 😄😄😄 ${req}`)
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

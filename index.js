const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World! this is the first version of my project. fasdfkjadfjlkfjdsafjaslfjsafl');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
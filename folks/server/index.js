const express = require("express");
const Connection = require("./database/db.js");

const app = express();

Connection();

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

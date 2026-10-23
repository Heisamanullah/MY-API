const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("My Week 2 API!");
});

app.post("/user", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      error: "Name and email are required",
    });
  }

  res.send(`Hello, ${name}!`);
});

app.get("/user/:id", (req, res) => {
  const id = req.params.id;

  res.send(`User ${id} profile`);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

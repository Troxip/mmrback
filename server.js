// server.js
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

let multipliers = {
  over3k: 0.0075,
  between: 0.0045,
  below2k: 0.0035,
};

app.get("/api/multipliers", (req, res) => {
  res.json(multipliers);
});

app.post("/api/multipliers", (req, res) => {
  const { over3k, between, below2k } = req.body;
  multipliers = { over3k, between, below2k };
  res.json(multipliers);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

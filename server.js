const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("Server is connected"));

app.listen(PORT, () => console.log(`listening at http://localhost:${5000}`));

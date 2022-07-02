const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1></br><p>This is just a simple app</p>");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

const express = require("express");

var cors = require("cors");
const app = express();

const port = 3000;

app.use(cors());

app.get("/", function (req, res) {
  res.send("Hello World");
});

// parmas
// app.get("/user/:id", (req, res) => {
//   const userId = req.params.id;
//   res.send({ userId });
// });

// query
// app.get("/user/:id", (req, res) => {
//   const query = req.query;
//   res.send({ userId: query.age });
// });

app.get("/sound/:name", (req, res) => {
  const { name } = req.params;

  if (name === "dog") {
    res.json({ sound: "왈" });
  } else if (name === "cat") {
    res.json({ sound: "냥" });
  } else {
    res.json({ sound: "집에가" });
  }
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

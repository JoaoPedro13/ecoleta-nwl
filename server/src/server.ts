import express from "express";

const app = express();

app.get("/users", (req, res) => {
  console.log("badjoraz");
  res.json(["badjoraz", "badjoraz"]);
});

app.listen(3333);

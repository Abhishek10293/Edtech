import express from "express";
import connectDb from "./database.js";
import "dotenv/config";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome");
});

const port = process.env.PORT || 5000;

// connect database then start server
connectDb()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  })
  .catch((e) => {
    console.log("Database error:", e.message);
  });

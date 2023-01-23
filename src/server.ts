import express, { Express } from "express";
import cors from "cors";

const app = express();

app
  .use(cors())
  .use(express.json())
  .get("/health", (req, res) => res.send("OK!"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`App running in port: ${port}`))

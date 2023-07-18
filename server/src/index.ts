import { config } from "dotenv";
config();
import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const cases = require("./routes/cases");
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use("/cases", cases);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

const database = mongoose.connect(process.env.MONGO_URL!).then(() => {
  console.log(`Listening on port: ${PORT}`);
  app.listen(PORT);
});

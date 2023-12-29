import { config } from "dotenv";
config();
import express, { Request, Response } from "express";
import session from "express-session";
import env from "./util/validateEnv";
import MongoStore from "connect-mongo";

//Routes
import userRoutes from "./routes/users";

import mongoose from "mongoose";
import cors from "cors";

const app = express();
const cases = require("./routes/cases");
const PORT = env.PORT;

app.use(cors());
app.use(express.json());
app.use(
  session({
    secret: env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000 * 7,
    },
    rolling: true,
    store: MongoStore.create({
      mongoUrl: env.MONGO_URL,
    }),
  })
);

app.use("/cases", cases);

app.use("/api/users", userRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

const database = mongoose.connect(process.env.MONGO_URL!).then(() => {
  console.log(`Listening on port: ${PORT}`);
  app.listen(PORT);
});

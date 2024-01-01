// Library Imports
import { config } from "dotenv";
config();
import express from "express";
import session from "express-session";
import env from "./util/validateEnv";
import MongoStore from "connect-mongo";
import mongoose from "mongoose";
import cors from "cors";

//Routes
import userRoutes from "./routes/users";
import cases from "./routes/cases";

// Server Configuration
const app = express();
const PORT = env.PORT;
const corsOptions = {
  origin: "http://127.0.0.1:5001",
  credentials: true,
};

app.use(cors(corsOptions));
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

// Use Imported routes
app.use("/cases", cases);
app.use("/api/users", userRoutes);

//Connect to DB
const database = mongoose.connect(process.env.MONGO_URL!).then(() => {
  console.log(`Listening on port: ${PORT}`);
  app.listen(PORT);
});

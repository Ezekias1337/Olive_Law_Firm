// Library Imports
import { config } from "dotenv";
config();
import express from "express";
import session from "express-session";
import env from "./util/validateEnv";
import MongoStore from "connect-mongo";
import mongoose from "mongoose";
import cors from "cors";
import { Server } from "socket.io";
import http from "http";

// Function Imports
import setupWebSocket from "./websocket";
// Types
import {
  ServerToClientEvents,
  ClientToServerEvents,
  InterServerEvents,
  SocketData,
} from "../../shared/constants/interfaces/SocketInterfaces";

//Routes
import userRoutes from "./routes/users";
import cases from "./routes/cases";
import { Socket } from "socket.io";

/* 
  ! WHEN DEPLOYING NEED TO USE .ENV INSTEAD OF HARDCODED ORIGIN
*/

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
app.use("/api/cases", cases);
app.use("/api/users", userRoutes);

//Connect to DB
const database = mongoose.connect(process.env.MONGO_URL!).then(() => {
  const server = http.createServer(app); // Pass the express app to createServer

  server.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });

  const io = new Server<
    ClientToServerEvents,
    ServerToClientEvents,
    InterServerEvents,
    SocketData
  >(server, {
    cors: {
      origin: "http://127.0.0.1:5001",
    },
  });
  app.set("io", io);

  setupWebSocket(io);
});

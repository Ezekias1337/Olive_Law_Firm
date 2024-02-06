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
} from "@shared/constants/interfaces/SocketInterfaces";

//Routes
import userRoutes from "./routes/users";
import cases from "./routes/cases";

// Server Configuration
const app = express();

const MONGO_URL = env.MONGO_URL;
const BACKEND_PORT = env.BACKEND_PORT;
const FRONTEND_PORT = env.FRONTEND_PORT;
const ORIGIN_URL_BASE = env.ORIGIN_URL_BASE;
const SESSION_SECRET = env.SESSION_SECRET;

// Will possibly need to use generateOriginUrl helper function here for production
const ORIGIN_URL = `${ORIGIN_URL_BASE}:${FRONTEND_PORT}`;

const corsOptions = {
  origin: ORIGIN_URL,
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(
  session({
    secret: SESSION_SECRET,
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
const database = mongoose.connect(MONGO_URL).then(() => {
  const server = http.createServer(app); // Pass the express app to createServer

  server.listen(BACKEND_PORT, () => {
    console.log(`Listening on port: ${BACKEND_PORT}`);
  });

  const io = new Server<
    ClientToServerEvents,
    ServerToClientEvents,
    InterServerEvents,
    SocketData
  >(server, {
    cors: {
      origin: ORIGIN_URL,
    },
    pingInterval: 30000,
    pingTimeout: 15000,
  });
  app.set("io", io);

  setupWebSocket(io);
});

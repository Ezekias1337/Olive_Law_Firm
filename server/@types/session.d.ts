import mongoose from "mongoose";

declare module "express-session" {
  interface SessionData {
    userId: mongoose.Types.ObjectId;
  }
}

/* 
    This is similar to installing a @types --save-dev package, just helps the
    Typescript compiler not complain about _id
*/

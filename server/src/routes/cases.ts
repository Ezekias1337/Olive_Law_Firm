import express, { Request, Response } from "express";
//import mongoose from "mongoose";
import Case from "../models/case";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Hello Cases!");
});

router.post("/submit", async (req: Request, res: Response) => {
  const newCase = new Case({
    id: req.body.id,
    name: req.body.name,
    photoId: req.body.photoId,
    photosTaken: req.body.photosTaken,
  });
  const createdCase = await newCase.save();
  res.json(createdCase);
});

module.exports = router;

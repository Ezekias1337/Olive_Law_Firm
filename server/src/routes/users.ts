import express from "express";
import * as UserController from "../controllers/users";

const router = express.Router();

router.post("/create-user", UserController.createUser);

export default router;

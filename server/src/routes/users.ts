import express from "express";
import * as UserController from "../controllers/users";

const router = express.Router();

router.get("/", UserController.getAuthenticatedUser);
router.post("/create-user", UserController.createUser);
router.post("/login", UserController.login);

router.post("/logout", UserController.logout)

export default router;

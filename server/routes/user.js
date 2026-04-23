import express from "express";
import { getUsers, updateProfile } from "../controllers/userController.js";

const router = express.Router();

router.get("/", getUsers);
router.put("/update", updateProfile);

export default router;

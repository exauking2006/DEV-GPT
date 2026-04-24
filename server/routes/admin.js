import express from "express";
import { makeAdmin } from "../controllers/adminController.js";

const router = express.Router();

router.post("/make", makeAdmin);

export default router;

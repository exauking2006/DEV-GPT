import express from "express";
import { setMaintenance } from "../controllers/maintenanceController.js";

const router = express.Router();

router.post("/", setMaintenance);

export default router;

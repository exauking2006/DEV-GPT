import express from "express";
import {
  sendNotification,
  getNotifications,
} from "../controllers/notificationController.js";

const router = express.Router();

router.post("/", sendNotification);
router.get("/", getNotifications);

export default router;

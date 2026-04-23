import express from "express";
import {
  createConversation,
  getConversations,
} from "../controllers/conversationController.js";

const router = express.Router();

router.post("/", createConversation);
router.get("/", getConversations);

export default router;

import Conversation from "../models/Conversation.js";

export const createConversation = async (req, res) => {
  const conv = await Conversation.create(req.body);
  res.json(conv);
};

export const getConversations = async (req, res) => {
  const convs = await Conversation.find();
  res.json(convs);
};

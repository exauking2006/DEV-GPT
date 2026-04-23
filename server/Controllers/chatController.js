
import Message from "../models/Message.js";

export const getMessages = async (req, res) => {
  const messages = await Message.find();
  res.json(messages);
};

export const sendMessage = async (req, res) => {
  const msg = await Message.create(req.body);
  res.json(msg);
};

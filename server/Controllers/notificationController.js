import Notification from "../models/Notification.js";

export const sendNotification = async (req, res) => {
  const notif = await Notification.create(req.body);
  res.json(notif);
};

export const getNotifications = async (req, res) => {
  const notifs = await Notification.find();
  res.json(notifs);
};

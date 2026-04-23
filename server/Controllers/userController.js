import User from "../models/User.js";

export const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

export const updateProfile = async (req, res) => {
  const { uid, name, photoURL } = req.body;

  const user = await User.findOneAndUpdate(
    { uid },
    { name, photoURL },
    { new: true }
  );

  res.json(user);
};

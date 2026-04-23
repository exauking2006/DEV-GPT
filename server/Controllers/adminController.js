import User from "../models/User.js";

export const makeAdmin = async (req, res) => {
  const { uid } = req.body;

  const user = await User.findOneAndUpdate(
    { uid },
    { isAdmin: true },
    { new: true }
  );

  res.json(user);
};

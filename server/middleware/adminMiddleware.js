import User from "../models/User.js";

export const isAdmin = async (req, res, next) => {
  try {
    const user = await User.findOne({ uid: req.user.uid });

    if (!user || !user.isAdmin) {
      return res.status(403).json({ message: "Admin only" });
    }

    next();
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

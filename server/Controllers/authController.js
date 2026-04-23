import admin from "../config/firebaseAdmin.js";
import User from "../models/User.js";

export const loginOrRegister = async (req, res) => {
  try {
    const { token } = req.body;

    const decoded = await admin.auth().verifyIdToken(token);

    let user = await User.findOne({ uid: decoded.uid });

    if (!user) {
      user = await User.create({
        uid: decoded.uid,
        name: decoded.name,
        email: decoded.email,
        photoURL: decoded.picture,
      });
    }

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Auth error" });
  }
};

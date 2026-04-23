import Maintenance from "../models/Maintenance.js";

export const setMaintenance = async (req, res) => {
  const { active, message } = req.body;

  let data = await Maintenance.findOne();

  if (!data) {
    data = await Maintenance.create({ active, message });
  } else {
    data.active = active;
    data.message = message;
    await data.save();
  }

  res.json(data);
};

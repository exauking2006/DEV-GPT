import Report from "../models/Report.js";

export const createReport = async (req, res) => {
  const report = await Report.create(req.body);
  res.json(report);
};

export const getReports = async (req, res) => {
  const reports = await Report.find();
  res.json(reports);
};

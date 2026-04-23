import API from "./api";

export const sendReport = async (text) => {
  const res = await API.post("/report", { text });
  return res.data;
};

export const getReports = async () => {
  const res = await API.get("/report");
  return res.data;
};

export const resolveReport = async (id) => {
  const res = await API.post(`/report/${id}/resolve`);
  return res.data;
};

import API from "./api";

export const addAdmin = async (email) => {
  const res = await API.post("/admin/add", { email });
  return res.data;
};

export const getMembers = async () => {
  const res = await API.get("/admin/members");
  return res.data;
};

export const toggleMaintenance = async (status) => {
  const res = await API.post("/admin/maintenance", { status });
  return res.data;
};

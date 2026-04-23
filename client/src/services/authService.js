import API from "./api";

export const loginWithGoogle = async (data) => {
  const res = await API.post("/auth/google", data);
  return res.data;
};

export const getMe = async () => {
  const res = await API.get("/auth/me");
  return res.data;
};

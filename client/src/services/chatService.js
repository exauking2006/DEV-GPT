import API from "./api";

export const sendMessage = async (message) => {
  const res = await API.post("/chat/send", message);
  return res.data;
};

export const getMessages = async () => {
  const res = await API.get("/chat/messages");
  return res.data;
};

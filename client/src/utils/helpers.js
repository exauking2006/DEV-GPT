export const truncate = (text, max = 50) => {
  if (!text) return "";
  return text.length > max ? text.slice(0, max) + "..." : text;
};

export const generateId = () => {
  return Math.random().toString(36).substring(2, 10);
};

export const isAdmin = (user) => {
  return user?.role === "admin";
};

export const isEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const isEmpty = (value) => {
  return !value || value.trim() === "";
};

export const minLength = (value, length) => {
  return value.length >= length;
};

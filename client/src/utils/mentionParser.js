export const parseMentions = (text) => {
  const regex = /@(\w+)/g;
  return text.match(regex) || [];
};

export const highlightMentions = (text) => {
  return text.replace(/@(\w+)/g, '<span class="mention">@$1</span>');
};

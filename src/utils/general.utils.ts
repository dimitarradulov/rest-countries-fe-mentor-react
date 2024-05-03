export const generateUniqueId = () => {
  return Math.random().toString(36).slice(2, 9);
};

export const formatNumberWithCommas = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

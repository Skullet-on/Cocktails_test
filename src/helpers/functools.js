export const capitalizeFirstLetter = (str) => {
  if (typeof str !== "string") {
    return str;
  }
  return str.charAt(0).toLocaleUpperCase() + str.slice(1);
};

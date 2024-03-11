export const formatToYYYYMMDD = (dateString) => {
  if (dateString) {
    const fullDate = new Date(dateString);
    const year = fullDate.getFullYear();
    const month = fullDate.getMonth() + 1;
    const date = fullDate.getDate();

    return `${year}-${month}-${date}`;
  }
  return "";
};

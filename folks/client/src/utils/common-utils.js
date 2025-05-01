export const formatDate = (date) => {
  const hour = new Date(date).getHours();
  const minutes = new Date(date).getMinutes();
  return `${hour > 9 ? hour : `0${hour}`}:${
    minutes > 9 ? minutes : `0${minutes}`
  }`;
};

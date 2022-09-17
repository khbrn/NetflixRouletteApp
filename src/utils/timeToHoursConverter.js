const timeToHoursConverter = (timeInMinutes) => {
  let hours = Math.floor(timeInMinutes / 60);
  let minutes = timeInMinutes % 60;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  return `${hours}h ${minutes}min`;
};

export default timeToHoursConverter;

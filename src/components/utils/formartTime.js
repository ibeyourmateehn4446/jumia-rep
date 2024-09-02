const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const formartTime = () => {
  const currentTime = Date.parse(new Date());
  let getMonth = new Date().getMonth() + 1;
  let getDate = new Date().getDate();
  let getYear = new Date().getFullYear();

  const deadline = Date.parse(
    `${getYear}-${getMonth}-${getDate} 23:59:59 GMT+0100`
  );
  const remainingTime = deadline - currentTime;
  let seconds = Math.floor((remainingTime / 1000) % 60);
  let minutes = Math.floor((remainingTime / 1000 / 60) % 60);
  let hours = Math.floor((remainingTime / 1000 / 3600) % 24);

  if (seconds < 10) seconds = "0" + seconds;
  if (minutes < 10) minutes = "0" + minutes;
  if (hours < 10) hours = "0" + hours;

  return { hours, minutes, seconds };
};

export const formatMonth = () => {
  const date = new Date();
  const month = months[date.getMonth()];
  return month;
};

export default formartTime;

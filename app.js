let clock = document.querySelector("#clock");

const updateClock = () =>  {
  let now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let day = now.getDate();

  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;
  if (month < 10) month = "0" + month;
  if (day < 10) day = "0" + day;

  clock.innerHTML =
    hours +
    ":" +
    minutes +
    ":" +
    seconds +
    "<br>" +
    year +
    "-" +
    month +
    "-" +
    day;
}

setInterval(updateClock, 1000);

var date = new Date(),
  weekDay = date.getUTCDay(),
  year = date.getFullYear(),
  month = date.getMonth(),
  day = date.getUTCDate(),
  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

document.getElementById("currentdate").innerHTML = weekday[weekDay] + ", " + day + " " + months[month] + " " + year;

const options = {
  year: "numeric"
};
document.getElementById("currentyear").textContent = new Date().toLocaleDateString("en-US", options);
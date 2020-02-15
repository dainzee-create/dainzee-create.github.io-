const temp = parseFloat(document.getElementById("temp").textContent);
const windSpeed = parseFloat(document.getElementById("windSpeed").textContent);
let p = Math.pow (windSpeed, 0.16);
let wc = windchill(temp,windSpeed);
function windchill(temp, windSpeed) {
  if (temp<= 50 && windSpeed>3) {
    windChill = 35.74 + (0.6215 * temp) - (35.75 * p) + (0.4275 * temp * p);
    document.getElementById("windChill").innerHTML = Math.round(windChill);
  }
  else {
    document.getElementById("windChill").innerHTML = "N/A";
  }
}





var lastMod = document.lastModified;
document.getElementById("lastMod").textContent=lastMod;

const options = {year:"numeric"};
document.getElementById("currentyear").textContent = new Date().toLocaleDateString("en-US", options);
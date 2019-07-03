let date = new Date();

document.querySelector(".date").innerHTML =
  date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();

function setTime() {
  let dateTime = new Date();
  let time = dateTime.toLocaleTimeString();
  document.querySelector(".time").innerHTML = time;
}

let myTime = setInterval(setTime, 1000);

function myClock() {
  var date = new Date();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var seconds = date.getSeconds();

  h = hour < 10 ? "0" + hour : hour;
  m = minute < 10 ? "0" + minute : minute;
  s = seconds < 10 ? "0" + seconds : seconds;

  var time = h + ":" + m + ":" + s;

  document.getElementById("time").innerText = time;
  document.getElementById("time").textContent = time;

  setTimeout(myClock, 1000);
}

myClock();

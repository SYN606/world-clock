const updateTime = () => {
  let d = new Date();
  let india = document.getElementById("india");
  let usa = document.getElementById("usa");
  let china = document.getElementById("china");

  // india time

  india.innerHTML = d
    .toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
    })
    .split(", ")[1];

  // usa time

  usa.innerHTML = d
    .toLocaleString("en-US", {
      timeZone: "America/Los_Angeles",
    })
    .split(", ")[1];

  // china time

  china.innerHTML = d
    .toLocaleString("en-US", {
      timeZone: "Asia/Shanghai",
    })
    .split(", ")[1];
  // setting alarm

  let time = document.getElementById("time").value;

  let alarmHour = time.split(":")[0];
  let alarmMin = time.split(":")[1];

  if (alarmHour == d.getHours() && alarmMin == d.getMinutes()) {
    console.log("alarm is ringing");
  }
};
setInterval(updateTime, 1000);

let btnAlarm = document.getElementById("btn-alarm");
btnAlarm.onclick = function () {
  showHide();
};

let alarm = document.getElementById("hidden");
alarm.hidden = true;

function showHide() {
  if (alarm.hidden == true) {
    alarm.hidden = false;
  } else {
    alarm.hidden = true;
  }
}

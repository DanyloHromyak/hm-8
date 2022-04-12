const deg = 6;
const secondArrow = document.querySelector(".arrow-second");
const minuteArrow = document.querySelector(".arrow-minute");
const hourArrow = document.querySelector(".arrow-hour");

setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;

  hourArrow.style.transform = "rotate(" + (hh + mm / 12) + "deg)";
  minuteArrow.style.transform = "rotate(" + mm + "deg)";
  secondArrow.style.transform = "rotate(" + ss + "deg)";

  hourArrow.style.transformOrigin = "bottom";
  minuteArrow.style.transformOrigin = "bottom";
  secondArrow.style.transformOrigin = "bottom";
});

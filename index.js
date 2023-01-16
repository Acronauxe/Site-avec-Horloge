const hourE1 = document.querySelector("#hour");

const minuteE1 = document.querySelector("#minute");

const secondE1 = document.querySelector("#second");

function updateClock(){

    const currentDate = new Date();

    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();

    const hourDeg = (hour / 12) * 360;
    const minuteDeg = (minute / 60) * 360;
    const secondDeg = (second / 60) * 360;

    hourE1.style.transform = `rotate(${hourDeg}deg)`;
    minuteE1.style.transform = `rotate(${minuteDeg}deg)`;
    secondE1.style.transform = `rotate(${secondDeg}deg)`;
}

setInterval(updateClock,1000);

// ClockNumbers

const hourNumber = document.querySelector(".hournumbers");

const minuteNumber = document.querySelector(".minutenumbers");

const secondNumber = document.querySelector(".secondnumbers");

function updateClockNumber(){

    const currentDate = new Date();

    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();

    if (hour < 10) {
        hourNumber.innerHTML = "0" + hour ;
      } else {
        hourNumber.innerHTML = hour ;
      }

    if (minute < 10) {
        minuteNumber.innerHTML = "0" + minute ;
      } else {
         minuteNumber.innerHTML = minute ;
      }

    if (second < 10) {
        secondNumber.innerHTML = "0" + second ;
      } else {
        secondNumber.innerHTML = second ;
      }
}

setInterval(updateClockNumber,1000);

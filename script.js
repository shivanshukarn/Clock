// Digital and Analog clock , made using JavaScript

const HourHand = document.querySelector("#hour");
const MinuteHand = document.querySelector("#minute");
const SecondHand = document.querySelector("#second");
const timeEl = document.querySelector('#time')
const dateEl = document.querySelector('#date')

// this code is for analog clock
function run_the_clock(){
  var date = new Date();
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
//   console.log("Hour: "+hr+ " Minute: "+ min + " Second: "+ sec);

  let hrPosition = hr*360/12 + ((min * 360/60)/12) ;
  let minPosition = (min * 360/60) + (sec* 360/60)/60;
  let secPosition = sec * 360/60;

  HourHand.style.transform = "rotate(" + hrPosition + "deg)";
  MinuteHand.style.transform = "rotate(" + minPosition + "deg)";
  SecondHand.style.transform = "rotate(" + secPosition + "deg)";
}


var interval = setInterval(run_the_clock, 1000);

// This is a code for digital clock
function getTime(){
    const days = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thrusday" , "Friday" , "Saturday"];
    const months = ["Jan" , "Feb" , "Mar" , "Apr" , "May" , "Jun" , "Jul" , "Aug" , "Sep" , "Oct" , "Nov" , "Dec"];
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const datee = time.getDate();
    const hours = time.getHours();
    
    const hoursForClock = hours >= 13 ? hours % 12 : hours;
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const ampm = hours >= 12 ? 'PM' : 'AM'

    timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds} ${ampm}`
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${datee}</span>`
}

getTime()
setInterval(getTime , 1000)
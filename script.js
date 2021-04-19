"use strict";

const day = document.querySelector(".day");
const date = document.querySelector(".date");
const month = document.querySelector(".month");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

function updateFlipClock(){
    let dateObj = new Date();

    let currentDay = dateObj.getDay();
    let currentDate = dateObj.getDate();
    let currentMonth = dateObj.getMonth();
    let currentHour = dateObj.getHours();
    let currentMinute = dateObj.getMinutes();
    let currentSecond = dateObj.getSeconds();

    // Converts the number returned from getDay() to the appropriate string representation
    switch(currentDay){
        case 0: 
            currentDay = "SUN";
            break;
        case 1: 
            currentDay = "MON";
            break;
        case 2:
            currentDay = "TUES";
            break;
        case 3:
            currentDay = "WED"
            break;
        case 4: 
            currentDay = "THURS";
            break;
        case 5:
            currentDay = "FRI";
            break;
        case 6: 
            currentDay = "SAT";
            break;
        default:
            currentDay = "NULL";
    }

    // Converts the number returned from getMonth() to the appropriate string representation
    switch(currentMonth){
        case 0: 
            currentMonth = "JAN";
            break;
        case 1: 
            currentMonth = "FEB";
            break;
        case 2:
            currentMonth = "MAR";
            break;
        case 3:
            currentMonth = "APR";
            break;
        case 4: 
            currentMonth = "MAY";
            break;
        case 5:
            currentMonth = "JUN";
            break;
        case 6: 
            currentMonth = "JUL";
            break;
        case 7:
            currentMonth = "AUG";
            break;
        case 8: 
            currentMonth = "SEP";
            break;
        case 9:
            currentMonth = "OCT";
            break;
        case 10:
            currentMonth = "NOV";
            break;
        case 11:
            currentMonth = "DEC";
            break;
        default:
            currentMonth = "NULL";
    }

    // Add a zero in front of numbers less than 10
    if(currentMinute < 10){
        currentMinute = `0${currentMinute}`;
    }

    if(currentSecond < 10){
        currentSecond = `0${currentSecond}`;
    }

    // Converts hour from 24 to 12
    if(currentHour == 0){
        hour.innerHTML = `${currentHour + 12}<sub>AM</sub>`;
    }
    else if(currentHour < 12 && currentMinute <= 59){
        hour.innerHTML = `${currentHour}<sub>AM</sub>`;
    }
    else if(currentHour == 12){
        hour.innerHTML = `${currentHour}<sub>PM</sub>`;
    }
    else if(currentHour > 12){
        hour.innerHTML = `${currentHour - 12}<sub>PM</sub>`;
    }

    day.innerText = currentDay;
    date.innerText = currentDate;
    month.innerText = currentMonth;
    minute.innerText = currentMinute;
    second.innerText = currentSecond;
}

setInterval(updateFlipClock, 500);
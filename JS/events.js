const calender = document.querySelector(".calender"),
 date = document.querySelector(".date"),
 daysContainer = document.querySelector(".days"),
 prev = document.querySelector(".prev"),
 next = document.querySelector(".next"),
    todayBtn = document.querySelector(".today-btn"),
    gotoBtn = document.querySelector(".goto-btn"),
    dateInput = document.querySelector(".date-input"),
     eventDay = document.querySelector(".event-day"),
     eventDate = document.querySelector(".event-date"),
     eventsContainer = document.querySelector(".events");
     addEventSubmit = document.querySelector(".add-event-btn");

 let today = new Date();
let activeday;
let month = today.getMonth();
let year = today.getFullYear();

const months = [
    'January',
    'Febuary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

const eventsArr = [
    {
        day:13,
        month: 11,
        year: 2024,
        events: [
        {
            title: "events 1 lorem",
            time: "10:00",
        }],
    },
];

function initCalender() {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const prevLastDay = new Date(year, month, 0);
    const prevDays = prevLastDay.getDate();
    const lastDate = lastDay.getDate();
const day = firstDay.getDay();
const nextDays = 7 - lastDay.getDay() - 1;

date.innerHTML = months[month] + ' ' + year;


let days = '';

for (let x = day; x > 0; x--) {
    days += `<div class="day prev-date" >${prevDays - x + 1}</div>`;
}

for (let i = 1; i <= lastDate; i++) {
    if (
        i === new Date().getDate() &&
        year === new Date().getFullYear() &&
        month === new Date().getMonth()
    )
     {
        activeday = i;
        getActiveDay(i);
        updateEvents(i);

        days += `<div class="day today active" >${i}</div>`;
    }
    else {
        days += `<div class="day" >${i}</div>`;
    }
}

for (let j = 1; j < nextDays; j++) {
    days += `<div class="day next-date" >${j}</div>`;
}

daysContainer.innerHTML = days;
addListner();
}

initCalender();

function prevMonth() {
    month--;
    if (month < 0) {
        month = 11;
        year--;
    }
    initCalender();
}

function nextMonth() {
    month++;
    if (month > 11) {
        month = 0;
        year++;
    }
    initCalender();
}

prev.addEventListener("click", prevMonth);
next.addEventListener("click", nextMonth);

todayBtn.addEventListener("click", () => {
    today = new Date();
    month = today.getMonth();
    year = today.getFullYear();
    initCalender();
});

dateInput.addEventListener("keyup", (e) => {
    dateInput.value = dateInput.value.replace(/[^0-9/]/g, "");
    if (dateInput.value.length === 2) {
        dateInput.value += "/"
    }
    if (dateInput.value.length > 7) {
        dateInput.value = dateInput.value.slice(0, 7);
    }

    if (e.inputType === "deleteContentBackward") {
        if (dateInput.value.length === 3) {
            dateInput.value = dateInput.value.slice(0, 2);
        }
    }
});

gotoBtn.addEventListener("click", gotoDate);
function gotoDate() {
    const dateArr = dateInput.value.split("/");
    if (dateArr.length === 2) {
        if (dateArr[0] > 0 && dateArr[0] < 13 && dateArr[1].length === 4) {
            month = dateArr[0] -1;
            year = dateArr[1];
            initCalender();
            return;
        }
    }
    alert("invalid date");
}



var modal = document.getElementById('simpleModal');
var eventBtn = document.getElementById('eventBtn');
addEventSubmit = document.querySelector(".add-event-btn")
var closeBtn = document.getElementsByClassName('closeBtn')[0];


eventBtn.addEventListener('click', openModal);

closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', outsideClick);
function openModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}
function outsideClick(e) {
    if(e.target == modal) {
    modal.style.display = 'none';
}
 } ;



 const addEventTitle = document.querySelector(".event-name"),
        addEventTime = document.querySelector(".event-time"),
        addEventDate = document.querySelector(".event-date");


 addEventTitle.addEventListener("input", (e) => {
    addEventTitle.value = addEventTitle.value.slice(0, 50);
 });

 addEventTime.addEventListener("input", (e) => {
    addEventTime.value = addEventTime.value.replace(/[^0-9:]/g, '');

    if(addEventTime.value.length === 2) {
        addEventTime.value += ":"
    }

    if(addEventTime.value.length > 5) {
        addEventTime.value = addEventTime.value.slice(0, 5);
    }
 });


 addEventDate.addEventListener("input", (e) => {
   
    addEventDate.value = addEventDate.value.replace(/[^0-9\/]/g, '');

    if (addEventDate.value.length === 2 || addEventDate.value.length === 5) {
        addEventDate.value += "/";
    }

    if (addEventDate.value.length > 10) {
        addEventDate.value = addEventDate.value.slice(0, 10);
    }
});


 function addListner() {
const days = document.querySelectorAll(".day");
days.forEach((day) => {
    day.addEventListener("click", (e) => {
        activeday = Number(e.target.innerHTML);

        getActiveDay(e.target.innerHTML);
       updateEvents(Number(e.target.innerHTML));

        days.forEach((day) => {
            day.classList.remove("active");
        });

        if (e.target.classList.contains("prev-date")) {
        prevMonth();

        setTimeout(() => {
            const days = document.querySelectorAll("day");

            days.forEach((day) => {
                if (
                    day.classList.contains("prev-date") &&
                    day.innerHTML === e.target.initCalender
                ) {
                    day.classList.add("active");
                }
            });
        }, 100);
        } else   if (e.target.classList.contains("next-date")) {
            nextMonth();
    
            setTimeout(() => {
                const days = document.querySelectorAll("day");
    
                days.forEach((day) => {
                    if (
                        day.classList.contains("next-date") &&
                        day.innerHTML === e.target.initCalender
                    ) {
                        day.classList.add("active");
                    }
                });
            }, 100);
            }
            else {
                e.target.classList.add("active");
            }
    });
});
 }



 function getActiveDay(date) {
    const day = new Date(year, month, date);
    const dayName = day.toString().split(" ")[0];
    eventDay.innerHTML = dayName;
    eventDate.innerHTML = date + " " + months[month] + " " + year;
 }

 function updateEvents(date) {
    let events = '';
    eventsArr.forEach((event) => {
        if (
            date === event.day &&
            month + 1 === event.month &&
            year === event.year 
        ) {
            event.events.forEach((event) => {
                events += `
            <div class="event">
                <div class="title">
                    <i class="fas fa-circle"></i>
                    <h3 class="event-title">${event.title}</h3>
                </div>
                <div class="event-time">
                    <span class="event-time">${event.time}<span>
                </div>
            </div>
                `;
            });
        }
    });

    if (events === "") {
        events = `<div class="no-event">
                    <h3> No Events</h3>
                    </div>`;
    }
    console.log(events);
    eventsContainer.innerHTML = events;
 }

 addEventSubmit.addEventListener("click", () => {
    const eventTitle = addEventTitle.value;
    const eventTime = addEventTime.value;
    const eventDate = addEventDate.value;


    if (
        eventTitle === '' ||
        eventTime === '' ||
        eventDate === ''

    ) {
        alert("Please fill all the fields");
        return;
    }
    // const eventTimeArr = eventTime.split(":");
    // // const eventDateArr = eventDate.split(":");
    // if (
    //     eventTimeArr.length == 2 ||
    //     eventTimeArr[0] > 23 ||
    //     eventTimeArr[1] > 59
    // ) {
    //     alert("Invalid time format");
    // }

    // const eventTime = convertTime(eventEventTime);

    let eventAdded = false;

    const newEvent = {
        title: eventTitle,
        time: eventTime, 
        date: eventDate,
    };

    if(!eventAdded) {
        eventsArr.push({
            day: activeday,
            month: month + 1,
            year: year,
            events: [newEvent],
        });
    }

    eventsContainer.classList.remove("active");
    addEventTitle.value = "";
    addEventTime.value = "";
    addEventDate.value = "";

    updateEvents(activeday);

    const activeDayElem = document.querySelector(".day.active");
    if (!activeDayElem.classList.contains("event")) {
        activeDayElem.classList.add("event");
    }
 });

 function convertTime(time) {
    let timeArr = time.split(":");
    let timeHour = timeArr[0];
    let timeMin = timeArr[1];
    let timeFormat = timeHour > 12 ? "PM" : 'AM';
    timeHour = timeHour % 12 || 12;
    time = timeHour + ":" + timeMin + " " + timeFormat;
    return time;
 }



 eventsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("event")) {
        const eventTitle = e.target.children[0].children[1].innerHTML;
        eventsArr.forEach((event) => {
            if (
                event.day === activeday &&
                event.month === month + 1 &&
                event.year === year
            ) {
                event.events.forEach((item, index) => {
                    if (item.title === eventTitle) {
                        event.events.splice(index, 1);
                    }
                });

                if (event.events.length === 0) {
                    eventsArr.splice(eventsArr.indexOf(event), 1);

                    const activeDayElem = document.querySelector(".day.active");
                    if (activeDayElem.classList.contains("event")) {
                        activeDayElem.classList.remove("event");
                    }
                }
            }
        });
        updateEvents(activeday);
    }
 });
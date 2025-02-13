
import Box, { BoxCfg } from "../layout/Box"

let months = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"];

function now() {
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    return { Y: year, M: month, D: today.getDate() }
}

export class MCalendar extends Box {//以月显示日历
    constructor() {
        super(null, "mcalendar")
    }

}
export class WCalendar extends Box {//以周显示日历
    constructor() {
        super(null, "wcalendar")
    }
}





// let monthAndYear = document.getElementById("monthAndYear");
// showCalendar(currentMonth, currentYear);


// function next() {
//     currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
//     currentMonth = (currentMonth + 1) % 12;
//     showCalendar(currentMonth, currentYear);
// }

// function previous() {
//     currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
//     currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
//     showCalendar(currentMonth, currentYear);
// }

// function jump() {
//     currentYear = parseInt(selectYear.value);
//     currentMonth = parseInt(selectMonth.value);
//     showCalendar(currentMonth, currentYear);
// }

// function showCalendar(month, year) {

//     let firstDay = (new Date(year, month)).getDay();
//     let daysInMonth = 32 - new Date(year, month, 32).getDate();

//     let tbl = document.getElementById("calendar-body"); // body of the calendar

//     // clearing all previous cells
//     tbl.innerHTML = "";

//     // filing data about month and in the page via DOM.
//     monthAndYear.innerHTML = months[month] + " " + year;
//     selectYear.value = year;
//     selectMonth.value = month;

//     // creating all cells
//     let date = 1;
//     for (let i = 0; i < 6; i++) {
//         // creates a table row
//         let row = document.createElement("tr");

//         //creating individual cells, filing them up with data.
//         for (let j = 0; j < 7; j++) {
//             if (i === 0 && j < firstDay) {
//                 let cell = document.createElement("td");
//                 let cellText = document.createTextNode("");
//                 cell.appendChild(cellText);
//                 row.appendChild(cell);
//             }
//             else if (date > daysInMonth) {
//                 break;
//             }

//             else {
//                 let cell = document.createElement("td");
//                 let cellText = document.createTextNode(date);
//                 if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
//                     cell.classList.add("bg-info");
//                 } // color today's date
//                 cell.appendChild(cellText);
//                 row.appendChild(cell);
//                 date++;
//             }


//         }

//         tbl.appendChild(row); // appending each row into calendar body.
//     }

// }
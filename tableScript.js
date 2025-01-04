$(document).ready(function() {


class Person {
    constructor() {
        this.name = "Person";
    }
}

// Form variables
const addPlayerForm = document.getElementById("addPlayerForm");
const addPlayerBtn = document.getElementById("addPlayer");

// Table variables
const currentSeasonTable = document.getElementById("currentSeasonScores");
const allPlayersInfoTable = document.getElementById("allPlayersInfo");
const updateSeasonScoresBtn = document.getElementById("updateSeasonScores");
const groupHeader = document.getElementById("groupHeader");
const playerHeader = document.getElementById("playerHeader");

// Add event listeners
updateSeasonScoresBtn.addEventListener("click",calcAvg);
// addPlayerBtn.addEventListener("click",submitForm);
groupHeader.addEventListener("click",function(){sortTable(currentWeekTable,1);});
playerHeader.addEventListener("click",function(){sortTable(currentWeekTable,0);});

let registrants = [];
// Define functions
function submitForm() {
    let player = new Person();
    player.firstname = registrationForm.fname.value;
    player.lastname = registrationForm.lname.value;
    player.nickname = registrationForm.nickname.value;
    player.emailAddress = registrationForm.email.value;
    player.phoneNumber = registrationForm.phone.value;
    if (player.nickname) {
        player.name = registrationForm.nickname.value
    }
    else {
        player.name = registrationForm.fname.value + " " + registrationForm.lname.value;
    }
    let row = document.createElement("tr");
    let cell0 = document.createElement("td");
    let cell1 = document.createElement("td");
    let cell2 = document.createElement("td");
    cell0.textContent = player.firstname;
    cell1.textContent = player.lastname;
    cell2.textContent = player.nickname;
    registrants.push(player);
    row.appendChild(cell0);
    row.appendChild(cell1);
    row.appendChild(cell2);
    allPlayersInfoTable.appendChild(row);
}

function sortTable(table,column) {
    // table = document.getElementById("currentWeekScores");
    tableRows = (Array.prototype.slice.call(table.querySelectorAll("tbody > tr")).slice(1));
    sortedRows = tableRows.sort((a,b) => (a.cells[column].textContent).localeCompare(b.cells[column].textContent));
    for (let i = (table.rows.length - 1); i > 1; i--) {
        table.deleteRow(i);
    }
    sortedRows.forEach(row => {table.appendChild(row)});
    console.log(sortedRows);
}

let columns = [];
// add objects in registrants array to players table on Postgres pinball db
function getObjectProperties(array) {
    array.forEach(obj => {
        columns.push(Object.getOwnPropertyNames(obj));
    }
    )
    // connect to Postgres
    console.log(columns);
}

function calcAvg () {
    let currentSeasonTableRowsLength = currentSeasonTable.rows.length;
    for (i = 1; i < currentSeasonTableRowsLength; i++) {
        let thisRow = currentSeasonTable.rows[i];
        let totalPoints = Number(thisRow.cells[1].textContent);
        let weeksPlayed = Number(thisRow.cells[2].textContent);
        let average = (totalPoints / weeksPlayed).toFixed(2);
        thisRow.cells[3].innerHTML = average;
    }        
}

// Connect to Postgres required
function updateSeasonScores() {
    // SELECT * FROM players;
    // SELECT * FROM weeks;
    //  foreach player parse weeks
    //      from each week during season sum(game1_points:game5_points);
    //      count each occurence of player in weeks during season
    // let newRow = currentSeasonTable.insertRow(-1);
    // let cell0 = newRow.insertCell(0);
    // let cell1 = newRow.insertCell(1);
    // let cell2 = newRow.insertCell(2);
    // let cell3 = newRow.insertCell(3);
    // cell0.textContent = joined.playerName;
    // cell1.textContent = joined.totalPoints;
    // cell2.textContent = joined.weeksPlayed;
    // cell3.textContent = (joined.totalPoints / joined.weeksPlayed);
}


});
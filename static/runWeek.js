$(document).ready(function() {


const currentWeekTable = document.getElementById("currentWeekScores");

function randomize(array) {
    let playerIndex = array.length;
    while (playerIndex != 0) {
        let randomIndex = Math.floor(Math.random() * playerIndex);
        playerIndex--;
        [array[playerIndex], array[randomIndex]] = [array[randomIndex], array[playerIndex]];
    }
}

// get current season and week from calculation
let season = 'FW24';
let week = 4;

// let games = [];
// getGames(); || PULLS FROM POSTGRES
function getGames() {
    // Connect to Postgres
    // let gamesQry = SELECT uuid,name,play_order FROM games;
    // foreach row => 
        // let game = new Game() {    
    // this.uuid = uuid;
    // this.name = name;
    // this.play_order = play_order;
    // }
}    
let games = ["Godzilla","Venom","24","Houdini","Black Knight","NBA"];
let gameObjects = games.map(str => ({name:str}));

// complete checkin process || PULLS FROM POSTGRES
let databasePlayers = [];
// getDatabasePlayers();
$("#createWeeklyPlayersTable").click(function() {
    let weeklyCheckinDiv = document.getElementById("weeklyCheckin");
    let newTable = document.createElement("table");
    let tableHead = document.createElement("thead");
    let headerRow = document.createElement("tr");
    let uuidHeader = document.createElement("th");
    let nameHeader = document.createElement("th");
    let firstNameHeader = document.createElement("th");
    let lastNameHeader = document.createElement("th");
    let nicknameHeader = document.createElement("th");
    uuidHeader.textContent = "UUID";
    nameHeader.textContent = "Name";
    firstNameHeader.textContent = "First Name";
    lastNameHeader.textContent = "Last Name";
    nicknameHeader.textContent = "Nickname";
    headerRow.appendChild(uuidHeader);
    headerRow.appendChild(nameHeader);
    headerRow.appendChild(firstNameHeader);
    headerRow.appendChild(lastNameHeader);
    headerRow.appendChild(nicknameHeader);
    tableHead.appendChild(headerRow);
    newTable.appendChild(tableHead);
    weeklyCheckinDiv.appendChild(newTable);
    // retrieve all players from database
    // Connect to Postgres
    // let playersQry = SELECT * FROM players WHERE active=TRUE;
    // foreach row => 
    // let player = new Player() {    
    // this.uuid = uuid;
    // this.firstname = firstname;
    // this.nickname = nickname;
    // }
    // databasePlayers.push(player);
    
});

let staticPlayers = ["Bob","Fred","Jim","Joe","Tom","Bill","Tony","Shane","Justin","George","Bruce","Peter","Kevin","Josh","Mike","Dan","Carl","Curt"];
let staticPlayerObjects = staticPlayers.map(str => ({name:str}));

// generate weekly groups || MUST COMPLETE CHECKIN PROCESS TO PROCEED || CONNECTION TO POSTGRES NOT REQUIRED | BUILD ERROR HANDLING
let weeklyPlayers = [];
let weeklyGroupsNames = [];
let weeklyGroups = [];
let groupObjects = [];

$("#populateWeeklyScoreboard").click(function() {
    staticPlayerObjects.forEach(obj => {weeklyPlayers.push(obj)});
    registrants.forEach(obj => {weeklyPlayers.push(obj)});
    // console.log(weeklyPlayers);
    // determine number of groups
    let totalGroups;
    if (weeklyPlayers.length % 4 === 0) {
        totalGroups = weeklyPlayers.length/4;
    }    
    else {
        totalGroups = (Math.ceil(weeklyPlayers.length/4));
    }    
    // Create group names and add to names list
    for (let i = 1; i <= totalGroups; i++) {
        let groupStr = "season" + season + "week" + week + "group" + i;
        weeklyGroupsNames.push(groupStr);
    }
    // Create arrays from group names list
    weeklyGroups = weeklyGroupsNames.map(str => [str]);
    
    // Create objects from group names list
    groupObjects = weeklyGroupsNames.map(str => ({name:str}));
    groupObjects.forEach(obj => {obj.players = [];});
    
    // Randomize players list
    randomize(weeklyPlayers);
    
    // Iterate thru weeklyPlayers and assign to groups
    let r = 2;
    for (let i = 0; i < weeklyPlayers.length; i++) {
        let j = i % groupObjects.length;
        groupObjects[j].players.push(weeklyPlayers[i]);
        // add row to current week table
        let newRow = currentWeekTable.insertRow(r);
        let cellPlayer = newRow.insertCell(0);
        let cellGroup = newRow.insertCell(1);
        cellPlayer.textContent = weeklyPlayers[i].name;
        cellGroup.textContent = groupObjects[j].name;
        r++;
    }
    // console.log(currentWeekTable);
});

// assign games to groups


});
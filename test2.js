// Get weekly players from database
var weeklyPlayers = ["Bob","Fred","Jim","Joe","Tom","Bill","Tony","Shane","Justin","George","Bruce","Peter","Kevin","Josh","Mike","Dan","Carl","Curt"];
// Create weekly player groups
var weeklyGroups = [];

function populateWeeklyScoreboard () {
    // Calculate number of groups based on number of players
    let totalGroups =;
    var playersCount = weeklyPlayers.length;
    if (playersCount % 4 === 0) {
        totalGroups = playersCount/4;
    }    
    else {
        totalGroups = ((playersCount/4).Math(ceil));
    }    
    // Create empty groups and to weeklyGroups array
    for (let i = 1; i <= totalGroups; i++) {
        let group = "group" + i;
        weeklyGroups.push(group);
    }
    // Iterate thru weeklyPlayers and assign to groups
    for (let i = 0; i < weeklyPlayers.length; i++) {
        let j = (weeklyPlayer[i] % totalGroups);
        weeklyGroups[j].push(weeklyPlayers[i]);
    }
}
$(document).ready(function() {


// This script handles the navigation menu
// Nav menu structure elements
const navMenuBtn = document.getElementById("nav");
const navMenu = document.getElementById("myLinks");

// Nav menu choices
const homeNav = document.getElementById("homeNav");
const foodMenuNav = document.getElementById("foodMenuNav");
const leagueNav = document.getElementById("leagueNav");
const contactNav = document.getElementById("contactNav");
const aboutNav = document.getElementById("aboutNav");
    // League nav sub-menu
    const leagueRegisterNav = document.getElementById("leagueRegisterNav"); 
    const seasonScoreboardNav = document.getElementById("seasonScoreboardNav");
    const weeklyScoresNav = document.getElementById("weeklyScoresNav");
    
    // Nav section elements
    const home = document.getElementById("home");
    const foodMenu = document.getElementById("foodMenu");
    const league = document.getElementById("league");
    const contact = document.getElementById("contact");
    const about = document.getElementById("about");
    // League sections elements
    const registration = document.getElementById("registrationDiv");
    const allScoreboards = document.getElementById("allScoreboards");
    const fullWeeklyScores = document.getElementById("fullWeeklyScores");
    const seasonScoreboard = document.getElementById("seasonScoreboard");
    const weeklyPlayersTableDiv = document.getElementById("weeklyPlayersTableDiv");

// Add event listeners
// Main nav actions
navMenuBtn.addEventListener("click",expandCollapseNav);
homeNav.addEventListener("click",goHome);
foodMenuNav.addEventListener("click",goToFoodMenu);
leagueNav.addEventListener("click",goToLeague);
contactNav.addEventListener("click",goToContact);
aboutNav.addEventListener("click",goToAbout);
    // League nav sub-menu
    leagueRegisterNav.addEventListener("click",goToRegistration);
    seasonScoreboardNav.addEventListener("click",goToSeasonScoreboard);
    weeklyScoresNav.addEventListener("click",goToWeeklyScores);

// Define functions
// Main nav functions
function expandCollapseNav() {
    navMenu.classList.toggle("hidden");
}

function goHome() {
    home.classList.remove("hidden");
    foodMenu.classList.add("hidden");
    league.classList.add("hidden");
    contact.classList.add("hidden");
    about.classList.add("hidden");
}

function goToFoodMenu() {
    home.classList.add("hidden");
    foodMenu.classList.remove("hidden");
    league.classList.add("hidden");
    contact.classList.add("hidden");
    about.classList.add("hidden");
}

function goToLeague () {
    home.classList.add("hidden");
    foodMenu.classList.add("hidden");
    league.classList.remove("hidden");
    contact.classList.add("hidden");
    about.classList.add("hidden");
    goToSeasonScoreboard();
}

function goToContact() {
    home.classList.add("hidden");
    foodMenu.classList.add("hidden");
    league.classList.add("hidden");
    contact.classList.remove("hidden");
    about.classList.add("hidden");
}

function goToAbout() {
    home.classList.add("hidden");
    foodMenu.classList.add("hidden");
    league.classList.add("hidden");
    contact.classList.add("hidden");
    about.classList.remove("hidden");
}

    // League sub-menu nav
    function goToRegistration() {
        registration.classList.remove("hidden");
        allScoreboards.classList.add("hidden");
    }

    function goToSeasonScoreboard() {
        allScoreboards.classList.remove("hidden");
        seasonScoreboard.classList.remove("hidden");
        registration.classList.add("hidden");
        fullWeeklyScores.classList.add("hidden");
    }

    function goToWeeklyScores() {
        allScoreboards.classList.remove("hidden");
        fullWeeklyScores.classList.remove("hidden");
        registration.classList.add("hidden");
        seasonScoreboard.classList.add("hidden");
    }


});
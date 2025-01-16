$(document).ready(function() {


$("#nav").click(function() {
    $("#myLinks").toggle("slow");
});

$("#homeNav").click(function() {
    $("#home").show();
    $("#foodMenu").hide();
    $("#league").hide();
    $("#contact").hide();
    $("#about").hide();
});

$("#foodMenuNav").click(function() {
    $("#home").hide();
    $("#foodMenu").show();
    $("#league").hide();
    $("#contact").hide();
    $("#about").hide();
});

$("#leagueNav").click(function() {
    // goToLeague();
    $("#home").hide();
    $("#foodMenu").hide();
    $("#league").show();
    $("#contact").hide();
    $("#about").hide();
    goToSeasonScoreboard();
});

$("#returnBtn").click(function() {
    window.location.href = "http://localhost:5500/templates/league.html"
    goToSeasonScoreboard();
});

function goToSeasonScoreboard() {
    $("#registrationDiv").hide();
    $("#scoreboards").show();
    $("#seasonScoreboard").show();
    $("#fullWeeklyScores").hide();
}

$("#contactNav").click(function() {
    $("#home").hide();
    $("#foodMenu").hide();
    $("#league").hide();
    $("#contact").show();
    $("#about").hide();
});

$("#aboutNav").click(function() {
    $("#home").hide();
    $("#foodMenu").hide();
    $("#league").hide();
    $("#contact").hide();
    $("#about").show();
});

// League nav sub-menu
    $("#leagueRegisterNav").click (function() {
        $("#registrationDiv").show();
        $("#scoreboards").hide();
    });

    $("#seasonScoreboardNav").click(function() {
        $("#scoreboards").show();
        $("#seasonScoreboard").show();
        $("#registrationDiv").hide();
        $("#fullWeeklyScores").hide();
    });

    $("#weeklyScoresNav").click(function() {
        $("#scoreboards").show();
        $("#seasonScoreboard").hide();
        $("#registrationDiv").hide();
        $("#fullWeeklyScores").show();
    });


});
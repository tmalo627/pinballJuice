$(document).ready(function() {

$("#nav").click(function() {
    $("#myLinks").toggle();
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
    $("#home").hide();
    $("#foodMenu").hide();
    $("#league").show();
    $("#contact").hide();
    $("#about").hide();
    goToSeasonScoreboard();
});

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
        $("#allScoreboards").hide();
    });

    $("#seasonScoreboardNav").click(function() {
        $("#allScoreboards").show();
        $("#seasonScoreboard").show();
        $("#registrationDiv").hide();
        $("#fullWeeklyScores").hide();
    });

    $("#weeklyScoresNav").click(function() {
        $("#allScoreboards").show();
        $("#seasonScoreboard").hide();
        $("#registrationDiv").hide();
        $("#fullWeeklyScores").show();
    });

});
//Initializes the JavaScript code
$(document).ready(function() {

//Holds objects containing the question, answer options, question ID and correct answer
var questions = [{
        question: "Which quarterback leads the league in passing yards?",
        options: ["Patrick Mahomes", "Jared Goff", "Tom Brady", "Matt Ryan"],
        id: "question-1",
        answer: 3
    }, {
        question: "Which team did Amari Cooper play for at the beginning of the season and who does he play for now?",
        options: ["Raiders, Cowboys", "49ers, Texans", "Eagles, Cowboys", "Dolphins, Rams"],
        id: "question-2",
        answer: 0
    },
        {
        question: "Name the running back who is leading the league in rushing yards.",
        options: ["Ezekiel Elliott", "Melvin Gordon", "Saquon Barkley", "Todd Gurley"],
        id: "question-3",
        answer: 0
    }, {
        question: "Which quarterback suffered a potentially career-ending injury in week 11?",
        options: ["Jimmy Garoppolo", "Ryan Fitzpatrick", "Nick Foles", "Alex Smith"],
        id: "question-4",
        answer: 3
    },
        {
        question: "Which defense/special teams has the fewest sacks this season?",
        options: ["49ers", "Raiders", "Jaguars", "Giants"],
        id: "question-5",
        answer: 1
    }, {
        question: "Name the wide receiver who is leading the league in receiving yards.",
        options: ["Adam Thielen", "Tyreek Hill", "Julio Jones", "Odell Beckham"],
        id: "question-6",
        answer: 2
    },  {
        question: "Name the team that released Kareem Hunt after TMZ released an incriminating video.",
        options: ["Chiefs", "Rams", "Browns", "Raiders"],
        id: "question-7",
        answer: 0
    }, 
        {
        question: "Which quarterback has the most touchdowns this season?",
        options: ["Drew Brees", "Jared Goff", "Patrick Mahomes", "Ben Roethlisberger"],
        id: "question-8",
        answer: 2
    }, {
        question: "Name the 2018 defense/special teams with the most interceptions.",
        options: ["Browns", "Bears", "Chiefs", "Dolphins"],
        id: "question-9",
        answer: 1
    }, {
        question: "Which tight end has the most targets this season?",
        options: ["Travis Kelce", "George Kittle", "Jared Cook", "Zach Ertz"],
        id: "question-10",
        answer: 3
    }];

var game = {
    correct: 0,
    incorrect: 0,
    seconds: 60,
    time: function () {
        game.seconds--;
        $("#timer").html("<h2>Time Left: " + game.seconds + " seconds</h2>");
        if (seconds === 0) {
            $("#message").html("<h2>Time's Up!</h2>");
            game.done(); 
    }
},
    
start: function() {
    timer = setInterval(game.countdown, 1000);
    $("#jumbotron").append("<h2>Time Remaining: " + game.seconds + " Seconds</h2>");
    $("#startGame").remove();

    for (var i = 0; i < questions.length; i++) {
        $("#jumbotron").append("<p>" + questions[i].question + "</p>");
    for (var t = 0; t < questions.length; t++) {
        $("#jumbotron").append("<input type=radio name=question" + i + "value=" + questions[i].options[t] + ">" + questions[i]);
    }
    $("#jumbotron").append("<button type='button' class='btn btn-dark'>Submit</button>");
},






});
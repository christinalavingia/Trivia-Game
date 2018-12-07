//Initializes the JavaScript code
$(document).ready(function() {

var playArea = $("#quizDiv"),
    formDiv = $("#formDiv");

//Initializes start and submit button events
$("#startQuiz").on("click", function(event) {
    quiz.start();
});

//Holds objects containing the question, answer options, question ID and correct answer
var questions = [{
        question: "Which quarterback leads the league in passing yards?",
        options: ["Patrick Mahomes", "Jared Goff", "Tom Brady", "Matt Ryan"],
        answer: "Matt Ryan"
    }, {
        question: "Which team did Amari Cooper play for at the beginning of the season and who does he play for now?",
        options: ["Raiders, Cowboys", "49ers, Texans", "Eagles, Cowboys", "Dolphins, Rams"],
        answer: "Raiders, Cowboys"
    }, {
        question: "Name the running back who is leading the league in rushing yards.",
        options: ["Ezekiel Elliott", "Melvin Gordon", "Saquon Barkley", "Todd Gurley"],
        answer: "Ezekiel Elliott"
    }, {
        question: "Which quarterback suffered a potentially career-ending injury in week 11?",
        options: ["Jimmy Garoppolo", "Ryan Fitzpatrick", "Nick Foles", "Alex Smith"],
        answer: "Alex Smith"
    }, {
        question: "Which defense/special teams has the fewest sacks this season?",
        options: ["49ers", "Raiders", "Jaguars", "Giants"],
        answer: "Raiders"
    }, {
        question: "Name the wide receiver who is leading the league in receiving yards.",
        options: ["Adam Thielen", "Tyreek Hill", "Julio Jones", "Odell Beckham"],
        answer: "Julio Jones"
    },  {
        question: "Name the team that released Kareem Hunt after TMZ released an incriminating video.",
        options: ["Chiefs", "Rams", "Browns", "Raiders"],
        answer: "Chiefs"
    }, {
        question: "Which quarterback has the most touchdowns this season?",
        options: ["Drew Brees", "Jared Goff", "Patrick Mahomes", "Ben Roethlisberger"],
        answer: "Patrick Mahomes"
    }, {
        question: "Name the 2018 defense/special teams with the most interceptions.",
        options: ["Browns", "Bears", "Chiefs", "Dolphins"],
        answer: "Bears"
    }, {
        question: "Which tight end has the most targets this season?",
        options: ["Travis Kelce", "George Kittle", "Jared Cook", "Zach Ertz"],
        answer: "Zach Ertz"
    }];

//Stores quiz function
var quiz = {
    correct: 0,
    incorrect: 0,
    seconds: 60,
    time: function () {
        $("#timer").html("<h2>Time Remaining: " + quiz.seconds + " Seconds</h2>");
        quiz.seconds--;
        if (quiz.seconds === 0) {
            playArea.append("<h2>Time's Up!</h2>");
            quiz.done(); 
    }
},
    
start: function() {
    timer = setInterval(quiz.time, 1000);
    $("#startQuiz").remove();
    for (var i = 0; i < questions.length; i++) {
        $(formDiv).append("<p>" + questions[i].question + "</p>");
        for (var t = 0; t < questions[i].options.length; t++) {
            $(formDiv).append(" <label class='radio-inline'><input type='radio' name='question-" + i + "' id='" + questions[i].options[t] + "'> " + questions[i].options[t] + "</label>");
        }
    }
    $(formDiv).append("<br><br><button type='button' class='btn btn-dark' id='finishQuiz'>Submit</button>");

    $("#finishQuiz").on("click", function() {
        quiz.done();
    }); 
},

//Scores quiz results
done: function() {

    for (var i = 0; i < questions.length; i++) {
            if ($("input[name=question-" + i + "]:checked").attr("id") == questions[i].answer) {
                quiz.correct++;
            } else {
                quiz.incorrect++;
            }
    }
    this.results();

},

results: function() {
    clearInterval(timer);

    $("#formDiv").remove();
    $("#timer").remove();
    playArea.append("<h2>Quiz Complete</h2>");
    playArea.append("<h2>Correct Answers: " + quiz.correct + "</h2>");
    playArea.append("<h2>Incorrect Answers: " + quiz.incorrect + "</h2>");
    }
}



});
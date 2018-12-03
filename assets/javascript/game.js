//Initializes the JavaScript code
$(document).ready(function() {

var playArea = $("#quizDiv");

//Initializes start and submit button events
$(document).on("click", "#startQuiz", function(event) {
    quiz.start();
});

$(document).on("click", "#finishQuiz", function(event) {
    quiz.done();
});

//Holds objects containing the question, answer options, question ID and correct answer
var questions = [{
        question: "Which quarterback leads the league in passing yards?",
        options: ["Patrick Mahomes", "Jared Goff", "Tom Brady", "Matt Ryan"],
        answer: 3
    }, {
        question: "Which team did Amari Cooper play for at the beginning of the season and who does he play for now?",
        options: ["Raiders, Cowboys", "49ers, Texans", "Eagles, Cowboys", "Dolphins, Rams"],
        answer: 0
    }, {
        question: "Name the running back who is leading the league in rushing yards.",
        options: ["Ezekiel Elliott", "Melvin Gordon", "Saquon Barkley", "Todd Gurley"],
        answer: 0
    }, {
        question: "Which quarterback suffered a potentially career-ending injury in week 11?",
        options: ["Jimmy Garoppolo", "Ryan Fitzpatrick", "Nick Foles", "Alex Smith"],
        answer: 3
    }, {
        question: "Which defense/special teams has the fewest sacks this season?",
        options: ["49ers", "Raiders", "Jaguars", "Giants"],
        answer: 1
    }, {
        question: "Name the wide receiver who is leading the league in receiving yards.",
        options: ["Adam Thielen", "Tyreek Hill", "Julio Jones", "Odell Beckham"],
        answer: 2
    },  {
        question: "Name the team that released Kareem Hunt after TMZ released an incriminating video.",
        options: ["Chiefs", "Rams", "Browns", "Raiders"],
        answer: 0
    }, {
        question: "Which quarterback has the most touchdowns this season?",
        options: ["Drew Brees", "Jared Goff", "Patrick Mahomes", "Ben Roethlisberger"],
        answer: 2
    }, {
        question: "Name the 2018 defense/special teams with the most interceptions.",
        options: ["Browns", "Bears", "Chiefs", "Dolphins"],
        answer: 1
    }, {
        question: "Which tight end has the most targets this season?",
        options: ["Travis Kelce", "George Kittle", "Jared Cook", "Zach Ertz"],
        answer: 3
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
            $("#message").html("<h2>Time's Up!</h2>");
            quiz.done(); 
    }
},
    
start: function() {
    timer = setInterval(quiz.time, 1000);
    $("#startQuiz").remove();

    for (var i = 0; i < questions.length; i++) {
        $(playArea).append("<p>" + questions[i].question + "</p>");
    for (var t = 0; t < questions.length; t++) {
        $(playArea).append("<input type='radio' name='question-" + i + " value= " + questions[i].options[t] + ">" + questions[i].options[t]);
        }
    }
    $(playArea).append("<button type='button' class='btn btn-dark' id='#finishQuiz'>Submit</button>");
},

//Scores quiz results
done: function() {
    $.each($("input[name='question[0]:checked"), function() {
        if ($(this).val() == questions[0].answer) {
            quiz.correct++;
        } else {
            quiz.incorrect++;
        }
    });

    $.each($("input[name='question[1]:checked"), function() {
        if ($(this).val() == questions[1].answer) {
            quiz.correct++;
        } else {
            quiz.incorrect++;
        }
    });

    $.each($("input[name='question[2]:checked"), function() {
        if ($(this).val() == questions[2].answer) {
            quiz.correct++;
        } else {
            quiz.incorrect++;
        }
    });

    $.each($("input[name='question[3]:checked"), function() {
        if ($(this).val() == questions[3].answer) {
            quiz.correct++;
        } else {
            quiz.incorrect++;
        }
    });

    $.each($("input[name='question[4]:checked"), function() {
        if ($(this).val() == questions[4].answer) {
            quiz.correct++;
        } else {
            quiz.incorrect++;
        }
    });

    $.each($("input[name='question[5]:checked"), function() {
        if ($(this).val() == questions[5].answer) {
            quiz.correct++;
        } else {
            quiz.incorrect++;
        }
    });

    $.each($("input[name='question[6]:checked"), function() {
        if ($(this).val() == questions[6].answer) {
            quiz.correct++;
        } else {
            quiz.incorrect++;
        }
    });

    $.each($("input[name='question[7]:checked"), function() {
        if ($(this).val() == questions[7].answer) {
            quiz.correct++;
        } else {
            quiz.incorrect++;
        }
    });

    $.each($("input[name='question[8]:checked"), function() {
        if ($(this).val() == questions[8].answer) {
            quiz.correct++;
        } else {
            quiz.incorrect++;
        }
    });

    $.each($("input[name='question[9]:checked"), function() {
        if ($(this).val() == questions[9].answer) {
            quiz.correct++;
        } else {
            quiz.incorrect++;
        }
    });

    this.results();

},

results: function() {
    clearInterval(timer);

    $("#quizDiv").remove();
    playArea.append("<h2>Quiz Complete</h2>");
    playArea.append("<h3>Correct Answers: " + this.correct + "</h3>");
    playArea.append("<h3>Incorrect Answers: " + this.correct + "</h3>");
    }
}

});
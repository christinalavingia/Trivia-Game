//Initializes the JavaScript code
$(document).ready(function() {

//Holds objects containing the question, answer options, question ID and correct answer
var game = {
    questions: [
    {
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
    }
    ]}



    
});
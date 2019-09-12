// You'll create a trivia form with multiple choice or true/false options (your choice).

// The player will have a limited amount of time to finish the quiz.

// The game ends when the time runs out. The page will reveal the number of questions that
// players answer correctly and incorrectly.

// Don't let the player pick more than one answer per question.

// Don't forget to include a countdown timer.
// When a player clicks on the Start button hide the button and show time remaining and questions

$(document).ready(function () {

    var number = 100;
    var intervalId;
    $("#submit").hide();
    $("#start").on("click", function () {
        $("#start").hide();

        generateQuestions();
        run();
        $("#submit").show();
    });


    function run() {
        intervalId = setInterval(decrement, 1000);
    }

    function decrement() {

        number--;

        $("#time-left").html("<h2>" + number + "</h2>");

        if (number === 0) {

            stop();

            $("#results").html("<h2> All Done! </h2>");
        }
    }

    function stop() {

        clearInterval(intervalId);
    }


    //Question & Answer Array
    var questions = [
        {
            question: "What is the capital of Montana?",
            choices: ["Billings", "Helena", "Bozeman", "Missoula"],
            answer: "Helena"
        },
        {
            question: "What is the capital of Mississippi?",
            choices: ["Biloxi", "Gulfport", "Hattiesburg", "Jackson"],
            answer: "Jackson"
        },

        {
            question: "What is the capital of Missouri?",
            choices: ["Columbia", "St. Louis", "Jefferson City", "Kansas City"],
            answer: "Jefferson City"
        },
        {
            question: "What is the capital of Maryland?",
            choices: ["Baltimore", "Annapolis", "Rockville", "Bethesda"],
            answer: "Annapolis"
        }
    ];


    //Function to generate the quiz questions
    // var output = [];
    // var answers;

    function generateQuestions() {
        for (var i = 0; i < questions.length; i++) {
            makeQuestion(questions[i], i);
        }
    }

    function makeQuestion(Q, qNumber) {
        var qBox = $('<div>');
        var question = $('<h3>').text(Q.question);
        var optionsBox = $('<div>');
        for (var i = 0; i < Q.choices.length; i++){
            var radioBtn = $('<input>');
            var choice = Q.choices[i];
            radioBtn.attr('value', choice);
            radioBtn.attr('name', 'q' + qNumber);
            radioBtn.attr('type', 'radio');
            optionsBox.append(radioBtn, '<span>' + choice +  '</span>', '<br />');
        }
        qBox.append(question, optionsBox);
        $('#quiz').append(qBox);
    
    
    }
//     var score = 0;

// for(var i = 0; i < questions.length; i++){
//      var response = (questions[i]);
//      if(response == questions[i].answer){
//           score++;
        
//      } else {
//           score--);
//      }
// }
    
        //  $("#quiz").on("change", ".form-check-input", function () {
        //     console.log(this);
        // //     let questionIndex = $(this).attr("name");
        // //     console.log(questions[questionIndex]);
        // //     let answer = $(this).val();
        // //     questions[questionIndex].userAnswer = answer;
        //    });
    
    
        

// var correct = 0;
// var incorrect = 0;
// var unanswered = 0;
    // Function to get results:
    //  Correct Answers:   var radioValue = $("input[name='choice']:checked"). val();
    //  Incorrect Answers:
    //  Unanswered:

    //  function getResults() {
    //     for (var i = 0; i < choices.length; i++) {
    //        getResults(choices[i], i);
        
    //     //  var radioValue = $("input[name='choice']:checked"). val();
    //     }
    //   }
    //   $("#results").on("click", function () {



// adds results of game (correct, incorrect, unanswered) to the page
// $('#results')
// .html(
// '<p>Correct: </p>'+
// '<p>Incorrect: </p>'+
// '<p>Unaswered: </p>');

// // Hide the game section
// $('#quiz').hide();

// // Show the start button to begin a new game
// $('#start').show();
//      })

});
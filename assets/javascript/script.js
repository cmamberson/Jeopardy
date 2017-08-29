(function(){

  $(function(){

    $("#form").submit(function() {
       return false;
     });
    let question = $("#question");
    let value = $("#value");
    let category = $("#category");
    let submitButton = $("#submitButton");
    let answerText = $("#answerText");
    let score = $("#score");
    let refresh;

function reloadQuestion(){
    $.get("http://jservice.io/api/random", function (data){
      console.log(data[0]);
      question.html(data[0].question);
      value.html(data[0].value);
      category.html(data[0].category.title);
      refresh = data;
    })
}

reloadQuestion();

submitButton.click(function(){
let guess = answerText.val();
let correctAnswer = refresh[0].answer;


  if (guess.toLowerCase() == correctAnswer.toLowerCase()){
    let newScore = parseInt(score.html()) + refresh[0].value;
    score.html(newScore);
    reloadQuestion();
  }

})

})

})()

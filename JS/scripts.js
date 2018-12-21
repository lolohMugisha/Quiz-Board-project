function check(){

  var questionOne = document.quiz.questionOne.value;
  var questionTwo = document.quiz.questionTwo.value;
  var questionThree = document.questionThree.value;
  var questionFour = document.quiz.questionFour.value;
  var questionFive = document.quiz.questionFive.value;
  var questionSix = document.quiz.questionSix.value;
  var questionSeven = document. questionSeven.value;
  var questionEight = document.quiz.questionEight.value;
  var questionNine = document. questionNine.value;
  var questionTen = document.quiz. questionTen.value;
  var count=0;

      if (Question1 == "window.print"){      
        count+=2;
      }
      if (Question2 == "forEach"){
        count+=2;
      }
      if (Question3 == "toUpperCase"){
        count+=2;
      }
      if (Question4 == "c"){
        count+=2;
      }
      if (Question5 == "c"){
        count+=2;
      }
      if (Question6 == "c"){
        count+=2;
      }
      if (Question7 == "c"){
        count+=2;
      }
      if (Question8 == "c"){
        count+=2;
      }
      if (Question9 == "c"){
        count+=2;
      }
      if (Question10 == "c"){
        count+=2;
      }
      if (Question11 == "c"){
        count+=2;
      }

  document.getElementById("after_submit").style.visibility ="visible";

  document.getElementById("number_count").innerHTML = "You got " +count + "%.";

  $("#button").hide();
  $("#quiz").hide();
  $("#number_count").show();
  event.preventDefault();

};
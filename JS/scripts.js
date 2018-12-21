var count=0;
// var questionOne = document.getElementById("quest1").value;
function check(questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine, questionNine,questionTen, questionEleven ){
  
  // var questionTwo = document.quiz.Question2.value;
  // var questionThree = document.Question3.value;
  // var questionFour = document.quiz.Question4.value;
  // var questionFive = document.quiz.Question5.value;
  // var questionSix = document.quiz.Question6.value;
  // var questionSeven = document.quiz.Question7.value;
  // var questionEight = document.quiz.Question8.value;
  // var questionNine = document.quiz.Question9.value;
  // var questionTen = document.quiz.Question10.value;
// console.log(questionOne)
      if (questionOne == "4"){      
        count+=2;
      }
      if (questionTwo == "1"){
        count+=2;
      }
      if (questionThree == "3"){
        count+=2;
      }
      if (questionFour == "1"){
        count+=2;
      }
      if (questionFive == "3"){
        count+=2;
      }
      if ( questionSix == "2"){
        count+=2;
      }
      if (questionSeven == "4"){
        count+=2;
      }
      if (questionEight == "1"){
        count+=2;
      }
      if (questionNine == "4"){
        count+=2;
      }
      if (questionTen == "2"){
        count+=2;
      }
      if (questionEleven == "4"){
        count+=2;
      }
      return count
  // document.getElementById("after_submit").style.visibility ="visible";

  // document.getElementById("number_count").innerHTML = "You got " +count + "%.";

};
$(document).ready(function(){
  
  $('#myform form').submit(function(){
    event.preventDefault();
    var Question1 = $("input[type='radio'][name='Question1']:checked").val()
    var Question2 = $("input[type='radio'][name='Question2']:checked").val()
    var Question3 = $("input[type='radio'][name='Question3']:checked").val()
    var Question4 = $("input[type='radio'][name='Question4']:checked").val()
    var Question5 = $("input[type='radio'][name='Question5']:checked").val()
    var Question6 = $("input[type='radio'][name='Question6']:checked").val()
    var Question7 = $("input[type='radio'][name='Question7']:checked").val()
    var Question8 = $("input[type='radio'][name='Question8']:checked").val()
    var Question9 = $("input[type='radio'][name='Question9']:checked").val()
    var Question10 = $("input[type='radio'][name='Question10']:checked").val()
    var Question11 = $("input[type='radio'][name='Question11']:checked").val()
  // console.log(Question1)
    check(Question1, Question2, Question3, Question4, Question5, Question6, Question7, Question8, Question9, Question10, Question11)
    $("#button").hide();
    $("#quiz").hide();
    $('#number_count').text("You got " +count + "%.")
    $("#number_count").show();
  })
  
})
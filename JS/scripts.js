function check(){

  var q1 = Music.quiz.q1.value;
  var q2 = Music.quiz.q2.value;
  var q3 = Music.quiz.q3.value;
  var q4 = Music.quiz.q4.value;
  var count=0;

      if (q1 == "c") {        
        count+=25;
      }
      if (q2 == "c"){
        count+=25;
      }
      if (q3 == "b"){
        count+=25;
      }
      if (q4 == "c"){
        count+=25;
      }
  document.getElementById("after_submit").style.visibility ="visible";

  document.getElementById("number_count").innerHTML = "You got " +count + "%.";

  $("#button").hide();
  $("#quiz").hide();
  $("#number_count").show();
  event.preventDefault();

};
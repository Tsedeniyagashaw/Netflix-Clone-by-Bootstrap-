
// var questions = document.getElementsByClassName("spans");

// for (var i = 0; i < questions.length; i++) {
//     var question = questions[i];
//     var btn = question.getElementsByClassName("open")[0];
//     var description = question.nextElementSibling;

   

//     question.addEventListener("click", firstFunction(question, description, btn));
// }

// function firstFunction(question, description, btn) {
//     return function () {
//         if (description.style.display === "none") {
//             description.style.display = "block";
//             btn.innerHTML = "x";
//         } else {
//             description.style.display = "none";
//             btn.innerHTML = "+";
//         }
//     };
// }



$(document).ready(function() {
    $('.spans').click(function() {
      $(this).next('.discr').toggle();
      $(this).find('.open').text(function(_, text) {
        return text === '+' ? '×' : '+';
      });
    });
  });

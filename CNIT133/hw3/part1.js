$(document).ready(function() {
  $("#flip").click(function() {
    $("#instructions").slideToggle("slow");
  });

  $("#form_avg").on("input", function() {
    let input = $(this);
    console.log(this);
    let val = $(this).val();
    console.log(val);

    if (val <= 100 && val >= 0) {
      input.removeClass("invalid").addClass("valid");
    } else {
      input.removeClass("valid").addClass("invalid");
    }
  });

  $("#form_midterm").on("input", function() {
    let input = $(this);
    console.log(this);
    let val = $(this).val();
    console.log(val);

    if (val <= 100 && val >= 0) {
      input.removeClass("invalid").addClass("valid");
    } else {
      input.removeClass("valid").addClass("invalid");
    }
  });

  $("#form_final").on("input", function() {
    let input = $(this);
    console.log(this);
    let val = $(this).val();
    console.log(val);

    if (val <= 100 && val >= 0) {
      input.removeClass("invalid").addClass("valid");
    } else {
      input.removeClass("valid").addClass("invalid");
    }
  });

  $("#form_acr").on("input", function() {
    let input = $(this);
    console.log(this);
    let val = $(this).val();
    console.log(val);

    if (val <= 100 && val >= 0) {
      input.removeClass("invalid").addClass("valid");
    } else {
      input.removeClass("valid").addClass("invalid");
    }
  });
});

function processPage() {
  let average, midterm, final, acr, grade;
  let resultHtml = "";
  let result = document.getElementById("result");

  var form_data = $("#form").serializeArray();
  var error_free = true;
  for (var input in form_data) {
    var element = $("#form_" + form_data[input]["name"]);
    var valid = element.hasClass("valid");
    console.log(valid);
    var error_element = $("span", element.parent());
    if (!valid) {
      error_element.removeClass("error").addClass("error_show");
      error_free = false;
      console.log("invalid");
    } else {
      error_element.removeClass("error_show").addClass("error");
      console.log("valid");
    }
  }
  if (!error_free) {
    event.preventDefault();
  } else {
    alert("No errors: Form will be submitted");
  }

  average = parseInt(document.getElementById("form_avg").value);
  midterm = parseInt(document.getElementById("form_midterm").value);
  final = parseInt(document.getElementById("form_final").value);
  acr = parseInt(document.getElementById("form_acr").value);

  grade = parseInt(0.5 * average + 0.2 * midterm + 0.2 * final + 0.1 * acr);
  console.log(grade);

  if (grade < 70) {
    resultHtml = ``;
  } else {
    resultHtml = ``;
  }

  result.innerHTML = resultHtml;
  resultHTML = "";
}

function clearPage() {
  let result = document.getElementById("result");

  result.innerHTML = "";

  $("#form div")
    .children("input")
    .removeClass("invalid")
    .removeClass("valid");

  $("#form div")
    .children("span")
    .removeClass("error_show")
    .addClass("error");
}

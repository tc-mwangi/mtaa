$(document).ready(function() {
  $("#feedback form").submit(function(e) {
    $(".input-group").hide();
    $("#messageContainer").hide();
    $("#feedbackS").hide();
    $(".textbox").hide();
    $("#msgs").hide();
    $("#msg").hide();
    $("#text").slideDown(2000);
    e.preventDefault();

  });

  $("#submit").click(function() {

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    if (email === "" || phone === "" || message === "") {
      alert("Please capture all the details on the form");
    } else {

      var both = name + ' |' + email + ' |' + phone + ' |' + subject + ' |' + message;
      var xx = new Blob([both], {
        type: "text/plain;charset=utf-8"
      });
      alert("Your information has been saved");
      saveAs(xx, "contact.txt");

    }

  });

});

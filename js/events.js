$(document).ready(function() {

  //Bussiness Logic
  function verify() {
    var name = "admin";
    var password = "admin";
    var userName = $("#name").val();
    var userPassword = $("#password").val();

    if (userName == name && userPassword == password) {
      $(".verification").hide();
      $(".eventPost").show();
    } else {
      $("#wrongCredentials").show();
      $("#wrongCredentials").val("wrong credentials");
    }
  }


    function readURL(input) {
      if (input.files && input.files[0]) {
        var push = new FileReader();

        push.onload = function(e) {
          $('#new').attr('src', e.target.result);
        }

        push.readAsDataURL(input.files[0]);
      }
    }
    $("#imgInp").change(function() {
      readURL(this);
    });


  //User interface
  $("#post").on('click', function(event) {
    $("#post").hide();
    $(".verification").show();
    $(".recorded").hide();
    $("#showPost").on('click', function() {
      verify();
    });

    $("#eventset").on('click', function() {
      $("#name").val("");
      $("#password").val("");
      $("#description").val("");
      $("#wrongCredentials").hide();
      $("#wrongCredentials").val("");
      $(".eventPost").hide();
      $("#post").show();
      $(".recorded").show();
    });
  });

});

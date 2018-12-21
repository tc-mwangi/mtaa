var username = [];
var password = [];
var all;
function xx(){
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
};

$(document).ready(function() {
  // Get the modal




  //Sign up
  $("#signup").click(function() {
    username.push($("#user").val());
    username.push($("#pass").val());
    $(".hidelogin").show();
    $(".hidesignup").hide();
    $("#signup").hide();
  });

  //log in
  $("#applogin").click(function() {
    $(".hidelogin").show();
    $(".hidesignup").hide();
    var userLoginName = $("#pass").val();
    var userLoginPassword = $("#pass").val();
    for (var i = 0, len = username.length; i < len; i++) {
      var inname = username[i];
      if (inname == userLoginName) {
        for (var i = 0, len = username.length; i < len; i++) {
          var password = username[i];
          if (password = userLoginPassword) {
            $(".hidelogin").hide();
            $("#applogin").hide();
            $(".itemhide").show();
            $("#wellcome").val(userLoginName);
            $("#wellcome").show();
            $(".modal").hide();
            $("#newlogin").hide();
            break;
          }
        }
        break;
      } else if(name != 'number') {
        alert("Wrong Credentials");
        break;
      }
    }
  })
});

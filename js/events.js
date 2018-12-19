$(document).ready(function(){

  $("#post").on('click',function(event) {
    $(".verification").show();
    $(".recorded").hide();
    $("#showPost").on('click', function(){
      $(".verification").hide();
      $(".eventPost").show();
      $("#eventset").on('click', function(){
        $(".eventPost").hide();
        $(".recorded").show();
      });
    });
  });
});

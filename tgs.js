
$(document).ready(function(){
  $("a").mousenter(function(){
    $(this).css("background-color", "yellow");
    }, function(){
    $(this).css("background-color", "pink");
  });
});


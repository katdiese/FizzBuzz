$(document).ready(function() {
console.log("document ready!");
  var i = 0;
  $("#my-button").click(function(e){
    if (i%3 === 0 && i%5 === 0) 
    {
      $(".list").append("<li>fizzbuzz</li>");
    }
      else if (i%3 === 0) {       
      $(".list").append("<li>fizz</li>");
      }
      else if (i%5 === 0) {
      $(".list").append("<li>buzz</li>");
      }
      else {
      $(".list").append("<li>" + i + "</li>");
      }
    if (i > 100){
      alert("You have reached 100, start over!");
      $(".list").html("");
      i=0;
    }
  i++;
  });
    
  
  });
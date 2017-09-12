$(document).ready(function() {
  $("button#cat").click(function() {
    $("ul#vs").append("<li>Cat purrs: 'Meow!' <br> Dog barks back: 'Woof!'</li>");
    $("ul#vs").children("li").last().click(function() {
      $(this).remove();
    });
  });

  $("button#dog").click(function() {
    $("ul#vs").append("<li>Dog barks: 'Woof!' <br> Cat purrs back: 'Meow!'</li>");
    $("ul#vs").children("li").last().click(function() {
      $(this).remove();
    });
  });

  $("p#imgCat").click(function() {
    $("ul#imgVs").append("<img src='img/cat.jpg' style='max-width:50%' alt='Photo of a cat'>");
    $("ul#imgVs").children("img").last().click(function() {
      $(this).remove();
    });
  });

  $("p#imgDog").click(function() {
    $("ul#imgVs").append("<img src='img/dog.jpg' style='max-width:50%' alt='Photo of a dog'>");
    $("ul#imgVs").children("img").last().click(function() {
      $(this).remove();
    });
  });
});

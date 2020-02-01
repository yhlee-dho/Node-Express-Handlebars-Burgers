// on click
$(function() {
  $(".change-devour").on("click", function(event) {
    event.preventDefault();
    const id = $(this).data("id");
    const newDevoured = {
      devoured: 1
    };
    // send put
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevoured
    })
      // reload
    .then(
      function() {
        location.reload();
      }
    );
  });

  // on submit
  $(".create-form").on("submit", function(event) {
    event.preventDefault();
    const newBurger = {
      burger_name: $("#newBurger").val().trim()
    };

    // send post
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    })
      // reload
    .then(
      function() {
        console.log("created new burger");
        location.reload();
      }
    );
  });
});
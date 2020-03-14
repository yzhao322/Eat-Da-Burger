// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-devoured").on("click", function (event) {
    event.preventDefault();
    let id = $(this).data("id");
    let newdevouredstate = {
      devoured: true
    }
    // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newdevouredstate,
      }).then(
        function () {
          // Reload the page to get the updated list
          location.reload();
        }
      );
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    let newBurger = {
      name: $("#burger").val().trim(),
      devoured: false
    };
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});

$(document).ready(function() {

  $(".devour-form").on("submit", function(event) {
    event.preventDefault();

    var postInfo = {
      post_id: $(this).children(".post_id").val(),
      fan: $(this).children(".custom-input").val()
    };

    $.ajax({
      method: "PUT",
      url: "/posts/update",
      data: postInfo
    }).then(function(data) {
      // reload page to display devoured burger in proper column
      location.reload();
    });

  });
});

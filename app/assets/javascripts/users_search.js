$(function() {
  $('#user-search-field').on("keyup", function(e) {
    var input = $("#user-search-field").val();

    $.ajax({
      url: '/users',
      type: 'GET',
      dataType: 'JSON',
      data:  { keyword: input }
    })
    .done(function(data) {
      console.log("success");
      console.log(data);
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });

  })
})

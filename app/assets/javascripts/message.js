$(function() {
  $('.comment-form').on('submit', function(e) {
    e.preventDefault();

    var fd = new FormData(this);
    var url = $(this).attr('action')

    $.ajax({
      url: url,
      type: 'POST',
      dataType: 'JSON',
      data: fd,
      processData: false,
      contentType: false
    })
    .done(function() {
      console.log("success");
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });


  })
})

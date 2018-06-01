$(function() {

  function append_message(message) {

    var html = `<div class="message">
                  <div class="message__author-name">
                    ${ message.user.name }
                  </div>
                  <div class="message__time">
                    ${ message.created_at }
                  </div>
                  <div class="message__text">
                    ${ message.text }
                  </div>
                </div>`

    $('.messages-list').append(html);
    append_image(message)
  }

  function append_image(message) {
    if (message.image.url) {
      var html = `<img src="${message.image.url}" class="message__image">`
      $('.message:last').append(html);
    }
  }

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
    .done(function(data) {
      append_message(data);
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });


  })
})

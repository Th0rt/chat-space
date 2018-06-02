$(function() {

  function append_flash(message, type) {
    var html = `<div class="flash__message flash__message--${ type }"> ${ message } </div>`
    $('#flash').html(html)
  }

  function append_message(message) {

    var html = `<div class="message">
                  <div class="message__author-name">
                    ${ message.user_name }
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
    if (message.image_url) {
      var html = `<img src="${message.image_url}" class="message__image">`
      $('.message:last').append(html);
    }
  }

  $('#form').on('submit', function(e) {
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
      append_message(data.message);
      $('.main-body').animate({scrollTop: $('.main-body')[0].scrollHeight}, 'fast');
      append_flash('メッセージの送信に成功しました', 'notice')
      $('#form')[0].reset();
    })
    .fail(function() {
      append_flash('メッセージの送信に失敗しました', 'alert')
    })
  })
})

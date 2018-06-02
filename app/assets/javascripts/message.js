$(function() {

  function scroll_bottom(element) {
    element.animate({scrollTop: element[0].scrollHeight}, 'fast');
  }

  function append_flash(message, type) {
    var html = `<div class="flash__message flash__message--${ type }"> ${ message } </div>`
    $('#flash').html(html)
  }

  function append_message(message) {

    var image_html = (message.image_url)? `<img src="${message.image_url}" class="message__image">` : ""

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
                  ${ image_html }
                </div>`

    $('.messages-list').append(html);
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
      scroll_bottom($('.main-body'));
      append_flash('メッセージの送信に成功しました', 'notice')
      $('#form')[0].reset();
    })
    .fail(function() {
      append_flash('メッセージの送信に失敗しました', 'alert')
    })
  })
})

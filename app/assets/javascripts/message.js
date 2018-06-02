$(function() {

  function scroll_bottom(element) {
    element.animate({scrollTop: element[0].scrollHeight}, 'fast');
  }

  function append_flash(message, type) {
    var html = `<div class="flash__message flash__message--${ type }"> ${ message } </div>`
    $('#flash').html(html)
  }

  $(function auto_update(){
    setInterval(update, 5000);
  })

  function update(){
    var last_message_id = $('.message:last').data('id')

    $.ajax({
      url: location.href,
      type: 'GET',
      dataType: 'JSON',
      data: { last_message_id: last_message_id }
    })
    .done(function(data) {
      if(data.new_message) {
        $.each(data.new_message,function(i, message) { append_message(message) });
        scroll_bottom($('.main-body'));
      }
    })
    .fail(function() {
      append_flash('更新に失敗しました', 'alert');
    })
  }

  function append_message(message) {

    var image_html = (message.image_url)? `<img src="${message.image_url}" class="message__image">` : ""

    var html = `<div class="message" data-id="${ message.id }">
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

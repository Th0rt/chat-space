$(function() {
  $('.comment-form').on('submit', function(e) {
    e.preventDefault();
      comment = $('.comment-form__message').val();
      console.log(comment);

  })
})

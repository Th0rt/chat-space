// groups/editの各処理

$(function() {

  // ここから描画HTMLの定義

  function append_html_add_member (element, user) {
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${ user.name }</p>
                  <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${ user.id }" data-user-name="${ user.name }">追加</a>
                </div>`
    element.append(html)
  }

  function append_html_error (element, message) {
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${ message }</p>
                </div>`
    element.append(html)
  }

  function apopend_html_select_menber (element, user) {
    var html = `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-${ user.id }'>
                  <input name='group[user_ids][]' type='hidden' value='${ user.id }'>
                  <p class='chat-group-user__name'>${ user.name }</p>
                  <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
                </div>`
    element.append(html)
  }

  // 描画HTMLの定義ここまで

  // ユーザー追加のインクリメンタルサーチ
  var preInput = ""

  $('#user-search-field').on("keyup", function(e) {
    var input = $("#user-search-field").val();

    if (input != preInput) {
      $('#user-search-result').empty();

      $.ajax({
        url: '/users',
        type: 'GET',
        dataType: 'JSON',
        data:  { keyword: input }
      })
      .done(function(data) {
        if (data.users.length) {
          data.users.forEach(function(user) { append_html_add_member($('#user-search-result'), user) });
        } else {
          append_html_error($('#user-search-result'), "一致するユーザーがいません")
        }
      })
      .fail(function() {
        append_html_error($('#user-search-result'), "通信エラーが発生しました")
      })
      preInput = input
    }
  })

  // 追加ボタン押下時の処理
  $('#user-search-result').on('click', '.chat-group-user__btn--add', function(e) {
    var user = { id: $(this).data('userId'), name: $(this).data('userName')}

    if ((dup = $('#chat-group-users').find(`#chat-group-user-${ user.id }`)).length) {
      dup.css('color', 'red');
    } else {
      apopend_html_select_menber($('#chat-group-users'), user)
      $(this).parent().remove();
    }
  })

  // 削除ボタン押下時の処理
  $('#chat-group-users').on('click', '.chat-group-user__btn--remove', function(e) {
    $(this).parent().remove();
  })
})

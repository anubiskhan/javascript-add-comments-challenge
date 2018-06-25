$(document).ready(function(){
  // add your code here
  $('#new_comment_button').click(() => {
    $('form#new_comment').toggle()
  })

  $('form#new_comment').submit(event => {
    event.preventDefault()
    let commentBody = $('textarea#comment_body').val()
    let authorName = $('input#authorName').val()

    $('#comment_list').append(
      '<li>'
        + commentBody +
        '<span class="author">' + authorName +'</span></li>'
    )
  })
})

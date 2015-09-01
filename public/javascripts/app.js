/**
 * Created by littlewhelan on 8/31/15.
 */
var $message = $('#message-template').html();
var messageTmp = Handlebars.compile($message);
$(document).ready(function () {
   console.log('ready');

    $('body').on('click', 'button.message', function (e) {
        e.preventDefault();
        var $parent = $(this).parent().parent().parent();
        postMessage($parent.data('id'), $parent.find('input.message').val(), $parent.next());
        $parent.find('input.message').val('')
    });

    $('div.msg').each(function (i, v) {
        getMessage($(this).data('id'), $(this));
    });
});

function postMessage(id, msg, elem) {
    console.log(id, msg);
    var ajaxCall = $.ajax({
        type: 'POST',
        url: '/messages/'+ id +'/'+ msg
    });
    ajaxCall.done(function (res) {
        console.log(res);
       elem.empty().append(messageTmp(res));
    });
}

function getMessage (id, elem) {
    var ajaxCall = $.ajax({
       type: 'GET',
        url: '/messages/'+ id
    });
    ajaxCall.done(function(res) {
       elem.append(messageTmp(res));
    });
}
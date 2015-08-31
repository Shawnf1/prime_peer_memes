/**
 * Created by littlewhelan on 8/31/15.
 */
$(document).ready(function () {
   console.log('ready');
    $('body').on('click', 'button.message', function (e) {
        e.preventDefault();
        var $parent = $(this).parent().parent().parent();
        //postMessage($(this).parent().find('input.message').val());
        postMessage($parent.data('id'), $parent.find('input.message').val());
        //console.log($(this).parent().find('input.message').val());
    });
});

function postMessage(id, msg) {
    console.log(id, msg);
    $.ajax({
        type: 'POST',
        url: '/messages/'+ id +'/'+ msg
    })
}
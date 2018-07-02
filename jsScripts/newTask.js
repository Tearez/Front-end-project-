jQuery(document).ready(function () {
    var $title = $('#task-title');
    var $description = $('#task-desc');
    var $date = $('#date');
    jQuery('#task-submit').on('click', function () {
        $('.tabs .table tbody').append('<tr><td>' + $title.val() + '</td><td>' + $description.val() + '</td><td>' + $date.val() + '</td><td><button class="deleteRow"><span class="glyphicon glyphicon-ok"> Done!</span></button></td></tr>');
    });
});
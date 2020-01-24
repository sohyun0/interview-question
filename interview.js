$(document).ready(function () {
    $('article span').on({
        'click': function () {
            $(this).text('[더블클릭 닫기]').stop().parent().next().slideDown('slow');
        },
        'dblclick': function () {
            $(this).text('[열기]').parent().next().stop().slideUp('slow');
        }
    })
    $('header .open').click(function () {
        $('article p').slideDown('slow');
        $('h2 span').text('[더블클릭 닫기]')
    });
    $('header .close').click(function () {
        $('article span').text('[열기]').stop().parent().next().slideUp('slow');
    });
});
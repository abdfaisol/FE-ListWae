// ------------step-wizard-------------
$(document).ready(function () {
    $('.nav-tabs > li a[title]').tooltip();
    
    //Wizard
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {

        var target = $(e.target);
    
        if (target.parent().hasClass('disabled')) {
            return false;
        }
    });

    $(".next-step").click(function (e) {

        var active = $('.wizard .nav-tabs li.active');
        active.next().removeClass('disabled');
        nextTab(active);

    });
    $(".prev-step").click(function (e) {

        var active = $('.wizard .nav-tabs li.active');
        prevTab(active);

    });
});

function nextTab(elem) {
    $(elem).next().find('a[data-toggle="tab"]').click();
}
function prevTab(elem) {
    $(elem).prev().find('a[data-toggle="tab"]').click();
}


$('.nav-tabs').on('click', 'li', function() {
    $('.nav-tabs li.active').removeClass('active');
    $(this).addClass('active');
});

$(".tambah").on("click", function() {
    var el = $(this);
    el.text() == el.data("text-swap") 
      ? el.text(el.data("text-original")) 
      : el.text(el.data("text-swap"));
});

$(".next-step").click(function () {
    var value = $("#jki").val();
    $('#jko').val(value);
});

$(".next-step").click(function () {
    var value = $("#jko").val();
    var value2 = $("#ep").val();
    var value3 = $("#nb").val();
    var value4 = $("#kt").val();
    var value5 = $("#hb").val();
    var value6 = $("#ctt").val();
    $('#jko2').val(value);
    var rp = "Rp" + value2;
    $('#rp').html(rp);

});

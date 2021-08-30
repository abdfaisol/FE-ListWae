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
    var value0 = $("#jki").val();
    $('#jko').html(value0);

    var value1 = $("#jko").html();
    var value2 = $("#ep").val();
    var value3 = $("#nb").val();
    var value4 = $("#kt").val();
    var value5 = $("#hb").val();
    var value6 = $("#ctt").val();
    var rpp = "Rp";
    $('#jko2').html(value1);
    var rp = "Rp" + value2;
    $('#rp').html(rp);

    var list = '<div class="input-group mb-3 cb">' + '<div class="input-group-prepend" >' + '<div class="checkbox-round">' + '<input type="checkbox" id="checkbox" />' 
    + '<label for="checkbox">' + "</label>" + "</div>" + "<ul>" + '<li class="subjudul">' + value3 + "</li>" + '<li class="d-flex align-items-center isi">' + value4
    + '<i class="fa fa-circle" aria-hidden="true">' + "</i>" + rpp + value5 + "</li>" + '<li class="isi2">' + value6 + "</li>" + "</ul>" + "</div>"  + "</div>";
    $('#list').html(list);                       
});

$(".tambah2").click(function () {
    var value3 = $("#nb2").val();
    var value4 = $("#kt2").val();
    var value5 = $("#hb2").val();
    var value6 = $("#ctt2").val();
    var rpp = "Rp";
    var list = '<div class="input-group mb-3 cb">' + '<div class="input-group-prepend" >' + '<div class="checkbox-round">' + '<input type="checkbox" id="checkbox" />' 
    + '<label for="checkbox">' + "</label>" + "</div>" + "<ul>" + '<li class="subjudul">' + value3 + "</li>" + '<li class="d-flex align-items-center isi">' + value4
    + '<i class="fa fa-circle" aria-hidden="true">' + "</i>" + rpp + value5 + "</li>" + '<li class="isi2">' + value6 + "</li>" + "</ul>" + "</div>"  + "</div>";
    $('#list').append(list); 
});

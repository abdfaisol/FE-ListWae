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
    $('#jko').val(value0);

    var value1 = $("#jko").val();
    var value2 = $("#ep").val();
    var value3 = $("#nb").val();
    var value4 = $("#kt").val();
    var value4x = value4.fontsize(2);
    var value5 = $("#hb").val();
    var value5x = value5.fontsize(2);
    var value6 = $("#ctt").val();
    var value6x = value6.fontsize(1);
    var g = " - ";
    var gx = g.fontsize(2);
    var rpp = "Rp";
    var rppx = rpp.fontsize(2);
    $('#jko2').val(value1);
    var rp = "Rp" + value2;
    $('#rp').html(rp);
    var list = "# " + value3 + "<br>" + "&emsp;&ensp;" + value4x + 
    gx + rppx + value5x + "<br>" + "&emsp;&ensp;&nbsp;" + value6x + "<br>";
    $('#list').html(list);
});

$(".tambah2").click(function () {
    var value3 = $("#nb2").val();
    var value4 = $("#kt2").val();
    var value4x = value4.fontsize(2);
    var value5 = $("#hb2").val();
    var value5x = value5.fontsize(2);
    var value6 = $("#ctt2").val();
    var value6x = value6.fontsize(1);
    var g = " - ";
    var gx = g.fontsize(2);
    var rpp = "Rp";
    var rppx = rpp.fontsize(2);
    var list = "# " + value3 + "<br>" + "&emsp;&ensp;" + value4x + 
    gx + rppx + value5x + "<br>" + "&emsp;&ensp;&nbsp;" + value6x + "<br>";   
    $("#list").append(list);
});

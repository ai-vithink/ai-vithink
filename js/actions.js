$(document).ready(function(){
    $("#events-button").on("click",function(){
        $("#buttons").animate({top:200});
        $(".foot").animate({top:200});
        $(".events").css("display", "inline-block" );
    });

    $('.card').scroll(function() { 
        $('.cross').animate({top:$(this).scrollTop()},0.001,"linear");
    });

    $("#events-cross").on("click", function(){
        $("#buttons").animate({top:0});
        $(".foot").animate({top:0});
        $(".events").css("display", "none" );
    });


});
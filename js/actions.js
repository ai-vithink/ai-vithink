$(document).ready(function(){
    $("#events-button").on("click",function(){
        $("#buttons").animate({top:200});
        $(".foot").animate({top:200});
        $(".events").css("display", "inline-block" );
    });

    $(document).on("click", function(){
        console.log($(event.target).attr("class"));
        if( $(event.target).attr("class") != "events card" && $(event.target).parent().attr("class") !="media" && $(event.target).parent().attr("class") !="subtitle is-6" && $(event.target).parent().attr("class") != "card-content"&& $(event.target).parent().attr("class") != "events card" && $(event.target).parent().attr("class") != "content"  && $(event.target).parent().attr("class") != "events-card" && $(event.target).parent().attr("class") != "media-content" && $(event.target).parent().attr("class") != "container"  && event.target.id != "events-button"){
            $("#buttons").animate({top:0});
            $(".foot").animate({top:0});
            $(".events").css("display", "none" );
            flag = 0;
        }
    });


});
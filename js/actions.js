$(document).ready(function(){

    //Opening the events tab
    $("#events-button").on("click",function(){
        $("#about").css("display","none");
        $("#contacts").css("display", "none" );
        $("#countdown").css("display", "none" );
        $("#buttons").animate({top:560});
        $(".foot").animate({top:560});
        $("#main").animate({
            width: "200px",
            height: "200px"
        
        });
        $(".events").css("display", "inline-block" );
    });

    $("#about-us").on("click",function(){
        $(".events").css("display","none");
        $("#contacts").css("display", "none" );
        $("#countdown").css("display", "none" );
        $("#buttons").animate({top:560});
        $(".foot").animate({top:560});
        $("#main").animate({
            width: "200px",
            height: "200px"
        
        });
        $("#about").css("display", "inline-block" );
    });

    $(document).on("click", function(){
        //Closing the events tab
        if($(event.target).attr("class") != "events card" && $(event.target).parent().attr("class") !="media" && $(event.target).parent().attr("class") !="subtitle is-6" && $(event.target).parent().attr("class") != "card-content" && $(event.target).parent().attr("class") != "events card" && $(event.target).parent().attr("class") != "content"  && $(event.target).parent().attr("class") != "events-card" && $(event.target).parent().attr("class") != "media-content" && $(event.target).parent().attr("class") != "container"  && event.target.id != "events-button"){
            $("#buttons").animate({top:0});
            $(".foot").animate({top:0});
            $("#main").animate({
                width: "300px",
                height: "300px"
            });
            $(".events").css("display", "none" );
            $("#about").css("display", "none" );
            $("#contacts").css("display", "inline-block" );
            $("#countdown").css("display", "inline-block" );
        }

        //Closing the events section for image. (Because for some reason it doesn't work with the abve if statement #issue)
        if($(event.target).attr("class") == "image" ||$(event.target).attr("class") == "delete"){
            $("#buttons").animate({top:0});
            $(".foot").animate({top:0});
            $("#main").animate({
                width: "300px",
                height: "300px"
            });
            $(".events").css("display", "none" );
            $("#about").css("display", "none" );
            $("#contacts").css("display", "inline-block" );
            $("#countdown").css("display", "inline-block" );
        }
    });

    $("#result").on("click",function(){
        $(".modal").attr("class","is-active");
    });
});
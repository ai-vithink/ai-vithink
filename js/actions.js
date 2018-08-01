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

    /* 
     * This is to make it clear that what follows below is not my creation. 
     * I didn't have enough time to code for it. 
     * It has been picked up from online sources
     */
    //Countdown 
    // Set the date we're counting down to
    var countDownDate = new Date("Aug 1, 2018 23:59:59").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        document.getElementById("countdown-append").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

        // If the count down is finished, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown-append").innerHTML = "EXPIRED";
        }
    }, 1000);

});
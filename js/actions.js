$(document).ready(function(){
    
    $("#ai-training-tab").on("click",function(){
        window.location.href = "ai.html";
    });

    $("#home-tab").on("click",function(){
        window.location.href = "index.html";
    });

    $("#about-us-tab").on("click",function(){
        window.location.href = "board.html";
    });

    $("#view-srini").on("click",function(){
        window.location.href = "srini.html";
    });

    $("#view-ebe").on("click",function(){
        window.location.href = "ebe.html";
    });

    $("#view-susan").on("click",function(){
        window.location.href = "susan.html";
    });

    $("#events-tab").on("click",function(){
        window.location.href = "events.html";
    });

    $("#mentors-tab").on("click",function(){
        window.location.href = "mentors.html";
    });

    $("#experience-tab").on("click",function(){
        window.location.href = "experience.html";
    });

    $("#resources-tab").on("click",function(){
        window.location.href = "resources.html";
    });



    // Read more button (Sorry this is a very shitty way to do it. I just don;t have the time to make the code less repetitive)
    $(".read-more-1").on('click', function() {
        document.querySelector('#content-1').style.height= 'auto';
        this.style.display='none';

        $(".hide-more-1").css("display","inline");
      });

    $(".hide-more-1").on('click', function() {
    document.querySelector('#content-1').style.height= '10em';
    this.style.display='none';

    $(".read-more-1").css("display","inline");
    });

    $(".read-more-2").on('click', function() {
        document.querySelector('#content-2').style.height= 'auto';
        this.style.display='none';

        $(".hide-more-2").css("display","inline");
      });

    $(".hide-more-2").on('click', function() {
    document.querySelector('#content-2').style.height= '10em';
    this.style.display='none';

    $(".read-more-2").css("display","inline");
    });
    
    //Remove after hackathon
    var toHack = new Date("October 13, 2018 09:00:00");
    var endHack = new Date("October 14, 2018 09:00:00")
    countdown(toHack,"Hack Begins!",countdown(endHack,"Hack Ends!",dummy(),""),"HACK ENDS IN:" );

});

function dummy(){
// Does nothing. Helps prevent the log errors.
}

/* 
    * This is to make it clear that what follows below is not my creation. 
    * I didn't have enough time to code for it. 
    * It has been picked up from online sources
    */
//Countdown 
// Set the date we're counting down to
function countdown(date,endMessage, endFunc, hackMessage){
    var countDownDate = date.getTime();
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
            document.getElementById("hack-message").innerHTML = hackMessage;
            document.getElementById("countdown-append").innerHTML = endMessage;
            endFunc();
        }
    }, 1000);
}
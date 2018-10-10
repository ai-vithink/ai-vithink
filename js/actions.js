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
      
});
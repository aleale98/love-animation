$(document).ready(function(){
    let run = false;
    $("#start").on("click", function(){
        $('.love-stop').addClass('love').removeClass('love-stop');
        $('.love-1-stop').addClass('love-1').removeClass('love-1-stop');
        $('.love-2-stop').addClass('love-2').removeClass('love-2-stop');
        if(!run){
            $(".love").css("animation-play-state", "running");
            $(".love-1").css("animation-play-state", "running");
            $(".love-2").css("animation-play-state", "running");
            run = true;
            console.log(run);
        }else{
            $(".love").css("animation-play-state", "paused");
            $(".love-1").css("animation-play-state", "paused");
            $(".love-2").css("animation-play-state", "paused");
            run = false;
            console.log(run);
        }

    });
});

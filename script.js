let timer; 
let curr = 13; 
let myAudio;

function change(){
    if(curr >= 0){
        $("#countdown").html(String(curr));
        curr = curr - 1;
    }else{
        clearInterval(timer); 
        $(".love").fadeOut();
        $(".love-1").fadeOut();
        $(".love-2").fadeOut();
        $(".back").fadeOut(2500);
        $("section").fadeIn(2500);
        let interval = setInterval(() => {
            $("#frase").fadeIn(2000);
        }, 2000);
        myAudio.pause();
    }
}

$(document).ready(function(){
    let run = false;
    $("#countdown").hide();
    $("section").hide();
    $("#frase").hide();
    $(".button5").on("click", function(){
    myAudio = new Audio('heart-beat-sound-effect.mp3');
    if(typeof myAudio == 'boolean'){
        myAudio.loop = true;
    }else{
        myAudio.addEventListener('ended', function(){
            this.currentTime = 0; 
            this.play();
        }, false);
    }
    myAudio.play();
        $('.love-stop').addClass('love').removeClass('love-stop');
        $('.love-1-stop').addClass('love-1').removeClass('love-1-stop');
        $('.love-2-stop').addClass('love-2').removeClass('love-2-stop');
        $('.button5').fadeOut();
        $("section").hide();
        $("#countdown").html("10");
        timer = setInterval(change, 1000); 
    });
});

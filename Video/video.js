var myvideo = document.getElementById("my_video");
play = document.getElementById("playme");
jump = document.getElementById("jump");
jump2 = document.getElementById("jump2");

var buttons = ['playme','jump','jump2'];

buttons.forEach(function(bn) {
    document.getElementById(bn).addEventListener(
        'click', buttonEvents, !1
    );
   
});

function buttonEvents(e) {
    /* get the id of the clicked button */
    var element_id = e.target.id;
    /* E.G. element_id = 'playme', 'jump', or 'jump2' */

    /* declare variables before setting them */
    var timeStart = 0;
    var timeEnd = 0;

    /* set start and end values depending 
       on which button was clicked */
    switch(element_id) {
        case 'playme':
            timeStart = 0;
            timeEnd = 20; 
            break;
        case 'jump':
            timeStart = 21;
            timeEnd = 135;
            break;
        case 'jump2':
            timeStart = 136;
            timeEnd = 220;
    }

    /* call 'playVideo()' */
    playVideo(timeStart);
}

myvideo.ontimeupdate = function(){
    myfunction();
}

function myfunction(){

    if(myvideo.currentTime > 1 && myvideo.currentTime < 20){
        play.className = "fa fa-unlock-alt fa-3x";
        jump.className = "fa fa-lock fa-3x";
        jump2.className = "fa fa-lock fa-3x";
    }

    if(myvideo.currentTime > 20 && myvideo.currentTime < 136){
        play.className = "fa fa-check fa-3x";
        jump.className = "fa fa-unlock-alt fa-3x";
        jump2.className = "fa fa-lock fa-3x";
    }

    if(myvideo.currentTime > 136 && myvideo.currentTime < 218){
        play.className = "fa fa-check fa-3x";
        jump.className = "fa fa-check fa-3x";
        jump2.className = "fa fa-unlock-alt fa-3x";
    }

    if(myvideo.currentTime > 218){
        play.className = "fa fa-check fa-3x";
        jump.className = "fa fa-check fa-3x";
        jump2.className = "fa fa-check fa-3x";

    }
}

function playVideo(startTime) {
    //set video start time
    myvideo.currentTime = startTime;
    // play video
    myvideo.play();

    if(myvideo.currentTime < 20){
        play.className = "fa fa-unlock-alt fa-3x";
    }

    if (myvideo.currentTime > 20){
        jump.className = "fa fa-unlock-alt fa-3x";
        play.className = "fa fa-check fa-3x";
    }
   
    if (myvideo.currentTime > 135){
        jump.className = "fa fa-check fa-3x";
        jump2.className = "fa fa-unlock-alt fa-3x";
    }
    
    if (myvideo.addEventListener('ended',myHandler,false)){
     function myHandler(e) {
        jump2.className = "fa fa-check-circle fa-3x";
        }   
    }
}
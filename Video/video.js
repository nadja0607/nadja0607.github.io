var myvideo = document.getElementById("my_video");
/* play = document.getElementById("playme");
jump = document.getElementById("jump");
jump2 = document.getElementById("jump2");


play.addEventListener("click", () => {
    timeEnd = 19;
    console.log("play step 1");

    if (myvideo.currentTime == timeEnd) {
        myvideo.pause();
     } else {
         myvideo.play();
     }
})

jump.addEventListener("click", () => {
    timeEnd = 135;
    console.log("play step 2");

    if (myvideo.currentTime == timeEnd) {
        myvideo.pause();
     } else {
         myvideo.play();
     }
})

jump2.addEventListener("click", () => {
    timeEnd = 220;
    console.log("play step 3");

    if (myvideo.currentTime == timeEnd) {
        myvideo.pause();
     } else {
         myvideo.play();
     }
}) */

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

function playVideo(startTime) {
    /* set video start time */
    myvideo.currentTime = startTime;
    /* play video */
    myvideo.play();
    
}
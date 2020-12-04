var myvideo = document.getElementById('myvideo'),
playbutton = document.getElementById('playme'),
jumplink = document.getElementById('jump'),
jumplink2 = document.getElementById('jump2');

jumplink.addEventListener("click", function (event) {
    event.preventDefault();
    myvideo.play();
    myvideo.pause();
    myvideo.currentTime = 20;
    myvideo.play();
}, false);

jumplink2.addEventListener("click", function (event) {
    event.preventDefault();
    myvideo.play();
    myvideo.pause();
    myvideo.currentTime = 135;
    myvideo.play();
}, false);

playbutton.addEventListener("click", function () {
    if (myvideo.paused) {
        myvideo.play();
    } else {
        myvideo.pause();
    }
}, false);


/* https://stackoverflow.com/questions/47643091/html5-video-start-video-at-certain-time-and-play-for-x-amount-of-time 
follow this link to make video responsive on icons - also we want the icons to change color when steps change???*/
// Loading a random image and fortune each time the page is loaded 
// event onload which is associated with the object window will excute script when page is laoded

window.onload = fortuneC;

function fortuneC() {

    let fortDiv = document.getElementById('fortuneC');
    let fortI = document.getElementById('imageC')
    // array containing fortune messages
    let fortuneArray = new Array("Do what you love. The rest will fall into place.",
        "Change comes with embracing the future, not fighting your past.",
        "You will receive great news today.", "A chance meeting opens new doors to success and friendship.", "The love of your life will appear in front of you unexpectedly!");

    // aray containing images
    let imagesArray = new Array("img1.jpg", "img2.jpg", "img3.png", "img4.png", "img5.png");

    // generating random index that would match contents of both arrays
    let randNum = Math.floor(Math.random() * fortuneArray.length);

    let result = "<h1>" + fortuneArray[randNum];
    let resultImg = imagesArray[randNum];

    fortDiv.innerHTML = result;
    fortI.innerHTML = "<img src=" + resultImg+ ">";
}
console.log("Hi, this is a testing line");

let photo = document.getElementById("icon");
photo.style.width = '90%';

photo.addEventListener("mouseenter", () => {
    //enlarge the icon on hover
        photo.style.width = '99%';
  });

  //specifying what happens when my mouse leaves -icon gets back to its original position
photo.addEventListener("mouseleave", () => {
        photo.style.width = '90%';
  });
  
  function playAudio(url){
    let treedom = document.getElementById("treedom");
    let yoki = document.getElementById("yoki");
    let nadja = document.getElementById("nadja");
    let quim = document.getElementById("quim");
   
    if (url=="treedom_audio.mp3"){
        treedom.play();
        yoki.pause();
        nadja.pause();
        quim.pause();
    } 
    if (url=="yoki_audio.mp3"){
        treedom.pause();
        yoki.play();
        nadja.pause();
        quim.pause();
    } 
    if (url=="nadja_audio.mp3"){
        treedom.pause();
        yoki.pause();
        nadja.play();
        quim.pause();
    } 
    if (url=="quim_audio.mp3"){
        treedom.pause();
        yoki.pause();
        nadja.pause();
        quim.play();
    } 
  }
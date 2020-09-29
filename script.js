//trying to make a connection with my console :D
console.log("Hi, this is a testing line");

//finding my div in the DOM by using the unique id I gave it in my html
//storing it in a variable and changing the background color
let pinkPar = document.getElementById("pink-div");
pinkPar.style.backgroundColor = "black";
//doing the similar with the text section
let showText = document.getElementById("welcome");
showText.style.color = "white";
showText.style.fontSize = "26px";
showText.style.textAlign = "center";
showText.innerText =
  "Don't come any closer .... Keep the social distance ...... Hover over!!!";

//adding event listener to my div
//specifying the event - mouse hover
pinkPar.addEventListener("mouseenter", () => {
  //if the div is hidden (black), I turn it pink, change the font size of the text and change the showed text
  if (pinkPar.style.backgroundColor == "black") {
    pinkPar.style.backgroundColor = "#ff6348";
    showText.style.fontSize = "20px";
    showText.innerText =
      "The coronavirus also known as COVID-19, hit us by surprise, consumed us within months. Nobody predicted that it would kill so many people, force countries to lockdown, shut schools and public places and put our life on hold. It hit us and now it's everywhere. It made the whole world bleed, spreading like wildfire.";
  }
});

//specifying what happens when my mouse leaves
pinkPar.addEventListener("mouseleave", () => {
  //I make the div invisible (black) again, change the font size and change the text nack to initial format
  pinkPar.style.backgroundColor = "black";
  showText.style.fontSize = "26px";
  showText.innerText =
    "Don't come any closer .... Keep the social distance ...... Hover over!!!";
});

// checking if I have the connection ---- add change tittle on the top
console.log("Hiiiiiii")

// variable that helps me change the styles from one to another - related to function change()
let count = 0;

// changing style function
function change() {

    // accessing the objects by using the IDs to change their properties
    let changeButton = document.getElementById("click-button");
    let navbar = document.getElementById('my-navbar')
    let header = document.getElementById('header1');
    let title = document.getElementById('title');
    let about1 = document.getElementById('about1');
    let about1div = document.getElementById('about11');
    let about2 = document.getElementById('about2');
    let about2div = document.getElementById('about22');
    let footer = document.getElementById('footer');
    let prizeButton = document.getElementById("prize-button");

    // changin it back to its original state
    if (count == 1) {
        document.body.style.backgroundColor = "rgb(243, 190, 198)";
        navbar.style.backgroundColor = "rgb(75, 34, 41)";
        header.style.backgroundColor = "rgb(165, 77, 91)";
        header.style.fontVariant = "normal";
        title.textContent = "Sarajevo: The City Where East Meets West";
        changeButton.style.backgroundColor = "rgb(75, 34, 41)";
        changeButton.style.fontVariant = "normal";
        about1.style.color = "black";
        about1.style.backgroundColor = "transparent";
        about1.style.fontFamily = "Papyrus";
        about1.style.fontWeight = "bold";
        about1.style.fontSize = "18px";
        about1.style.padding = "2%";
        about2.style.color = "black";
        about2.style.backgroundColor = "transparent";
        about2.style.fontFamily = "Papyrus";
        about2.style.fontWeight = "bold";
        about2.style.fontSize = "18px";
        about2.style.padding = "2%";
        about1div.style.backgroundColor = "rgba(165, 77, 92, 0.356)";
        about2div.style.backgroundColor = "rgba(165, 77, 92, 0.356)";
        footer.style.backgroundColor = "rgb(75, 34, 41)";
        prizeButton.style.backgroundColor = "rgb(75, 34, 41)";
        prizeButton.style.fontVariant = "normal";
        prizeDiv.style.backgroundColor = "rgba(165, 77, 92, 0.356)";
        prizeDiv.style.color = "black";
        count = 0;
    }
    else {
        // changing style properties of the document body
        document.body.style.backgroundColor = "#B1CCFF";

        // navbar
        navbar.style.backgroundColor = "#00153E";

        // header fonts and color
        header.style.backgroundColor = "rgb(74,129,236)";
        header.style.fontVariant = "small-caps";

        // changing the title
        title.textContent = "Sarajevo: Feel The Cultural Splash"

        // button style
        changeButton.style.backgroundColor = "#00153E";
        changeButton.style.fontVariant = "small-caps";
        prizeButton.style.fontVariant = "small-caps";
        prizeButton.style.backgroundColor = "#00153E";

        // text within div- font and colors
        about1.style.color = "rgb(255,255,255)";
        about1.style.fontFamily = "Comic Sans";
        about1.style.fontWeight = "lighter";
        about1.style.fontSize = "20px";
        about1.style.padding = "30px";

        // div
        about1div.style.backgroundColor = "rgb(74,129,236)";

        // text within div- font and colors
        about2.style.color = "rgb(255,255,255)";
        about2.style.fontFamily = "Comic Sans";
        about2.style.fontWeight = "lighter";
        about2.style.fontSize = "20px";
        about2.style.padding = "30px";

        // div
        about2div.style.backgroundColor = "rgb(74,129,236)";

        // footer
        footer.style.backgroundColor = "#00153E";

        // prize div
        prizeDiv.style.backgroundColor = "rgb(74,129,236)";
        prizeDiv.style.color = "white";

        // indicating that style is changed
        count = 1;
    }
}

/// swap function to change contents of my divs
let par1 = document.getElementById('about1');
let par2 = document.getElementById('about2');
par1.style.cursor = 'pointer';
par2.style.cursor = 'pointer';
par1content = par1.textContent;
par2content = par2.textContent;

function swapT() {

    // if the content is already swapped, swap again
    if (par1.textContent == par2content) {
        par1.textContent = par1content;
        par2.textContent = par2content;
    }
    else {
        par1.textContent = par2content;
        par2.textContent = par1content;
    }
}

// swap images function
function swapImg() {

    let img1 = document.getElementById('img1');
    let img2 = document.getElementById('img2');
    img1.style.cursor = "pointer";
    img2.style.cursor = "pointer";

    // saving the source in variables so they don't get overwritten when assigning/doing the change
    let img1src = img1.src;
    let img2src = img2.src;

    img1.src = img2src;
    img2.src = img1src;
}

// prize
let prizeDiv = document.getElementById('prize');
function randPrize() {

    // aray of prizes
    let prizeArray = new Array("iPhone 13", "Gym membership for 3 months", "Target 50% off", "Dua Lipa Concert Ticket", "Zara 40% off", "iPad");
    let randNum = Math.floor(Math.random()*prizeArray.length);
    let result = "Congratulations!! You won: " + prizeArray[randNum];
    prizeDiv.style.fontFamily = "Papyrus";
    prizeDiv.style.fontSize = "20px";
    prizeDiv.style.padding = "3%";
    prizeDiv.style.textAlign = "center";
    prizeDiv.style.fontWeight = "bold";
    prizeDiv.textContent = result;
}
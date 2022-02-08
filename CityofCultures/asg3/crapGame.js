var bet = 0;
var betWin = 0;
var betLost = 0;

function roll() {

    let user = parseInt(document.getElementById("bet").value);
    // rolling each die randomelly 
    var die1 = Math.floor(Math.random() * 6) + 1;
    var die2 = Math.floor(Math.random() * 6) + 1;
    // sum of rolling 2 dice
    var total = die1 + die2;
    console.log('die1 -- ', die1)
    console.log('die2 -- ', die2)
    console.log(user)
    //display and proceed only whn user bet input is valid
    if (user>4){
        // changing image src loaded in the document using the images[]
        document.images[3].src="./images/dice_" + die1+ ".gif";
        document.images[4].src="./images/dice_" + die2 + ".gif";
        document.getElementById('output').innerHTML = "Total is: " + total;
        if (total == 7 || total==11) {
            betWin = bet + user
            console.log("bet", bet)
            document.getElementById('message').innerHTML = "Congratulations!! You WON!!" +"<br>" + "Amount won: $ " + betWin
            betWin = 0
            bet = 0
        }
        else if (total == 2 || total==3 || total==12) {
            betLost = bet + user
            document.getElementById('message').innerHTML = "Better Luck Next Time :( You Lost" +"<br>" + "Amount lost: $ " + betLost
            console.log("bet", bet)
            betLost = 0
            bet = 0
        }
        else{
            document.getElementById('message').innerHTML = "Keep Going ....."
            bet = bet + user
            console.log("bet", bet)
        }
    }
    else {
        document.getElementById('message').innerHTML = "The minimum bet is $5 to play."

    }
 }
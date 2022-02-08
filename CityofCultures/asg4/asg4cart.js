console.log('hi')

// shipping amount changes based on user's choice of radio button
document.getElementById('shipping').addEventListener('click', total)
document.getElementById('will-call').addEventListener('click', total)

// getting the ibjects and setting event listeners
let copperObj = document.getElementById('copper')
copperObj.addEventListener("change", total)
var shirtObj = document.getElementById('shirt')
shirtObj.addEventListener("change", total)
var magnetObj = document.getElementById('magnet')
magnetObj.addEventListener("change", total)
var rugObj = document.getElementById('rug')
rugObj.addEventListener("change", total)
var copperQuantity
var shirtQuantity
var magnetQuantity
var rugQuantity
var rugPrice
var magnetPrice
var shirtPrice
var copperPrice
var totalP
var copperTotal
var shirtTotal
var magnetTotal
var rugTotal
let myDate
let totalQ
let shippingAmount = 0

function total() {
    copperQuantity = copperObj.value
    copperPrice = document.getElementById('copper-price').value
    copperTotal = copperPrice * copperQuantity
    shirtQuantity = shirtObj.value
    shirtPrice = document.getElementById('shirt-price').value
    shirtTotal = shirtPrice * shirtQuantity
    magnetQuantity = magnetObj.value
    magnetPrice = document.getElementById('magnet-price').value
    magnetTotal = magnetPrice * magnetQuantity
    rugQuantity = rugObj.value
    rugPrice = document.getElementById('rug-price').value
    rugTotal = rugPrice * rugQuantity
    totalP = 0

    // if user does not input the quantity for any of those, set the quantity to be 0
    if (copperQuantity.length == 0) {
        copperQuantity = 0
    }
    if (magnetQuantity.length == 0) {
        magnetQuantity = 0
    }
    if (shirtQuantity.length == 0) {
        shirtQuantity = 0
    }
    if (rugQuantity.length == 0) {
        rugQuantity = 0
    }

    totalQ = parseInt(copperQuantity) + parseInt(magnetQuantity) + parseInt(shirtQuantity) + parseInt(rugQuantity)

    if (document.getElementById('shipping').checked) {
        document.getElementById('shipping-amount').value = 4
        shippingAmount = 4
    }
    else {
        document.getElementById('shipping-amount').value = 0
        shippingAmount = 0
    }

    // displaying the subtotals
    document.getElementById("copper-subtotal").value = copperTotal
    document.getElementById('shirt-subtotal').value = shirtTotal
    document.getElementById('magnet-subtotal').value = magnetTotal
    document.getElementById('rug-subtotal').value = rugTotal
    totalP = copperTotal + shippingAmount + shirtTotal + magnetTotal + rugTotal
    // displaying the total
    document.getElementById("total-amount").value = totalP
}

let obj = document.forms[0];

obj.addEventListener("submit", function (e) {
    // stop form from submitting to a new page - so we can see the output
    e.preventDefault();
    // getting the purcase date
    myDate = new Date()
    // getting nmber of form elements
    let len = obj.elements.length;
    var mailformat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

    for (let i = 15; i < len; i++) {

        if ((obj.elements[i].value == "") || (obj.elements[i].value == null)) {

            if (i != 24) {

                alert("Make sure to input " + obj.elements[i].name);

                // bring focus to the element that has no value
                obj.elements[i].focus();

                // selects the element that has no value
                obj.elements[i].select();

                // highlights the background with red so it brings attention to the element that's empty and requires the user to enter a value
                obj.elements[i].style.backgroundColor = "red";

                // return so nothing would be done as user needs to enter the missing value
                return;
            }

        }

        // if there is a value, and this is the 3rd element (zip code) then make sure it's has 5 digits (validating the zip code)
        else if ((i == 22) && (obj.elements[i].value.length != 5)) {

            alert("Make sure to input the 5 digits for the zip code.");
            obj.elements[i].focus();
            obj.elements[i].select();
            obj.elements[i].style.backgroundColor = "red";
            return;
        }

        // credit card validations
        else if ((i == 26) && (obj.elements[i].value.length != 16)) {
            alert("Make sure to input the 16 digits for credit card number.");
            obj.elements[i].focus();
            obj.elements[i].select();
            obj.elements[i].style.backgroundColor = "red";
            return;
        }

        else if ((i == 27) && (obj.elements[i].value.length != 2)) {
            alert("Make sure to input the month in MM format");
            obj.elements[i].focus();
            obj.elements[i].select();
            obj.elements[i].style.backgroundColor = "red";
            return;
        }

        else if ((i == 28) && (obj.elements[i].value.length != 4)) {
            alert("Make sure to input the year in YYYY format");
            obj.elements[i].focus();
            obj.elements[i].select();
            obj.elements[i].style.backgroundColor = "red";
            return;
        }

        else if ((i == 29) && (obj.elements[i].value.length != 3)) {
            alert("Make sure to input 3 digits on the back of your card.");
            obj.elements[i].focus();
            obj.elements[i].select();
            obj.elements[i].style.backgroundColor = "red";
            return;
        }
        // validating the email using regular expressions
        else if ((i == 19) && (obj.elements[i].value.match(mailformat) == null)) {
            alert("Your email should match the right format. ");
            obj.elements[i].focus();
            obj.elements[i].select();
            obj.elements[i].style.backgroundColor = "red";
            return;
        }

    }

    // getting a credit card number and parsig it
    let cardNumber = document.getElementById("ccnum").value
    let parsed = cardNumber.substring(12, 16)
    //console.log(cardNumber)
    // displaying the receipt
    let userReceipt = document.getElementById('receipt')
    let thank = "Thank you for shopping. Here is your receipt:\n\n"
    let dateP = "Purchase Date: " + myDate + "\n\n"
    let card = "Paid with credit card: xxxx xxxx xxxx " + parsed + "\n\n"
    let items = "Total Number of Items: " + totalQ + "\n" + "Copperware x " + copperQuantity + " --- $ " + copperTotal + "\n" + "T-shirt x " + shirtQuantity + " --- $ " + shirtTotal + "\n" + "Magnet set (5) x " + magnetQuantity + " --- $ " + magnetTotal + "\n" + "Rug x " + rugQuantity + " --- $ " + rugTotal + "\n" + "Shipping: $" + shippingAmount + "\n\n" + "Total Price: $ " + totalP
    userReceipt.innerText = thank + dateP + card + items

});


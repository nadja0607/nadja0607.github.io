// select the object button
let obj = document.querySelector("#add");

// attach an event to the object button
obj.addEventListener("click", myFunction);

function myFunction() {

    // create a new node li
    var node = document.createElement("li");

    // create a text node "water" to place inside the new element
    var textnode = document.createTextNode("Products");

    // add the text node to the new element
    node.appendChild(textnode);

    // add the new node to the child of element with id = mylist
    document.querySelector("#myList").appendChild(node);

    // create a 2nd new element (li)
    let node2 = document.createElement("li");

    // create a new text node for this element
    let textnode2 = document.createTextNode("About");

    // attach the new node to the new element
    node2.appendChild(textnode2);

    // add this node to the child of element with id = mylist
    document.querySelector("#myList").appendChild(node2);

    // all <li> elements
    let listItems = document.querySelectorAll('li');

    // adding a class "change" to all the elements

    let i;
    for (i = 0; i < listItems.length; i++) {

        // Loop through elements to change all li elements to class cool
        listItems[i].className = 'change';

    }

}
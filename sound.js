console.log("Hi, this is a testing line");

let photo = document.getElementById("icon");

photo.addEventListener("mouseenter", () => {
    //enlarge the icon on hover
        photo.style.width = '99%';
    
  });

  //specifying what happens when my mouse leaves -icon gets back to its original position
photo.addEventListener("mouseleave", () => {
        photo.style.width = '90%';
  });

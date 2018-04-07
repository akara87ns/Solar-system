document.getElementById("planets-nav").addEventListener("click", function(e) {
    // console.log(e.target);
    if (e.target.tagName == "H3") {
        if (e.target.nextElementSibling.style.display === "block") {
            e.target.nextElementSibling.style.display = "none";
            e.target.firstElementChild.innerHTML = "&#9660";
        } else {
            e.target.nextElementSibling.style.display = "block";
            e.target.firstElementChild.innerHTML = "&#9650";
        }
    }
});


document.getElementById("nav-button").addEventListener("click", function(e) {
    let navigation = document.getElementById("nav-button");
    let sidebar = document.getElementById("sidebar");
    

    if (e.target.parentElement.style.right === 0) {
        e.target.parentElement.style.right = -17%;
        // console.log("Click");
        // sidebar.style.right === 0;
    } else {
        e.target.parentElement.style.right = 0;
    }
    // if (e.target == navigation && sidebar.style.right == -17%) {
    //     sidebar.style.right = 0;    
    // } else {
    //     sidebar.style.right = -17%;
    // }
});

document.getElementById("planets").addEventListener("click", function(e) {
    // console.log(e.target);
    if (e.target.nextElementSibling.style.display === "block") {
        e.target.nextElementSibling.style.display = "none";
    } else {
        e.target.nextElementSibling.style.display = "block";
    }
});

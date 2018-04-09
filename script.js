document.getElementById("planets-nav").addEventListener("click", function(e) {
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


document.getElementById("nav-button").addEventListener("click", function() {
    document.getElementById("sidebar").classList.toggle("visible");

    document.getElementById("nav-button").classList.toggle("open");
});

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


var planets = document.getElementsByClassName("planet");
for (var i = 0; i < planets.length; i++) {
    planets[i].addEventListener("mouseenter", function() {
        let planetName = this.firstElementChild.textContent.toLowerCase().slice(0, -2);

        let hoveredPlanet = document.getElementsByClassName(planetName);
        for (var j = 0; j < hoveredPlanet.length; j++) {
            hoveredPlanet[j].classList.add("shadow");
        }
    });

    planets[i].addEventListener("mouseleave", function() {
        let planetName = this.firstElementChild.textContent.toLowerCase().slice(0, -2);

        let hoveredPlanet = document.getElementsByClassName(planetName);
        for (var j = 0; j < hoveredPlanet.length; j++) {
            hoveredPlanet[j].classList.remove("shadow");
        }
    });
}


document.getElementById("nav-button").addEventListener("click", function() {
    document.getElementById("sidebar").classList.toggle("visible");

    document.getElementById("nav-button").classList.toggle("open");
});

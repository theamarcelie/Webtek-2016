
function navFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "list_navbar") {
        x.className += " responsive";
    } else {
        x.className = "list_navbar";
    }
}


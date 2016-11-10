/*
FILE NAME: navbar.js
WRITTEN BY: Thea Togstad
WHEN:  November 2016
PURPOSE: Make the elements in the navbar come up 
when the hamburger icon is clicked on
*/

function navFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "list_navbar") {
        x.className += " responsive";
    } else {
        x.className = "list_navbar";
    }
}


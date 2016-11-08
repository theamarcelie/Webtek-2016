
var navbarOptions=
{
    menuId: "navbar",
    linkIdToMenuHtml: "navbarLink",
    ......
};
function myFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "list_navbar") {
        x.className += " responsive";
    } else {
        x.className = "list_navbar";
    }
}

//defining constant
const scrollBtn = document.getElementById("scroll");
var windowtHeight = window.innerHeight; // get the window height

//scrolling down
window.onscroll = function() {scrollFunction()};



//the scroll will disappear after reaching the end of the page
function scrollFunction () {
    // scrollHeight-windowheight will give you the end of the page where you can no longer scroll
    // exceeding half of the page will display scroll to the top
    if (document.body.scrollTop > (document.body.scrollHeight-windowtHeight) || document.documentElement.scrollTop > (document.body.scrollHeight-windowtHeight)) {
        scrollBtn.style.display = "none";
    }

    else {
        scrollBtn.style.display = "block";
    }
};
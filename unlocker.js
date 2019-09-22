$(window).on("load", function() {
    unlock();
});

function unlock() {
    var child = document.getElementsByClassName("shield-box")[0];
    child.parentNode.removeChild(child);
    setTimeout(removeBlur, 500);
}

function removeBlur() {
    var blurred = document.getElementsByClassName("practice-container")[0];
    var originalClassName = blurred.className.split(" ");
    blurred.className = originalClassName[0] + " " + originalClassName[1];
}

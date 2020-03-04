const efect = document.getElementById("trd");
window.addEventListener("scroll", function()
{
    let down = window.pageYOffset;
    // console.log("down " + offset);
    // console.log("down efect " + offset * 0.6);
    efect.style.backgroundPositionY = down * 0.6 + "px";
});

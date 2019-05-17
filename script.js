// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector("#navbar").style.padding = "20px 10px";
        document.querySelector("#logo").style.fontSize = "25px";
        document.querySelector("#navbar").style.backgroundColor = "rgba(0, 0, 0, 0.58)";
    } else {
        document.querySelector("#navbar").style.padding = "30px 10px";
        document.querySelector("#logo").style.fontSize = "35px";
        document.querySelector("#navbar").style.backgroundColor = "";
    }
}

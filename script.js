// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () {
    scrollFunction()
};
AOS.init({
    duration: 1200,
})


document.querySelector("#mobile-button").addEventListener("click", toggleMenu);

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector("#navbar").style.padding = "2px 10px";
        document.querySelector("#logo img").style.width = "50%";
        document.querySelector("#navbar").style.backgroundColor = "rgba(0, 0, 0, 0.58)";
        document.querySelector("#mobile-button").style.top = "5vw";
        document.querySelector("#mobile-nav").style.top = "15vw";
    } else {
        document.querySelector("#navbar").style.padding = "30px 10px";
        document.querySelector("#logo img").style.width = "75%";
        document.querySelector("#navbar").style.backgroundColor = "";
        document.querySelector("#mobile-button").style.top = "12vw";
        document.querySelector("#mobile-nav").style.top = "25vw";
    }
}

function toggleMenu() {
    document.querySelector("#mobile-nav").classList.toggle("hidden");

    let hideNav = document.querySelector("#mobile-nav").classList.contains("hidden");
    if (hideNav == true) {
        document.querySelector("#mobile-button").innerHTML = "&#9776;";
    } else {
        document.querySelector("#mobile-button").innerHTML = "&times;";
    }
}

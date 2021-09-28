document.addEventListener("scroll", () => {
    if (window.scrollY > 717) {
        var parr = document.getElementById("abb");
        parr.classList.add("active");
    }
    if (window.scrollY < 717) {
        var parr = document.getElementById("abb");
        parr.classList.remove("active");
    }
});
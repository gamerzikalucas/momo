document.addEventListener("DOMContentLoaded", function() {
    let elements = document.querySelectorAll(".reveal");

    function reveal() {
        elements.forEach((el) => {
            let windowHeight = window.innerHeight;
            let elementTop = el.getBoundingClientRect().top;
            let elementVisible = 100;

            if (elementTop < windowHeight - elementVisible) {
                el.classList.add("active");
            } else {
                el.classList.remove("active");
            }
        });
    }

    window.addEventListener("scroll", reveal);
});
gsap.from("h1", { duration: 1, y: -50, opacity: 0, ease: "bounce" });
gsap.from(".animar", {
    duration: 1.2,
    y: 50,
    opacity: 0,
    stagger: 0.3, // Tempo entre cada elemento
    ease: "power2.out"
});
window.addEventListener("load", function() {
    document.getElementById("preloader").style.display = "none";
    document.getElementById("conteudo").style.display = "block";
});

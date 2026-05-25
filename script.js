
/* MACOS*/

const elements = document.querySelectorAll(
    "section, .timeline-item, .vantagem-card, .stat-box"
);

function showOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;

        if (top < triggerBottom) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", showOnScroll);
window.addEventListener("load", showOnScroll);

/* Linux */

document.addEventListener("DOMContentLoaded", () => {

 
    const menuBtn = document.querySelector(".menu-btn");
    const menu = document.querySelector(".menu");

    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("show");
    });

    
    const elements = document.querySelectorAll(
        ".card, .box, .terminal"
    );

    function showOnScroll() {

        const triggerBottom = window.innerHeight * 0.85;

        elements.forEach(el => {

            const top = el.getBoundingClientRect().top;

            if(top < triggerBottom){
                el.classList.add("show");
            }

        });

    }

    showOnScroll();

    window.addEventListener("scroll", showOnScroll);

});

/* Android*/

function toggleMenu(){
    document.getElementById("menu").classList.toggle("show");
}


window.addEventListener("scroll", () => {
    document.querySelectorAll(".card, .box").forEach(el => {
        const top = el.getBoundingClientRect().top;
        if(top < window.innerHeight - 100){
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            el.style.transition = "0.6s";
        }
    });
});
/*Windows*/
function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
}

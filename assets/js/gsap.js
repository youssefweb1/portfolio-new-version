// side bar
document.getElementById('menu-btn').addEventListener('click', function () {
    gsap.to("#mobile-menu", { x: 0, duration: 0.1, ease: "power3.out" });

    gsap.from("#mobile-menu li", {
        opacity: 0,
        x: -100, 
        duration: 1, 
        stagger: 0.3, 
        ease: "power3.out"
    });
});

document.getElementById('close-btn').addEventListener('click', function () {
    gsap.to("#mobile-menu", { x: "-100%", duration: 0.3, ease: "power3.out" });
});

document.querySelectorAll("#mobile-menu li a").forEach(link => {
    link.addEventListener('click', function () {
        gsap.to("#mobile-menu", { x: "-100%", duration: 0.6, ease: "power3.in" });
    });
});
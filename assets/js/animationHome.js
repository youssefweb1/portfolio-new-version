document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    // General animation settings for ScrollTrigger elements
    const scrollSettings = {
        ease: "power3.out",
        toggleActions: "play none none none"
    };

    // HERO SECTION
    gsap.from("#simpleUsage", {
        opacity: 0,
        y: 30,
        duration: 1.2,
        delay: 0.2,
        ...scrollSettings
    });
    gsap.from("#title", {
        opacity: 0,
        x: -10,
        duration: 1,
        delay: 0.5,
        ...scrollSettings
    });
    gsap.from("#skills", {
        opacity: 0,
        x: -10,
        duration: 1,
        delay: 0.8,
        ...scrollSettings
    });
    gsap.from("#desc", {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 1.2,
        ...scrollSettings
    });
    gsap.from("#cv-text", {
        opacity: 0,
        x: -10,
        duration: 1,
        delay: 1.5,
        ...scrollSettings
    });
    gsap.from("#downloadBtn", {
        opacity: 0,
        y: 30,
        duration: 1.2,
        delay: 1.8,
        ...scrollSettings
    });
    gsap.from("#heroImage", {
        opacity: 0,
        scale: 0.8,
        duration: 1.5,
        delay: 0.5,
        ...scrollSettings
    });

    // ABOUT SECTION
    gsap.from("#underline-about", {
        opacity: 0,
        y: 30,
        duration: 1.2,
        scrollTrigger: {
            trigger: "#about",
            start: "top 70%",
            ...scrollSettings
        }
    });
    gsap.from("#subtitle", {
        opacity: 0,
        y: 30,
        duration: 1,
        scrollTrigger: {
            trigger: "#about",
            start: "top 80%",
            ...scrollSettings
        }
    });
    gsap.from("#aboutText", {
        opacity: 0,
        y: 20,
        duration: 1,
        scrollTrigger: {
            trigger: "#about",
            start: "top 80%",
            ...scrollSettings
        }
    });

    // EXPERIENCE SECTION
    gsap.from(".exp-item", {
        opacity: 0,
        y: 200,
        duration: 1.5,
        stagger: 0.4,
        scrollTrigger: {
            trigger: "#exp",
            start: "top 30%",
            ...scrollSettings
        }
    });

    // SKILLS SECTION
    gsap.from(".skillsTitle", {
        opacity: 0,
        y: 30,
        duration: 1.2,
        scrollTrigger: {
            trigger: ".skillsTitle",
            start: "top 80%",
            ...scrollSettings
        }
    });
    gsap.from(".skillsBox", {
        opacity: 0,
        y: 50,
        duration: .2,
        stagger: 0.2,
        scrollTrigger: {
            trigger: "#ski",
            start: "top 99%",
            ...scrollSettings
        }

    });

    // PROJECTS SECTION
    gsap.from(".group", {
        opacity: 0,
        y: 100,
        duration: 1.5,
        stagger: 0.6,
        scrollTrigger: {
            trigger: "#projects",
            start: "top 50%",
            ...scrollSettings
        }
    });

    // SERVICES SECTION
    gsap.from(".servBox", {
        opacity: 0,
        y: 100,
        duration: 1.5,
        stagger: 0.3,
        scrollTrigger: {
            trigger: "#services",
            start: "top 60%",
            ...scrollSettings
        }
    });
});


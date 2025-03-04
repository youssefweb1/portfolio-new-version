// stars
let starsContainer = document.querySelector(".stars");
for (let i = 0; i < 100; i++) {
    let star = document.createElement("div");
    star.className = "star";
    let left = Math.random() * 100;
    let top = Math.random() * 100;
    let size = Math.random() * 5 + 2;
    let opacity = Math.random();
    let moveX = Math.random() * 200 - 100;
    let moveY = Math.random() * 200 - 100;
    let duration = Math.random() * 3 + 2;
    let delay = Math.random() * 3;
    star.style.cssText = `
        left: ${left}%;
        top: ${top}%;
        width: ${size}px;
        height: ${size}px;
        --star-opacity: ${opacity};
        --move-x: ${moveX}px;
        --move-y: ${moveY}px;
        --final-x: ${moveX * 2}px;
        --final-y: ${moveY * 2}px;
        --duration: ${duration}s;
        --delay: ${delay}s;
    `;
    starsContainer.appendChild(star);
}

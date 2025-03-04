// navbar
document.getElementById('menu-btn').addEventListener('click', function () {
    document.getElementById('mobile-menu').classList.remove('-translate-x-full');
});

document.getElementById('close-btn').addEventListener('click', function () {
    document.getElementById('mobile-menu').classList.add('-translate-x-full');
});

const menuLinks = document.querySelectorAll('#mobile-menu a');  
menuLinks.forEach(link => {
    link.addEventListener('click', function () {
        document.getElementById('mobile-menu').classList.add('-translate-x-full');  
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('topnav');
    const navContainer = nav.querySelector('div');
    const svgIcon = document.getElementById('svg-menu');
    const vector = document.getElementById('vector');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.remove('pt-5');
            nav.classList.add('fixed', 'top-0', 'bg-black', 'shadow-lg', 'px-5', 'lg:px-16', 'lg:py-0', 'py-4', 'lg:pb-1', 'nav-active');
            nav.style.boxShadow =
                'rgba(255, 255, 255, 0.12) 0px 1px 3px, rgba(255, 255, 255, 0.24) 0px 1px 2px';
            navContainer.classList.add('bg-black');
            navContainer.classList.remove('rounded-full');
        } else {
            nav.classList.remove('fixed', 'top-0', 'bg-black', 'shadow-lg', 'px-5', 'lg:px-16', 'lg:py-0', 'py-4', 'lg:pb-1', 'nav-active');
            nav.classList.add('pt-5');
            nav.style.boxShadow = 'none'; 
            navContainer.classList.remove('bg-black');
            navContainer.classList.add('rounded-full');
        }
    });
    
});
function setActive(element) {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.classList.remove('active-li');
    });
    
    element.classList.add('active-li');
}



// button share
document.addEventListener('DOMContentLoaded', () => {
    const shareButton = document.getElementById('shareButton');
    const socialIcons = document.getElementById('socialIcons');
    const phoneIcon = document.getElementById('phoneIcon');
    const xIcon = document.getElementById('xIcon');
    if (shareButton && socialIcons && phoneIcon && xIcon) {
        shareButton.addEventListener('click', () => {
            if (socialIcons.classList.contains('opacity-0')) {
                socialIcons.classList.remove('opacity-0', 'scale-95',
                    'pointer-events-none');
                socialIcons.classList.add('opacity-100', 'scale-100',
                    'pointer-events-auto');
                phoneIcon.classList.add('hidden');
                xIcon.classList.remove('hidden');
            } else {
                socialIcons.classList.add('opacity-0', 'scale-95', 'pointer-events-none');
                socialIcons.classList.remove('opacity-100', 'scale-100',
                    'pointer-events-auto');
                phoneIcon.classList.remove('hidden');
                xIcon.classList.add('hidden');
            }
        });
    }
});
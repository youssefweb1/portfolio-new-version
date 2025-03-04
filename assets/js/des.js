const showMoreButtons = document.querySelectorAll('.show-more');

showMoreButtons.forEach(button => {
    button.addEventListener('click', function () {
        const description = this.closest('.block').querySelector('h4');

        const isExpanded = description.dataset.expanded === "true";

        if (isExpanded) {
            description.style.display = '-webkit-box';
            description.style.webkitBoxOrient = 'vertical';
            description.style.webkitLineClamp = '3';
            this.textContent = 'عرض المزيد';
        } else {
            description.style.webkitLineClamp = 'unset';
            description.style.display = 'block';
            this.textContent = 'عرض أقل';
        }

        description.dataset.expanded = isExpanded ? "false" : "true";
    });
});

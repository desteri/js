function click() {
    let btn = document.querySelector('.dropdown__btn');
    let content = document.querySelector('.dropdown__content');

    btn.addEventListener('click', () => {
        content.classList.toggle('active');
    });

    window.addEventListener('click', (event) => {    
        if (!event.target.matches('.dropdown__btn')) {
            if (content.classList.contains('active')) {
                content.classList.remove('active');
            }
        }
    });
}

click();
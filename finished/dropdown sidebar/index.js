function click() {
    let btn = document.querySelector('.dropdown__btn');
    let content = document.querySelector('.dropdown__content');

    btn.addEventListener('click', () => {
        content.classList.toggle('active');
    });
}

click();
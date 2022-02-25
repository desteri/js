function responsible() {
    let ul = document.querySelector('.nav');
    let burger = document.querySelector('.burger');

    burger.addEventListener('click', () => {
        if (ul.className === 'nav') {
            ul.className += ' responsive';
        } else {
            ul.className = 'nav';
        }
    });
}

responsible();
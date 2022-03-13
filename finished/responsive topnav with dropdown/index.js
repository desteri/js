function resTopNav() {
    let burger = document.querySelector('.close');
    let ul = document.querySelector('ul');

    burger.addEventListener('click', () => {
        if (ul.className === 'uler') {
            ul.className += ' responsive';
        } else {
            ul.className = 'uler';
        }
    });
}

resTopNav();
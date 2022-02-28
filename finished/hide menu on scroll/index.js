function scroll() {
    let fixMenu = document.querySelector('nav');
    let prev = window.scrollY;

    window.addEventListener('scroll', () => {
        let current = window.scrollY;

        if (prev > current) {
            fixMenu.style.top = '0';
        } else {
            fixMenu.style.top = '-50px';
        }

        prev = current;
    });
}

scroll();
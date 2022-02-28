function scroll() {
    let fixMenu = document.querySelector('nav');

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 20) {
            fixMenu.style.top = '0';
        } else {
            fixMenu.style.top = '-50px';
        }
    });
}

scroll();
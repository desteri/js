function scroll() {
    let nav = document.querySelector('nav');

    window.addEventListener('scroll', () => {

        if (nav.offsetTop <= window.scrollY) {
            nav.style.position = 'sticky';
            nav.style.top = '0';

        } else {
            nav.style.position = 'static';
        }

        prev = current;
    });
}

scroll();
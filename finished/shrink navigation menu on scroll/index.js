function scroll() {
    let nav = document.querySelector('nav');
    let span = document.querySelector('span');
    let prev = window.scrollY;
    console.log(prev);

    window.addEventListener('scroll', () => {
        let current = window.scrollY;

        if (prev > current) {
            nav.style.padding = '50px 10px';
            span.style.fontSize = '';

        } else {
            nav.style.padding = '20px 10px';
            span.style.fontSize = '24px';
        }

        prev = current;
    });
}

scroll();
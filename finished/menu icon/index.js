function menuBars() {
    const menu = document.querySelector('.menu-icon');
    const bar1 = document.querySelector('.menu-icon .bar1');
    const bar2 = document.querySelector('.menu-icon .bar2');
    const bar3 = document.querySelector('.menu-icon .bar3');

    menu.addEventListener('click', () => {
        bar1.classList.toggle('rotate');
        bar2.classList.toggle('none');
        bar3.classList.toggle('rotate');
    });
}

menuBars();
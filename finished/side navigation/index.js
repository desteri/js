function sideNav() {
    let aside = document.querySelector('aside');
    let over = document.querySelector('#over');
    let overNotAnim = document.querySelector('#overNotAnim');
    let offCanvas = document.querySelector('#offCanvas');
    let withOpac = document.querySelector('#withOpac');
    let fullWidth = document.querySelector('#fullWidth');
    let cont = document.querySelector('.container');
    let close = document.querySelector('.close');

    over.addEventListener('click', () => {
        aside.style.width = '170px';
    });

    overNotAnim.addEventListener('click', () => {
        aside.style.transition = 'none';
        aside.style.width = '170px';
    });

    offCanvas.addEventListener('click', () => {
        cont.style.marginLeft = '250px';
        aside.style.width = '250px';
        aside.style.transition = '.5s';
    });

    withOpac.addEventListener('click', () => {
        cont.style.marginLeft = '250px';
        aside.style.width = '250px';
        aside.style.transition = '.5s';
        document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    });

    fullWidth.addEventListener('click', () => {
        aside.style.width = '100%';
        aside.style.transition = '.5s';
        document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    });

    close.addEventListener('click', () => {
        cont.style.marginLeft = '0';
        aside.style.width = '0';
        document.body.style.backgroundColor = '#FFFFFF';
    });
}

sideNav();
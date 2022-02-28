function sideNav() {
    let cont = document.querySelector('.container');
    let offCanvas = document.querySelector('#offCanvas');
    let offCanvasOpac = document.querySelector('#offCanvasOpac');
    let close = document.querySelector('.close');

    offCanvas.addEventListener('click', () => {
        cont.style.width = '300px';
        document.body.style.marginLeft = '350px';
    });

    offCanvasOpac.addEventListener('click', () => {
        cont.style.width = '300px';
        document.body.style.marginLeft = '350px';
        document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    });

    close.addEventListener('click', () => {
        cont.style.width = '0';
        document.body.style.marginLeft = '0';
        document.body.style.backgroundColor = '#ffffff';
    });
}

sideNav();
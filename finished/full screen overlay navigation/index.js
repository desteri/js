function sideNav() {
    let contOne = document.querySelector('.containerOne');
    let contTwo = document.querySelector('.containerTwo');
    let contThree = document.querySelector('.containerThree');
    let slideRight = document.querySelector('#slideRight');
    let slideDown = document.querySelector('#slideDown');
    let show = document.querySelector('#show');
    let closeOne = document.querySelector('.containerOne .close');
    let closeTwo = document.querySelector('.containerTwo .close');
    let closeThree = document.querySelector('.containerThree .close');

    let arr = [contOne, contTwo, contThree];



    slideRight.addEventListener('click', () => {
        contOne.style.width = '100%';
    });

    slideDown.addEventListener('click', () => {
        contTwo.style.height = '100%';
    });

    show.addEventListener('click', () => {
        contThree.style.width = '100%';
        contThree.style.height = '100%';
    });

    closeOne.addEventListener('click', () => {
        contOne.style.width = '0';
    });

    closeTwo.addEventListener('click', () => {
        contTwo.style.height = '0';
    });

    closeThree.addEventListener('click', () => {
        contThree.style.width = '0';
        contThree.style.height = '0';
    });
}

sideNav();
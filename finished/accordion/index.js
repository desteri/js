function accordion() {
    let btns = document.querySelectorAll('.accordion__header');

    btns.forEach(item => {
        item.addEventListener('click', () => {
            let content = item.nextElementSibling;

            item.classList.toggle('color');
            
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
}

accordion();
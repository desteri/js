function openModal() {
    let openBtn = document.querySelector('.open');
    let modal = document.querySelector('.modal');

    openBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });
}

function closeModal() {
    let closeBtns = document.querySelectorAll('.button_close');
    let modal = document.querySelector('.modal');
    let modalContent = document.querySelector('.moda__content');

    document.addEventListener('click', event => {
        const closeModal = event.composedPath().includes(modalContent);

        if (!closeModal) {
            modal.style.display = 'none';
        }
    });

    closeBtns.forEach(elem => {
        elem.addEventListener('click', () => {
            elem.parentNode.parentNode.parentNode.style.display = 'none';
        });
    });
}

function submitForm() {
    let submitBtn = document.querySelector('.button_submit');

    submitBtn.addEventListener('click', (event) => {
        event.preventDefault();

        alert('Вход!');
    });
}

openModal();
closeModal();
submitForm();
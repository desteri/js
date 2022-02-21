function openModal() {
    let openBtn = document.querySelector('.open');
    let modal = document.querySelector('.modal');

    openBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });
}

function closeModal() {
    let closeBtns = document.querySelectorAll('.button_close');

    closeBtns.forEach(elem => {
        elem.addEventListener('click', () => {
            elem.parentNode.parentNode.parentNode.style.display = 'none';
        });
    });
}

function submitForm() {
    let submitBtn = document.querySelector('.button_submit');
    let inputFormName = document.querySelector('.modal__form input.input_name');
    let inputFormPassword = document.querySelector('.modal__form input.input_password');
    // !inputFormName.value == '' || !inputFormPassword.value == ''
    if (submitBtn.hasAttribute('disabled')) {
        submitBtn.classList.add('undisabled');
    }

    submitBtn.addEventListener('click', (event) => {
        event.preventDefault();
        submitBtn.parentNode.parentNode.parentNode.style.display = 'none';
    });
}

openModal();
closeModal();
submitForm();
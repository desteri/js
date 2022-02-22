function modal() {
    const modal = document.querySelector('.modal');

    const openModal = () => {
        const openBtn = document.querySelector('.open');
        openBtn.addEventListener('click', () => {
            modal.style.display = 'flex';
        });
    }

    const closeModal = () => {
        const closeBtns = document.querySelectorAll('.button_close');

        window.addEventListener('click', (event) => {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        });

        closeBtns.forEach(elem => {
            elem.addEventListener('click', () => {
                elem.parentNode.parentNode.parentNode.style.display = 'none';
            });
        });
    }

    const submitForm = () => {
        const submitBtn = document.querySelector('.button_submit');
        const inputFormName = document.querySelector('input.input_name');
        const inputFormPassword = document.querySelector('input.input_password');

        function check() {
            let nameValue = inputFormName.value;
            let passwordValue = inputFormPassword.value;

            if ((nameValue !== '' && nameValue.length > 5) && (passwordValue !== '' && passwordValue.length > 8)) {
                submitBtn.removeAttribute('disabled');
                submitBtn.classList.add('undisabled');
                submitBtn.classList.remove('disabled');
            }
        }

        inputFormName.addEventListener('change', check);
        inputFormPassword.addEventListener('change', check);
    }

    openModal();
    closeModal();
    submitForm();
}

modal();
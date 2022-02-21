function modal() {
    const modal = document.querySelector('.modal');

    function openModal() {
        const openBtn = document.querySelector('.open');
        openBtn.addEventListener('click', () => {
            modal.style.display = 'flex';
        });
    }

    function closeModal() {
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

    function submitForm() {
        const submitBtn = document.querySelector('.button_submit');
        let inputFormName = document.querySelector('input.input_name');
        let inputFormPassword = document.querySelector('input.input_password');

        function check() {
            if (inputFormName.value !== '' && inputFormPassword.value !== '') {
                submitBtn.removeAttribute('disabled');
                submitBtn.classList.add('undisabled');
                submitBtn.classList.remove('disabled');
            }
        }

        inputFormName.addEventListener('change', check);
        inputFormPassword.addEventListener('input', check);
    }

    openModal();
    closeModal();
    submitForm();
}

modal();
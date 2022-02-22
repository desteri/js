function tabs() {
    let allTabs = document.querySelectorAll('.tabs .tab');
    let contents = document.querySelectorAll('.content');
    let closes = document.querySelectorAll('.close');

    function clickTab(event) {
        for (let i = 0; i < allTabs.length; i++) {
            allTabs[i].className = allTabs[i].className.replace(' active', '');
            contents[i].style.display = 'none';
        }
        
        event.currentTarget.className += ' active';

        for (let k = 0; k < allTabs.length; k++) {
            if (allTabs[k].classList.contains('active')) {
                contents[k].style.display = 'block';
            }
        }
    }

    for (let item of allTabs) {
        item.addEventListener('click', clickTab);
    }

    for (let close of closes) {
        close.addEventListener('click', () => {
            close.parentElement.style.display = 'none';
        });
    }

    let ev = new Event('click');
    document.querySelector('#default').dispatchEvent(ev);
}

tabs();
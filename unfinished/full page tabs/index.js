function tabs() {
    let allTabs = document.querySelectorAll('.tabs .tab');
    let contents = document.querySelectorAll('.content');
    let colors = ['red', 'green', 'blue', 'orange'];

    function clickTab(event) {
        for (let i = 0; i < allTabs.length; i++) {
            allTabs[i].className = allTabs[i].className.replace(' active', '');
            contents[i].style.display = 'none';
            allTabs[i].className = allTabs[i].className.replace(` ${colors[i]}`, '');
            document.body.className = document.body.className.replace(`${colors[i]}`, '');
            allTabs[i].classList.add('hov');
        }
        
        event.currentTarget.className += ' active';

        for (let k = 0; k < allTabs.length; k++) {
            if (allTabs[k].classList.contains('active')) {
                contents[k].style.display = 'block';
                allTabs[k].classList.add(colors[k]);
                allTabs[k].className = allTabs[k].className.replace(' hov', '');
                document.body.classList.add(colors[k]);
            }
        }
    }

    for (let item of allTabs) {
        item.addEventListener('click', clickTab);
    }

    let ev = new Event('click');
    document.querySelector('#default').dispatchEvent(ev);
}

tabs();
function tabs() {
    let allTabs = document.querySelectorAll('.tabs .tab');
    let contents = document.querySelectorAll('.content');

    function clickTab(event) {
        for (let i = 0; i < allTabs.length; i++) {
            allTabs[i].className = allTabs[i].className.replace(' active', '');
            contents[i].style.display = 'none';
            allTabs[i].className = allTabs[i].className.replace(' hov', '');
            
        }
        
        event.currentTarget.className += ' active';

        for (let k = 0; k < allTabs.length; k++) {
            if (allTabs[k].classList.contains('active')) {
                contents[k].style.display = 'block';
                allTabs[k].classList.add('hov');
            }
        }
    }

    for (let item of allTabs) {
        item.addEventListener('mouseover', clickTab);
    }

    let ev = new Event('mouseover');
    document.querySelector('#default').dispatchEvent(ev);
}

tabs();
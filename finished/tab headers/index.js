function tabs() {
    let allTabs = document.querySelectorAll('.tabs .tab');
    let contents = document.querySelectorAll('.content');

    function clickTab(event) {
        for (let i = 0; i < allTabs.length; i++) {
            allTabs[i].className = allTabs[i].className.replace(' active', '');
            contents[i].style.display = 'none';
            allTabs[i].className = allTabs[i].className.replace(' red', '');
            allTabs[i].className = allTabs[i].className.replace(' green', '');
            allTabs[i].className = allTabs[i].className.replace(' blue', '');
            allTabs[i].className = allTabs[i].className.replace(' orange', '');
            allTabs[i].classList.add('hov');
        }
        
        event.currentTarget.className += ' active';

        for (let k = 0; k < allTabs.length; k++) {
            if (allTabs[k].classList.contains('active')) {
                contents[k].style.display = 'block';
                
                if (contents[k].classList.contains('red')) {
                    allTabs[k].classList.add('red');
                    allTabs[k].className = allTabs[k].className.replace(' hov', '');
                }

                if (contents[k].classList.contains('green')) {
                    allTabs[k].classList.add('green');
                    allTabs[k].className = allTabs[k].className.replace(' hov', '');
                }

                if (contents[k].classList.contains('blue')) {
                    allTabs[k].classList.add('blue');
                    allTabs[k].className = allTabs[k].className.replace(' hov', '');
                }

                if (contents[k].classList.contains('orange')) {
                    allTabs[k].classList.add('orange');
                    allTabs[k].className = allTabs[k].className.replace(' hov', '');
                }
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
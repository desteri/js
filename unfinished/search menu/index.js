function search() {
    let inp = document.querySelector('input');
    let links = document.querySelectorAll('a');

    inp.addEventListener('input', () => {        
        for (let i = 0; i < links.length; i++) {
            if (links[i].innerHTML.toUpperCase().indexOf(inp.value.toUpperCase()) > -1) {
                links[i].style.display = '';
            } else {
                links[i].style.display = 'none';
            }
        }
    });
}

search();
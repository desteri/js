function CDL(param) {
    const heroObj = {
        "Великий": {
            "Рыцарь": ["Мечи", "Шпаги", "Булавы"],
            "Стрелок": ["Арбалеты", "Луки", "Пушки"]
        },
        "Ужасный": {
            "Войн": ["Топоры", "Копья", "Кинжалы"],
            "Маг": ["Палочки", "Жезлы", "Посохи"]
        }
    }
    
    window.addEventListener('load', () => {
        let sideSelect = document.querySelector('#side');
        let specialSelect = document.querySelector('#special');
        let weaponSelect = document.querySelector('#weapon');
    
        for (let key1 in heroObj) {
            sideSelect.options[sideSelect.options.length] = new Option(key1, key1);
        }
    
        sideSelect.addEventListener('change', () => {
            specialSelect.length = 1;
            weaponSelect.length = 1;
    
            for (let key2 in heroObj[sideSelect.value]) {
                specialSelect.options[specialSelect.options.length] = new Option(key2, key2);
            }
        });
    
        specialSelect.addEventListener('change', () => {
            weaponSelect.length = 1;
            
            let key3 = heroObj[sideSelect.value][specialSelect.value];
    
            for (let i = 0; i < key3.length; i++) {
                weaponSelect.options[weaponSelect.options.length] = new Option(key3[i], key3[i]);            
            }
        });
    });
}

CDL();
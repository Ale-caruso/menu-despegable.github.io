let listElements = document.querySelectorAll('.list-button--click');

listElements.forEach(element => {
    element.addEventListener('click', () => {
    
        element.classList.toggle('arrow');

        let menu = element.nextElementSibling;
        
        if (menu.style.height === '0px' || !menu.style.height) {
            menu.style.height = `${menu.scrollHeight}px`; 
        } else {
            menu.style.height = '0px';
        }
    });
});

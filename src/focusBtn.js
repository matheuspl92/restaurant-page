const focusBtn = (buttonToFocus) => {
   
    if (!buttonToFocus.classList.contains('focus')){
        
        buttonToFocus.classList.add('focus');

        const btns = document.getElementsByClassName('nav-button');

        for (let i = 0; i < btns.length; i++) {
            if (btns[i] !== buttonToFocus) {
                if (btns[i].classList.contains('focus')) {
                    btns[i].classList.remove('focus')
                }
            }
        }
    }

}

export default focusBtn;
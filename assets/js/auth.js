document.addEventListener('DOMContentLoaded', () => {

    const container = document.getElementById('container');
    const registerBtnTrigger = document.getElementById('registerBtnTrigger');
    const loginBtnTrigger = document.getElementById('loginBtnTrigger');

    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    
    const googleReg = document.getElementById('googleRegister');
    const googleLog = document.getElementById('googleLogin');

    if (registerBtnTrigger && loginBtnTrigger) {
        registerBtnTrigger.addEventListener('click', () => {
            container.classList.add("active");
        });

        loginBtnTrigger.addEventListener('click', () => {
            container.classList.remove("active");
        });
    }

    function fakeLoginProcess(e) {
        if(e) e.preventDefault();
        window.location.href = 'dashboard.html';
    }

    if (registerForm) registerForm.addEventListener('submit', fakeLoginProcess);
    if (loginForm) loginForm.addEventListener('submit', fakeLoginProcess);

    if (googleReg) googleReg.addEventListener('click', fakeLoginProcess);
    if (googleLog) googleLog.addEventListener('click', fakeLoginProcess);

});
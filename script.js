let passWordInput = document.getElementById ('txtPassword'),
toggle = document.getElementById('btnToggle'),
icon = document.getElementById('eyeIcon')

function togglePassword(){
    if (passWordInput.type === 'password'){
        passWordInput.type = 'text';
        icon.classList.add("fa-eye-slash")
    } else {
        passWordInput.type = 'password';
        icon.classList.remove("fa-eye-slash")
    }
}
function checkInput(){

}
toggle.addEventListener('click', togglePassword,false);
passWordInput.addEventListener('keyup', togglePassword, false);
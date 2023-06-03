let rgBtn = document.getElementById('rgBtn');
let lgBtn = document.getElementById('lgBtn');
let password = document.getElementById('password').value;
let confirm_password = document.getElementById('confirm_password').value;
let message = document.getElementById('message');


rgBtn.addEventListener('click', () => {
    let register = document.getElementById('rgst');
    if (register.style.display === 'none') {
        register.style.display = 'block';
} else {
    register.style.display = 'none'; }
});

lgBtn.addEventListener('click', () => {
    let login = document.getElementById('lgn');
    if (login.style.display === 'none') {
        login.style.display = 'block';        
    } else {
        login.style.display = 'none';
    }
});
        function submitForm(event) {
            event.preventDefault();
            let firstName = document.getElementById('firstName').value;
            let lastName = document.getElementById('lastName').value;
            let uName = document.getElementById('uName').value;
            let output = document.getElementById('output');
            let registerText = "Welcome Onboard, "
        
            output.innerHTML = registerText + firstName +" "+ lastName + "! " + "Please keep your Username, " + uName +", and password safe!";
        }
    

        var check = function() { 
            let password = document.getElementById('password').value;
            let confirm_password = document.getElementById('confirm_password').value;
            if (password != confirm_password) {
              message.style.color = 'red';
              message.innerHTML = 'Password does not match';
            } else {
              message.style.color = 'green';
              message.innerHTML = 'Password is a match';
            }
          }

/* function submitForm(event) {
    event.preventDefault();
    let uName = document.getElementById('uName').value;
    let output1 = document.getElementById('output1');
    let loginSuccess = "You are successfully logged in as "

    output1.innerHTML = loginSuccess + uName + "!";
}
*/
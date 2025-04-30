document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    document.getElementById('message').textContent = '';
    document.body.style.backgroundColor = '';

    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;


    if (!firstName || !lastName || !email || !password || !confirmPassword) {
        alert('გთხოვთ შეავსოთ ყველა ველი');
        return;
    }


    if (password !== confirmPassword) {
        document.body.style.backgroundColor = 'red';
        document.getElementById('message').textContent = 'Warning';
        document.getElementById('message').style.color = 'white';
        return;
    }
    document.body.style.backgroundColor = "greenyellow";
    document.getElementById('message').textContent = 'successfullylogin';
    document.getElementById('message').style.color = 'green';
});

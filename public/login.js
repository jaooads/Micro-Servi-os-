function logar() {
    const login = document.getElementById('login').value;
    const senha = document.getElementById('senha').value;

    if (login === 'admin' && senha === 'admin') {
        alert('Login realizado com sucesso');
        location.href = "http://localhost:3000/";
    } else {
        alert('Login invalido');
    }
}
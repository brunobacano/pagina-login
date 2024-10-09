// Função para salvar novo usuário
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Verificar se o nome de usuário já existe
    const userExists = users.find(u => u.username === newUsername);

    if (userExists) {
        document.getElementById('registerMessage').textContent = "Nome de usuário já existe!";
        document.getElementById('registerMessage').style.color = "red";
        return;
    }

    // Verificar se as senhas coincidem
    if (newPassword !== confirmPassword) {
        document.getElementById('registerMessage').textContent = "As senhas não coincidem!";
        document.getElementById('registerMessage').style.color = "red";
        return;
    }

    // Salvar novo usuário se tudo estiver correto
    if (newUsername && newPassword) {
        users.push({ username: newUsername, password: newPassword });
        localStorage.setItem('users', JSON.stringify(users));

        document.getElementById('registerMessage').textContent = "Usuário registrado com sucesso!";
        document.getElementById('registerMessage').style.color = "green";

        // Limpar campos
        document.getElementById('newUsername').value = '';
        document.getElementById('newPassword').value = '';
        document.getElementById('confirmPassword').value = '';
    } else {
        document.getElementById('registerMessage').textContent = "Preencha todos os campos!";
        document.getElementById('registerMessage').style.color = "red";
    }
});

// Função para verificar o login
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        document.getElementById('loginMessage').textContent = "Login bem-sucedido!";
        document.getElementById('loginMessage').style.color = "green";
        // Redirecionar para a página principal após o login bem-sucedido (opcional)
        window.location.href = 'index.html';
    } else {
        document.getElementById('loginMessage').textContent = "Nome de usuário ou senha incorretos!";
        document.getElementById('loginMessage').style.color = "red";
    }
});

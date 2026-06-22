document.querySelector('.form-quiosque').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    registrarAcaoNoSupabase(email, "Tentativa de Login", "Logando pela página de pedidos");
});
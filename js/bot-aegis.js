function limparInput() {
    console.log("Função limparInput foi chamada");
    document.getElementById('escrever-msg').value = "";
}
 
if (window !== window.parent) {
    document.querySelector('header')?.remove();
}
 
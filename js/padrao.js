document.querySelectorAll('#menu-links a.link-suave').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
 
        const destino = this.href;
 
        document.body.classList.add('fade-out');
 
        setTimeout(() => {
            window.location.href = destino;
        }, 200);
    });
});
 
function abrirMenu() {
    const menuLinks = document.getElementById('menu-links');
    menuLinks.classList.toggle('mostrar');
}
 
document.addEventListener('DOMContentLoaded', () => {
    const botoes = document.querySelectorAll('button[data-href]');
 
    botoes.forEach(botao => {
        botao.addEventListener('click', event => {
            event.preventDefault();
 
            const destino = botao.getAttribute('data-href');
 
            if (destino) {
                document.body.classList.add('fade-out');
 
                setTimeout(() => {
                    window.location.href = destino;
                }, 100);
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("#menu-links a");
    const paginaAtual = window.location.pathname.split("/").pop() || "index.html";

    links.forEach(link => {
        const href = link.getAttribute("href");

        if (href === paginaAtual) {
            link.classList.add("link-menu-ativado");
        } else {
            link.classList.remove("link-menu-ativado"); 
        }
    });
});

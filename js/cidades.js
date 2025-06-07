document.querySelectorAll('.cidade-item').forEach(item => {
    item.addEventListener('click', () => {
        const isAtiva = item.classList.contains('ativa');

        document.querySelectorAll('.cidade-item').forEach(el => el.classList.remove('ativa'));

        if (!isAtiva) {
            item.classList.add('ativa');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');

    if (mobileMenu && navList) {
        mobileMenu.addEventListener('click', function() {
            navList.classList.toggle('active');
            mobileMenu.classList.toggle('is-active'); // Adiciona uma classe para animar o ícone do menu
        });

        // Fechar o menu ao clicar em um item (apenas para mobile)
        navList.querySelectorAll('a').forEach(item => {
            item.addEventListener('click', () => {
                if (window.innerWidth <= 768) { // Ajuste para o breakpoint do seu CSS
                    navList.classList.remove('active');
                    mobileMenu.classList.remove('is-active');
                }
            });
        });
    }

    // Opcional: Efeito de scroll suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
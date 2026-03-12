// Aguarda o carregamento total do DOM
document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. ANIMAÇÃO DE ENTRADA (FADE-IN) --- */
    // Configura o Intersection Observer para detectar quando os elementos aparecem na tela
    const observerOptions = {
        threshold: 0.15 // Ativa quando 15% do elemento estiver visível
    };

    const fadeInObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Para de observar após animar pela primeira vez
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Seleciona todos os elementos que devem ter animação
    const animatedElements = document.querySelectorAll('.fade-in, .bio-card, .proposta-card-tech');
    animatedElements.forEach(el => fadeInObserver.observe(el));


    /* --- 2. SCROLL SUAVE PARA O MENU --- */
    // Faz com que o clique nos links do menu deslize a página suavemente
    const menuLinks = document.querySelectorAll('.nav-menu a');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            
            // Só aplica se for um link interno (que começa com #)
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    // Calcula a posição descontando a altura do menu fixo
                    const menuHeight = document.querySelector('.main-nav').offsetHeight;
                    const targetPosition = targetSection.offsetTop - menuHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });


    /* --- 3. EFEITO NO BOTÃO WHATSAPP --- */
    // Adiciona um leve pulso ao botão após 5 segundos de página aberta
    const whatsappBtn = document.querySelector('.whatsapp-float');
    if (whatsappBtn) {
        setTimeout(() => {
            whatsappBtn.style.transition = "transform 0.5s ease";
            whatsappBtn.style.transform = "scale(1.2)";
            setTimeout(() => whatsappBtn.style.transform = "scale(1)", 500);
        }, 5000);
    }

});
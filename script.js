document.addEventListener("DOMContentLoaded", function () {
    
    // Efeito de rolagem suave no Header (muda opacidade/sombra ao rolar)
    const header = document.querySelector("header");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.1)";
            header.style.backgroundColor = "rgba(255, 255, 255, 0.98)";
        } else {
            header.style.boxShadow = "0 2px 20px rgba(0,0,0,0.05)";
            header.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
        }
    });

    // Animação de aparição gradual (Scroll Reveal) para os itens da Linha do Tempo
    const timelineItems = document.querySelectorAll(".timeline-item");

    const checarScroll = () => {
        const gatilhoIntersecao = window.innerHeight * 0.85; // 85% da tela visível

        timelineItems.forEach(item => {
            const itemTopo = item.getBoundingClientRect().top;

            if (itemTopo < gatilhoIntersecao) {
                item.classList.add("active");
            }
        });
    };

    // Executa uma vez ao carregar e adiciona o evento de Scroll
    checarScroll();
    window.addEventListener("scroll", checarScroll);
});
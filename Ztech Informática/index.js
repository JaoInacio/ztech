// Seleciona todos os botões de navegação
const navButtons = document.querySelectorAll('.nav-button');

navButtons.forEach(button => {
    button.addEventListener('click', () => {
        const target = document.querySelector(button.dataset.target);
        if (target) {
            // Rola a página até a seção correspondente
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Seletor para o título e a lista
const title = document.querySelector('.title h2');
const ulOn = document.querySelector('.on');

// Evento para ocultar/mostrar os itens da lista ao clicar no título
title.addEventListener('click', () => {
    if (ulOn.style.display === 'none' || ulOn.style.display === '') {
        ulOn.style.display = 'block'; // Mostra os itens da lista
    } else {
        ulOn.style.display = 'none'; // Oculta os itens da lista
    }
});

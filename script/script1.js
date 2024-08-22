// Função para criar o efeito de chuva
function rain() {
    let quantidade = 50;
    const rainContainer = document.querySelector('.rain');
    
    // Remove elementos existentes
    rainContainer.innerHTML = '';

    for (let i = 0; i < quantidade; i++) {
        let efeitoChuva = document.createElement("hr");
        efeitoChuva.style.right = Math.floor(Math.random() * window.innerWidth) + "px";
        efeitoChuva.style.animationDelay = Math.random() * 3 + "s";
        rainContainer.appendChild(efeitoChuva);
    }
}

// Função para alternar a animação da chuva
function toggleRain() {
    const rainContainer = document.querySelector('.rain');
    if (rainContainer.style.display === 'none') {
        rainContainer.style.display = 'block';
        document.getElementById('toggleRain').textContent = '';
    } else {
        rainContainer.style.display = 'none';
        document.getElementById('toggleRain').textContent = '';
    }
}

// Inicializa o efeito de chuva
rain();

// Adiciona o evento de clique para o botão de alternar chuva
document.getElementById('toggleRain').addEventListener('click', toggleRain);

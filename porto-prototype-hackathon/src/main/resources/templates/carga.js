// Acessa os elementos do HTML pelo ID
const form = document.getElementById('cadastroForm');
const listaCargas = document.getElementById('listaCargas');

// Adiciona um "ouvinte de evento" para o envio do formulário
form.addEventListener('submit', (event) => {
    // Impede o comportamento padrão do formulário (recarregar a página)
    event.preventDefault();

    // Pega os valores dos campos
    const codigo = document.getElementById('codigoCarga').value;
    const descricao = document.getElementById('descricao').value;
    const navio = document.getElementById('navio').value;
    const dataChegada = document.getElementById('dataChegada').value;

    // Verifica se todos os campos estão preenchidos
    if (!codigo || !descricao || !navio || !dataChegada) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    // Cria uma nova linha para a tabela, usando template literals para deixar o código mais limpo
    const novaLinha = document.createElement('tr');

    novaLinha.innerHTML = `
        <td>${codigo}</td>
        <td>${descricao}</td>
        <td>${navio}</td>
        <td>${dataChegada}</td>
        <td><img src="https://api.qrserver.com/v1/create-qr-code/?size=50x50&data=${codigo}" alt="QR Code da Carga ${codigo}"></td>
    `;

    // Adiciona a nova linha à tabela
    listaCargas.appendChild(novaLinha);

    // Limpa os campos do formulário
    form.reset();

    alert(`Carga "${codigo}" adicionada com sucesso!`);
});
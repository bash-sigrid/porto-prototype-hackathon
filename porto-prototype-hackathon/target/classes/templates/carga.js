document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (event) => {
        const codigo = form.codigo.value.trim();
        const descricao = form.descricao.value.trim();
        const navio = form.navio.value.trim();
        const dataChegada = form.dataChegada.value;

        if (!codigo || !descricao || !navio || !dataChegada) {
            alert("Por favor, preencha todos os campos!");
            event.preventDefault(); // bloqueia o envio do formulário
            return;
        }

        // Mensagem de sucesso
        alert(`Carga "${codigo}" adicionada com sucesso!`);
    });
});

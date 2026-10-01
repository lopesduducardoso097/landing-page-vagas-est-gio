
const form = document.getElementById("formVaga");
const listaVagas = document.getElementById("listaVagas");

let vagas = [];

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const vaga = document.getElementById("vaga").value;
    const empresa = document.getElementById("empresa").value;
    const modalidade = document.getElementById("modalidade").value;
    const local = document.getElementById("local").value;
    const bolsa = document.getElementById("bolsa").value || "A combinar";

    const novaVaga = {
        vaga,
        empresa,
        modalidade,
        local,
        bolsa
    };

    vagas.push(novaVaga);

    atualizarTabela();

    form.reset();

    alert("Vaga cadastrada com sucesso!");

});

function atualizarTabela() {

    listaVagas.innerHTML = "";

    vagas.forEach(function(item) {

        const linha = document.createElement("tr");

        [
            item.vaga,
            item.empresa,
            item.modalidade,
            item.local,
            item.bolsa
        ].forEach(function(valor) {

            const coluna = document.createElement("td");
            coluna.textContent = valor;
            linha.appendChild(coluna);

        });

        listaVagas.appendChild(linha);

    });

}

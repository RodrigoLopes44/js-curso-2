let cabecalho = document.querySelector("h1");
cabecalho.innerHTML("Hora do Desafio!");

function exibirPrompt() {
    alert("Eu amo JS!")
    console.log("O botão foi clicado!")
}

function visitaCidade() {
    let cidade = prompt('Digite o nome de uma cidade do Brasil:');
    alert(`WoW, eu já visitei ${cidade}!`);
}

function botaoSoma() {
    let n1 = parseInt(prompt("Digite um número: "));
    let n2 = parseInt(prompt("Digite outro número: "));
    let soma = n1 + n2;

    alert(`A soma dos dois números é: ${soma}`);
}


var nome = document.querySelector("#nome");
console.log(nome);
console.dir(nome);


function getValues() {
    var nome = document.querySelector("#nome").value;
    var idade = parseInt(document.querySelector("#idade").value);

    console.log(nome);
    console.log(idade);

    pessoa = { nome : nome, idade : idade};
    
    calcIdade(pessoa);   
}

function calcIdade(pessoa) {
    console.log("Daqui a 5 anos, " + pessoa.nome 
    + " terá " + (pessoa.idade + 5) + " anos");
} 
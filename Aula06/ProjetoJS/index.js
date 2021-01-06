document.write("Olá, Mundo!");
console.log("Olá, Mundo!");

var idade = 17;
console.log(idade);

//var nome = prompt("Qual o seu nome? ")
//document.write("<br>" + nome + " tem " + idade + " anos.");

console.dir(document);
//console.dir(document.URL);
//document.title = "Novo título";
//console.log(document.title);
//console.log(document.head);
//console.log(document.body);

//console.log(document.getElementById("titulo"));

var titulo = document.getElementById("titulo");
console.log(titulo.innerText);
titulo.innerText = "Hello JS!";
titulo.style.color = "#ff0";

var paragrafos = document.getElementsByClassName("paragrafo");
console.log(paragrafos);
console.log(paragrafos[0].innerText);
console.log(paragrafos[1].innerText);
console.log(paragrafos[2].innerText);

var itens = document.getElementsByTagName("li");
var n1 = parseInt(itens[0].innerText);
var n2 = parseInt(itens[1].innerText);
console.log(n1 + " + " + n2 + " = " + (n1 + n2));
//concatenação --> juntar!

var tituloLista = document.querySelector("#titulo-lista");
console.log(tituloLista);

var arrayDeParagrafos = document.querySelectorAll(".paragrafo"); 
console.log(arrayDeParagrafos[0].innerText);

var link2 = document.querySelector("a[href='pagina2.html']");
console.log(link2);








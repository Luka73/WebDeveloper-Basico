document.write("Olá, Mundo!");
var seuNome = prompt("Qual o seu nome? ");
document.write("Seu nome é: " + seuNome);

console.dir(document);
console.log(document.URL);
console.log(document.title);
document.title = "Novo Titulo";
console.log(document.doctype);
console.log(document.head);
console.log(document.body);

console.log(document.getElementById("titulo"));
var titulo = document.getElementById("titulo");
console.log(titulo);
titulo.innerText = "Hello!";
titulo.style.color = "#ff0";

var paragrafos = document.getElementsByClassName("paragrafo");
console.log(paragrafos);
console.log(paragrafos.length);
console.log(paragrafos[0]);
console.log(paragrafos[1].style.fontWeight = "bold");
console.log(paragrafos[2]);

var itens = document.getElementsByTagName("li");
console.log(itens[2].innerText);
var n1 = parseInt(itens[0].innerText);
var n2 = parseInt(itens[1].innerText);
console.log(n1 + " + " + n2 + " = " + (n1 + n2));

var tituloLista = document.querySelector("#titulo-lista");
console.log(tituloLista);

var link1 = document.querySelector("a[href='pagina1.html']");
console.log(link1);
var link2 = document.querySelector("a[href='pagina2.html']");
console.log(link2);

var primeiroParagrfo = document.querySelector("p:first-child");
console.log(primeiroParagrfo);

var tituloDoHeader = document.querySelector("#header h1");
console.log(tituloDoHeader);

var arrayDeParagrafos = document.querySelectorAll(".paragrafo");
console.log(arrayDeParagrafos);
console.log(arrayDeParagrafos[1]);


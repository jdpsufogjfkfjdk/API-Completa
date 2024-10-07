var json1 =  `{
    "modelo": "Turbo Racing",
    "marca": "Hot Wheels",
    "cor": "Vermelho Metálico",
    "fabricante": "Mattel",
    "ano": "2022",
    "imagem": "<img src ='img/carroVermelho.png' width='300px' height: 100px;>",
    "link": "https://ncultura.pt/os-20-homens-mais-bonitos-do-mundo/"
}`;

var json2 = `{
    "modelo": "Speedster",
    "marca": "Hot Wheels",
    "cor":  "Azul Elétrico",
    "fabricante": "Mattel",
    "ano": "2021",
    "imagem": "<img src ='img/carro2.jpg' width='200px'>",
    "link": "https://ncultura.pt/os-20-homens-mais-bonitos-do-mundo/"
}`;

var json3 =  `{
    "modelo": "Off-Road Beast",
    "marca": "Hot Wheels",
    "cor":  "Camuflado",
    "fabricante": "Mattel",
    "ano": "2020",
    "imagem": "<img src ='img/carro3.jpg' width='200px'>",
    "link": "https://ncultura.pt/os-20-homens-mais-bonitos-do-mundo/"
}`;

var json4 =  `{
    "modelo": "Classic Muscle",
    "marca": "Hot Wheels",
    "cor":  "Preto Fosco",
    "fabricante": "Mattel",
    "ano": "2023",
    "imagem": "<img src ='img/carro4.jpg' width='200px'>",
    "link": "https://ncultura.pt/os-20-homens-mais-bonitos-do-mundo/"
}`;

var json5 =  `{
    "modelo": "Super Fast",
    "marca": "Hot Wheels",
    "cor":  "Amarelo Neon",
    "fabricante": "Mattel",
    "ano": "2024",
    "imagem": "<img src ='img/carro5.jpg' width='200px'>",
    "link": "https://ncultura.pt/os-20-homens-mais-bonitos-do-mundo/"
}`;

var json6 =  `{
    "modelo": "Street Racer",
    "marca": "Hot Wheels",
    "cor":  "Prata Brilhante",
    "fabricante": "Mattel",
    "ano": "2023",
    "imagem": "<img src ='img/carro6.jpg' width='200px'>",
    "link": "https://ncultura.pt/os-20-homens-mais-bonitos-do-mundo/"
}`;


var data1 = JSON.parse(json1);
var data2 = JSON.parse(json2);
var data3 = JSON.parse(json3);
var data4 = JSON.parse(json4);
var data5 = JSON.parse(json5);
var data6 = JSON.parse(json6);

var link1 = `<a href="${data1.link}">Visite nosso site</a>`;
var link2 = `<a href="${data2.link}">Visite nosso site</a>`;
var link3 = `<a href="${data3.link}">Visite nosso site</a>`;
var link4 = `<a href="${data4.link}">Visite nosso site</a>`;
var link5 = `<a href="${data5.link}">Visite nosso site</a>`;
var link6 = `<a href="${data6.link}">Visite nosso site</a>`;

function apertar1 () {
    document.getElementById('imagem').innerHTML = data1.imagem;
    document.getElementById('modelo').innerHTML = data1.modelo;
    document.getElementById('marca').innerHTML = data1.marca;
    document.getElementById('cor').innerHTML = data1.cor;
    document.getElementById('fabricante').innerHTML = data1.fabricante;
    document.getElementById('ano').innerHTML = data1.ano;
    document.getElementById('link').innerHTML = data1.link;
}
function apertar2 () {
    document.getElementById('imagem').innerHTML = data2.imagem;
    document.getElementById('modelo').innerHTML = data2.modelo;
    document.getElementById('marca').innerHTML = data2.marca;
    document.getElementById('cor').innerHTML = data2.cor;
    document.getElementById('fabricante').innerHTML = data2.fabricante;
    document.getElementById('ano').innerHTML = data2.ano;
    document.getElementById('link').innerHTML = data2.link;
}
function apertar3 () {
    document.getElementById('imagem').innerHTML = data3.imagem;
    document.getElementById('modelo').innerHTML = data3.modelo;
    document.getElementById('marca').innerHTML = data3.marca;
    document.getElementById('cor').innerHTML = data3.cor;
    document.getElementById('fabricante').innerHTML = data3.fabricante;
    document.getElementById('ano').innerHTML = data3.ano;
    document.getElementById('link').innerHTML = data3.link;
}
function apertar4 () {
    document.getElementById('imagem').innerHTML = data4.imagem;
    document.getElementById('modelo').innerHTML = data4.modelo;
    document.getElementById('marca').innerHTML = data4.marca;
    document.getElementById('cor').innerHTML = data4.cor;
    document.getElementById('fabricante').innerHTML = data4.fabricante;
    document.getElementById('ano').innerHTML = data4.ano;
    document.getElementById('link').innerHTML = data4.link;
}
function apertar5 () {
    document.getElementById('imagem').innerHTML = data5.imagem;
    document.getElementById('modelo').innerHTML = data5.modelo;
    document.getElementById('marca').innerHTML = data5.marca;
    document.getElementById('cor').innerHTML = data5.cor;
    document.getElementById('fabricante').innerHTML = data5.fabricante;
    document.getElementById('ano').innerHTML = data5.ano;
    document.getElementById('link').innerHTML = data5.link;
}
function apertar6 () {
    document.getElementById('imagem').innerHTML = data6.imagem;
    document.getElementById('modelo').innerHTML = data6.modelo;
    document.getElementById('marca').innerHTML = data6.marca;
    document.getElementById('cor').innerHTML = data6.cor;
    document.getElementById('fabricante').innerHTML = data6.fabricante;
    document.getElementById('ano').innerHTML = data6.ano;
    document.getElementById('link').innerHTML = data6.link;
}

console.log(data1)
console.log(data2)
console.log(data3)
console.log(data4)
console.log(data5)
console.log(data6)
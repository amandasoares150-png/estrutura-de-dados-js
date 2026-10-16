let estudantes = [
    {nome: "Amanda", idade: 17},
    {nome: "Felipe", idade: 18}
];
for (let estudante of estudantes) {
    console.log(estudante.nome);
}

let nomes = ["Amanda", "Felipe", "Laura", "Felipe", "Amanda"];
let nome = new Set(nomes);
console.log(nome);


let produtos = [
    { nome: "Fone de ouvido", preco: 150 },
    { nome: "Capinha de celular", preco: 35 },
    { nome: "Carregador portátil", preco: 50 }
];
for (let produto of produtos) {
    console.log(produto);
}
let estoque = new Map();
estoque.set("Fone de ouvido", 6);
console.log(estoque.get("Fone de ouvido"));
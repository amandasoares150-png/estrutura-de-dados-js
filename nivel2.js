let numeros = [1, 2, 2, 3, 3, 4];
let numero = new Set (numeros);
console.log(numero);

let estoque = new Map ();
estoque.set("Mouse", 10);
estoque.set("Teclado", 5);
console.log(estoque.get("Mouse"));

let pilha = [];
pilha.push("Melhor do que nos filmes");
pilha.push("Não é como nos filmes");
pilha.push("Mil vezes amor");
let livro = pilha.pop();
console.log(livro);

let fila = ["Ana", "Pedro", "Maria"];
let filas = fila.shift();
console.log(filas)
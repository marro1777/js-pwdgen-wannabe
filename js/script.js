var nome;
nome = prompt("Nome:");

var cognome;
cognome = prompt("Cognome:");

var colore;
colore = prompt("Il tuo colore preferito");

var password = nome + cognome + colore + 21;
document.getElementById('password').innerHTML = password
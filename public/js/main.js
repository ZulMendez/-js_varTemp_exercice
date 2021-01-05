// # Variables temporaires
// - ## let a = 1; -> 2
// - ## let b = 2; -> 3
// - ## let c = 3; -> 1

// - ## Afficher le changement des variables
// temp = a;
// a = b;
// b = c; 
// c = temp;

// console.log(a, b, c);

// - # Exo 1
// - ## Afficher 4, 3, 2, 1
// - ## let a = 1; -> 4
// - ## let b = 2; -> 3
// - ## let c = 3; -> 2
// - ## let d = 4; -> 1

// let a = 1;
// let b = 2; 
// let c = 3;
// let d = 4;

// let temp; 
// temp = b;
// temp2 = a;
// a = d;
// b = c;
// c = temp;
// d = temp2;

// - ## Afficher le changement des variables

// console.log(a, b, c, d);

// - #  Exo 2
// - ## let a = 1; -> 2
// - ## let b = 2; -> 3
// - ## let c = 3; -> 4
// - ## let d = 4; -> 1

// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;

// let temp;
// temp = a
// a = b;
// b = c;
// c = d;
// d = temp;

// - ## Afficher le changement des variables
// console.log(a, b, c, d)

// - # Exo 3
// - ## Afficher 4, 3, 2, 1 avec une variable temporaire
// - ## let tableau = [1, 2, 3, 4];
// let tableau = [1, 2, 3, 4];

// let temp = tableau[1];
// let temp2 = tableau[0]

// tableau[0] = tableau[3];
// tableau[1] = tableau[2];
// tableau[2] = temp;
// tableau[3] = temp2;

// console.log(tableau);

// - # Exo 4
// - ## let a = 1 -> 4
// - ## let b = 2 -> 5
// - ## let c = 3 -> 1
// - ## let d = 4 -> 2
// - ## let e = 5 -> 6
// - ## let f = 6 -> 3

let a = 1;
let b = 2;
let c = 3;
let d = 4; 
let e = 5;
let f = 6;

let temp = a;
let temp2 = b;
let temp3 = c

a = d;
b = e;
c = temp;
d = temp2;
e = f;
f = temp3

// - ## Afficher le changement des variables
console.log(a, b, c, d, e, f)
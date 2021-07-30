//exercicio 1

// let n = 5;
// let aster = "";

// for (let i = 0; i <= n; i += 1) {
//     for (let j = 0; j < n; j += 1) {
//         aster += "*";
//     }
//     aster += "\n";
// }

// console.log(aster);

//exercicio 2

let n = 5;
let aster = "";

for (let i = 0; i <= n; i += 1) {
    for (let j = 0; j < i; j += 1) {
        aster += "*";
    }
    aster += "\n";
}

console.log(aster);
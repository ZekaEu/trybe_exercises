let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
  };

//exercicio 1

//   console.log("Bem vinda, " + info.personagem)

//exercicio 2

// console.log(info["recorrente"])

//exercicio 3

// for (let key in info) {
//   console.log(key);
// }

//exercicio 4

// for (let key in info) {
//   console.log(info[key]);
// }

//exercicio 5

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

for (let key in info && info2) {
  console.log(info[key] + ' e ' + info2[key]);
}
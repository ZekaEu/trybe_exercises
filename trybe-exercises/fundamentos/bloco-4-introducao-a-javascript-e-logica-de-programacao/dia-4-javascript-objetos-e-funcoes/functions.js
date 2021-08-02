//exercicio 1

// function verPalindrome (string) {
//   for (i in string) {
//     if (string[i] != string[(string.length -1) - i]) {
//       return false;
//     }
//   }
//   return true;
// }
//
// console.log(verPalindrome("arara"));
// console.log(verPalindrome("desenvolvimento"));

//exercicio 2

// function iMaiorNum (numbers) {
//   let iDoMaior = 0;
//   for (let i in numbers) {
//     if (numbers[iDoMaior] < numbers[i]) {
//       iDoMaior = i;
//     }
//   }
//   return iDoMaior;
// }

// console.log(iMaiorNum([2, 3, 6, 7, 10, 1]));

//exercicio 3

// function iMenorNum (numbers) {
//   let iDoMenor = 0;
//   for (let i in numbers) {
//     if (numbers[iDoMenor] > numbers[i]) {
//       iDoMenor = i;
//     }
//   }
//   return iDoMenor;
// }

// console.log(iMenorNum([2, 4, 6, 7, 10, 0, -3]));

//exercicio 4

function maiorNome (nomes) {
  let maior = 0;
  for (let i in nomes) {
    if (nomes[maior].length < nomes[i].length) {
      maior = i;
    }
  }
  return nomes[maior];
}

console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
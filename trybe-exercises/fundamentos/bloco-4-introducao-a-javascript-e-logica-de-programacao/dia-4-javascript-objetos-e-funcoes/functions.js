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

function iMaiorNum (numbers) {
  let iDoMaior = 0;
  for (let i in numbers) {
    if (numbers[iDoMaior] < numbers[i]) {
      iDoMaior = i;
    }
  }
  return iDoMaior;
}

console.log(iMaiorNum([2, 4, 6, 7, 10, 0, -3]));
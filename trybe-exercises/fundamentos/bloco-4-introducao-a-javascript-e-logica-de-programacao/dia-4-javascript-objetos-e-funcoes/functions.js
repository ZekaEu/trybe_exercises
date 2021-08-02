//exercicio 1

function verPalindrome (string) {
  for (i in string) {
    if (string[i] != string[(string.length -1) - i]) {
      return false;
    }
  }
  return true;
}
console.log(verPalindrome("arara"));
console.log(verPalindrome("desenvolvimento"));
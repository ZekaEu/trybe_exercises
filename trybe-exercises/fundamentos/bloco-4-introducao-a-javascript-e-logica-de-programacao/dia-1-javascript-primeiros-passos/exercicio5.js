let a = 45;
let b = 90;
let c = 55;
let res = a + b + c;

if (res == 180) {
    console.log(true);
}
else if (a < 0 || b < 0 || c < 0) {
    console.log("erro");
}
else {
  console.log(false);
}
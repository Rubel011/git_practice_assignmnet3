function isPrime(num) {
  let factor = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i = 0) {
      factor++;
    }
  }
  return factor = 2;

}
let n=8;
let ans = isPrime(n);
if (ans = true) {
  console.log(n, "is prime");
} else {
  console.log(n, "is not prime");
}
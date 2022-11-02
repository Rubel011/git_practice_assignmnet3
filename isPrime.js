function isPrime(num) {
  let counter = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      counter++;
    }
  }
  return counter == 2;

}
let n=8;
let ans = isPrime(n);
if (ans == true) {
  console.log(n, "is prime");
} else {
  console.log(n, "is not prime");
}

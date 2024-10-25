var arr = new Array(10, 5, 2, 5, 6, 7, 8, 9);
let time = 3000;

function sum(arr) {
   return console.log(arr.reduce((a, b) => a + b, 0));
}

function isNumberPrime(arr) {
   const numberPrime = arr.filter((num) => {
      if (num < 2) return false;
      for (let i = 2; i <= num / 2; i++) {
         if (num % i === 0) return false;
      }
      return true;
   });
   console.log(numberPrime);
}
function divisibleBy3(arr) {
   return console.log(arr.filter((num) => num % 3 === 0));
}

function run(arr) {
   setTimeout(() => sum(arr), time);
   setTimeout(() => isNumberPrime(arr), (time += 3000));
   setTimeout(() => divisibleBy3(arr), (time += 3000));
}

run(arr);

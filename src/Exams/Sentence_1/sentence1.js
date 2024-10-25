function isNumberPerfect(num) {
   let sum = 0;
   if (num <= 1) return false;
   for (let i = 1; i <= num / 2; i++) {
      if (num % i === 0) {
         sum += i;
      }
   }
   return sum === num;
}

function checkPerfectNumber() {
   setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 100) + 1;
      const isPerfect = isNumberPerfect(randomNumber);
      console.log(
         `${randomNumber} là ${
            isPerfect ? "Là số hoàn hảo" : "không phải số hoàn hảo"
         }`
      );
   }, 2000);
}
checkPerfectNumber();

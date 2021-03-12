let array = [1,2,3,4,5];
let isPrime = array.filter(num => {
  if(num < 2) return false;

  for (let k = 2; k < num; k++){
    if( num % k === 0){
      return false;
    }
  }
  return true;
});
console.log(isPrime);

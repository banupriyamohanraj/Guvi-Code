let arr = ['guvi','geekeeg',123,909,'pop'];
let isPalindrome = arr.filter(word => {
   const str = String(word);
   let i = 0;
   let j = str.length - 1;
   while(i < j) {
      if(str[i] === str[j]) {
         i++;
         j--;
      }
      else {
         return false;
      }
   }
   return true;
});
console.log(isPalindrome);

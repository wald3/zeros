module.exports = function getZerosCount(number) {
  // your implementation
  let result = 0;
  let a = 5;
  while(Math.floor(number / a) > 0){
      result += Math.floor(number / a);
      a *= 5;  
  }
  return result;
}

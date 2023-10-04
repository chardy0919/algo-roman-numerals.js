function toRomanLazy(num) {
  let answer = '';
  let [I, V, X, L ,C, D, M] = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
  if (num >= 1000){
    answer+= M.repeat(Math.floor(num/1000))
    num = num%1000;
  };
  if (num >= 500){
    answer+= D.repeat(Math.floor(num/500))
    num = num%500;
  };
  if (num >= 100){
    answer+= C.repeat(Math.floor(num/100))
    num = num%100;
  };
  if (num >= 50){
    answer+= L.repeat(Math.floor(num/50))
    num = num%50;
  };
  if (num >= 10){
    answer+= X.repeat(Math.floor(num/10))
    num = num%10;
  };
  if (num >= 5){
    answer+= V.repeat(Math.floor(num/5))
    num = num%5;
  };
  if (num >= 1){
    answer+= I.repeat(Math.floor(num/1))
    num = num%1;
  };
  return answer
}

function toRoman(num) {
  return "";
}

module.exports = { toRoman, toRomanLazy };

// I -> 1
// V -> 5
// X -> 10
// L -> 50
// C -> 100
// D -> 500
// M -> 1000
console.log(toRomanLazy(944))
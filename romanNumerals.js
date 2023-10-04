function toRomanLazy(num) {
 let answer = '';
 let numerals = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
 if (num > 1000){
  Math.floor(num/1000)
  answer+= 
  num = num%1000;
 }
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

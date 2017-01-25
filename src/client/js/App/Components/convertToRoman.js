function decodeEntity (str) {
  return str.replace(/&#(\d+);/g, function(match, dec) {
    return String.fromCharCode(dec);
  });
}

function convertToRoman(num) {
  var letters = [
    {s: "X&#773;&#818;", value: 100000, canPrefix: false},
    {s: "V&#773;&#818;", value: 50000, canPrefix: true},
    {s: "X&#773;", value: 10000, canPrefix: false},
    {s: "V&#773;", value: 5000, canPrefix: true},
    {s: "M", value: 1000, canPrefix: false},
    {s: "D", value: 500, canPrefix: false},
    {s: "C", value: 100, canPrefix: true},
    {s: "L", value: 50, canPrefix: false},
    {s: "X", value: 10, canPrefix: true},
    {s: "V", value: 5, canPrefix: false},
    {s: "I", value: 1, canPrefix: true}
  ];
  
  return letters.map(function(letter, i, allLetters) {
    var thisLetterStr = "";
    
    // add as many of this letter as possible
    // lower num for each letter, stop when num is
    // less than this letter's value
    while(num >= letter.value) {
      thisLetterStr += letter.s;
      num -= letter.value;
    }   
    
    // find the next letter with value lower than the current one
    // that is an allowable prefix
    var j = i;
    var prefixLetter = {canPrefix: false};    
    while (++j < allLetters.length && !prefixLetter.canPrefix) {
      prefixLetter = allLetters[j];
    }
    
    // if the value of the current letter with it's prefix
    // is less than/equal to the number left to go
    // then add the prefixed letter
    if (letter.value - prefixLetter.value <= num ) {
      thisLetterStr += prefixLetter.s + letter.s;
      num -= (letter.value - prefixLetter.value);
    }   
    
    return decodeEntity(thisLetterStr);
  }).join('');
}

export default convertToRoman;
document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById("number-getter").addEventListener('click', function() {
    let numberToConvert = document.getElementById('number-input').value;
    const romanArray = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    const arabicArray = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let resultArray = [];
    for (let i = 0; i < arabicArray.length; i++) {
      while (numberToConvert >= arabicArray[i]) {
        numberToConvert = numberToConvert - arabicArray[i];
        resultArray.push(romanArray[i]);
      }
    }
    let result = resultArray.join('');
    document.getElementById("converted-number-container").innerHTML = result;
  });
});
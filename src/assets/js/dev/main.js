var text = (function() {
    const textbox     = document.querySelector('.textbox'),
          displayText = document.querySelector('h1'),
          button      = document.querySelector('button'),
          select      = document.querySelector('select');

          const error = function () {
              var index = select.selectedIndex,
              inputText = select.children[index].innerHTML.trim();
              displayText.style.color = "red";
              if( inputText === "Fizz Buzz") {
                  displayText.innerHTML = "Syntax error: <i>number</i> to <i>number</i><br/>Example: 1 to 9";
              } else if(textbox.value.length <= 1) {
                  displayText.innerHTML = "error: please enter two or more characters";
              }
          };

          const isNumber = (n) => {
              return n == Number(n);
          };

          const resetTxtBox = () => {
            $(textbox).val('');
          };

          const resetTxtColor = () => {
             displayText.style.color = "#fff";
          };

          const reverseString = function() {
              resetTxtColor();
              const newString = textbox.value.split('').reverse().join('');
              displayText.innerHTML = newString;
              resetTxtBox();
          };

          const pigLatinfy = () => {
              resetTxtColor();
              const str = textbox.value,
                    newStr = str.split(" "),
                    arr = [];

              for(let i = 0; i < newStr.length; i++) {
                  let arrStr = newStr[i].split('');
                  let lastChar = arrStr.slice(-1)[0];
                  const lastCharCheck = lastChar === "?" || lastChar === "," || lastChar === "." || lastChar === "!" || lastChar === "'" || lastChar === "\"" || lastChar === ";";
                  if(lastCharCheck) {
                      arrStr.splice(-1, 1)[0];
                  }
                  arrStr.push(arrStr.shift())
                  arrStr.push("ay");
                  if(lastCharCheck) {
                      arrStr.push(lastChar);
                  }
                  arr.push(arrStr.join(''));
              }

              const newText = String(arr.join(' '));
              displayText.innerHTML = newText.charAt(0).toUpperCase() + newText.substr(1).toLowerCase();
              resetTxtBox();
          };

          const fizzBuzz = () => {
              resetTxtColor();
              const numbers = textbox.value.split(' '),
                    init = Number(numbers[0]),
                    len  = Number(numbers[2]),
                    correctString = isNumber(numbers[0]) && ( numbers[1].toLowerCase() === "to" || numbers[1].toLowerCase() === "To" ) && isNumber(numbers[2]);
              let arr = [];
              if(correctString) {
                  for(var i = init; i <= len; i++) {
                      if(i % 3 === 0 && i % 5 === 0) {
                          arr.push("FizzBuzz");
                      } else if (i % 3 === 0) {
                          arr.push("Buzz");
                      } else if (i % 5 === 0) {
                          arr.push("Fizz");
                      } else {
                          arr.push(i);
                      };
                  }
                  resetTxtBox();
                  displayText.innerHTML = arr.toString().replace(/,/g , ", ");
              } else {
                  error();
              }
          };

          const countVowels = () => {
              resetTxtColor();
              const string = textbox.value,
                    str = string.split('');
              let arr = [],
                  vwel = "vowel";
              for(let i = 0; i < str.length; i++) {
                  let strChar = str[i].toLowerCase();
                  if(strChar === "a" || strChar === "e" || strChar === "i" || strChar === "o" || strChar === "u" || strChar === "y") {
                      arr.push(strChar);
                  }
              }
              arr = arr.filter(function(item, index, inputArray ) {
                  return inputArray.indexOf(item) == index;
              });
              const vowelLen = arr.length;
              const vowelChars = arr.toString().replace(/,/g , ", ");
              if(arr.length === 0 || arr.length > 1) {
                  vwel += "s";
              }
              displayText.innerHTML = "I found " + arr.length + " " + vwel + ": " + '<span style="color:green;">' + vowelChars + '</span>';
              resetTxtBox();
          }

          const palindrome = () => {
              resetTxtColor();
              const string = textbox.value;
              let boolStr = "not";
              let styleColor = "red";
              if (string.toLowerCase() === string.toLowerCase().split('').reverse().join('')) {
                  boolStr = "";
                  styleColor = "green";
              };
              displayText.innerHTML = "<span style='color:" + styleColor + "'><i>" + string + "</i></span>" + " is " + boolStr +" a palindrome";
              resetTxtBox();
          };

          const wordCount = () => {
              resetTxtColor();
              let word = "word",
                  ptvrb = "is";
              const string = textbox.value,
                    wordCount = string.split(' ').length;

              if(wordCount > 1) {
                  word += "s";
                  ptvrb = "are";
              }
              displayText.innerHTML = "There " + ptvrb + " " + "<span style='color:green'>" + wordCount + "</span>" + " " + word;
              resetTxtBox();
          };

          var buttonClick = function(fn) {
              button.addEventListener('click', fn);
          };

            select.onchange = function() {
                resetTxtColor();
                var index = this.selectedIndex;
                var inputText = this.children[index].innerHTML.trim();
                displayText.innerHTML = inputText;
                resetTxtBox();
            };

            buttonClick(() => {
                if(textbox.value.length > 1) {
                    var index = select.selectedIndex,
                        inputText = select.children[index].innerHTML.trim();
                    switch(inputText) {
                        case "Reverse": reverseString();
                        break;
                        case "Fizz Buzz": fizzBuzz();
                        break;
                        case "Pig Latinfy": pigLatinfy();
                        break;
                        case "Count Vowels": countVowels();
                        break;
                        case "Palindrome": palindrome();
                        break;
                        case "Word Count": wordCount();
                        break;
                        default: text.error();
                    };
                } else {
                    error();
                }
            });
}());

var txtData;
$.get("/../../docs/test.txt", function(data) {
    return txtData = data;
});

console.log(txtData);

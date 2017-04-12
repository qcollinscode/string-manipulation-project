var text = (function() {
    const textbox     = document.querySelector('.textbox'),
          displayText = document.querySelector('h1'),
          button      = document.querySelector('button'),
          select      = document.querySelector('select');

          const error = function () {
              var index = select.selectedIndex,
              inputText = select.children[index].innerHTML.trim();
              displayText.style.color = "red";
              if( inputText === "FizzBuzz") {
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
             displayText.style.color = "black";
          };

          var reverseString = function() {
              resetTxtColor();
              const newString = textbox.value.split('').reverse().join('');
              displayText.innerHTML = newString;
              resetTxtBox();
          };

          var pigLatinfy = function() {
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

          var fizzBuzz = function() {
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

            buttonClick(function() {
                if(textbox.value.length > 1) {
                    var index = select.selectedIndex,
                        inputText = select.children[index].innerHTML.trim();
                    switch(inputText) {
                        case "Reverse": reverseString();
                        break;
                        case "FizzBuzz": fizzBuzz();
                        break;
                        case "PigLatinfy": pigLatinfy();
                        break;
                        default: text.error();
                    };
                } else {
                    error();
                }
            });
}());

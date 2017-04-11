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

          var reverseString = function() {
              displayText.style.color = "black";
              const newString = textbox.value.split('').reverse().join('');
              displayText.innerHTML = newString;
              $(textbox).val('');
          };

          var pigLatinfy = function() {
              const txt = textbox.value.split(" ");
              let arr = [];
              function puncExist(punc) {
                  return puncExist = punc === "?" || punc === "," || punc === "." || punc === "!" || punc === "'" || punc === "\"" || punc === ";";
              }
              for(var i = 0; i < txt.length; i++) {
                  let txtStr = txt[i];
                  const textArr = txtStr.split(' ');
                  let punc = textArr.slice(-1)[0],
                      punct = puncExist(punc);
                  if(!punct) {
                      console.log(textArr)
                      textArr.splice(-1, 1)[0];
                  }

                  textArr.push(textArr.shift())
                  textArr.push("ay");
                  if(punct) {
                      textArr.push(punc);
                  }
                  let newText = textArr.join('');
                  arr.push(newText);
              }
              const newText = arr.join(' ');
              displayText.innerHTML = newText.charAt(0).toUpperCase() + newText.substr(1).toLowerCase();
              $(textbox).val('');
          };

          var fizzBuzz = function() {
              displayText.style.color = "black";
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
                  $(textbox).val('');
                  displayText.innerHTML = arr.toString().replace(/,/g , ", ");
              } else {
                  error();
              }
          };

          var buttonClick = function(fn) {
              button.addEventListener('click', fn);
          };

            select.onchange = function() {
                var index = this.selectedIndex;
                var inputText = this.children[index].innerHTML.trim();
                displayText.innerHTML = inputText;
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

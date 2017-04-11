function pigLatin(text) {
    txt = text.split("");
    var punc = txt.slice(-1)[0];
    txt.splice(-1, 1)[0];
    txt.push(txt.shift())
    console.log(txt)
    txt.push("ay");
    if(punc === "?" || punc === "," || punc === "." || punc === "!" || punc === "'" || punc === "\"" || punc === ";") {
        txt.push(punc);
    }
    return newText = txt.join('');
}

function test(str) {
    const newStr = str.split(" "),
          arr = [];

    for(let i = 0; i < newStr.length; i++) {
        let arrStr = newStr[i].split('');
        let last = arrStr.slice(-1)[0];
        const lastCharCheck = last === "?" || last === "," || last === "." || last === "!" || last === "'" || last === "\"" || last === ";";
        if(lastCharCheck) {
            arrStr.splice(-1, 1)[0];
        }
        arr.push(arrStr);
    }
    console.log(arr[0].shift());

}

test("hello what is your name?");

// move the first letter to the end of the string

// split the string into an array
// get the first letter and push it to the end of the array.
// add ay to the end of the word

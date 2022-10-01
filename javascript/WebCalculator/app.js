const inputDOM = document.querySelector("#result");
const previousInputDOM = document.querySelector("#previous");

document.addEventListener("keydown", function(e) {
    // if you press a key value in the range of 0 to 10  OR (RegExp g modifier) [/+*-.%]   
    if ((e.key >= 0 && e.key < 10) || (/[/+*-.%]/g).test(e.key)) {
        inputDOM.value += e.key; 
    }
    if (e.key == 'Enter') {
        calculate();
    }
    if (e.key == "Backspace") {
        del();
    }
    if (e.key == "Delete") {
        reset();
    }

})

function del() {
    let arrValue = Array.from(inputDOM.value);
    arrValue = arrValue.slice(0, -1).join("");
    inputDOM.value = arrValue;
}

function calculate() {
    previousInputDOM.value = inputDOM.value;
    inputDOM.value = eval(inputDOM.value);
}

function reset() {
    previousInputDOM.value = "";
    inputDOM.value = "";
}
// Calculator events
let buttons = Array.from(document.querySelectorAll("[type=button]"));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.value) {
            case 'AC': {
                reset();
                break;
            }
            case 'DEL': {
                del();
                break;
            }
            case '=': {
                calculate();
                break;
            }
            default:
                inputDOM.value += e.target.value; 
        }
    })
})
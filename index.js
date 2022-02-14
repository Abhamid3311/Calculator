let output = document.getElementById('display');
function display(number) {
    output.value += number
}

function calculate() {
    try {
        output.value = eval(output.value);
    } catch (err) {
        alert("invalid Number")
    }
}
function clr() {
    output.value = "";
}
function del() {
    output.value = output.value.slice(0, -1);
}
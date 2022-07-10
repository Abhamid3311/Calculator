let output = document.getElementById('display');
function display(number) {
    output.value += number
}

/* function parcent(number) {
    output.value = output.value / 100
}; */

function calculate() {
    try {
        output.value = eval(output.value);
    } catch (err) {
        alert("invalid Number")
    }
};

//Clear 
function clr() {
    output.value = "";
};

//Delete One Number
function del() {
    output.value = output.value.slice(0, -1);
};
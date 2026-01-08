const display = document.getElementById('display');

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.toString().slice(0, -1);
}

function calculateResult() {
    try {
        if (display.value === "") return;

        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

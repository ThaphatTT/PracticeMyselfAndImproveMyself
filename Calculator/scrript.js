const getOutput = document.querySelector('.output');
let result = "";

function calculate(operator){
  if (operator === "=") {
    result = eval(result);
    getOutput.textContent = result;
  } else {
    result = result + operator;
    getOutput.textContent = result;
  }
}


// Selecting value displayed and buttons

const numberDisplayed = document.querySelector(".js-display");
const buttons = document.querySelectorAll(".button");

buttons.forEach((btn) => {

    btn.addEventListener("click", (e) =>{

        const styles = e.currentTarget.classList;
        let entireDigits = document.querySelector(".js-display").textContent;
        let lastDigit = entireDigits.charAt(entireDigits.length - 1);

        switch (true) {
            case styles.contains("js-AC-button"):
                numberDisplayed.textContent = "";
                break;

            case styles.contains("js-DEL-button"):
                let newNumbers = numberDisplayed.textContent;

                newNumbers = newNumbers.substring(0, newNumbers.length - 1);;
        
                numberDisplayed.textContent = newNumbers;
                break;

            case styles.contains("js-%-button"):
                let newNumber = numberDisplayed.textContent;

                newNumber = parseFloat(newNumber) / 100;

                numberDisplayed.textContent = newNumber;
                break;
          
            case styles.contains("js-1-button"):
                if (numberDisplayed.textContent === "") {
                    numberDisplayed.textContent = 1;
                } else {
                    numberDisplayed.textContent += 1;
                }
                break;
          
            case styles.contains("js-2-button"):
                if (numberDisplayed.textContent === "") {
                    numberDisplayed.textContent = 2;
                } else {
                    numberDisplayed.textContent += 2;
                }
                break;
          
            case styles.contains("js-3-button"):
                if (numberDisplayed.textContent === "") {
                    numberDisplayed.textContent = 3;
                } else {
                    numberDisplayed.textContent += 3;
                }
                break;
          
            case styles.contains("js-4-button"):
                if (numberDisplayed.textContent === "") {
                    numberDisplayed.textContent = 4;
                } else {
                    numberDisplayed.textContent += 4;
                }
                break;
          
            case styles.contains("js-5-button"):
                if (numberDisplayed.textContent === "") {
                    numberDisplayed.textContent = 5;
                } else {
                    numberDisplayed.textContent += 5;
                }
                break;
          
            case styles.contains("js-6-button"):
                if (numberDisplayed.textContent === "") {
                    numberDisplayed.textContent = 6;
                } else {
                    numberDisplayed.textContent += 6;
                }
                break;
          
            case styles.contains("js-7-button"):
                if (numberDisplayed.textContent === "") {
                    numberDisplayed.textContent = 7;
                } else {
                    numberDisplayed.textContent += 7;
                }
                break;
          
            case styles.contains("js-8-button"):
                if (numberDisplayed.textContent === "") {
                    numberDisplayed.textContent = 8;
                } else {
                    numberDisplayed.textContent += 8;
                }
                break;
          
            case styles.contains("js-9-button"):
                if (numberDisplayed.textContent === "") {
                    numberDisplayed.textContent = 9;
                } else {
                    numberDisplayed.textContent += 9;
                }
                break;
          
            case styles.contains("js-0-button"):
                if (numberDisplayed.textContent === "") {
                    numberDisplayed.textContent = 0;
                } else {
                    numberDisplayed.textContent += 0;
                }
                break;
          
            case styles.contains("js-÷-button"):
                if (!["÷", "+", "-", "×", "."].includes(lastDigit) && numberDisplayed.textContent != "") {
                    numberDisplayed.textContent += "÷";
                }
                break;
          
            case styles.contains("js-x-button"):
                if (!["÷", "+", "-", "×", "."].includes(lastDigit) && numberDisplayed.textContent != "") {
                    numberDisplayed.textContent += "×";
                }
                break;
          
            case styles.contains("js---button"):
                if (!["÷", "+", "-", "×", "."].includes(lastDigit)  && numberDisplayed.textContent != "") {
                    numberDisplayed.textContent += "-";
                }
                break;
          
            case styles.contains("js-+-button"):
                if (!["÷", "+", "-", "×", "."].includes(lastDigit) && numberDisplayed.textContent != "") {
                    numberDisplayed.textContent += "+";
                }
                break;
          
            case styles.contains("js-dot-button"):
                const operators = entireDigits.replace(/[0-9]/g, "").split("");

                if (!["÷", "+", "-", "×", "."].includes(lastDigit) && operators[operators.length - 1] != "."  && numberDisplayed.textContent != "") {
                    numberDisplayed.textContent += ".";
                    
                }
                break;
          
            case styles.contains("js-=-button"):
                if (!["÷", "+", "-", "×", "."].includes(lastDigit) && numberDisplayed.textContent != "") {
                    calculate(numberDisplayed.textContent);
                }
                break;
          
            default:
              
                break;
          }
    })


})

function calculate(operation){

    const numbers = operation.split(/[\+|\-|\÷|\×]/g);
    const operators = operation.replace(/[0-9]|\./g, "").split("");
    
    let divide = operators.indexOf("÷");
    while (divide != -1) {
      numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
      operators.splice(divide, 1);
      divide = operators.indexOf("÷");
    }
  
    let multiply = operators.indexOf("×");
    while (multiply != -1) {
      numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
      operators.splice(multiply, 1);
      multiply = operators.indexOf("×");
    }
  
    let subtract = operators.indexOf("-");
    while (subtract != -1) {
      numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
      operators.splice(subtract, 1);
      subtract = operators.indexOf("-");
    }
  
    let add = operators.indexOf("+");
    while (add != -1) {
      numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
      operators.splice(add, 1);
      add = operators.indexOf("+");
    }

    document.querySelector(".js-display").textContent = numbers;
  
}






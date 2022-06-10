/**
 * @function initApplication
 * @description The main function for the application.
 * @return {void}
 * @author Vlad Sorokin
 * @date 2021/09/01
 */
function initApplication() {
  programRunning = true;
  let commandInput = '';
  let inputData1 = 0;
  let inputData2 = '';
  let balance = 0;
  while(programRunning === true) {
    commandInput = '';
    commandInput = prompt('Enter a math operation: ');
    if ((commandInput.toUpperCase() === 'QUIT') ||
    (commandInput.toUpperCase() === 'Q') ||
    (commandInput.toUpperCase() === 'EXIT') ||
    (commandInput.toUpperCase() === 'X')) {
      programRunning = false;
    } else if (commandInput.toUpperCase() === 'ADD') {
      inputData1 = '';
      inputData2 = '';
      inputData1 = prompUserIntegerInput('Enter the first value to add: ');
      inputData2 = prompUserIntegerInput('Enter the second value to add: ');
      balance = math.add(inputData1, inputData2);
    } else if (commandInput.toUpperCase() === 'SUBTRACT') {
      inputData1 = '';
      inputData2 = '';
      inputData1 = prompUserIntegerInput('Enter the first value to subtract: ');
      inputData2 = prompUserIntegerInput('Enter the second value to subtract: ');
      balance = math.subtract(inputData1, inputData2);
    } else if (commandInput.toUpperCase() === 'MULTIPLY') {
      inputData1 = '';
      inputData2 = '';
      inputData1 = prompUserIntegerInput('Enter the first value to multiply: ');
      inputData2 = prompUserIntegerInput('Enter the second value to multiply: ');
      balance = math.multiply(inputData1, inputData2);
    } else if (commandInput.toUpperCase() === 'DIVIDE') {
      inputData1 = '';
      inputData2 = '';
      inputData1 = prompUserIntegerInput('Enter the first value to divide: ');
      inputData2 = prompUserIntegerInput('Enter the second value to divide: ');
      balance = math.divide(inputData1, inputData2);
    }
    if (programRunning) {
      console.log('balance is: ' + balance);
    }
  }
};

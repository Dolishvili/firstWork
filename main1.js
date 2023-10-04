// 1st and 2nd task

function equalOrNot(a, b) {
    if(a == b) { // 2nd task "=="
        console.log("ტოლია/Equal")
    }
    else {
        console.log("არ არის ტოლი/Not equal")
    }
}
console.log('First and second task result:')
equalOrNot('4', 4)

//3rd and 4th task

function convertToCelsius(a) {
    if(typeof a != 'number') { // 4th task
        return false;
    }
    else {
        return ((a - 32)/1.8)
    }
}
console.log('Third and fourth task result: ' + convertToCelsius(89))


// 5th and 6th task
function doMath(a, b, operation) {
    switch (operation) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        if (typeof a != 'number' && typeof b != 'number') {
          return false;
        } 
        else if (operation != '+' && operation != '*' && operation != '/' && operation != '-') {
            return false;
        }
      default:
        return "Something went wrong !!!";
    }
  }


console.log('Fifth and sixth task result: ' + doMath(23,12, '-'))
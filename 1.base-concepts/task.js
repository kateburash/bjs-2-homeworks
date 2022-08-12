"use strict";
function solveEquation(a, b, c) {
  let arr;
 
    if (a===0)
    return "a=0 недопустимое знанчение";
  
    let D=b**2-4*a*c; 

    let x1, x2;

    if (D<0)
    arr = [];
    else if (D>0) {
        x1=(-b + Math.sqrt(D) )/(2*a);
        x2=(-b - Math.sqrt(D) )/(2*a);
        arr = [x1, x2];
    } else if (D===0) {
        x1=-b/(2*a);
        arr = [x1];
    }   // код для задачи №1 писать здесь
    return arr; // array
  }

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}

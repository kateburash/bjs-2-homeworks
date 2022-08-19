// Задание 1
function getArrayParams(arr) {

  let min = Infinity; 

  let max = -Infinity 
  
  let sum = 0; 

  for (let i = 0;  i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    };

    sum += arr[i];

  };

  let avg = (sum  / arr.length).toFixed(2);

  avg = parseFloat(avg);

  return { min: min, max: max, avg: avg };
};

// Задание 2
function worker(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }; 

  return sum;
};

let func = worker;

function makeWork(arrOfArr, func) {
  let max = arrOfArr[0];
 
  for (i = 0; i < arrOfArr.length; i++) {
    if (func(arrOfArr[i]) > max) {
      max = func(arrOfArr[i]);
  };
}; 
  return max;
};


// Задание 3
function worker2(arr) {
  let min = arr[0]; 

  let max = arr[0]; 
     
  let diff = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    };  
  };
     
     diff = max - min; 
     Math.abs(diff); 

  return diff;
};




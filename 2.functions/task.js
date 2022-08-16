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

function makeWork(arrOfArr, func) {
  let max;
 
  let func = worker;
  
  for (i = 0; i < arrOfArr.length; i++) {
    if 
  }
  
  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
}

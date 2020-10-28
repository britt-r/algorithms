// 1. Print all the integers from 1 to 255.

function Print1To255() {
  for (var i = 0; i <= 255; i++) {
    console.log(i);
  }
}

// 2. Print all odd integers from 1 to 255.
function PrintOdds1To255() {
  for (var i = 1; i <= 255; i += 2) {
    console.log(i);
  }
}

// 3. Print integers from 0 to 255, and with each integer print the sum so far.
function PrintIntsAndSum0To255() {
  var sum = 0;
  for (var i = 0; i <= 255; i++) {
    sum = sum + i;
    console.log(i + " , Current Sum: " + sum);
  }
}

// 4. Iterate through a given array, printing each value.
function PrintArrayVals(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// 5. Given an array, find and print its largest element.
function PrintMaxOfArray(arr) {
  var max = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log(max);
}

// 6. Analyze an array’s values and print the average.
function PrintAverageOfArray(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  var average = sum / arr.length;
  console.log(average);
}

// 7. Create an array with all the odd integers between 1 and 255 (inclusive).
function ReturnOddsArray1To255() {
  var newArray = [];
  for (i = 1; i <= 255; i += 2) {
    newArray.push(i);
  }
  return newArray;
}

// 8. Square each value in a given array, returning that same array with changed values.
function SquareArrayValues(arr) {
  for (var i = 0; i < arr.length; i++) {
    var numSquared = arr[i] * arr[i];
    arr[i] = numSquared;
  }
  return arr;
}

// 9. Given an array and a value Y, count and print the number of array values greater than Y.
function ReturnArrayCountGreaterThanY(arr, y) {
  var numCount = 0;
  var values = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > y) {
      numCount = numCount + 1;
      values.push(arr[i]);
    }
  }
  console.log(values);
}

// 10. Return the given array, after setting any negative values to zero.
function ZeroOutArrayNegativeVals(arr) {
  var zero = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < zero) {
      arr[i] = zero;
    }
  }
  return arr;
}

// 11. Given an array, print the max, min and average values for that array.
function PrintMaxMinAverageArrayVals(arr) {
  var min = Infinity;
  var max = -Infinity;
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }
  var average = sum / arr.length;
  console.log("Min: " + min + " Max: " + max + " Average: " + average);
}

// 12. Given an array, move all values forward (to the left) by one index, dropping the first value and leaving a 0 (zero) value at the end of the array.
function ShiftArrayValsLeft(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[arr.length - 1] = 0;
  return arr;
}

// 13. Given an array of numbers, replace any negative values with the string 'Dojo'.
function SwapStringForArrayNegativeVals(arr) {
  var zero = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < zero) {
      arr[i] = "Dojo";
    }
  }
  return arr;
}

// console.log(ShiftArrayValsLeft([-1, 3, -5, 2, 4]))

// console.log(PrintMaxMinAverageArrayVals([-1, 3, -5, 2, 4]))

// console.log(PrintMaxOfArray([1, 2, 2, 2, 2, 10]));

// console.log(SwapStringForArrayNegativeVals([-1, 3, -5, 2, 4]))

// console.log(ReturnArrayCountGreaterThanY([1, 3, 5, 2, 4], 2))

// console.log(SquareArrayValues([1, 3, 5, 2, 4]))

// console.log(PrintAverageOfArray([2, 2, 2, 2, 10]));

// console.log(PrintIntsAndSum0To255())

// console.log(Print1To255())

// A functions that reverses a string
function reverseString(s) {
  let reversedStr = "";

  for (i = s.length - 1; i >= 0; i--) {
    reversedStr += s[i];
  }
  return reversedStr;
}
// console.log(reverseString("hello"));


// FREQUENCY COUNTER
// A function that return true if it has it's corresponding value squared in the second array, and false otherwise
function sameValueSquared(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let Arr1Sqd = {}
  
  for (const num of arr1) {
    let numSqd = num * num;
    Arr1Sqd[numSqd] = Arr1Sqd[numSqd] ? ++Arr1Sqd[numSqd] : 1;
  }

  for (const num of arr2) {
    if (Arr1Sqd[num]) {
      Arr1Sqd[num] > 1 ? --Arr1Sqd[num] : Arr1Sqd[num] = null
    } else {
      return false;
    }
  }
  return true
}
// console.log(sameValueSquared([1, 1, 2, 3], [1, 1, 4, 9]))

// Given two strings, write a function to determine if the two strings are anagrams of each other
function anagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let str1Obj = {};

  for (const str of str1) {
    str1Obj[str] = str1Obj[str] ? ++str1Obj[str] : 1;
  }

  for (const str of str2) {
    if (str1Obj[str]) {
      str1Obj[str] > 1 ? --str1Obj[str] : (str1Obj[str] = null);
    } else {
      return false;
    }
  }
  return true;
}
// console.log(anagram("anagram", "naargma"));

// MULTIPLE POINTERS 
// A function when given a sorted array of numbers, finds the first pair where the sum is zero
function sumZero(numbersArr) {
  let j = numbersArr.length - 1;

  for (const num of numbersArr) {
    if (num + numbersArr[j] === 0) {
      return [num, numbersArr[j]];
    }
    --j;
  }
  return undefined;
}
// console.log(sumZero([-3,-2,-1,0,1,2,3]));

// A function to count unique values when passed a sorted array as an argument
function countUniqueValues(numbersArr) {
  let i = 0;

  for (let j = 1; j < numbersArr.length; j++) {
    if (numbersArr[i] !== numbersArr[j]) {
      i++;
      numbersArr[i] = numbersArr[j]
    }
  }
  console.log(numbersArr);

  return i + 1;
}

// console.log(countUniqueValues([0, 1, 1, 2, 2, 2, 3]));

// SLIDING WINDOW PATTERN
// A function to calculate maximum sum of "num" consecutive elements in an array 
function maxSubArray(numbersArr, num) {
  let maxSum = 0, tempSum;

  if(numbersArr.length <= num || typeof num !== "number") {
    return null
  }
  
  for(let i = 0; i < num; i++) {
    maxSum += numbersArr[i];
  }
  tempSum = maxSum;
  for(let i = num; i < numbersArr.length; i++) {
    tempSum = maxSum - numbersArr[i - num] + numbersArr[i];
    // if (isNaN(tempSum)) break
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

// console.log(maxSubArray([1, 5, 6, 2, 9, 10, 48], 3))

// DIVIDE AND CONQUER PATTERN

//Divide and conquer
// write an algorithm that searches for the index of a num in an array efficiently
const binarySearch = (arr, num) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (arr[middle] > num) {
      right = middle + 1;
    } else if (arr[middle] < num) {
      left = middle - 1;
    } else {
      return middle;
    }
  }
};

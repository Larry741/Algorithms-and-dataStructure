// Bubble sort

// from tutorials
function bubbleSort(arr) {
  const num = performance.now();
  var noSwaps;
  for (var i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        noSwaps = false;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    if (noSwaps) break;
  }

  const num2 = performance.now();
  console.log(`${(num2 - num) * 1000} sort 1`);
  console.log("out of first sort");
  // return arr;
}

// bubbleSort([30, 27, 50, 70, 20, 100, 500, 300, 250, 340, 1000, 220, 35, 56, 77, 444, 563, 356, 976, 428, 244, 837, 72, 39, 38, 375, 873, 673, 520, 19, 50]);

// Selection sort
function selectionSort(arr) {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }

  return arr;
}

// selectionSort([0, 2, 34, 22, 10, 19, 17]);

// Insertion sort
const insertionSort = (arr, idx) => {
  for (i = 1; i < arr.length; i++) {
    let currVal = arr[i];
    for (j = i - 1; j >= 0 && arr[j] > currVal; j--) {
      // if (arr[j] > arr[i]) {
      arr[j + 1] = arr[j];
      // }
    }
    arr[j + 1] = currVal;
  }

  return arr;
};

// console.log(insertionSort([50, 12, 34, 22, 10, 19, 17]));

//mergeSort

const mergeSort = (arr) => {
  const merge = (arr1, arr2) => {
    let results = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] > arr2[j]) {
        results.push(arr2j[j]);
        j++;
      } else {
        results.push(arr1[i]);
        i++;
      }
    }
    while (j < arr1.length) {
      results.push(arr2j[j]);
      j++;
    }
    while (i < arr1.length) {
      results.push(arr2j[i]);
      i++;
    }

    return results;
  };

  let mid = Math.floor(arr.length / 2);
  let left = merge(arr.slice(0, mid));
  let right = merge(arr.slice(mid));
  return merge(left, right);
};

// Quick sort
const quickSort = (arr, left = 1, right = arr.length - 1) => {
  // if (right === 0 || ) { Continue
  //   return ;
  // }
  function pivotHelper(arr, left, right) {
    let pivotCount = 0;
    let pivot = 0;

    for (j = left; j < right; j++) {
      if (arr[pivot] > arr[j]) {
        if (j === 1) {
          pivotCount++;
        } else {
          pivotCount++;
          [arr[j], arr[pivotCount]] = [arr[pivotCount], arr[j]];
        }
      }
    }
    [arr[pivot], arr[pivotCount]] = [arr[pivotCount], arr[pivot]];

    return pivotCount;
  }
  
  let mid = pivotHelper(arr, left, right);

  quickSort(arr, left, mid - 1)
  quickSort(arr, mid + 1, right)

  return arr;
};

console.log(quickSort([50, 12, 30, 17, 60,]));

/**
 * In order to win the prize for most cookies sold,
 * my friend Alice and I are going to merge our 
 * Girl Scout Cookies orders and enter as one unit.
 * Each order is represented by an "order id" (an integer).
 * We have our lists of orders sorted numerically already, 
 * in arrays. Write a function to merge our arrays of orders 
 * into one sorted array.
 */

const mergeArrays = (arr1, arr2) => {
  let i = 0;
  let j = 0;
  let merged = [];

  while (arr1[i] || arr2[j]) {
    if(!arr1[i]) {
      merged.push(...arr2.splice(j));
      break;
    } else if(!arr2[j]) {
      merged.push(...arr1.splice(j));
      break;
    }

    if (arr1[i] <= arr2[j]) {
      merged.push(arr1[i]);
      i += 1;
    } else {
      merged.push(arr2[j]);
      j += 1;
    }
  }

  return merged;
}

// TEST
var myArray     = [];
var alicesArray = [];
console.log(mergeArrays(myArray, alicesArray));

/**
 * Given an array and an integer k, return the k most frequent elements of the array
 * 
 * Example 1:
 * Input: Array: [1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 5, 6] K: 3
 * Output: [1, 2, 3]
 */

 const kFrequentElements = (arr, k) => {
   let frequentElements = [];
   let frequencyMap = {};
   let bucket = [];

   arr.forEach(element => {
     if(frequencyMap[element]) {
       frequencyMap[element] += 1;
     } else {
       frequencyMap[element] = 1;
     }
   });

   Object.keys(frequencyMap).forEach(key => {
     bucket.push([key, frequencyMap[key]]);
   });
   bucket.sort((a, b) =>  b[1] - a[1]);

   for(let i = 0; i < k; i++) {
     frequentElements.push(+bucket[i][0]);
   }
   return frequentElements;
 }

 console.log(kFrequentElements([1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 5, 6], 3));
function hasSubarraySum(arr, targetSum) {
  //Initialize the current cumulative sum and a set to store subarray sums.
  let currentSum = 0;
  let subSums = new Set();
  // Iterate through each element in the array.
  for (let num of arr) {
    currentSum += num;
    //if sum target sum found?
    if (subSums.has(currentSum - targetSum)) {
      return true;
    }

    subSums.add(currentSum);
  }
  //if not found?
  return false;
}
//example given
let arr = [4, 2, 7, 1, 9, 5];
let targetSum = 17;
console.log(hasSubarraySum(arr, targetSum)); 
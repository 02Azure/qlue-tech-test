// In the language of your choice, write a function which, taking a positive integer n as input, finds all
// sets of numbers that sum up to n.
// For example, n=4, we have:
// 4
// 3,1
// 2,2
// 2,1,1
// 1,1,1,1
// Note that 2,1,1 is same as 1,2,1 or 1,1,2.

function findAllSumCombinations(num) {
  let combinations = []
  let combination = []

  findNumSumCombinations(num, num, combination, combinations)
  return combinations
}

function findNumSumCombinations(num, initialNum, combination, combinations) {
  if(sumOfArray(combination) === num) { //if current comb array is equal num
    combinations.push(combination) //add that to combinations array
  }

  for(let n = initialNum; n > 0 ; n--) { //loop current comb array from init to 1
    if(sumOfArray(combination) + n <= num) { //if current n added to comb array is less than or equal to num
      findNumSumCombinations(num, n, combination.concat(n), combinations) //try this function again but with initial num of current n, and combination array with that added number
    }
  }
}

function sumOfArray(numArr) {
  if(numArr.length) return numArr.reduce((total, num) => total += num)
  return 0
}

console.log(findAllSumCombinations(4))
// This kata is from check py.checkio.org

// You are given an array with positive numbers and a number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

// Let's look at a few examples:

// array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
// array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.


// https://www.codewars.com/kata/57d814e4950d8489720008db/train/javascript

const index = (array, n)=> {
    for(let i = 0; i<array.length; i++){
      if(array[i] === array[n]){
        return Math.pow(array[n],n)
      }
    }
    return -1
  }
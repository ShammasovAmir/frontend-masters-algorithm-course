// ****************************************************************
// Important concept
// Growth is with respect to the input
//
// Simplest trick for complexity
// Look for loops
// ****************************************************************

function sum_char_code(n: string): number {
  let sum = 0
  for (let i = 0; i < n.length; ++i) {
    sum += n.charCodeAt(i)
  }

  return sum
} // Running time: O(n)

// ****************************************************************
// Drop constants.
// O(2n) -> O(n) and this makes sense. That is because Big O is meant to describe the upper bound of the algorithm (its growth). The constant eventually becomes irrelevant.
// N = 1, O(10N) = 10, O(N^2) = 1
// N = 5, O(10N) = 50, O(N^2) = 25
// N = 100, O(10N) = 1 000, O(N^2) = 10 000 # 10x bigger
// N = 1000, O(10N) = 10 000, O(N^2) = 1 000 000 # 100x bigger
// N = 10 000, O(10N) = 100 000, O(N^2) = 10 000 0000 # 1000x bigger
// ****************************************************************

function sum_char_codes1(n: string): number {
  let sum = 0
  for (let i = 0; i < n.length; ++i) {
    sum += n.charCodeAt(i)
  }

  for (let i = 0; i < n.length; ++i) {
    sum += n.charCodeAt(i)
  }

  return sum
} // Running time: O(n^2)

// ****************************************************************
// In Big O worst case scenario is most often considered
// Especially in interview problems.
// In the code below, if there is an "E", the code will terminate early
// Therefore it's still O(n)
// ****************************************************************

function sum_char_codes2(n: string): number {
  let sum = 0
  for (let i = 0; i < n.length; ++i) {
    const charCode = n.charCodeAt(i)

    // Capital E
    if (n.charCodeAt(i) === 69) {
      return sum
    }

    sum += charCode
  }

  return sum
} // Running time: O(n)

// ****************************************************************
// Common complexity types
// ****************************************************************
function sum_char_code3(n: string): number {
  let sum = 0
  for (let i = 0; i < n.length; ++i) {
    for (let j = 0; j < n.length; ++j) {
      sum += n.charCodeAt(j)
    }
  }

  return sum
} // Running time: O(n^2)

//
function sum_char_code4(n: string): number {
  let sum = 0
  for (let i = 0; i < n.length; ++i) {
    for (let j = 0; j < n.length; ++j) {
      for (let k = 0; k < n.length; ++k) {
        sum += n.charCodeAt(k)
      }
    }
  }

  return sum
} // Running time: O(n^3)

// O(n log n) = Quicksort

// O(log n) = binary tree

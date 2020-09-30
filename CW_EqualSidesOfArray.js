/*
You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

For example:

Let's say you are given the array {1,2,3,4,3,2,1}: Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

Let's look at another one.
You are given the array {1,100,50,-51,1,1}: Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

Last one:
You are given the array {20,10,-80,10,10,15,35}
At index 0 the left side is {}
The right side is {10,-80,10,10,15,35}
They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
Index 0 is the place where the left side and right side are equal.

Note: Please remember that in most programming/scripting languages the index of an array starts at 0.

Input:
An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

Output:
The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

Note:
If you are given an array with multiple answers, return the lowest correct index.
*/

function findEvenIndex(arr) {
	// Best Practice method
	// Sliding window method variation
	// Initialize right to be the sum of the entire array
	let left = 0;
	let right = arr.reduce((a, b) => a + b);

	// As we interate through the array,
	//  decrement the right sum and do the check
	// Otherwise, increment the left sum
	for (let i = 0; i < arr.length; i++) {
		right -= arr[i];
		if (left == right) {
			return i;
		}
		left += arr[i];
	}
	return -1;

	/* My attempt
	//Sliding window method:
	//  At start, i = 0; leftSum = 0 and we need to check that the sum of indices 1...arr.length = 0
	//  Start the right window boudary to 1

	let leftSum = 0;
	let rightIndex = 1;
	for (let i = 0; i < arr.length; i++) {
		// Initialize rightSum and increment until we are at the end of the array
		let rightSum = 0;
		while (rightIndex < arr.length) {
			rightSum += arr[rightIndex++];
		}

		if (leftSum == rightSum) {
			return i;
		}

		// If the sum of the left and right values !=, then we increment where
		//  the right boundary starts and increment the left sum
		rightIndex = i + 2;
		leftSum += arr[i];
	}

	// States we did not find any index such that values to the left and right ==
    return -1;
    */
}

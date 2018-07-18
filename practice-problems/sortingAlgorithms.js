// BUBBLE SORT -- unstable sort
/*
1. Iterate through the length of the array for outer loop
2. Iterate through lenght of array - 1 for inner loop -- works with length or length - 1 but we dont need to go through the whole array because the last element should be the largest
3. Check if current j is greater than j + 1
4. If it is, swap the elements -- continue til reach end of array

O(n^2) time complexity

1. Start from the first element in the array and compare with the element right next to it on the right
2. If the first element is greater than the second, swap their positions
3. If not, we compare the second element with the third element and so on
4. At end of first pass, we will have the highest number at the end of the array
5. Continue for each element til each one 'bubbles' up to its sorted position
*/
function bubbleSort(array){
	for(var i = 0; i < array.length; i++){
		for(var j = 0; j < array.length - 1; j++){
			if(array[j] > array[j + 1]){
				let temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
			}
		}
	}
	return array;
}


// Bubble Sort sucks but both of these solutions below are a bit more optimized. If we already have a sorted algorithm, we can pass a 'changed' variable to check whether or not any elements were swapped in the iniital pass. If they weren't swapped, we know the array is sorted and we can return the array -- no need to continue looping. We can also decrement the amount of the array we have left to check because if we swap during any pass, we know the largest number will be at the end, then the second to the last, third to last etc. there's no need to loop through the end when the last elements will always be larger
function bubbleSort(arr){
	let i, j, temp, limit = arr.length, changed = false;
	while(limit--){
		for(i = 0, j = 1; i < limit; i++, j++){
			if(arr[i] > arr[j]){
				changed = true;
				temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
		if(!changed){
			return arr;
		}
	}
	return arr;
}

function bubbleSort(arr){
	let limit = arr.length - 1, changed = false, i, j, temp;
	for(i = 0; i < limit; i++){
		for(j = 0; j < limit; j++){
			if(arr[j] > arr[j + 1]){
				changed = true;
				temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
		if(!changed){
			return arr;
		}
		limit--;
	}
	return arr;
}
arr = [1,2,3]
arr = [5,3,2,9,6]





// SELECTION SORT -- unstable sort
/* Loop through the entire array and find one minimum value at a time and use that to build up a sorted array
You'll be using multiple pointers in order to keep track of your current element, the current minimum value and sorted portion of the array

1. Start with the first element in the array and initially set it equal to the minimum index
2. Compare the value at minIdx with each subsequent element in the array
3. If you come across a smaller value than the current value at minIdx, update minIdx to the index of the lower value
4. Once you've iterated through the entire array, swap the values
5. At this point, the value on the left you swapped with will be sorted and the reminainig elements will still need to be traversed
6. Return array once you've completed the pass

*/
function selectionSort(arr){
	for(let i = 0; i < arr.length; i++){
		let minIdx = i;
		for(let j = i + 1; j < arr.length; j++){
			if(arr[j] < arr[minIdx]){
				minIdx = j;
			}
		}
		[arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
	}
	return arr;
}
selectionSort([23, 42, 4, 16, 8, 15]);





/* INSERTION SORT -- stable sort
1 .Doesn't swap any values in the array which would lead to an unstable sort.
2. Instead, Insertion sort picks out individual items and inserts them into the correct spot in the array
3. This algorithm works by separating an array into two sections -- a sorted and unsorted list
4. Initially, the entire array is unsorted and the sorted section is empty
5. We need to add a value to the sorted section -- we use the first item in the array because a list of 1 item is sorted
6. THEN, for each item in the unsorted section we:

PROCESS:
Get a list of unsorted numbers
Set a marker for the sorted section after the first number in the list
Repeat steps 4 through 6 until the unsorted section is empty
   Select the first unsorted number
   Swap this number to the left until it arrives at the correct sorted position
   Advance the marker to the right one position
Stop


Walkthrough:
1. Start with the first element in the array as the sorted section arr[0] -- > 5
2. Compare the next value 1 to the sorted element -- if it's less than, move that element over to the left
3. Now, we have two elements in the sorted list [1, 5, 8, 4, 3]
4. Now, compare 8 to 5 -- it's greater so we don't do anything
5. Now, 4 is less than 5 so we move it over --> 1, 4, 5, 8, 3
6. Now, we compare 3 and it's less than so we move over --> 1,3,4,5,8
*/
function insertionSort(arr){
	for(let i = 0; i < arr.length; i++){
		let temp = arr[i];
		let j = i - 1;
		while(j >= 0 && arr[j] > temp){
			arr[j + 1] = arr[j];
			j--;
		}
		arr[j + 1] = temp;
	}
	return arr;
}
arr = [5, 1, 8, 4, 3];
[5, 1, 8, 4, 3];
[1, 5, 8, 4, 3];
[1, 5, 4, 8, 3];
[1, 4, 5, 8, 3];
[1, 4, 5, 3, 8];
[1, 4, 3, 5, 8];
[1, 3, 4, 5, 8];

// MULTIPLE POINTERS

/* Mutiple pointers example 1
A number of problems involving arrays, lists, and strings require us to iterate with more than one pointer. Sometimes pointers may travel at different speeds and may start from a different initial position. An algorithm that requires one to swap a bunch of values may require multiple pointers

Merge two sorted arrays into one array
input: [1,3,5], [2,4,6,8,10];
output: [1, 2, 3, 4, 5, 6, 8, 10];
*/
function mergeTwoSortedArrays(leftArr, rightArr){
	var result = [], left = 0, right = 0;
	while(left < leftArr.length && right < rightArr.length){
		if(leftArr[left] < rightArr[right]){
			result.push(leftArr[left]);
			left++;
		} else {
			result.push(rightArr[right]);
			right++;
		}
	}
	return result.concat(leftArr.slice(left).concat(rightArr.slice(right)));
}
mergeTwoSortedArrays([1,3,5], [2,4,6,8,10]);





// MERGE SORT
// Recursive solution
/* Idea behing Merge Sort:
- divide and conquer type of algorithm
- recursively break down the array into smaller and smaller pieces each time until you only have one element in each array
- then, compare these single element arrays to each other and merge them together in ascending order
*/
function mergeSort(array){
	var middle, left, right, result = [], leftCount = 0, rightCount = 0;

	if(array.length < 2){
		return array;
	}

	middle = Math.floor(array.length / 2);
	left = mergeSort(array.slice(0, middle));
	right = mergeSort(array.slice(middle));

	while(leftCount < left.length || rightCount < right.length){
		if(left[leftCount] < right[rightCount] || rightCount >= right.length){
			result.push(left[leftCount]);
			leftCount++;
		} else {
			result.push(right[rightCount]);
			rightCount++;
		}
	}
	return result;
}

// Recursive solution
function mergeSort(arr){
	var result = [], leftCount = 0, rightCount = 0, left, middle, right;

	if(arr.length < 2){
		return arr;
	}

	middle = Math.floor(arr.length / 2);
	left = mergeSort(arr.slice(0, middle));
	right = mergeSort(arr.slice(middle));

	while(leftCount < left.length && rightCount < right.length){
		if(left[leftCount] < right[rightCount]){
			result.push(left[leftCount]);
			leftCount++;
		} else {
			result.push(right[rightCount]);
			rightCount++;
		}
	}
	return result.concat(left.slice(leftCount).concat(right.slice(rightCount)));
}

// Recursive solution
function mergeSortRecursive(arr){
	var left, middle, right;

	if(arr.length < 2){
		return arr;
	}

	middle = Math.floor(arr.length / 2);
	left = arr.slice(0, middle);
	right = arr.slice(middle);

	return merge(mergeSort(left), mergeSort(right));
}
function merge(arr1, arr2){
	var result = [], leftCount = 0, rightCount = 0;

	while(leftCount < arr1.length && rightCount < arr2.length){
		if(arr1[leftCount] < arr2[rightCount]){
			result.push(arr1[leftCount]);
			leftCount++;
		} else {
			result.push(arr2[rightCount]);
			rightCount++;
		}
	}
	return result.concat(arr1.slice(leftCount).concat(arr2.slice(rightCount)));
}
mergeSort([3,27,38,43,9, 10, 82]);

// Iterative solution
function mergeSortIterative(arr){
	var work = [];
	if(arr.length < 2){
		return arr;
	}

	for(var i = 0; i < arr.length; i++){
		work.push([arr[i]]);
	}

	while(work.length > 1){
		left = work.shift();
		right = work.shift();
		work.push(merge(left, right));
	}

	return work[0];
}





/* QUICK SORT
basic solution for quickSort algorithm
1. divide and conquer algorithm -- this solution chooses a pivot value, then iterates through the array pushing all elements less than the pivot value into the lesser array and all values greater than the pivot value into the greater array
2. it then rcursively calls the quickSort function on the less side and greater side
3. once the stack completes for each of those sides, the lesser array will be sorted as well as the greater side
4. we then add these two arrays back together
*/
function quickSort(arr){
	var pivot = arr[arr.length - 1], lesser = [], greater = [];

	if(arr.length < 2){
		return arr;
	}

	for(var i = 0; i < arr.length - 1; i++){
		if(arr[i] < pivot){
			lesser.push(arr[i]);
		} else {
			greater.push(arr[i]);
		}
	}

	return quickSort(lesser).concat(pivot).concat(quickSort(greater));
}

quickSort([4,2,6,5,1,3]);
/*
Step 1:
arr = [4,2,6,5,1,3]
pivot = 3
at end of initial call to quickSort with the initial array, we get this:
lesser = [2, 1];
greater = [4,6,5];

Step 2:
then, the quickSort recursively calls itself on the lesser side. We then get:
arr = [2, 1]
pivot = 1
lesser = [];
greater = [2];

Step 3:
at this point, the recursive call to the initial quickSort(lesser) returns and can fall off the stack:
lesser + pivot + greater
[].concat(1).concat([2]) --> [1, 2]
this sorted array is returned to the initial quickSort call waiting for the greater side to be sorted so then it can add these two arrays together

Step 4:
add the pivot value since we know the lesser side is not sorted
lesser + pivot + greater
[1, 2].concat(3).concat(quickSort(greater)) --> [1, 2, 3]
we are still waiting for the greater side to be sorted

Step 5:
quickSort is called on the initial greater array:
arr = [4, 6, 5];
pivot = 5
lesser = [4]
greater = [6]

Step 6:
both sizes of the array are now less than 2 so we can return and add them together:
lesser + pivot + greater
[4].concat(5).concat([6]) --> [4, 5, 6]

Step 7:
now, we have both lesser and greater sides sorted and can add them all together:
lesser + pivot + greater
[1, 2, 3].concat([2]) --> [4, 5, 6]
[1, 2, 3, 4, 5, 6]
*/

// Making use of swap and partition functions
// can pass initial values into quickSort function and will only be set at first call
function swap(arr, a, b){
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function partition(arr, left, right){
    let pivot = arr[right], partitionIndex = left;

    for(var i = left; i < right; i++){
        if(arr[i] < pivot){
            swap(arr, i, partitionIndex);
            partitionIndex++;
        }
    }
    swap(arr, right, partitionIndex);
    return partitionIndex;
}

// rather using the swap function, we can make use of ES6 destructuring assignment which basically does the swapping for you
function partition(arr, left, right){
    let pivot = arr[right], partitionIndex = left;

    for(var i = left; i < right; i++){
        if(arr[i] < pivot){
            [arr[i], arr[partitionIndex]] = [arr[partitionIndex], arr[i]];
            partitionIndex++;
        }
    }
    [arr[right], arr[partitionIndex]] = [arr[partitionIndex], arr[right]];
    return partitionIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1){
    let partitionIndex;
    if(left < right){
        partitionIndex = partition(arr, left, right);
        quickSort(arr, left, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, right);
    }
    return arr;
}


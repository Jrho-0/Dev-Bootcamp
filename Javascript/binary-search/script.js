function binarySearch(array, targetValuePosition) {
    var min = 0;
    var max = array.length - 1;
    while (min <= max) {
        Math.floor ((min + max) / 2);
        
        if (array[mid] === targetValuePosition) {
            return mid;
        } else if (arr[mid] < targetValuePosition) {
            min = mid + 1;
        } else {
            min = mid - 1;
        }
    }

    return -1;


}

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binarySearch(numbers, 7));

// In the else if and else blocks, You should be updating the min or max variables, not returning them immediately.

// You should only return when you find the target value. For narrowing down the search, just update min or max accordingly and continue the loop.
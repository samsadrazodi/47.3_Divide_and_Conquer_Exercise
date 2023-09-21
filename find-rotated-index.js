function findRotatedIndex(arr, num) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === num) {
            return mid;
        }

        // Check which half of the array is sorted and adjust the search accordingly
        if (arr[left] <= arr[mid]) { // Left half is sorted
            if (arr[left] <= num && num < arr[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else { // Right half is sorted
            if (arr[mid] < num && num <= arr[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1; // If the number is not found
}


module.exports = findRotatedIndex
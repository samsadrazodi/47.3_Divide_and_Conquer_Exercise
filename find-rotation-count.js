function findRotationCount(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        if (arr[left] <= arr[right]) {
            return left; // No rotations, the array is already sorted
        }

        const mid = Math.floor((left + right) / 2);
        const next = (mid + 1) % arr.length; // Calculate the index of the next element

        if (arr[mid] <= arr[next] && arr[mid] <= arr[mid - 1]) {
            return mid; // Found the rotation point
        } else if (arr[mid] <= arr[right]) {
            right = mid - 1; // Search in the left half
        } else {
            left = mid + 1; // Search in the right half
        }
    }

    return -1; // Not found (shouldn't happen for a sorted rotated array)
}


module.exports = findRotationCount
function findFloor(arr, x) {
    let left = 0;
    let right = arr.length - 1;
    let floor = -1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === x) {
            return arr[mid]; // Found an exact match, which is the floor
        } else if (arr[mid] < x) {
            floor = arr[mid]; // Update the potential floor value
            left = mid + 1; // Search in the right half
        } else {
            right = mid - 1; // Search in the left half
        }
    }

    return floor; // Return the floor value found (or -1 if not found)
}

module.exports = findFloor
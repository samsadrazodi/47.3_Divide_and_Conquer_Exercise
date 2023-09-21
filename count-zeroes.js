function countZeroes(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (arr[mid] === 1) {
            left = mid + 1;
        }
        else {
            if (mid === 0 || arr[mid - 1] === 1) {
                return arr.length - mid;
            }
            right = mid - 1;
        }
    }

    // If there are no 0s in the array, return 0.
    return 0;
}

module.exports = countZeroes
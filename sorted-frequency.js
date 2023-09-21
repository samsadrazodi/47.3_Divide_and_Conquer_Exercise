function sortedFrequency(arr, num) {
    function findFirst(arr, num) {
        let left = 0;
        let right = arr.length - 1;
        let result = -1;
    
        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);
    
            if (arr[mid] === num) {
                result = mid;
                right = mid - 1; // Continue searching in the left half
            } else if (arr[mid] < num) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    
        return result;
    }


    function findLast(arr, num) {
        let left = 0;
        let right = arr.length - 1;
        let result = -1;

        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);

            if (arr[mid] === num) {
                result = mid;
                left = mid + 1; // Continue searching in the right half
            } else if (arr[mid] < num) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return result;
    }

    const firstOccurrence = findFirst(arr, num);
    const lastOccurrence = findLast(arr, num);

    if (firstOccurrence !== -1 && lastOccurrence !== -1) {
        return lastOccurrence - firstOccurrence + 1;
    } else {
        return -1;
    }
}





module.exports = sortedFrequency
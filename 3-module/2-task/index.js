function filterRange(arr, a, b) {
    result = []
    for (i = 0; i < arr.length; i++) {
        if (arr[i] >= a && arr[i] <= b) {
            result.push(arr[i])
        }
    }
    return result
}
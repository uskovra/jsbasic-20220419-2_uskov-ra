//const { ConsoleReporter } = require("jasmine")

function camelize(str) {
    result = []
    arr = str.split('-')

    for (i = 0; i < arr.length; i++) {
        if (i == 0) {
            result.push(arr[i])
        } else {
            result.push(arr[i][0].toUpperCase() + arr[i].slice(1))
        }

    }
    return result.join('')
}
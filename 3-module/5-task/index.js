function getMinMax(str) {
    let arr = str.split(' ').filter(Number)
    return { min: Math.min.apply(null, arr), max: Math.max.apply(null, arr) }
}
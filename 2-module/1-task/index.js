function sumSalary(salaries) {
    result = 0
    for (key in salaries) {
        if (Number.isFinite(salaries[key])) {
            result += salaries[key]
        }
    }
    return result
}
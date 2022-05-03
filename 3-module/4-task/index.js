function showSalary(users, age) {
    result = []
    for (i = 0; i < users.length; i++) {
        if (users[i].age <= age) {
            result.push(`${users[i].name}, ${users[i].balance}`)
        }
    }
    return result.join('\n')
}
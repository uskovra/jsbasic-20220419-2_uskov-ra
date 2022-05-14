function makeFriendsList(friends) {

    let ulTag = document.createElement('ul')

    for (let elem of friends) {
        let liTag = document.createElement('li')
        let liContent = document.createTextNode(`${elem.firstName} ${elem.lastName}`)
        liTag.appendChild(liContent)
        ulTag.appendChild(liTag)

    }
    return ulTag
}

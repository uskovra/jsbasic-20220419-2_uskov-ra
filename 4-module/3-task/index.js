function highlight(table) {

    trs = table.querySelectorAll('tr')

    for (let elem of trs) {

        //почему-то не дает сделать переменные и падает в ошибку - 'TypeError: Assignment to constant variable'
        //data = elem.children[3].dataset.available
        //gender = elem.children[2].textContent
        //age = Number(elem.children[1].textContent)

        if (elem.children[3].dataset.available === 'true') { elem.classList.add('available') }
        if (elem.children[3].dataset.available === 'false') { elem.classList.add('unavailable') }
        if (elem.children[3].dataset.available === undefined) { elem.hidden = true }

        if (elem.children[2].textContent === 'm') { elem.classList.add('male') }
        if (elem.children[2].textContent === 'f') { elem.classList.add('female') }

        if (Number(elem.children[1].textContent) < 18) { elem.style.textDecoration = 'line-through' }

    }

}

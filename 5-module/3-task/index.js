function initCarousel() {
    let next = document.querySelector('.carousel__arrow_right')
    let prev = document.querySelector('.carousel__arrow_left')

    let list = document.querySelector('.carousel__inner')
    let listElems = list.querySelectorAll('.carousel__slide')

    let width = list.offsetWidth // 988
    let position = 0
    let count = 1

    if (count == 1) { prev.style.display = 'none' }


    next.addEventListener('click', () => {
        count += 1

        if (count > 1) { prev.style.display = '' }
        if (count == 4) { next.style.display = 'none' }

        position -= width
        position = Math.max(position, -width * (listElems.length - 1))

        list.style.transform = `translateX(${position}px)`;
    })

    prev.addEventListener('click', () => {
        count -= 1

        if (count < 4) { next.style.display = '' }
        if (count == 1) { prev.style.display = 'none' }

        position += width
        position = Math.min(position, 0)

        list.style.transform = `translateX(${position}px)`;
    })

}

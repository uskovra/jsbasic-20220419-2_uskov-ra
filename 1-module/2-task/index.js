/**
 * Эту функцию трогать не нужно
 */
function print(text) {
    console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
    if (name === null) { return false } else if (name.indexOf(' ') >= 0 | name.length < 4) { return false } else { return true }




    //if (name.indexOf(' ') < 0 & name.length >= 4 & name !== null) { return true } else { return false }
}

function sayHello() {
    let userName = prompt('Введите ваше имя');

    if (isValid(userName)) {
        print(`Welcome back, ${userName}!`);
    } else {
        print('Некорректное имя');
    }
}
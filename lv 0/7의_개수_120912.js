// 2022-12-27

const solution = array => {
    return array.join('').split('').filter(el => +el === 7).length
}

const another_solution = array => {
    return array.join('').split('7').length - 1
}
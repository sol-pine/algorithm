// 2022-12-26

const solution = order => {
    return order
        .toString()
        .split('')
        .filter(el => parseInt(el) !== 0 && parseInt(el) % 3 === 0)
        .length
}
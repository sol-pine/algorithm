// 2022-12-25

const solution = n => {
    return n
        .toString()
        .split('')
        .reduce((acc, cur) => acc + parseInt(cur), 0)
}
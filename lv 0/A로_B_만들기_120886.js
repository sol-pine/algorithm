// 2022-12-27

const solution = (before, after) => {
    return before.split('').sort().join('') === after.split('').sort().join('') ? 1 : 0
}